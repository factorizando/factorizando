// Diagrama «geo-ciclones» — geografia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function GeoCiclonesSVG({ tema }) {
  const a = tema.acento;
  const orange = "#e07040";
  // Saffir-Simpson categories
  const cats = [
    { cat: "Cat. 1", km: "119–153 km/h", color: "#88cc44", label: "leve" },
    { cat: "Cat. 2", km: "154–177 km/h", color: "#cccc22", label: "moderado" },
    { cat: "Cat. 3", km: "178–208 km/h", color: "#cc8822", label: "intenso" },
    { cat: "Cat. 4", km: "209–251 km/h", color: "#cc4422", label: "extremo" },
    { cat: "Cat. 5", km: "> 252 km/h",   color: "#990022", label: "catastrófico" },
  ];
  return (
    <svg viewBox="0 0 320 158" width="100%" style={{ display: "block" }}>
      {/* Left: Pacific */}
      <rect x="2" y="2" width="96" height="154" rx="6" fill="rgba(230,112,64,0.1)" stroke="rgba(230,112,64,0.35)" strokeWidth="1"/>
      <text x="50" y="14" textAnchor="middle" fill={orange} fontSize="7" fontFamily="monospace" fontWeight="700">PACÍFICO</text>
      <text x="50" y="24" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">15 mayo–30 nov.</text>
      <text x="50" y="33" textAnchor="middle" fill={orange} fontSize="5.5" fontFamily="monospace" opacity="0.8">Pico: jul.–oct.</text>
      <line x1="10" y1="38" x2="90" y2="38" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7"/>
      <text x="8" y="48" fill="rgba(255,255,255,0.5)" fontSize="5" fontFamily="monospace">Estados:</text>
      {["Sinaloa","Nayarit","Jalisco","Colima","Michoacán","Guerrero","Oaxaca","Chiapas"].map((s, i) => (
        <text key={i} x="8" y={56 + i * 9} fill="rgba(255,255,255,0.7)" fontSize="5" fontFamily="monospace">· {s}</text>
      ))}
      <line x1="10" y1="133" x2="90" y2="133" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7"/>
      <text x="50" y="143" textAnchor="middle" fill={orange} fontSize="5" fontFamily="monospace" opacity="0.9">Patricia (2015)</text>
      <text x="50" y="152" textAnchor="middle" fill={orange} fontSize="5" fontFamily="monospace" opacity="0.7">Cat. 5 · récord W</text>

      {/* Center: Saffir-Simpson scale */}
      <rect x="104" y="2" width="112" height="154" rx="6" fill="rgba(0,0,0,0.25)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <text x="160" y="14" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="7" fontFamily="monospace" fontWeight="700">SAFFIR-SIMPSON</text>
      <text x="160" y="23" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5.5" fontFamily="monospace">escala de categorías</text>
      {cats.map((c, i) => (
        <g key={i}>
          <rect x="108" y={32 + i * 24} width="108" height="20" rx="4" fill={`${c.color}20`} stroke={`${c.color}50`} strokeWidth="0.8"/>
          <text x="114" y={32 + i * 24 + 13} fill={c.color} fontSize="7" fontFamily="monospace" fontWeight="700">{c.cat}</text>
          <text x="114" y={32 + i * 24 + 20} fill={c.color} fontSize="5" fontFamily="monospace" opacity="0.75">{c.km}</text>
          <text x="206" y={32 + i * 24 + 14} textAnchor="end" fill={c.color} fontSize="5.5" fontFamily="monospace" opacity="0.85">{c.label}</text>
        </g>
      ))}
      <text x="160" y="158" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="4.5" fontFamily="monospace">viento sostenido</text>

      {/* Right: Atlantic/Caribbean */}
      <rect x="222" y="2" width="96" height="154" rx="6" fill={`${a}10`} stroke={`${a}35`} strokeWidth="1"/>
      <text x="270" y="14" textAnchor="middle" fill={a} fontSize="7" fontFamily="monospace" fontWeight="700">ATLÁNTICO</text>
      <text x="270" y="23" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">1 jun.–30 nov.</text>
      <text x="270" y="32" textAnchor="middle" fill={a} fontSize="5.5" fontFamily="monospace" opacity="0.8">Pico: ago.–oct.</text>
      <line x1="230" y1="37" x2="310" y2="37" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7"/>
      <text x="228" y="47" fill="rgba(255,255,255,0.5)" fontSize="5" fontFamily="monospace">Estados:</text>
      {["Quintana Roo","Yucatán","Tabasco","Veracruz","Tamaulipas"].map((s, i) => (
        <text key={i} x="228" y={55 + i * 9} fill="rgba(255,255,255,0.7)" fontSize="5" fontFamily="monospace">· {s}</text>
      ))}
      <line x1="230" y1="103" x2="310" y2="103" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7"/>
      <text x="270" y="114" textAnchor="middle" fill={a} fontSize="5" fontFamily="monospace" opacity="0.9">Gilberto (1988)</text>
      <text x="270" y="123" textAnchor="middle" fill={a} fontSize="5" fontFamily="monospace" opacity="0.9">Wilma (2005)</text>
      <text x="270" y="132" textAnchor="middle" fill={a} fontSize="5" fontFamily="monospace" opacity="0.7">ambos Cat. 5</text>
    </svg>
  );
}
