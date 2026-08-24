// Diagrama «conjuntos-numerico» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function VennNumericoSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, gr = tema.verde, mu = tema.muted;
  return (
    <svg viewBox="0 0 300 170" width="100%" style={{ display: "block", maxHeight: 178 }}>
      <rect x="8" y="12" width="284" height="146" rx="8" fill={tema.azulSuave} stroke={tema.border} strokeWidth="1.3" />
      <text x="280" y="30" fill={mu} fontSize="12.5" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">Ω = 30</text>
      <defs><clipPath id="venn-num-A"><circle cx="120" cy="90" r="56" /></clipPath></defs>
      <circle cx="120" cy="90" r="56" fill={`${a}1f`} stroke={a} strokeWidth="2" />
      <circle cx="180" cy="90" r="56" fill={`${bl}1f`} stroke={bl} strokeWidth="2" />
      <circle cx="180" cy="90" r="56" fill={`${gr}44`} clipPath="url(#venn-num-A)" />
      <text x="92" y="36" fill={a} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">Fútbol (18)</text>
      <text x="208" y="36" fill={bl} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">Básquet (15)</text>
      <text x="86" y="96" fill={a} fontSize="17" fontFamily="'IBM Plex Mono',monospace" fontWeight="700" textAnchor="middle">10</text>
      <text x="150" y="96" fill={gr} fontSize="17" fontFamily="'IBM Plex Mono',monospace" fontWeight="700" textAnchor="middle">8</text>
      <text x="214" y="96" fill={bl} fontSize="17" fontFamily="'IBM Plex Mono',monospace" fontWeight="700" textAnchor="middle">7</text>
      <text x="264" y="150" fill={mu} fontSize="13" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">5</text>
    </svg>
  );
}
