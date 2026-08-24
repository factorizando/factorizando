// Diagrama «geo-pitagoras» — matematicas (geometría).
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function GeoPitagorasSVG({ tema }) {
  const az = tema.azul, a = tema.acento, gr = tema.verde, gold = "#f5c842";
  return (
    <svg viewBox="0 0 320 130" width="100%" style={{ display: "block" }}>
      <rect x="1" y="1" width="318" height="128" rx="5" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      {/* Cuadrado sobre el cateto vertical (b² = 9) */}
      <polygon points="150,54 150,84 120,84 120,54" fill={`${gr}1e`} stroke={gr} strokeWidth="1.3" />
      <text x="135" y="73" textAnchor="middle" fill={gr} fontSize="8" fontFamily="monospace" fontWeight="700">9</text>
      {/* Cuadrado sobre el cateto horizontal (a² = 16) */}
      <polygon points="150,84 190,84 190,124 150,124" fill={`${gold}1e`} stroke={gold} strokeWidth="1.3" />
      <text x="170" y="108" textAnchor="middle" fill={gold} fontSize="8" fontFamily="monospace" fontWeight="700">16</text>
      {/* Cuadrado sobre la hipotenusa (c² = 25) */}
      <polygon points="150,54 190,84 220,44 180,14" fill={`${a}1e`} stroke={a} strokeWidth="1.3" />
      <text x="185" y="50" textAnchor="middle" fill={a} fontSize="8" fontFamily="monospace" fontWeight="700">25</text>
      {/* Triángulo rectángulo 3-4-5 */}
      <polygon points="150,84 190,84 150,54" fill={`${az}33`} stroke={az} strokeWidth="1.8" />
      <path d="M 150,76 L 158,76 L 158,84" fill="none" stroke="#ff7755" strokeWidth="1.3" />
      <text x="142" y="72" textAnchor="end" fill={gr} fontSize="7" fontFamily="monospace">3</text>
      <text x="170" y="96" textAnchor="middle" fill={gold} fontSize="7" fontFamily="monospace">4</text>
      <text x="166" y="64" fill={a} fontSize="7" fontFamily="monospace">5</text>
      {/* Texto / fórmula */}
      <text x="248" y="52" fill={a} fontSize="9" fontFamily="monospace" fontWeight="700">c² = a² + b²</text>
      <text x="248" y="70" fill="rgba(255,255,255,0.5)" fontSize="7.5" fontFamily="monospace">3² + 4² = 5²</text>
      <text x="248" y="84" fill="rgba(255,255,255,0.5)" fontSize="7.5" fontFamily="monospace">9 + 16 = 25</text>
      <text x="248" y="104" fill="rgba(255,255,255,0.3)" fontSize="6" fontFamily="monospace">la hipotenusa (c)</text>
      <text x="248" y="114" fill="rgba(255,255,255,0.3)" fontSize="6" fontFamily="monospace">es el lado mayor</text>
    </svg>
  );
}
