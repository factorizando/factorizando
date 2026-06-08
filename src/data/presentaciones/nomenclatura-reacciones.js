// Presentación: Lenguaje químico inorgánico y reacciones químicas
// EXANI-II · Módulo Ciencias Experimentales · Química

export const PRESENTACION = {
  id: "nomenclatura-reacciones",
  titulo: "Nomenclatura Inorgánica y Reacciones",
  materia: "Química",
  subtema: "Ciencias Experimentales",
  slides: [

    // ── Portada ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Nomenclatura Inorgánica y Reacciones",
      subtitulo: "Números de oxidación, compuestos inorgánicos, nomenclatura IUPAC, tipos de reacciones y balanceo",
      etiqueta: "EXANI-II · Ciencias Experimentales"
    },

    // ── Números de oxidación ───────────────────────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "Bloque 1 · Base",
      titulo: "Números de oxidación",
      bloques: [
        {
          tipo: "texto",
          texto: "El número de oxidación es la carga aparente que tendría un átomo en un compuesto. Es la base para escribir fórmulas y nombrar compuestos. Reglas clave: los elementos libres valen 0; el hidrógeno suele ser +1 (excepto en hidruros metálicos, −1); el oxígeno suele ser −2 (excepto en peróxidos, −1); los metales del grupo 1 son +1 y los del grupo 2, +2. En un compuesto neutro, la suma de los números de oxidación es cero."
        },
        {
          tipo: "tabla",
          titulo: "Números de oxidación frecuentes",
          columnas: ["Elemento", "Número de oxidación", "Excepción"],
          filas: [
            { tiempo: "Grupo 1 (Na, K)", correcto: "+1", error: "—" },
            { tiempo: "Grupo 2 (Ca, Mg)", correcto: "+2", error: "—" },
            { tiempo: "Hidrógeno",       correcto: "+1", error: "−1 en hidruros metálicos (NaH)" },
            { tiempo: "Oxígeno",         correcto: "−2", error: "−1 en peróxidos (H₂O₂)" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "la suma de números de oxidación en un compuesto neutro es 0",
          correcto: "En H₂O: 2(+1) + (−2) = 0 ✓",
          incorrecto: "En H₂O suponer O = −1 → 2(+1)+(−1) = +1 ≠ 0 (incorrecto fuera de los peróxidos)"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "El número de oxidación permite deducir la fórmula: las cargas se cruzan como subíndices",
          correcto: "Al³⁺ y O²⁻ → Al₂O₃ (la carga de uno es el subíndice del otro)",
          incorrecto: "Escribir AlO para Al³⁺ y O²⁻ → no neutraliza las cargas"
        }
      ]
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Número de oxidación",
      pregunta: "¿Cuál es el número de oxidación del azufre (S) en el compuesto H₂SO₄?",
      opciones: ["+6", "+4", "−2"],
      correcta: 0,
      explicacion: "La suma debe ser 0. H: 2(+1) = +2; O: 4(−2) = −8. Entonces S + 2 − 8 = 0 → S = +6. El azufre actúa con número de oxidación +6 en el ácido sulfúrico.",
      pasos: []
    },

    // ── Tipos de compuestos inorgánicos ────────────────────────────────────────
    {
      id: 3,
      tipo: "regla_rica",
      etiqueta: "Bloque 2 · Compuestos",
      titulo: "Tipos de compuestos inorgánicos",
      bloques: [
        {
          tipo: "texto",
          texto: "Los compuestos inorgánicos se agrupan en familias según su composición. Óxidos: combinación de un elemento con oxígeno; metálicos (básicos) como CaO, o no metálicos (ácidos) como CO₂. Hidróxidos: metal + grupo OH, como NaOH. Ácidos: hidrácidos (H + no metal, sin oxígeno) como HCl, u oxiácidos (H + no metal + O) como H₂SO₄. Sales: resultan de la reacción entre un ácido y una base, como NaCl."
        },
        {
          tipo: "tabla",
          titulo: "Familias de compuestos",
          columnas: ["Familia", "Composición", "Ejemplo"],
          filas: [
            { tiempo: "Óxido metálico", correcto: "Metal + O", error: "CaO, Na₂O" },
            { tiempo: "Óxido no metálico", correcto: "No metal + O", error: "CO₂, SO₃" },
            { tiempo: "Hidróxido",      correcto: "Metal + OH⁻", error: "NaOH, Ca(OH)₂" },
            { tiempo: "Ácido",          correcto: "H + no metal (±O)", error: "HCl (hidrácido), H₂SO₄ (oxiácido)" },
            { tiempo: "Sal",            correcto: "Metal + no metal", error: "NaCl, CaCO₃" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "óxido básico vs. óxido ácido",
          correcto: "Metal + O → óxido básico (CaO); no metal + O → óxido ácido (CO₂)",
          incorrecto: "Llamar «sal» a un óxido: la sal proviene de ácido + base, no de elemento + oxígeno"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "Los hidróxidos llevan el grupo OH y son bases; no confundas NaOH (base) con un ácido",
          correcto: "NaOH es una base (hidróxido de sodio)",
          incorrecto: "Clasificar NaOH como ácido por contener H → el grupo OH lo hace básico"
        }
      ]
    },
    {
      id: 4,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Tipo de compuesto",
      pregunta: "El compuesto Ca(OH)₂ pertenece a la familia de los…",
      opciones: ["hidróxidos (bases)", "óxidos ácidos", "hidrácidos"],
      correcta: 0,
      explicacion: "Ca(OH)₂ contiene un metal (Ca) unido al grupo hidroxilo (OH): es un hidróxido, es decir, una base (hidróxido de calcio). No es un óxido ni un ácido.",
      pasos: []
    },

    // ── Nomenclatura IUPAC ─────────────────────────────────────────────────────
    {
      id: 5,
      tipo: "regla_rica",
      etiqueta: "Bloque 3 · Nomenclatura",
      titulo: "Nomenclatura IUPAC básica",
      bloques: [
        {
          tipo: "texto",
          texto: "La nomenclatura IUPAC nombra los compuestos de forma sistemática. En compuestos binarios, el elemento más electronegativo (no metal) se nombra primero con la terminación -uro, seguido de «de» y el otro elemento: NaCl = cloruro de sodio. Cuando un metal tiene varios números de oxidación, se indica con números romanos entre paréntesis (nomenclatura Stock): FeCl₂ = cloruro de hierro(II); FeCl₃ = cloruro de hierro(III). También pueden usarse prefijos multiplicadores (di-, tri-): CO₂ = dióxido de carbono."
        },
        {
          tipo: "tabla",
          titulo: "Reglas de nomenclatura",
          columnas: ["Tipo", "Regla", "Ejemplo"],
          filas: [
            { tiempo: "Sal binaria", correcto: "no metal-uro + de + metal", error: "NaCl = cloruro de sodio" },
            { tiempo: "Stock",       correcto: "metal con número romano",   error: "Fe₂O₃ = óxido de hierro(III)" },
            { tiempo: "Prefijos",    correcto: "di-, tri-, tetra-",         error: "CO₂ = dióxido de carbono" },
            { tiempo: "Hidróxido",   correcto: "hidróxido de + metal",      error: "NaOH = hidróxido de sodio" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "el número romano indica el número de oxidación del metal",
          correcto: "FeCl₃: el hierro es +3 → cloruro de hierro(III)",
          incorrecto: "Llamar a FeCl₃ «cloruro de hierro(II)» → el II/III debe coincidir con la carga real del metal"
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "El número romano expresa el número de oxidación, no la cantidad de átomos: en FeCl₃ el hierro es (III) aunque haya 3 cloros",
          correcto: "FeCl₃ → hierro(III) porque su número de oxidación es +3",
          incorrecto: "Interpretar el (III) como «tres átomos de hierro»"
        }
      ]
    },
    {
      id: 6,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Nomenclatura",
      pregunta: "¿Cómo se nombra el compuesto K₂O según la IUPAC (nomenclatura Stock)?",
      opciones: [
        "óxido de potasio",
        "dióxido de potasio",
        "peróxido de potasio"
      ],
      correcta: 0,
      explicacion: "El potasio (grupo 1) tiene número de oxidación fijo +1, así que no requiere número romano ni prefijo: K₂O = óxido de potasio. El subíndice 2 solo equilibra las cargas (2 K⁺ con 1 O²⁻).",
      pasos: []
    },

    // ── Tipos de reacciones ────────────────────────────────────────────────────
    {
      id: 7,
      tipo: "regla_rica",
      etiqueta: "Bloque 4 · Reacciones",
      titulo: "Tipos de reacciones químicas",
      bloques: [
        {
          tipo: "texto",
          texto: "Las reacciones químicas se clasifican por cómo se reorganizan los átomos. Síntesis o combinación: dos sustancias forman una (A + B → AB). Descomposición: una sustancia se separa en varias (AB → A + B). Desplazamiento simple: un elemento sustituye a otro en un compuesto (A + BC → AC + B). Doble desplazamiento: dos compuestos intercambian componentes (AB + CD → AD + CB). Combustión: una sustancia (con C e H) reacciona con O₂ produciendo CO₂ y H₂O."
        },
        {
          tipo: "tabla",
          titulo: "Las cinco reacciones típicas",
          columnas: ["Tipo", "Esquema", "Ejemplo"],
          filas: [
            { tiempo: "Síntesis",    correcto: "A + B → AB",       error: "2H₂ + O₂ → 2H₂O" },
            { tiempo: "Descomposición", correcto: "AB → A + B",    error: "2H₂O → 2H₂ + O₂" },
            { tiempo: "Despl. simple", correcto: "A + BC → AC + B", error: "Zn + 2HCl → ZnCl₂ + H₂" },
            { tiempo: "Despl. doble",  correcto: "AB + CD → AD + CB", error: "AgNO₃ + NaCl → AgCl + NaNO₃" },
            { tiempo: "Combustión",   correcto: "CₓHᵧ + O₂ → CO₂ + H₂O", error: "CH₄ + 2O₂ → CO₂ + 2H₂O" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "identificar el tipo por el esquema de reactivos y productos",
          correcto: "Zn + 2HCl → ZnCl₂ + H₂ es desplazamiento simple (el Zn desplaza al H)",
          incorrecto: "Llamarla «síntesis» porque hay dos reactivos → se forma más de un producto y hay sustitución"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "En la combustión completa, los productos son siempre CO₂ y H₂O; reconocer el O₂ como reactivo es la pista",
          correcto: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O (combustión del propano)",
          incorrecto: "Esperar otros productos de una combustión completa de hidrocarburo"
        }
      ]
    },
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Tipo de reacción",
      pregunta: "La reacción AgNO₃ + NaCl → AgCl + NaNO₃ es de tipo…",
      opciones: [
        "doble desplazamiento (intercambio de iones)",
        "síntesis",
        "combustión"
      ],
      correcta: 0,
      explicacion: "Dos compuestos intercambian sus componentes (la plata se une al cloro y el sodio al nitrato): es un doble desplazamiento. No hay O₂ (no es combustión) ni se forma un solo producto (no es síntesis).",
      pasos: []
    },

    // ── Balanceo ───────────────────────────────────────────────────────────────
    {
      id: 9,
      tipo: "regla_rica",
      etiqueta: "Bloque 5 · Balanceo",
      titulo: "Balanceo de ecuaciones por tanteo",
      bloques: [
        {
          tipo: "texto",
          texto: "La ley de conservación de la masa exige que haya el mismo número de átomos de cada elemento en reactivos y productos. Balancear es ajustar los coeficientes (números delante de las fórmulas) para lograrlo, sin cambiar los subíndices. Por tanteo conviene empezar por los elementos que aparecen en una sola sustancia de cada lado, dejar el oxígeno y el hidrógeno para el final, y revisar que todos los átomos cuadren. Los coeficientes deben quedar en la proporción de enteros más simple."
        },
        {
          tipo: "tabla",
          titulo: "Ejemplo: C₃H₈ + O₂ → CO₂ + H₂O",
          columnas: ["Elemento", "Ajuste", "Coeficiente"],
          filas: [
            { tiempo: "Carbono (C)", correcto: "3 C → 3 CO₂", error: "3 CO₂" },
            { tiempo: "Hidrógeno (H)", correcto: "8 H → 4 H₂O", error: "4 H₂O" },
            { tiempo: "Oxígeno (O)", correcto: "6 + 4 = 10 O → 5 O₂", error: "5 O₂" },
            { tiempo: "Balanceada", correcto: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O", error: "Átomos iguales en ambos lados" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "se ajustan coeficientes, NUNCA subíndices",
          correcto: "2H₂ + O₂ → 2H₂O (coeficientes 2, 1, 2)",
          incorrecto: "Cambiar H₂O por H₂O₂ para «balancear» → altera la sustancia; solo se tocan los coeficientes"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "Modificar un subíndice cambia la sustancia; el balanceo solo permite cambiar los coeficientes delante de las fórmulas",
          correcto: "Para más oxígeno, usar 5O₂ (coeficiente), no O₅",
          incorrecto: "Escribir O₅ o H₂O₂ para cuadrar los átomos"
        }
      ]
    },
    {
      id: 10,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Balanceo",
      pregunta: "Balancea: N₂ + H₂ → NH₃. ¿Cuáles son los coeficientes correctos?",
      opciones: [
        "1, 3, 2  (N₂ + 3H₂ → 2NH₃)",
        "1, 1, 1  (N₂ + H₂ → NH₃)",
        "2, 3, 1  (2N₂ + 3H₂ → NH₃)"
      ],
      correcta: 0,
      explicacion: "Con N₂ + 3H₂ → 2NH₃: nitrógeno 2 = 2 ✓; hidrógeno 3·2 = 6 a la izquierda y 2·3 = 6 a la derecha ✓. Es la proporción entera más simple que conserva los átomos.",
      pasos: []
    },

    // ── Cierre ────────────────────────────────────────────────────────────────
    {
      id: 11,
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Lo esencial de nomenclatura y reacciones",
      puntos: [
        { titulo: "Número de oxidación", texto: "grupo 1 = +1, grupo 2 = +2, H = +1, O = −2; suma = 0 en compuesto neutro" },
        { titulo: "Familias", texto: "óxidos, hidróxidos (bases), ácidos (hidrácidos/oxiácidos) y sales" },
        { titulo: "IUPAC", texto: "no metal-uro + de + metal; número romano = número de oxidación" },
        { titulo: "Tipos de reacción", texto: "síntesis, descomposición, desplazamiento simple/doble y combustión" },
        { titulo: "Conservación de la masa", texto: "mismos átomos en reactivos y productos" },
        { titulo: "Balanceo", texto: "ajusta coeficientes, nunca subíndices" }
      ]
    }

  ]
};
