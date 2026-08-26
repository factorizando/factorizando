// Diagrama «conjuntos-venn» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function VennConjuntosSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, gr = tema.canal(1), mu = tema.muted;
  return (
    <svg viewBox="0 0 300 158" width="100%" style={{ display: "block", maxHeight: 168 }}>
      <rect x="8" y="12" width="284" height="134" rx="8" fill={tema.azulSuave} stroke={tema.border} strokeWidth="1.3" />
      <text x="280" y="30" fill={mu} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="end">Ω</text>
      <defs><clipPath id="venn-conj-A"><circle cx="120" cy="86" r="58" /></clipPath></defs>
      <circle cx="120" cy="86" r="58" fill={`${a}22`} stroke={a} strokeWidth="2" />
      <circle cx="180" cy="86" r="58" fill={`${bl}22`} stroke={bl} strokeWidth="2" />
      <circle cx="180" cy="86" r="58" fill={`${gr}55`} clipPath="url(#venn-conj-A)" />
      <text x="82" y="92" fill={a} fontSize="18" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
      <text x="218" y="92" fill={bl} fontSize="18" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">B</text>
      <text x="150" y="90" fill={gr} fontSize="10" fontFamily="'IBM Plex Mono',monospace" fontWeight="700" textAnchor="middle">A∩B</text>
    </svg>
  );
}
