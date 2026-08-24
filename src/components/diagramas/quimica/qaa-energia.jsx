// Diagrama «qaa-energia» — quimica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function QaaEnergiaSVG({ tema }) {
  const bl = tema.azul, mu = tema.muted, T = tema.texto, rojo = tema.rojo;
  return (
    <svg viewBox="0 0 290 125" width="100%" style={{ display: "block", maxHeight: 135 }}>
      {/* exotérmica */}
      <text x={72} y={14} textAnchor="middle" fill={rojo} fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700">EXOTÉRMICA</text>
      <path d="M 20 30 H 50 C 64 30 64 60 78 60 H 124" fill="none" stroke={rojo} strokeWidth="2" />
      <text x={30} y={26} fill={mu} fontSize="6.5" fontFamily="'Figtree', system-ui, sans-serif">reactivos</text>
      <text x={104} y={72} fill={mu} fontSize="6.5" fontFamily="'Figtree', system-ui, sans-serif">productos</text>
      <line x1={92} y1={36} x2={92} y2={58} stroke={rojo} strokeWidth="1.2" strokeDasharray="2 2" />
      <text x={96} y={50} fill={rojo} fontSize="6.3" fontFamily="'Figtree', system-ui, sans-serif">libera</text>
      <text x={72} y={92} textAnchor="middle" fill={mu} fontSize="6.5" fontFamily="'Figtree', system-ui, sans-serif">libera calor</text>
      {/* endotérmica */}
      <text x={218} y={14} textAnchor="middle" fill={bl} fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700">ENDOTÉRMICA</text>
      <path d="M 166 60 H 212 C 226 60 226 30 240 30 H 270" fill="none" stroke={bl} strokeWidth="2" />
      <text x={170} y={72} fill={mu} fontSize="6.5" fontFamily="'Figtree', system-ui, sans-serif">reactivos</text>
      <text x={250} y={26} fill={mu} fontSize="6.5" fontFamily="'Figtree', system-ui, sans-serif">productos</text>
      <line x1={238} y1={36} x2={238} y2={58} stroke={bl} strokeWidth="1.2" strokeDasharray="2 2" />
      <text x={214} y={50} textAnchor="end" fill={bl} fontSize="6.3" fontFamily="'Figtree', system-ui, sans-serif">absorbe</text>
      <text x={218} y={92} textAnchor="middle" fill={mu} fontSize="6.5" fontFamily="'Figtree', system-ui, sans-serif">absorbe calor</text>
      <text x={145} y={112} textAnchor="middle" fill={T} fontSize="7.3" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">exo: combustión, respiración · endo: fotosíntesis, cocción</text>
    </svg>
  );
}
