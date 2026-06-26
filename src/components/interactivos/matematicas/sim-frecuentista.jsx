// Interactivo: simulación de la interpretación frecuentista.
// Lanza una moneda (o evento con probabilidad p) y grafica la frecuencia
// relativa acumulada acercándose a p conforme crece el número de ensayos.
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ReferenceLine, ResponsiveContainer } from "recharts";

const AZUL = "#80c6ff";
const ACENTO = "#f5c842";
const TENUE = "#969696";
const LINEA = "rgba(255,255,255,0.10)";

export default function SimFrecuentista({ p = 0.5, evento = "águila" }) {
  const [data, setData] = useState([]);
  const [n, setN] = useState(0);
  const [hits, setHits] = useState(0);

  // Guarda puntos densos al inicio y dispersos después (para ver la convergencia).
  const muestrear = (k) => k <= 60 || (k <= 600 && k % 10 === 0) || k % 100 === 0;

  const correr = (veces) => {
    let nn = n, hh = hits;
    const extra = [];
    for (let i = 0; i < veces; i++) {
      nn++;
      if (Math.random() < p) hh++;
      if (muestrear(nn) || i === veces - 1) extra.push({ n: nn, freq: hh / nn });
    }
    setN(nn); setHits(hh);
    setData((d) => [...d, ...extra].slice(-900));
  };

  const reiniciar = () => { setData([]); setN(0); setHits(0); };
  const freq = n ? hits / n : 0;

  const btn = {
    fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--text)",
    background: "var(--surface-2)", border: "1px solid var(--border)",
    borderRadius: 8, padding: "7px 13px", cursor: "pointer",
  };

  return (
    <div style={{ fontFamily: "var(--font-ui)" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
        <button style={btn} onClick={() => correr(1)}>Lanzar 1</button>
        <button style={btn} onClick={() => correr(50)}>Lanzar 50</button>
        <button style={btn} onClick={() => correr(500)}>Lanzar 500</button>
        <button style={{ ...btn, marginLeft: "auto" }} onClick={reiniciar}>Reiniciar</button>
      </div>

      <div style={{ display: "flex", gap: 18, fontSize: 13, color: "var(--text)", marginBottom: 10, flexWrap: "wrap" }}>
        <span>Lanzamientos: <b>{n}</b></span>
        <span>“{evento}”: <b>{hits}</b></span>
        <span>Frecuencia relativa: <b style={{ color: AZUL }}>{freq.toFixed(4)}</b></span>
        <span>Teórica: <b style={{ color: ACENTO }}>{p.toFixed(2)}</b></span>
      </div>

      <div style={{ width: "100%", height: 240 }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 4 }}>
            <CartesianGrid stroke={LINEA} />
            <XAxis dataKey="n" type="number" domain={[0, "dataMax"]} tick={{ fill: TENUE, fontSize: 11 }} stroke={LINEA} />
            <YAxis domain={[0, 1]} tick={{ fill: TENUE, fontSize: 11 }} stroke={LINEA} width={34} />
            <ReferenceLine y={p} stroke={ACENTO} strokeDasharray="5 4" />
            <Line type="monotone" dataKey="freq" stroke={AZUL} strokeWidth={2} dot={false} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
