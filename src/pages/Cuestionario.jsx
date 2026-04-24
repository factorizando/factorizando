// src/pages/Cuestionario.jsx
// Página que carga el cuestionario y filtra por bloque/modo
import { useMemo, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import QuestionarioGenerico from "../components/QuestionarioGenerico";
import { buscarCuestionario } from "../data/cuestionarios/cuestionariosIndex";

export default function Cuestionario() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const bloque = searchParams.get("bloque");
  const modo = searchParams.get("modo");

  const cuestionarioObj = buscarCuestionario(id);
  const [shuffleKey, setShuffleKey] = useState(0);

  const cuestionarioFiltrado = useMemo(() => {
    if (!cuestionarioObj) return null;

    const cuestionarioOriginal = cuestionarioObj.data;
    let preguntas = [...cuestionarioOriginal.questions];

    // ─── FILTRAR POR BLOQUE ────────────────────────────────────────────
    if (bloque && cuestionarioOriginal.bloques) {
      const bloqueInfo = cuestionarioOriginal.bloques.find(
        (b) => b.id === bloque,
      );
      if (bloqueInfo) {
        preguntas = preguntas.slice(bloqueInfo.from, bloqueInfo.to + 1);
      }
    }

    // ─── ALEATORIZAR ORDEN DE PREGUNTAS ───────────────────────────────
    if (modo === "aleatorio") {
      preguntas = [...preguntas].sort(() => Math.random() - 0.5);
    }

    // ─── MEZCLAR OPCIONES DE CADA PREGUNTA ────────────────────────────
    preguntas = preguntas.map((q) => {
      const opciones = q.options.map((opt, i) => ({
        opt,
        isCorrect: i === q.correctAnswer,
      }));
      opciones.sort(() => Math.random() - 0.5);
      return {
        ...q,
        options: opciones.map((o) => o.opt),
        correctAnswer: opciones.findIndex((o) => o.isCorrect),
      };
    });

    return { ...cuestionarioOriginal, questions: preguntas };
  }, [cuestionarioObj, bloque, modo, shuffleKey]);

  if (!cuestionarioFiltrado) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0e0f11",
        }}
      >
        <p style={{ color: "#5a6070" }}>Cuestionario no encontrado</p>
      </div>
    );
  }

  const handleBack = () => {
    navigate(`/selector/${id}`);
  };

  return (
    <QuestionarioGenerico
      cuestionario={cuestionarioFiltrado}
      onBack={handleBack}
      onRetry={() => setShuffleKey((k) => k + 1)}
    />
  );
}
