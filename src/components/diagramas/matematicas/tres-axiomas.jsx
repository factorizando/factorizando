// Diagrama «tres-axiomas» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function AxiomasSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, gr = tema.canal(1), T = tema.texto, mu = tema.muted;
  const centros = [56, 165, 274];
  const badge = (x, n) => (
    <g>
      <circle cx={x} cy={16} r={9.5} fill={tema.acentoMed} stroke={a} strokeWidth="1.4"/>
      <text x={x} y={20} fill={a} fontSize="12" fontWeight="700" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">{n}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 330 152" width="100%" style={{ display: "block", maxHeight: 168 }}>
      {/* divisores */}
      <line x1="110" y1="14" x2="110" y2="138" stroke={tema.border} strokeWidth="1"/>
      <line x1="220" y1="14" x2="220" y2="138" stroke={tema.border} strokeWidth="1"/>

      {/* ── Axioma 1: no negatividad ── */}
      {badge(centros[0], "1")}
      <line x1={centros[0]} y1="40" x2={centros[0]} y2="100" stroke={mu} strokeWidth="1.2"/>
      <line x1={centros[0] - 10} y1="100" x2={centros[0] + 10} y2="100" stroke={mu} strokeWidth="1.4"/>
      <text x={centros[0] - 16} y="104" fill={mu} fontSize="11" fontFamily="Georgia,serif" textAnchor="middle">0</text>
      <rect x={centros[0] - 8} y="56" width="16" height="44" rx="2" fill={`${gr}33`} stroke={gr} strokeWidth="1.6"/>
      <polygon points={`${centros[0]},42 ${centros[0] - 6},52 ${centros[0] + 6},52`} fill={gr}/>
      <text x={centros[0]} y="122" fill={T} fontSize="12.5" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">P(E) ≥ 0</text>
      <text x={centros[0]} y="136" fill={mu} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">no negatividad</text>

      {/* ── Axioma 2: normalización ── */}
      {badge(centros[1], "2")}
      <circle cx={centros[1]} cy="66" r="30" fill={`${a}26`} stroke={a} strokeWidth="2"/>
      <text x={centros[1]} y="72" fill={a} fontSize="20" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">Ω</text>
      <text x={centros[1] + 30} y="44" fill={gr} fontSize="11" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">100%</text>
      <text x={centros[1]} y="122" fill={T} fontSize="12.5" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">P(Ω) = 1</text>
      <text x={centros[1]} y="136" fill={mu} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">normalización</text>

      {/* ── Axioma 3: aditividad ── */}
      {badge(centros[2], "3")}
      <circle cx={centros[2] - 18} cy="66" r="16" fill={`${a}26`} stroke={a} strokeWidth="1.8"/>
      <text x={centros[2] - 18} y="71" fill={a} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">E</text>
      <circle cx={centros[2] + 18} cy="66" r="16" fill={`${bl}26`} stroke={bl} strokeWidth="1.8"/>
      <text x={centros[2] + 18} y="71" fill={bl} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">F</text>
      <text x={centros[2]} y="71" fill={T} fontSize="13" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">+</text>
      <text x={centros[2]} y="122" fill={T} fontSize="11" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">P(E)+P(F)</text>
      <text x={centros[2]} y="136" fill={mu} fontSize="10" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">aditividad (excluyentes)</text>
    </svg>
  );
}
