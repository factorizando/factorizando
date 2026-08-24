// Diagrama «graficas-barras» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { GRADE_FREC } from "../comun.jsx";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";

export default function EstBarrasChart({ tema }) {
  return (
    <div style={{ width: "100%", height: 190 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={GRADE_FREC} margin={{ top: 14, right: 16, left: 0, bottom: 2 }}>
          <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
          <XAxis dataKey="x" tick={{ fill: tema.muted, fontSize: 12 }} axisLine={{ stroke: tema.border }} tickLine={false} />
          <YAxis allowDecimals={false} tick={{ fill: tema.muted, fontSize: 11 }} axisLine={false} tickLine={false} width={28} />
          <Bar dataKey="f" fill={tema.acento} radius={[4, 4, 0, 0]} maxBarSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
