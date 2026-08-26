// Diagrama «geo-figuras-planas» — matematicas (geometría).
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function GeoFigurasPlanasSVG({ tema }) {
  const az = tema.azul, a = tema.acento, gr = tema.canal(1), mut = "rgba(255,255,255,0.4)";
  const Cell = ({ x, label }) => (
    <g>
      <rect x={x} y="1" width="102" height="128" rx="5" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x={x + 51} y="12" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">{label}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 320 130" width="100%" style={{ display: "block" }}>
      <Cell x={1} label="RECTÁNGULO" />
      <rect x="28" y="34" width="56" height="36" fill={`${az}22`} stroke={az} strokeWidth="1.6" />
      <text x="56" y="82" textAnchor="middle" fill={gr} fontSize="7" fontFamily="monospace">b</text>
      <text x="20" y="55" textAnchor="middle" fill={gr} fontSize="7" fontFamily="monospace">h</text>
      <text x="52" y="103" textAnchor="middle" fill={a} fontSize="8.5" fontFamily="monospace" fontWeight="700">A = b·h</text>
      <text x="52" y="115" textAnchor="middle" fill={mut} fontSize="5.5" fontFamily="monospace">P = 2(b+h)</text>

      <Cell x={109} label="TRIÁNGULO" />
      <polygon points="124,72 188,72 150,36" fill={`${az}22`} stroke={az} strokeWidth="1.6" />
      <line x1="150" y1="36" x2="150" y2="72" stroke={gr} strokeWidth="1.1" strokeDasharray="3,2" />
      <text x="157" y="57" fill={gr} fontSize="7" fontFamily="monospace">h</text>
      <text x="155" y="84" textAnchor="middle" fill={gr} fontSize="7" fontFamily="monospace">b</text>
      <text x="160" y="103" textAnchor="middle" fill={a} fontSize="8.5" fontFamily="monospace" fontWeight="700">A = b·h / 2</text>

      <Cell x={216} label="CÍRCULO" />
      <circle cx="267" cy="52" r="26" fill={`${az}22`} stroke={az} strokeWidth="1.6" />
      <line x1="267" y1="52" x2="293" y2="52" stroke={a} strokeWidth="1.6" />
      <text x="277" y="48" fill={a} fontSize="7" fontFamily="monospace" fontStyle="italic">r</text>
      <circle cx="267" cy="52" r="2" fill={a} />
      <text x="267" y="103" textAnchor="middle" fill={a} fontSize="8.5" fontFamily="monospace" fontWeight="700">A = πr²</text>
      <text x="267" y="115" textAnchor="middle" fill={mut} fontSize="5.5" fontFamily="monospace">P = 2πr</text>
    </svg>
  );
}
