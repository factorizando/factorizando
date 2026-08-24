// Diagrama «dist-binomial» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { DIST_BINOMIAL } from "../comun.jsx";
import { Bar, BarChart, CartesianGrid, ReferenceLine, ResponsiveContainer, XAxis, YAxis } from "recharts";

export default function DistBinomialChart({ tema }) {
  return (
    <div style={{ width: "100%", height: 200 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={DIST_BINOMIAL} margin={{ top: 16, right: 14, left: 0, bottom: 2 }}>
          <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
          <XAxis dataKey="k" tick={{ fill: tema.muted, fontSize: 12 }} axisLine={{ stroke: tema.border }} tickLine={false} />
          <YAxis domain={[0, 0.4]} tick={{ fill: tema.muted, fontSize: 10 }} axisLine={false} tickLine={false} width={36} tickFormatter={(v) => v.toFixed(2)} />
          <ReferenceLine x="2" stroke={tema.verde} strokeDasharray="4 3" label={{ value: "más probable", position: "top", fill: tema.verde, fontSize: 9 }} />
          <Bar dataKey="p" fill={tema.acento} radius={[4, 4, 0, 0]} maxBarSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
