// src/pages/Cuestionario.jsx
// Página que carga el cuestionario y filtra por bloque/modo
import { useMemo, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import QuestionarioGenerico from "../components/QuestionarioGenerico";
import { buscarCuestionario } from "../data/cuestionarios/cuestionariosIndex";

// Fisher-Yates. Antes se barajaba con `sort(() => Math.random() - 0.5)`, que
// parece equivalente y no lo es: un comparador aleatorio no produce
// permutaciones uniformes. Medido con cuatro opciones y 400 000 corridas, la
// respuesta correcta acababa en las dos casillas centrales el 77% de las veces
// —cuando debería ser el 50%—, así que el banco seguía siendo adivinable.
function mezclar(lista) {
  const a = [...lista];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

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
      preguntas = mezclar(preguntas);
    }

    // ─── MEZCLAR OPCIONES DE CADA PREGUNTA ────────────────────────────
    preguntas = preguntas.map((q) => {
      const opciones = q.options.map((opt, i) => ({
        opt,
        isCorrect: i === q.correctAnswer,
      }));
      const revueltas = mezclar(opciones);
      return {
        ...q,
        options: revueltas.map((o) => o.opt),
        correctAnswer: revueltas.findIndex((o) => o.isCorrect),
      };
    });

    return { ...cuestionarioOriginal, questions: preguntas };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- shuffleKey se incluye a propósito para forzar un nuevo barajado
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
