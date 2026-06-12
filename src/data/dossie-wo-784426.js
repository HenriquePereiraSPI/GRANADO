/**
 * Dossie Eletronico de Producao (EBR) — WO 784426 / Lote 2551/2026.
 * Dados modelados a partir do documento de Reconciliacao Q.A. Completa
 * (Esboco_Reconciliacao_QA_Completa.html · 15/05/2026), cobrindo todo o
 * ciclo do lote PA 262417: pesagem -> fabricacao -> granel -> embalagem
 * EAN/DUN -> boletins LIMS -> reconciliacao QA -> liberacao final.
 *
 * Esta estrutura alimenta a tela `GenealogiaScreen` que apresenta os dados
 * em forma de cadeia (genealogia) + secoes detalhadas.
 */

export const DOSSIE = {
  wo: '784426',
  lote: '2551/2026',
  lotePA: '262417',
  produto: 'Sabonete Glicerinado Tradicional 90g',
  granel: 'TRANSP GRANADO GLICERINA',
  codigoProduto: 'S0815B_G',
  codigoGranel: 'S0815B',
  batchSize: '6.000 kg',
  sala: '3 — Fab. Sabonetes',
  inicio: '16/04/2026 07:00:00',
  fim: '16/04/2026 16:22:00',
  validade: '30/04/2029',
  lider: { nome: 'M.Rocha', chapa: '108' },
  cqLiberacao: { nome: 'R.Café (LIMS)', data: '16/04/2026 14:58' },
  emitido: '15/05/2026 13:52',
  conformidades: ['CFR 21 Part 11 (FDA)', 'IN 134/2022 (ANVISA)', 'ANVISA RDC 658/2022'],

  // Cronograma da Ordem (extraído do documento de Reconciliacao QA).
  cronograma: {
    ordemInicio:    '14/04/2026',
    pesagem:        '16/04/2026',
    conferencia:    '16/04/2026',
    inbatchInicio:  '16/04/2026',
    inbatchFim:     '16/04/2026',
    ordemFim:       '17/04/2026',
  },

  // ── Cadeia genealogica (nos da arvore visual) ────────────────────────────
  cadeia: [
    {
      id: 'mp',
      titulo: 'Matérias-Primas',
      subtitulo: '7 itens consumidos no lote',
      icone: '🌱',
      cor: 'inf',
      itens: [
        { cod: '5001', desc: 'SLES 70%',                 qtd: '40,015 kg', lote: '2401/2025', validade: '10/2027' },
        { cod: '5012', desc: 'Cocoamidopropil Betaína',  qtd: '18,022 kg', lote: '2382/2025', validade: '09/2027' },
        { cod: '5101', desc: 'Glicerina USP',            qtd: '29,995 kg', lote: '1142/2026', validade: '12/2028' },
        { cod: '5203', desc: 'Fenoxietanol',             qtd: '1,505 kg',  lote: '2876/2025', validade: '03/2027' },
        { cod: '5304', desc: 'EDTA',                     qtd: '0,251 kg',  lote: '2104/2026', validade: '04/2028' },
        { cod: '5410', desc: 'Essência Granado',         qtd: '4,012 kg',  lote: '3201/2026', validade: '06/2028' },
        { cod: '5501', desc: 'Água Purificada',          qtd: '84,950 kg', lote: '—',         validade: '—' },
      ],
    },
    {
      id: 'pesagem',
      titulo: 'Pesagem',
      subtitulo: '16/04/2026 · Total 178,75 kg · 7/7 MPs · variância máx. 0,32%',
      icone: '⚖️',
      cor: 'verde',
      kpis: [
        { lbl: 'MPs Pesadas',    val: '7 / 7' },
        { lbl: 'Peso Total',     val: '178,75 kg' },
        { lbl: 'Volumes',        val: '4 fracionados' },
        { lbl: 'MPs Zeradas',    val: '0', ok: true },
        { lbl: 'Variância Máx.', val: '0,32%' },
      ],
      // Relatorio de Pesagem + Etiquetas de Materia-Prima (sincronizado InBatch).
      itens: [
        { cod: '5001', desc: 'SLES 70%',                qtd: '40,015 kg', teorico: '40,000 kg', real: '40,015 kg', variancia: '+0,04%',
          etqCodigo: 'E-87412', etqLote: '2401/2025', validade: '10/2027', operador: 'J.Santos (108)', etqHora: '16/04 07:12',
          conferente: '✓', dataConf: '16/04 07:12', balanca: 'BAL-A-01', barcode: 'E87412-5001-2401', assinatura: '✓' },
        { cod: '5012', desc: 'Cocoamidopropil Betaína', qtd: '18,022 kg', teorico: '18,000 kg', real: '18,022 kg', variancia: '+0,12%',
          etqCodigo: 'E-87413', etqLote: '2382/2025', validade: '09/2027', operador: 'J.Santos (108)', etqHora: '16/04 07:25',
          conferente: '✓', dataConf: '16/04 07:25', balanca: 'BAL-A-01', barcode: 'E87413-5012-2382', assinatura: '✓' },
        { cod: '5101', desc: 'Glicerina USP',           qtd: '29,995 kg', teorico: '30,000 kg', real: '29,995 kg', variancia: '-0,02%',
          etqCodigo: 'E-87414', etqLote: '1142/2026', validade: '12/2028', operador: 'J.Santos (108)', etqHora: '16/04 07:38',
          conferente: '✓', dataConf: '16/04 07:38', balanca: 'BAL-A-02', barcode: 'E87414-5101-1142', assinatura: '✓' },
        { cod: '5203', desc: 'Fenoxietanol',            qtd: '1,505 kg',  teorico: '1,500 kg',  real: '1,505 kg',  variancia: '+0,33%',
          etqCodigo: 'E-87415', etqLote: '2876/2025', validade: '03/2027', operador: 'J.Santos (108)', etqHora: '16/04 07:51',
          conferente: '✓', dataConf: '16/04 07:51', balanca: 'BAL-A-03', barcode: 'E87415-5203-2876', assinatura: '✓' },
        { cod: '5304', desc: 'EDTA',                    qtd: '0,251 kg',  teorico: '0,250 kg',  real: '0,251 kg',  variancia: '+0,40%',
          etqCodigo: 'E-87416', etqLote: '2104/2026', validade: '04/2028', operador: 'J.Santos (108)', etqHora: '16/04 08:03',
          conferente: '✓', dataConf: '16/04 08:03', balanca: 'BAL-A-03', barcode: 'E87416-5304-2104', assinatura: '✓' },
        { cod: '5410', desc: 'Essência Granado',        qtd: '4,012 kg',  teorico: '4,000 kg',  real: '4,012 kg',  variancia: '+0,30%',
          etqCodigo: 'E-87417', etqLote: '3201/2026', validade: '06/2028', operador: 'J.Santos (108)', etqHora: '16/04 08:14',
          conferente: '✓', dataConf: '16/04 08:14', balanca: 'BAL-A-02', barcode: 'E87417-5410-3201', assinatura: '✓' },
        { cod: '5501', desc: 'Água Purificada',         qtd: '84,950 kg', teorico: '85,000 kg', real: '84,950 kg', variancia: '-0,06%',
          etqCodigo: 'E-87418', etqLote: '—',         validade: '—',      operador: 'J.Santos (108)', etqHora: '16/04 08:25',
          conferente: '✓', dataConf: '16/04 08:25', balanca: 'BAL-A-04', barcode: 'E87418-5501', assinatura: '✓' },
      ],
      // Relatorio de Insumos Consumidos (sincronizado InBatch).
      insumos: [
        { mp: 'SLES 70%',                saldoIni: '40,000 kg', consumido: '40,015 kg', devolvido: '0 kg',     saldoFim: '-0,015 kg', origem: 'ALMOX-A · prateleira P3' },
        { mp: 'Cocoamidopropil Betaína', saldoIni: '18,000 kg', consumido: '18,022 kg', devolvido: '0 kg',     saldoFim: '-0,022 kg', origem: 'ALMOX-A · prateleira P5' },
        { mp: 'Glicerina USP',           saldoIni: '30,000 kg', consumido: '29,995 kg', devolvido: '0 kg',     saldoFim: '+0,005 kg', origem: 'ALMOX-B · tanque T2' },
        { mp: 'Fenoxietanol',            saldoIni: '2,000 kg',  consumido: '1,505 kg',  devolvido: '0,495 kg', saldoFim: '+0,000 kg', origem: 'ALMOX-C · armário Q' },
      ],
      // Formula Padrao / Tamanho do Lote (sincronizado BOM JDE).
      formula: [
        { lbl: 'Tam. Lote (BOM)', val: '6.000,00 kg' },
        { lbl: 'Pesado (Total)',  val: '178,75 kg' },
        { lbl: 'Multiplicador',   val: '33,57×' },
        { lbl: 'Revisão BOM',     val: 'BOM-S0815B-04' },
      ],
    },
    {
      id: 'fabricacao',
      titulo: 'Fabricação (Granel Cosmético)',
      subtitulo: '16/04/2026 · 20 fases InBatch · Operador: M.Rocha',
      icone: '🧪',
      cor: 'verde',
      // Identificacao do Lote de Fabricacao (sincronizado InBatch).
      identificacao: {
        codigo: 'S0815B',
        nome: 'TRANSP GRANADO GLICERINA',
        sala: '3 — Fab. Sabonetes',
        tamanho: '6.000 kg',
        loteGranel: '2551/2026',
        wo: 'WO 784426',
        dataFab: '16/04/2026',
        campanha: 'SIM (2/5)',
        balancaZerada: 'SIM (tara 0,00 kg)',
        utensiliosLimpos: 'SIM ✓',
        ultimoReatorPrincipal: 'S0815B (mesmo)',
        ultimoReatorAuxiliar: 'S0822B (Limão)',
      },
      // Etiqueta Status do Equipamento / Peca (sincronizado InBatch).
      statusEquipamento: [
        { equipamento: 'Reator Principal R-301', sala: 'Sala 3', tipoLimpeza: 'Parcial / Campanha', prodAnterior: 'S0815B (mesmo)', loteAnterior: '2548/2026', dataLimpeza: '16/04 06:40', assinatura: 'M.Rocha (108)', ok: true },
        { equipamento: 'Reator Auxiliar R-302',  sala: 'Sala 3', tipoLimpeza: 'Limpeza Total',      prodAnterior: 'S0822B (Limão)', loteAnterior: '2398/2026', dataLimpeza: '15/04 22:15', assinatura: 'M.Rocha (108)', ok: true },
        { equipamento: 'Bomba Recirc. B-12',     sala: 'Sala 3', tipoLimpeza: 'Parcial / Campanha', prodAnterior: 'S0815B (mesmo)', loteAnterior: '2548/2026', dataLimpeza: '16/04 06:55', assinatura: 'M.Rocha (108)', ok: true },
        { equipamento: 'Filtro F-21',            sala: 'Sala 3', tipoLimpeza: 'Aguardando Limpeza',  prodAnterior: 'S0822B (Limão)', loteAnterior: '2398/2026', dataLimpeza: '—',          assinatura: '—',            ok: false },
      ],
      // Relatorio do InBatch — Sequencia de Fases (20 etapas).
      etapas: [
        { codigo: '', nome: 'Início Fabricação',          inicio: '16/04 07:00', fim: '16/04 07:05', operador: 'M.Rocha',     status: 'OK', params: [{ p: 'Confirmar zeragem balança + utensílios', um: '—', prev: 'OK', real: 'OK' }] },
        { codigo: '', nome: 'Adição de Água',             inicio: '16/04 07:08', fim: '16/04 07:21', operador: 'M.Rocha',     status: 'OK', params: [{ p: 'Carregar água purificada', um: 'kg', prev: '85,000', real: '84,950' }] },
        { codigo: '', nome: 'Aquecimento',                inicio: '16/04 07:22', fim: '16/04 08:14', operador: 'M.Rocha',     status: 'OK', params: [{ p: 'Aquecer até 65°C', um: '°C', prev: '65,0', real: '65,2' }] },
        { codigo: '', nome: 'Temp Check',                 inicio: '16/04 08:14', fim: '16/04 08:18', operador: 'M.Rocha',     status: 'OK', params: [{ p: 'Verificar temperatura estável', um: '°C ± 1', prev: '65,0', real: '65,2' }] },
        { codigo: '', nome: 'Adição do Material',         inicio: '16/04 08:18', fim: '16/04 08:42', operador: 'M.Rocha',     status: 'OK', params: [{ p: 'SLES + Cocoamidopropil + Glicerina', um: 'kg', prev: '88,032', real: '88,032' }] },
        { codigo: '', nome: 'Parâmetros',                 inicio: '16/04 08:45', fim: '16/04 08:48', operador: 'M.Rocha',     status: 'OK', params: [{ p: 'Verificar pH inicial', um: 'pH', prev: '9,5–10,5', real: '9,8' }] },
        { codigo: '', nome: 'Homogeneização',             inicio: '16/04 08:48', fim: '16/04 09:18', operador: 'M.Rocha',     status: 'OK', params: [{ p: 'Agitar 30 min @ 250 rpm', um: 'rpm', prev: '250', real: '250' }] },
        { codigo: '', nome: 'Adição Fenoxietanol + EDTA', inicio: '16/04 09:18', fim: '16/04 09:24', operador: 'M.Rocha',     status: 'OK', params: [{ p: 'Carregar conservantes', um: 'kg', prev: '1,756', real: '1,756' }] },
        { codigo: '', nome: 'Adição Essência',            inicio: '16/04 09:24', fim: '16/04 09:30', operador: 'M.Rocha',     status: 'OK', params: [{ p: 'Carregar essência', um: 'kg', prev: '4,000', real: '4,012' }] },
        { codigo: '', nome: 'Homogeneização Final',       inicio: '16/04 09:30', fim: '16/04 09:45', operador: 'M.Rocha',     status: 'OK', params: [{ p: 'Agitar 15 min', um: 'min', prev: '15', real: '15' }] },
        { codigo: '', nome: 'Fim Fabricação',             inicio: '16/04 09:45', fim: '16/04 09:46', operador: 'M.Rocha',     status: 'OK', params: [{ p: 'Finalizar etapa fab.', um: '—', prev: 'OK', real: 'OK' }] },
        { codigo: '', nome: 'Recirculação',               inicio: '16/04 09:46', fim: '16/04 10:30', operador: 'M.Rocha',     status: 'OK', params: [{ p: 'Bomba B-12 @ vazão 800 L/h', um: 'L/h', prev: '800', real: '810' }] },
        { codigo: 'CQ', nome: 'Início CQ',                inicio: '16/04 10:30', fim: '16/04 10:34', operador: 'CQ-Pereira',  status: 'OK', params: [{ p: 'Coleta amostra para LIMS', um: '—', prev: 'OK', real: 'OK' }] },
        { codigo: '', nome: 'Resfriamento',               inicio: '16/04 10:34', fim: '16/04 12:18', operador: 'M.Rocha',     status: 'OK', params: [{ p: 'Resfriar até 30°C', um: '°C', prev: '30,0', real: '29,5' }] },
        { codigo: 'CQ', nome: 'Análise Realizada',        inicio: '16/04 12:20', fim: '16/04 14:55', operador: 'R.Café (LIMS)', status: 'OK', params: [{ p: 'LIMS análise 18.461', um: '—', prev: 'OK', real: 'OK' }] },
        { codigo: 'CQ', nome: 'Amostra',                  inicio: '16/04 14:55', fim: '16/04 15:00', operador: 'R.Café (LIMS)', status: 'OK', params: [{ p: 'Aprovado pelo CQ', um: 'Status', prev: 'AP', real: 'APROVADO' }] },
        { codigo: '', nome: 'Rendimento',                 inicio: '16/04 15:02', fim: '16/04 15:05', operador: 'Sistema',     status: 'OK', params: [{ p: 'Calcular rendimento real', um: '%', prev: '97–103%', real: '100,10%' }] },
        { codigo: '', nome: 'Fase Transfer',              inicio: '16/04 15:10', fim: '16/04 16:20', operador: 'M.Rocha',     status: 'OK', params: [{ p: 'Transferir granel p/ envase', um: 'kg', prev: '6.006', real: '6.006' }] },
        { codigo: '', nome: 'Finalizar Etapa',            inicio: '16/04 16:21', fim: '16/04 16:22', operador: 'M.Rocha',     status: 'OK', params: [{ p: 'Encerrar lote granel', um: '—', prev: 'OK', real: 'OK' }] },
        { codigo: '', nome: 'Último Prod. Equip.',        inicio: '16/04 16:22', fim: '16/04 16:22', operador: 'Sistema',     status: 'OK', params: [{ p: 'Marcar S0815B no histórico', um: '—', prev: 'OK', real: 'OK' }] },
      ],
    },
    {
      id: 'granel',
      titulo: 'Granel · S0815B · Lote 2551/2026',
      subtitulo: '6.006 kg · Rendimento 100,10% ✓',
      icone: '🛢️',
      cor: 'ouro',
      rendimento: {
        teorico:  '6.000 kg',
        real:     '6.006 kg',
        calc:     '100,10%',
        limMin:   '97%',
        limMax:   '103%',
        status:   'APROVADO',
        perda:    '0,10% (+6 kg)',
        responsavel: 'Daltivo (108922)',
        data:     '16/04/2026',
        rendEmb:  '93,23%',
        ultimoProduto: 'TRANSP GRANADO GLICERINA',
        ultimoLote: '2548/2026',
      },
      etiqueta: {
        codigo:        'S0815B',
        produto:       'TRANSP GLICERINA',
        loteGranel:    '2551/2026',
        qtde:          '4.000 kg',
        dataPesagem:   '16/04/2026',
        validadePA:    '30/04/2029',
        inicioFab:     '16/04 07:00',
        fimFab:        '16/04 16:22',
        prazoEstoque:  '180 dias',
        nRecipientes:  '2 IBCs',
      },
    },
    {
      id: 'embalagem-ean',
      titulo: 'Embalagem EAN (Cartucho 90g)',
      subtitulo: 'WO 784426 · 48.531 un · rendimento 93,23%',
      icone: '📦',
      cor: 'ouro',
      info: { of: '784426', linha: 'Envase pos1', modulo: 'Linha B', inicio: '17/04/2026 07:15', fim: '17/04/2026 16:42' },
      consumo: [
        { cod: 'S0815B', desc: 'TRANSP GRANADO GLICERINA',         exigido: '6.000',  entregue: '6.006',  devolvido: '52',    perdido: '—',     utilizado: '5.954' },
        { cod: 'E3070',  desc: 'CRT SAB GLICERINA (COLA) 90GR',    exigido: '52.056', entregue: '52.056', devolvido: '3.505', perdido: '20',    utilizado: '48.531' },
      ],
      resumo: { qtdPedida: 52056, qtdProduzida: 48531, qtdUtilizada: 48511, perdas: 3525, rend: '93,23 %' },
      // Documentacao Eletronica de Producao — Rendimento (sincronizado MES).
      documentacao: {
        filial: '0015', tipoOrdem: 'EAN', lote: '262417', produto: 'S0815B_G',
        quantidades: '52.056 / 48.531', rendimento: '93,23%',
        prodAnterior: 'S0822B_G', loteAnterior: '261892',
        justificativa: 'Quebra de copo no envase (lote anterior)', usuario: 'F.Costa (212)',
      },
      // Resumo do Lote — Amostras Inicio/Meio/Fim (sincronizado MES).
      resumoAmostras: {
        loteGranel: '2551/2026', inicio: '17/04 07:15', termino: '17/04 16:42',
        amInicio: '17/04 07:30 (cx 12)', amMeio: '17/04 11:50 (cx 13)', amFim: '17/04 16:25 (cx 14)',
        processo: 'Envase pos1', usuario: 'F.Costa (212)',
      },
      etiqueta: {
        tipo:    'EAN · CARTUCHO 90G',
        codigo:  '7896512905004',
        format:  'EAN-13',
        ean13:   '7896512905004',
        produto: 'SAB. GLICERINA TRADICIONAL 90G',
        lote:    '262417',
        validade:'04/2029',
        wo:      '784426',
        data:    '17/04/2026',
      },
    },
    {
      id: 'embalagem-dun',
      titulo: 'Embalagem DUN (Cx Distribuição 24 un)',
      subtitulo: 'WO 784426-D · 2.022 cx · rendimento 93,22%',
      icone: '📦',
      cor: 'ouro',
      info: { of: '784426-D', linha: 'Encartonamento DUN', modulo: 'MF1', inicio: '17/04/2026 07:15', fim: '17/04/2026 16:42' },
      consumo: [
        { cod: 'S0815B_GD', desc: 'CX DISTRIBUIÇÃO 24 UN',     exigido: '2.169',  entregue: '2.169',  devolvido: '147',  perdido: '—',  utilizado: '2.020' },
      ],
      resumo: { qtdPedida: 2169, qtdProduzida: 2022, qtdUtilizada: 2020, perdas: 147, rend: '93,22 %' },
      etiqueta: {
        tipo:    'DUN · CAIXA DISTRIBUIÇÃO',
        codigo:  '27896512905226',
        format:  'EAN-128',
        gs1:     '(01)27896512905226 (10)262417-D (15)042029 (37)24',
        produto: 'SAB. GLICERINA 90G · CX24',
        lote:    '262417-D',
        validade:'04/2029',
        unidades:'24 cartuchos',
        wo:      '784426-D',
        data:    '17/04/2026',
        palete:  'PLT-2026-0451',
        loteEAN: '7896512905004',
      },
    },
    {
      id: 'cq-ean',
      titulo: 'Controle em Processo · Envase',
      subtitulo: 'Liberação de linha · controle de peso · checklist refil · anexos',
      icone: '✅',
      cor: 'verde',
      // Liberacao de Linha (timeline de eventos).
      liberacaoLinhaTL: [
        { hora: '17/04/2026 07:05', titulo: 'Liberação de Linha — Envase Pos1', desc: 'Conferida limpeza, peças, etiquetas e parametrização do enchedor.', resultado: 'LIBERADA', tipo: 'ok', por: 'F.Costa (212)' },
        { hora: '17/04/2026 11:42', titulo: 'Parada de Linha — limpeza intermediária', desc: 'Justificativa: Troca de lote da etiqueta de tampa.', resultado: 'PARADA 8 min', tipo: 'warn', por: 'F.Costa (212)' },
        { hora: '17/04/2026 11:50', titulo: 'Reliberação de Linha', desc: 'Conferida nova bobina de etiqueta.', resultado: 'LIBERADA', tipo: 'ok', por: 'F.Costa (212)' },
      ],
      // Controle de Peso — Amostras de Envase.
      controlePeso: {
        kpis: [
          { lbl: 'Total Amostras', val: '6 lançamentos' },
          { lbl: 'Tara Embalagem', val: '9,2 g' },
          { lbl: 'Densidade',      val: '1,02 g/cm³' },
          { lbl: 'Peso Declarado', val: '90,0 g' },
          { lbl: 'Média (6)',      val: '91,4 g', ok: true },
        ],
        amostras: [
          { n: 1, data: '17/04/26', hora: '07:30', tara: '9,2 g', densidade: '1,02 g/cm³', decl: '90,0 g', real: '91,5 g', status: 'CONFORME', usuario: 'F.Costa' },
          { n: 2, data: '17/04/26', hora: '09:00', tara: '9,2 g', densidade: '1,02 g/cm³', decl: '90,0 g', real: '91,3 g', status: 'CONFORME', usuario: 'F.Costa' },
          { n: 3, data: '17/04/26', hora: '10:30', tara: '9,2 g', densidade: '1,02 g/cm³', decl: '90,0 g', real: '91,6 g', status: 'CONFORME', usuario: 'F.Costa' },
          { n: 4, data: '17/04/26', hora: '12:30', tara: '9,2 g', densidade: '1,02 g/cm³', decl: '90,0 g', real: '91,4 g', status: 'CONFORME', usuario: 'F.Costa' },
          { n: 5, data: '17/04/26', hora: '14:00', tara: '9,2 g', densidade: '1,02 g/cm³', decl: '90,0 g', real: '91,2 g', status: 'CONFORME', usuario: 'F.Costa' },
          { n: 6, data: '17/04/26', hora: '15:30', tara: '9,2 g', densidade: '1,02 g/cm³', decl: '90,0 g', real: '91,4 g', status: 'CONFORME', usuario: 'F.Costa' },
        ],
      },
      // Controle de Processo — Caixa de Embarque + Refil (checklist).
      controleProcesso: [
        { n: 1,  item: 'Etiqueta de Embarque',                 por: 'F.Costa · 17/04 07:32', ok: true },
        { n: 2,  item: 'Peletização',                          por: 'F.Costa · 17/04 07:34', ok: true },
        { n: 3,  item: 'Quantidade Produto Interno',           por: 'F.Costa · 17/04 07:35', ok: true },
        { n: 4,  item: 'Codificação Legível / Indelével',      por: 'F.Costa · 17/04 07:37', ok: true },
        { n: 5,  item: 'Filme — Código Conforme WO',           por: 'F.Costa · 17/04 07:39', ok: true },
        { n: 6,  item: 'Granel — Aspecto',                     por: 'F.Costa · 17/04 07:42', ok: true },
        { n: 7,  item: 'Refil — Alinhamento Inferior',         por: 'F.Costa · 17/04 07:43', ok: true },
        { n: 8,  item: 'Refil — Alinhamento Superior',         por: 'F.Costa · 17/04 07:44', ok: true },
        { n: 9,  item: 'Refil — Ponto Tríplice Alinhado',      por: 'F.Costa · 17/04 07:45', ok: true },
        { n: 10, item: 'Refil — Selagem Bocal',                por: 'F.Costa · 17/04 07:46', ok: true },
        { n: 11, item: 'Refil — Selagem Fundo / Triângulo',    por: 'F.Costa · 17/04 11:38 (RC-2026-1042)', ok: false },
        { n: 12, item: 'Refil — Selagem Fundo / Laterais',     por: 'F.Costa · 17/04 07:48', ok: true },
        { n: 13, item: 'Teste Resistência — Sem Vazamento',    por: 'F.Costa · 17/04 07:50', ok: true },
      ],
      // Anexos da Ordem de Embalagem (fisico).
      anexos: [
        { anexo: '📎 Etiqueta de Fabricação',                          status: 'ANEXADO', por: 'F.Costa', data: '17/04 07:30' },
        { anexo: '📎 Etiqueta Status do Equipamento',                  status: 'ANEXADO', por: 'F.Costa', data: '17/04 07:31' },
        { anexo: '📎 Etiqueta de Caixa de Embarque',                   status: 'ANEXADO', por: 'F.Costa', data: '17/04 09:15' },
        { anexo: '📎 Material de Embalagem (certificado de análise)',  status: 'ANEXADO', por: 'F.Costa', data: '17/04 07:20' },
      ],
    },
    {
      id: 'lims-granel',
      titulo: 'Boletim de Análise · Granel',
      subtitulo: 'LIMS Nº 18.461 · Aprovado · 16/04/2026',
      icone: '🧫',
      cor: 'verde',
      analise: { numero: '18.461', amostra: '3 frascos · 50 mL', data: '16/04/2026', analista: 'R.Café (LIMS)', parecer: 'Aprovado' },
      ensaios: [
        { ensaio: 'pH',                 esp: '9,5 – 10,5',                       resultado: '10,7',        status: 'Conforme' },
        { ensaio: 'Umidade',            esp: '≤ 25%',                            resultado: '22%',         status: 'Conforme' },
        { ensaio: 'Densidade',          esp: '1,00 – 1,05 g/cm³',                resultado: '1,02 g/cm³',  status: 'Conforme' },
        { ensaio: 'Aspecto',            esp: 'Transparente, isento de partículas', resultado: 'Transparente', status: 'Conforme' },
        { ensaio: 'Cor',                esp: 'Incolor – ligeiramente amarela',   resultado: 'Incolor',     status: 'Conforme' },
        { ensaio: 'Viscosidade (25°C)', esp: '3.500 – 5.500 cP',                 resultado: '4.280 cP',    status: 'Conforme' },
      ],
      memorias: [
        { ensaio: 'Coleta padrão',      equipamento: 'LIMS', serie: 'LIMS-2026-04162', detalhes: 'Lote granel 2551/2026 · ID AM-2026-04162-A · Coleta padrão de Início CQ', assinatura: 'R.Café · 16/04/2026' },
        { ensaio: 'Duplicata retenção', equipamento: 'LIMS', serie: 'LIMS-2026-04163', detalhes: 'Lote granel 2551/2026 · ID AM-2026-04162-B · Coleta duplicata para retenção', assinatura: 'R.Café · 16/04/2026' },
      ],
    },
    {
      id: 'lims-pa',
      titulo: 'Boletim de Análise · Produto Acabado',
      subtitulo: 'LIMS Nº 18.502 · Aprovado · 17/04/2026',
      icone: '🧪',
      cor: 'verde',
      analise: { numero: '18.502', amostra: '20 un', data: '17/04/2026', analista: 'Jessica Costa', parecer: 'Aprovado' },
      ensaios: [
        { ensaio: 'Peso Médio',     esp: '90 g ± 3%',        resultado: '91,4 g',         status: 'Conforme' },
        { ensaio: 'Aspecto Visual', esp: 'Conforme padrão',  resultado: 'Conforme',       status: 'Conforme' },
        { ensaio: 'Hermeticidade',  esp: 'Sem vazamento',    resultado: 'Sem vazamento',  status: 'Conforme' },
      ],
      // Boletim Microbiologico (LIMS Nº 18.503).
      microbiologico: {
        numero: '18.503',
        ensaios: [
          { ensaio: 'Contagem Total Aeróbios', esp: '≤ 100 UFC/g', resultado: '< 10 UFC/g', status: 'Conforme' },
          { ensaio: 'Bolor / Levedura',        esp: '≤ 10 UFC/g',  resultado: '< 10 UFC/g', status: 'Conforme' },
          { ensaio: 'Patógenos',               esp: 'Ausente',     resultado: 'Ausente',    status: 'Conforme' },
        ],
      },
    },
    {
      id: 'qa-reconciliacao',
      titulo: 'Reconciliação Q.A. · Checklist',
      subtitulo: 'Multibatch · amostras de retenção · registros de correção · POP-GQV-0009',
      icone: '📋',
      cor: 'ouro',
      // Multibatch — graneis que compoem o PA.
      multibatch: [
        { n: 1, loteGranel: '2551/2026', wo: 'WO 784426', peso: '4.000 kg', status: 'APROVADO' },
        { n: 2, loteGranel: '2552/2026', wo: 'WO 784427', peso: '2.000 kg', status: 'APROVADO' },
      ],
      // Amostras de Retencao (ANVISA RDC 658/2022 · 1 ano apos validade).
      amostrasRetencao: [
        { n: 1, tipo: '🟢 Início',         caixa: '12', pallet: 'P-07', posicao: 'Estante A · Col 3', qtd: '3 un', obs: 'Coleta padrão início de envase' },
        { n: 2, tipo: '🟡 Meio',           caixa: '13', pallet: 'P-07', posicao: 'Estante A · Col 3', qtd: '3 un', obs: '—' },
        { n: 3, tipo: '🔴 Fim',            caixa: '14', pallet: 'P-07', posicao: 'Estante A · Col 3', qtd: '3 un', obs: '—' },
        { n: 4, tipo: '🔬 Microbiologia',  caixa: '15', pallet: 'P-08', posicao: 'Geladeira micro',  qtd: '2 un', obs: 'Para análise de patógenos' },
        { n: 5, tipo: '⚗️ Físico-Químico', caixa: '16', pallet: 'P-08', posicao: 'Estante B · Col 1', qtd: '2 un', obs: 'pH/umidade/densidade' },
      ],
      // Registros de Correcao.
      registrosCorrecao: [
        { numero: 'RC-2026-1042', classificacao: '🏷️ Divergência de Rotulagem', tipo: '⚙️ Processo', severidade: 'Moderado', area: '📦 Embalagem', titulo: 'Selagem fundo/triângulo divergente em amostra de meio do envase', status: 'ABERTO', aberto: '17/04 11:38' },
      ],
      // Check List de Reconciliacao · POP-GQV-0009/05 · Anexo 2.
      checklistPOP: [
        { n: 1,  item: 'WO com Matérias-Primas Pesadas',                       ok: true },
        { n: 2,  item: 'Etiquetas de Matéria-Prima / Relatório de Pesagem',    ok: true },
        { n: 3,  item: 'Controle de Assinaturas / Assinatura Eletrônica',      ok: true },
        { n: 4,  item: 'Ordem de Fabricação / Relatório do InBatch',           ok: true },
        { n: 5,  item: 'WO Envase EAN / WO Montagem EAN',                      ok: true },
        { n: 6,  item: 'Relatório de Controle em Processo na Linha de Embalagem', ok: true },
        { n: 7,  item: 'Controle de Peso',                                     ok: true },
        { n: 8,  item: 'Ordem de Embalagem',                                   ok: true },
        { n: 9,  item: 'WO Embalagem DUN',                                     ok: true },
        { n: 10, item: 'Boletim de Análise Físico-Químico',                   ok: true },
        { n: 11, item: 'Boletim de Análise Microbiológico',                   ok: true },
        { n: 12, item: 'Relatório de Desvio — Registro vinculado: RC-2026-1042', ok: true },
      ],
    },
    {
      id: 'liberacao',
      titulo: 'Liberação Final',
      subtitulo: 'Lote PA 262417 · Validade 04/2029 · 1 RC em aberto',
      icone: '🏁',
      cor: 'verde',
      assinaturas: [
        { etapa: 'Início do lote',            usuario: 'M.Rocha',        funcao: 'Operador', dataHora: '16/04/2026 07:00:00' },
        { etapa: 'Aprovação CQ Granel',       usuario: 'R.Café (LIMS)',  funcao: 'CQ',       dataHora: '16/04/2026 14:55:00' },
        { etapa: 'Liberação de linha (envase)', usuario: 'F.Costa (212)', funcao: 'Líder',   dataHora: '17/04/2026 07:05:00' },
        { etapa: 'Aprovação Produto Acabado', usuario: 'Jessica Costa',  funcao: 'CQ',       dataHora: '17/04/2026 16:45:34' },
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
  emitido: '15/05/2026 09:02',
  cadeia: DOSSIE.cadeia.map((no) => {
    if (no.id === 'granel') {
      return {
        ...no,
        titulo: 'Granel · S0822B · Lote 2401/2026',
        subtitulo: '5.503 kg · Rendimento 100,05% ✓',
        rendimento: { ...no.rendimento, teorico: '5.500 kg', real: '5.503 kg', calc: '100,05%' },
        etiqueta: { ...no.etiqueta, codigo: 'S0822B', produto: 'TRANSP GRANADO LIMÃO SICILIANO', loteGranel: '2401/2026', qtde: '5.503 kg', dataPesagem: '06/04/2026', validadePA: '20/04/2029', inicioFab: '08/04/2026', fimFab: '08/04/2026' },
      };
    }
    if (no.id === 'embalagem-ean' && no.etiqueta) {
      return {
        ...no,
        subtitulo: 'WO 784348 · 44.218 un · 92,8%',
        info: { ...no.info, of: '784348', inicio: '09/04/2026 08:20', fim: '09/04/2026 18:55' },
        etiqueta: { ...no.etiqueta, ean13: '7896512908005', codigo: '7896512908005', produto: 'SAB. GLICERINA LIMÃO SICILIANO 90G', lote: '261892', wo: '784348', data: '09/04/2026' },
      };
    }
    if (no.id === 'embalagem-dun' && no.etiqueta) {
      return {
        ...no,
        subtitulo: 'WO 784280-D · 614 caixas',
        info: { ...no.info, of: '784280-D', inicio: '09/04/2026 13:30', fim: '09/04/2026 18:55' },
        etiqueta: { ...no.etiqueta, codigo: '27896512908002', gs1: '(01)27896512908002 (10)261892-D (15)042029 (37)24', produto: 'SAB. GLICERINA LIMÃO SICILIANO 90G · CX24', lote: '261892-D', wo: '784280-D', data: '09/04/2026', palete: 'PLT-2026-0429' },
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
  emitido: '15/05/2026 09:02',
  cadeia: DOSSIE.cadeia.map((no) => {
    if (no.id === 'granel') {
      return {
        ...no,
        titulo: 'Granel · S0830B · Lote 2298/2026',
        subtitulo: '4.012 kg · Rendimento 100,30% ✓',
        rendimento: { ...no.rendimento, teorico: '4.000 kg', real: '4.012 kg', calc: '100,30%' },
        etiqueta: { ...no.etiqueta, codigo: 'S0830B', produto: 'TRANSP GRANADO MEL', loteGranel: '2298/2026', qtde: '4.012 kg', dataPesagem: '26/03/2026', validadePA: '12/04/2029', inicioFab: '28/03/2026', fimFab: '28/03/2026' },
      };
    }
    if (no.id === 'embalagem-ean' && no.etiqueta) {
      return {
        ...no,
        subtitulo: 'WO 783920 · 32.140 un · 91,7%',
        info: { ...no.info, of: '783920', inicio: '29/03/2026 09:00', fim: '29/03/2026 17:30' },
        etiqueta: { ...no.etiqueta, ean13: '7896512911005', codigo: '7896512911005', produto: 'SAB. GLICERINA MEL 90G', lote: '261104', wo: '783920', data: '29/03/2026' },
      };
    }
    if (no.id === 'embalagem-dun' && no.etiqueta) {
      return {
        ...no,
        subtitulo: 'WO 783854-D · 446 caixas',
        info: { ...no.info, of: '783854-D', inicio: '29/03/2026 13:00', fim: '29/03/2026 17:30' },
        etiqueta: { ...no.etiqueta, codigo: '27896512911002', gs1: '(01)27896512911002 (10)261104-D (15)042029 (37)24', produto: 'SAB. GLICERINA MEL 90G · CX24', lote: '261104-D', wo: '783854-D', data: '29/03/2026', palete: 'PLT-2026-0418' },
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