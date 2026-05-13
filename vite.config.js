import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { execSync } from 'node:child_process';

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

export default defineConfig(() => {
  const g = gitInfo();
  return {
    plugins: [react()],
    server: {
      port: 5173,
      open: true,
    },
    define: {
      __APP_VERSION__: JSON.stringify(g),
    },
  };
});
