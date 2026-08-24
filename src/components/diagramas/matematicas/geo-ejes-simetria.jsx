// Diagrama «geo-ejes-simetria» — matematicas (geometría).
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function GeoEjesSimetriaSVG({ tema }) {
  const az = tema.azul, a = tema.acento, gold = "#f5c842";
  return (
    <svg viewBox="0 0 320 130" width="100%" style={{ display: "block" }}>
      <rect x="1" y="1" width="154" height="128" rx="5" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="78" y="13" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">CUADRADO · 4 EJES</text>
      <rect x="48" y="32" width="60" height="60" fill={`${az}1e`} stroke={az} strokeWidth="1.6" />
      <line x1="78" y1="26" x2="78" y2="98" stroke={gold} strokeWidth="1.1" strokeDasharray="4,2" />
      <line x1="42" y1="62" x2="114" y2="62" stroke={gold} strokeWidth="1.1" strokeDasharray="4,2" />
      <line x1="44" y1="28" x2="112" y2="96" stroke={gold} strokeWidth="1.1" strokeDasharray="4,2" />
      <line x1="112" y1="28" x2="44" y2="96" stroke={gold} strokeWidth="1.1" strokeDasharray="4,2" />
      <text x="78" y="116" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace">2 medianas + 2 diagonales</text>

      <rect x="165" y="1" width="154" height="128" rx="5" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="242" y="13" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">RECTÁNGULO · 2 EJES</text>
      <rect x="198" y="40" width="88" height="44" fill={`${az}1e`} stroke={az} strokeWidth="1.6" />
      <line x1="242" y1="34" x2="242" y2="90" stroke={gold} strokeWidth="1.1" strokeDasharray="4,2" />
      <line x1="192" y1="62" x2="292" y2="62" stroke={gold} strokeWidth="1.1" strokeDasharray="4,2" />
      <line x1="198" y1="40" x2="286" y2="84" stroke="#ff7755" strokeWidth="1" strokeDasharray="3,3" opacity="0.7" />
      <text x="242" y="108" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace">solo las medianas</text>
      <text x="242" y="120" textAnchor="middle" fill="#ff7755" fontSize="5.5" fontFamily="monospace">la diagonal NO es eje</text>
    </svg>
  );
}
