import SinoticoInventario from './SinoticoInventario.jsx';
import { INVENTARIO_FABRICACAO } from '../data/sinotico-inventario.js';

/**
 * Sinotico de Fabricacao (ERU 5.1.55).
 * Granularidade: Equipamento (Matriz de Qualificacao - aba INVENT. DE EQUIP).
 *
 * Inclui as areas: FABRICACAO, DEPOSITO, CENTRAL DE APARAS, SIST. PNEUMATICO.
 */
export default function SinoticoFabricacao() {
  return (
    <SinoticoInventario
      dataset={INVENTARIO_FABRICACAO}
      subtitulo="Fabricação · Depósito · Aparas · Pneumático"
    />
  );
}
