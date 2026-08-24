// Diagrama «espacio-muestral» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { DadoSVG } from "../comun.jsx";

export default function EspacioMuestralSVG({ tema }) {
  const a = tema.acento;
  const s = 38, y = 22, gap = 7;
  const x0 = 8;
  return (
    <svg viewBox="0 0 278 96" width="100%" style={{ display: "block", maxHeight: 110 }}>
      {[1, 2, 3, 4, 5, 6].map((n, i) => {
        const par = n % 2 === 0;
        const x = x0 + i * (s + gap);
        return (
          <DadoSVG
            key={n}
            x={x} y={y} s={s} n={n}
            color={par ? a : tema.muted}
            fill={par ? tema.acentoSuave : tema.card}
            stroke={par ? a : tema.border}
            rPip={3}
          />
        );
      })}
      <text x={x0 + 3 * (s + gap) - gap / 2} y={y + s + 22} fill={a} fontSize="12" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">
        Ω = {"{1…6}"} · evento E = {"{2, 4, 6}"}
      </text>
    </svg>
  );
}
