// Diagrama «ej-combinatoria» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function CombinaPersonasSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, T = tema.texto;
  const cx = 80, cy = 80, r = 56;
  const pts = Array.from({ length: 5 }, (_, i) => {
    const ang = (-90 + i * 72) * Math.PI / 180;
    return [cx + r * Math.cos(ang), cy + r * Math.sin(ang)];
  });
  const lines = [];
  for (let i = 0; i < 5; i++) for (let j = i + 1; j < 5; j++) {
    lines.push(<line key={`${i}-${j}`} x1={pts[i][0].toFixed(1)} y1={pts[i][1].toFixed(1)} x2={pts[j][0].toFixed(1)} y2={pts[j][1].toFixed(1)} stroke={`${a}66`} strokeWidth="1.4"/>);
  }
  return (
    <svg viewBox="0 0 230 158" width="100%" style={{ display: "block", maxHeight: 166 }}>
      {lines}
      {pts.map((p, i) => <circle key={i} cx={p[0].toFixed(1)} cy={p[1].toFixed(1)} r="7.5" fill={tema.azulSuave} stroke={bl} strokeWidth="2"/>)}
      <text x="180" y="74" fill={a} fontSize="13" fontFamily="'DM Sans',sans-serif">C(5,2)</text>
      <text x="180" y="95" fill={T} fontSize="16" fontFamily="'IBM Plex Mono',monospace">= 10</text>
    </svg>
  );
}
