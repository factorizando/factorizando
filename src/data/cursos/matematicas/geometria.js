// Curso (= Área) de prototipo: Geometría.
// Un curso SOLO referencia contenido existente por `id` (registro único).
// Jerarquía: Área → Sección → Subsección → habilidades.
// `nivel` y criterios de progreso se incorporan después; aquí `completado`
// es dato visual de ejemplo y `proximamente` marca habilidades aún sin recurso.
export const CURSO = {
  id: "geometria",
  materia: "Matemáticas",
  area: "Geometría",
  icono: "📐",
  examenes: ["EXANI-I", "EXANI-II", "UNAM"],
  secciones: [
    {
      id: "triangulos",
      titulo: "Triángulos",
      subsecciones: [
        {
          id: "angulos-pitagoras",
          titulo: "Ángulos y Teorema de Pitágoras",
          habilidades: [
            { tipo: "presentacion", ref: "triangulos-pitagoras", titulo: "Ángulos y Teorema de Pitágoras", duracion: "14 min", completado: true },
            { tipo: "cuestionario", titulo: "Practica: ángulos en triángulos", duracion: "10 reactivos", proximamente: true },
          ],
        },
        {
          id: "congruencia-semejanza",
          titulo: "Congruencia y semejanza",
          habilidades: [
            { tipo: "presentacion", ref: "semejanza-triangulos", titulo: "Congruencia y semejanza de triángulos", duracion: "16 min", completado: true },
            { tipo: "presentacion", ref: "transformaciones-congruencia", titulo: "Transformaciones geométricas", duracion: "12 min" },
            { tipo: "cuestionario", titulo: "Practica: criterios de semejanza", duracion: "8 reactivos", proximamente: true },
          ],
        },
      ],
    },
    {
      id: "cuadrilateros",
      titulo: "Cuadriláteros y polígonos",
      subsecciones: [
        {
          id: "clasificacion",
          titulo: "Clasificación de cuadriláteros y polígonos",
          habilidades: [
            { tipo: "presentacion", ref: "cuadrilateros-poligonos", titulo: "Cuadriláteros y polígonos", duracion: "13 min" },
          ],
        },
        {
          id: "medidas",
          titulo: "Perímetros, áreas y volúmenes",
          habilidades: [
            { tipo: "presentacion", ref: "perimetros-areas-volumenes", titulo: "Perímetros, áreas y volúmenes", duracion: "15 min" },
            { tipo: "cuestionario", titulo: "Practica: áreas y perímetros", duracion: "12 reactivos", proximamente: true },
          ],
        },
      ],
    },
    {
      id: "circulo",
      titulo: "Círculo",
      subsecciones: [
        {
          id: "el-circulo",
          titulo: "El círculo y sus partes",
          habilidades: [
            { tipo: "presentacion", ref: "circulo", titulo: "El Círculo", duracion: "11 min" },
            { tipo: "cuestionario", titulo: "Practica: sectores y segmentos", duracion: "10 reactivos", proximamente: true },
          ],
        },
      ],
    },
  ],
};
