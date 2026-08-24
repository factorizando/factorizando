// Diagrama «geo-cuerpos-volumen» — matematicas (geometría).
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function GeoCuerposVolumenSVG({ tema }) {
  const az = tema.azul, a = tema.acento, mut = "rgba(255,255,255,0.4)";
  const Cell = ({ x, label }) => (
    <g>
      <rect x={x} y="1" width="102" height="128" rx="5" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x={x + 51} y="12" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">{label}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 320 130" width="100%" style={{ display: "block" }}>
      <Cell x={1} label="CUBO" />
      <polygon points="30,46 70,46 70,86 30,86" fill={`${az}22`} stroke={az} strokeWidth="1.5" />
      <polygon points="30,46 44,32 84,32 70,46" fill={`${az}33`} stroke={az} strokeWidth="1.5" />
      <polygon points="70,46 84,32 84,72 70,86" fill={`${az}18`} stroke={az} strokeWidth="1.5" />
      <text x="50" y="100" textAnchor="middle" fill={mut} fontSize="6" fontFamily="monospace">arista a</text>
      <text x="52" y="114" textAnchor="middle" fill={a} fontSize="9" fontFamily="monospace" fontWeight="700">V = a³</text>

      <Cell x={109} label="CILINDRO" />
      <ellipse cx="160" cy="40" rx="22" ry="7" fill={`${az}33`} stroke={az} strokeWidth="1.5" />
      <line x1="138" y1="40" x2="138" y2="76" stroke={az} strokeWidth="1.5" />
      <line x1="182" y1="40" x2="182" y2="76" stroke={az} strokeWidth="1.5" />
      <path d="M 138,76 A 22,7 0 0 0 182,76" fill="none" stroke={az} strokeWidth="1.5" />
      <line x1="160" y1="40" x2="182" y2="40" stroke={a} strokeWidth="1.3" />
      <text x="170" y="36" fill={a} fontSize="6.5" fontFamily="monospace" fontStyle="italic">r</text>
      <text x="190" y="60" fill={mut} fontSize="6.5" fontFamily="monospace" fontStyle="italic">h</text>
      <text x="160" y="100" textAnchor="middle" fill={a} fontSize="8.5" fontFamily="monospace" fontWeight="700">V = πr²·h</text>

      <Cell x={216} label="ESFERA" />
      <circle cx="267" cy="54" r="26" fill={`${az}22`} stroke={az} strokeWidth="1.5" />
      <ellipse cx="267" cy="54" rx="26" ry="8" fill="none" stroke={az} strokeWidth="1" strokeDasharray="2,2" opacity="0.6" />
      <line x1="267" y1="54" x2="293" y2="54" stroke={a} strokeWidth="1.5" />
      <text x="277" y="50" fill={a} fontSize="6.5" fontFamily="monospace" fontStyle="italic">r</text>
      <circle cx="267" cy="54" r="2" fill={a} />
      <text x="267" y="100" textAnchor="middle" fill={a} fontSize="8" fontFamily="monospace" fontWeight="700">V = 4/3·πr³</text>
    </svg>
  );
}
