// Diagrama «geo-minerales» — geografia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function GeoMineralesSVG({ tema }) {
  const a = tema.acento;
  const gold = "#f5c842";
  const cols = [
    {
      title: "PRECIOSOS", color: gold, x: 2,
      minerals: ["Oro (Au)", "Plata (Ag)", "Platino (Pt)", "Diamante"],
      world1: "Sudáfrica · Rusia",
      world2: "Australia · Canadá",
      mx: "México: 1er plata mundial",
      mx2: "Zacatecas · Guanajuato",
    },
    {
      title: "INDUSTRIALES", color: a, x: 112,
      minerals: ["Hierro (Fe)", "Cobre (Cu)", "Zinc (Zn)", "Aluminio"],
      world1: "China (hierro)",
      world2: "Chile (cobre) · Australia",
      mx: "Cobre: Sonora (Cananea)",
      mx2: "Zinc: Zacatecas · Chih.",
    },
    {
      title: "ENERGÉTICOS", color: "#e07040", x: 222,
      minerals: ["Petróleo", "Gas natural", "Carbón", "Uranio"],
      world1: "Rusia · Arabia Saudita",
      world2: "EUA · Qatar",
      mx: "Petróleo: Campeche/Tab.",
      mx2: "Gas: Tamaulipas · Ver.",
    },
  ];
  const W = 96, H = 151;
  return (
    <svg viewBox="0 0 320 155" width="100%" style={{ display: "block" }}>
      {cols.map((col) => (
        <g key={col.x}>
          <rect x={col.x} y="2" width={W} height={H} rx="6" fill={`${col.color}12`} stroke={`${col.color}40`} strokeWidth="1"/>
          <rect x={col.x} y="2" width={W} height="20" rx="6" fill={`${col.color}28`}/>
          <rect x={col.x} y="14" width={W} height="8" fill={`${col.color}28`}/>
          <text x={col.x + W / 2} y="15" textAnchor="middle" fill={col.color} fontSize="7.5" fontFamily="monospace" fontWeight="700" letterSpacing="0.5">{col.title}</text>
          {col.minerals.map((m, j) => (
            <g key={j}>
              <rect x={col.x + 6} y={26 + j * 22} width={W - 12} height="18" rx="3" fill={`${col.color}18`}/>
              <text x={col.x + W / 2} y={26 + j * 22 + 12} textAnchor="middle" fill={col.color} fontSize="6.5" fontFamily="monospace" opacity="0.9">{m}</text>
            </g>
          ))}
          <line x1={col.x + 6} y1="117" x2={col.x + W - 6} y2="117" stroke={`${col.color}30`} strokeWidth="0.7"/>
          <text x={col.x + 6} y="124" fill="rgba(255,255,255,0.4)" fontSize="4.5" fontFamily="monospace">Mundial:</text>
          <text x={col.x + 6} y="131" fill="rgba(255,255,255,0.65)" fontSize="4.5" fontFamily="monospace">{col.world1}</text>
          <text x={col.x + 6} y="138" fill="rgba(255,255,255,0.65)" fontSize="4.5" fontFamily="monospace">{col.world2}</text>
          <line x1={col.x + 6} y1="141" x2={col.x + W - 6} y2="141" stroke={`${col.color}30`} strokeWidth="0.5"/>
          <text x={col.x + 6} y="147" fill={col.color} fontSize="4.5" fontFamily="monospace" opacity="0.9">{col.mx}</text>
          <text x={col.x + 6} y="153" fill={col.color} fontSize="4.5" fontFamily="monospace" opacity="0.75">{col.mx2}</text>
        </g>
      ))}
    </svg>
  );
}
