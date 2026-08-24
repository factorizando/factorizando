// Diagrama «ej-est-rango» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function Ej_EstRangoSVG({ tema }) {
  const a = tema.acento, mu = tema.muted;
  const datos = [12, 7, 20, 5, 15];
  const X = (v) => 20 + (v / 22) * 280;
  const y = 46;
  return (
    <svg viewBox="0 0 320 96" width="100%" style={{ display: "block", maxHeight: 104 }}>
      <line x1={X(0)} y1={y} x2={X(22)} y2={y} stroke={tema.border} strokeWidth="1.4" />
      {datos.map((v, i) => {
        const ext = v === 5 || v === 20;
        return (
          <g key={i}>
            <circle cx={X(v)} cy={y} r="6" fill={ext ? tema.acentoMed : tema.azulSuave} stroke={ext ? a : tema.azulBorde} strokeWidth={ext ? 2 : 1.4} />
            <text x={X(v)} y={y + 18} fill={ext ? a : mu} fontSize="11" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">{v}</text>
          </g>
        );
      })}
      <text x={X(5)} y={y - 12} fill={a} fontSize="10.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">mín</text>
      <text x={X(20)} y={y - 12} fill={a} fontSize="10.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">máx</text>
    </svg>
  );
}
