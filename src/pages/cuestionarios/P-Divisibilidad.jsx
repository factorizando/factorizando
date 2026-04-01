import { useState } from 'react';

// ─── TEMA FACTORIZANDO ────────────────────────────────────────────────────────
const T = {
  bg:       "#0e0f11",
  surface:  "#13151a",
  panel:    "#1a1d24",
  panel2:   "#1e2230",
  border:   "#252830",
  accent:   "#3b9eff",
  accentDim:"rgba(59,158,255,.12)",
  text:     "#e8eaf0",
  muted:    "#5a6070",
  correct:  "#34d399",
  correctBg:"rgba(52,211,153,.1)",
  error:    "#f87171",
  errorBg:  "rgba(248,113,113,.1)",
  warning:  "#fbbf24",
};

// ─── DATOS DEL CUESTIONARIO ───────────────────────────────────────────────────
const QUESTIONS = [
  { id:1, question:"¿Qué es un número primo?", options:["Un número impar","Un número divisible solo por 1 y por sí mismo","Un número que termina en 3, 5 o 7","Un número que tiene muchos divisores"], correctAnswer:1, explanation:"Un número primo tiene exactamente dos divisores distintos: el 1 y él mismo. Por ejemplo, el 7 solo se puede dividir entre 1 y 7." },
  { id:2, question:"¿Cuál es el único número primo que también es un número par?", options:["0","4","2","No existen primos pares"], correctAnswer:2, explanation:"El 2 es el único primo par porque sus únicos divisores son el 1 y el 2. Todos los demás pares son divisibles por 2, por lo que ya no son primos." },
  { id:3, question:"¿Cuál de los siguientes grupos contiene SOLO números primos?", options:["2, 3, 5, 9","2, 3, 5, 7, 11","1, 2, 3, 5","3, 5, 7, 15"], correctAnswer:1, explanation:"El 9 y el 15 no son primos (se dividen por 3). El 1 por convención matemática no se considera primo. El grupo correcto es 2, 3, 5, 7, 11." },
  { id:4, question:"¿Cuál es la factorización prima correcta del número 60?", options:["2 × 30","4 × 15","2² × 3 × 5","2 × 3 × 10"], correctAnswer:2, explanation:"60 = 2 × 30 = 2 × 2 × 15 = 2 × 2 × 3 × 5. Es decir, 2² × 3 × 5." },
  { id:5, question:"Si la edad de Ana es el mayor número primo menor que 20, ¿cuántos años tiene Ana?", options:["17","18","19","21"], correctAnswer:2, explanation:"El 19 solo se divide entre 1 y 19, por lo tanto, es el mayor primo menor que 20." },
  { id:6, question:"¿Qué significa M.C.D.?", options:["Mínimo Común Divisor","Máximo Común Múltiplo","Máximo Común Divisor","Múltiplo Común Dividido"], correctAnswer:2, explanation:"Significa Máximo Común Divisor: el número más grande que puede dividir a dos o más números sin dejar residuo." },
  { id:7, question:"Calcula el M.C.D. de 12 y 18.", options:["2","3","6","36"], correctAnswer:2, explanation:"Divisores de 12: 1,2,3,4,6,12. Divisores de 18: 1,2,3,6,9,18. El mayor divisor que comparten es el 6." },
  { id:8, question:"¿Cuál es el M.C.D. de dos números primos distintos, por ejemplo 7 y 13?", options:["1","Su producto (91)","7","No tienen"], correctAnswer:0, explanation:"Como los números primos solo son divisibles por 1 y por sí mismos, el único divisor que comparten es el 1." },
  { id:9, question:"Tienes dos cuerdas de 20 m y 30 m. Quieres cortarlas en trozos iguales, siendo estos lo más largos posible. ¿De qué tamaño debe ser cada trozo?", options:["2 m","5 m","10 m","60 m"], correctAnswer:2, explanation:"El problema pide 'cortar en trozos iguales lo más grandes posible', eso es M.C.D. El M.C.D. de 20 y 30 es 10." },
  { id:10, question:"Calcula el M.C.D. de 40 y 60.", options:["10","20","40","120"], correctAnswer:1, explanation:"40/20=2 y 60/20=3. 20 es el divisor más grande que comparten." },
  { id:11, question:"Un carpintero tiene dos tablas, una de 24 cm y otra de 36 cm. ¿Cuál es la mayor longitud de cada pedazo si quiere cortarlas en partes iguales?", options:["6 cm","8 cm","12 cm","72 cm"], correctAnswer:2, explanation:"M.C.D.(24,36)=12. (24=12×2, 36=12×3)." },
  { id:12, question:"¿Cuál es el M.C.D. de 14 y 21?", options:["1","3","7","42"], correctAnswer:2, explanation:"14=2×7. 21=3×7. El factor primo común mayor es 7." },
  { id:13, question:"Se tienen 48 dulces y 64 chocolates para hacer bolsas iguales. ¿Cuántas golosinas tendrá cada bolsa?", options:["8","12","16","24"], correctAnswer:2, explanation:"M.C.D.(48,64)=16. (48=16×3, 64=16×4)." },
  { id:14, question:"Calcula el M.C.D. de 15, 25 y 35.", options:["1","5","15","175"], correctAnswer:1, explanation:"15=3×5, 25=5×5, 35=7×5. El M.C.D. es 5." },
  { id:15, question:"Si un número es múltiplo de otro (10 y 30), ¿cuál es su M.C.D.?", options:["El número mayor","El número menor","El número 1","El producto de ambos"], correctAnswer:1, explanation:"Si el menor divide al mayor, el M.C.D. es el número menor. M.C.D.(10,30)=10." },
  { id:16, question:"Una florista tiene 120 rosas y 160 margaritas. ¿Cuál es el mayor número de ramos idénticos que puede armar?", options:["10","20","40","80"], correctAnswer:2, explanation:"M.C.D.(120,160)=40. (120/40=3 y 160/40=4)." },
  { id:17, question:"Calcula el M.C.D. de 81 y 54.", options:["9","18","27","162"], correctAnswer:2, explanation:"81=3⁴. 54=2×3³. Los factores comunes son 3³=27." },
  { id:18, question:"Terreno de 300m×200m en parcelas cuadradas de mayor área posible. ¿Cuánto mide el lado?", options:["10 m","20 m","50 m","100 m"], correctAnswer:3, explanation:"M.C.D.(300,200)=100." },
  { id:19, question:"¿Cuál es el M.C.D. de tres números si uno es 1? (1, 5, 8)", options:["El número mayor","El número de en medio","1","0"], correctAnswer:2, explanation:"El 1 solo es divisible por 1, por lo tanto el M.C.D. siempre será 1." },
  { id:20, question:"Un profesor tiene 45 lápices y 30 borradores. ¿Cuántos kits escolares puede armar?", options:["5","10","15","30"], correctAnswer:2, explanation:"M.C.D.(45,30)=15." },
  { id:21, question:"Calcula el M.C.D. de 100 y 75.", options:["5","15","25","300"], correctAnswer:2, explanation:"100=25×4. 75=25×3. El M.C.D. es 25." },
  { id:22, question:"¿Qué indica la regla del M.C.D. con factores primos?", options:["Factores comunes y no comunes al mayor exponente","Solo factores comunes al menor exponente","Solo factores no comunes","Sumar todos los factores"], correctAnswer:1, explanation:"Para el M.C.D., seleccionamos los factores primos comunes a todos, al menor exponente." },
  { id:23, question:"12L de aceite de oliva, 18L de girasol y 24L de maíz en garrafas iguales. ¿Cuántos litros por garrafa?", options:["2 L","3 L","6 L","12 L"], correctAnswer:2, explanation:"M.C.D.(12,18,24)=6." },
  { id:24, question:"Calcula el M.C.D. de 16, 24 y 32.", options:["4","8","16","96"], correctAnswer:1, explanation:"16=2⁴, 24=2³×3, 32=2⁵. Factor común menor exponente: 2³=8." },
  { id:25, question:"¿En cuál situación usarías el M.C.D.?", options:["Calcular cuándo coincidirán dos autobuses","Dividir grupos en equipos exactos","Averiguar cuándo se repite un eclipse","Sumar fracciones"], correctAnswer:1, explanation:"El M.C.D. sirve para dividir, repartir o fragmentar en partes iguales." },
  { id:26, question:"¿Qué significa M.C.M.?", options:["Máximo Común Múltiplo","Mínimo Común Múltiplo","Mínimo Común Divisor","Múltiplo Común Mayor"], correctAnswer:1, explanation:"Mínimo Común Múltiplo: el número más pequeño múltiplo de dos o más números." },
  { id:27, question:"Calcula el M.C.M. de 4 y 6.", options:["2","10","12","24"], correctAnswer:2, explanation:"Múltiplos de 4: 4,8,12... Múltiplos de 6: 6,12... El primero en coincidir es 12." },
  { id:28, question:"Un semáforo cambia cada 15s y otro cada 20s. ¿En cuántos segundos coincidirán?", options:["5 s","35 s","60 s","300 s"], correctAnswer:2, explanation:"M.C.M.(15,20)=60." },
  { id:29, question:"Calcula el M.C.M. de dos números primos como 3 y 5.", options:["1","8","15","30"], correctAnswer:2, explanation:"El M.C.M. de dos primos siempre es su producto: 3×5=15." },
  { id:30, question:"Ana va a natación cada 3 días y a inglés cada 4 días. ¿En cuántos días coincidirán?", options:["7 días","12 días","14 días","24 días"], correctAnswer:1, explanation:"M.C.M.(3,4)=12 días." },
  { id:31, question:"¿Cuál es el M.C.M. de 8 y 12?", options:["4","16","24","96"], correctAnswer:2, explanation:"8=2³, 12=2²×3. M.C.M.=2³×3=24." },
  { id:32, question:"Juan da una vuelta cada 6 min y María cada 9 min. ¿Cuándo coincidirán en la meta?", options:["3 min","15 min","18 min","54 min"], correctAnswer:2, explanation:"M.C.M.(6,9)=18 minutos." },
  { id:33, question:"Calcula el M.C.M. de 10 y 100.", options:["10","100","110","1000"], correctAnswer:1, explanation:"100 es múltiplo de 10, por lo que el M.C.M. es 100." },
  { id:34, question:"Pastilla cada 6h y jarabe cada 8h. ¿En cuántas horas los volverá a tomar juntos?", options:["2 h","14 h","24 h","48 h"], correctAnswer:2, explanation:"M.C.M.(6,8)=24 horas." },
  { id:35, question:"¿Qué indica la regla del M.C.M. con factores primos?", options:["Factores comunes y no comunes al mayor exponente","Solo factores comunes al menor exponente","Multiplicar solo los pares","Elegir el factor más grande"], correctAnswer:0, explanation:"Para el M.C.M. tomamos TODOS los factores primos al mayor exponente." },
  { id:36, question:"Calcula el M.C.M. de 6, 9 y 12.", options:["3","18","36","72"], correctAnswer:2, explanation:"6=2×3, 9=3², 12=2²×3. M.C.M.=2²×3²=36." },
  { id:37, question:"Riegan rosas cada 4 días y cactus cada 14 días. ¿En cuántos días regarán ambos el mismo día?", options:["2 días","18 días","28 días","56 días"], correctAnswer:2, explanation:"M.C.M.(4,14)=28 días." },
  { id:38, question:"Calcula el M.C.M. de 15 y 20.", options:["5","30","60","300"], correctAnswer:2, explanation:"15=3×5, 20=2²×5. M.C.M.=2²×3×5=60." },
  { id:39, question:"Faro: luz roja cada 8s, verde cada 10s. ¿Cada cuántos segundos coinciden?", options:["2 s","18 s","40 s","80 s"], correctAnswer:2, explanation:"M.C.M.(8,10)=40 segundos." },
  { id:40, question:"¿Cuál es el M.C.M. de 14 y 21?", options:["7","21","42","294"], correctAnswer:2, explanation:"14=2×7, 21=3×7. M.C.M.=2×3×7=42." },
  { id:41, question:"Máquina A cada 12d, B cada 15d, C cada 20d. ¿Cada cuántos días se revisan las tres juntas?", options:["5 días","30 días","60 días","120 días"], correctAnswer:2, explanation:"M.C.M.(12,15,20)=60 días." },
  { id:42, question:"Calcula el M.C.M. de 25 y 30.", options:["5","150","300","750"], correctAnswer:1, explanation:"25=5², 30=2×3×5. M.C.M.=2×3×5²=150." },
  { id:43, question:"Claves cada 18 días y tarjetas cada 24 días. ¿Cada cuántos días coinciden?", options:["6 días","36 días","72 días","144 días"], correctAnswer:2, explanation:"M.C.M.(18,24)=72 días." },
  { id:44, question:"El producto de M.C.D. y M.C.M. de dos números a y b es igual a...", options:["Su suma","El producto a×b","Su resta","Su división"], correctAnswer:1, explanation:"M.C.D.(a,b) × M.C.M.(a,b) = a×b. Útil para verificar cálculos." },
  { id:45, question:"¿En cuál situación usarías el M.C.M.?", options:["Cortar madera en estantes iguales","Repartir dulces en bolsas iguales","Saber cuándo coincidirán tres alarmas","Hallar el primo más grande"], correctAnswer:2, explanation:"El M.C.M. sirve para encontrar cuándo eventos con distintas frecuencias vuelven a coincidir." },
];

const SECTIONS = [
  { label: "Números Primos",        color: T.warning, from: 0,  to: 4  },
  { label: "Máximo Común Divisor",  color: T.correct, from: 5,  to: 24 },
  { label: "Mínimo Común Múltiplo", color: T.accent,  from: 25, to: 44 },
];

function getSectionLabel(idx) {
  return SECTIONS.find(s => idx >= s.from && idx <= s.to)?.label ?? "";
}
function getSectionColor(idx) {
  return SECTIONS.find(s => idx >= s.from && idx <= s.to)?.color ?? T.accent;
}

// ─── PANTALLA: TEORÍA ─────────────────────────────────────────────────────────
function TheoryScreen({ onStart }) {
  const cards = [
    { title: "Números Primos", color: T.warning, desc: 'Los "ladrillos" de las matemáticas. Tienen exactamente dos divisores: el 1 y ellos mismos.', note: "Ej: 2, 3, 5, 7, 11, 13, 17…" },
    { title: "M.C.D.", color: T.correct, desc: "El Máximo Común Divisor es el número mayor que divide a varios números de forma exacta.", note: "Palabras clave: Cortar, repartir, dividir en partes iguales al máximo tamaño." },
    { title: "M.C.M.", color: "#a78bfa", desc: "El Mínimo Común Múltiplo es el múltiplo más pequeño que comparten varios números.", note: "Palabras clave: Coincidir, repetir, semáforos, próximos encuentros en el tiempo." },
  ];

  return (
    <div style={{ background: T.surface, borderRadius: 8, border: `1px solid ${T.border}`, overflow: "hidden" }}>
      {/* Header */}
      <div style={{ background: T.panel, padding: "2.5rem 2rem", textAlign: "center", borderBottom: `1px solid ${T.border}` }}>
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📖</div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: T.text, marginBottom: ".6rem" }}>
          Conceptos de Divisibilidad
        </h2>
        <p style={{ color: T.muted, fontSize: ".9rem", maxWidth: 520, margin: "0 auto", lineHeight: 1.6 }}>
          Aprende a distinguir cuándo usar números primos, el M.C.D. o el M.C.M. para resolver problemas de la vida diaria.
        </p>
      </div>

      <div style={{ padding: "2rem" }}>
        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
          {cards.map(c => (
            <div key={c.title} style={{ background: T.panel2, border: `1px solid ${T.border}`, borderRadius: 6, padding: "1.2rem", borderTop: `3px solid ${c.color}` }}>
              <h3 style={{ color: c.color, fontWeight: 700, marginBottom: ".5rem", fontSize: ".95rem" }}>{c.title}</h3>
              <p style={{ color: T.text, fontSize: ".82rem", lineHeight: 1.6, marginBottom: ".6rem" }}>{c.desc}</p>
              <p style={{ color: T.muted, fontSize: ".75rem", fontStyle: "italic" }}>{c.note}</p>
            </div>
          ))}
        </div>

        {/* Info */}
        <div style={{ background: T.panel, border: `1px solid ${T.border}`, borderRadius: 6, padding: "1rem", textAlign: "center", marginBottom: "1.5rem" }}>
          <p style={{ color: T.muted, fontSize: ".85rem" }}>
            Este cuestionario consta de <span style={{ color: T.text, fontWeight: 600 }}>45 preguntas</span> diseñadas para llevarte al dominio total de estos temas.
          </p>
        </div>

        {/* Button */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={onStart} style={{
            display: "flex", alignItems: "center", gap: ".6rem",
            background: T.accent, border: "none", borderRadius: 4,
            color: "#fff", padding: "1rem 2.4rem",
            fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", fontWeight: 600,
            cursor: "pointer", boxShadow: "0 4px 20px rgba(59,158,255,.35)",
            transition: "transform .2s, box-shadow .2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(59,158,255,.45)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(59,158,255,.35)"; }}
          >
            ▶ Iniciar Gran Reto (45 Preguntas)
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── PANTALLA: PREGUNTA ───────────────────────────────────────────────────────
function QuizScreen({ questions, currentIndex, score, onAnswer, onNext }) {
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const q = questions[currentIndex];
  const sectionColor = getSectionColor(currentIndex);
  const progress = (currentIndex / questions.length) * 100;

  const handleSelect = (idx) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    onAnswer(idx === q.correctAnswer);
  };

  const handleNext = () => {
    setSelected(null);
    setAnswered(false);
    onNext();
  };

  const getOptionStyle = (idx) => {
    const base = {
      width: "100%", textAlign: "left", padding: "1rem 1.2rem",
      borderRadius: 4, border: `1px solid ${T.border}`,
      background: T.panel, color: T.text,
      fontFamily: "'DM Sans', sans-serif", fontSize: ".92rem",
      cursor: answered ? "default" : "pointer",
      transition: "border-color .2s, background .2s",
      display: "flex", alignItems: "center", justifyContent: "space-between", gap: ".5rem",
    };
    if (!answered) return base;
    if (idx === q.correctAnswer) return { ...base, background: T.correctBg, borderColor: T.correct, color: T.correct };
    if (idx === selected) return { ...base, background: T.errorBg, borderColor: T.error, color: T.error };
    return { ...base, opacity: .4 };
  };

  return (
    <div>
      {/* Progress */}
      <div style={{ marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: ".75rem", color: T.muted, marginBottom: ".4rem" }}>
          <span>Pregunta {currentIndex + 1} de {questions.length}</span>
          <span>{Math.round(progress)}% completado</span>
        </div>
        <div style={{ height: 4, background: T.border, borderRadius: 4, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${progress}%`, background: T.accent, borderRadius: 4, transition: "width .4s ease" }} />
        </div>
      </div>

      {/* Card */}
      <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, overflow: "hidden" }}>
        <div style={{ padding: "1.8rem 1.8rem 0" }}>
          {/* Section tag */}
          <div style={{ fontSize: ".7rem", letterSpacing: ".18em", textTransform: "uppercase", color: sectionColor, marginBottom: ".8rem", fontWeight: 600 }}>
            {getSectionLabel(currentIndex)}
          </div>
          {/* Question */}
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", color: T.text, lineHeight: 1.5, marginBottom: "1.5rem" }}>
            {q.question}
          </h2>
          {/* Options */}
          <div style={{ display: "flex", flexDirection: "column", gap: ".7rem", marginBottom: "1.5rem" }}>
            {q.options.map((opt, idx) => (
              <button key={idx} onClick={() => handleSelect(idx)} style={getOptionStyle(idx)}
                onMouseEnter={e => { if (!answered) { e.currentTarget.style.borderColor = T.accent; e.currentTarget.style.background = T.accentDim; }}}
                onMouseLeave={e => { if (!answered) { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.background = T.panel; }}}
              >
                <span>{opt}</span>
                {answered && idx === q.correctAnswer && <span>✓</span>}
                {answered && idx === selected && idx !== q.correctAnswer && <span>✕</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Explanation */}
        {answered && (
          <div style={{ margin: "0 1.8rem 1.5rem", background: T.panel, border: `1px solid ${T.border}`, borderRadius: 6, padding: "1rem" }}>
            <div style={{ fontSize: ".72rem", letterSpacing: ".15em", textTransform: "uppercase", color: T.muted, marginBottom: ".4rem" }}>
              ¿Por qué es la respuesta correcta?
            </div>
            <p style={{ color: T.text, fontSize: ".85rem", lineHeight: 1.6 }}>{q.explanation}</p>
          </div>
        )}

        {/* Next button */}
        {answered && (
          <div style={{ padding: "1rem 1.8rem", borderTop: `1px solid ${T.border}`, display: "flex", justifyContent: "flex-end" }}>
            <button onClick={handleNext} style={{
              display: "flex", alignItems: "center", gap: ".5rem",
              background: T.accent, border: "none", borderRadius: 4,
              color: "#fff", padding: ".75rem 1.8rem",
              fontFamily: "'DM Sans', sans-serif", fontSize: ".9rem", fontWeight: 600,
              cursor: "pointer", transition: "background .2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#2d8fe8"}
            onMouseLeave={e => e.currentTarget.style.background = T.accent}
            >
              {currentIndex < questions.length - 1 ? "Siguiente pregunta →" : "Ver resultados →"}
            </button>
          </div>
        )}
      </div>

      {/* Score display */}
      <div style={{ marginTop: "1rem", textAlign: "right", fontSize: ".78rem", color: T.muted }}>
        Puntuación actual: <span style={{ color: T.text, fontWeight: 600 }}>{score} / {currentIndex + (answered ? 1 : 0)}</span>
      </div>
    </div>
  );
}

// ─── PANTALLA: RESULTADOS ─────────────────────────────────────────────────────
function ResultsScreen({ score, total, onRetry }) {
  const pct = Math.round((score / total) * 100);
  const getMessage = () => {
    if (score === total) return { emoji: "🏆", msg: "¡Perfección absoluta! Dominas totalmente el M.C.D., el M.C.M. y los números primos." };
    if (pct >= 78)       return { emoji: "🎉", msg: "¡Excelente trabajo! Has demostrado una comprensión muy avanzada." };
    if (pct >= 44)       return { emoji: "💪", msg: "¡Buen esfuerzo! Recuerda: M.C.D. para repartir/cortar, M.C.M. para coincidencias futuras." };
    return                      { emoji: "📚", msg: "¡No te desanimes! Repasa la teoría e inténtalo de nuevo. ¡Tú puedes!" };
  };
  const { emoji, msg } = getMessage();
  const barColor = pct >= 78 ? T.correct : pct >= 44 ? T.warning : T.error;

  return (
    <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, padding: "2.5rem 2rem", textAlign: "center" }}>
      <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>{emoji}</div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: T.text, marginBottom: ".5rem" }}>
        ¡Maratón Completado!
      </h2>
      <p style={{ color: T.muted, fontSize: "1rem", marginBottom: "2rem" }}>
        Tu calificación: <span style={{ color: T.accent, fontWeight: 700, fontSize: "1.2rem" }}>{score} / {total}</span> ({pct}%)
      </p>

      {/* Score bar */}
      <div style={{ maxWidth: 360, margin: "0 auto 1.5rem", background: T.border, borderRadius: 4, height: 8, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: barColor, borderRadius: 4, transition: "width .8s ease" }} />
      </div>

      {/* Message */}
      <div style={{ background: T.panel, border: `1px solid ${T.border}`, borderRadius: 6, padding: "1.2rem", maxWidth: 480, margin: "0 auto 2rem", color: T.text, fontSize: ".9rem", lineHeight: 1.6 }}>
        {msg}
      </div>

      <button onClick={onRetry} style={{
        display: "inline-flex", alignItems: "center", gap: ".6rem",
        background: T.accent, border: "none", borderRadius: 4,
        color: "#fff", padding: "1rem 2.4rem",
        fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", fontWeight: 600,
        cursor: "pointer", boxShadow: "0 4px 20px rgba(59,158,255,.35)",
      }}
      onMouseEnter={e => e.currentTarget.style.background = "#2d8fe8"}
      onMouseLeave={e => e.currentTarget.style.background = T.accent}
      >
        🔄 Reintentar
      </button>
    </div>
  );
}

// ─── COMPONENTE PRINCIPAL ─────────────────────────────────────────────────────
export default function Divisibilidad() {
  const [screen, setScreen] = useState("theory");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setScreen("quiz");
    setCurrentIndex(0);
    setScore(0);
  };

  const handleAnswer = (correct) => {
    if (correct) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      setScreen("results");
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      <div style={{ minHeight: "100vh", background: T.bg, fontFamily: "'DM Sans', sans-serif" }}>
        {/* Header */}
        <header style={{
          position: "sticky", top: 0, zIndex: 100,
          background: "rgba(13,15,17,.95)", backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${T.border}`,
          padding: ".9rem 2rem",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: ".8rem" }}>
            <span style={{ fontSize: "1.3rem" }}>🧮</span>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", color: T.text, fontSize: "1rem", fontWeight: 700 }}>
                Primos, M.C.D. y M.C.M.
              </div>
              <div style={{ color: T.muted, fontSize: ".72rem", letterSpacing: ".1em" }}>
                MATEMÁTICAS · 3º DE SECUNDARIA
              </div>
            </div>
          </div>
          {screen === "quiz" && (
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: ".7rem", color: T.muted, letterSpacing: ".1em", textTransform: "uppercase" }}>Puntuación</div>
              <div style={{ color: T.accent, fontWeight: 700, fontSize: "1.1rem" }}>{score} / {QUESTIONS.length}</div>
            </div>
          )}
        </header>

        {/* Content */}
        <main style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1.5rem" }}>
          {screen === "theory"  && <TheoryScreen onStart={startQuiz} />}
          {screen === "quiz"    && (
            <QuizScreen
              questions={QUESTIONS}
              currentIndex={currentIndex}
              score={score}
              onAnswer={handleAnswer}
              onNext={handleNext}
            />
          )}
          {screen === "results" && <ResultsScreen score={score} total={QUESTIONS.length} onRetry={startQuiz} />}
        </main>
      </div>
    </>
  );
}
