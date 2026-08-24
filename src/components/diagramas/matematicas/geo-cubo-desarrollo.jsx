// Diagrama «geo-cubo-desarrollo» — matematicas (geometría).
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function GeoCuboDesarrolloSVG({ tema }) {
  const az = tema.azul, a = tema.acento, mut = "rgba(255,255,255,0.4)";
  const s = 22;
  const face = (x, y) => <rect x={x} y={y} width={s} height={s} fill={`${az}22`} stroke={az} strokeWidth="1.4" />;
  return (
    <svg viewBox="0 0 320 130" width="100%" style={{ display: "block" }}>
      {/* Izquierda: desarrollo (cruz de 6 cuadrados) */}
      <rect x="1" y="1" width="190" height="128" rx="5" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="96" y="13" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">DESARROLLO (6 CARAS)</text>
      {face(74, 24)}
      {face(52, 46)}{face(74, 46)}{face(96, 46)}{face(118, 46)}
      {face(74, 68)}
      <text x="96" y="108" textAnchor="middle" fill={mut} fontSize="6" fontFamily="monospace">se despliega el cubo</text>
      <text x="96" y="120" textAnchor="middle" fill={mut} fontSize="6" fontFamily="monospace">en sus 6 caras iguales</text>
      {/* Derecha: cubo y fórmula */}
      <rect x="199" y="1" width="120" height="128" rx="5" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <polygon points="232,46 268,46 268,82 232,82" fill={`${az}22`} stroke={az} strokeWidth="1.5" />
      <polygon points="232,46 246,33 282,33 268,46" fill={`${az}33`} stroke={az} strokeWidth="1.5" />
      <polygon points="268,46 282,33 282,69 268,82" fill={`${az}18`} stroke={az} strokeWidth="1.5" />
      <text x="259" y="103" textAnchor="middle" fill={a} fontSize="9" fontFamily="monospace" fontWeight="700">A = 6·a²</text>
      <text x="259" y="116" textAnchor="middle" fill={mut} fontSize="5.5" fontFamily="monospace">superficie (cm²)</text>
    </svg>
  );
}
