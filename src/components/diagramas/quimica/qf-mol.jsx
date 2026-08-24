// Diagrama «qf-mol» — quimica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

import { arrowHead } from "../comun.jsx";

export default function QfMolSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto, grn = tema.verde;
  return (
    <svg viewBox="0 0 280 120" width="100%" style={{ display: "block", maxHeight: 130 }}>
      <rect x={20} y={30} width={70} height={40} rx={6} fill="rgba(192,132,252,0.08)" stroke={a} strokeWidth="1.6" />
      <text x={55} y={48} textAnchor="middle" fill={T} fontSize="8" fontFamily="'DM Sans',sans-serif" fontWeight="600">masa (g)</text>
      <text x={55} y={62} textAnchor="middle" fill={mu} fontSize="6.5" fontFamily="'DM Sans',sans-serif">m</text>
      <text x={110} y={54} textAnchor="middle" fill={a} fontSize="9" fontFamily="'DM Sans',sans-serif">÷ M</text>
      <line x1={92} y1={50} x2={128} y2={50} stroke={mu} strokeWidth="1.4" />
      <polygon points={arrowHead(92, 50, 128, 50, 6)} fill={mu} />
      <rect x={130} y={30} width={60} height={40} rx={6} fill="rgba(74,222,128,0.10)" stroke={grn} strokeWidth="1.8" />
      <text x={160} y={48} textAnchor="middle" fill={grn} fontSize="8.5" fontFamily="'DM Sans',sans-serif" fontWeight="700">moles</text>
      <text x={160} y={62} textAnchor="middle" fill={mu} fontSize="6.5" fontFamily="'DM Sans',sans-serif">n = m/M</text>
      <line x1={192} y1={50} x2={224} y2={50} stroke={mu} strokeWidth="1.4" />
      <polygon points={arrowHead(192, 50, 224, 50, 6)} fill={mu} />
      <text x={208} y={44} textAnchor="middle" fill={bl} fontSize="6" fontFamily="'DM Sans',sans-serif">× Nₐ</text>
      <rect x={226} y={30} width={48} height={40} rx={6} fill="rgba(244,114,182,0.08)" stroke={bl} strokeWidth="1.6" />
      <text x={250} y={47} textAnchor="middle" fill={bl} fontSize="7.5" fontFamily="'DM Sans',sans-serif" fontWeight="600">partículas</text>
      <text x={250} y={60} textAnchor="middle" fill={mu} fontSize="6" fontFamily="'DM Sans',sans-serif">N</text>
      <text x={140} y={96} textAnchor="middle" fill={T} fontSize="7.8" fontFamily="'DM Sans',sans-serif" fontWeight="600">1 mol = 6.022 × 10²³ partículas</text>
      <text x={140} y={110} textAnchor="middle" fill={mu} fontSize="6.8" fontFamily="'DM Sans',sans-serif">masa molar = suma de masas atómicas (H₂O = 18 g/mol)</text>
    </svg>
  );
}
