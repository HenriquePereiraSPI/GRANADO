import '../styles/font-demo.css';

/**
 * Tela /demo-fontes — comparacao de fontes de TEXTO.
 * Mostra o mesmo conteudo em Geist, Poppins e Inter, lado a lado,
 * para escolher a fonte do app. Cada coluna forca a fonte via
 * fontFamily inline (inclusive nos numeros, para comparar os digitos).
 */

const FONTS = [
  { nome: 'Geist',   fam: "'Geist', sans-serif",   nota: 'Vercel · OFL · atual em teste' },
  { nome: 'Poppins', fam: "'Poppins', sans-serif", nota: 'Google · OFL · geometrica' },
  { nome: 'Inter',   fam: "'Inter', sans-serif",   nota: 'rsms · OFL · neo-grotesca' },
];

const PESOS = [
  { w: 300, lbl: 'Light 300' },
  { w: 400, lbl: 'Regular 400' },
  { w: 500, lbl: 'Medium 500' },
  { w: 600, lbl: 'SemiBold 600' },
  { w: 700, lbl: 'Bold 700' },
];

const lbl = {
  fontFamily: 'var(--font-b)', fontSize: 10, fontWeight: 700,
  textTransform: 'uppercase', letterSpacing: '.06em',
  color: 'var(--text3)', marginBottom: 6,
};

function Coluna({ nome, fam, nota }) {
  return (
    <div className="card" style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* Cabecalho da coluna */}
      <div>
        <div style={{ fontFamily: fam, fontSize: 30, fontWeight: 700, color: 'var(--verde-esc)', lineHeight: 1 }}>
          {nome}
        </div>
        <div style={{ fontFamily: 'var(--font-b)', fontSize: 10, color: 'var(--text3)', marginTop: 4 }}>
          {nota}
        </div>
      </div>

      {/* Titulo + paragrafo */}
      <div>
        <div style={lbl}>Titulo &amp; texto</div>
        <div style={{ fontFamily: fam, fontSize: 22, fontWeight: 700, color: 'var(--text)', lineHeight: 1.2 }}>
          Casa Granado Pharmácias
        </div>
        <p style={{ fontFamily: fam, fontSize: 13, color: 'var(--text2)', lineHeight: 1.6, marginTop: 6 }}>
          Ordem de produção liberada para fabricação. Reconciliação técnica
          concluída — pesagem e fração conferem com a especificação.
        </p>
      </div>

      {/* Pesos */}
      <div>
        <div style={lbl}>Pesos</div>
        {PESOS.map((p) => (
          <div key={p.w} style={{ fontFamily: fam, fontWeight: p.w, fontSize: 15, color: 'var(--text)', lineHeight: 1.5 }}>
            {p.lbl} — Loção Hidratante
          </div>
        ))}
      </div>

      {/* Numeros (na propria fonte, para comparar os digitos) */}
      <div>
        <div style={lbl}>Números na fonte</div>
        <div style={{ fontFamily: fam, fontSize: 26, fontWeight: 700, color: 'var(--verde)' }}>
          1234567890
        </div>
        <div style={{ fontFamily: fam, fontSize: 14, color: 'var(--text2)', marginTop: 4 }}>
          OP-2026-0416 · 412,500 kg · 99,72% · 06:18
        </div>
      </div>

      {/* Acentos / caixa */}
      <div>
        <div style={lbl}>Acentos &amp; caixa</div>
        <div style={{ fontFamily: fam, fontSize: 16, color: 'var(--text)' }}>
           áàâãéêíóôõúç · ÁÉÍÓÚÃÕÇ
        </div>
        <div style={{ fontFamily: fam, fontSize: 16, color: 'var(--text2)', marginTop: 2 }}>
          Il1 O0 · rn m · {'{}'} () [] / \ &amp;
        </div>
      </div>
    </div>
  );
}

export default function FontCompareScreen() {
  return (
    <div className="screen active" style={{ display: 'block' }}>
      <div className="page-header">
        <div>
          <div className="ph-eyebrow">Demo · Tipografia</div>
          <div className="ph-title">Comparação de Fontes — Geist · Poppins · Inter</div>
        </div>
      </div>

      <div className="card mb14" style={{ padding: 16 }}>
        <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.6, margin: 0 }}>
          As três colunas mostram <strong>o mesmo conteúdo</strong> em cada fonte
          (inclusive os números, aqui renderizados na própria fonte para comparar
          os dígitos). No app, o texto usa a fonte escolhida e os números seguem em
          Arial. Compare títulos, corpo de texto, pesos, dígitos e acentos do português.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
        {FONTS.map((f) => (
          <Coluna key={f.nome} {...f} />
        ))}
      </div>
    </div>
  );
}
