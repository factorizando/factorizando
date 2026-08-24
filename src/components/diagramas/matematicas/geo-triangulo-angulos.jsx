// Diagrama «geo-triangulo-angulos» — matematicas (geometría).
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function GeoTrianguloAngulosSVG({ tema }) {
  const az = tema.azul, a = tema.acento, gold = "#f5c842";
  return (
    <svg viewBox="0 0 320 130" width="100%" style={{ display: "block" }}>
      <rect x="1" y="1" width="154" height="128" rx="5" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="78" y="13" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">ÁNGULOS INTERNOS</text>
      <polygon points="26,92 130,92 60,38" fill={`${az}1e`} stroke={az} strokeWidth="1.6" />
      <text x="36" y="86" fill={gold} fontSize="8" fontFamily="monospace" fontWeight="700">A</text>
      <text x="118" y="86" fill={gold} fontSize="8" fontFamily="monospace" fontWeight="700">B</text>
      <text x="58" y="52" fill={gold} fontSize="8" fontFamily="monospace" fontWeight="700">C</text>
      <text x="78" y="114" textAnchor="middle" fill={a} fontSize="8.5" fontFamily="monospace" fontWeight="700">A + B + C = 180°</text>

      <rect x="165" y="1" width="154" height="128" rx="5" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="242" y="13" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">RECTÁNGULO</text>
      <polygon points="196,92 290,92 196,42" fill={`${az}1e`} stroke={az} strokeWidth="1.6" />
      <path d="M 196,84 L 204,84 L 204,92" fill="none" stroke="#ff7755" strokeWidth="1.4" />
      <text x="208" y="80" fill="#ff7755" fontSize="7" fontFamily="monospace" fontWeight="700">90°</text>
      <text x="270" y="86" fill={gold} fontSize="8" fontFamily="monospace" fontWeight="700">α</text>
      <text x="200" y="52" fill={gold} fontSize="8" fontFamily="monospace" fontWeight="700">β</text>
      <text x="242" y="114" textAnchor="middle" fill={a} fontSize="8" fontFamily="monospace" fontWeight="700">α + β = 90°</text>
    </svg>
  );
}
