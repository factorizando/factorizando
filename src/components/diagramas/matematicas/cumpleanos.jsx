// Diagrama «cumpleanos» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function CumpleanosSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto;
  const pts = [];
  let prod = 1;
  for (let n = 1; n <= 60; n++) { prod *= (365 - (n - 1)) / 365; pts.push({ n, p: 1 - prod }); }
  const X = (n) => 38 + (n / 60) * 196;
  const Y = (p) => 126 - p * 108;
  const path = pts.map((d, i) => `${i ? "L" : "M"} ${X(d.n).toFixed(1)} ${Y(d.p).toFixed(1)}`).join(" ");
  const p23 = pts.find((d) => d.n === 23).p;
  return (
    <svg viewBox="0 0 252 156" width="100%" style={{ display: "block", maxHeight: 168 }}>
      {/* ejes */}
      <line x1="38" y1="14" x2="38" y2="126" stroke={tema.border} strokeWidth="1.2"/>
      <line x1="38" y1="126" x2="240" y2="126" stroke={tema.border} strokeWidth="1.2"/>
      {/* referencia ½ */}
      <line x1="38" y1={Y(0.5)} x2="240" y2={Y(0.5)} stroke={mu} strokeWidth="1" strokeDasharray="5 4"/>
      <text x="34" y={Y(0.5) + 4} fill={mu} fontSize="11" fontFamily="Georgia,serif" textAnchor="end">½</text>
      <text x="34" y={Y(1) + 4} fill={mu} fontSize="10" fontFamily="Georgia,serif" textAnchor="end">1</text>
      {/* curva */}
      <path d={path} fill="none" stroke={bl} strokeWidth="2.4"/>
      {/* punto n=23 */}
      <line x1={X(23)} y1={126} x2={X(23)} y2={Y(p23)} stroke={a} strokeWidth="1" strokeDasharray="3 2"/>
      <circle cx={X(23)} cy={Y(p23)} r="4.5" fill={a} stroke={tema.bg} strokeWidth="1.4"/>
      <text x={X(23)} y={140} fill={a} fontSize="11" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">23</text>
      <text x={X(23) + 8} y={Y(p23) - 6} fill={a} fontSize="11" fontFamily="'IBM Plex Mono',monospace">≈0.51</text>
      <text x="232" y="150" fill={mu} fontSize="10.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="end">personas →</text>
    </svg>
  );
}
