// Diagrama «qaa-contaminacion» — quimica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function QaaContaminacionSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto, rojo = tema.rojo;
  return (
    <svg viewBox="0 0 290 125" width="100%" style={{ display: "block", maxHeight: 135 }}>
      {/* lluvia ácida */}
      <text x={72} y={14} textAnchor="middle" fill={rojo} fontSize="8" fontFamily="'DM Sans',sans-serif" fontWeight="700">LLUVIA ÁCIDA</text>
      <rect x={28} y={20} width={88} height={16} rx={6} fill="rgba(120,120,140,0.25)" stroke={mu} strokeWidth="1.2" />
      <text x={72} y={31} textAnchor="middle" fill={T} fontSize="6.5" fontFamily="'DM Sans',sans-serif">SO₂ · NOₓ + H₂O</text>
      {[40,58,76,94].map((x,i)=>(<line key={i} x1={x} y1={40} x2={x-4} y2={56} stroke={bl} strokeWidth="1.4" />))}
      <line x1={34} y1={62} x2={110} y2={62} stroke={mu} strokeWidth="1.5" />
      <text x={72} y={74} textAnchor="middle" fill={mu} fontSize="6.3" fontFamily="'DM Sans',sans-serif">ácidos → daña suelos,</text>
      <text x={72} y={83} textAnchor="middle" fill={mu} fontSize="6.3" fontFamily="'DM Sans',sans-serif">bosques y edificios</text>
      {/* inversión térmica */}
      <text x={216} y={14} textAnchor="middle" fill={a} fontSize="8" fontFamily="'DM Sans',sans-serif" fontWeight="700">INVERSIÓN TÉRMICA</text>
      <rect x={160} y={20} width={112} height={14} rx={3} fill="rgba(244,114,182,0.18)" stroke={bl} strokeWidth="1" />
      <text x={216} y={30} textAnchor="middle" fill={bl} fontSize="6" fontFamily="'DM Sans',sans-serif">aire caliente (tapa)</text>
      <rect x={160} y={36} width={112} height={26} rx={3} fill="rgba(120,120,140,0.3)" stroke={mu} strokeWidth="1" />
      <text x={216} y={47} textAnchor="middle" fill={T} fontSize="6.3" fontFamily="'DM Sans',sans-serif">aire frío + contaminantes</text>
      {[180,200,220,240].map((x,i)=>(<text key={i} x={x} y={58} textAnchor="middle" fill={mu} fontSize="7">•</text>))}
      <line x1={160} y1={62} x2={272} y2={62} stroke={mu} strokeWidth="1.5" />
      <text x={216} y={74} textAnchor="middle" fill={mu} fontSize="6.3" fontFamily="'DM Sans',sans-serif">suelo (ciudad)</text>
      {/* pie */}
      <text x={145} y={98} textAnchor="middle" fill={T} fontSize="7" fontFamily="'DM Sans',sans-serif" fontWeight="600">Agua: contaminación física · química · biológica</text>
      <text x={145} y={112} textAnchor="middle" fill={mu} fontSize="6.6" fontFamily="'DM Sans',sans-serif">fuentes: industrial · urbana · agrícola</text>
    </svg>
  );
}
