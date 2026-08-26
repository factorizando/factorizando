// Diagrama «gen-punnett» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function GenPunnettSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto;
  const inner = [
    { gx: 1, gy: 1, g: "AA", domin: true }, { gx: 2, gy: 1, g: "Aa", domin: true },
    { gx: 1, gy: 2, g: "Aa", domin: true }, { gx: 2, gy: 2, g: "aa", domin: false },
  ];
  const S = 38, ox = 60, oy = 22;
  return (
    <svg viewBox="0 0 220 150" width="100%" style={{ display: "block", maxHeight: 158, maxWidth: 240 }}>
      {/* encabezados columnas (padre Aa) */}
      {["A", "a"].map((g, i) => (
        <text key={i} x={ox + S / 2 + i * S} y={oy - 6} textAnchor="middle" fill={a} fontSize="13" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700">{g}</text>
      ))}
      {/* encabezados filas (madre Aa) */}
      {["A", "a"].map((g, i) => (
        <text key={i} x={ox - 12} y={oy + S / 2 + 5 + i * S} textAnchor="middle" fill={bl} fontSize="13" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700">{g}</text>
      ))}
      {inner.map((c, i) => {
        const x = ox + (c.gx - 1) * S, y = oy + (c.gy - 1) * S;
        return (
          <g key={i}>
            <rect x={x} y={y} width={S} height={S} fill={c.domin ? `${a}24` : `${tema.canal(2)}29`} stroke={c.domin ? a : tema.canal(2)} strokeWidth="1.6" />
            <text x={x + S / 2} y={y + S / 2 + 5} textAnchor="middle" fill={c.domin ? a : tema.canal(2)} fontSize="12" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700">{c.g}</text>
          </g>
        );
      })}
      <text x={110} y={oy + 2 * S + 22} textAnchor="middle" fill={T} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif">Aa × Aa → 1 AA : 2 Aa : 1 aa</text>
      <text x={110} y={oy + 2 * S + 36} textAnchor="middle" fill={mu} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif">fenotipo 3 dominante : 1 recesivo</text>
    </svg>
  );
}
