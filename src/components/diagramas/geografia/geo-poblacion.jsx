// Diagrama «geo-poblacion» — geografia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function GeoPoblacionSVG({ tema }) {
  const a = tema.acento;
  const red = "#cc4420";
  const scale = 1.9; // px per %
  const barH = 18, barGap = 4, startY = 38, labelX = 55;

  const devAges    = [[32,"0-14","#cc4420"],[27,"15-29","#cc6020"],[20,"30-44","#aa7820"],[13,"45-59","#7a8820"],[8,"60+","#4a9820"]];
  const richAges   = [[15,"0-14","#4a9820"],[17,"15-29","#3a9840"],[21,"30-44","#2a8860"],[23,"45-59","#1a7880"],[24,"60+",a]];

  return (
    <svg viewBox="0 0 320 160" width="100%" style={{ display: "block" }}>
      {/* Panel izquierdo: países en desarrollo */}
      <rect x="2" y="2" width="148" height="156" rx="6" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.08)"/>
      <text x="76" y="13" textAnchor="middle" fill={red} fontSize="6.5" fontFamily="monospace" fontWeight="700">PAÍSES EN DESARROLLO</text>
      <text x="76" y="22" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">Pirámide con base amplia</text>
      <text x="76" y="31" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="5" fontFamily="monospace">México · India · Nigeria · Brasil</text>
      {devAges.map(([pct, label, color], i) => {
        const bW = Math.round(pct * scale);
        const y = startY + i * (barH + barGap);
        return (
          <g key={i}>
            <text x="50" y={y + barH / 2 + 3} textAnchor="end" fill="rgba(255,255,255,0.5)" fontSize="6" fontFamily="monospace">{label}</text>
            <rect x={labelX} y={y} width={bW} height={barH} fill={color} opacity="0.82" rx="2"/>
            <text x={labelX + bW + 3} y={y + barH / 2 + 3} fill={color} fontSize="6" fontFamily="monospace">{pct}%</text>
          </g>
        );
      })}
      {/* Panel derecho: países desarrollados */}
      <rect x="170" y="2" width="148" height="156" rx="6" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.08)"/>
      <text x="244" y="13" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">PAÍSES DESARROLLADOS</text>
      <text x="244" y="22" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">Pirámide envejecida / uniforme</text>
      <text x="244" y="31" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="5" fontFamily="monospace">Japón · Alemania · Suecia · EUA</text>
      {richAges.map(([pct, label, color], i) => {
        const bW = Math.round(pct * scale);
        const y = startY + i * (barH + barGap);
        return (
          <g key={i}>
            <text x="220" y={y + barH / 2 + 3} textAnchor="end" fill="rgba(255,255,255,0.5)" fontSize="6" fontFamily="monospace">{label}</text>
            <rect x="223" y={y} width={bW} height={barH} fill={color} opacity="0.82" rx="2"/>
            <text x={223 + bW + 3} y={y + barH / 2 + 3} fill={color} fontSize="6" fontFamily="monospace">{pct}%</text>
          </g>
        );
      })}
    </svg>
  );
}
