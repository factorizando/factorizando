// Diagrama: probabilidad geométrica. Región Ω (círculo grande) con un evento A
// (círculo concéntrico) y un "dardo" lanzado al azar. Colores por tokens.
export default function GeomDardo() {
  const azul = "var(--azul-suave)";
  const tinta = "var(--text)";
  const tenue = "var(--text-muted)";
  return (
    <svg viewBox="0 0 200 200" width="100%" style={{ maxWidth: 320, display: "block", margin: "0 auto" }}>
      <circle cx="100" cy="100" r="84" style={{ fill: tenue, fillOpacity: 0.06, stroke: tenue, strokeWidth: 1.5 }} />
      <circle cx="100" cy="100" r="42" style={{ fill: azul, fillOpacity: 0.16, stroke: azul, strokeWidth: 2 }} />
      <circle cx="118" cy="86" r="3.4" style={{ fill: tinta }} />
      <text x="100" y="26" textAnchor="middle" style={{ fill: tenue, fontSize: "13px", fontStyle: "italic" }}>Ω</text>
      <text x="100" y="105" textAnchor="middle" style={{ fill: tinta, fontSize: "14px", fontStyle: "italic" }}>A</text>
    </svg>
  );
}
