// src/components/QuestionarioGenerico.jsx
// Versión CORRECTA: Nuevo header + Temporizador original intacto

import { useState, useEffect } from "react";

// ─── Componentes Internos para Renderizado (Corregidos) ──────────────────────
const MathRenderer = ({ children }) => {
  const renderText = (txt) => {
    if (!window.katex || typeof txt !== "string") return txt;
    const parts = txt.split(/(\$.*?\$)/g);
    return parts.map((part, i) => {
      if (part.startsWith("$") && part.endsWith("$")) {
        const math = part.slice(1, -1);
        try {
          return (
            <span
              key={i}
              dangerouslySetInnerHTML={{
                __html: window.katex.renderToString(math, {
                  throwOnError: false,
                }),
              }}
            />
          );
        } catch (e) {
          return <span key={i}>{part}</span>;
        }
      }
      return <span key={i}>{part}</span>;
    });
  };
  return <>{renderText(children)}</>;
};

const SVGRenderer = ({ src, drawFunction }) => {
  if (src)
    return (
      <img
        src={src}
        alt="Gráfico SVG"
        style={{ maxWidth: "100%", maxHeight: "300px", objectFit: "contain" }}
      />
    );
  if (!drawFunction) return null;
  if (typeof drawFunction === "function") return drawFunction();
  return drawFunction;
};
// ─────────────────────────────────────────────────────────────────────────────

const C = {
  bg: "#0e0f11",
  surface: "#13151a",
  border: "#252830",
  blue: "#3b9eff",
  green: "#34d399",
  red: "#f43f5e",
  orange: "#f97316",
  yellow: "#fbbf24",
  text: "#e8eaf0",
  muted: "#5a6070",
};

// Sub-componente: Temporizador Global (ORIGINAL - SIN MODIFICAR)
function TemporizadorGlobal({ tiempoRestante, tiempoTotal }) {
  const porcentaje = (tiempoRestante / tiempoTotal) * 100;

  let colorTiempo = C.green;
  const porcentajeRestante = (tiempoRestante / tiempoTotal) * 100;

  if (porcentajeRestante <= 10) {
    colorTiempo = C.red;
  } else if (porcentajeRestante <= 25) {
    colorTiempo = C.orange;
  }

  const horas = Math.floor(tiempoRestante / 3600);
  const minutos = Math.floor((tiempoRestante % 3600) / 60);
  const segundos = Math.floor(tiempoRestante % 60);

  const formatoTiempo = `${horas.toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.3rem",
        }}
      >
        <div
          style={{
            fontSize: "0.65rem",
            color: C.muted,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Tiempo restante
        </div>
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: colorTiempo,
            fontFamily: "monospace",
            letterSpacing: "0.05em",
          }}
        >
          {formatoTiempo}
        </div>
      </div>

      <div
        style={{
          position: "relative",
          width: 80,
          height: 80,
        }}
      >
        <svg
          width="80"
          height="80"
          style={{ transform: "rotate(-90deg)" }}
          viewBox="0 0 80 80"
        >
          <circle
            cx="40"
            cy="40"
            r="35"
            fill="none"
            stroke={C.border}
            strokeWidth="4"
          />
          <circle
            cx="40"
            cy="40"
            r="35"
            fill="none"
            stroke={colorTiempo}
            strokeWidth="4"
            strokeDasharray={`${(porcentaje / 100) * 219.8} 219.8`}
            style={{ transition: "stroke-dasharray 0.3s linear" }}
          />
        </svg>

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              color: colorTiempo,
            }}
          >
            {Math.round(porcentaje)}%
          </div>
          <div
            style={{
              fontSize: "0.65rem",
              color: C.muted,
            }}
          >
            restante
          </div>
        </div>
      </div>
    </div>
  );
}

// Sub-componente: Pantalla de Teoría
function TheoryScreen({ theory, onStart }) {
  return (
    <div
      style={{
        padding: "2rem",
        background: C.surface,
        borderRadius: "8px",
        marginBottom: "2rem",
      }}
    >
      <h2 style={{ marginBottom: "1rem", color: C.text }}>{theory.titulo}</h2>
      <p style={{ color: C.muted, marginBottom: "2rem", lineHeight: 1.6 }}>
        {theory.descripcion}
      </p>
      {theory.cards && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          {theory.cards.map((card, i) => (
            <div
              key={i}
              style={{
                padding: "1rem",
                background: C.bg,
                border: `1px solid ${C.border}`,
                borderRadius: "6px",
              }}
            >
              <h4
                style={{ color: card.color || C.blue, marginBottom: ".5rem" }}
              >
                {card.title}
              </h4>
              <p style={{ fontSize: ".9rem", color: C.muted }}>{card.desc}</p>
              {card.note && (
                <p
                  style={{
                    fontSize: ".8rem",
                    color: C.muted,
                    marginTop: ".5rem",
                    fontStyle: "italic",
                  }}
                >
                  📝 {card.note}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
      <button
        onClick={onStart}
        style={{
          padding: ".8rem 2rem",
          background: C.blue,
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: ".9rem",
          fontWeight: 600,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        Comenzar cuestionario
      </button>
    </div>
  );
}

// Sub-componente: Pantalla de Quiz
function QuizScreenConSiguiente({
  currentQuestion,
  selectedAnswer,
  onSelectAnswer,
  onConfirm,
  onNext,
  currentIndex,
  totalQuestions,
  correctCount,
  answers,
  onNavigate,
  onBack,
  tiempoRestante,
  tiempoTotal,
  tiempoAgotado,
  bloqueNombre = null,
  indiceGlobal = null,
  totalGlobal = null,
}) {
  const [showExplanation, setShowExplanation] = useState(false);

  // Resetear estados cuando cambia de pregunta
  useEffect(() => {
    setShowExplanation(false);
  }, [currentIndex]);

  const isAnswered = answers[currentIndex] !== undefined;

  const handleConfirmClick = () => {
    onConfirm();
    setShowExplanation(true);
  };

  const handleNextClick = () => {
    onNext();
  };

  const prog = ((currentIndex + 1) / totalQuestions) * 100;
  const respondidas = Object.keys(answers).length;

  return (
    <div>
      {/* ─── NUEVO HEADER: Pregunta + Progreso + Bloque + Número Global ─── */}
      <div style={{ marginBottom: "1.5rem" }}>
        {/* Fila 1: Pregunta y Respondidas + Temporizador Original */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "0.8rem",
          }}
        >
          <div style={{ color: C.muted, fontSize: ".9rem" }}>
            Pregunta {currentIndex + 1} / {totalQuestions}
            <span style={{ marginLeft: "0.5rem" }}>
              ({respondidas} respondidas)
            </span>
          </div>
          {/* Temporizador ORIGINAL - Intacto */}
          <TemporizadorGlobal
            tiempoRestante={tiempoRestante}
            tiempoTotal={tiempoTotal}
          />
        </div>

        {/* Fila 2: Barra de progreso */}
        <div
          style={{
            width: "100%",
            height: "3px",
            background: C.border,
            borderRadius: "2px",
            marginBottom: "0.8rem",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${prog}%`,
              height: "100%",
              background: C.blue,
              borderRadius: "2px",
              transition: "width 0.3s ease",
            }}
          />
        </div>

        {/* Fila 3: Bloque, Número Global */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "0.8rem",
            borderTop: `1px solid ${C.border}`,
          }}
        >
          {/* Bloque (si existe) */}
          {bloqueNombre && (
            <div
              style={{
                display: "inline-block",
                background: C.orange + "22",
                color: C.orange,
                padding: "4px 10px",
                borderRadius: "4px",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              {bloqueNombre}
            </div>
          )}
          {!bloqueNombre && <div />}

          {/* Número global (si existe) */}
          {indiceGlobal !== null && totalGlobal !== null && (
            <div style={{ color: C.text, fontSize: ".85rem", fontWeight: 600 }}>
              #{indiceGlobal} / {totalGlobal}
            </div>
          )}
        </div>
      </div>

      {/* Advertencia si el tiempo se está acabando */}
      {tiempoRestante <= 60 && tiempoRestante > 0 && (
        <div
          style={{
            padding: "1rem",
            background: C.orange + "22",
            border: `1px solid ${C.orange}`,
            borderRadius: "6px",
            color: C.orange,
            marginBottom: "1rem",
            fontSize: ".9rem",
            fontWeight: 500,
          }}
        >
          ⏰ ¡Tiempo límite próximo! Te quedan {tiempoRestante} segundos.
        </div>
      )}

      {/* Tarjeta de la Pregunta (Estilo IDÉNTICO a la primera imagen) */}
      <div
        style={{
          padding: "2.5rem 2rem",
          background: C.surface,
          borderRadius: "12px",
          border: `1px solid ${C.border}`,
          marginBottom: "2rem",
        }}
      >
        {/* Etiqueta azul de PREGUNTA */}
        <div
          style={{
            display: "inline-block",
            background: C.blue + "22",
            color: C.blue,
            padding: "6px 12px",
            borderRadius: "6px",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.05em",
            marginBottom: "1.5rem",
            textTransform: "uppercase",
          }}
        >
          PREGUNTA {currentIndex + 1} DE {totalQuestions}
        </div>

        {/* Texto de la Pregunta */}
        <div
          style={{
            fontSize: "1.3rem",
            fontWeight: 500,
            marginBottom: "2rem",
            color: C.text,
          }}
        >
          <MathRenderer>{currentQuestion.question}</MathRenderer>
        </div>

        {/* SVG Inline o URL (si existe) */}
        {currentQuestion.diagram && (
          <div
            style={{
              marginBottom: "2rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {currentQuestion.diagram}
          </div>
        )}
        {currentQuestion.svgUrl && (
          <div
            style={{
              marginBottom: "2rem",
              textAlign: "center",
              background: C.bg,
              padding: "10px",
              borderRadius: "8px",
              border: `1px solid ${C.border}`,
            }}
          >
            <SVGRenderer src={currentQuestion.svgUrl} />
          </div>
        )}

        {/* Opciones (Estilo Rectangular Limpio) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedAnswer === idx;
            const isCorrectAnswer = idx === currentQuestion.correctAnswer;
            const isUserCorrect = answers[currentIndex]?.correct;

            let borderColor = C.border;
            let backgroundColor = C.bg;

            // Si el usuario respondió
            if (isAnswered) {
              if (isCorrectAnswer) {
                borderColor = C.green;
                backgroundColor = C.green + "15";
              } else if (isSelected && !isUserCorrect) {
                borderColor = C.red;
                backgroundColor = C.red + "15";
              }
            }
            // Si está siendo seleccionado ahora
            else if (isSelected) {
              borderColor = C.blue;
              backgroundColor = C.blue + "15";
            }

            return (
              <button
                key={idx}
                onClick={() => {
                  if (!isAnswered) {
                    onSelectAnswer(idx);
                  }
                }}
                disabled={tiempoAgotado || isAnswered}
                style={{
                  padding: "1.2rem 1.5rem",
                  background: backgroundColor,
                  border: `1px solid ${borderColor}`,
                  borderRadius: "8px",
                  color: C.text,
                  cursor: tiempoAgotado || isAnswered ? "default" : "pointer",
                  textAlign: "left",
                  fontSize: "1rem",
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "all .2s",
                  opacity: tiempoAgotado ? 0.5 : 1,
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                {/* Checkmarks opcionales si ya se respondió */}
                {isAnswered && isCorrectAnswer && (
                  <span style={{ color: C.green, fontWeight: 700 }}>✓</span>
                )}
                {isAnswered && isSelected && !isUserCorrect && (
                  <span style={{ color: C.red, fontWeight: 700 }}>✗</span>
                )}
                <MathRenderer>{option}</MathRenderer>
              </button>
            );
          })}
        </div>

        {/* Explicación (Solo visible tras confirmar) */}
        {showExplanation && isAnswered && currentQuestion.explanation && (
          <div
            style={{
              marginBottom: "2rem",
              padding: "1.2rem",
              background: C.bg,
              border: `1px solid ${answers[currentIndex]?.correct ? C.green : C.red}44`,
              borderLeft: `4px solid ${answers[currentIndex]?.correct ? C.green : C.red}`,
              borderRadius: "6px",
            }}
          >
            <h4
              style={{
                marginBottom: ".5rem",
                color: answers[currentIndex]?.correct ? C.green : C.red,
              }}
            >
              {answers[currentIndex]?.correct
                ? "¡Respuesta Correcta!"
                : "Respuesta Incorrecta"}
            </h4>
            <div
              style={{ color: C.text, lineHeight: 1.5, fontSize: "0.95rem" }}
            >
              <MathRenderer>{currentQuestion.explanation}</MathRenderer>
            </div>
          </div>
        )}

        {/* ── CONTROLES INFERIORES: Botones Anterior y Confirmar/Siguiente ── */}
        <div style={{ display: "flex", gap: "1rem" }}>
          {/* Botón Anterior */}
          <button
            onClick={() => onNavigate(currentIndex - 1)}
            disabled={currentIndex === 0 || tiempoAgotado}
            style={{
              flex: 1,
              padding: "1rem",
              background: C.surface,
              border: `1px solid ${C.border}`,
              color: currentIndex === 0 || tiempoAgotado ? C.muted : C.text,
              borderRadius: "8px",
              cursor:
                currentIndex === 0 || tiempoAgotado ? "not-allowed" : "pointer",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "1rem",
              transition: "all 0.2s",
            }}
          >
            ← Anterior
          </button>

          {/* Botón Confirmar / Siguiente */}
          {!isAnswered ? (
            <button
              onClick={handleConfirmClick}
              disabled={selectedAnswer === null || tiempoAgotado}
              style={{
                flex: 1,
                padding: "1rem",
                background: selectedAnswer === null ? C.surface : C.blue,
                color: selectedAnswer === null ? C.muted : "#fff",
                border:
                  selectedAnswer === null ? `1px solid ${C.border}` : "none",
                borderRadius: "8px",
                cursor:
                  selectedAnswer === null || tiempoAgotado
                    ? "not-allowed"
                    : "pointer",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                transition: "all 0.2s",
              }}
            >
              Confirmar
            </button>
          ) : (
            <button
              onClick={handleNextClick}
              style={{
                flex: 1,
                padding: "1rem",
                background: C.surface,
                border: `1px solid ${C.border}`,
                color: C.text,
                borderRadius: "8px",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                transition: "all 0.2s",
              }}
            >
              {currentIndex === totalQuestions - 1
                ? "Ver resultados"
                : "Siguiente →"}
            </button>
          )}
        </div>
      </div>

      {/* ── NAVEGADOR INFERIOR (Estilo cuadrícula de números) ── */}
      <div
        style={{
          padding: "1.5rem",
          background: C.surface,
          borderRadius: "12px",
          border: `1px solid ${C.border}`,
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
          }}
        >
          {Array.from({ length: totalQuestions }).map((_, idx) => {
            const isCurr = idx === currentIndex;
            const ans = answers[idx];

            let bg = C.bg;
            let bdr = `1px solid ${C.border}`;
            let co = C.muted;

            if (isCurr) {
              bg = C.blue;
              co = "#fff";
              bdr = `1px solid ${C.blue}`;
            } else if (ans !== undefined) {
              if (ans.correct) {
                bg = C.green + "33";
                co = C.green;
              } else {
                bg = C.red + "33";
                co = C.red;
              }
            }

            return (
              <button
                key={idx}
                onClick={() => onNavigate(idx)}
                disabled={tiempoAgotado}
                style={{
                  width: "36px",
                  height: "36px",
                  background: bg,
                  border: bdr,
                  color: co,
                  cursor: tiempoAgotado ? "not-allowed" : "pointer",
                  borderRadius: "6px",
                  fontSize: ".85rem",
                  fontWeight: isCurr ? 700 : 500,
                  fontFamily: "'DM Sans', sans-serif",
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s",
                  opacity: tiempoAgotado ? 0.5 : 1,
                }}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Sub-componente: Pantalla de Resultados
function ResultsScreen({
  correctCount,
  totalQuestions,
  tiempoUsado,
  tiempoTotal,
  onRestart,
  onBack,
}) {
  const percentage = ((correctCount / totalQuestions) * 100).toFixed(1);
  const isPerfect = correctCount === totalQuestions;

  const minutos = Math.floor(tiempoUsado / 60);
  const segundos = tiempoUsado % 60;
  const tiempoUsadoFormato = `${minutos}m ${segundos}s`;

  return (
    <div style={{ textAlign: "center", padding: "3rem" }}>
      <div
        style={{
          fontSize: "4rem",
          marginBottom: "1rem",
        }}
      >
        {isPerfect ? "🎉" : correctCount >= totalQuestions * 0.7 ? "✨" : "📚"}
      </div>

      <h2 style={{ marginBottom: "1rem", color: C.text, fontSize: "2rem" }}>
        ¡Cuestionario Completado!
      </h2>

      <div
        style={{
          padding: "2rem",
          background: C.surface,
          borderRadius: "8px",
          marginBottom: "2rem",
          border: `1px solid ${C.border}`,
        }}
      >
        <div
          style={{
            fontSize: "3rem",
            fontWeight: 700,
            color: C.blue,
            marginBottom: ".5rem",
          }}
        >
          {correctCount}/{totalQuestions}
        </div>
        <div
          style={{ fontSize: "1.5rem", color: C.text, marginBottom: "1rem" }}
        >
          {percentage}%
        </div>
        <div style={{ color: C.muted, marginBottom: "1.5rem" }}>
          {isPerfect
            ? "¡Puntuación perfecta! 🏆"
            : correctCount >= totalQuestions * 0.7
              ? "¡Excelente desempeño!"
              : "Sigue practicando"}
        </div>

        <div
          style={{
            padding: "1rem",
            background: C.bg,
            borderRadius: "6px",
            borderTop: `1px solid ${C.border}`,
            marginTop: "1rem",
            color: C.muted,
            fontSize: ".9rem",
          }}
        >
          <div style={{ marginBottom: ".5rem" }}>
            Tiempo usado:{" "}
            <strong style={{ color: C.text }}>{tiempoUsadoFormato}</strong>
          </div>
          <div>
            Tiempo disponible:{" "}
            <strong style={{ color: C.text }}>
              {Math.floor(tiempoTotal / 60)} minutos
            </strong>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <button
          onClick={onRestart}
          style={{
            padding: ".8rem 2rem",
            background: C.blue,
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Repetir cuestionario
        </button>
        <button
          onClick={onBack}
          style={{
            padding: ".8rem 2rem",
            background: "none",
            border: `1px solid ${C.border}`,
            borderRadius: "6px",
            color: C.text,
            cursor: "pointer",
            fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Volver
        </button>
      </div>
    </div>
  );
}

// Pantalla de "Tiempo Agotado"
function TiempoAgotadoScreen({
  correctCount,
  totalQuestions,
  onRestart,
  onBack,
}) {
  const percentage = ((correctCount / totalQuestions) * 100).toFixed(1);

  return (
    <div style={{ textAlign: "center", padding: "3rem" }}>
      <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>⏰</div>

      <h2 style={{ marginBottom: "1rem", color: C.red, fontSize: "2rem" }}>
        ¡Tiempo Agotado!
      </h2>

      <p style={{ color: C.muted, marginBottom: "2rem", fontSize: "1.1rem" }}>
        Se acabó el tiempo disponible para este bloque.
      </p>

      <div
        style={{
          padding: "2rem",
          background: C.surface,
          borderRadius: "8px",
          marginBottom: "2rem",
          border: `1px solid ${C.border}`,
        }}
      >
        <div
          style={{
            fontSize: "3rem",
            fontWeight: 700,
            color: C.blue,
            marginBottom: ".5rem",
          }}
        >
          {correctCount}/{totalQuestions}
        </div>
        <div
          style={{ fontSize: "1.5rem", color: C.text, marginBottom: "1rem" }}
        >
          {percentage}%
        </div>
        <div style={{ color: C.muted }}>Respuestas correctas</div>
      </div>

      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <button
          onClick={onRestart}
          style={{
            padding: ".8rem 2rem",
            background: C.blue,
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Intentar de Nuevo
        </button>
        <button
          onClick={onBack}
          style={{
            padding: ".8rem 2rem",
            background: "none",
            border: `1px solid ${C.border}`,
            borderRadius: "6px",
            color: C.text,
            cursor: "pointer",
            fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Volver
        </button>
      </div>
    </div>
  );
}

// Componente Principal
export default function QuestionarioGenerico({
  cuestionario,
  modo = {},
  onBack,
}) {
  const [stage, setStage] = useState("theory");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState({});
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [tiempoRestante, setTiempoRestante] = useState(0);
  const [tiempoTotal, setTiempoTotal] = useState(0);
  const [tiempoAgotado, setTiempoAgotado] = useState(false);
  const [bloqueNombre, setBloqueNombre] = useState(null);
  const [indiceGlobal, setIndiceGlobal] = useState(null);

  const timePerQuestion = cuestionario.config?.timePerQuestion || 60;

  // Inicializar preguntas filtradas y calcular tiempo total
  useEffect(() => {
    let preguntas = [...cuestionario.questions];
    let bloqueInfo = null;
    let globalIndex = null;

    if (modo.tipo === "bloque" && cuestionario.bloques) {
      bloqueInfo = cuestionario.bloques.find((b) => b.id === modo.bloqueId);
      if (bloqueInfo) {
        setBloqueNombre(bloqueInfo.titulo);
        preguntas = preguntas.slice(bloqueInfo.from, bloqueInfo.to + 1);
        // El índice global es el from + currentIndex
        globalIndex = bloqueInfo.from;
        setIndiceGlobal(globalIndex + 1); // Comenzamos en 1
      }
    }

    // NUEVO: Soporte para bloque-aleatorio
    if (modo.tipo === "bloque-aleatorio" && cuestionario.bloques) {
      bloqueInfo = cuestionario.bloques.find((b) => b.id === modo.bloqueId);
      if (bloqueInfo) {
        setBloqueNombre(bloqueInfo.titulo);
        preguntas = preguntas.slice(bloqueInfo.from, bloqueInfo.to + 1);
        globalIndex = bloqueInfo.from;
        setIndiceGlobal(globalIndex + 1);
      }
    }

    // MODIFICADO: Agregar || modo.tipo === "bloque-aleatorio"
    if (modo.tipo === "aleatorio" || modo.tipo === "bloque-aleatorio") {
      preguntas = preguntas.sort(() => Math.random() - 0.5);
    }

    setFilteredQuestions(preguntas);

    const tiempo = preguntas.length * timePerQuestion;
    setTiempoTotal(tiempo);
    setTiempoRestante(tiempo);

    setStage(cuestionario.theory ? "theory" : "quiz");
  }, [cuestionario, modo, timePerQuestion]);

  // Temporizador GLOBAL
  useEffect(() => {
    if (stage !== "quiz" || tiempoAgotado) return;

    const interval = setInterval(() => {
      setTiempoRestante((prev) => {
        if (prev <= 1) {
          setTiempoAgotado(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [stage, tiempoAgotado]);

  // Actualizar índice global cuando cambia currentIndex
  useEffect(() => {
    if ((modo.tipo === "bloque" || modo.tipo === "bloque-aleatorio") && cuestionario.bloques) {
      const bloqueInfo = cuestionario.bloques.find(
        (b) => b.id === modo.bloqueId,
      );
      if (bloqueInfo) {
        setIndiceGlobal(bloqueInfo.from + currentIndex + 1);
      }
    }
  }, [currentIndex, modo, cuestionario.bloques]);

  const currentQuestion = filteredQuestions[currentIndex];
  const correctCount = Object.values(answers).filter((a) => a.correct).length;
  const tiempoUsado = tiempoTotal - tiempoRestante;

  const handleStart = () => {
    setStage("quiz");
  };

  const handleSelectAnswer = (idx) => {
    setSelectedAnswer(idx);
  };

  const handleConfirm = () => {
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    setAnswers({
      ...answers,
      [currentIndex]: { answer: selectedAnswer, correct: isCorrect },
    });
  };

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
    } else {
      setStage("results");
    }
  };

  const handleNavigate = (idx) => {
    setCurrentIndex(idx);
    setSelectedAnswer(answers[idx]?.answer ?? null);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswers({});
    setTiempoRestante(tiempoTotal);
    setTiempoAgotado(false);
    setStage(cuestionario.theory ? "theory" : "quiz");
  };

  if (!currentQuestion && filteredQuestions.length > 0) {
    return null;
  }

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "0 auto",
        padding: "1rem",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Header Estilo Primera Imagen */}
      {stage !== "results" && stage !== "tiempoAgotado" && (
        <div style={{ marginBottom: "2.5rem" }}>
          <button
            onClick={onBack}
            style={{
              padding: ".5rem 1rem",
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: "6px",
              color: C.text,
              cursor: "pointer",
              fontSize: ".85rem",
              fontFamily: "'DM Sans', sans-serif",
              marginBottom: "1.5rem",
              display: "inline-block",
            }}
          >
            ← Menú Principal
          </button>

          <h1
            style={{
              fontSize: "1.8rem",
              color: C.text,
              margin: 0,
              fontWeight: 700,
            }}
          >
            {cuestionario.metadata.titulo}
          </h1>
        </div>
      )}

      {/* Contenido según stage */}
      {stage === "theory" && cuestionario.theory && (
        <TheoryScreen theory={cuestionario.theory} onStart={handleStart} />
      )}

      {stage === "quiz" && currentQuestion && (
        <QuizScreenConSiguiente
          currentQuestion={currentQuestion}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={handleSelectAnswer}
          onConfirm={handleConfirm}
          onNext={handleNext}
          currentIndex={currentIndex}
          totalQuestions={filteredQuestions.length}
          correctCount={correctCount}
          answers={answers}
          onNavigate={handleNavigate}
          onBack={onBack}
          tiempoRestante={tiempoRestante}
          tiempoTotal={tiempoTotal}
          tiempoAgotado={tiempoAgotado}
          bloqueNombre={bloqueNombre}
          indiceGlobal={indiceGlobal}
          totalGlobal={cuestionario.questions.length}
        />
      )}

      {stage === "results" && (
        <ResultsScreen
          correctCount={correctCount}
          totalQuestions={filteredQuestions.length}
          tiempoUsado={tiempoUsado}
          tiempoTotal={tiempoTotal}
          onRestart={handleRestart}
          onBack={onBack}
        />
      )}

      {tiempoAgotado && stage === "quiz" && (
        <TiempoAgotadoScreen
          correctCount={correctCount}
          totalQuestions={filteredQuestions.length}
          onRestart={handleRestart}
          onBack={onBack}
        />
      )}
    </div>
  );
}
