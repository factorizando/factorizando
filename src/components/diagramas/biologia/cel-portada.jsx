// Diagrama «cel-portada» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function CelPortadaSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted;
  return (
    <svg viewBox="0 0 220 150" width="100%" style={{ display: "block", maxHeight: 150, maxWidth: 280 }}>
      {/* membrana */}
      <ellipse cx={110} cy={75} rx={96} ry={62} fill="rgba(52,211,153,0.06)" stroke={a} strokeWidth="2.5" />
      {/* núcleo */}
      <circle cx={108} cy={72} r={30} fill="rgba(134,239,172,0.10)" stroke={bl} strokeWidth="2" />
      <circle cx={108} cy={72} r={11} fill={a} opacity="0.45" />
      <text x={108} y={45} textAnchor="middle" fill={bl} fontSize="8" fontFamily="'DM Sans',sans-serif">núcleo</text>
      {/* mitocondrias */}
      <ellipse cx={56} cy={48} rx={15} ry={7.5} fill="rgba(248,113,113,0.18)" stroke={tema.rojo} strokeWidth="1.6" transform="rotate(-20 56 48)" />
      <ellipse cx={160} cy={104} rx={15} ry={7.5} fill="rgba(248,113,113,0.18)" stroke={tema.rojo} strokeWidth="1.6" transform="rotate(15 160 104)" />
      {/* organelos varios */}
      <circle cx={60} cy={100} r={6} fill={a} opacity="0.3" stroke={a} strokeWidth="1.2" />
      <circle cx={156} cy={44} r={5} fill={bl} opacity="0.35" stroke={bl} strokeWidth="1.2" />
      <path d="M 138 96 q 10 -4 18 2 q -8 6 -18 -2 z" fill={a} opacity="0.25" stroke={a} strokeWidth="1" />
      <text x={110} y={146} textAnchor="middle" fill={mu} fontSize="8.5" fontFamily="'DM Sans',sans-serif">la unidad de la vida</text>
    </svg>
  );
}
