// Diagrama «marcadores-panorama» — espanol.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function MarcadoresPanoramaSVG({ tema }) {
  const cats = [
    { col: 0, row: 0, label: "ADICIÓN",       color: tema.azul,   items: ["además, también", "es más, incluso"] },
    { col: 1, row: 0, label: "ADVERSATIVOS",  color: tema.acento, items: ["pero, sin embargo", "aunque, no obstante"] },
    { col: 2, row: 0, label: "CAUSALES",      color: tema.verde,  items: ["porque, ya que", "puesto que, dado que"] },
    { col: 0, row: 1, label: "CONSECUTIVOS",  color: "#c084fc",   items: ["por lo tanto", "en consecuencia, por ende"] },
    { col: 1, row: 1, label: "TEMPORALES",    color: "#fb923c",   items: ["primero, luego", "después, finalmente"] },
    { col: 2, row: 1, label: "REFORMULACIÓN", color: "#94a3b8",   items: ["es decir, o sea", "en resumen, por ejemplo"] },
  ];
  const startX = 10, colW = 160, colGap = 5;
  const rowY = [38, 100];
  return (
    <svg viewBox="0 0 520 158" width="100%" style={{ display: "block" }}>
      <rect x="135" y="3" width="250" height="27" rx="6" fill={`${tema.acento}18`} stroke={tema.acento} strokeWidth="1.5"/>
      <text x="260" y="21" fill={tema.acento} fontSize="10" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.1em">MARCADORES TEXTUALES</text>
      <text x="260" y="32" fill={tema.muted} fontSize="7.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">guían al lector en las relaciones lógicas entre las ideas</text>
      {cats.map(({ col, row, label, color, items }) => {
        const x = startX + col * (colW + colGap);
        const y = rowY[row];
        return (
          <g key={label}>
            <rect x={x} y={y} width={colW} height={56} rx="5" fill={`${color}10`} stroke={`${color}50`} strokeWidth="1.3"/>
            <rect x={x} y={y} width={colW} height="18" rx="5" fill={`${color}22`}/>
            <rect x={x} y={y + 12} width={colW} height="6" fill={`${color}22`}/>
            <text x={x + colW / 2} y={y + 13} fill={color} fontSize="8" fontFamily="'DM Sans',sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.12em">{label}</text>
            {items.map((item, j) => (
              <text key={j} x={x + colW / 2} y={y + 31 + j * 15} fill={tema.sub} fontSize="8.5" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">{item}</text>
            ))}
            {row === 0 && (
              <line x1={x + colW / 2} y1="30" x2={x + colW / 2} y2={y} stroke={`${color}44`} strokeWidth="1" strokeDasharray="3,2"/>
            )}
          </g>
        );
      })}
    </svg>
  );
}
