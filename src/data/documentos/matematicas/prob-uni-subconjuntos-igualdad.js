// Subsección (documento) — Probabilidad, nivel universidad.
// Sección: Álgebra de conjuntos · Subconjuntos e igualdad.
export const DOCUMENTO = {
  id: "prob-uni-subconjuntos-igualdad",
  titulo: "Subconjuntos e igualdad",
  materia: "Matemáticas",
  tema: "Probabilidad · Álgebra de conjuntos",
  nivel: "universidad",
  examenes: ["UNAM"],
  contenido: [
    {
      tipo: "parrafo",
      cuerpo: [
        { p: "En probabilidad, los *eventos* son subconjuntos del espacio muestral. Por eso necesitamos comparar conjuntos: decir cuándo uno está *contenido* en otro y cuándo dos son *iguales*." },
      ],
    },
    {
      tipo: "definicion",
      etiqueta: "def:subconjunto",
      titulo: "Subconjunto (inclusión)",
      cuerpo: [
        { p: "Un conjunto $A$ es *subconjunto* de $B$, y escribimos $A\\subseteq B$, si todo elemento de $A$ es también elemento de $B$:" },
        { math: "A\\subseteq B \\iff \\forall x\\,(\\,x\\in A \\Rightarrow x\\in B\\,)." },
        { p: "También se dice que $A$ está *contenido* en $B$, o que $B$ *contiene* a $A$." },
      ],
    },
    {
      tipo: "notacion",
      etiqueta: "not:propio",
      titulo: "Subconjunto propio",
      cuerpo: [
        { p: "Si $A\\subseteq B$ pero $A\\neq B$ (esto es, $B$ tiene al menos un elemento que no está en $A$), decimos que $A$ es *subconjunto propio* de $B$ y escribimos $A\\subsetneq B$." },
      ],
    },
    {
      tipo: "definicion",
      etiqueta: "def:igualdad",
      titulo: "Igualdad por doble inclusión",
      cuerpo: [
        { p: "Dos conjuntos son iguales exactamente cuando cada uno está contenido en el otro:" },
        { math: "A = B \\iff (\\,A\\subseteq B \\ \\text{ y } \\ B\\subseteq A\\,)." },
        { p: "Esta es la herramienta estándar para *demostrar* que dos conjuntos son iguales: se prueba $A\\subseteq B$ y luego $B\\subseteq A$." },
      ],
    },
    {
      tipo: "definicion",
      etiqueta: "def:vacio",
      titulo: "Conjunto vacío y conjunto universal",
      cuerpo: [
        { p: "El *conjunto vacío*, denotado $\\varnothing$, es el conjunto que no tiene elementos; es único y cumple $\\varnothing\\subseteq A$ para todo conjunto $A$." },
        { p: "En cada contexto fijamos además un *conjunto universal* (o universo) $\\Omega$ que contiene a todos los conjuntos con los que trabajamos, de modo que $A\\subseteq\\Omega$ siempre. En probabilidad, $\\Omega$ es el espacio muestral." },
      ],
    },
    {
      tipo: "proposicion",
      etiqueta: "prop:inclusion",
      titulo: "Propiedades de la inclusión",
      cuerpo: [
        { p: "Para conjuntos cualesquiera $A, B, C$ dentro de un universo $\\Omega$ se cumple:" },
        { lista: [
          "$A\\subseteq A$  (reflexividad).",
          "Si $A\\subseteq B$ y $B\\subseteq C$, entonces $A\\subseteq C$  (transitividad).",
          "Si $A\\subseteq B$ y $B\\subseteq A$, entonces $A = B$  (antisimetría).",
          "$\\varnothing \\subseteq A \\subseteq \\Omega$.",
        ] },
      ],
    },
    {
      tipo: "demostracion",
      metodo: "transitividad",
      pasos: [
        { texto: "Sea $x\\in A$ un elemento arbitrario. Como $A\\subseteq B$, se tiene $x\\in B$." },
        { texto: "Como además $B\\subseteq C$, de $x\\in B$ se sigue $x\\in C$." },
        { texto: "Como $x$ era arbitrario, todo elemento de $A$ pertenece a $C$; es decir, $A\\subseteq C$." },
      ],
    },
    {
      tipo: "definicion",
      etiqueta: "def:potencia",
      titulo: "Conjunto potencia",
      cuerpo: [
        { p: "El *conjunto potencia* de $A$, denotado $\\mathcal{P}(A)$, es el conjunto de *todos* los subconjuntos de $A$:" },
        { math: "\\mathcal{P}(A) = \\{\\, X : X\\subseteq A \\,\\}." },
        { p: "Si $A$ tiene $n$ elementos, entonces $\\mathcal{P}(A)$ tiene $2^{\\,n}$ elementos." },
      ],
    },
    {
      tipo: "ejemplo",
      etiqueta: "ej:potencia",
      titulo: "Conjunto potencia de un par",
      cuerpo: [
        { p: "Sea $A=\\{1,2\\}$. Sus subconjuntos son $\\varnothing$, $\\{1\\}$, $\\{2\\}$ y $\\{1,2\\}$, de modo que" },
        { math: "\\mathcal{P}(A) = \\{\\, \\varnothing,\\ \\{1\\},\\ \\{2\\},\\ \\{1,2\\} \\,\\}," },
        { p: "y en efecto $|\\mathcal{P}(A)| = 2^{\\,2} = 4$." },
      ],
    },
  ],
};
