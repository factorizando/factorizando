// Diagrama «geo-isometrias» — matematicas (geometría).
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function GeoIsometriasSVG({ tema }) {
  const a = tema.acento, gr = tema.canal(1), faint = "rgba(255,255,255,0.18)";
  const pts = "0,0 0,30 20,30 20,22 8,22 8,0";
  const Cell = ({ x, label }) => (
    <g>
      <rect x={x} y="1" width="102" height="128" rx="5" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x={x + 51} y="12" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">{label}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 320 130" width="100%" style={{ display: "block" }}>
      <Cell x={1} label="TRASLACIÓN" />
      <g transform="translate(16,42)"><polygon points={pts} fill="none" stroke={faint} strokeWidth="1.5" strokeDasharray="3,2" /></g>
      <g transform="translate(58,42)"><polygon points={pts} fill={`${gr}22`} stroke={gr} strokeWidth="1.6" /></g>
      <line x1="40" y1="58" x2="56" y2="58" stroke={a} strokeWidth="1.3" />
      <polygon points="56,55 56,61 61,58" fill={a} />
      <text x="52" y="112" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">desliza (mismo sentido)</text>

      <Cell x={109} label="ROTACIÓN 90°" />
      <g transform="translate(128,44)"><polygon points={pts} fill="none" stroke={faint} strokeWidth="1.5" strokeDasharray="3,2" /></g>
      <g transform="translate(186,44) rotate(90)"><polygon points={pts} fill={`${gr}22`} stroke={gr} strokeWidth="1.6" /></g>
      <path d="M 150,40 A 26,26 0 0 1 176,46" fill="none" stroke={a} strokeWidth="1.3" />
      <polygon points="173,42 179,48 171,49" fill={a} />
      <text x="160" y="112" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">gira sobre un punto</text>

      <Cell x={216} label="REFLEXIÓN" />
      <g transform="translate(238,44)"><polygon points={pts} fill="none" stroke={faint} strokeWidth="1.5" strokeDasharray="3,2" /></g>
      <line x1="268" y1="30" x2="268" y2="86" stroke={a} strokeWidth="1" strokeDasharray="4,2" />
      <g transform="translate(298,44) scale(-1,1)"><polygon points={pts} fill={`${gr}22`} stroke={gr} strokeWidth="1.6" /></g>
      <text x="267" y="112" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">espejo (se invierte)</text>
    </svg>
  );
}
