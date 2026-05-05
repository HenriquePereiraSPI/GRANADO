import { useMemo } from 'react';

/**
 * Componente reutilizavel de etiqueta de produto / lote, no estilo do que
 * a impressora Zebra produz no chao de fabrica. Inclui um codigo de barras
 * SVG inline (sem dependencia externa) e um cabecalho personalizavel.
 *
 * Uso tipico:
 *   <EtiquetaImpressa
 *     tipo="GRANEL"
 *     codigo="S0815B"
 *     fields={[
 *       ['CÓDIGO',     'S0815B'],
 *       ['PRODUTO',    'TRANSP GRANADO GLICERINA'],
 *       ['LOTE GRANEL','2551/2026'],
 *     ]}
 *     barcodeValue="S0815B-2551-2026"
 *     barcodeFormat="Code 128"
 *   />
 */
export default function EtiquetaImpressa({
  tipo = 'ETIQUETA',
  codigo,
  fields = [],
  barcodeValue,
  barcodeFormat = 'Code 128',
  largura,
  cor = 'verde',
}) {
  const COR_BORDA = {
    verde:  'var(--verde)',
    ouro:   'var(--ouro)',
    inf:    'var(--inf)',
    per:    'var(--per)',
  }[cor] || 'var(--verde)';

  const COR_BG = {
    verde:  'var(--verde-dim)',
    ouro:   'var(--ouro-dim)',
    inf:    'var(--inf-p)',
    per:    'var(--per-p)',
  }[cor] || 'var(--verde-dim)';

  return (
    <div
      style={{
        background: '#FFFFFF',
        border: `2px solid ${COR_BORDA}`,
        borderRadius: 6,
        padding: 0,
        fontFamily: 'var(--font-m)',
        fontSize: 11,
        lineHeight: 1.55,
        color: '#1A2A1F',
        maxWidth: largura || '100%',
        boxShadow: 'var(--sh)',
        overflow: 'hidden',
      }}
    >
      {/* Cabeçalho da etiqueta */}
      <div
        style={{
          background: COR_BORDA,
          color: '#fff',
          padding: '6px 12px',
          fontSize: 10,
          fontWeight: 900,
          letterSpacing: '.18em',
          textTransform: 'uppercase',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span>● {tipo}</span>
        {codigo && <span style={{ fontFamily: 'var(--font-m)' }}>{codigo}</span>}
      </div>

      {/* Corpo: campos */}
      {fields.length > 0 && (
        <div style={{ padding: '10px 12px', background: COR_BG }}>
          {fields.map(([label, valor], i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: 8,
                padding: '2px 0',
                borderBottom: i < fields.length - 1 ? '1px dashed rgba(0,0,0,.08)' : 'none',
              }}
            >
              <span style={{ fontSize: 9, fontWeight: 900, letterSpacing: '.1em', textTransform: 'uppercase', color: '#5A7A64', alignSelf: 'center' }}>
                {label}
              </span>
              <span style={{ fontFamily: 'var(--font-m)', fontWeight: 700, textAlign: 'right' }}>{valor}</span>
            </div>
          ))}
        </div>
      )}

      {/* Código de barras */}
      {barcodeValue && (
        <div
          style={{
            background: '#FFFFFF',
            padding: '12px 16px 8px',
            borderTop: `1px dashed ${COR_BORDA}`,
            textAlign: 'center',
          }}
        >
          <Barcode value={barcodeValue} />
          <div style={{ fontSize: 8, color: '#7A8A7A', marginTop: 4, letterSpacing: '.06em' }}>
            {barcodeFormat}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Renderiza um codigo de barras 1D em SVG. As barras sao geradas
 * de forma DETERMINISTICA a partir do `value` (mesmo input gera o
 * mesmo padrao visual), suficiente para mockup. Em producao real,
 * trocar por uma lib que gere Code 128 / EAN-13 conforme o padrao.
 */
export function Barcode({ value, width = 320, height = 56, showText = true }) {
  const bars = useMemo(() => {
    const result = [];
    if (!value) return result;
    let seed = 0;
    for (let i = 0; i < value.length; i++) {
      seed = (seed * 33 + value.charCodeAt(i)) >>> 0;
    }
    let rng = seed || 1;
    function next() {
      rng = (rng * 1103515245 + 12345) >>> 0;
      return rng;
    }
    let x = 6;
    let isBlack = true;
    while (x < width - 6) {
      const w = 1 + (next() % 4);
      result.push({ x, w, isBlack });
      x += w;
      isBlack = !isBlack;
    }
    return result;
  }, [value, width]);

  const totalH = height + (showText ? 14 : 0);
  return (
    <svg
      viewBox={`0 0 ${width} ${totalH}`}
      width="100%"
      height={totalH}
      preserveAspectRatio="xMidYMid meet"
      style={{ display: 'block' }}
    >
      <rect x="0" y="0" width={width} height={height} fill="#FFFFFF" />
      {bars.filter((b) => b.isBlack).map((b, i) => (
        <rect key={i} x={b.x} y="2" width={b.w} height={height - 4} fill="#000" />
      ))}
      {showText && (
        <text
          x={width / 2}
          y={height + 11}
          textAnchor="middle"
          fontSize="10"
          fontFamily="var(--font-m), monospace"
          fontWeight="700"
          fill="#1A2A1F"
          letterSpacing="0.04em"
        >
          {value}
        </text>
      )}
    </svg>
  );
}
