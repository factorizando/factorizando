// src/data/cuestionarios/preparatoria/matematicas/racionales/racionales-prepa.js
export default {
  metadata: {
    id: "racionales-prepa",
    titulo: "Números Racionales",
    nivel: "preparatoria",
    materia: "Matemáticas",
    tema: "Números Racionales",
  },
  config: { timePerQuestion: 60 },
  bloques: [
    {
      id: "suma-resta",
      titulo: "Suma y Resta",
      from: 0,
      to: 29,
      cantidad: 30,
      color: "#3b9eff",
    },
    {
      id: "producto",
      titulo: "Producto",
      from: 30,
      to: 59,
      cantidad: 30,
      color: "#34d399",
    },
    {
      id: "division",
      titulo: "División",
      from: 60,
      to: 89,
      cantidad: 30,
      color: "#a78bfa",
    },
    {
      id: "prob-fracciones",
      titulo: "Problemas Fracciones",
      from: 90,
      to: 119,
      cantidad: 30,
      color: "#fbbf24",
    },
    {
      id: "dec-frac",
      titulo: "Dec. a Frac. y vice",
      from: 120,
      to: 149,
      cantidad: 30,
      color: "#f97316",
    },
    {
      id: "dec-porc",
      titulo: "Dec. a Porc. y vice",
      from: 150,
      to: 179,
      cantidad: 30,
      color: "#f43f5e",
    },
    {
      id: "prob-porc",
      titulo: "Problemas Porc.",
      from: 180,
      to: 209,
      cantidad: 30,
      color: "#3b9eff",
    },
    {
      id: "proporcionalidad",
      titulo: "Proporcionalidad",
      from: 210,
      to: 239,
      cantidad: 30,
      color: "#34d399",
    },
    {
      id: "leyes-exponentes",
      titulo: "Leyes Exponentes",
      from: 240,
      to: 269,
      cantidad: 30,
      color: "#a78bfa",
    },
    {
      id: "signos-agrupacion",
      titulo: "Signos Agrupación",
      from: 270,
      to: 299,
      cantidad: 30,
      color: "#fbbf24",
    },
  ],
  questions: [
    {
      question: "¿Cuánto es $\\frac{1}{2} + \\frac{1}{2}$?",
      options: ["$1$", "$\\frac{1}{4}$", "$\\frac{2}{4}$", "$0$"],
      correctAnswer: 0,
      explanation:
        "Mismo denominador: sumamos numeradores $\\frac{1+1}{2} = \\frac{2}{2} = 1$.",
    },
    {
      question: "¿Cuánto es $\\frac{1}{3} + \\frac{1}{3}$?",
      options: ["$\\frac{2}{3}$", "$\\frac{1}{6}$", "$\\frac{2}{6}$", "$1$"],
      correctAnswer: 0,
      explanation:
        "Mismo denominador: sumamos numeradores $\\frac{1+1}{3} = \\frac{2}{3}$.",
    },
    {
      question: "¿Cuánto es $\\frac{1}{4} + \\frac{2}{4}$?",
      options: ["$\\frac{3}{4}$", "$\\frac{3}{8}$", "$\\frac{1}{2}$", "$1$"],
      correctAnswer: 0,
      explanation: "Mismo denominador: $\\frac{1+2}{4} = \\frac{3}{4}$.",
    },
    {
      question: "¿Cuánto es $\\frac{3}{5} + \\frac{1}{5}$?",
      options: ["$\\frac{4}{5}$", "$\\frac{4}{10}$", "$\\frac{2}{5}$", "$1$"],
      correctAnswer: 0,
      explanation: "Mismo denominador: $\\frac{3+1}{5} = \\frac{4}{5}$.",
    },
    {
      question: "¿Cuánto es $\\frac{5}{8} - \\frac{2}{8}$?",
      options: [
        "$\\frac{3}{8}$",
        "$\\frac{7}{8}$",
        "$\\frac{3}{16}$",
        "$\\frac{1}{4}$",
      ],
      correctAnswer: 0,
      explanation:
        "Restamos numeradores directo: $\\frac{5-2}{8} = \\frac{3}{8}$.",
    },
    {
      question: "¿Cuánto es $\\frac{7}{10} - \\frac{3}{10}$?",
      options: ["$\\frac{2}{5}$", "$\\frac{4}{10}$", "$\\frac{1}{5}$", "$1$"],
      correctAnswer: 0,
      explanation:
        "$\\frac{7-3}{10} = \\frac{4}{10}$, que se simplifica dividiendo entre 2 a $\\frac{2}{5}$.",
    },
    {
      question: "¿Cuánto es $1 + \\frac{1}{2}$?",
      options: ["$\\frac{3}{2}$", "$\\frac{1}{2}$", "$\\frac{2}{2}$", "$2$"],
      correctAnswer: 0,
      explanation:
        "Convertimos el entero a fracción: $\\frac{2}{2} + \\frac{1}{2} = \\frac{3}{2}$.",
    },
    {
      question: "¿Cuánto es $2 - \\frac{1}{3}$?",
      options: [
        "$\\frac{5}{3}$",
        "$\\frac{1}{3}$",
        "$\\frac{4}{3}$",
        "$\\frac{2}{3}$",
      ],
      correctAnswer: 0,
      explanation:
        "Convertimos $2$ a $\\frac{6}{3}$. Luego, $\\frac{6}{3} - \\frac{1}{3} = \\frac{5}{3}$.",
    },
    {
      question: "¿Cuánto es $3 + \\frac{1}{4}$?",
      options: [
        "$\\frac{13}{4}$",
        "$\\frac{12}{4}$",
        "$\\frac{7}{4}$",
        "$\\frac{4}{4}$",
      ],
      correctAnswer: 0,
      explanation:
        "Convertimos $3$ a $\\frac{12}{4}$. Luego, $\\frac{12}{4} + \\frac{1}{4} = \\frac{13}{4}$.",
    },
    {
      question: "¿Cuánto es $1 - \\frac{3}{5}$?",
      options: [
        "$\\frac{2}{5}$",
        "$\\frac{1}{5}$",
        "$\\frac{8}{5}$",
        "$\\frac{4}{5}$",
      ],
      correctAnswer: 0,
      explanation:
        "Convertimos $1$ a $\\frac{5}{5}$. Luego, $\\frac{5}{5} - \\frac{3}{5} = \\frac{2}{5}$.",
    },
    {
      question: "¿Cuánto es $\\frac{1}{2} + \\frac{1}{4}$?",
      options: ["$\\frac{3}{4}$", "$\\frac{2}{6}$", "$\\frac{1}{4}$", "$1$"],
      correctAnswer: 0,
      explanation:
        "Equivalencia: $\\frac{1}{2} = \\frac{2}{4}$. Sumamos $\\frac{2}{4} + \\frac{1}{4} = \\frac{3}{4}$.",
    },
    {
      question: "¿Cuánto es $\\frac{1}{2} - \\frac{1}{4}$?",
      options: ["$\\frac{1}{4}$", "$\\frac{1}{2}$", "$\\frac{3}{4}$", "$0$"],
      correctAnswer: 0,
      explanation:
        "Equivalencia: $\\frac{2}{4} - \\frac{1}{4} = \\frac{1}{4}$.",
    },
    {
      question: "¿Cuánto es $\\frac{3}{4} + \\frac{1}{2}$?",
      options: ["$\\frac{5}{4}$", "$\\frac{4}{6}$", "$1$", "$\\frac{4}{4}$"],
      correctAnswer: 0,
      explanation:
        "Equivalencia: $\\frac{1}{2} = \\frac{2}{4}$. Sumamos $\\frac{3}{4} + \\frac{2}{4} = \\frac{5}{4}$.",
    },
    {
      question: "¿Cuánto es $\\frac{1}{3} + \\frac{1}{6}$?",
      options: [
        "$\\frac{1}{2}$",
        "$\\frac{2}{9}$",
        "$\\frac{1}{9}$",
        "$\\frac{2}{3}$",
      ],
      correctAnswer: 0,
      explanation:
        "Equivalencia: $\\frac{1}{3} = \\frac{2}{6}$. Sumamos $\\frac{2}{6} + \\frac{1}{6} = \\frac{3}{6} = \\frac{1}{2}$.",
    },
    {
      question: "¿Cuánto es $\\frac{2}{3} - \\frac{1}{6}$?",
      options: [
        "$\\frac{1}{2}$",
        "$\\frac{1}{3}$",
        "$\\frac{1}{6}$",
        "$\\frac{5}{6}$",
      ],
      correctAnswer: 0,
      explanation:
        "Equivalencia: $\\frac{2}{3} = \\frac{4}{6}$. Restamos $\\frac{4}{6} - \\frac{1}{6} = \\frac{3}{6} = \\frac{1}{2}$.",
    },
    {
      question: "¿Cuánto es $\\frac{5}{6} + \\frac{1}{3}$?",
      options: ["$\\frac{7}{6}$", "$\\frac{6}{9}$", "$1$", "$\\frac{4}{3}$"],
      correctAnswer: 0,
      explanation:
        "Equivalencia: $\\frac{1}{3} = \\frac{2}{6}$. Sumamos $\\frac{5}{6} + \\frac{2}{6} = \\frac{7}{6}$.",
    },
    {
      question: "¿Cuánto es $\\frac{7}{8} - \\frac{1}{4}$?",
      options: [
        "$\\frac{5}{8}$",
        "$\\frac{6}{4}$",
        "$\\frac{3}{8}$",
        "$\\frac{1}{2}$",
      ],
      correctAnswer: 0,
      explanation:
        "Equivalencia: $\\frac{1}{4} = \\frac{2}{8}$. Restamos $\\frac{7}{8} - \\frac{2}{8} = \\frac{5}{8}$.",
    },
    {
      question: "¿Cuánto es $\\frac{1}{5} + \\frac{3}{10}$?",
      options: [
        "$\\frac{1}{2}$",
        "$\\frac{4}{15}$",
        "$\\frac{2}{5}$",
        "$\\frac{4}{10}$",
      ],
      correctAnswer: 0,
      explanation:
        "Equivalencia: $\\frac{1}{5} = \\frac{2}{10}$. Sumamos $\\frac{2}{10} + \\frac{3}{10} = \\frac{5}{10} = \\frac{1}{2}$.",
    },
    {
      question: "¿Cuánto es $\\frac{9}{10} - \\frac{2}{5}$?",
      options: [
        "$\\frac{1}{2}$",
        "$\\frac{7}{5}$",
        "$\\frac{11}{10}$",
        "$\\frac{1}{5}$",
      ],
      correctAnswer: 0,
      explanation:
        "Equivalencia: $\\frac{2}{5} = \\frac{4}{10}$. Restamos $\\frac{9}{10} - \\frac{4}{10} = \\frac{5}{10} = \\frac{1}{2}$.",
    },
    {
      question: "¿Cuánto es $\\frac{1}{2} + \\frac{3}{8}$?",
      options: [
        "$\\frac{7}{8}$",
        "$\\frac{4}{10}$",
        "$\\frac{1}{8}$",
        "$\\frac{5}{8}$",
      ],
      correctAnswer: 0,
      explanation:
        "Equivalencia: $\\frac{1}{2} = \\frac{4}{8}$. Sumamos $\\frac{4}{8} + \\frac{3}{8} = \\frac{7}{8}$.",
    },
    {
      question: "¿Cuánto es $\\frac{1}{2} + \\frac{1}{3}$?",
      options: ["$\\frac{5}{6}$", "$\\frac{2}{5}$", "$\\frac{1}{6}$", "$1$"],
      correctAnswer: 0,
      explanation:
        "MCM de 2 y 3 es 6. Convertimos: $\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$.",
    },
    {
      question: "¿Cuánto es $\\frac{1}{3} + \\frac{1}{4}$?",
      options: [
        "$\\frac{7}{12}$",
        "$\\frac{2}{7}$",
        "$\\frac{1}{12}$",
        "$\\frac{5}{12}$",
      ],
      correctAnswer: 0,
      explanation:
        "MCM de 3 y 4 es 12. Convertimos: $\\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$.",
    },
    {
      question: "¿Cuánto es $\\frac{2}{5} + \\frac{1}{2}$?",
      options: [
        "$\\frac{9}{10}$",
        "$\\frac{3}{7}$",
        "$\\frac{1}{5}$",
        "$\\frac{7}{10}$",
      ],
      correctAnswer: 0,
      explanation:
        "MCM de 5 y 2 es 10. Convertimos: $\\frac{4}{10} + \\frac{5}{10} = \\frac{9}{10}$.",
    },
    {
      question: "¿Cuánto es $\\frac{3}{4} - \\frac{1}{3}$?",
      options: ["$\\frac{5}{12}$", "$2$", "$\\frac{1}{12}$", "$\\frac{7}{12}$"],
      correctAnswer: 0,
      explanation:
        "MCM de 4 y 3 es 12. Convertimos: $\\frac{9}{12} - \\frac{4}{12} = \\frac{5}{12}$.",
    },
    {
      question: "¿Cuánto es $\\frac{2}{3} + \\frac{3}{4}$?",
      options: [
        "$\\frac{17}{12}$",
        "$\\frac{5}{7}$",
        "$1$",
        "$\\frac{11}{12}$",
      ],
      correctAnswer: 0,
      explanation:
        "MCM de 3 y 4 es 12. Convertimos: $\\frac{8}{12} + \\frac{9}{12} = \\frac{17}{12}$.",
    },
    {
      question: "¿Cuánto es $\\frac{4}{5} - \\frac{1}{2}$?",
      options: [
        "$\\frac{3}{10}$",
        "$\\frac{3}{3}$",
        "$\\frac{1}{10}$",
        "$\\frac{7}{10}$",
      ],
      correctAnswer: 0,
      explanation:
        "MCM de 5 y 2 es 10. Convertimos: $\\frac{8}{10} - \\frac{5}{10} = \\frac{3}{10}$.",
    },
    {
      question: "¿Cuánto es $\\frac{1}{2} + \\frac{2}{5}$?",
      options: [
        "$\\frac{9}{10}$",
        "$\\frac{3}{7}$",
        "$\\frac{1}{10}$",
        "$\\frac{7}{10}$",
      ],
      correctAnswer: 0,
      explanation:
        "MCM de 2 y 5 es 10. Convertimos: $\\frac{5}{10} + \\frac{4}{10} = \\frac{9}{10}$.",
    },
    {
      question: "¿Cuánto es $\\frac{5}{6} - \\frac{3}{4}$?",
      options: [
        "$\\frac{1}{12}$",
        "$1$",
        "$\\frac{1}{24}$",
        "$\\frac{11}{12}$",
      ],
      correctAnswer: 0,
      explanation:
        "MCM de 6 y 4 es 12. Convertimos: $\\frac{10}{12} - \\frac{9}{12} = \\frac{1}{12}$.",
    },
    {
      question: "¿Cuánto es $\\frac{3}{5} + \\frac{2}{3}$?",
      options: [
        "$\\frac{19}{15}$",
        "$\\frac{5}{8}$",
        "$1$",
        "$\\frac{11}{15}$",
      ],
      correctAnswer: 0,
      explanation:
        "MCM de 5 y 3 es 15. Convertimos: $\\frac{9}{15} + \\frac{10}{15} = \\frac{19}{15}$.",
    },
    {
      question: "¿Cuánto es $\\frac{7}{8} - \\frac{2}{3}$?",
      options: [
        "$\\frac{5}{24}$",
        "$1$",
        "$\\frac{1}{24}$",
        "$\\frac{11}{24}$",
      ],
      correctAnswer: 0,
      explanation:
        "MCM de 8 y 3 es 24. Convertimos: $\\frac{21}{24} - \\frac{16}{24} = \\frac{5}{24}$.",
    },
    {
      question: "¿Cuánto es $2 \\cdot \\frac{1}{2}$?",
      options: ["$1$", "$\\frac{2}{4}$", "$\\frac{1}{4}$", "$0$"],
      correctAnswer: 0,
      explanation: "$2 \\cdot \\frac{1}{2} = \\frac{2}{2} = 1$.",
    },
    {
      question: "¿Cuánto es $3 \\cdot \\frac{1}{3}$?",
      options: ["$1$", "$\\frac{3}{9}$", "$\\frac{1}{9}$", "$3$"],
      correctAnswer: 0,
      explanation: "$3 \\cdot \\frac{1}{3} = \\frac{3}{3} = 1$.",
    },
    {
      question: "¿Cuánto es $4 \\cdot \\frac{1}{2}$?",
      options: ["$2$", "$\\frac{4}{2}$", "$\\frac{1}{8}$", "$4$"],
      correctAnswer: 0,
      explanation: "$4 \\cdot \\frac{1}{2} = \\frac{4}{2} = 2$.",
    },
    {
      question: "¿Cuánto es $5 \\cdot \\frac{2}{5}$?",
      options: ["$2$", "$\\frac{10}{25}$", "$\\frac{2}{25}$", "$5$"],
      correctAnswer: 0,
      explanation: "$5 \\cdot \\frac{2}{5} = \\frac{10}{5} = 2$.",
    },
    {
      question: "¿Cuánto es $6 \\cdot \\frac{1}{3}$?",
      options: ["$2$", "$\\frac{6}{9}$", "$\\frac{1}{18}$", "$3$"],
      correctAnswer: 0,
      explanation: "$6 \\cdot \\frac{1}{3} = \\frac{6}{3} = 2$.",
    },
    {
      question: "¿Cuánto es $8 \\cdot \\frac{3}{4}$?",
      options: ["$6$", "$\\frac{24}{32}$", "$\\frac{3}{32}$", "$12$"],
      correctAnswer: 0,
      explanation: "$8 \\cdot \\frac{3}{4} = \\frac{24}{4} = 6$.",
    },
    {
      question: "¿Cuánto es $(-2) \\cdot \\frac{1}{4}$?",
      options: ["$-\\frac{1}{2}$", "$-\\frac{2}{8}$", "$\\frac{1}{2}$", "$8$"],
      correctAnswer: 0,
      explanation: "$-2 \\cdot \\frac{1}{4} = -\\frac{2}{4} = -\\frac{1}{2}$.",
    },
    {
      question: "¿Cuánto es $10 \\cdot \\frac{3}{5}$?",
      options: ["$6$", "$\\frac{30}{50}$", "$\\frac{3}{50}$", "$2$"],
      correctAnswer: 0,
      explanation: "$10 \\cdot \\frac{3}{5} = \\frac{30}{5} = 6$.",
    },
    {
      question: "¿Cuánto es $(-3) \\cdot (-\\frac{1}{3})$?",
      options: ["$1$", "$-1$", "$9$", "$-9$"],
      correctAnswer: 0,
      explanation:
        "Menos por menos es más: $3 \\cdot \\frac{1}{3} = \\frac{3}{3} = 1$.",
    },
    {
      question: "¿Cuánto es $7 \\cdot \\frac{2}{7}$?",
      options: ["$2$", "$\\frac{14}{49}$", "$7$", "$1$"],
      correctAnswer: 0,
      explanation: "$7 \\cdot \\frac{2}{7} = \\frac{14}{7} = 2$.",
    },
    {
      question: "¿Cuánto es $\\frac{1}{2} \\cdot \\frac{1}{2}$?",
      options: ["$\\frac{1}{4}$", "$1$", "$\\frac{2}{4}$", "$\\frac{1}{2}$"],
      correctAnswer: 0,
      explanation:
        "Se multiplica directo: $\\frac{1 \\cdot 1}{2 \\cdot 2} = \\frac{1}{4}$.",
    },
    {
      question: "¿Cuánto es $\\frac{1}{3} \\cdot \\frac{1}{2}$?",
      options: ["$\\frac{1}{6}$", "$\\frac{2}{5}$", "$\\frac{1}{5}$", "$1$"],
      correctAnswer: 0,
      explanation:
        "Se multiplica directo: $\\frac{1 \\cdot 1}{3 \\cdot 2} = \\frac{1}{6}$.",
    },
    {
      question: "¿Cuánto es $\\frac{2}{3} \\cdot \\frac{1}{4}$?",
      options: [
        "$\\frac{1}{6}$",
        "$\\frac{2}{12}$",
        "$\\frac{3}{7}$",
        "$\\frac{1}{2}$",
      ],
      correctAnswer: 0,
      explanation:
        "$\\frac{2 \\cdot 1}{3 \\cdot 4} = \\frac{2}{12}$, que se simplifica a $\\frac{1}{6}$.",
    },
    {
      question: "¿Cuánto es $\\frac{3}{4} \\cdot \\frac{2}{5}$?",
      options: [
        "$\\frac{3}{10}$",
        "$\\frac{5}{9}$",
        "$\\frac{6}{20}$",
        "$\\frac{1}{2}$",
      ],
      correctAnswer: 0,
      explanation:
        "$\\frac{3 \\cdot 2}{4 \\cdot 5} = \\frac{6}{20}$, simplificando la mitad da $\\frac{3}{10}$.",
    },
    {
      question: "¿Cuánto es $\\frac{4}{5} \\cdot \\frac{5}{6}$?",
      options: ["$\\frac{2}{3}$", "$\\frac{20}{30}$", "$\\frac{9}{11}$", "$1$"],
      correctAnswer: 0,
      explanation:
        "$\\frac{4 \\cdot 5}{5 \\cdot 6} = \\frac{20}{30} = \\frac{2}{3}$.",
    },
    {
      question: "¿Cuánto es $\\frac{1}{5} \\cdot \\frac{3}{7}$?",
      options: [
        "$\\frac{3}{35}$",
        "$\\frac{4}{12}$",
        "$\\frac{1}{35}$",
        "$\\frac{3}{12}$",
      ],
      correctAnswer: 0,
      explanation:
        "Se multiplica directo: $\\frac{1 \\cdot 3}{5 \\cdot 7} = \\frac{3}{35}$.",
    },
    {
      question: "¿Cuánto es $\\frac{5}{8} \\cdot \\frac{2}{3}$?",
      options: [
        "$\\frac{5}{12}$",
        "$\\frac{10}{24}$",
        "$\\frac{7}{11}$",
        "$\\frac{1}{4}$",
      ],
      correctAnswer: 0,
      explanation:
        "$\\frac{5 \\cdot 2}{8 \\cdot 3} = \\frac{10}{24}$, simplificando da $\\frac{5}{12}$.",
    },
    {
      question: "¿Cuánto es $\\frac{7}{10} \\cdot \\frac{1}{2}$?",
      options: [
        "$\\frac{7}{20}$",
        "$\\frac{8}{12}$",
        "$\\frac{7}{12}$",
        "$\\frac{1}{10}$",
      ],
      correctAnswer: 0,
      explanation:
        "Se multiplica directo: $\\frac{7 \\cdot 1}{10 \\cdot 2} = \\frac{7}{20}$.",
    },
    {
      question: "¿Cuánto es $\\frac{3}{8} \\cdot \\frac{4}{9}$?",
      options: [
        "$\\frac{1}{6}$",
        "$\\frac{12}{72}$",
        "$\\frac{7}{17}$",
        "$\\frac{1}{2}$",
      ],
      correctAnswer: 0,
      explanation:
        "$\\frac{3 \\cdot 4}{8 \\cdot 9} = \\frac{12}{72}$, dividiendo entre 12 da $\\frac{1}{6}$.",
    },
    {
      question: "¿Cuánto es $\\frac{5}{12} \\cdot \\frac{6}{5}$?",
      options: [
        "$\\frac{1}{2}$",
        "$\\frac{30}{60}$",
        "$\\frac{11}{17}$",
        "$1$",
      ],
      correctAnswer: 0,
      explanation:
        "$\\frac{5 \\cdot 6}{12 \\cdot 5} = \\frac{30}{60} = \\frac{1}{2}$.",
    },
    {
      question: "¿Cuánto es $(-\\frac{1}{2}) \\cdot \\frac{3}{4}$?",
      options: [
        "$-\\frac{3}{8}$",
        "$\\frac{3}{8}$",
        "$-\\frac{4}{6}$",
        "$\\frac{4}{6}$",
      ],
      correctAnswer: 0,
      explanation:
        "Menos por más es menos: $-\\frac{1 \\cdot 3}{2 \\cdot 4} = -\\frac{3}{8}$.",
    },
    {
      question: "¿Cuánto es $(-\\frac{2}{5}) \\cdot (-\\frac{5}{2})$?",
      options: ["$1$", "$-1$", "$\\frac{10}{10}$", "$0$"],
      correctAnswer: 0,
      explanation:
        "Son recíprocos y de igual signo. Menos por menos da más: $\\frac{10}{10} = 1$.",
    },
    {
      question: "¿Cuánto es $\\frac{3}{7} \\cdot (-\\frac{14}{9})$?",
      options: [
        "$-\\frac{2}{3}$",
        "$\\frac{2}{3}$",
        "$-\\frac{42}{63}$",
        "$\\frac{1}{3}$",
      ],
      correctAnswer: 0,
      explanation:
        "$-\\frac{42}{63}$, dividimos entre 21 arriba y abajo, dando $-\\frac{2}{3}$.",
    },
    {
      question: "¿Cuánto es $(-\\frac{4}{5}) \\cdot \\frac{15}{16}$?",
      options: [
        "$-\\frac{3}{4}$",
        "$\\frac{3}{4}$",
        "$-\\frac{60}{80}$",
        "$\\frac{1}{4}$",
      ],
      correctAnswer: 0,
      explanation:
        "$-\\frac{60}{80}$, simplificamos quitando un cero y sacando mitad: $-\\frac{3}{4}$.",
    },
    {
      question:
        "¿Cuánto es $\\frac{1}{2} \\cdot \\frac{2}{3} \\cdot \\frac{3}{4}$?",
      options: [
        "$\\frac{1}{4}$",
        "$\\frac{6}{24}$",
        "$\\frac{1}{24}$",
        "$\\frac{1}{2}$",
      ],
      correctAnswer: 0,
      explanation:
        "Podemos cancelar cruzado: $\\frac{1 \\cdot 2 \\cdot 3}{2 \\cdot 3 \\cdot 4} = \\frac{1}{4}$.",
    },
    {
      question:
        "¿Cuánto es $(-\\frac{1}{3}) \\cdot (-\\frac{3}{4}) \\cdot (-\\frac{4}{5})$?",
      options: [
        "$-\\frac{1}{5}$",
        "$\\frac{1}{5}$",
        "$-\\frac{12}{60}$",
        "$1$",
      ],
      correctAnswer: 0,
      explanation:
        "Signo: $(-)(-)(-) = (-)$. Cancelamos 3 y 4 cruzados, queda $-\\frac{1}{5}$.",
    },
    {
      question: "¿Cuánto es $\\frac{5}{6} \\cdot (-\\frac{12}{25})$?",
      options: [
        "$-\\frac{2}{5}$",
        "$\\frac{2}{5}$",
        "$-\\frac{60}{150}$",
        "$\\frac{1}{5}$",
      ],
      correctAnswer: 0,
      explanation:
        "$-\\frac{60}{150}$, eliminamos un cero y dividimos $\\frac{-6}{15}$ entre 3, da $-\\frac{2}{5}$.",
    },
    {
      question: "¿Cuánto es $\\frac{7}{8} \\cdot (-\\frac{16}{21})$?",
      options: ["$-\\frac{2}{3}$", "$\\frac{2}{3}$", "$-\\frac{1}{3}$", "$1$"],
      correctAnswer: 0,
      explanation:
        "Cancelamos: $7/21=1/3$ y $-16/8=-2$. El producto es $-\\frac{2}{3}$.",
    },
    {
      question: "¿Cuánto es $(-\\frac{9}{10}) \\cdot (-\\frac{20}{27})$?",
      options: [
        "$\\frac{2}{3}$",
        "$-\\frac{2}{3}$",
        "$\\frac{180}{270}$",
        "$\\frac{1}{3}$",
      ],
      correctAnswer: 0,
      explanation:
        "$(-)(-) = (+)$. Cancelamos: $-20/-10 = 2$ y $-9/-27 = 1/3$. Da $\\frac{2}{3}$.",
    },
    {
      question:
        "¿Cuánto es $\\frac{2}{3} \\cdot \\frac{3}{2} \\cdot \\frac{5}{7}$?",
      options: ["$\\frac{5}{7}$", "$1$", "$\\frac{30}{42}$", "$\\frac{7}{5}$"],
      correctAnswer: 0,
      explanation:
        "Las primeras dos fracciones son recíprocas y su producto es 1. Así que $1 \\cdot \\frac{5}{7} = \\frac{5}{7}$.",
    },
    {
      question: "¿Cuánto es $1 \\div \\frac{1}{2}$?",
      options: ["$2$", "$\\frac{1}{2}$", "$1$", "$0$"],
      correctAnswer: 0,
      explanation:
        "Dividir entre una fracción es multiplicar por su recíproco: $1 \\cdot 2 = 2$.",
    },
    {
      question: "¿Cuánto es $2 \\div \\frac{1}{3}$?",
      options: ["$6$", "$\\frac{2}{3}$", "$\\frac{3}{2}$", "$\\frac{1}{6}$"],
      correctAnswer: 0,
      explanation: "$2 \\cdot \\frac{3}{1} = 6$.",
    },
    {
      question: "¿Cuánto es $4 \\div \\frac{2}{5}$?",
      options: ["$10$", "$\\frac{8}{5}$", "$\\frac{5}{8}$", "$2$"],
      correctAnswer: 0,
      explanation: "$4 \\cdot \\frac{5}{2} = \\frac{20}{2} = 10$.",
    },
    {
      question: "¿Cuánto es $\\frac{1}{2} \\div 2$?",
      options: ["$\\frac{1}{4}$", "$1$", "$\\frac{2}{2}$", "$4$"],
      correctAnswer: 0,
      explanation:
        "Equivale a $\\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$.",
    },
    {
      question: "¿Cuánto es $\\frac{1}{3} \\div 3$?",
      options: ["$\\frac{1}{9}$", "$1$", "$\\frac{3}{3}$", "$9$"],
      correctAnswer: 0,
      explanation:
        "Equivale a $\\frac{1}{3} \\cdot \\frac{1}{3} = \\frac{1}{9}$.",
    },
    {
      question: "¿Cuánto es $\\frac{2}{5} \\div 4$?",
      options: ["$\\frac{1}{10}$", "$\\frac{8}{5}$", "$\\frac{5}{8}$", "$10$"],
      correctAnswer: 0,
      explanation:
        "Equivale a $\\frac{2}{5} \\cdot \\frac{1}{4} = \\frac{2}{20} = \\frac{1}{10}$.",
    },
    {
      question: "¿Cuánto es $(-3) \\div \\frac{1}{4}$?",
      options: ["$-12$", "$-\\frac{3}{4}$", "$12$", "$\\frac{3}{4}$"],
      correctAnswer: 0,
      explanation: "Multiplicamos por el recíproco: $-3 \\cdot 4 = -12$.",
    },
    {
      question: "¿Cuánto es $\\frac{3}{4} \\div 6$?",
      options: ["$\\frac{1}{8}$", "$\\frac{18}{4}$", "$\\frac{4}{18}$", "$8$"],
      correctAnswer: 0,
      explanation:
        "Equivale a $\\frac{3}{4} \\cdot \\frac{1}{6} = \\frac{3}{24} = \\frac{1}{8}$.",
    },
    {
      question: "¿Cuánto es $5 \\div \\frac{5}{6}$?",
      options: ["$6$", "$\\frac{25}{6}$", "$1$", "$\\frac{1}{6}$"],
      correctAnswer: 0,
      explanation:
        "$5 \\cdot \\frac{6}{5}$, cancelamos los 5 y el resultado es $6$.",
    },
    {
      question: "¿Cuánto es $\\frac{7}{8} \\div (-7)$?",
      options: ["$-\\frac{1}{8}$", "$\\frac{1}{8}$", "$-\\frac{49}{8}$", "$8$"],
      correctAnswer: 0,
      explanation:
        "Equivale a $\\frac{7}{8} \\cdot -\\frac{1}{7} = -\\frac{7}{56} = -\\frac{1}{8}$.",
    },
    {
      question: "¿Cuánto es $\\frac{1}{2} \\div \\frac{1}{2}$?",
      options: ["$1$", "$\\frac{1}{4}$", "$\\frac{2}{4}$", "$0$"],
      correctAnswer: 0,
      explanation: "Cualquier número dividido por sí mismo es $1$.",
    },
    {
      question: "¿Cuánto es $\\frac{1}{3} \\div \\frac{1}{2}$?",
      options: ["$\\frac{2}{3}$", "$\\frac{1}{6}$", "$\\frac{3}{2}$", "$6$"],
      correctAnswer: 0,
      explanation:
        "Multiplicamos cruzado: $\\frac{1 \\cdot 2}{3 \\cdot 1} = \\frac{2}{3}$.",
    },
    {
      question: "¿Cuánto es $\\frac{3}{4} \\div \\frac{1}{4}$?",
      options: ["$3$", "$\\frac{3}{16}$", "$\\frac{1}{3}$", "$\\frac{12}{4}$"],
      correctAnswer: 0,
      explanation:
        "Tienen el mismo denominador, así que dividimos los numeradores: $3 \\div 1 = 3$.",
    },
    {
      question: "¿Cuánto es $\\frac{2}{5} \\div \\frac{3}{5}$?",
      options: ["$\\frac{2}{3}$", "$\\frac{6}{25}$", "$\\frac{3}{2}$", "$1$"],
      correctAnswer: 0,
      explanation:
        "Mismos denominadores, dividimos numeradores: $\\frac{2}{3}$.",
    },
    {
      question: "¿Cuánto es $\\frac{4}{7} \\div \\frac{2}{7}$?",
      options: ["$2$", "$\\frac{8}{49}$", "$\\frac{1}{2}$", "$4$"],
      correctAnswer: 0,
      explanation: "Mismos denominadores: $4 \\div 2 = 2$.",
    },
    {
      question: "¿Cuánto es $\\frac{5}{8} \\div \\frac{3}{4}$?",
      options: [
        "$\\frac{5}{6}$",
        "$\\frac{15}{32}$",
        "$\\frac{6}{5}$",
        "$\\frac{1}{2}$",
      ],
      correctAnswer: 0,
      explanation:
        "Multiplicamos cruzado: $\\frac{5 \\cdot 4}{8 \\cdot 3} = \\frac{20}{24} = \\frac{5}{6}$.",
    },
    {
      question: "¿Cuánto es $\\frac{2}{9} \\div \\frac{4}{3}$?",
      options: ["$\\frac{1}{6}$", "$\\frac{8}{27}$", "$6$", "$\\frac{2}{3}$"],
      correctAnswer: 0,
      explanation:
        "Multiplicamos cruzado: $\\frac{2 \\cdot 3}{9 \\cdot 4} = \\frac{6}{36} = \\frac{1}{6}$.",
    },
    {
      question: "¿Cuánto es $\\frac{7}{10} \\div \\frac{14}{5}$?",
      options: ["$\\frac{1}{4}$", "$\\frac{98}{50}$", "$4$", "$\\frac{1}{2}$"],
      correctAnswer: 0,
      explanation:
        "Multiplicamos cruzado: $\\frac{7 \\cdot 5}{10 \\cdot 14} = \\frac{35}{140} = \\frac{1}{4}$.",
    },
    {
      question: "¿Cuánto es $\\frac{3}{8} \\div \\frac{9}{16}$?",
      options: ["$\\frac{2}{3}$", "$\\frac{27}{128}$", "$\\frac{3}{2}$", "$1$"],
      correctAnswer: 0,
      explanation:
        "$\\frac{3}{8} \\cdot \\frac{16}{9} = \\frac{48}{72} = \\frac{2}{3}$.",
    },
    {
      question: "¿Cuánto es $\\frac{5}{12} \\div \\frac{10}{3}$?",
      options: ["$\\frac{1}{8}$", "$\\frac{50}{36}$", "$8$", "$\\frac{1}{4}$"],
      correctAnswer: 0,
      explanation:
        "$\\frac{5}{12} \\cdot \\frac{3}{10} = \\frac{15}{120} = \\frac{1}{8}$.",
    },
    {
      question: "Simplifica: $\\frac{\\frac{1}{2}}{\\frac{3}{4}}$",
      options: [
        "$\\frac{2}{3}$",
        "$\\frac{3}{8}$",
        "$\\frac{8}{3}$",
        "$\\frac{3}{2}$",
      ],
      correctAnswer: 0,
      explanation:
        "Ley del sándwich (extremos por extremos, medios por medios): $\\frac{1 \\cdot 4}{2 \\cdot 3} = \\frac{4}{6} = \\frac{2}{3}$.",
    },
    {
      question: "¿Cuánto es $(-\\frac{2}{3}) \\div \\frac{4}{9}$?",
      options: [
        "$-\\frac{3}{2}$",
        "$\\frac{3}{2}$",
        "$-\\frac{8}{27}$",
        "$\\frac{2}{3}$",
      ],
      correctAnswer: 0,
      explanation:
        "Multiplicamos cruzado: $-\\frac{2 \\cdot 9}{3 \\cdot 4} = -\\frac{18}{12} = -\\frac{3}{2}$.",
    },
    {
      question: "¿Cuánto es $(-\\frac{3}{5}) \\div (-\\frac{6}{25})$?",
      options: [
        "$\\frac{5}{2}$",
        "$-\\frac{5}{2}$",
        "$\\frac{18}{125}$",
        "$\\frac{2}{5}$",
      ],
      correctAnswer: 0,
      explanation:
        "Signo $+$. Multiplicamos cruzado: $\\frac{3 \\cdot 25}{5 \\cdot 6} = \\frac{75}{30} = \\frac{5}{2}$.",
    },
    {
      question: "Simplifica: $\\frac{\\frac{5}{6}}{\\frac{1}{3}}$",
      options: [
        "$\\frac{5}{2}$",
        "$\\frac{5}{18}$",
        "$\\frac{2}{5}$",
        "$\\frac{18}{5}$",
      ],
      correctAnswer: 0,
      explanation:
        "Extremos arriba, medios abajo: $\\frac{5 \\cdot 3}{6 \\cdot 1} = \\frac{15}{6} = \\frac{5}{2}$.",
    },
    {
      question: "Simplifica: $\\frac{2}{\\frac{1}{5}}$",
      options: ["$10$", "$\\frac{2}{5}$", "$\\frac{1}{10}$", "$5$"],
      correctAnswer: 0,
      explanation: "Es lo mismo que $2 \\cdot 5 = 10$.",
    },
    {
      question: "¿Cuánto es $\\frac{7}{4} \\div (-\\frac{21}{8})$?",
      options: [
        "$-\\frac{2}{3}$",
        "$\\frac{2}{3}$",
        "$-\\frac{147}{32}$",
        "$\\frac{3}{2}$",
      ],
      correctAnswer: 0,
      explanation:
        "Cruzado: $-\\frac{7 \\cdot 8}{4 \\cdot 21} = -\\frac{56}{84} = -\\frac{2}{3}$.",
    },
    {
      question: "¿Cuánto es $(-\\frac{11}{12}) \\div (-\\frac{33}{4})$?",
      options: ["$\\frac{1}{9}$", "$-\\frac{1}{9}$", "$9$", "$-9$"],
      correctAnswer: 0,
      explanation:
        "Signos negativos se cancelan. Cruzado: $\\frac{11 \\cdot 4}{12 \\cdot 33} = \\frac{44}{396} = \\frac{1}{9}$.",
    },
    {
      question: "Simplifica: $\\frac{\\frac{4}{5}}{2}$",
      options: [
        "$\\frac{2}{5}$",
        "$\\frac{8}{5}$",
        "$\\frac{5}{2}$",
        "$\\frac{5}{8}$",
      ],
      correctAnswer: 0,
      explanation:
        "Agregamos un 1 al 2: $\\frac{4 \\cdot 1}{5 \\cdot 2} = \\frac{4}{10} = \\frac{2}{5}$.",
    },
    {
      question: "¿Cuánto es $\\frac{15}{16} \\div \\frac{5}{8}$?",
      options: ["$\\frac{3}{2}$", "$\\frac{2}{3}$", "$\\frac{75}{128}$", "$1$"],
      correctAnswer: 0,
      explanation:
        "Cruzado: $\\frac{15 \\cdot 8}{16 \\cdot 5} = \\frac{120}{80} = \\frac{3}{2}$.",
    },
    {
      question: "¿Cuánto es $(-1) \\div (-\\frac{1}{2})$?",
      options: ["$2$", "$\\frac{1}{2}$", "$-2$", "$-\\frac{1}{2}$"],
      correctAnswer: 0,
      explanation: "Menos entre menos es más. $1 \\cdot 2 = 2$.",
    },
    {
      question:
        "Juan comió $\\frac{1}{4}$ de pizza y María $\\frac{1}{3}$. ¿Cuánta pizza comieron en total?",
      options: [
        "$\\frac{7}{12}$",
        "$\\frac{2}{7}$",
        "$\\frac{5}{12}$",
        "$\\frac{1}{2}$",
      ],
      correctAnswer: 0,
      explanation:
        "Suma con distinto denominador: $\\frac{1}{4} + \\frac{1}{3} = \\frac{3+4}{12} = \\frac{7}{12}$.",
    },
    {
      question:
        "De un tanque lleno, se gasta $\\frac{1}{2}$ en la mañana y $\\frac{1}{4}$ en la tarde. ¿Qué fracción queda?",
      options: [
        "$\\frac{1}{4}$",
        "$\\frac{3}{4}$",
        "$\\frac{1}{2}$",
        "$\\frac{1}{8}$",
      ],
      correctAnswer: 0,
      explanation:
        "Gasto total: $\\frac{1}{2} + \\frac{1}{4} = \\frac{3}{4}$. Queda $1 - \\frac{3}{4} = \\frac{1}{4}$.",
    },
    {
      question:
        "Pedro tiene 100. Gasta $\\frac{2}{5}$ en libros. ¿Cuánto dinero gastó?",
      options: ["$40", "$60", "$20", "$50"],
      correctAnswer: 0,
      explanation:
        "Multiplicamos la fracción por el total: $\\frac{2}{5} \\cdot 100 = \\frac{200}{5} = 40$.",
    },
    {
      question:
        "Si $\\frac{3}{4}$ de un terreno miden $600\\text{ m}^2$, ¿cuánto mide el terreno completo?",
      options: [
        "$800\\text{ m}^2$",
        "$450\\text{ m}^2$",
        "$900\\text{ m}^2$",
        "$1200\\text{ m}^2$",
      ],
      correctAnswer: 0,
      explanation:
        "$x \\cdot \\frac{3}{4} = 600$, despejamos $x = \\frac{600 \\cdot 4}{3} = 800$.",
    },
    {
      question:
        "Una botella tiene $1 \\frac{1}{2}$ litros de agua. Si se sirven vasos de $\\frac{1}{4}$ de litro, ¿cuántos vasos salen?",
      options: ["$6$", "$4$", "$8$", "$5$"],
      correctAnswer: 0,
      explanation:
        "$1 \\frac{1}{2} = \\frac{3}{2}$. Dividimos $\\frac{3}{2} \\div \\frac{1}{4} = \\frac{12}{2} = 6$.",
    },
    {
      question:
        "Un ciclista recorre $\\frac{2}{3}$ de su ruta de 30 km. ¿Cuántos kilómetros le faltan?",
      options: [
        "$10\\text{ km}$",
        "$20\\text{ km}$",
        "$15\\text{ km}$",
        "$5\\text{ km}$",
      ],
      correctAnswer: 0,
      explanation:
        "Le falta $\\frac{1}{3}$ de la ruta. $\\frac{1}{3} \\cdot 30 = 10$ km.",
    },
    {
      question:
        "Ana hace $\\frac{1}{5}$ de un trabajo en 1 hora. ¿En cuántas horas hará el trabajo completo?",
      options: ["$5$", "$4$", "$\\frac{1}{5}$", "$10$"],
      correctAnswer: 0,
      explanation:
        "Regla de tres o proporción: si $\\frac{1}{5}$ es 1 hora, el total $\\frac{5}{5}$ serán 5 horas.",
    },
    {
      question:
        "Tengo $\\frac{3}{4}$ de kg de azúcar y uso $\\frac{1}{8}$ de kg. ¿Cuánto me queda?",
      options: [
        "$\\frac{5}{8}\\text{ kg}$",
        "$\\frac{1}{2}\\text{ kg}$",
        "$\\frac{2}{4}\\text{ kg}$",
        "$\\frac{7}{8}\\text{ kg}$",
      ],
      correctAnswer: 0,
      explanation:
        "Resta: $\\frac{3}{4} - \\frac{1}{8} = \\frac{6}{8} - \\frac{1}{8} = \\frac{5}{8}$.",
    },
    {
      question:
        "El $\\frac{2}{3}$ de los alumnos de un salón de 36 son mujeres. ¿Cuántos hombres hay?",
      options: ["$12$", "$24$", "$18$", "$6$"],
      correctAnswer: 0,
      explanation:
        "Si $\\frac{2}{3}$ son mujeres, $\\frac{1}{3}$ son hombres. $\\frac{1}{3} \\cdot 36 = 12$.",
    },
    {
      question:
        "Se reparten 2 pasteles entre 5 niños. ¿Qué fracción le toca a cada uno?",
      options: [
        "$\\frac{2}{5}$",
        "$\\frac{5}{2}$",
        "$\\frac{1}{5}$",
        "$\\frac{2}{10}$",
      ],
      correctAnswer: 0,
      explanation:
        "Dividimos el total (2 pasteles) entre la cantidad de niños (5): $\\frac{2}{5}$.",
    },
    {
      question: "Una llave llena un tinaco en 4h. ¿Qué fracción llena en 1h?",
      options: ["$\\frac{1}{4}$", "$4$", "$\\frac{1}{2}$", "$\\frac{3}{4}$"],
      correctAnswer: 0,
      explanation:
        "En un tiempo proporcional, en 1 hora llenará una cuarta parte: $\\frac{1}{4}$.",
    },
    {
      question:
        "Si camino $\\frac{1}{2}$ km el lunes y $\\frac{3}{4}$ km el martes, ¿cuánto caminé en total?",
      options: [
        "$\\frac{5}{4}\\text{ km}$",
        "$\\frac{4}{6}\\text{ km}$",
        "$1\\text{ km}$",
        "$\\frac{3}{8}\\text{ km}$",
      ],
      correctAnswer: 0,
      explanation:
        "Suma: $\\frac{1}{2} + \\frac{3}{4} = \\frac{2}{4} + \\frac{3}{4} = \\frac{5}{4}$.",
    },
    {
      question:
        "Luis gana 1200. Ahorra $\\frac{1}{6}$ de su sueldo. ¿Cuánto ahorra?",
      options: ["$200", "$1000", "$600", "$300"],
      correctAnswer: 0,
      explanation: "Multiplicamos: $1200 \\cdot \\frac{1}{6} = 200$.",
    },
    {
      question:
        "Un paquete pesa $\\frac{5}{2}$ kg. ¿Cuánto pesan 4 paquetes iguales?",
      options: [
        "$10\\text{ kg}$",
        "$\\frac{20}{2}\\text{ kg}$",
        "$\\frac{5}{8}\\text{ kg}$",
        "$8\\text{ kg}$",
      ],
      correctAnswer: 0,
      explanation:
        "Multiplicamos: $4 \\cdot \\frac{5}{2} = \\frac{20}{2} = 10$.",
    },
    {
      question:
        "Si gasto $\\frac{3}{5}$ de mi dinero y me quedan $40, ¿cuánto tenía?",
      options: ["$100", "$60", "$200", "$120"],
      correctAnswer: 0,
      explanation:
        "Me sobran $\\frac{2}{5}$ que equivalen a $40. Resolviendo $x \\cdot \\frac{2}{5} = 40 \\rightarrow x = \\frac{200}{2} = 100$.",
    },
    {
      question:
        "Tengo $2 \\frac{1}{4}$ kg de frijol. Lo quiero empacar en bolsas de $\\frac{1}{4}$ kg. ¿Cuántas bolsas necesito?",
      options: ["$9$", "$8$", "$10$", "$4$"],
      correctAnswer: 0,
      explanation:
        "$2 \\frac{1}{4} = \\frac{9}{4}$. Dividimos: $\\frac{9}{4} \\div \\frac{1}{4} = 9$.",
    },
    {
      question:
        "La mitad de la tercera parte de un número es 5. ¿Cuál es el número?",
      options: ["$30$", "$15$", "$10$", "$60$"],
      correctAnswer: 0,
      explanation:
        "$\\frac{1}{2} \\cdot \\frac{1}{3} \\cdot x = 5 \\rightarrow \\frac{x}{6} = 5 \\rightarrow x = 30$.",
    },
    {
      question:
        "Un coche consume $\\frac{1}{8}$ de su tanque cada día. ¿En cuántos días se vacía?",
      options: ["$8$", "$4$", "$6$", "$10$"],
      correctAnswer: 0,
      explanation:
        "Para gastar el total ($\\frac{8}{8}$), tomará exactamente 8 días.",
    },
    {
      question:
        "Si $\\frac{2}{5}$ de un rollo de alambre son 40m, ¿cuánto miden $\\frac{3}{5}$ del mismo rollo?",
      options: [
        "$60\\text{ m}$",
        "$100\\text{ m}$",
        "$20\\text{ m}$",
        "$80\\text{ m}$",
      ],
      correctAnswer: 0,
      explanation:
        "Si $\\frac{2}{5}$ es 40, entonces $\\frac{1}{5}$ es 20. Por lo tanto, $\\frac{3}{5}$ serán $3 \\cdot 20 = 60$.",
    },
    {
      question:
        "Carlos pinta $\\frac{1}{3}$ de pared por hora, y su hermano $\\frac{1}{6}$. Juntos, ¿qué fracción pintan en una hora?",
      options: [
        "$\\frac{1}{2}$",
        "$\\frac{2}{9}$",
        "$\\frac{1}{9}$",
        "$\\frac{2}{3}$",
      ],
      correctAnswer: 0,
      explanation:
        "Sumamos sus tasas de trabajo: $\\frac{1}{3} + \\frac{1}{6} = \\frac{2}{6} + \\frac{1}{6} = \\frac{3}{6} = \\frac{1}{2}$.",
    },
    {
      question:
        "De 60 asistentes, $\\frac{1}{4}$ son niños. ¿Cuántos adultos hay?",
      options: ["$45$", "$15$", "$30$", "$50$"],
      correctAnswer: 0,
      explanation:
        "Los adultos son $\\frac{3}{4}$ del total. $\\frac{3}{4} \\cdot 60 = 45$.",
    },
    {
      question:
        "Un atleta corre $3 \\frac{1}{2}$ km en media hora. ¿Cuánto corre en una hora?",
      options: [
        "$7\\text{ km}$",
        "$3.5\\text{ km}$",
        "$1.75\\text{ km}$",
        "$10.5\\text{ km}$",
      ],
      correctAnswer: 0,
      explanation:
        "Si en $\\frac{1}{2}$ hora hace $3.5$ km, en $1$ hora hará el doble: $7$ km.",
    },
    {
      question:
        "Tengo $\\frac{5}{6}$ de una pizza. Si invito a 4 amigos y la dividimos equitativamente entre los 5, ¿qué fracción come cada uno?",
      options: [
        "$\\frac{1}{6}$",
        "$\\frac{5}{24}$",
        "$\\frac{1}{5}$",
        "$\\frac{5}{30}$",
      ],
      correctAnswer: 0,
      explanation:
        "Dividimos la cantidad entre el total de personas: $\\frac{5}{6} \\div 5 = \\frac{5}{30} = \\frac{1}{6}$.",
    },
    {
      question:
        "Un recipiente está lleno a $\\frac{3}{8}$ de su capacidad. Si se le agregan 10 litros se llena a $\\frac{5}{8}$. ¿Cuál es la capacidad total?",
      options: [
        "$40\\text{ L}$",
        "$20\\text{ L}$",
        "$30\\text{ L}$",
        "$80\\text{ L}$",
      ],
      correctAnswer: 0,
      explanation:
        "La diferencia $\\frac{5}{8} - \\frac{3}{8} = \\frac{2}{8} = \\frac{1}{4}$ equivale a $10$ litros. Si $\\frac{1}{4}$ son $10$L, el total son $40$L.",
    },
    {
      question:
        "El sueldo de un trabajador se incrementa en su cuarta parte. Si ganaba $800, ¿cuánto gana ahora?",
      options: ["$1000", "$1200", "$900", "$200"],
      correctAnswer: 0,
      explanation:
        "El incremento es $\\frac{1}{4}$ de 800, que es 200. $800 + 200 = 1000$.",
    },
    {
      question:
        "Una cuerda mide 12 metros. Si se cortan pedazos de $\\frac{3}{4}$ de metro, ¿cuántos pedazos se obtienen?",
      options: ["$16$", "$9$", "$15$", "$12$"],
      correctAnswer: 0,
      explanation:
        "Dividimos el total entre el tamaño del pedazo: $12 \\div \\frac{3}{4} = \\frac{48}{3} = 16$.",
    },
    {
      question: "¿Qué fracción representa 15 minutos de una hora?",
      options: [
        "$\\frac{1}{4}$",
        "$\\frac{1}{3}$",
        "$\\frac{1}{2}$",
        "$\\frac{1}{5}$",
      ],
      correctAnswer: 0,
      explanation:
        "Sabiendo que una hora tiene 60 minutos, $\\frac{15}{60}$ se simplifica a $\\frac{1}{4}$.",
    },
    {
      question:
        "Si leo $\\frac{1}{5}$ de un libro de 200 páginas por día, ¿cuántas páginas me faltan después de 3 días?",
      options: ["$80$", "$120$", "$60$", "$40$"],
      correctAnswer: 0,
      explanation:
        "Cada día leo $\\frac{1}{5} \\cdot 200 = 40$ pág. En 3 días leo 120. Me faltan $200 - 120 = 80$.",
    },
    {
      question:
        "Un pintor usa $\\frac{2}{3}$ de galón por habitación. Para 6 habitaciones necesita:",
      options: [
        "$4\\text{ galones}$",
        "$3\\text{ galones}$",
        "$6\\text{ galones}$",
        "$2\\text{ galones}$",
      ],
      correctAnswer: 0,
      explanation:
        "Multiplicamos: $6 \\cdot \\frac{2}{3} = \\frac{12}{3} = 4$ galones.",
    },
    {
      question: "¿Cuánto es la tercera parte de la mitad de 120?",
      options: ["$20$", "$40$", "$60$", "$30$"],
      correctAnswer: 0,
      explanation:
        "La mitad de 120 es 60. La tercera parte de 60 es $60 \\div 3 = 20$.",
    },
    {
      question: "Convierte $0.5$ a fracción.",
      options: [
        "$\\frac{1}{2}$",
        "$\\frac{1}{5}$",
        "$\\frac{5}{100}$",
        "$\\frac{2}{5}$",
      ],
      correctAnswer: 0,
      explanation:
        "$0.5 = \\frac{5}{10}$, que al simplificar se convierte en $\\frac{1}{2}$.",
    },
    {
      question: "Convierte $0.25$ a fracción.",
      options: ["$\\frac{1}{4}$", "$\\frac{1}{25}$", "$\\frac{25}{10}$", "$4$"],
      correctAnswer: 0,
      explanation:
        "$0.25 = \\frac{25}{100}$. Dividiendo ambos entre 25 nos da $\\frac{1}{4}$.",
    },
    {
      question: "Convierte $0.75$ a fracción.",
      options: [
        "$\\frac{3}{4}$",
        "$\\frac{7}{5}$",
        "$\\frac{75}{10}$",
        "$\\frac{4}{3}$",
      ],
      correctAnswer: 0,
      explanation:
        "$0.75 = \\frac{75}{100}$. Simplificando entre 25 obtenemos $\\frac{3}{4}$.",
    },
    {
      question: "Convierte $0.2$ a fracción.",
      options: ["$\\frac{1}{5}$", "$\\frac{2}{100}$", "$\\frac{1}{2}$", "$5$"],
      correctAnswer: 0,
      explanation:
        "$0.2 = \\frac{2}{10}$, que simplificado a su mitad es $\\frac{1}{5}$.",
    },
    {
      question: "Convierte $0.8$ a fracción.",
      options: [
        "$\\frac{4}{5}$",
        "$\\frac{8}{100}$",
        "$\\frac{5}{4}$",
        "$\\frac{1}{8}$",
      ],
      correctAnswer: 0,
      explanation:
        "$0.8 = \\frac{8}{10}$, que simplificando mitades es $\\frac{4}{5}$.",
    },
    {
      question: "Convierte $0.125$ a fracción.",
      options: [
        "$\\frac{1}{8}$",
        "$\\frac{125}{100}$",
        "$\\frac{1}{4}$",
        "$8$",
      ],
      correctAnswer: 0,
      explanation:
        "$0.125 = \\frac{125}{1000}$. Dividiendo entre 125 arriba y abajo llegamos a $\\frac{1}{8}$.",
    },
    {
      question: "Convierte $1.5$ a fracción.",
      options: [
        "$\\frac{3}{2}$",
        "$\\frac{15}{100}$",
        "$\\frac{2}{3}$",
        "$\\frac{1}{5}$",
      ],
      correctAnswer: 0,
      explanation:
        "$1.5 = \\frac{15}{10}$, dividiendo entre 5 nos queda $\\frac{3}{2}$.",
    },
    {
      question: "Convierte $2.25$ a fracción.",
      options: [
        "$\\frac{9}{4}$",
        "$\\frac{225}{1000}$",
        "$\\frac{4}{9}$",
        "$\\frac{1}{4}$",
      ],
      correctAnswer: 0,
      explanation:
        "$2.25 = \\frac{225}{100}$. Dividiendo entre 25 da $\\frac{9}{4}$.",
    },
    {
      question: "Convierte $0.6$ a fracción.",
      options: [
        "$\\frac{3}{5}$",
        "$\\frac{6}{100}$",
        "$\\frac{5}{3}$",
        "$\\frac{1}{6}$",
      ],
      correctAnswer: 0,
      explanation:
        "$0.6 = \\frac{6}{10}$. Simplificando con la mitad tenemos $\\frac{3}{5}$.",
    },
    {
      question: "Convierte $3.5$ a fracción.",
      options: [
        "$\\frac{7}{2}$",
        "$\\frac{35}{100}$",
        "$\\frac{2}{7}$",
        "$\\frac{5}{2}$",
      ],
      correctAnswer: 0,
      explanation:
        "$3.5 = \\frac{35}{10}$, dividiendo entre 5 obtenemos $\\frac{7}{2}$.",
    },
    {
      question: "Convierte $0.333...$ a fracción.",
      options: [
        "$\\frac{1}{3}$",
        "$\\frac{3}{10}$",
        "$\\frac{33}{100}$",
        "$3$",
      ],
      correctAnswer: 0,
      explanation:
        "Los decimales periódicos llevan nueves abajo: $\\frac{3}{9}$, que es $\\frac{1}{3}$.",
    },
    {
      question: "Convierte $0.666...$ a fracción.",
      options: [
        "$\\frac{2}{3}$",
        "$\\frac{6}{10}$",
        "$\\frac{66}{100}$",
        "$\\frac{3}{2}$",
      ],
      correctAnswer: 0,
      explanation:
        "Con periodo se divide entre 9: $\\frac{6}{9}$, simplificando entre 3 da $\\frac{2}{3}$.",
    },
    {
      question: "Convierte $0.111...$ a fracción.",
      options: [
        "$\\frac{1}{9}$",
        "$\\frac{1}{10}$",
        "$\\frac{11}{100}$",
        "$9$",
      ],
      correctAnswer: 0,
      explanation: "El periodo es 1, se coloca sobre 9: $\\frac{1}{9}$.",
    },
    {
      question: "Convierte $0.444...$ a fracción.",
      options: [
        "$\\frac{4}{9}$",
        "$\\frac{4}{10}$",
        "$\\frac{44}{100}$",
        "$\\frac{9}{4}$",
      ],
      correctAnswer: 0,
      explanation: "El periodo es 4, se coloca sobre 9: $\\frac{4}{9}$.",
    },
    {
      question: "Convierte $0.999...$ a fracción.",
      options: [
        "$1$",
        "$\\frac{9}{10}$",
        "$\\frac{99}{100}$",
        "$\\frac{9}{99}$",
      ],
      correctAnswer: 0,
      explanation:
        "$\\frac{9}{9} = 1$. Matemáticamente, $0.999...$ es exactamente igual a $1$.",
    },
    {
      question: "Convierte $\\frac{1}{2}$ a decimal.",
      options: ["$0.5$", "$0.2$", "$1.2$", "$0.05$"],
      correctAnswer: 0,
      explanation: "Al dividir $1 \\div 2$ obtenemos el valor exacto de $0.5$.",
    },
    {
      question: "Convierte $\\frac{1}{4}$ a decimal.",
      options: ["$0.25$", "$0.4$", "$1.4$", "$0.14$"],
      correctAnswer: 0,
      explanation: "Al dividir $1 \\div 4$ obtenemos $0.25$.",
    },
    {
      question: "Convierte $\\frac{3}{4}$ a decimal.",
      options: ["$0.75$", "$0.34$", "$3.4$", "$0.075$"],
      correctAnswer: 0,
      explanation: "Multiplica $0.25 \\cdot 3$ para llegar a $0.75$.",
    },
    {
      question: "Convierte $\\frac{1}{5}$ a decimal.",
      options: ["$0.2$", "$0.5$", "$0.15$", "$0.02$"],
      correctAnswer: 0,
      explanation: "$1 \\div 5 = 0.2$.",
    },
    {
      question: "Convierte $\\frac{2}{5}$ a decimal.",
      options: ["$0.4$", "$0.25$", "$0.04$", "$2.5$"],
      correctAnswer: 0,
      explanation:
        "Sabiendo que $1/5 = 0.2$, entonces $2/5$ es el doble, $0.4$.",
    },
    {
      question: "Convierte $\\frac{3}{8}$ a decimal.",
      options: ["$0.375$", "$0.38$", "$3.8$", "$0.83$"],
      correctAnswer: 0,
      explanation: "$1/8 = 0.125$. Multiplicado por 3 es $0.375$.",
    },
    {
      question: "Convierte $\\frac{5}{8}$ a decimal.",
      options: ["$0.625$", "$0.58$", "$5.8$", "$0.85$"],
      correctAnswer: 0,
      explanation: "Si $1/8 = 0.125$, multiplicando por 5 obtenemos $0.625$.",
    },
    {
      question: "Convierte $\\frac{1}{10}$ a decimal.",
      options: ["$0.1$", "$0.01$", "$1.0$", "$10.0$"],
      correctAnswer: 0,
      explanation:
        "Dividir por 10 es recorrer el punto un lugar a la izquierda: $0.1$.",
    },
    {
      question: "Convierte $\\frac{3}{20}$ a decimal.",
      options: ["$0.15$", "$0.32$", "$3.2$", "$0.015$"],
      correctAnswer: 0,
      explanation:
        "Multiplicamos por 5 arriba y abajo: $\\frac{15}{100} = 0.15$.",
    },
    {
      question: "Convierte $\\frac{7}{25}$ a decimal.",
      options: ["$0.28$", "$0.725$", "$7.25$", "$0.028$"],
      correctAnswer: 0,
      explanation:
        "Multiplicamos por 4 arriba y abajo: $\\frac{28}{100} = 0.28$.",
    },
    {
      question: "Convierte $\\frac{1}{3}$ a decimal.",
      options: ["$0.333...$", "$0.3$", "$0.13$", "$1.3$"],
      correctAnswer: 0,
      explanation:
        "La división $1 \\div 3$ nunca termina, resultando en un periodo constante de 3.",
    },
    {
      question: "Convierte $\\frac{2}{3}$ a decimal.",
      options: ["$0.666...$", "$0.6$", "$0.23$", "$2.3$"],
      correctAnswer: 0,
      explanation: "Si $\\frac{1}{3} = 0.333...$, el doble será $0.666...$",
    },
    {
      question: "Convierte $\\frac{1}{9}$ a decimal.",
      options: ["$0.111...$", "$0.1$", "$0.19$", "$1.9$"],
      correctAnswer: 0,
      explanation:
        "Cualquier dígito simple dividido entre 9 es un número periódico con ese mismo dígito.",
    },
    {
      question: "Convierte $\\frac{5}{9}$ a decimal.",
      options: ["$0.555...$", "$0.5$", "$0.59$", "$5.9$"],
      correctAnswer: 0,
      explanation:
        "Como es sobre 9, el número entero del numerador se convierte en su periodo: $0.555...$",
    },
    {
      question: "Convierte $\\frac{1}{6}$ a decimal.",
      options: ["$0.1666...$", "$0.16$", "$1.6$", "$0.61$"],
      correctAnswer: 0,
      explanation:
        "Al hacer $1 \\div 6$ nos da un decimal mixto donde el 6 se repite infinitamente.",
    },
    {
      question: "Convierte $0.5$ a porcentaje.",
      options: ["$50\\%$", "$5\\%$", "$500\\%$", "$0.5\\%$"],
      correctAnswer: 0,
      explanation:
        "Multiplicamos por $100$ y agregamos $\\%$: $0.5 \\cdot 100 = 50\\%$.",
    },
    {
      question: "Convierte $0.25$ a porcentaje.",
      options: ["$25\\%$", "$2.5\\%$", "$250\\%$", "$0.25\\%$"],
      correctAnswer: 0,
      explanation: "$0.25 \\cdot 100 = 25\\%$.",
    },
    {
      question: "Convierte $0.75$ a porcentaje.",
      options: ["$75\\%$", "$7.5\\%$", "$750\\%$", "$0.75\\%$"],
      correctAnswer: 0,
      explanation: "$0.75 \\cdot 100 = 75\\%$.",
    },
    {
      question: "Convierte $0.1$ a porcentaje.",
      options: ["$10\\%$", "$1\\%$", "$100\\%$", "$0.1\\%$"],
      correctAnswer: 0,
      explanation: "$0.1 \\cdot 100 = 10\\%$.",
    },
    {
      question: "Convierte $0.05$ a porcentaje.",
      options: ["$5\\%$", "$50\\%$", "$0.5\\%$", "$500\\%$"],
      correctAnswer: 0,
      explanation: "$0.05 \\cdot 100 = 5\\%$.",
    },
    {
      question: "Convierte $1.2$ a porcentaje.",
      options: ["$120\\%$", "$12\\%$", "$1.2\\%$", "$1200\\%$"],
      correctAnswer: 0,
      explanation:
        "Los valores mayores a 1 superan el cien por ciento: $1.2 \\cdot 100 = 120\\%$.",
    },
    {
      question: "Convierte $2.5$ a porcentaje.",
      options: ["$250\\%$", "$25\\%$", "$2.5\\%$", "$2500\\%$"],
      correctAnswer: 0,
      explanation: "$2.5 \\cdot 100 = 250\\%$.",
    },
    {
      question: "Convierte $0.005$ a porcentaje.",
      options: ["$0.5\\%$", "$5\\%$", "$50\\%$", "$0.05\\%$"],
      correctAnswer: 0,
      explanation: "Recorremos el punto decimal dos lugares: $0.5\\%$.",
    },
    {
      question: "Convierte $0.33$ a porcentaje.",
      options: ["$33\\%$", "$3.3\\%$", "$330\\%$", "$0.33\\%$"],
      correctAnswer: 0,
      explanation: "$0.33 \\cdot 100 = 33\\%$.",
    },
    {
      question: "Convierte $1.0$ a porcentaje.",
      options: ["$100\\%$", "$10\\%$", "$1\\%$", "$1000\\%$"],
      correctAnswer: 0,
      explanation:
        "El entero $1$ representa el todo absoluto, es decir, el $100\\%$.",
    },
    {
      question: "Convierte $50\\%$ a decimal.",
      options: ["$0.5$", "$5.0$", "$0.05$", "$50.0$"],
      correctAnswer: 0,
      explanation: "Dividimos por $100$: $50 / 100 = 0.5$.",
    },
    {
      question: "Convierte $25\\%$ a decimal.",
      options: ["$0.25$", "$2.5$", "$0.025$", "$25.0$"],
      correctAnswer: 0,
      explanation: "$25 / 100 = 0.25$.",
    },
    {
      question: "Convierte $75\\%$ a decimal.",
      options: ["$0.75$", "$7.5$", "$0.075$", "$75.0$"],
      correctAnswer: 0,
      explanation: "$75 / 100 = 0.75$.",
    },
    {
      question: "Convierte $10\\%$ a decimal.",
      options: ["$0.1$", "$1.0$", "$0.01$", "$10.0$"],
      correctAnswer: 0,
      explanation: "$10 / 100 = 0.1$.",
    },
    {
      question: "Convierte $5\\%$ a decimal.",
      options: ["$0.05$", "$0.5$", "$5.0$", "$0.005$"],
      correctAnswer: 0,
      explanation: "Cuidado al recorrer el punto: $5 / 100 = 0.05$.",
    },
    {
      question: "Convierte $120\\%$ a decimal.",
      options: ["$1.2$", "$12.0$", "$0.12$", "$120.0$"],
      correctAnswer: 0,
      explanation: "$120 / 100 = 1.2$.",
    },
    {
      question: "Convierte $250\\%$ a decimal.",
      options: ["$2.5$", "$25.0$", "$0.25$", "$250.0$"],
      correctAnswer: 0,
      explanation: "$250 / 100 = 2.5$.",
    },
    {
      question: "Convierte $0.5\\%$ a decimal.",
      options: ["$0.005$", "$0.05$", "$0.5$", "$5.0$"],
      correctAnswer: 0,
      explanation:
        "Recorremos el punto decimal dos lugares a la izquierda: $0.005$.",
    },
    {
      question: "Convierte $33\\%$ a decimal.",
      options: ["$0.33$", "$3.3$", "$0.033$", "$33.0$"],
      correctAnswer: 0,
      explanation: "$33 / 100 = 0.33$.",
    },
    {
      question: "Convierte $100\\%$ a decimal.",
      options: ["$1.0$", "$10.0$", "$0.1$", "$100.0$"],
      correctAnswer: 0,
      explanation: "El cien por ciento representa la unidad: $1.0$.",
    },
    {
      question: "¿Qué porcentaje representa $\\frac{1}{4}$?",
      options: ["$25\\%$", "$20\\%$", "$40\\%$", "$14\\%$"],
      correctAnswer: 0,
      explanation:
        "$\\frac{1}{4} = 0.25$, multiplicando por $100$ nos da $25\\%$.",
    },
    {
      question: "¿Qué porcentaje representa $\\frac{1}{2}$?",
      options: ["$50\\%$", "$20\\%$", "$12\\%$", "$5\\%$"],
      correctAnswer: 0,
      explanation: "La mitad de algo es siempre su $50\\%$.",
    },
    {
      question: "¿Qué fracción representa el $20\\%$?",
      options: [
        "$\\frac{1}{5}$",
        "$\\frac{1}{2}$",
        "$\\frac{1}{4}$",
        "$\\frac{2}{100}$",
      ],
      correctAnswer: 0,
      explanation:
        "$20\\% = \\frac{20}{100}$, simplificando da $\\frac{1}{5}$.",
    },
    {
      question: "¿Qué fracción representa el $75\\%$?",
      options: [
        "$\\frac{3}{4}$",
        "$\\frac{7}{5}$",
        "$\\frac{1}{4}$",
        "$\\frac{75}{10}$",
      ],
      correctAnswer: 0,
      explanation:
        "$75\\% = \\frac{75}{100}$, simplificando entre 25 nos da $\\frac{3}{4}$.",
    },
    {
      question:
        "Si algo cuesta el $150\\%$ de su valor original, en decimal es:",
      options: ["$1.5$", "$15.0$", "$0.15$", "$150.0$"],
      correctAnswer: 0,
      explanation: "$150\\% = \\frac{150}{100} = 1.5$.",
    },
    {
      question: "El $12.5\\%$ equivale en fracción a:",
      options: [
        "$\\frac{1}{8}$",
        "$\\frac{1}{4}$",
        "$\\frac{1}{12}$",
        "$\\frac{1}{5}$",
      ],
      correctAnswer: 0,
      explanation:
        "Sabiendo que $25\\% = 1/4$, su mitad ($12.5\\%$) es la mitad de $1/4$, o sea $1/8$.",
    },
    {
      question: "Un tercio ($\\frac{1}{3}$) es aproximadamente qué porcentaje:",
      options: ["$33.3\\%$", "$30\\%$", "$3\\%$", "$13\\%$"],
      correctAnswer: 0,
      explanation:
        "$\\frac{1}{3} = 0.333...$, multiplicado por $100$ es $33.333\\% \\approx 33.3\\%$.",
    },
    {
      question: "$0.6$ es equivalente a qué porcentaje y fracción:",
      options: [
        "$60\\%$ y $\\frac{3}{5}$",
        "$6\\%$ y $\\frac{3}{50}$",
        "$60\\%$ y $\\frac{1}{6}$",
        "$600\\%$ y $\\frac{6}{1}$",
      ],
      correctAnswer: 0,
      explanation:
        "$0.6 = 60\\%$ y también es igual a $\\frac{6}{10}$, que se simplifica a $\\frac{3}{5}$.",
    },
    {
      question: "El $40\\%$ es equivalente a:",
      options: [
        "$\\frac{2}{5}$",
        "$\\frac{1}{4}$",
        "$\\frac{4}{100}$",
        "$4.0$",
      ],
      correctAnswer: 0,
      explanation:
        "$40\\% = \\frac{40}{100}$, que dividiendo entre 20 nos deja en $\\frac{2}{5}$.",
    },
    {
      question: "¿Cuál es mayor: $0.8$, $75\\%$ o $\\frac{4}{5}$?",
      options: [
        "$0.8$ y $\\frac{4}{5}$ son iguales y mayores a $75\\%$",
        "$75\\%$",
        "$\\frac{4}{5}$",
        "Todos son iguales",
      ],
      correctAnswer: 0,
      explanation:
        "$0.8$ equivale a $\\frac{4}{5}$ ($80\\%$). $80\\% > 75\\%$.",
    },
    {
      question: "Calcula el $20\\%$ de $50$.",
      options: ["$10$", "$20$", "$5$", "$25$"],
      correctAnswer: 0,
      explanation:
        "Convertimos el porcentaje a decimal y multiplicamos: $0.20 \\cdot 50 = 10$.",
    },
    {
      question: "Calcula el $15\\%$ de $200$.",
      options: ["$30$", "$15$", "$300$", "$20$"],
      correctAnswer: 0,
      explanation: "$0.15 \\cdot 200 = 30$.",
    },
    {
      question: "Calcula el $50\\%$ de $84$.",
      options: ["$42$", "$84$", "$21$", "$50$"],
      correctAnswer: 0,
      explanation:
        "El 50% siempre es la mitad exacta de una cifra. $84 / 2 = 42$.",
    },
    {
      question: "Calcula el $25\\%$ de $120$.",
      options: ["$30$", "$25$", "$60$", "$40$"],
      correctAnswer: 0,
      explanation: "El 25% equivale a dividir entre 4. $120 / 4 = 30$.",
    },
    {
      question: "Calcula el $10\\%$ de $350$.",
      options: ["$35$", "$10$", "$3.5$", "$350$"],
      correctAnswer: 0,
      explanation:
        "El 10% equivale a recorrer el decimal un lugar a la izquierda: $35.0$.",
    },
    {
      question:
        "Si un pantalón cuesta $400 y tiene un $20\\%$ de descuento, ¿cuál es el descuento?",
      options: ["$80", "$20", "$320", "$40"],
      correctAnswer: 0,
      explanation: "Calculamos el descuento directo: $0.20 \\cdot 400 = 80$.",
    },
    {
      question:
        "Un artículo cuesta $500 y tiene un descuento del $30\\%$. ¿Cuánto se paga al final?",
      options: ["$350", "$150", "$470", "$300"],
      correctAnswer: 0,
      explanation:
        "Si te descuentan 30%, pagas el 70%. $0.70 \\cdot 500 = 350$.",
    },
    {
      question:
        "En un grupo de 40 alumnos, el $60\\%$ son mujeres. ¿Cuántas mujeres hay?",
      options: ["$24$", "$16$", "$60$", "$20$"],
      correctAnswer: 0,
      explanation: "$0.60 \\cdot 40 = 24$.",
    },
    {
      question: "Si el $25\\%$ de un número es $15$, ¿cuál es el número?",
      options: ["$60$", "$30$", "$45$", "$75$"],
      correctAnswer: 0,
      explanation: "$x \\cdot 0.25 = 15 \\rightarrow x = 15 / 0.25 = 60$.",
    },
    {
      question:
        "Una factura de $200 incluye un $16\\%$ de IVA. ¿Cuánto es el IVA?",
      options: ["$32", "$16", "$232", "$8"],
      correctAnswer: 0,
      explanation:
        "Calculamos solo el porcentaje del IVA: $0.16 \\cdot 200 = 32$.",
    },
    {
      question: "¿Qué porcentaje es $20$ de $80$?",
      options: ["$25\\%$", "$20\\%$", "$40\\%$", "$50\\%$"],
      correctAnswer: 0,
      explanation:
        "Dividimos la parte entre el total: $20 / 80 = 0.25 = 25\\%$.",
    },
    {
      question: "¿Qué porcentaje es $15$ de $60$?",
      options: ["$25\\%$", "$15\\%$", "$30\\%$", "$20\\%$"],
      correctAnswer: 0,
      explanation: "$15 / 60 = 1 / 4 = 0.25 = 25\\%$.",
    },
    {
      question:
        "De $500$ manzanas, $25$ salieron podridas. ¿Qué porcentaje está podrido?",
      options: ["$5\\%$", "$25\\%$", "$10\\%$", "$2.5\\%$"],
      correctAnswer: 0,
      explanation: "$25 / 500 = 1 / 20 = 0.05 = 5\\%$.",
    },
    {
      question:
        "Si gano $1000 y me aumentan el sueldo un $15\\%$, ¿cuánto ganaré ahora?",
      options: ["$1150", "$150", "$1015", "$1500"],
      correctAnswer: 0,
      explanation:
        "El aumento es $0.15 \\cdot 1000 = 150$. Sueldo total = $1000 + 150 = 1150$.",
    },
    {
      question:
        "Un equipo ganó 18 de 24 partidos. ¿Qué porcentaje de partidos ganó?",
      options: ["$75\\%$", "$18\\%$", "$80\\%$", "$60\\%$"],
      correctAnswer: 0,
      explanation: "$18 / 24 = 3 / 4 = 0.75 = 75\\%$.",
    },
    {
      question:
        "El precio de una TV subió de $4000 a $4400. ¿Cuál fue el porcentaje de aumento?",
      options: ["$10\\%$", "$400\\%$", "$40\\%$", "$11\\%$"],
      correctAnswer: 0,
      explanation:
        "La diferencia es 400. Respecto a los 4000 base, $400 / 4000 = 0.10 = 10\\%$.",
    },
    {
      question: "Si el $10\\%$ de $X$ es $45$, ¿cuánto es $X$?",
      options: ["$450$", "$45$", "$90$", "$4.5$"],
      correctAnswer: 0,
      explanation:
        "Si el 10% ($1/10$) es 45, el total (100%) es multiplicar por 10: $45 \\cdot 10 = 450$.",
    },
    {
      question:
        "En una tienda todo tiene $20\\%$ de descuento. Si pago $160 por unos zapatos, ¿cuál era su precio original?",
      options: ["$200", "$192", "$180", "$220"],
      correctAnswer: 0,
      explanation:
        "Pagas el 80%. $x \\cdot 0.80 = 160 \\rightarrow x = 160 / 0.8 = 200$.",
    },
    {
      question:
        "Una inversión de $5000 genera un $5\\%$ de interés anual. ¿Cuánto interés generará en un año?",
      options: ["$250", "$50", "$5250", "$25"],
      correctAnswer: 0,
      explanation: "Solo el interés: $5000 \\cdot 0.05 = 250$.",
    },
    {
      question:
        "Un producto cuesta $100. Sube un $10\\%$ y luego baja un $10\\%$. ¿Cuál es su precio final?",
      options: ["$99", "$100", "$110", "$90"],
      correctAnswer: 0,
      explanation:
        "Sube a 110. Luego baja 10% de 110 (que es 11): $110 - 11 = 99$.",
    },
    {
      question: "Calcula el $12.5\\%$ de $800$.",
      options: ["$100$", "$125$", "$80$", "$12.5$"],
      correctAnswer: 0,
      explanation:
        "$12.5\\%$ es igual a la fracción $\\frac{1}{8}$. $800 / 8 = 100$.",
    },
    {
      question: "Si $30$ es el $15\\%$ de un número, el número es:",
      options: ["$200$", "$150$", "$450$", "$300$"],
      correctAnswer: 0,
      explanation: "$x \\cdot 0.15 = 30 \\rightarrow x = 30 / 0.15 = 200$.",
    },
    {
      question:
        "En una votación, el ganador obtuvo el $55\\%$ de los votos. Si hubo 2000 votantes, ¿cuántos votos obtuvo?",
      options: ["$1100$", "$550$", "$110$", "$900$"],
      correctAnswer: 0,
      explanation: "$2000 \\cdot 0.55 = 1100$ votos.",
    },
    {
      question:
        "Compré un auto en $120,000 y lo vendí perdiendo el $15\\%$. ¿En cuánto lo vendí?",
      options: ["$102,000", "$18,000", "$138,000", "$105,000"],
      correctAnswer: 0,
      explanation:
        "Lo vendiste al 85% de su valor: $120,000 \\cdot 0.85 = 102,000$.",
    },
    {
      question: "El $0.5\\%$ de $4000$ es:",
      options: ["$20$", "$200$", "$5$", "$40$"],
      correctAnswer: 0,
      explanation:
        "Recuerda que $0.5\\% = 0.005$ en decimal. $4000 \\cdot 0.005 = 20$.",
    },
    {
      question: "Si a $80 le sumamos su $25\\%$, obtenemos:",
      options: ["$100", "$105", "$125", "$90"],
      correctAnswer: 0,
      explanation: "El 25% (un cuarto) de 80 es 20. Sumamos $80 + 20 = 100$.",
    },
    {
      question: "¿A qué cantidad su $10\\%$ es igual a $7$?",
      options: ["$70$", "$700$", "$0.7$", "$77$"],
      correctAnswer: 0,
      explanation: "$x \\cdot 0.10 = 7 \\rightarrow x = 70$.",
    },
    {
      question:
        "Un tanque de gasolina de 60 litros está al $15\\%$ de su capacidad. ¿Cuántos litros tiene?",
      options: [
        "$9\\text{ L}$",
        "$15\\text{ L}$",
        "$6\\text{ L}$",
        "$4\\text{ L}$",
      ],
      correctAnswer: 0,
      explanation: "$60 \\cdot 0.15 = 9$ litros.",
    },
    {
      question:
        "El precio con IVA ($16\\%$) de una computadora es $11,600. ¿Cuál es el precio sin IVA?",
      options: ["$10,000", "$1,600", "$9,744", "$11,000"],
      correctAnswer: 0,
      explanation:
        "El precio final es 116% del original. $x \\cdot 1.16 = 11600 \\rightarrow x = 10000$.",
    },
    {
      question:
        "Si 8 de cada 40 estudiantes usan lentes, ¿qué porcentaje no usa lentes?",
      options: ["$80\\%$", "$20\\%$", "$40\\%$", "$60\\%$"],
      correctAnswer: 0,
      explanation:
        "Usan lentes $8/40 = 20\\%$. Por lo tanto, el resto ($80\\%$) NO usa lentes.",
    },
    {
      question: "Si 3 kilos de manzana cuestan $60, ¿cuánto cuestan 5 kilos?",
      options: ["$100", "$90", "$120", "$80"],
      correctAnswer: 0,
      explanation: "Directa: $x = (5 \\cdot 60) / 3 = 100$.",
    },
    {
      question:
        "Si un coche recorre 150 km en 2 horas, ¿cuánto recorrerá en 5 horas a la misma velocidad?",
      options: [
        "$375\\text{ km}$",
        "$300\\text{ km}$",
        "$450\\text{ km}$",
        "$250\\text{ km}$",
      ],
      correctAnswer: 0,
      explanation: "Directa: $x = (5 \\cdot 150) / 2 = 750 / 2 = 375$ km.",
    },
    {
      question:
        "Si 4 obreros construyen un muro en 6 días, ¿en cuántos días lo construirán 8 obreros?",
      options: [
        "$3\\text{ días}$",
        "$12\\text{ días}$",
        "$8\\text{ días}$",
        "$4\\text{ días}$",
      ],
      correctAnswer: 0,
      explanation:
        "Inversa: Más obreros, menos tiempo. $4 \\cdot 6 = 8 \\cdot x \\rightarrow 24/8 = 3$ días.",
    },
    {
      question:
        "Para llenar una alberca 2 mangueras tardan 10 horas. ¿Cuánto tardarán 5 mangueras?",
      options: [
        "$4\\text{ horas}$",
        "$25\\text{ horas}$",
        "$5\\text{ horas}$",
        "$2\\text{ horas}$",
      ],
      correctAnswer: 0,
      explanation:
        "Inversa: $2 \\cdot 10 = 5 \\cdot x \\rightarrow 20 / 5 = 4$ horas.",
    },
    {
      question:
        "Si 5 refrescos cuestan $75, ¿cuántos refrescos compro con $150?",
      options: ["$10$", "$15$", "$8$", "$12$"],
      correctAnswer: 0,
      explanation:
        "Directa (proporción): con el doble de dinero (150) compras el doble de refrescos (10).",
    },
    {
      question:
        "Un tren va a 80 km/h y tarda 4h en llegar. Si fuera a 160 km/h, ¿cuánto tardaría?",
      options: [
        "$2\\text{ horas}$",
        "$8\\text{ horas}$",
        "$4\\text{ horas}$",
        "$6\\text{ horas}$",
      ],
      correctAnswer: 0,
      explanation:
        "Inversa: Al ir al doble de velocidad (160), tardará la mitad del tiempo (2h).",
    },
    {
      question:
        "Si 10 vacas comen cierta cantidad de pasto en 6 días, ¿cuántos días durará el pasto si hay 15 vacas?",
      options: [
        "$4\\text{ días}$",
        "$9\\text{ días}$",
        "$5\\text{ días}$",
        "$8\\text{ días}$",
      ],
      correctAnswer: 0,
      explanation:
        "Inversa: $10 \\cdot 6 = 15 \\cdot x \\rightarrow 60 / 15 = 4$ días.",
    },
    {
      question:
        "Una receta para 4 personas necesita 200g de harina. ¿Cuánta harina se necesita para 10 personas?",
      options: [
        "$500\\text{ g}$",
        "$400\\text{ g}$",
        "$800\\text{ g}$",
        "$600\\text{ g}$",
      ],
      correctAnswer: 0,
      explanation: "Directa: $x = (10 \\cdot 200) / 4 = 2000 / 4 = 500$g.",
    },
    {
      question:
        "Si 6 pintores pintan una casa en 8 días, ¿cuántos pintores se necesitan para hacerlo en 4 días?",
      options: ["$12$", "$3$", "$10$", "$8$"],
      correctAnswer: 0,
      explanation:
        "Inversa: Para hacerlo en la mitad de tiempo (4 días), requieres el doble de pintores (12).",
    },
    {
      question:
        "Un grifo arroja 20 L/min y llena un estanque en 1.5 h. ¿Cuánto tardará otro grifo que arroja 30 L/min?",
      options: [
        "$1\\text{ h}$",
        "$2\\text{ h}$",
        "$1.2\\text{ h}$",
        "$0.5\\text{ h}$",
      ],
      correctAnswer: 0,
      explanation:
        "Inversa: $20 \\cdot 1.5 = 30 \\cdot x \\rightarrow 30 = 30x \\rightarrow x = 1$.",
    },
    {
      question:
        "Si con $500 compro 20 dólares, ¿cuántos dólares compro con $1250?",
      options: ["$50$", "$40$", "$60$", "$25$"],
      correctAnswer: 0,
      explanation: "Directa: $x = (1250 \\cdot 20) / 500 = 25000 / 500 = 50$.",
    },
    {
      question:
        "3 máquinas hacen 300 piezas en 2 horas. ¿Cuántas piezas hacen 5 máquinas en 2 horas?",
      options: ["$500$", "$400$", "$600$", "$450$"],
      correctAnswer: 0,
      explanation:
        "Directa (mismo tiempo): Cada máquina hace 100 piezas. 5 máquinas harán 500.",
    },
    {
      question:
        "Un automóvil consume 8L de gasolina por cada 100 km. ¿Cuántos litros consumirá en 350 km?",
      options: [
        "$28\\text{ L}$",
        "$24\\text{ L}$",
        "$32\\text{ L}$",
        "$20\\text{ L}$",
      ],
      correctAnswer: 0,
      explanation: "Directa: $x = (350 \\cdot 8) / 100 = 2800 / 100 = 28$ L.",
    },
    {
      question:
        "Si 4 albañiles construyen 2 casas en 30 días, ¿cuántos albañiles se necesitan para construir 2 casas en 15 días?",
      options: ["$8$", "$2$", "$6$", "$10$"],
      correctAnswer: 0,
      explanation:
        "Inversa (mismas casas): Para reducir los días a la mitad (de 30 a 15), requieres el doble de personas (8).",
    },
    {
      question:
        "Para empapelar una habitación se necesitan 15 rollos de papel de 0.6m de ancho. ¿Cuántos rollos de 0.9m de ancho se necesitarían?",
      options: ["$10$", "$22.5$", "$12$", "$8$"],
      correctAnswer: 0,
      explanation:
        "Inversa: $15 \\cdot 0.6 = x \\cdot 0.9 \\rightarrow 9 = 0.9x \\rightarrow x = 10$.",
    },
    {
      question:
        "Si 5 operarios producen 100 zapatos en 4 días, ¿cuántos días tardarán 10 operarios en producir 100 zapatos?",
      options: ["$2$", "$8$", "$4$", "$5$"],
      correctAnswer: 0,
      explanation:
        "Inversa (misma producción): El doble de operarios lo harán en la mitad de tiempo (2 días).",
    },
    {
      question:
        "En un campamento hay comida para 20 personas durante 15 días. Si llegan 10 personas más, ¿para cuántos días alcanza la comida?",
      options: ["$10$", "$22.5$", "$12$", "$8$"],
      correctAnswer: 0,
      explanation:
        "Inversa: Habrá 30 personas. $20 \\cdot 15 = 30 \\cdot x \\rightarrow 300 / 30 = 10$.",
    },
    {
      question:
        "Un ciclista a 20 km/h tarda 3 horas. ¿A qué velocidad debe ir para tardar 2 horas?",
      options: [
        "$30\\text{ km/h}$",
        "$40\\text{ km/h}$",
        "$15\\text{ km/h}$",
        "$25\\text{ km/h}$",
      ],
      correctAnswer: 0,
      explanation:
        "Inversa: $20 \\cdot 3 = x \\cdot 2 \\rightarrow 60 = 2x \\rightarrow x = 30$.",
    },
    {
      question:
        "Si 2 carpinteros hacen 10 sillas en 5 días, ¿cuántas sillas harán 4 carpinteros en 5 días?",
      options: ["$20$", "$10$", "$40$", "$15$"],
      correctAnswer: 0,
      explanation:
        "Directa (mismo tiempo): Al doble de carpinteros, doble de sillas (20).",
    },
    {
      question:
        "Si 3 bombas extraen 10000 L de agua en 4 horas, ¿cuántas horas tardarán 6 bombas en extraer los mismos 10000 L?",
      options: [
        "$2\\text{ h}$",
        "$8\\text{ h}$",
        "$4\\text{ h}$",
        "$1\\text{ h}$",
      ],
      correctAnswer: 0,
      explanation:
        "Inversa (misma cantidad de agua): Doble de bombas, mitad del tiempo (2h).",
    },
    {
      question:
        "Una rueda da 200 vueltas en 10 minutos. ¿Cuántas vueltas dará en 1 hora y cuarto (75 min)?",
      options: ["$1500$", "$1200$", "$2000$", "$1000$"],
      correctAnswer: 0,
      explanation:
        "Directa: $x = (75 \\cdot 200) / 10 = 15000 / 10 = 1500$ vueltas.",
    },
    {
      question:
        "Si el precio de 2.5 kg de queso es $300, ¿cuánto cuestan 4 kg?",
      options: ["$480", "$500", "$400", "$600"],
      correctAnswer: 0,
      explanation: "Directa: $x = (4 \\cdot 300) / 2.5 = 1200 / 2.5 = 480$.",
    },
    {
      question:
        "12 obreros hacen una obra en 28 días. Si fueran 14 obreros, ¿cuántos días tardarían?",
      options: ["$24$", "$32$", "$20$", "$26$"],
      correctAnswer: 0,
      explanation:
        "Inversa: $12 \\cdot 28 = 14 \\cdot x \\rightarrow 336 / 14 = 24$ días.",
    },
    {
      question:
        "Un grifo da 15 L/min y llena un barril en 20 min. ¿Qué caudal debe tener para llenarlo en 12 min?",
      options: [
        "$25\\text{ L/min}$",
        "$30\\text{ L/min}$",
        "$20\\text{ L/min}$",
        "$10\\text{ L/min}$",
      ],
      correctAnswer: 0,
      explanation:
        "Inversa: $15 \\cdot 20 = x \\cdot 12 \\rightarrow 300 = 12x \\rightarrow 25$.",
    },
    {
      question: "Si 5 cuadernos cuestan $125, ¿cuánto cuestan 8 cuadernos?",
      options: ["$200", "$180", "$250", "$150"],
      correctAnswer: 0,
      explanation:
        "Directa: Un cuaderno cuesta 25. Entonces, $8 \\cdot 25 = 200$.",
    },
    {
      question:
        "Un motor consume 3 galones de gas para funcionar 5 horas. ¿Cuántos galones necesita para 15 horas?",
      options: ["$9$", "$6$", "$12$", "$15$"],
      correctAnswer: 0,
      explanation:
        "Directa: 15 es el triple de 5 horas. Necesita el triple de gasolina: $3 \\cdot 3 = 9$.",
    },
    {
      question:
        "4 tractores aran un campo en 12 horas. ¿En cuánto tiempo lo harán 6 tractores iguales?",
      options: [
        "$8\\text{ h}$",
        "$18\\text{ h}$",
        "$6\\text{ h}$",
        "$10\\text{ h}$",
      ],
      correctAnswer: 0,
      explanation:
        "Inversa: $4 \\cdot 12 = 6 \\cdot x \\rightarrow 48 / 6 = 8$ horas.",
    },
    {
      question:
        "Un corredor hace 10 km en 40 min. Si mantiene el ritmo, ¿cuánto tardará en hacer 15 km?",
      options: [
        "$60\\text{ min}$",
        "$50\\text{ min}$",
        "$75\\text{ min}$",
        "$45\\text{ min}$",
      ],
      correctAnswer: 0,
      explanation: "Directa: $x = (15 \\cdot 40) / 10 = 600 / 10 = 60$ min.",
    },
    {
      question:
        "Si 8 impresoras imprimen un lote en 3 horas, ¿cuántas impresoras se necesitan para imprimirlo en 2 horas?",
      options: ["$12$", "$10$", "$6$", "$16$"],
      correctAnswer: 0,
      explanation:
        "Inversa: $8 \\cdot 3 = x \\cdot 2 \\rightarrow 24 / 2 = 12$ impresoras.",
    },
    {
      question:
        "Tres amigos alquilan una casa por $900. Si se unen dos amigos más, ¿cuánto pagará cada uno en total?",
      options: ["$180", "$300", "$225", "$150"],
      correctAnswer: 0,
      explanation: "Serán 5 amigos en total. $900 \\div 5 = 180$ cada uno.",
    },
    {
      question: "¿A qué es igual $x^2 \\cdot x^3$?",
      options: ["$x^5$", "$x^6$", "$x$", "$2x^5$"],
      correctAnswer: 0,
      explanation:
        "En multiplicación de bases iguales, los exponentes se suman: $2+3=5$.",
    },
    {
      question: "¿A qué es igual $\\frac{a^5}{a^2}$?",
      options: ["$a^3$", "$a^7$", "$a^{2.5}$", "$\\frac{1}{a^3}$"],
      correctAnswer: 0,
      explanation:
        "En división de bases iguales, los exponentes se restan: $5-2=3$.",
    },
    {
      question: "¿A qué es igual $(y^3)^2$?",
      options: ["$y^6$", "$y^5$", "$y^9$", "$2y^3$"],
      correctAnswer: 0,
      explanation:
        "Potencia de potencia: se multiplican los exponentes: $3 \\cdot 2 = 6$.",
    },
    {
      question: "¿Cuánto vale $5^0$?",
      options: ["$1$", "$0$", "$5$", "$10$"],
      correctAnswer: 0,
      explanation:
        "Todo número distinto de cero elevado a la potencia cero es 1.",
    },
    {
      question: "¿A qué es igual $x^{-2}$?",
      options: ["$\\frac{1}{x^2}$", "$-x^2$", "$\\frac{x}{2}$", "$x^2$"],
      correctAnswer: 0,
      explanation:
        "Un exponente negativo indica el recíproco: $x^{-n} = \\frac{1}{x^n}$.",
    },
    {
      question: "¿A qué equivale $x^{1/2}$?",
      options: [
        "$\\sqrt{x}$",
        "$\\frac{x}{2}$",
        "$x^2$",
        "$\\frac{1}{\\sqrt{x}}$",
      ],
      correctAnswer: 0,
      explanation:
        "Un exponente a la $1/2$ es una raíz cuadrada ($2$ de índice).",
    },
    {
      question: "¿A qué equivale $y^{2/3}$?",
      options: [
        "$\\sqrt[3]{y^2}$",
        "$\\sqrt{y^3}$",
        "$\\frac{y}{2/3}$",
        "$y^6$",
      ],
      correctAnswer: 0,
      explanation:
        "El denominador del exponente fraccionario dicta la raíz, el numerador la potencia: $\\sqrt[3]{y^2}$.",
    },
    {
      question: "Simplifica: $2^3 \\cdot 2^2$",
      options: ["$2^5$", "$4^5$", "$2^6$", "$4^6$"],
      correctAnswer: 0,
      explanation:
        "Bases iguales multiplicando, se suman exponentes: $2^{3+2} = 2^5$.",
    },
    {
      question: "Simplifica: $(3^2)^3$",
      options: ["$3^6$", "$3^5$", "$9^3$", "$3^9$"],
      correctAnswer: 0,
      explanation:
        "Potencia de otra potencia: se multiplican $2 \\cdot 3 = 6$. Queda $3^6$.",
    },
    {
      question: "¿Cuánto es $4^{1/2}$?",
      options: ["$2$", "$8$", "$16$", "$\\frac{1}{2}$"],
      correctAnswer: 0,
      explanation: "$4^{1/2} = \\sqrt{4} = 2$.",
    },
    {
      question: "¿Cuánto es $8^{1/3}$?",
      options: ["$2$", "$24$", "$4$", "$\\frac{8}{3}$"],
      correctAnswer: 0,
      explanation: "$8^{1/3} = \\sqrt[3]{8} = 2$.",
    },
    {
      question: "Simplifica: $x^4 \\cdot x^{-1}$",
      options: ["$x^3$", "$x^5$", "$x^{-4}$", "$x$"],
      correctAnswer: 0,
      explanation: "Sumamos exponentes: $4 + (-1) = 3$.",
    },
    {
      question: "¿A qué es igual $\\sqrt{16}$?",
      options: ["$4$", "$8$", "$2$", "$\\frac{16}{2}$"],
      correctAnswer: 0,
      explanation:
        "Buscamos el número que multiplicado por sí mismo da 16: es el 4.",
    },
    {
      question: "¿A qué es igual $\\sqrt[3]{27}$?",
      options: ["$3$", "$9$", "$\\frac{27}{3}$", "$6$"],
      correctAnswer: 0,
      explanation:
        "Buscamos el número que multiplicado 3 veces por sí mismo da 27: es el 3.",
    },
    {
      question: "Simplifica: $(xy)^3$",
      options: ["$x^3 y^3$", "$xy^3$", "$x^3 y$", "$3xy$"],
      correctAnswer: 0,
      explanation:
        "La potencia de un producto aplica a cada factor: $x^3 y^3$.",
    },
    {
      question: "Simplifica: $(\\frac{a}{b})^2$",
      options: [
        "$\\frac{a^2}{b^2}$",
        "$\\frac{a}{b^2}$",
        "$\\frac{a^2}{b}$",
        "$\\frac{2a}{2b}$",
      ],
      correctAnswer: 0,
      explanation:
        "La potencia de una fracción eleva numerador y denominador independientemente.",
    },
    {
      question: "¿Cuánto es $100^{1/2}$?",
      options: ["$10$", "$50$", "$1000$", "$200$"],
      correctAnswer: 0,
      explanation: "$100^{1/2} = \\sqrt{100} = 10$.",
    },
    {
      question: "¿Cuánto es $16^{3/4}$?",
      options: ["$8$", "$12$", "$64$", "$4$"],
      correctAnswer: 0,
      explanation:
        "Primero raíz cuarta de 16 (es 2), y luego elevamos al cubo: $2^3 = 8$.",
    },
    {
      question: "Simplifica: $\\frac{m^5 \\cdot m}{m^3}$",
      options: ["$m^3$", "$m^2$", "$m^4$", "$m$"],
      correctAnswer: 0,
      explanation:
        "Arriba queda $m^{5+1} = m^6$. Dividimos entre $m^3$: restamos $6-3 = 3$.",
    },
    {
      question: "¿A qué es igual $\\frac{a^m}{a^n}$?",
      options: ["$a^{m-n}$", "$a^{m/n}$", "$a^{m+n}$", "$a^{n-m}$"],
      correctAnswer: 0,
      explanation:
        "Por ley, división con la misma base conlleva a resta del exponente inferior al superior.",
    },
    {
      question: "Convierte a exponente fraccionario: $\\sqrt[4]{x^3}$",
      options: ["$x^{3/4}$", "$x^{4/3}$", "$x^{12}$", "$x^{1/12}$"],
      correctAnswer: 0,
      explanation:
        "El índice (4) es denominador y la potencia interior (3) es numerador: $x^{3/4}$.",
    },
    {
      question: "¿Cuánto es $9^{-1/2}$?",
      options: ["$\\frac{1}{3}$", "$-3$", "$3$", "$-\\frac{1}{3}$"],
      correctAnswer: 0,
      explanation:
        "Negativo invierte: $\\frac{1}{9^{1/2}} = \\frac{1}{\\sqrt{9}} = \\frac{1}{3}$.",
    },
    {
      question: "Simplifica: $2x^0$ (asumiendo $x \\neq 0$)",
      options: ["$2$", "$0$", "$2x$", "$1$"],
      correctAnswer: 0,
      explanation:
        "El exponente 0 solo afecta a x. $x^0 = 1$. Así que $2 \\cdot 1 = 2$.",
    },
    {
      question: "¿A qué equivale $\\sqrt{a^2 b^4}$?",
      options: ["$ab^2$", "$ab$", "$a^2 b^2$", "$\\frac{a}{b^2}$"],
      correctAnswer: 0,
      explanation:
        "Separamos la raíz: $\\sqrt{a^2} \\cdot \\sqrt{b^4} = a \\cdot b^2$.",
    },
    {
      question: "Si $2^x = 8$, ¿cuánto vale $x$?",
      options: ["$3$", "$4$", "$2$", "$8$"],
      correctAnswer: 0,
      explanation: "$2^3 = 8$, por lo que $x=3$.",
    },
    {
      question: "Si $3^{x-1} = 9$, ¿cuánto vale $x$?",
      options: ["$3$", "$2$", "$4$", "$1$"],
      correctAnswer: 0,
      explanation: "$3^2 = 9$. Entonces $x-1 = 2 \\rightarrow x=3$.",
    },
    {
      question: "Simplifica: $(x^2 y^3)^4$",
      options: ["$x^8 y^{12}$", "$x^6 y^7$", "$x^2 y^{12}$", "$x^8 y^3$"],
      correctAnswer: 0,
      explanation:
        "Multiplicamos cada exponente interno por el externo: $2 \\cdot 4 = 8$ y $3 \\cdot 4 = 12$.",
    },
    {
      question: "¿Cuánto es $(-2)^3$?",
      options: ["$-8$", "$8$", "$-6$", "$6$"],
      correctAnswer: 0,
      explanation:
        "Número negativo a potencia impar da resultado negativo: $(-2)(-2)(-2) = -8$.",
    },
    {
      question: "¿Cuánto es $(-3)^2$?",
      options: ["$9$", "$-9$", "$6$", "$-6$"],
      correctAnswer: 0,
      explanation:
        "Número negativo a potencia par da positivo: $(-3)(-3) = 9$.",
    },
    {
      question: "Simplifica: $x^{1/2} \\cdot x^{1/2}$",
      options: ["$x$", "$x^2$", "$x^{1/4}$", "$1$"],
      correctAnswer: 0,
      explanation: "Sumamos exponentes: $1/2 + 1/2 = 1$. Queda $x^1 = x$.",
    },
    {
      question: "Simplifica: $3 + (5 - 2)$",
      options: ["$6$", "$10$", "$0$", "$4$"],
      correctAnswer: 0,
      explanation: "Paréntesis primero: $5-2=3$. Luego $3+3=6$.",
    },
    {
      question: "Simplifica: $8 - (4 + 1)$",
      options: ["$3$", "$5$", "$9$", "$11$"],
      correctAnswer: 0,
      explanation: "Paréntesis primero: $4+1=5$. Luego $8-5=3$.",
    },
    {
      question: "Simplifica: $2 \\cdot (3 + 4)$",
      options: ["$14$", "$10$", "$24$", "$11$"],
      correctAnswer: 0,
      explanation: "$3+4=7$. Multiplicamos por 2 y da 14.",
    },
    {
      question: "Simplifica: $10 - 2 \\cdot (3 + 1)$",
      options: ["$2$", "$32$", "$8$", "$16$"],
      correctAnswer: 0,
      explanation:
        "Paréntesis: $3+1=4$. Multiplicación: $2 \\cdot 4 = 8$. Resta: $10-8=2$.",
    },
    {
      question: "Simplifica: $\\frac{8 - 2}{3}$",
      options: ["$2$", "$4$", "$6$", "$\\frac{10}{3}$"],
      correctAnswer: 0,
      explanation: "Numerador: $8-2=6$. Fracción: $6/3=2$.",
    },
    {
      question: "Simplifica: $5 + [ 3 - (1 + 1) ]$",
      options: ["$6$", "$7$", "$5$", "$4$"],
      correctAnswer: 0,
      explanation:
        "Paréntesis: $1+1=2$. Corchetes: $3-2=1$. Exterior: $5+1=6$.",
    },
    {
      question: "Simplifica: $\\frac{12}{2 + 4}$",
      options: ["$2$", "$10$", "$8$", "$6$"],
      correctAnswer: 0,
      explanation: "Denominador: $2+4=6$. División: $12/6=2$.",
    },
    {
      question: "Simplifica: $-( -5 + 2 )$",
      options: ["$3$", "$-3$", "$7$", "$-7$"],
      correctAnswer: 0,
      explanation:
        "Interior: $-5+2=-3$. Menos exterior lo cambia: $-(-3) = 3$.",
    },
    {
      question: "Simplifica: $4 \\cdot [ 2 + ( 5 - 3 ) ]$",
      options: ["$16$", "$24$", "$12$", "$20$"],
      correctAnswer: 0,
      explanation:
        "Paréntesis $5-3=2$. Corchetes: $2+2=4$. Producto: $4 \\cdot 4 = 16$.",
    },
    {
      question: "Simplifica: $15 - \\{ 2 + [ 3 + (4 - 1) ] \\}$",
      options: ["$7$", "$11$", "$9$", "$5$"],
      correctAnswer: 0,
      explanation:
        "Paréntesis: 3. Corchete: $3+3=6$. Llave: $2+6=8$. Final: $15-8=7$.",
    },
    {
      question: "Simplifica algebraicamente: $a + (b - a)$",
      options: ["$b$", "$2a + b$", "$-b$", "$a - b$"],
      correctAnswer: 0,
      explanation:
        "Quitamos el paréntesis porque lo precede un $+$. $a + b - a = b$.",
    },
    {
      question: "Simplifica algebraicamente: $2x - (x + y)$",
      options: ["$x - y$", "$x + y$", "$3x - y$", "$y - x$"],
      correctAnswer: 0,
      explanation: "El signo menos afecta a todo dentro: $2x - x - y = x - y$.",
    },
    {
      question: "Simplifica: $3a - [ 2a + ( a - b ) ]$",
      options: ["$b$", "$a - b$", "$-b$", "$6a - b$"],
      correctAnswer: 0,
      explanation:
        "Corchete: $2a + a - b = 3a - b$. Afuera: $3a - (3a - b) = 3a - 3a + b = b$.",
    },
    {
      question: "Simplifica: $x - \\{ y - ( x - y ) \\}$",
      options: ["$2x - 2y$", "$2y$", "$0$", "$x - 2y$"],
      correctAnswer: 0,
      explanation:
        "Llave interior: $y - x + y = 2y - x$. Afuera: $x - (2y - x) = 2x - 2y$.",
    },
    {
      question: "Calcula: $(2^2 + 3) \\cdot 2$",
      options: ["$14$", "$10$", "$20$", "$24$"],
      correctAnswer: 0,
      explanation:
        "Exponente: $4$. Paréntesis: $4+3=7$. Producto: $7 \\cdot 2 = 14$.",
    },
    {
      question: "Calcula: $20 - 2 \\cdot 3^2$",
      options: ["$2$", "$162$", "$14$", "$26$"],
      correctAnswer: 0,
      explanation:
        "Exponente: $9$. Producto: $2 \\cdot 9 = 18$. Resta: $20 - 18 = 2$.",
    },
    {
      question: "Calcula: \\frac{(5 - 3)^3}{2}",
      options: ["$4$", "$2$", "$8$", "$1$"],
      correctAnswer: 0,
      explanation: "Paréntesis: $2$. Cubo: $2^3 = 8$. División: $8/2 = 4$.",
    },
    {
      question: "Simplifica: $2x \\cdot ( 3x - x )$",
      options: ["$4x^2$", "$6x^2 - x$", "$2x^2$", "$5x$"],
      correctAnswer: 0,
      explanation:
        "Paréntesis: $3x - x = 2x$. Multiplicamos $2x \\cdot 2x = 4x^2$.",
    },
    {
      question: "Simplifica: $-2 \\cdot ( x - 3 )$",
      options: ["$-2x + 6$", "$-2x - 6$", "$2x - 6$", "$-2x - 3$"],
      correctAnswer: 0,
      explanation:
        "Propiedad distributiva. $-2 \\cdot x = -2x$ y $-2 \\cdot (-3) = +6$.",
    },
    {
      question: "Calcula: $\\sqrt{16} + (3 - 1)^2$",
      options: ["$8$", "$10$", "$6$", "$12$"],
      correctAnswer: 0,
      explanation:
        "Raíz: $4$. Paréntesis y cuadrado: $2^2 = 4$. Suma: $4+4=8$.",
    },
    {
      question: "Simplifica: $5a - 3 \\cdot (a - 2)$",
      options: ["$2a + 6$", "$2a - 6$", "$8a - 6$", "$2a - 2$"],
      correctAnswer: 0,
      explanation:
        "Distribuimos el $-3$: $-3a + 6$. Juntamos: $5a - 3a + 6 = 2a + 6$.",
    },
    {
      question: "Calcula: $10 + [ 4 \\cdot ( 5 - 2 ) ]$",
      options: ["$22$", "$42$", "$14$", "$30$"],
      correctAnswer: 0,
      explanation:
        "Paréntesis: 3. Corchete (producto): $4 \\cdot 3 = 12$. Suma: $10+12=22$.",
    },
    {
      question: "Simplifica: $4 - \\{ 2 - [ 3 - ( 1 - 2 ) ] \\}$",
      options: ["$6$", "$2$", "$0$", "$4$"],
      correctAnswer: 0,
      explanation:
        "Par.: $-1$. Corchete: $3-(-1)=4$. Llave: $2-4=-2$. Exterior: $4-(-2)=6$.",
    },
    {
      question: "Calcula: $\\frac{3 \\cdot 4 - 2}{5}$",
      options: ["$2$", "$\\frac{10}{5}$", "$10$", "$4$"],
      correctAnswer: 0,
      explanation:
        "Numerador: primero el producto $12 - 2 = 10$. Luego $10/5 = 2$.",
    },
    {
      question: "Simplifica: $x + y - ( x - y )$",
      options: ["$2y$", "$2x$", "$0$", "$x + 2y$"],
      correctAnswer: 0,
      explanation:
        "Cambiamos signos de adentro: $x + y - x + y$. Cancelamos $x$ y nos da $2y$.",
    },
    {
      question: "Calcula: $[ ( \\frac{8}{2} ) + 1 ] \\cdot 3$",
      options: ["$15$", "$12$", "$9$", "$27$"],
      correctAnswer: 0,
      explanation:
        "División: 4. Corchete: $4+1=5$. Exterior: $5 \\cdot 3 = 15$.",
    },
    {
      question: "Simplifica: $3 \\cdot (2m - n) - 2 \\cdot (m + 2n)$",
      options: ["$4m - 7n$", "$4m - 3n$", "$8m + n$", "$4m - n$"],
      correctAnswer: 0,
      explanation:
        "$6m - 3n - 2m - 4n$. Agrupamos términos semejantes: $4m - 7n$.",
    },
    {
      question: "Calcula: $25 - ( 2^3 + 4 )$",
      options: ["$13$", "$17$", "$9$", "$21$"],
      correctAnswer: 0,
      explanation:
        "Potencia: 8. Paréntesis: $8+4=12$. Resta final: $25-12=13$.",
    },
    {
      question: "Simplifica: $- [ - ( - x ) ]$",
      options: ["$-x$", "$x$", "$0$", "$-1$"],
      correctAnswer: 0,
      explanation:
        "Contamos los signos negativos: 3. Menos por menos por menos es menos. $-x$.",
    },
    {
      question: "Calcula: $( \\sqrt{25} - 2 ) \\cdot ( 3^2 - 5 )$",
      options: ["$12$", "$16$", "$9$", "$15$"],
      correctAnswer: 0,
      explanation:
        "Par. izquierdo: $5-2=3$. Par. derecho: $9-5=4$. Producto: $3 \\cdot 4 = 12$.",
    },
  ],
};
