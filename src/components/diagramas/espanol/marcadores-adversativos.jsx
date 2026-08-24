// Diagrama «marcadores-adversativos» — espanol.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function MarcadoresAdversativosSVG({ tema }) {
  const rows = [
    { marker: "pero",              color: tema.azul,   desc: "Contraste parcial — limita la primera cláusula",    force: 55 },
    { marker: "sin embargo · no obstante", color: tema.acento, desc: "Concesión fuerte (formal) — resultado inesperado", force: 100 },
    { marker: "aunque",            color: tema.verde,  desc: "Concesión: A es real pero no impide B",              force: 72 },
    { marker: "por el contrario",  color: "#c084fc",   desc: "Oposición total — niega o invierte lo anterior",     force: 140 },
  ];
  return (
    <svg viewBox="0 0 520 132" width="100%" style={{ display: "block" }}>
      <text x="5"   y="12" fill={tema.muted} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600" letterSpacing="0.12em">MARCADOR</text>
      <text x="140" y="12" fill={tema.muted} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600" letterSpacing="0.12em">FUNCIÓN</text>
      <text x="382" y="12" fill={tema.muted} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600" letterSpacing="0.12em">FUERZA DE OPOSICIÓN</text>
      <line x1="0" y1="15" x2="520" y2="15" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      {rows.map(({ marker, color, desc, force }, i) => {
        const y = 20 + i * 28;
        return (
          <g key={i}>
            <rect x="5" y={y} width="128" height="22" rx="5" fill={`${color}18`} stroke={`${color}55`} strokeWidth="1.3"/>
            <text x="69" y={y + 14} fill={color} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">{marker}</text>
            <text x="140" y={y + 14} fill={tema.sub} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif">{desc}</text>
            <rect x="382" y={y + 5} width="132" height="12" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            <rect x="382" y={y + 5} width={force} height="12" rx="3" fill={`${color}40`} stroke="none"/>
          </g>
        );
      })}
      <text x="382" y="129" fill={tema.muted} fontSize="7" fontFamily="'Figtree', system-ui, sans-serif">Débil</text>
      <text x="514" y="129" fill={tema.muted} fontSize="7" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="end">Fuerte</text>
    </svg>
  );
}
