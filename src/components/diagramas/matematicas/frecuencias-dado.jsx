// Diagrama «frecuencias-dado» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { DADO_FREC } from "../comun.jsx";
import { Bar, BarChart, CartesianGrid, ReferenceLine, ResponsiveContainer, XAxis, YAxis } from "recharts";

export default function FrecuenciasDadoChart({ tema }) {
  return (
    <div style={{ width: "100%", height: 198 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={DADO_FREC} margin={{ top: 14, right: 16, left: 0, bottom: 2 }}>
          <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
          <XAxis dataKey="cara" tick={{ fill: tema.muted, fontSize: 12 }} axisLine={{ stroke: tema.border }} tickLine={false} />
          <YAxis domain={[0, 0.25]} tick={{ fill: tema.muted, fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => v.toFixed(2)} width={40} />
          <ReferenceLine y={1 / 6} stroke={tema.verde} strokeDasharray="5 4" label={{ value: "1/6 ≈ 0.167", position: "insideTopRight", fill: tema.verde, fontSize: 10 }} />
          <Bar dataKey="fr" fill={tema.acento} radius={[4, 4, 0, 0]} maxBarSize={34} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
