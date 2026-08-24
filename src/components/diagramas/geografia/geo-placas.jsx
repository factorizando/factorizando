// Diagrama «geo-placas» — geografia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function GeoPlacastSVG({ tema }) {
  const a = tema.acento;
  const g = "#f5c842";
  const oceColor = "#1a3a5c";
  const contColor = "#5a3c1a";
  const magmaColor = "#cc3300";
  return (
    <svg viewBox="0 0 320 158" width="100%" style={{ display: "block" }}>
      {/* ── PANEL 1: CONVERGENTE ── */}
      <rect x="2" y="2" width="98" height="154" rx="6" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <text x="51" y="13" textAnchor="middle" fill={g} fontSize="7.5" fontFamily="monospace" letterSpacing="0.5">CONVERGENTE</text>
      <text x="51" y="21" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">placas se acercan</text>
      {/* Placa oceánica (izq) con subducción */}
      <polygon points="4,90 50,70 50,105 4,125" fill={oceColor} opacity="0.85"/>
      <text x="27" y="100" textAnchor="middle" fill="rgba(150,200,255,0.8)" fontSize="5" fontFamily="monospace">oceánica</text>
      {/* Placa continental (der) */}
      <rect x="50" y="65" width="48" height="42" rx="3" fill={contColor} opacity="0.85"/>
      <text x="74" y="90" textAnchor="middle" fill="rgba(255,200,150,0.85)" fontSize="5" fontFamily="monospace">continental</text>
      {/* Flechas de movimiento */}
      <text x="15" y="63" fill={g} fontSize="9">→</text>
      <text x="80" y="63" fill={g} fontSize="9">←</text>
      {/* Volcán */}
      <polygon points="68,64 74,38 80,64" fill="#cc4400" opacity="0.9"/>
      <text x="74" y="36" textAnchor="middle" fill="#ff7755" fontSize="6">🌋</text>
      <text x="74" y="31" textAnchor="middle" fill="#ff7755" fontSize="5" fontFamily="monospace">volcán</text>
      {/* Manto */}
      <ellipse cx="27" cy="128" rx="20" ry="8" fill={magmaColor} opacity="0.4"/>
      <text x="27" y="130" textAnchor="middle" fill="#ff8866" fontSize="5" fontFamily="monospace">manto</text>
      {/* Sismo símbolo */}
      <text x="51" y="120" textAnchor="middle" fill="rgba(255,200,50,0.7)" fontSize="6" fontFamily="monospace">≋sismos</text>
      {/* Ejemplos */}
      <text x="51" y="140" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5" fontFamily="monospace">Andes · Himalaya</text>
      <text x="51" y="150" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5" fontFamily="monospace">Cinturón de Fuego</text>

      {/* ── PANEL 2: DIVERGENTE ── */}
      <rect x="111" y="2" width="98" height="154" rx="6" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <text x="160" y="13" textAnchor="middle" fill={a} fontSize="7.5" fontFamily="monospace" letterSpacing="0.5">DIVERGENTE</text>
      <text x="160" y="21" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">placas se separan</text>
      {/* Placa izquierda */}
      <rect x="113" y="65" width="42" height="42" rx="3" fill={oceColor} opacity="0.8"/>
      <text x="134" y="90" textAnchor="middle" fill="rgba(150,200,255,0.8)" fontSize="5" fontFamily="monospace">placa A</text>
      {/* Placa derecha */}
      <rect x="159" y="65" width="48" height="42" rx="3" fill={oceColor} opacity="0.8"/>
      <text x="183" y="90" textAnchor="middle" fill="rgba(150,200,255,0.8)" fontSize="5" fontFamily="monospace">placa B</text>
      {/* Flechas opuestas */}
      <text x="116" y="63" fill={a} fontSize="9">←</text>
      <text x="183" y="63" fill={a} fontSize="9">→</text>
      {/* Rift / dorsal oceánica */}
      <polygon points="155,64 160,44 165,64" fill={magmaColor} opacity="0.8"/>
      <text x="160" y="42" textAnchor="middle" fill="#ff8866" fontSize="5" fontFamily="monospace">magma</text>
      <text x="160" y="35" textAnchor="middle" fill="#ff8866" fontSize="5.5">↑</text>
      <text x="160" y="29" textAnchor="middle" fill="#ff8866" fontSize="5" fontFamily="monospace">dorsal</text>
      {/* Labels */}
      <text x="160" y="120" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5" fontFamily="monospace">sin volcanes de arco</text>
      <text x="160" y="130" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5" fontFamily="monospace">corteza nueva</text>
      <text x="160" y="140" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5" fontFamily="monospace">Dorsal del Atlántico</text>
      <text x="160" y="150" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5" fontFamily="monospace">Rift Valley · Islandia</text>

      {/* ── PANEL 3: TRANSFORMANTE ── */}
      <rect x="220" y="2" width="98" height="154" rx="6" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <text x="269" y="13" textAnchor="middle" fill="#d070ff" fontSize="7.5" fontFamily="monospace" letterSpacing="0.5">TRANSFORMANTE</text>
      <text x="269" y="21" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">placas se deslizan</text>
      {/* Placa superior */}
      <rect x="224" y="55" width="90" height="30" rx="3" fill={contColor} opacity="0.8"/>
      <text x="269" y="73" textAnchor="middle" fill="rgba(255,200,150,0.8)" fontSize="5" fontFamily="monospace">placa A  →</text>
      {/* Falla (línea zigzag) */}
      <polyline points="224,88 236,84 248,92 260,84 272,92 284,84 296,88 308,84 314,88"
        fill="none" stroke={g} strokeWidth="1.5" strokeDasharray="3,1"/>
      {/* Placa inferior */}
      <rect x="224" y="90" width="90" height="30" rx="3" fill={oceColor} opacity="0.8"/>
      <text x="269" y="108" textAnchor="middle" fill="rgba(150,200,255,0.8)" fontSize="5" fontFamily="monospace">← placa B</text>
      {/* Labels */}
      <text x="269" y="86" textAnchor="middle" fill={g} fontSize="5.5" fontFamily="monospace">falla</text>
      <text x="269" y="130" textAnchor="middle" fill="rgba(255,200,50,0.7)" fontSize="6" fontFamily="monospace">≋sismos</text>
      <text x="269" y="138" textAnchor="middle" fill="rgba(200,100,255,0.65)" fontSize="5" fontFamily="monospace">sin vulcanismo</text>
      <text x="269" y="148" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5" fontFamily="monospace">Falla de San Andrés</text>
    </svg>
  );
}
