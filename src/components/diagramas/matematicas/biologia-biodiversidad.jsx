// Diagrama «biologia-biodiversidad» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function BiologiaBiodiversidadSVG({ tema }) {
  const a = tema.acento, grn = "#4ab890", gold = "#f5c842", org = "#ff7755", lila = "#cc88ff";
  const pW = 60, starts = [1, 65, 129, 193, 257];
  const biomes = [
    { name:"SELVA\nTROPICAL",  region:"Chiapas\nVeracruz",    key:"Mayor biodiversidad\ndel país",       color:grn,  icon:"🌿" },
    { name:"DESIERTO\nSECO",   region:"Sonora\nChihuahua",    key:"Endémicos únicos:\njaguar, ocelote", color:gold, icon:"🌵" },
    { name:"BOSQUE\nTEMPLADO", region:"Sierra Madre\nEje Neovolc.", key:"Pino-encino\naves migratorias", color:a,    icon:"🌲" },
    { name:"MANGLAR\nCOSTERO", region:"Costas Pacífico\ny Golfo",  key:"Vivero de peces\nbarreras naturales",color:org, icon:"🦀" },
    { name:"ARRECIFE\nCORAL",  region:"Caribe\nQuintana Roo",  key:"2° arrecife más\ngrande del mundo", color:lila, icon:"🐠" },
  ];
  return (
    <svg viewBox="0 0 320 128" width="100%" style={{ display:"block" }}>
      {biomes.map(({ name, region, key, color, icon }, pi) => {
        const px = starts[pi], cx = px + 30;
        return (
          <g key={pi}>
            <rect x={px} y="1" width={pW} height="126" rx="4"
              fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
            {name.split('\n').map((line,li)=>(
              <text key={li} x={cx} y={9+li*7} textAnchor="middle" fill={color}
                fontSize="5.5" fontFamily="monospace" fontWeight="700">{line}</text>
            ))}
            {/* Icon area */}
            <rect x={px+4} y="24" width="52" height="40" rx="3" fill="rgba(0,0,0,0.2)"/>
            <text x={cx} y="50" textAnchor="middle" fontSize="20">{icon}</text>
            {/* Region */}
            <text x={cx} y="70" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">Región:</text>
            {region.split('\n').map((line,li)=>(
              <text key={li} x={cx} y={77+li*7} textAnchor="middle" fill="rgba(255,255,255,0.5)"
                fontSize="4.5" fontFamily="monospace">{line}</text>
            ))}
            {/* Key fact */}
            <line x1={px+4} y1="93" x2={px+56} y2="93" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7"/>
            {key.split('\n').map((line,li)=>(
              <text key={li} x={cx} y={100+li*7} textAnchor="middle" fill={color}
                fontSize="4.5" fontFamily="monospace">{line}</text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}
