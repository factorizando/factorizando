import { TEMAS } from "../data/presentaciones/temas.jsx";
import { useFuentesTema } from "../data/presentaciones/temas.jsx";
import { useKaTeX } from "../data/teoria/shared.jsx";

const MATERIAS = [
  "Matemáticas", "Español", "Física", "Biología",
  "Química", "Geografía", "Literatura", "Historia"
];

const TEMA_KEYS = {
  "Matemáticas": "matematicas",
  "Español":     "espanol",
  "Física":      "fisica",
  "Biología":    "biologia",
  "Química":     "quimica",
  "Geografía":   "geografia",
  "Literatura":  "literatura",
  "Historia":    "historia",
};

function PortadaCard({ materia }) {
  const tema = TEMAS[TEMA_KEYS[materia]];
  useFuentesTema(tema);
  const DecoSVG = tema.DecoSVG;

  return (
    <div style={{
      background: tema.bg,
      border: `1px solid ${tema.acentoBorde}`,
      borderRadius: 14,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "28px 20px 24px",
      gap: 14,
      textAlign: "center",
      fontFamily: tema.body,
      position: "relative",
    }}>
      <DecoSVG tema={tema} />
      <div style={{
        fontFamily: tema.mono,
        fontSize: 10,
        letterSpacing: "0.22em",
        color: tema.acento,
        textTransform: "uppercase",
        opacity: 0.8,
      }}>
        {materia}
      </div>
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 20,
        fontWeight: 700,
        color: tema.texto,
        lineHeight: 1.2,
      }}>
        Título de ejemplo
      </div>
      <div style={{
        fontSize: 13,
        color: tema.muted,
        lineHeight: 1.5,
        maxWidth: 200,
      }}>
        Subtítulo descriptivo de la presentación
      </div>
      {/* Muestra de colores */}
      <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
        <div style={{ width: 18, height: 18, borderRadius: "50%", background: tema.acento }} title="Acento" />
        <div style={{ width: 18, height: 18, borderRadius: "50%", background: tema.azul }} title="Azul" />
        <div style={{ width: 18, height: 18, borderRadius: "50%", background: tema.verde }} title="Verde" />
        <div style={{ width: 18, height: 18, borderRadius: "50%", background: tema.rojo }} title="Rojo" />
      </div>
      <div style={{
        fontFamily: tema.mono,
        fontSize: 9,
        color: tema.sub,
        letterSpacing: "0.1em",
      }}>
        {tema.acento} · {tema.azul}
      </div>
    </div>
  );
}

export default function TemaPreview() {
  useKaTeX();
  return (
    <div style={{
      minHeight: "100vh",
      background: "#0e0f11",
      padding: "40px 32px",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 11,
          letterSpacing: "0.22em",
          color: "#3b9eff",
          textTransform: "uppercase",
          marginBottom: 12,
          opacity: 0.7,
        }}>
          Previsualización de temas
        </div>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 36,
          color: "#f0ece3",
          marginBottom: 8,
          fontWeight: 700,
        }}>
          Paletas por materia
        </h1>
        <p style={{ color: "#6a6560", fontSize: 15, marginBottom: 40 }}>
          Cada presentación recibe su tema automáticamente según el campo <code style={{ color: "#f5c842", background: "rgba(245,200,66,0.1)", padding: "2px 6px", borderRadius: 4 }}>materia</code>.
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 20,
        }}>
          {MATERIAS.map(m => (
            <PortadaCard key={m} materia={m} />
          ))}
        </div>
      </div>
    </div>
  );
}
