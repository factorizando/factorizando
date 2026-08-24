// Diagrama «fisica-cambios-estado» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function FisicaCambiosEstadoSVG({ tema }) {
  const a = tema.acento, grn = "#4ab890", gold = "#f5c842", org = "#ff7755", blu = "#88aaff";
  const BY = 46, BH = 36, BW = 70;
  const xs = [8, 125, 242];
  const BCY = BY + BH / 2; // 64
  const labels = [
    { label: "SÓLIDO",  sub: "forma y vol. fijos",  color: a    },
    { label: "LÍQUIDO", sub: "vol. fijo, forma var", color: grn  },
    { label: "GAS",     sub: "forma y vol. var.",    color: gold },
  ];
  const arrowR = (y, x1, x2, color) => (
    <g>
      <line x1={x1} y1={y} x2={x2-5} y2={y} stroke={color} strokeWidth="1.5"/>
      <polygon points={`${x2-5},${y-3.5} ${x2-5},${y+3.5} ${x2},${y}`} fill={color}/>
    </g>
  );
  const arrowL = (y, x1, x2, color) => (
    <g>
      <line x1={x1} y1={y} x2={x2+5} y2={y} stroke={color} strokeWidth="1.5"/>
      <polygon points={`${x2+5},${y-3.5} ${x2+5},${y+3.5} ${x2},${y}`} fill={color}/>
    </g>
  );
  return (
    <svg viewBox="0 0 320 130" width="100%" style={{ display:"block" }}>
      <rect x="0" y="0" width="320" height="130" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="160" y="11" textAnchor="middle" fill={a}
        fontSize="6.5" fontFamily="monospace" fontWeight="700">CAMBIOS DE ESTADO</text>
      {labels.map(({ label, sub, color }, i) => (
        <g key={i}>
          <rect x={xs[i]} y={BY} width={BW} height={BH} rx="4"
            fill={`${color}20`} stroke={color} strokeWidth="1.5"/>
          <text x={xs[i]+BW/2} y={BY+15} textAnchor="middle" fill={color}
            fontSize="8" fontFamily="monospace" fontWeight="700">{label}</text>
          <text x={xs[i]+BW/2} y={BY+27} textAnchor="middle" fill="rgba(255,255,255,0.4)"
            fontSize="4.8" fontFamily="monospace">{sub}</text>
        </g>
      ))}
      {/* SÓLIDO (right=78) ↔ LÍQUIDO (left=125) */}
      {arrowR(BCY-5, 80, 123, grn)}
      <text x="101" y={BCY-8} textAnchor="middle" fill={grn} fontSize="5" fontFamily="monospace">Fusión</text>
      {arrowL(BCY+5, 123, 80, a)}
      <text x="101" y={BCY+14} textAnchor="middle" fill={a} fontSize="5" fontFamily="monospace">Solidificación</text>
      {/* LÍQUIDO (right=195) ↔ GAS (left=242) */}
      {arrowR(BCY-5, 197, 240, gold)}
      <text x="218" y={BCY-8} textAnchor="middle" fill={gold} fontSize="5" fontFamily="monospace">Vaporización</text>
      {arrowL(BCY+5, 240, 197, grn)}
      <text x="218" y={BCY+14} textAnchor="middle" fill={grn} fontSize="5" fontFamily="monospace">Condensación</text>
      {/* Arc SÓLIDO top-center (43,46) → GAS top-center (277,46): Sublimación */}
      <path d="M 43,46 Q 160,18 277,46" fill="none" stroke={org} strokeWidth="1.5" strokeDasharray="3,2"/>
      <polygon points="272,42 272,50 278,46" fill={org}/>
      <text x="160" y="25" textAnchor="middle" fill={org} fontSize="5.5" fontFamily="monospace" fontWeight="600">Sublimación (S→G) →</text>
      {/* Arc GAS bottom (277,82) → SÓLIDO bottom (43,82): Deposición */}
      <path d="M 277,82 Q 160,110 43,82" fill="none" stroke={blu} strokeWidth="1.5" strokeDasharray="3,2"/>
      <polygon points="48,78 48,86 42,82" fill={blu}/>
      <text x="160" y="120" textAnchor="middle" fill={blu} fontSize="5.5" fontFamily="monospace">← Deposición (G→S)</text>
    </svg>
  );
}
