// Diagrama «geo-congruencia» — matematicas (geometría).
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function GeoCongruenciaSVG({ tema }) {
  const az = tema.azul, a = tema.acento, gr = tema.verde;
  return (
    <svg viewBox="0 0 320 130" width="100%" style={{ display: "block" }}>
      <rect x="1" y="1" width="154" height="128" rx="5" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="78" y="13" textAnchor="middle" fill={gr} fontSize="6.5" fontFamily="monospace" fontWeight="700">CONGRUENTES</text>
      <polygon points="24,90 64,90 24,52" fill={`${gr}22`} stroke={gr} strokeWidth="1.6" />
      <polygon points="132,52 92,52 132,90" fill={`${gr}22`} stroke={gr} strokeWidth="1.6" />
      <text x="78" y="74" textAnchor="middle" fill={gr} fontSize="13" fontFamily="monospace" fontWeight="700">≅</text>
      <text x="78" y="108" textAnchor="middle" fill="rgba(255,255,255,0.42)" fontSize="6" fontFamily="monospace">misma forma Y tamaño</text>
      <text x="78" y="120" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5.5" fontFamily="monospace">una girada sobre la otra</text>

      <rect x="165" y="1" width="154" height="128" rx="5" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="242" y="13" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">SEMEJANTES</text>
      <polygon points="188,88 212,88 188,68" fill={`${az}22`} stroke={az} strokeWidth="1.6" />
      <polygon points="258,90 306,90 258,50" fill={`${az}22`} stroke={az} strokeWidth="1.6" />
      <text x="237" y="76" textAnchor="middle" fill={a} fontSize="12" fontFamily="monospace" fontWeight="700">~</text>
      <text x="242" y="108" textAnchor="middle" fill="rgba(255,255,255,0.42)" fontSize="6" fontFamily="monospace">misma forma, otro tamaño</text>
      <text x="242" y="120" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5.5" fontFamily="monospace">lados proporcionales</text>
    </svg>
  );
}
