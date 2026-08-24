// Diagrama «qaa-alimentos» — quimica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function QaaAlimentosSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto;
  const cols = [
    { x: 40, label: "Carbohidratos", sub: "energía inmediata" },
    { x: 110, label: "Lípidos", sub: "almacén" },
    { x: 180, label: "Proteínas", sub: "estructura" },
    { x: 250, label: "Vit. / min.", sub: "regulan" },
  ];
  return (
    <svg viewBox="0 0 290 120" width="100%" style={{ display: "block", maxHeight: 130 }}>
      {cols.map(({ x, label, sub }, i) => (
        <g key={i}>
          {i === 0 && [[-9,30],[0,26],[9,30]].map(([dx,cy],j)=>(<circle key={j} cx={x+dx} cy={cy} r={5} fill={a} opacity="0.6" />))}
          {i === 1 && <g><circle cx={x} cy={26} r={6} fill={a} opacity="0.5" /><line x1={x-3} y1={30} x2={x-3} y2={42} stroke={a} strokeWidth="1.6" /><line x1={x+3} y1={30} x2={x+3} y2={42} stroke={a} strokeWidth="1.6" /></g>}
          {i === 2 && <path d={`M ${x-13} 40 q 6.5 -22 13 0 q 6.5 22 13 0`} fill="none" stroke={a} strokeWidth="2" />}
          {i === 3 && <g><circle cx={x} cy={32} r={9} fill="none" stroke={bl} strokeWidth="1.6" /><text x={x} y={36} textAnchor="middle" fill={bl} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700">+</text></g>}
          <text x={x} y={62} textAnchor="middle" fill={T} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">{label}</text>
          <text x={x} y={74} textAnchor="middle" fill={bl} fontSize="6.3" fontFamily="'Figtree', system-ui, sans-serif">{sub}</text>
        </g>
      ))}
      <text x={145} y={100} textAnchor="middle" fill={mu} fontSize="7.3" fontFamily="'Figtree', system-ui, sans-serif">proteína = aminoácidos unidos por enlace peptídico</text>
      <text x={145} y={113} textAnchor="middle" fill={mu} fontSize="6.8" fontFamily="'Figtree', system-ui, sans-serif">(−NH₂ + −COOH → enlace peptídico + H₂O)</text>
    </svg>
  );
}
