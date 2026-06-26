// Subsección (documento) — Probabilidad, nivel universidad.
// Sección: Álgebra de conjuntos · Operaciones (unión, intersección, complemento).
export const DOCUMENTO = {
  id: "prob-uni-operaciones-conjuntos",
  titulo: "Operaciones con conjuntos",
  materia: "Matemáticas",
  tema: "Probabilidad · Álgebra de conjuntos",
  nivel: "universidad",
  examenes: ["UNAM"],
  contenido: [
    {
      tipo: "parrafo",
      cuerpo: [
        { p: "Fijado un universo $\\Omega$, las *operaciones* construyen nuevos conjuntos —nuevos eventos— a partir de otros. Las básicas son la unión, la intersección y el complemento." },
        { figura: "venn-dos", caption: "Dos conjuntos $A$ y $B$ dentro del universo $\\Omega$; la zona común es $A\\cap B$." },
      ],
    },
    {
      tipo: "definicion",
      etiqueta: "def:union",
      titulo: "Unión",
      cuerpo: [
        { p: "La *unión* de $A$ y $B$ es el conjunto de los elementos que están en $A$ *o* en $B$ (incluyendo los que están en ambos):" },
        { math: "A\\cup B = \\{\\, x : x\\in A \\ \\lor\\ x\\in B \\,\\}." },
      ],
    },
    {
      tipo: "definicion",
      etiqueta: "def:interseccion",
      titulo: "Intersección",
      cuerpo: [
        { p: "La *intersección* de $A$ y $B$ es el conjunto de los elementos que están en $A$ *y* en $B$ a la vez:" },
        { math: "A\\cap B = \\{\\, x : x\\in A \\ \\land\\ x\\in B \\,\\}." },
      ],
    },
    {
      tipo: "definicion",
      etiqueta: "def:complemento",
      titulo: "Complemento",
      cuerpo: [
        { p: "El *complemento* de $A$ (respecto del universo $\\Omega$) es el conjunto de los elementos de $\\Omega$ que *no* están en $A$:" },
        { math: "A^{c} = \\{\\, x\\in\\Omega : x\\notin A \\,\\}." },
        { p: "También se denota $\\overline{A}$ o $A'$." },
      ],
    },
    {
      tipo: "definicion",
      etiqueta: "def:diferencia",
      titulo: "Diferencia y diferencia simétrica",
      cuerpo: [
        { p: "La *diferencia* $A\\setminus B$ son los elementos de $A$ que no están en $B$; equivale a $A\\cap B^{c}$:" },
        { math: "A\\setminus B = \\{\\, x : x\\in A \\ \\land\\ x\\notin B \\,\\} = A\\cap B^{c}." },
        { p: "La *diferencia simétrica* reúne lo que está en uno u otro, pero no en ambos:" },
        { math: "A\\,\\triangle\\,B = (A\\setminus B)\\cup(B\\setminus A)." },
      ],
    },
    {
      tipo: "definicion",
      etiqueta: "def:disjuntos",
      titulo: "Conjuntos disjuntos",
      cuerpo: [
        { p: "$A$ y $B$ son *disjuntos* (o *mutuamente excluyentes*) si no comparten ningún elemento:" },
        { math: "A\\cap B = \\varnothing." },
        { p: "En probabilidad, dos eventos disjuntos no pueden ocurrir simultáneamente." },
      ],
    },
    {
      tipo: "ejemplo",
      etiqueta: "ej:dado",
      titulo: "Operaciones con el dado",
      cuerpo: [
        { p: "Sea $\\Omega=\\{1,2,3,4,5,6\\}$, $A=\\{2,4,6\\}$ (caras pares) y $B=\\{4,5,6\\}$ (mayores que $3$). Entonces:" },
        { lista: [
          "$A\\cup B = \\{2,4,5,6\\}$",
          "$A\\cap B = \\{4,6\\}$",
          "$A^{c} = \\{1,3,5\\}$",
          "$A\\setminus B = \\{2\\}$",
        ] },
      ],
    },
  ],
};
