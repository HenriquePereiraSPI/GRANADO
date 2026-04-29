import SinoticoInventario from './SinoticoInventario.jsx';
import { INVENTARIO_PRODUCAO } from '../data/sinotico-inventario.js';

/**
 * Sinotico de Producao (ERU 5.1.55).
 * Granularidade: Equipamento (Matriz de Qualificacao - aba INVENT. DE EQUIP).
 *
 * Inclui as areas: EMBALAGEM, ENVASE.
 *
 * NOTA: o nome do arquivo eh historico — antigo "macro" da Producao.
 * Hoje funciona identico ao SinoticoFabricacao, soh muda o filtro de areas.
 */
export default function SinoticoProducaoMacro() {
  return (
    <SinoticoInventario
      dataset={INVENTARIO_PRODUCAO}
      subtitulo="Embalagem · Envase"
    />
  );
}
