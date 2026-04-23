// src/components/QuestionarioGenerico.jsx
// Versión CORRECTA: Nuevo header + Temporizador original intacto

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BrandName from "./BrandName";

// ─── Componentes Internos para Renderizado (Corregidos) ──────────────────────
// Convierte markdown básico a HTML (negrita, cursiva, código)
const parseMd = (txt) =>
  txt
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g,     "<em>$1</em>")
    .replace(/`(.+?)`/g,       "<code>$1</code>");

const MathRenderer = ({ children }) => {
  const renderText = (txt) => {
    if (typeof txt !== "string") return txt;
    const parts = txt.split(/(\$.*?\$)/g);
    return parts.map((part, i) => {
      if (part.startsWith("$") && part.endsWith("$") && window.katex) {
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
      // Texto plano: aplicar markdown
      return (
        <span
          key={i}
          dangerouslySetInnerHTML={{ __html: parseMd(part) }}
        />
      );
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

// Sub-componente: Navbar
function Navbar({ onBack }) {
  return (
    <div style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(14,15,17,0.92)",
      backdropFilter: "blur(12px)",
      borderBottom: `1px solid ${C.border}`,
      padding: "10px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}>
      <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "inherit" }}>
        <img
          src={`${import.meta.env.BASE_URL}assets/logoX.png`}
          alt="Logo"
          style={{ width: 34, height: 34, borderRadius: "50%", objectFit: "cover", border: "1px solid #3b9eff44" }}
        />
        <BrandName size="1.1rem" />
      </Link>
      <button
        onClick={onBack}
        style={{
          background: "none",
          border: `1px solid ${C.border}`,
          borderRadius: "3px",
          color: C.muted,
          fontSize: ".78rem",
          letterSpacing: ".1em",
          textTransform: "uppercase",
          padding: ".4rem .9rem",
          cursor: "pointer",
          fontFamily: "'DM Sans', sans-serif",
          transition: "border-color .2s, color .2s",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.blue; e.currentTarget.style.color = C.text; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.muted; }}
      >
        ← Menú Principal
      </button>
    </div>
  );
}

// Sub-componente: Temporizador Global
function TemporizadorGlobal({ tiempoRestante, tiempoTotal, onTerminar, currentIndex, totalQuestions }) {
  const tiempoPct = (tiempoRestante / tiempoTotal) * 100;
  const progresoPct = totalQuestions > 0 ? ((currentIndex + 1) / totalQuestions) * 100 : 0;

  let colorTiempo = C.blue;
  if (tiempoPct <= 10) colorTiempo = "#D76F02";
  else if (tiempoPct <= 25) colorTiempo = "#fbbf24";

  const horas = Math.floor(tiempoRestante / 3600);
  const minutos = Math.floor((tiempoRestante % 3600) / 60);
  const segundos = Math.floor(tiempoRestante % 60);
  const formatoTiempo = `${horas.toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;

  const SIZE = 52;
  const R = 22;
  const CIRC = 2 * Math.PI * R;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
      {/* SVG circular — muestra progreso de preguntas */}
      <div style={{ position: "relative", width: SIZE, height: SIZE, flexShrink: 0 }}>
        <svg width={SIZE} height={SIZE} style={{ transform: "rotate(-90deg)" }} viewBox={`0 0 ${SIZE} ${SIZE}`}>
          <circle cx={SIZE/2} cy={SIZE/2} r={R} fill="none" stroke={C.border} strokeWidth="3" />
          <circle
            cx={SIZE/2} cy={SIZE/2} r={R} fill="none"
            stroke={C.blue} strokeWidth="3"
            strokeDasharray={`${(progresoPct / 100) * CIRC} ${CIRC}`}
            style={{ transition: "stroke-dasharray 0.4s ease" }}
          />
        </svg>
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <span style={{ fontSize: "0.6rem", fontWeight: 700, color: C.blue }}>
            {Math.round(progresoPct)}%
          </span>
        </div>
      </div>

      {/* Badge de tiempo restante */}
      <span style={{
        fontSize: "0.95rem", fontWeight: 700,
        color: colorTiempo, fontFamily: "monospace",
        letterSpacing: "0.04em",
        background: colorTiempo + "18",
        border: `1px solid ${colorTiempo}44`,
        borderRadius: "20px", padding: "4px 10px",
      }}>
        ⏱ {formatoTiempo}
      </span>

      {/* Botón Terminar */}
      <button
        onClick={onTerminar}
        style={{
          background: C.blue + "18", color: C.blue,
          border: `1px solid ${C.blue}44`,
          borderRadius: "20px", padding: "4px 12px",
          fontSize: "0.78rem", fontWeight: 600,
          cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
          letterSpacing: ".04em", transition: "background .2s, border-color .2s",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = C.blue + "33"; e.currentTarget.style.borderColor = C.blue + "88"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = C.blue + "18"; e.currentTarget.style.borderColor = C.blue + "44"; }}
      >
        Terminar
      </button>
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
  onTerminar,
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
      {/* ─── HEADER COMPACTO ─── */}
      <div style={{ marginBottom: "1.5rem" }}>

        {/* Fila 1: Reactivo + Timer */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <span style={{ color: C.muted, fontSize: 13 }}>Reactivo </span>
            <span style={{ color: C.text, fontWeight: 700 }}>{currentIndex + 1}</span>
            <span style={{ color: C.muted }}> / {totalQuestions}</span>
            <span style={{ color: C.muted, fontSize: 12, marginLeft: 8 }}>
              ({respondidas} respondidos)
            </span>
          </div>
          <TemporizadorGlobal
            tiempoRestante={tiempoRestante}
            tiempoTotal={tiempoTotal}
            onTerminar={onTerminar}
            currentIndex={currentIndex}
            totalQuestions={totalQuestions}
          />
        </div>

        {/* Fila 2: Barra de progreso */}
        <div style={{
          width: "100%", height: 4,
          background: C.border, borderRadius: 99,
          overflow: "hidden", marginBottom: 10,
        }}>
          <div style={{
            width: `${prog}%`, height: "100%",
            background: `linear-gradient(90deg, ${C.blue}, #a78bfa)`,
            borderRadius: 99, transition: "width 0.3s ease",
          }} />
        </div>

        {/* Fila 3: Tag de bloque + número global */}
        {(bloqueNombre || (indiceGlobal !== null && totalGlobal !== null)) && (
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {bloqueNombre && (
              <span style={{
                background: C.blue + "1a",
                color: C.blue,
                borderRadius: 6,
                padding: "2px 10px",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                {bloqueNombre}
              </span>
            )}
            {indiceGlobal !== null && totalGlobal !== null && (
              <span style={{ color: C.muted, fontSize: 12, fontFamily: "'DM Sans', sans-serif" }}>
                #{indiceGlobal} / {totalGlobal}
              </span>
            )}
          </div>
        )}
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
      <div style={{
          padding: "20px 24px",
          background: C.surface,
          borderRadius: 14,
          border: `1px solid ${C.border}`,
          marginBottom: 16,
        }}>
        {/* Texto de la Pregunta */}
        <div style={{
          fontSize: "clamp(14px, 2.5vw, 16px)",
          fontWeight: 600,
          marginBottom: "1.2rem",
          color: C.text,
          lineHeight: 1.7,
          fontFamily: "'DM Sans', sans-serif",
        }}>
          <MathRenderer>{currentQuestion.question}</MathRenderer>
        </div>

        {/* SVG Inline o URL (si existe) */}
        {currentQuestion.diagram && (
          <div style={{ marginBottom: "1.2rem", display: "flex", justifyContent: "center" }}>
            {currentQuestion.diagram}
          </div>
        )}
        {currentQuestion.svgUrl && (
          <div style={{
            marginBottom: "1.2rem", textAlign: "center",
            background: C.bg, padding: "10px",
            borderRadius: "8px", border: `1px solid ${C.border}`,
          }}>
            <SVGRenderer src={currentQuestion.svgUrl} />
          </div>
        )}

        {/* Opciones */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedAnswer === idx;
            const isCorrectAnswer = idx === currentQuestion.correctAnswer;
            const isUserCorrect = answers[currentIndex]?.correct;

            let bg = C.bg, bd = `1px solid ${C.border}`, co = C.muted;
            if (isAnswered) {
              if (isCorrectAnswer) {
                bg = C.blue + "08";
                bd = `1px solid ${C.blue}`;
                co = C.blue;
              } else if (isSelected && !isUserCorrect) {
                bg = "#fbbf2408";
                bd = `1px solid #fbbf24`;
                co = "#fbbf24";
              }
            } else if (isSelected) {
              bg = C.blue + "18"; bd = `1px solid ${C.blue}`; co = C.blue;
            }

            return (
              <button
                key={idx}
                onClick={() => { if (!isAnswered) onSelectAnswer(idx); }}
                disabled={tiempoAgotado || isAnswered}
                style={{
                  padding: "13px 16px",
                  background: bg, border: bd, color: co,
                  borderRadius: 9, cursor: tiempoAgotado || isAnswered ? "default" : "pointer",
                  textAlign: "left", fontSize: 14,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500, transition: "all .15s",
                  lineHeight: 1.6, outline: "none",
                  display: "flex", alignItems: "center", gap: 8,
                }}
              >
                {isAnswered && isCorrectAnswer && <span style={{ fontWeight: 700, color: C.blue }}>✓</span>}
                {isAnswered && isSelected && !isUserCorrect && <span style={{ fontWeight: 700, color: "#fbbf24" }}>✗</span>}
                <MathRenderer>{option}</MathRenderer>
              </button>
            );
          })}
        </div>

        {/* Explicación — badge 💡 estilo ExaniII */}
        {showExplanation && isAnswered && currentQuestion.explanation && (
          <div style={{
            background: C.blue + "0e",
            border: `1px solid ${C.blue}22`,
            borderRadius: 10,
            padding: "12px 16px",
            marginBottom: 16,
          }}>
            <span style={{ color: C.blue, fontSize: 12, fontWeight: 700, fontFamily: "'DM Sans', sans-serif" }}>💡 </span>
            <span style={{ color: C.muted, fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>
              <MathRenderer>{currentQuestion.explanation}</MathRenderer>
            </span>
          </div>
        )}

        {/* Controles inferiores */}
        <div style={{ display: "flex", gap: 10, justifyContent: "space-between", alignItems: "center" }}>
          <button
            onClick={() => onNavigate(currentIndex - 1)}
            disabled={currentIndex === 0 || tiempoAgotado}
            style={{
              padding: "10px 20px",
              background: C.surface, color: C.muted,
              border: `1px solid ${C.border}`,
              borderRadius: 10,
              cursor: currentIndex === 0 || tiempoAgotado ? "not-allowed" : "pointer",
              opacity: currentIndex === 0 ? 0.4 : 1,
              fontSize: 14, fontFamily: "'DM Sans', sans-serif",
            }}
          >
            ← Anterior
          </button>

          {!isAnswered ? (
            <button
              onClick={handleConfirmClick}
              disabled={selectedAnswer === null || tiempoAgotado}
              style={{
                padding: "10px 28px", fontSize: 14, fontWeight: 700,
                background: selectedAnswer !== null
                  ? `linear-gradient(135deg, ${C.blue}, #a78bfa)`
                  : C.surface,
                color: selectedAnswer !== null ? "#fff" : C.muted,
                border: "none", borderRadius: 10,
                cursor: selectedAnswer === null || tiempoAgotado ? "not-allowed" : "pointer",
                boxShadow: selectedAnswer !== null ? `0 4px 20px ${C.blue}33` : "none",
                fontFamily: "'DM Sans', sans-serif",
                transition: "all 0.2s",
              }}
            >
              Confirmar respuesta
            </button>
          ) : (
            <button
              onClick={handleNextClick}
              style={{
                padding: "10px 28px", fontSize: 14, fontWeight: 700,
                background: `linear-gradient(135deg, ${C.blue}, #a78bfa)`,
                color: "#fff", border: "none", borderRadius: 10,
                cursor: "pointer",
                boxShadow: `0 4px 20px ${C.blue}33`,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {currentIndex === totalQuestions - 1 ? "Ver resultados →" : "Siguiente →"}
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
                bg = C.blue + "33";
                co = C.blue;
              } else {
                bg = "#fbbf2433";
                co = "#fbbf24";
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
        {/* Leyenda */}
        <div style={{ display: "flex", gap: 14, marginTop: 10, flexWrap: "wrap" }}>
          {[
            [C.blue + "33", C.blue, "Correcta"],
            ["#fbbf2433", "#fbbf24", "Incorrecta"],
            [C.bg, C.muted, "Sin contestar"],
          ].map(([bg, co, label]) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <div style={{ width: 11, height: 11, borderRadius: 3, background: bg, border: `1px solid ${co}` }} />
              <span style={{ color: C.muted, fontSize: 11, fontFamily: "'DM Sans', sans-serif" }}>{label}</span>
            </div>
          ))}
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
  questions,
  answers,
}) {
  const [filter, setFilter] = useState("all");
  const pct = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const col = pct >= 80 ? C.blue : pct >= 60 ? "#fbbf24" : "#f97316";
  const msg =
    pct >= 90 ? "¡Excelente dominio del temario!" :
    pct >= 75 ? "¡Muy bien! Repasa los temas fallidos." :
    pct >= 50 ? "Sigue practicando, vas por buen camino." :
    "Te recomendamos reforzar el temario.";

  const minutos = Math.floor(tiempoUsado / 60);
  const segundos = tiempoUsado % 60;
  const tiempoUsadoFormato = `${minutos}m ${String(segundos).padStart(2, "0")}s`;

  // Construir lista con índice original preservado
  const questionsWithIdx = (questions || []).map((q, i) => ({ q, i }));
  const displayQs =
    filter === "correct"
      ? questionsWithIdx.filter(({ i }) => answers[i]?.correct)
      : filter === "wrong"
        ? questionsWithIdx.filter(({ i }) => answers[i] && !answers[i].correct)
        : questionsWithIdx;

  return (
    <div style={{ paddingBottom: 64 }}>
      {/* Botones superiores */}
      <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap", paddingTop: "1.5rem" }}>
        <button
          onClick={onBack}
          style={{
            background: C.surface, color: C.muted,
            border: `1px solid ${C.border}`, borderRadius: 12,
            padding: "12px 28px", fontSize: 14, fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif", cursor: "pointer",
          }}
        >
          ← Menú
        </button>
        <button
          onClick={onRestart}
          style={{
            background: `linear-gradient(135deg, ${C.blue}, #a78bfa)`,
            color: "#fff", border: "none", borderRadius: 12,
            padding: "12px 28px", fontSize: 14, fontWeight: 700,
            fontFamily: "'DM Sans', sans-serif", cursor: "pointer",
          }}
        >
          ↺ Repetir
        </button>
      </div>

      {/* Card de puntuación */}
      <div style={{
        background: C.surface, border: `2px solid ${col}`,
        borderRadius: 18, padding: "30px 36px",
        textAlign: "center", maxWidth: 380,
        margin: "0 auto 32px",
        fontFamily: "'DM Sans', sans-serif",
      }}>
        <div style={{
          fontSize: 58, fontWeight: 900, color: col,
          letterSpacing: "-3px", lineHeight: 1,
        }}>
          {pct}%
        </div>
        <div style={{ color: C.muted, fontSize: 14, marginTop: 8 }}>
          <span style={{ color: C.text, fontWeight: 700 }}>{correctCount}</span> de {totalQuestions} correctas
        </div>
        <div style={{ color: col, fontWeight: 700, fontSize: 15, marginTop: 10 }}>
          {msg}
        </div>
        <div style={{ color: C.muted, fontSize: 12, marginTop: 12 }}>
          Tiempo usado: <strong style={{ color: C.text }}>{tiempoUsadoFormato}</strong>
        </div>
      </div>

      {/* Filtros */}
      {questions && questions.length > 0 && (
        <>
          <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
            {[
              ["all", "Todas"],
              ["correct", `✓ Correctas (${correctCount})`],
              ["wrong", `✗ Incorrectas (${totalQuestions - correctCount})`],
            ].map(([f, label]) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: "6px 14px", borderRadius: 99,
                  fontSize: 12, fontWeight: 700, cursor: "pointer",
                  border: "none",
                  background: filter === f ? C.blue : C.surface,
                  color: filter === f ? "#fff" : C.muted,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Lista de preguntas */}
          {displayQs.map(({ q, i: qIndex }) => {
            const ans = answers[qIndex];
            const isCorrect = ans?.correct;
            const selectedIdx = ans?.answer;
            return (
              <div key={qIndex} style={{
                background: C.surface, border: `1px solid ${C.border}`,
                borderRadius: 14, padding: "20px 24px", marginBottom: 12,
              }}>
                {/* Número + estado */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <span style={{
                    background: (isCorrect ? C.blue : "#fbbf24") + "1a",
                    color: isCorrect ? C.blue : "#fbbf24",
                    borderRadius: 6, padding: "2px 10px",
                    fontSize: 10, fontWeight: 700,
                    letterSpacing: 1.5, textTransform: "uppercase",
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                    {isCorrect ? "✓ Correcta" : ans ? "✗ Incorrecta" : "Sin contestar"}
                  </span>
                  <span style={{ marginLeft: "auto", color: C.muted, fontSize: 12, fontFamily: "'DM Sans', sans-serif" }}>
                    #{qIndex + 1}
                  </span>
                </div>

                {/* Pregunta */}
                <p style={{
                  color: C.text, fontSize: 14, fontWeight: 600,
                  marginBottom: 10, lineHeight: 1.6,
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  <MathRenderer>{q.question}</MathRenderer>
                </p>

                {/* Opciones */}
                <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 10 }}>
                  {q.options.map((opt, oi) => {
                    const isOk = oi === q.correctAnswer;
                    const isUser = oi === selectedIdx;
                    let bg = C.bg, bd = `1px solid ${C.border}`, co = C.muted;
                    if (isOk) { bg = C.blue + "08"; bd = `1px solid ${C.blue}`; co = C.blue; }
                    else if (isUser && !isOk) { bg = "#fbbf2408"; bd = `1px solid #fbbf24`; co = "#fbbf24"; }
                    return (
                      <div key={oi} style={{
                        background: bg, border: bd, color: co,
                        borderRadius: 8, padding: "10px 14px",
                        fontSize: 13, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6,
                      }}>
                        {isOk ? "✓ " : ""}{isUser && !isOk ? "✗ " : ""}
                        <MathRenderer>{opt}</MathRenderer>
                      </div>
                    );
                  })}
                </div>

                {/* Explicación */}
                {q.explanation && (
                  <div style={{
                    padding: "8px 12px",
                    background: C.blue + "0e",
                    borderRadius: 8,
                    border: `1px solid ${C.blue}22`,
                  }}>
                    <span style={{ color: C.blue, fontSize: 11, fontWeight: 700, fontFamily: "'DM Sans', sans-serif" }}>💡 </span>
                    <span style={{ color: C.muted, fontSize: 12, fontFamily: "'DM Sans', sans-serif" }}>
                      <MathRenderer>{q.explanation}</MathRenderer>
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </>
      )}
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
  const timePerQuestion = cuestionario.config?.timePerQuestion || 60;
  const initialTiempo = cuestionario.questions.length * timePerQuestion;

  const [stage, setStage] = useState(() => cuestionario.theory ? "theory" : "quiz");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState({});
  const [filteredQuestions] = useState(cuestionario.questions);
  const [tiempoRestante, setTiempoRestante] = useState(initialTiempo);
  const [tiempoTotal] = useState(initialTiempo);
  const [tiempoAgotado, setTiempoAgotado] = useState(false);
  const [bloqueNombre] = useState(null);
  const [indiceGlobal, setIndiceGlobal] = useState(null);

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
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar onBack={onBack} />
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "1rem" }}>
      {stage === "theory" && (
        <div style={{
          background: C.surface,
          borderBottom: `1px solid ${C.border}`,
          borderRadius: "12px",
          padding: "44px 24px 36px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          marginBottom: "2rem",
          marginTop: "1.5rem",
        }}>
          {/* Fondo de puntos */}
          <div style={{
            position: "absolute", inset: 0, opacity: 0.03,
            backgroundImage: `radial-gradient(${C.blue} 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
          }} />
          <div style={{ position: "relative" }}>
            {/* Badge */}
            <span style={{
              display: "inline-block",
              background: C.blue + "22",
              color: C.blue,
              borderRadius: 99,
              padding: "3px 14px",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 16,
              fontFamily: "'DM Sans', sans-serif",
            }}>
              {cuestionario.metadata.nivel} · {cuestionario.metadata.materia}
            </span>

            {/* Título */}
            <h1 style={{
              fontSize: "clamp(20px, 4vw, 34px)",
              fontWeight: 700,
              color: C.text,
              letterSpacing: "-1.5px",
              lineHeight: 1.1,
              marginBottom: 10,
              fontFamily: "'DM Sans', sans-serif",
            }}>
              {cuestionario.metadata.titulo}
            </h1>

            {/* Subtítulo */}
            <p style={{
              color: C.muted, fontSize: 14,
              maxWidth: 540, margin: "0 auto 24px",
              fontFamily: "'DM Sans', sans-serif",
            }}>
              {cuestionario.questions.length} reactivos · {cuestionario.config?.timePerQuestion || 60} s por reactivo
            </p>

            {/* Stats */}
            <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
              {[
                { label: "Reactivos", val: cuestionario.questions.length },
                { label: "Tiempo total", val: `${Math.round(cuestionario.questions.length * (cuestionario.config?.timePerQuestion || 60) / 60)} min` },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div style={{
                    fontSize: 22, fontWeight: 900, color: C.text,
                    letterSpacing: "-1px", fontFamily: "'DM Sans', sans-serif",
                  }}>
                    {s.val}
                  </div>
                  <div style={{
                    fontSize: 10, color: C.muted, fontWeight: 700,
                    textTransform: "uppercase", letterSpacing: 1.5,
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
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
          onTerminar={() => { setTiempoAgotado(false); setStage("results"); }}
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
          questions={filteredQuestions}
          answers={answers}
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
    </div>
  );
}
