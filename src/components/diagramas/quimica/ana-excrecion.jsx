// Diagrama «ana-excrecion» — quimica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { arrowHead } from "../comun.jsx";

export default function AnaExcrecionSVG({ tema }) {
  const mu = tema.muted, T = tema.texto;
  const filas = [
    { org: "Lombriz", grp: "anélido", est: "Nefridios", c: "#fb7185" },
    { org: "Saltamontes", grp: "insecto", est: "Túbulos de Malpighi", c: "#f5c842" },
    { org: "Cangrejo", grp: "crustáceo", est: "Glándulas antenales", c: "#22d3ee" },
    { org: "Pez / humano", grp: "vertebrado", est: "Riñones", c: "#34d399" },
  ];
  return (
    <svg viewBox="0 0 290 130" width="100%" style={{ display: "block", maxHeight: 140 }}>
      <text x={145} y={12} textAnchor="middle" fill={tema.acento} fontSize="8" fontFamily="'DM Sans',sans-serif">cada grupo animal, su estructura de excreción</text>
      {filas.map(({ org, grp, est, c }, i) => {
        const y = 22 + i * 26;
        return (
          <g key={i}>
            <rect x={10} y={y} width={86} height={22} rx={5} fill={`${c}1e`} stroke={c} strokeWidth="1.5" />
            <text x={16} y={y+13} fill={T} fontSize="7.4" fontFamily="'DM Sans',sans-serif" fontWeight="600">{org}</text>
            <text x={16} y={y+20} fill={mu} fontSize="5.6" fontFamily="'DM Sans',sans-serif">{grp}</text>
            <line x1={96} y1={y+11} x2={150} y2={y+11} stroke={c} strokeWidth="1.4" />
            <polygon points={arrowHead(120, y+11, 150, y+11, 6)} fill={c} />
            <rect x={150} y={y} width={130} height={22} rx={5} fill="rgba(255,255,255,0.04)" stroke={c} strokeWidth="1.5" />
            <text x={158} y={y+15} fill={c} fontSize="8" fontFamily="'DM Sans',sans-serif" fontWeight="600">{est}</text>
          </g>
        );
      })}
    </svg>
  );
}
