// Diagrama «qf-mezclas» — quimica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function QfMezclasSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto;
  return (
    <svg viewBox="0 0 290 120" width="100%" style={{ display: "block", maxHeight: 130 }}>
      {/* sustancia pura: partículas iguales */}
      <rect x={18} y={20} width={56} height={64} rx={5} fill={`${a}0f`} stroke={a} strokeWidth="1.6" />
      {[[34,40],[54,40],[34,60],[54,60],[44,76]].map(([cx,cy],i)=>(<circle key={i} cx={cx} cy={cy} r={5} fill={a} opacity="0.7" />))}
      <text x={46} y={98} textAnchor="middle" fill={T} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">sustancia pura</text>
      <text x={46} y={108} textAnchor="middle" fill={mu} fontSize="6.3" fontFamily="'Figtree', system-ui, sans-serif">partículas iguales</text>
      {/* mezcla homogénea: dos tipos, repartidos */}
      <rect x={117} y={20} width={56} height={64} rx={5} fill={`${bl}0f`} stroke={bl} strokeWidth="1.6" />
      {[[133,40],[153,40],[133,60],[153,60],[143,76]].map(([cx,cy],i)=>(<circle key={i} cx={cx} cy={cy} r={5} fill={i%2?bl:a} opacity="0.7" />))}
      <text x={145} y={98} textAnchor="middle" fill={T} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">mezcla homogénea</text>
      <text x={145} y={108} textAnchor="middle" fill={mu} fontSize="6.3" fontFamily="'Figtree', system-ui, sans-serif">una sola fase</text>
      {/* mezcla heterogénea: dos capas */}
      <rect x={216} y={20} width={56} height={64} rx={5} fill={`${bl}0a`} stroke={bl} strokeWidth="1.6" />
      <path d="M 216 56 h 56" stroke={bl} strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
      {[[232,32],[252,32],[244,44]].map(([cx,cy],i)=>(<circle key={i} cx={cx} cy={cy} r={5} fill={a} opacity="0.7" />))}
      {[[232,70],[252,70],[244,80]].map(([cx,cy],i)=>(<circle key={i} cx={cx} cy={cy} r={5} fill={bl} opacity="0.7" />))}
      <text x={244} y={98} textAnchor="middle" fill={T} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">mezcla heterogénea</text>
      <text x={244} y={108} textAnchor="middle" fill={mu} fontSize="6.3" fontFamily="'Figtree', system-ui, sans-serif">fases visibles</text>
    </svg>
  );
}
