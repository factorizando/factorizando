// Diagrama «ter-dilatacion» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function TerDilatacionSVG({ tema }) {
  const a = tema.acento, rj = tema.canal(2), mu = tema.muted, az = tema.azul;
  return (
    <svg viewBox="0 0 250 110" width="100%" style={{ display: "block", maxHeight: 120 }}>
      <rect x={30} y={26} width={120} height={16} rx={2} fill={tema.azulSuave} stroke={az} strokeWidth="1.5" />
      <text x={30} y={20} fill={az} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif">L₀ (frío)</text>
      <rect x={30} y={64} width={170} height={16} rx={2} fill={tema.acentoMed} stroke={a} strokeWidth="1.5" />
      <text x={30} y={58} fill={a} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif">caliente (se dilata)</text>
      <line x1={150} y1={42} x2={150} y2={92} stroke={mu} strokeWidth="1" strokeDasharray="3 3" />
      <line x1={150} y1={90} x2={200} y2={90} stroke={rj} strokeWidth="1.4" />
      <line x1={150} y1={86} x2={150} y2={94} stroke={rj} strokeWidth="1.2" />
      <line x1={200} y1={86} x2={200} y2={94} stroke={rj} strokeWidth="1.2" />
      <text x={175} y={104} fill={rj} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">ΔL</text>
    </svg>
  );
}
