// AUTO-GERADO a partir de:
//   01 - Levantamento de Campo/MATRIZ DE QUALIFICACAO.xlsx
//   aba: QUALIFICACAO - INVENT. DE EQUIP
//
// Hierarquia: MF -> Area -> Local -> Equipamento
// O `status` de cada equipamento (ok/alr/err/idle) e ficticio e determinist.
// (gerado por hash do codigo, distribuicao ~70% ok / 20% alr / 7% err / 3% idle)
//
// Para regenerar: python scripts/build-inventario.py

export const STATUS_LABEL = {
  ok:   'Operando',
  alr:  'Alerta',
  err:  'Parada',
  idle: 'Aguardando',
};

export const INVENTARIO_PRODUCAO = {
MF1: {
  titulo: "MF1",
  status: "ativa",
  areas: [
  {
    id: "mf1-embalagem", nome: "EMBALAGEM",
    locais: [
    {
      id: "mf1-embalagem-linha-de-encartuchamento---infantil-adulto", nome: "LINHA DE ENCARTUCHAMENTO - INFANTIL/ADULTO",
      equipamentos: [
        { codigo: "SIVC-154025", descricao: "SISTEMA DE VISÃO - EMBALAGEM", status: "ok" },
        { codigo: "DATA-154023", descricao: "DATADORA 1050 - EMBALAGEM", status: "ok" },
      ],
    },
    {
      id: "mf1-embalagem-polvilho-perfumado", nome: "POLVILHO PERFUMADO",
      equipamentos: [
        { codigo: "ENVA-002", descricao: "ENVASADORA DE POLVILHO PERFUMADO + ALIMENTADOR DE TAMPAS POLVILHO PERFUMADO", status: "alr" },
        { codigo: "VITA-001", descricao: "ENVASADORA DE POLVILHO PERFUMADO + ALIMENTADOR DE TAMPAS POLVILHO PERFUMADO", status: "ok" },
        { codigo: "DATA-027", descricao: "CODIFICADORA VIDEO JET POLV. PERFUMADO", status: "err" },
        { codigo: "BALD-152018", descricao: "BALANÇA DINÂMICA CHECKWEIGHER", status: "ok" },
      ],
    },
    {
      id: "mf1-embalagem-polvilho-tradicional", nome: "POLVILHO TRADICIONAL",
      equipamentos: [
        { codigo: "ENVA-001", descricao: "ENVASADORA ALL FILL", status: "err" },
        { codigo: "DATA-026", descricao: "CODIFICADORA VIDEO JET POLV. TRADICIONAL", status: "alr" },
        { codigo: "BALD-158", descricao: "BALANÇA DINÂMICA CHECKWEIGHER", status: "ok" },
      ],
    },
    {
      id: "mf1-embalagem-supositorio", nome: "SUPOSITÓRIO",
      equipamentos: [
        { codigo: "BALD-008", descricao: "BALANÇA CHECADORA", status: "ok" },
        { codigo: "CORT-008", descricao: "ENVASADORA DE SUPOSITÓRIO ADULTO +\n UNIDADE DE CORTE CT1", status: "err" },
        { codigo: "ENVA-005", descricao: "ENVASADORA DE SUPOSITÓRIO INFANTIL/ LACTENTE", status: "ok" },
        { codigo: "ENVA-005", descricao: "ENVASADORA DE SUPOSITÓRIO INFANTIL/ LACTENTE", status: "ok" },
        { codigo: "ENVA-005", descricao: "ENVASADORA DE SUPOSITÓRIO INFANTIL/ LACTENTE", status: "ok" },
      ],
    },
    {
      id: "mf1-embalagem-supositorio-adulto", nome: "SUPOSITÓRIO ADULTO",
      equipamentos: [
        { codigo: "ENVA-004", descricao: "ENVASADORA DE SUPOSITÓRIO ADULTO +\n UNIDADE DE CORTE CT1", status: "alr" },
      ],
    },
    {
      id: "mf1-embalagem-supositorio-adulto--infantil-e-lactente", nome: "SUPOSITÓRIO ADULTO, INFANTIL E LACTENTE",
      equipamentos: [
        { codigo: "APLC 005", descricao: "Hot Melt NORDSON", status: "ok" },
      ],
    },
    {
      id: "mf1-embalagem-talco-bebê", nome: "TALCO BEBÊ",
      equipamentos: [
        { codigo: "ENVA-003", descricao: "ENVASADORA DE TALCO BEBÊ + \nALIMENTADOR DE TAMPAS TALCO BEBÊ", status: "ok" },
        { codigo: "VITA-002", descricao: "ENVASADORA DE TALCO BEBÊ + \nALIMENTADOR DE TAMPAS TALCO BEBÊ", status: "alr" },
        { codigo: "DATA-028", descricao: "CODIFICADORA VIDEO JET TALCO BEBÊ", status: "ok" },
      ],
    },
    ],
  },
  {
    id: "mf1-envase", nome: "ENVASE",
    locais: [
    {
      id: "mf1-envase-supositorio-adulto", nome: "SUPOSITÓRIO ADULTO",
      equipamentos: [
        { codigo: "SIVC-154015", descricao: "SISTEMA DE VISÃO MARKEM IMAJE", status: "ok" },
        { codigo: "FILT-154014 / FILT-154024", descricao: "SISTEMA DE VISÃO MARKEM IMAJE - FILTROS", status: "alr" },
        { codigo: "DATA-154013", descricao: "DATADORA SMART LASER", status: "ok" },
      ],
    },
    {
      id: "mf1-envase-supositorio-infantil-lactente", nome: "SUPOSITÓRIO INFANTIL-LACTENTE",
      equipamentos: [
        { codigo: "SIVC-155015", descricao: "SISTEMA DE VISÃO MARKEM IMAJE", status: "ok" },
        { codigo: "FILT-155014 / FILT-155014", descricao: "SISTEMA DE VISÃO MARKEM IMAJE - FILTROS", status: "err" },
        { codigo: "DATA-155013", descricao: "DATADORA SMART LASER", status: "alr" },
      ],
    },
    ],
  }
  ],
},
MF2: {
  titulo: "MF2",
  status: "ativa",
  areas: [
  {
    id: "mf2-embalagem", nome: "EMBALAGEM",
    locais: [
    {
      id: "mf2-embalagem-linha-a", nome: "LINHA A",
      equipamentos: [
        { codigo: "ENVA-006", descricao: "ENVASADORA 10 BICOS PROMÁQUINA", status: "ok" },
      ],
    },
    {
      id: "mf2-embalagem-linha-b", nome: "LINHA B",
      equipamentos: [
        { codigo: "ENVA-007", descricao: "ENVASADORA 2 BICOS VOLPAK", status: "alr" },
        { codigo: "TQDP-004", descricao: "ENVASADORA 2 BICOS VOLPAK", status: "ok" },
        { codigo: "ENVA-252011", descricao: "ENVASADORA 4 BICOS VOLPAK", status: "err" },
        { codigo: "TQDP-252011", descricao: "TREMONHA VOLPAK", status: "ok" },
      ],
    },
    {
      id: "mf2-embalagem-linha-c", nome: "LINHA C",
      equipamentos: [
        { codigo: "ENVA-008", descricao: "ENVASADORA 4 BICOS VOLPAK", status: "alr" },
        { codigo: "TQDP- 005", descricao: "ENVASADORA 4 BICOS VOLPAK", status: "alr" },
        { codigo: "DATA-041", descricao: "VIDEOJET 1580", status: "ok" },
      ],
    },
    {
      id: "mf2-embalagem-linha-d", nome: "LINHA D",
      equipamentos: [
        { codigo: "ENVA-009", descricao: "ENVASADORA 6 BICOS PROMÁQUINA", status: "ok" },
      ],
    },
    {
      id: "mf2-embalagem-linha-e", nome: "LINHA E",
      equipamentos: [
        { codigo: "ENVA-010", descricao: "ENVASADORA 6 BICOS PROMÁQUINA", status: "ok" },
      ],
    },
    {
      id: "mf2-embalagem-linha-f", nome: "LINHA F",
      equipamentos: [
        { codigo: "ENVA-011", descricao: "ENVASADORA 6 BICOS PROMÁQUINA", status: "ok" },
      ],
    },
    {
      id: "mf2-embalagem-linha-g", nome: "LINHA G",
      equipamentos: [
        { codigo: "ENVA-033", descricao: "ENVASADORA 2 BICOS PROMÁQUINA", status: "alr" },
        { codigo: "ENVA-012", descricao: "ENVASADORA 8 BICOS CAM", status: "alr" },
      ],
    },
    {
      id: "mf2-embalagem-linha-h", nome: "LINHA H",
      equipamentos: [
        { codigo: "ENVA-013", descricao: "ENVASADORA 2 BICOS (POTES)", status: "ok" },
      ],
    },
    {
      id: "mf2-embalagem-linha-i", nome: "LINHA I",
      equipamentos: [
        { codigo: "ENVA-014", descricao: "ENVASADORA TGM I", status: "ok" },
      ],
    },
    {
      id: "mf2-embalagem-linha-j", nome: "LINHA J",
      equipamentos: [
        { codigo: "ENVA-015", descricao: "ENVASADORA TGM J", status: "ok" },
      ],
    },
    {
      id: "mf2-embalagem-movel-mf2", nome: "MÓVEL MF2",
      equipamentos: [
        { codigo: "ENVA-032", descricao: "ENVASADORA 1 BICO (ÓLEO)", status: "ok" },
        { codigo: "ENVA-025", descricao: "ENVASADORA 4 BICOS GRANADO", status: "ok" },
      ],
    },
    {
      id: "mf2-embalagem-sais", nome: "SAIS",
      equipamentos: [
        { codigo: "ENVA-031", descricao: "MÁQUINA DE SACHET", status: "ok" },
      ],
    },
    ],
  }
  ],
},
MF3: {
  titulo: "MF3",
  status: "ativa",
  areas: [
  {
    id: "mf3-embalagem", nome: "EMBALAGEM",
    locais: [
    {
      id: "mf3-embalagem-envase-de-solido-farmacêutico--veterinario", nome: "ENVASE DE SÓLIDO FARMACÊUTICO (VETERINÁRIO)",
      equipamentos: [
        { codigo: "ENVA-023", descricao: "ENVASADORA VETRACO", status: "ok" },
        { codigo: "ENVA-034", descricao: "ENVASADORA DE PÓ", status: "ok" },
      ],
    },
    {
      id: "mf3-embalagem-fabricacao-e-envase-de-liquido-farmacêutico--veterinario", nome: "FABRICAÇÃO E ENVASE DE LÍQUIDO FARMACÊUTICO (VETERINÁRIO)",
      equipamentos: [
        { codigo: "ENVA-022", descricao: "CONJUNTO DE ENVASE MILLI", status: "ok" },
        { codigo: "TQMT-004", descricao: "CONJUNTO DE ENVASE MILLI", status: "ok" },
      ],
    },
    {
      id: "mf3-embalagem-linha-a", nome: "LINHA A",
      equipamentos: [
        { codigo: "ENVA-017", descricao: "ENVASADORA DE 2 BICOS DE CERA", status: "ok" },
      ],
    },
    {
      id: "mf3-embalagem-linha-b", nome: "LINHA B",
      equipamentos: [
        { codigo: "ENVA-019", descricao: "ENVASADORA 1 BICO TECNICOLL 2", status: "ok" },
        { codigo: "ENVA-020", descricao: "ENVASADORA DE 1 BICO", status: "ok" },
        { codigo: "ENVA-021", descricao: "ENVASADORA DE 1 BICO BIASO", status: "ok" },
      ],
    },
    {
      id: "mf3-embalagem-sala-de-vela-1", nome: "SALA DE VELA 1",
      equipamentos: [
        { codigo: "ENVA-311037", descricao: "ENVASADORA DE BOMBA DUPLA AQUECIDA", status: "ok" },
        { codigo: "ENVA-311038", descricao: "ENVASADORA DE BOMBA DUPLA AQUECIDA", status: "idle" },
      ],
    },
    {
      id: "mf3-embalagem-sala-de-vela-2", nome: "SALA DE VELA 2",
      equipamentos: [
        { codigo: "ENVA-312039", descricao: "ENVASADORA DE BOMBA DUPLA AQUECIDA", status: "err" },
        { codigo: "ENVA-312040", descricao: "ENVASADORA DE BOMBA DUPLA AQUECIDA", status: "ok" },
      ],
    },
    ],
  }
  ],
},
MF4: {
  titulo: "MF4",
  status: "ativa",
  areas: [
  {
    id: "mf4-embalagem", nome: "EMBALAGEM",
    locais: [
    {
      id: "mf4-embalagem-linha-d", nome: "LINHA D",
      equipamentos: [
        { codigo: "ENVA-026", descricao: "PKB ROBO E UNIT", status: "alr" },
        { codigo: "DEPK-001", descricao: "PKB ROBO E UNIT", status: "ok" },
        { codigo: "BATO-001", descricao: "PKB ROBO E UNIT", status: "ok" },
        { codigo: "PKBU-001", descricao: "PKB ROBO E UNIT", status: "ok" },
        { codigo: "DATA-025", descricao: "CODIFICADORA A LASER", status: "alr" },
      ],
    },
    {
      id: "mf4-embalagem-linha-e", nome: "LINHA E",
      equipamentos: [
        { codigo: "ENVA-028", descricao: "ENVASADORA DE COLÔNIA PKB", status: "err" },
      ],
    },
    {
      id: "mf4-embalagem-linha-f", nome: "LINHA F",
      equipamentos: [
        { codigo: "ENVA-029", descricao: "ENVASADORA DE DESODORANTE TEKNIZA", status: "idle" },
      ],
    },
    ],
  }
  ],
},
MF5: {
  titulo: "MF5",
  status: "ativa",
  areas: [
  {
    id: "mf5-embalagem", nome: "EMBALAGEM",
    locais: [
    {
      id: "mf5-embalagem-linha-a", nome: "LINHA A",
      equipamentos: [
        { codigo: "BALD-002", descricao: "BALANÇA DINÂMICA", status: "err" },
        { codigo: "CORT-001", descricao: "CORTADOR DE BARRAS DIVAMAQ", status: "ok" },
        { codigo: "DATA-001", descricao: "CODIFICADORA VIDEOJET 3340", status: "ok" },
        { codigo: "DETM-001", descricao: "DETECTOR DE METAIS", status: "ok" },
        { codigo: "EMBL-001", descricao: "WRAPPER BINACCHI", status: "ok" },
        { codigo: "PREN-001", descricao: "PRENSA BINACCHI", status: "ok" },
        { codigo: "TURF-001", descricao: "TURBOFLOW DA PRENSA", status: "ok" },
      ],
    },
    {
      id: "mf5-embalagem-linha-b", nome: "LINHA B",
      equipamentos: [
        { codigo: "BALD-003", descricao: "BALANÇA DINÂMICA", status: "ok" },
        { codigo: "BALD-004", descricao: "BALANÇA DINÂMICA", status: "idle" },
        { codigo: "CORT-009", descricao: "CORTADOR DE BARRAS DIVAMAQ", status: "ok" },
        { codigo: "DATA-002", descricao: "CODIFICADORA VIDEOJET", status: "alr" },
        { codigo: "DETM-002", descricao: "DETECTOR DE METAIS", status: "alr" },
        { codigo: "EMBL-002", descricao: "WRAPPER BINACCHI", status: "ok" },
        { codigo: "PREN-002", descricao: "PRENSA BINACCHI", status: "ok" },
        { codigo: "TURF-002", descricao: "TURBOFLOW DA PRENSA", status: "ok" },
      ],
    },
    {
      id: "mf5-embalagem-linha-c", nome: "LINHA C",
      equipamentos: [
        { codigo: "APLC-001", descricao: "APLICADOR DE COLA", status: "ok" },
        { codigo: "BALD-005", descricao: "BALANÇA DINÂMICA", status: "ok" },
        { codigo: "BALD-006", descricao: "BALANÇA DINÂMICA", status: "ok" },
        { codigo: "CORT-003", descricao: "CORTADOR DE BARRAS DIVAMAQ", status: "ok" },
        { codigo: "DATA-007", descricao: "CODIFICADORA VIDEOJET 3340", status: "ok" },
        { codigo: "DETM-003", descricao: "DETECTOR DE METAIS", status: "ok" },
        { codigo: "EMBL-003", descricao: "WRAPPER BINACCHI", status: "ok" },
        { codigo: "FLPK-001", descricao: "FLOW WRAPPER EUROSICMA", status: "err" },
        { codigo: "PREN-003", descricao: "PRENSA BINACCHI", status: "ok" },
        { codigo: "TURF-003", descricao: "TURBOFLOW DA PRENSA", status: "alr" },
      ],
    },
    {
      id: "mf5-embalagem-linha-d", nome: "LINHA D",
      equipamentos: [
        { codigo: "APLC-002", descricao: "APLICADOR DE COLA", status: "ok" },
        { codigo: "BALD-007", descricao: "BALANÇA DINÂMICA", status: "alr" },
        { codigo: "CORT-004", descricao: "CORTADOR DE MASSA", status: "ok" },
        { codigo: "DETM-004", descricao: "DETECTOR DE METAIS", status: "ok" },
        { codigo: "EMBL-004", descricao: "EMBRULHADORA", status: "ok" },
        { codigo: "EXTR-006", descricao: "EXTRUSORA BINACCHI", status: "ok" },
        { codigo: "FLPK-002", descricao: "FLOW WRAPPER EUROSICMA", status: "ok" },
        { codigo: "PREN-004", descricao: "PRENSA BINACCHI", status: "ok" },
        { codigo: "TURF-004", descricao: "TURBOFLOW DA PRENSA", status: "err" },
      ],
    },
    {
      id: "mf5-embalagem-linha-e", nome: "LINHA E",
      equipamentos: [
        { codigo: "APLC-003", descricao: "APLICADOR DE COLA", status: "alr" },
        { codigo: "BALM-001", descricao: "BALANÇA MANUAL", status: "ok" },
        { codigo: "CORT-005", descricao: "CORTADOR DE MASSA", status: "ok" },
        { codigo: "DETM-005", descricao: "DETECTOR DE METAIS", status: "alr" },
        { codigo: "EXTR-003", descricao: "EXTRUSORA", status: "ok" },
        { codigo: "FLPK-003", descricao: "FLOW WRAPPER", status: "alr" },
        { codigo: "PREN-005", descricao: "PRENSA", status: "ok" },
      ],
    },
    {
      id: "mf5-embalagem-linha-f", nome: "LINHA F",
      equipamentos: [
        { codigo: "APLC-004", descricao: "APLICADOR DE COLA", status: "ok" },
        { codigo: "BALM-002", descricao: "BALANÇA MANUAL", status: "ok" },
        { codigo: "CORT-007", descricao: "CORTADOR DE MASSA", status: "ok" },
        { codigo: "DATA-009", descricao: "CODIFICADORA VIDEOJET", status: "ok" },
        { codigo: "DETM-006", descricao: "DETECTOR DE METAIS", status: "ok" },
        { codigo: "FLPK-004", descricao: "FLOW WRAPPER", status: "alr" },
        { codigo: "PREN-008", descricao: "PRENSA MODELADORA", status: "ok" },
      ],
    },
    {
      id: "mf5-embalagem-linha-g", nome: "LINHA G",
      equipamentos: [
        { codigo: "CORT-010", descricao: "CORTADOR DE BARRAS", status: "ok" },
        { codigo: "DATA-008", descricao: "DATADORA", status: "ok" },
        { codigo: "EMBL-005", descricao: "EMBRULHADORA", status: "ok" },
        { codigo: "PREN-009", descricao: "PRENSA MODELADORA", status: "ok" },
      ],
    },
    {
      id: "mf5-embalagem-linha-h", nome: "LINHA H",
      equipamentos: [
        { codigo: "EMBL-006", descricao: "PLISSADORA", status: "ok" },
        { codigo: "EMBL-007", descricao: "PLISSADORA", status: "alr" },
      ],
    },
    {
      id: "mf5-embalagem-linha-i", nome: "LINHA I",
      equipamentos: [
        { codigo: "CORT-559001", descricao: "CORTADORA DIVAMAQ", status: "ok" },
        { codigo: "BALD-559002", descricao: "BALANÇA E DETECTOR DE METAL", status: "ok" },
        { codigo: "PREN-559003", descricao: "PRENSA BINACCHI", status: "alr" },
        { codigo: "EMBL-559004", descricao: "EMBRULHADORA", status: "ok" },
      ],
    },
    ],
  }
  ],
},
};

export const INVENTARIO_FABRICACAO = {
MF1: {
  titulo: "MF1",
  status: "ativa",
  areas: [
  {
    id: "mf1-fabricacao", nome: "FABRICAÇÃO",
    locais: [
    {
      id: "mf1-fabricacao-polvilho-perfumado", nome: "POLVILHO PERFUMADO",
      equipamentos: [
        { codigo: "STCB-002", descricao: "SISTEMA TECBELT POLVILHO PERFUMADO (MOINHO, SILO 1, SILO 2, ESTEIRA TRANSPORTADORA, FILTROS CARTUCHOS, MISTURADOR, ROSCA TRANSPORTADORA E CILINDRO DE ESSÊNCIA)", status: "alr" },
      ],
    },
    {
      id: "mf1-fabricacao-polvilho-tradicional", nome: "POLVILHO TRADICIONAL",
      equipamentos: [
        { codigo: "STCB-001", descricao: "SISTEMA TECBELT POLVILHO TRADICIONAL (MOINHO, SILO 1, SILO 2, ESTEIRA TRANSPORTADORA, FILTROS CARTUCHOS, MISTURADOR E ROSCA TRANSPORTADORA)", status: "ok" },
      ],
    },
    {
      id: "mf1-fabricacao-supositorio-adulto", nome: "SUPOSITÓRIO ADULTO",
      equipamentos: [
        { codigo: "RESU-001", descricao: "REATOR KROMA", status: "ok" },
        { codigo: "RESU-002", descricao: "REATOR KROMA", status: "ok" },
      ],
    },
    {
      id: "mf1-fabricacao-supositorio-adulto--infantil-e-lactente", nome: "SUPOSITÓRIO ADULTO, INFANTIL E LACTENTE",
      equipamentos: [
        { codigo: "ENCA-005", descricao: "ENCARTUCHADORA TGM TAG 025 + HOT MELT TAG 014", status: "err" },
      ],
    },
    {
      id: "mf1-fabricacao-supositorio-infantil-lactente", nome: "SUPOSITÓRIO INFANTIL-LACTENTE",
      equipamentos: [
        { codigo: "RESU-003", descricao: "REATOR MOTORQUE", status: "ok" },
        { codigo: "RESU-004", descricao: "REATOR MOTORQUE", status: "ok" },
      ],
    },
    {
      id: "mf1-fabricacao-talco-bebê", nome: "TALCO BEBÊ",
      equipamentos: [
        { codigo: "STCB-003", descricao: "SISTEMA TECBELT TALCO BEBÊ (MOINHO, SILO 1, SILO 2, ESTEIRA TRANSPORTADORA, FILTROS CARTUCHOS, MISTURADOR, ROSCA TRANSPORTADORA E CILINDRO DE ESSÊNCIA)", status: "idle" },
      ],
    },
    ],
  }
  ],
},
MF2: {
  titulo: "MF2",
  status: "ativa",
  areas: [
  {
    id: "mf2-deposito", nome: "DEPÓSITO",
    locais: [
    {
      id: "mf2-deposito-fixos-mf2", nome: "FIXOS MF2",
      equipamentos: [
        { codigo: "TQCM-001", descricao: "TANQUE DEPÓSITO", status: "alr" },
        { codigo: "TQCM-002", descricao: "TANQUE DEPÓSITO", status: "err" },
        { codigo: "TQCM-003", descricao: "TANQUE DEPÓSITO", status: "ok" },
        { codigo: "TQCM-004", descricao: "TANQUE DEPÓSITO", status: "ok" },
        { codigo: "TQCM-005", descricao: "TANQUE DEPÓSITO", status: "ok" },
        { codigo: "TQCM-006", descricao: "TANQUE DEPÓSITO", status: "ok" },
        { codigo: "TQCM-007", descricao: "TANQUE DEPÓSITO", status: "ok" },
        { codigo: "TQCM-008", descricao: "TANQUE DEPÓSITO", status: "err" },
        { codigo: "TQCM-009", descricao: "TANQUE DEPÓSITO", status: "ok" },
        { codigo: "TQCM-010", descricao: "TANQUE DEPÓSITO", status: "ok" },
        { codigo: "TQCM-011", descricao: "TANQUE DEPÓSITO", status: "ok" },
        { codigo: "TQCM-012", descricao: "TANQUE DEPÓSITO", status: "alr" },
        { codigo: "TQCM-013", descricao: "TANQUE DEPÓSITO", status: "ok" },
        { codigo: "TQCM-014", descricao: "TANQUE DEPÓSITO", status: "ok" },
        { codigo: "TQCM-015", descricao: "TANQUE DEPÓSITO", status: "ok" },
        { codigo: "TQCM-016", descricao: "TANQUE DEPÓSITO", status: "alr" },
        { codigo: "TQCM-017", descricao: "TANQUE DEPÓSITO", status: "ok" },
        { codigo: "TQCM-018", descricao: "TANQUE DEPÓSITO", status: "ok" },
      ],
    },
    ],
  },
  {
    id: "mf2-fabricacao", nome: "FABRICAÇÃO",
    locais: [
    {
      id: "mf2-fabricacao-movel-mf2", nome: "MÓVEL MF2",
      equipamentos: [
        { codigo: "ESTF-210010", descricao: "ESTUFA CBL EC-1283", status: "ok" },
      ],
    },
    {
      id: "mf2-fabricacao-sais", nome: "SAIS",
      equipamentos: [
        { codigo: "REAT-044", descricao: "REATOR DE SAIS", status: "alr" },
      ],
    },
    {
      id: "mf2-fabricacao-sala-1", nome: "SALA 1",
      equipamentos: [
        { codigo: "REAT-003", descricao: "REATOR AUXILIAR 300L", status: "ok" },
        { codigo: "REAT-002", descricao: "REATOR PRINCIPAL 2000L", status: "ok" },
      ],
    },
    {
      id: "mf2-fabricacao-sala-10", nome: "SALA 10",
      equipamentos: [
        { codigo: "REAT-020", descricao: "REATOR PRINCIPAL 3500L", status: "ok" },
        { codigo: "REAT-021", descricao: "REATOR AUXILIAR 500L", status: "ok" },
      ],
    },
    {
      id: "mf2-fabricacao-sala-11", nome: "SALA 11",
      equipamentos: [
        { codigo: "REAT-022", descricao: "REATOR PRINCIPAL 3500L", status: "ok" },
        { codigo: "REAT-023", descricao: "REATOR AUXILIAR 500L", status: "err" },
      ],
    },
    {
      id: "mf2-fabricacao-sala-2", nome: "SALA 2",
      equipamentos: [
        { codigo: "REAT-004", descricao: "REATOR PRINCIPAL 2000L", status: "ok" },
        { codigo: "REAT-005", descricao: "REATOR AUXILIAR 600L", status: "ok" },
      ],
    },
    {
      id: "mf2-fabricacao-sala-2a", nome: "SALA 2A",
      equipamentos: [
        { codigo: "REAT-007", descricao: "REATOR AUXILIAR 100L", status: "ok" },
        { codigo: "REAT-006", descricao: "REATOR PRINCIPAL 600L", status: "ok" },
      ],
    },
    {
      id: "mf2-fabricacao-sala-3", nome: "SALA 3",
      equipamentos: [
        { codigo: "REAT-009", descricao: "REATOR AUXILIAR 300L", status: "alr" },
        { codigo: "REAT-008", descricao: "REATOR PRINCIPAL 3500L", status: "err" },
      ],
    },
    {
      id: "mf2-fabricacao-sala-4", nome: "SALA 4",
      equipamentos: [
        { codigo: "REAT-011", descricao: "REATOR AUXILIAR 500L", status: "ok" },
        { codigo: "REAT-010", descricao: "REATOR PRINCIPAL 10000L", status: "ok" },
      ],
    },
    {
      id: "mf2-fabricacao-sala-5", nome: "SALA 5",
      equipamentos: [
        { codigo: "REAT-013", descricao: "REATOR AUXILIAR 500L", status: "ok" },
        { codigo: "REAT-012", descricao: "REATOR PRINCIPAL 10000L", status: "alr" },
      ],
    },
    {
      id: "mf2-fabricacao-sala-6", nome: "SALA 6",
      equipamentos: [
        { codigo: "REAT-015", descricao: "REATOR AUXILIAR 300L", status: "alr" },
        { codigo: "REAT-014", descricao: "REATOR PRINCIPAL 1000L", status: "ok" },
      ],
    },
    {
      id: "mf2-fabricacao-sala-7", nome: "SALA 7",
      equipamentos: [
        { codigo: "REAT-016", descricao: "REATOR PRINCIPAL 1000L", status: "ok" },
        { codigo: "REAT-017", descricao: "REATOR AUXILIAR 350L", status: "ok" },
      ],
    },
    {
      id: "mf2-fabricacao-sala-8", nome: "SALA 8",
      equipamentos: [
        { codigo: "REAT-019", descricao: "REATOR AUXILIAR 300L", status: "alr" },
        { codigo: "REAT-018", descricao: "REATOR PRINCIPAL 2000L", status: "ok" },
      ],
    },
    ],
  }
  ],
},
MF3: {
  titulo: "MF3",
  status: "ativa",
  areas: [
  {
    id: "mf3-fabricacao", nome: "FABRICAÇÃO",
    locais: [
    {
      id: "mf3-fabricacao-fabricacao-de-solido-farmacêutico--veterinario", nome: "FABRICAÇÃO DE SÓLIDO FARMACÊUTICO (VETERINÁRIO)",
      equipamentos: [
        { codigo: "TRIT-001", descricao: "TRITURADOR INDUSTRIAL", status: "alr" },
        { codigo: "MPUL-001", descricao: "MOINHO PULVERIZADOR", status: "ok" },
      ],
    },
    {
      id: "mf3-fabricacao-fabricacao-de-solido-farmacêutico-2--veterinario", nome: "FABRICAÇÃO DE SÓLIDO FARMACÊUTICO 2 (VETERINÁRIO)",
      equipamentos: [
        { codigo: "TQMT-003", descricao: "MISTURADOR RIBBON BLENDER", status: "ok" },
      ],
    },
    {
      id: "mf3-fabricacao-linha-b", nome: "LINHA B",
      equipamentos: [
        { codigo: "REAT-029", descricao: "REATOR DE FABRICAÇÃO ALWIS", status: "ok" },
        { codigo: "REAT-026", descricao: "REATOR DE FABRICAÇÃO ERLI", status: "alr" },
        { codigo: "REAT-027", descricao: "REATOR DE FABRICAÇÃO ALWIS", status: "ok" },
        { codigo: "REAT-028", descricao: "REATOR DE FABRICAÇÃO ALWIS", status: "idle" },
      ],
    },
    {
      id: "mf3-fabricacao-nova-sala-de-fabricacao-de-sais-e-escalda-pes", nome: "NOVA SALA DE FABRICAÇÃO DE SAIS E ESCALDA PÉS",
      equipamentos: [
        { codigo: "ENVA-350011", descricao: "ENVASADORA DE SIAS", status: "err" },
        { codigo: "MIST-350012", descricao: "MISTURADOR DE SAIS", status: "alr" },
      ],
    },
    {
      id: "mf3-fabricacao-sala-de-maquiagem", nome: "SALA DE MAQUIAGEM",
      equipamentos: [
        { codigo: "REAT-027", descricao: "REATOR ALWIS", status: "ok" },
        { codigo: "REAT-028", descricao: "REATOR ALWIS", status: "idle" },
      ],
    },
    {
      id: "mf3-fabricacao-sala-de-vela-1", nome: "SALA DE VELA 1",
      equipamentos: [
        { codigo: "REAT-311001", descricao: "REATOR DE FABRICAÇÃO DE VELA 500KG", status: "ok" },
      ],
    },
    {
      id: "mf3-fabricacao-sala-de-vela-2", nome: "SALA DE VELA 2",
      equipamentos: [
        { codigo: "REAT-312001", descricao: "REATOR DE FABRICAÇÃO DE VELA 500KG", status: "ok" },
        { codigo: "REAT-312005", descricao: "REATOR DE FABRICAÇÃO DE VELA 150KG", status: "ok" },
      ],
    },
    ],
  }
  ],
},
MF4: {
  titulo: "MF4",
  status: "ativa",
  areas: [
  {
    id: "mf4-fabricacao", nome: "FABRICAÇÃO",
    locais: [
    {
      id: "mf4-fabricacao-linha-f", nome: "LINHA F",
      equipamentos: [
        { codigo: "MIST-010", descricao: "TANQUE MÓVEL", status: "ok" },
      ],
    },
    {
      id: "mf4-fabricacao-sala-1", nome: "SALA 1",
      equipamentos: [
        { codigo: "REAT-031", descricao: "REATOR DE FABRICAÇÃO DE 2000L", status: "alr" },
        { codigo: "REAT-032", descricao: "REATOR DE FABRICAÇÃO DE 2000L", status: "ok" },
      ],
    },
    {
      id: "mf4-fabricacao-sala-2", nome: "SALA 2",
      equipamentos: [
        { codigo: "REAT-045", descricao: "BIN MÓVEL 300L", status: "ok" },
        { codigo: "REAT-046", descricao: "BIN MÓVEL 300L", status: "alr" },
        { codigo: "REAT-047", descricao: "BIN MÓVEL 300L", status: "alr" },
        { codigo: "REAT-048", descricao: "BIN MÓVEL 300L", status: "ok" },
        { codigo: "REAT-049", descricao: "BIN MÓVEL 300L", status: "ok" },
        { codigo: "REAT-050", descricao: "BIN MÓVEL 300L", status: "ok" },
        { codigo: "REAT-037", descricao: "REATOR DE FABRICAÇÃO DE 300L", status: "ok" },
        { codigo: "REAT-038", descricao: "REATOR DE FABRICAÇÃO DE 300L", status: "ok" },
        { codigo: "REAT-039", descricao: "REATOR DE FABRICAÇÃO DE 300L", status: "ok" },
        { codigo: "REAT-040", descricao: "REATOR DE FABRICAÇÃO DE 300L", status: "alr" },
        { codigo: "REAT-041", descricao: "REATOR DE FABRICAÇÃO DE 300L", status: "ok" },
        { codigo: "REAT-042", descricao: "REATOR DE FABRICAÇÃO DE 300L", status: "ok" },
        { codigo: "SKID-008", descricao: "SKID DE FILTRAGEM DE COLÔNIAS E PERFUMES", status: "ok" },
        { codigo: "TQMV-012", descricao: "TANQUE MÓVEL 1000L", status: "ok" },
        { codigo: "TQMV-005", descricao: "TANQUE MÓVEL 1000L", status: "ok" },
        { codigo: "TQMV-007", descricao: "TANQUE MÓVEL 1000L", status: "err" },
        { codigo: "TQMV-009", descricao: "TANQUE MÓVEL 1000L", status: "ok" },
        { codigo: "TQMV-011", descricao: "TANQUE MÓVEL 1000L", status: "ok" },
        { codigo: "TQMV-006", descricao: "TANQUE MÓVEL 1000L", status: "err" },
        { codigo: "TQMV-010", descricao: "TANQUE MÓVEL 1000L", status: "ok" },
        { codigo: "TQMV-003", descricao: "TANQUE MÓVEL 1000L", status: "ok" },
        { codigo: "TQMV-004", descricao: "TANQUE MÓVEL 1000L", status: "ok" },
        { codigo: "TQMV-002", descricao: "TANQUE MÓVEL 1000L", status: "ok" },
        { codigo: "TQMV-008", descricao: "TANQUE MÓVEL 1000L", status: "ok" },
        { codigo: "TQMV-001", descricao: "TANQUE MÓVEL 1000L", status: "alr" },
        { codigo: "TQMV-013", descricao: "TANQUE MÓVEL 200L", status: "alr" },
        { codigo: "TQMV-015", descricao: "TANQUE MÓVEL 200L", status: "ok" },
        { codigo: "TQMV-016", descricao: "TANQUE MÓVEL 200L", status: "alr" },
        { codigo: "TQMV-017", descricao: "TANQUE MÓVEL 200L", status: "ok" },
        { codigo: "TQMV-018", descricao: "TANQUE MÓVEL 200L", status: "ok" },
        { codigo: "TQMV-019", descricao: "TANQUE MÓVEL 1000L", status: "ok" },
        { codigo: "TQMV-020", descricao: "TANQUE MÓVEL 1000L", status: "alr" },
        { codigo: "TQMV-021", descricao: "TANQUE MÓVEL 1000L", status: "ok" },
        { codigo: "TQMV-022", descricao: "TANQUE MÓVEL 1000L", status: "ok" },
        { codigo: "TQMV-023", descricao: "TANQUE MÓVEL 1000L", status: "ok" },
        { codigo: "TQMV-014", descricao: "TANQUE MÓVEL 200L", status: "ok" },
        { codigo: "REAT-033", descricao: "REATOR DE FABRICAÇÃO 1000L", status: "ok" },
        { codigo: "REAT-034", descricao: "REATOR DE FABRICAÇÃO 1000L", status: "ok" },
        { codigo: "REAT-043", descricao: "REATOR DE FABRICAÇÃO 1000L", status: "alr" },
        { codigo: "REAT-412051", descricao: "TANQUE MÓVEL 300L", status: "alr" },
        { codigo: "REAT-412052", descricao: "TANQUE MÓVEL 300L", status: "ok" },
        { codigo: "REAT-412053", descricao: "TANQUE MÓVEL 300L", status: "ok" },
        { codigo: "REAT-412054", descricao: "TANQUE MÓVEL 300L", status: "ok" },
        { codigo: "REAT-412055", descricao: "TANQUE MÓVEL 300L", status: "ok" },
        { codigo: "REAT-412056", descricao: "TANQUE MÓVEL 300L", status: "idle" },
        { codigo: "REAT-412057", descricao: "TANQUE MÓVEL 300L", status: "err" },
        { codigo: "REAT-412058", descricao: "TANQUE MÓVEL 300L", status: "alr" },
        { codigo: "REAT-412059", descricao: "TANQUE MÓVEL 300L", status: "alr" },
        { codigo: "REAT-412060", descricao: "TANQUE MÓVEL 300L", status: "ok" },
        { codigo: "REAT-412061", descricao: "TANQUE MÓVEL 300L", status: "ok" },
        { codigo: "REAT-412062", descricao: "TANQUE MÓVEL 300L", status: "ok" },
        { codigo: "REAT-412063", descricao: "TANQUE MÓVEL 300L", status: "ok" },
        { codigo: "REAT-412033", descricao: "TANQUE MÓVEL 200L", status: "ok" },
        { codigo: "REAT-412034", descricao: "TANQUE MÓVEL 200L", status: "alr" },
        { codigo: "REAT-412035", descricao: "TANQUE MÓVEL 200L", status: "ok" },
        { codigo: "REAT-412036", descricao: "TANQUE MÓVEL 200L", status: "ok" },
        { codigo: "REAT-412037", descricao: "TANQUE MÓVEL 200L", status: "ok" },
        { codigo: "REAT-412038", descricao: "TANQUE MÓVEL 200L", status: "ok" },
        { codigo: "REAT-412039", descricao: "TANQUE MÓVEL 200L", status: "ok" },
        { codigo: "REAT-412040", descricao: "TANQUE MÓVEL 200L", status: "err" },
        { codigo: "REAT-412041", descricao: "TANQUE MÓVEL 200L", status: "ok" },
        { codigo: "REAT-412042", descricao: "TANQUE MÓVEL 500L", status: "ok" },
        { codigo: "REAT-412043", descricao: "TANQUE MÓVEL 500L", status: "ok" },
        { codigo: "REAT-412044", descricao: "TANQUE MÓVEL 500L", status: "ok" },
        { codigo: "REAT-412045", descricao: "TANQUE MÓVEL 500L", status: "ok" },
        { codigo: "REAT-412046", descricao: "TANQUE MÓVEL 500L", status: "ok" },
        { codigo: "REAT-412047", descricao: "TANQUE MÓVEL 500L", status: "alr" },
        { codigo: "REAT-412048", descricao: "TANQUE MÓVEL 500L", status: "alr" },
        { codigo: "REAT-412049", descricao: "TANQUE MÓVEL 500L", status: "alr" },
        { codigo: "REAT-412050", descricao: "TANQUE MÓVEL 500L", status: "ok" },
        { codigo: "REAT-412064", descricao: "TANQUE MÓVEL 500L", status: "ok" },
        { codigo: "REAT-412065", descricao: "TANQUE MÓVEL 1000L", status: "ok" },
        { codigo: "REAT-412066", descricao: "TANQUE MÓVEL 1000L", status: "alr" },
        { codigo: "REAT-412067", descricao: "TANQUE MÓVEL 1000L", status: "ok" },
        { codigo: "REAT-412068", descricao: "TANQUE MÓVEL 1000L", status: "ok" },
        { codigo: "REAT-412069", descricao: "TANQUE MÓVEL 1000L", status: "ok" },
        { codigo: "REAT-412070", descricao: "TANQUE MÓVEL - 1000L", status: "ok" },
        { codigo: "REAT-412071", descricao: "TANQUE MÓVEL - 1000L", status: "ok" },
        { codigo: "REAT-412072", descricao: "TANQUE MÓVEL - 1000L", status: "err" },
        { codigo: "REAT-412073", descricao: "TANQUE MÓVEL - 1000L", status: "ok" },
        { codigo: "REAT-412074", descricao: "TANQUE MÓVEL - 1000L", status: "err" },
        { codigo: "REAT-412075", descricao: "TANQUE MÓVEL - 1000L", status: "alr" },
        { codigo: "REAT-412076", descricao: "TANQUE MÓVEL - 1000L", status: "ok" },
        { codigo: "REAT-412077", descricao: "TANQUE MÓVEL - 1000L", status: "ok" },
        { codigo: "REAT-412078", descricao: "TANQUE MÓVEL - 1000L", status: "err" },
        { codigo: "REAT-412079", descricao: "TANQUE MÓVEL - 1000L", status: "ok" },
      ],
    },
    {
      id: "mf4-fabricacao-sala-3", nome: "SALA 3",
      equipamentos: [
        { codigo: "REAT-036", descricao: "REATOR DE FABRICAÇÃO 200L", status: "ok" },
        { codigo: "REAT-035", descricao: "REATOR DE FABRICAÇÃO 200L", status: "ok" },
      ],
    },
    ],
  }
  ],
},
MF5: {
  titulo: "MF5",
  status: "ativa",
  areas: [
  {
    id: "mf5-central-de-aparas", nome: "CENTRAL DE APARAS",
    locais: [
    {
      id: "mf5-central-de-aparas-central-de-aparas", nome: "CENTRAL DE APARAS",
      equipamentos: [
        { codigo: "TQCA-001", descricao: "TANQUE DE AGITAÇÃO", status: "alr" },
        { codigo: "TQCA-002", descricao: "TANQUE DE AGITAÇÃO", status: "ok" },
        { codigo: "TQCA-003", descricao: "TANQUE DE AGITAÇÃO", status: "alr" },
      ],
    },
    ],
  },
  {
    id: "mf5-fabricacao", nome: "FABRICAÇÃO",
    locais: [
    {
      id: "mf5-fabricacao-armazenamento-de-massa", nome: "ARMAZENAMENTO DE MASSA",
      equipamentos: [
        { codigo: "TQHO-518001", descricao: "TANQUE HOMOGENEIZADOR", status: "alr" },
      ],
    },
    {
      id: "mf5-fabricacao-armazenamento-noodles", nome: "ARMAZENAMENTO NOODLES",
      equipamentos: [
        { codigo: "SILO-001", descricao: "SILO DE ARMAZENAMENTO DE NOODLES 1", status: "ok" },
        { codigo: "SILO-002", descricao: "SILO DE ARMAZENAMENTO DE NOODLES 2", status: "alr" },
        { codigo: "SILO-003", descricao: "SILO DE ARMAZENAMENTO DE NOODLES 3", status: "ok" },
        { codigo: "SILO-004", descricao: "SILO DE ARMAZENAMENTO DE NOODLES 4", status: "ok" },
      ],
    },
    {
      id: "mf5-fabricacao-fabricacao-blend", nome: "FABRICAÇÃO BLEND",
      equipamentos: [
        { codigo: "TQDP-001", descricao: "TANQUE 1 BLEND", status: "ok" },
        { codigo: "TQDP-002", descricao: "TANQUE 2 BLEND", status: "ok" },
        { codigo: "TQDP-003", descricao: "TANQUE 3 BLEND", status: "err" },
        { codigo: "TQMT-001", descricao: "TANQUE MISTURADOR DE BLEND", status: "ok" },
      ],
    },
    {
      id: "mf5-fabricacao-fabricacao-de-massa", nome: "FABRICAÇÃO DE MASSA",
      equipamentos: [
        { codigo: "TQPM-001", descricao: "TANQUE PULMÃO JET", status: "ok" },
        { codigo: "MIST-003", descricao: "MISTURADOR SAPONIFICADOR JET", status: "ok" },
        { codigo: "TQPM-525002", descricao: "TANQUE PULMÃO JET", status: "ok" },
        { codigo: "TQPM-525003", descricao: "TANQUE PULMÃO JET", status: "err" },
      ],
    },
    {
      id: "mf5-fabricacao-fabricacao-noodles", nome: "FABRICAÇÃO NOODLES",
      equipamentos: [
        { codigo: "SILO-005", descricao: "SILO DE SECAGEM DE MASSA NOODLES", status: "alr" },
        { codigo: "TQSB-001", descricao: "TANQUE DE SABÃO 1", status: "ok" },
        { codigo: "TQSB-002", descricao: "TANQUE DE SABÃO 2", status: "ok" },
      ],
    },
    {
      id: "mf5-fabricacao-glicerinado", nome: "GLICERINADO",
      equipamentos: [
        { codigo: "TQHO-001", descricao: "HOMOGENEIZADOR 1", status: "alr" },
        { codigo: "TQHO-002", descricao: "HOMOGENEIZADOR 2", status: "ok" },
        { codigo: "TQHO-003", descricao: "HOMOGENEIZADOR 3", status: "ok" },
        { codigo: "TQHO-004", descricao: "HOMOGENEIZADOR 4", status: "ok" },
        { codigo: "TQHO-005", descricao: "HOMOGENEIZADOR 5", status: "alr" },
        { codigo: "TQHO-006", descricao: "HOMOGENEIZADOR 6", status: "ok" },
        { codigo: "TQHO-007", descricao: "HOMOGENEIZADOR 7", status: "ok" },
      ],
    },
    {
      id: "mf5-fabricacao-linha-a", nome: "LINHA A",
      equipamentos: [
        { codigo: "CXSA-001", descricao: "CAIXA DE RESFRIAMENTO COM EXTRAÇÃO HIDRÁULICA", status: "alr" },
        { codigo: "CXSA-002", descricao: "CAIXA DE RESFRIAMENTO COM EXTRAÇÃO HIDRÁULICA", status: "ok" },
        { codigo: "CXSA-003", descricao: "CAIXA DE RESFRIAMENTO COM EXTRAÇÃO HIDRÁULICA", status: "alr" },
        { codigo: "CXSA-004", descricao: "CAIXA DE RESFRIAMENTO COM EXTRAÇÃO HIDRÁULICA", status: "ok" },
      ],
    },
    {
      id: "mf5-fabricacao-linha-b", nome: "LINHA B",
      equipamentos: [
        { codigo: "CXSB-001", descricao: "CAIXA DE RESFRIAMENTO COM EXTRAÇÃO HIDRÁULICA", status: "err" },
        { codigo: "CXSB-002", descricao: "CAIXA DE RESFRIAMENTO COM EXTRAÇÃO HIDRÁULICA", status: "ok" },
        { codigo: "CXSB-003", descricao: "CAIXA DE RESFRIAMENTO COM EXTRAÇÃO HIDRÁULICA", status: "idle" },
        { codigo: "CXSB-004", descricao: "CAIXA DE RESFRIAMENTO COM EXTRAÇÃO HIDRÁULICA", status: "ok" },
      ],
    },
    {
      id: "mf5-fabricacao-linha-c", nome: "LINHA C",
      equipamentos: [
        { codigo: "CXSC-001", descricao: "CAIXA DE RESFRIAMENTO COM EXTRAÇÃO HIDRÁULICA", status: "ok" },
        { codigo: "CXSC-002", descricao: "CAIXA DE RESFRIAMENTO COM EXTRAÇÃO HIDRÁULICA", status: "ok" },
        { codigo: "CXSC-003", descricao: "CAIXA DE RESFRIAMENTO COM EXTRAÇÃO HIDRÁULICA", status: "ok" },
        { codigo: "CXSC-004", descricao: "CAIXA DE RESFRIAMENTO COM EXTRAÇÃO HIDRÁULICA", status: "ok" },
      ],
    },
    {
      id: "mf5-fabricacao-linha-d", nome: "LINHA D",
      equipamentos: [
        { codigo: "CXSD-001", descricao: "CAIXA DE RESFRIAMENTO DE BARRAS", status: "ok" },
        { codigo: "CXSD-002", descricao: "CAIXA DE RESFRIAMENTO DE BARRAS", status: "ok" },
        { codigo: "CXSD-003", descricao: "CAIXA DE RESFRIAMENTO DE BARRAS", status: "ok" },
        { codigo: "CXSD-004", descricao: "CAIXA DE RESFRIAMENTO DE BARRAS", status: "err" },
        { codigo: "MIST-007", descricao: "MISTURADOR SIGMA", status: "ok" },
        { codigo: "MOIR-001", descricao: "MOINHO DE ROLOS", status: "ok" },
        { codigo: "PANE-531011", descricao: "RECIPIENTE DE INOX", status: "ok" },
        { codigo: "PANE-531001", descricao: "RECIPIENTE DE INOX", status: "ok" },
      ],
    },
    {
      id: "mf5-fabricacao-linha-e", nome: "LINHA E",
      equipamentos: [
        { codigo: "EXTR-002", descricao: "EXTRUSORA", status: "ok" },
        { codigo: "MIST-008", descricao: "TANQUE 100L KROMA", status: "ok" },
        { codigo: "PANE-532001", descricao: "RECIPIENTE DE INOX", status: "idle" },
      ],
    },
    {
      id: "mf5-fabricacao-linha-f", nome: "LINHA F",
      equipamentos: [
        { codigo: "EXTR-005", descricao: "EXTRUSORA", status: "ok" },
        { codigo: "MIST-011", descricao: "TANQUE CRUTCHER", status: "ok" },
      ],
    },
    {
      id: "mf5-fabricacao-linha-g", nome: "LINHA G",
      equipamentos: [
        { codigo: "CAIN-001", descricao: "CAIXA DE RESFRIAMENTO COM EXTRAÇÃO HIDRÁULICA", status: "ok" },
      ],
    },
    {
      id: "mf5-fabricacao-noodles", nome: "NOODLES",
      equipamentos: [
        { codigo: "EXTR-001", descricao: "EXTRUSORA  DE NOODLES", status: "ok" },
      ],
    },
    ],
  },
  {
    id: "mf5-sist--pneumatico", nome: "SIST. PNEUMÁTICO",
    locais: [
    {
      id: "mf5-sist--pneumatico-transporte-acucar", nome: "TRANSPORTE AÇÚCAR",
      equipamentos: [
        { codigo: "BALD-155", descricao: "BALANÇA", status: "alr" },
        { codigo: "FILT-014", descricao: "FILTRO MANGA MOEGA", status: "err" },
        { codigo: "FILT-015", descricao: "FILTRO MANGA TUBULAÇÃO", status: "alr" },
        { codigo: "QRGO-001", descricao: "QUEBRADOR DE GRUMO", status: "ok" },
        { codigo: "TRCR-014", descricao: "TROCADOR DE CALOR", status: "idle" },
      ],
    },
    {
      id: "mf5-sist--pneumatico-transporte-acido-estearico", nome: "TRANSPORTE ÁCIDO ESTEÁRICO",
      equipamentos: [
        { codigo: "BALD-154", descricao: "BALANÇA", status: "ok" },
        { codigo: "BRBG-001", descricao: "BATEDOR BIG BAG", status: "ok" },
        { codigo: "FILT-012", descricao: "FILTRO MANGA MOEGA", status: "alr" },
        { codigo: "FILT-013", descricao: "FILTRO TUBULAÇÃO", status: "ok" },
        { codigo: "MSVA-001", descricao: "MESA VIBRATÓRIA", status: "alr" },
        { codigo: "TRCR-013", descricao: "TROCADOR DE CALOR", status: "alr" },
      ],
    },
    ],
  }
  ],
},
};
