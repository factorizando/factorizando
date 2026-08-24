// Sistema de temas por materia para las presentaciones.
// Cada presentación declara `materia` y recibe su tema automáticamente.
/* eslint-disable react-refresh/only-export-components -- este módulo agrupa a propósito SVGs decorativos, el mapa TEMAS y los helpers obtenerTema/useFuentesTema */
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

// ── Los siete acentos ─────────────────────────────────────────────────────────
// Un color por materia, y es lo ÚNICO que cambia entre ellas junto con el dibujo
// de portada: fondo, tipografía, espaciado y densidad son idénticos. Un alumno
// que lleva tres materias debe sentir una plataforma, no tres (docs/DISENO.md §2.5).
//
// Los valores son los de tema oscuro de src/styles/fx.css. Van literales porque
// se usan como atributos `stroke`/`fill` de SVG, y ahí una variable CSS no sirve
// sin pasar por getComputedStyle. Si cambian en fx.css, cambian aquí.
const ACENTOS = {
  matematicas: "#4f92f0", // --fx-math
  espanol:     "#c98bbb", // --fx-ciruela
  fisica:      "#9a91e0", // --fx-indigo
  biologia:    "#6fbe9b", // --fx-sage
  quimica:     "#f08a70", // --fx-coral
  geografia:   "#57b6c8", // --fx-teal
  historia:    "#e8b34d", // --fx-amber
};

// Superficies, texto y tipografía: el bloque `.fx-oscuro` de fx.css, uno solo
// para las siete materias. El fondo no es negro puro a propósito: en videollamada
// el texto claro sobre casi negro se rompe al comprimirse.
const BASE = {
  bg:     "#0e1926",
  card:   "#16222f",
  border: "#243343",
  texto:  "#edf3fa",
  muted:  "#8497ab",
  sub:    "#5e7085",
  verde:  "#4ade80",
  rojo:   "#f87171",
  mono:    "'IBM Plex Mono', ui-monospace, monospace",
  body:    "'Figtree', system-ui, sans-serif",
  titulo:  "'Sora', system-ui, sans-serif",
  formula: "'STIX Two Text', 'Cambria Math', serif",
  googleFonts:
    "family=Sora:wght@400;500;600;700" +
    "&family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400" +
    "&family=IBM+Plex+Mono:wght@400;500;600" +
    "&family=STIX+Two+Text:ital,wght@0,400;0,500;1,400;1,500",
};

// Las cinco opacidades del acento se calculan; antes se tecleaban una por una
// en cada paleta, que es como acababan discrepando entre materias.
function conAlfa(hex, alfa) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alfa})`;
}

// `canales` son los colores con los que los diagramas separan elementos dentro
// de un dibujo. No son marca, y por eso se conservan tal cual estaban: los usan
// 215 archivos. Pasarlos al criterio de «valor y trazo, no matiz» de
// docs/DISENO.md §2.1 es la fase 4D del plan de migración.
function crearTema(id, DecoSVG, canales) {
  const acento = ACENTOS[id];
  return {
    id,
    acento,
    acentoSuave:  conAlfa(acento, 0.07),
    acentoMed:    conAlfa(acento, 0.11),
    acentoBorde:  conAlfa(acento, 0.28),
    acentoFuerte: conAlfa(acento, 0.4),
    acentoOpaco:  conAlfa(acento, 0.28),
    ...canales,
    ...BASE,
    DecoSVG,
  };
}

export const TEMAS = {
  matematicas: crearTema("matematicas", TriangulosSVG, {
    azul: "#3b9eff", azulSuave: "rgba(59,158,255,0.07)", azulMed: "rgba(59,158,255,0.10)", azulBorde: "rgba(59,158,255,0.20)", azulTexto: "#b0c8f0",
  }),
  espanol: crearTema("espanol", LibroSVG, {
    azul: "#8aaaf7", azulSuave: "rgba(138,170,247,0.07)", azulMed: "rgba(138,170,247,0.10)", azulBorde: "rgba(138,170,247,0.22)", azulTexto: "#c0d0f8",
  }),
  fisica: crearTema("fisica", OndaSVG, {
    azul: "#818cf8", azulSuave: "rgba(129,140,248,0.07)", azulMed: "rgba(129,140,248,0.10)", azulBorde: "rgba(129,140,248,0.22)", azulTexto: "#c7d2fe",
  }),
  biologia: crearTema("biologia", HeliceSVG, {
    azul: "#86efac", azulSuave: "rgba(134,239,172,0.06)", azulMed: "rgba(134,239,172,0.10)", azulBorde: "rgba(134,239,172,0.20)", azulTexto: "#bbf7d0",
  }),
  quimica: crearTema("quimica", MoleculaSVG, {
    azul: "#f472b6", azulSuave: "rgba(244,114,182,0.06)", azulMed: "rgba(244,114,182,0.10)", azulBorde: "rgba(244,114,182,0.22)", azulTexto: "#f9c0df",
  }),
  geografia: crearTema("geografia", BrujulaSVG, {
    azul: "#a3e635", azulSuave: "rgba(163,230,53,0.06)", azulMed: "rgba(163,230,53,0.10)", azulBorde: "rgba(163,230,53,0.20)", azulTexto: "#d9f99d",
  }),
  historia: crearTema("historia", ColumnasSVG, {
    azul: "#fbbf24", azulSuave: "rgba(251,191,36,0.06)", azulMed: "rgba(251,191,36,0.10)", azulBorde: "rgba(251,191,36,0.22)", azulTexto: "#fde68a",
  }),
};

// ── Mapa materia → tema (1:1, sin subtemas) ───────────────────────────────────

const MATERIA_A_TEMA = {
  "Matemáticas":            "matematicas",
  "Pensamiento Matemático": "matematicas",  // el área del EXANI-I, no otra materia
  "Matemáticas avanzadas":  "matematicas",
  "Español":                "espanol",
  "Comprensión Lectora":    "espanol",      // no es materia aparte: entra en Español
  "Física":                 "fisica",
  "Biología":               "biologia",
  "Química":                "quimica",
  "Geografía":              "geografia",
  "Historia":               "historia",
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
    // eslint-disable-next-line react-hooks/exhaustive-deps -- tema.id determina por completo a tema.googleFonts
  }, [tema.id]);
}
