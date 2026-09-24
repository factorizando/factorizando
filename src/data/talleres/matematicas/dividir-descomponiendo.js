// «Dividir descomponiendo» — regularización de primaria (8 a 12 años).
//
// Taller React (ver docs/TALLER_DESCOMPONER_NUMEROS.md). A diferencia del
// reparto de la Pizzería, aquí no se contesta el cociente y el residuo: se
// reconstruye un término cualquiera de a = b × q + r, que es la antesala de
// despejar una incógnita.
export const TALLER = {
  id: "dividir-descomponiendo",
  titulo: "Dividir descomponiendo",
  materia: "Matemáticas",
  tema: "División con residuo",
  nivel: "primaria",
  edades: "8-12 años",
  icono: "➗",
  descripcion:
    "Problemas de reparto en los que falta un dato de la relación a = b × q + r: el total, el número de " +
    "grupos, lo que toca a cada uno o lo que sobra. Cada término es un ejercicio distinto.",

  actividades: [
    { id: "termino-oculto", nombre: "El término que falta", edades: "8-12",
      temas: ["division-reparto", "residuo", "division-exacta", "problemas-un-paso", "descomposicion"] },
  ],

  objetivos: [
    "Leer la división como una relación entre total, grupos, cociente y residuo.",
    "Reconstruir el dato que falta en un reparto, sea cual sea.",
    "Reconocer cuándo la división es exacta y cuándo sobra algo.",
    "Entender el residuo como lo que obliga a un grupo más, no como un número suelto.",
  ],

  render: { tipo: "react", componente: "dividir-descomponiendo" },
};
