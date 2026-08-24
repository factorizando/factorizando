// Diagrama «una-moneda» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function UnaMonedaSVG({ tema }) {
  const a = tema.acento, mu = tema.muted, T = tema.texto;
  return (
    <svg viewBox="0 0 250 124" width="100%" style={{ display: "block", maxHeight: 134 }}>
      {/* Cara (caso favorable) */}
      <circle cx="66" cy="52" r="42" fill={tema.acentoMed} stroke={a} strokeWidth="2.5"/>
      <circle cx="66" cy="52" r="33" fill="none" stroke={a} strokeWidth="1" opacity="0.5"/>
      <text x="66" y="63" fill={a} fontSize="32" fontFamily="Georgia,serif" textAnchor="middle">C</text>
      <text x="66" y="112" fill={a} fontSize="12.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600" textAnchor="middle">cara · favorable</text>
      {/* Cruz */}
      <circle cx="184" cy="52" r="42" fill={tema.card} stroke={tema.border} strokeWidth="2"/>
      <circle cx="184" cy="52" r="33" fill="none" stroke={mu} strokeWidth="1" opacity="0.4"/>
      <text x="184" y="63" fill={mu} fontSize="32" fontFamily="Georgia,serif" textAnchor="middle">X</text>
      <text x="184" y="112" fill={mu} fontSize="12.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">cruz</text>
      <text x="125" y="38" fill={T} fontSize="15" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">1</text>
      <line x1="118" y1="44" x2="132" y2="44" stroke={T} strokeWidth="1.4"/>
      <text x="125" y="62" fill={T} fontSize="15" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">2</text>
    </svg>
  );
}
