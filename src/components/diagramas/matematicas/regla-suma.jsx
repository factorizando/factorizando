// Diagrama «regla-suma» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function ReglaSumaSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, gr = tema.canal(1), T = tema.texto;
  return (
    <svg viewBox="0 0 320 150" width="100%" style={{ display: "block", maxHeight: 155 }}>
      <defs>
        <clipPath id="clip-suma-E"><circle cx="208" cy="58" r="34"/></clipPath>
      </defs>
      {/* Izquierda: mutuamente excluyentes */}
      <circle cx="46" cy="58" r="30" fill={`${a}26`} stroke={a} strokeWidth="2"/>
      <circle cx="112" cy="58" r="30" fill={`${bl}26`} stroke={bl} strokeWidth="2"/>
      <text x="46" y="63" fill={a} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="112" y="63" fill={bl} fontSize="15" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">F</text>
      <text x="79" y="110" fill={T} fontSize="10.5" textAnchor="middle" fontFamily="'Figtree', system-ui, sans-serif">excluyentes</text>
      <text x="79" y="126" fill={tema.muted} fontSize="9.5" textAnchor="middle" fontFamily="'Figtree', system-ui, sans-serif">P(E∪F)=P(E)+P(F)</text>
      {/* Divisor */}
      <line x1="160" y1="14" x2="160" y2="136" stroke={tema.border} strokeWidth="1"/>
      {/* Derecha: no excluyentes (intersección resaltada) */}
      <circle cx="208" cy="58" r="34" fill={`${a}22`} stroke={a} strokeWidth="2"/>
      <circle cx="256" cy="58" r="34" fill={`${bl}22`} stroke={bl} strokeWidth="2"/>
      <circle cx="256" cy="58" r="34" fill={`${gr}66`} clipPath="url(#clip-suma-E)"/>
      <text x="194" y="63" fill={a} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <text x="270" y="63" fill={bl} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">F</text>
      <text x="232" y="110" fill={T} fontSize="10.5" textAnchor="middle" fontFamily="'Figtree', system-ui, sans-serif">no excluyentes</text>
      <text x="232" y="126" fill={gr} fontSize="9.5" textAnchor="middle" fontFamily="'Figtree', system-ui, sans-serif">restar P(E∩F)</text>
    </svg>
  );
}
