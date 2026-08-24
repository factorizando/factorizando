// Diagrama «geo-organizacion» — geografia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function GeoOrganizacionSVG({ tema }) {
  const a = tema.acento;
  const gold = "#f5c842";
  const red = "#cc4420";
  const disint = [
    { pais: "URSS (1991)",          resultado: "→ 15 repúblicas",            color: a },
    { pais: "Yugoslavia (1991–2008)", resultado: "→ 7 países (Balcanes)",    color: a },
    { pais: "Checoslovaquia (1993)", resultado: "→ Rep. Checa + Eslovaquia", color: a },
    { pais: "Alemania (1990)",       resultado: "Reunificación (O + W)",      color: gold },
    { pais: "Yemen (1990)",          resultado: "Reunificación",              color: gold },
    { pais: "Sudán (2011)",          resultado: "→ Sudán + Sudán del Sur",   color: a },
    { pais: "Kosovo (2008)",         resultado: "Independencia de Serbia",    color: a },
  ];
  const tension = [
    { zona: "Oriente Medio",        desc: "Israel-Palestina · guerras regionales" },
    { zona: "Ucrania-Rusia",        desc: "Invasión rusa 2022; tensión OTAN-Rusia" },
    { zona: "Corea del Norte",      desc: "Programa nuclear; tensión con Occidente" },
    { zona: "Cachemira",            desc: "Disputa India-Pakistán desde 1947" },
    { zona: "Estrecho de Taiwán",   desc: "Tensión China-Taiwán-EUA" },
    { zona: "Mar del Sur de China",  desc: "Reclamaciones territoriales China vs. vecinos" },
  ];
  return (
    <svg viewBox="0 0 320 158" width="100%" style={{ display: "block" }}>
      {/* Left: Disintegración/unificación */}
      <rect x="2" y="2" width="152" height="154" rx="6" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.08)"/>
      <text x="78" y="13" textAnchor="middle" fill={a} fontSize="7" fontFamily="monospace" fontWeight="700">DESINTEGRACIÓN / UNIFIC.</text>
      <text x="78" y="22" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5.5" fontFamily="monospace">post-Guerra Fría (1989–)</text>
      {disint.map((d, i) => (
        <g key={i}>
          <rect x="6" y={28 + i * 18} width="144" height="15" rx="3" fill={`${d.color}10`}/>
          <text x="10" y={28 + i * 18 + 10} fill={d.color} fontSize="5.5" fontFamily="monospace" fontWeight="600">{d.pais}</text>
          <text x="10" y={28 + i * 18 + 14} fill="rgba(255,255,255,0.6)" fontSize="4.5" fontFamily="monospace">{d.resultado}</text>
        </g>
      ))}

      {/* Right: Zonas de tensión */}
      <rect x="166" y="2" width="152" height="154" rx="6" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.08)"/>
      <text x="242" y="13" textAnchor="middle" fill={red} fontSize="7" fontFamily="monospace" fontWeight="700">ZONAS DE TENSIÓN</text>
      <text x="242" y="22" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5.5" fontFamily="monospace">conflictos y disputas actuales</text>
      {tension.map((z, i) => (
        <g key={i}>
          <rect x="170" y={28 + i * 21} width="144" height="18" rx="3" fill="rgba(200,70,40,0.1)"/>
          <text x="174" y={28 + i * 21 + 11} fill={red} fontSize="5.5" fontFamily="monospace" fontWeight="600">{z.zona}</text>
          <text x="174" y={28 + i * 21 + 17} fill="rgba(255,255,255,0.55)" fontSize="4.5" fontFamily="monospace">{z.desc}</text>
        </g>
      ))}
    </svg>
  );
}
