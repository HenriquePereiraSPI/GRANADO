import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { execSync } from 'node:child_process';
import { watch, statSync } from 'node:fs';
import path from 'node:path';

// Coleta info do git no momento da inicialização do dev server / build.
// Falha silenciosamente em ambientes sem git (CI sem .git, etc).
function gitInfo() {
  try {
    const hash   = execSync('git rev-parse --short HEAD',          { stdio: ['ignore','pipe','ignore'] }).toString().trim();
    const branch = execSync('git rev-parse --abbrev-ref HEAD',     { stdio: ['ignore','pipe','ignore'] }).toString().trim();
    const date   = execSync('git log -1 --format=%cd --date=short',{ stdio: ['ignore','pipe','ignore'] }).toString().trim();
    const dirty  = execSync('git status --porcelain',              { stdio: ['ignore','pipe','ignore'] }).toString().trim().length > 0;
    return { hash, branch, date, dirty };
  } catch {
    return { hash: 'dev', branch: 'local', date: '', dirty: false };
  }
}

/**
 * Plugin que monitora a pasta .git e força server.restart() quando detecta
 * mudança de commit ou de branch. Sem isso, o `__APP_VERSION__` injetado via
 * `define` fica congelado com o hash do momento que o Vite subiu — usuário
 * precisa parar e relançar manualmente após cada commit.
 *
 * Estratégia:
 *  - watch em .git/HEAD     → captura troca de branch
 *  - watch em .git/refs/heads → captura novos commits (HEAD avança)
 *  - debounce de 400ms      → evita restart duplicado quando o git atualiza
 *                              vários arquivos em sequência
 */
function gitRefreshPlugin() {
  return {
    name: 'git-info-refresh',
    apply: 'serve', // só durante `vite dev`, não no build
    configureServer(server) {
      const root = server.config.root;
      const gitDir   = path.join(root, '.git');
      const headFile = path.join(gitDir, 'HEAD');
      const refsDir  = path.join(gitDir, 'refs', 'heads');

      // Confirma que o repo existe
      try { statSync(headFile); } catch { return; }

      let restartTimer = null;
      const debouncedRestart = (reason) => {
        clearTimeout(restartTimer);
        restartTimer = setTimeout(() => {
          server.config.logger.info(
            `\n  \x1b[33m[git-info]\x1b[0m ${reason} — reiniciando Vite para atualizar v…`,
            { clear: false, timestamp: true },
          );
          server.restart();
        }, 400);
      };

      try {
        // .git/HEAD muda quando você troca de branch
        watch(headFile, () => debouncedRestart('HEAD trocou'));
        // .git/refs/heads/* muda em cada commit (o ref do branch avança)
        watch(refsDir, () => debouncedRestart('novo commit detectado'));
        server.config.logger.info(
          `  \x1b[32m[git-info]\x1b[0m monitorando .git/HEAD + refs/heads — reinício automático ativo`,
          { clear: false, timestamp: true },
        );
      } catch (err) {
        server.config.logger.warn(
          `  \x1b[33m[git-info]\x1b[0m não consegui monitorar .git: ${err.message}`,
        );
      }
    },
  };
}

export default defineConfig(() => {
  const g = gitInfo();
  return {
    plugins: [react(), gitRefreshPlugin()],
    server: {
      port: 5173,
      open: true,
    },
    define: {
      __APP_VERSION__: JSON.stringify(g),
    },
  };
});
