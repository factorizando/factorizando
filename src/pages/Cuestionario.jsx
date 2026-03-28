// src/pages/Cuestionario.jsx
// Página que carga el cuestionario y filtra por bloque/modo

import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import QuestionarioGenerico from "../components/QuestionarioGenerico";
import { buscarCuestionario } from "../data/cuestionarios/cuestionariosIndex";

export default function Cuestionario() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Parámetros de URL
  const bloque = searchParams.get("bloque");
  const modo = searchParams.get("modo");

  // Buscar cuestionario en el índice
  const cuestionarioObj = buscarCuestionario(id);

  if (!cuestionarioObj) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0e0f11" }}>
        <p style={{ color: "#5a6070" }}>Cuestionario no encontrado</p>
      </div>
    );
  }

  const cuestionarioOriginal = cuestionarioObj.data;
  let preguntas = [...cuestionarioOriginal.questions];

  // ─── FILTRAR POR BLOQUE ────────────────────────────────────────────
  if (bloque && cuestionarioOriginal.bloques) {
    const bloqueInfo = cuestionarioOriginal.bloques.find((b) => b.id === bloque);
    if (bloqueInfo) {
      preguntas = preguntas.slice(bloqueInfo.from, bloqueInfo.to + 1);
    }
  }

  // ─── ALEATORIZAR SI ES MODO ALEATORIO ──────────────────────────────
  if (modo === "aleatorio") {
    preguntas = preguntas.sort(() => Math.random() - 0.5);
  }

  // Crear cuestionario filtrado
  const cuestionarioFiltrado = {
    ...cuestionarioOriginal,
    questions: preguntas,
  };

  // Función para volver al selector
  const handleBack = () => {
    navigate(`/cuestionario/${id}/selector`);
  };

  return (
    <QuestionarioGenerico
      cuestionario={cuestionarioFiltrado}
      onBack={handleBack}
    />
  );
}
