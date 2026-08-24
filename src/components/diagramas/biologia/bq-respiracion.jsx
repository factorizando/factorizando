// Diagrama «bq-respiracion» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function BqRespiracionSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto;
  return (
    <svg viewBox="0 0 290 130" width="100%" style={{ display: "block", maxHeight: 140 }}>
      {/* mitocondria */}
      <ellipse cx={145} cy={66} rx={120} ry={46} fill="rgba(248,113,113,0.06)" stroke={tema.rojo} strokeWidth="2" />
      <path d="M 50 50 q 18 16 0 32 M 95 46 q 18 20 0 40 M 145 44 q 18 22 0 44 M 195 46 q 18 20 0 40 M 240 50 q 18 16 0 32" fill="none" stroke={tema.rojo} strokeWidth="1.2" opacity="0.5" />
      {/* entradas */}
      <text x={28} y={40} textAnchor="middle" fill={a} fontSize="8" fontFamily="'DM Sans',sans-serif">glucosa</text>
      <text x={28} y={96} textAnchor="middle" fill={bl} fontSize="8" fontFamily="'DM Sans',sans-serif">O₂</text>
      {/* etapas */}
      <text x={145} y={60} textAnchor="middle" fill={T} fontSize="7.5" fontFamily="'DM Sans',sans-serif" fontWeight="600">glucólisis → Krebs →</text>
      <text x={145} y={74} textAnchor="middle" fill={T} fontSize="7.5" fontFamily="'DM Sans',sans-serif" fontWeight="600">cadena (citocromos)</text>
      {/* salidas */}
      <text x={262} y={40} textAnchor="middle" fill={mu} fontSize="8" fontFamily="'DM Sans',sans-serif">CO₂ + H₂O</text>
      <text x={262} y={96} textAnchor="middle" fill={a} fontSize="9" fontFamily="'DM Sans',sans-serif" fontWeight="700">ATP</text>
      <text x={145} y={124} textAnchor="middle" fill={mu} fontSize="7.5" fontFamily="'DM Sans',sans-serif">respiración aerobia (en la mitocondria)</text>
    </svg>
  );
}
