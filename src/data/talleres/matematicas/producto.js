// Taller del Producto — regularización de primaria (8 a 12 años).
// El contenido vive como HTML autónomo y se monta en un <iframe srcDoc> para
// aislar su CSS global (`:root`, `body`, `*`) del tema del sitio. Ver
// `src/components/talleres/TallerRunner.jsx` para el puente de persistencia.
//
// La apuesta del taller: la multiplicación de dos cifras se puede resolver sin
// el algoritmo de columnas que se enseña en México (el de "llevo una"). Se
// construye el producto con la distributiva —romper el número y la caja— y se
// cierra con atajos de cálculo mental y con revisión por paridad y tamaño.
import html from "./producto.html?raw";

export const TALLER = {
  id: "producto",
  titulo: "Taller del Producto",
  materia: "Matemáticas",
  tema: "Multiplicación",
  nivel: "primaria",
  edades: "8-12 años",
  icono: "🧮",
  descripcion:
    "Siete actividades. De 8 a 9 años: pares e impares con parejas, cazador de múltiplos en la malla " +
    "y la máquina del ×10 sobre el tablero posicional. De 10 a 12: romper el número, la caja de " +
    "multiplicar (dos cifras por dos cifras sin el algoritmo de columnas), siete atajos de cálculo " +
    "mental y descartar resultados imposibles sin calcular.",
  // Los temas los define `../temas.js`; el catálogo busca por aquí.
  actividades: [
    { id: "pares",     nombre: "Parejas: par o impar",   edades: "8-9",   temas: ["multiplos-divisores", "multiplicacion"] },
    { id: "multiplos", nombre: "Cazador de múltiplos",   edades: "8-9",   temas: ["multiplos-divisores", "multiplicacion", "series"] },
    { id: "ceros",     nombre: "La máquina del ×10",     edades: "8-9",   temas: ["potencias-diez", "valor-posicional", "multiplicacion"] },
    { id: "descompon", nombre: "Rompe el número",        edades: "10-12", temas: ["distributiva", "multiplicacion", "calculo-mental"] },
    { id: "caja",      nombre: "La caja de multiplicar", edades: "10-12", temas: ["distributiva", "multiplicacion"] },
    { id: "trucos",    nombre: "Atajos del producto",    edades: "10-12", temas: ["calculo-mental", "multiplicacion", "potencias-diez"] },
    { id: "descarta",  nombre: "Descarta sin calcular",  edades: "10-12", temas: ["estimacion", "multiplos-divisores", "multiplicacion"] },
  ],
  objetivos: [
    "Reconocer un número par por lo que significa: se puede repartir en parejas sin que sobre nadie.",
    "Deducir si un producto será par o impar sin multiplicarlo.",
    "Ver los múltiplos de un número como su tabla, y el patrón que dibujan en la malla.",
    "Entender el ×10 como un corrimiento de cifras, no como «agregar un cero».",
    "Descomponer un factor y multiplicar por partes (propiedad distributiva).",
    "Resolver dos cifras por dos cifras con la caja, sin el algoritmo de columnas.",
    "Aplicar atajos de cabeza: ×5, ×9, ×11, dobles, terminados en 5, redondear y compensar.",
    "Revisar un resultado con paridad, última cifra y estimación antes de darlo por bueno.",
  ],
  render: { tipo: "html", html },
};
