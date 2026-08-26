// Diagrama «ana-fungi» — quimica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function AnaFungiSVG({ tema }) {
  const a = tema.acento, mu = tema.muted, T = tema.texto;
  return (
    <svg viewBox="0 0 240 140" width="100%" style={{ display: "block", maxHeight: 150 }}>
      <text x={120} y={12} textAnchor="middle" fill={a} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif">el cuerpo del hongo</text>
      {/* línea de suelo */}
      <line x1={10} y1={78} x2={230} y2={78} stroke={mu} strokeWidth="1.2" strokeDasharray="3 2" />
      {/* sombrero */}
      <path d="M 70 54 q 40 -34 80 0 Z" fill={`${a}38`} stroke={a} strokeWidth="1.8" />
      {/* tallo */}
      <rect x={100} y={54} width={20} height={24} rx={3} fill={`${a}29`} stroke={a} strokeWidth="1.5" />
      <text x={166} y={40} fill={T} fontSize="7" fontFamily="'Figtree', system-ui, sans-serif">cuerpo</text>
      <text x={166} y={49} fill={mu} fontSize="6.2" fontFamily="'Figtree', system-ui, sans-serif">fructífero</text>
      {/* micelio: red de hifas bajo el suelo */}
      {[0,1,2,3,4].map(k => (
        <path key={k} d={`M 110 80 q ${-50 + k*25} 14 ${-44 + k*22} 44`} fill="none" stroke={a} strokeWidth="1.2" opacity="0.75" />
      ))}
      <text x={120} y={132} textAnchor="middle" fill={T} fontSize="7.4" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">micelio = masa de hifas</text>
      <text x={206} y={104} textAnchor="middle" fill={mu} fontSize="6.4" fontFamily="'Figtree', system-ui, sans-serif">pared de quitina</text>
    </svg>
  );
}
