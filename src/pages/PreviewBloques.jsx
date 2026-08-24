// Catálogo vivo de bloques. Solo en desarrollo.
//
// Es el equivalente en código del canvas de diseño: mismo contenido, pero
// renderizado por los componentes de verdad, así que lo que se ve aquí es lo que
// se verá en una clase. Sirve para dos cosas —revisar un bloque nuevo sin montar
// una presentación, y comparar acentos entre materias sin cambiar de archivo—.
import { useState } from "react";
import { TEMAS } from "../data/presentaciones/temas.jsx";
import { useFuentesTema } from "../data/presentaciones/temas.jsx";
import Lienzo from "../components/bloques/Lienzo.jsx";

const MATERIAS = ["matematicas", "espanol", "fisica", "biologia", "quimica", "geografia", "historia"];

const SLIDES = [
  {
    etiqueta: "Introducción · Silabeo",
    titulo: "Cómo dividir una palabra en sílabas",
    bloques: [
      { tipo: "destacado", texto: "La sílaba es la unidad mínima de pronunciación y cada una contiene al menos una vocal. Silabear bien es el paso previo a cualquier regla de acentuación." },
      {
        tipo: "tabla", ancho: 7, titulo: "Reglas de silabeo",
        columnas: ["Situación", "Regla", "Ejemplos"], anchos: ["44%", "30%", null],
        filas: [
          ["Una consonante entre vocales", "Con la sílaba siguiente", "ma-no · li-bro"],
          ["Dos consonantes entre vocales", "Se separan", "car-ta · per-so-na"],
          ["Grupos inseparables (pr, tr, bl, cl…)", "Van juntos", "pa-dre · a-brir"],
          ["rr · ll · ch (fonema único)", "Nunca se separan", "pe-rro · ha-cha"],
          ["Diptongo: cerrada átona + abierta", "Una sola sílaba", "ai-re · cau-sa"],
          ["Hiato: cerrada tónica + vocal", "Sílabas separadas", "pa-ís · ba-úl"],
        ],
      },
      {
        tipo: "par", ancho: 5, etiqueta: "Diptongo vs. hiato — decide la tonicidad",
        asi_es: "Se separa bue-no, dos sílabas: la u es átona.",
        asi_no: "No", tachado: "bu-e-no",
      },
      { tipo: "nota", ancho: 5, texto: "Cuando una palabra trae h entre vocales, silabéala como si la h no existiera." },
    ],
  },
  {
    etiqueta: "Regla 1 / 12",
    titulo: "Clasificación según la posición del acento",
    bloques: [
      {
        tipo: "columnas", titulo: "Posición de la sílaba tónica en cada tipo",
        paneles: [
          { titulo: "Aguda", alterno: "oxítona", celdas: 4, tonica: 3, ejemplo: "ca-FÉ", regla: "tilde si termina en vocal, n o s" },
          { titulo: "Llana", alterno: "paroxítona", celdas: 4, tonica: 2, ejemplo: "CA-sa", regla: "tilde si NO termina en vocal, n o s" },
          { titulo: "Esdrújula", alterno: "proparoxítona", celdas: 4, tonica: 1, ejemplo: "MÉ-di-co", regla: "siempre lleva tilde" },
          { titulo: "Sobreesdrújula", alterno: "superproparoxítona", celdas: 4, tonica: 0, ejemplo: "DÍ-ga-me-lo", regla: "siempre lleva tilde" },
        ],
      },
      {
        tipo: "trampa", letra: "A",
        titulo: "«acento» ≠ «tilde» — el acento es fonético, la tilde es el signo que lo marca",
        asi_es: "Todas las palabras tienen acento prosódico; solo algunas lo marcan con tilde.",
        asi_no: "Decir «esta palabra no tiene acento» cuando lo que no lleva es", tachado: "tilde",
      },
      { tipo: "secuencia", pasos: ["Separa la palabra en sílabas", "Localiza la sílaba tónica", "Clasifica la palabra", "Aplica la regla de su tipo"] },
    ],
  },
  {
    etiqueta: "Prosa, definición y procedimiento",
    titulo: "Bloques de texto",
    bloques: [
      { tipo: "texto", texto: "Un diptongo es la unión de dos vocales en una sola sílaba. Se forma al combinar una vocal abierta con una cerrada átona en cualquier orden, o al unir dos cerradas." },
      { tipo: "definicion", ancho: 6, etiqueta: "Definición 2.1 · circunferencia", termino: "Circunferencia", texto: "Conjunto de todos los puntos del plano que equidistan de un punto fijo llamado centro." },
      { tipo: "formula", ancho: 6, math: "P^2 = 4\\pi A", de: "de una fórmula a la otra sin pasar por el radio" },
      { tipo: "lista", ancho: 6, items: ["La tilde de un diptongo va sobre la vocal abierta.", "Si son dos cerradas, va sobre la segunda.", "La y final cuenta como i, pero nunca lleva tilde."] },
      {
        tipo: "pasos", ancho: 6, metodo: "Demostración · por sustitución",
        pasos: [
          { texto: "Del perímetro despejamos el radio:", math: "r = P/2\\pi" },
          { texto: "Sustituimos en el área:", math: "A = \\pi (P/2\\pi)^2" },
          { texto: "Simplificamos:", math: "P^2 = 4\\pi A" },
        ],
      },
      { tipo: "cuadro_semantico", ancho: 6, titulo: "Anatomía del círculo", filas: [
        { clave: "Radio", valor: "Del centro a cualquier punto de la circunferencia." },
        { clave: "Cuerda", valor: "Une dos puntos de la circunferencia." },
        { clave: "Diámetro", valor: "La cuerda que pasa por el centro." },
      ] },
      { tipo: "objetivos", ancho: 6, items: ["Separar en sílabas cualquier palabra.", "Clasificar según la posición del acento.", "Decidir si lleva tilde sin dudar."] },
    ],
  },
  {
    etiqueta: "Reactivo 1 de 8 · Silabeo",
    titulo: null,
    bloques: [
      {
        tipo: "pregunta", ancho: 7,
        enunciado: "¿Cuántas sílabas tiene la palabra «establecimiento»?",
        opciones: ["Siete sílabas", "Cinco sílabas", "Seis sílabas"],
        correcta: 2,
        explicacion: "El grupo ie es diptongo y no se separa: cimien-to va en dos, no en tres.",
      },
      { tipo: "sondeo", ancho: 5, etiqueta: "18 de 22 han respondido", opciones: ["Siete", "Cinco", "Seis"], correcta: 2, votos: [4, 3, 11] },
      { tipo: "cierre", tarjetas: [
        { titulo: "Primero silabea", detalle: "Ninguna regla se aplica sin haber separado la palabra." },
        { titulo: "La tónica manda", detalle: "Su posición decide el tipo, y el tipo decide la regla." },
        { titulo: "El hiato gana", detalle: "Cerrada tónica junto a vocal: tilde siempre." },
      ] },
    ],
  },
  {
    etiqueta: "Dibujo y línea de tiempo",
    titulo: "Bloques visuales",
    bloques: [
      { tipo: "figura", ancho: 6, clave: "venn-dos", titulo: "Del registro de diagramas", caption: "Resuelve por clave: los 311 diagramas están disponibles sin importar nada." },
      { tipo: "figura", ancho: 6, clave: "geom-dardo", titulo: "Otra del mismo registro" },
      { tipo: "linea_tiempo", hitos: [
        { marca: "Nube", texto: "Colapso de gas y polvo por gravedad." },
        { marca: "Protoestrella", texto: "El núcleo se calienta al comprimirse." },
        { marca: "Secuencia principal", texto: "Fusión de hidrógeno en equilibrio." },
        { marca: "Gigante roja", texto: "Se agota el hidrógeno del núcleo." },
      ] },
    ],
  },
];

export default function PreviewBloques() {
  const [materia, setMateria] = useState("espanol");
  const [idx, setIdx] = useState(0);
  const [respuesta, setRespuesta] = useState(null);
  const tema = TEMAS[materia];
  useFuentesTema(tema);

  const slide = { tipo: "lienzo", ...SLIDES[idx] };

  const boton = (activo) => ({
    fontFamily: tema.mono, fontSize: 11, letterSpacing: "0.08em",
    padding: "6px 12px", borderRadius: 7, cursor: "pointer",
    border: `1px solid ${activo ? tema.acento : tema.border}`,
    background: activo ? tema.acentoSuave : "transparent",
    color: activo ? tema.acento : tema.muted,
  });

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", background: tema.bg, fontFamily: tema.body }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", padding: "10px 16px", borderBottom: `1px solid ${tema.border}` }}>
        {MATERIAS.map((m) => (
          <button key={m} type="button" onClick={() => setMateria(m)} style={boton(m === materia)}>{m}</button>
        ))}
        <span style={{ width: 20 }} />
        {SLIDES.map((s, i) => (
          <button key={i} type="button" onClick={() => { setIdx(i); setRespuesta(null); }} style={boton(i === idx)}>
            {i + 1}
          </button>
        ))}
        <span style={{ marginLeft: "auto", fontFamily: tema.mono, fontSize: 10, color: tema.sub }}>
          {SLIDES[idx].etiqueta}
        </span>
      </div>
      <div style={{ flex: 1, minHeight: 0 }}>
        <SlideDeBloques slide={slide} tema={tema} respuesta={respuesta} setRespuesta={setRespuesta} />
      </div>
    </div>
  );
}

function SlideDeBloques({ slide, tema, respuesta, setRespuesta }) {
  // Los votos del sondeo son de ejemplo: el bloque los recibe por props igual que
  // en el modo director, así que aquí se pasan a mano.
  const sondeo = (slide.bloques || []).find((b) => b.tipo === "sondeo");
  return (
    <Lienzo
      slide={slide}
      tema={tema}
      modo="alumno"
      respuestaDada={respuesta}
      onResponder={setRespuesta}
      votos={sondeo?.votos}
      totalVotos={sondeo?.votos?.reduce((a, b) => a + b, 0)}
    />
  );
}
