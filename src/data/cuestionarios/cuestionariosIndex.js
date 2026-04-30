// src/data/cuestionarios/cuestionariosIndex.js
// Este archivo centraliza TODOS los cuestionarios
// Sigue esta estructura y es fácil agregar nuevos

// IMPORTAR los cuestionarios (ajusta las rutas según tu estructura)
// import { SUMA_ENTEROS } from './preparatoria/matematicas/numerosenteros/suma';
// import { DIVISIBILIDAD } from './preparatoria/matematicas/numerosenteros/divisibilidad';
// ... etc

// Por ahora, esto es un TEMPLATE. Cuando migres tus cuestionarios,
// importarás cada uno aquí.

import { SUMA_ENTEROS } from "./preparatoria/matematicas/numerosreales/numerosenteros/suma";
import ALGEBRA_PREPA from "./preparatoria/matematicas/algebra/algebra-prepa.js";
import DIVISIBILIDAD from "./preparatoria/matematicas/numerosreales/numerosenteros/divisibilidad";
import DIVISIBILIDAD_MCD from "./preparatoria/matematicas/numerosreales/numerosenteros/divisibilidad-mcd-mcm";
import PRODUCTO_ENTEROS from "./preparatoria/matematicas/numerosreales/numerosenteros/producto-enteros.js";
import NUMEROS_ENTEROS from "./preparatoria/matematicas/numerosreales/numerosenteros/numeros-enteros.js";
import PRIMOS_MCD_MCM from "./preparatoria/matematicas/numerosreales/numerosenteros/primos-mcd-mcm.js";
import RACIONALES_PREPA from "./preparatoria/matematicas/numerosreales/numerosracionales/racionales-prepa.js";
import CELULA_ORGANELOS from "./universidad/biologia/celula-organelos.js";
import LA_CELULA from "./universidad/biologia/la-celula.js";
import UNI_RACIONALES from "./universidad/matematicas/numerosreales/uni-numeros-racionales.js";
import ORTOGRAFIA_GRAFIAS from "./universidad/espanol/ortografia-grafias.js";
import SINONIMOS from "./universidad/espanol/sinonimos-antonimos-analogias.js";
import SINTAXIS_ESPANOL from "./universidad/espanol/sintaxis-espanol.js";
import SIMULADOR_PREPA_1 from "./preparatoria/simuladores/simulador-prepa-1.jsx";
import SIMULADOR_PREPA_2 from "./preparatoria/simuladores/simulador-prepa-2.jsx";
import SUJETO_PREDICADO from "./preparatoria/espanol/sujeto-predicado-exani-i.js";
import ESTRUCTURA_ORACION_UNI from "./universidad/espanol/estructura-oracion-uni.js";
import ESTRUCTURA_ORACION_PREPA from "./preparatoria/espanol/estructura-oracion-prepa.js";

export const CUESTIONARIOS_INDEX = {
  // ──────────────────────────────────────────────────────────────────────────
  // PREPARATORIA
  // ──────────────────────────────────────────────────────────────────────────
  preparatoria: {
    matematicas: {
      icon: "📐",
      label: "Matemáticas",
      nivel: "Números Reales",

      numerosReales: {
        icon: "🔢",
        label: "Números Reales",

        numerosEnteros: {
          icon: "#️⃣",
          label: "Números Enteros",

          sumaProducto: {
            icon: "➕➖",
            label: "Suma y Producto",
            cuestionarios: [
              {
                id: "suma-enteros",
                titulo: "Suma de Enteros",
                description: "Aprende a sumar números positivos y negativos",
                data: SUMA_ENTEROS, // Descomentar cuando importes
              },
              {
                id: "producto-enteros",
                titulo: "Producto de Enteros",
                description: "Domina la multiplicación de números enteros",
                data: PRODUCTO_ENTEROS,
              },
            ],
          },

          exponenciacion: {
            icon: "⬆️",
            label: "Exponenciación",
            cuestionarios: [
              // {
              //   id: "exponentes",
              //   titulo: "Leyes de los Exponentes",
              //   description: "",
              //   data: EXPONENTES,
              // },
            ],
          },

          divisibilidad: {
            icon: "🧮",
            label: "Divisibilidad",
            cuestionarios: [
              {
                id: "divisibilidad",
                titulo: "Primos, M.C.D. y M.C.M.",
                description:
                  "Domina los conceptos fundamentales de divisibilidad",
                data: DIVISIBILIDAD,
              },
              {
                id: "divisibilidad-mcd-mcm",
                titulo: "Divisibilidad, M.C.D. y M.C.M. (Avanzado)",
                description: "Ejercicios más complejos",
                data: DIVISIBILIDAD_MCD,
              },
              {
                id: "numeros-enteros",
                titulo: "Números Enteros",
                description: "Repasa todos los conceptos de números enteros",
                data: NUMEROS_ENTEROS,
              },
              {
                id: "primos-mcd-mcm",
                titulo: "Números Primos, M.C.D. y M.C.M.",
                description: "Ejercicios específicos de números primos",
                data: PRIMOS_MCD_MCM,
              },
            ],
          },
        },

        numerosRacionales: {
          icon: "🔶",
          label: "Números Racionales",

          sumaProductoFracciones: {
            icon: "➕✖️",
            label: "Suma y Producto de Fracciones",
            cuestionarios: [
              {
                id: "racionales-prepa",
                titulo: "Números Racionales - Preparatoria",
                description:
                  "Suma, resta, multiplicación y división de fracciones",
                data: RACIONALES_PREPA,
              },
            ],
          },

          divisionFracciones: {
            icon: "➗",
            label: "División de Fracciones",
            cuestionarios: [
              // Aquí irían cuestionarios específicos de división
            ],
          },

          fraccionesDecimales: {
            icon: "🔄",
            label: "Fracciones - Decimales",
            cuestionarios: [],
          },

          porcentajes: {
            icon: "%",
            label: "Porcentajes",
            cuestionarios: [],
          },

          proporciones: {
            icon: "⚖️",
            label: "Proporciones",
            cuestionarios: [],
          },

          raizCuadrada: {
            icon: "√",
            label: "Raíz Cuadrada",
            cuestionarios: [],
          },

          leyesExponentes: {
            icon: "⬆️",
            label: "Leyes de los Exponentes",
            cuestionarios: [],
          },
        },
      },

      algebra: {
        icon: "🔤",
        label: "Álgebra",

        simplificacionTerminos: {
          label: "Simplificación de Términos Semejantes",
          cuestionarios: [],
        },

        ecuacionesPrimerGrado: {
          label: "Ecuaciones de Primer Grado",
          cuestionarios: [
            {
              id: "enteros-prepa",
              titulo: "Enteros - Preparatoria",
              description: "",
              // data: ENTEROS_PREPA,
            },
          ],
        },

        productosNotables: {
          label: "Productos Notables",
          cuestionarios: [],
        },

        ecuacionesSegundoGrado: {
          label: "Ecuación de Segundo Grado",
          cuestionarios: [
            {
              id: "algebra-prepa",
              titulo: "Álgebra - Preparatoria",
              description: "",
              data: ALGEBRA_PREPA,
            },
          ],
        },

        sistemasEcuaciones: {
          label: "Sistemas de Ecuaciones",
          cuestionarios: [],
        },
      },

      geometria: {
        icon: "🔺",
        label: "Geometría",
        cuestionarios: [],
      },

      probabilidadEstadistica: {
        icon: "📊",
        label: "Probabilidad y Estadística",
        cuestionarios: [],
      },
    },

    espanol: {
      icon: "📚",
      label: "Español",
      cuestionarios: [
        {
          id: "sujeto-predicado-exani-i",
          titulo: "Estructura de la Oración: Sujeto y Predicado",
          description:
            "Aprende a identificar el sujeto y predicado en las oraciones",
          data: SUJETO_PREDICADO, // Descomentar cuando importes
        },
        {
          id: "estructura-oracion-prepa",
          titulo: "Estructura de la Oración",
          description: "Repasa todos los conceptos de estructura de la oración",
          data: ESTRUCTURA_ORACION_PREPA,
        },
      ],
    },

    fisica: {
      icon: "⚛️",
      label: "Física",
      cuestionarios: [],
    },

    biologia: {
      icon: "🧬",
      label: "Biología",
      cuestionarios: [
        {
          id: "la-celula",
          titulo: "La Célula",
          description: "",
          data: LA_CELULA,
        },
        {
          id: "celula-organelos",
          titulo: "Célula y Organelos",
          description: "",
          data: CELULA_ORGANELOS,
        },
      ],
    },

    quimica: {
      icon: "⚗️",
      label: "Química",
      cuestionarios: [],
    },
    simuladores: {
      icon: "🕹️",
      label: "Simuladores",
      cuestionarios: [
        {
          id: "simulador-prepa-1",
          titulo: "Simulador de Examen 1",
          description: "",
          data: SIMULADOR_PREPA_1,
        },
        {
          id: "simulador-prepa-2",
          titulo: "Simulador de Examen 2",
          description: "",
          data: SIMULADOR_PREPA_2,
        },
      ],
    },
  },

  // ──────────────────────────────────────────────────────────────────────────
  // UNIVERSIDAD
  // ──────────────────────────────────────────────────────────────────────────
  universidad: {
    matematicas: {
      icon: "🔢",
      label: "Matemáticas",

      calculo: {
        icon: "📈",
        label: "Cálculo",
        cuestionarios: [
          {
            id: "uni-numeros-racionales",
            titulo: "Números Racionales (Universidad)",
            description: "",
            data: UNI_RACIONALES,
          },
        ],
      },
    },
    espanol: {
      icon: "📖",
      label: "Español",
      cuestionarios: [
        {
          id: "ortografia-grafias",
          titulo: "Ortografía y Grafías",
          description: "",
          data: ORTOGRAFIA_GRAFIAS,
        },
        {
          id: "sinonimos-antonimos-analogias",
          titulo: "Sinónimos, Antónimos y Analogías",
          description: "",
          data: SINONIMOS,
        },
        {
          id: "sintaxis-espanol",
          titulo: "Sintaxis en Español",
          description: "",
          data: SINTAXIS_ESPANOL,
        },
        {
          id: "estructura-oracion-uni",
          titulo: "Estructura de la Oración",
          data: ESTRUCTURA_ORACION_UNI,
        },
      ],
    },
    biologia: {
      icon: "🧬",
      label: "Biología",

      celular: {
        label: "Biología Celular",
        cuestionarios: [],
      },
    },

    medicina: {
      icon: "💊",
      label: "Medicina",
      cuestionarios: [
        {
          id: "premedicina",
          titulo: "Premedicina",
          description: "",
          // data: PREMEDICINA,
        },
      ],
    },
  },
};

// ─── FUNCIÓN AUXILIAR: Buscar un cuestionario por ID ────────────────────────
export function buscarCuestionario(id) {
  const traverse = (obj) => {
    if (obj.cuestionarios && Array.isArray(obj.cuestionarios)) {
      const found = obj.cuestionarios.find((c) => c.id === id);
      if (found) return found;
    }
    for (const key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        const result = traverse(obj[key]);
        if (result) return result;
      }
    }
    return null;
  };

  return traverse(CUESTIONARIOS_INDEX);
}

// ─── FUNCIÓN AUXILIAR: Obtener lista plana de todos los cuestionarios ────────
export function obtenerTodosCuestionarios() {
  const cuestionarios = [];

  const traverse = (obj) => {
    if (obj.cuestionarios && Array.isArray(obj.cuestionarios)) {
      cuestionarios.push(...obj.cuestionarios);
    }
    for (const key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        traverse(obj[key]);
      }
    }
  };

  traverse(CUESTIONARIOS_INDEX);
  return cuestionarios;
}
