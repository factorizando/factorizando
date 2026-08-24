// Diagrama «geo-rios» — geografia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function GeoRiosSVG({ tema }) {
  const a = tema.acento;
  const gold = "#f5c842";
  const maxKm = 6853;
  const maxBarW = 148;
  const worldRivers = [
    { name: "Nilo (África)",               km: 6853, color: "#8ab0cc" },
    { name: "Amazonas (Sudamérica)",        km: 6400, color: "#3a8a3a" },
    { name: "Yang-Tsé (China)",            km: 6300, color: "#cc7720" },
    { name: "Mississippi-Missouri (N.Am.)", km: 6275, color: a },
    { name: "Ob-Irtysh (Siberia)",         km: 5410, color: "#7070b0" },
  ];
  const mxRivers = [
    { name: "Bravo/Grande (frontera EUA)",        km: 3034, color: gold },
    { name: "Usumacinta-Grijalva (mayor caudal)", km: 1000, color: gold },
    { name: "Balsas (hidroeléctrico)",            km:  771, color: gold },
    { name: "Lerma-Santiago (abastece Altiplano)", km:  708, color: gold },
  ];
  const bW = (km) => Math.max(Math.round((km / maxKm) * maxBarW), 4);
  return (
    <svg viewBox="0 0 320 158" width="100%" style={{ display: "block" }}>
      {/* World rivers */}
      <rect x="2" y="2" width="316" height="74" rx="6" fill="rgba(0,0,0,0.25)" stroke="rgba(255,255,255,0.08)"/>
      <text x="160" y="13" textAnchor="middle" fill={a} fontSize="7.5" fontFamily="monospace" letterSpacing="1">RÍOS MÁS LARGOS DEL MUNDO</text>
      {worldRivers.map((r, i) => {
        const y = 18 + i * 11;
        return (
          <g key={i}>
            <text x="154" y={y + 8.5} textAnchor="end" fill="rgba(255,255,255,0.5)" fontSize="5.5" fontFamily="monospace">{r.name}</text>
            <rect x="157" y={y} width={bW(r.km)} height="10" fill={r.color} opacity="0.75" rx="2"/>
            <text x={157 + bW(r.km) + 3} y={y + 8} fill={r.color} fontSize="5.5" fontFamily="monospace">{r.km.toLocaleString("es-MX")} km</text>
          </g>
        );
      })}
      {/* Mexico rivers */}
      <rect x="2" y="80" width="316" height="76" rx="6" fill="rgba(0,0,0,0.25)" stroke="rgba(255,255,255,0.08)"/>
      <text x="160" y="92" textAnchor="middle" fill={gold} fontSize="7.5" fontFamily="monospace" letterSpacing="1">PRINCIPALES RÍOS DE MÉXICO</text>
      {mxRivers.map((r, i) => {
        const y = 97 + i * 13;
        return (
          <g key={i}>
            <text x="154" y={y + 9} textAnchor="end" fill="rgba(255,255,255,0.5)" fontSize="5.5" fontFamily="monospace">{r.name}</text>
            <rect x="157" y={y} width={bW(r.km)} height="11" fill={r.color} opacity="0.75" rx="2"/>
            <text x={157 + bW(r.km) + 3} y={y + 9} fill={r.color} fontSize="5.5" fontFamily="monospace">{r.km.toLocaleString("es-MX")} km</text>
          </g>
        );
      })}
    </svg>
  );
}
