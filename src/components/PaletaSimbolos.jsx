// Paleta de símbolos matemáticos para la barra "En pantalla" del director.
// Es un popover compacto con pestañas por categoría. Cada botón muestra el
// símbolo ya renderizado con KaTeX y, al pulsarlo, inserta su LaTeX en la
// anotación (el overlay lo renderiza si va entre $...$).
//
// El carácter CARET marca dónde debe quedar el cursor tras insertar una
// plantilla (p. ej. dentro del numerador de una fracción).
import { useState, useRef, useEffect } from "react";
import { M } from "../data/teoria/shared.jsx";

export const CARET = "‸"; // ‸ marcador interno (nunca se muestra)

// { t: LaTeX para la vista previa, ins?: LaTeX a insertar si difiere de t }
const CATEGORIAS = [
  {
    nombre: "Griegas",
    simbolos: [
      { t: "\\alpha" }, { t: "\\beta" }, { t: "\\gamma" }, { t: "\\delta" },
      { t: "\\epsilon" }, { t: "\\zeta" }, { t: "\\eta" }, { t: "\\theta" },
      { t: "\\lambda" }, { t: "\\mu" }, { t: "\\nu" }, { t: "\\pi" },
      { t: "\\rho" }, { t: "\\sigma" }, { t: "\\tau" }, { t: "\\phi" },
      { t: "\\chi" }, { t: "\\psi" }, { t: "\\omega" },
      { t: "\\Gamma" }, { t: "\\Delta" }, { t: "\\Theta" }, { t: "\\Lambda" },
      { t: "\\Pi" }, { t: "\\Sigma" }, { t: "\\Phi" }, { t: "\\Psi" }, { t: "\\Omega" },
    ],
  },
  {
    nombre: "Operadores",
    simbolos: [
      { t: "+" }, { t: "-" }, { t: "\\times" }, { t: "\\div" }, { t: "\\cdot" },
      { t: "\\pm" }, { t: "\\mp" }, { t: "\\ast" }, { t: "\\star" }, { t: "\\circ" },
      { t: "\\bullet" }, { t: "\\oplus" }, { t: "\\otimes" }, { t: "\\%", ins: "\\%" },
      { t: "^{\\circ}", ins: "^{\\circ}" },
    ],
  },
  {
    nombre: "Relaciones",
    simbolos: [
      { t: "=" }, { t: "\\neq" }, { t: "\\approx" }, { t: "\\equiv" }, { t: "\\propto" },
      { t: "<" }, { t: ">" }, { t: "\\leq" }, { t: "\\geq" }, { t: "\\ll" }, { t: "\\gg" },
      { t: "\\sim" }, { t: "\\cong" }, { t: "\\parallel" }, { t: "\\perp" }, { t: "\\angle" },
    ],
  },
  {
    nombre: "Flechas",
    simbolos: [
      { t: "\\to" }, { t: "\\rightarrow" }, { t: "\\leftarrow" }, { t: "\\leftrightarrow" },
      { t: "\\Rightarrow" }, { t: "\\Leftarrow" }, { t: "\\Leftrightarrow" }, { t: "\\mapsto" },
      { t: "\\uparrow" }, { t: "\\downarrow" }, { t: "\\implies" }, { t: "\\iff" },
    ],
  },
  {
    nombre: "Conjuntos",
    simbolos: [
      { t: "\\in" }, { t: "\\notin" }, { t: "\\subset" }, { t: "\\subseteq" }, { t: "\\supset" },
      { t: "\\cup" }, { t: "\\cap" }, { t: "\\emptyset" }, { t: "\\forall" }, { t: "\\exists" },
      { t: "\\infty" }, { t: "\\mathbb{R}" }, { t: "\\mathbb{N} " }, { t: "\\mathbb{Z}" }, { t: "\\mathbb{Q}" },
    ],
  },
  {
    nombre: "Cálculo",
    simbolos: [
      { t: "\\sum" }, { t: "\\prod" }, { t: "\\int" }, { t: "\\lim" }, { t: "\\partial" },
      { t: "\\nabla" }, { t: "\\Delta" }, { t: "\\infty" },
      { t: "\\sum_{i}^{n}", ins: "\\sum_{‸}^{}" },
      { t: "\\int_{a}^{b}", ins: "\\int_{‸}^{}" },
      { t: "\\frac{d}{dx}", ins: "\\frac{d}{d‸}" },
    ],
  },
  {
    nombre: "Estructuras",
    simbolos: [
      { t: "\\frac{a}{b}", ins: "\\frac{‸}{}" },
      { t: "x^{n}", ins: "^{‸}" },
      { t: "x_{n}", ins: "_{‸}" },
      { t: "\\sqrt{x}", ins: "\\sqrt{‸}" },
      { t: "\\sqrt[n]{x}", ins: "\\sqrt[‸]{}" },
      { t: "\\overline{x}", ins: "\\overline{‸}" },
      { t: "\\vec{v}", ins: "\\vec{‸}" },
      { t: "|x|", ins: "|‸|" },
      { t: "\\binom{n}{k}", ins: "\\binom{‸}{}" },
      { t: "(\\ )", ins: "(‸)" },
    ],
  },
];

export default function PaletaSimbolos({ tema, onInsert }) {
  const [abierto, setAbierto] = useState(false);
  const [cat, setCat] = useState(0);
  const contenedorRef = useRef(null);

  // Cerrar al hacer clic fuera del popover.
  useEffect(() => {
    if (!abierto) return;
    function onDocDown(e) {
      if (contenedorRef.current && !contenedorRef.current.contains(e.target)) {
        setAbierto(false);
      }
    }
    document.addEventListener("mousedown", onDocDown);
    return () => document.removeEventListener("mousedown", onDocDown);
  }, [abierto]);

  return (
    <div ref={contenedorRef} style={{ position: "relative", flexShrink: 0 }}>
      <button
        type="button"
        onClick={() => setAbierto((a) => !a)}
        title="Insertar símbolo matemático"
        style={{
          background: abierto ? "rgba(255,255,255,0.12)" : "transparent",
          border: `1px solid ${tema.border}`,
          color: tema.texto,
          borderRadius: 6,
          padding: "5px 12px",
          fontSize: 15,
          cursor: "pointer",
          fontFamily: "serif",
          lineHeight: 1,
        }}
      >
        ∑
      </button>

      {abierto && (
        <div
          style={{
            position: "absolute",
            bottom: "calc(100% + 8px)",
            right: 0,
            width: 372,
            background: "#16181d",
            border: `1px solid ${tema.border}`,
            borderRadius: 10,
            boxShadow: "0 12px 40px rgba(0,0,0,0.55)",
            overflow: "hidden",
            zIndex: 50,
          }}
        >
          {/* Pestañas de categoría */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              padding: 6,
              borderBottom: `1px solid ${tema.border}`,
              background: "rgba(0,0,0,0.25)",
            }}
          >
            {CATEGORIAS.map((c, i) => (
              <button
                key={c.nombre}
                type="button"
                onClick={() => setCat(i)}
                style={{
                  background: i === cat ? tema.acento : "transparent",
                  color: i === cat ? "#0e0f11" : tema.muted,
                  border: "none",
                  borderRadius: 5,
                  padding: "4px 9px",
                  fontSize: 11,
                  fontFamily: tema.mono,
                  letterSpacing: "0.02em",
                  cursor: "pointer",
                  fontWeight: i === cat ? 700 : 400,
                }}
              >
                {c.nombre}
              </button>
            ))}
          </div>

          {/* Cuadrícula de símbolos */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 4,
              padding: 8,
              maxHeight: 184,
              overflowY: "auto",
            }}
          >
            {CATEGORIAS[cat].simbolos.map((s) => {
              const ins = s.ins ?? s.t;
              return (
                <button
                  key={ins}
                  type="button"
                  // onMouseDown + preventDefault: no roba el foco al input,
                  // así se conserva la posición del cursor para insertar ahí.
                  onMouseDown={(e) => {
                    e.preventDefault();
                    onInsert(ins);
                  }}
                  title={ins.replace(CARET, "")}
                  style={{
                    minWidth: 40,
                    height: 38,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 8px",
                    background: "rgba(255,255,255,0.05)",
                    border: `1px solid ${tema.border}`,
                    borderRadius: 6,
                    color: tema.texto,
                    cursor: "pointer",
                  }}
                >
                  <M>{s.t}</M>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
