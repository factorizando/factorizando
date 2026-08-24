// Diagrama «ej-dado-mayor4» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { DadoSVG } from "../comun.jsx";

export default function DadoMayor4SVG({ tema }) {
  const a = tema.acento;
  const s = 38, y = 12, gap = 8, x0 = 14;
  return (
    <svg viewBox="0 0 290 64" width="100%" style={{ display: "block", maxHeight: 88 }}>
      {[1, 2, 3, 4, 5, 6].map((n, i) => {
        const hi = n > 4;
        return (
          <DadoSVG key={n} x={x0 + i * (s + gap)} y={y} s={s} n={n}
            color={hi ? a : tema.muted} fill={hi ? tema.acentoSuave : tema.card} stroke={hi ? a : tema.border} rPip={3}/>
        );
      })}
    </svg>
  );
}
