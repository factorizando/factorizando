// Diagrama «dist-suma-dados» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { DIST_SUMA_DADOS } from "../comun.jsx";
import { Bar, BarChart, CartesianGrid, ReferenceLine, ResponsiveContainer, XAxis, YAxis } from "recharts";

export default function DistSumaDadosChart({ tema }) {
  return (
    <div style={{ width: "100%", height: 200 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={DIST_SUMA_DADOS} margin={{ top: 16, right: 14, left: 0, bottom: 2 }}>
          <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
          <XAxis dataKey="x" tick={{ fill: tema.muted, fontSize: 11 }} axisLine={{ stroke: tema.border }} tickLine={false} />
          <YAxis domain={[0, 6]} ticks={[0, 2, 4, 6]} tick={{ fill: tema.muted, fontSize: 9.5 }} axisLine={false} tickLine={false} width={34} tickFormatter={(v) => `${v}/36`} />
          <ReferenceLine x="7" stroke={tema.verde} strokeDasharray="4 3" label={{ value: "máx", position: "top", fill: tema.verde, fontSize: 10 }} />
          <Bar dataKey="n" fill={tema.acento} radius={[4, 4, 0, 0]} maxBarSize={24} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
