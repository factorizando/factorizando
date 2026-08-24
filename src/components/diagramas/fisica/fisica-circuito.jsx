// Diagrama «fisica-circuito» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function FisicaCircuitoSVG({ tema }) {
  const a = tema.acento, gold = "#f5c842", grn = "#4ab890";
  return (
    <svg viewBox="0 0 320 130" width="100%" style={{ display:"block" }}>
      {/* LEFT: Serie */}
      <rect x="1" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="78" y="11" textAnchor="middle" fill={gold} fontSize="6.5" fontFamily="monospace" fontWeight="700">CIRCUITO EN SERIE</text>
      <text x="78" y="19" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5" fontFamily="monospace">misma corriente · I₁ = I₂ = I</text>
      <line x1="28" y1="33" x2="138" y2="33" stroke={gold} strokeWidth="1.5"/>
      <line x1="138" y1="33" x2="138" y2="88" stroke={gold} strokeWidth="1.5"/>
      <line x1="28" y1="88" x2="138" y2="88" stroke={gold} strokeWidth="1.5"/>
      <line x1="28" y1="33" x2="28" y2="50" stroke={gold} strokeWidth="1.5"/>
      <line x1="28" y1="66" x2="28" y2="88" stroke={gold} strokeWidth="1.5"/>
      <line x1="23" y1="50" x2="33" y2="50" stroke={gold} strokeWidth="2.5"/>
      <line x1="25" y1="57" x2="31" y2="57" stroke={gold} strokeWidth="1.5"/>
      <line x1="25" y1="62" x2="31" y2="62" stroke={gold} strokeWidth="1.5"/>
      <line x1="23" y1="66" x2="33" y2="66" stroke={gold} strokeWidth="2.5"/>
      <text x="18" y="56" textAnchor="middle" fill={gold} fontSize="6">+</text>
      <text x="18" y="68" textAnchor="middle" fill={gold} fontSize="6">−</text>
      <rect x="53" y="27" width="28" height="12" rx="2" fill="rgba(0,0,0,0.3)" stroke={a} strokeWidth="1.5"/>
      <text x="67" y="36" textAnchor="middle" fill={a} fontSize="6" fontFamily="monospace">R₁</text>
      <rect x="93" y="27" width="28" height="12" rx="2" fill="rgba(0,0,0,0.3)" stroke={a} strokeWidth="1.5"/>
      <text x="107" y="36" textAnchor="middle" fill={a} fontSize="6" fontFamily="monospace">R₂</text>
      <polygon points="85,31 89,33 85,35" fill="rgba(255,255,255,0.35)"/>
      <text x="78" y="102" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">V = V₁ + V₂</text>
      <text x="78" y="111" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">R_total = R₁ + R₂</text>
      <text x="78" y="122" textAnchor="middle" fill={gold} fontSize="5.5" fontFamily="monospace">si R₁ falla → todo apagado</text>
      {/* RIGHT: Paralelo */}
      <rect x="165" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="242" y="11" textAnchor="middle" fill={grn} fontSize="6.5" fontFamily="monospace" fontWeight="700">CIRCUITO EN PARALELO</text>
      <text x="242" y="19" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5" fontFamily="monospace">mismo voltaje · V₁ = V₂ = V</text>
      <line x1="180" y1="33" x2="308" y2="33" stroke={grn} strokeWidth="1.5"/>
      <line x1="180" y1="88" x2="308" y2="88" stroke={grn} strokeWidth="1.5"/>
      <line x1="180" y1="33" x2="180" y2="50" stroke={grn} strokeWidth="1.5"/>
      <line x1="180" y1="67" x2="180" y2="88" stroke={grn} strokeWidth="1.5"/>
      <line x1="175" y1="50" x2="185" y2="50" stroke={grn} strokeWidth="2.5"/>
      <line x1="177" y1="57" x2="183" y2="57" stroke={grn} strokeWidth="1.5"/>
      <line x1="177" y1="62" x2="183" y2="62" stroke={grn} strokeWidth="1.5"/>
      <line x1="175" y1="67" x2="185" y2="67" stroke={grn} strokeWidth="2.5"/>
      <text x="172" y="56" textAnchor="end" fill={grn} fontSize="6">+</text>
      <text x="172" y="68" textAnchor="end" fill={grn} fontSize="6">−</text>
      <line x1="308" y1="33" x2="308" y2="88" stroke={grn} strokeWidth="1.5"/>
      <line x1="220" y1="33" x2="220" y2="42" stroke={grn} strokeWidth="1.5"/>
      <rect x="210" y="42" width="20" height="14" rx="2" fill="rgba(0,0,0,0.3)" stroke={a} strokeWidth="1.5"/>
      <text x="220" y="52" textAnchor="middle" fill={a} fontSize="6" fontFamily="monospace">R₁</text>
      <line x1="220" y1="56" x2="220" y2="88" stroke={grn} strokeWidth="1.5"/>
      <line x1="268" y1="33" x2="268" y2="42" stroke={grn} strokeWidth="1.5"/>
      <rect x="258" y="42" width="20" height="14" rx="2" fill="rgba(0,0,0,0.3)" stroke={a} strokeWidth="1.5"/>
      <text x="268" y="52" textAnchor="middle" fill={a} fontSize="6" fontFamily="monospace">R₂</text>
      <line x1="268" y1="56" x2="268" y2="88" stroke={grn} strokeWidth="1.5"/>
      <text x="242" y="102" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">I = I₁ + I₂</text>
      <text x="242" y="111" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">1/R_total = 1/R₁ + 1/R₂</text>
      <text x="242" y="122" textAnchor="middle" fill={grn} fontSize="5.5" fontFamily="monospace">si R₁ falla → R₂ sigue</text>
    </svg>
  );
}
