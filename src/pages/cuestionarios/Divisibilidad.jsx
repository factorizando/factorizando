import React, { useState } from 'react';
import { Play, BookOpen, BrainCircuit, CheckCircle2, XCircle, ArrowRight, RefreshCw, HelpCircle, Sparkles, Loader2, Calculator } from 'lucide-react';

// === DATOS DEL CUESTIONARIO (45 PREGUNTAS) ===
const QUESTIONS = [
  // --- 5 PROBLEMAS/PREGUNTAS SOBRE NÚMEROS PRIMOS ---
  {
    id: 1,
    question: "¿Qué es un número primo?",
    options: ["Un número impar", "Un número divisible solo por 1 y por sí mismo", "Un número que termina en 3, 5 o 7", "Un número que tiene muchos divisores"],
    correctAnswer: 1,
    explanation: "Un número primo tiene exactamente dos divisores distintos: el 1 y él mismo. Por ejemplo, el 7 solo se puede dividir entre 1 y 7."
  },
  {
    id: 2,
    question: "¿Cuál es el único número primo que también es un número par?",
    options: ["0", "4", "2", "No existen primos pares"],
    correctAnswer: 2,
    explanation: "El 2 es el único primo par porque sus únicos divisores son el 1 y el 2. Todos los demás pares son divisibles por 2, por lo que ya no son primos."
  },
  {
    id: 3,
    question: "¿Cuál de los siguientes grupos contiene SOLO números primos?",
    options: ["2, 3, 5, 9", "2, 3, 5, 7, 11", "1, 2, 3, 5", "3, 5, 7, 15"],
    correctAnswer: 1,
    explanation: "El 9 y el 15 no son primos (se dividen por 3). El 1 por convención matemática no se considera primo. El grupo correcto es 2, 3, 5, 7, 11."
  },
  {
    id: 4,
    question: "¿Cuál es la factorización prima correcta del número 60?",
    options: ["2 × 30", "4 × 15", "2² × 3 × 5", "2 × 3 × 10"],
    correctAnswer: 2,
    explanation: "Debemos descomponer 60 hasta que solo queden primos: 60 = 2 × 30 = 2 × 2 × 15 = 2 × 2 × 3 × 5. Es decir, 2² × 3 × 5."
  },
  {
    id: 5,
    question: "Si la edad de Ana es el mayor número primo menor que 20, ¿cuántos años tiene Ana?",
    options: ["17", "18", "19", "21"],
    correctAnswer: 2,
    explanation: "Los números menores que 20 son 19, 18, 17... El 19 solo se divide entre 1 y 19, por lo tanto, es el mayor primo menor que 20."
  },
  // --- 20 PREGUNTAS SOBRE M.C.D. (Máximo Común Divisor) ---
  {
    id: 6,
    question: "¿Qué significa M.C.D.?",
    options: ["Mínimo Común Divisor", "Máximo Común Múltiplo", "Máximo Común Divisor", "Múltiplo Común Dividido"],
    correctAnswer: 2,
    explanation: "Significa Máximo Común Divisor: el número más grande que puede dividir a dos o más números sin dejar residuo."
  },
  {
    id: 7,
    question: "Calcula el M.C.D. de 12 y 18.",
    options: ["2", "3", "6", "36"],
    correctAnswer: 2,
    explanation: "Divisores de 12: 1, 2, 3, 4, 6, 12. Divisores de 18: 1, 2, 3, 6, 9, 18. El mayor divisor que comparten es el 6."
  },
  {
    id: 8,
    question: "¿Cuál es el M.C.D. de dos números primos distintos, por ejemplo 7 y 13?",
    options: ["1", "Su producto (91)", "7", "No tienen"],
    correctAnswer: 0,
    explanation: "Como los números primos solo son divisibles por 1 y por sí mismos, el único divisor que comparten es el 1."
  },
  {
    id: 9,
    question: "Tienes dos cuerdas de 20 m y 30 m. Quieres cortarlas en trozos iguales, siendo estos lo más largos posible. ¿De qué tamaño debe ser cada trozo?",
    options: ["2 m", "5 m", "10 m", "60 m"],
    correctAnswer: 2,
    explanation: "El problema pide 'cortar en trozos iguales lo más grandes posible', eso es M.C.D. El M.C.D. de 20 y 30 es 10."
  },
  {
    id: 10,
    question: "Calcula el M.C.D. de 40 y 60.",
    options: ["10", "20", "40", "120"],
    correctAnswer: 1,
    explanation: "Ambos se pueden dividir entre 20. 40/20 = 2 y 60/20 = 3. 20 es el divisor más grande que comparten."
  },
  {
    id: 11,
    question: "Un carpintero tiene dos tablas, una de 24 cm y otra de 36 cm. Quiere cortarlas en pedazos del mismo tamaño sin que sobre nada. ¿Cuál es la mayor longitud de cada pedazo?",
    options: ["6 cm", "8 cm", "12 cm", "72 cm"],
    correctAnswer: 2,
    explanation: "Buscamos el M.C.D. de 24 y 36. Ambos son divisibles por 12 (24=12×2, 36=12×3). El pedazo mayor será de 12 cm."
  },
  {
    id: 12,
    question: "¿Cuál es el M.C.D. de 14 y 21?",
    options: ["1", "3", "7", "42"],
    correctAnswer: 2,
    explanation: "14 = 2 × 7. 21 = 3 × 7. El factor primo común mayor es 7."
  },
  {
    id: 13,
    question: "Se tienen 48 dulces y 64 chocolates. Se quieren hacer bolsas iguales con la mayor cantidad posible de golosinas, sin mezclar dulces con chocolates. ¿Cuántas golosinas tendrá cada bolsa?",
    options: ["8", "12", "16", "24"],
    correctAnswer: 2,
    explanation: "M.C.D. de 48 y 64. 48 = 16 × 3. 64 = 16 × 4. Cada bolsa tendrá 16 golosinas (ya sean dulces o chocolates)."
  },
  {
    id: 14,
    question: "Calcula el M.C.D. de 15, 25 y 35.",
    options: ["1", "5", "15", "175"],
    correctAnswer: 1,
    explanation: "Todos terminan en 5, por lo que son divisibles por 5. 15=3×5, 25=5×5, 35=7×5. El M.C.D. es 5."
  },
  {
    id: 15,
    question: "Si un número es múltiplo de otro (por ejemplo 10 y 30), ¿cuál es su M.C.D.?",
    options: ["El número mayor", "El número menor", "El número 1", "El producto de ambos"],
    correctAnswer: 1,
    explanation: "Si un número divide a otro (10 divide a 30), el menor de ellos es el Máximo Común Divisor. El M.C.D.(10, 30) es 10."
  },
  {
    id: 16,
    question: "Una florista tiene 120 rosas y 160 margaritas. Quiere hacer ramos idénticos sin que sobren flores. ¿Cuál es el mayor número de ramos que puede armar?",
    options: ["10", "20", "40", "80"],
    correctAnswer: 2,
    explanation: "Calculamos el M.C.D. de 120 y 160. Ambos son divisibles por 40 (120/40=3 y 160/40=4). Podrá hacer 40 ramos."
  },
  {
    id: 17,
    question: "Calcula el M.C.D. de 81 y 54.",
    options: ["9", "18", "27", "162"],
    correctAnswer: 2,
    explanation: "81 = 3⁴. 54 = 2 × 3³. Los factores comunes son 3³, es decir, 27."
  },
  {
    id: 18,
    question: "Para dividir un terreno rectangular de 300m x 200m en parcelas cuadradas idénticas de la mayor área posible, ¿cuánto debe medir el lado de cada parcela?",
    options: ["10 m", "20 m", "50 m", "100 m"],
    correctAnswer: 3,
    explanation: "Necesitamos encontrar un divisor común para 300 y 200 que sea el mayor posible. Ese es el M.C.D.(300, 200) = 100."
  },
  {
    id: 19,
    question: "¿Cuál es el M.C.D. de tres números si uno de ellos es 1? (Ej. 1, 5, 8)",
    options: ["El número mayor", "El número de en medio", "1", "0"],
    correctAnswer: 2,
    explanation: "El número 1 solo es divisible por 1. Por lo tanto, el único divisor que puede compartir con cualquier otro número es el 1."
  },
  {
    id: 20,
    question: "Un profesor tiene 45 lápices y 30 borradores. Desea armar kits escolares iguales. ¿Cuál es el mayor número de kits que puede armar sin que sobre nada?",
    options: ["5", "10", "15", "30"],
    correctAnswer: 2,
    explanation: "M.C.D. de 45 y 30. Los divisores de ambos incluyen 1, 3, 5 y 15. El mayor es 15."
  },
  {
    id: 21,
    question: "Calcula el M.C.D. de 100 y 75.",
    options: ["5", "15", "25", "300"],
    correctAnswer: 2,
    explanation: "100 = 25 × 4. 75 = 25 × 3. El mayor divisor que comparten es 25."
  },
  {
    id: 22,
    question: "¿Qué nos indica la regla para calcular el M.C.D. usando descomposición en factores primos?",
    options: ["Tomar factores comunes y no comunes al mayor exponente", "Tomar solo factores comunes al menor exponente", "Tomar solo factores no comunes", "Sumar todos los factores"],
    correctAnswer: 1,
    explanation: "Para el M.C.D., seleccionamos únicamente los factores primos que se repiten en todos los números, elevados a su exponente más pequeño."
  },
  {
    id: 23,
    question: "Queremos envasar 12 litros de aceite de oliva, 18 de girasol y 24 de maíz en garrafas idénticas de la mayor capacidad posible. ¿De cuántos litros será cada garrafa?",
    options: ["2 litros", "3 litros", "6 litros", "12 litros"],
    correctAnswer: 2,
    explanation: "M.C.D.(12, 18, 24). Todos son múltiplos de 6. 12=6×2, 18=6×3, 24=6×4. El M.C.D. es 6."
  },
  {
    id: 24,
    question: "Calcula el M.C.D. de 16, 24 y 32.",
    options: ["4", "8", "16", "96"],
    correctAnswer: 1,
    explanation: "16 = 2⁴. 24 = 2³ × 3. 32 = 2⁵. El factor común con menor exponente es 2³ = 8."
  },
  {
    id: 25,
    question: "¿En cuál de estas situaciones usarías el M.C.D.?",
    options: ["Calcular cuándo coincidirán dos autobuses", "Dividir grupos grandes en equipos más pequeños y exactos", "Averiguar cuándo se repite un eclipse", "Sumar fracciones"],
    correctAnswer: 1,
    explanation: "El M.C.D. sirve para dividir, repartir o fragmentar cantidades grandes en partes iguales sin que sobre nada."
  },
  // --- 20 PREGUNTAS SOBRE M.C.M. (Mínimo Común Múltiplo) ---
  {
    id: 26,
    question: "¿Qué significa M.C.M.?",
    options: ["Máximo Común Múltiplo", "Mínimo Común Múltiplo", "Mínimo Común Divisor", "Múltiplo Común Mayor"],
    correctAnswer: 1,
    explanation: "Significa Mínimo Común Múltiplo: el número más pequeño que es múltiplo (está en la tabla de multiplicar) de dos o más números."
  },
  {
    id: 27,
    question: "Calcula el M.C.M. de 4 y 6.",
    options: ["2", "10", "12", "24"],
    correctAnswer: 2,
    explanation: "Múltiplos de 4: 4, 8, 12, 16... Múltiplos de 6: 6, 12, 18... El primero que coincide es el 12."
  },
  {
    id: 28,
    question: "Un semáforo cambia a verde cada 15 segundos y otro cada 20 segundos. Si acaban de cambiar juntos, ¿en cuántos segundos volverán a coincidir?",
    options: ["5 segundos", "35 segundos", "60 segundos", "300 segundos"],
    correctAnswer: 2,
    explanation: "Problema de coincidencia en el tiempo = M.C.M. Múltiplos de 15: 15, 30, 45, 60... Múltiplos de 20: 20, 40, 60... Coinciden a los 60 segundos."
  },
  {
    id: 29,
    question: "Calcula el M.C.M. de dos números primos, como 3 y 5.",
    options: ["1", "8", "15", "30"],
    correctAnswer: 2,
    explanation: "El M.C.M. de dos números primos es siempre su multiplicación directa. 3 × 5 = 15."
  },
  {
    id: 30,
    question: "Ana va a natación cada 3 días y a clases de inglés cada 4 días. Si hoy tuvo ambas actividades, ¿en cuántos días volverán a coincidir?",
    options: ["7 días", "12 días", "14 días", "24 días"],
    correctAnswer: 1,
    explanation: "Buscamos el M.C.M. de 3 y 4. Al no compartir factores, su M.C.M. es 3 × 4 = 12 días."
  },
  {
    id: 31,
    question: "¿Cuál es el M.C.M. de 8 y 12?",
    options: ["4", "16", "24", "96"],
    correctAnswer: 2,
    explanation: "8 = 2³. 12 = 2² × 3. M.C.M. toma factores comunes y no comunes al mayor exponente: 2³ × 3 = 8 × 3 = 24."
  },
  {
    id: 32,
    question: "En una pista de atletismo, Juan da una vuelta cada 6 minutos y María cada 9 minutos. Si salen juntos, ¿cuánto tardarán en coincidir en la línea de meta?",
    options: ["3 minutos", "15 minutos", "18 minutos", "54 minutos"],
    correctAnswer: 2,
    explanation: "M.C.M. de 6 y 9. Múltiplos de 6: 6, 12, 18. Múltiplos de 9: 9, 18. Coinciden a los 18 minutos."
  },
  {
    id: 33,
    question: "Calcula el M.C.M. de 10 y 100.",
    options: ["10", "100", "110", "1000"],
    correctAnswer: 1,
    explanation: "Si un número es múltiplo de otro (100 es múltiplo de 10), el M.C.M. es el número mayor, es decir, 100."
  },
  {
    id: 34,
    question: "Un médico le receta a un paciente tomar una pastilla cada 6 horas y un jarabe cada 8 horas. Si toma ambos medicamentos juntos a las 8:00 am, ¿cuántas horas pasarán para que los vuelva a tomar juntos?",
    options: ["2 horas", "14 horas", "24 horas", "48 horas"],
    correctAnswer: 2,
    explanation: "M.C.M. de 6 y 8. Múltiplos de 6: 6, 12, 18, 24. Múltiplos de 8: 8, 16, 24. Volverá a tomarlos juntos en 24 horas."
  },
  {
    id: 35,
    question: "¿Qué nos indica la regla para calcular el M.C.M. usando descomposición en factores primos?",
    options: ["Tomar factores comunes y no comunes al mayor exponente", "Tomar solo factores comunes al menor exponente", "Multiplicar solo los números pares", "Elegir el factor más grande"],
    correctAnswer: 0,
    explanation: "Para el M.C.M., tomamos TODOS los factores primos que aparezcan (comunes y no comunes) y elegimos los que tengan el exponente más alto."
  },
  {
    id: 36,
    question: "Calcula el M.C.M. de 6, 9 y 12.",
    options: ["3", "18", "36", "72"],
    correctAnswer: 2,
    explanation: "6=2×3, 9=3², 12=2²×3. Tomamos mayores exponentes: 2² × 3² = 4 × 9 = 36."
  },
  {
    id: 37,
    question: "En un vivero riegan las rosas cada 4 días y los cactus cada 14 días. Si hoy regaron ambos, ¿en cuántos días volverán a regarlos el mismo día?",
    options: ["2 días", "18 días", "28 días", "56 días"],
    correctAnswer: 2,
    explanation: "M.C.M. de 4 y 14. 4 = 2². 14 = 2 × 7. M.C.M. = 2² × 7 = 4 × 7 = 28 días."
  },
  {
    id: 38,
    question: "Calcula el M.C.M. de 15 y 20.",
    options: ["5", "30", "60", "300"],
    correctAnswer: 2,
    explanation: "15 = 3 × 5. 20 = 2² × 5. M.C.M. = 2² × 3 × 5 = 4 × 3 × 5 = 60."
  },
  {
    id: 39,
    question: "Un faro emite una luz roja cada 8 segundos y una luz verde cada 10 segundos. ¿Cada cuántos segundos coinciden ambas luces?",
    options: ["2 segundos", "18 segundos", "40 segundos", "80 segundos"],
    correctAnswer: 2,
    explanation: "M.C.M. de 8 y 10. 8 = 2³. 10 = 2 × 5. M.C.M. = 2³ × 5 = 8 × 5 = 40 segundos."
  },
  {
    id: 40,
    question: "¿Cuál es el M.C.M. de 14 y 21?",
    options: ["7", "21", "42", "294"],
    correctAnswer: 2,
    explanation: "14 = 2 × 7. 21 = 3 × 7. M.C.M. = 2 × 3 × 7 = 42."
  },
  {
    id: 41,
    question: "Se hacen revisiones a 3 máquinas: la máquina A cada 12 días, la B cada 15 días y la C cada 20 días. ¿Cada cuántos días se revisan las tres el mismo día?",
    options: ["5 días", "30 días", "60 días", "120 días"],
    correctAnswer: 2,
    explanation: "M.C.M. de 12, 15 y 20 es 60. Porque 60 es divisible entre 12(da 5), entre 15(da 4) y entre 20(da 3)."
  },
  {
    id: 42,
    question: "Calcula el M.C.M. de 25 y 30.",
    options: ["5", "150", "300", "750"],
    correctAnswer: 1,
    explanation: "25 = 5². 30 = 2 × 3 × 5. M.C.M. = 2 × 3 × 5² = 6 × 25 = 150."
  },
  {
    id: 43,
    question: "Un equipo de seguridad cambia sus claves cada 18 días y sus tarjetas de acceso cada 24 días. ¿Cada cuántos días coincidirán ambos cambios?",
    options: ["6 días", "36 días", "72 días", "144 días"],
    correctAnswer: 2,
    explanation: "M.C.M. de 18 y 24. 18 = 2 × 3². 24 = 2³ × 3. M.C.M. = 2³ × 3² = 8 × 9 = 72."
  },
  {
    id: 44,
    question: "Existe una relación matemática muy interesante entre dos números (a, b). El producto de su M.C.D. y su M.C.M. es igual a...",
    options: ["Su suma", "El producto de los números (a × b)", "Su resta", "Su división"],
    correctAnswer: 1,
    explanation: "Por regla matemática: M.C.D.(a, b) × M.C.M.(a, b) = a × b. Esta es una excelente forma de comprobar cálculos."
  },
  {
    id: 45,
    question: "¿En cuál de estas situaciones usarías el M.C.M.?",
    options: ["Cortar madera en estantes del mismo tamaño", "Repartir dulces en bolsas iguales", "Saber cuándo volverán a coincidir tres alarmas", "Determinar el número primo más grande"],
    correctAnswer: 2,
    explanation: "El M.C.M. sirve para encontrar puntos en el futuro donde eventos que ocurren con distintas frecuencias vuelven a coincidir juntos."
  }
];

// === FUNCIÓN AUXILIAR PARA LA API DE GEMINI CON RETRY ===
const fetchWithRetry = async (url, options, maxRetries = 5) => {
  let retries = 0;
  while (retries < maxRetries) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      retries++;
      if (retries >= maxRetries) throw error;
      const delay = Math.pow(2, retries - 1) * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('theory'); // 'theory' | 'quiz' | 'results'
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  
  // Estados para la IA
  const [aiHint, setAiHint] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);

  // Funciones de navegación
  const startQuiz = () => {
    setCurrentScreen('quiz');
    setCurrentQuestionIndex(0);
    setScore(0);
    resetQuestionState();
  };

  const resetQuestionState = () => {
    setSelectedAnswer(null);
    setIsAnswered(false);
    setAiHint('');
  };

  const handleAnswerSelect = (index) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);
    
    const isCorrect = index === QUESTIONS[currentQuestionIndex].correctAnswer;
    if (isCorrect) setScore(prev => prev + 1);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      resetQuestionState();
    } else {
      setCurrentScreen('results');
    }
  };

  // Función para llamar a Gemini
  const askGemini = async () => {
    setIsAiLoading(true);
    setAiHint('');
    
    const apiKey = ""; // API Key proveída por el entorno
    const currentQ = QUESTIONS[currentQuestionIndex];
    const promptText = `Eres un excelente y amigable tutor de matemáticas de tercero de secundaria. 
    Tu alumno está intentando resolver esta pregunta de opción múltiple:
    
    Pregunta: "${currentQ.question}"
    Opciones: ${currentQ.options.map((o, i) => `${i+1}) ${o}`).join(', ')}
    
    Instrucciones: Dale una pista breve, didáctica e inspiradora (máximo 2 oraciones cortas). 
    Si es un problema, guíalo a identificar palabras clave. Ej: "repartir/cortar en partes iguales" sugiere M.C.D. "Coincidir/volver a verse/repetir" sugiere M.C.M.
    ¡MUY IMPORTANTE: NO le des la respuesta directa ni le digas qué opción elegir! Hazlo pensar.`;

    const payload = {
      contents: [{ parts: [{ text: promptText }] }],
      systemInstruction: { parts: [{ text: "Eres un tutor virtual de matemáticas para adolescentes." }] }
    };

    try {
      const result = await fetchWithRetry(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }
      );
      
      const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) {
        setAiHint(text);
      } else {
        throw new Error("Respuesta vacía de la API");
      }
    } catch (error) {
      setAiHint("Lo siento, la red falló. Recuerda: Si quieres partir en pedazos iguales usa el M.C.D. Si quieres buscar repeticiones futuras usa el M.C.M. ¡Tú puedes!");
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-200">
      
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md sticky top-0 z-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Calculator className="w-8 h-8" />
            <div>
              <h1 className="text-xl font-bold tracking-tight">Primos, M.C.D. y M.C.M.</h1>
              <p className="text-blue-200 text-sm">Matemáticas - 3º de Secundaria</p>
            </div>
          </div>
          {currentScreen === 'quiz' && (
            <div className="text-right">
              <span className="text-blue-200 text-sm font-medium">Puntuación</span>
              <div className="text-xl font-bold">{score} / {QUESTIONS.length}</div>
            </div>
          )}
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 py-8">
        
        {/* PANTALLA: TEORÍA */}
        {currentScreen === 'theory' && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-700 animate-in fade-in zoom-in-95 duration-300">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-8 border-b border-blue-100 dark:border-blue-800/50 flex flex-col items-center text-center">
              <BookOpen className="w-16 h-16 text-blue-500 mb-4" />
              <h2 className="text-3xl font-extrabold text-blue-900 dark:text-blue-300">Conceptos de Divisibilidad</h2>
              <p className="mt-2 text-blue-700 dark:text-blue-400 max-w-2xl">
                Aprende a distinguir cuándo usar números primos, el Máximo Común Divisor (M.C.D.) o el Mínimo Común Múltiplo (M.C.M.) para resolver problemas de la vida diaria.
              </p>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                
                {/* Carta Primos */}
                <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-100 dark:border-amber-800/50 hover:shadow-md transition">
                  <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300 mb-3">Números Primos</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    Son los "ladrillos" de las matemáticas. Tienen exactamente <strong>dos divisores</strong>: el 1 y ellos mismos.
                  </p>
                  <p className="text-xs font-mono bg-white dark:bg-slate-800 p-2 rounded text-amber-700 dark:text-amber-400">
                    Ej: 2, 3, 5, 7, 11, 13, 17...
                  </p>
                </div>

                {/* Carta MCD */}
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-xl border border-emerald-100 dark:border-emerald-800/50 hover:shadow-md transition">
                  <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-300 mb-3">M.C.D.</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    El <strong>Máximo Común Divisor</strong> es el número mayor que divide a varios números de forma exacta.
                  </p>
                  <div className="text-xs bg-white dark:bg-slate-800 p-2 rounded text-emerald-700 dark:text-emerald-400">
                    <strong>Palabras clave:</strong> Cortar, repartir, dividir en partes iguales al máximo tamaño.
                  </div>
                </div>

                {/* Carta MCM */}
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-100 dark:border-purple-800/50 hover:shadow-md transition">
                  <h3 className="text-xl font-bold text-purple-800 dark:text-purple-300 mb-3">M.C.M.</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                    El <strong>Mínimo Común Múltiplo</strong> es el múltiplo más pequeño que comparten varios números.
                  </p>
                  <div className="text-xs bg-white dark:bg-slate-800 p-2 rounded text-purple-700 dark:text-purple-400">
                    <strong>Palabras clave:</strong> Coincidir, repetir, semáforos, próximos encuentros en el tiempo.
                  </div>
                </div>
              </div>

              <div className="bg-slate-100 dark:bg-slate-800/80 p-5 rounded-lg text-center mt-4">
                <p className="text-slate-600 dark:text-slate-300 font-medium">
                  Este cuestionario consta de <strong>45 preguntas</strong> diseñadas para llevarte al dominio total de estos temas.
                </p>
              </div>

              <div className="flex justify-center pt-4">
                <button 
                  onClick={startQuiz}
                  className="group relative flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <Play className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" />
                  Iniciar Gran Reto (45 Preguntas)
                </button>
              </div>
            </div>
          </div>
        )}

        {/* PANTALLA: CUESTIONARIO */}
        {currentScreen === 'quiz' && (
          <div className="animate-in slide-in-from-bottom-8 duration-500">
            
            {/* Progreso */}
            <div className="mb-6">
              <div className="flex justify-between text-sm font-medium mb-2 text-slate-600 dark:text-slate-400">
                <span>Pregunta {currentQuestionIndex + 1} de {QUESTIONS.length}</span>
                <span>{Math.round(((currentQuestionIndex) / QUESTIONS.length) * 100)}% completado</span>
              </div>
              <div className="h-3 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500 transition-all duration-500 ease-out rounded-full"
                  style={{ width: `${((currentQuestionIndex) / QUESTIONS.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Tarjeta de Pregunta */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="mb-2 text-sm font-bold text-blue-500 uppercase tracking-wider">
                  {currentQuestionIndex < 5 ? "Sección: Números Primos" : 
                   currentQuestionIndex < 25 ? "Sección: Máximo Común Divisor" : "Sección: Mínimo Común Múltiplo"}
                </div>
                <h2 className="text-2xl font-semibold mb-8 text-slate-800 dark:text-white leading-relaxed">
                  {QUESTIONS[currentQuestionIndex].question}
                </h2>

                <div className="grid gap-4">
                  {QUESTIONS[currentQuestionIndex].options.map((option, index) => {
                    let btnClass = "text-left p-4 md:p-5 rounded-xl border-2 transition-all duration-200 font-medium text-lg ";
                    let icon = null;

                    if (!isAnswered) {
                      btnClass += "border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-300";
                    } else {
                      if (index === QUESTIONS[currentQuestionIndex].correctAnswer) {
                        btnClass += "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 shadow-sm";
                        icon = <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />;
                      } else if (index === selectedAnswer) {
                        btnClass += "border-rose-500 bg-rose-50 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300";
                        icon = <XCircle className="w-6 h-6 text-rose-500 shrink-0" />;
                      } else {
                        btnClass += "border-slate-200 dark:border-slate-700 opacity-50 bg-slate-50 dark:bg-slate-800/50";
                      }
                    }

                    return (
                      <button 
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={isAnswered}
                        className={`${btnClass} flex items-center justify-between gap-4 w-full focus:outline-none focus:ring-4 focus:ring-blue-500/20`}
                      >
                        <span className="flex-1">{option}</span>
                        {icon && <span>{icon}</span>}
                      </button>
                    );
                  })}
                </div>

                {/* Zona IA / Pista */}
                {!isAnswered && (
                  <div className="mt-8 border-t border-slate-100 dark:border-slate-700 pt-6">
                    {!aiHint && !isAiLoading && (
                      <button 
                        onClick={askGemini}
                        className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
                      >
                        <Sparkles className="w-5 h-5" />
                        <span>Pedir una pista al Tutor de IA</span>
                      </button>
                    )}
                    
                    {isAiLoading && (
                      <div className="flex items-center gap-3 text-blue-500 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span className="animate-pulse font-medium">Analizando la pregunta matemáticamente...</span>
                      </div>
                    )}

                    {aiHint && (
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-100 dark:border-blue-800/50 p-5 rounded-xl animate-in zoom-in-95">
                        <div className="flex gap-3">
                          <BrainCircuit className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                          <div>
                            <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-1">Pista del Tutor Virtual:</h4>
                            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">{aiHint}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Explicación (Solo después de responder) */}
                {isAnswered && (
                  <div className="mt-8 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 p-6 rounded-xl animate-in fade-in slide-in-from-bottom-2">
                    <div className="flex gap-3">
                      <HelpCircle className="w-6 h-6 text-slate-500 dark:text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-slate-700 dark:text-slate-200 mb-2">Por qué es la respuesta correcta:</h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {QUESTIONS[currentQuestionIndex].explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Botón Siguiente */}
              {isAnswered && (
                <div className="bg-slate-50 dark:bg-slate-800/80 p-6 border-t border-slate-100 dark:border-slate-700 flex justify-end">
                  <button 
                    onClick={nextQuestion}
                    className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-md"
                  >
                    {currentQuestionIndex < QUESTIONS.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultados Finales'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* PANTALLA: RESULTADOS */}
        {currentScreen === 'results' && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-700 animate-in zoom-in-95 duration-500 p-8 text-center">
            
            <div className="mb-8">
              {score >= 35 ? (
                <div className="inline-flex items-center justify-center w-24 h-24 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-full mb-6">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
              ) : (
                <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full mb-6">
                  <BookOpen className="w-12 h-12" />
                </div>
              )}
              
              <h2 className="text-4xl font-extrabold text-slate-800 dark:text-white mb-2">¡Maratón Completado!</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Tu calificación final es: <span className="font-bold text-blue-600 dark:text-blue-400">{score} de {QUESTIONS.length}</span> ({(score/QUESTIONS.length*100).toFixed(0)}%)
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-100 dark:border-slate-700 max-w-2xl mx-auto mb-8">
              <h3 className="font-bold text-lg mb-4 text-slate-800 dark:text-slate-200">Resumen de tu desempeño:</h3>
              <p className="text-slate-700 dark:text-slate-300">
                {score === 45 && "¡Perfección absoluta! Dominas totalmente el M.C.D., el M.C.M. y los números primos. Eres un experto en divisibilidad."}
                {score >= 35 && score < 45 && "¡Excelente trabajo! Has demostrado una comprensión muy avanzada para distinguir entre los múltiples problemas y cálculos."}
                {score >= 20 && score < 35 && "¡Buen esfuerzo! Completar 45 preguntas es un gran reto. Recuerda la regla de oro: M.C.D. para repartir/cortar, M.C.M. para coincidencias futuras."}
                {score < 20 && "¡No te desanimes! Este maratón fue extenso y difícil. Te sugiero repasar la teoría, anotar en tu cuaderno las reglas de factorización e intentarlo de nuevo más tarde."}
              </p>
            </div>

            <button 
              onClick={startQuiz}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <RefreshCw className="w-6 h-6" />
              Reintentar el Maratón
            </button>
          </div>
        )}

      </main>
    </div>
  );
}