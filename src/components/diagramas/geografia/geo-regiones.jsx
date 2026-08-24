// Diagrama «geo-regiones» — geografia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function GeoRegionesSVG({ tema }) {
  const a = tema.acento;
  const worldZ = [
    { label: "TUNDRA / POLAR",         color: "#607090", y: 22, h: 18, res: "glaciares · petróleo ártico" },
    { label: "TAIGA",                   color: "#2a5a2a", y: 40, h: 18, res: "madera · gas natural" },
    { label: "BOSQUE TEMPLADO",         color: "#3a7a3a", y: 58, h: 16, res: "madera · agua · suelos fértiles" },
    { label: "MATORRAL / ESTEPA",       color: "#7a6a28", y: 74, h: 14, res: "ganadería · trigo · gas" },
    { label: "DESIERTO SUBTROPICAL",    color: "#b07820", y: 88, h: 14, res: "minería · energía solar" },
    { label: "SABANA",                  color: "#78a828", y: 102, h: 14, res: "ganadería extensiva" },
    { label: "◄  SELVA TROPICAL  ►",  color: "#1a7020", y: 116, h: 20, res: "Mayor biodiversidad del planeta" },
    { label: "Hemisferio Sur (espejo)", color: "#1e1e2e", y: 136, h: 22, res: "mismos biomas, orden inverso" },
  ];
  const mxZ = [
    { label: "DESIERTO / MATORRAL ÁRIDO",      color: "#b07820", y: 22,  h: 25, sub: "Sonora · Chihuahua · Baja California" },
    { label: "PASTIZAL / ESTEPA",              color: "#7a6a28", y: 47,  h: 20, sub: "Chihuahua norte · Durango" },
    { label: "BOSQUE DE PINO-ENCINO",          color: "#2a5a2a", y: 67,  h: 26, sub: "Sierra Madre Occ., Orient. y del Sur" },
    { label: "MATORRAL XERÓFILO",              color: "#8a7a30", y: 93,  h: 20, sub: "Altiplano Central" },
    { label: "BOSQUE TROP. CADUCIFOLIO",       color: "#4a8a2a", y: 113, h: 20, sub: "Costas del Pacífico y del Golfo" },
    { label: "SELVA TROPICAL HÚMEDA",          color: "#1a7020", y: 133, h: 25, sub: "Chiapas · Tabasco · Veracruz · Yucatán" },
  ];
  return (
    <svg viewBox="0 0 320 162" width="100%" style={{ display: "block" }}>
      <rect x="2"   y="2" width="153" height="158" rx="6" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.08)"/>
      <text x="78"  y="13" textAnchor="middle" fill={a} fontSize="7.5" fontFamily="monospace" letterSpacing="1">BIOMAS MUNDIALES</text>
      <text x="78"  y="21" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5.5" fontFamily="monospace">norte → sur (por latitud)</text>
      {worldZ.map((z, i) => (
        <g key={i}>
          <rect x="4"  y={z.y} width="149" height={z.h - 1} fill={z.color} opacity="0.82" rx="1.5"/>
          <text x="8"  y={z.y + z.h * 0.45} fill="rgba(255,255,255,0.95)" fontSize="5.5" fontFamily="monospace" fontWeight="600">{z.label}</text>
          <text x="8"  y={z.y + z.h * 0.82} fill="rgba(255,255,255,0.5)"  fontSize="4.5" fontFamily="monospace">{z.res}</text>
        </g>
      ))}
      <rect x="165" y="2" width="153" height="158" rx="6" fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.08)"/>
      <text x="241" y="13" textAnchor="middle" fill={a} fontSize="7.5" fontFamily="monospace" letterSpacing="1">BIOMAS EN MÉXICO</text>
      <text x="241" y="21" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5.5" fontFamily="monospace">norte → sur</text>
      {mxZ.map((z, i) => (
        <g key={i}>
          <rect x="167" y={z.y} width="149" height={z.h - 1} fill={z.color} opacity="0.82" rx="1.5"/>
          <text x="171" y={z.y + z.h * 0.45} fill="rgba(255,255,255,0.95)" fontSize="5.5" fontFamily="monospace" fontWeight="600">{z.label}</text>
          <text x="171" y={z.y + z.h * 0.82} fill="rgba(255,255,255,0.5)"  fontSize="4.5" fontFamily="monospace">{z.sub}</text>
        </g>
      ))}
    </svg>
  );
}
