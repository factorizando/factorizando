// Subsección (documento) — Probabilidad, nivel universidad.
// Sección: Álgebra de conjuntos · Leyes del álgebra de conjuntos.
export const DOCUMENTO = {
  id: "prob-uni-leyes-conjuntos",
  titulo: "Leyes del álgebra de conjuntos",
  materia: "Matemáticas",
  tema: "Probabilidad · Álgebra de conjuntos",
  nivel: "universidad",
  examenes: ["UNAM"],
  contenido: [
    {
      tipo: "parrafo",
      cuerpo: [
        { p: "Las siguientes *identidades* permiten transformar y simplificar expresiones con conjuntos —y, más adelante, con eventos—. Se cumplen para cualesquiera $A, B, C \\subseteq \\Omega$." },
      ],
    },
    {
      tipo: "teorema",
      etiqueta: "thm:leyes",
      titulo: "Leyes del álgebra de conjuntos",
      cuerpo: [
        { lista: [
          "*Conmutatividad:* $A\\cup B = B\\cup A$ y $A\\cap B = B\\cap A$.",
          "*Asociatividad:* $(A\\cup B)\\cup C = A\\cup(B\\cup C)$ y $(A\\cap B)\\cap C = A\\cap(B\\cap C)$.",
          "*Distributividad:* $A\\cap(B\\cup C) = (A\\cap B)\\cup(A\\cap C)$ y $A\\cup(B\\cap C) = (A\\cup B)\\cap(A\\cup C)$.",
          "*Identidad:* $A\\cup\\varnothing = A$ y $A\\cap\\Omega = A$.",
          "*Dominación:* $A\\cup\\Omega = \\Omega$ y $A\\cap\\varnothing = \\varnothing$.",
          "*Idempotencia:* $A\\cup A = A$ y $A\\cap A = A$.",
          "*Complemento:* $A\\cup A^{c} = \\Omega$ y $A\\cap A^{c} = \\varnothing$.",
          "*Doble complemento:* $(A^{c})^{c} = A$.",
          "*Absorción:* $A\\cup(A\\cap B) = A$ y $A\\cap(A\\cup B) = A$.",
          "*Leyes de De Morgan:* $(A\\cup B)^{c} = A^{c}\\cap B^{c}$ y $(A\\cap B)^{c} = A^{c}\\cup B^{c}$.",
        ] },
      ],
    },
    {
      tipo: "demostracion",
      metodo: "una ley de De Morgan, por equivalencia de pertenencia",
      pasos: [
        { texto: "Probamos $(A\\cup B)^{c} = A^{c}\\cap B^{c}$. Tomamos $x\\in\\Omega$ y analizamos su pertenencia a cada lado." },
        { texto: "Por definición de complemento y de unión:", math: "x\\in (A\\cup B)^{c} \\iff x\\notin (A\\cup B) \\iff \\neg(\\,x\\in A \\ \\lor\\ x\\in B\\,)." },
        { texto: "Negando la disyunción (De Morgan de la lógica):", math: "\\neg(\\,x\\in A \\lor x\\in B\\,) \\iff (\\,x\\notin A\\,) \\ \\land\\ (\\,x\\notin B\\,)." },
        { texto: "Y esto es justo la pertenencia a la intersección de los complementos:", math: "(\\,x\\notin A\\,)\\land(\\,x\\notin B\\,) \\iff x\\in A^{c}\\cap B^{c}." },
        { texto: "Como la pertenencia coincide para todo $x\\in\\Omega$, ambos conjuntos son iguales." },
      ],
    },
    {
      tipo: "observacion",
      etiqueta: "obs:dualidad",
      titulo: "Principio de dualidad",
      cuerpo: [
        { p: "Observa la simetría: cada ley sigue siendo válida si intercambiamos *simultáneamente* $\\cup \\leftrightarrow \\cap$ y $\\varnothing \\leftrightarrow \\Omega$. Este *principio de dualidad* permite obtener gratis la versión dual de cada identidad." },
      ],
    },
  ],
};
