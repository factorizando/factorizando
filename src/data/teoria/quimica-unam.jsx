import { useState, useEffect } from "react";
import { M, MB, StepRow, EjCard, QzCard, SHARED_STYLE } from "./shared";

/* ── QUÍMICA-SPECIFIC STYLES ─────────────────────────────────────────────────── */

const QUIMICA_STYLE = `
  .tabla-quim { width: 100%; border-collapse: collapse; margin: 14px 0; font-size: 14px; }
  .tabla-quim th { background: rgba(245,200,66,0.12); color: #f5c842; font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; padding: 10px 14px; text-align: left; border-bottom: 1px solid rgba(245,200,66,0.2); }
  .tabla-quim td { padding: 9px 14px; color: #a09880; border-bottom: 1px solid rgba(255,255,255,0.05); font-weight: 300; line-height: 1.5; }
  .tabla-quim tr:hover td { background: rgba(255,255,255,0.03); }
  .tabla-quim .dest { color: #e0dcd4; font-weight: 500; }
  .prop-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 12px; }
  @media(max-width:560px){ .prop-grid { grid-template-columns: 1fr; } }
  .prop-card { background: rgba(0,0,0,0.28); border: 1px solid rgba(255,255,255,0.07); border-radius: 8px; padding: 16px 18px; }
  .prop-card:hover { border-color: rgba(245,200,66,0.18); }
  .prop-label { font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.16em; color: rgba(245,200,66,0.6); text-transform: uppercase; margin-bottom: 6px; }
  .prop-value { font-size: 15px; color: #e0dcd4; font-weight: 500; }
  .prop-desc  { font-size: 13px; color: #7a756e; margin-top: 4px; line-height: 1.5; font-weight: 300; }
  .reac-box { background: rgba(0,0,0,0.35); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 14px 18px; margin: 10px 0; font-family: 'IBM Plex Mono', monospace; font-size: 13.5px; color: #c8c0b0; line-height: 2; }
  .reac-label { font-size: 10px; letter-spacing: 0.18em; color: rgba(245,200,66,0.5); text-transform: uppercase; margin-bottom: 6px; }
  .tema-tag { display: inline-flex; align-items: center; gap: 6px; font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.15em; padding: 3px 10px; border-radius: 2px; text-transform: uppercase; }
  .tag-azul  { background: rgba(100,144,245,0.1); color: #6490f5; border: 1px solid rgba(100,144,245,0.25); }
  .tag-verde { background: rgba(100,200,130,0.1); color: #7dc89a; border: 1px solid rgba(100,200,130,0.25); }
  .tag-rojo  { background: rgba(240,100,90,0.1);  color: #f08080; border: 1px solid rgba(240,100,90,0.25); }
  .tag-oro   { background: rgba(245,200,66,0.1);  color: #f5c842; border: 1px solid rgba(245,200,66,0.25); }
  .org-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 14px 0; }
  @media(max-width:600px){ .org-grid { grid-template-columns: 1fr; } }
  .org-card { background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.07); border-radius: 8px; padding: 14px; transition: border-color 0.2s; }
  .org-card:hover { border-color: rgba(245,200,66,0.2); }
  .org-name { font-family: 'Playfair Display', serif; font-size: 14px; color: #f0ece3; font-style: italic; margin-bottom: 4px; }
  .org-formula { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: #f5c842; margin-bottom: 6px; }
  .org-desc { font-size: 12.5px; color: #7a756e; line-height: 1.5; font-weight: 300; }
  .decision-step { display: flex; gap: 16px; margin-bottom: 16px; align-items: flex-start; }
  .decision-num { flex-shrink:0; width:26px; height:26px; border-radius:50%; background: rgba(245,200,66,0.12); border: 1px solid rgba(245,200,66,0.3); display:flex; align-items:center; justify-content:center; font-family:'IBM Plex Mono',monospace; font-size:11px; color:#f5c842; margin-top:2px; }
  .decision-body { flex: 1; }
  .decision-q { font-size:15px; color:#e0dcd4; font-weight:600; margin-bottom:5px; }
  .decision-si { font-size:13.5px; color:#7dc89a; margin-bottom:3px; }
  .decision-no { font-size:13.5px; color:#c07070; }
`;

/* ── DATA: EJEMPLOS RESUELTOS ────────────────────────────────────────────────── */

const ejemplosTemas = [
  {
    titulo: "Sustancia pura vs mezcla",
    prob: String.raw`\text{¿Es el bronce (Cu + Sn) un elemento, compuesto o mezcla?}`,
    steps: [
      { pre: "El bronce está formado por dos elementos metálicos: cobre (Cu) y estaño (Sn)." },
      { pre: "Su composición puede variar (no es fija) y sus componentes conservan propiedades → " },
      { pre: "Conclusión: es una mezcla homogénea (aleación)." },
    ],
    res: String.raw`\text{Mezcla homogénea — el bronce es una aleación}`,
  },
  {
    titulo: "Configuración electrónica",
    prob: String.raw`\text{Escribe la configuración electrónica del } \mathrm{Fe}\,(Z=26)`,
    steps: [
      { pre: "Orden de Aufbau: 1s 2s 2p 3s 3p 4s 3d…" },
      { pre: "Llenamos: ", math: String.raw`1s^2\,2s^2\,2p^6\,3s^2\,3p^6\,4s^2\,3d^6`, post: " = 26 e⁻ ✓" },
      { pre: "Electrones de valencia (capa 4): 2 en 4s + 6 en 3d = 8 electrones externos." },
    ],
    res: String.raw`1s^2\,2s^2\,2p^6\,3s^2\,3p^6\,4s^2\,3d^6`,
  },
  {
    titulo: "Cálculo de moles",
    prob: String.raw`\text{¿Cuántas moléculas hay en 18 g de } \mathrm{H_2O}\,?(M=18\,\text{g/mol})`,
    steps: [
      { pre: "Paso 1 — moles: ", math: String.raw`n = \frac{18}{18} = 1\,\text{mol}` },
      { pre: "Paso 2 — moléculas: ", math: String.raw`N = 1 \times 6.022\times10^{23} = 6.022\times10^{23}` },
    ],
    res: String.raw`6.022\times10^{23}\text{ moléculas}`,
  },
];

const ejemplosAgua = [
  {
    titulo: "Cálculo de pH",
    prob: String.raw`\text{Una solución tiene }[\mathrm{H}^+]=10^{-5}\,\mathrm{M}.\text{ Halla el pH y pOH.}`,
    steps: [
      { pre: "pH: ", math: String.raw`\mathrm{pH} = -\log(10^{-5}) = 5` },
      { pre: "pOH: ", math: String.raw`\mathrm{pOH} = 14 - 5 = 9` },
      { pre: "Como pH < 7, la solución es ácida." },
    ],
    res: String.raw`\mathrm{pH}=5,\;\mathrm{pOH}=9\;\text{(ácida)}`,
  },
  {
    titulo: "Molaridad",
    prob: String.raw`\text{Se disuelven 10 g de NaOH en 500 mL. }(M_{\mathrm{NaOH}}=40\,\text{g/mol})`,
    steps: [
      { pre: "Moles: ", math: String.raw`n = \frac{10}{40} = 0.25\,\text{mol}` },
      { pre: "Molaridad: ", math: String.raw`c = \frac{0.25\,\text{mol}}{0.5\,\text{L}} = 0.5\,\text{M}` },
    ],
    res: String.raw`c = 0.5\,\mathrm{M}`,
  },
];

const ejemplosReacciones = [
  {
    titulo: "Identificar reacción endotérmica/exotérmica",
    prob: String.raw`\text{La combustión del metano: }\mathrm{CH_4 + 2O_2 \to CO_2 + 2H_2O + \text{calor}}`,
    steps: [
      { pre: "Se libera calor al entorno → la energía de los productos es menor que la de los reactivos." },
      { pre: "Por definición: ", math: String.raw`\Delta H < 0` },
      { pre: "Conclusión: reacción exotérmica." },
    ],
    res: String.raw`\Delta H < 0 \;\Rightarrow\; \text{exotérmica}`,
  },
  {
    titulo: "Equilibrio y Le Chatelier",
    prob: String.raw`\mathrm{N_2(g)+3H_2(g)\rightleftharpoons 2NH_3(g)}\quad \Delta H=-92\,\text{kJ}`,
    steps: [
      { pre: "¿Qué ocurre si aumenta la presión?" },
      { pre: "Lado izquierdo: 1+3 = 4 moles de gas. Lado derecho: 2 moles de gas." },
      { pre: "Mayor presión favorece el lado con menos moles de gas → equilibrio se desplaza hacia NH₃ (productos)." },
    ],
    res: String.raw`\text{Equilibrio se desplaza hacia productos (NH}_3\text{)}`,
  },
];

const ejemplosOrganica = [
  {
    titulo: "Identificar grupo funcional",
    prob: String.raw`\text{Identifica el grupo funcional del } \mathrm{CH_3COOH}`,
    steps: [
      { pre: "Contiene el grupo –COOH (un carbonilo C=O y un hidroxilo –OH en el mismo carbono)." },
      { pre: "Fórmula: ", math: String.raw`\mathrm{R{-}COOH}` },
      { pre: "Conclusión: ácido carboxílico. En este caso, ácido acético (ácido etanoico)." },
    ],
    res: String.raw`\text{Ácido carboxílico (–COOH) → ácido acético}`,
  },
  {
    titulo: "Tipo de reacción orgánica",
    prob: String.raw`\mathrm{CH_2{=}CH_2 + H_2 \xrightarrow{Ni} CH_3{-}CH_3}`,
    steps: [
      { pre: "El reactivo etileno tiene un doble enlace C=C." },
      { pre: "El H₂ se agrega a través del doble enlace, que se convierte en enlace simple." },
      { pre: "Los átomos de H se añaden a cada carbono → reacción de adición." },
    ],
    res: String.raw`\text{Reacción de adición (hidrogenación)}`,
  },
];

/* ── DATA: CUESTIONARIO 50 PREGUNTAS ─────────────────────────────────────────── */

const quiz = [
  // TEMA 1 — Temas básicos
  { bloque: "Temas básicos", q: "¿Cuál de las siguientes es una mezcla heterogénea?", prob: "", opts: ["Agua destilada", "Alcohol etílico", "Ensalada de verduras", "Aire seco"], ans: 2, exp: "La ensalada tiene fases distinguibles a simple vista (lechuga, tomate, etc.). Las demás son homogéneas.", steps: [{ pre: "Mezcla heterogénea = más de una fase visible." }, { pre: "Agua, alcohol y aire son homogéneos (una sola fase uniforme)." }] },
  { bloque: "Temas básicos", q: "Un átomo de Cl tiene Z = 17 y A = 35. ¿Cuántos neutrones tiene?", prob: "", opts: ["17", "35", "18", "52"], ans: 2, exp: "N = A – Z = 35 – 17 = 18 neutrones.", steps: [{ pre: "Fórmula: ", math: String.raw`N = A - Z = 35 - 17 = 18` }] },
  { bloque: "Temas básicos", q: "La configuración electrónica del ion Na⁺ (Z=11) es:", prob: "", opts: [String.raw`1s^2\,2s^2\,2p^6\,3s^1`, String.raw`1s^2\,2s^2\,2p^6`, String.raw`1s^2\,2s^2\,2p^6\,3s^2`, String.raw`1s^2\,2s^2\,2p^5`], ans: 1, exp: "Na tiene 11 e⁻; Na⁺ pierde 1 → 10 e⁻ = configuración del Ne.", steps: [{ pre: "Na neutro: 11 e⁻." }, { pre: "Na⁺ pierde 1 e⁻ del 3s: quedan 10 e⁻ → igual al Ne." }] },
  { bloque: "Temas básicos", q: "¿Cuál elemento tiene mayor electronegatividad?", prob: "", opts: ["Oxígeno", "Cloro", "Flúor", "Nitrógeno"], ans: 2, exp: "El flúor (F) es el elemento más electronegativo de la tabla periódica (3.98 en escala Pauling).", steps: [{ pre: "La electronegatividad aumenta hacia arriba y a la derecha de la tabla periódica." }, { pre: "F está en la esquina superior derecha → mayor electronegatividad." }] },
  { bloque: "Temas básicos", q: "El compuesto SO₃ es un:", prob: "", opts: ["Óxido básico", "Óxido ácido", "Ácido", "Sal"], ans: 1, exp: "SO₃ es un óxido de no metal (azufre) → óxido ácido (anhídrido). Reacciona con agua para dar H₂SO₄.", steps: [{ pre: "Óxido ácido = no metal + oxígeno." }, { pre: String.raw`\mathrm{SO_3 + H_2O \to H_2SO_4}` }] },
  { bloque: "Temas básicos", q: "¿Cuántos átomos hay en 2 moles de H₂O?", prob: "", opts: [String.raw`2\times6.02\times10^{23}`, String.raw`6\times6.02\times10^{23}`, String.raw`3\times6.02\times10^{23}`, String.raw`1.5\times6.02\times10^{23}`], ans: 1, exp: "Cada molécula de H₂O tiene 3 átomos. 2 mol × 6.02×10²³ × 3 = 6 × N_A átomos.", steps: [{ pre: "2 mol H₂O × 3 átomos/mol × N_A = 6 N_A átomos." }] },
  { bloque: "Temas básicos", q: "El enlace entre Na y Cl en el NaCl es:", prob: "", opts: ["Covalente no polar", "Covalente polar", "Iónico", "Metálico"], ans: 2, exp: "ΔEN(Cl–Na) ≈ 3.16 – 0.93 = 2.23 > 1.7 → enlace iónico.", steps: [{ pre: String.raw`\Delta\text{EN} = 3.16 - 0.93 = 2.23 \geq 1.7 \Rightarrow \text{iónico}` }] },
  { bloque: "Temas básicos", q: "¿Cuál elemento pertenece al grupo de los halógenos?", prob: "", opts: ["Sodio", "Argón", "Bromo", "Magnesio"], ans: 2, exp: "Los halógenos son el grupo 17: F, Cl, Br, I, At. El bromo (Br) pertenece a este grupo.", steps: [{ pre: "Grupo 17 (VIIA): F, Cl, Br, I — todos son halógenos." }] },
  { bloque: "Temas básicos", q: "¿Qué masa tiene 0.5 mol de CO₂? (M = 44 g/mol)", prob: "", opts: ["88 g", "44 g", "22 g", "11 g"], ans: 2, exp: "m = n × M = 0.5 × 44 = 22 g.", steps: [{ pre: "m = n × M = 0.5 mol × 44 g/mol = 22 g." }] },
  { bloque: "Temas básicos", q: "La regla del octeto establece que los átomos tienden a:", prob: "", opts: ["Perder todos sus electrones", "Tener 8 electrones en su nivel externo", "Ganar exactamente 4 electrones", "Compartir solo electrones de valencia"], ans: 1, exp: "La regla del octeto: los átomos ganan, pierden o comparten electrones para tener 8 e⁻ en su capa de valencia (como gases nobles).", steps: [{ pre: "Excepción: H necesita 2 e⁻ (configuración del He)." }] },

  // TEMA 2 — Agua
  { bloque: "Agua", q: "¿Por qué el agua tiene punto de ebullición relativamente alto?", prob: "", opts: ["Por su alta masa molar", "Por los puentes de hidrógeno entre moléculas", "Por ser mezcla homogénea", "Por tener geometría lineal"], ans: 1, exp: "Los puentes de hidrógeno intermoleculares requieren mucha energía para romperse, elevando el punto de ebullición a 100 °C.", steps: [{ pre: "El agua es polar (ángulo 104.5°), formando puentes H entre moléculas." }, { pre: "Estos puentes requieren más energía para romperse → mayor punto de ebullición." }] },
  { bloque: "Agua", q: "Una solución con pH = 9 es:", prob: "", opts: ["Ácida", "Neutra", "Básica", "No determinable"], ans: 2, exp: "pH < 7 = ácido; pH = 7 = neutro; pH > 7 = básico. pH = 9 > 7 → básica.", steps: [{ pre: "pH = 9 > 7 → básica (alcalina)." }] },
  { bloque: "Agua", q: "Según Brønsted–Lowry, una base es una sustancia que:", prob: "", opts: ["Libera OH⁻ en agua", "Acepta un protón (H⁺)", "Dona un par de electrones", "Aumenta el pH por debajo de 7"], ans: 1, exp: "Brønsted–Lowry: ácido = donador de H⁺; base = aceptor de H⁺.", steps: [{ pre: "La teoría de Arrhenius es más restrictiva (base = libera OH⁻)." }, { pre: "Brønsted–Lowry amplía: base acepta H⁺ aunque no libere OH⁻." }] },
  { bloque: "Agua", q: "Molaridad de 5 g de NaOH (M=40 g/mol) en 250 mL:", prob: "", opts: ["0.5 M", "1.0 M", "0.125 M", "2.0 M"], ans: 0, exp: "n = 5/40 = 0.125 mol; M = 0.125/0.250 = 0.5 M.", steps: [{ pre: "n = 5 g / 40 g·mol⁻¹ = 0.125 mol" }, { pre: "M = 0.125 mol / 0.250 L = 0.5 M" }] },
  { bloque: "Agua", q: "El H₃PO₄ es un ácido según Arrhenius porque:", prob: "", opts: ["Acepta protones", "Libera iones H⁺ en solución acuosa", "Tiene oxígeno en su fórmula", "Tiene pH mayor a 7"], ans: 1, exp: "Arrhenius: ácido = libera H⁺ en agua. H₃PO₄ → 3H⁺ + PO₄³⁻ en solución.", steps: [{ pre: String.raw`\mathrm{H_3PO_4 \to 3H^+ + PO_4^{3-}}` }] },
  { bloque: "Agua", q: "¿Qué técnica separa componentes de una solución por diferencia en punto de ebullición?", prob: "", opts: ["Filtración", "Decantación", "Destilación", "Centrifugación"], ans: 2, exp: "La destilación aprovecha diferencias en puntos de ebullición para separar componentes de mezclas homogéneas.", steps: [{ pre: "Filtración → sólido en líquido. Decantación → líquidos inmiscibles. Destilación → mezclas homogéneas." }] },
  { bloque: "Agua", q: "Si [OH⁻] = 10⁻⁴ M, ¿cuál es el pH?", prob: "", opts: ["4", "10", "7", "14"], ans: 1, exp: "pOH = -log(10⁻⁴) = 4; pH = 14 – 4 = 10.", steps: [{ pre: "pOH = 4" }, { pre: "pH = 14 – pOH = 14 – 4 = 10" }] },

  // TEMA 3 — Aire
  { bloque: "Aire", q: "¿Cuál es el gas más abundante en el aire?", prob: "", opts: ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Argón"], ans: 2, exp: "El nitrógeno (N₂) constituye aproximadamente el 78% del aire.", steps: [{ pre: "Composición: N₂ 78%, O₂ 21%, Ar 0.9%, CO₂ 0.04%." }] },
  { bloque: "Aire", q: "La lluvia ácida es causada principalmente por:", prob: "", opts: ["CO₂ y O₂", "SO₂ y NOₓ", "Ar y N₂", "H₂ y O₂"], ans: 1, exp: "SO₂ + H₂O → H₂SO₃; NO₂ + H₂O → HNO₃. Estos ácidos caen como lluvia ácida.", steps: [{ pre: String.raw`\mathrm{SO_2 + H_2O \to H_2SO_3}` }, { pre: String.raw`\mathrm{2NO_2 + H_2O \to HNO_3 + HNO_2}` }] },
  { bloque: "Aire", q: "En la reacción 2Mg + O₂ → 2MgO, el magnesio:", prob: "", opts: ["Se reduce", "Actúa como agente oxidante", "Se oxida", "No cambia estado de oxidación"], ans: 2, exp: "Mg⁰ → Mg²⁺: pierde 2 e⁻ → se oxida. El O₂ se reduce (acepta e⁻).", steps: [{ pre: "Mg: 0 → +2 (pierde e⁻) → se oxida." }, { pre: "O₂: 0 → –2 (gana e⁻) → se reduce." }] },
  { bloque: "Aire", q: "¿Qué ciclo está relacionado con la fotosíntesis y la respiración?", prob: "", opts: ["Ciclo del nitrógeno", "Ciclo del carbono", "Ciclo del fósforo", "Ciclo del azufre"], ans: 1, exp: "Fotosíntesis: CO₂ → materia orgánica. Respiración: materia orgánica → CO₂. Ambas forman el ciclo del carbono.", steps: [{ pre: String.raw`\mathrm{6CO_2 + 6H_2O \xrightarrow{\text{luz}} C_6H_{12}O_6 + 6O_2}` }] },
  { bloque: "Aire", q: "¿Cuál gas destruye la capa de ozono?", prob: "", opts: ["CO₂", "SO₂", "CFC", "NO₂"], ans: 2, exp: "Los clorofluorocarbonos (CFC) liberan Cl• que cataliza la descomposición del O₃ en estratosfera.", steps: [{ pre: "CFC → Cl• + •CFC'" }, { pre: "Cl• + O₃ → ClO + O₂ (destrucción en cadena)." }] },
  { bloque: "Aire", q: "La inversión térmica ocurre cuando:", prob: "", opts: ["El suelo es más frío que el aire superior", "Una capa de aire caliente atrapa contaminantes cerca del suelo", "El viento dispersa los contaminantes", "La lluvia lava los contaminantes del aire"], ans: 1, exp: "Normalmente el aire cálido sube y dispersa contaminantes. En inversión térmica, la capa superior es más caliente e impide el ascenso.", steps: [{ pre: "Aire frío (denso, contaminado) queda atrapado bajo la capa de aire caliente." }] },
  { bloque: "Aire", q: "En Fe₂O₃ + 3CO → 2Fe + 3CO₂, el CO es:", prob: "", opts: ["Agente oxidante", "Agente reductor", "Producto de oxidación", "Catalizador"], ans: 1, exp: "CO se oxida (C: +2 → +4 en CO₂) → agente reductor. El Fe³⁺ se reduce a Fe⁰.", steps: [{ pre: "CO: C pasa de +2 a +4 → pierde e⁻ → se oxida → es agente reductor." }] },

  // TEMA 4 — Alimentos
  { bloque: "Alimentos", q: "¿Cuál es la fórmula general de los carbohidratos?", prob: "", opts: [String.raw`C_nH_{2n+2}`, String.raw`(CH_2O)_n`, String.raw`C_nH_{2n}O_n`, String.raw`C_nH_nO_{2n}`], ans: 1, exp: "Carbohidratos = (CH₂O)ₙ — de ahí el nombre \"hidratos de carbono\" (carbono + agua).", steps: [{ pre: "Ejemplo: glucosa C₆H₁₂O₆ = (CH₂O)₆ ✓" }] },
  { bloque: "Alimentos", q: "¿Qué molécula se forma cuando dos aminoácidos se unen?", prob: "", opts: ["Un disacárido", "Un dipéptido", "Un triglicérido", "Una vitamina"], ans: 1, exp: "La unión de dos aminoácidos mediante un enlace peptídico forma un dipéptido.", steps: [{ pre: "aminoácido₁ + aminoácido₂ → dipéptido + H₂O (condensación)." }] },
  { bloque: "Alimentos", q: "Las vitaminas A, D, E y K son:", prob: "", opts: ["Hidrosolubles", "Liposolubles", "Minerales esenciales", "Aminoácidos esenciales"], ans: 1, exp: "A, D, E y K son liposolubles (se disuelven en grasa y se acumulan en tejido adiposo). C y B son hidrosolubles.", steps: [{ pre: "Regla: vitaminas con letras A, D, E, K → liposolubles (acumulables)." }] },
  { bloque: "Alimentos", q: "¿Cuál biomolécula almacena más energía por gramo?", prob: "", opts: ["Proteína (4 kcal/g)", "Carbohidrato (4 kcal/g)", "Lípido (9 kcal/g)", "Vitamina"], ans: 2, exp: "Lípidos: 9 kcal/g — casi el doble que proteínas y carbohidratos (4 kcal/g cada uno).", steps: [{ pre: "Grasas: 9 kcal/g. Proteínas y carbohidratos: 4 kcal/g." }] },
  { bloque: "Alimentos", q: "La función de las enzimas en reacciones biológicas es:", prob: "", opts: ["Aumentar la energía de activación", "Actuar como catalizadores biológicos", "Proporcionar energía directamente", "Sintetizar ATP"], ans: 1, exp: "Las enzimas son catalizadores biológicos de naturaleza proteica: reducen la energía de activación sin consumirse.", steps: [{ pre: "Catalizador: acelera la reacción reduciendo Ea sin cambiar ΔG." }] },
  { bloque: "Alimentos", q: "¿Cuál polisacárido sirve como reserva de energía en animales?", prob: "", opts: ["Celulosa", "Almidón", "Glucógeno", "Quitina"], ans: 2, exp: "El glucógeno es el polisacárido de reserva en animales (hígado y músculo). El almidón cumple esa función en plantas.", steps: [{ pre: "Plantas: almidón (reserva) + celulosa (estructura)." }, { pre: "Animales: glucógeno (reserva)." }] },
  { bloque: "Alimentos", q: "Un ácido graso insaturado se caracteriza por:", prob: "", opts: ["Tener solo enlaces simples C–C", "Ser sólido a temperatura ambiente", "Tener uno o más dobles enlaces C=C", "No poder ser metabolizado"], ans: 2, exp: "Insaturado = uno o más dobles enlaces C=C. Suelen ser líquidos a temperatura ambiente (aceites).", steps: [{ pre: "Saturado: solo C–C simple (mantequilla, grasa animal → sólido)." }, { pre: "Insaturado: C=C (aceite de oliva, omega-3 → líquido)." }] },

  // TEMA 5 — Energía y reacciones
  { bloque: "Energía y reacciones", q: "En una reacción exotérmica, ΔH es:", prob: "", opts: ["Positivo", "Negativo", "Igual a cero", "Igual a la energía de activación"], ans: 1, exp: "Exotérmica = libera calor → H(productos) < H(reactivos) → ΔH < 0.", steps: [{ pre: String.raw`\Delta H = H_\text{prod} - H_\text{reac} < 0\;\text{(exotérmica)}` }] },
  { bloque: "Energía y reacciones", q: "Un catalizador aumenta la velocidad de reacción porque:", prob: "", opts: ["Aumenta la temperatura del sistema", "Desplaza el equilibrio hacia los productos", "Reduce la energía de activación", "Aumenta la concentración de reactivos"], ans: 2, exp: "El catalizador ofrece un camino alternativo con menor energía de activación (Ea). No altera ΔG ni el equilibrio.", steps: [{ pre: "Catalizador → menor Ea → más moléculas con suficiente energía → mayor velocidad." }] },
  { bloque: "Energía y reacciones", q: "En el equilibrio A ⇌ B (endotérmica directa), al aumentar T el equilibrio se desplaza:", prob: "", opts: ["Hacia A (reactivos)", "Hacia B (productos)", "No se modifica", "Depende de la presión"], ans: 1, exp: "Le Chatelier: aumentar T favorece la reacción que absorbe calor (endotérmica) → desplaza hacia B.", steps: [{ pre: "Reacción directa es endotérmica: absorbe calor." }, { pre: "Aumentar T → equilibrio favorece a la que absorbe calor → hacia B." }] },
  { bloque: "Energía y reacciones", q: "La velocidad de reacción entre sólidos aumenta al:", prob: "", opts: ["Aumentar la masa del sólido", "Reducir la superficie de contacto", "Moler el sólido en partículas más finas", "Disminuir la temperatura"], ans: 2, exp: "Más superficie de contacto → más colisiones por unidad de tiempo → mayor velocidad.", steps: [{ pre: "Partículas más finas → mayor área superficial → mayor velocidad de reacción." }] },
  { bloque: "Energía y reacciones", q: "Si ΔG < 0 para una reacción, esta es:", prob: "", opts: ["No espontánea", "Espontánea", "En equilibrio", "Endotérmica necesariamente"], ans: 1, exp: "ΔG < 0 → reacción espontánea (no requiere energía externa para ocurrir).", steps: [{ pre: String.raw`\Delta G < 0 \Rightarrow \text{espontánea};\;\Delta G = 0 \Rightarrow \text{equilibrio};\;\Delta G > 0 \Rightarrow \text{no espontánea}` }] },
  { bloque: "Energía y reacciones", q: "La energía libre de Gibbs combina:", prob: "", opts: ["Entalpía, entropía y temperatura", "Solo entalpía y temperatura", "Masa y temperatura", "Presión y volumen"], ans: 0, exp: "ΔG = ΔH – TΔS combina entalpía (H), temperatura (T) y entropía (S).", steps: [{ pre: String.raw`\Delta G = \Delta H - T\Delta S` }] },
  { bloque: "Energía y reacciones", q: "Según la regla de van't Hoff, al aumentar 10 °C, la velocidad de reacción:", prob: "", opts: ["Se mantiene igual", "Se duplica", "Se reduce a la mitad", "Se triplica"], ans: 1, exp: "Regla empírica de van't Hoff: cada 10 °C de aumento, la velocidad de reacción se aproximadamente duplica.", steps: [{ pre: "Esta regla es aproximada; en realidad depende de la energía de activación específica." }] },

  // TEMA 6 — Química del carbono
  { bloque: "Química del carbono", q: "¿Cuántos enlaces covalentes forma normalmente el carbono?", prob: "", opts: ["2", "3", "4", "6"], ans: 2, exp: "El carbono tiene 4 electrones de valencia y forma 4 enlaces covalentes (tetravalente).", steps: [{ pre: "Config. C: 1s²2s²2p² → 4 e⁻ de valencia → 4 enlaces." }] },
  { bloque: "Química del carbono", q: "¿Cuál es la fórmula del propeno?", prob: "", opts: [String.raw`C_3H_8`, String.raw`C_3H_6`, String.raw`C_3H_4`, String.raw`C_3H_{10}`], ans: 1, exp: "Propeno es alqueno con 3 C. Fórmula: CₙH₂ₙ = C₃H₆.", steps: [{ pre: "Alquenos: CₙH₂ₙ. Con n=3: C₃H₆." }, { pre: "C₃H₈ = propano (alcano). C₃H₄ = propino (alquino)." }] },
  { bloque: "Química del carbono", q: "Identifica el grupo funcional del etanol (C₂H₅OH):", prob: "", opts: ["Aldehído (–CHO)", "Cetona (–CO–)", "Alcohol (–OH)", "Ácido carboxílico (–COOH)"], ans: 2, exp: "El etanol contiene el grupo –OH (hidroxilo) unido a un carbono saturado → alcohol.", steps: [{ pre: "–OH en C alifático = alcohol. –OH en C aromático = fenol." }] },
  { bloque: "Química del carbono", q: "La reacción CH₂=CH₂ + HBr → CH₃CH₂Br es una:", prob: "", opts: ["Sustitución", "Eliminación", "Adición", "Condensación"], ans: 2, exp: "El HBr se agrega al doble enlace del etileno → reacción de adición (el doble enlace se rompe).", steps: [{ pre: "Adición: se agregan átomos a través de un doble o triple enlace." }] },
  { bloque: "Química del carbono", q: "¿Cuál compuesto tiene la fórmula CH₃COOH?", prob: "", opts: ["Acetona", "Ácido acético", "Etanol", "Formaldehído"], ans: 1, exp: "CH₃COOH es el ácido acético (ácido etanoico) — componente del vinagre. Tiene el grupo –COOH.", steps: [{ pre: "CH₃COOH: grupo –COOH → ácido carboxílico." }, { pre: "Nombre IUPAC: ácido etanoico. Nombre común: ácido acético." }] },
  { bloque: "Química del carbono", q: "El polietileno se obtiene por polimerización de:", prob: "", opts: ["Etano", "Etileno (CH₂=CH₂)", "Acetileno", "Etanol"], ans: 1, exp: "Polietileno: polimerización por adición del etileno (CH₂=CH₂). El doble enlace se rompe para unir monómeros.", steps: [{ pre: String.raw`n\,\mathrm{CH_2{=}CH_2} \to \mathrm{(-CH_2{-}CH_2{-})_n}` }] },
  { bloque: "Química del carbono", q: "¿Cuál es la diferencia entre un alcano y un alqueno?", prob: "", opts: ["Los alcanos tienen anillos bencénicos", "Los alquenos tienen al menos un doble enlace C=C", "Los alcanos son más reactivos", "Los alquenos solo tienen C e H"], ans: 1, exp: "Alcanos: solo C–C simples (saturados). Alquenos: al menos un C=C (insaturados, más reactivos).", steps: [{ pre: "Alcano (saturado): CₙH₂ₙ₊₂ — sin dobles enlaces." }, { pre: "Alqueno (insaturado): CₙH₂ₙ — un doble enlace." }] },
  { bloque: "Química del carbono", q: "Un éster se forma por la reacción entre:", prob: "", opts: ["Un alcohol y un ácido carboxílico", "Una amina y un aldehído", "Una cetona y agua", "Dos aminoácidos"], ans: 0, exp: "Esterificación: alcohol + ácido carboxílico → éster + H₂O (reacción de condensación).", steps: [{ pre: String.raw`\mathrm{R{-}OH + R'{-}COOH \rightleftharpoons R'{-}COO{-}R + H_2O}` }] },
  { bloque: "Química del carbono", q: "La isomería estructural implica que dos compuestos:", prob: "", opts: ["Tienen diferente fórmula molecular", "Tienen la misma fórmula molecular pero diferente estructura", "Son idénticos en propiedades físicas", "Son enantiómeros"], ans: 1, exp: "Isómeros estructurales: misma fórmula molecular (mismos átomos) pero diferente conectividad.", steps: [{ pre: "Ejemplo: butano C₄H₁₀ e isobutano C₄H₁₀ son isómeros estructurales." }] },
  { bloque: "Química del carbono", q: "En la saponificación, un éster reacciona con NaOH para producir:", prob: "", opts: ["Ácido carboxílico y agua", "Una sal (jabón) y un alcohol", "Una cetona y una amina", "Un aldehído y CO₂"], ans: 1, exp: "Saponificación: éster + NaOH → sal de ácido graso (jabón) + alcohol.", steps: [{ pre: String.raw`\mathrm{R{-}COO{-}R' + NaOH \to R{-}COO^-Na^+ + R'{-}OH}` }] },
];

/* ── STYLE INJECTION ─────────────────────────────────────────────────────────── */

function useStyles() {
  useEffect(() => {
    if (!document.getElementById("factorizando-shared")) {
      const s = document.createElement("style");
      s.id = "factorizando-shared";
      s.textContent = SHARED_STYLE;
      document.head.appendChild(s);
    }
    if (!document.getElementById("factorizando-quimica")) {
      const s = document.createElement("style");
      s.id = "factorizando-quimica";
      s.textContent = QUIMICA_STYLE;
      document.head.appendChild(s);
    }
  }, []);
}

/* ── HELPERS ─────────────────────────────────────────────────────────────────── */

function Acordeon({ titulo, count, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="acc-item">
      <div className="acc-hd" onClick={() => setOpen(!open)}>
        <span className="acc-title">{titulo} <span className="acc-count">· {count} preguntas</span></span>
        <span className={`chevron${open ? " open" : ""}`}>▾</span>
      </div>
      <div className={`acc-body${open ? " open" : ""}`}>
        {children}
      </div>
    </div>
  );
}

function TemaTag({ tipo }) {
  const cfg = {
    azul:  "tema-tag tag-azul",
    verde: "tema-tag tag-verde",
    rojo:  "tema-tag tag-rojo",
    oro:   "tema-tag tag-oro",
  };
  return <span className={cfg[tipo] || "tema-tag"}></span>;
}

function PropCard({ label, value, desc }) {
  return (
    <div className="prop-card">
      <div className="prop-label">{label}</div>
      <div className="prop-value">{value}</div>
      {desc && <div className="prop-desc">{desc}</div>}
    </div>
  );
}

function ReacBox({ label, children }) {
  return (
    <div className="reac-box">
      {label && <div className="reac-label">{label}</div>}
      {children}
    </div>
  );
}

/* ── TABLE COMPONENT ─────────────────────────────────────────────────────────── */

function Tabla({ headers, rows }) {
  return (
    <table className="tabla-quim">
      <thead>
        <tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} className={j === 0 ? "dest" : ""}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* ── MAIN COMPONENT ──────────────────────────────────────────────────────────── */

export default function QuimicaGuia() {
  useStyles();

  const bloques = [...new Set(quiz.map(q => q.bloque))];

  return (
    <div className="lr">

      {/* HERO */}
      <div className="hero">
        <div className="hero-tag">EXANI-II · Ciencias Naturales</div>
        <h1>Química</h1>
        <div className="hero-math">
          <M>{String.raw`\Delta G = \Delta H - T\Delta S`}</M>
        </div>
        <p>
          Guía completa del temario oficial de Química para el examen de admisión a la UNAM.
          Seis grandes temas, ejemplos resueltos y 50 preguntas de práctica tipo EXANI-II.
        </p>
      </div>

      <div className="cw">

        {/* ── 01 TEMAS BÁSICOS ──────────────────────────────────────────── */}
        <div className="section">
          <div className="sec-hd"><span className="sec-num">01</span><h2>Temas básicos</h2></div>

          <div className="card">
            <h3>Sustancias puras y mezclas</h3>
            <Tabla
              headers={["Tipo", "Composición", "Separación", "Ejemplo"]}
              rows={[
                ["Elemento", "Un solo tipo de átomo", "No descomponible (quím.)", "Au, Fe, O₂"],
                ["Compuesto", "2+ elementos en proporción fija", "Descomposición química", "H₂O, NaCl, CO₂"],
                ["Mezcla homogénea", "Composición variable, 1 fase", "Destilación, cristalización", "Agua salada, aire, bronce"],
                ["Mezcla heterogénea", "Composición variable, 2+ fases", "Filtración, decantación", "Arena+agua, ensalada"],
              ]}
            />
          </div>

          <div className="card" style={{ marginTop: 16 }}>
            <h3>Estructura atómica</h3>
            <div className="prop-grid">
              <PropCard label="Número atómico Z" value="Nº de protones" desc="Determina la identidad del elemento. Igual al nº de e⁻ en átomo neutro." />
              <PropCard label="Número de masa A" value="A = Z + N" desc="Suma de protones y neutrones. Los isótopos tienen mismo Z, diferente A." />
              <PropCard label="Aufbau" value="1s 2s 2p 3s 3p 4s 3d…" desc="Orden de llenado de orbitales (menor energía primero)." />
              <PropCard label="Regla de Hund" value="1 e⁻ por orbital primero" desc="Los electrones ocupan orbitales vacíos antes de emparejarse." />
            </div>
          </div>

          <div className="card" style={{ marginTop: 16 }}>
            <h3>Tabla periódica — Tendencias</h3>
            <Tabla
              headers={["Propiedad", "En un período (→)", "En un grupo (↓)"]}
              rows={[
                ["Radio atómico", "Disminuye", "Aumenta"],
                ["Electronegatividad", "Aumenta", "Disminuye"],
                ["Energía de ionización", "Aumenta", "Disminuye"],
                ["Afinidad electrónica", "Aumenta", "Disminuye"],
              ]}
            />
            <div className="tip-box" style={{ marginTop: 14 }}>
              <div className="tip-label">Tipos de enlace por ΔEN</div>
              <p>
                <strong>ΔEN &lt; 0.5</strong> → covalente no polar &nbsp;·&nbsp;
                <strong>0.5–1.7</strong> → covalente polar &nbsp;·&nbsp;
                <strong>&gt; 1.7</strong> → iónico
              </p>
            </div>
          </div>

          <div className="card" style={{ marginTop: 16 }}>
            <h3>El mol</h3>
            <div style={{ textAlign: "center", margin: "14px 0" }}>
              <MB>{String.raw`n = \frac{m}{M} \qquad N = n \cdot N_A \qquad N_A = 6.022\times10^{23}\,\text{mol}^{-1}`}</MB>
            </div>
            <p style={{ fontSize: 14.5, color: "#a09880", lineHeight: 1.7, fontWeight: 300 }}>
              <em>n</em> = moles &nbsp;·&nbsp; <em>m</em> = masa en gramos &nbsp;·&nbsp; <em>M</em> = masa molar (g/mol) &nbsp;·&nbsp; <em>N</em> = número de partículas.
            </p>
          </div>

          <div className="sec-hd" style={{ marginTop: 24 }}><h3>Ejemplos resueltos</h3></div>
          <div className="ex-grid">
            {ejemplosTemas.map((ej, i) => <EjCard key={i} ej={ej} prefix={`EJEMPLO ${i + 1}  ·  `} />)}
          </div>
        </div>

        <div className="divider" />

        {/* ── 02 AGUA ───────────────────────────────────────────────────── */}
        <div className="section">
          <div className="sec-hd"><span className="sec-num">02</span><h2>Agua</h2></div>

          <div className="card">
            <h3>Estructura y propiedades</h3>
            <div className="prop-grid">
              <PropCard label="Geometría" value="Angular — 104.5°" desc="La molécula es polar por su forma y la diferencia de electronegatividad O–H." />
              <PropCard label="Punto de ebullición" value="100 °C (1 atm)" desc="Alto por los puentes de hidrógeno intermoleculares." />
              <PropCard label="Calor específico" value="4.18 J/(g·°C)" desc="Alta capacidad calorífica — regula temperatura ambiental." />
              <PropCard label="Poder disolvente" value="'Disolvente universal'" desc="Disuelve compuestos iónicos y polares (like dissolves like)." />
            </div>
          </div>

          <div className="card" style={{ marginTop: 16 }}>
            <h3>Ácidos y bases — Tres teorías</h3>
            <Tabla
              headers={["Teoría", "Ácido", "Base"]}
              rows={[
                ["Arrhenius", "Libera H⁺ en agua", "Libera OH⁻ en agua"],
                ["Brønsted–Lowry", "Dona un protón H⁺", "Acepta un protón H⁺"],
                ["Lewis", "Acepta par de e⁻", "Dona par de e⁻"],
              ]}
            />
            <div style={{ textAlign: "center", marginTop: 16 }}>
              <MB>{String.raw`\text{pH} = -\log[\text{H}^+] \qquad \text{pH + pOH} = 14 \qquad K_w = 10^{-14}`}</MB>
            </div>
          </div>

          <div className="card" style={{ marginTop: 16 }}>
            <h3>Soluciones</h3>
            <div style={{ textAlign: "center", margin: "10px 0 14px" }}>
              <MB>{String.raw`c\,(\text{M}) = \frac{n\,(\text{mol})}{V\,(\text{L})} \qquad \%m/m = \frac{m_\text{soluto}}{m_\text{solución}}\times100`}</MB>
            </div>
          </div>

          <div className="sec-hd" style={{ marginTop: 24 }}><h3>Ejemplos resueltos</h3></div>
          <div className="ex-grid">
            {ejemplosAgua.map((ej, i) => <EjCard key={i} ej={ej} prefix={`EJEMPLO ${i + 1}  ·  `} />)}
          </div>
        </div>

        <div className="divider" />

        {/* ── 03 AIRE ───────────────────────────────────────────────────── */}
        <div className="section">
          <div className="sec-hd"><span className="sec-num">03</span><h2>Aire</h2></div>

          <div className="card">
            <h3>Composición del aire</h3>
            <Tabla
              headers={["Gas", "Fórmula", "% en volumen"]}
              rows={[
                ["Nitrógeno", "N₂", "78.09 %"],
                ["Oxígeno", "O₂", "20.95 %"],
                ["Argón", "Ar", "0.93 %"],
                ["Dióxido de carbono", "CO₂", "0.04 %"],
              ]}
            />
          </div>

          <div className="card" style={{ marginTop: 16 }}>
            <h3>Reacciones del oxígeno</h3>
            <ReacBox label="Combustión completa">
              CH₄ + 2O₂ → CO₂ + 2H₂O + calor
            </ReacBox>
            <ReacBox label="Óxido básico (metal + O)">
              2Ca + O₂ → 2CaO
            </ReacBox>
            <ReacBox label="Óxido ácido (no metal + O)">
              S + O₂ → SO₂ &nbsp;&nbsp; y &nbsp;&nbsp; 2SO₂ + O₂ → 2SO₃
            </ReacBox>
            <div className="tip-box" style={{ marginTop: 12 }}>
              <div className="tip-label">Redox en una línea</div>
              <p>
                <strong>Oxidación</strong> = pierde e⁻ (aumenta estado de oxidación) = agente <em>reductor</em>.{" "}
                <strong>Reducción</strong> = gana e⁻ (disminuye estado de oxidación) = agente <em>oxidante</em>.
                Regla OIL RIG: <em>Oxidation Is Loss, Reduction Is Gain</em>.
              </p>
            </div>
          </div>

          <div className="card" style={{ marginTop: 16 }}>
            <h3>Contaminantes del aire</h3>
            <Tabla
              headers={["Contaminante", "Origen", "Efecto"]}
              rows={[
                ["CO (monóxido de carbono)", "Combustión incompleta", "Intoxicación (bloquea hemoglobina)"],
                ["SO₂ / SO₃", "Combustibles fósiles con azufre", "Lluvia ácida"],
                ["NOₓ", "Motores de combustión interna", "Smog fotoquímico"],
                ["CO₂ / CH₄", "Quema de combustibles, ganadería", "Efecto invernadero"],
                ["CFC", "Aerosoles, refrigerantes", "Destrucción de la capa de ozono"],
              ]}
            />
          </div>
        </div>

        <div className="divider" />

        {/* ── 04 ALIMENTOS ──────────────────────────────────────────────── */}
        <div className="section">
          <div className="sec-hd"><span className="sec-num">04</span><h2>Alimentos</h2></div>

          <div className="card">
            <h3>Biomoléculas esenciales</h3>
            <Tabla
              headers={["Biomolécula", "Monómero", "Función principal", "Energía"]}
              rows={[
                ["Carbohidratos", "Monosacáridos (glucosa)", "Energía inmediata, estructura (celulosa)", "4 kcal/g"],
                ["Lípidos", "Ácidos grasos + glicerol", "Reserva energética, membranas, hormonas", "9 kcal/g"],
                ["Proteínas", "Aminoácidos", "Enzimática, estructural, transporte, inmune", "4 kcal/g"],
                ["Vitaminas", "Moléculas orgánicas diversas", "Coenzimas, reguladoras", "—"],
              ]}
            />
          </div>

          <div className="card" style={{ marginTop: 16 }}>
            <h3>Carbohidratos: tipos</h3>
            <div className="org-grid">
              <div className="org-card">
                <div className="org-name">Monosacáridos</div>
                <div className="org-formula">(CH₂O)ₙ</div>
                <div className="org-desc">Glucosa, fructosa, galactosa. Unidades básicas, directamente metabolizables.</div>
              </div>
              <div className="org-card">
                <div className="org-name">Disacáridos</div>
                <div className="org-formula">2 monosacáridos</div>
                <div className="org-desc">Sacarosa (azúcar de mesa), lactosa (leche), maltosa.</div>
              </div>
              <div className="org-card">
                <div className="org-name">Polisacáridos</div>
                <div className="org-formula">Cadena larga</div>
                <div className="org-desc">Almidón (plantas), glucógeno (animales), celulosa (estructura).</div>
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: 8 }}>
              <MB>{String.raw`\mathrm{C_6H_{12}O_6 + 6O_2 \to 6CO_2 + 6H_2O + ATP}`}</MB>
            </div>
          </div>

          <div className="card" style={{ marginTop: 16 }}>
            <h3>Proteínas: estructura</h3>
            <p style={{ fontSize: 14.5, color: "#a09880", lineHeight: 1.7, fontWeight: 300 }}>
              Las proteínas son polímeros de <strong>aminoácidos</strong> unidos por <strong>enlaces peptídicos</strong> (–CO–NH–).
              Las <strong>enzimas</strong> son proteínas catalíticas que reducen la energía de activación de reacciones biológicas
              con alta especificidad (modelo llave–cerradura).
            </p>
            <ReacBox label="Enlace peptídico">
              aminoácido₁ + aminoácido₂ → dipéptido + H₂O
            </ReacBox>
          </div>
        </div>

        <div className="divider" />

        {/* ── 05 ENERGÍA Y REACCIONES ───────────────────────────────────── */}
        <div className="section">
          <div className="sec-hd"><span className="sec-num">05</span><h2>Energía y las reacciones químicas</h2></div>

          <div className="card">
            <h3>Tipos de reacción energética</h3>
            <Tabla
              headers={["", "Exotérmica", "Endotérmica"]}
              rows={[
                ["Calor", "Liberado al entorno", "Absorbido del entorno"],
                ["ΔH", "< 0 (negativo)", "> 0 (positivo)"],
                ["Ejemplo", "Combustión, neutralización", "Fotosíntesis, fusión del hielo"],
              ]}
            />
            <div style={{ textAlign: "center", marginTop: 14 }}>
              <MB>{String.raw`\Delta G = \Delta H - T\Delta S \qquad \Delta G < 0 \Rightarrow \text{espontánea}`}</MB>
            </div>
          </div>

          <div className="card" style={{ marginTop: 16 }}>
            <h3>Equilibrio — Principio de Le Chatelier</h3>
            <Tabla
              headers={["Perturbación", "Efecto en el equilibrio"]}
              rows={[
                ["Aumentar [reactivo]", "Se desplaza hacia los productos"],
                ["Aumentar temperatura", "Favorece la reacción endotérmica"],
                ["Aumentar presión", "Favorece el lado con menos moles de gas"],
                ["Agregar catalizador", "No desplaza; aumenta velocidad de ambas direcciones"],
              ]}
            />
          </div>

          <div className="card" style={{ marginTop: 16 }}>
            <h3>Velocidad de reacción — Factores</h3>
            <div className="prop-grid">
              <PropCard label="Concentración" value="↑ conc. → ↑ velocidad" desc="Más moléculas por volumen → más colisiones." />
              <PropCard label="Temperatura" value="+10 °C → ×2 velocidad" desc="Regla de van't Hoff (aproximada)." />
              <PropCard label="Superficie" value="↑ área → ↑ velocidad" desc="Sólidos finamente divididos reaccionan más rápido." />
              <PropCard label="Catalizador" value="Reduce Ea" desc="Ofrece camino alternativo; no se consume." />
            </div>
          </div>

          <div className="sec-hd" style={{ marginTop: 24 }}><h3>Ejemplos resueltos</h3></div>
          <div className="ex-grid">
            {ejemplosReacciones.map((ej, i) => <EjCard key={i} ej={ej} prefix={`EJEMPLO ${i + 1}  ·  `} />)}
          </div>
        </div>

        <div className="divider" />

        {/* ── 06 QUÍMICA DEL CARBONO ────────────────────────────────────── */}
        <div className="section">
          <div className="sec-hd"><span className="sec-num">06</span><h2>Química del carbono</h2></div>

          <div className="card">
            <h3>Tipos de enlace carbono–carbono</h3>
            <Tabla
              headers={["Enlace", "Tipo", "Hibridación", "Ángulo", "Ejemplo"]}
              rows={[
                ["C–C simple", "Alcanos", "sp³", "109.5°", "Etano C₂H₆"],
                ["C=C doble", "Alquenos", "sp²", "120°", "Etileno C₂H₄"],
                ["C≡C triple", "Alquinos", "sp", "180°", "Acetileno C₂H₂"],
              ]}
            />
          </div>

          <div className="card" style={{ marginTop: 16 }}>
            <h3>Series homólogas</h3>
            <Tabla
              headers={["Serie", "Enlace C–C", "Fórmula general", "Ejemplo"]}
              rows={[
                ["Alcanos", "Simple", "CₙH₂ₙ₊₂", "Metano CH₄, Butano C₄H₁₀"],
                ["Alquenos", "Doble", "CₙH₂ₙ", "Etileno C₂H₄, Propeno C₃H₆"],
                ["Alquinos", "Triple", "CₙH₂ₙ₋₂", "Acetileno C₂H₂"],
                ["Cicloalcanos", "Simple (anillo)", "CₙH₂ₙ", "Ciclohexano C₆H₁₂"],
              ]}
            />
          </div>

          <div className="card" style={{ marginTop: 16 }}>
            <h3>Grupos funcionales principales</h3>
            <div className="org-grid">
              {[
                { name: "Alcohol", formula: "R–OH", desc: "Sufijo: -ol. Ej: etanol C₂H₅OH" },
                { name: "Éter", formula: "R–O–R'", desc: "Ej: dimetiléter CH₃OCH₃" },
                { name: "Aldehído", formula: "R–CHO", desc: "Sufijo: -al. Ej: metanal (formaldehído)" },
                { name: "Cetona", formula: "R–CO–R'", desc: "Sufijo: -ona. Ej: propanona (acetona)" },
                { name: "Ác. carboxílico", formula: "R–COOH", desc: "Sufijo: -oico. Ej: ácido acético" },
                { name: "Amina", formula: "R–NH₂", desc: "Sufijo: -amina. Ej: metilamina" },
              ].map((g, i) => (
                <div className="org-card" key={i}>
                  <div className="org-name">{g.name}</div>
                  <div className="org-formula">{g.formula}</div>
                  <div className="org-desc">{g.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ marginTop: 16 }}>
            <h3>Tipos de reacción orgánica</h3>
            <Tabla
              headers={["Tipo", "Descripción", "Ejemplo"]}
              rows={[
                ["Sustitución", "Un átomo/grupo reemplaza a otro (alcanos)", "CH₄ + Cl₂ → CH₃Cl + HCl"],
                ["Adición", "Átomos se agregan a doble/triple enlace", "CH₂=CH₂ + H₂ → C₂H₆"],
                ["Eliminación", "Se retiran átomos formando doble enlace", "C₂H₅OH → CH₂=CH₂ + H₂O"],
                ["Condensación", "Dos moléculas se unen liberando H₂O", "Formación de ésteres, péptidos"],
                ["Hidrólisis", "Ruptura de enlace por adición de H₂O", "Éster + H₂O → ácido + alcohol"],
                ["Polimerización", "Monómeros se unen formando polímero", "n CH₂=CH₂ → polietileno"],
              ]}
            />
          </div>

          <div className="sec-hd" style={{ marginTop: 24 }}><h3>Ejemplos resueltos</h3></div>
          <div className="ex-grid">
            {ejemplosOrganica.map((ej, i) => <EjCard key={i} ej={ej} prefix={`EJEMPLO ${i + 1}  ·  `} />)}
          </div>
        </div>

        <div className="divider" />

        {/* ── 07 CUESTIONARIO 50 PREGUNTAS ──────────────────────────────── */}
        <div className="section">
          <div className="sec-hd"><span className="sec-num">07</span><h2>Cuestionario — 50 preguntas tipo UNAM</h2></div>
          <p className="hint">
            Preguntas agrupadas por tema. Haz clic en cada respuesta; si te equivocas, aparece la solución paso a paso.
          </p>
          <div className="accordion">
            {bloques.map(bloque => {
              const qs = quiz.filter(q => q.bloque === bloque);
              return (
                <Acordeon key={bloque} titulo={bloque} count={qs.length}>
                  {qs.map((q, i) => (
                    <QzCard
                      key={i}
                      q={q}
                      label={`Pregunta ${i + 1} de ${qs.length} — ${bloque}`}
                    />
                  ))}
                </Acordeon>
              );
            })}
          </div>
        </div>

        {/* ── RESUMEN FINAL ─────────────────────────────────────────────── */}
        <div className="divider" />
        <div className="card" style={{ borderColor: "rgba(245,200,66,0.18)" }}>
          <h3>📌 Resumen rápido para el examen</h3>
          <ul style={{ marginTop: 10, lineHeight: 2 }}>
            <li><strong>Mol:</strong> n = m/M; 1 mol = 6.022×10²³ partículas.</li>
            <li><strong>pH:</strong> –log[H⁺]; ácido &lt;7, neutro 7, básico &gt;7.</li>
            <li><strong>Enlace iónico:</strong> ΔEN ≥ 1.7; covalente polar: 0.5–1.7; no polar: &lt;0.5.</li>
            <li><strong>Redox:</strong> oxidación = pierde e⁻; reducción = gana e⁻.</li>
            <li><strong>Le Chatelier:</strong> el sistema contrarresta cualquier perturbación del equilibrio.</li>
            <li><strong>Exotérmica:</strong> ΔH &lt; 0; endotérmica: ΔH &gt; 0; espontánea: ΔG &lt; 0.</li>
            <li><strong>Alcanos:</strong> CₙH₂ₙ₊₂ · <strong>Alquenos:</strong> CₙH₂ₙ · <strong>Alquinos:</strong> CₙH₂ₙ₋₂.</li>
            <li><strong>Grupos funcionales clave:</strong> –OH alcohol · –CHO aldehído · –CO– cetona · –COOH ác. carboxílico.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
