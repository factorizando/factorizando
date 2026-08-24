// Diagrama «bq-fotosintesis» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function BqFotosintesisSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto, gold = "#f5c842";
  return (
    <svg viewBox="0 0 290 130" width="100%" style={{ display: "block", maxHeight: 140 }}>
      {/* sol */}
      <circle cx={36} cy={28} r={11} fill="rgba(245,200,66,0.3)" stroke={gold} strokeWidth="1.6" />
      {[0,1,2,3,4,5,6,7].map(i => { const ang = i*Math.PI/4; return <line key={i} x1={36+13*Math.cos(ang)} y1={28+13*Math.sin(ang)} x2={36+18*Math.cos(ang)} y2={28+18*Math.sin(ang)} stroke={gold} strokeWidth="1.4" />; })}
      <text x={60} y={20} fill={gold} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif">luz</text>
      {/* cloroplasto (hoja) */}
      <ellipse cx={145} cy={70} rx={70} ry={38} fill="rgba(74,222,128,0.10)" stroke={tema.verde} strokeWidth="2" />
      <path d="M 145 36 q -10 34 0 68 M 110 56 q 35 10 70 0 M 110 84 q 35 -10 70 0" fill="none" stroke={tema.verde} strokeWidth="1" opacity="0.5" />
      <text x={145} y={66} textAnchor="middle" fill={T} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">clorofila</text>
      <text x={145} y={78} textAnchor="middle" fill={mu} fontSize="6.5" fontFamily="'Figtree', system-ui, sans-serif">(cloroplasto)</text>
      {/* entradas */}
      <text x={40} y={86} textAnchor="middle" fill={mu} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif">CO₂ + H₂O</text>
      {/* salidas */}
      <text x={255} y={56} textAnchor="middle" fill={a} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700">glucosa</text>
      <text x={255} y={88} textAnchor="middle" fill={bl} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif">O₂</text>
      <text x={145} y={122} textAnchor="middle" fill={mu} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif">6CO₂ + 6H₂O + luz → glucosa + 6O₂</text>
    </svg>
  );
}
