// Diagrama «marcadores-causa-consecuencia» — espanol.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function MarcadoresCausaConsecuenciaSVG({ tema }) {
  const az = tema.azul, ac = tema.acento;
  return (
    <svg viewBox="0 0 520 130" width="100%" style={{ display: "block" }}>
      {/* Background halves */}
      <rect x="0" y="0" width="520" height="64" fill={`${az}06`}/>
      <rect x="0" y="64" width="520" height="66" fill={`${ac}06`}/>
      <line x1="0" y1="64" x2="520" y2="64" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>

      {/* ── CAUSALES ── */}
      <text x="8" y="14" fill={az} fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" letterSpacing="0.12em">CAUSALES</text>
      <text x="8" y="25" fill={tema.muted} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif">porque · ya que · puesto que · dado que · a causa de</text>
      <rect x="8"   y="31" width="88" height="22" rx="5" fill="rgba(0,0,0,0.25)" stroke="rgba(255,255,255,0.13)" strokeWidth="1"/>
      <text x="52"  y="45" fill={tema.sub} fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">Resultado</text>
      <line x1="98" y1="42" x2="148" y2="42" stroke={az} strokeWidth="1.8"/>
      <polygon points="98,38 90,42 98,46" fill={az}/>
      <text x="123" y="37" fill={az} fontSize="8.5" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">porque</text>
      <rect x="152" y="31" width="88" height="22" rx="5" fill={`${az}22`} stroke={az} strokeWidth="1.5"/>
      <text x="196" y="45" fill={az} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="middle">CAUSA</text>
      <text x="8" y="61" fill={tema.muted} fontSize="7.5" fontFamily="Georgia,serif" fontStyle="italic">«Llegó tarde porque perdió el autobús.»</text>

      {/* Right panel */}
      <rect x="274" y="3" width="242" height="58" rx="6" fill="rgba(0,0,0,0.2)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <text x="395" y="16" fill={az} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="middle">¿por qué ocurrió X?  →  lo nuevo = CAUSA</text>
      <text x="285" y="32" fill={tema.sub} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif">«No vino,  »  +  «ya que estaba enfermo.»</text>
      <text x="285" y="46" fill={tema.muted} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif" fontStyle="italic">el marcador precede a la causa en la oración</text>

      {/* ── CONSECUTIVOS ── */}
      <text x="8" y="78" fill={ac} fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" letterSpacing="0.12em">CONSECUTIVOS</text>
      <text x="8" y="89" fill={tema.muted} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif">por lo tanto · en consecuencia · por ende · de ahí que · así pues</text>
      <rect x="8"   y="95" width="88" height="22" rx="5" fill="rgba(0,0,0,0.25)" stroke="rgba(255,255,255,0.13)" strokeWidth="1"/>
      <text x="52"  y="109" fill={tema.sub} fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">Causa</text>
      <line x1="98" y1="106" x2="148" y2="106" stroke={ac} strokeWidth="1.8"/>
      <polygon points="148,102 156,106 148,110" fill={ac}/>
      <text x="123" y="101" fill={ac} fontSize="7.5" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">por lo tanto</text>
      <rect x="152" y="95" width="110" height="22" rx="5" fill={`${ac}22`} stroke={ac} strokeWidth="1.5"/>
      <text x="207" y="109" fill={ac} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="middle">CONSECUENCIA</text>
      <text x="8" y="126" fill={tema.muted} fontSize="7.5" fontFamily="Georgia,serif" fontStyle="italic">«Perdió el autobús. Por lo tanto, llegó tarde.»</text>

      {/* Right panel */}
      <rect x="274" y="67" width="242" height="58" rx="6" fill="rgba(0,0,0,0.2)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <text x="395" y="80" fill={ac} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="middle">¿qué resulta de X?  →  lo nuevo = EFECTO</text>
      <text x="285" y="96" fill={tema.sub} fontSize="8" fontFamily="'Figtree', system-ui, sans-serif">«Perdió el autobús.  »  +  «En consecuencia, llegó tarde.»</text>
      <text x="285" y="110" fill={tema.muted} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif" fontStyle="italic">el marcador precede a la consecuencia en la oración</text>
    </svg>
  );
}
