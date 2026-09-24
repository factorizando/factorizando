// «Multiplicar descomponiendo» — regularización de primaria (8 a 12 años).
//
// Taller React (ver docs/TALLER_DESCOMPONER_NUMEROS.md). Refuerza la
// propiedad distributiva que también trabaja el taller del Producto, pero aquí
// el foco es la relación a × b = a × m + a × n y el término que falta.
export const TALLER = {
  id: "multiplicar-descomponiendo",
  titulo: "Multiplicar descomponiendo",
  materia: "Matemáticas",
  tema: "Propiedad distributiva",
  nivel: "primaria",
  edades: "8-12 años",
  icono: "✖️",
  descripcion:
    "Rompe uno de los factores, multiplica por partes y suma: la propiedad distributiva sobre el modelo " +
    "de área. En 8-9 con factores de una cifra y el arreglo dibujado; en 10-12 con dos cifras y la decena " +
    "como atajo.",

  actividades: [
    { id: "distributiva", nombre: "Rompe el factor", edades: "8-12",
      temas: ["distributiva", "multiplicacion", "calculo-mental", "descomposicion"] },
  ],

  objetivos: [
    "Ver la multiplicación como un rectángulo que se puede partir en dos.",
    "Aplicar la propiedad distributiva sin el algoritmo de columnas.",
    "Usar la decena como atajo: multiplicar por 10, 20… es un corrimiento.",
    "Reconstruir un factor a partir de sus partes y del total.",
  ],

  render: { tipo: "react", componente: "multiplicar-descomponiendo" },
};
