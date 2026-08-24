// Diagrama «biologia-adaptacion» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function BiologiaAdaptacionSVG({ tema }) {
  const a = tema.acento, grn = "#4ab890", gold = "#f5c842", org = "#ff7755";
  return (
    <svg viewBox="0 0 320 130" width="100%" style={{ display:"block" }}>
      {/* LEFT: Nutrition types */}
      <rect x="1" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="78" y="11" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">TIPOS DE NUTRICIÓN</text>
      {/* Autótrofos */}
      <rect x="6" y="15" width="142" height="48" rx="3" fill={`${grn}15`} stroke={`${grn}45`} strokeWidth="1"/>
      <text x="78" y="24" textAnchor="middle" fill={grn} fontSize="6" fontFamily="monospace" fontWeight="700">AUTÓTROFOS</text>
      <text x="78" y="33" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">producen su propio alimento</text>
      <text x="20" y="43" fill={grn} fontSize="5" fontFamily="monospace">☀ Fotosintéticos:</text>
      <text x="20" y="51" fill="rgba(255,255,255,0.45)" fontSize="4.5" fontFamily="monospace">  plantas, algas, cianobacterias</text>
      <text x="20" y="59" fill={gold} fontSize="5" fontFamily="monospace">⚗ Quimiosintéticos:</text>
      {/* Heterótrofos */}
      <rect x="6" y="66" width="142" height="52" rx="3" fill={`${a}12`} stroke={`${a}40`} strokeWidth="1"/>
      <text x="78" y="75" textAnchor="middle" fill={a} fontSize="6" fontFamily="monospace" fontWeight="700">HETERÓTROFOS</text>
      <text x="78" y="83" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">consumen a otros organismos</text>
      <text x="10" y="92" fill={a} fontSize="4.5" fontFamily="monospace">🌿 Herbívoro: vaca, conejo, saltamontes</text>
      <text x="10" y="100" fill={org} fontSize="4.5" fontFamily="monospace">🦁 Carnívoro: león, serpiente, águila</text>
      <text x="10" y="108" fill={gold} fontSize="4.5" fontFamily="monospace">🍕 Omnívoro: humano, cerdo, oso</text>
      <text x="10" y="116" fill="rgba(255,200,100,0.6)" fontSize="4.5" fontFamily="monospace">🍄 Descomponedor: hongos, bacterias</text>
      {/* RIGHT: Adaptation types */}
      <rect x="165" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="242" y="11" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">TIPOS DE ADAPTACIÓN</text>
      {[
        { tipo:"ESTRUCTURAL",  color:grn,  icon:"🌵", ej:"Espinas cactus,\nplumas impermeables" },
        { tipo:"FISIOLÓGICA",  color:gold, icon:"🐪", ej:"Hibernación,\nalmacén grasa camello" },
        { tipo:"CONDUCTUAL",   color:a,    icon:"🦅", ej:"Migración,\ncamouflage activo" },
      ].map(({ tipo, color, icon, ej }, i) => (
        <g key={i}>
          <rect x="170" y={16+i*34} width="144" height="30" rx="3"
            fill={`${color}18`} stroke={`${color}45`} strokeWidth="1"/>
          <text x="178" y={29+i*34} fill={color} fontSize="6" fontFamily="monospace" fontWeight="700">{tipo}</text>
          <text x="206" y={24+i*34} fontSize="12">{icon}</text>
          {ej.split('\n').map((line,li)=>(
            <text key={li} x="178" y={33+i*34+li*8} fill="rgba(255,255,255,0.4)" fontSize="4.5" fontFamily="monospace">{line}</text>
          ))}
        </g>
      ))}
      <text x="242" y="125" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="4.5" fontFamily="monospace">adaptaciones surgen por selección natural</text>
    </svg>
  );
}
