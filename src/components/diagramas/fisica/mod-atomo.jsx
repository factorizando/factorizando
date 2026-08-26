// Diagrama «mod-atomo» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function ModAtomoSVG({ tema }) {
  const bl = tema.azul, rj = tema.canal(2), mu = tema.muted, T = tema.texto;
  return (
    <svg viewBox="0 0 250 130" width="100%" style={{ display: "block", maxHeight: 140 }}>
      <g transform="translate(112 60)">
        <ellipse rx="66" ry="24" fill="none" stroke={mu} strokeWidth="1.3" />
        <ellipse rx="66" ry="24" fill="none" stroke={mu} strokeWidth="1.3" transform="rotate(60)" />
        <ellipse rx="66" ry="24" fill="none" stroke={mu} strokeWidth="1.3" transform="rotate(120)" />
        <circle cx="-4" cy="-3" r="6" fill={`${rj}cc`} />
        <circle cx="5" cy="2" r="6" fill={mu} />
        <circle cx="-2" cy="6" r="6" fill={`${rj}cc`} />
        <circle cx="6" cy="-5" r="6" fill={mu} />
        <g><circle cx="66" cy="0" r="4.5" fill={bl} /></g>
        <g transform="rotate(60)"><circle cx="-66" cy="0" r="4.5" fill={bl} /></g>
        <g transform="rotate(120)"><circle cx="66" cy="0" r="4.5" fill={bl} /></g>
      </g>
      <text x={112} y={122} fill={mu} fontSize="9.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">núcleo (p⁺ + n⁰)</text>
      <text x={206} y={62} fill={bl} fontSize="11" fontFamily="Georgia,serif">e⁻</text>
    </svg>
  );
}
