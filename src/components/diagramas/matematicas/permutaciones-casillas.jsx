// Diagrama «permutaciones-casillas» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function PermutacionesCasillasSVG({ tema }) {
  const a = tema.acento, T = tema.texto, mu = tema.muted;
  const slots = [{ pos: "1.º", n: 5 }, { pos: "2.º", n: 4 }, { pos: "3.º", n: 3 }];
  const bw = 54, gap = 30, x0 = 30, by = 50;
  return (
    <svg viewBox="0 0 250 150" width="100%" style={{ display: "block", maxHeight: 162 }}>
      {slots.map((s, i) => {
        const x = x0 + i * (bw + gap);
        return (
          <g key={i}>
            <text x={x + bw / 2} y={by - 14} fill={a} fontSize="22" fontFamily="'IBM Plex Mono',monospace" fontWeight="700" textAnchor="middle">{s.n}</text>
            <text x={x + bw / 2} y={by - 30} fill={mu} fontSize="9.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">opciones</text>
            <rect x={x} y={by} width={bw} height={42} rx={8} fill={tema.acentoMed} stroke={a} strokeWidth="1.8"/>
            <text x={x + bw / 2} y={by + 27} fill={T} fontSize="15" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600" textAnchor="middle">{s.pos}</text>
            {i < 2 && <text x={x + bw + gap / 2} y={by + 28} fill={T} fontSize="18" textAnchor="middle">×</text>}
          </g>
        );
      })}
      <text x="125" y="124" fill={T} fontSize="13.5" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">5 × 4 × 3 = 60 = 5!/2!</text>
      <text x="125" y="142" fill={mu} fontSize="10.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">cada casilla quita una opción</text>
    </svg>
  );
}
