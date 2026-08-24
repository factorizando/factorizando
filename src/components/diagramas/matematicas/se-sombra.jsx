// Diagrama «se-sombra» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function SeSombraSVG({ tema }) {
  // Two similar right triangles: tree 4m shadow 6m; pole shadow 9m height ?
  const pts=ps=>ps.map(([x,y])=>`${x},${y}`).join(" ");
  const dim="rgba(240,236,227,0.65)";
  return (
    <svg viewBox="0 0 380 138" width="100%" style={{display:"block",maxHeight:138}}>
      <polygon points={pts([[50,42],[50,122],[170,122]])} fill={tema.azulSuave} stroke="none"/>
      <polygon points={pts([[210,12],[210,122],[350,122]])} fill={tema.azulSuave} stroke="none"/>
      <path d="M 50,114 L 58,114 L 58,122" fill="none" stroke="rgba(240,236,227,0.50)" strokeWidth="1.2"/>
      <path d="M 210,114 L 218,114 L 218,122" fill="none" stroke="rgba(240,236,227,0.50)" strokeWidth="1.2"/>
      <line x1="50"  y1="42"  x2="50"  y2="122" stroke={tema.verde}  strokeWidth="2.2"/>
      <line x1="50"  y1="122" x2="170" y2="122" stroke={tema.acento} strokeWidth="2.2"/>
      <line x1="170" y1="122" x2="50"  y2="42"  stroke={dim}          strokeWidth="1.8"/>
      <line x1="210" y1="12"  x2="210" y2="122" stroke={tema.verde}  strokeWidth="2.2"/>
      <line x1="210" y1="122" x2="350" y2="122" stroke={tema.acento} strokeWidth="2.2"/>
      <line x1="350" y1="122" x2="210" y2="12"  stroke={dim}          strokeWidth="1.8"/>
      <text x="40"  y="82"  fill={tema.verde}  fontSize="12" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="end">4 m</text>
      <text x="110" y="136" fill={tema.acento} fontSize="12" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="middle">6 m</text>
      <text x="200" y="67"  fill={tema.verde}  fontSize="14" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="end">?</text>
      <text x="280" y="136" fill={tema.acento} fontSize="12" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="middle">9 m</text>
      <text x="192" y="80"  fill="rgba(240,236,227,0.30)" fontSize="26" fontFamily="Georgia,serif" textAnchor="middle">∼</text>
    </svg>
  );
}
