// Diagrama «marcadores-adicion» — espanol.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function MarcadoresAdicionSVG({ tema }) {
  const cols = [
    { label: "SIMPLE",    color: tema.azul,   markers: ["además", "también", "igualmente"],    caption: "Suma información de igual peso" },
    { label: "ESCALADA",  color: tema.acento, markers: ["es más", "incluso", "hasta"],          caption: "B tiene más fuerza o peso que A" },
    { label: "PARALELA",  color: tema.canal(1),  markers: ["asimismo", "del mismo modo", "paralelamente"], caption: "B va en el mismo sentido que A" },
  ];
  return (
    <svg viewBox="0 0 520 118" width="100%" style={{ display: "block" }}>
      {cols.map(({ label, color, markers, caption }, i) => {
        const x = 5 + i * 172;
        const cw = 162;
        return (
          <g key={i}>
            <rect x={x} y="3" width={cw} height="112" rx="6" fill={`${color}10`} stroke={`${color}50`} strokeWidth="1.3"/>
            <rect x={x} y="3" width={cw} height="20" rx="6" fill={`${color}25`}/>
            <rect x={x} y="15" width={cw} height="8" fill={`${color}25`}/>
            <text x={x + cw / 2} y="17" fill={color} fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="0.12em">{label}</text>
            {markers.map((m, j) => (
              <text key={j} x={x + cw / 2} y={36 + j * 15} fill={color} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">{m}</text>
            ))}
            {i === 0 && (
              <g>
                <rect x={x + cw / 2 - 20} y="82" width="40" height="13" rx="3" fill={`${color}22`} stroke={`${color}60`} strokeWidth="1"/>
                <text x={x + cw / 2} y="92" fill={color} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">A</text>
                <rect x={x + cw / 2 - 20} y="97" width="40" height="13" rx="3" fill={`${color}22`} stroke={`${color}60`} strokeWidth="1"/>
                <text x={x + cw / 2} y="107" fill={color} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">+ B</text>
              </g>
            )}
            {i === 1 && (
              <g>
                <rect x={x + cw / 2 - 24} y="80" width="48" height="16" rx="3" fill={`${color}28`} stroke={`${color}70`} strokeWidth="1.5"/>
                <text x={x + cw / 2} y="92" fill={color} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="middle">B  ↑↑↑</text>
                <rect x={x + cw / 2 - 18} y="98" width="36" height="12" rx="3" fill={`${color}15`} stroke={`${color}40`} strokeWidth="1"/>
                <text x={x + cw / 2} y="107" fill={color} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">A</text>
              </g>
            )}
            {i === 2 && (
              <g>
                <rect x={x + cw / 2 - 24} y="82" width="22" height="22" rx="3" fill={`${color}22`} stroke={`${color}60`} strokeWidth="1"/>
                <text x={x + cw / 2 - 13} y="97" fill={color} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">A</text>
                <rect x={x + cw / 2 + 2} y="82" width="22" height="22" rx="3" fill={`${color}22`} stroke={`${color}60`} strokeWidth="1"/>
                <text x={x + cw / 2 + 13} y="97" fill={color} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">B</text>
              </g>
            )}
            <text x={x + cw / 2} y="113" fill={tema.muted} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">{caption}</text>
          </g>
        );
      })}
    </svg>
  );
}
