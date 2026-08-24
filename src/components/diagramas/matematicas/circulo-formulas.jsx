// Diagrama «circulo-formulas» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function CirculoFormulasSVG({ tema }) {
  const cx=94, cy=95, r=68;
  const bl=tema.azul, a=tema.acento, gr=tema.verde;
  const D = deg => deg * Math.PI / 180;
  // Arco verde 290° (gap de 70° en la derecha, donde está el radio horizontal)
  // P(35°) = parte inferior-derecha, P(-35°) = parte superior-derecha
  const arcSx = +(cx + r*Math.cos(D(35))).toFixed(1);   // ~149.7
  const arcSy = +(cy + r*Math.sin(D(35))).toFixed(1);   // ~134.0
  const arcEx = +(cx + r*Math.cos(D(-35))).toFixed(1);  // ~149.7
  const arcEy = +(cy + r*Math.sin(D(-35))).toFixed(1);  // ~56.0
  return (
    <svg viewBox="0 0 275 185" width="100%" style={{display:"block",maxHeight:178}}>
      <defs>
        <marker id="cf-arr-a" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M 0,0 L 5,3 L 0,6 Z" fill={a}/>
        </marker>
        <marker id="cf-arr-g" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <path d="M 0,0 L 5,3 L 0,6 Z" fill={gr}/>
        </marker>
      </defs>
      <circle cx={cx} cy={cy} r={r} fill={tema.azulSuave} stroke={bl} strokeWidth="2"/>
      {/* Radio horizontal — su extremo queda dentro del gap del arco verde */}
      <line x1={cx} y1={cy} x2={cx+r} y2={cy} stroke={a} strokeWidth="2.2" markerEnd="url(#cf-arr-a)"/>
      <text x={cx+r/2} y={cy-9} fill={a} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">r</text>
      {/* Arco 290° CW — flags 1,1 correctos para este par de puntos */}
      <path d={`M ${arcSx},${arcSy} A ${r},${r} 0 1,1 ${arcEx},${arcEy}`}
        fill="none" stroke={gr} strokeWidth="2.5" markerEnd="url(#cf-arr-g)" opacity="0.85"/>
      {/* Etiqueta en el gap (a la derecha del círculo, sin solaparse) */}
      <text x={170} y={cy} fill={gr} fontSize="13" fontFamily="'DM Sans',sans-serif" fontWeight="700" dominantBaseline="middle">P = 2πr</text>
      <text x={cx} y={cy+22} fill={bl} fontSize="14" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" opacity="0.9">A = πr²</text>
      <text x={cx} y={cy+40} fill="rgba(255,255,255,0.33)" fontSize="11" fontFamily="'DM Sans',sans-serif" textAnchor="middle">π ≈ 3.1416</text>
      <circle cx={cx} cy={cy} r={3.5} fill={a}/>
    </svg>
  );
}
