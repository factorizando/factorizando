// Diagrama «eco-piramide» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function EcoPiramideSVG({ tema }) {
  const a = tema.acento, mu = tema.muted, T = tema.texto;
  const niveles = [
    { label: "Productores", pct: "100%", w: 200, c: "#4ade80" },
    { label: "Cons. 1.°", pct: "10%", w: 150, c: "#34d399" },
    { label: "Cons. 2.°", pct: "1%", w: 100, c: "#f5c842" },
    { label: "Cons. 3.°", pct: "0.1%", w: 56, c: "#fb7185" },
  ];
  const H = 22, ox = 140, oy = 26;
  return (
    <svg viewBox="0 0 280 130" width="100%" style={{ display: "block", maxHeight: 140 }}>
      <text x={140} y={14} textAnchor="middle" fill={a} fontSize="8" fontFamily="'DM Sans',sans-serif">pirámide trófica — regla del 10 %</text>
      {niveles.map(({ label, pct, w, c }, i) => {
        const y = oy + (niveles.length - 1 - i) * H;
        return (
          <g key={i}>
            <rect x={ox - w / 2} y={y} width={w} height={H - 3} rx={2} fill={`${c}28`} stroke={c} strokeWidth="1.5" />
            <text x={ox} y={y + 14} textAnchor="middle" fill={c} fontSize="7.5" fontFamily="'DM Sans',sans-serif" fontWeight="600">{label}</text>
            <text x={ox - w / 2 + 5} y={y + 14} fill={c} fontSize="7" fontFamily="'DM Sans',sans-serif">{pct}</text>
          </g>
        );
      })}
      <text x={140} y={124} textAnchor="middle" fill={mu} fontSize="7.5" fontFamily="'DM Sans',sans-serif">la energía fluye hacia arriba; ~90 % se pierde como calor</text>
    </svg>
  );
}
