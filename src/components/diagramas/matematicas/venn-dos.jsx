// Diagrama de Venn: dos conjuntos A y B (con intersección) dentro del universo Ω.
// Usa los tokens del tema vía style para integrarse con la paleta global.
export default function VennDos() {
  const azul = "var(--c-definicion)";
  const verde = "var(--c-ejemplo)";
  const tinta = "var(--text)";
  const tenue = "var(--text-muted)";
  return (
    <svg viewBox="0 0 320 200" width="100%" style={{ maxWidth: 420, display: "block", margin: "0 auto" }}>
      {/* Universo Ω */}
      <rect x="8" y="8" width="304" height="184" rx="10"
        style={{ fill: "none", stroke: tenue, strokeWidth: 1 }} />
      <text x="22" y="28" style={{ fill: tenue, fontSize: "14px", fontStyle: "italic" }}>Ω</text>

      {/* Conjunto A */}
      <circle cx="130" cy="104" r="72"
        style={{ fill: azul, fillOpacity: 0.14, stroke: azul, strokeWidth: 2 }} />
      {/* Conjunto B */}
      <circle cx="200" cy="104" r="72"
        style={{ fill: verde, fillOpacity: 0.14, stroke: verde, strokeWidth: 2 }} />

      {/* Etiquetas */}
      <text x="86" y="110" style={{ fill: tinta, fontSize: "16px", fontStyle: "italic" }}>A</text>
      <text x="232" y="110" style={{ fill: tinta, fontSize: "16px", fontStyle: "italic" }}>B</text>
      <text x="151" y="110" style={{ fill: tinta, fontSize: "12px" }}>A∩B</text>
    </svg>
  );
}
