// Sistema de temas por materia para las presentaciones.
// Cada presentación declara `materia` y recibe su tema automáticamente.
import { useEffect } from "react";

// ── SVGs decorativos de portada ───────────────────────────────────────────────

function TriangulosSVG({ tema }) {
  return (
    <svg width="200" height="130" viewBox="0 0 300 195" fill="none">
      <polygon points="40,170 155,25 270,170"
        stroke={tema.acento} strokeWidth="2" fill={tema.acentoSuave}/>
      <polygon points="80,170 137,100 195,170"
        stroke={tema.azul} strokeWidth="1.5" fill={tema.azulSuave}/>
      <text x="25" y="188" fill={tema.acento} fontSize="14" fontFamily="serif">A</text>
      <text x="150" y="18" fill={tema.acento} fontSize="14" fontFamily="serif">B</text>
      <text x="272" y="188" fill={tema.acento} fontSize="14" fontFamily="serif">C</text>
      <text x="65" y="188" fill={tema.azul} fontSize="12" fontFamily="serif">D</text>
      <text x="133" y="95" fill={tema.azul} fontSize="12" fontFamily="serif">E</text>
      <text x="197" y="188" fill={tema.azul} fontSize="12" fontFamily="serif">F</text>
      <text x="215" y="150" fill={tema.muted} fontSize="26" fontFamily="serif">∼</text>
    </svg>
  );
}

function LibroSVG({ tema }) {
  return (
    <svg width="200" height="130" viewBox="0 0 300 195" fill="none">
      <line x1="150" y1="28" x2="150" y2="170" stroke={tema.acento} strokeWidth="2.5"/>
      <path d="M150,35 C115,38 68,52 42,170 L150,170 Z"
        stroke={tema.acento} strokeWidth="1.5" fill={tema.acentoSuave}/>
      <path d="M150,35 C185,38 232,52 258,170 L150,170 Z"
        stroke={tema.azul} strokeWidth="1.5" fill={tema.azulSuave}/>
      <line x1="63" y1="88" x2="138" y2="92" stroke={tema.acento} strokeWidth="1" opacity="0.5"/>
      <line x1="58" y1="104" x2="136" y2="109" stroke={tema.acento} strokeWidth="1" opacity="0.38"/>
      <line x1="55" y1="120" x2="134" y2="126" stroke={tema.acento} strokeWidth="1" opacity="0.25"/>
      <line x1="162" y1="92" x2="237" y2="88" stroke={tema.azul} strokeWidth="1" opacity="0.5"/>
      <line x1="164" y1="109" x2="242" y2="104" stroke={tema.azul} strokeWidth="1" opacity="0.38"/>
      <line x1="166" y1="126" x2="245" y2="120" stroke={tema.azul} strokeWidth="1" opacity="0.25"/>
    </svg>
  );
}

function OndaSVG({ tema }) {
  return (
    <svg width="200" height="130" viewBox="0 0 300 195" fill="none">
      <line x1="15" y1="97" x2="285" y2="97" stroke={tema.muted} strokeWidth="1" opacity="0.3"/>
      {/* Onda principal */}
      <path
        d="M 20,97 C 43,42 62,42 85,97 C 108,152 127,152 150,97 C 173,42 192,42 215,97 C 238,152 257,152 280,97"
        stroke={tema.acento} strokeWidth="2.5" fill="none"/>
      {/* Onda secundaria */}
      <path
        d="M 20,97 C 43,152 62,152 85,97 C 108,42 127,42 150,97 C 173,152 192,152 215,97 C 238,42 257,42 280,97"
        stroke={tema.azul} strokeWidth="1.2" fill="none" opacity="0.5"/>
      <circle cx="20" cy="97" r="4" fill={tema.acento}/>
      <circle cx="85" cy="97" r="3" fill={tema.acento} opacity="0.7"/>
      <circle cx="150" cy="97" r="4" fill={tema.acento}/>
      <circle cx="215" cy="97" r="3" fill={tema.acento} opacity="0.7"/>
      <circle cx="280" cy="97" r="4" fill={tema.acento}/>
    </svg>
  );
}

function HeliceSVG({ tema }) {
  return (
    <svg width="200" height="130" viewBox="0 0 300 195" fill="none">
      {/* Hebra 1 */}
      <path
        d="M 40,97 C 63,40 90,40 113,97 C 136,154 163,154 186,97 C 209,40 236,40 259,97"
        stroke={tema.acento} strokeWidth="2.5" fill="none"/>
      {/* Hebra 2 */}
      <path
        d="M 40,97 C 63,154 90,154 113,97 C 136,40 163,40 186,97 C 209,154 236,154 259,97"
        stroke={tema.azul} strokeWidth="2.5" fill="none"/>
      {/* Escalones */}
      <line x1="61" y1="60" x2="61" y2="134" stroke={tema.muted} strokeWidth="1.5" opacity="0.45"/>
      <line x1="77" y1="44" x2="77" y2="150" stroke={tema.muted} strokeWidth="1.5" opacity="0.45"/>
      <line x1="93" y1="60" x2="93" y2="134" stroke={tema.muted} strokeWidth="1.5" opacity="0.45"/>
      <line x1="133" y1="134" x2="133" y2="60" stroke={tema.muted} strokeWidth="1.5" opacity="0.45"/>
      <line x1="149" y1="150" x2="149" y2="44" stroke={tema.muted} strokeWidth="1.5" opacity="0.45"/>
      <line x1="165" y1="134" x2="165" y2="60" stroke={tema.muted} strokeWidth="1.5" opacity="0.45"/>
      <line x1="205" y1="60" x2="205" y2="134" stroke={tema.muted} strokeWidth="1.5" opacity="0.45"/>
      <line x1="221" y1="44" x2="221" y2="150" stroke={tema.muted} strokeWidth="1.5" opacity="0.45"/>
      <line x1="237" y1="60" x2="237" y2="134" stroke={tema.muted} strokeWidth="1.5" opacity="0.45"/>
    </svg>
  );
}

function MoleculaSVG({ tema }) {
  return (
    <svg width="200" height="130" viewBox="0 0 300 195" fill="none">
      {/* Hexágono — anillo de benceno */}
      <polygon points="150,42 198,70 198,124 150,152 102,124 102,70"
        stroke={tema.acento} strokeWidth="2" fill={tema.acentoSuave}/>
      {/* Círculo interior resonante */}
      <circle cx="150" cy="97" r="35" stroke={tema.azul} strokeWidth="1.5" fill="none" opacity="0.7"/>
      {/* Átomos en vértices */}
      <circle cx="150" cy="42" r="5.5" fill={tema.acento} opacity="0.9"/>
      <circle cx="198" cy="70" r="5.5" fill={tema.acento} opacity="0.9"/>
      <circle cx="198" cy="124" r="5.5" fill={tema.acento} opacity="0.9"/>
      <circle cx="150" cy="152" r="5.5" fill={tema.acento} opacity="0.9"/>
      <circle cx="102" cy="124" r="5.5" fill={tema.acento} opacity="0.9"/>
      <circle cx="102" cy="70" r="5.5" fill={tema.acento} opacity="0.9"/>
    </svg>
  );
}

function BrujulaSVG({ tema }) {
  return (
    <svg width="200" height="130" viewBox="0 0 300 195" fill="none">
      <circle cx="150" cy="97" r="72" stroke={tema.border} strokeWidth="1.5" opacity="0.6"/>
      <circle cx="150" cy="97" r="5" fill={tema.acento}/>
      {/* Ejes */}
      <line x1="150" y1="25" x2="150" y2="169" stroke={tema.muted} strokeWidth="1" opacity="0.25"/>
      <line x1="78" y1="97" x2="222" y2="97" stroke={tema.muted} strokeWidth="1" opacity="0.25"/>
      {/* Flecha N (acento, grande) */}
      <polygon points="150,27 144,78 156,78" fill={tema.acento} opacity="0.9"/>
      {/* Flecha S */}
      <polygon points="150,167 144,116 156,116" fill={tema.muted} opacity="0.45"/>
      {/* Flecha E (azul) */}
      <polygon points="220,97 169,91 169,103" fill={tema.azul} opacity="0.8"/>
      {/* Flecha O */}
      <polygon points="80,97 131,91 131,103" fill={tema.muted} opacity="0.45"/>
      <text x="143" y="16" fill={tema.acento} fontSize="15" fontWeight="700" fontFamily="sans-serif">N</text>
      <text x="143" y="190" fill={tema.muted} fontSize="13" fontFamily="sans-serif" opacity="0.6">S</text>
      <text x="228" y="102" fill={tema.azul} fontSize="13" fontFamily="sans-serif" opacity="0.8">E</text>
      <text x="55" y="102" fill={tema.muted} fontSize="13" fontFamily="sans-serif" opacity="0.6">O</text>
    </svg>
  );
}

function PergaminoSVG({ tema }) {
  return (
    <svg width="200" height="130" viewBox="0 0 300 195" fill="none">
      {/* Cuerpo plano del pergamino */}
      <rect x="74" y="48" width="152" height="100" rx="3"
        stroke={tema.acento} strokeWidth="1.5" fill={tema.acentoSuave}/>
      {/* Rollo izquierdo */}
      <ellipse cx="60" cy="98" rx="14" ry="50"
        stroke={tema.acento} strokeWidth="1.5" fill={tema.acentoMed}/>
      {/* Rollo derecho */}
      <ellipse cx="240" cy="98" rx="14" ry="50"
        stroke={tema.azul} strokeWidth="1.5" fill={tema.azulMed}/>
      {/* Renglones */}
      <line x1="92" y1="70" x2="208" y2="70" stroke={tema.acento} strokeWidth="1" opacity="0.6"/>
      <line x1="92" y1="85" x2="208" y2="85" stroke={tema.muted} strokeWidth="1" opacity="0.42"/>
      <line x1="92" y1="100" x2="208" y2="100" stroke={tema.muted} strokeWidth="1" opacity="0.42"/>
      <line x1="92" y1="115" x2="208" y2="115" stroke={tema.muted} strokeWidth="1" opacity="0.42"/>
      <line x1="92" y1="130" x2="168" y2="130" stroke={tema.azul} strokeWidth="1" opacity="0.35"/>
    </svg>
  );
}

function ColumnasSVG({ tema }) {
  return (
    <svg width="200" height="130" viewBox="0 0 300 195" fill="none">
      {/* Entablamento */}
      <rect x="48" y="30" width="204" height="16" rx="2"
        stroke={tema.acento} strokeWidth="1.5" fill={tema.acentoSuave}/>
      {/* Capiteles */}
      <rect x="72" y="46" width="56" height="8" rx="1"
        stroke={tema.azul} strokeWidth="1" fill={tema.azulSuave}/>
      <rect x="172" y="46" width="56" height="8" rx="1"
        stroke={tema.azul} strokeWidth="1" fill={tema.azulSuave}/>
      {/* Columna izquierda */}
      <rect x="82" y="54" width="36" height="108"
        stroke={tema.acento} strokeWidth="1.5" fill={tema.acentoSuave}/>
      <line x1="89" y1="54" x2="89" y2="162" stroke={tema.acento} strokeWidth="0.8" opacity="0.4"/>
      <line x1="96" y1="54" x2="96" y2="162" stroke={tema.acento} strokeWidth="0.8" opacity="0.4"/>
      <line x1="103" y1="54" x2="103" y2="162" stroke={tema.acento} strokeWidth="0.8" opacity="0.4"/>
      <line x1="110" y1="54" x2="110" y2="162" stroke={tema.acento} strokeWidth="0.8" opacity="0.4"/>
      {/* Columna derecha */}
      <rect x="182" y="54" width="36" height="108"
        stroke={tema.acento} strokeWidth="1.5" fill={tema.acentoSuave}/>
      <line x1="189" y1="54" x2="189" y2="162" stroke={tema.acento} strokeWidth="0.8" opacity="0.4"/>
      <line x1="196" y1="54" x2="196" y2="162" stroke={tema.acento} strokeWidth="0.8" opacity="0.4"/>
      <line x1="203" y1="54" x2="203" y2="162" stroke={tema.acento} strokeWidth="0.8" opacity="0.4"/>
      <line x1="210" y1="54" x2="210" y2="162" stroke={tema.acento} strokeWidth="0.8" opacity="0.4"/>
      {/* Basamento */}
      <rect x="62" y="162" width="176" height="10" rx="1"
        stroke={tema.acento} strokeWidth="1" fill={tema.acentoMed}/>
      <rect x="50" y="172" width="200" height="8" rx="1"
        stroke={tema.acento} strokeWidth="1" fill={tema.acentoSuave}/>
    </svg>
  );
}

// ── Definición de temas ───────────────────────────────────────────────────────

export const TEMAS = {
  matematicas: {
    id: "matematicas",
    acento:       "#f5c842",
    acentoSuave:  "rgba(245,200,66,0.06)",
    acentoMed:    "rgba(245,200,66,0.10)",
    acentoBorde:  "rgba(245,200,66,0.22)",
    acentoFuerte: "rgba(245,200,66,0.35)",
    acentoOpaco:  "rgba(245,200,66,0.28)",
    azul:         "#3b9eff",
    azulSuave:    "rgba(59,158,255,0.07)",
    azulMed:      "rgba(59,158,255,0.10)",
    azulBorde:    "rgba(59,158,255,0.20)",
    azulTexto:    "#b0c8f0",
    verde:        "#4ade80",
    rojo:         "#f87171",
    bg:     "#07080b",
    card:   "rgba(255,255,255,0.04)",
    border: "rgba(255,255,255,0.08)",
    texto: "#f0ece3",
    muted: "#8a8580",
    sub:   "#9a958e",
    mono:        "'IBM Plex Mono', monospace",
    body:        "'DM Sans', sans-serif",
    googleFonts: "family=IBM+Plex+Mono:wght@400;600",
    DecoSVG: TriangulosSVG,
  },

  espanol: {
    id: "espanol",
    acento:       "#6490f5",
    acentoSuave:  "rgba(100,144,245,0.08)",
    acentoMed:    "rgba(100,144,245,0.12)",
    acentoBorde:  "rgba(100,144,245,0.28)",
    acentoFuerte: "rgba(100,144,245,0.40)",
    acentoOpaco:  "rgba(100,144,245,0.28)",
    azul:         "#8aaaf7",
    azulSuave:    "rgba(138,170,247,0.07)",
    azulMed:      "rgba(138,170,247,0.10)",
    azulBorde:    "rgba(138,170,247,0.22)",
    azulTexto:    "#c0d0f8",
    verde:        "#4ade80",
    rojo:         "#f87171",
    bg:     "#1a1b1e",
    card:   "#25262b",
    border: "#33343b",
    texto: "#e2e3e9",
    muted: "#8e9099",
    sub:   "#5a5c65",
    mono:        "'JetBrains Mono', monospace",
    body:        "'Source Serif 4', serif",
    googleFonts: "family=JetBrains+Mono:wght@400;600&family=Source+Serif+4:wght@300;400;600",
    DecoSVG: LibroSVG,
  },

  fisica: {
    id: "fisica",
    // Cyan eléctrico + índigo — ondas, electricidad, energía
    acento:       "#22d3ee",
    acentoSuave:  "rgba(34,211,238,0.06)",
    acentoMed:    "rgba(34,211,238,0.10)",
    acentoBorde:  "rgba(34,211,238,0.22)",
    acentoFuerte: "rgba(34,211,238,0.35)",
    acentoOpaco:  "rgba(34,211,238,0.28)",
    azul:         "#818cf8",
    azulSuave:    "rgba(129,140,248,0.07)",
    azulMed:      "rgba(129,140,248,0.10)",
    azulBorde:    "rgba(129,140,248,0.22)",
    azulTexto:    "#c7d2fe",
    verde:        "#4ade80",
    rojo:         "#f87171",
    bg:     "#070b10",
    card:   "rgba(255,255,255,0.04)",
    border: "rgba(255,255,255,0.08)",
    texto: "#e8f4f8",
    muted: "#607a85",
    sub:   "#405a65",
    mono:        "'IBM Plex Mono', monospace",
    body:        "'DM Sans', sans-serif",
    googleFonts: "family=IBM+Plex+Mono:wght@400;600",
    DecoSVG: OndaSVG,
  },

  biologia: {
    id: "biologia",
    // Esmeralda + verde claro — vida, naturaleza, células
    acento:       "#34d399",
    acentoSuave:  "rgba(52,211,153,0.06)",
    acentoMed:    "rgba(52,211,153,0.10)",
    acentoBorde:  "rgba(52,211,153,0.22)",
    acentoFuerte: "rgba(52,211,153,0.35)",
    acentoOpaco:  "rgba(52,211,153,0.28)",
    azul:         "#86efac",
    azulSuave:    "rgba(134,239,172,0.06)",
    azulMed:      "rgba(134,239,172,0.10)",
    azulBorde:    "rgba(134,239,172,0.20)",
    azulTexto:    "#bbf7d0",
    verde:        "#4ade80",
    rojo:         "#f87171",
    bg:     "#060f09",
    card:   "rgba(255,255,255,0.04)",
    border: "rgba(255,255,255,0.07)",
    texto: "#e8f5ee",
    muted: "#5a8270",
    sub:   "#3a6050",
    mono:        "'IBM Plex Mono', monospace",
    body:        "'DM Sans', sans-serif",
    googleFonts: "family=IBM+Plex+Mono:wght@400;600",
    DecoSVG: HeliceSVG,
  },

  quimica: {
    id: "quimica",
    // Violeta + fucsia — moléculas, reacciones, cristales
    acento:       "#c084fc",
    acentoSuave:  "rgba(192,132,252,0.07)",
    acentoMed:    "rgba(192,132,252,0.11)",
    acentoBorde:  "rgba(192,132,252,0.25)",
    acentoFuerte: "rgba(192,132,252,0.38)",
    acentoOpaco:  "rgba(192,132,252,0.28)",
    azul:         "#f472b6",
    azulSuave:    "rgba(244,114,182,0.06)",
    azulMed:      "rgba(244,114,182,0.10)",
    azulBorde:    "rgba(244,114,182,0.22)",
    azulTexto:    "#f9c0df",
    verde:        "#4ade80",
    rojo:         "#f87171",
    bg:     "#0d0810",
    card:   "rgba(255,255,255,0.04)",
    border: "rgba(192,132,252,0.10)",
    texto: "#f0ecf8",
    muted: "#8a7a9a",
    sub:   "#6a5a7a",
    mono:        "'IBM Plex Mono', monospace",
    body:        "'DM Sans', sans-serif",
    googleFonts: "family=IBM+Plex+Mono:wght@400;600",
    DecoSVG: MoleculaSVG,
  },

  geografia: {
    id: "geografia",
    // Teal + lima — océanos, vegetación, mapas
    acento:       "#2dd4bf",
    acentoSuave:  "rgba(45,212,191,0.06)",
    acentoMed:    "rgba(45,212,191,0.10)",
    acentoBorde:  "rgba(45,212,191,0.22)",
    acentoFuerte: "rgba(45,212,191,0.35)",
    acentoOpaco:  "rgba(45,212,191,0.28)",
    azul:         "#a3e635",
    azulSuave:    "rgba(163,230,53,0.06)",
    azulMed:      "rgba(163,230,53,0.10)",
    azulBorde:    "rgba(163,230,53,0.20)",
    azulTexto:    "#d9f99d",
    verde:        "#4ade80",
    rojo:         "#f87171",
    bg:     "#060e0d",
    card:   "rgba(255,255,255,0.04)",
    border: "rgba(255,255,255,0.07)",
    texto: "#e8f5f4",
    muted: "#5a8880",
    sub:   "#3a6860",
    mono:        "'IBM Plex Mono', monospace",
    body:        "'DM Sans', sans-serif",
    googleFonts: "family=IBM+Plex+Mono:wght@400;600",
    DecoSVG: BrujulaSVG,
  },

  literatura: {
    id: "literatura",
    // Rosa + rosa claro — poesía, narrativa, romanticismo
    acento:       "#fb7185",
    acentoSuave:  "rgba(251,113,133,0.07)",
    acentoMed:    "rgba(251,113,133,0.11)",
    acentoBorde:  "rgba(251,113,133,0.25)",
    acentoFuerte: "rgba(251,113,133,0.38)",
    acentoOpaco:  "rgba(251,113,133,0.28)",
    azul:         "#fda4af",
    azulSuave:    "rgba(253,164,175,0.07)",
    azulMed:      "rgba(253,164,175,0.11)",
    azulBorde:    "rgba(253,164,175,0.22)",
    azulTexto:    "#fecdd3",
    verde:        "#4ade80",
    rojo:         "#f87171",
    bg:     "#100809",
    card:   "rgba(255,255,255,0.04)",
    border: "rgba(251,113,133,0.10)",
    texto: "#f8e8ea",
    muted: "#9a7a7e",
    sub:   "#7a5a5e",
    mono:        "'JetBrains Mono', monospace",
    body:        "'Source Serif 4', serif",
    googleFonts: "family=JetBrains+Mono:wght@400;600&family=Source+Serif+4:wght@300;400;600",
    DecoSVG: PergaminoSVG,
  },

  historia: {
    id: "historia",
    // Naranja + ámbar — tierras antiguas, civilizaciones, pergamino
    acento:       "#f97316",
    acentoSuave:  "rgba(249,115,22,0.07)",
    acentoMed:    "rgba(249,115,22,0.11)",
    acentoBorde:  "rgba(249,115,22,0.25)",
    acentoFuerte: "rgba(249,115,22,0.38)",
    acentoOpaco:  "rgba(249,115,22,0.28)",
    azul:         "#fbbf24",
    azulSuave:    "rgba(251,191,36,0.06)",
    azulMed:      "rgba(251,191,36,0.10)",
    azulBorde:    "rgba(251,191,36,0.22)",
    azulTexto:    "#fde68a",
    verde:        "#4ade80",
    rojo:         "#f87171",
    bg:     "#0f0a06",
    card:   "rgba(255,255,255,0.04)",
    border: "rgba(249,115,22,0.10)",
    texto: "#f8f0e8",
    muted: "#9a8070",
    sub:   "#7a6050",
    mono:        "'JetBrains Mono', monospace",
    body:        "'Source Serif 4', serif",
    googleFonts: "family=JetBrains+Mono:wght@400;600&family=Source+Serif+4:wght@300;400;600",
    DecoSVG: ColumnasSVG,
  },
};

// ── Mapa materia → tema (1:1, sin subtemas) ───────────────────────────────────

const MATERIA_A_TEMA = {
  "Matemáticas": "matematicas",
  "Español":     "espanol",
  "Física":      "fisica",
  "Biología":    "biologia",
  "Química":     "quimica",
  "Geografía":   "geografia",
  "Literatura":  "literatura",
  "Historia":    "historia",
};

export function obtenerTema(materia) {
  const key = MATERIA_A_TEMA[materia] || "matematicas";
  return TEMAS[key];
}

// ── Hook para cargar las fuentes del tema ─────────────────────────────────────

export function useFuentesTema(tema) {
  useEffect(() => {
    if (!tema.googleFonts) return;
    const id = `gfonts-tema-${tema.id}`;
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?${tema.googleFonts}&display=swap`;
    document.head.appendChild(link);
  }, [tema.id]);
}
