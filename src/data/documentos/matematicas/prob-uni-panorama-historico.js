// Subsección 2.2 — Probabilidad, nivel universidad.
// Sección: Espacios de probabilidad · Panorama histórico: frecuentista, clásica y geométrica.
// Integra el contenido del antiguo documento "Probabilidad Clásica".
// Nivel basado en Rincón, "Curso intermedio de probabilidad" (UNAM).
export const DOCUMENTO = {
  id: "prob-uni-panorama-historico",
  titulo: "Panorama histórico: frecuentista, clásica y geométrica",
  materia: "Matemáticas",
  tema: "Probabilidad · Espacios de probabilidad",
  nivel: "universidad",
  examenes: ["UNAM"],
  contenido: [
    {
      tipo: "parrafo",
      cuerpo: [
        { p: "La probabilidad nació en el siglo XVII al estudiar los juegos de azar (Cardano, y la célebre correspondencia entre Fermat y Pascal). De ahí surgió la noción *clásica*, formalizada por Laplace; más tarde aparecieron la interpretación *frecuentista* (empírica) y la *geométrica* para problemas continuos. Todas culminan en 1933 con la definición *axiomática* de Kolmogórov (siguiente lección)." },
        { p: "Antes de la axiomática, conviene conocer las tres maneras clásicas de *asignar* probabilidades a los eventos de un espacio muestral $\\Omega$." },
      ],
    },

    {
      tipo: "definicion",
      etiqueta: "def:clasica",
      titulo: "Probabilidad clásica (regla de Laplace)",
      cuerpo: [
        { p: "Supongamos un experimento con espacio muestral *finito* $\\Omega$, de $n=|\\Omega|$ resultados *equiprobables* (ninguno ocurre con mayor facilidad que otro). La *probabilidad* de un evento $A\\subseteq\\Omega$ es" },
        { math: "P(A) = \\dfrac{|A|}{|\\Omega|} = \\dfrac{\\text{casos favorables}}{\\text{casos posibles}}," },
        { p: "donde $|A|$ es la cardinalidad de $A$. Calcular probabilidades clásicas se reduce, entonces, a *contar* (combinatoria)." },
      ],
    },
    {
      tipo: "parrafo",
      cuerpo: [
        { p: "De la definición se sigue de inmediato que $0\\le P(A)\\le 1$, que $P(\\Omega)=1$ y que $P(\\varnothing)=0$." },
      ],
    },
    {
      tipo: "ejemplo",
      etiqueta: "ej:clasica",
      titulo: "Un dado equilibrado",
      cuerpo: [
        { p: "Con $\\Omega=\\{1,2,3,4,5,6\\}$ y el evento $A=\\{2,4,6\\}$ (“sale par”), todos los resultados son equiprobables, así que" },
        { math: "P(A)=\\dfrac{|A|}{|\\Omega|}=\\dfrac{3}{6}=\\dfrac{1}{2}." },
      ],
    },
    {
      tipo: "observacion",
      etiqueta: "obs:validez-clasica",
      titulo: "Condiciones de validez",
      cuerpo: [
        { p: "La regla de Laplace exige que $\\Omega$ sea *finito* y *equiprobable*. Si los resultados no son igualmente probables (un dado cargado) o el espacio es infinito, la definición clásica no aplica y se necesita otra forma de asignar la probabilidad." },
      ],
    },

    {
      tipo: "definicion",
      etiqueta: "def:frecuentista",
      titulo: "Probabilidad frecuentista",
      cuerpo: [
        { p: "Repitamos el experimento $n$ veces bajo las mismas condiciones y sea $n_A$ el número de veces que ocurre el evento $A$. La *frecuencia relativa* $n_A/n$ tiende a estabilizarse al crecer $n$, y la interpretación frecuentista define la probabilidad como ese límite:" },
        { math: "P(A) = \\lim_{n\\to\\infty} \\dfrac{n_A}{n}." },
      ],
    },
    {
      tipo: "observacion",
      etiqueta: "obs:frecuentista",
      cuerpo: [
        { p: "Esta interpretación conecta el modelo con la realidad y es la base de la *simulación*. Su limitación es que exige un experimento repetible. La estabilización de la frecuencia relativa no es un axioma: se *demuestra* a partir de la teoría mediante la *ley de los grandes números* (Sección 5)." },
      ],
    },

    {
      tipo: "definicion",
      etiqueta: "def:geometrica",
      titulo: "Probabilidad geométrica",
      cuerpo: [
        { p: "Cuando el espacio muestral es una región $\\Omega\\subseteq\\mathbb{R}^2$ de área positiva y finita, y un punto se elige “al azar” en ella, la probabilidad de un evento $A\\subseteq\\Omega$ es la proporción de área:" },
        { math: "P(A) = \\dfrac{\\text{Área}(A)}{\\text{Área}(\\Omega)}." },
        { p: "Es el análogo continuo de la regla de Laplace (la cardinalidad se reemplaza por el área) y se extiende a longitudes, volúmenes y dimensiones mayores." },
      ],
    },
    {
      tipo: "ejemplo",
      etiqueta: "ej:geometrica",
      titulo: "Un dardo al azar",
      cuerpo: [
        { p: "Se lanza un dardo al azar sobre un tablero circular de radio $1$. ¿Cuál es la probabilidad de que caiga en el círculo concéntrico de radio $1/2$?" },
        { figura: "geom-dardo", caption: "El evento $A$ (radio $1/2$) dentro del espacio muestral $\\Omega$ (radio $1$)." },
        { p: "Como las áreas son $\\text{Área}(\\Omega)=\\pi\\,(1)^2$ y $\\text{Área}(A)=\\pi\\,(1/2)^2$, resulta" },
        { math: "P(A)=\\dfrac{\\pi\\,(1/2)^2}{\\pi\\,(1)^2}=\\dfrac{1}{4}." },
      ],
    },

    {
      tipo: "observacion",
      etiqueta: "obs:hacia-axiomatica",
      titulo: "Hacia la definición axiomática",
      cuerpo: [
        { p: "Clásica, frecuentista y geométrica son tres *maneras de asignar* probabilidades, cada una con sus supuestos. En la siguiente lección veremos la definición *axiomática* de Kolmogórov, que las unifica: fija las reglas mínimas que cualquier probabilidad debe cumplir, sin importar cómo se haya asignado." },
      ],
    },

    {
      tipo: "ejercicio",
      etiqueta: "ej:dos-dados",
      titulo: "Suma de dos dados",
      cuerpo: [
        { p: "Se lanzan dos dados equilibrados. Usando la regla de Laplace, calcula la probabilidad de que la suma de las caras sea $7$." },
      ],
      solucion: [
        { p: "El espacio muestral son los pares ordenados $(i,j)$ con $i,j\\in\\{1,\\dots,6\\}$, todos equiprobables, así que $|\\Omega|=36$. Los casos favorables a suma $7$ son" },
        { math: "(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)," },
        { p: "es decir $6$ resultados. Por lo tanto" },
        { math: "P(\\text{suma}=7)=\\dfrac{6}{36}=\\dfrac{1}{6}." },
      ],
    },
  ],
};
