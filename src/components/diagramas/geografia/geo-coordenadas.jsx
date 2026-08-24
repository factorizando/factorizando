// Diagrama «geo-coordenadas» — geografia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function GeoCoordenadaSVG({ tema }) {
  const a = tema.acento;
  const g = "#f5c842";
  const r = "#e06448";
  return (
    <svg viewBox="0 0 320 162" width="100%" style={{ display: "block" }}>
      {/* ── PANEL IZQUIERDO: LATITUD ── */}
      <rect x="2" y="2" width="152" height="158" rx="7" fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <text x="78" y="15" textAnchor="middle" fill={a} fontSize="8.5" fontFamily="monospace" letterSpacing="1.5">LATITUD</text>
      <text x="78" y="24" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="6.5" fontFamily="monospace">paralelos · dirección N/S</text>
      {/* Polo Norte 90°N */}
      <line x1="10" y1="32" x2="146" y2="32" stroke="rgba(160,210,255,0.5)" strokeWidth="1" strokeDasharray="4,3"/>
      <text x="78" y="30" textAnchor="middle" fill="rgba(160,210,255,0.7)" fontSize="6" fontFamily="monospace">90°N · POLO NORTE</text>
      {/* Círculo Polar Ártico 66.5°N */}
      <line x1="10" y1="50" x2="146" y2="50" stroke="rgba(160,210,255,0.35)" strokeWidth="0.8" strokeDasharray="3,3"/>
      <text x="6" y="49" fill="rgba(160,210,255,0.55)" fontSize="5.5" fontFamily="monospace">66.5°N</text>
      {/* Trópico de Cáncer 23.5°N */}
      <line x1="10" y1="72" x2="146" y2="72" stroke={g} strokeWidth="1" strokeDasharray="5,2" opacity="0.75"/>
      <text x="6" y="71" fill={g} fontSize="5.5" fontFamily="monospace" opacity="0.9">23.5°N</text>
      <text x="90" y="70" fill={g} fontSize="5" fontFamily="monospace" opacity="0.65">Trópico de Cáncer</text>
      {/* Ecuador 0° */}
      <line x1="10" y1="94" x2="146" y2="94" stroke={a} strokeWidth="2.5"/>
      <text x="78" y="91" textAnchor="middle" fill={a} fontSize="7.5" fontFamily="monospace" fontWeight="bold">ECUADOR 0°</text>
      {/* Trópico de Capricornio 23.5°S */}
      <line x1="10" y1="116" x2="146" y2="116" stroke={g} strokeWidth="1" strokeDasharray="5,2" opacity="0.75"/>
      <text x="6" y="115" fill={g} fontSize="5.5" fontFamily="monospace" opacity="0.9">23.5°S</text>
      <text x="90" y="114" fill={g} fontSize="5" fontFamily="monospace" opacity="0.65">T. de Capricornio</text>
      {/* Círculo Polar Antártico 66.5°S */}
      <line x1="10" y1="136" x2="146" y2="136" stroke="rgba(160,210,255,0.35)" strokeWidth="0.8" strokeDasharray="3,3"/>
      <text x="6" y="135" fill="rgba(160,210,255,0.55)" fontSize="5.5" fontFamily="monospace">66.5°S</text>
      {/* Polo Sur 90°S */}
      <line x1="10" y1="154" x2="146" y2="154" stroke="rgba(160,210,255,0.5)" strokeWidth="1" strokeDasharray="4,3"/>
      <text x="78" y="160" textAnchor="middle" fill="rgba(160,210,255,0.7)" fontSize="6" fontFamily="monospace">90°S · POLO SUR</text>

      {/* ── PANEL DERECHO: LONGITUD ── */}
      <rect x="166" y="2" width="152" height="158" rx="7" fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <text x="242" y="15" textAnchor="middle" fill={r} fontSize="8.5" fontFamily="monospace" letterSpacing="1.5">LONGITUD</text>
      <text x="242" y="24" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="6.5" fontFamily="monospace">meridianos · dirección E/O</text>
      {/* Línea de Fecha 180° (left edge) */}
      <line x1="174" y1="30" x2="174" y2="155" stroke="rgba(255,120,90,0.6)" strokeWidth="1" strokeDasharray="4,3"/>
      <text x="174" y="28" textAnchor="middle" fill="rgba(255,120,90,0.75)" fontSize="5.5" fontFamily="monospace">180°</text>
      {/* 90°O */}
      <line x1="204" y1="30" x2="204" y2="155" stroke="rgba(255,255,255,0.2)" strokeWidth="0.7" strokeDasharray="3,3"/>
      <text x="204" y="28" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">90°O</text>
      {/* Greenwich 0° */}
      <line x1="242" y1="30" x2="242" y2="155" stroke={r} strokeWidth="2.5"/>
      <text x="242" y="161" textAnchor="middle" fill={r} fontSize="6.5" fontFamily="monospace" fontWeight="bold">0° GREENWICH</text>
      {/* 90°E */}
      <line x1="280" y1="30" x2="280" y2="155" stroke="rgba(255,255,255,0.2)" strokeWidth="0.7" strokeDasharray="3,3"/>
      <text x="280" y="28" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">90°E</text>
      {/* Línea de Fecha 180° (right edge) */}
      <line x1="310" y1="30" x2="310" y2="155" stroke="rgba(255,120,90,0.6)" strokeWidth="1" strokeDasharray="4,3"/>
      <text x="310" y="28" textAnchor="middle" fill="rgba(255,120,90,0.75)" fontSize="5.5" fontFamily="monospace">180°</text>
      {/* Flecha E-O */}
      <text x="178" y="95" fill="rgba(255,255,255,0.22)" fontSize="7" fontFamily="monospace">◄ OESTE</text>
      <text x="258" y="95" fill="rgba(255,255,255,0.22)" fontSize="7" fontFamily="monospace">ESTE ►</text>
      {/* Línea Ecuador horizontal referencia */}
      <line x1="174" y1="92" x2="312" y2="92" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>
    </svg>
  );
}
