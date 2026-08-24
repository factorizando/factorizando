// Diagrama «geo-deterioro» — geografia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function GeoDeterioroSVG() {
  const boxes = [
    {
      title: "CAMBIO CLIMÁTICO",   sub: "Efecto Invernadero",
      hdr: "#cc4420", bg: "rgba(200,70,30,0.12)", brd: "rgba(200,70,30,0.38)",
      causa: "CO₂, CH₄, N₂O atrapan calor solar",
      efecto: "↑ T° · deshielo · ↑ nivel del mar",
      x: 2, y: 2,
    },
    {
      title: "CAPA DE OZONO",      sub: "Adelgazamiento",
      hdr: "#7744cc", bg: "rgba(100,60,200,0.12)", brd: "rgba(100,60,200,0.38)",
      causa: "Clorofluorocarbonos (CFC)",
      efecto: "↑ UV · cáncer de piel · daño ecosist.",
      x: 163, y: 2,
    },
    {
      title: "AGUA",               sub: "Contaminación y sobreexplotación",
      hdr: "#1a6aaa", bg: "rgba(26,100,170,0.12)", brd: "rgba(26,100,170,0.38)",
      causa: "Agropecuaria · industrial · doméstica",
      efecto: "Escasez · enfermedades · ↓ acuíferos",
      x: 2, y: 82,
    },
    {
      title: "MAREA NEGRA",        sub: "Petróleo",
      hdr: "#884411", bg: "rgba(100,50,20,0.15)", brd: "rgba(130,80,40,0.38)",
      causa: "Derrames en extracción y transporte",
      efecto: "Muerte ecosist. marino · aves · peces",
      x: 163, y: 82,
    },
  ];
  const W = 153, H = 74;
  return (
    <svg viewBox="0 0 320 158" width="100%" style={{ display: "block" }}>
      {boxes.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={b.y} width={W} height={H} rx="7" fill={b.bg} stroke={b.brd} strokeWidth="1"/>
          <text x={b.x + W / 2} y={b.y + 12} textAnchor="middle" fill={b.hdr} fontSize="7.5" fontFamily="monospace" fontWeight="700" letterSpacing="0.5">{b.title}</text>
          <text x={b.x + W / 2} y={b.y + 21} textAnchor="middle" fill={b.hdr} fontSize="5.5" fontFamily="monospace" opacity="0.75">{b.sub}</text>
          <line x1={b.x + 10} y1={b.y + 25} x2={b.x + W - 10} y2={b.y + 25} stroke={b.brd} strokeWidth="0.7"/>
          <text x={b.x + 8} y={b.y + 35} fill="rgba(255,255,255,0.45)" fontSize="5.5" fontFamily="monospace">Causa:</text>
          <text x={b.x + 8} y={b.y + 46} fill="rgba(255,255,255,0.85)" fontSize="5.5" fontFamily="monospace">{b.causa}</text>
          <line x1={b.x + 10} y1={b.y + 51} x2={b.x + W - 10} y2={b.y + 51} stroke={b.brd} strokeWidth="0.5" opacity="0.5"/>
          <text x={b.x + 8} y={b.y + 61} fill="rgba(255,255,255,0.45)" fontSize="5.5" fontFamily="monospace">Consecuencia:</text>
          <text x={b.x + 8} y={b.y + 71} fill={b.hdr} fontSize="5.5" fontFamily="monospace" opacity="0.9">{b.efecto}</text>
        </g>
      ))}
      {/* gap separator */}
      <line x1="2" y1="79" x2="318" y2="79" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
    </svg>
  );
}
