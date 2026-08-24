// Diagrama «acento-clasificacion» — espanol.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function AcentoClasificacionSVG({ tema }) {
  const tipos = [
    { nombre: "Aguda",        subname: "oxítona",        silabas: ["__","__","__","TÓN"], ejemplo: "ca-FÉ",    color: tema.acento },
    { nombre: "Llana",        subname: "paroxítona",     silabas: ["__","__","TÓN","__"], ejemplo: "CA-sa",   color: tema.azul   },
    { nombre: "Esdrújula",    subname: "proparoxítona",  silabas: ["__","TÓN","__","__"], ejemplo: "MÉ-di-co", color: tema.verde  },
    { nombre: "Sobreesdrúj.", subname: "",               silabas: ["TÓN","__","__","__"], ejemplo: "DÍ-ga-me-lo", color: "#c084fc" },
  ];
  const W = 680, H = 130, col = W / 4;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }}>
      {tipos.map(({ nombre, subname, silabas, ejemplo, color }, ci) => {
        const cx = ci * col + col / 2;
        return (
          <g key={ci}>
            <text x={cx} y={16} fill={color} fontSize="11.5" fontFamily="'Figtree', system-ui, sans-serif"
              fontWeight="700" textAnchor="middle" letterSpacing="0.04em">
              {nombre.toUpperCase()}
            </text>
            {subname && (
              <text x={cx} y={28} fill={tema.muted} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif"
                textAnchor="middle" opacity="0.65">{subname}</text>
            )}
            {silabas.map((s, si) => {
              const bw = 32, bh = 26, gap = 6;
              const totalW = silabas.length * bw + (silabas.length - 1) * gap;
              const bx = cx - totalW / 2 + si * (bw + gap);
              const isTon = s === "TÓN";
              return (
                <g key={si}>
                  <rect x={bx} y={36} width={bw} height={bh} rx="5"
                    fill={isTon ? `${color}28` : "rgba(255,255,255,0.04)"}
                    stroke={isTon ? color : "rgba(255,255,255,0.12)"}
                    strokeWidth={isTon ? 1.8 : 1} />
                  {isTon && (
                    <text x={bx + bw / 2} y={54} fill={color} fontSize="9.5"
                      fontFamily="'Figtree', system-ui, sans-serif" fontWeight="700" textAnchor="middle">●</text>
                  )}
                </g>
              );
            })}
            <text x={cx} y={84} fill={tema.texto} fontSize="11" fontFamily="Georgia,serif"
              fontStyle="italic" textAnchor="middle" opacity="0.85">{ejemplo}</text>
            {/* Regla de tilde */}
            <text x={cx} y={102} fill={tema.muted} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif"
              textAnchor="middle">
              {ci === 0 ? "tilde si termina en V/N/S" :
               ci === 1 ? "tilde si NO termina en V/N/S" :
               "siempre tilde"}
            </text>
          </g>
        );
      })}
      {/* Divisores */}
      {[1,2,3].map(i => (
        <line key={i} x1={i * col} y1={8} x2={i * col} y2={H - 10}
          stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
      ))}
    </svg>
  );
}
