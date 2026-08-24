// Diagrama «geo-economia» — geografia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function GeoEconomiaSVG({ tema }) {
  const a = tema.acento;
  const gold = "#f5c842";
  const grn = "#3a8a3a";
  const red = "#cc4420";
  const W = 152, barH = 12, barGap = 5, startY = 38, lbW = 50, maxBW = 80;
  const PL = 2, PR = 166; // panel left x

  const devInds  = [["IDH","0.90",90,grn],["Esp. vida","80 años",89,grn],["Alfabet.","99%",99,grn],["Natalidad","10 ‰",25,a]];
  const devgInds = [["IDH","0.60",60,gold],["Esp. vida","68 años",76,gold],["Alfabet.","75%",75,gold],["Natalidad","25 ‰",63,red]];

  const panelRows = (inds, px) =>
    inds.map(([label, val, pct, color], i) => {
      const bW = Math.round(pct * maxBW / 100);
      const y = startY + i * (barH + barGap);
      const barX = px + lbW + 8;
      return (
        <g key={i}>
          <text x={px + 8} y={y + barH - 1} fill="rgba(255,255,255,0.5)" fontSize="6" fontFamily="monospace">{label}</text>
          <rect x={barX} y={y} width={bW} height={barH} fill={color} opacity="0.75" rx="2"/>
          <text x={barX + bW + 3} y={y + barH - 1} fill={color} fontSize="5.5" fontFamily="monospace">{val}</text>
        </g>
      );
    });

  return (
    <svg viewBox="0 0 320 162" width="100%" style={{ display: "block" }}>
      {/* Top: indicators */}
      <rect x={PL}  y="2" width={W} height="104" rx="6" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.08)"/>
      <text x={PL + W/2} y="13" textAnchor="middle" fill={grn}  fontSize="7" fontFamily="monospace" fontWeight="700">PAÍSES DESARROLLADOS</text>
      <text x={PL + W/2} y="22" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5.5" fontFamily="monospace">EUA · Alemania · Japón · Francia</text>
      <text x={PL + W/2} y="31" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="5" fontFamily="monospace">indicadores altos</text>
      {panelRows(devInds, PL)}

      <rect x={PR}  y="2" width={W} height="104" rx="6" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.08)"/>
      <text x={PR + W/2} y="13" textAnchor="middle" fill={gold} fontSize="7" fontFamily="monospace" fontWeight="700">PAÍSES EN DESARROLLO</text>
      <text x={PR + W/2} y="22" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5.5" fontFamily="monospace">México · India · Nigeria · Bolivia</text>
      <text x={PR + W/2} y="31" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="5" fontFamily="monospace">indicadores intermedios-bajos</text>
      {panelRows(devgInds, PR)}

      {/* Brecha label */}
      <text x="160" y="55"  textAnchor="middle" fill="rgba(255,255,255,0.22)" fontSize="5.5" fontFamily="monospace">←</text>
      <text x="160" y="63"  textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">BRECHA</text>
      <text x="160" y="71"  textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">DEL</text>
      <text x="160" y="79"  textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">DESARR.</text>
      <text x="160" y="87"  textAnchor="middle" fill="rgba(255,255,255,0.22)" fontSize="5.5" fontFamily="monospace">→</text>

      {/* Bottom: economic blocs */}
      {[
        { label:"T-MEC", sub:"EUA · Canadá · México", desc:"Mayor bloque por PIB",   color:a,    x:2   },
        { label:"U.E.",  sub:"27 países · Alemania",   desc:"Euro · Banco Central",  color:gold, x:112 },
        { label:"APEC",  sub:"Cuenca del Pacífico",    desc:"Japón · China · EUA",   color:"#4ab890", x:222 },
      ].map((bl, i) => (
        <g key={i}>
          <rect x={bl.x} y="110" width="96" height="48" rx="6"
            fill={`${bl.color}14`} stroke={`${bl.color}44`} strokeWidth="1"/>
          <text x={bl.x + 48} y="122" textAnchor="middle" fill={bl.color} fontSize="7.5" fontFamily="monospace" fontWeight="700">{bl.label}</text>
          <text x={bl.x + 48} y="132" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5" fontFamily="monospace">{bl.sub}</text>
          <text x={bl.x + 48} y="142" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">{bl.desc}</text>
          <text x={bl.x + 48} y="152" textAnchor="middle" fill={bl.color} fontSize="5" fontFamily="monospace" opacity="0.6">México ∈ T-MEC y APEC</text>
        </g>
      ))}
    </svg>
  );
}
