// Subsección (documento) del curso Probabilidad — nivel universidad.
// Sección: Álgebra de conjuntos. Contenido: explicación de qué es un conjunto
// y, al final, la definición intuitiva (sin perder formalismo).
export const DOCUMENTO = {
  id: "prob-uni-que-es-conjunto",
  titulo: "¿Qué es un conjunto?",
  materia: "Matemáticas",
  tema: "Probabilidad · Álgebra de conjuntos",
  nivel: "universidad",
  examenes: ["UNAM"],
  contenido: [
    {
      tipo: "parrafo",
      cuerpo: [
        { p: "En probabilidad estudiamos experimentos cuyos resultados no podemos predecir con certeza. Para hablar con precisión de *lo que puede ocurrir* necesitamos un lenguaje que permita agrupar resultados y operar con esas agrupaciones: el lenguaje de los *conjuntos*. Antes de definirlo con cuidado, conviene fijar la idea." },
      ],
    },
    {
      tipo: "parrafo",
      cuerpo: [
        { p: "Intuitivamente, un *conjunto* es una colección de objetos que pensamos como un todo único. A esos objetos los llamamos sus *elementos*. Por ejemplo, los resultados de lanzar un dado forman el conjunto $\\{1,2,3,4,5,6\\}$; los números naturales forman $\\mathbb{N}=\\{0,1,2,3,\\dots\\}$; y las cartas de una baraja forman también un conjunto." },
        { p: "Si un objeto $a$ es elemento de un conjunto $A$, escribimos $a\\in A$ y leemos “$a$ pertenece a $A$”. Si no lo es, escribimos $a\\notin A$. Así, $3\\in\\{1,2,3,4,5,6\\}$ pero $7\\notin\\{1,2,3,4,5,6\\}$." },
      ],
    },
    {
      tipo: "parrafo",
      cuerpo: [
        { p: "Hay dos maneras habituales de describir un conjunto. *Por extensión*, enumerando sus elementos entre llaves, como en $\\{1,2,3,4,5,6\\}$. *Por comprensión*, indicando la propiedad que caracteriza a sus elementos, como en $\\{\\,x : x\\ \\text{es par}\\,\\}$, que se lee “el conjunto de las $x$ tales que $x$ es par”." },
      ],
    },
    {
      tipo: "observacion",
      etiqueta: "obs:formalismo",
      titulo: "Sobre el formalismo",
      cuerpo: [
        { p: "Definir un conjunto con todo rigor exige introducir axiomas en un lenguaje de primer orden (la teoría $\\mathsf{ZFC}$). No es un tecnicismo gratuito: admitir que *cualquier* propiedad define un conjunto conduce a contradicciones. El ejemplo clásico es la *paradoja de Russell*. Consideremos el “conjunto de todos los conjuntos que no se pertenecen a sí mismos”:" },
        { math: "R = \\{\\,x : x \\notin x\\,\\}." },
        { p: "Si $R\\in R$, entonces por definición $R$ no se pertenece, es decir $R\\notin R$; y si $R\\notin R$, entonces cumple la propiedad y $R\\in R$. En símbolos, $R\\in R \\iff R\\notin R$, lo cual es imposible." },
        { p: "Para un curso de probabilidad no necesitamos toda esa maquinaria: trabajaremos siempre dentro de un conjunto *universal* fijo —el espacio muestral—, y eso basta para evitar estas patologías. Adoptamos entonces la teoría *intuitiva* de conjuntos, pero sin renunciar al rigor en lo que sí usaremos." },
      ],
    },
    {
      tipo: "parrafo",
      cuerpo: [
        { p: "De ese rigor conservamos dos principios. El primero es la *extensionalidad*: un conjunto queda determinado únicamente por cuáles son sus elementos; no importan ni el orden ni las repeticiones. Por eso" },
        { math: "\\{1,2\\} = \\{2,1\\} = \\{1,1,2\\}." },
        { p: "El segundo es la *pertenencia bien definida*: para cualquier objeto y cualquier conjunto, o bien el objeto pertenece al conjunto, o bien no pertenece, sin ambigüedad ni casos intermedios." },
      ],
    },
    {
      tipo: "definicion",
      etiqueta: "def:conjunto",
      titulo: "Conjunto (noción intuitiva)",
      cuerpo: [
        { p: "Un *conjunto* es una colección bien definida de objetos distintos, llamados sus *elementos*. Que la colección esté “bien definida” significa que, dado cualquier objeto, se puede decidir sin ambigüedad si es o no uno de sus elementos. Escribimos $x\\in A$ cuando $x$ es elemento de $A$, y $x\\notin A$ en caso contrario." },
        { p: "Por extensionalidad, dos conjuntos son iguales si y solo si tienen exactamente los mismos elementos:" },
        { math: "A = B \\iff \\forall x\\,(\\,x\\in A \\leftrightarrow x\\in B\\,)." },
      ],
    },
  ],
};
