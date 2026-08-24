// Diagrama «quimica-separacion» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function QuimicaSeparacionSVG({ tema }) {
  const a = tema.acento, gold = "#f5c842", grn = "#4ab890", org = "#ff7755";
  return (
    <svg viewBox="0 0 320 128" width="100%" style={{ display:"block" }}>
      {/* Panel 1: Filtración */}
      <rect x="1" y="1" width="77" height="126" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="39" y="11" textAnchor="middle" fill={a} fontSize="6" fontFamily="monospace" fontWeight="700">FILTRACIÓN</text>
      <polygon points="14,22 64,22 52,55 26,55" fill="none" stroke={a} strokeWidth="1.5" opacity="0.8"/>
      <line x1="18" y1="29" x2="60" y2="29" stroke={a} strokeWidth="1" strokeDasharray="2,2" opacity="0.45"/>
      <ellipse cx="39" cy="52" rx="11" ry="3" fill={org} opacity="0.5"/>
      <line x1="39" y1="55" x2="39" y2="72" stroke={a} strokeWidth="2" opacity="0.7"/>
      <ellipse cx="39" cy="74" rx="3" ry="4" fill={a} opacity="0.6"/>
      <polygon points="26,74 52,74 55,90 23,90" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
      <text x="39" y="102" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">sólido de líquido</text>
      <text x="39" y="110" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">tamaño partícula</text>
      <text x="39" y="120" textAnchor="middle" fill={a} fontSize="5" fontFamily="monospace">café · agua+arena</text>
      {/* Panel 2: Destilación */}
      <rect x="82" y="1" width="77" height="126" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="120" y="11" textAnchor="middle" fill={gold} fontSize="6" fontFamily="monospace" fontWeight="700">DESTILACIÓN</text>
      <ellipse cx="100" cy="65" rx="14" ry="11" fill={`${gold}20`} stroke={gold} strokeWidth="1.5" opacity="0.8"/>
      <line x1="100" y1="54" x2="100" y2="42" stroke={gold} strokeWidth="1.5"/>
      <line x1="100" y1="42" x2="118" y2="35" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="2,2"/>
      <line x1="118" y1="35" x2="138" y2="52" stroke="rgba(200,200,200,0.5)" strokeWidth="2"/>
      <line x1="138" y1="52" x2="138" y2="70" stroke={a} strokeWidth="1.5"/>
      <ellipse cx="138" cy="72" rx="3" ry="4" fill={a} opacity="0.7"/>
      <text x="95" y="84" fill={org} fontSize="10">🔥</text>
      <text x="120" y="102" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">punto de ebullición</text>
      <text x="120" y="110" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">líquidos miscibles</text>
      <text x="120" y="120" textAnchor="middle" fill={gold} fontSize="5" fontFamily="monospace">agua · alcohol</text>
      {/* Panel 3: Cromatografía */}
      <rect x="163" y="1" width="77" height="126" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="201" y="11" textAnchor="middle" fill={grn} fontSize="6" fontFamily="monospace" fontWeight="700">CROMATOGRAFÍA</text>
      <rect x="187" y="20" width="28" height="62" rx="2" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
      <rect x="188" y="23" width="26" height="8" rx="1" fill={org} opacity="0.65"/>
      <rect x="188" y="33" width="26" height="8" rx="1" fill="#aa44ff" opacity="0.65"/>
      <rect x="188" y="43" width="26" height="8" rx="1" fill={gold} opacity="0.65"/>
      <rect x="188" y="53" width="26" height="8" rx="1" fill={grn} opacity="0.65"/>
      <line x1="183" y1="78" x2="219" y2="78" stroke="rgba(100,150,255,0.45)" strokeWidth="1" strokeDasharray="2,2"/>
      <text x="201" y="75" textAnchor="middle" fill="rgba(100,150,255,0.4)" fontSize="4.5" fontFamily="monospace">solvente</text>
      <text x="201" y="102" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">afinidad química</text>
      <text x="201" y="110" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">componentes disueltos</text>
      <text x="201" y="120" textAnchor="middle" fill={grn} fontSize="5" fontFamily="monospace">pigmentos · ADN</text>
      {/* Panel 4: Centrifugación */}
      <rect x="244" y="1" width="76" height="126" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="282" y="11" textAnchor="middle" fill={org} fontSize="5.5" fontFamily="monospace" fontWeight="700">CENTRIFUGACIÓN</text>
      <polygon points="268,26 296,26 298,74 266,74" fill="none" stroke={org} strokeWidth="1.5" opacity="0.8"/>
      <rect x="267" y="60" width="30" height="13" fill={gold} opacity="0.5"/>
      <rect x="267" y="46" width="30" height="14" fill="rgba(100,150,255,0.4)"/>
      <rect x="267" y="28" width="30" height="18" fill="rgba(255,255,255,0.12)"/>
      <text x="300" y="68" fill={gold} fontSize="4" fontFamily="monospace">denso</text>
      <text x="300" y="54" fill="rgba(150,200,255,0.6)" fontSize="4" fontFamily="monospace">medio</text>
      <text x="300" y="38" fill="rgba(255,255,255,0.3)" fontSize="4" fontFamily="monospace">ligero</text>
      <text x="282" y="102" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">densidad / tamaño</text>
      <text x="282" y="110" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">mezclas complejas</text>
      <text x="282" y="120" textAnchor="middle" fill={org} fontSize="5" fontFamily="monospace">sangre · leche</text>
    </svg>
  );
}
