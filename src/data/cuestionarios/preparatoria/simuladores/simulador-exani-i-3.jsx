// src/data/cuestionarios/preparatoria/simuladores/simulador-exani-i-3.jsx

// D: diagramas SVG
const D = {

  // ── Pensamiento Matemático ───────────────────────────────────

  // S2 adaptado: 3 cuadrículas 4×4 con regiones sombreadas distintas
  grid2: (<svg viewBox="0 0 360 130" xmlns="http://www.w3.org/2000/svg" style={{background:"#1a1d23",borderRadius:8,border:"1px solid #2a2d35",width:"100%",maxWidth:380}}>
    {[0,1,2,3].map(r=>[0,1,2,3].map(c=><rect key={"a"+r+c} x={10+c*25} y={22+r*25} width="25" height="25" fill={(r===c)?"#3b9eff":"none"} stroke="#3a3d45" strokeWidth="1" opacity="0.8"/>))}
    {[0,1,2,3].map(r=>[0,1,2,3].map(c=><rect key={"b"+r+c} x={130+c*25} y={22+r*25} width="25" height="25" fill={(r===0||(r===1&&c<2))?"#3b9eff":"none"} stroke="#3a3d45" strokeWidth="1" opacity="0.8"/>))}
    {[0,1,2,3].map(r=>[0,1,2,3].map(c=><rect key={"c"+r+c} x={250+c*25} y={22+r*25} width="25" height="25" fill={r<2?"#3b9eff":"none"} stroke="#3a3d45" strokeWidth="1" opacity="0.8"/>))}
    <text x="35" y="16" textAnchor="middle" fill="#8a9ab8" fontSize="12" fontFamily="DM Sans">A</text>
    <text x="155" y="16" textAnchor="middle" fill="#8a9ab8" fontSize="12" fontFamily="DM Sans">B</text>
    <text x="275" y="16" textAnchor="middle" fill="#8a9ab8" fontSize="12" fontFamily="DM Sans">C</text>
    <line x1="120" y1="8" x2="120" y2="122" stroke="#2a2d35" strokeWidth="1"/>
    <line x1="240" y1="8" x2="240" y2="122" stroke="#2a2d35" strokeWidth="1"/>
  </svg>),

  // S6 adaptado: cuadrícula de puntos con triángulo marcado
  grid6: (<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{background:"#1a1d23",borderRadius:8,border:"1px solid #2a2d35",width:"100%",maxWidth:220}}>
    {[0,1,2,3,4,5].map(r=>[0,1,2,3,4,5].map(c=><circle key={r+""+c} cx={20+c*32} cy={20+r*32} r="2.5" fill="#3a3d45"/>))}
    <polygon points="20,20 148,20 52,116" fill="#3b9eff" opacity="0.35" stroke="#3b9eff" strokeWidth="2"/>
    <circle cx="20" cy="20" r="4.5" fill="#f59e0b"/>
    <circle cx="148" cy="20" r="4.5" fill="#f59e0b"/>
    <circle cx="52" cy="116" r="4.5" fill="#f59e0b"/>
    <text x="84" y="192" textAnchor="middle" fill="#8a9ab8" fontSize="11" fontFamily="DM Sans">Distancia entre puntos = 1 u</text>
  </svg>),

  // S11 adaptado: cuadrado con 4 triángulos sombreados desde el centro
  sq11: (<svg viewBox="0 0 200 210" xmlns="http://www.w3.org/2000/svg" style={{background:"#1a1d23",borderRadius:8,border:"1px solid #2a2d35",width:"100%",maxWidth:220}}>
    <rect x="20" y="20" width="160" height="160" fill="#1e2530" stroke="#4a505a" strokeWidth="2"/>
    <polygon points="100,100 20,20 100,20" fill="#3b9eff" opacity="0.85"/>
    <polygon points="100,100 180,20 180,100" fill="#3b9eff" opacity="0.85"/>
    <polygon points="100,100 180,180 100,180" fill="#3b9eff" opacity="0.85"/>
    <polygon points="100,100 20,180 20,100" fill="#3b9eff" opacity="0.85"/>
    <rect x="20" y="20" width="160" height="160" fill="none" stroke="#4a505a" strokeWidth="2"/>
    <circle cx="100" cy="100" r="3" fill="white"/>
    <text x="100" y="198" textAnchor="middle" fill="#8a9ab8" fontSize="11" fontFamily="DM Sans">Lado del cuadrado = 10 cm</text>
  </svg>),

  // S8 adaptado: cuadrado grande = 4 rectángulos + cuadrado pequeño central
  sq8: (<svg viewBox="0 0 210 230" xmlns="http://www.w3.org/2000/svg" style={{background:"#1a1d23",borderRadius:8,border:"1px solid #2a2d35",width:"100%",maxWidth:230}}>
    <rect x="20" y="15" width="170" height="170" fill="none" stroke="#4a505a" strokeWidth="2"/>
    <rect x="20" y="15" width="60" height="110" fill="#1e2d3e" stroke="#4a505a" strokeWidth="1.5"/>
    <rect x="80" y="15" width="110" height="55" fill="#1e2d3e" stroke="#4a505a" strokeWidth="1.5"/>
    <rect x="130" y="70" width="60" height="115" fill="#1e2d3e" stroke="#4a505a" strokeWidth="1.5"/>
    <rect x="20" y="125" width="110" height="60" fill="#1e2d3e" stroke="#4a505a" strokeWidth="1.5"/>
    <rect x="80" y="70" width="50" height="55" fill="#f59e0b" opacity="0.3" stroke="#f59e0b" strokeWidth="2"/>
    <text x="105" y="100" textAnchor="middle" fill="#f59e0b" fontSize="14" fontFamily="DM Sans">?</text>
    <text x="40" y="205" fill="#3b9eff" fontSize="11" fontFamily="DM Sans">a=6</text>
    <text x="95" y="205" fill="#34d399" fontSize="11" fontFamily="DM Sans">b=4</text>
  </svg>),

  // Dos rectas que se intersectan (sistema y=x−1, y=−x+3)
  intersect: (<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg" style={{background:"#1a1d23",borderRadius:8,border:"1px solid #2a2d35",width:"100%",maxWidth:300}}>
    {[-3,-2,-1,1,2,3].map(n=>[
      <line key={"gv"+n} x1={140+n*30} y1="15" x2={140+n*30} y2="225" stroke="#252830" strokeWidth="1"/>,
      <line key={"gh"+n} x1="20" y1={120+n*30} x2="260" y2={120+n*30} stroke="#252830" strokeWidth="1"/>
    ])}
    <line x1="20" y1="120" x2="260" y2="120" stroke="#3a3d45" strokeWidth="1.5"/>
    <line x1="140" y1="15" x2="140" y2="225" stroke="#3a3d45" strokeWidth="1.5"/>
    <polygon points="260,120 250,116 250,124" fill="#3a3d45"/>
    <polygon points="140,15 136,25 144,25" fill="#3a3d45"/>
    <text x="264" y="124" fill="#5a6070" fontSize="10" fontFamily="DM Sans">x</text>
    <text x="144" y="13" fill="#5a6070" fontSize="10" fontFamily="DM Sans">y</text>
    {[-3,-2,-1,1,2,3].map(n=><text key={"lx"+n} x={137+n*30} y="132" fill="#5a6070" fontSize="9" fontFamily="DM Sans">{n}</text>)}
    {[-3,-2,-1,1,2,3].map(n=><text key={"ly"+n} x="132" y={124-n*30} textAnchor="end" fill="#5a6070" fontSize="9" fontFamily="DM Sans">{n}</text>)}
    <line x1={140+(-3)*30} y1={120-(-4)*30} x2={140+4*30} y2={120-3*30} stroke="#3b9eff" strokeWidth="2.5"/>
    <text x="254" y="108" fill="#3b9eff" fontSize="10" fontFamily="DM Sans">y=x−1</text>
    <line x1={140+(-1)*30} y1={120-4*30} x2={140+4*30} y2={120-(-1)*30} stroke="#f43f5e" strokeWidth="2.5"/>
    <text x="154" y="30" fill="#f43f5e" fontSize="10" fontFamily="DM Sans">y=−x+3</text>
    <circle cx="200" cy="90" r="5" fill="white" stroke="#f59e0b" strokeWidth="2"/>
    <text x="207" y="84" fill="#f59e0b" fontSize="11" fontFamily="DM Sans">(?,?)</text>
  </svg>),

  // Diagrama de Venn: dos conjuntos con valores numéricos
  venn: (<svg viewBox="0 0 280 190" xmlns="http://www.w3.org/2000/svg" style={{background:"#1a1d23",borderRadius:8,border:"1px solid #2a2d35",width:"100%",maxWidth:300}}>
    <rect x="8" y="8" width="264" height="174" rx="6" fill="none" stroke="#3a3d45" strokeWidth="1.5"/>
    <text x="140" y="24" textAnchor="middle" fill="#5a6070" fontSize="11" fontFamily="DM Sans">U = 40 estudiantes</text>
    <circle cx="105" cy="105" r="58" fill="#3b9eff" opacity="0.22" stroke="#3b9eff" strokeWidth="1.8"/>
    <circle cx="175" cy="105" r="58" fill="#a78bfa" opacity="0.22" stroke="#a78bfa" strokeWidth="1.8"/>
    <text x="80" y="100" textAnchor="middle" fill="#3b9eff" fontSize="16" fontFamily="DM Sans" fontWeight="bold">12</text>
    <text x="140" y="100" textAnchor="middle" fill="white" fontSize="16" fontFamily="DM Sans" fontWeight="bold">8</text>
    <text x="200" y="100" textAnchor="middle" fill="#a78bfa" fontSize="16" fontFamily="DM Sans" fontWeight="bold">10</text>
    <text x="80" y="116" textAnchor="middle" fill="#5a6070" fontSize="9" fontFamily="DM Sans">solo A</text>
    <text x="140" y="116" textAnchor="middle" fill="#5a6070" fontSize="9" fontFamily="DM Sans">A∩B</text>
    <text x="200" y="116" textAnchor="middle" fill="#5a6070" fontSize="9" fontFamily="DM Sans">solo B</text>
    <text x="105" y="148" textAnchor="middle" fill="#3b9eff" fontSize="13" fontFamily="DM Sans" fontStyle="italic">A</text>
    <text x="175" y="148" textAnchor="middle" fill="#a78bfa" fontSize="13" fontFamily="DM Sans" fontStyle="italic">B</text>
  </svg>),

  // Recta numérica con región sombreada (desigualdad x ≥ 1)
  numline: (<svg viewBox="0 0 280 75" xmlns="http://www.w3.org/2000/svg" style={{background:"#1a1d23",borderRadius:8,border:"1px solid #2a2d35",width:"100%",maxWidth:300}}>
    <line x1="18" y1="38" x2="262" y2="38" stroke="#3a3d45" strokeWidth="2"/>
    <polygon points="262,38 252,33 252,43" fill="#3a3d45"/>
    {[-3,-2,-1,0,1,2,3,4].map((n,i)=>[
      <line key={"t"+n} x1={48+i*24} y1="33" x2={48+i*24} y2="43" stroke="#5a6070" strokeWidth="1.5"/>,
      <text key={"l"+n} x={48+i*24} y="57" textAnchor="middle" fill="#5a6070" fontSize="11" fontFamily="DM Sans">{n}</text>
    ])}
    <rect x="144" y="30" width="118" height="16" fill="#3b9eff" opacity="0.4" rx="2"/>
    <circle cx="144" cy="38" r="5" fill="#3b9eff"/>
    <text x="135" y="20" textAnchor="middle" fill="#3b9eff" fontSize="12" fontFamily="DM Sans">x ≥ 1</text>
  </svg>),

  // Gráfica de barras: ventas por día
  barchart: (<svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" style={{background:"#1a1d23",borderRadius:8,border:"1px solid #2a2d35",width:"100%",maxWidth:300}}>
    <line x1="38" y1="18" x2="38" y2="162" stroke="#5a6070" strokeWidth="1.5"/>
    <line x1="38" y1="162" x2="268" y2="162" stroke="#5a6070" strokeWidth="1.5"/>
    {[0,1,2,3,4].map(i=>[
      <line key={"g"+i} x1="38" y1={162-i*36} x2="268" y2={162-i*36} stroke="#252830" strokeWidth="1"/>,
      <text key={"n"+i} x="33" y={162-i*36+4} textAnchor="end" fill="#5a6070" fontSize="9" fontFamily="DM Sans">{i*5}</text>
    ])}
    {[{l:"Lun",h:72,c:"#3b9eff"},{l:"Mar",h:108,c:"#34d399"},{l:"Mié",h:54,c:"#f59e0b"},{l:"Jue",h:144,c:"#a78bfa"},{l:"Vie",h:90,c:"#f43f5e"}].map((d,i)=>[
      <rect key={"b"+i} x={50+i*40} y={162-d.h} width="26" height={d.h} fill={d.c} opacity="0.85" rx="2"/>,
      <text key={"t"+i} x={63+i*40} y="175" textAnchor="middle" fill="#5a6070" fontSize="9" fontFamily="DM Sans">{d.l}</text>
    ])}
    <text x="153" y="193" textAnchor="middle" fill="#8a9ab8" fontSize="10" fontFamily="DM Sans">Ventas diarias (unidades)</text>
  </svg>),

  // Dona: dos circunferencias concéntricas, área del anillo
  donut: (<svg viewBox="0 0 220 215" xmlns="http://www.w3.org/2000/svg" style={{background:"#1a1d23",borderRadius:8,border:"1px solid #2a2d35",width:"100%",maxWidth:240}}>
    <circle cx="110" cy="105" r="80" fill="#3b9eff" opacity="0.22" stroke="#3b9eff" strokeWidth="2"/>
    <circle cx="110" cy="105" r="45" fill="#1a1d23" stroke="#f59e0b" strokeWidth="2"/>
    <line x1="110" y1="105" x2="190" y2="105" stroke="#3b9eff" strokeWidth="1.5" strokeDasharray="4,3"/>
    <text x="150" y="98" textAnchor="middle" fill="#3b9eff" fontSize="13" fontFamily="DM Sans" fontStyle="italic">R</text>
    <line x1="110" y1="105" x2="155" y2="105" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,3"/>
    <text x="132" y="120" textAnchor="middle" fill="#f59e0b" fontSize="13" fontFamily="DM Sans" fontStyle="italic">r</text>
    <text x="110" y="205" textAnchor="middle" fill="#8a9ab8" fontSize="11" fontFamily="DM Sans">R = 8 cm, r = 5 cm</text>
  </svg>),

  // ── Pensamiento Científico ───────────────────────────────────

  // Cadena alimentaria: Hierba → Conejo → Zorro → Descomponedor
  foodchain: (<svg viewBox="0 0 340 90" xmlns="http://www.w3.org/2000/svg" style={{background:"#1a1d23",borderRadius:8,border:"1px solid #2a2d35",width:"100%",maxWidth:360}}>
    {[{x:15,l:"Hierba",c:"#34d399"},{x:95,l:"Conejo",c:"#a78bfa"},{x:185,l:"Zorro",c:"#f59e0b"},{x:265,l:"Bacteria",c:"#f43f5e"}].map((n,i)=>[
      <rect key={"r"+i} x={n.x} y="25" width="68" height="30" rx="5" fill={n.c} opacity="0.25" stroke={n.c} strokeWidth="1.5"/>,
      <text key={"t"+i} x={n.x+34} y="44" textAnchor="middle" fill={n.c} fontSize="11" fontFamily="DM Sans">{n.l}</text>
    ])}
    {[83,173,263].map((x,i)=>[
      <line key={"l"+i} x1={x} y1="40" x2={x+12} y2="40" stroke="#5a6070" strokeWidth="1.5"/>,
      <polygon key={"a"+i} points={`${x+12},35 ${x+22},40 ${x+12},45`} fill="#5a6070"/>
    ])}
    <text x="170" y="82" textAnchor="middle" fill="#5a6070" fontSize="10" fontFamily="DM Sans">Cadena alimentaria: flujo de energía →</text>
  </svg>),

  // Gráfica de crecimiento poblacional logístico (curva S)
  popgrowth: (<svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" style={{background:"#1a1d23",borderRadius:8,border:"1px solid #2a2d35",width:"100%",maxWidth:300}}>
    <line x1="38" y1="15" x2="38" y2="168" stroke="#5a6070" strokeWidth="1.5"/>
    <line x1="38" y1="168" x2="268" y2="168" stroke="#5a6070" strokeWidth="1.5"/>
    <polygon points="268,168 258,163 258,173" fill="#5a6070"/>
    <polygon points="38,15 33,25 43,25" fill="#5a6070"/>
    <text x="30" y="13" textAnchor="end" fill="#8a9ab8" fontSize="10" fontFamily="DM Sans">N</text>
    <text x="272" y="172" fill="#8a9ab8" fontSize="10" fontFamily="DM Sans">t</text>
    {/* Curva logística S aproximada con path */}
    <path d="M 45,165 C 70,163 85,155 100,140 C 115,125 120,100 130,80 C 140,60 155,40 175,32 C 195,26 220,25 255,24" fill="none" stroke="#3b9eff" strokeWidth="2.5"/>
    {/* Línea de capacidad de carga K */}
    <line x1="38" y1="24" x2="260" y2="24" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5,4"/>
    <text x="262" y="22" fill="#f59e0b" fontSize="10" fontFamily="DM Sans">K</text>
    <text x="158" y="190" textAnchor="middle" fill="#8a9ab8" fontSize="10" fontFamily="DM Sans">Tiempo (t)</text>
  </svg>),

  // Ciclo del agua (diagrama esquemático)
  cycle: (<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style={{background:"#1a1d23",borderRadius:8,border:"1px solid #2a2d35",width:"100%",maxWidth:320}}>
    {/* Nubes */}
    <ellipse cx="150" cy="35" rx="45" ry="22" fill="#2a3a4a" stroke="#3b9eff" strokeWidth="1.5"/>
    <text x="150" y="39" textAnchor="middle" fill="#3b9eff" fontSize="10" fontFamily="DM Sans">Nube</text>
    {/* Sol */}
    <circle cx="255" cy="35" r="18" fill="#f59e0b" opacity="0.3" stroke="#f59e0b" strokeWidth="1.5"/>
    <text x="255" y="39" textAnchor="middle" fill="#f59e0b" fontSize="9" fontFamily="DM Sans">Sol</text>
    {/* Mar */}
    <rect x="20" y="155" width="260" height="30" rx="4" fill="#1e3a5e" stroke="#3b9eff" strokeWidth="1.5"/>
    <text x="150" y="173" textAnchor="middle" fill="#3b9eff" fontSize="10" fontFamily="DM Sans">Cuerpo de agua / suelo</text>
    {/* Montaña */}
    <polygon points="55,155 95,100 135,155" fill="#2a2d35" stroke="#4a505a" strokeWidth="1.5"/>
    {/* Flechas del ciclo */}
    {/* Evaporación: mar → nube */}
    <path d="M 90,153 Q 100,90 140,55" fill="none" stroke="#34d399" strokeWidth="1.5" markerEnd="url(#arrowG)"/>
    <text x="82" y="100" fill="#34d399" fontSize="9" fontFamily="DM Sans" transform="rotate(-55,82,100)">Evaporación</text>
    {/* Precipitación: nube → abajo */}
    <path d="M 160,57 Q 175,100 185,153" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="4,3"/>
    <text x="192" y="110" fill="#a78bfa" fontSize="9" fontFamily="DM Sans">Precipitación</text>
    {/* Escorrentía */}
    <path d="M 230,160 Q 230,165 180,168" fill="none" stroke="#f59e0b" strokeWidth="1.5"/>
    <text x="205" y="155" textAnchor="middle" fill="#f59e0b" fontSize="8" fontFamily="DM Sans">Escorrentía</text>
    {/* Transpiracion */}
    <text x="55" y="95" textAnchor="middle" fill="#5a6070" fontSize="8" fontFamily="DM Sans">Montaña</text>
  </svg>),

  // Comparación célula vegetal vs animal
  celulas: (<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style={{background:"#1a1d23",borderRadius:8,border:"1px solid #2a2d35",width:"100%",maxWidth:340}}>
    {/* Célula Vegetal */}
    <rect x="12" y="25" width="138" height="155" rx="6" fill="#1e2d1e" stroke="#34d399" strokeWidth="2"/>
    <text x="81" y="18" textAnchor="middle" fill="#34d399" fontSize="11" fontFamily="DM Sans" fontWeight="bold">Vegetal</text>
    <ellipse cx="81" cy="95" rx="30" ry="22" fill="#1a1d23" stroke="#a78bfa" strokeWidth="1.5"/>
    <text x="81" y="99" textAnchor="middle" fill="#a78bfa" fontSize="9" fontFamily="DM Sans">Núcleo</text>
    <rect x="22" y="55" width="26" height="14" rx="3" fill="#34d399" opacity="0.4" stroke="#34d399" strokeWidth="1"/>
    <text x="35" y="66" textAnchor="middle" fill="#34d399" fontSize="7" fontFamily="DM Sans">Cloroplasto</text>
    <rect x="100" y="130" width="40" height="18" rx="3" fill="#3b9eff" opacity="0.3" stroke="#3b9eff" strokeWidth="1"/>
    <text x="120" y="143" textAnchor="middle" fill="#3b9eff" fontSize="7" fontFamily="DM Sans">Vacuola</text>
    <rect x="12" y="25" width="138" height="155" rx="6" fill="none" stroke="#34d399" strokeWidth="3"/>
    <text x="55" y="168" textAnchor="middle" fill="#5a6070" fontSize="8" fontFamily="DM Sans">Pared celular</text>
    {/* Célula Animal */}
    <ellipse cx="241" cy="102" rx="64" ry="72" fill="#2a1e1e" stroke="#f43f5e" strokeWidth="2"/>
    <text x="241" y="18" textAnchor="middle" fill="#f43f5e" fontSize="11" fontFamily="DM Sans" fontWeight="bold">Animal</text>
    <ellipse cx="241" cy="100" rx="28" ry="20" fill="#1a1d23" stroke="#a78bfa" strokeWidth="1.5"/>
    <text x="241" y="104" textAnchor="middle" fill="#a78bfa" fontSize="9" fontFamily="DM Sans">Núcleo</text>
    <circle cx="196" cy="68" r="6" fill="#f59e0b" opacity="0.5" stroke="#f59e0b" strokeWidth="1"/>
    <text x="196" y="55" textAnchor="middle" fill="#f59e0b" fontSize="7" fontFamily="DM Sans">Centriolos</text>
    <text x="241" y="185" textAnchor="middle" fill="#5a6070" fontSize="8" fontFamily="DM Sans">Membrana (sin pared)</text>
  </svg>),
};

export default {
  metadata: {
    id: "simulador-exani-i-3",
    titulo: "Simulador EXANI-I #3",
    nivel: "preparatoria",
    materia: "Simulador",
    tema: "EXANI-I",
  },
  config: { timePerQuestion: 100 },
  bloques: [
    { id: "pensamiento-cientifico",  titulo: "Pensamiento Científico",  from: 0,   to: 29,  cantidad: 30, color: "#3b9eff" },
    { id: "comprension-lectora",     titulo: "Comprensión Lectora",     from: 30,  to: 59,  cantidad: 30, color: "#34d399" },
    { id: "redaccion-indirecta",     titulo: "Redacción Indirecta",     from: 60,  to: 89,  cantidad: 30, color: "#a78bfa" },
    { id: "pensamiento-matematico",  titulo: "Pensamiento Matemático",  from: 90,  to: 129, cantidad: 40, color: "#f59e0b" },
  ],
  questions: [

    // ══════════════════════════════════════════════════════════════
    // PENSAMIENTO CIENTÍFICO (0-29) — Distribución A:10 B:10 C:10
    // ══════════════════════════════════════════════════════════════

    // Q0 — Niveles tróficos (A)
    {
      id: "q0",
      question: "En un ecosistema, los organismos que producen su propio alimento mediante fotosíntesis se denominan:",
      options: [
        "Productores",
        "Consumidores primarios",
        "Descomponedores",
      ],
      correctAnswer: 0,
      explanation: "Los productores (plantas y algas) son organismos autótrofos que convierten la energía solar en materia orgánica mediante la fotosíntesis.",
    },

    // Q1 — Genética mendeliana: alelo dominante (B)
    {
      id: "q1",
      question: "En la genética mendeliana, cuando un organismo tiene dos alelos diferentes para un rasgo (heterocigoto Aa), el fenotipo que se manifiesta corresponde al alelo:",
      options: [
        "Recesivo",
        "Dominante",
        "Codominante siempre",
      ],
      correctAnswer: 1,
      explanation: "El alelo dominante (A) enmascara la expresión del alelo recesivo (a) cuando ambos están presentes en el genotipo heterocigoto Aa.",
    },

    // Q2 — Ciclo del carbono: fotosíntesis (C)
    {
      id: "q2",
      question: "En el ciclo del carbono, ¿qué proceso incorpora el CO₂ atmosférico a los organismos vivos?",
      options: [
        "Respiración celular",
        "Descomposición",
        "Fotosíntesis",
      ],
      correctAnswer: 2,
      explanation: "La fotosíntesis permite a las plantas capturar CO₂ del aire y convertirlo en glucosa, incorporando el carbono al ciclo biológico.",
    },

    // Q3 — Células eucariota vs procariota (A)
    {
      id: "q3",
      question: "¿Cuál es la principal diferencia entre una célula eucariota y una procariota?",
      options: [
        "La célula eucariota tiene núcleo delimitado por membrana; la procariota no.",
        "La célula procariota tiene mitocondrias; la eucariota no.",
        "Solo las células procariotas realizan la respiración celular.",
      ],
      correctAnswer: 0,
      explanation: "La célula eucariota posee un núcleo verdadero rodeado por membrana nuclear. Las células procariotas (bacterias) carecen de membrana nuclear.",
    },

    // Q4 — Selección natural (B)
    {
      id: "q4",
      question: "Según la teoría de la selección natural de Darwin, los organismos que sobreviven y se reproducen con mayor éxito son aquellos que:",
      options: [
        "Mutan más rápidamente",
        "Presentan variaciones ventajosas para su entorno",
        "Son los más grandes de la población",
      ],
      correctAnswer: 1,
      explanation: "La selección natural favorece a los individuos con variaciones que les otorgan ventajas adaptativas en su ambiente, aumentando su probabilidad de reproducción.",
    },

    // Q5 — Cadena alimentaria: con SVG (C)
    {
      id: "q5",
      question: "La figura muestra una cadena alimentaria. ¿Qué nivel trófico ocupa el conejo?",
      options: [
        "Productor",
        "Consumidor secundario",
        "Consumidor primario",
      ],
      correctAnswer: 2,
      explanation: "El conejo se alimenta directamente de los productores (hierba), por lo que ocupa el primer nivel de consumo: consumidor primario.",
      diagram: D.foodchain,
    },

    // Q6 — MRU: velocidad media (A)
    {
      id: "q6",
      question: "Un automóvil recorre 240 km en 3 horas a velocidad constante. ¿Cuál es su velocidad media?",
      options: [
        "80 km/h",
        "60 km/h",
        "120 km/h",
      ],
      correctAnswer: 0,
      explanation: "Velocidad media = distancia / tiempo = 240 km ÷ 3 h = 80 km/h.",
    },

    // Q7 — Reacciones químicas: reactivos y productos (B)
    {
      id: "q7",
      question: "En la ecuación química H₂ + O₂ → H₂O, ¿cuáles son los reactivos?",
      options: [
        "Solo H₂O",
        "H₂ y O₂",
        "H₂ solamente",
      ],
      correctAnswer: 1,
      explanation: "Los reactivos son las sustancias que se consumen en la reacción (lado izquierdo de la ecuación): H₂ y O₂. El producto es H₂O.",
    },

    // Q8 — Tabla periódica: grupo 1 (C)
    {
      id: "q8",
      question: "Los elementos del Grupo 1 (IA) de la tabla periódica se caracterizan por:",
      options: [
        "Ser gases nobles y muy poco reactivos",
        "Tener 7 electrones de valencia y atraer electrones fácilmente",
        "Tener 1 electrón de valencia y reaccionar fácilmente con el agua",
      ],
      correctAnswer: 2,
      explanation: "Los metales alcalinos (Grupo 1) poseen un solo electrón de valencia, lo que los hace muy reactivos. Reaccionan vigorosamente con el agua produciendo hidrógeno.",
    },

    // Q9 — Energía: tipos (A)
    {
      id: "q9",
      question: "Un objeto que se encuentra en reposo en lo alto de una rampa posee principalmente:",
      options: [
        "Energía potencial gravitatoria",
        "Energía cinética",
        "Energía térmica",
      ],
      correctAnswer: 0,
      explanation: "La energía potencial gravitatoria depende de la posición del objeto respecto a un nivel de referencia. Un objeto en reposo a cierta altura tiene máxima energía potencial.",
    },

    // Q10 — Crecimiento poblacional: curva logística (B)
    {
      id: "q10",
      question: "La gráfica muestra el crecimiento de una población con el tiempo. ¿Qué representa la línea discontinua K?",
      options: [
        "La tasa de natalidad de la población",
        "La capacidad de carga del ambiente",
        "El punto de extinción de la especie",
      ],
      correctAnswer: 1,
      explanation: "K representa la capacidad de carga del ambiente: el número máximo de individuos que el entorno puede sostener de manera sostenible.",
      diagram: D.popgrowth,
    },

    // Q11 — Fotosíntesis: ecuación general (C)
    {
      id: "q11",
      question: "¿Cuál es la ecuación general simplificada de la fotosíntesis?",
      options: [
        "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energía",
        "6H₂O + 6O₂ → C₆H₁₂O₆ + CO₂",
        "6CO₂ + 6H₂O + luz → C₆H₁₂O₆ + 6O₂",
      ],
      correctAnswer: 2,
      explanation: "La fotosíntesis convierte CO₂ y H₂O en glucosa (C₆H₁₂O₆) y libera O₂ usando energía lumínica.",
    },

    // Q12 — Genética: cruce Aa × Aa (A)
    {
      id: "q12",
      question: "Al cruzar dos organismos heterocigotos (Aa × Aa), ¿cuál es la proporción fenotípica esperada?",
      options: [
        "3 dominantes : 1 recesivo",
        "1 dominante : 1 recesivo",
        "4 dominantes : 0 recesivos",
      ],
      correctAnswer: 0,
      explanation: "El cuadro de Punnett para Aa × Aa da: AA, Aa, Aa, aa → 3 fenotipos dominantes (AA, Aa, Aa) y 1 fenotipo recesivo (aa), proporción 3:1.",
    },

    // Q13 — Ciclo del nitrógeno: fijación (B)
    {
      id: "q13",
      question: "En el ciclo del nitrógeno, ¿qué organismos son capaces de fijar el nitrógeno atmosférico (N₂) convirtiéndolo en compuestos utilizables?",
      options: [
        "Hongos descomponedores",
        "Bacterias fijadoras de nitrógeno",
        "Plantas con flores",
      ],
      correctAnswer: 1,
      explanation: "Bacterias como Rhizobium (en nódulos de leguminosas) y Azotobacter (vida libre) fijan el N₂ atmosférico convirtiéndolo en amoniaco o nitratos aprovechables.",
    },

    // Q14 — Organelo celular: mitocondria (C)
    {
      id: "q14",
      question: "¿Cuál es la función principal de la mitocondria en la célula?",
      options: [
        "Sintetizar proteínas a partir del ARN mensajero",
        "Almacenar la información genética del organismo",
        "Producir ATP mediante la respiración celular aerobia",
      ],
      correctAnswer: 2,
      explanation: "La mitocondria es la 'central energética' de la célula, donde se lleva a cabo la respiración celular aerobia para generar ATP.",
    },

    // Q15 — Ciclo del agua (A)
    {
      id: "q15",
      question: "En el diagrama del ciclo del agua, ¿qué proceso eleva el vapor de agua hacia la atmósfera para formar las nubes?",
      options: [
        "Evaporación y evapotranspiración",
        "Precipitación",
        "Escorrentía",
      ],
      correctAnswer: 0,
      explanation: "La evaporación (agua superficial) y la evapotranspiración (plantas) llevan el vapor hacia la atmósfera donde se condensa formando nubes.",
      diagram: D.cycle,
    },

    // Q16 — MRUA: fórmula de velocidad (B)
    {
      id: "q16",
      question: "Un objeto parte del reposo y adquiere una aceleración de 3 m/s². ¿Cuál es su velocidad después de 4 segundos?",
      options: [
        "8 m/s",
        "12 m/s",
        "16 m/s",
      ],
      correctAnswer: 1,
      explanation: "v = v₀ + a·t = 0 + 3 × 4 = 12 m/s.",
    },

    // Q17 — Enlace químico: iónico vs covalente (C)
    {
      id: "q17",
      question: "¿Qué tipo de enlace se forma entre un metal y un no metal, como en el caso del NaCl?",
      options: [
        "Enlace covalente polar",
        "Enlace covalente no polar",
        "Enlace iónico",
      ],
      correctAnswer: 2,
      explanation: "El enlace iónico se forma por transferencia de electrones entre un metal (Na, que cede un electrón) y un no metal (Cl, que lo acepta), generando iones Na⁺ y Cl⁻.",
    },

    // Q18 — Tabla periódica: halógenos (A)
    {
      id: "q18",
      question: "¿Cuál de los siguientes elementos pertenece al grupo de los halógenos (Grupo 17)?",
      options: [
        "Cloro (Cl)",
        "Sodio (Na)",
        "Helio (He)",
      ],
      correctAnswer: 0,
      explanation: "Los halógenos (Grupo 17) incluyen F, Cl, Br, I, At. Todos tienen 7 electrones de valencia y gran electronegatividad.",
    },

    // Q19 — Trabajo mecánico (B)
    {
      id: "q19",
      question: "Se aplica una fuerza de 50 N para desplazar un objeto 4 m en la dirección de la fuerza. ¿Cuánto trabajo se realizó?",
      options: [
        "12.5 J",
        "200 J",
        "54 J",
      ],
      correctAnswer: 1,
      explanation: "Trabajo = Fuerza × desplazamiento = 50 N × 4 m = 200 J.",
    },

    // Q20 — Ecosistema: flujo de energía (C)
    {
      id: "q20",
      question: "¿Qué porcentaje aproximado de la energía se transfiere de un nivel trófico al siguiente en un ecosistema?",
      options: [
        "90%",
        "50%",
        "10%",
      ],
      correctAnswer: 2,
      explanation: "La regla del 10% establece que solo aproximadamente el 10% de la energía de un nivel trófico pasa al siguiente; el 90% restante se pierde como calor.",
    },

    // Q21 — ADN: doble hélice (A)
    {
      id: "q21",
      question: "¿Qué bases nitrogenadas se emparejan en la doble hélice del ADN?",
      options: [
        "Adenina con Timina, y Guanina con Citosina",
        "Adenina con Guanina, y Timina con Uracilo",
        "Citosina con Timina, y Adenina con Uracilo",
      ],
      correctAnswer: 0,
      explanation: "Las reglas de Chargaff establecen el apareamiento complementario: A-T (dos puentes de hidrógeno) y G-C (tres puentes de hidrógeno).",
    },

    // Q22 — Célula vegetal vs animal (B)
    {
      id: "q22",
      question: "Según el diagrama comparativo, ¿cuál de las siguientes estructuras está presente en la célula vegetal pero ausente en la célula animal?",
      options: [
        "Núcleo",
        "Pared celular y cloroplastos",
        "Mitocondria",
      ],
      correctAnswer: 1,
      explanation: "La pared celular (celulosa) y los cloroplastos son exclusivos de las células vegetales. Ambos tipos de células comparten núcleo y mitocondrias.",
      diagram: D.celulas,
    },

    // Q23 — Segunda ley de Mendel (C)
    {
      id: "q23",
      question: "La segunda ley de Mendel (principio de segregación independiente) establece que:",
      options: [
        "Los alelos dominantes siempre se expresan sobre los recesivos",
        "Los alelos de un mismo gen se separan durante la meiosis",
        "Los genes de diferentes características se heredan de manera independiente",
      ],
      correctAnswer: 2,
      explanation: "La segunda ley indica que los genes para distintos rasgos se heredan independientemente unos de otros durante la formación de gametos (aplica para genes en cromosomas diferentes).",
    },

    // Q24 — Ciclo del agua: condensación (A)
    {
      id: "q24",
      question: "¿Qué proceso del ciclo del agua ocurre cuando el vapor de agua enfría y cambia a estado líquido formando nubes?",
      options: [
        "Condensación",
        "Precipitación",
        "Infiltración",
      ],
      correctAnswer: 0,
      explanation: "La condensación es el cambio de estado de vapor a líquido. En la atmósfera, el vapor de agua se condensa alrededor de partículas de polvo formando las nubes.",
    },

    // Q25 — Tipos de reacciones químicas (B)
    {
      id: "q25",
      question: "En la reacción: CaCO₃ → CaO + CO₂, ¿de qué tipo de reacción química se trata?",
      options: [
        "Síntesis o combinación",
        "Descomposición",
        "Sustitución simple",
      ],
      correctAnswer: 1,
      explanation: "Una reacción de descomposición ocurre cuando un compuesto se divide en dos o más sustancias más simples: AB → A + B.",
    },

    // Q26 — Metales alcalinos (C)
    {
      id: "q26",
      question: "¿Cuál de las siguientes propiedades describe correctamente a los metales alcalinos?",
      options: [
        "Son muy duros y tienen alto punto de fusión",
        "Son inertes y no reaccionan con ningún elemento",
        "Son blandos, livianos y altamente reactivos con el agua",
      ],
      correctAnswer: 2,
      explanation: "Los metales alcalinos (Li, Na, K...) son blandos, tienen baja densidad y reaccionan vigorosamente con el agua liberando H₂ y formando hidróxidos.",
    },

    // Q27 — Primera ley de termodinámica (A)
    {
      id: "q27",
      question: "La primera ley de la termodinámica establece que en un sistema cerrado:",
      options: [
        "La energía total se conserva; no se crea ni se destruye, solo se transforma.",
        "La energía siempre fluye del cuerpo frío al caliente.",
        "La entropía de un sistema siempre disminuye con el tiempo.",
      ],
      correctAnswer: 0,
      explanation: "La primera ley de la termodinámica es el principio de conservación de la energía: la energía total de un sistema cerrado permanece constante.",
    },

    // Q28 — Genotipo y fenotipo (B)
    {
      id: "q28",
      question: "¿Cuál es la diferencia entre genotipo y fenotipo?",
      options: [
        "El genotipo es lo que se observa; el fenotipo es la combinación de alelos.",
        "El genotipo es la composición genética; el fenotipo es la expresión observable.",
        "Son sinónimos que describen los mismos rasgos del organismo.",
      ],
      correctAnswer: 1,
      explanation: "El genotipo (ej. Aa) es la composición alélica del individuo; el fenotipo es la manifestación observable del genotipo en interacción con el ambiente.",
    },

    // Q29 — MRU: distancia recorrida (C)
    {
      id: "q29",
      question: "Un tren viaja a velocidad constante de 90 km/h. ¿Qué distancia recorre en 40 minutos?",
      options: [
        "36 km",
        "45 km",
        "60 km",
      ],
      correctAnswer: 2,
      explanation: "40 minutos = 2/3 de hora. Distancia = velocidad × tiempo = 90 × (2/3) = 60 km.",
    },

    // ══════════════════════════════════════════════════════════════
    // COMPRENSIÓN LECTORA (30-59) — Distribución A:10 B:10 C:10
    // ══════════════════════════════════════════════════════════════

    // ── TEXTO 1: Los arrecifes de coral (Q30-34) ─────────────────
    // Q30 — Idea principal (A)
    {
      id: "q30",
      question: "Lee el siguiente texto:<br><br><em>Los arrecifes de coral albergan el 25% de las especies marinas a pesar de cubrir menos del 1% del fondo oceánico. El calentamiento global provoca el blanqueamiento coralino: los corales expulsan las algas que les dan color y nutrientes. Si la temperatura global sube 2°C sobre niveles preindustriales, el 99% de los arrecifes podría desaparecer.</em><br><br>¿Cuál es la idea principal del texto?",
      options: [
        "Los arrecifes de coral son ecosistemas muy diversos que están amenazados por el cambio climático.",
        "Los corales se alimentan de algas que les proporcionan color y nutrientes.",
        "La temperatura global ha aumentado 2°C desde la era preindustrial.",
      ],
      correctAnswer: 0,
      explanation: "El texto presenta dos ideas complementarias: la importancia biológica de los arrecifes y la amenaza que representa el calentamiento global para su supervivencia.",
    },
    // Q31 — Significado de blanqueamiento coralino (B)
    {
      id: "q31",
      question: "Texto: <em>Los arrecifes de coral albergan el 25% de las especies marinas. El calentamiento global provoca el blanqueamiento coralino: los corales expulsan las algas que les dan color y nutrientes. Si la temperatura sube 2°C, el 99% podría desaparecer.</em><br><br>Según el texto, ¿qué es el blanqueamiento coralino?",
      options: [
        "La extinción de las especies que habitan los arrecifes de coral",
        "El proceso por el que los corales expulsan las algas que les dan color y nutrientes",
        "La decoloración del agua marina causada por la contaminación",
      ],
      correctAnswer: 1,
      explanation: "El texto define explícitamente el blanqueamiento coralino: 'los corales expulsan las algas que les dan color y nutrientes'.",
    },
    // Q32 — Propósito del texto (C)
    {
      id: "q32",
      question: "Texto: <em>Los arrecifes de coral albergan el 25% de las especies marinas. El calentamiento global provoca el blanqueamiento coralino: los corales expulsan las algas que les dan color y nutrientes. Si la temperatura sube 2°C, el 99% podría desaparecer.</em><br><br>¿Cuál es el propósito principal de este texto?",
      options: [
        "Describir el proceso de reproducción de los corales",
        "Comparar distintos ecosistemas marinos del planeta",
        "Informar sobre la importancia y vulnerabilidad de los arrecifes de coral",
      ],
      correctAnswer: 2,
      explanation: "El texto combina datos sobre la biodiversidad de los arrecifes con información sobre las amenazas que enfrentan, con propósito informativo-científico.",
    },
    // Q33 — Dato explícito (A)
    {
      id: "q33",
      question: "Texto: <em>Los arrecifes de coral albergan el 25% de las especies marinas a pesar de cubrir menos del 1% del fondo oceánico. El calentamiento global provoca el blanqueamiento coralino. Si la temperatura sube 2°C, el 99% de los arrecifes podría desaparecer.</em><br><br>¿Qué porcentaje del fondo oceánico cubren los arrecifes de coral?",
      options: [
        "Menos del 1%",
        "25%",
        "2%",
      ],
      correctAnswer: 0,
      explanation: "El texto indica literalmente: 'a pesar de cubrir menos del 1% del fondo oceánico'.",
    },
    // Q34 — Consecuencia implícita (B)
    {
      id: "q34",
      question: "Texto: <em>Los arrecifes de coral albergan el 25% de las especies marinas. Si la temperatura global sube 2°C sobre niveles preindustriales, el 99% de los arrecifes podría desaparecer.</em><br><br>¿Qué consecuencia puede inferirse si desaparecen el 99% de los arrecifes?",
      options: [
        "La temperatura oceánica descenderá automáticamente.",
        "Una gran proporción de las especies marinas conocidas perderían su hábitat.",
        "Los mares se volverán más claros al desaparecer las algas coloreadas.",
      ],
      correctAnswer: 1,
      explanation: "Si los arrecifes albergan el 25% de las especies marinas y el 99% desaparece, la mayoría de esas especies quedaría sin hábitat, lo que implicaría una crisis de biodiversidad marina.",
    },

    // ── TEXTO 2: Don Aurelio (fragmento literario, Q35-39) ────────
    // Q35 — Atmósfera del fragmento (C)
    {
      id: "q35",
      question: "Lee el siguiente fragmento:<br><br><em>La tarde caía despacio sobre el pueblo. Las casas, mudas y soñolientas, parecían aguardar algo que nunca llegaría. Don Aurelio cruzó la plaza sin mirar a nadie, aunque todos lo miraban a él: era el único que había regresado de la ciudad con las manos vacías y el corazón lleno de silencio.</em><br><br>¿Cuál es la atmósfera predominante en este fragmento?",
      options: [
        "Alegre y esperanzadora",
        "Tensa y violenta",
        "Melancólica y cargada de expectativa frustrada",
      ],
      correctAnswer: 2,
      explanation: "El ambiente descrito —tarde que cae despacio, casas mudas, espera de algo que no llega, regreso con manos vacías— construye una atmósfera de melancolía y esperanza defraudada.",
    },
    // Q36 — Figura retórica (A)
    {
      id: "q36",
      question: "Fragmento: <em>Las casas, mudas y soñolientas, parecían aguardar algo que nunca llegaría. Don Aurelio cruzó la plaza sin mirar a nadie, aunque todos lo miraban a él.</em><br><br>¿Qué figura retórica se emplea en la expresión 'Las casas... parecían aguardar'?",
      options: [
        "Personificación",
        "Hipérbole",
        "Metáfora",
      ],
      correctAnswer: 0,
      explanation: "La personificación atribuye características humanas (aguardar, soñoliento) a objetos inanimados, en este caso las casas del pueblo.",
    },
    // Q37 — Caracterización del personaje (B)
    {
      id: "q37",
      question: "Fragmento: <em>Don Aurelio cruzó la plaza sin mirar a nadie, aunque todos lo miraban a él: era el único que había regresado de la ciudad con las manos vacías y el corazón lleno de silencio.</em><br><br>¿Qué se puede inferir sobre Don Aurelio?",
      options: [
        "Es un personaje admirado y celebrado por el pueblo.",
        "Regresó frustrado o derrotado y enfrenta la mirada del pueblo con vergüenza o dolor.",
        "No le importa la opinión de sus vecinos.",
      ],
      correctAnswer: 1,
      explanation: "La expresión 'manos vacías' sugiere fracaso, y su actitud de no mirar a nadie mientras todos lo observan refleja la incomodidad de alguien que siente el peso del juicio ajeno.",
    },
    // Q38 — Significado contextual (C)
    {
      id: "q38",
      question: "Fragmento: <em>Don Aurelio regresó de la ciudad con las manos vacías y el corazón lleno de silencio.</em><br><br>¿Qué expresa la frase 'el corazón lleno de silencio'?",
      options: [
        "Que Don Aurelio es una persona callada por naturaleza.",
        "Que Don Aurelio sufrió una pérdida auditiva en la ciudad.",
        "Un estado de tristeza o desaliento que no puede o no quiere expresar con palabras.",
      ],
      correctAnswer: 2,
      explanation: "La imagen 'corazón lleno de silencio' es una metáfora que evoca un dolor profundo e inexpresable, opuesto al vacío material de 'manos vacías'.",
    },
    // Q39 — Tipo de narrador (A)
    {
      id: "q39",
      question: "Fragmento: <em>La tarde caía despacio sobre el pueblo. Don Aurelio cruzó la plaza sin mirar a nadie, aunque todos lo miraban a él.</em><br><br>¿Qué tipo de narrador presenta el fragmento?",
      options: [
        "Narrador en tercera persona (omnisciente o testigo)",
        "Narrador en primera persona protagonista",
        "Narrador en segunda persona",
      ],
      correctAnswer: 0,
      explanation: "El narrador utiliza la tercera persona ('La tarde caía', 'Don Aurelio cruzó') y describe tanto acciones externas como la percepción colectiva del pueblo, rasgos del narrador omnisciente.",
    },

    // ── TEXTO 3: La imprenta de Gutenberg (Q40-44) ───────────────
    // Q40 — Principal efecto de la imprenta (B)
    {
      id: "q40",
      question: "Lee el siguiente texto:<br><br><em>Antes de la imprenta de tipos móviles de Gutenberg (c. 1450), los copistas tardaban meses en transcribir un solo libro. La nueva tecnología multiplicó los textos por Europa en pocas décadas, impulsando la Reforma Protestante y el Renacimiento científico. Algunos historiadores la consideran la invención más influyente del segundo milenio.</em><br><br>¿Cuál fue el principal efecto de la imprenta según el texto?",
      options: [
        "Eliminó la necesidad de los copistas en los monasterios.",
        "Facilitó la difusión masiva del conocimiento en Europa.",
        "Unificó los distintos idiomas europeos en uno solo.",
      ],
      correctAnswer: 1,
      explanation: "El texto indica que la imprenta 'multiplicó los textos' e impulsó movimientos culturales y religiosos, lo que señala su efecto en la difusión del conocimiento.",
    },
    // Q41 — Uso de "algunos historiadores" (C)
    {
      id: "q41",
      question: "Texto: <em>Antes de la imprenta de Gutenberg (c. 1450), los copistas tardaban meses en transcribir un libro. La nueva tecnología multiplicó los textos por Europa. Algunos historiadores la consideran la invención más influyente del segundo milenio.</em><br><br>¿Por qué el autor usa la expresión 'algunos historiadores consideran' al final?",
      options: [
        "Para indicar que la imprenta no tuvo un impacto real.",
        "Para demostrar que todos los historiadores están de acuerdo con esa afirmación.",
        "Para matizar la afirmación y mostrar que es una valoración, no un hecho comprobado.",
      ],
      correctAnswer: 2,
      explanation: "Al atribuir la opinión a 'algunos historiadores', el autor señala que se trata de una valoración subjetiva sujeta a debate, no de un dato objetivo universal.",
    },
    // Q42 — Situación previa a la imprenta (A)
    {
      id: "q42",
      question: "Texto: <em>Antes de la imprenta de Gutenberg (c. 1450), los copistas tardaban meses en transcribir un solo libro. La nueva tecnología multiplicó los textos por Europa en pocas décadas, impulsando la Reforma Protestante y el Renacimiento científico.</em><br><br>¿Cómo se reproducían los libros antes de la imprenta?",
      options: [
        "Mediante la copia manual por parte de copistas, un proceso lento.",
        "Con máquinas de vapor que imprimían en grandes cantidades.",
        "A través de un sistema de distribución organizado por la Iglesia.",
      ],
      correctAnswer: 0,
      explanation: "El texto indica explícitamente que antes de la imprenta 'los copistas tardaban meses en transcribir un solo libro', describiendo así la reproducción manual.",
    },
    // Q43 — Significado de "copistas" (B)
    {
      id: "q43",
      question: "Texto: <em>Antes de la imprenta de Gutenberg (c. 1450), los copistas tardaban meses en transcribir un solo libro.</em><br><br>¿Cuál es el significado de la palabra 'copistas' en este contexto?",
      options: [
        "Inventores de máquinas de escritura mecánica",
        "Personas dedicadas a reproducir textos a mano",
        "Comerciantes de libros en la Europa medieval",
      ],
      correctAnswer: 1,
      explanation: "En el contexto histórico, los copistas eran escribas que transcribían manualmente los manuscritos, labor predominante en monasterios antes de la imprenta.",
    },
    // Q44 — Inferencia del texto (C)
    {
      id: "q44",
      question: "Texto: <em>Antes de la imprenta (c. 1450), los copistas tardaban meses en transcribir un libro. La nueva tecnología multiplicó los textos por Europa, impulsando la Reforma Protestante y el Renacimiento científico.</em><br><br>¿Qué puede inferirse sobre la relación entre acceso a la información y cambios sociales?",
      options: [
        "Los cambios sociales solo dependen de factores económicos, no informativos.",
        "La imprenta fue irrelevante para los movimientos culturales europeos.",
        "Una mayor circulación de textos puede impulsar transformaciones culturales, religiosas y científicas.",
      ],
      correctAnswer: 2,
      explanation: "El texto establece que la difusión masiva de textos impulsó la Reforma y el Renacimiento, lo que implica que el acceso a la información tiene el poder de transformar la sociedad.",
    },

    // ── TEXTO 4: Redes sociales (Q45-49) ─────────────────────────
    // Q45 — Postura del autor (A)
    {
      id: "q45",
      question: "Lee el siguiente texto:<br><br><em>Las redes sociales facilitan la comunicación instantánea, pero generan burbujas informativas que refuerzan las creencias previas de cada usuario. Estudios psicológicos asocian su uso excesivo con mayor ansiedad y menor capacidad de atención. Es urgente que los usuarios desarrollen un consumo consciente y crítico de los medios digitales.</em><br><br>¿Cuál es la postura del autor ante las redes sociales?",
      options: [
        "Reconoce sus beneficios pero advierte sobre sus riesgos y propone una actitud crítica.",
        "Defiende el uso irrestricto de las redes sociales como herramienta educativa.",
        "Propone la prohibición total de las plataformas digitales.",
      ],
      correctAnswer: 0,
      explanation: "El autor reconoce que las redes 'facilitan la comunicación' (beneficio), pero señala sus riesgos y concluye con un llamado a la consciencia crítica.",
    },
    // Q46 — Significado de "burbujas informativas" (B)
    {
      id: "q46",
      question: "Texto: <em>Las redes sociales generan burbujas informativas que refuerzan las creencias previas de cada usuario.</em><br><br>¿Qué significa 'burbujas informativas' según el contexto?",
      options: [
        "Noticias falsas difundidas masivamente en internet",
        "Entornos digitales donde solo se recibe información que confirma las ideas propias",
        "Aplicaciones de mensajería que aíslan a los usuarios del mundo real",
      ],
      correctAnswer: 1,
      explanation: "El contexto indica que las burbujas 'refuerzan las creencias previas', es decir, limitan la exposición del usuario a puntos de vista distintos a los suyos.",
    },
    // Q47 — Estructura argumentativa (C)
    {
      id: "q47",
      question: "Texto: <em>Las redes sociales facilitan la comunicación instantánea, pero generan burbujas informativas. Estudios psicológicos asocian su uso excesivo con mayor ansiedad. Es urgente que los usuarios desarrollen un consumo consciente.</em><br><br>¿Cómo está estructurado el argumento del texto?",
      options: [
        "Presenta solo datos positivos sobre las redes para luego refutarlos.",
        "Narra una experiencia personal con redes sociales.",
        "Reconoce un beneficio, expone consecuencias negativas y concluye con una propuesta.",
      ],
      correctAnswer: 2,
      explanation: "El texto sigue la estructura: concesión (facilitan comunicación) → argumentación de riesgos (burbujas, ansiedad) → propuesta final (consumo crítico).",
    },
    // Q48 — Tema central (A)
    {
      id: "q48",
      question: "Texto: <em>Las redes sociales facilitan la comunicación, pero generan burbujas informativas. Estudios psicológicos asocian su uso excesivo con ansiedad y menor atención. Es urgente que los usuarios desarrollen un consumo crítico de los medios digitales.</em><br><br>¿Cuál es el tema central del texto?",
      options: [
        "Los efectos negativos del uso excesivo de redes sociales y la necesidad de un consumo crítico",
        "Las ventajas económicas de las plataformas digitales para las empresas",
        "La historia y evolución de las redes sociales en el siglo XXI",
      ],
      correctAnswer: 0,
      explanation: "El texto se centra en los riesgos del uso excesivo de redes sociales y propone como solución el consumo consciente y crítico.",
    },
    // Q49 — Evidencia utilizada (B)
    {
      id: "q49",
      question: "Texto: <em>Las redes sociales generan burbujas informativas. Estudios psicológicos asocian su uso excesivo con mayor ansiedad y menor capacidad de atención.</em><br><br>¿Qué tipo de evidencia utiliza el autor para apoyar su argumento?",
      options: [
        "Anécdotas personales sobre el uso de redes sociales",
        "Referencia a estudios psicológicos como respaldo científico",
        "Estadísticas sobre el número de usuarios de cada plataforma",
      ],
      correctAnswer: 1,
      explanation: "El autor menciona 'estudios psicológicos' para dar soporte científico a la afirmación sobre los efectos negativos del uso excesivo.",
    },

    // ── TEXTO 5: Neuroplasticidad (Q50-54) ───────────────────────
    // Q50 — Idea principal (C)
    {
      id: "q50",
      question: "Lee el siguiente texto:<br><br><em>Durante décadas se creyó que el cerebro adulto era una estructura fija e inmutable. Investigaciones recientes demostraron la neuroplasticidad: la capacidad del cerebro de reorganizarse formando nuevas conexiones neuronales a lo largo de toda la vida. Actividades como aprender un instrumento musical o un nuevo idioma generan cambios estructurales mensurables en el cerebro.</em><br><br>¿Cuál es la idea principal del texto?",
      options: [
        "Aprender música es el único método para mejorar las capacidades mentales.",
        "El cerebro adulto es una estructura rígida que no puede modificarse.",
        "El cerebro conserva la capacidad de cambiar y formar nuevas conexiones durante toda la vida.",
      ],
      correctAnswer: 2,
      explanation: "La idea central es la neuroplasticidad: la capacidad del cerebro de reorganizarse y formar nuevas conexiones neuronales, contradiciendo la creencia previa de que era inmutable.",
    },
    // Q51 — Cambio de perspectiva (A)
    {
      id: "q51",
      question: "Texto: <em>Durante décadas se creyó que el cerebro adulto era una estructura fija e inmutable. Investigaciones recientes demostraron la neuroplasticidad: la capacidad del cerebro de reorganizarse a lo largo de toda la vida.</em><br><br>¿Qué cambio de perspectiva describe el texto?",
      options: [
        "De considerar el cerebro adulto inmutable a reconocer su capacidad de cambio continuo.",
        "De estudiar el cerebro de adultos a centrarse solo en el cerebro infantil.",
        "De la neurología clínica hacia la psicología conductual.",
      ],
      correctAnswer: 0,
      explanation: "El texto contrasta la creencia previa (cerebro fijo) con el descubrimiento actual (neuroplasticidad), reflejando un cambio fundamental en la comprensión del órgano.",
    },
    // Q52 — Significado de "inmutable" (B)
    {
      id: "q52",
      question: "Texto: <em>Durante décadas se creyó que el cerebro adulto era una estructura fija e inmutable.</em><br><br>¿Cuál es el significado de la palabra 'inmutable' en este contexto?",
      options: [
        "Muy grande y complejo",
        "Que no puede cambiar",
        "Difícil de estudiar científicamente",
      ],
      correctAnswer: 1,
      explanation: "'Inmutable' proviene del latín 'inmutabilis': que no puede ser cambiado o alterado. El texto lo usa para describir la creencia errónea de que el cerebro adulto no se modifica.",
    },
    // Q53 — Propósito de los ejemplos (C)
    {
      id: "q53",
      question: "Texto: <em>Investigaciones recientes demostraron la neuroplasticidad. Actividades como aprender un instrumento musical o un nuevo idioma generan cambios estructurales mensurables en el cerebro.</em><br><br>¿Por qué el autor menciona actividades específicas como aprender música o idiomas?",
      options: [
        "Para recomendar actividades de ocio sin relación con el tema.",
        "Para demostrar que solo los músicos pueden desarrollar neuroplasticidad.",
        "Para ejemplificar con casos concretos el fenómeno de la neuroplasticidad.",
      ],
      correctAnswer: 2,
      explanation: "Los ejemplos específicos (música, idiomas) tienen la función de ilustrar con casos concretos y verificables la idea abstracta de la neuroplasticidad.",
    },
    // Q54 — Implicación práctica (A)
    {
      id: "q54",
      question: "Texto: <em>El cerebro conserva la capacidad de reorganizarse formando nuevas conexiones neuronales a lo largo de toda la vida. Actividades como aprender música o un nuevo idioma generan cambios estructurales mensurables en el cerebro.</em><br><br>¿Qué implicación práctica puede derivarse de este descubrimiento para el aprendizaje?",
      options: [
        "Las personas pueden continuar aprendiendo y desarrollando habilidades a cualquier edad.",
        "Solo los niños tienen capacidad real de aprendizaje gracias al cerebro plástico.",
        "La neuroplasticidad es irrelevante para el proceso educativo formal.",
      ],
      correctAnswer: 0,
      explanation: "Si el cerebro adulto puede reorganizarse y formar nuevas conexiones, el aprendizaje no tiene un límite de edad; esto respalda el aprendizaje continuo a lo largo de la vida.",
    },

    // ── TEXTO 6: Escasez de agua (Q55-59) ────────────────────────
    // Q55 — Dato estadístico (B)
    {
      id: "q55",
      question: "Lee el siguiente texto:<br><br><em>El agua dulce representa solo el 2.5% del agua total del planeta; más del 68% de esa fracción está atrapada en glaciares y polos. Aunque es un recurso renovable gracias al ciclo hidrológico, su distribución es profundamente desigual. La ONU proyecta que para 2050, dos tercios de la humanidad vivirá en condiciones de estrés hídrico.</em><br><br>¿Qué porcentaje del agua dulce está retenido en glaciares y polos?",
      options: [
        "2.5%",
        "Más del 68%",
        "Un tercio",
      ],
      correctAnswer: 1,
      explanation: "El texto señala explícitamente que 'más del 68% de esa fracción [agua dulce] está atrapada en glaciares y polos'.",
    },
    // Q56 — Significado de "estrés hídrico" (C)
    {
      id: "q56",
      question: "Texto: <em>La ONU proyecta que para 2050, dos tercios de la humanidad vivirá en condiciones de estrés hídrico.</em><br><br>¿Qué significa 'estrés hídrico' según el contexto del texto?",
      options: [
        "Exceso de lluvias que provoca inundaciones masivas",
        "Contaminación del agua dulce por actividades industriales",
        "Situación de escasez o presión sobre los recursos de agua disponibles",
      ],
      correctAnswer: 2,
      explanation: "El contexto del texto, que trata sobre la escasez y distribución desigual del agua, indica que el estrés hídrico refiere a condiciones de insuficiencia o alta demanda de agua.",
    },
    // Q57 — Propósito del texto (A)
    {
      id: "q57",
      question: "Texto: <em>El agua dulce representa solo el 2.5% del agua total. Su distribución es desigual: unas regiones sufren inundaciones, otras padecen sequías. La ONU proyecta que para 2050, dos tercios de la humanidad vivirá en estrés hídrico.</em><br><br>¿Cuál es el propósito principal de este texto?",
      options: [
        "Informar sobre la escasez y distribución desigual del agua dulce en el mundo.",
        "Promover el consumo de agua embotellada como solución al estrés hídrico.",
        "Explicar el proceso químico de purificación del agua marina.",
      ],
      correctAnswer: 0,
      explanation: "El texto presenta datos sobre la limitada disponibilidad del agua dulce, su distribución inequitativa y las proyecciones futuras, con propósito informativo.",
    },
    // Q58 — Paradoja o contraste (B)
    {
      id: "q58",
      question: "Texto: <em>Aunque el agua es un recurso renovable gracias al ciclo hidrológico, su distribución es profundamente desigual: unas regiones sufren inundaciones, otras padecen sequías prolongadas.</em><br><br>¿Qué contraste o paradoja presenta el texto?",
      options: [
        "El agua es escasa en todo el planeta sin excepción.",
        "Siendo el agua renovable, su distribución desigual provoca tanto exceso como escasez según la región.",
        "Los glaciares contienen más agua que los océanos.",
      ],
      correctAnswer: 1,
      explanation: "La paradoja es que un recurso renovable no garantiza acceso equitativo: algunas regiones padecen exceso (inundaciones) mientras otras sufren escasez (sequías).",
    },
    // Q59 — Conclusión inferida (C)
    {
      id: "q59",
      question: "Texto: <em>El agua dulce representa solo el 2.5% del agua total; más del 68% está en glaciares. Su distribución es desigual. La ONU proyecta que para 2050, dos tercios de la humanidad vivirá en estrés hídrico.</em><br><br>¿Qué conclusión puede inferirse a partir de estos datos?",
      options: [
        "La crisis del agua ya fue resuelta gracias al ciclo hidrológico.",
        "Solo los países en desarrollo enfrentarán problemas de agua en el futuro.",
        "La gestión eficiente del agua es un desafío global urgente con implicaciones a largo plazo.",
      ],
      correctAnswer: 2,
      explanation: "La escasez del agua dulce accesible, su distribución desigual y las proyecciones de la ONU para 2050 apuntan a que administrar adecuadamente este recurso es un problema global y prioritario.",
    },

    // ══════════════════════════════════════════════════════════════
    // REDACCIÓN INDIRECTA (60-89) — Distribución A:10 B:10 C:10
    // ══════════════════════════════════════════════════════════════

    // ── Subárea Estudio ──────────────────────────────────────────

    // Q60 — Propósito del resumen ejecutivo (A)
    {
      id: "q60",
      question: "Lee el siguiente fragmento:<br><br><em>'El presente resumen ejecutivo tiene como objetivo sintetizar los hallazgos del estudio sobre la calidad del aire en zonas metropolitanas durante el periodo 2022-2024. Se identificaron tres factores principales que inciden en los niveles de contaminación...'</em><br><br>¿Cuál es el propósito principal de este texto?",
      options: [
        "Presentar de forma condensada los resultados más relevantes de un estudio",
        "Describir detalladamente la metodología utilizada en la investigación",
        "Argumentar a favor de nuevas políticas de control ambiental",
      ],
      correctAnswer: 0,
      explanation: "Un resumen ejecutivo tiene como función condensar los hallazgos principales para lectores que necesitan información concisa, sin entrar en detalles metodológicos.",
    },

    // Q61 — Registro formal en informe académico (B)
    {
      id: "q61",
      question: "¿Cuál de las siguientes oraciones tiene el registro formal adecuado para un informe académico?",
      options: [
        "Los resultados que obtuvimos fueron bastante buenos y nos pusieron muy contentos.",
        "Los resultados obtenidos demuestran una correlación positiva entre las variables estudiadas.",
        "Salió todo bien con el experimento y los datos tienen mucho sentido si los analizas.",
      ],
      correctAnswer: 1,
      explanation: "El registro formal académico requiere vocabulario preciso, construcciones impersonales y ausencia de expresiones coloquiales o subjetivas.",
    },

    // Q62 — Tipo de texto: reseña bibliográfica (C)
    {
      id: "q62",
      question: "Lee el siguiente fragmento:<br><br><em>'La obra Cien años de soledad, de Gabriel García Márquez, es considerada una de las más grandes novelas del siglo XX. En ella, el autor logra conjugar la historia de una familia con la de toda una nación...'</em><br><br>¿A qué tipo de texto pertenece este fragmento?",
      options: [
        "Artículo periodístico de nota informativa",
        "Monografía de investigación histórica",
        "Reseña bibliográfica",
      ],
      correctAnswer: 2,
      explanation: "La reseña bibliográfica analiza y valora una obra literaria, presentando sus características y méritos principales.",
    },

    // Q63 — Corrección gramatical: leísmo (A)
    {
      id: "q63",
      question: "¿Cuál de las siguientes oraciones presenta el uso correcto del pronombre de objeto directo?",
      options: [
        "El director lo felicitó por su desempeño. (refiriéndose a un alumno)",
        "El director le felicitó por su desempeño. (refiriéndose a un alumno)",
        "El director les felicitó a ambos alumnos. (refiriéndose a dos alumnos)",
      ],
      correctAnswer: 0,
      explanation: "El pronombre 'lo' es la forma correcta de objeto directo masculino singular. Usar 'le' como objeto directo (leísmo) es incorrecto en español estándar.",
    },

    // Q64 — Sinonimia: sucinto (B)
    {
      id: "q64",
      question: "¿Cuál de las siguientes palabras puede sustituir a **sucinto** sin cambiar el sentido en: *'El autor ofrece una explicación sucinta del fenómeno'*?",
      options: [
        "detallada",
        "concisa",
        "compleja",
      ],
      correctAnswer: 1,
      explanation: "'Sucinto' significa breve y preciso; 'concisa' es su sinónimo más adecuado en contexto académico.",
    },

    // Q65 — Marcador textual adversativo (C)
    {
      id: "q65",
      question: "Selecciona el marcador textual que mejor completa el siguiente párrafo:<br><br><em>'Las energías renovables reducen la emisión de gases contaminantes. ________, su implementación requiere inversiones iniciales significativas.'</em>",
      options: [
        "Además",
        "Por lo tanto",
        "Sin embargo",
      ],
      correctAnswer: 2,
      explanation: "'Sin embargo' es un conector adversativo que introduce una idea que contrasta con la anterior, apropiado para contrastar beneficios con desventajas.",
    },

    // Q66 — Ortografía: uso correcto de h y v (A)
    {
      id: "q66",
      question: "¿Cuál de las siguientes palabras está escrita correctamente?",
      options: [
        "hervir",
        "herbir",
        "ervir",
      ],
      correctAnswer: 0,
      explanation: "El verbo 'hervir' se escribe con h inicial y v en su raíz, siguiendo la ortografía estándar del español.",
    },

    // Q67 — Puntuación: punto y coma en enumeración compleja (B)
    {
      id: "q67",
      question: "¿En cuál de las siguientes oraciones se usa correctamente el punto y coma?",
      options: [
        "Se presentaron tres ponentes; y todos abordaron el mismo tema.",
        "La primera parte fue teórica; la segunda, práctica; y la tercera, evaluativa.",
        "El proyecto fue exitoso; gracias al esfuerzo del equipo.",
      ],
      correctAnswer: 1,
      explanation: "El punto y coma separa correctamente los elementos de una enumeración compleja cuando esos elementos ya contienen comas internas.",
    },

    // Q68 — Tilde diacrítica: él/el, tú/tu, más/mas (C)
    {
      id: "q68",
      question: "Elige la oración donde todas las tildes diacríticas están escritas correctamente:",
      options: [
        "Él no sabe si tú vendrás, más ya se lo notifiqué.",
        "El no sabe si tu vendrás, más ya se lo notifiqué.",
        "Él no sabe si tú vendrás, mas ya se lo notifiqué.",
      ],
      correctAnswer: 2,
      explanation: "'Él' (pronombre) y 'tú' (pronombre) llevan tilde; 'mas' sin tilde equivale a la conjunción adversativa 'pero', mientras que 'más' con tilde es adverbio de cantidad.",
    },

    // Q69 — Correferencia pronominal (A)
    {
      id: "q69",
      question: "¿Cuál de las siguientes oraciones presenta correferencia pronominal correcta?",
      options: [
        "La investigadora presentó sus conclusiones; ella misma respondió las preguntas.",
        "La investigadora presentó sus conclusiones; este respondió las preguntas.",
        "La investigadora presentó sus conclusiones; aquél respondió las preguntas.",
      ],
      correctAnswer: 0,
      explanation: "'Ella misma' retoma correctamente al referente femenino 'la investigadora'. Las formas 'este' y 'aquél' son incorrectas porque no concuerdan en género.",
    },

    // Q70 — Concordancia con sujeto colectivo (B)
    {
      id: "q70",
      question: "¿Cuál de las siguientes oraciones presenta concordancia correcta entre sujeto y verbo?",
      options: [
        "La mayoría de los estudiantes aprobaron el examen.",
        "La mayoría de los estudiantes aprobó el examen.",
        "La mayoría de los estudiante aprobaron el examen.",
      ],
      correctAnswer: 1,
      explanation: "Cuando el sujeto es un nombre colectivo como 'la mayoría', el verbo concuerda en singular con el núcleo del sujeto.",
    },

    // Q71 — Propósito del abstract (C)
    {
      id: "q71",
      question: "Lee el siguiente fragmento:<br><br><em>'Este artículo analiza los efectos del cambio climático en la biodiversidad marina del Pacífico mexicano entre 2015 y 2023. Se empleó una metodología cuantitativa basada en datos satelitales. Los resultados indican una reducción del 18% en la diversidad de especies...'</em><br><br>¿A qué parte de un artículo científico pertenece este fragmento?",
      options: [
        "Marco teórico",
        "Conclusiones",
        "Resumen (abstract)",
      ],
      correctAnswer: 2,
      explanation: "El resumen o abstract presenta de forma compacta el objetivo, la metodología y los resultados principales del artículo científico.",
    },

    // Q72 — Coma antes de "pero" (A)
    {
      id: "q72",
      question: "¿En cuál de las siguientes oraciones se usa correctamente la coma?",
      options: [
        "Estudié toda la noche, pero no logré aprobar el examen.",
        "Estudié toda la noche pero, no logré aprobar el examen.",
        "Estudié, toda la noche pero no logré aprobar el examen.",
      ],
      correctAnswer: 0,
      explanation: "La coma se coloca antes de la conjunción adversativa 'pero' cuando une dos proposiciones completas.",
    },

    // Q73 — Marcador adversativo: no obstante (B)
    {
      id: "q73",
      question: "Selecciona el marcador textual que mejor completa la oración:<br><br><em>'El proyecto contaba con amplio financiamiento. ________, no pudo concluirse en el tiempo establecido.'</em>",
      options: [
        "Por consiguiente",
        "No obstante",
        "Asimismo",
      ],
      correctAnswer: 1,
      explanation: "'No obstante' es un conector adversativo que introduce una idea que contradice o limita lo expresado anteriormente.",
    },

    // Q74 — Ortografía: imperfecto con -b- (C)
    {
      id: "q74",
      question: "¿Cuál de las siguientes formas verbales está escrita correctamente?",
      options: [
        "Ayer, el equipo rezibia instrucciones del coordinador.",
        "Ayer, el equipo recivía instrucciones del coordinador.",
        "Ayer, el equipo recibía instrucciones del coordinador.",
      ],
      correctAnswer: 2,
      explanation: "Las terminaciones del imperfecto de indicativo (-aba, -ía) se escriben con b. El verbo 'recibir' mantiene su raíz con b.",
    },

    // Q75 — Registro formal en carta académica (A)
    {
      id: "q75",
      question: "¿Cuál de los siguientes cierres es adecuado para una carta formal dirigida a una institución académica?",
      options: [
        "En espera de una respuesta favorable, quedo a sus órdenes. Atentamente,",
        "Ojalá me contesten pronto. Un saludo,",
        "Espero que todo esté bien por allá. Hasta pronto,",
      ],
      correctAnswer: 0,
      explanation: "El cierre de una carta formal debe incluir una fórmula de cortesía estándar ('Atentamente') y un tono institucional apropiado.",
    },

    // ── Subárea Participación Social ────────────────────────────

    // Q76 — Sinonimia: reiterado (B)
    {
      id: "q76",
      question: "¿Cuál de las siguientes palabras puede sustituir a **reiterado** sin cambiar el sentido en: *'El comité hizo reiterados llamados a la calma'*?",
      options: [
        "esporádicos",
        "repetidos",
        "únicos",
      ],
      correctAnswer: 1,
      explanation: "'Reiterado' significa que ocurre varias veces; 'repetidos' es su sinónimo más preciso en ese contexto.",
    },

    // Q77 — Corrección de voz pasiva (C)
    {
      id: "q77",
      question: "¿Cuál de las siguientes oraciones está escrita correctamente en voz pasiva?",
      options: [
        "El informe fue redactado por los investigadores haber revisado los datos.",
        "El informe fue redactando por los investigadores tras revisar los datos.",
        "El informe fue redactado por los investigadores tras revisar los datos.",
      ],
      correctAnswer: 2,
      explanation: "La voz pasiva se forma con el auxiliar 'ser' + participio pasado. 'Redactado' es el participio correcto de 'redactar'; las otras opciones contienen errores en la forma verbal.",
    },

    // Q78 — Propósito de convocatoria (A)
    {
      id: "q78",
      question: "Lee el siguiente fragmento:<br><br><em>'Se invita a todos los estudiantes de nivel medio superior a participar en el Concurso Nacional de Ciencia y Tecnología. Las bases y requisitos pueden consultarse en el portal oficial. La fecha límite de inscripción es el 30 de noviembre.'</em><br><br>¿Cuál es el propósito de este texto?",
      options: [
        "Informar y convocar a participar en un evento específico",
        "Explicar los criterios de evaluación del concurso",
        "Argumentar sobre la importancia de la ciencia en la educación media",
      ],
      correctAnswer: 0,
      explanation: "Una convocatoria tiene como propósito principal llamar a la participación e informar sobre las condiciones y plazos del evento.",
    },

    // Q79 — Registro en boletín informativo institucional (B)
    {
      id: "q79",
      question: "¿Cuál de las siguientes oraciones tiene el registro adecuado para un boletín informativo de una dependencia gubernamental?",
      options: [
        "¡Ojo! Las obras en la avenida principal están tardando un chorro.",
        "Las obras de mantenimiento vial en la avenida principal concluirán el próximo viernes.",
        "Ya casi terminan las obras esas de la avenida, dice que el viernes acaban.",
      ],
      correctAnswer: 1,
      explanation: "El boletín informativo institucional requiere lenguaje formal, objetivo y preciso, sin expresiones coloquiales o informales.",
    },

    // Q80 — Tipo de texto: artículo de opinión (C)
    {
      id: "q80",
      question: "Lee el siguiente fragmento:<br><br><em>'La educación presencial no puede ni debe ser reemplazada por la educación en línea. Si bien la tecnología ofrece herramientas valiosas, la interacción humana directa es irreemplazable para el desarrollo integral del estudiante.'</em><br><br>¿A qué tipo de texto pertenece este fragmento?",
      options: [
        "Nota informativa",
        "Reporte científico",
        "Artículo de opinión",
      ],
      correctAnswer: 2,
      explanation: "El artículo de opinión expresa el punto de vista del autor sobre un tema, con argumentos que defienden una postura específica.",
    },

    // Q81 — Concordancia de número (A)
    {
      id: "q81",
      question: "¿Cuál de las siguientes oraciones presenta concordancia de número correcta?",
      options: [
        "Los alumnos que participaron en el torneo obtuvieron reconocimientos.",
        "Los alumnos que participó en el torneo obtuvieron reconocimientos.",
        "Los alumno que participaron en el torneo obtuvo reconocimientos.",
      ],
      correctAnswer: 0,
      explanation: "El sujeto plural 'los alumnos' requiere verbo en plural 'participaron' y complemento en plural 'reconocimientos'.",
    },

    // Q82 — Antonimia: aprobación (B)
    {
      id: "q82",
      question: "¿Cuál es el antónimo más adecuado de **aprobación** en el contexto: *'La propuesta recibió la aprobación del consejo directivo'*?",
      options: [
        "validación",
        "rechazo",
        "confirmación",
      ],
      correctAnswer: 1,
      explanation: "'Rechazo' se opone directamente a 'aprobación', ya que implica no aceptar algo, mientras que 'validación' y 'confirmación' son sinónimos.",
    },

    // Q83 — Marcador aditivo: además (C)
    {
      id: "q83",
      question: "Selecciona el marcador textual que mejor completa el párrafo:<br><br><em>'El nuevo reglamento prohíbe el uso de dispositivos electrónicos en el aula. ________, establece sanciones para quienes incumplan la norma.'</em>",
      options: [
        "Sin embargo",
        "Por lo tanto",
        "Además",
      ],
      correctAnswer: 2,
      explanation: "'Además' es un conector aditivo que introduce información que se suma a la ya presentada, apropiado cuando se agregan más restricciones.",
    },

    // Q84 — Ortografía: cónyuge (A)
    {
      id: "q84",
      question: "¿Cuál de las siguientes palabras está escrita correctamente?",
      options: [
        "cónyuge",
        "cóniuge",
        "cóniyuge",
      ],
      correctAnswer: 0,
      explanation: "La palabra 'cónyuge' se escribe con 'y', siguiendo la ortografía estándar del español para esa voz.",
    },

    // Q85 — Dos puntos antes de enumeración (B)
    {
      id: "q85",
      question: "¿En cuál de las siguientes oraciones se usan correctamente los dos puntos?",
      options: [
        "Traerás lo siguiente, cuaderno, lápiz y borrador.",
        "Traerás lo siguiente: cuaderno, lápiz y borrador.",
        "Traerás lo siguiente; cuaderno, lápiz y borrador.",
      ],
      correctAnswer: 1,
      explanation: "Los dos puntos se usan antes de una enumeración anunciada por expresiones como 'lo siguiente', 'los siguientes', 'a saber', etc.",
    },

    // Q86 — Tilde diacrítica: más/mas (C)
    {
      id: "q86",
      question: "¿En cuál de las siguientes oraciones se usa correctamente la tilde en **más / mas**?",
      options: [
        "Quiero más café, más ya no hay.",
        "Quiero mas café, mas ya no hay.",
        "Quiero más café, mas ya no hay.",
      ],
      correctAnswer: 2,
      explanation: "'Más' (con tilde) es el adverbio de cantidad; 'mas' (sin tilde) es la conjunción adversativa equivalente a 'pero'.",
    },

    // Q87 — Elipsis nominal (A)
    {
      id: "q87",
      question: "¿Cuál de las siguientes oraciones hace uso correcto de la elipsis nominal?",
      options: [
        "Juan presentó su proyecto; María, el suyo.",
        "Juan presentó su proyecto; María presentó el suyo proyecto.",
        "Juan presentó su proyecto; María lo presentó también proyecto.",
      ],
      correctAnswer: 0,
      explanation: "La elipsis consiste en omitir elementos ya mencionados sin pérdida de significado. 'María, el suyo' omite correctamente el verbo 'presentó'.",
    },

    // Q88 — Registro en circular laboral (B)
    {
      id: "q88",
      question: "¿Cuál de las siguientes opciones tiene el registro adecuado para una circular laboral?",
      options: [
        "Oigan, por favor recuerden que mañana hay junta, no falten.",
        "Se les comunica que el día de mañana se llevará a cabo una reunión de trabajo obligatoria.",
        "Hey equipo, mañana tenemos junta, así que todos presentes, ¿ok?",
      ],
      correctAnswer: 1,
      explanation: "Una circular laboral requiere lenguaje formal, impersonal y claro, característico de la comunicación organizacional escrita.",
    },

    // Q89 — Sinonimia: propicio (C)
    {
      id: "q89",
      question: "¿Cuál de las siguientes palabras puede sustituir a **propicio** sin cambiar el sentido en: *'El clima propicio permitió el avance de las negociaciones'*?",
      options: [
        "adverso",
        "indiferente",
        "favorable",
      ],
      correctAnswer: 2,
      explanation: "'Propicio' significa conveniente o que favorece algo; 'favorable' es su sinónimo más adecuado en ese contexto.",
    },

    // ══════════════════════════════════════════════════════════════
    // PENSAMIENTO MATEMÁTICO (90-129) — Distribución A:14 B:13 C:13
    // ══════════════════════════════════════════════════════════════

    // Q90 — Sistema de ecuaciones: punto de intersección (C)
    {
      id: "q90",
      question: "La gráfica muestra las rectas y = x − 1 e y = −x + 3. ¿Cuáles son las coordenadas del punto de intersección?",
      options: [
        "(1, 0)",
        "(0, 3)",
        "(2, 1)",
      ],
      correctAnswer: 2,
      explanation: "Igualando: x − 1 = −x + 3 → 2x = 4 → x = 2. Sustituyendo: y = 2 − 1 = 1. La intersección es (2, 1).",
      diagram: D.intersect,
    },

    // Q91 — Sucesión cuadrática (A)
    {
      id: "q91",
      question: "¿Cuál es el siguiente término de la sucesión: 2, 5, 10, 17, 26, ...?",
      options: [
        "37",
        "35",
        "39",
      ],
      correctAnswer: 0,
      explanation: "Las diferencias entre términos son 3, 5, 7, 9, 11 (incrementan en 2). El siguiente término es 26 + 11 = 37.",
    },

    // Q92 — Porcentaje de descuento (B)
    {
      id: "q92",
      question: "Un artículo cuesta $480. Si se aplica un descuento del 25%, ¿cuál es el precio final?",
      options: [
        "$400",
        "$360",
        "$340",
      ],
      correctAnswer: 1,
      explanation: "Precio final = $480 × (1 − 0.25) = $480 × 0.75 = $360.",
    },

    // Q93 — Venn: elementos en A∪B (A)
    {
      id: "q93",
      question: "El diagrama de Venn muestra los estudiantes que participan en las actividades A y B. ¿Cuántos estudiantes pertenecen a A ∪ B?",
      options: [
        "30",
        "22",
        "18",
      ],
      correctAnswer: 0,
      explanation: "A ∪ B = solo A + A∩B + solo B = 12 + 8 + 10 = 30 estudiantes.",
      diagram: D.venn,
    },

    // Q94 — Desigualdad en recta numérica (C)
    {
      id: "q94",
      question: "La recta numérica muestra la solución de una desigualdad con el extremo cerrado en x = 1 y sombreado hacia la derecha. ¿Cuál expresión representa esa solución?",
      options: [
        "x < 1",
        "x > 1",
        "x ≥ 1",
      ],
      correctAnswer: 2,
      explanation: "El círculo cerrado (relleno) en x = 1 indica que ese valor se incluye, y el sombreado hacia la derecha indica valores mayores o iguales a 1.",
      diagram: D.numline,
    },

    // Q95 — Gráfica de barras: día con más ventas (B)
    {
      id: "q95",
      question: "Según la gráfica de barras, ¿en qué día se registró el mayor número de ventas?",
      options: [
        "Martes",
        "Jueves",
        "Viernes",
      ],
      correctAnswer: 1,
      explanation: "La barra del Jueves es la más alta en la gráfica, indicando el mayor volumen de ventas de la semana.",
      diagram: D.barchart,
    },

    // Q96 — Área del anillo entre dos circunferencias concéntricas (A)
    {
      id: "q96",
      question: "La figura muestra dos circunferencias concéntricas con R = 8 cm y r = 5 cm. ¿Cuál es el área de la región sombreada entre ellas?",
      options: [
        "39π cm²",
        "25π cm²",
        "64π cm²",
      ],
      correctAnswer: 0,
      explanation: "Área del anillo = π(R² − r²) = π(64 − 25) = 39π cm².",
      diagram: D.donut,
    },

    // Q97 — Cuadrículas 4×4: mayor proporción sombreada (C)
    {
      id: "q97",
      question: "Las tres figuras muestran cuadrículas de 4 × 4 con distintas regiones sombreadas. ¿En cuál figura la proporción del área sombreada es mayor?",
      options: [
        "Figura A (4 celdas sombreadas)",
        "Figura B (6 celdas sombreadas)",
        "Figura C (8 celdas sombreadas)",
      ],
      correctAnswer: 2,
      explanation: "Figura A: 4/16 = 1/4. Figura B: 6/16 = 3/8. Figura C: 8/16 = 1/2. La mayor proporción es 1/2, correspondiente a la figura C.",
      diagram: D.grid2,
    },

    // Q98 — Área de triángulo en cuadrícula de puntos (B)
    {
      id: "q98",
      question: "En la cuadrícula de puntos (distancia entre puntos = 1 u), el triángulo tiene vértices en (0,0), (4,0) y (1,3). ¿Cuál es su área?",
      options: [
        "4 u²",
        "6 u²",
        "8 u²",
      ],
      correctAnswer: 1,
      explanation: "Área = ½|x₀(y₁−y₂) + x₁(y₂−y₀) + x₂(y₀−y₁)| = ½|0(0−3) + 4(3−0) + 1(0−0)| = ½|12| = 6 u².",
      diagram: D.grid6,
    },

    // Q99 — Proporcionalidad inversa (A)
    {
      id: "q99",
      question: "Si 3 trabajadores completan una tarea en 12 días, ¿en cuántos días la completarán 4 trabajadores? (misma tarea, sin parar)",
      options: [
        "9 días",
        "16 días",
        "8 días",
      ],
      correctAnswer: 0,
      explanation: "Trabajo total = 3 × 12 = 36 días-hombre. Con 4 trabajadores: 36 ÷ 4 = 9 días.",
    },

    // Q100 — Área de figura compuesta (C)
    {
      id: "q100",
      question: "Un rectángulo mide 10 cm × 6 cm. Se recorta un triángulo rectángulo de base 4 cm y altura 3 cm de una esquina. ¿Cuál es el área restante?",
      options: [
        "48 cm²",
        "52 cm²",
        "54 cm²",
      ],
      correctAnswer: 2,
      explanation: "Área del rectángulo = 60 cm². Área del triángulo = ½ × 4 × 3 = 6 cm². Área restante = 60 − 6 = 54 cm².",
    },

    // Q101 — Sistema de ecuaciones: método de suma (B)
    {
      id: "q101",
      question: "Resuelve el sistema de ecuaciones: 2x + y = 7 y x − y = 2.",
      options: [
        "x = 2, y = 3",
        "x = 3, y = 1",
        "x = 4, y = −1",
      ],
      correctAnswer: 1,
      explanation: "Sumando las ecuaciones: 3x = 9 → x = 3. Sustituyendo: y = 7 − 2(3) = 1. Solución: (3, 1).",
    },

    // Q102 — Área sombreada en cuadrado con triángulos (A)
    {
      id: "q102",
      question: "El cuadrado de la figura tiene lado 10 cm. Los cuatro triángulos sombreados tienen un vértice en el centro y sus bases en los lados del cuadrado. ¿Cuál es el área total sombreada?",
      options: [
        "50 cm²",
        "40 cm²",
        "25 cm²",
      ],
      correctAnswer: 0,
      explanation: "Cada triángulo tiene base 5 cm y altura 5 cm, por lo que su área = ½ × 5 × 5 = 12.5 cm². Los 4 triángulos suman 50 cm², que es la mitad del cuadrado.",
      diagram: D.sq11,
    },

    // Q103 — Factorización de trinomio (C)
    {
      id: "q103",
      question: "¿Cuál es la factorización correcta de x² − 9x + 20?",
      options: [
        "(x + 4)(x + 5)",
        "(x − 4)(x + 5)",
        "(x − 4)(x − 5)",
      ],
      correctAnswer: 2,
      explanation: "(x − 4)(x − 5) = x² − 5x − 4x + 20 = x² − 9x + 20 ✓. Se buscan dos números cuyo producto es +20 y cuya suma es −9: −4 y −5.",
    },

    // Q104 — Cuadrado grande dividido: lado del cuadrado central (B)
    {
      id: "q104",
      question: "La figura muestra un cuadrado de lado 10 cm dividido en cuatro rectángulos de 6 cm × 4 cm y un cuadrado central marcado con ?. ¿Cuánto mide el lado del cuadrado central?",
      options: [
        "4 cm",
        "2 cm",
        "3 cm",
      ],
      correctAnswer: 1,
      explanation: "Área total = 10² = 100 cm². Área de los 4 rectángulos = 4 × (6 × 4) = 96 cm². Área central = 100 − 96 = 4 cm². Lado = √4 = 2 cm.",
      diagram: D.sq8,
    },

    // Q105 — Probabilidad clásica con dado (A)
    {
      id: "q105",
      question: "Se lanza un dado equilibrado de 6 caras. ¿Cuál es la probabilidad de obtener un número par?",
      options: [
        "1/2",
        "1/3",
        "2/3",
      ],
      correctAnswer: 0,
      explanation: "Los números pares son 2, 4 y 6: tres casos favorables de seis posibles. P = 3/6 = 1/2.",
    },

    // Q106 — Ecuación de primer grado (C)
    {
      id: "q106",
      question: "Resuelve: 3(x − 2) + 5 = 2x + 4",
      options: [
        "x = 3",
        "x = 7",
        "x = 5",
      ],
      correctAnswer: 2,
      explanation: "3x − 6 + 5 = 2x + 4 → 3x − 1 = 2x + 4 → x = 5. Verificación: 3(3) + 5 = 14 = 2(5) + 4 ✓.",
    },

    // Q107 — Moda y mediana (B)
    {
      id: "q107",
      question: "Para el conjunto: 4, 7, 3, 7, 5, 7, 2, 5 — ¿cuáles son la moda y la mediana, respectivamente?",
      options: [
        "Moda = 5, mediana = 7",
        "Moda = 7, mediana = 5",
        "Moda = 7, mediana = 4.5",
      ],
      correctAnswer: 1,
      explanation: "Ordenados: 2, 3, 4, 5, 5, 7, 7, 7. Moda = 7 (aparece 3 veces). Mediana = promedio de 4° y 5° valores = (5+5)/2 = 5.",
    },

    // Q108 — Razones y proporciones (A)
    {
      id: "q108",
      question: "En una escuela la razón maestros : alumnos es 1 : 25. Si hay 600 alumnos, ¿cuántos maestros hay?",
      options: [
        "24",
        "20",
        "30",
      ],
      correctAnswer: 0,
      explanation: "Maestros = 600 ÷ 25 = 24.",
    },

    // Q109 — Regla de tres compuesta (C)
    {
      id: "q109",
      question: "Si 5 obreros construyen 3 m de muro en 4 horas, ¿cuántos metros construirán 10 obreros en 2 horas?",
      options: [
        "6 m",
        "4 m",
        "3 m",
      ],
      correctAnswer: 2,
      explanation: "Más obreros → más metros (directa); menos horas → menos metros (directa). M = 3 × (10/5) × (2/4) = 3 × 2 × 0.5 = 3 m.",
    },

    // Q110 — Leyes de exponentes (B)
    {
      id: "q110",
      question: "¿Cuál es el valor de (2³)² ÷ 2⁴?",
      options: [
        "8",
        "4",
        "2",
      ],
      correctAnswer: 1,
      explanation: "(2³)² = 2⁶ = 64. Luego 64 ÷ 2⁴ = 64 ÷ 16 = 4.",
    },

    // Q111 — Pendiente de una recta (A)
    {
      id: "q111",
      question: "¿Cuál es la pendiente de la recta que pasa por los puntos (1, 3) y (4, 9)?",
      options: [
        "2",
        "3",
        "1/2",
      ],
      correctAnswer: 0,
      explanation: "m = (y₂ − y₁)/(x₂ − x₁) = (9 − 3)/(4 − 1) = 6/3 = 2.",
    },

    // Q112 — Raíces de ecuación cuadrática (C)
    {
      id: "q112",
      question: "¿Cuáles son las soluciones de x² − 5x + 6 = 0?",
      options: [
        "x = 1 y x = 6",
        "x = −2 y x = −3",
        "x = 2 y x = 3",
      ],
      correctAnswer: 2,
      explanation: "Factorizando: (x − 2)(x − 3) = 0 → x = 2 o x = 3. Verificación: 2·3 = 6 ✓ y 2+3 = 5 ✓.",
    },

    // Q113 — Suma de progresión aritmética (B)
    {
      id: "q113",
      question: "¿Cuál es la suma de los primeros 10 términos de la sucesión 1, 4, 7, 10, ...?",
      options: [
        "130",
        "145",
        "160",
      ],
      correctAnswer: 1,
      explanation: "a₁ = 1, d = 3, n = 10. S = n/2 × (2a₁ + (n−1)d) = 5 × (2 + 27) = 5 × 29 = 145.",
    },

    // Q114 — Razón trigonométrica: cateto opuesto (A)
    {
      id: "q114",
      question: "En un triángulo rectángulo, el ángulo A = 30° y la hipotenusa mide 10 cm. ¿Cuánto mide el cateto opuesto al ángulo A?",
      options: [
        "5 cm",
        "8.66 cm",
        "10 cm",
      ],
      correctAnswer: 0,
      explanation: "sen(30°) = cateto opuesto / hipotenusa → cateto = 10 × 0.5 = 5 cm.",
    },

    // Q115 — Logaritmo en base 2 (C)
    {
      id: "q115",
      question: "¿Cuál es el valor de log₂(32)?",
      options: [
        "3",
        "4",
        "5",
      ],
      correctAnswer: 2,
      explanation: "log₂(32) = log₂(2⁵) = 5, ya que 2⁵ = 32.",
    },

    // Q116 — Valor numérico de expresión algebraica (B)
    {
      id: "q116",
      question: "Si a = 2 y b = −3, ¿cuál es el valor de 2a² − b?",
      options: [
        "5",
        "11",
        "13",
      ],
      correctAnswer: 1,
      explanation: "2(2²) − (−3) = 2(4) + 3 = 8 + 3 = 11.",
    },

    // Q117 — Distancia entre dos puntos (A)
    {
      id: "q117",
      question: "¿Cuál es la distancia entre los puntos P(1, 2) y Q(4, 6)?",
      options: [
        "5",
        "7",
        "4",
      ],
      correctAnswer: 0,
      explanation: "d = √((4−1)² + (6−2)²) = √(9 + 16) = √25 = 5.",
    },

    // Q118 — Área de círculo con π ≈ 22/7 (C)
    {
      id: "q118",
      question: "¿Cuál es el área de un círculo con radio 7 cm? (usa π ≈ 22/7)",
      options: [
        "44 cm²",
        "77 cm²",
        "154 cm²",
      ],
      correctAnswer: 2,
      explanation: "A = πr² = (22/7) × 7² = (22/7) × 49 = 22 × 7 = 154 cm².",
    },

    // Q119 — Ecuación con fracciones (B)
    {
      id: "q119",
      question: "Resuelve: 1/x + 1/2 = 3/4",
      options: [
        "x = 2",
        "x = 4",
        "x = 8",
      ],
      correctAnswer: 1,
      explanation: "1/x = 3/4 − 1/2 = 3/4 − 2/4 = 1/4 → x = 4.",
    },

    // Q120 — Radical: raíz cuarta (A)
    {
      id: "q120",
      question: "¿Cuál es el valor de ⁴√81?",
      options: [
        "3",
        "4",
        "9",
      ],
      correctAnswer: 0,
      explanation: "81 = 3⁴, por lo tanto ⁴√81 = 3.",
    },

    // Q121 — Probabilidad de evento compuesto (C)
    {
      id: "q121",
      question: "Se lanza una moneda y un dado de 6 caras. ¿Cuál es la probabilidad de obtener cara y un número mayor que 4?",
      options: [
        "1/4",
        "1/3",
        "1/6",
      ],
      correctAnswer: 2,
      explanation: "P(cara) = 1/2. P(número > 4) = 2/6 = 1/3 (solo 5 o 6). P(ambos) = 1/2 × 1/3 = 1/6.",
    },

    // Q122 — Notación de conjuntos por comprensión (B)
    {
      id: "q122",
      question: "¿Cuál es la notación por comprensión correcta para el conjunto {2, 4, 6, 8, 10}?",
      options: [
        "{x | x es par y 0 < x ≤ 12}",
        "{x | x es número par y 0 < x ≤ 10}",
        "{x | x es impar y x < 11}",
      ],
      correctAnswer: 1,
      explanation: "La condición 'par y 0 < x ≤ 10' genera exactamente los elementos 2, 4, 6, 8, 10. La opción A incluiría también el 12.",
    },

    // Q123 — Simplificación de fracción algebraica (A)
    {
      id: "q123",
      question: "Simplifica la expresión: (x² − 4) / (x + 2), para x ≠ −2.",
      options: [
        "x − 2",
        "x + 2",
        "x² − 2",
      ],
      correctAnswer: 0,
      explanation: "x² − 4 = (x+2)(x−2). Entonces (x+2)(x−2)/(x+2) = x − 2.",
    },

    // Q124 — Área de trapecio (C)
    {
      id: "q124",
      question: "Un trapecio tiene bases de 8 cm y 12 cm, y una altura de 5 cm. ¿Cuál es su área?",
      options: [
        "40 cm²",
        "45 cm²",
        "50 cm²",
      ],
      correctAnswer: 2,
      explanation: "A = ½ × (b₁ + b₂) × h = ½ × (8 + 12) × 5 = ½ × 20 × 5 = 50 cm².",
    },

    // Q125 — Conversión de unidades: litros a metros cúbicos (B)
    {
      id: "q125",
      question: "Una piscina tiene capacidad de 45,000 litros. ¿A cuántos metros cúbicos equivale?",
      options: [
        "4.5 m³",
        "45 m³",
        "450 m³",
      ],
      correctAnswer: 1,
      explanation: "1 m³ = 1,000 L. Entonces 45,000 L ÷ 1,000 = 45 m³.",
    },

    // Q126 — Ecuación con fracciones (A)
    {
      id: "q126",
      question: "Resuelve: x/2 + 3 = (x + 10)/4",
      options: [
        "x = −2",
        "x = 2",
        "x = 4",
      ],
      correctAnswer: 0,
      explanation: "Multiplicando por 4: 2x + 12 = x + 10 → 2x − x = 10 − 12 → x = −2.",
    },

    // Q127 — Dominio de función radical (C)
    {
      id: "q127",
      question: "¿Cuál es el dominio de la función f(x) = √(x − 3)?",
      options: [
        "x > 0",
        "x ≥ 0",
        "x ≥ 3",
      ],
      correctAnswer: 2,
      explanation: "Para que la raíz cuadrada esté definida se necesita x − 3 ≥ 0, es decir x ≥ 3.",
    },

    // Q128 — Suma de fracciones algebraicas (B)
    {
      id: "q128",
      question: "Simplifica: 1/x + 1/(x + 1)",
      options: [
        "2/(2x + 1)",
        "(2x + 1) / (x(x + 1))",
        "2/x²",
      ],
      correctAnswer: 1,
      explanation: "Mínimo común denominador x(x+1): (x+1)/(x(x+1)) + x/(x(x+1)) = (2x+1)/(x(x+1)).",
    },

    // Q129 — Variación directa (A)
    {
      id: "q129",
      question: "Si y varía directamente con x, y cuando x = 4 el valor de y = 12, ¿cuál es y cuando x = 7?",
      options: [
        "21",
        "28",
        "18",
      ],
      correctAnswer: 0,
      explanation: "Constante de proporcionalidad k = y/x = 12/4 = 3. Para x = 7: y = 3 × 7 = 21.",
    },

  ],
};
