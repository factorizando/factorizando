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
  // ── BLOQUE 1: Cálculo de M.C.D. (1–10) ──────────────────────────────────
  { id:1, q:"Calcula el Máximo Común Divisor (M.C.D.) de $12$ y $18$.", opts:["$2$","$3$","$6$","$12$"], ans:"$6$", exp:"Los divisores de $12$ son $1, 2, 3, 4, 6, 12$ y los de $18$ son $1, 2, 3, 6, 9, 18$. El mayor divisor común es $6$." },
  { id:2, q:"Encuentra el M.C.D. de $24$ y $36$.", opts:["$6$","$8$","$12$","$24$"], ans:"$12$", exp:"$24$ y $36$ son múltiplos de $12$. Como $24 = 12 \\times 2$ y $36 = 12 \\times 3$, el M.C.D. es $12$." },
  { id:3, q:"¿Cuál es el M.C.D. de $15$ y $25$?", opts:["$3$","$5$","$10$","$15$"], ans:"$5$", exp:"Ambos terminan en $5$, por lo que son divisibles entre $5$. No tienen otro factor primo en común, así que el M.C.D. es $5$." },
  { id:4, q:"Calcula el M.C.D. de $20, 30$ y $40$.", opts:["$5$","$10$","$20$","$60$"], ans:"$10$", exp:"Todos los números terminan en $0$, por lo que son divisibles por $10$. Al dividir quedan $2, 3$ y $4$, que ya no tienen divisores comunes, así que el M.C.D. es $10$." },
  { id:5, q:"Halla el M.C.D. de $14, 21$ y $35$.", opts:["$3$","$7$","$14$","$21$"], ans:"$7$", exp:"Los tres números están en la tabla de multiplicar del $7$ ($7 \\times 2, 7 \\times 3, 7 \\times 5$). Su M.C.D. es $7$." },
  { id:6, q:"¿Cuál es el M.C.D. de $48$ y $60$?", opts:["$6$","$12$","$24$","$48$"], ans:"$12$", exp:"$48 = 12 \\times 4$ y $60 = 12 \\times 5$. El número máximo que divide a ambos es $12$." },
  { id:7, q:"Calcula el M.C.D. de $100$ y $150$.", opts:["$25$","$50$","$100$","$150$"], ans:"$50$", exp:"$100 = 50 \\times 2$ y $150 = 50 \\times 3$. El máximo divisor común es $50$." },
  { id:8, q:"Encuentra el M.C.D. de $32, 48$ y $64$.", opts:["$8$","$16$","$24$","$32$"], ans:"$16$", exp:"Los tres son divisibles entre $16$: $32 = 16 \\times 2$, $48 = 16 \\times 3$ y $64 = 16 \\times 4$." },
  { id:9, q:"Calcula el M.C.D. de $27, 45$ y $63$.", opts:["$3$","$6$","$9$","$27$"], ans:"$9$", exp:"Todos estos números son múltiplos de $9$ ($9 \\times 3, 9 \\times 5, 9 \\times 7$). Por lo tanto, el M.C.D. es $9$." },
  { id:10, q:"¿Cuál es el M.C.D. de $18, 24$ y $30$?", opts:["$3$","$6$","$8$","$12$"], ans:"$6$", exp:"Son múltiplos de $6$ ($6 \\times 3, 6 \\times 4, 6 \\times 5$). El M.C.D. es $6$." },

  // ── BLOQUE 2: Cálculo de M.C.M. (11–20) ──────────────────────────────────
  { id:11, q:"Calcula el Mínimo Común Múltiplo (M.C.M.) de $4$ y $6$.", opts:["$6$","$12$","$18$","$24$"], ans:"$12$", exp:"Los múltiplos de $4$ son $4, 8, 12, 16...$ y los de $6$ son $6, 12, 18...$ El menor múltiplo común es $12$." },
  { id:12, q:"Encuentra el M.C.M. de $8$ y $12$.", opts:["$12$","$16$","$24$","$48$"], ans:"$24$", exp:"Múltiplos de $8: 8, 16, 24...$ Múltiplos de $12: 12, 24...$ El M.C.M. es $24$." },
  { id:13, q:"¿Cuál es el M.C.M. de $10$ y $15$?", opts:["$15$","$20$","$30$","$60$"], ans:"$30$", exp:"Múltiplos de $10: 10, 20, 30...$ Múltiplos de $15: 15, 30...$ El M.C.M. es $30$." },
  { id:14, q:"Calcula el M.C.M. de $3, 4$ y $5$.", opts:["$15$","$30$","$60$","$120$"], ans:"$60$", exp:"Como $3, 4$ y $5$ no tienen divisores comunes entre sí (son primos relativos), su M.C.M. es su producto: $3 \\times 4 \\times 5 = 60$." },
  { id:15, q:"Halla el M.C.M. de $6$ y $9$.", opts:["$12$","$18$","$27$","$36$"], ans:"$18$", exp:"Los múltiplos de $9$ son $9, 18, 27...$ y $18$ es divisible entre $6$, así que $18$ es el M.C.M." },
  { id:16, q:"¿Cuál es el M.C.M. de $12, 15$ y $20$?", opts:["$30$","$60$","$90$","$120$"], ans:"$60$", exp:"Descomponiendo en factores primos o buscando el múltiplo menor que contenga a los tres, obtenemos $60$." },
  { id:17, q:"Calcula el M.C.M. de $14$ y $21$.", opts:["$28$","$42$","$63$","$84$"], ans:"$42$", exp:"$14 \\times 3 = 42$ y $21 \\times 2 = 42$. El M.C.M. es $42$." },
  { id:18, q:"Encuentra el M.C.M. de $20$ y $25$.", opts:["$50$","$75$","$100$","$200$"], ans:"$100$", exp:"Múltiplos de $25$ son $25, 50, 75, 100...$ y $100$ es el primero que es divisible entre $20$." },
  { id:19, q:"Calcula el M.C.M. de $18$ y $24$.", opts:["$36$","$72$","$108$","$144$"], ans:"$72$", exp:"$18 \\times 4 = 72$ y $24 \\times 3 = 72$. El mínimo común múltiplo es $72$." },
  { id:20, q:"¿Cuál es el M.C.M. de $15, 30$ y $45$?", opts:["$45$","$60$","$90$","$135$"], ans:"$90$", exp:"$30 \\times 3 = 90$ y $45 \\times 2 = 90$. Además $15$ es divisor de $90$. Por lo tanto, el M.C.M. es $90$." },

  // ── BLOQUE 3: Problemas de Aplicación M.C.D. (21–30) ──────────────────────
  { id:21, q:"Se tienen dos cuerdas de $24\\text{ m}$ y $36\\text{ m}$. Se quieren cortar en pedazos de la misma longitud y que sean lo más largos posibles. ¿Cuánto medirá cada pedazo?", opts:["$6\\text{ m}$","$8\\text{ m}$","$12\\text{ m}$","$24\\text{ m}$"], ans:"$12\\text{ m}$", exp:"Debemos hallar la máxima longitud común en la que se pueden dividir (M.C.D.). El M.C.D. de $24$ y $36$ es $12$." },
  { id:22, q:"Un carpintero tiene tres tablas de $18\\text{ cm}, 24\\text{ cm}$ y $30\\text{ cm}$. Quiere cortarlas en trozos idénticos del mayor tamaño posible, sin que sobre madera. ¿Cuánto debe medir cada trozo?", opts:["$3\\text{ cm}$","$6\\text{ cm}$","$9\\text{ cm}$","$12\\text{ cm}$"], ans:"$6\\text{ cm}$", exp:"Buscamos el M.C.D. de $18, 24$ y $30$. Como todos son divisibles máximo por $6$, la respuesta es $6\\text{ cm}$." },
  { id:23, q:"Una florista tiene $45$ rosas y $60$ tulipanes. Quiere hacer ramos idénticos con la mayor cantidad de flores de cada tipo, sin que sobre ninguna. ¿Cuántos ramos puede formar?", opts:["$5$","$10$","$15$","$30$"], ans:"$15$", exp:"Calculamos el M.C.D. de $45$ y $60$, que es $15$. Así formará $15$ ramos iguales (cada uno con $3$ rosas y $4$ tulipanes)." },
  { id:24, q:"En una pastelería hay $48$ dulces de fresa, $72$ de limón y $96$ de naranja. Se quieren empacar en bolsas con la misma cantidad de cada sabor. ¿Cuál es el mayor número de bolsas que se pueden hacer?", opts:["$12$","$16$","$24$","$48$"], ans:"$24$", exp:"Hallando el M.C.D. de $48, 72$ y $96$, comprobamos que todos son divisibles entre $24$. El M.C.D. es $24$ bolsas." },
  { id:25, q:"Se desea cubrir un piso rectangular de $120\\text{ cm}$ por $150\\text{ cm}$ con mosaicos cuadrados del mayor tamaño posible, sin tener que romper ninguno. ¿Cuánto debe medir el lado de cada mosaico?", opts:["$10\\text{ cm}$","$20\\text{ cm}$","$30\\text{ cm}$","$60\\text{ cm}$"], ans:"$30\\text{ cm}$", exp:"El lado del cuadrado debe dividir a ambas dimensiones, y ser máximo. El M.C.D. de $120$ y $150$ es $30$." },
  { id:26, q:"Un profesor tiene $36$ lápices y $24$ borradores para repartir en partes iguales entre la mayor cantidad posible de sus alumnos. ¿A cuántos alumnos les puede dar material sin que sobre nada?", opts:["$6$","$8$","$12$","$24$"], ans:"$12$", exp:"Calculamos el M.C.D. de $36$ y $24$. El máximo común divisor es $12$, por lo que alcanza para $12$ alumnos." },
  { id:27, q:"Se tienen $60$ litros de jugo de uva y $80$ litros de jugo de manzana. Se desean envasar en botellas de igual capacidad, siendo esta la mayor posible. ¿Cuál será la capacidad de cada botella?", opts:["$10\\text{ litros}$","$20\\text{ litros}$","$30\\text{ litros}$","$40\\text{ litros}$"], ans:"$20\\text{ litros}$", exp:"Determinamos el M.C.D. de $60$ y $80$, que es $20$. Así, se usarán botellas de $20$ litros." },
  { id:28, q:"En un vivero hay $150$ pinos y $100$ eucaliptos. Se quieren plantar en hileras con el mismo número de árboles del mismo tipo en cada hilera. ¿Cuál es el máximo número de árboles por hilera?", opts:["$10$","$25$","$50$","$100$"], ans:"$50$", exp:"Hallamos el M.C.D. de $150$ y $100$, lo cual nos da $50$ árboles máximo por cada hilera." },
  { id:29, q:"Una tira de tela de $42\\text{ cm}$ y otra de $56\\text{ cm}$ se van a cortar en listones más pequeños de igual longitud. ¿Cuál es la mayor longitud que pueden tener los listones?", opts:["$7\\text{ cm}$","$12\\text{ cm}$","$14\\text{ cm}$","$21\\text{ cm}$"], ans:"$14\\text{ cm}$", exp:"El M.C.D. de $42$ y $56$ es $14$ ($14 \\times 3 = 42$ y $14 \\times 4 = 56$)." },
  { id:30, q:"Una tienda donará $90$ camisetas, $120$ pantalones y $150$ pares de calcetines. Quieren armar paquetes idénticos con la mayor cantidad de prendas. ¿Cuántos paquetes podrán armar?", opts:["$15$","$20$","$30$","$60$"], ans:"$30$", exp:"Calculamos el M.C.D. de $90, 120$ y $150$. Todos son múltiplos de $30$, siendo este su máximo divisor común." },

  // ── BLOQUE 4: Problemas de Aplicación M.C.M. (31–40) ──────────────────────
  { id:31, q:"Tres autobuses salen de una estación. El primero sale cada $10\\text{ min}$, el segundo cada $15\\text{ min}$ y el tercero cada $20\\text{ min}$. Si acaban de salir juntos, ¿en cuántos minutos volverán a coincidir?", opts:["$30\\text{ min}$","$40\\text{ min}$","$60\\text{ min}$","$120\\text{ min}$"], ans:"$60\\text{ min}$", exp:"Para saber cuándo coinciden en el futuro, calculamos el M.C.M. de $10, 15$ y $20$, que es $60$." },
  { id:32, q:"Dos campanas suenan, una cada $8\\text{ horas}$ y otra cada $12\\text{ horas}$. Si suenan juntas a las $12:00$, ¿en cuántas horas volverán a sonar juntas por primera vez?", opts:["$12\\text{ horas}$","$16\\text{ horas}$","$24\\text{ horas}$","$48\\text{ horas}$"], ans:"$24\\text{ horas}$", exp:"Calculamos el M.C.M. de $8$ y $12$. El menor múltiplo común es $24$." },
  { id:33, q:"Un cometa pasa cerca de la Tierra cada $15\\text{ años}$ y otro cada $25\\text{ años}$. Si coincidieron en el año $2000$, ¿en qué año volverán a coincidir?", opts:["$2025$","$2050$","$2075$","$2100$"], ans:"$2075$", exp:"El M.C.M. de $15$ y $25$ es $75$. Al sumar $75$ años al año $2000$, volverán a coincidir en el $2075$." },
  { id:34, q:"Tres luces parpadean en intervalos de $4, 6$ y $8\\text{ segundos}$ respectivamente. Si parpadean juntas en este instante, ¿cuántos segundos pasarán para que parpadeen juntas de nuevo?", opts:["$12\\text{ s}$","$18\\text{ s}$","$24\\text{ s}$","$48\\text{ s}$"], ans:"$24\\text{ s}$", exp:"Buscamos el M.C.M. de los tiempos. El M.C.M. de $4, 6$ y $8$ es $24$." },
  { id:35, q:"Ana va al parque a correr cada $4\\text{ días}$ y Carlos va cada $6\\text{ días}$. Si hoy coincidieron, ¿en cuántos días volverán a encontrarse?", opts:["$8\\text{ días}$","$12\\text{ días}$","$18\\text{ días}$","$24\\text{ días}$"], ans:"$12\\text{ días}$", exp:"Hallamos el M.C.M. de $4$ y $6$. El mínimo común múltiplo de ambos es $12$." },
  { id:36, q:"Un faro se enciende cada $18\\text{ segundos}$ y otro cada $24\\text{ segundos}$. ¿Cada cuántos segundos coinciden sus destellos?", opts:["$36\\text{ s}$","$48\\text{ s}$","$72\\text{ s}$","$144\\text{ s}$"], ans:"$72\\text{ s}$", exp:"Calculamos el M.C.M. de $18$ y $24$. Como $18 \\times 4 = 72$ y $24 \\times 3 = 72$, el M.C.M. es $72$." },
  { id:37, q:"Pedro compra paquetes de salchichas que traen $6$ unidades y paquetes de pan que traen $8$ unidades. ¿Cuál es el mínimo número de salchichas que debe comprar para que no sobre ni falte ningún pan?", opts:["$12$","$18$","$24$","$48$"], ans:"$24$", exp:"Debemos buscar un número que sea múltiplo de $6$ y $8$ a la vez. El M.C.M. es $24$." },
  { id:38, q:"Tres hermanos visitan a sus abuelos cada $15, 20$ y $30\\text{ días}$. Si coincidieron hoy, ¿en cuántos días volverán a encontrarse los tres?", opts:["$30\\text{ días}$","$60\\text{ días}$","$90\\text{ días}$","$120\\text{ días}$"], ans:"$60\\text{ días}$", exp:"Para hallar la coincidencia, calculamos el M.C.M. de $15, 20$ y $30$, cuyo resultado es $60$." },
  { id:39, q:"En una pista de carreras, el corredor A da una vuelta cada $14\\text{ minutos}$ y el corredor B cada $21\\text{ minutos}$. Si salen al mismo tiempo, ¿en cuántos minutos volverán a cruzarse en la meta?", opts:["$28\\text{ min}$","$42\\text{ min}$","$63\\text{ min}$","$84\\text{ min}$"], ans:"$42\\text{ min}$", exp:"Buscamos el M.C.M. de $14$ y $21$, que resulta en $42$." },
  { id:40, q:"Una alarma suena cada $45\\text{ minutos}$ y otra suena cada $60\\text{ minutos}$. ¿Cada cuántos minutos suenan ambas alarmas a la misma vez?", opts:["$90\\text{ min}$","$120\\text{ min}$","$150\\text{ min}$","$180\\text{ min}$"], ans:"$180\\text{ min}$", exp:"El M.C.M. de $45$ y $60$ es $180$, ya que $45 \\times 4 = 180$ y $60 \\times 3 = 180$." },
];

const LEVELS = [
  { label:"Cálculo de M.C.D.",      range:[1, 10],   color:C.blue },
  { label:"Cálculo de M.C.M.",      range:[11, 20],  color:C.teal },
  { label:"Problemas de M.C.D.",    range:[21, 30],  color:C.gold },
  { label:"Problemas de M.C.M.",    range:[31, 40],  color:C.crimson },
];

function getLvl(id){
  return LEVELS.find(l => id >= l.range[0] && id <= l.range[1]) || LEVELS[0];
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
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  if (h > 0) return `${h}:${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export default function McdMcmExani() {
  const [mode, setMode] = useState("menu"); 
  const [examMode, setExamMode] = useState(""); 
  const [queue, setQueue] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  const [selected, setSelected] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [filter, setFilter] = useState("all"); 

  const [katexLoaded, setKatexLoaded] = useState(false);

  // Cargar KaTeX dinámicamente
  useEffect(() => {
    if (!document.getElementById("katex-css")) {
      const link = document.createElement("link");
      link.id = "katex-css";
      link.rel = "stylesheet";
      link.href = "https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css";
      document.head.appendChild(link);
    }
    if (!document.getElementById("katex-js")) {
      const script = document.createElement("script");
      script.id = "katex-js";
      script.src = "https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js";
      script.onload = () => setKatexLoaded(true);
      document.head.appendChild(script);
    } else {
      setKatexLoaded(true);
    }
  }, []);

  // Función para renderizar KaTeX en strings de texto mezclado
  const renderMathText = (txt) => {
    if (!katexLoaded || !window.katex || typeof txt !== 'string') return txt;
    
    const parts = txt.split(/(\$.*?\$)/g);
    return parts.map((part, i) => {
      if (part.startsWith('$') && part.endsWith('$')) {
        const math = part.slice(1, -1);
        try {
          return <span key={i} dangerouslySetInnerHTML={{ __html: window.katex.renderToString(math, { throwOnError: false }) }} />;
        } catch (e) {
          return <span key={i}>{part}</span>;
        }
      }
      return <span key={i}>{part}</span>;
    });
  };

  useEffect(() => {
    let interval;
    if (timerOn && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft(t => t - 1), 1000);
    } else if (timeLeft === 0 && timerOn) {
      setTimerOn(false);
      setMode("results");
    }
    return () => clearInterval(interval);
  }, [timerOn, timeLeft]);

  const startExam = (modeKey) => {
    let qList = [];
    if (modeKey === "full") {
      qList = [...questions];
    } else if (modeKey.startsWith("block-")) {
      const idx = parseInt(modeKey.split("-")[1], 10);
      const lv = LEVELS[idx];
      qList = questions.filter(q => q.id >= lv.range[0] && q.id <= lv.range[1]);
    }
    
    if (qList.length === 0) {
      alert("Este bloque aún no tiene preguntas generadas.");
      return;
    }

    const prepared = qList.map(q => ({
      ...q,
      opts: shuffle(q.opts)
    }));

    setQueue(shuffle(prepared));
    setCurrent(0);
    setAnswers({});
    setSelected(null);
    setConfirmed(false);
    
    // 60 segundos por pregunta como default
    setTimeLeft(prepared.length * 60); 
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
      const nextId = queue[current + 1].id;
      setCurrent(c => c + 1);
      setSelected(answers[nextId] || null);
      setConfirmed(!!answers[nextId]);
    } else {
      setTimerOn(false);
      setMode("results");
    }
  };

  const goPrev = () => {
    if (current > 0) {
      const prevId = queue[current - 1].id;
      setCurrent(c => c - 1);
      setSelected(answers[prevId] || null);
      setConfirmed(!!answers[prevId]);
    }
  };

  const score = Object.entries(answers).reduce((acc, [id, ans]) => {
    const q = questions.find(q => q.id === Number(id));
    return acc + (q?.ans === ans ? 1 : 0);
  }, 0);

  const timerWarning = timeLeft < 300; 

  if (mode === "menu") return (
    <div style={{ minHeight:"100vh", background:C.bg, paddingBottom:64 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:5px;background:${C.bg}}
        ::-webkit-scrollbar-thumb{background:${C.border};border-radius:99px}
        .katex { font-size: 1.1em; }
      `}</style>
      
      <div style={{ background:C.surface, borderBottom:`1px solid ${C.border}`, padding:"44px 24px 32px", textAlign:"center", position:"relative" }}>
        <span style={{ display:"inline-block", background:C.blue+"22", color:C.blue, borderRadius:99, padding:"3px 14px", fontSize:11, fontWeight:700, letterSpacing:2, textTransform:"uppercase", marginBottom:14, fontFamily:"'DM Sans',sans-serif" }}>
          EXANI I - Aritmética
        </span>
        <h1 style={{ color:C.text, fontSize:32, fontWeight:800, letterSpacing:"-0.5px", marginBottom:12, fontFamily:"'DM Sans',sans-serif" }}>
          M.C.D. y M.C.M.
        </h1>
        <p style={{ color:C.muted, fontSize:15, maxWidth:500, margin:"0 auto", lineHeight:1.5, fontFamily:"'DM Sans',sans-serif" }}>
          Evaluación de Máximo Común Divisor y Mínimo Común Múltiplo para tercero de secundaria.
        </p>
      </div>

      <div style={{ maxWidth:800, margin:"0 auto", padding:"32px 24px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))", gap:16, marginBottom:40 }}>
          <button 
            onClick={() => startExam("full")}
            style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:14, padding:"22px 16px", cursor:"pointer", textAlign:"center", transition:"all 0.2s", fontFamily:"'DM Sans',sans-serif" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.blue; e.currentTarget.style.background = C.blue+"11"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = C.surface; }}
          >
            <div style={{ fontSize:28, marginBottom:8 }}>🚀</div>
            <div style={{ color:C.text, fontWeight:700, fontSize:15 }}>Presentar Simulador Completo</div>
            <div style={{ color:C.muted, fontSize:12, marginTop:4 }}>{questions.length} reactivos en total</div>
          </button>
        </div>

        <p style={{ color:C.muted, fontSize:11, fontWeight:700, letterSpacing:2, textTransform:"uppercase", marginBottom:12, fontFamily:"'DM Sans',sans-serif" }}>
          Seleccionar un Bloque Específico
        </p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(160px,1fr))", gap:12 }}>
          {LEVELS.map((lv, i) => (
            <button key={i} onClick={() => startExam(`block-${i}`)} style={{
              background:C.surface, border:`1px solid ${lv.color}44`, borderRadius:12, padding:"14px 12px", cursor:"pointer", textAlign:"center", transition:"all 0.2s", fontFamily:"'DM Sans',sans-serif"
            }}
            onMouseEnter={e => { e.currentTarget.style.background = lv.color+"18"; e.currentTarget.style.borderColor = lv.color; }}
            onMouseLeave={e => { e.currentTarget.style.background = C.surface; e.currentTarget.style.borderColor = lv.color+"44"; }}
            >
              <div style={{ color:lv.color, fontWeight:700, fontSize:13 }}>{lv.label}</div>
              <div style={{ color:C.muted, fontSize:11, marginTop:4 }}>
                {lv.range[1] - lv.range[0] + 1} preguntas
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  if (mode === "results") {
    const total = queue.length;
    const pct = total > 0 ? Math.round((score / total) * 100) : 0;
    const col = pct >= 80 ? C.teal : pct >= 60 ? C.gold : C.crimson;
    const msg = pct >= 90 ? "¡Excelente! Tienes muy claro este tema." : pct >= 60 ? "¡Bien! Pero debes repasar la diferencia entre MCM y MCD." : "Te sugerimos repasar a fondo este tema.";

    let displayQs = queue;
    if (filter === "correct") displayQs = queue.filter(q => answers[q.id] === q.ans);
    if (filter === "wrong") displayQs = queue.filter(q => answers[q.id] !== q.ans);

    return (
      <div style={{ minHeight:"100vh", background:C.bg, paddingBottom:64 }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}::-webkit-scrollbar{width:5px;background:${C.bg}}::-webkit-scrollbar-thumb{background:${C.border};border-radius:99px}`}</style>
        
        <div style={{ maxWidth:760, margin:"0 auto", padding:"24px 16px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:32 }}>
            <h2 style={{ color:C.text, fontSize:22, fontWeight:700, fontFamily:"'DM Sans',sans-serif" }}>Hoja de Resultados</h2>
            <button onClick={() => setMode("menu")} style={{ background:C.surface, border:`1px solid ${C.border}`, color:C.text, padding:"8px 16px", borderRadius:8, cursor:"pointer", fontSize:13, fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>
              Volver al inicio
            </button>
          </div>

          <div style={{ background:C.surface, border:`2px solid ${col}`, borderRadius:18, padding:"30px 36px", textAlign:"center", maxWidth:380, margin:"0 auto 32px", fontFamily:"'DM Sans',sans-serif" }}>
            <div style={{ fontSize:58, fontWeight:900, color:col, letterSpacing:"-3px", lineHeight:1 }}>{pct}%</div>
            <div style={{ color:C.dim, fontSize:14, marginTop:8 }}>
              <span style={{ color:C.text, fontWeight:700 }}>{score}</span> aciertos de {total}
            </div>
            <div style={{ color:col, fontWeight:700, fontSize:15, marginTop:10 }}>{msg}</div>
          </div>

          <div style={{ display:"flex", gap:8, marginBottom:20, flexWrap:"wrap" }}>
            {[["all","Todas"],["correct",`✓ Correctas (${score})`],["wrong",`✗ Incorrectas (${total - score})`]].map(([f, label]) => (
              <button key={f} onClick={() => setFilter(f)} style={{ padding:"6px 14px", borderRadius:99, fontSize:12, fontWeight:700, cursor:"pointer", border:"none", background:filter === f ? C.blue : C.surface, color:filter === f ? "#fff" : C.muted, fontFamily:"'DM Sans',sans-serif" }}>
                {label}
              </button>
            ))}
          </div>

          {displayQs.map((q) => {
            const lv = getLvl(q.id);
            const userAns = answers[q.id];
            return (
              <div key={q.id} style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:16, padding:20, marginBottom:16 }}>
                <div style={{ display:"flex", alignItems:"center", marginBottom:12 }}>
                  <span style={{ background:lv.color+"22", color:lv.color, padding:"3px 8px", borderRadius:6, fontSize:11, fontWeight:700, fontFamily:"'DM Sans',sans-serif" }}>{lv.label}</span>
                  <span style={{ marginLeft:"auto", color:C.muted, fontSize:12, fontFamily:"'DM Sans',sans-serif" }}>Reactivo #{q.id}</span>
                </div>
                <p style={{ color:C.text, fontSize:15, fontWeight:600, marginBottom: 16, fontFamily:"'DM Sans',sans-serif" }}>{renderMathText(q.q)}</p>

                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:6 }}>
                  {q.opts.map(opt => {
                    const isOk = opt === q.ans;
                    const isUser = opt === userAns;
                    let bg = C.bg, bd = `1px solid ${C.border}`, co = C.dim;
                    
                    if (isOk) { bg=C.teal+"22"; bd=`1px solid ${C.teal}`; co=C.teal; }
                    else if (isUser && !isOk) { bg=C.crimson+"22"; bd=`1px solid ${C.crimson}`; co=C.crimson; }
                    
                    return (
                      <div key={opt} style={{ background:bg, border:bd, color:co, borderRadius:9, padding:"10px 12px", fontSize:13, fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>
                        {isOk?"✓ ":""}{isUser&&!isOk?"✗ ":""}{renderMathText(opt)}
                      </div>
                    );
                  })}
                </div>
                
                {q.exp && (
                  <div style={{ marginTop: 16, paddingTop: 16, borderTop: `1px solid ${C.border}` }}>
                    <p style={{ color: C.blue, fontSize: 12, fontWeight: 700, marginBottom: 4, fontFamily:"'DM Sans',sans-serif" }}>JUSTIFICACIÓN:</p>
                    <p style={{ color: C.dim, fontSize: 14, lineHeight: 1.4, fontFamily:"'DM Sans',sans-serif" }}>{renderMathText(q.exp)}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const q = queue[current];
  const lv = getLvl(q.id);
  const prog = ((current + 1) / queue.length) * 100;
  const answered = Object.keys(answers).length;

  return (
    <div style={{ minHeight:"100vh", background:C.bg, paddingBottom:64 }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}::-webkit-scrollbar{width:5px;background:${C.bg}}::-webkit-scrollbar-thumb{background:${C.border};border-radius:99px}`}</style>
      
      <div style={{ maxWidth:760, margin:"0 auto", padding:"24px 16px" }}>
        
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
          <button onClick={() => { setTimerOn(false); setMode("menu"); }} style={{ background:"none", border:"none", color:C.muted, cursor:"pointer", fontSize:14, fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>
            ✕ Salir
          </button>
          <div style={{ color:timerWarning ? C.crimson : C.text, fontWeight:700, fontSize:16, fontFamily:"'DM Sans',sans-serif", display:"flex", alignItems:"center", gap:6 }}>
            <span style={{ fontSize:18 }}>⏱</span> {fmt(timeLeft)}
          </div>
          <button onClick={() => { setTimerOn(false); setMode("results"); }} style={{ background:C.surface, border:`1px solid ${C.border}`, color:C.text, padding:"6px 14px", borderRadius:8, cursor:"pointer", fontSize:13, fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>
            Finalizar prueba
          </button>
        </div>

        <div style={{ background:C.surface, height:6, borderRadius:99, overflow:"hidden", marginBottom:24 }}>
          <div style={{ width:`${prog}%`, background:lv.color, height:"100%", transition:"all 0.3s ease" }} />
        </div>

        <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:20, padding:"32px 24px" }}>
          <div style={{ display:"flex", alignItems:"center", marginBottom:20 }}>
            <span style={{ background:lv.color+"22", color:lv.color, padding:"4px 10px", borderRadius:6, fontSize:12, fontWeight:700, fontFamily:"'DM Sans',sans-serif" }}>
              {lv.label}
            </span>
            <span style={{ marginLeft:"auto", color:C.muted, fontSize:13, fontFamily:"'DM Sans',sans-serif" }}>
              Reactivo <b>{current + 1}</b> de {queue.length}
            </span>
          </div>

          <p style={{ color:C.text, fontSize:18, fontWeight:600, marginBottom: 24, lineHeight:1.5, fontFamily:"'DM Sans',sans-serif" }}>
            {renderMathText(q.q)}
          </p>

          <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:24 }}>
            {q.opts.map(opt => {
              const isSel = selected === opt;
              const isOk = opt === q.ans;
              let bg = C.bg, bd = `1px solid ${C.border}`, co = C.dim;

              if (confirmed && isSel && !isOk) { bg = C.crimson+"22"; bd = `1px solid ${C.crimson}`; co = C.crimson; }
              else if (confirmed && isOk) { bg = C.teal+"0e"; bd = `1px solid ${C.teal}55`; co = C.teal+"99"; }
              else if (isSel) { bg = lv.color+"18"; bd = `1px solid ${lv.color}`; co = lv.color; }

              return (
                <button key={opt} onClick={() => !confirmed && setSelected(opt)} style={{ background:bg, border:bd, color:co, borderRadius:12, padding:"16px 20px", fontSize:15, fontWeight:600, cursor:confirmed ? "default" : "pointer", textAlign:"left", transition:"all 0.15s", fontFamily:"'DM Sans',sans-serif" }}>
                  {confirmed && isOk ? "✓ " : ""}{confirmed && isSel && !isOk ? "✗ " : ""}{renderMathText(opt)}
                </button>
              );
            })}
          </div>

          {confirmed && q.exp && (
            <div style={{ marginBottom: 24, padding: 18, background: C.bg, border: `1px solid ${selected === q.ans ? C.teal : C.crimson}55`, borderRadius: 12 }}>
              <p style={{ color: C.dim, fontSize: 12, fontWeight: 700, marginBottom: 8, letterSpacing: 1, fontFamily:"'DM Sans',sans-serif" }}>
                EXPLICACIÓN
              </p>
              <p style={{ color: C.text, fontSize: 14, lineHeight: 1.5, fontFamily:"'DM Sans',sans-serif" }}>
                {renderMathText(q.exp)}
              </p>
            </div>
          )}

          <div style={{ display:"flex", gap:12 }}>
            <button onClick={goPrev} disabled={current === 0} style={{ flex:1, padding:"14px", background:C.surface, color:C.text, border:`1px solid ${C.border}`, borderRadius:12, cursor:current === 0 ? "not-allowed" : "pointer", opacity:current === 0 ? 0.4 : 1, fontSize:14, fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>
              ← Anterior
            </button>
            {!confirmed ? (
              <button onClick={confirmAnswer} disabled={!selected} style={{ flex:2, padding:"14px", background:selected ? C.blue : C.surface, color:selected ? "#fff" : C.muted, border:selected ? "none" : `1px solid ${C.border}`, borderRadius:12, cursor:selected ? "pointer" : "not-allowed", fontSize:14, fontWeight:700, transition:"all 0.2s", fontFamily:"'DM Sans',sans-serif" }}>
                Confirmar
              </button>
            ) : (
              <button onClick={goNext} style={{ flex:2, padding:"14px", background:C.text, color:C.bg, border:"none", borderRadius:12, cursor:"pointer", fontSize:14, fontWeight:700, fontFamily:"'DM Sans',sans-serif" }}>
                {current === queue.length - 1 ? "Ver resultados finales" : "Siguiente →"}
              </button>
            )}
          </div>
        </div>

        {/* Navegador inferior para saltar entre preguntas */}
        <div style={{ marginTop:24, background:C.surface, borderRadius:16, padding:20, border:`1px solid ${C.border}` }}>
          <p style={{ color:C.muted, fontSize:12, marginBottom:12, fontWeight:700, textTransform:"uppercase", letterSpacing:1, fontFamily:"'DM Sans',sans-serif" }}>Navegador del Examen ({answered}/{queue.length})</p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
            {queue.map((fq, i) => {
              const ans = answers[fq.id], isCurr = i === current;
              let bg = C.surface, co = C.dim, bdr = `1px solid ${C.border}`;
              if (isCurr)              { bg=C.blue; co="#fff"; bdr=`1px solid ${C.blue}`; }
              else if (ans===fq.ans)   { bg=C.teal+"22"; co=C.teal; bdr=`1px solid ${C.teal}66`; }
              else if (ans)            { bg=C.crimson+"22"; co=C.crimson; bdr=`1px solid ${C.crimson}66`; }
              return (
                <button key={fq.id} onClick={() => { setCurrent(i); setSelected(answers[fq.id]||null); setConfirmed(!!answers[fq.id]); }} style={{
                  width:32, height:32, borderRadius:8, background:bg, color:co, border:bdr,
                  cursor:"pointer", fontSize:12, fontWeight:isCurr?700:500, fontFamily:"'DM Sans',sans-serif", transition:"all 0.1s"
                }}>{i+1}</button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}