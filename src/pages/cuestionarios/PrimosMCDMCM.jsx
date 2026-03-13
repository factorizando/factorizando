import { useState, useEffect } from "react";

const C = {
  bg:      "#0e0f11",
  surface: "#13151a",
  border:  "#252830",
  blue:    "#3b9eff",
  gold:    "#f59e0b",
  purple:  "#a78bfa",
  teal:    "#34d399",
  orange:  "#f97316",
  crimson: "#f43f5e",
  text:    "#e8eaf0",
  muted:   "#5a6070",
  dim:     "#8a9ab8",
};

const questions = [
  // ── BLOQUE 1: Números Primos (1–5) ────────────────────────────────────────
  {
    id: 1, block: 0,
    q: "¿Qué es un número primo?",
    opts: [
      "Un número impar",
      "Un número divisible solo por 1 y por sí mismo",
      "Un número que termina en 3, 5 o 7",
      "Un número que tiene muchos divisores",
    ],
    ans: "Un número divisible solo por 1 y por sí mismo",
    exp: "Un número primo tiene exactamente dos divisores distintos: el 1 y él mismo. Por ejemplo, el 7 solo se puede dividir entre 1 y 7.",
  },
  {
    id: 2, block: 0,
    q: "¿Cuál es el único número primo que también es un número par?",
    opts: ["0", "4", "2", "No existen primos pares"],
    ans: "2",
    exp: "El 2 es el único primo par porque sus únicos divisores son el 1 y el 2. Todos los demás pares son divisibles por 2, por lo que ya no son primos.",
  },
  {
    id: 3, block: 0,
    q: "¿Cuál de los siguientes grupos contiene SOLO números primos?",
    opts: ["2, 3, 5, 9", "2, 3, 5, 7, 11", "1, 2, 3, 5", "3, 5, 7, 15"],
    ans: "2, 3, 5, 7, 11",
    exp: "El 9 y el 15 no son primos (se dividen por 3). El 1 por convención matemática no se considera primo. El grupo correcto es 2, 3, 5, 7, 11.",
  },
  {
    id: 4, block: 0,
    q: "¿Cuál es la factorización prima correcta del número 60?",
    opts: ["2 × 30", "4 × 15", "2² × 3 × 5", "2 × 3 × 10"],
    ans: "2² × 3 × 5",
    exp: "60 = 2 × 30 = 2 × 2 × 15 = 2 × 2 × 3 × 5. Es decir, 2² × 3 × 5.",
  },
  {
    id: 5, block: 0,
    q: "Si la edad de Ana es el mayor número primo menor que 20, ¿cuántos años tiene Ana?",
    opts: ["17", "18", "19", "21"],
    ans: "19",
    exp: "El 19 solo se divide entre 1 y 19, por lo tanto es el mayor primo menor que 20.",
  },

  // ── BLOQUE 2: Máximo Común Divisor (6–25) ─────────────────────────────────
  {
    id: 6, block: 1,
    q: "¿Qué significa M.C.D.?",
    opts: ["Mínimo Común Divisor", "Máximo Común Múltiplo", "Máximo Común Divisor", "Múltiplo Común Dividido"],
    ans: "Máximo Común Divisor",
    exp: "Significa Máximo Común Divisor: el número más grande que puede dividir a dos o más números sin dejar residuo.",
  },
  {
    id: 7, block: 1,
    q: "Calcula el M.C.D. de 12 y 18.",
    opts: ["2", "3", "6", "36"],
    ans: "6",
    exp: "Divisores de 12: 1, 2, 3, 4, 6, 12. Divisores de 18: 1, 2, 3, 6, 9, 18. El mayor divisor que comparten es el 6.",
  },
  {
    id: 8, block: 1,
    q: "¿Cuál es el M.C.D. de dos números primos distintos, por ejemplo 7 y 13?",
    opts: ["1", "Su producto (91)", "7", "No tienen"],
    ans: "1",
    exp: "Como los números primos solo son divisibles por 1 y por sí mismos, el único divisor que comparten es el 1.",
  },
  {
    id: 9, block: 1,
    q: "Tienes dos cuerdas de 20 m y 30 m. Quieres cortarlas en trozos iguales, siendo estos lo más largos posible. ¿De qué tamaño debe ser cada trozo?",
    opts: ["2 m", "5 m", "10 m", "60 m"],
    ans: "10 m",
    exp: "El problema pide 'cortar en trozos iguales lo más grandes posible', eso es M.C.D. El M.C.D. de 20 y 30 es 10.",
  },
  {
    id: 10, block: 1,
    q: "Calcula el M.C.D. de 40 y 60.",
    opts: ["10", "20", "40", "120"],
    ans: "20",
    exp: "Ambos se pueden dividir entre 20. 40/20 = 2 y 60/20 = 3. 20 es el divisor más grande que comparten.",
  },
  {
    id: 11, block: 1,
    q: "Un carpintero tiene dos tablas de 24 cm y 36 cm. Quiere cortarlas en pedazos del mismo tamaño sin que sobre nada. ¿Cuál es la mayor longitud de cada pedazo?",
    opts: ["6 cm", "8 cm", "12 cm", "72 cm"],
    ans: "12 cm",
    exp: "Buscamos el M.C.D. de 24 y 36. Ambos son divisibles por 12 (24 = 12×2, 36 = 12×3). El pedazo mayor será de 12 cm.",
  },
  {
    id: 12, block: 1,
    q: "¿Cuál es el M.C.D. de 14 y 21?",
    opts: ["1", "3", "7", "42"],
    ans: "7",
    exp: "14 = 2 × 7. 21 = 3 × 7. El factor primo común mayor es 7.",
  },
  {
    id: 13, block: 1,
    q: "Se tienen 48 dulces y 64 chocolates. Se quieren hacer bolsas iguales con la mayor cantidad posible de golosinas sin mezclar. ¿Cuántas golosinas tendrá cada bolsa?",
    opts: ["8", "12", "16", "24"],
    ans: "16",
    exp: "M.C.D. de 48 y 64. 48 = 16×3. 64 = 16×4. Cada bolsa tendrá 16 golosinas.",
  },
  {
    id: 14, block: 1,
    q: "Calcula el M.C.D. de 15, 25 y 35.",
    opts: ["1", "5", "15", "175"],
    ans: "5",
    exp: "15 = 3×5, 25 = 5×5, 35 = 7×5. El M.C.D. es 5.",
  },
  {
    id: 15, block: 1,
    q: "Si un número es múltiplo de otro (por ejemplo 10 y 30), ¿cuál es su M.C.D.?",
    opts: ["El número mayor", "El número menor", "El número 1", "El producto de ambos"],
    ans: "El número menor",
    exp: "Si 10 divide a 30, el menor de ellos es el Máximo Común Divisor. M.C.D.(10, 30) = 10.",
  },
  {
    id: 16, block: 1,
    q: "Una florista tiene 120 rosas y 160 margaritas. Quiere hacer ramos idénticos sin que sobren flores. ¿Cuál es el mayor número de ramos que puede armar?",
    opts: ["10", "20", "40", "80"],
    ans: "40",
    exp: "M.C.D. de 120 y 160. Ambos son divisibles por 40 (120/40 = 3 y 160/40 = 4). Podrá hacer 40 ramos.",
  },
  {
    id: 17, block: 1,
    q: "Calcula el M.C.D. de 81 y 54.",
    opts: ["9", "18", "27", "162"],
    ans: "27",
    exp: "81 = 3⁴. 54 = 2 × 3³. Los factores comunes son 3³ = 27.",
  },
  {
    id: 18, block: 1,
    q: "Para dividir un terreno de 300 m × 200 m en parcelas cuadradas idénticas de la mayor área posible, ¿cuánto debe medir el lado de cada parcela?",
    opts: ["10 m", "20 m", "50 m", "100 m"],
    ans: "100 m",
    exp: "Necesitamos el M.C.D.(300, 200) = 100.",
  },
  {
    id: 19, block: 1,
    q: "¿Cuál es el M.C.D. de tres números si uno de ellos es 1? (Ej. 1, 5, 8)",
    opts: ["El número mayor", "El número de en medio", "1", "0"],
    ans: "1",
    exp: "El número 1 solo es divisible por 1, por lo que el único divisor que puede compartir con cualquier otro número es el 1.",
  },
  {
    id: 20, block: 1,
    q: "Un profesor tiene 45 lápices y 30 borradores. Desea armar kits escolares iguales. ¿Cuál es el mayor número de kits que puede armar sin que sobre nada?",
    opts: ["5", "10", "15", "30"],
    ans: "15",
    exp: "M.C.D. de 45 y 30. Los divisores comunes incluyen 1, 3, 5 y 15. El mayor es 15.",
  },
  {
    id: 21, block: 1,
    q: "Calcula el M.C.D. de 100 y 75.",
    opts: ["5", "15", "25", "300"],
    ans: "25",
    exp: "100 = 25×4. 75 = 25×3. El mayor divisor que comparten es 25.",
  },
  {
    id: 22, block: 1,
    q: "¿Qué nos indica la regla para calcular el M.C.D. usando descomposición en factores primos?",
    opts: [
      "Tomar factores comunes y no comunes al mayor exponente",
      "Tomar solo factores comunes al menor exponente",
      "Tomar solo factores no comunes",
      "Sumar todos los factores",
    ],
    ans: "Tomar solo factores comunes al menor exponente",
    exp: "Para el M.C.D., seleccionamos únicamente los factores primos que se repiten en todos los números, elevados a su exponente más pequeño.",
  },
  {
    id: 23, block: 1,
    q: "Queremos envasar 12 L de aceite de oliva, 18 L de girasol y 24 L de maíz en garrafas idénticas de la mayor capacidad posible. ¿De cuántos litros será cada garrafa?",
    opts: ["2 litros", "3 litros", "6 litros", "12 litros"],
    ans: "6 litros",
    exp: "M.C.D.(12, 18, 24). Todos son múltiplos de 6. 12 = 6×2, 18 = 6×3, 24 = 6×4. El M.C.D. es 6.",
  },
  {
    id: 24, block: 1,
    q: "Calcula el M.C.D. de 16, 24 y 32.",
    opts: ["4", "8", "16", "96"],
    ans: "8",
    exp: "16 = 2⁴. 24 = 2³ × 3. 32 = 2⁵. El factor común con menor exponente es 2³ = 8.",
  },
  {
    id: 25, block: 1,
    q: "¿En cuál de estas situaciones usarías el M.C.D.?",
    opts: [
      "Calcular cuándo coincidirán dos autobuses",
      "Dividir grupos grandes en equipos más pequeños y exactos",
      "Averiguar cuándo se repite un eclipse",
      "Sumar fracciones",
    ],
    ans: "Dividir grupos grandes en equipos más pequeños y exactos",
    exp: "El M.C.D. sirve para dividir, repartir o fragmentar cantidades grandes en partes iguales sin que sobre nada.",
  },

  // ── BLOQUE 3: Mínimo Común Múltiplo (26–45) ───────────────────────────────
  {
    id: 26, block: 2,
    q: "¿Qué significa M.C.M.?",
    opts: ["Máximo Común Múltiplo", "Mínimo Común Múltiplo", "Mínimo Común Divisor", "Múltiplo Común Mayor"],
    ans: "Mínimo Común Múltiplo",
    exp: "Significa Mínimo Común Múltiplo: el número más pequeño que es múltiplo de dos o más números.",
  },
  {
    id: 27, block: 2,
    q: "Calcula el M.C.M. de 4 y 6.",
    opts: ["2", "10", "12", "24"],
    ans: "12",
    exp: "Múltiplos de 4: 4, 8, 12... Múltiplos de 6: 6, 12... El primero que coincide es el 12.",
  },
  {
    id: 28, block: 2,
    q: "Un semáforo cambia a verde cada 15 s y otro cada 20 s. Si acaban de cambiar juntos, ¿en cuántos segundos volverán a coincidir?",
    opts: ["5 segundos", "35 segundos", "60 segundos", "300 segundos"],
    ans: "60 segundos",
    exp: "M.C.M. de 15 y 20. Múltiplos de 15: 15, 30, 45, 60... Múltiplos de 20: 20, 40, 60... Coinciden a los 60 s.",
  },
  {
    id: 29, block: 2,
    q: "Calcula el M.C.M. de dos números primos como 3 y 5.",
    opts: ["1", "8", "15", "30"],
    ans: "15",
    exp: "El M.C.M. de dos números primos es siempre su multiplicación directa. 3 × 5 = 15.",
  },
  {
    id: 30, block: 2,
    q: "Ana va a natación cada 3 días y a inglés cada 4 días. Si hoy tuvo ambas actividades, ¿en cuántos días volverán a coincidir?",
    opts: ["7 días", "12 días", "14 días", "24 días"],
    ans: "12 días",
    exp: "M.C.M. de 3 y 4. Al no compartir factores, su M.C.M. es 3 × 4 = 12 días.",
  },
  {
    id: 31, block: 2,
    q: "¿Cuál es el M.C.M. de 8 y 12?",
    opts: ["4", "16", "24", "96"],
    ans: "24",
    exp: "8 = 2³. 12 = 2² × 3. M.C.M. toma factores comunes y no comunes al mayor exponente: 2³ × 3 = 24.",
  },
  {
    id: 32, block: 2,
    q: "Juan da una vuelta a la pista cada 6 min y María cada 9 min. Si salen juntos, ¿cuánto tardarán en coincidir en la meta?",
    opts: ["3 minutos", "15 minutos", "18 minutos", "54 minutos"],
    ans: "18 minutos",
    exp: "M.C.M. de 6 y 9. Múltiplos de 6: 6, 12, 18. Múltiplos de 9: 9, 18. Coinciden a los 18 min.",
  },
  {
    id: 33, block: 2,
    q: "Calcula el M.C.M. de 10 y 100.",
    opts: ["10", "100", "110", "1000"],
    ans: "100",
    exp: "Si un número es múltiplo del otro (100 es múltiplo de 10), el M.C.M. es el número mayor: 100.",
  },
  {
    id: 34, block: 2,
    q: "Un médico receta una pastilla cada 6 h y un jarabe cada 8 h. Si los toma juntos a las 8:00 am, ¿cuántas horas pasarán para que los vuelva a tomar juntos?",
    opts: ["2 horas", "14 horas", "24 horas", "48 horas"],
    ans: "24 horas",
    exp: "M.C.M. de 6 y 8. Múltiplos de 6: 6, 12, 18, 24. Múltiplos de 8: 8, 16, 24. Volverá a tomarlos juntos en 24 h.",
  },
  {
    id: 35, block: 2,
    q: "¿Qué nos indica la regla para calcular el M.C.M. usando descomposición en factores primos?",
    opts: [
      "Tomar factores comunes y no comunes al mayor exponente",
      "Tomar solo factores comunes al menor exponente",
      "Multiplicar solo los números pares",
      "Elegir el factor más grande",
    ],
    ans: "Tomar factores comunes y no comunes al mayor exponente",
    exp: "Para el M.C.M., tomamos TODOS los factores primos que aparezcan (comunes y no comunes) con el exponente más alto.",
  },
  {
    id: 36, block: 2,
    q: "Calcula el M.C.M. de 6, 9 y 12.",
    opts: ["3", "18", "36", "72"],
    ans: "36",
    exp: "6 = 2×3, 9 = 3², 12 = 2²×3. Tomamos mayores exponentes: 2² × 3² = 4 × 9 = 36.",
  },
  {
    id: 37, block: 2,
    q: "En un vivero riegan las rosas cada 4 días y los cactus cada 14 días. Si hoy regaron ambos, ¿en cuántos días los regarán el mismo día?",
    opts: ["2 días", "18 días", "28 días", "56 días"],
    ans: "28 días",
    exp: "M.C.M. de 4 y 14. 4 = 2². 14 = 2×7. M.C.M. = 2² × 7 = 28 días.",
  },
  {
    id: 38, block: 2,
    q: "Calcula el M.C.M. de 15 y 20.",
    opts: ["5", "30", "60", "300"],
    ans: "60",
    exp: "15 = 3×5. 20 = 2²×5. M.C.M. = 2² × 3 × 5 = 60.",
  },
  {
    id: 39, block: 2,
    q: "Un faro emite luz roja cada 8 s y luz verde cada 10 s. ¿Cada cuántos segundos coinciden ambas luces?",
    opts: ["2 segundos", "18 segundos", "40 segundos", "80 segundos"],
    ans: "40 segundos",
    exp: "M.C.M. de 8 y 10. 8 = 2³. 10 = 2×5. M.C.M. = 2³ × 5 = 40 s.",
  },
  {
    id: 40, block: 2,
    q: "¿Cuál es el M.C.M. de 14 y 21?",
    opts: ["7", "21", "42", "294"],
    ans: "42",
    exp: "14 = 2×7. 21 = 3×7. M.C.M. = 2 × 3 × 7 = 42.",
  },
  {
    id: 41, block: 2,
    q: "Se revisan 3 máquinas: la A cada 12 días, la B cada 15 días y la C cada 20 días. ¿Cada cuántos días se revisan las tres el mismo día?",
    opts: ["5 días", "30 días", "60 días", "120 días"],
    ans: "60 días",
    exp: "M.C.M. de 12, 15 y 20 es 60, porque 60 es divisible entre 12, 15 y 20.",
  },
  {
    id: 42, block: 2,
    q: "Calcula el M.C.M. de 25 y 30.",
    opts: ["5", "150", "300", "750"],
    ans: "150",
    exp: "25 = 5². 30 = 2×3×5. M.C.M. = 2 × 3 × 5² = 150.",
  },
  {
    id: 43, block: 2,
    q: "Un equipo de seguridad cambia claves cada 18 días y tarjetas cada 24 días. ¿Cada cuántos días coincidirán ambos cambios?",
    opts: ["6 días", "36 días", "72 días", "144 días"],
    ans: "72 días",
    exp: "M.C.M. de 18 y 24. 18 = 2×3². 24 = 2³×3. M.C.M. = 2³ × 3² = 72.",
  },
  {
    id: 44, block: 2,
    q: "El producto del M.C.D. y el M.C.M. de dos números (a, b) es igual a...",
    opts: ["Su suma", "El producto de los números (a × b)", "Su resta", "Su división"],
    ans: "El producto de los números (a × b)",
    exp: "Por regla matemática: M.C.D.(a, b) × M.C.M.(a, b) = a × b. Es una forma excelente de comprobar cálculos.",
  },
  {
    id: 45, block: 2,
    q: "¿En cuál de estas situaciones usarías el M.C.M.?",
    opts: [
      "Cortar madera en estantes del mismo tamaño",
      "Repartir dulces en bolsas iguales",
      "Saber cuándo volverán a coincidir tres alarmas",
      "Determinar el número primo más grande",
    ],
    ans: "Saber cuándo volverán a coincidir tres alarmas",
    exp: "El M.C.M. sirve para encontrar puntos futuros donde eventos con distintas frecuencias vuelven a coincidir.",
  },
];

const BLOCKS = [
  { label: "Números Primos",       color: C.gold,    range: [1, 5]  },
  { label: "Máx. Común Divisor",   color: C.teal,    range: [6, 25] },
  { label: "Mín. Común Múltiplo",  color: C.purple,  range: [26, 45] },
];

function getBlock(id) {
  return BLOCKS.find(b => id >= b.range[0] && id <= b.range[1]) || BLOCKS[0];
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function fmt(s) {
  const m = Math.floor(s / 60), sec = s % 60;
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

export default function PrimosMCDMCM() {
  const [mode, setMode]           = useState("menu");
  const [examMode, setExamMode]   = useState(null);
  const [queue, setQueue]         = useState([]);
  const [current, setCurrent]     = useState(0);
  const [answers, setAnswers]     = useState({});
  const [confirmed, setConfirmed] = useState(false);
  const [selected, setSelected]   = useState(null);
  const [timeLeft, setTimeLeft]   = useState(0);
  const [timerOn, setTimerOn]     = useState(false);
  const [filter, setFilter]       = useState("all");

  useEffect(() => {
    if (!timerOn || timeLeft <= 0) return;
    const t = setInterval(() => setTimeLeft(p => p - 1), 1000);
    return () => clearInterval(t);
  }, [timerOn, timeLeft]);

  useEffect(() => {
    if (timeLeft <= 0 && timerOn) { setTimerOn(false); setMode("results"); }
  }, [timeLeft, timerOn]);

  const startExam = (modeKey) => {
    let qs;
    if (modeKey === "all") {
      qs = shuffle(questions);
    } else {
      const idx = parseInt(modeKey.replace("block-", ""), 10);
      qs = shuffle(questions.filter(q => q.block === idx));
    }
    qs = qs.map(q => ({ ...q, opts: shuffle(q.opts) }));
    const secs = modeKey === "all" ? 45 * 30 : qs.length * 30;
    setQueue(qs);
    setAnswers({});
    setCurrent(0);
    setSelected(null);
    setConfirmed(false);
    setTimeLeft(secs);
    setTimerOn(true);
    setExamMode(modeKey);
    setMode("exam");
  };

  const confirmAnswer = () => {
    if (!selected) return;
    setAnswers(p => ({ ...p, [queue[current].id]: selected }));
    setConfirmed(true);
  };

  const goNext = () => {
    if (current < queue.length - 1) {
      const nid = queue[current + 1].id;
      setCurrent(c => c + 1);
      setSelected(answers[nid] || null);
      setConfirmed(!!answers[nid]);
    } else {
      setTimerOn(false);
      setMode("results");
    }
  };

  const score = Object.entries(answers).reduce((acc, [id, ans]) => {
    const q = questions.find(q => q.id === Number(id));
    return acc + (q?.ans === ans ? 1 : 0);
  }, 0);

  const timerWarning = timeLeft < 120;

  // ── MENU ─────────────────────────────────────────────────────────────────
  if (mode === "menu") return (
    <div style={{ minHeight: "100vh", background: C.bg, paddingBottom: 64 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 5px; background: ${C.bg}; }
        ::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 99px; }
      `}</style>

      <div style={{
        background: C.surface, borderBottom: `1px solid ${C.border}`,
        padding: "44px 24px 32px", textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: `linear-gradient(${C.teal} 1px,transparent 1px),linear-gradient(90deg,${C.teal} 1px,transparent 1px)`,
          backgroundSize: "44px 44px",
        }}/>
        <div style={{ position: "relative" }}>
          <span style={{
            display: "inline-block", background: C.teal + "22", color: C.teal,
            borderRadius: 99, padding: "3px 14px", fontSize: 11,
            fontWeight: 700, letterSpacing: 2, textTransform: "uppercase",
            marginBottom: 14, fontFamily: "'DM Sans',sans-serif",
          }}>FactoRizando · Matemáticas</span>
          <h1 style={{
            fontSize: "clamp(20px,4vw,34px)", fontWeight: 700, color: C.text,
            letterSpacing: "-1px", lineHeight: 1.1, marginBottom: 10,
            fontFamily: "'DM Sans',sans-serif",
          }}>
            Primos, <span style={{ color: C.teal }}>M.C.D.</span> y <span style={{ color: C.purple }}>M.C.M.</span>
          </h1>
          <p style={{ color: C.muted, fontSize: 14, maxWidth: 500, margin: "0 auto 22px", fontFamily: "'DM Sans',sans-serif" }}>
            45 preguntas · 3 bloques · 30 s por pregunta
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 36, flexWrap: "wrap", fontFamily: "'DM Sans',sans-serif" }}>
            {[{ label: "Preguntas", val: 45 }, { label: "Bloques", val: 3 }, { label: "Tiempo (todo)", val: "22 min" }].map(s => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 20, fontWeight: 900, color: C.text, letterSpacing: "-1px" }}>{s.val}</div>
                <div style={{ fontSize: 10, color: C.muted, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "32px 16px" }}>
        <p style={{ color: C.muted, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12, fontFamily: "'DM Sans',sans-serif" }}>
          Examen completo
        </p>
        <button onClick={() => startExam("all")} style={{
          width: "100%", background: C.surface, border: `1px solid ${C.border}`,
          borderRadius: 14, padding: "22px 16px", cursor: "pointer",
          textAlign: "center", marginBottom: 28, fontFamily: "'DM Sans',sans-serif", transition: "all 0.2s",
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = C.teal; e.currentTarget.style.background = C.teal + "11"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = C.surface; }}
        >
          <div style={{ fontSize: 28, marginBottom: 6 }}>📋</div>
          <div style={{ color: C.text, fontWeight: 700, fontSize: 15 }}>Todas las preguntas</div>
          <div style={{ color: C.muted, fontSize: 12, marginTop: 4 }}>45 preguntas en orden aleatorio · 22 min</div>
        </button>

        <p style={{ color: C.muted, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12, fontFamily: "'DM Sans',sans-serif" }}>
          O elige un bloque
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px,1fr))", gap: 12 }}>
          {BLOCKS.map((bl, i) => {
            const count = bl.range[1] - bl.range[0] + 1;
            return (
              <button key={i} onClick={() => startExam(`block-${i}`)} style={{
                background: C.surface, border: `1px solid ${bl.color}44`,
                borderRadius: 12, padding: "20px 16px", cursor: "pointer",
                textAlign: "center", fontFamily: "'DM Sans',sans-serif", transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = bl.color + "18"; e.currentTarget.style.borderColor = bl.color; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.surface; e.currentTarget.style.borderColor = bl.color + "44"; }}
              >
                <div style={{ color: bl.color, fontWeight: 700, fontSize: 13 }}>{bl.label}</div>
                <div style={{ color: C.muted, fontSize: 12, marginTop: 4 }}>{count} preguntas · {Math.round(count * 0.5)} min</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  // ── RESULTS ──────────────────────────────────────────────────────────────
  if (mode === "results") {
    const total = queue.length;
    const pct   = total > 0 ? Math.round((score / total) * 100) : 0;
    const col   = pct >= 80 ? C.teal : pct >= 60 ? C.gold : C.crimson;
    const msg   = pct >= 90 ? "¡Dominio sobresaliente!" : pct >= 70 ? "¡Buen trabajo!" : pct >= 50 ? "Sigue practicando" : "Necesitas repasar el tema";
    const displayQs = filter === "correct" ? queue.filter(q => answers[q.id] === q.ans)
                    : filter === "wrong"   ? queue.filter(q => answers[q.id] && answers[q.id] !== q.ans)
                    : queue;

    return (
      <div style={{ minHeight: "100vh", background: C.bg, paddingBottom: 64 }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}`}</style>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "32px 16px" }}>

          <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
            <button onClick={() => setMode("menu")} style={{
              background: C.surface, color: C.dim, border: `1px solid ${C.border}`,
              borderRadius: 12, padding: "12px 28px", fontSize: 14, fontWeight: 600,
              fontFamily: "'DM Sans',sans-serif", cursor: "pointer",
            }}>← Menú</button>
            <button onClick={() => startExam(examMode)} style={{
              background: `linear-gradient(135deg,${C.teal},${C.blue})`,
              color: "#fff", border: "none", borderRadius: 12, padding: "12px 28px",
              fontSize: 14, fontWeight: 700, fontFamily: "'DM Sans',sans-serif", cursor: "pointer",
            }}>↺ Repetir</button>
          </div>

          <div style={{
            background: C.surface, border: `2px solid ${col}`,
            borderRadius: 18, padding: "30px 36px", textAlign: "center",
            maxWidth: 380, margin: "0 auto 32px", fontFamily: "'DM Sans',sans-serif",
          }}>
            <div style={{ fontSize: 58, fontWeight: 900, color: col, letterSpacing: "-3px", lineHeight: 1 }}>{pct}%</div>
            <div style={{ color: C.dim, fontSize: 14, marginTop: 8 }}>
              <span style={{ color: C.text, fontWeight: 700 }}>{score}</span> de {total} correctas
            </div>
            <div style={{ color: col, fontWeight: 700, fontSize: 15, marginTop: 10 }}>{msg}</div>
          </div>

          <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
            {[["all", "Todas"], ["correct", `✓ Correctas (${score})`], ["wrong", `✗ Incorrectas (${total - score})`]].map(([f, label]) => (
              <button key={f} onClick={() => setFilter(f)} style={{
                padding: "6px 14px", borderRadius: 99, fontSize: 12, fontWeight: 700,
                cursor: "pointer", border: "none",
                background: filter === f ? C.teal : C.surface,
                color: filter === f ? "#fff" : C.muted,
                transition: "all 0.2s", fontFamily: "'DM Sans',sans-serif",
              }}>{label}</button>
            ))}
          </div>

          {displayQs.map(q => {
            const bl  = getBlock(q.id);
            const sel = answers[q.id];
            return (
              <div key={q.id} style={{
                background: C.surface, border: `1px solid ${C.border}`,
                borderRadius: 14, padding: "20px 24px", marginBottom: 12,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <span style={{ background: bl.color + "1a", color: bl.color, borderRadius: 6, padding: "2px 10px", fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif" }}>{bl.label}</span>
                  <span style={{ marginLeft: "auto", color: C.muted, fontSize: 12, fontFamily: "'DM Sans',sans-serif" }}>#{q.id}</span>
                </div>
                <p style={{ color: C.text, fontSize: 15, fontWeight: 600, marginBottom: 12, lineHeight: 1.55, fontFamily: "'DM Sans',sans-serif" }}>{q.q}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 10 }}>
                  {q.opts.map(opt => {
                    const isOk = opt === q.ans, isUser = opt === sel;
                    let bg = C.bg, bd = `1px solid ${C.border}`, co = C.dim;
                    if (isOk)                { bg = C.teal + "22";    bd = `1px solid ${C.teal}`;    co = C.teal; }
                    else if (isUser && !isOk){ bg = C.crimson + "22"; bd = `1px solid ${C.crimson}`; co = C.crimson; }
                    return (
                      <div key={opt} style={{ background: bg, border: bd, color: co, borderRadius: 8, padding: "8px 12px", fontSize: 13, fontFamily: "'DM Sans',sans-serif" }}>
                        {isOk ? "✓ " : ""}{isUser && !isOk ? "✗ " : ""}{opt}
                      </div>
                    );
                  })}
                </div>
                <div style={{ padding: "8px 12px", background: C.blue + "0e", borderRadius: 8, border: `1px solid ${C.blue}22` }}>
                  <span style={{ color: C.blue, fontSize: 11, fontWeight: 700, fontFamily: "'DM Sans',sans-serif" }}>💡 </span>
                  <span style={{ color: C.dim, fontSize: 12, fontFamily: "'DM Sans',sans-serif" }}>{q.exp}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ── EXAM ─────────────────────────────────────────────────────────────────
  const q    = queue[current];
  const bl   = getBlock(q.id);
  const prog = ((current + 1) / queue.length) * 100;
  const answered = Object.keys(answers).length;

  return (
    <div style={{ minHeight: "100vh", background: C.bg, paddingBottom: 64 }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}::-webkit-scrollbar{width:5px;background:${C.bg}}::-webkit-scrollbar-thumb{background:${C.border};border-radius:99px}`}</style>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "24px 16px" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
          <div style={{ fontFamily: "'DM Sans',sans-serif" }}>
            <span style={{ color: C.muted, fontSize: 13 }}>Pregunta </span>
            <span style={{ color: C.text, fontWeight: 700 }}>{current + 1}</span>
            <span style={{ color: C.muted }}> / {queue.length}</span>
            <span style={{ color: C.muted, fontSize: 12, marginLeft: 10 }}>({answered} respondidas)</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{
              fontSize: 13, fontWeight: 700,
              color: timerWarning ? C.crimson : C.blue,
              background: timerWarning ? C.crimson + "18" : C.blue + "18",
              padding: "5px 12px", borderRadius: 20,
              border: `1px solid ${timerWarning ? C.crimson : C.blue}55`,
              fontFamily: "'DM Sans',sans-serif",
            }}>⏱ {fmt(timeLeft)}</span>
            <button onClick={() => { setTimerOn(false); setMode("results"); }} style={{
              padding: "5px 12px", background: C.crimson + "18", color: C.crimson,
              border: `1px solid ${C.crimson}44`, borderRadius: 20,
              cursor: "pointer", fontSize: 12, fontFamily: "'DM Sans',sans-serif",
            }}>Terminar</button>
          </div>
        </div>

        <div style={{ background: C.border, borderRadius: 99, height: 4, overflow: "hidden", marginBottom: 20 }}>
          <div style={{ height: "100%", width: `${prog}%`, background: `linear-gradient(90deg,${C.teal},${C.blue})`, transition: "width 0.3s", borderRadius: 99 }}/>
        </div>

        <div style={{ marginBottom: 12 }}>
          <span style={{ background: bl.color + "1a", color: bl.color, borderRadius: 6, padding: "2px 10px", fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif" }}>{bl.label}</span>
          <span style={{ marginLeft: 10, color: C.muted, fontSize: 12, fontFamily: "'DM Sans',sans-serif" }}>#{q.id} / 45</span>
        </div>

        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "22px 26px", marginBottom: 16 }}>
          <p style={{ color: C.text, fontSize: 16, fontWeight: 600, lineHeight: 1.6, fontFamily: "'DM Sans',sans-serif", margin: 0 }}>{q.q}</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
          {q.opts.map(opt => {
            const isSel = selected === opt, isOk = opt === q.ans;
            let bg = C.bg, bd = `1px solid ${C.border}`, co = C.dim;
            if (confirmed && isSel && isOk)  { bg = C.teal + "22";    bd = `1px solid ${C.teal}`;    co = C.teal; }
            else if (confirmed && isSel)     { bg = C.crimson + "22"; bd = `1px solid ${C.crimson}`; co = C.crimson; }
            else if (confirmed && isOk)      { bg = C.teal + "0e";    bd = `1px solid ${C.teal}55`;  co = C.teal + "99"; }
            else if (isSel)                  { bg = bl.color + "18";  bd = `1px solid ${bl.color}`;  co = bl.color; }
            return (
              <button key={opt} onClick={() => !confirmed && setSelected(opt)} style={{
                background: bg, border: bd, color: co,
                borderRadius: 9, padding: "11px 14px", fontSize: 14, fontWeight: 500,
                cursor: confirmed ? "default" : "pointer", textAlign: "left",
                transition: "all 0.15s", outline: "none", fontFamily: "'DM Sans',sans-serif", lineHeight: 1.5,
              }}>
                {confirmed && isOk ? "✓ " : ""}{confirmed && isSel && !isOk ? "✗ " : ""}{opt}
              </button>
            );
          })}
        </div>

        {confirmed && (
          <div style={{
            background: C.blue + "0e", border: `1px solid ${C.blue}22`,
            borderRadius: 10, padding: "12px 16px", marginBottom: 16,
          }}>
            <span style={{ color: C.blue, fontSize: 12, fontWeight: 700, fontFamily: "'DM Sans',sans-serif" }}>💡 Explicación: </span>
            <span style={{ color: C.dim, fontSize: 13, fontFamily: "'DM Sans',sans-serif" }}>{q.exp}</span>
          </div>
        )}

        <div style={{ display: "flex", gap: 10, justifyContent: "space-between", alignItems: "center" }}>
          <button onClick={() => {
            if (current > 0) { const pid = queue[current - 1].id; setCurrent(c => c - 1); setSelected(answers[pid] || null); setConfirmed(!!answers[pid]); }
          }} disabled={current === 0} style={{
            padding: "10px 20px", background: C.surface, color: C.muted,
            border: `1px solid ${C.border}`, borderRadius: 10,
            cursor: current === 0 ? "not-allowed" : "pointer",
            opacity: current === 0 ? 0.4 : 1, fontSize: 14, fontFamily: "'DM Sans',sans-serif",
          }}>← Anterior</button>

          {!confirmed ? (
            <button onClick={confirmAnswer} disabled={!selected} style={{
              padding: "10px 28px", fontSize: 14, fontWeight: 700,
              background: selected ? `linear-gradient(135deg,${C.teal},${C.blue})` : C.surface,
              color: selected ? "#fff" : C.muted, border: "none", borderRadius: 10,
              cursor: selected ? "pointer" : "not-allowed",
              boxShadow: selected ? `0 4px 20px ${C.teal}33` : "none",
              fontFamily: "'DM Sans',sans-serif", transition: "all 0.2s",
            }}>Confirmar respuesta</button>
          ) : (
            <button onClick={goNext} style={{
              padding: "10px 28px", fontSize: 14, fontWeight: 700,
              background: `linear-gradient(135deg,${C.teal},${C.blue})`,
              color: "#fff", border: "none", borderRadius: 10,
              cursor: "pointer", boxShadow: `0 4px 20px ${C.teal}33`,
              fontFamily: "'DM Sans',sans-serif",
            }}>
              {current === queue.length - 1 ? "Ver resultados →" : "Siguiente →"}
            </button>
          )}
        </div>

        <div style={{ marginTop: 24, background: C.surface, borderRadius: 12, padding: 16, border: `1px solid ${C.border}` }}>
          <p style={{ color: C.muted, fontSize: 11, marginBottom: 10, textTransform: "uppercase", letterSpacing: 1, fontFamily: "'DM Sans',sans-serif" }}>Navegador de preguntas</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
            {queue.map((fq, i) => {
              const ans = answers[fq.id], isCurr = i === current;
              let bg = C.surface, co = C.muted;
              if (isCurr)              { bg = C.teal;          co = "#fff"; }
              else if (ans === fq.ans) { bg = C.teal + "33";   co = C.teal; }
              else if (ans)            { bg = C.crimson + "33"; co = C.crimson; }
              return (
                <button key={fq.id} onClick={() => { setCurrent(i); setSelected(answers[fq.id] || null); setConfirmed(!!answers[fq.id]); }} style={{
                  width: 28, height: 28, borderRadius: 6, background: bg, color: co,
                  border: isCurr ? `2px solid ${C.teal}` : `1px solid ${C.border}`,
                  cursor: "pointer", fontSize: 11, fontWeight: isCurr ? 700 : 400,
                  fontFamily: "'DM Sans',sans-serif",
                }}>{i + 1}</button>
              );
            })}
          </div>
          <div style={{ display: "flex", gap: 16, marginTop: 10 }}>
            {[[C.teal + "33", C.teal, "Correcta"], [C.crimson + "33", C.crimson, "Incorrecta"], [C.surface, C.muted, "Sin contestar"]].map(([bg, co, label]) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div style={{ width: 12, height: 12, borderRadius: 3, background: bg, border: `1px solid ${co}` }}/>
                <span style={{ color: C.muted, fontSize: 11, fontFamily: "'DM Sans',sans-serif" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
