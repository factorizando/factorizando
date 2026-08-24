// Diagrama «flu-presion» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

import { arrowHead } from "../comun.jsx";

export default function FluPresionSVG({ tema }) {
  const a = tema.acento, mu = tema.muted, az = tema.azul;
  const px = 125, py = 92;
  return (
    <svg viewBox="0 0 250 132" width="100%" style={{ display: "block", maxHeight: 142 }}>
      <path d="M 60 22 L 60 118 L 190 118 L 190 22" fill="none" stroke={mu} strokeWidth="1.8" />
      <rect x={61} y={30} width={128} height={88} fill={`${az}22`} />
      <line x1={61} y1={30} x2={189} y2={30} stroke={az} strokeWidth="1.4" />
      <line x1={px} y1={30} x2={px} y2={py} stroke={mu} strokeWidth="1" strokeDasharray="3 3" />
      <text x={px + 6} y={62} fill={mu} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">h</text>
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const r = deg * Math.PI / 180;
        const x2 = px + 18 * Math.cos(r), y2 = py + 18 * Math.sin(r);
        return <g key={deg}><line x1={px} y1={py} x2={x2} y2={y2} stroke={a} strokeWidth="1.5" /><polygon points={arrowHead(px, py, x2, y2, 5)} fill={a} /></g>;
      })}
      <circle cx={px} cy={py} r={3} fill={a} />
    </svg>
  );
}
