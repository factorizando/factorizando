// Diagrama «biologia-celula» — matematicas.
// Recibe { tema } pero NO pinta con la paleta de la materia: `grn`, `gold`, `org`
// y `lila` son literales, así que este diagrama se ve igual en las siete materias
// y en los dos temas. Es el único que quedó así tras la fase 4D. Convertirlo pide
// decidir cuánto de su color es descriptivo (la hoja, el núcleo) y cuánto es
// acento, y eso no es mecánico. Además está mal archivado: vive en `matematicas/`
// y lo usa `biologia-pensamiento-cientifico`.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function BiologiaCelulaSVG({ tema }) {
  const a = tema.acento, grn = "#4ab890", gold = "#f5c842", org = "#ff7755", lila = "#cc88ff";
  return (
    <svg viewBox="0 0 320 130" width="100%" style={{ display:"block" }}>
      {/* LEFT: Animal Cell */}
      <rect x="1" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="78" y="11" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">CÉLULA ANIMAL</text>
      <ellipse cx="72" cy="68" rx="58" ry="44" fill={`${a}08`} stroke={a} strokeWidth="1.5" opacity="0.65"/>
      {/* Nucleus */}
      <ellipse cx="68" cy="65" rx="17" ry="13" fill={`${lila}25`} stroke={lila} strokeWidth="1.5"/>
      <circle cx="70" cy="63" r="5" fill={lila} opacity="0.65"/>
      <text x="50" y="58" fill={lila} fontSize="4.5" fontFamily="monospace">núcleo</text>
      {/* Mitochondria */}
      <ellipse cx="108" cy="55" rx="11" ry="6" fill={`${org}28`} stroke={org} strokeWidth="1.2"/>
      <line x1="99" y1="53" x2="104" y2="58" stroke={org} strokeWidth="0.8" opacity="0.5"/>
      <line x1="99" y1="57" x2="104" y2="52" stroke={org} strokeWidth="0.8" opacity="0.5"/>
      <text x="106" y="50" fill={org} fontSize="4.5" fontFamily="monospace">mitocondria</text>
      {/* Golgi */}
      <path d="M 96,76 Q 100,73 104,76" fill="none" stroke={gold} strokeWidth="1.5" opacity="0.85"/>
      <path d="M 96,79 Q 100,76 104,79" fill="none" stroke={gold} strokeWidth="1.5" opacity="0.85"/>
      <path d="M 96,82 Q 100,79 104,82" fill="none" stroke={gold} strokeWidth="1.5" opacity="0.85"/>
      <text x="107" y="80" fill={gold} fontSize="4.5" fontFamily="monospace">Golgi</text>
      {/* Ribosomes */}
      {[[44,80],[50,72],[38,70],[34,60],[86,82],[80,90]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="1.8" fill="rgba(255,255,255,0.5)"/>
      ))}
      <text x="30" y="87" fill="rgba(255,255,255,0.4)" fontSize="4" fontFamily="monospace">ribosoma</text>
      {/* Lysosome */}
      <circle cx="90" cy="90" r="5" fill={`${a}35`} stroke={a} strokeWidth="1"/>
      <text x="97" y="93" fill={a} fontSize="4" fontFamily="monospace">lisosoma</text>
      {/* Centriole */}
      <rect x="46" y="78" width="8" height="4" rx="1" fill="rgba(255,220,150,0.3)" stroke={gold} strokeWidth="0.8"/>
      <text x="38" y="88" fill={gold} fontSize="3.5" fontFamily="monospace">centriolo</text>
      <text x="72" y="120" textAnchor="middle" fill={a} fontSize="4.5" fontFamily="monospace">membrana plasmática (flexible)</text>
      {/* RIGHT: Plant Cell */}
      <rect x="165" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="242" y="11" textAnchor="middle" fill={grn} fontSize="6.5" fontFamily="monospace" fontWeight="700">CÉLULA VEGETAL</text>
      {/* Cell wall */}
      <rect x="181" y="17" width="126" height="93" rx="4" fill="none" stroke={grn} strokeWidth="3" opacity="0.75"/>
      {/* Cell membrane inside */}
      <rect x="184" y="20" width="120" height="87" rx="3"
        fill={`${grn}08`} stroke={grn} strokeWidth="0.8" opacity="0.4" strokeDasharray="2,1"/>
      {/* Central vacuole */}
      <ellipse cx="242" cy="66" rx="38" ry="30" fill="rgba(80,140,220,0.15)" stroke="rgba(80,140,220,0.45)" strokeWidth="1.2"/>
      <text x="242" y="64" textAnchor="middle" fill="rgba(80,180,255,0.65)" fontSize="4.5" fontFamily="monospace">vacuola</text>
      <text x="242" y="71" textAnchor="middle" fill="rgba(80,180,255,0.5)" fontSize="4" fontFamily="monospace">central</text>
      {/* Nucleus */}
      <ellipse cx="212" cy="40" rx="12" ry="9" fill={`${lila}25`} stroke={lila} strokeWidth="1.2"/>
      <circle cx="213" cy="39" r="4" fill={lila} opacity="0.65"/>
      <text x="202" y="33" fill={lila} fontSize="4" fontFamily="monospace">núcleo</text>
      {/* Chloroplasts */}
      <ellipse cx="274" cy="40" rx="12" ry="7" fill="rgba(50,160,50,0.45)" stroke={grn} strokeWidth="1.2"/>
      <text x="274" y="33" textAnchor="middle" fill={grn} fontSize="4" fontFamily="monospace">cloroplasto</text>
      <ellipse cx="255" cy="98" rx="11" ry="6" fill="rgba(50,160,50,0.45)" stroke={grn} strokeWidth="1.2"/>
      {/* Mitochondria */}
      <ellipse cx="292" cy="58" rx="8" ry="5" fill={`${org}28`} stroke={org} strokeWidth="1"/>
      <text x="293" y="52" fill={org} fontSize="3.5" fontFamily="monospace">mitoc.</text>
      <text x="242" y="119" textAnchor="middle" fill={grn} fontSize="4.5" fontFamily="monospace">pared celular rígida (celulosa)</text>
    </svg>
  );
}
