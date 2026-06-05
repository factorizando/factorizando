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

// Rectángulo áureo vertical: el alto es el lado largo (alto = ancho · φ).
const PHI = 1.618;
const POP_ANCHO = 300;
const POP_ALTO = Math.round(POP_ANCHO * PHI); // ≈ 485

// { t: LaTeX para la vista previa, ins?: LaTeX a insertar si difiere de t }
const CATEGORIAS = [
  {
    nombre: "Griegas",
    simbolos: [
      { t: "\\alpha" }, { t: "\\beta" }, { t: "\\gamma" }, { t: "\\delta" },
      { t: "\\epsilon" }, { t: "\\varepsilon" }, { t: "\\zeta" }, { t: "\\eta" },
      { t: "\\theta" }, { t: "\\vartheta" }, { t: "\\iota" }, { t: "\\kappa" },
      { t: "\\lambda" }, { t: "\\mu" }, { t: "\\nu" }, { t: "\\xi" },
      { t: "\\pi" }, { t: "\\rho" }, { t: "\\sigma" }, { t: "\\tau" },
      { t: "\\upsilon" }, { t: "\\phi" }, { t: "\\varphi" }, { t: "\\chi" },
      { t: "\\psi" }, { t: "\\omega" },
      { t: "\\Gamma" }, { t: "\\Delta" }, { t: "\\Theta" }, { t: "\\Lambda" },
      { t: "\\Xi" }, { t: "\\Pi" }, { t: "\\Sigma" }, { t: "\\Upsilon" },
      { t: "\\Phi" }, { t: "\\Psi" }, { t: "\\Omega" },
    ],
  },
  {
    nombre: "Operadores",
    simbolos: [
      { t: "+" }, { t: "-" }, { t: "\\times" }, { t: "\\div" }, { t: "\\cdot" },
      { t: "\\pm" }, { t: "\\mp" }, { t: "\\ast" }, { t: "\\star" }, { t: "\\circ" },
      { t: "\\bullet" }, { t: "\\oplus" }, { t: "\\ominus" }, { t: "\\otimes" },
      { t: "\\odot" }, { t: "\\oslash" }, { t: "\\wedge" }, { t: "\\vee" },
      { t: "\\neg" }, { t: "\\cdots" }, { t: "\\ldots" }, { t: "\\%", ins: "\\%" },
      { t: "^{\\circ}", ins: "^{\\circ}" }, { t: "\\,'", ins: "'" },
    ],
  },
  {
    nombre: "Relaciones",
    simbolos: [
      { t: "=" }, { t: "\\neq" }, { t: "\\approx" }, { t: "\\equiv" }, { t: "\\propto" },
      { t: "<" }, { t: ">" }, { t: "\\leq" }, { t: "\\geq" }, { t: "\\ll" }, { t: "\\gg" },
      { t: "\\sim" }, { t: "\\simeq" }, { t: "\\cong" }, { t: "\\doteq" }, { t: "\\asymp" },
      { t: "\\prec" }, { t: "\\succ" }, { t: "\\preceq" }, { t: "\\succeq" },
      { t: "\\parallel" }, { t: "\\perp" }, { t: "\\angle" }, { t: "\\nparallel" },
    ],
  },
  {
    nombre: "Flechas",
    simbolos: [
      { t: "\\to" }, { t: "\\rightarrow" }, { t: "\\leftarrow" }, { t: "\\leftrightarrow" },
      { t: "\\Rightarrow" }, { t: "\\Leftarrow" }, { t: "\\Leftrightarrow" }, { t: "\\mapsto" },
      { t: "\\uparrow" }, { t: "\\downarrow" }, { t: "\\updownarrow" }, { t: "\\implies" },
      { t: "\\iff" }, { t: "\\longrightarrow" }, { t: "\\longleftarrow" }, { t: "\\hookrightarrow" },
      { t: "\\nearrow" }, { t: "\\searrow" }, { t: "\\nwarrow" }, { t: "\\swarrow" },
      { t: "\\rightleftharpoons" }, { t: "\\Uparrow" }, { t: "\\Downarrow" },
    ],
  },
  {
    nombre: "Conjuntos",
    simbolos: [
      { t: "\\in" }, { t: "\\notin" }, { t: "\\ni" }, { t: "\\subset" }, { t: "\\subseteq" },
      { t: "\\supset" }, { t: "\\supseteq" }, { t: "\\nsubseteq" }, { t: "\\cup" }, { t: "\\cap" },
      { t: "\\setminus" }, { t: "\\emptyset" }, { t: "\\forall" }, { t: "\\exists" }, { t: "\\nexists" },
      { t: "\\infty" }, { t: "\\aleph" }, { t: "\\therefore" }, { t: "\\because" }, { t: "\\mid" },
      { t: "\\mathbb{R}" }, { t: "\\mathbb{N}" }, { t: "\\mathbb{Z}" }, { t: "\\mathbb{Q}" }, { t: "\\mathbb{C}" },
    ],
  },
  {
    nombre: "Cálculo",
    simbolos: [
      { t: "\\sum" }, { t: "\\prod" }, { t: "\\int" }, { t: "\\oint" }, { t: "\\iint" },
      { t: "\\lim" }, { t: "\\partial" }, { t: "\\nabla" }, { t: "\\Delta" }, { t: "\\infty" },
      { t: "\\ln" }, { t: "\\log" }, { t: "\\to" },
      { t: "\\sum_{i}^{n}", ins: "\\sum_{‸}^{}" },
      { t: "\\prod_{i}^{n}", ins: "\\prod_{‸}^{}" },
      { t: "\\int_{a}^{b}", ins: "\\int_{‸}^{}" },
      { t: "\\lim_{x \\to 0}", ins: "\\lim_{‸ \\to }" },
      { t: "\\frac{d}{dx}", ins: "\\frac{d}{d‸}" },
      { t: "\\frac{\\partial}{\\partial x}", ins: "\\frac{\\partial}{\\partial ‸}" },
      { t: "\\dot{x}", ins: "\\dot{‸}" },
      { t: "\\ddot{x}", ins: "\\ddot{‸}" },
      { t: "e^{x}", ins: "e^{‸}" },
    ],
  },
  {
    nombre: "Estructuras",
    simbolos: [
      { t: "\\frac{a}{b}", ins: "\\frac{‸}{}" },
      { t: "\\dfrac{a}{b}", ins: "\\dfrac{‸}{}" },
      { t: "\\displaystyle\\sum", ins: "\\displaystyle " },
      { t: "x^{n}", ins: "^{‸}" },
      { t: "x_{n}", ins: "_{‸}" },
      { t: "x_{n}^{m}", ins: "_{‸}^{}" },
      { t: "\\sqrt{x}", ins: "\\sqrt{‸}" },
      { t: "\\sqrt[n]{x}", ins: "\\sqrt[‸]{}" },
      { t: "\\overline{x}", ins: "\\overline{‸}" },
      { t: "\\underline{x}", ins: "\\underline{‸}" },
      { t: "\\vec{v}", ins: "\\vec{‸}" },
      { t: "\\hat{x}", ins: "\\hat{‸}" },
      { t: "\\widehat{x}", ins: "\\widehat{‸}" },
      { t: "\\overrightarrow{AB}", ins: "\\overrightarrow{‸}" },
      { t: "|x|", ins: "|‸|" },
      { t: "\\| x \\|", ins: "\\|‸\\|" },
      { t: "\\binom{n}{k}", ins: "\\binom{‸}{}" },
      { t: "(\\ )", ins: "(‸)" },
      { t: "[\\ ]", ins: "[‸]" },
      { t: "\\{\\ \\}", ins: "\\{‸\\}" },
      { t: "\\langle x \\rangle", ins: "\\langle ‸ \\rangle" },
    ],
  },
];

export default function PaletaSimbolos({ tema, onInsert }) {
  const [abierto, setAbierto] = useState(false);
  const [cat, setCat] = useState(0);
  const contenedorRef = useRef(null);

  // Cerrar al hacer clic fuera del popover o al pulsar Escape.
  useEffect(() => {
    if (!abierto) return;
    function onDocDown(e) {
      if (contenedorRef.current && !contenedorRef.current.contains(e.target)) {
        setAbierto(false);
      }
    }
    function onKeyDown(e) {
      if (e.key === "Escape") setAbierto(false);
    }
    document.addEventListener("mousedown", onDocDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocDown);
      document.removeEventListener("keydown", onKeyDown);
    };
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
            right: -8,
            width: POP_ANCHO,
            height: POP_ALTO,
            display: "flex",
            flexDirection: "column",
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
              flexShrink: 0,
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

          {/* Cuadrícula de símbolos (rellena el alto restante) */}
          <div
            style={{
              flex: 1,
              minHeight: 0,
              display: "flex",
              flexWrap: "wrap",
              alignContent: "flex-start",
              gap: 4,
              padding: 8,
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
