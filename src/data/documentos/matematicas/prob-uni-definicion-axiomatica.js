// Subsección 2.3 — Probabilidad, nivel universidad.
// Sección: Espacios de probabilidad · Definición axiomática de probabilidad.
// Nivel basado en Rincón, "Curso intermedio de probabilidad" (UNAM).
// Sin énfasis en σ-álgebras (temario).
export const DOCUMENTO = {
  id: "prob-uni-definicion-axiomatica",
  titulo: "Definición axiomática de probabilidad",
  materia: "Matemáticas",
  tema: "Probabilidad · Espacios de probabilidad",
  nivel: "universidad",
  examenes: ["UNAM"],
  contenido: [
    {
      tipo: "parrafo",
      cuerpo: [
        { p: "Las tres formas de la lección anterior —clásica, frecuentista y geométrica— asignan probabilidades de maneras distintas. En 1933, A. N. Kolmogórov propuso una definición *axiomática* que las unifica: en vez de decir *cómo* se calcula, fija las propiedades mínimas que toda probabilidad debe satisfacer." },
      ],
    },

    {
      tipo: "definicion",
      etiqueta: "def:medida",
      titulo: "Medida de probabilidad (axiomas de Kolmogórov)",
      cuerpo: [
        { p: "Sea $\\Omega$ un espacio muestral y sean los *eventos* los subconjuntos de $\\Omega$. Una *medida de probabilidad* es una función $P$ que a cada evento $A$ le asigna un número $P(A)$ y cumple los tres axiomas:" },
        { lista: [
          "*No negatividad:* $P(A)\\ge 0$ para todo evento $A$.",
          "*Normalización:* $P(\\Omega)=1$.",
          "*$\\sigma$-aditividad:* si $A_1,A_2,\\dots$ son eventos *ajenos dos a dos* (es decir, $A_i\\cap A_j=\\varnothing$ para $i\\neq j$), entonces la probabilidad de la unión es la suma de las probabilidades.",
        ] },
        { math: "P\\!\\left(\\bigcup_{n=1}^{\\infty} A_n\\right) = \\sum_{n=1}^{\\infty} P(A_n)." },
        { p: "A la terna $(\\Omega,\\mathcal{F},P)$ se le llama *espacio de probabilidad*." },
      ],
    },
    {
      tipo: "observacion",
      etiqueta: "obs:sin-sigma",
      titulo: "Sobre las σ-álgebras",
      cuerpo: [
        { p: "En rigor, $P$ se define sobre una *$\\sigma$-álgebra* $\\mathcal{F}$ de eventos (de ahí la $\\mathcal{F}$ en la terna). En este curso no haremos énfasis en ello: cuando $\\Omega$ es finito o numerable, tomamos como eventos a *todos* los subconjuntos de $\\Omega$ y los tres axiomas bastan. En espacios finitos, la $\\sigma$-aditividad se reduce a la *aditividad finita*." },
      ],
    },

    {
      tipo: "parrafo",
      cuerpo: [
        { p: "Lo notable es que las tres asignaciones de la lección anterior *son* medidas de probabilidad: cada una cumple los tres axiomas." },
        { lista: [
          "*Clásica:* $P(A)=|A|/|\\Omega|$ es no negativa, $P(\\Omega)=|\\Omega|/|\\Omega|=1$, y aditiva porque la cardinalidad de una unión ajena es la suma de cardinalidades.",
          "*Geométrica:* $P(A)=\\text{Área}(A)/\\text{Área}(\\Omega)$ cumple lo mismo, pues el área es no negativa y aditiva sobre regiones ajenas.",
        ] },
      ],
    },
    {
      tipo: "ejemplo",
      etiqueta: "ej:medida-discreta",
      titulo: "Una probabilidad sobre los naturales",
      cuerpo: [
        { p: "Sea $\\Omega=\\mathbb{N}=\\{0,1,2,\\dots\\}$ y para $A\\subseteq\\mathbb{N}$ definamos" },
        { math: "P(A)=\\sum_{n\\in A}\\dfrac{1}{2^{\\,n+1}}." },
        { p: "Como $\\displaystyle\\sum_{n=0}^{\\infty} 1/2^{\\,n+1}=1$, se tiene $P(\\mathbb{N})=1$; además $P\\ge 0$ y es $\\sigma$-aditiva. Es, por tanto, una medida de probabilidad sobre un espacio *infinito*, donde la regla clásica no aplicaría." },
      ],
    },

    {
      tipo: "observacion",
      etiqueta: "obs:propiedades",
      titulo: "De los axiomas se deduce todo lo demás",
      cuerpo: [
        { p: "A partir de estos tres axiomas se demuestran *todas* las propiedades usuales: $P(\\varnothing)=0$, $P(A^{c})=1-P(A)$, la monotonía $A\\subseteq B\\Rightarrow P(A)\\le P(B)$, la cota $0\\le P(A)\\le 1$ y la fórmula $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$. Las veremos en la siguiente lección." },
      ],
    },

    {
      tipo: "ejercicio",
      etiqueta: "ej:verificar-axiomas",
      titulo: "Probabilidad de un evento por sus elementos",
      cuerpo: [
        { p: "Sea $\\Omega$ finito y equiprobable con la probabilidad clásica. Usando solo la $\\sigma$-aditividad (aquí, aditividad finita), muestra que $\\displaystyle P(A)=\\sum_{\\omega\\in A} P(\\{\\omega\\})$ y deduce que $P(\\{\\omega\\})=1/|\\Omega|$ para cada resultado $\\omega$." },
      ],
      solucion: [
        { p: "Un evento $A=\\{\\omega_1,\\dots,\\omega_k\\}$ es la unión ajena de sus eventos simples $\\{\\omega_1\\},\\dots,\\{\\omega_k\\}$. Por aditividad," },
        { math: "P(A)=\\sum_{\\omega\\in A} P(\\{\\omega\\})." },
        { p: "Tomando $A=\\Omega$ y usando que todos los $P(\\{\\omega\\})$ son iguales (equiprobabilidad) y que $P(\\Omega)=1$, hay $|\\Omega|$ sumandos iguales que suman $1$, de donde $P(\\{\\omega\\})=1/|\\Omega|$. Entonces $P(A)=|A|/|\\Omega|$, recuperando la regla de Laplace." },
      ],
    },
  ],
};
