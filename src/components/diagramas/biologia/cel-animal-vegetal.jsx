// Diagrama «cel-animal-vegetal» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function CelAnimalVegetalSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, T = tema.texto;
  return (
    <svg viewBox="0 0 290 140" width="100%" style={{ display: "block", maxHeight: 150 }}>
      {/* Animal */}
      <ellipse cx={70} cy={70} rx={56} ry={48} fill="rgba(52,211,153,0.05)" stroke={a} strokeWidth="2" />
      <circle cx={68} cy={66} r={18} fill="rgba(134,239,172,0.12)" stroke={bl} strokeWidth="1.8" />
      <circle cx={68} cy={66} r={6} fill={a} opacity="0.5" />
      <ellipse cx={38} cy={96} rx={10} ry={5} fill="rgba(248,113,113,0.2)" stroke={tema.canal(2)} strokeWidth="1.3" transform="rotate(-20 38 96)" />
      <circle cx={98} cy={42} r={5} fill={a} opacity="0.3" stroke={a} strokeWidth="1" />
      <text x={70} y={20} textAnchor="middle" fill={T} fontSize="9.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">Animal</text>
      {/* Vegetal — pared rígida rectangular */}
      <rect x={166} y={26} width={104} height={88} rx={6} fill="none" stroke={tema.canal(1)} strokeWidth="3" />
      <rect x={172} y={32} width={92} height={76} rx={4} fill="rgba(52,211,153,0.05)" stroke={a} strokeWidth="1.6" />
      <circle cx={210} cy={64} r={15} fill="rgba(134,239,172,0.12)" stroke={bl} strokeWidth="1.6" />
      <circle cx={210} cy={64} r={5} fill={a} opacity="0.5" />
      {/* cloroplastos */}
      <ellipse cx={244} cy={46} rx={9} ry={4.5} fill="rgba(74,222,128,0.3)" stroke={tema.canal(1)} strokeWidth="1.3" transform="rotate(25 244 46)" />
      <ellipse cx={238} cy={92} rx={9} ry={4.5} fill="rgba(74,222,128,0.3)" stroke={tema.canal(1)} strokeWidth="1.3" transform="rotate(-15 238 92)" />
      <text x={218} y={20} textAnchor="middle" fill={T} fontSize="9.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">Vegetal</text>
      <text x={218} y={128} textAnchor="middle" fill={tema.canal(1)} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif">pared · cloroplastos · vacuola</text>
    </svg>
  );
}
