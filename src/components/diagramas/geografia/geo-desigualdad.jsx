// Diagrama «geo-desigualdad» — geografia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function GeoDesigualdadSVG({ tema }) {
  const az = tema.azul, gr = tema.verde, red = "#ff7755";
  return (
    <svg viewBox="0 0 320 130" width="100%" style={{ display: "block" }}>
      <rect x="1" y="1" width="154" height="128" rx="5" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="78" y="13" textAnchor="middle" fill={gr} fontSize="6.5" fontFamily="monospace" fontWeight="700">5, 5, 8 ✓</text>
      <polygon points="24,88 88,88 56,40" fill={`${gr}1e`} stroke={gr} strokeWidth="1.8" />
      <text x="40" y="70" fill={gr} fontSize="6.5" fontFamily="monospace">5</text>
      <text x="76" y="70" fill={gr} fontSize="6.5" fontFamily="monospace">5</text>
      <text x="56" y="100" textAnchor="middle" fill={gr} fontSize="6.5" fontFamily="monospace">8</text>
      <text x="78" y="118" textAnchor="middle" fill="rgba(255,255,255,0.42)" fontSize="5.5" fontFamily="monospace">8 &lt; 5+5 → cierra</text>

      <rect x="165" y="1" width="154" height="128" rx="5" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="242" y="13" textAnchor="middle" fill={red} fontSize="6.5" fontFamily="monospace" fontWeight="700">5, 5, 12 ✗</text>
      <line x1="180" y1="84" x2="304" y2="84" stroke={az} strokeWidth="1.8" />
      <line x1="180" y1="84" x2="216" y2="56" stroke={red} strokeWidth="1.8" />
      <line x1="304" y1="84" x2="268" y2="56" stroke={red} strokeWidth="1.8" />
      <line x1="216" y1="56" x2="268" y2="56" stroke={red} strokeWidth="1" strokeDasharray="3,2" />
      <text x="194" y="66" fill={red} fontSize="6.5" fontFamily="monospace">5</text>
      <text x="286" y="66" fill={red} fontSize="6.5" fontFamily="monospace">5</text>
      <text x="242" y="98" textAnchor="middle" fill={az} fontSize="6.5" fontFamily="monospace">12</text>
      <text x="242" y="118" textAnchor="middle" fill="rgba(255,255,255,0.42)" fontSize="5.5" fontFamily="monospace">12 &gt; 5+5 → no cierra</text>
    </svg>
  );
}
