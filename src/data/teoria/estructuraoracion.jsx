import React, { useState } from "react";

/* ═══════════════════════════════════════════════════════════
   GUÍA DE ESTRUCTURA DE LA ORACIÓN — EXANI-I
   Tema oscuro basado en EXANI-I_RedaccionIndirecta.html
   9 temas · 5 ejemplos cada uno · 45 oraciones totales
   ═══════════════════════════════════════════════════════════ */

const GRAMMAR_COLORS = {
  articulo: { bg: "#1e3a5f", text: "#93c5fd", label: "Artículo" },
  sustantivo: { bg: "#536bac", text: "#ffffff", label: "Sustantivo" },
  adjetivo: { bg: "#064e3b", text: "#6ee7b7", label: "Adjetivo" },
  verbo: { bg: "#ce5070", text: "#ffffff", label: "Verbo" },
  infinitivo: { bg: "#54aca5", text: "#ffffff", label: "Infinitivo" },
  adverbio: { bg: "#615ea4", text: "#c4b5fd", label: "Adverbio" },
  preposicion: { bg: "#b66f46", text: "#fcd34d", label: "Preposición" },
  conjuncion: { bg: "#884862", text: "#f9a8d4", label: "Conjunción" },
  pronombre: { bg: "#486d7a", text: "#67e8f9", label: "Pronombre" },
  relativo: { bg: "#6d534b", text: "#fdba74", label: "Relativo" },
  nexo: { bg: "#827f7c", text: "#d6d3d1", label: "Nexo" },
};

const Word = ({ text, type, showSP, role }) => {
  const style = GRAMMAR_COLORS[type] || GRAMMAR_COLORS.sustantivo;
  const spClass =
    showSP && role
      ? role === "sujeto"
        ? {
            borderBottom: "3px solid #9aa2b9",
            background: "rgba(201, 59, 135, 0.15)",
            borderRadius: "4px",
            padding: "0 4px",
          }
        : {
            borderBottom: "3px solid #16a34a",
            background: "rgba(22,163,74,0.15)",
            borderRadius: "4px",
            padding: "0 4px",
          }
      : {};

  return (
    <span
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0 3px",
        verticalAlign: "bottom",
        ...spClass,
      }}
    >
      <span
        style={{
          display: "inline-block",
          padding: "4px 10px",
          borderRadius: "6px",
          fontSize: "0.85rem",
          fontWeight: 600,
          boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
          background: style.bg,
          color: style.text,
          fontFamily: "'Source Serif 4', Georgia, serif",
          lineHeight: 1.4,
        }}
      >
        {text}
      </span>
      {!showSP && (
        <span
          style={{
            fontSize: "0.55rem",
            textAlign: "center",
            marginTop: "2px",
            opacity: 0.7,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#8e9099",
          }}
        >
          {style.label}
        </span>
      )}
    </span>
  );
};

const SentenceCard = ({ title, sentence, analysis, spMode }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        background: "#25262b",
        borderRadius: "12px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
        border: "1px solid #33343b",
        overflow: "hidden",
        marginBottom: "28px",
      }}
    >
      <div
        style={{
          padding: "20px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <h3
          style={{
            fontSize: "1.05rem",
            fontWeight: 700,
            color: "#e2e3e9",
            fontFamily: "'Playfair Display', serif",
            margin: 0,
          }}
        >
          {title}
        </h3>
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            fontSize: "0.75rem",
            padding: "6px 16px",
            borderRadius: "8px",
            background: "transparent",
            color: "#6490f5",
            border: "1px solid rgba(100,144,245,0.4)",
            fontFamily: "'Source Serif 4', serif",
            cursor: "pointer",
            fontWeight: 600,
            transition: "all .18s",
          }}
        >
          {expanded ? "Ocultar análisis" : "Ver análisis completo"}
        </button>
      </div>

      <div
        style={{
          padding: "20px 24px",
          background: "#1a1b1e",
          borderTop: "1px solid #33343b",
          borderBottom: "1px solid #33343b",
          lineHeight: 2.4,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "end",
        }}
      >
        {sentence.map((word, idx) => (
          <Word
            key={idx}
            text={word.text}
            type={word.type}
            showSP={spMode}
            role={word.role}
          />
        ))}
      </div>

      {spMode && (
        <div
          style={{
            display: "flex",
            gap: "20px",
            padding: "12px 24px",
            background: "#1e1f23",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.8rem",
              fontWeight: 700,
            }}
          >
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: 4,
                background: "rgba(59,95,201,0.15)",
                borderBottom: "3px solid #3b5fc9",
              }}
            ></div>
            <span style={{ color: "#8aaaf7" }}>Sujeto</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.8rem",
              fontWeight: 700,
            }}
          >
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: 4,
                background: "rgba(22,163,74,0.15)",
                borderBottom: "3px solid #16a34a",
              }}
            ></div>
            <span style={{ color: "#4ade80" }}>Predicado</span>
          </div>
        </div>
      )}

      {!spMode && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            padding: "12px 24px",
            background: "#1e1f23",
          }}
        >
          {Object.entries(GRAMMAR_COLORS).map(([key, val]) => (
            <span
              key={key}
              style={{
                fontSize: "0.65rem",
                padding: "3px 8px",
                borderRadius: "4px",
                fontWeight: 600,
                background: val.bg,
                color: val.text,
              }}
            >
              {val.label}
            </span>
          ))}
        </div>
      )}

      {expanded && (
        <div
          style={{
            padding: "20px 24px",
            background: "#1e1f23",
            borderTop: "1px solid #33343b",
          }}
        >
          <h4
            style={{
              fontSize: "0.9rem",
              fontWeight: 700,
              color: "#e2e3e9",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                background: "#6366f1",
                borderRadius: "50%",
                display: "inline-block",
              }}
            ></span>
            Análisis sintáctico completo
          </h4>
          <pre
            style={{
              whiteSpace: "pre-wrap",
              fontFamily: "'Source Serif 4', Georgia, serif",
              fontSize: "0.85rem",
              color: "#8e9099",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {analysis}
          </pre>
        </div>
      )}
    </div>
  );
};

const categories = [
  {
    id: "sujeto-predicado",
    name: "Identificar sujeto o predicado completo",
    description:
      "Distingue el sujeto (de quien se habla) del predicado (lo que se dice de él).",
    examples: [
      {
        title: "Ejemplo 1: Oración bimembre simple",
        sentence: [
          { text: "El", type: "articulo", role: "sujeto" },
          { text: "alumno", type: "sustantivo", role: "sujeto" },
          { text: "estudioso", type: "adjetivo", role: "sujeto" },
          { text: "aprobó", type: "verbo", role: "predicado" },
          { text: "el", type: "articulo", role: "predicado" },
          { text: "examen", type: "sustantivo", role: "predicado" },
        ],
        analysis:
          'SUJETO COMPLETO: "El alumno estudioso" (determinante + núcleo + modificador directo).\nPREDICADO COMPLETO: "aprobó el examen" (núcleo verbal + objeto directo).\nEl sujeto es el tema de la oración; el predicado, lo que se afirma sobre ese tema.',
      },
      {
        title: "Ejemplo 2: Sujeto simple, predicado extenso",
        sentence: [
          { text: "Los", type: "articulo", role: "sujeto" },
          { text: "profesores", type: "sustantivo", role: "sujeto" },
          { text: "explicaron", type: "verbo", role: "predicado" },
          { text: "la", type: "articulo", role: "predicado" },
          { text: "lección", type: "sustantivo", role: "predicado" },
          { text: "con", type: "preposicion", role: "predicado" },
          { text: "mucha", type: "adjetivo", role: "predicado" },
          { text: "paciencia", type: "sustantivo", role: "predicado" },
        ],
        analysis:
          'SUJETO COMPLETO: "Los profesores" (sintagma nominal simple).\nPREDICADO COMPLETO: "explicaron la lección con mucha paciencia" (verbo + OD + complemento circunstancial de modo).\nEl predicado incluye no solo el verbo, sino todos sus complementos.',
      },
      {
        title: "Ejemplo 3: Sujeto con complemento del nombre",
        sentence: [
          { text: "La", type: "articulo", role: "sujeto" },
          { text: "biblioteca", type: "sustantivo", role: "sujeto" },
          { text: "de", type: "preposicion", role: "sujeto" },
          { text: "la", type: "articulo", role: "sujeto" },
          { text: "escuela", type: "sustantivo", role: "sujeto" },
          { text: "es", type: "verbo", role: "predicado" },
          { text: "muy", type: "adverbio", role: "predicado" },
          { text: "grande", type: "adjetivo", role: "predicado" },
        ],
        analysis:
          'SUJETO COMPLETO: "La biblioteca de la escuela" (núcleo: biblioteca; complemento del nombre: de la escuela).\nPREDICADO COMPLETO: "es muy grande" (verbo copulativo + atributo/modificador adverbial).\nAtención: todo lo que acompaña al núcleo del sujeto forma parte del sujeto completo.',
      },
      {
        title: "Ejemplo 4: Sujeto con posesivo y predicado con CC de lugar",
        sentence: [
          { text: "Mi", type: "pronombre", role: "sujeto" },
          { text: "hermana", type: "sustantivo", role: "sujeto" },
          { text: "mayor", type: "adjetivo", role: "sujeto" },
          { text: "vive", type: "verbo", role: "predicado" },
          { text: "en", type: "preposicion", role: "predicado" },
          { text: "Barcelona", type: "sustantivo", role: "predicado" },
          { text: "desde", type: "preposicion", role: "predicado" },
          { text: "el", type: "articulo", role: "predicado" },
          { text: "año", type: "sustantivo", role: "predicado" },
          { text: "pasado", type: "adjetivo", role: "predicado" },
        ],
        analysis:
          'SUJETO COMPLETO: "Mi hermana mayor" (posesivo + núcleo + modificador).\nPREDICADO COMPLETO: "vive en Barcelona desde el año pasado" (verbo + CC de lugar + CC de tiempo).\nEl posesivo "Mi" funciona como determinante del núcleo del sujeto.',
      },
      {
        title:
          "Ejemplo 5: Sujeto con adjetivo + predicado con perífrasis pasiva",
        sentence: [
          { text: "La", type: "articulo", role: "sujeto" },
          { text: "conferencia", type: "sustantivo", role: "sujeto" },
          { text: "internacional", type: "adjetivo", role: "sujeto" },
          { text: "será", type: "verbo", role: "predicado" },
          { text: "inaugurada", type: "verbo", role: "predicado" },
          { text: "mañana", type: "sustantivo", role: "predicado" },
        ],
        analysis:
          'SUJETO COMPLETO: "La conferencia internacional" (determinante + núcleo + modificador).\nPREDICADO COMPLETO: "será inaugurada mañana" (perífrasis pasiva con ser + participio + CC de tiempo).\nEl sujeto "conferencia" es el paciente de la acción (pasiva).',
      },
    ],
  },
  {
    id: "nucleo",
    name: "Encontrar el núcleo del sujeto o predicado",
    description:
      "Identifica la palabra principal del sujeto (generalmente un sustantivo) y la del predicado (el verbo).",
    examples: [
      {
        title: "Ejemplo 1: Núcleos bien definidos",
        sentence: [
          { text: "Los", type: "articulo", role: "sujeto" },
          { text: "estudiantes", type: "sustantivo", role: "sujeto" },
          { text: "mexicanos", type: "adjetivo", role: "sujeto" },
          { text: "presentarán", type: "verbo", role: "predicado" },
          { text: "el", type: "articulo", role: "predicado" },
          { text: "EXANI-I", type: "sustantivo", role: "predicado" },
        ],
        analysis:
          'NÚCLEO DEL SUJETO (NS): "estudiantes" (sustantivo común, plural; es la palabra sobre la que gira el sujeto).\nNÚCLEO DEL PREDICADO (NP): "presentarán" (verbo en futuro; es el elemento indispensable del predicado).\n"Los" y "mexicanos" son modificadores del núcleo del sujeto. "El EXANI-I" es objeto directo del núcleo del predicado.',
      },
      {
        title: "Ejemplo 2: Sujeto con preposición",
        sentence: [
          { text: "El", type: "articulo", role: "sujeto" },
          { text: "examen", type: "sustantivo", role: "sujeto" },
          { text: "de", type: "preposicion", role: "sujeto" },
          { text: "admisión", type: "sustantivo", role: "sujeto" },
          { text: "es", type: "verbo", role: "predicado" },
          { text: "fundamental", type: "adjetivo", role: "predicado" },
        ],
        analysis:
          'NÚCLEO DEL SUJETO: "examen" (sustantivo; el complemento del nombre "de admisión" depende de él).\nNÚCLEO DEL PREDICADO: "es" (verbo copulativo; une al sujeto con su atributo "fundamental").\nRecuerda: el núcleo del predicado siempre es un verbo.',
      },
      {
        title: "Ejemplo 3: Sujeto plural complejo",
        sentence: [
          { text: "Las", type: "articulo", role: "sujeto" },
          { text: "materias", type: "sustantivo", role: "sujeto" },
          { text: "difíciles", type: "adjetivo", role: "sujeto" },
          { text: "requieren", type: "verbo", role: "predicado" },
          { text: "más", type: "adverbio", role: "predicado" },
          { text: "estudio", type: "sustantivo", role: "predicado" },
        ],
        analysis:
          'NÚCLEO DEL SUJETO: "materias" (sustantivo plural; modificado por el adjetivo "difíciles" y el artículo "las").\nNÚCLEO DEL PREDICADO: "requieren" (verbo plural que concuerda en número con el sujeto).\nConcordancia: plural del sujeto ↔ plural del verbo.',
      },
      {
        title: "Ejemplo 4: Sujeto con nombre propio y modificadores",
        sentence: [
          { text: "El", type: "articulo", role: "sujeto" },
          { text: "profesor", type: "sustantivo", role: "sujeto" },
          { text: "Rodríguez", type: "sustantivo", role: "sujeto" },
          { text: "de", type: "preposicion", role: "sujeto" },
          { text: "matemáticas", type: "sustantivo", role: "sujeto" },
          { text: "explicó", type: "verbo", role: "predicado" },
          { text: "el", type: "articulo", role: "predicado" },
          { text: "teorema", type: "sustantivo", role: "predicado" },
        ],
        analysis:
          'NÚCLEO DEL SUJETO: "profesor" (sustantivo común; "Rodríguez" es aposición y "de matemáticas" es complemento del nombre).\nNÚCLEO DEL PREDICADO: "explicó" (verbo en pretérito indefinido; aporta la acción).\nEl apellido "Rodríguez" no es el núcleo; es un modificador que identifica al profesor.',
      },
      {
        title: "Ejemplo 5: Predicado con verbo copulativo y atributo complejo",
        sentence: [
          { text: "Los", type: "articulo", role: "sujeto" },
          { text: "candidatos", type: "sustantivo", role: "sujeto" },
          { text: "parecen", type: "verbo", role: "predicado" },
          { text: "muy", type: "adverbio", role: "predicado" },
          { text: "preparados", type: "adjetivo", role: "predicado" },
          { text: "para", type: "preposicion", role: "predicado" },
          { text: "el", type: "articulo", role: "predicado" },
          { text: "debate", type: "sustantivo", role: "predicado" },
        ],
        analysis:
          'NÚCLEO DEL SUJETO: "candidatos" (sustantivo plural; modificado por el artículo "los").\nNÚCLEO DEL PREDICADO: "parecen" (verbo copulativo semántico; une al sujeto con su atributo).\nEl atributo completo es "muy preparados para el debate" (adjetivo + modificador adverbial + complemento preposicional).',
      },
    ],
  },
  {
    id: "sujetos-especiales",
    name: "Sujetos pospuestos, compuestos e impersonales",
    description:
      "Reconoce cuando el sujeto va después del verbo, cuando hay varios sujetos, o cuando no hay sujeto agente.",
    examples: [
      {
        title: "Ejemplo 1: Sujeto pospuesto",
        sentence: [
          { text: "Llegaron", type: "verbo", role: "predicado" },
          { text: "los", type: "articulo", role: "sujeto" },
          { text: "resultados", type: "sustantivo", role: "sujeto" },
          { text: "del", type: "articulo", role: "sujeto" },
          { text: "examen", type: "sustantivo", role: "sujeto" },
        ],
        analysis:
          'SUJETO POSPUESTO: "los resultados del examen" (aparece después del verbo "llegaron").\nNÚCLEO DEL SUJETO: "resultados".\nUso: común en narrativa o para dar énfasis al verbo. La concordancia sigue siendo normal (3ª persona plural).',
      },
      {
        title: "Ejemplo 2: Sujeto compuesto",
        sentence: [
          { text: "Juan", type: "sustantivo", role: "sujeto" },
          { text: "y", type: "conjuncion", role: "sujeto" },
          { text: "María", type: "sustantivo", role: "sujeto" },
          { text: "estudiaron", type: "verbo", role: "predicado" },
          { text: "toda", type: "adjetivo", role: "predicado" },
          { text: "la", type: "articulo", role: "predicado" },
          { text: "noche", type: "sustantivo", role: "predicado" },
        ],
        analysis:
          'SUJETO COMPUESTO: "Juan y María" (dos núcleos unidos por la conjunción copulativa "y").\nNÚCLEOS: Juan (propio, masculino) y María (propio, femenino).\nEl verbo "estudiaron" concuerda en plural porque el sujeto es plural por suma de elementos.',
      },
      {
        title: "Ejemplo 3: Sujeto impersonal",
        sentence: [
          { text: "Llueve", type: "verbo", role: "predicado" },
          { text: "mucho", type: "adverbio", role: "predicado" },
          { text: "en", type: "preposicion", role: "predicado" },
          { text: "verano", type: "sustantivo", role: "predicado" },
        ],
        analysis:
          'ORACIÓN IMPERSONAL: no tiene sujeto agente explícito ni tácito.\nEl verbo "llover" es un verbo impersonal en español; solo se conjuga en 3ª persona singular.\nNo se puede responder a "¿quién llueve?"; por eso carece de sujeto.',
      },
      {
        title: "Ejemplo 4: Sujeto pospuesto con adjetivo",
        sentence: [
          { text: "Terminó", type: "verbo", role: "predicado" },
          { text: "la", type: "articulo", role: "sujeto" },
          { text: "reunión", type: "sustantivo", role: "sujeto" },
          { text: "de", type: "preposicion", role: "sujeto" },
          { text: "emergencia", type: "sustantivo", role: "sujeto" },
          { text: "a", type: "preposicion", role: "predicado" },
          { text: "media", type: "adjetivo", role: "predicado" },
          { text: "noche", type: "sustantivo", role: "predicado" },
        ],
        analysis:
          'SUJETO POSPUESTO: "la reunión de emergencia" (aparece después del verbo "terminó").\nNÚCLEO DEL SUJETO: "reunión".\nEl sujeto pospuesto es frecuente con verbos de inicio o fin (empezar, terminar, acabar) para dar énfasis al proceso.',
      },
      {
        title: "Ejemplo 5: Sujeto compuesto con tres elementos",
        sentence: [
          { text: "Ana", type: "sustantivo", role: "sujeto" },
          { text: ",", type: "nexo", role: "sujeto" },
          { text: "Pedro", type: "sustantivo", role: "sujeto" },
          { text: "y", type: "conjuncion", role: "sujeto" },
          { text: "Luisa", type: "sustantivo", role: "sujeto" },
          { text: "entregaron", type: "verbo", role: "predicado" },
          { text: "sus", type: "pronombre", role: "predicado" },
          { text: "proyectos", type: "sustantivo", role: "predicado" },
          { text: "a", type: "preposicion", role: "predicado" },
          { text: "tiempo", type: "sustantivo", role: "predicado" },
        ],
        analysis:
          'SUJETO COMPUESTO: "Ana, Pedro y Luisa" (tres núcleos coordinados; las comas separan los primeros elementos y "y" une el último).\nNÚCLEOS: Ana, Pedro, Luisa.\nEl verbo "entregaron" va en plural porque suma tres sujetos. La coma antes de "y" es opcional pero recomendada en series de tres o más elementos (coma serial u oxford).',
      },
    ],
  },
  {
    id: "pasiva-refleja",
    name: "Pasiva refleja (se venden)",
    description:
      'Identifica la construcción con "se" que sustituye a la pasiva con "ser".',
    examples: [
      {
        title: "Ejemplo 1: Pasiva refleja típica",
        sentence: [
          { text: "Se", type: "pronombre", role: "predicado" },
          { text: "venden", type: "verbo", role: "predicado" },
          { text: "libros", type: "sustantivo", role: "sujeto" },
          { text: "usados", type: "adjetivo", role: "sujeto" },
        ],
        analysis:
          'PASIVA REFLEJA: "Se venden" (sustituye a "Son vendidos").\nSUJETO: "libros usados" (el sujeto paciente; recibe la acción).\nNÚCLEO DEL SUJETO: "libros".\nEl "se" es un pronombre átono que indica voz pasiva; el verbo concuerda con el sujeto paciente (3ª persona plural).',
      },
      {
        title: "Ejemplo 2: Pasiva refleja con adjetivo",
        sentence: [
          { text: "Se", type: "pronombre", role: "predicado" },
          { text: "alquilan", type: "verbo", role: "predicado" },
          { text: "apartamentos", type: "sustantivo", role: "sujeto" },
          { text: "amueblados", type: "adjetivo", role: "sujeto" },
        ],
        analysis:
          'PASIVA REFLEJA: "Se alquilan" (equivalente a "Son alquilados").\nSUJETO PACIENTE: "apartamentos amueblados".\nConcordancia: "se alquilan" (plural) ↔ "apartamentos" (plural).\nDiferencia con reflexivo: aquí el sujeto no realiza la acción sobre sí mismo.',
      },
      {
        title: "Ejemplo 3: Pasiva refleja singular",
        sentence: [
          { text: "Se", type: "pronombre", role: "predicado" },
          { text: "busca", type: "verbo", role: "predicado" },
          { text: "secretaria", type: "sustantivo", role: "sujeto" },
          { text: "bilingüe", type: "adjetivo", role: "sujeto" },
        ],
        analysis:
          'PASIVA REFLEJA: "Se busca" (equivalente a "Es buscada").\nSUJETO: "secretaria bilingüe" (sujeto paciente, femenino singular).\nConcordancia: "se busca" (3ª persona singular) ↔ "secretaria" (singular).\nEsta construcción es muy frecuente en anuncios y lenguaje periodístico.',
      },
      {
        title: "Ejemplo 4: Pasiva refleja con CC de lugar",
        sentence: [
          { text: "Se", type: "pronombre", role: "predicado" },
          { text: "reparan", type: "verbo", role: "predicado" },
          { text: "computadoras", type: "sustantivo", role: "sujeto" },
          { text: "en", type: "preposicion", role: "predicado" },
          { text: "el", type: "articulo", role: "predicado" },
          { text: "taller", type: "sustantivo", role: "predicado" },
          { text: "especializado", type: "adjetivo", role: "predicado" },
        ],
        analysis:
          'PASIVA REFLEJA: "Se reparan" (equivalente a "Son reparadas").\nSUJETO PACIENTE: "computadoras" (plural).\nCC de lugar: "en el taller especializado".\nConcordancia: "se reparan" (plural) ↔ "computadoras" (plural). El complemento circunstancial no afecta la concordancia.',
      },
      {
        title: "Ejemplo 5: Pasiva refleja con complemento preposicional",
        sentence: [
          { text: "Se", type: "pronombre", role: "predicado" },
          { text: "necesitan", type: "verbo", role: "predicado" },
          { text: "voluntarios", type: "sustantivo", role: "sujeto" },
          { text: "para", type: "preposicion", role: "predicado" },
          { text: "la", type: "articulo", role: "predicado" },
          { text: "campaña", type: "sustantivo", role: "predicado" },
          { text: "de", type: "preposicion", role: "predicado" },
          { text: "reciclaje", type: "sustantivo", role: "predicado" },
        ],
        analysis:
          'PASIVA REFLEJA: "Se necesitan" (equivalente a "Son necesitados").\nSUJETO PACIENTE: "voluntarios" (masculino plural).\nCC de finalidad: "para la campaña de reciclaje".\nConcordancia: "se necesitan" (plural) ↔ "voluntarios" (plural).',
      },
    ],
  },
  {
    id: "subordinadas-relativo",
    name: "Sujetos con subordinadas de relativo",
    description:
      "Detecta cuando el sujeto incluye una subordinada adjetiva introducida por pronombre relativo.",
    examples: [
      {
        title: 'Ejemplo 1: Relativo "que"',
        sentence: [
          { text: "El", type: "articulo", role: "sujeto" },
          { text: "estudiante", type: "sustantivo", role: "sujeto" },
          { text: "que", type: "relativo", role: "sujeto" },
          { text: "aprobó", type: "verbo", role: "sujeto" },
          { text: "el", type: "articulo", role: "sujeto" },
          { text: "examen", type: "sustantivo", role: "sujeto" },
          { text: "recibió", type: "verbo", role: "predicado" },
          { text: "una", type: "articulo", role: "predicado" },
          { text: "beca", type: "sustantivo", role: "predicado" },
        ],
        analysis:
          'SUJETO COMPLEJO: "El estudiante que aprobó el examen".\n  - Núcleo del sujeto: "estudiante".\n  - Subordinada de relativo: "que aprobó el examen" (funciona como adjetivo del núcleo).\nPRONOMBRE RELATIVO: "que" (se refiere a "estudiante" y enlaza la subordinada con el núcleo).\nPREDICADO: "recibió una beca".',
      },
      {
        title: "Ejemplo 2: Relativo con antecedente plural",
        sentence: [
          { text: "Los", type: "articulo", role: "sujeto" },
          { text: "libros", type: "sustantivo", role: "sujeto" },
          { text: "que", type: "relativo", role: "sujeto" },
          { text: "compré", type: "verbo", role: "sujeto" },
          { text: "son", type: "verbo", role: "predicado" },
          { text: "muy", type: "adverbio", role: "predicado" },
          { text: "útiles", type: "adjetivo", role: "predicado" },
        ],
        analysis:
          'SUJETO: "Los libros que compré".\n  - Núcleo: "libros".\n  - Subordinada de relativo especificativa: "que compré" (determina qué libros).\n"Que" es pronombre relativo (no conjunción) porque tiene antecedente ("libros") y función sintáctica en la subordinada (objeto directo de "compré").\nConcordancia: plural del sujeto ↔ plural del verbo principal "son".',
      },
      {
        title: 'Ejemplo 3: Relativo de lugar "donde"',
        sentence: [
          { text: "La", type: "articulo", role: "sujeto" },
          { text: "escuela", type: "sustantivo", role: "sujeto" },
          { text: "donde", type: "relativo", role: "sujeto" },
          { text: "estudié", type: "verbo", role: "sujeto" },
          { text: "es", type: "verbo", role: "predicado" },
          { text: "reconocida", type: "adjetivo", role: "predicado" },
        ],
        analysis:
          'SUJETO: "La escuela donde estudié".\n  - Núcleo: "escuela".\n  - Subordinada de relativo: "donde estudié" (especificativa).\nPRONOMBRE RELATIVO: "donde" (= en la que).\nFunción: complemento circunstancial de lugar dentro de la subordinada.\nEl verbo principal "es" concuerda con el núcleo del sujeto "escuela" (singular).',
      },
      {
        title: 'Ejemplo 4: Relativo posesivo "cuyo"',
        sentence: [
          { text: "El", type: "articulo", role: "sujeto" },
          { text: "estudiante", type: "sustantivo", role: "sujeto" },
          { text: "cuya", type: "relativo", role: "sujeto" },
          { text: "tesis", type: "sustantivo", role: "sujeto" },
          { text: "fue", type: "verbo", role: "sujeto" },
          { text: "premiada", type: "adjetivo", role: "sujeto" },
          { text: "recibió", type: "verbo", role: "predicado" },
          { text: "una", type: "articulo", role: "predicado" },
          { text: "beca", type: "sustantivo", role: "predicado" },
          { text: "completa", type: "adjetivo", role: "predicado" },
        ],
        analysis:
          'SUJETO COMPLEJO: "El estudiante cuya tesis fue premiada".\n  - Núcleo del sujeto: "estudiante".\n  - Subordinada de relativo con posesivo: "cuya tesis fue premiada".\nPRONOMBRE RELATIVO POSESIVO: "cuya" (concuerda en género y número con "tesis": femenino singular).\n"Cuyo/cuya/cuyos/cuyas" siempre concuerdan con el poseso, no con el poseedor.',
      },
      {
        title: 'Ejemplo 5: Relativo personal "quien"',
        sentence: [
          { text: "La", type: "articulo", role: "sujeto" },
          { text: "doctora", type: "sustantivo", role: "sujeto" },
          { text: "quien", type: "relativo", role: "sujeto" },
          { text: "dirigió", type: "verbo", role: "sujeto" },
          { text: "la", type: "articulo", role: "sujeto" },
          { text: "investigación", type: "sustantivo", role: "sujeto" },
          { text: "publicó", type: "verbo", role: "predicado" },
          { text: "los", type: "articulo", role: "predicado" },
          { text: "resultados", type: "sustantivo", role: "predicado" },
        ],
        analysis:
          'SUJETO COMPLEJO: "La doctora quien dirigió la investigación".\n  - Núcleo: "doctora".\n  - Subordinada de relativo: "quien dirigió la investigación".\nPRONOMBRE RELATIVO PERSONAL: "quien" (se refiere exclusivamente a personas; equivalente a "que" pero más enfático).\nEl verbo principal "publicó" concuerda con "doctora" (singular).',
      },
    ],
  },
  {
    id: "perifrasis",
    name: "Perífrasis verbales (ha aprobado)",
    description:
      "Reconoce las construcciones de verbo auxiliar + infinitivo/gerundio/participio.",
    examples: [
      {
        title: "Ejemplo 1: Pretérito perfecto compuesto",
        sentence: [
          { text: "El", type: "articulo", role: "sujeto" },
          { text: "alumno", type: "sustantivo", role: "sujeto" },
          { text: "ha", type: "verbo", role: "predicado" },
          { text: "aprobado", type: "verbo", role: "predicado" },
          { text: "todas", type: "adjetivo", role: "predicado" },
          { text: "las", type: "articulo", role: "predicado" },
          { text: "materias", type: "sustantivo", role: "predicado" },
        ],
        analysis:
          'PERÍFRASIS VERBAL: "ha aprobado" (auxiliar "haber" + participio "aprobado").\n  - Verbo auxiliar: "ha" (3ª persona singular de "haber").\n  - Verbo principal: "aprobado" (participio que aporta el significado léxico).\nFunción: forma el pretérito perfecto compuesto (acción pasada con relevancia presente).\nSUJETO: "El alumno". OD: "todas las materias".',
      },
      {
        title: "Ejemplo 2: Perífrasis modal (deber + inf.)",
        sentence: [
          { text: "(Tú)", type: "pronombre", role: "sujeto" },
          { text: "Debes", type: "verbo", role: "predicado" },
          { text: "estudiar", type: "infinitivo", role: "predicado" },
          { text: "más", type: "adverbio", role: "predicado" },
          { text: "para", type: "preposicion", role: "predicado" },
          { text: "el", type: "articulo", role: "predicado" },
          { text: "examen", type: "sustantivo", role: "predicado" },
        ],
        analysis:
          'PERÍFRASIS VERBAL: "Debes estudiar" (auxiliar modal "deber" + infinitivo "estudiar").\n  - "Debes": verbo auxiliar que indica obligación.\n  - "estudiar": verbo en infinitivo (núcleo de la perífrasis; aporta el significado).\nSUJETO TÁCITO: "tú" (2ª persona singular, no expresado).\nCC de finalidad: "para el examen".',
      },
      {
        title: "Ejemplo 3: Perífrasis de futuro (ir a + inf.)",
        sentence: [
          { text: "(Yo)", type: "pronombre", role: "sujeto" },
          { text: "Voy", type: "verbo", role: "predicado" },
          { text: "a", type: "preposicion", role: "predicado" },
          { text: "presentar", type: "infinitivo", role: "predicado" },
          { text: "el", type: "articulo", role: "predicado" },
          { text: "EXANI-I", type: "sustantivo", role: "predicado" },
          { text: "el", type: "articulo", role: "predicado" },
          { text: "mes", type: "sustantivo", role: "predicado" },
          { text: "próximo", type: "adjetivo", role: "predicado" },
        ],
        analysis:
          'PERÍFRASIS VERBAL: "Voy a presentar" (perífrasis de infinitivo "ir a + infinitivo").\n  - Verbo auxiliar: "Voy" (de "ir"; indica proximidad temporal).\n  - Preposición: "a" (elemento de enlace obligatorio).\n  - Verbo principal: "presentar" (infinitivo).\nFunción: expresa acción futura inmediata.\nSUJETO TÁCITO: "yo".',
      },
      {
        title: "Ejemplo 4: Perífrasis de gerundio (estar + gerundio)",
        sentence: [
          { text: "El", type: "articulo", role: "sujeto" },
          { text: "comité", type: "sustantivo", role: "sujeto" },
          { text: "está", type: "verbo", role: "predicado" },
          { text: "analizando", type: "verbo", role: "predicado" },
          { text: "las", type: "articulo", role: "predicado" },
          { text: "propuestas", type: "sustantivo", role: "predicado" },
          { text: "de", type: "preposicion", role: "predicado" },
          { text: "los", type: "articulo", role: "predicado" },
          { text: "estudiantes", type: "sustantivo", role: "predicado" },
        ],
        analysis:
          'PERÍFRASIS VERBAL: "está analizando" (perífrasis de gerundio "estar + gerundio").\n  - Verbo auxiliar: "está" (de "estar"; indica situación o proceso en desarrollo).\n  - Verbo principal: "analizando" (gerundio que aporta el significado léxico).\nFunción: expresa una acción en progreso en el momento presente.\nSUJETO: "El comité".',
      },
      {
        title: "Ejemplo 5: Perífrasis de obligación (tener que + inf.)",
        sentence: [
          { text: "Los", type: "articulo", role: "sujeto" },
          { text: "alumnos", type: "sustantivo", role: "sujeto" },
          { text: "tienen", type: "verbo", role: "predicado" },
          { text: "que", type: "conjuncion", role: "predicado" },
          { text: "entregar", type: "infinitivo", role: "predicado" },
          { text: "el", type: "articulo", role: "predicado" },
          { text: "ensayo", type: "sustantivo", role: "predicado" },
          { text: "el", type: "articulo", role: "predicado" },
          { text: "viernes", type: "sustantivo", role: "predicado" },
        ],
        analysis:
          'PERÍFRASIS VERBAL: "tienen que entregar" (perífrasis de obligación "tener que + infinitivo").\n  - Verbo auxiliar: "tienen" (de "tener"; indica obligación o necesidad).\n  - Nexo obligatorio: "que".\n  - Verbo principal: "entregar" (infinitivo).\nSUJETO: "Los alumnos".\nCC de tiempo: "el viernes".',
      },
    ],
  },
  {
    id: "coordinados-negativos",
    name: "Sujetos coordinados negativos (ni...ni)",
    description:
      "Identifica sujetos unidos por conjunciones negativas correlativas.",
    examples: [
      {
        title: "Ejemplo 1: Coordinación negativa simple",
        sentence: [
          { text: "Ni", type: "conjuncion", role: "sujeto" },
          { text: "Pedro", type: "sustantivo", role: "sujeto" },
          { text: "ni", type: "conjuncion", role: "sujeto" },
          { text: "Ana", type: "sustantivo", role: "sujeto" },
          { text: "aprobaron", type: "verbo", role: "predicado" },
          { text: "el", type: "articulo", role: "predicado" },
          { text: "examen", type: "sustantivo", role: "predicado" },
        ],
        analysis:
          'SUJETO COMPUESTO COORDINADO NEGATIVO: "Ni Pedro ni Ana".\n  - Núcleos coordinados: Pedro, Ana.\n  - Conjunciones negativas correlativas: "ni... ni".\nEl verbo "aprobaron" va en plural porque suma dos sujetos, aunque sean negados.\nSignificado: excluye a ambos de la acción.',
      },
      {
        title: "Ejemplo 2: Coordinación con sujetos animados e inanimados",
        sentence: [
          { text: "Ni", type: "conjuncion", role: "sujeto" },
          { text: "el", type: "articulo", role: "sujeto" },
          { text: "sol", type: "sustantivo", role: "sujeto" },
          { text: "ni", type: "conjuncion", role: "sujeto" },
          { text: "la", type: "articulo", role: "sujeto" },
          { text: "lluvia", type: "sustantivo", role: "sujeto" },
          { text: "detuvieron", type: "verbo", role: "predicado" },
          { text: "el", type: "articulo", role: "predicado" },
          { text: "evento", type: "sustantivo", role: "predicado" },
        ],
        analysis:
          'SUJETO COMPUESTO: "Ni el sol ni la lluvia".\n  - Sintagmas coordinados: "el sol" y "la lluvia".\n  - Conjunción negativa: "ni... ni".\nConcordancia: dos sujetos singulares coordinados con "ni... ni" exigen verbo en plural ("detuvieron").\nEstructura: [SN1] + ni + [SN2] + ni + [Verbo plural].',
      },
      {
        title: "Ejemplo 3: Coordinación de grupos nominales",
        sentence: [
          { text: "Ni", type: "conjuncion", role: "sujeto" },
          { text: "los", type: "articulo", role: "sujeto" },
          { text: "profesores", type: "sustantivo", role: "sujeto" },
          { text: "ni", type: "conjuncion", role: "sujeto" },
          { text: "los", type: "articulo", role: "sujeto" },
          { text: "alumnos", type: "sustantivo", role: "sujeto" },
          { text: "cancelaron", type: "verbo", role: "predicado" },
          { text: "las", type: "articulo", role: "predicado" },
          { text: "clases", type: "sustantivo", role: "predicado" },
        ],
        analysis:
          'SUJETO COMPUESTO: "Ni los profesores ni los alumnos".\n  - Dos sintagmas nominales plurales coordinados negativamente.\n  - Núcleos: "profesores" y "alumnos".\nEl verbo "cancelaron" concuerda en plural con la suma de ambos grupos.\nImportante: la doble negación no anula el significado; refuerza la exclusión.',
      },
      {
        title: "Ejemplo 4: Coordinación negativa con tres elementos",
        sentence: [
          { text: "Ni", type: "conjuncion", role: "sujeto" },
          { text: "el", type: "articulo", role: "sujeto" },
          { text: "sol", type: "sustantivo", role: "sujeto" },
          { text: ",", type: "nexo", role: "sujeto" },
          { text: "ni", type: "conjuncion", role: "sujeto" },
          { text: "la", type: "articulo", role: "sujeto" },
          { text: "luna", type: "sustantivo", role: "sujeto" },
          { text: "ni", type: "conjuncion", role: "sujeto" },
          { text: "las", type: "articulo", role: "sujeto" },
          { text: "estrellas", type: "sustantivo", role: "sujeto" },
          { text: "iluminaban", type: "verbo", role: "predicado" },
          { text: "la", type: "articulo", role: "predicado" },
          { text: "noche", type: "sustantivo", role: "predicado" },
        ],
        analysis:
          'SUJETO COMPUESTO: "Ni el sol, ni la luna ni las estrellas" (tres sintagmas coordinados negativamente).\n  - Núcleos: sol, luna, estrellas.\n  - Conjunciones negativas: "ni... ni... ni".\nEl verbo "iluminaban" va en plural porque suma tres sujetos. La coma antes del segundo "ni" es opcional pero recomendada para claridad.',
      },
      {
        title:
          "Ejemplo 5: Coordinación negativa con verbo en singular (disyuntiva)",
        sentence: [
          { text: "Ni", type: "conjuncion", role: "sujeto" },
          { text: "Juan", type: "sustantivo", role: "sujeto" },
          { text: "ni", type: "conjuncion", role: "sujeto" },
          { text: "Pedro", type: "sustantivo", role: "sujeto" },
          { text: "sabe", type: "verbo", role: "predicado" },
          { text: "la", type: "articulo", role: "predicado" },
          { text: "respuesta", type: "sustantivo", role: "predicado" },
          { text: "correcta", type: "adjetivo", role: "predicado" },
        ],
        analysis:
          'SUJETO COMPUESTO: "Ni Juan ni Pedro".\n  - Núcleos: Juan, Pedro.\n  - Conjunción negativa: "ni... ni".\nEl verbo "sabe" va en singular porque la negación correlativa "ni... ni" puede expresar exclusión alternativa (uno u otro, pero no ambos). En este contexto, cada uno individualmente desconoce la respuesta, por lo que el singular es aceptable aunque el plural también lo sería.',
      },
    ],
  },
  {
    id: "sujeto-oracional",
    name: "Sujeto oracional (infinitivo como sujeto)",
    description:
      "Detecta cuando el sujeto es una oración subordinada sustantiva en forma de infinitivo.",
    examples: [
      {
        title: "Ejemplo 1: Infinitivo como sujeto simple",
        sentence: [
          { text: "Estudiar", type: "infinitivo", role: "sujeto" },
          { text: "diariamente", type: "adverbio", role: "sujeto" },
          { text: "es", type: "verbo", role: "predicado" },
          { text: "fundamental", type: "adjetivo", role: "predicado" },
        ],
        analysis:
          'SUJETO ORACIONAL: "Estudiar diariamente" (oración subordinada sustantiva de infinitivo).\n  - Núcleo del sujeto: "Estudiar" (infinitivo que funciona como sustantivo).\n  - Modificador: "diariamente" (adverbio de frecuencia que complementa al infinitivo).\nPREDICADO: "es fundamental" (verbo copulativo + atributo).\nEl infinitivo, al sustantivarse, puede desempeñar funciones propias del sustantivo (sujeto, OD, etc.).',
      },
      {
        title: "Ejemplo 2: Infinitivo con objeto propio",
        sentence: [
          { text: "Aprobar", type: "infinitivo", role: "sujeto" },
          { text: "el", type: "articulo", role: "sujeto" },
          { text: "EXANI-I", type: "sustantivo", role: "sujeto" },
          { text: "requiere", type: "verbo", role: "predicado" },
          { text: "dedicación", type: "sustantivo", role: "predicado" },
        ],
        analysis:
          'SUJETO ORACIONAL: "Aprobar el EXANI-I".\n  - Núcleo: "Aprobar" (infinitivo como núcleo del sujeto).\n  - Objeto directo del infinitivo: "el EXANI-I" (la acción de aprobar recae sobre el examen).\nPREDICADO: "requiere dedicación" (verbo transitivo + objeto directo).\nNota: el infinitivo conserva sus complementos verbales aunque actúe como sustantivo.',
      },
      {
        title: "Ejemplo 3: Infinitivo con objeto directo",
        sentence: [
          { text: "Leer", type: "infinitivo", role: "sujeto" },
          { text: "libros", type: "sustantivo", role: "sujeto" },
          { text: "enriquece", type: "verbo", role: "predicado" },
          { text: "la", type: "articulo", role: "predicado" },
          { text: "mente", type: "sustantivo", role: "predicado" },
        ],
        analysis:
          'SUJETO ORACIONAL: "Leer libros".\n  - Núcleo: "Leer" (infinitivo que encabeza el sujeto).\n  - OD del infinitivo: "libros" (lo que se lee).\nPREDICADO: "enriquece la mente" (verbo transitivo + OD).\nConcordancia: aunque el sujeto contenga un plural ("libros"), el verbo principal va en singular porque el núcleo del sujeto ("Leer") es singular.',
      },
      {
        title: "Ejemplo 4: Infinitivo con complemento preposicional",
        sentence: [
          { text: "Para", type: "preposicion", role: "predicado" },
          { text: "ti", type: "pronombre", role: "predicado" },
          { text: "estudiar", type: "infinitivo", role: "sujeto" },
          { text: "medicina", type: "sustantivo", role: "sujeto" },
          { text: "es", type: "verbo", role: "predicado" },
          { text: "un", type: "articulo", role: "predicado" },
          { text: "gran", type: "adjetivo", role: "predicado" },
          { text: "reto", type: "sustantivo", role: "predicado" },
        ],
        analysis:
          'SUJETO ORACIONAL: "estudiar medicina" (infinitivo + objeto directo).\n  - Núcleo: "estudiar" (infinitivo que funciona como sustantivo).\n  - OD del infinitivo: "medicina".\n"Para ti" es complemento circunstancial de beneficio (no forma parte del sujeto).\nPREDICADO: "es un gran reto" (verbo copulativo + atributo).',
      },
      {
        title: "Ejemplo 5: Infinitivo con adverbio y CC de modo",
        sentence: [
          { text: "Correr", type: "infinitivo", role: "sujeto" },
          { text: "por", type: "preposicion", role: "sujeto" },
          { text: "la", type: "articulo", role: "sujeto" },
          { text: "mañana", type: "sustantivo", role: "sujeto" },
          { text: "mejora", type: "verbo", role: "predicado" },
          { text: "la", type: "articulo", role: "predicado" },
          { text: "salud", type: "sustantivo", role: "predicado" },
          { text: "cardiovascular", type: "adjetivo", role: "predicado" },
        ],
        analysis:
          'SUJETO ORACIONAL: "Correr por la mañana" (infinitivo + CC de tiempo).\n  - Núcleo: "Correr" (infinitivo que encabeza el sujeto).\n  - CC de tiempo: "por la mañana".\nPREDICADO: "mejora la salud cardiovascular" (verbo transitivo + OD).\nConcordancia: el verbo "mejora" va en singular porque el núcleo del sujeto ("Correr") es singular.',
      },
    ],
  },
  {
    id: "sujeto-tacito",
    name: "Sujeto tácito/elíptico",
    description:
      "Identifica cuando el sujeto no aparece expresado pero se sobreentiende por el contexto o la desinencia verbal.",
    examples: [
      {
        title: "Ejemplo 1: 1ª persona del singular",
        sentence: [
          { text: "(Yo)", type: "pronombre", role: "sujeto" },
          { text: "Estudiaré", type: "verbo", role: "predicado" },
          { text: "toda", type: "adjetivo", role: "predicado" },
          { text: "la", type: "articulo", role: "predicado" },
          { text: "semana", type: "sustantivo", role: "predicado" },
        ],
        analysis:
          'SUJETO TÁCITO/ELÍPTICO: "(Yo)" — no está expresado en la oración, pero se recupera por la desinencia verbal.\n  - "Estudiaré": 1ª persona del singular del futuro simple de indicativo (-é).\n  - El sujeto "yo" está omitido porque la terminación verbal lo sobreentiende.\nPREDICADO: "Estudiaré toda la semana".\nCC de tiempo: "toda la semana".',
      },
      {
        title: "Ejemplo 2: 1ª persona del plural",
        sentence: [
          { text: "(Nosotros)", type: "pronombre", role: "sujeto" },
          { text: "Vamos", type: "verbo", role: "predicado" },
          { text: "a", type: "preposicion", role: "predicado" },
          { text: "la", type: "articulo", role: "predicado" },
          { text: "biblioteca", type: "sustantivo", role: "predicado" },
        ],
        analysis:
          'SUJETO TÁCITO: "(Nosotros)" — omitido, inferido por el contexto y la desinencia.\n  - "Vamos": 1ª persona del plural de "ir" en presente de indicativo (-amos).\n  - En español, la omisión del sujeto es frecuente cuando la desinencia verbal es inequívoca.\nPREDICADO: "Vamos a la biblioteca".\nCC de lugar: "a la biblioteca".',
      },
      {
        title: "Ejemplo 3: 2ª persona del singular",
        sentence: [
          { text: "(Tú)", type: "pronombre", role: "sujeto" },
          { text: "Debes", type: "verbo", role: "predicado" },
          { text: "presentar", type: "infinitivo", role: "predicado" },
          { text: "el", type: "articulo", role: "predicado" },
          { text: "examen", type: "sustantivo", role: "predicado" },
          { text: "mañana", type: "sustantivo", role: "predicado" },
        ],
        analysis:
          'SUJETO TÁCITO: "(Tú)" — el sujeto se omite pero se sobreentiende por la forma verbal y el contexto.\n  - "Debes": 2ª persona del singular de "deber" en presente (-es).\n  - El uso del pronombre explícito "tú" sería enfático o contrastivo.\nPREDICADO: "Debes presentar el examen mañana".\nPerífrasis: "Debes presentar".\nCC de tiempo: "mañana".',
      },
      {
        title: "Ejemplo 4: 3ª persona del singular (sujeto tácito él/ella)",
        sentence: [
          { text: "(Él)", type: "pronombre", role: "sujeto" },
          { text: "Llegó", type: "verbo", role: "predicado" },
          { text: "tarde", type: "adverbio", role: "predicado" },
          { text: "al", type: "articulo", role: "predicado" },
          { text: "examen", type: "sustantivo", role: "predicado" },
          { text: "porque", type: "conjuncion", role: "predicado" },
          { text: "perdió", type: "verbo", role: "predicado" },
          { text: "el", type: "articulo", role: "predicado" },
          { text: "autobús", type: "sustantivo", role: "predicado" },
        ],
        analysis:
          'SUJETO TÁCITO: "(Él)" — se recupera por el contexto narrativo y la desinencia verbal.\n  - "Llegó": 3ª persona singular del pretérito indefinido de "llegar" (-ó).\n  - "Perdió": 3ª persona singular del pretérito indefinido de "perder" (-ió).\nAmbos verbos comparten el mismo sujeto tácito, recuperable del contexto anterior.\nPREDICADO: "Llegó tarde al examen porque perdió el autobús".',
      },
      {
        title: "Ejemplo 5: 2ª persona del plural (ustedes)",
        sentence: [
          { text: "(Ustedes)", type: "pronombre", role: "sujeto" },
          { text: "Deben", type: "verbo", role: "predicado" },
          { text: "revisar", type: "infinitivo", role: "predicado" },
          { text: "los", type: "articulo", role: "predicado" },
          { text: "requisitos", type: "sustantivo", role: "predicado" },
          { text: "antes", type: "adverbio", role: "predicado" },
          { text: "de", type: "preposicion", role: "predicado" },
          { text: "inscribirse", type: "infinitivo", role: "predicado" },
        ],
        analysis:
          'SUJETO TÁCITO: "(Ustedes)" — omitido, inferido por la desinencia verbal (-en) y el contexto.\n  - "Deben": 2ª persona del plural (o 3ª persona del plural) de "deber" en presente.\n  - "Inscribirse": infinitivo reflexivo que retoma al sujeto tácito.\nEn contextos formales, la forma verbal en -en puede referirse a "ustedes" (2ª persona plural formal) o "ellos" (3ª persona plural). El contexto determina el referente.\nPREDICADO: "Deben revisar los requisitos antes de inscribirse".',
      },
    ],
  },
];

export default function GrammarStudyGuide() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [spMode, setSpMode] = useState(false);

  const currentCategory = categories.find((c) => c.id === activeCategory);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#1a1b1e",
        color: "#e2e3e9",
        fontFamily: "'Source Serif 4', Georgia, serif",
        lineHeight: 1.7,
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,400&family=JetBrains+Mono:wght@400;600&display=swap"
        rel="stylesheet"
      />

      <div style={{ display: "flex", minHeight: "100vh" }}>
        {/* SIDEBAR */}
        <aside
          style={{
            width: "280px",
            minWidth: "280px",
            background: "#131417",
            height: "100vh",
            position: "sticky",
            top: 0,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            borderRight: "1px solid #33343b",
            zIndex: 100,
          }}
        >
          <div
            style={{
              background: "#1e1f23",
              padding: "26px 20px 20px",
              borderBottom: "1px solid #33343b",
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "9.5px",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "#6490f5",
                marginBottom: "8px",
              }}
            >
              EXANI-I · Área
            </div>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "18px",
                lineHeight: 1.3,
                color: "#e2e3e9",
                fontWeight: 900,
                margin: 0,
              }}
            >
              Estructura de la Oración
            </h1>
            <div
              style={{
                fontSize: "11px",
                color: "#8e9099",
                marginTop: "6px",
                fontStyle: "italic",
              }}
            >
              Guía completa de estudio · 45 oraciones
            </div>
          </div>

          <div
            style={{
              padding: "12px 20px",
              borderBottom: "1px solid #33343b",
              background: "#1e1f23",
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "9.5px",
                color: "#5a5c65",
                marginBottom: "6px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>Progreso temario</span>
              <span>9 temas</span>
            </div>
            <div
              style={{
                height: "4px",
                background: "#3e3f47",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  background: "linear-gradient(90deg, #3b5fc9, #6490f5)",
                  borderRadius: "4px",
                }}
              ></div>
            </div>
          </div>

          <nav style={{ padding: "10px 0", flex: 1 }}>
            <div
              style={{
                padding: "14px 20px 4px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "8.5px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#5a5c65",
                fontWeight: 600,
              }}
            >
              Temas
            </div>
            {categories.map((cat, idx) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveCategory(cat.id);
                }}
                style={{
                  display: "block",
                  padding: "8px 20px 8px 28px",
                  color: activeCategory === cat.id ? "#8aaaf7" : "#8e9099",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontFamily: "'Source Serif 4', serif",
                  borderLeft:
                    activeCategory === cat.id
                      ? "2px solid #6490f5"
                      : "2px solid transparent",
                  background:
                    activeCategory === cat.id
                      ? "rgba(100,144,245,0.13)"
                      : "transparent",
                  transition: "all .18s",
                  lineHeight: 1.4,
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    opacity: 0.6,
                    marginBottom: "2px",
                  }}
                >
                  Tema {idx + 1}
                </span>
                {cat.name}
              </a>
            ))}
          </nav>
        </aside>

        {/* MAIN */}
        <main style={{ flex: 1, overflowX: "hidden" }}>
          {/* HERO */}
          <div
            style={{
              background:
                "linear-gradient(135deg, #0d0e12 0%, #161828 50%, #1c2040 100%)",
              padding: "52px 60px 44px",
              color: "#e2e3e9",
              position: "relative",
              overflow: "hidden",
              borderBottom: "1px solid #33343b",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "500px",
                height: "500px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(100,144,245,0.08) 0%, transparent 70%)",
                right: "-100px",
                top: "-100px",
                pointerEvents: "none",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(100,144,245,0.05) 0%, transparent 70%)",
                right: "200px",
                bottom: "-80px",
                pointerEvents: "none",
              }}
            ></div>

            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#6490f5",
                marginBottom: "12px",
              }}
            >
              EXANI-I · Área de evaluación
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "40px",
                fontWeight: 900,
                lineHeight: 1.15,
                marginBottom: "14px",
                color: "#fff",
              }}
            >
              Estructura de la Oración
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "#8e9099",
                maxWidth: "560px",
                lineHeight: 1.75,
              }}
            >
              Guía interactiva para identificar sujeto, predicado, núcleos,
              sujetos especiales, pasivas, relativos, perífrasis y sujetos
              tácitos con análisis morfológico en color.
            </p>

            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "32px",
                flexWrap: "wrap",
              }}
            >
              {[
                { num: "9", lbl: "Temas profundizados" },
                { num: "45", lbl: "Oraciones analizadas" },
                { num: "2", lbl: "Modos de visualización" },
              ].map((s) => (
                <div
                  key={s.lbl}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid #3e3f47",
                    borderRadius: "10px",
                    padding: "14px 22px",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "28px",
                      fontWeight: 700,
                      display: "block",
                      color: "#8aaaf7",
                    }}
                  >
                    {s.num}
                  </span>
                  <span
                    style={{
                      fontSize: "10.5px",
                      color: "#5a5c65",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {s.lbl}
                  </span>
                </div>
              ))}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid #3e3f47",
                  borderRadius: "10px",
                  padding: "8px 16px",
                }}
              >
                <button
                  onClick={() => setSpMode(false)}
                  style={{
                    padding: "8px 18px",
                    borderRadius: "8px",
                    border: "none",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    background: !spMode ? "#3b5fc9" : "transparent",
                    color: !spMode ? "#fff" : "#8e9099",
                    transition: "all .18s",
                  }}
                >
                  Gramatical
                </button>
                <button
                  onClick={() => setSpMode(true)}
                  style={{
                    padding: "8px 18px",
                    borderRadius: "8px",
                    border: "none",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    background: spMode ? "#3b5fc9" : "transparent",
                    color: spMode ? "#fff" : "#8e9099",
                    transition: "all .18s",
                  }}
                >
                  Sujeto / Predicado
                </button>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div style={{ padding: "44px 60px" }}>
            {currentCategory && (
              <div>
                <div
                  style={{
                    background: "linear-gradient(90deg, #3b5fc9, #2a3a7a)",
                    color: "#fff",
                    padding: "14px 22px",
                    borderRadius: "10px",
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "19px",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                    flexWrap: "wrap",
                    marginBottom: "28px",
                  }}
                >
                  {currentCategory.name}
                  <span
                    style={{
                      background: "rgba(255,255,255,0.15)",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "9.5px",
                      padding: "4px 10px",
                      borderRadius: "20px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }}
                  >
                    5 ejemplos
                  </span>
                </div>

                <p
                  style={{
                    fontSize: "15px",
                    color: "#8e9099",
                    marginBottom: "28px",
                    lineHeight: 1.8,
                  }}
                >
                  {currentCategory.description}
                </p>

                {currentCategory.examples.map((ex, idx) => (
                  <SentenceCard
                    key={idx}
                    title={ex.title}
                    sentence={ex.sentence}
                    analysis={ex.analysis}
                    spMode={spMode}
                  />
                ))}
              </div>
            )}

            <footer
              style={{
                textAlign: "center",
                color: "#5a5c65",
                fontSize: "11.5px",
                fontFamily: "'JetBrains Mono', monospace",
                padding: "40px 0",
              }}
            >
              Guía interactiva para el EXANI-I · Estructura de la oración · 45
              oraciones analizadas
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
