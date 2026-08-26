// Diagrama «ej-cong-ala» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function EjCongALASVG({ tema }) {
  return (
    <svg viewBox="0 0 330 138" width="100%" style={{ display: "block", maxHeight: 160 }}>
      <polygon points="70,15 10,112 155,112"  fill={tema.azulSuave} stroke="none"/>
      <polygon points="230,15 170,112 315,112" fill={tema.azulSuave} stroke="none"/>
      <line x1="10"  y1="112" x2="155" y2="112" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
      <line x1="170" y1="112" x2="315" y2="112" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
      <line x1="155" y1="112" x2="70"  y2="15"  stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
      <line x1="315" y1="112" x2="230" y2="15"  stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
      <line x1="70"  y1="15"  x2="10"  y2="112" stroke={tema.azul} strokeWidth="2.5"/>
      <line x1="230" y1="15"  x2="170" y2="112" stroke={tema.azul} strokeWidth="2.5"/>
      <path d="M 82,29 A 18,18 0 0,1 61,30"   stroke={tema.canal(1)}  strokeWidth="2.2" fill="none"/>
      <path d="M 242,29 A 18,18 0 0,1 221,30"  stroke={tema.canal(1)}  strokeWidth="2.2" fill="none"/>
      <path d="M 17,100 A 14,14 0 0,1 24,112"  stroke={tema.acento} strokeWidth="2.2" fill="none"/>
      <path d="M 177,100 A 14,14 0 0,1 184,112" stroke={tema.acento} strokeWidth="2.2" fill="none"/>
      <path d="M 35,67 L 45,60"   stroke={tema.azul} strokeWidth="2" fill="none"/>
      <path d="M 195,67 L 205,60" stroke={tema.azul} strokeWidth="2" fill="none"/>
      <text x="30"  y="60"  fill={tema.azul} fontSize="13" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="end">8</text>
      <text x="190" y="60"  fill={tema.azul} fontSize="13" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="end">8</text>
      <text x="76"  y="48"  fill={tema.canal(1)}  fontSize="11" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600" textAnchor="middle">45°</text>
      <text x="236" y="48"  fill={tema.canal(1)}  fontSize="11" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600" textAnchor="middle">45°</text>
      <text x="29"  y="99"  fill={tema.acento} fontSize="11" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">75°</text>
      <text x="189" y="99"  fill={tema.acento} fontSize="11" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">75°</text>
      <text x="70"  y="8"   fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="3"   y="128" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">B</text>
      <text x="155" y="128" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">C</text>
      <text x="230" y="8"   fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">D</text>
      <text x="170" y="128" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="318" y="120" fill="rgba(240,236,227,0.65)" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">F</text>
      <text x="163" y="70" fill="rgba(240,236,227,0.45)" fontSize="22" fontFamily="Georgia,serif" textAnchor="middle">≅</text>
    </svg>
  );
}
