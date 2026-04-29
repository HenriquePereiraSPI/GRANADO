import { useEffect, useRef } from 'react';
import { SCREENS } from '../legacy/screens.js';
import { emitScreenMounted } from '../lib/legacy-bridge.js';

/**
 * Renderiza o conteudo de uma tela do mockup original via dangerouslySetInnerHTML.
 *
 * Por que? O HTML original tem ~10k linhas com inline event handlers que chamam
 * funcoes globais (nav(), openModal(), sinDetalhe(), toggleVal(), etc.). Manter
 * o conteudo como HTML preservado garante 100% de fidelidade visual e funcional
 * com o JS legado de scripts.js.
 *
 * Migracao gradual:
 *   - Pra converter uma tela em JSX puro, substitua o uso de <LegacyScreen id="X" />
 *     pelo componente novo na rota correspondente em App.jsx.
 *   - O wrapper preserva o `id="screen-X"` e a classe `screen active`, entao todos
 *     os seletores legados continuam funcionando.
 */
export default function LegacyScreen({ id }) {
  const ref = useRef(null);
  const html = SCREENS[id];

  useEffect(() => {
    if (!ref.current) return;
    // Re-executar <script> embutidos. Como `dangerouslySetInnerHTML` insere o HTML
    // mas NAO executa <script>, criamos novos elementos e os substituimos.
    // Aproveitamos pra trocar `addEventListener('DOMContentLoaded', fn)` por
    // `setTimeout(fn, 0)` — caso contrario, esses listeners nunca disparam (o
    // DOMContentLoaded ja passou ha muito tempo quando a tela e montada).
    ref.current.querySelectorAll('script').forEach((oldScript) => {
      const s = document.createElement('script');
      for (const a of oldScript.attributes) s.setAttribute(a.name, a.value);
      s.textContent = (oldScript.textContent || '').replace(
        /document\.addEventListener\(\s*['"]DOMContentLoaded['"]\s*,\s*/g,
        'setTimeout(',
      );
      oldScript.replaceWith(s);
    });

    // Notificar handlers legados (ex.: redesenhar canvas CEP, popular Andon, sinotico SVG).
    emitScreenMounted(id);
  }, [id]);

  if (!html) {
    return (
      <div className="screen active" style={{ padding: 40 }}>
        <div className="page-header">
          <div>
            <div className="ph-eyebrow">404</div>
            <h1 className="ph-title">Tela nao encontrada</h1>
          </div>
        </div>
        <div style={{ background: 'var(--surface)', padding: 20, borderRadius: 8 }}>
          Tela <code>{id}</code> nao foi extraida do HTML original. Verifique
          <code> src/legacy/manifest.json</code>.
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="screen active"
      id={`screen-${id}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
