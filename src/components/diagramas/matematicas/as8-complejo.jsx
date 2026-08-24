// Diagrama «as8-complejo» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function As8ComplejoSVG({ tema }) {
  const sc=11;
  const rW=12*sc, rH=8*sc;
  const rX=38, rY=30;
  const rSemi=rH/2;                 // diámetro = lado corto (8 cm) ⇒ r = 4 cm
  const a=tema.acento, bl=tema.azul, gr=tema.verde;
  const triH=5*sc;
  const ex=rX+rW;                   // borde derecho del rectángulo
  const cyMid=rY+rH/2;
  return (
    <svg viewBox="0 0 230 150" width="100%" style={{display:"block",maxHeight:148}}>
      <rect x={rX} y={rY} width={rW} height={rH} fill={`${bl}22`} stroke={bl} strokeWidth="2"/>
      {/* Semicircunferencia adosada al ras del lado corto derecho (bulge a la derecha) */}
      <path d={`M ${ex},${rY} A ${rSemi},${rSemi} 0 0,1 ${ex},${rY+rH}`}
        fill={`${a}28`} stroke={a} strokeWidth="2"/>
      <polygon points={`${rX},${rY+rH} ${rX+rW},${rY+rH} ${rX+rW/2},${rY+rH-triH}`}
        fill="rgba(0,0,0,0.38)" stroke={gr} strokeWidth="1.5" strokeDasharray="5,3"/>
      <text x={rX+rW/2} y={rY-10} fill={bl} fontSize="13" fontFamily="'DM Sans',sans-serif" textAnchor="middle">12 cm</text>
      <text x={rX-8} y={cyMid+4} fill={bl} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">8 cm</text>
      <text x={rX+rW/2} y={rY+rH-triH/3+4} fill={gr} fontSize="11" fontFamily="'DM Sans',sans-serif" textAnchor="middle" opacity="0.8">quitar △</text>
      <text x={ex+rSemi*0.42} y={cyMid-3} fill={a} fontSize="11" fontFamily="'DM Sans',sans-serif" textAnchor="middle">semic.</text>
      <text x={ex+rSemi*0.42} y={cyMid+13} fill={a} fontSize="11" fontFamily="'DM Sans',sans-serif" textAnchor="middle">r = 4</text>
    </svg>
  );
}
