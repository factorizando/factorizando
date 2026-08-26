// Diagrama «gen-dogma» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

import { arrowHead } from "../comun.jsx";

export default function GenDogmaSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto;
  const box = (x, label, color) => (
    <g>
      <rect x={x} y={48} width={50} height={26} rx={5} fill={`${color}1f`} stroke={color} strokeWidth="1.8" />
      <text x={x + 25} y={65} textAnchor="middle" fill={color} fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700">{label}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 280 110" width="100%" style={{ display: "block", maxHeight: 120 }}>
      {box(14, "ADN", a)}
      {box(115, "ARN", bl)}
      {box(216, "Proteína", T)}
      <line x1={64} y1={61} x2={113} y2={61} stroke={mu} strokeWidth="2" />
      <polygon points={arrowHead(64, 61, 113, 61, 7)} fill={mu} />
      <text x={89} y={54} textAnchor="middle" fill={mu} fontSize="6.5" fontFamily="'Figtree', system-ui, sans-serif">transcripción</text>
      <line x1={165} y1={61} x2={214} y2={61} stroke={mu} strokeWidth="2" />
      <polygon points={arrowHead(165, 61, 214, 61, 7)} fill={mu} />
      <text x={190} y={54} textAnchor="middle" fill={mu} fontSize="6.5" fontFamily="'Figtree', system-ui, sans-serif">traducción</text>
      {/* replicación loop */}
      <path d="M 22 48 q -14 -22 17 -22 q 31 0 17 22" fill="none" stroke={a} strokeWidth="1.4" strokeDasharray="3 2" />
      <polygon points={arrowHead(50, 30, 56, 48, 6)} fill={a} />
      <text x={39} y={16} textAnchor="middle" fill={a} fontSize="6.5" fontFamily="'Figtree', system-ui, sans-serif">replicación</text>
      <text x={140} y={98} textAnchor="middle" fill={mu} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif">el dogma central de la biología molecular</text>
    </svg>
  );
}
