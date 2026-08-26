// Diagrama «qf-tabla» — quimica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { arrowHead } from "../comun.jsx";

export default function QfTablaSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto;
  return (
    <svg viewBox="0 0 290 125" width="100%" style={{ display: "block", maxHeight: 135 }}>
      {/* iónico: transferencia */}
      <text x={72} y={14} textAnchor="middle" fill={a} fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700">ENLACE IÓNICO</text>
      <circle cx={42} cy={46} r={15} fill="rgba(192,132,252,0.12)" stroke={a} strokeWidth="1.6" />
      <text x={42} y={49} textAnchor="middle" fill={a} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">Na⁺</text>
      <circle cx={104} cy={46} r={15} fill={`${bl}1f`} stroke={bl} strokeWidth="1.6" />
      <text x={104} y={49} textAnchor="middle" fill={bl} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">Cl⁻</text>
      <line x1={60} y1={40} x2={86} y2={40} stroke={mu} strokeWidth="1.5" />
      <polygon points={arrowHead(60, 40, 86, 40, 6)} fill={mu} />
      <text x={73} y={34} textAnchor="middle" fill={mu} fontSize="6" fontFamily="'Figtree', system-ui, sans-serif">cede e⁻</text>
      <text x={72} y={72} textAnchor="middle" fill={mu} fontSize="6.5" fontFamily="'Figtree', system-ui, sans-serif">metal + no metal · transfiere</text>
      {/* covalente: comparte */}
      <text x={216} y={14} textAnchor="middle" fill={bl} fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700">ENLACE COVALENTE</text>
      <circle cx={196} cy={46} r={15} fill="rgba(192,132,252,0.10)" stroke={a} strokeWidth="1.6" />
      <text x={196} y={49} textAnchor="middle" fill={a} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">H</text>
      <circle cx={238} cy={46} r={15} fill="rgba(192,132,252,0.10)" stroke={a} strokeWidth="1.6" />
      <text x={238} y={49} textAnchor="middle" fill={a} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">H</text>
      <circle cx={213} cy={46} r={3} fill={bl} /><circle cx={221} cy={46} r={3} fill={bl} />
      <text x={216} y={72} textAnchor="middle" fill={mu} fontSize="6.5" fontFamily="'Figtree', system-ui, sans-serif">no metal + no metal · comparte</text>
      <text x={145} y={104} textAnchor="middle" fill={T} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">regla del octeto: 8 e⁻ de valencia → estabilidad</text>
      <text x={145} y={118} textAnchor="middle" fill={mu} fontSize="6.8" fontFamily="'Figtree', system-ui, sans-serif">electronegatividad ↑ hacia la derecha y arriba</text>
    </svg>
  );
}
