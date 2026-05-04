import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import LegacyScreen from './LegacyScreen.jsx';
import HourlyProductionChart from './HourlyProductionChart.jsx';

/**
 * Wrapper da tela /prod-cockpit:
 *   - Renderiza o cockpit legacy (LegacyScreen 'prod-cockpit') sem alteração.
 *   - Após o legacy montar no DOM, injeta um container <div> logo APÓS o
 *     bloco de KPIs (.g4.mb14) e renderiza um gráfico React (createPortal)
 *     dentro dele — garantindo que o React continua dono do componente
 *     mesmo morando "dentro" do HTML legado.
 *
 * Vantagens dessa abordagem:
 *   - Zero edição no HTML legacy (não precisa rodar extract.py).
 *   - O gráfico é 100% React: re-renderiza, hot-reload e a11y normais.
 *   - Se o legacy mudar de estrutura, fica fácil ajustar só o seletor.
 */

// Dataset fictício do turno A (06:00–14:00).
// Total realizado até 09:42 = 980 + 1.420 + 1.380 + 1.040 = 4.820 un
// (bate com o KPI "Produção Real: 4.820 un" do mockup legacy).
const DADOS_DEMO = {
  sku: 'Creme Hidratante 150g',
  metaHora: 1350,
  horaAtual: '09',
  horas: [
    { hora: '06', produzido: 980,  status: 'done' },   // 73% (setup + 1ª hora)
    { hora: '07', produzido: 1420, status: 'done' },   // 105%
    { hora: '08', produzido: 1380, status: 'done' },   // 102%
    { hora: '09', produzido: 1040, status: 'done' },   // 77% (microparada de 7m)
    { hora: '10', produzido: 0,    status: 'now' },    // hora corrente em curso
    { hora: '11', produzido: 0,    status: 'future' },
    { hora: '12', produzido: 0,    status: 'future' },
    { hora: '13', produzido: 0,    status: 'future' },
  ],
};

export default function ProdCockpitScreen() {
  const [chartHost, setChartHost] = useState(null);
  const observerRef = useRef(null);

  useEffect(() => {
    /**
     * Encontra o bloco de KPIs (.g4.mb14) DENTRO da tela ativa do cockpit
     * e insere um host vazio logo após. Como o LegacyScreen monta o HTML
     * num innerHTML (síncrono no React), o nó já está disponível no
     * próximo tick — usamos um pequeno polling/MutationObserver pra
     * sobreviver a remontagens.
     */
    const HOST_ID = 'react-cockpit-chart-host';

    const tryAttach = () => {
      const screen = document.getElementById('screen-prod-cockpit');
      if (!screen || !screen.classList.contains('active')) return false;
      const kpis = screen.querySelector('.g4.mb14');
      if (!kpis) return false;
      // Já existe? Reaproveita.
      let host = document.getElementById(HOST_ID);
      if (!host) {
        host = document.createElement('div');
        host.id = HOST_ID;
        kpis.insertAdjacentElement('afterend', host);
      }
      setChartHost(host);
      return true;
    };

    if (tryAttach()) return;

    // Polling curto até o legacy montar (até 30 tentativas × 50ms = 1.5s)
    let tries = 0;
    const interval = setInterval(() => {
      if (tryAttach() || ++tries > 30) clearInterval(interval);
    }, 50);

    // Observa mudanças no body — se o legacy for desmontado/remontado, refaz
    observerRef.current = new MutationObserver(() => {
      const host = document.getElementById(HOST_ID);
      const screen = document.getElementById('screen-prod-cockpit');
      if (!host && screen?.classList.contains('active')) tryAttach();
    });
    observerRef.current.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearInterval(interval);
      observerRef.current?.disconnect();
      const host = document.getElementById(HOST_ID);
      if (host && host.parentNode) host.parentNode.removeChild(host);
      setChartHost(null);
    };
  }, []);

  return (
    <>
      <LegacyScreen id="prod-cockpit" />
      {chartHost && createPortal(<HourlyProductionChart {...DADOS_DEMO} />, chartHost)}
    </>
  );
}
