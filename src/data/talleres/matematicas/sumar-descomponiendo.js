// «Sumar descomponiendo» — regularización de primaria (8 a 12 años).
//
// Taller React (ver docs/TALLER_DESCOMPONER_NUMEROS.md). Comparte motor con
// Multiplicar y Dividir descomponiendo; el detalle del porqué de cada juego
// vive en `../descomponer/`.
export const TALLER = {
  id: "sumar-descomponiendo",
  titulo: "Sumar descomponiendo",
  materia: "Matemáticas",
  tema: "Suma y complementos",
  nivel: "primaria",
  edades: "8-12 años",
  icono: "➕",
  descripcion:
    "Dos formas de sumar sin contar con los dedos: completar lo que falta para llegar a 10, 20 o 100, " +
    "y romper un sumando para pasar por la decena. Con bloques de 8-9 y 10-12 años.",

  actividades: [
    { id: "completar", nombre: "Completar el número", edades: "8-12",
      temas: ["suma-resta", "calculo-mental", "complementos", "descomposicion"] },
    { id: "romper", nombre: "Romper para sumar", edades: "8-12",
      temas: ["suma-resta", "calculo-mental", "valor-posicional", "descomposicion"] },
  ],

  objetivos: [
    "Descubrir cuánto le falta a una cantidad para llegar a una meta redonda.",
    "Usar el complemento a 10 como atajo de cálculo mental.",
    "Romper un sumando para pasar por la decena y sumar por partes.",
    "Entender la suma como relación entre sus partes, no como un procedimiento de columnas.",
  ],

  render: { tipo: "react", componente: "sumar-descomponiendo" },
};
