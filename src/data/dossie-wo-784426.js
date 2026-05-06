/**
 * Dossie Eletronico de Producao (EBR) — WO 784426 / Lote 2551/2026.
 * Dados extraidos do PDF Dossie_WO_784426_v3.pdf (12 paginas) gerado pelo
 * MES Apriso em 05/05/2026. Cobre todo o ciclo do batch: pesagens →
 * fabricacao → granel → embalagem EAN → embalagem DUN → liberacao final.
 *
 * Esta estrutura alimenta a tela `GenealogiaScreen` que apresenta os dados
 * em forma de cadeia (genealogia) + secoes detalhadas.
 */

export const DOSSIE = {
  wo: '784426',
  lote: '2551/2026',
  lotePA: '262417',
  produto: 'Sabonete Glicerinado Tradicional · Linha',
  granel: 'TRANSP GRANADO GLICERINA',
  codigoProduto: 'S0815B_G',
  codigoGranel: 'S0815B',
  batchSize: '6.000 kg',
  sala: 'MF5_HOMO4',
  inicio: '16/04/2026 15:24:57',
  fim: '16/04/2026 18:38:40',
  validade: '30/04/2029',
  lider: { nome: 'Geisha', chapa: '103415' },
  cqLiberacao: { nome: 'Jessica Costa', data: '17/04/2026 16:45' },
  emitido: '05/05/2026 13:52',
  conformidades: ['CFR 21 Part 11 (FDA)', 'IN 134/2022 (ANVISA)'],

  // ── Cadeia genealogica (nos da arvore visual) ────────────────────────────
  cadeia: [
    {
      id: 'mp',
      titulo: 'Matérias-Primas',
      subtitulo: '7 itens consumidos no lote',
      icone: '🌱',
      cor: 'inf',
      itens: [
        { cod: 'M0042',     desc: 'GLICERINA (VEGETAL)',           qtd: '68,75 kg',     lote: '0314226' },
        { cod: 'M0328',     desc: 'AMARELO QUIMIBLEND TRAD. 128',  qtd: '27,50 kg',     lote: '0126326' },
        { cod: 'M3302B',    desc: 'ESSÊNCIA GLICERINA REF BQ34957',qtd: '82,50 kg',     lote: '0176826' },
        { cod: 'M8020',     desc: 'AÇÚCAR CRISTAL SUPERIOR',       qtd: '952,00 kg',    lote: '0288026' },
        { cod: 'MAP0815B',  desc: 'APARA TRANSP GRANADO GLICERINA',qtd: '161,206 kg',   lote: '1512/2026' },
        { cod: 'APAR0815B', desc: 'APARA TRANSP GRANADO GLICERINA',qtd: '338,794 kg',   lote: '1513/2026' },
        { cod: 'S0800B',    desc: 'MASSA BASE SABONETE VEGETAL',   qtd: '4.418,000 kg', lote: '2270/2026' },
      ],
    },
    {
      id: 'pesagem',
      titulo: 'Pesagem (Sala A)',
      subtitulo: '14/04/2026 · Total 178,75 kg · Toledo PC Link 7',
      icone: '⚖️',
      cor: 'verde',
      itens: [
        {
          cod: 'M0042',  desc: 'GLICERINA (VEGETAL)', qtd: '68,75 kg',
          balanca: 'TOL-A-01', operador: 'Marcelo Brito Ribeiro',
          etqCodigo: 'ETQ-784426-01', etqLote: '0314226', etqHora: '14/04 09:12',
          barcode: 'M0042-0314226-784426-01',
        },
        {
          cod: 'M0328',  desc: 'AMARELO QUIMIBLEND TRAD. 128', qtd: '27,50 kg',
          balanca: 'TOL-A-02', operador: 'Marcelo Brito Ribeiro',
          etqCodigo: 'ETQ-784426-02', etqLote: '0126326', etqHora: '14/04 09:25',
          barcode: 'M0328-0126326-784426-02',
        },
        {
          cod: 'M3302B', desc: 'ESSÊNCIA GLICERINA REF BQ34957', qtd: '82,50 kg',
          balanca: 'TOL-A-03', operador: 'Marcelo Brito Ribeiro',
          etqCodigo: 'ETQ-784426-03', etqLote: '0176826', etqHora: '14/04 09:48',
          barcode: 'M3302B-0176826-784426-03',
        },
      ],
    },
    {
      id: 'fabricacao',
      titulo: 'Fabricação (MF5 · HOMO4)',
      subtitulo: '16/04/2026 · 8 etapas InBatch · Líder: Geisha',
      icone: '🧪',
      cor: 'verde',
      etapas: [
        { codigo: '03.02', nome: 'ADICAO_MB',         inicio: '16/04 15:26:49', fim: '16/04 15:45:05', operador: 'Sistema',                    status: 'OK', params: [{p:'Massa Base S0800B', um:'kg', prev:'4363,70', real:'4418,00'}, {p:'Temperatura', um:'°C', prev:'—', real:'70,92'}, {p:'Velocidade', um:'rpm', prev:'1700', real:'1700'}] },
        { codigo: '03.03', nome: 'ADICAO_APARAS',     inicio: '16/04 15:46:21', fim: '16/04 15:59:17', operador: 'Sistema',                    status: 'OK', params: [{p:'Apara MAP0815B',    um:'kg', prev:'500,00',  real:'500,00'},  {p:'Temperatura', um:'°C', prev:'—', real:'76,70'}] },
        { codigo: '03.04', nome: 'ADICAO_ACUCAR',     inicio: '16/04 15:59:25', fim: '16/04 16:40:25', operador: 'Sistema',                    status: 'OK', params: [{p:'Açúcar M8020',      um:'kg', prev:'957,55',  real:'952,00'},  {p:'Temperatura', um:'°C', prev:'—', real:'68,31'}] },
        { codigo: '03.04', nome: 'ADD_TAMPA · Glicerina', inicio: '16/04 16:40:29', fim: '16/04 16:42:23', operador: 'Sistema',                status: 'OK', params: [{p:'Glicerina M0042',   um:'kg', prev:'68,75',   real:'68,75'},   {p:'Temperatura', um:'°C', prev:'—', real:'68,09'}] },
        { codigo: '03.04', nome: 'ADD_TAMPA · Essência',  inicio: '16/04 16:42:27', fim: '16/04 16:46:07', operador: 'Sistema',                status: 'OK', params: [{p:'Essência M3302B',   um:'kg', prev:'82,50',   real:'82,50'},   {p:'Temperatura', um:'°C', prev:'—', real:'67,87'}] },
        { codigo: '03.04', nome: 'HOMOGENEIZACAO',    inicio: '16/04 16:47:39', fim: '16/04 17:02:57', operador: 'Sistema',                    status: 'OK', params: [{p:'Tempo',              um:'seg', prev:'900',    real:'900'}] },
        { codigo: '03.05/06', nome: 'RECIRC + HOMOGE_FINAL', inicio: '16/04 17:03:11', fim: '16/04 17:30:07', operador: 'Sistema',             status: 'OK', params: [{p:'Velocidade',         um:'rpm', prev:'800',    real:'800'},   {p:'Tempo', um:'seg', prev:'1500', real:'1500'}] },
        { codigo: 'CQ',    nome: 'AMOSTRA + APROVAÇÃO', inicio: '16/04 17:30:07', fim: '16/04 18:35:16', operador: 'Maicon dos Santos Souza Lima', status: 'OK', params: [{p:'Amostra aprovada',  um:'—',  prev:'Sim',    real:'Sim'}] },
      ],
    },
    {
      id: 'granel',
      titulo: 'Granel · S0815B · Lote 2551/2026',
      subtitulo: '6.006 kg · Rendimento 100,10% ✓',
      icone: '🛢️',
      cor: 'ouro',
      rendimento: {
        teorico:  '6.000,000 kg',
        real:     '6.006,000 kg',
        calc:     '100,10%',
        limMin:   '97%',
        limMax:   '103%',
        status:   'DENTRO DO LIMITE',
        rendEmb:  '93,23%',
        ultimoProduto: 'TRANSP GRANADO GLICERINA',
        ultimoLote: '2547/2026',
      },
      etiqueta: {
        codigo:        'S0815B',
        produto:       'TRANSP GRANADO GLICERINA',
        loteGranel:    '2551/2026',
        qtde:          '6.006,000 kg',
        dataPesagem:   '14/04/2026',
        validadePA:    '04/2029',
        inicioFab:     '16/04/2026',
        fimFab:        '16/04/2026',
        prazoEstoque:  '1095 dias',
        nRecipientes:  1,
      },
    },
    {
      id: 'lims-granel',
      titulo: 'LIMS · Granel',
      subtitulo: 'Análise 118.481 · Aprovado · 16/04/2026',
      icone: '🧫',
      cor: 'verde',
      analise: { numero: '118.481', amostra: '136.158', data: '16/04/2026', analista: 'Rcafé', parecer: 'Aprovado' },
      ensaios: [
        { ensaio: 'Aspecto',                 esp: 'Conforme',     resultado: 'Conforme', status: 'Conforme' },
        { ensaio: 'Cor',                     esp: 'Conforme',     resultado: 'Conforme', status: 'Conforme' },
        { ensaio: 'Odor',                    esp: 'Conforme',     resultado: 'Conforme', status: 'Conforme' },
        { ensaio: 'pH',                      esp: '8,0 – 11,5',   resultado: '10,7',     status: 'Conforme' },
        { ensaio: 'Voláteis',                esp: '30 – 40 %',    resultado: '32 %',     status: 'Conforme' },
        { ensaio: 'Umidade',                 esp: '20 – 30 %',    resultado: '22 %',     status: 'Conforme' },
        { ensaio: 'Teor de NaOH',            esp: '≤ 0,4 %',      resultado: '0,1 %',    status: 'Conforme' },
      ],
      memorias: [
        { ensaio: 'Voláteis', equipamento: 'Medidor de Umidade IV2500', serie: '23092025001009', detalhes: 'T 175°C · 3 min · Pi 1,087 g · Pf 0,735 g → 32,4%', assinatura: 'Rcafé · 16/04/2026 18:06' },
        { ensaio: 'Umidade',  equipamento: 'Medidor de Umidade IV2500', serie: '24110717001006', detalhes: 'T 119°C · 6 min · Pi 1,055 g · Pf 0,823 g → 22,0%', assinatura: 'Rcafé · 16/04/2026 18:13' },
      ],
    },
    {
      id: 'cama-indiana',
      titulo: 'Cama Indiana · Formação',
      subtitulo: 'POP-SAB-0021/02 · 15 giros · Sala 1',
      icone: '🛏️',
      cor: 'inf',
      liberacaoLinha: [
        { item: 'Os utensílios estão limpos e identificados?',              resp: 'Sim', operador: 'Daltivo' },
        { item: 'Existe algum material do produto anterior na tubulação?', resp: 'Não', operador: 'Daltivo' },
        { item: 'A caixa está limpa?',                                      resp: 'Sim', operador: 'Daltivo' },
        { item: 'A esteira está limpa?',                                    resp: 'Sim', operador: 'Daltivo' },
        { item: 'Os carrinhos estão limpos e identificados corretamente?', resp: 'Sim', operador: 'Daltivo' },
        { item: 'A linha está limpa e identificada?',                       resp: 'Sim', operador: 'Daltivo' },
        { item: 'Etiqueta de identificação corresponde ao descrito na OF?', resp: 'Sim', operador: 'Daltivo' },
      ],
      giros: { inicio: '16/04/2026 20:49', fim: '17/04/2026 03:46', total: 15, operador: 'Daltivo', sala: 'Sala 1', obs: 'Giro a mais devido a reajuste.', aprovador: 'Geisha (103415) em 17/04/2026' },
    },
    {
      id: 'embalagem-ean',
      titulo: 'Embalagem EAN (Cartucho 90g)',
      subtitulo: 'OF 784458 · Linha B · MF1 · 48.531 un · 93,23%',
      icone: '📦',
      cor: 'ouro',
      info: { of: '784458', linha: 'Linha B', modulo: 'MF1', inicio: '17/04/2026 09:15', fim: '17/04/2026 19:40' },
      consumo: [
        { cod: 'S0815B', desc: 'TRANSP GRANADO GLICERINA',   exigido: '6.000,000', entregue: '6.006',    devolvido: '—',    perdido: '1.057',  utilizado: '5.930,79' },
        { cod: 'E3072',  desc: 'FILME TRANP. 25 MICRAS X 198MM', exigido: '30,609', entregue: '30,609', devolvido: '3,532', perdido: '27,442', utilizado: '—'        },
        { cod: 'E3577D', desc: 'CRT SAB GLICERINA (COLA) 90GR',  exigido: '52.576', entregue: '—',     devolvido: '3.955', perdido: '100',    utilizado: '48.531'   },
      ],
      resumo: { qtdPedida: 52056, qtdProduzida: 48531, qtdUtilizada: 48531, perdas: 1105, rend: '93,23 %' },
      etiqueta: {
        tipo:    'EAN · CARTUCHO 90G',
        codigo:  '7896512905004',
        format:  'EAN-13',
        ean13:   '7896512905004',
        produto: 'SAB. GLICERINA TRADICIONAL 90G',
        lote:    '262417',
        validade:'04/2029',
        wo:      '784458',
        data:    '17/04/2026',
      },
    },
    {
      id: 'cq-ean',
      titulo: 'CQ Processo · EAN',
      subtitulo: 'Liberação + 9 amostras peso + 21 inspeções',
      icone: '✅',
      cor: 'verde',
      liberacao: [
        { hora: '09:15', item: 'Etiqueta de identificação da caixa correta',         resultado: 'Sim', user: 'CRRIBEIRO' },
        { hora: '09:15', item: 'Identificação do granel conforme ordem',             resultado: 'Sim', user: 'NMACEDO' },
        { hora: '09:15', item: 'Linha e equipamentos limpos e identificados',        resultado: 'Sim', user: 'NMACEDO' },
        { hora: '09:15', item: 'Temperatura e pressão da sala dentro especificação', resultado: 'Sim', user: 'NMACEDO' },
        { hora: '09:15', item: 'Balanças com parâmetros ajustados e calibradas',     resultado: 'Sim', user: 'NMACEDO' },
        { hora: '09:15', item: 'Detector de metais funcionando (MF5)',               resultado: 'Sim', user: 'NMACEDO' },
        { hora: '09:15', item: 'Sistemas de segurança verificados',                  resultado: 'Sim', user: 'NMACEDO' },
        { hora: '09:15', item: 'Sistema de expulsão de caixa funcionando',           resultado: 'Sim', user: 'NMACEDO' },
      ],
      pesos: [
        { hora: '09:15', amostra: 1, peso: 101.00, declarado: 90, user: 'CRRIBEIRO' },
        { hora: '10:15', amostra: 2, peso: 102.00, declarado: 90, user: 'NMACEDO'  },
        { hora: '11:15', amostra: 3, peso: 101.00, declarado: 90, user: 'NMACEDO'  },
        { hora: '12:15', amostra: 4, peso: 102.00, declarado: 90, user: 'NMACEDO'  },
        { hora: '15:10', amostra: 5, peso: 101.00, declarado: 90, user: 'MRESILVA' },
        { hora: '16:10', amostra: 6, peso: 102.50, declarado: 90, user: 'MRESILVA' },
        { hora: '17:10', amostra: 7, peso: 102.00, declarado: 90, user: 'MRESILVA' },
        { hora: '18:10', amostra: 8, peso: 101.30, declarado: 90, user: 'CRRIBEIRO' },
        { hora: '19:10', amostra: 9, peso: 101.00, declarado: 90, user: 'CRRIBEIRO' },
      ],
      inspecoes: [
        { categoria: 'Balança',  itens: ['Verificar balança checkweigher'] },
        { categoria: 'Caixa',    itens: ['Etiqueta de embarque', 'Paletização', 'Quantidade produto interno'] },
        { categoria: 'Cartucho', itens: ['Codificação correta', 'Código conforme WO', 'Fechamento correto', 'Impressão e acabamento', 'Integridade estrutural', 'Presença do produto interno'] },
        { categoria: 'Flowpack', itens: ['Código filme conforme WO', 'Selagem correta'] },
        { categoria: 'Pack',     itens: ['Código filme conforme WO', 'Selagem correta', 'Quantidade de sabonetes (12)'] },
        { categoria: 'Sabonete', itens: ['Aspecto', 'Ausência de impureza', 'Odor', 'Acabamento', 'Gravação'] },
      ],
      paradas: [
        { hora: '13:00', codigo: '01', motivo: 'Refeição',    user: 'NMACEDO'  },
        { hora: '19:40', codigo: '08', motivo: 'Fim de lote', user: 'CRRIBEIRO' },
      ],
    },
    {
      id: 'embalagem-dun',
      titulo: 'Embalagem DUN-14 (Caixa 72)',
      subtitulo: 'OF 784367 · Encartonamento DUN · MF1 · 674 caixas · 93,2%',
      icone: '📦',
      cor: 'ouro',
      info: { of: '784367', linha: 'Encartonamento DUN', modulo: 'MF1', inicio: '17/04/2026 14:00', fim: '17/04/2026 19:40' },
      consumo: [
        { cod: '27896512905226', desc: 'SAB.GLICERINA 90G CX72',          exigido: '52.056', entregue: '48.528', devolvido: '—',     perdido: '—',     utilizado: '48.528' },
        { cod: 'E4917',          desc: 'FILME BOPP 35 MICRAS 290MM',      exigido: '19,911', entregue: '19,911', devolvido: '1,111', perdido: '4,950', utilizado: '16,850' },
        { cod: 'E2978B',         desc: 'CXE SABONETE BARRA C/72',         exigido: '217,00', entregue: '217,00', devolvido: '550',   perdido: '05',    utilizado: '67,4'   },
      ],
      resumo: { qtdPedida: 723, qtdProduzida: 674, qtdUtilizada: 674, perdas: 5, rend: '93,2 %' },
      etiqueta: {
        tipo:    'DUN-14 · CAIXA EMBARQUE',
        codigo:  '27896512905226',
        format:  'EAN-128',
        gs1:     '(01)27896512905226 (10)262417 (15)042029 (37)72',
        produto: 'SAB. GLICERINA 90G · CX72',
        lote:    '262417',
        validade:'04/2029',
        unidades:'72 cartuchos',
        wo:      '784367',
        data:    '17/04/2026',
        palete:  'PLT-2026-0451',
      },
      liberacao: [
        { item: 'Caixa de embarque DUN-14 conforme padrão',     resp: 'Sim', user: 'CRRIBEIRO' },
        { item: 'Etiqueta DUN-14 com EAN-128 legível',          resp: 'Sim', user: 'CRRIBEIRO' },
        { item: 'Codificação de validade e lote correta',       resp: 'Sim', user: 'CRRIBEIRO' },
        { item: 'Quantidade interna (12 cartuchos por caixa)',  resp: 'Sim', user: 'CRRIBEIRO' },
        { item: 'Paletização conforme padrão NB-Pallet',        resp: 'Sim', user: 'CRRIBEIRO' },
      ],
    },
    {
      id: 'lims-pa',
      titulo: 'LIMS · Produto Acabado (EAN)',
      subtitulo: 'Análise 118.478 · Aprovado · 17/04/2026',
      icone: '🧪',
      cor: 'verde',
      analise: { numero: '118.478', amostra: '136.155', data: '17/04/2026', analista: 'Jessica Costa', parecer: 'Aprovado' },
      ensaios: [
        { ensaio: 'Aspecto', esp: 'Conforme', resultado: 'Conforme', status: 'Conforme' },
        { ensaio: 'Cor',     esp: 'Conforme', resultado: 'Conforme', status: 'Conforme' },
        { ensaio: 'Odor',    esp: 'Conforme', resultado: 'Conforme', status: 'Conforme' },
      ],
    },
    {
      id: 'liberacao',
      titulo: 'Liberação Final',
      subtitulo: 'Lote PA 262417 · Validade 04/2029',
      icone: '🏁',
      cor: 'verde',
      assinaturas: [
        { etapa: 'Início do lote',           usuario: 'Ricardo Henriques da Cunha', funcao: 'Operador', dataHora: '16/04/2026 15:24:57' },
        { etapa: 'Liberação de linha',       usuario: 'Daltivo',                    funcao: 'Líder',    dataHora: '16/04/2026 18:38:00' },
        { etapa: 'Aprovação CQ Granel',      usuario: 'Maicon S. Souza Lima',       funcao: 'CQ',       dataHora: '16/04/2026 18:35:16' },
        { etapa: 'Aprovação Produto Acabado',usuario: 'Jessica Costa',              funcao: 'CQ',       dataHora: '17/04/2026 16:45:34' },
      ],
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════════
   DOSSIES ADICIONAIS — variantes para demonstracao da busca
   Usam clones do dossie principal com overrides no header e em campos
   visiveis. As secoes detalhadas (etapas/inspecoes/etc) sao reusadas
   para evitar duplicacao desnecessaria nesta fase de mockup.
═══════════════════════════════════════════════════════════════════ */

const DOSSIE_2 = {
  ...DOSSIE,
  wo: '784301',
  lote: '2401/2026',
  lotePA: '261892',
  produto: 'Sabonete Glicerinado Limão Siciliano · Linha',
  granel: 'TRANSP GRANADO LIMÃO SICILIANO',
  codigoProduto: 'S0822B_G',
  codigoGranel: 'S0822B',
  batchSize: '5.500 kg',
  sala: 'MF5_HOMO4',
  inicio: '08/04/2026 09:14:22',
  fim: '08/04/2026 12:38:55',
  validade: '20/04/2029',
  lider: { nome: 'Daltivo', chapa: '108922' },
  cqLiberacao: { nome: 'Maicon S. Souza Lima', data: '09/04/2026 14:20' },
  emitido: '06/05/2026 09:02',
  cadeia: DOSSIE.cadeia.map((no) => {
    if (no.id === 'granel') {
      return {
        ...no,
        titulo: 'Granel · S0822B · Lote 2401/2026',
        subtitulo: '5.503 kg · Rendimento 100,05% ✓',
        rendimento: { ...no.rendimento, teorico: '5.500,000 kg', real: '5.503,000 kg', calc: '100,05%' },
        etiqueta: { ...no.etiqueta, codigo: 'S0822B', produto: 'TRANSP GRANADO LIMÃO SICILIANO', loteGranel: '2401/2026', qtde: '5.503,000 kg', dataPesagem: '06/04/2026', validadePA: '04/2029', inicioFab: '08/04/2026', fimFab: '08/04/2026' },
      };
    }
    if (no.id === 'embalagem-ean' && no.etiqueta) {
      return {
        ...no,
        subtitulo: 'OF 784348 · Linha B · MF1 · 44.218 un · 92,8%',
        info: { ...no.info, of: '784348', inicio: '09/04/2026 08:20', fim: '09/04/2026 18:55' },
        etiqueta: { ...no.etiqueta, ean13: '7896512908005', codigo: '7896512908005', produto: 'SAB. GLICERINA LIMÃO SICILIANO 90G', lote: '261892', wo: '784348', data: '09/04/2026' },
      };
    }
    if (no.id === 'embalagem-dun' && no.etiqueta) {
      return {
        ...no,
        subtitulo: 'OF 784280 · Encartonamento DUN · MF1 · 614 caixas',
        info: { ...no.info, of: '784280', inicio: '09/04/2026 13:30', fim: '09/04/2026 18:55' },
        etiqueta: { ...no.etiqueta, codigo: '27896512908002', gs1: '(01)27896512908002 (10)261892 (15)042029 (37)72', produto: 'SAB. GLICERINA LIMÃO SICILIANO 90G · CX72', lote: '261892', wo: '784280', data: '09/04/2026', palete: 'PLT-2026-0429' },
      };
    }
    return no;
  }),
};

const DOSSIE_3 = {
  ...DOSSIE,
  wo: '783897',
  lote: '2298/2026',
  lotePA: '261104',
  produto: 'Sabonete Glicerinado Mel · Linha',
  granel: 'TRANSP GRANADO MEL',
  codigoProduto: 'S0830B_G',
  codigoGranel: 'S0830B',
  batchSize: '4.000 kg',
  sala: 'MF5_HOMO5',
  inicio: '28/03/2026 16:02:11',
  fim: '28/03/2026 19:42:30',
  validade: '12/04/2029',
  lider: { nome: 'Geisha', chapa: '103415' },
  cqLiberacao: { nome: 'Jessica Costa', data: '29/03/2026 11:10' },
  emitido: '06/05/2026 09:02',
  cadeia: DOSSIE.cadeia.map((no) => {
    if (no.id === 'granel') {
      return {
        ...no,
        titulo: 'Granel · S0830B · Lote 2298/2026',
        subtitulo: '4.012 kg · Rendimento 100,30% ✓',
        rendimento: { ...no.rendimento, teorico: '4.000,000 kg', real: '4.012,000 kg', calc: '100,30%' },
        etiqueta: { ...no.etiqueta, codigo: 'S0830B', produto: 'TRANSP GRANADO MEL', loteGranel: '2298/2026', qtde: '4.012,000 kg', dataPesagem: '26/03/2026', validadePA: '04/2029', inicioFab: '28/03/2026', fimFab: '28/03/2026' },
      };
    }
    if (no.id === 'embalagem-ean' && no.etiqueta) {
      return {
        ...no,
        subtitulo: 'OF 783920 · Linha B · MF1 · 32.140 un · 91,7%',
        info: { ...no.info, of: '783920', inicio: '29/03/2026 09:00', fim: '29/03/2026 17:30' },
        etiqueta: { ...no.etiqueta, ean13: '7896512911005', codigo: '7896512911005', produto: 'SAB. GLICERINA MEL 90G', lote: '261104', wo: '783920', data: '29/03/2026' },
      };
    }
    if (no.id === 'embalagem-dun' && no.etiqueta) {
      return {
        ...no,
        subtitulo: 'OF 783854 · Encartonamento DUN · MF1 · 446 caixas',
        info: { ...no.info, of: '783854', inicio: '29/03/2026 13:00', fim: '29/03/2026 17:30' },
        etiqueta: { ...no.etiqueta, codigo: '27896512911002', gs1: '(01)27896512911002 (10)261104 (15)042029 (37)72', produto: 'SAB. GLICERINA MEL 90G · CX72', lote: '261104', wo: '783854', data: '29/03/2026', palete: 'PLT-2026-0418' },
      };
    }
    return no;
  }),
};

/**
 * Lista todos os dossies disponiveis no MES (mockup). Em producao, isto
 * seria substituido por uma chamada `GET /api/dossies?...`.
 */
export const DOSSIES = [DOSSIE, DOSSIE_2, DOSSIE_3];

/**
 * Retorna lista resumida (lote, WO, codigo, produto) — util para
 * autocomplete e sugestoes na barra de busca.
 */
export function listarDossies() {
  return DOSSIES.map((d) => ({
    wo: d.wo,
    lote: d.lote,
    lotePA: d.lotePA,
    codigo: d.codigoGranel,
    produto: d.granel,
    inicio: d.inicio,
  }));
}

/**
 * Busca um dossie pelo termo digitado pelo usuario. Aceita:
 *   - Lote do granel completo  (ex.: "2551/2026")
 *   - Lote sem barra            (ex.: "2551 2026" ou "25512026")
 *   - WO                        (ex.: "784426")
 *   - Lote PA                   (ex.: "262417")
 *   - Codigo do granel          (ex.: "S0815B")
 *   - Nome do produto (parcial) (ex.: "limao")
 * Retorna o objeto DOSSIE encontrado ou null.
 */
export function findDossie(termoRaw) {
  if (!termoRaw) return null;
  const t = String(termoRaw).trim().toLowerCase().replace(/\s+/g, ' ');
  if (!t) return null;
  const tNoSlash = t.replace(/\//g, '').replace(/\s/g, '');
  return (
    DOSSIES.find((d) => {
      if (d.lote.toLowerCase() === t) return true;
      if (d.lote.toLowerCase().replace('/', '') === tNoSlash) return true;
      if (d.wo === t) return true;
      if (d.lotePA.toLowerCase() === t) return true;
      if (d.codigoGranel.toLowerCase() === t) return true;
      if (d.granel.toLowerCase().includes(t)) return true;
      if (d.produto.toLowerCase().includes(t)) return true;
      return false;
    }) || null
  );
}

