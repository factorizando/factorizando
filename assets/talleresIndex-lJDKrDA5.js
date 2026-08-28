import{R as E,n as L,c as t,T as z}from"./ReinoPlegado-DHaWS1Mw.js";import A from"./Decodificacion-DM0qzAwb.js";import C from"./PizzasCajasVasos-Dsb84P6l.js";import w from"./ElTerreno-B5i6WPFP.js";import{S as M}from"./SolidosPlatonicos-BLl0OnL-.js";const T=`<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Taller de Divisiones</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;700;800&family=Nunito:wght@600;700;800;900&display=swap" rel="stylesheet">
<style>
  :root{
    --ocean-deep:#0b3d5c; --ocean-mid:#146b93; --island-green:#2d9c64;
    --sand:#f4e4c1; --coral:#ff6b4a; --sun:#ffc93c; --violet:#8b6bd8; --teal:#2ec4c6;
    --ink:#0c2b3a; --white:#fdfaf1;
  }
  *{box-sizing:border-box;}
  html,body{margin:0;padding:0;}
  body{font-family:'Nunito',sans-serif;background:radial-gradient(ellipse at top, var(--ocean-mid) 0%, var(--ocean-deep) 65%);
    color:var(--white);min-height:100vh;display:flex;flex-direction:column;align-items:center;padding:18px;}
  h1,h2,h3,.display{font-family:'Baloo 2', sans-serif;}
  .wrap{width:100%;max-width:900px;}
  header{text-align:center;margin-bottom:14px;}
  header h1{font-size:clamp(25px,4.2vw,40px);margin:0 0 4px 0;text-shadow:0 3px 0 rgba(0,0,0,0.25);}
  header p{margin:0;opacity:0.85;font-weight:700;font-size:clamp(13px,1.6vw,16px);}

  .card{background:rgba(253,250,241,0.08);border:2px solid rgba(253,250,241,0.18);border-radius:22px;padding:24px;}
  .btn{font-family:'Baloo 2';font-weight:700;font-size:18px;border:none;border-radius:16px;padding:14px 26px;cursor:pointer;
    color:var(--ink);background:var(--sun);box-shadow:0 5px 0 rgba(0,0,0,0.25);transition:transform .08s ease;}
  .btn:active{transform:translateY(4px);box-shadow:0 1px 0 rgba(0,0,0,0.25);}
  .btn.secondary{background:var(--teal);}
  .btn.ghost{background:transparent;color:var(--white);border:2px solid rgba(253,250,241,0.4);box-shadow:none;}
  .btn.small{font-size:15px;padding:10px 18px;}
  .btn:disabled{opacity:0.4;cursor:not-allowed;}
  .row{display:flex;gap:12px;flex-wrap:wrap;align-items:center;justify-content:center;}
  .hint{font-size:13px;opacity:0.78;margin-top:10px;line-height:1.5;}
  .toggle-opt.selected{background:var(--sun);color:var(--ink);}

  .act-grid{display:grid;gap:14px;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));margin-top:16px;}
  .act-tile{background:rgba(0,0,0,0.22);border:2px solid rgba(253,250,241,0.15);border-radius:18px;padding:18px;cursor:pointer;
    text-align:left;color:var(--white);font-family:'Nunito';transition:transform .1s ease, border-color .1s ease;}
  .act-tile:hover{transform:translateY(-3px);border-color:var(--sun);}
  .act-tile .emoji{font-size:30px;display:block;margin-bottom:6px;}
  .act-tile strong{font-family:'Baloo 2';font-size:19px;display:block;margin-bottom:4px;}
  .act-tile span.desc{font-size:13px;opacity:0.8;line-height:1.4;}

  #activity{display:none;}
  .topbar{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:14px;flex-wrap:wrap;}
  .pill{background:rgba(0,0,0,0.28);border-radius:20px;padding:8px 16px;font-family:'Baloo 2';font-weight:700;font-size:14px;}

  .prompt{background:var(--sand);color:var(--ink);border-radius:18px;padding:18px 20px;text-align:center;
    font-family:'Baloo 2';font-size:clamp(19px,3vw,26px);font-weight:700;margin-bottom:16px;line-height:1.35;}
  .prompt small{display:block;font-family:'Nunito';font-size:13px;font-weight:700;opacity:0.7;margin-top:6px;}

  /* --- tray & plates (reparto) --- */
  .tray{background:rgba(0,0,0,0.22);border:2px dashed rgba(253,250,241,0.35);border-radius:16px;padding:14px;min-height:70px;
    display:flex;flex-wrap:wrap;gap:6px;justify-content:center;align-items:center;margin-bottom:8px;}
  .tray-label{text-align:center;font-weight:800;font-size:13px;opacity:0.8;margin-bottom:6px;}
  .item{font-size:26px;line-height:1;cursor:default;user-select:none;}
  .plates{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-top:6px;}
  .plate{background:rgba(253,250,241,0.14);border:3px solid var(--sand);border-radius:50%;
    width:118px;height:118px;display:flex;flex-wrap:wrap;gap:3px;align-items:center;justify-content:center;
    cursor:pointer;padding:10px;position:relative;transition:transform .1s ease, border-color .1s ease;}
  .plate:hover{transform:scale(1.04);border-color:var(--sun);}
  .plate .count{position:absolute;bottom:-10px;left:50%;transform:translateX(-50%);background:var(--ink);
    border-radius:12px;padding:2px 10px;font-family:'Baloo 2';font-weight:700;font-size:13px;}
  .plate .item{font-size:20px;}
  .plate.ok{border-color:var(--island-green);}

  /* --- corrales (agrupar) --- */
  .corrales{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-top:10px;}
  .corral{background:rgba(45,156,100,0.18);border:3px solid var(--island-green);border-radius:14px;
    min-width:110px;min-height:96px;padding:10px;display:flex;flex-wrap:wrap;gap:4px;align-items:center;justify-content:center;}
  .leftover-box{background:rgba(255,107,74,0.18);border:3px dashed var(--coral);border-radius:14px;
    min-width:110px;min-height:96px;padding:10px;display:flex;flex-wrap:wrap;gap:4px;align-items:center;justify-content:center;}
  .box-label{text-align:center;font-family:'Baloo 2';font-weight:700;font-size:13px;margin-top:6px;}

  /* --- casita (división larga) --- */
  .casita{background:var(--white);color:var(--ink);border-radius:16px;padding:22px 18px;margin-bottom:14px;overflow-x:auto;}
  .casita table{border-collapse:collapse;margin:0 auto;font-family:'Baloo 2';font-weight:700;font-size:clamp(20px,4vw,30px);}
  .casita td{padding:2px 8px;text-align:right;min-width:34px;}
  .divisor-cell{border-right:3px solid var(--ink);padding-right:12px !important;}
  .quotient-row td{border-bottom:3px solid var(--ink);color:var(--island-green);}
  /* Producto que se resta, con la raya de la resta abarcando el minuendo. */
  .casita td.producto{color:var(--coral);}
  .casita td.linea{border-bottom:2px solid var(--ink);}
  .casita td.resto{color:var(--ink);}
  .blink{animation:blinker 1s linear infinite;}
  @keyframes blinker{50%{opacity:0.35;}}

  /* --- pizza --- */
  .pizza-zona{display:flex;flex-direction:column;align-items:center;gap:14px;}
  .pizza-svg{width:100%;max-width:270px;height:auto;display:block;}
  .pizza-svg path{stroke:var(--ink);stroke-width:2.5;cursor:pointer;transition:opacity .12s ease;}
  .pizza-svg path:hover{opacity:0.75;}
  .comensales{display:flex;gap:10px;flex-wrap:wrap;justify-content:center;}
  .comensal{display:flex;align-items:center;gap:6px;background:rgba(0,0,0,0.24);border-radius:12px;
    padding:6px 12px;font-weight:800;font-size:14px;}
  .comensal .punto{width:13px;height:13px;border-radius:50%;border:2px solid var(--ink);flex-shrink:0;}

  /* --- barra de cubitos --- */
  /* nowrap + scroll: si la barra se partiera en varias líneas se perdería la
     metáfora de "una sola barra que se corta". */
  .barra-wrap{overflow-x:auto;padding:6px 0;}
  .barra{display:flex;flex-wrap:nowrap;align-items:center;justify-content:center;min-width:min-content;}
  .cubo{width:24px;height:34px;flex-shrink:0;background:var(--teal);border:2px solid var(--ink);
    border-radius:4px;transition:background .15s ease;}
  .cubo.mal{background:var(--coral);}
  .cubo.bien{background:var(--island-green);}
  .corte{width:15px;flex-shrink:0;text-align:center;font-size:14px;line-height:34px;
    cursor:pointer;color:rgba(253,250,241,0.12);user-select:none;transition:color .12s ease;}
  .corte:hover{color:rgba(253,250,241,0.55);}
  .corte.activo{color:var(--sun);}
  .corte.correcto{color:var(--island-green);text-shadow:0 0 6px rgba(45,156,100,0.8);}

  /* --- cazador de residuos --- */
  .grupos{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:14px;}
  .grupo{display:flex;gap:4px;background:rgba(46,196,198,0.16);border:2px solid var(--teal);
    border-radius:10px;padding:7px;}
  .grupo.sobra{background:rgba(255,107,74,0.18);border-color:var(--coral);border-style:dashed;}
  .bloque{width:15px;height:15px;border-radius:3px;background:var(--teal);}
  .grupo.sobra .bloque{background:var(--coral);}

  /* --- camiones --- */
  .trucks{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin:12px 0;}
  .truck{background:rgba(46,196,198,0.16);border:3px solid var(--teal);border-radius:12px;padding:8px 12px;
    display:flex;flex-direction:column;align-items:center;min-width:82px;}
  .truck .cap{font-size:26px;}
  .truck .cap-label{font-size:11px;font-weight:800;opacity:0.85;margin-top:2px;}

  .options{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:12px;margin-top:14px;}
  .opt{font-family:'Baloo 2';font-size:24px;font-weight:700;background:var(--white);color:var(--ink);
    border:3px solid rgba(11,61,92,0.15);border-radius:16px;padding:16px 8px;cursor:pointer;transition:transform .08s ease;}
  .opt:hover{transform:translateY(-2px);border-color:var(--teal);}
  .opt.correct{background:var(--island-green);color:var(--white);border-color:var(--island-green);}
  .opt.wrong{background:var(--coral);color:var(--white);border-color:var(--coral);}

  .feedback{margin-top:14px;text-align:center;font-weight:800;font-size:16px;min-height:26px;}
  .feedback.good{color:#7dffb0;}
  .feedback.bad{color:#ffb3a0;}
  .actions{display:flex;gap:12px;justify-content:center;margin-top:16px;flex-wrap:wrap;}

  .progreso{margin-top:22px;}
  .progreso summary{cursor:pointer;font-family:'Baloo 2';font-weight:700;font-size:16px;padding:8px 0;}
  .prog-entry{background:rgba(0,0,0,0.18);border-radius:12px;padding:10px 14px;margin-top:8px;font-size:14px;
    display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;}
  footer{opacity:0.6;font-size:12px;margin-top:22px;text-align:center;}
</style>
</head>
<body>
<div class="wrap">
  <header>
    <h1>➗ Taller de Divisiones</h1>
    <p id="headerSub">Práctica visual e interactiva</p>
  </header>

  <!-- ===== SETUP ===== -->
  <div class="card" id="setup">
    <h3 class="display" style="margin-top:0;">¿Con qué grupo vas a trabajar?</h3>
    <div class="row" id="edadToggle">
      <button class="btn toggle-opt selected" data-val="7-8">🧒 7 y 8 años</button>
      <button class="btn ghost toggle-opt" data-val="9-10">🧑 9 y 10 años</button>
    </div>
    <p class="hint" id="edadHint">Para 7-8 años la división se aprende repartiendo objetos con el dedo, sin algoritmo.</p>

    <h3 class="display">Elige la actividad</h3>
    <div class="act-grid" id="actGrid"></div>
  </div>

  <!-- ===== ACTIVITY ===== -->
  <div id="activity">
    <div class="topbar">
      <div class="pill" id="actName">Actividad</div>
      <div class="pill" id="scorePill">✅ 0 · ❌ 0</div>
    </div>

    <div class="prompt" id="prompt"></div>
    <div id="stage"></div>
    <div class="feedback" id="feedback"></div>
    <div class="actions">
      <button class="btn secondary" id="checkBtn">Revisar</button>
      <button class="btn" id="nextBtn" style="display:none;">Siguiente ▶️</button>
      <button class="btn ghost small" id="backBtn">← Cambiar actividad</button>
    </div>

    <details class="progreso">
      <summary>📊 Progreso guardado</summary>
      <div id="progList"></div>
    </details>
  </div>

  <footer id="footNote">El progreso se guarda en el expediente del alumno.</footer>
</div>

<script>
/* =========================================================
   PUENTE CON LA APP (TallerRunner.jsx)
   El taller corre dentro de un <iframe srcDoc>. No tiene acceso
   al cliente de Supabase, así que pide al padre que guarde/lea
   por postMessage. Si no hay padre (abierto suelto), degrada a
   modo sin persistencia en vez de fallar.
   ========================================================= */
const host = (function(){
  let seq = 0;
  const pendientes = new Map();

  window.addEventListener('message', (e) => {
    const m = e.data;
    if (!m || m.source !== 'taller-host' || !pendientes.has(m.rid)) return;
    const { resolve, reject } = pendientes.get(m.rid);
    pendientes.delete(m.rid);
    if (m.error) reject(new Error(m.error)); else resolve(m.payload);
  });

  function call(tipo, payload){
    if (window.parent === window) return Promise.reject(new Error('sin host'));
    const rid = ++seq;
    return new Promise((resolve, reject) => {
      pendientes.set(rid, {resolve, reject});
      window.parent.postMessage({source:'taller', rid, tipo, payload}, '*');
      setTimeout(() => {
        if (pendientes.has(rid)) { pendientes.delete(rid); reject(new Error('timeout')); }
      }, 8000);
    });
  }

  return {
    guardarSesion: (s) => call('guardar', s),
    cargarSesiones: ()  => call('cargar'),
  };
})();

let edad = '7-8';
let currentAct = null;
let score = {ok:0, bad:0};
let state = {};

const ACTIVIDADES = {
  '7-8': [
    {id:'reparto', emoji:'🍪', nombre:'Reparte las galletas', desc:'Toca los platos para repartir las galletas en partes iguales. Al terminar aparece la división.'},
    {id:'corrales', emoji:'🐣', nombre:'Corrales de pollitos', desc:'Reparte los pollitos entre los corrales y descubre cuántos sobran.'},
    {id:'pizza', emoji:'🍕', nombre:'Divisor de pizzas', desc:'Reparte las rebanadas de una pizza entre los comensales y descubre qué fracción le toca a cada uno.'},
    {id:'barras', emoji:'🧮', nombre:'Barras que se parten', desc:'Corta la barra de cubitos en partes iguales. Si te equivocas, te muestra dónde iban los cortes.'}
  ],
  '9-10': [
    {id:'casita', emoji:'📊', nombre:'La casita paso a paso', desc:'Resuelve la división larga dígito por dígito, con cada paso resaltado.'},
    {id:'camiones', emoji:'🚚', nombre:'Cargamento de camiones', desc:'Problemas con residuo: cuántos camiones se llenan y cuántas cajas sobran.'},
    {id:'cazador', emoji:'🎯', nombre:'Cazador de residuos', desc:'¿La división es exacta o sobra algo? Clasifica rápido y comprueba con los grupos en pantalla.'}
  ]
};

// Colores por comensal (pizza). Son los mismos tonos de la paleta del taller.
const COLORES_COMENSAL = ['#ff6b4a', '#2ec4c6', '#ffc93c', '#8b6bd8', '#2d9c64'];
const NOMBRES_COMENSAL = ['🐰', '🐸', '🐼', '🦊', '🐨'];

const HINTS = {
  '7-8':'Para 7-8 años la división se aprende repartiendo objetos con el dedo, sin algoritmo.',
  '9-10':'Para 9-10 años se trabaja el algoritmo formal y el significado del residuo.'
};

/* ---------- helpers ---------- */
function randInt(a,b){ return Math.floor(Math.random()*(b-a+1))+a; }
function shuffle(a){ return a.slice().sort(()=>Math.random()-0.5); }

// Genera \`cuantas\` opciones distintas alrededor de \`ans\`, dentro de [min,max].
// Garantiza que \`ans\` esté incluida y que se llegue al total pedido.
function makeOptions(ans, spread, opts){
  const o = opts || {};
  const min = o.min !== undefined ? o.min : 0;
  const max = o.max !== undefined ? o.max : Infinity;
  const cuantas = o.cuantas || 4;
  const s = new Set([ans]);
  let t = 0;
  while(s.size < cuantas && t < 300){
    t++;
    const v = ans + randInt(1, spread)*(Math.random() < 0.5 ? -1 : 1);
    if(v >= min && v <= max && v !== ans) s.add(v);
  }
  // Relleno determinista si el rango era demasiado estrecho para el azar.
  for(let v = min; v <= max && s.size < cuantas; v++) s.add(v);
  return shuffle([...s]);
}
const el = id => document.getElementById(id);

/* ---------- setup screen ---------- */
document.querySelectorAll('.toggle-opt').forEach(b=>{
  b.addEventListener('click', ()=>{
    edad = b.dataset.val;
    document.querySelectorAll('.toggle-opt').forEach(x=>{ x.classList.remove('selected'); x.classList.add('ghost'); });
    b.classList.add('selected'); b.classList.remove('ghost');
    el('edadHint').textContent = HINTS[edad];
    renderActGrid();
  });
});

function renderActGrid(){
  const grid = el('actGrid');
  grid.innerHTML = '';
  ACTIVIDADES[edad].forEach(a=>{
    const tile = document.createElement('button');
    tile.className = 'act-tile';
    tile.innerHTML = '<span class="emoji">' + a.emoji + '</span><strong>' + a.nombre + '</strong><span class="desc">' + a.desc + '</span>';
    tile.addEventListener('click', ()=>startActivity(a));
    grid.appendChild(tile);
  });
}
renderActGrid();

function startActivity(a){
  currentAct = a;
  score = {ok:0, bad:0};
  el('setup').style.display = 'none';
  el('activity').style.display = 'block';
  el('actName').textContent = a.emoji + ' ' + a.nombre + ' · ' + edad + ' años';
  updateScore();
  loadProgreso();
  nextRound();
}

el('backBtn').addEventListener('click', async ()=>{
  await saveProgreso();
  el('activity').style.display = 'none';
  el('setup').style.display = 'block';
});

// Si se cierra la pestaña a media sesión, no perder el avance.
window.addEventListener('pagehide', ()=>{ saveProgreso(); });

function updateScore(){ el('scorePill').textContent = '✅ ' + score.ok + ' · ❌ ' + score.bad; }
function setFeedback(msg, good){
  const f = el('feedback');
  f.textContent = msg;
  f.className = 'feedback ' + (good===undefined ? '' : good ? 'good' : 'bad');
}
function endRound(good, msg){
  if(good){ score.ok++; } else { score.bad++; }
  updateScore();
  setFeedback(msg, good);
  el('checkBtn').style.display = 'none';
  el('nextBtn').style.display = 'inline-block';
}

el('nextBtn').addEventListener('click', nextRound);
el('checkBtn').addEventListener('click', ()=>{ if(state.check) state.check(); });

// Cada actividad monta su propia ronda. Las declaraciones de función se izan,
// así que este mapa puede nombrarlas antes de que aparezcan más abajo.
const RONDAS = {
  reparto:  roundReparto,
  corrales: roundCorrales,
  pizza:    roundPizza,
  barras:   roundBarras,
  casita:   roundCasita,
  camiones: roundCamiones,
  cazador:  roundCazador,
};

function nextRound(){
  setFeedback('');
  el('nextBtn').style.display = 'none';
  el('checkBtn').style.display = 'inline-block';
  el('stage').innerHTML = '';
  state = {};
  const ronda = RONDAS[currentAct.id];
  if(ronda) ronda();
}

/* =========================================================
   ACTIVIDAD 1 (7-8): REPARTE LAS GALLETAS
   ========================================================= */
function roundReparto(){
  const ITEMS = ['🍪','🍎','🍌','⭐','🍓'];
  const item = ITEMS[randInt(0,ITEMS.length-1)];
  const platos = randInt(2,4);
  const porPlato = randInt(2,5);
  const total = platos * porPlato;

  state = {item, platos, porPlato, total, enPlato:new Array(platos).fill(0), check:checkReparto};

  el('prompt').innerHTML = 'Reparte los ' + total + ' ' + item + ' entre los ' + platos + ' platos, en partes iguales.' +
    '<small>Toca un plato para poner uno. Toca un plato lleno para regresar uno a la bandeja.</small>';

  el('stage').innerHTML =
    '<div class="tray-label">Bandeja — quedan <span id="restantes">' + total + '</span></div>' +
    '<div class="tray" id="tray"></div>' +
    '<div class="plates" id="plates"></div>' +
    '<div class="row" style="margin-top:18px;">' +
      '<button class="btn ghost small" id="reiniciarBtn">↺ Empezar de nuevo</button>' +
    '</div>';

  // Mientras queden galletas en la bandeja el clic solo suma, así que sin esto
  // un reparto mal empezado no se puede corregir hasta vaciar la bandeja.
  el('reiniciarBtn').addEventListener('click', ()=>{
    state.enPlato = new Array(state.platos).fill(0);
    setFeedback('');
    drawReparto();
  });

  drawReparto();
}

function drawReparto(){
  const {item, platos, total, enPlato} = state;
  const usados = enPlato.reduce((a,b)=>a+b, 0);
  const restantes = total - usados;
  el('restantes').textContent = restantes;
  el('tray').innerHTML = new Array(restantes).fill('<span class="item">' + item + '</span>').join('');

  const platesEl = el('plates');
  platesEl.innerHTML = '';
  for(let i=0;i<platos;i++){
    const p = document.createElement('div');
    p.className = 'plate';
    p.innerHTML = new Array(enPlato[i]).fill('<span class="item">' + item + '</span>').join('')
      + '<span class="count">' + enPlato[i] + '</span>';
    p.addEventListener('click', ()=>{
      const usados2 = state.enPlato.reduce((a,b)=>a+b,0);
      if(usados2 < state.total){
        state.enPlato[i]++;
      } else if(state.enPlato[i] > 0){
        state.enPlato[i]--;
      }
      drawReparto();
    });
    platesEl.appendChild(p);
  }
}

function checkReparto(){
  const {platos, porPlato, total, enPlato, item} = state;
  const usados = enPlato.reduce((a,b)=>a+b,0);
  if(usados < total){
    setFeedback('Todavía quedan ' + (total-usados) + ' en la bandeja. Reparte todos.', false);
    return;
  }
  const iguales = enPlato.every(n => n === enPlato[0]);
  if(!iguales){
    setFeedback('Los platos no tienen la misma cantidad. Acomoda para que queden iguales.', false);
    return;
  }
  document.querySelectorAll('.plate').forEach(p=>p.classList.add('ok'));
  el('prompt').innerHTML = '¡Reparto correcto! <br>' +
    '<span style="color:var(--island-green);">' + total + ' ÷ ' + platos + ' = ' + porPlato + '</span>' +
    '<small>' + total + ' ' + item + ' repartidos entre ' + platos + ' platos: ' + porPlato + ' en cada uno.</small>';
  endRound(true, '¡Muy bien! Así se ve la división: ' + total + ' ÷ ' + platos + ' = ' + porPlato);
}

/* =========================================================
   ACTIVIDAD 2 (7-8): CORRALES DE POLLITOS
   ========================================================= */
function roundCorrales(){
  const corrales = randInt(2,5);
  const porCorral = randInt(2,4);
  const sobran = randInt(1, corrales-1);   // el residuo siempre es menor que el divisor
  const total = corrales*porCorral + sobran;

  state = {corrales, porCorral, sobran, total, fase:'repartir', check:null};

  el('prompt').innerHTML = 'Hay ' + total + ' 🐣 y ' + corrales + ' corrales.' +
    '<small>Toca "Repartir" para acomodarlos uno por uno, en partes iguales.</small>';

  el('stage').innerHTML =
    '<div class="tray-label">Corral vacío — todos los pollitos están aquí</div>' +
    '<div class="tray" id="tray">' + new Array(total).fill('<span class="item">🐣</span>').join('') + '</div>' +
    '<div class="row" style="margin-top:14px;"><button class="btn small" id="repartirBtn">Repartir 🐣</button></div>' +
    '<div id="corralZone"></div>';

  el('checkBtn').style.display = 'none';
  el('repartirBtn').addEventListener('click', animarCorrales);
}

function animarCorrales(){
  const {corrales, total} = state;
  el('repartirBtn').disabled = true;
  const grupos = new Array(corrales).fill(0);
  let restantes = total;

  const zone = el('corralZone');
  zone.innerHTML = '<div class="corrales" id="corralesRow"></div>';
  const row = el('corralesRow');
  for(let i=0;i<corrales;i++){
    const d = document.createElement('div');
    d.innerHTML = '<div class="corral" id="corral-' + i + '"></div><div class="box-label">Corral ' + (i+1) + '</div>';
    row.appendChild(d);
  }
  const lo = document.createElement('div');
  lo.innerHTML = '<div class="leftover-box" id="leftover"></div><div class="box-label" style="color:var(--coral);">Sobran</div>';
  row.appendChild(lo);

  // Se reparten EXACTAMENTE corrales × porCorral pollitos, es decir, vueltas
  // completas. Comprobar "quedan menos que corrales" antes de cada pollito
  // suelto detenía el reparto a media vuelta: los corrales quedaban desiguales
  // y el sobrante siempre era corrales-1 en vez del residuo real.
  const aRepartir = corrales * state.porCorral;
  let entregados = 0;

  const timer = setInterval(()=>{
    if(entregados === aRepartir){
      clearInterval(timer);
      el('leftover').innerHTML = new Array(restantes).fill('<span class="item">🐣</span>').join('');
      el('tray').innerHTML = '';
      askCorrales(state.porCorral, restantes);
      return;
    }
    const c = entregados % corrales;
    grupos[c]++;
    restantes--;
    entregados++;
    el('corral-'+c).innerHTML = new Array(grupos[c]).fill('<span class="item">🐣</span>').join('');
    el('tray').innerHTML = new Array(restantes).fill('<span class="item">🐣</span>').join('');
  }, 190);
}

function askCorrales(porCorral, sobran){
  const {total, corrales} = state;
  state.fase = 'preguntar';
  el('prompt').innerHTML = 'Ya están repartidos.' +
    '<small>Ahora responde: ¿cuántos pollitos quedaron en <b>cada</b> corral?</small>';
  const zone = el('corralZone');
  const opts = document.createElement('div');
  opts.className = 'options';
  opts.id = 'optsA';
  makeOptions(porCorral, 3, {min:0}).forEach(v=>{
    const b = document.createElement('button');
    b.className = 'opt';
    b.textContent = v;
    b.addEventListener('click', ()=>{
      document.querySelectorAll('#optsA .opt').forEach(x=>{
        x.disabled = true;
        if(+x.textContent === porCorral) x.classList.add('correct');
      });
      if(+b.textContent !== porCorral){
        b.classList.add('wrong');
        endRound(false, 'La respuesta era ' + porCorral + ' en cada corral. ' + total + ' ÷ ' + corrales + ' = ' + porCorral + ' y sobran ' + sobran + '.');
      } else {
        setFeedback('¡Correcto! Ahora, ¿cuántos pollitos sobraron?', true);
        askSobran(porCorral, sobran);
      }
    });
    opts.appendChild(b);
  });
  zone.appendChild(opts);
}

function askSobran(porCorral, sobran){
  const {total, corrales} = state;
  const zone = el('corralZone');
  const opts = document.createElement('div');
  opts.className = 'options';
  opts.id = 'optsB';
  // El residuo vive en [0, corrales-1]; si el rango es corto, se piden menos opciones.
  const cuantas = Math.min(4, corrales);
  makeOptions(sobran, 2, {min:0, max:corrales-1, cuantas}).forEach(v=>{
    const b = document.createElement('button');
    b.className = 'opt';
    b.textContent = v;
    b.addEventListener('click', ()=>{
      document.querySelectorAll('#optsB .opt').forEach(x=>{
        x.disabled = true;
        if(+x.textContent === sobran) x.classList.add('correct');
      });
      const good = +b.textContent === sobran;
      if(!good) b.classList.add('wrong');
      endRound(good, total + ' ÷ ' + corrales + ' = ' + porCorral + ' y sobran ' + sobran + '. Eso que sobra se llama residuo.');
    });
    opts.appendChild(b);
  });
  zone.appendChild(opts);
}

/* =========================================================
   ACTIVIDAD 3 (7-8): DIVISOR DE PIZZAS
   Reparto de UNA unidad, no de un conjunto: la pizza se corta en
   rebanadas y cada comensal se queda con las suyas. El cierre conecta
   el reparto con la fracción: porPersona/rebanadas = 1/comensales.
   ========================================================= */
function roundPizza(){
  const comensales = randInt(2,4);
  const porPersona = randInt(1,3);
  const rebanadas = comensales * porPersona;

  state = {comensales, porPersona, rebanadas,
           asignacion: new Array(rebanadas).fill(null), check: checkPizza};

  el('prompt').innerHTML = 'Una pizza cortada en ' + rebanadas + ' rebanadas para ' + comensales + ' amigos.' +
    '<small>Toca una rebanada para dársela al siguiente amigo. Tócala otra vez para cambiarla o dejarla libre.</small>';

  el('stage').innerHTML =
    '<div class="pizza-zona">' +
      '<div class="comensales" id="comensales"></div>' +
      '<div id="pizzaBox"></div>' +
    '</div>';

  dibujarPizza();
}

// Genera las rebanadas como sectores circulares. El ángulo 0 se toma arriba
// (−90°) para que la primera rebanada empiece donde el niño espera.
function svgPizza(){
  const {rebanadas, asignacion} = state;
  const cx = 150, cy = 150, r = 130;
  let paths = '';
  for(let i = 0; i < rebanadas; i++){
    const a0 = (i / rebanadas) * 2 * Math.PI - Math.PI / 2;
    const a1 = ((i + 1) / rebanadas) * 2 * Math.PI - Math.PI / 2;
    const x0 = (cx + r * Math.cos(a0)).toFixed(2), y0 = (cy + r * Math.sin(a0)).toFixed(2);
    const x1 = (cx + r * Math.cos(a1)).toFixed(2), y1 = (cy + r * Math.sin(a1)).toFixed(2);
    const arcoLargo = (a1 - a0) > Math.PI ? 1 : 0;
    const dueno = asignacion[i];
    const relleno = dueno === null ? 'rgba(253,250,241,0.16)' : COLORES_COMENSAL[dueno];
    paths += '<path data-i="' + i + '" fill="' + relleno + '" d="M' + cx + ',' + cy +
             ' L' + x0 + ',' + y0 + ' A' + r + ',' + r + ' 0 ' + arcoLargo + ',1 ' + x1 + ',' + y1 + ' Z"></path>';
  }
  return '<svg class="pizza-svg" viewBox="0 0 300 300" role="img" aria-label="Pizza en rebanadas">' + paths + '</svg>';
}

function dibujarPizza(){
  const {comensales, asignacion} = state;

  const cuenta = new Array(comensales).fill(0);
  asignacion.forEach(d => { if(d !== null) cuenta[d]++; });

  el('comensales').innerHTML = cuenta.map(function(n, i){
    return '<div class="comensal"><span class="punto" style="background:' + COLORES_COMENSAL[i] + '"></span>' +
           NOMBRES_COMENSAL[i] + ' <b>' + n + '</b></div>';
  }).join('');

  el('pizzaBox').innerHTML = svgPizza();

  // Un solo listener en el SVG en vez de uno por rebanada.
  el('pizzaBox').querySelector('svg').addEventListener('click', function(ev){
    const p = ev.target.closest('path');
    if(!p) return;
    const i = Number(p.dataset.i);
    const actual = state.asignacion[i];
    // libre → amigo 1 → amigo 2 → … → último → libre
    state.asignacion[i] = actual === null ? 0
                        : actual + 1 >= state.comensales ? null
                        : actual + 1;
    dibujarPizza();
  });
}

function checkPizza(){
  const {comensales, porPersona, rebanadas, asignacion} = state;
  const libres = asignacion.filter(d => d === null).length;
  if(libres > 0){
    setFeedback('Todavía ' + (libres === 1 ? 'queda 1 rebanada' : 'quedan ' + libres + ' rebanadas') + ' sin repartir.', false);
    return;
  }
  const cuenta = new Array(comensales).fill(0);
  asignacion.forEach(d => cuenta[d]++);
  if(!cuenta.every(n => n === cuenta[0])){
    setFeedback('No a todos les tocó lo mismo: ' + cuenta.join(', ') + '. Reparte en partes iguales.', false);
    return;
  }

  const fraccion = porPersona === 1
    ? '1/' + rebanadas + ' de la pizza'
    : porPersona + '/' + rebanadas + ' de la pizza, que es lo mismo que 1/' + comensales;
  el('prompt').innerHTML = '¡Repartida! <br>' +
    '<span style="color:var(--island-green);">1 pizza ÷ ' + comensales + ' = ' + fraccion + '</span>' +
    '<small>' + rebanadas + ' rebanadas ÷ ' + comensales + ' amigos = ' + porPersona + ' rebanadas para cada uno.</small>';
  endRound(true, 'Aquí no repartimos objetos sueltos: partimos UNA pizza. A cada amigo le tocó ' + fraccion + '.');
}

/* =========================================================
   ACTIVIDAD 4 (7-8): BARRAS QUE SE PARTEN
   La barra es un número en cubitos. Cortar en partes iguales es dividir;
   si el corte está mal, la barra se marca en rojo y se señalan los cortes
   que faltaban.
   ========================================================= */
function roundBarras(){
  const partes = randInt(2,5);
  const porParte = randInt(2,5);
  const total = partes * porParte;

  // Posiciones válidas de corte: los huecos 1..total-1. Los correctos son los
  // múltiplos de porParte.
  const correctos = [];
  for(let p = porParte; p < total; p += porParte) correctos.push(p);

  // \`revelado\`: null mientras se edita, 'bien' o 'mal' una vez revisado.
  state = {partes, porParte, total, correctos, cortes: [], revelado: null, check: checkBarras};

  el('prompt').innerHTML = 'Corta esta barra de ' + total + ' cubitos en ' + partes + ' partes iguales.' +
    '<small>Toca los espacios entre cubitos para poner o quitar un corte. Necesitas ' +
    (partes - 1) + ' ' + (partes - 1 === 1 ? 'corte' : 'cortes') + '.</small>';

  el('stage').innerHTML = '<div class="barra-wrap"><div class="barra" id="barra"></div></div>' +
    '<div class="tray-label" id="barraInfo"></div>';

  // El listener va UNA vez sobre el contenedor, que sobrevive a los redibujados
  // (solo se reemplaza su innerHTML). Ponerlo dentro de dibujarBarra acumulaba
  // uno por redibujado y un clic acababa alternando el corte varias veces.
  el('barra').addEventListener('click', function(ev){
    if(state.revelado) return;   // ya se revisó: la barra deja de responder
    const c = ev.target.closest('.corte');
    if(!c) return;
    const pos = Number(c.dataset.pos);
    const k = state.cortes.indexOf(pos);
    if(k === -1) state.cortes.push(pos); else state.cortes.splice(k, 1);
    dibujarBarra();
  });

  dibujarBarra();
}

function dibujarBarra(){
  const {total, partes, cortes, correctos, revelado} = state;
  let html = '';
  for(let i = 0; i < total; i++){
    if(i > 0){
      const activo = cortes.indexOf(i) !== -1;
      // Al fallar se señalan en verde los cortes que debían ir.
      const debia = revelado === 'mal' && correctos.indexOf(i) !== -1;
      const clases = ['corte', activo ? 'activo' : '', debia ? 'correcto' : ''].filter(Boolean).join(' ');
      html += '<span class="' + clases + '" data-pos="' + i + '">✂</span>';
    }
    const estado = revelado === 'mal' ? ' mal' : revelado === 'bien' ? ' bien' : '';
    html += '<span class="cubo' + estado + '"></span>';
  }
  el('barra').innerHTML = html;
  el('barraInfo').textContent = revelado
    ? ''
    : cortes.length + ' de ' + (partes - 1) + ' cortes puestos';
}

function checkBarras(){
  const {partes, porParte, total, correctos, cortes} = state;

  if(cortes.length !== partes - 1){
    setFeedback('Pusiste ' + cortes.length + ' ' + (cortes.length === 1 ? 'corte' : 'cortes') +
      ' y hacen falta ' + (partes - 1) + '.', false);
    return;
  }

  const ordenados = cortes.slice().sort(function(a,b){ return a - b; });
  const bien = ordenados.length === correctos.length &&
               ordenados.every(function(v, i){ return v === correctos[i]; });

  state.revelado = bien ? 'bien' : 'mal';
  dibujarBarra();

  if(bien){
    el('prompt').innerHTML = '¡Cortes perfectos! <br>' +
      '<span style="color:var(--island-green);">' + total + ' ÷ ' + partes + ' = ' + porParte + '</span>' +
      '<small>' + partes + ' partes de ' + porParte + ' cubitos cada una.</small>';
    endRound(true, 'Cortar en partes iguales es dividir: ' + total + ' ÷ ' + partes + ' = ' + porParte + '.');
  } else {
    el('prompt').innerHTML = 'Los cortes no dejaron partes iguales.' +
      '<small>En verde están los cortes que iban: cada ' + porParte + ' cubitos.</small>';
    endRound(false, total + ' ÷ ' + partes + ' = ' + porParte + ', así que había que cortar cada ' + porParte + ' cubitos.');
  }
}

/* =========================================================
   ACTIVIDAD 3 (9-10): LA CASITA PASO A PASO
   ========================================================= */
function makeDivisionLarga(){
  for(let t=0;t<500;t++){
    const d = randInt(2,9);
    const cociente = randInt(21, 499);
    const residuo = randInt(0, d-1);
    const dividendo = cociente*d + residuo;
    const digits = String(dividendo).split('').map(Number);
    if(digits.length < 3 || digits.length > 4) continue;
    if(digits[0] < d) continue; // evita cociente con cero inicial
    return {d, dividendo, digits, cociente, residuo};
  }
  // Respaldo si se agotan los intentos. Debe cumplir la misma invariante que el
  // bucle (digits[0] >= d), o el cociente saldría con un cero inicial: 348 ÷ 4
  // empieza por 3 < 4 y pintaba "087".
  return {d:4, dividendo:968, digits:[9,6,8], cociente:242, residuo:0};
}

function roundCasita(){
  const p = makeDivisionLarga();
  const pasos = [];
  let r = 0;
  p.digits.forEach((dig,i)=>{
    const actual = r*10 + dig;
    const q = Math.floor(actual/p.d);
    const resto = actual % p.d;
    pasos.push({i, dig, actual, q, producto:q*p.d, resto});
    r = resto;
  });

  state = Object.assign({}, p, {pasos, paso:0, cocienteParcial:[], huboError:false, check:null});
  el('checkBtn').style.display = 'none';
  el('prompt').innerHTML = 'Resuelve ' + p.dividendo + ' ÷ ' + p.d + ' paso a paso.' +
    '<small>En cada paso, elige cuántas veces cabe el divisor.</small>';
  el('stage').innerHTML = '<div class="casita" id="casita"></div><div id="stepZone"></div>';
  drawCasita();
  askCasitaStep();
}

function drawCasita(){
  const {d, digits, pasos, paso, cocienteParcial} = state;
  const c = el('casita');
  let rows = '';

  // fila del cociente
  let qCells = '';
  for(let i=0;i<digits.length;i++){
    qCells += '<td>' + (cocienteParcial[i] !== undefined ? cocienteParcial[i] : '<span style="opacity:0.25;">·</span>') + '</td>';
  }
  rows += '<tr class="quotient-row"><td class="divisor-cell" style="border-bottom:none;">' + d + '</td>' + qCells + '</tr>';

  // fila del dividendo
  rows += '<tr><td style="border:none;"></td>' + digits.map(function(x,i){
    return '<td class="' + (i===paso ? 'blink' : '') + '" style="color:' + (i<=paso?'var(--ink)':'rgba(12,43,58,0.3)') + ';">' + x + '</td>';
  }).join('') + '</tr>';

  // Trabajo de los pasos ya resueltos.
  //
  // Alineación: en el paso k se divide \`actual\` (= resto anterior × 10 + dígito k),
  // así que el producto y el resto se escriben terminando en la columna del dígito
  // k, ocupando hacia la izquierda tantas columnas como cifras tengan. Un producto
  // de dos cifras queda a caballo entre dos columnas, que es justo lo que hace ver
  // que se está restando del número formado al "bajar" el dígito. Antes todo se
  // metía en una sola celda bajo la columna k, sin reflejar el algoritmo escrito.
  //
  // La raya de la resta abarca el ancho del minuendo (\`actual\`), no el del
  // producto, que puede ser más corto: 10 − 9 lleva raya de dos cifras.
  //
  // No se dibuja el signo −: en la notación de casita la resta va implícita bajo
  // la raya, y a la izquierda de la columna 1 está el divisor, no hay hueco.
  function filaNumero(texto, col, clase, anchoLinea){
    const chars = String(texto).split('');
    const ini = col - chars.length + 1;
    const iniLinea = anchoLinea === undefined ? null : col - String(anchoLinea).length + 1;
    let tds = '<td style="border:none;"></td>'; // columna del divisor, siempre vacía
    for(let i = 1; i <= digits.length; i++){
      const hayDigito = i >= ini && i <= col;
      const hayLinea = iniLinea !== null && i >= iniLinea && i <= col;
      const clases = [clase, hayLinea ? 'linea' : ''].filter(Boolean).join(' ');
      tds += '<td class="' + clases + '">' + (hayDigito ? chars[i - ini] : '') + '</td>';
    }
    return '<tr>' + tds + '</tr>';
  }

  for(let k=0;k<paso;k++){
    const s = pasos[k];
    rows += filaNumero(s.producto, k + 1, 'producto', s.actual);
    rows += filaNumero(s.resto, k + 1, 'resto');
  }

  c.innerHTML = '<table>' + rows + '</table>';
}

function askCasitaStep(){
  const {pasos, paso, d, dividendo, cociente, residuo} = state;
  if(paso >= pasos.length){
    el('prompt').innerHTML = '¡Terminaste!' +
      '<small style="color:var(--island-green);">' + dividendo + ' ÷ ' + d + ' = ' + cociente +
      (residuo>0 ? ' con residuo ' + residuo : ' (división exacta)') + '</small>';
    const resultado = residuo>0
      ? dividendo + ' ÷ ' + d + ' = ' + cociente + ' y sobran ' + residuo + '.'
      : dividendo + ' ÷ ' + d + ' = ' + cociente + ', división exacta.';
    // Una ronda = un resultado, igual que en las demás actividades. Antes se
    // sumaba un error por cada paso fallado Y un acierto al terminar, así que
    // una división con todos los pasos mal seguía contando como acierto.
    endRound(!state.huboError, state.huboError
      ? 'Terminaste con ayuda: ' + resultado
      : resultado);
    el('stepZone').innerHTML = '';
    return;
  }
  const s = pasos[paso];
  const zone = el('stepZone');
  zone.innerHTML = '<p style="text-align:center;font-family:\\'Baloo 2\\';font-size:20px;font-weight:700;">' +
    '¿Cuántas veces cabe ' + d + ' en ' + s.actual + '?</p><div class="options" id="stepOpts"></div>';

  makeOptions(s.q, 3, {min:0, max:9}).forEach(v=>{
    const b = document.createElement('button');
    b.className = 'opt';
    b.textContent = v;
    b.addEventListener('click', ()=>{
      document.querySelectorAll('#stepOpts .opt').forEach(x=>{
        x.disabled = true;
        if(+x.textContent === s.q) x.classList.add('correct');
      });
      if(+b.textContent === s.q){
        setFeedback('Correcto: ' + d + ' × ' + s.q + ' = ' + s.producto + ', y ' + s.actual + ' − ' + s.producto + ' = ' + s.resto, true);
        state.cocienteParcial[s.i] = s.q;
        state.paso++;
        setTimeout(()=>{ drawCasita(); askCasitaStep(); }, 1100);
      } else {
        b.classList.add('wrong');
        setFeedback('Fíjate: ' + d + ' × ' + s.q + ' = ' + s.producto + ', que sí cabe en ' + s.actual + '. Con ' + (+b.textContent) + ' no funciona.', false);
        state.cocienteParcial[s.i] = s.q;
        state.paso++;
        state.huboError = true;   // se puntúa una sola vez, al cerrar la ronda
        setTimeout(()=>{ drawCasita(); askCasitaStep(); }, 1600);
      }
    });
    el('stepOpts').appendChild(b);
  });
}

/* =========================================================
   ACTIVIDAD 4 (9-10): CARGAMENTO DE CAMIONES
   ========================================================= */
function roundCamiones(){
  const capacidad = [10,15,20,25,30,40][randInt(0,5)];
  const llenos = randInt(3,7);
  const sobran = randInt(1, capacidad-1);
  const total = llenos*capacidad + sobran;

  state = {capacidad, llenos, sobran, total, fase:'llenos', check:null};
  el('checkBtn').style.display = 'none';

  el('prompt').innerHTML = 'Hay ' + total + ' cajas 📦 y cada camión 🚚 carga ' + capacidad + ' cajas.' +
    '<small>¿Cuántos camiones se llenan por completo?</small>';

  el('stage').innerHTML = '<div id="truckZone"></div><div class="options" id="truckOpts"></div>';

  makeOptions(llenos, 2, {min:1}).forEach(v=>{
    const b = document.createElement('button');
    b.className = 'opt';
    b.textContent = v;
    b.addEventListener('click', ()=>{
      document.querySelectorAll('#truckOpts .opt').forEach(x=>{
        x.disabled = true;
        if(+x.textContent === llenos) x.classList.add('correct');
      });
      if(+b.textContent === llenos){
        drawTrucks();
        setFeedback('¡Correcto! ' + total + ' ÷ ' + capacidad + ' = ' + llenos + ' camiones llenos. Ahora, ¿cuántas cajas sobran?', true);
        askCajasSobran();
      } else {
        b.classList.add('wrong');
        drawTrucks();
        endRound(false, 'Eran ' + llenos + ' camiones: ' + total + ' ÷ ' + capacidad + ' = ' + llenos + ' y sobran ' + sobran + ' cajas.');
      }
    });
    el('truckOpts').appendChild(b);
  });
}

function drawTrucks(){
  const {llenos, sobran, capacidad} = state;
  let html = '<div class="trucks">';
  for(let i=0;i<llenos;i++){
    html += '<div class="truck"><span class="cap">🚚</span><span class="cap-label">' + capacidad + ' cajas</span></div>';
  }
  html += '<div class="truck" style="border-style:dashed;border-color:var(--coral);background:rgba(255,107,74,0.14);">' +
    '<span class="cap">📦</span><span class="cap-label">sobran ' + sobran + '</span></div>';
  html += '</div>';
  el('truckZone').innerHTML = html;
}

function askCajasSobran(){
  const {total, capacidad, llenos, sobran} = state;
  const zone = el('truckZone');
  const opts = document.createElement('div');
  opts.className = 'options';
  opts.id = 'sobranOpts';
  // El residuo vive en [1, capacidad-1]: se acota ahí para no ofrecer imposibles
  // y para no perder la opción correcta al filtrar.
  makeOptions(sobran, Math.max(2, Math.floor(capacidad/4)), {min:1, max:capacidad-1}).forEach(v=>{
    const b = document.createElement('button');
    b.className = 'opt';
    b.textContent = v;
    b.addEventListener('click', ()=>{
      document.querySelectorAll('#sobranOpts .opt').forEach(x=>{
        x.disabled = true;
        if(+x.textContent === sobran) x.classList.add('correct');
      });
      const good = +b.textContent === sobran;
      if(!good) b.classList.add('wrong');
      endRound(good, total + ' ÷ ' + capacidad + ' = ' + llenos + ' y sobran ' + sobran + '. Para llevar esas ' + sobran + ' cajas se necesitaría un camión más.');
    });
    opts.appendChild(b);
  });
  zone.appendChild(opts);
}

/* =========================================================
   ACTIVIDAD 3 (9-10): CAZADOR DE RESIDUOS
   Clasificación rápida: ¿exacta o con residuo? La comprobación se hace
   viendo los grupos completos y lo que sobra, resaltado aparte.
   ========================================================= */
function roundCazador(){
  const divisor = randInt(2,9);
  const grupos = randInt(2,7);
  // La mitad de las rondas son exactas, para que adivinar no funcione.
  const residuo = Math.random() < 0.5 ? 0 : randInt(1, divisor - 1);
  const total = grupos * divisor + residuo;

  state = {divisor, grupos, residuo, total, check: null};
  el('checkBtn').style.display = 'none';

  el('prompt').innerHTML = '<span style="font-size:1.25em;">' + total + ' ÷ ' + divisor + '</span>' +
    '<small>¿Se reparte exacto o sobra algo?</small>';

  el('stage').innerHTML =
    '<div class="options" id="cazaOpts">' +
      '<button class="opt" data-r="exacta">Exacta</button>' +
      '<button class="opt" data-r="residuo">Con residuo</button>' +
    '</div>' +
    '<div id="cazaVista"></div>';

  el('cazaOpts').addEventListener('click', function(ev){
    const b = ev.target.closest('.opt');
    if(!b) return;
    const acierto = (b.dataset.r === 'exacta') === (residuo === 0);
    const correcta = residuo === 0 ? 'exacta' : 'residuo';

    el('cazaOpts').querySelectorAll('.opt').forEach(function(x){
      x.disabled = true;
      if(x.dataset.r === correcta) x.classList.add('correct');
    });
    if(!acierto) b.classList.add('wrong');

    dibujarGrupos();
    endRound(acierto, residuo === 0
      ? total + ' ÷ ' + divisor + ' = ' + grupos + ' exacto: no sobra nada.'
      : total + ' ÷ ' + divisor + ' = ' + grupos + ' y sobran ' + residuo + '. Eso que sobra es el residuo.');
  });
}

function dibujarGrupos(){
  const {divisor, grupos, residuo, total} = state;
  let html = '<div class="grupos">';
  for(let g = 0; g < grupos; g++){
    html += '<div class="grupo">' + new Array(divisor).fill('<span class="bloque"></span>').join('') + '</div>';
  }
  if(residuo > 0){
    html += '<div class="grupo sobra">' + new Array(residuo).fill('<span class="bloque"></span>').join('') + '</div>';
  }
  html += '</div>';
  html += '<p class="tray-label" style="margin-top:10px;">' +
    grupos + ' ' + (grupos === 1 ? 'grupo completo' : 'grupos completos') + ' de ' + divisor +
    (residuo > 0 ? ' · <span style="color:var(--coral);">sobran ' + residuo + '</span>' : ' · no sobra nada') +
    ' &nbsp;=&nbsp; ' + total + '</p>';
  el('cazaVista').innerHTML = html;
}

/* =========================================================
   PROGRESO (vía el host → tabla taller_sesiones)
   ========================================================= */
async function saveProgreso(){
  if(score.ok + score.bad === 0) return;
  const entry = {actividad: currentAct.nombre, grupo: edad, aciertos: score.ok, errores: score.bad};
  try{
    await host.guardarSesion(entry);
    score = {ok:0, bad:0};   // ya quedó registrada; no duplicar al salir
  }catch(e){
    console.warn('No se pudo guardar la sesión:', e.message);
  }
}

async function loadProgreso(){
  const box = el('progList');
  box.innerHTML = '<p class="hint">Cargando…</p>';
  try{
    const list = await host.cargarSesiones();
    if(!list || list.length === 0){ box.innerHTML = '<p class="hint">Aún no hay sesiones guardadas.</p>'; return; }
    box.innerHTML = list.map(function(e){
      const tot = e.aciertos + e.errores;
      const pct = tot ? Math.round((e.aciertos/tot)*100) : 0;
      return '<div class="prog-entry"><span>📅 ' + e.fecha + ' · ' + e.grupo + ' años · ' + e.actividad + '</span>' +
        '<span>✅ ' + e.aciertos + ' ❌ ' + e.errores + ' — ' + pct + '% de acierto</span></div>';
    }).join('');
  }catch(e){
    box.innerHTML = '<p class="hint">No se pudo cargar el progreso (' + e.message + ').</p>';
  }
}
<\/script>
</body>
</html>
`,l={id:"divisiones",titulo:"Taller de Divisiones",materia:"Matemáticas",tema:"División",nivel:"primaria",edades:"7-10 años",icono:"➗",descripcion:"Siete actividades: reparto con el dedo, corrales con residuo, pizzas en fracciones, barras de cubitos, la casita paso a paso, problemas de camiones y clasificación de residuos.",actividades:[{id:"reparto",nombre:"Reparte las galletas",edades:"7-8",temas:["division-reparto"]},{id:"corrales",nombre:"Corrales de pollitos",edades:"7-8",temas:["division-reparto","residuo"]},{id:"pizza",nombre:"Divisor de pizzas",edades:"7-8",temas:["division-reparto","fracciones"]},{id:"barras",nombre:"Barras que se parten",edades:"7-8",temas:["division-reparto","fracciones"]},{id:"casita",nombre:"La casita paso a paso",edades:"9-10",temas:["division-algoritmo","division-exacta"]},{id:"camiones",nombre:"Cargamento de camiones",edades:"9-10",temas:["residuo","division-exacta","problemas-un-paso"]},{id:"cazador",nombre:"Cazador de residuos",edades:"9-10",temas:["residuo","division-exacta","multiplos-divisores"]}],objetivos:["Entender la división como reparto en partes iguales.","Repartir una unidad, no solo un conjunto, y conectarlo con la fracción.","Descubrir el residuo como lo que sobra del reparto.","Distinguir de un vistazo una división exacta de una con residuo.","Ejecutar el algoritmo de la división larga dígito por dígito."],render:{tipo:"html",html:T}},P=`<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Taller del Producto</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;700;800&family=Nunito:wght@600;700;800;900&display=swap" rel="stylesheet">
<style>
  :root{
    --ocean-deep:#0b3d5c; --ocean-mid:#146b93; --island-green:#2d9c64;
    --sand:#f4e4c1; --coral:#ff6b4a; --sun:#ffc93c; --violet:#8b6bd8; --teal:#2ec4c6;
    --ink:#0c2b3a; --white:#fdfaf1;
  }
  *{box-sizing:border-box;}
  html,body{margin:0;padding:0;}
  body{font-family:'Nunito',sans-serif;background:radial-gradient(ellipse at top, var(--ocean-mid) 0%, var(--ocean-deep) 65%);
    color:var(--white);min-height:100vh;display:flex;flex-direction:column;align-items:center;padding:18px;}
  h1,h2,h3,.display{font-family:'Baloo 2', sans-serif;}
  .wrap{width:100%;max-width:900px;}
  header{text-align:center;margin-bottom:14px;}
  header h1{font-size:clamp(25px,4.2vw,40px);margin:0 0 4px 0;text-shadow:0 3px 0 rgba(0,0,0,0.25);}
  header p{margin:0;opacity:0.85;font-weight:700;font-size:clamp(13px,1.6vw,16px);}

  .card{background:rgba(253,250,241,0.08);border:2px solid rgba(253,250,241,0.18);border-radius:22px;padding:24px;}
  .btn{font-family:'Baloo 2';font-weight:700;font-size:18px;border:none;border-radius:16px;padding:14px 26px;cursor:pointer;
    color:var(--ink);background:var(--sun);box-shadow:0 5px 0 rgba(0,0,0,0.25);transition:transform .08s ease;}
  .btn:active{transform:translateY(4px);box-shadow:0 1px 0 rgba(0,0,0,0.25);}
  .btn.secondary{background:var(--teal);}
  .btn.ghost{background:transparent;color:var(--white);border:2px solid rgba(253,250,241,0.4);box-shadow:none;}
  .btn.small{font-size:15px;padding:10px 18px;}
  .btn:disabled{opacity:0.4;cursor:not-allowed;}
  .row{display:flex;gap:12px;flex-wrap:wrap;align-items:center;justify-content:center;}
  .hint{font-size:13px;opacity:0.78;margin-top:10px;line-height:1.5;}
  .toggle-opt.selected{background:var(--sun);color:var(--ink);}

  .act-grid{display:grid;gap:14px;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));margin-top:16px;}
  .act-tile{background:rgba(0,0,0,0.22);border:2px solid rgba(253,250,241,0.15);border-radius:18px;padding:18px;cursor:pointer;
    text-align:left;color:var(--white);font-family:'Nunito';transition:transform .1s ease, border-color .1s ease;}
  .act-tile:hover{transform:translateY(-3px);border-color:var(--sun);}
  .act-tile .emoji{font-size:30px;display:block;margin-bottom:6px;}
  .act-tile strong{font-family:'Baloo 2';font-size:19px;display:block;margin-bottom:4px;}
  .act-tile span.desc{font-size:13px;opacity:0.8;line-height:1.4;}

  #activity{display:none;}
  .topbar{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:14px;flex-wrap:wrap;}
  .pill{background:rgba(0,0,0,0.28);border-radius:20px;padding:8px 16px;font-family:'Baloo 2';font-weight:700;font-size:14px;}

  .prompt{background:var(--sand);color:var(--ink);border-radius:18px;padding:18px 20px;text-align:center;
    font-family:'Baloo 2';font-size:clamp(19px,3vw,26px);font-weight:700;margin-bottom:16px;line-height:1.35;}
  .prompt small{display:block;font-family:'Nunito';font-size:13px;font-weight:700;opacity:0.7;margin-top:6px;}

  .feedback{min-height:26px;text-align:center;font-weight:800;font-size:15px;margin-top:14px;line-height:1.5;}
  .feedback.good{color:#8ff0bd;}
  .feedback.bad{color:#ffb3a1;}
  .actions{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:14px;}

  /* --- opciones --- */
  .opciones{display:flex;gap:12px;flex-wrap:wrap;justify-content:center;}
  .op{font-family:'Baloo 2';font-size:24px;font-weight:700;background:var(--white);color:var(--ink);
    border:3px solid rgba(11,61,92,0.15);border-radius:16px;padding:14px 26px;cursor:pointer;min-width:96px;
    transition:transform .08s ease, border-color .1s ease;}
  .op:hover:not(:disabled){transform:translateY(-2px);border-color:var(--teal);}
  .op.bien{background:var(--island-green);color:var(--white);border-color:var(--island-green);}
  .op.mal{background:var(--coral);color:var(--white);border-color:var(--coral);}
  .op.chica{font-size:19px;padding:10px 16px;min-width:72px;}

  /* --- pares e impares --- */
  .puntos{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;background:rgba(0,0,0,0.2);
    border-radius:16px;padding:18px;min-height:90px;align-items:center;}
  .punto{width:24px;height:24px;border-radius:50%;background:var(--teal);border:2px solid var(--ink);}
  .pareja{display:flex;gap:4px;background:rgba(46,196,198,0.18);border:2px solid var(--teal);
    border-radius:22px;padding:5px 7px;}
  .pareja.sola{background:rgba(255,107,74,0.2);border-color:var(--coral);border-style:dashed;}
  .pareja.sola .punto{background:var(--coral);}

  /* --- malla de múltiplos --- */
  .malla{display:grid;grid-template-columns:repeat(10,1fr);gap:5px;max-width:520px;margin:0 auto;}
  .celda{aspect-ratio:1;display:grid;place-items:center;border-radius:8px;background:rgba(253,250,241,0.12);
    border:2px solid transparent;font-weight:800;font-size:clamp(11px,2.2vw,15px);cursor:pointer;user-select:none;
    color:var(--white);transition:background .1s ease;}
  .celda:hover{background:rgba(253,250,241,0.24);}
  .celda.sel{background:var(--sun);color:var(--ink);}
  .celda.acierto{background:var(--island-green);color:var(--white);border-color:var(--island-green);}
  .celda.sobra{background:var(--coral);color:var(--white);}
  .celda.falta{border-color:var(--sun);border-style:dashed;}

  /* --- tablero posicional (×10) --- */
  .tablero{display:flex;gap:8px;justify-content:center;margin:6px 0 14px;}
  .col{display:flex;flex-direction:column;align-items:center;gap:6px;}
  .col .titulo{font-size:11px;font-weight:800;opacity:.7;letter-spacing:.04em;}
  .casilla{width:clamp(38px,9vw,54px);height:clamp(48px,11vw,64px);border-radius:12px;background:rgba(0,0,0,0.24);
    border:2px solid rgba(253,250,241,0.25);display:grid;place-items:center;
    font-family:'Baloo 2';font-weight:800;font-size:clamp(22px,5vw,30px);}
  .casilla.llena{background:var(--white);color:var(--ink);border-color:var(--white);}
  .casilla.nueva{background:var(--sun);color:var(--ink);border-color:var(--sun);}
  .marcador-num{text-align:center;font-family:'Baloo 2';font-size:clamp(20px,4vw,28px);font-weight:800;margin-bottom:10px;}
  .marcador-num .meta{color:var(--sun);}

  /* --- caja / modelo de área --- */
  .caja{display:grid;gap:6px;justify-content:center;margin:0 auto;}
  .caja .encab{display:grid;place-items:center;font-family:'Baloo 2';font-weight:800;font-size:18px;
    background:rgba(0,0,0,0.24);border-radius:10px;padding:8px 4px;}
  .celdaProd{background:rgba(253,250,241,0.12);border:2px dashed rgba(253,250,241,0.4);border-radius:12px;
    min-height:64px;display:grid;place-items:center;cursor:pointer;font-family:'Baloo 2';font-weight:800;
    font-size:clamp(18px,3.5vw,24px);padding:6px;}
  .celdaProd .chica{display:block;font-family:'Nunito';font-size:11px;font-weight:700;opacity:.65;}
  .celdaProd.activa{border-color:var(--sun);border-style:solid;background:rgba(255,201,60,0.16);}
  .celdaProd.lista{border-style:solid;border-color:var(--island-green);background:rgba(45,156,100,0.2);}
  .barras{display:flex;gap:8px;justify-content:center;margin:12px 0 4px;flex-wrap:wrap;}
  .trozo{border-radius:12px;padding:12px 10px;text-align:center;font-family:'Baloo 2';font-weight:800;
    border:2px solid var(--ink);color:var(--ink);}
  .trozo small{display:block;font-family:'Nunito';font-size:11px;opacity:.75;}
  .suma{text-align:center;font-family:'Baloo 2';font-size:clamp(20px,4vw,26px);font-weight:800;margin-top:12px;}

  /* --- pasos / recetas --- */
  .receta{background:rgba(0,0,0,0.24);border-left:5px solid var(--sun);border-radius:12px;padding:14px 16px;margin-bottom:14px;}
  .receta b{color:var(--sun);}
  .receta ol{margin:8px 0 0;padding-left:20px;}
  .receta li{margin-bottom:4px;font-size:14.5px;line-height:1.45;}
  .pasos{background:rgba(0,0,0,0.2);border-radius:12px;padding:12px 16px;margin-top:12px;text-align:left;
    font-size:14.5px;line-height:1.6;}
  .pasos code{font-family:'Baloo 2';font-size:17px;color:var(--sun);}

  .progreso{margin-top:22px;}
  .progreso summary{cursor:pointer;font-family:'Baloo 2';font-weight:700;font-size:15px;padding:6px 0;}
  .prog-entry{background:rgba(0,0,0,0.2);border-radius:12px;padding:9px 13px;margin-top:7px;font-size:13.5px;
    display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;}
  footer{opacity:0.55;font-size:12px;margin-top:20px;text-align:center;}
</style>
</head>
<body>
<div class="wrap">
  <header>
    <h1>🧮 Taller del Producto</h1>
    <p id="headerSub">Multiplicar entendiendo, no repitiendo la cuenta</p>
  </header>

  <!-- ===== SETUP ===== -->
  <div class="card" id="setup">
    <h3 class="display" style="margin-top:0;">¿Con qué grupo vas a trabajar?</h3>
    <div class="row" id="edadToggle">
      <button class="btn toggle-opt selected" data-val="8-9">🧒 8 y 9 años</button>
      <button class="btn ghost toggle-opt" data-val="10-12">🧑 10 a 12 años</button>
    </div>
    <p class="hint" id="edadHint"></p>

    <h3 class="display">Elige la actividad</h3>
    <div class="act-grid" id="actGrid"></div>
  </div>

  <!-- ===== ACTIVIDAD ===== -->
  <div id="activity">
    <div class="topbar">
      <div class="pill" id="actName">Actividad</div>
      <div class="pill" id="scorePill">✅ 0 · ❌ 0</div>
    </div>

    <div class="prompt" id="prompt"></div>
    <div id="stage"></div>
    <div class="feedback" id="feedback"></div>
    <div class="actions">
      <button class="btn secondary" id="checkBtn">Revisar</button>
      <button class="btn" id="nextBtn" style="display:none;">Siguiente ▶️</button>
      <button class="btn ghost small" id="backBtn">← Cambiar actividad</button>
    </div>

    <details class="progreso">
      <summary>📊 Progreso guardado</summary>
      <div id="progList"></div>
    </details>
  </div>

  <footer>El progreso se guarda en el expediente del alumno.</footer>
</div>

<script>
/* =========================================================
   PUENTE CON LA APP (TallerRunner.jsx)
   El taller corre dentro de un <iframe srcDoc>. No tiene acceso
   al cliente de Supabase, así que pide al padre que guarde/lea
   por postMessage. Si no hay padre (abierto suelto), degrada a
   modo sin persistencia en vez de fallar.
   ========================================================= */
const host = (function(){
  let seq = 0;
  const pendientes = new Map();

  window.addEventListener('message', (e) => {
    const m = e.data;
    if (!m || m.source !== 'taller-host' || !pendientes.has(m.rid)) return;
    const { resolve, reject } = pendientes.get(m.rid);
    pendientes.delete(m.rid);
    if (m.error) reject(new Error(m.error)); else resolve(m.payload);
  });

  function call(tipo, payload){
    if (window.parent === window) return Promise.reject(new Error('sin host'));
    const rid = ++seq;
    return new Promise((resolve, reject) => {
      pendientes.set(rid, {resolve, reject});
      window.parent.postMessage({source:'taller', rid, tipo, payload}, '*');
      setTimeout(() => {
        if (pendientes.has(rid)) { pendientes.delete(rid); reject(new Error('timeout')); }
      }, 8000);
    });
  }

  return {
    guardarSesion: (s) => call('guardar', s),
    cargarSesiones: ()  => call('cargar'),
  };
})();

let edad = '8-9';
let currentAct = null;
let score = {ok:0, bad:0};
let state = {};

const ACTIVIDADES = {
  '8-9': [
    {id:'pares',    emoji:'👣', nombre:'Parejas: par o impar', desc:'Forma parejas y descubre si sobra uno. Después, adivina si un producto será par sin multiplicarlo.'},
    {id:'multiplos',emoji:'🎯', nombre:'Cazador de múltiplos', desc:'Marca en la malla todos los múltiplos de un número y mira el patrón que se dibuja.'},
    {id:'ceros',    emoji:'🔟', nombre:'La máquina del ×10',   desc:'Cada ×10 corre las cifras un lugar. Llega al número que te piden a puros multiplicadores.'}
  ],
  '10-12': [
    {id:'descompon',emoji:'🧩', nombre:'Rompe el número',      desc:'23 × 4 es 20 × 4 más 3 × 4. Arma el producto por partes, sin la cuenta de siempre.'},
    {id:'caja',     emoji:'🗃️', nombre:'La caja de multiplicar', desc:'Dos cifras por dos cifras en cuatro casillas. El método de la caja, paso a paso.'},
    {id:'trucos',   emoji:'⚡', nombre:'Atajos del producto',   desc:'×5, ×9, ×11, dobles, terminados en 5 y compensar. Una receta por ronda, y a usarla.'},
    {id:'descarta', emoji:'🕵️', nombre:'Descarta sin calcular', desc:'Tres resultados son imposibles. Encuéntralos con paridad, última cifra y tamaño.'}
  ]
};

const HINTS = {
  '8-9':  'De 8 a 9 años el producto se construye antes de calcularse: pares e impares, múltiplos y qué le pasa a un número cuando lo multiplicas por 10.',
  '10-12':'De 10 a 12 años se multiplica sin la cuenta de siempre: se rompe el número, se usa la caja y se aplican atajos que se pueden hacer de cabeza.'
};

/* ---------- utilidades ---------- */
function randInt(a,b){ return Math.floor(Math.random()*(b-a+1))+a; }
function elegir(arr){ return arr[randInt(0,arr.length-1)]; }
function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){ const j = randInt(0,i); const t=a[i]; a[i]=a[j]; a[j]=t; }
  return a;
}
function fmt(n){ return n.toLocaleString('es-MX'); }
const el = id => document.getElementById(id);

// Opciones numéricas cercanas: si están lejos se contesta por descarte.
function opciones(resp, spread, cuantas){
  const total = cuantas || 4;
  const s = new Set([resp]);
  let t = 0;
  while(s.size < total && t < 300){
    t++;
    const v = resp + randInt(1,spread)*(Math.random()<0.5?-1:1);
    if(v > 0 && v !== resp) s.add(v);
  }
  let extra = 1;
  while(s.size < total) s.add(resp + spread + extra++);
  return shuffle([...s]);
}

// Bolsa sin reemplazo: un truco repetido dos rondas seguidas aburre.
const bolsas = {};
function tomar(clave, arr){
  if(!bolsas[clave] || bolsas[clave].length === 0) bolsas[clave] = shuffle(arr.map((_,i)=>i));
  return arr[bolsas[clave].pop()];
}

/* ---------- pantalla de inicio ---------- */
document.querySelectorAll('.toggle-opt').forEach(b=>{
  b.addEventListener('click', ()=>{
    edad = b.dataset.val;
    document.querySelectorAll('.toggle-opt').forEach(x=>{ x.classList.remove('selected'); x.classList.add('ghost'); });
    b.classList.add('selected'); b.classList.remove('ghost');
    el('edadHint').textContent = HINTS[edad];
    renderActGrid();
  });
});

function renderActGrid(){
  const grid = el('actGrid');
  grid.innerHTML = '';
  ACTIVIDADES[edad].forEach(a=>{
    const tile = document.createElement('button');
    tile.className = 'act-tile';
    tile.innerHTML = '<span class="emoji">' + a.emoji + '</span><strong>' + a.nombre + '</strong>' +
                     '<span class="desc">' + a.desc + '</span>';
    tile.addEventListener('click', ()=>startActivity(a));
    grid.appendChild(tile);
  });
}
el('edadHint').textContent = HINTS[edad];
renderActGrid();

function startActivity(a){
  currentAct = a;
  score = {ok:0, bad:0};
  el('setup').style.display = 'none';
  el('activity').style.display = 'block';
  el('actName').textContent = a.emoji + ' ' + a.nombre + ' · ' + edad + ' años';
  updateScore();
  loadProgreso();
  nextRound();
}

el('backBtn').addEventListener('click', async ()=>{
  await saveProgreso();
  el('activity').style.display = 'none';
  el('setup').style.display = 'block';
});

// Si se cierra la pestaña a media sesión, no perder el avance.
window.addEventListener('pagehide', ()=>{ saveProgreso(); });

function updateScore(){ el('scorePill').textContent = '✅ ' + score.ok + ' · ❌ ' + score.bad; }
function setFeedback(msg, good){
  const f = el('feedback');
  f.innerHTML = msg;
  f.className = 'feedback ' + (good === undefined ? '' : good ? 'good' : 'bad');
}
function endRound(good, msg){
  if(good) score.ok++; else score.bad++;
  updateScore();
  setFeedback(msg, good);
  el('checkBtn').style.display = 'none';
  el('nextBtn').style.display = 'inline-block';
}

el('nextBtn').addEventListener('click', nextRound);
el('checkBtn').addEventListener('click', ()=>{ if(state.check) state.check(); });

// Las declaraciones de función se izan, así que el mapa puede nombrarlas
// antes de que aparezcan más abajo.
const RONDAS = {
  pares:     roundPares,
  multiplos: roundMultiplos,
  ceros:     roundCeros,
  descompon: roundDescompon,
  caja:      roundCaja,
  trucos:    roundTrucos,
  descarta:  roundDescarta,
};

function nextRound(){
  setFeedback('');
  el('nextBtn').style.display = 'none';
  el('checkBtn').style.display = 'inline-block';
  el('stage').innerHTML = '';
  state = {};
  const ronda = RONDAS[currentAct.id];
  if(ronda) ronda();
}

// Actividades que se contestan tocando una opción: el botón "Revisar" estorba.
function sinRevisar(){ el('checkBtn').style.display = 'none'; }

/* =========================================================
   ACTIVIDAD 1 (8-9): PAREJAS — PAR O IMPAR
   Dos formas de la misma idea: contar de dos en dos y, después,
   deducir la paridad de un producto sin calcularlo.
   ========================================================= */
function roundPares(){
  sinRevisar();
  const modo = Math.random() < 0.55 ? 'numero' : 'producto';
  if(modo === 'numero') rondaParesNumero(); else rondaParesProducto();
}

function rondaParesNumero(){
  const n = randInt(7, 26);
  state = {n};

  el('prompt').innerHTML = '¿El número <b>' + n + '</b> es par o impar?' +
    '<small>Míralo formando parejas: si no sobra ninguno, es par.</small>';

  let puntos = '';
  for(let i = 0; i < n; i++) puntos += '<span class="punto"></span>';
  el('stage').innerHTML =
    '<div class="puntos" id="puntos">' + puntos + '</div>' +
    '<div class="opciones" style="margin-top:16px;">' +
      '<button class="op" data-v="par">Par</button>' +
      '<button class="op" data-v="impar">Impar</button>' +
    '</div>';

  el('stage').querySelectorAll('.op').forEach(b=>{
    b.addEventListener('click', ()=>{
      const esPar = n % 2 === 0;
      const bien = (b.dataset.v === 'par') === esPar;
      el('stage').querySelectorAll('.op').forEach(x=>{
        x.disabled = true;
        if((x.dataset.v === 'par') === esPar) x.classList.add('bien');
      });
      if(!bien) b.classList.add('mal');
      dibujarParejas(n);
      const mitad = Math.floor(n/2);
      endRound(bien, esPar
        ? '✅ ' + n + ' es <b>par</b>: se forman ' + mitad + ' parejas y no sobra nadie. ' + n + ' = 2 × ' + mitad + '.'
        : '❌ ' + n + ' es <b>impar</b>: se forman ' + mitad + ' parejas y sobra uno. ' + n + ' = 2 × ' + mitad + ' + 1.');
    });
  });
}

function dibujarParejas(n){
  let html = '';
  for(let i = 0; i + 1 < n; i += 2){
    html += '<span class="pareja"><span class="punto"></span><span class="punto"></span></span>';
  }
  if(n % 2 === 1) html += '<span class="pareja sola"><span class="punto"></span></span>';
  el('puntos').innerHTML = html;
}

function rondaParesProducto(){
  // Al menos un caso de cada tipo aparece seguido: se alterna el "molde".
  const molde = elegir(['par-par', 'par-impar', 'impar-impar']);
  const parRnd   = () => randInt(2, 12) * 2;
  const imparRnd = () => randInt(1, 12) * 2 + 1;
  const a = molde === 'impar-impar' ? imparRnd() : parRnd();
  const b = molde === 'par-par' ? parRnd() : imparRnd();
  const esPar = (a * b) % 2 === 0;

  el('prompt').innerHTML = 'Sin multiplicar: ¿el resultado de <b>' + a + ' × ' + b + '</b> será par o impar?' +
    '<small>Piensa en grupos: si uno de los dos números es par, puedes formar parejas con todo.</small>';

  el('stage').innerHTML =
    '<div class="opciones">' +
      '<button class="op" data-v="par">Par</button>' +
      '<button class="op" data-v="impar">Impar</button>' +
    '</div>';

  el('stage').querySelectorAll('.op').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const bien = (btn.dataset.v === 'par') === esPar;
      el('stage').querySelectorAll('.op').forEach(x=>{
        x.disabled = true;
        if((x.dataset.v === 'par') === esPar) x.classList.add('bien');
      });
      if(!bien) btn.classList.add('mal');
      const razon = esPar
        ? (a % 2 === 0 && b % 2 === 0
            ? 'Los dos factores son pares, así que el producto también.'
            : 'Uno de los factores (' + (a % 2 === 0 ? a : b) + ') es par: al repetirlo siempre se pueden formar parejas.')
        : 'Los dos factores son impares, y solo así el producto sale impar.';
      endRound(bien, (bien ? '✅ ' : '❌ ') + a + ' × ' + b + ' = ' + fmt(a*b) + ', que es ' +
        (esPar ? 'par' : 'impar') + '. ' + razon);
    });
  });
}

/* =========================================================
   ACTIVIDAD 2 (8-9): CAZADOR DE MÚLTIPLOS
   La malla del 60 en filas de 10: los múltiplos dibujan
   columnas y diagonales, y ese patrón es la tabla.
   ========================================================= */
const MALLA_MAX = 60;

function roundMultiplos(){
  const n = elegir([2,3,4,5,6,7,8,9,10,11]);
  const correctos = [];
  for(let i = n; i <= MALLA_MAX; i += n) correctos.push(i);
  state = {n, correctos, sel:new Set(), check:checkMultiplos};

  el('prompt').innerHTML = 'Toca todos los múltiplos de <b>' + n + '</b> que veas en la malla.' +
    '<small>Un múltiplo de ' + n + ' es lo que sale de multiplicar ' + n + ' por 1, por 2, por 3…</small>';

  let celdas = '';
  for(let i = 1; i <= MALLA_MAX; i++) celdas += '<div class="celda" data-n="' + i + '">' + i + '</div>';
  el('stage').innerHTML = '<div class="malla" id="malla">' + celdas + '</div>' +
    '<p class="hint" style="text-align:center;">Vuelve a tocar una casilla para quitarla.</p>';

  el('malla').querySelectorAll('.celda').forEach(c=>{
    c.addEventListener('click', ()=>{
      if(state.acabado) return;
      const v = +c.dataset.n;
      if(state.sel.has(v)){ state.sel.delete(v); c.classList.remove('sel'); }
      else { state.sel.add(v); c.classList.add('sel'); }
      setFeedback('');
    });
  });
}

function checkMultiplos(){
  const {n, correctos, sel} = state;
  if(sel.size === 0){ setFeedback('Marca al menos una casilla.'); return; }
  state.acabado = true;

  let faltan = 0, sobran = 0;
  el('malla').querySelectorAll('.celda').forEach(c=>{
    const v = +c.dataset.n;
    const esMult = v % n === 0;
    c.classList.remove('sel');
    if(esMult && sel.has(v)) c.classList.add('acierto');
    else if(esMult){ c.classList.add('falta'); faltan++; }
    else if(sel.has(v)){ c.classList.add('sobra'); sobran++; }
  });

  const bien = faltan === 0 && sobran === 0;
  const tabla = correctos.slice(0, 6).map((v,i)=> n + '×' + (i+1) + '=' + v).join(' · ');
  endRound(bien, (bien
      ? '✅ ¡Completos! Son ' + correctos.length + ' múltiplos de ' + n + ' hasta ' + MALLA_MAX + '.'
      : '❌ Te faltaron ' + faltan + ' y sobraron ' + sobran + '.') +
    '<div class="pasos">Los múltiplos de ' + n + ' son la tabla del ' + n + ':<br><code>' + tabla + ' …</code></div>');
}

/* =========================================================
   ACTIVIDAD 3 (8-9): LA MÁQUINA DEL ×10
   No es "agregar un cero": cada ×10 corre las cifras un lugar
   a la izquierda y el 0 solo llena el hueco de las unidades.
   ========================================================= */
// Seis columnas: el número más grande alcanzable es 99 × 1 000 y, si el alumno
// se pasa un ×10, 990 000. Con menos columnas el tablero se desbordaría.
const COLUMNAS = ['CM', 'DM', 'UM', 'C', 'D', 'U'];
const NOMBRE_COL = {CM:'Centenas de millar', DM:'Decenas de millar', UM:'Unidades de millar',
                    C:'Centenas', D:'Decenas', U:'Unidades'};

function roundCeros(){
  sinRevisar();
  const base = elegir([randInt(2,9), randInt(12,99), randInt(12,99)]);
  const pasos = randInt(1,3);
  const meta = base * Math.pow(10, pasos);
  state = {base, meta, actual: base, pasos, usados: 0};

  el('prompt').innerHTML = 'Convierte <b>' + fmt(base) + '</b> en <b>' + fmt(meta) + '</b>.' +
    '<small>Cada vez que aprietas ×10, todas las cifras se corren un lugar a la izquierda.</small>';

  el('stage').innerHTML =
    '<div class="marcador-num"><span id="numActual">' + fmt(base) + '</span> ' +
      '<span style="opacity:.5;">→</span> <span class="meta">' + fmt(meta) + '</span></div>' +
    '<div class="tablero" id="tablero"></div>' +
    '<div class="row">' +
      '<button class="btn" id="por10Btn">× 10</button>' +
      '<button class="btn ghost small" id="undoBtn">↺ Empezar de nuevo</button>' +
    '</div>';

  el('por10Btn').addEventListener('click', ()=>{
    if(state.acabado) return;
    state.actual *= 10;
    state.usados++;
    dibujarTablero(true);
    el('numActual').textContent = fmt(state.actual);
    if(state.actual === state.meta){
      state.acabado = true;
      const ceros = state.usados === 1 ? 'un cero' : state.usados + ' ceros';
      endRound(true, '✅ ' + fmt(base) + ' × ' + fmt(Math.pow(10, state.usados)) + ' = ' + fmt(meta) + '.' +
        '<div class="pasos">Apretaste ×10 ' + state.usados + ' ' + (state.usados === 1 ? 'vez' : 'veces') +
        ', así que cada cifra se corrió ' + state.usados + ' ' + (state.usados === 1 ? 'lugar' : 'lugares') +
        ' a la izquierda. Los ' + ceros + ' del final solo llenan los huecos que quedaron en las unidades.</div>');
    } else if(state.actual > state.meta){
      state.acabado = true;
      endRound(false, '❌ Te pasaste: llegaste a ' + fmt(state.actual) + ' y la meta era ' + fmt(meta) + '.' +
        '<div class="pasos">De ' + fmt(base) + ' a ' + fmt(meta) + ' hay ' + state.pasos + ' ' +
        (state.pasos === 1 ? 'salto' : 'saltos') + ' de ×10, o sea × ' + fmt(Math.pow(10, state.pasos)) + '.</div>');
    }
  });

  el('undoBtn').addEventListener('click', ()=>{
    if(state.acabado) return;
    state.actual = state.base;
    state.usados = 0;
    dibujarTablero(false);
    el('numActual').textContent = fmt(state.base);
    setFeedback('');
  });

  dibujarTablero(false);
}

function dibujarTablero(resaltarNuevas){
  const cifras = String(state.actual).padStart(COLUMNAS.length, ' ').split('');
  const nuevas = state.usados;   // los últimos \`usados\` lugares son ceros recién llegados
  let html = '';
  cifras.forEach((c, i)=>{
    const hueca = c === ' ';
    const esNueva = resaltarNuevas && !hueca && i > COLUMNAS.length - 1 - nuevas;
    html += '<div class="col">' +
      '<span class="titulo" title="' + NOMBRE_COL[COLUMNAS[i]] + '">' + COLUMNAS[i] + '</span>' +
      '<div class="casilla ' + (hueca ? '' : esNueva ? 'nueva' : 'llena') + '">' + (hueca ? '' : c) + '</div>' +
    '</div>';
  });
  el('tablero').innerHTML = html;
}

/* =========================================================
   ACTIVIDAD 4 (10-12): ROMPE EL NÚMERO
   Distributiva con un factor de una cifra, que es la puerta
   de entrada a la caja.
   ========================================================= */
function roundDescompon(){
  sinRevisar();
  let a = randInt(12, 49);
  if(a % 10 === 0) a += 3;
  const b = randInt(3, 9);
  const dec = Math.floor(a/10)*10, uni = a % 10;

  state = {a, b, dec, uni, paso: 0, fallos: 0};

  el('prompt').innerHTML = 'Calcula <b>' + a + ' × ' + b + '</b> rompiendo el ' + a + '.' +
    '<small>' + a + ' = ' + dec + ' + ' + uni + ', así que ' + a + ' × ' + b + ' = ' + dec + ' × ' + b + ' + ' + uni + ' × ' + b + '.</small>';

  el('stage').innerHTML =
    '<div class="barras">' +
      '<div class="trozo" id="trozoA" style="background:#2ec4c6;min-width:130px;">' + dec + ' × ' + b + '<small>la parte grande</small></div>' +
      '<div class="trozo" id="trozoB" style="background:#ffc93c;min-width:90px;">' + uni + ' × ' + b + '<small>la parte chica</small></div>' +
    '</div>' +
    '<div class="suma" id="preguntaPaso"></div>' +
    '<div class="opciones" id="ops" style="margin-top:12px;"></div>';

  pasoDescompon();
}

function pasoDescompon(){
  const {a, b, dec, uni, paso} = state;
  const parcial1 = dec * b, parcial2 = uni * b;
  const preguntas = [
    {texto: '¿Cuánto es ' + dec + ' × ' + b + '?', resp: parcial1, spread: Math.max(6, dec/2)},
    {texto: '¿Cuánto es ' + uni + ' × ' + b + '?', resp: parcial2, spread: 6},
    {texto: '¿Cuánto es ' + fmt(parcial1) + ' + ' + fmt(parcial2) + '?', resp: a*b, spread: 9},
  ];
  const q = preguntas[paso];
  el('preguntaPaso').textContent = q.texto;

  const caja = el('ops');
  caja.innerHTML = '';
  opciones(q.resp, Math.round(q.spread)).forEach(v=>{
    const btn = document.createElement('button');
    btn.className = 'op chica';
    btn.textContent = fmt(v);
    btn.addEventListener('click', ()=>{
      if(state.acabado) return;
      const bien = v === q.resp;
      caja.querySelectorAll('.op').forEach(x=>{
        x.disabled = true;
        if(x.textContent === fmt(q.resp)) x.classList.add('bien');
      });
      if(!bien){ btn.classList.add('mal'); state.fallos++; }
      if(paso === 0) el('trozoA').innerHTML = dec + ' × ' + b + '<small>= ' + fmt(parcial1) + '</small>';
      if(paso === 1) el('trozoB').innerHTML = uni + ' × ' + b + '<small>= ' + fmt(parcial2) + '</small>';

      if(paso < 2){
        state.paso++;
        setTimeout(pasoDescompon, 550);
      } else {
        state.acabado = true;
        endRound(state.fallos === 0,
          (state.fallos === 0 ? '✅ ' : '❌ ') + a + ' × ' + b + ' = ' + fmt(a*b) + '.' +
          '<div class="pasos"><code>' + a + ' × ' + b + ' = (' + dec + ' + ' + uni + ') × ' + b +
          ' = ' + fmt(parcial1) + ' + ' + fmt(parcial2) + ' = ' + fmt(a*b) + '</code><br>' +
          'La parte grande sale sola: ' + (dec/10) + ' × ' + b + ' = ' + (dec/10*b) + ', y se le pega un cero.</div>');
      }
    });
    caja.appendChild(btn);
  });
}

/* =========================================================
   ACTIVIDAD 5 (10-12): LA CAJA DE MULTIPLICAR
   Dos cifras por dos cifras en cuatro productos parciales.
   Es el algoritmo "de siempre" abierto: nada se lleva.
   ========================================================= */
function roundCaja(){
  sinRevisar();
  let a = randInt(12, 49), b = randInt(12, 39);
  if(a % 10 === 0) a += 3;
  if(b % 10 === 0) b += 4;
  const aD = Math.floor(a/10)*10, aU = a % 10;
  const bD = Math.floor(b/10)*10, bU = b % 10;
  const celdas = [
    {id:0, f1:aD, f2:bD}, {id:1, f1:aU, f2:bD},
    {id:2, f1:aD, f2:bU}, {id:3, f1:aU, f2:bU},
  ].map(c => ({...c, val: c.f1 * c.f2}));

  state = {a, b, aD, aU, bD, bU, celdas, hechas:0, fallos:0};

  el('prompt').innerHTML = 'Llena la caja para calcular <b>' + a + ' × ' + b + '</b>.' +
    '<small>' + a + ' = ' + aD + ' + ' + aU + ' y ' + b + ' = ' + bD + ' + ' + bU + '. Cada casilla es un pedacito del producto.</small>';

  el('stage').innerHTML =
    '<div class="caja" style="grid-template-columns:64px 1fr 1fr;max-width:460px;">' +
      '<div></div>' +
      '<div class="encab">' + aD + '</div>' +
      '<div class="encab">' + aU + '</div>' +
      '<div class="encab">' + bD + '</div>' +
      '<div class="celdaProd" data-c="0">?<span class="chica">' + aD + ' × ' + bD + '</span></div>' +
      '<div class="celdaProd" data-c="1">?<span class="chica">' + aU + ' × ' + bD + '</span></div>' +
      '<div class="encab">' + bU + '</div>' +
      '<div class="celdaProd" data-c="2">?<span class="chica">' + aD + ' × ' + bU + '</span></div>' +
      '<div class="celdaProd" data-c="3">?<span class="chica">' + aU + ' × ' + bU + '</span></div>' +
    '</div>' +
    '<div class="suma" id="preguntaCaja"></div>' +
    '<div class="opciones" id="ops" style="margin-top:12px;"></div>';

  pasoCaja();
}

function pasoCaja(){
  const {celdas, hechas} = state;
  el('stage').querySelectorAll('.celdaProd').forEach(c=>c.classList.remove('activa'));

  if(hechas < 4){
    const c = celdas[hechas];
    const nodo = el('stage').querySelector('.celdaProd[data-c="' + c.id + '"]');
    nodo.classList.add('activa');
    el('preguntaCaja').textContent = '¿Cuánto es ' + c.f1 + ' × ' + c.f2 + '?';
    pintarOpcionesCaja(c.val, Math.max(8, Math.round(c.val/6)), (bien)=>{
      nodo.classList.remove('activa');
      nodo.classList.add('lista');
      nodo.innerHTML = fmt(c.val) + '<span class="chica">' + c.f1 + ' × ' + c.f2 + '</span>';
      state.hechas++;
      if(!bien) state.fallos++;
      setTimeout(pasoCaja, 480);
    });
    return;
  }

  // Último paso: sumar los cuatro pedazos.
  const total = state.a * state.b;
  const suma = celdas.map(c => fmt(c.val)).join(' + ');
  el('preguntaCaja').textContent = 'Ahora suma: ' + suma;
  pintarOpcionesCaja(total, Math.max(12, Math.round(total/25)), (bien)=>{
    if(!bien) state.fallos++;
    state.acabado = true;
    endRound(state.fallos === 0,
      (state.fallos === 0 ? '✅ ' : '❌ ') + state.a + ' × ' + state.b + ' = ' + fmt(total) + '.' +
      '<div class="pasos"><code>(' + state.aD + ' + ' + state.aU + ') × (' + state.bD + ' + ' + state.bU + ')</code><br>' +
      suma + ' = <b>' + fmt(total) + '</b><br>' +
      'La casilla grande (' + state.aD + ' × ' + state.bD + ') ya da el tamaño del resultado: por eso se puede estimar antes de terminar.</div>');
  });
}

function pintarOpcionesCaja(resp, spread, alContestar){
  const caja = el('ops');
  caja.innerHTML = '';
  opciones(resp, spread).forEach(v=>{
    const btn = document.createElement('button');
    btn.className = 'op chica';
    btn.textContent = fmt(v);
    btn.addEventListener('click', ()=>{
      if(state.acabado) return;
      const bien = v === resp;
      caja.querySelectorAll('.op').forEach(x=>{
        x.disabled = true;
        if(x.textContent === fmt(resp)) x.classList.add('bien');
      });
      if(!bien) btn.classList.add('mal');
      alContestar(bien);
    });
    caja.appendChild(btn);
  });
}

/* =========================================================
   ACTIVIDAD 6 (10-12): ATAJOS DEL PRODUCTO
   Cada ronda enseña una receta y pide usarla. Son los atajos
   que sirven de cabeza, no una segunda cuenta escrita.
   ========================================================= */
const TRUCOS = [
  {
    id:'por5', nombre:'Multiplicar por 5',
    regla:'Multiplica por 10 y saca la mitad. Es más rápido que la tabla del 5.',
    genera(){
      const n = randInt(12, 98) * 2;   // par: la mitad sale exacta
      return {a:n, b:5, resp:n*5, pasos:[n + ' × 10 = ' + fmt(n*10), 'la mitad de ' + fmt(n*10) + ' es ' + fmt(n*5)]};
    }
  },
  {
    id:'por9', nombre:'Multiplicar por 9',
    regla:'Multiplica por 10 y quita una vez el número: 9 veces es 10 veces menos 1 vez.',
    genera(){
      const n = randInt(12, 99);
      return {a:n, b:9, resp:n*9, pasos:[n + ' × 10 = ' + fmt(n*10), fmt(n*10) + ' − ' + n + ' = ' + fmt(n*9)]};
    }
  },
  {
    id:'por11', nombre:'Multiplicar por 11 (dos cifras)',
    regla:'Separa las dos cifras y pon en medio su suma. Solo funciona directo si la suma es menor que 10.',
    genera(){
      let d, u;
      do { d = randInt(1,8); u = randInt(1,8); } while (d + u > 9);
      const n = d*10 + u;
      return {a:n, b:11, resp:n*11,
        pasos:['separa el ' + d + ' y el ' + u + ': ' + d + ' _ ' + u,
               'en medio va ' + d + ' + ' + u + ' = ' + (d+u),
               'queda ' + fmt(n*11)]};
    }
  },
  {
    id:'dobles', nombre:'Multiplicar por 4 y por 8',
    regla:'Por 4 es doblar dos veces. Por 8 es doblar tres veces. Nunca hay que llevar nada.',
    genera(){
      let n = randInt(13, 89);
      if(n % 10 === 0) n += 3;      // ×4 sobre un múltiplo de 10 no entrena nada
      const b = elegir([4,8]);
      const p = [n + ' × 2 = ' + fmt(n*2), fmt(n*2) + ' × 2 = ' + fmt(n*4)];
      if(b === 8) p.push(fmt(n*4) + ' × 2 = ' + fmt(n*8));
      return {a:n, b, resp:n*b, pasos:p};
    }
  },
  {
    id:'termina5', nombre:'Números que terminan en 5, al cuadrado',
    regla:'Toma la cifra de las decenas, multiplícala por el número que le sigue y pégale 25 al final.',
    genera(){
      const d = randInt(2, 9);
      const n = d*10 + 5;
      return {a:n, b:n, resp:n*n,
        pasos:[d + ' × ' + (d+1) + ' = ' + (d*(d+1)), 'le pegas 25: ' + fmt(n*n)]};
    }
  },
  {
    id:'compensa', nombre:'Redondear y compensar',
    regla:'Sube el número feo a la decena de arriba, multiplica fácil y quita lo que subiste de más.',
    genera(){
      const n = elegir([19, 29, 39, 49, 18, 28, 48, 98]);
      const b = randInt(3, 9);
      const redondo = Math.ceil(n/10)*10;
      const sobra = redondo - n;
      return {a:n, b, resp:n*b,
        pasos:[redondo + ' × ' + b + ' = ' + fmt(redondo*b),
               'subiste ' + sobra + ' por cada uno de los ' + b + ': quita ' + sobra + ' × ' + b + ' = ' + (sobra*b),
               fmt(redondo*b) + ' − ' + (sobra*b) + ' = ' + fmt(n*b)]};
    }
  },
  {
    id:'difcuadrados', nombre:'Los dos que rodean a un redondo',
    regla:'Si los dos números están a la misma distancia de un número redondo, eleva el redondo al cuadrado y quita esa distancia al cuadrado.',
    genera(){
      const c = elegir([20, 30, 40, 50]);
      const d = randInt(1, 3);
      return {a:c-d, b:c+d, resp:(c-d)*(c+d),
        pasos:[c + ' × ' + c + ' = ' + fmt(c*c),
               'la distancia es ' + d + ': ' + d + ' × ' + d + ' = ' + (d*d),
               fmt(c*c) + ' − ' + (d*d) + ' = ' + fmt((c-d)*(c+d))]};
    }
  },
];

function roundTrucos(){
  sinRevisar();
  const truco = tomar('trucos', TRUCOS);
  const caso = truco.genera();
  state = {truco, caso};

  el('prompt').innerHTML = '¿Cuánto es <b>' + caso.a + ' × ' + caso.b + '</b>?' +
    '<small>Usa el atajo de abajo. Hazlo de cabeza, sin escribir la cuenta.</small>';

  el('stage').innerHTML =
    '<div class="receta"><b>' + truco.nombre + '</b><br>' + truco.regla + '</div>' +
    '<div class="opciones" id="ops"></div>';

  const caja = el('ops');
  // Distractores del tamaño del resultado: si son muy distintos, se adivina.
  opciones(caso.resp, Math.max(9, Math.round(caso.resp/12))).forEach(v=>{
    const btn = document.createElement('button');
    btn.className = 'op chica';
    btn.textContent = fmt(v);
    btn.addEventListener('click', ()=>{
      if(state.acabado) return;
      state.acabado = true;
      const bien = v === caso.resp;
      caja.querySelectorAll('.op').forEach(x=>{
        x.disabled = true;
        if(x.textContent === fmt(caso.resp)) x.classList.add('bien');
      });
      if(!bien) btn.classList.add('mal');
      endRound(bien, (bien ? '✅ ' : '❌ ') + caso.a + ' × ' + caso.b + ' = ' + fmt(caso.resp) + '.' +
        '<div class="pasos"><b>' + truco.nombre + '</b><br>' +
        caso.pasos.map((p,i)=>(i+1) + '. ' + p).join('<br>') + '</div>');
    });
    caja.appendChild(btn);
  });
}

/* =========================================================
   ACTIVIDAD 7 (10-12): DESCARTA SIN CALCULAR
   Cierra el taller: paridad, última cifra y estimación puestas
   a trabajar para revisar un resultado.
   ========================================================= */
function roundDescarta(){
  sinRevisar();
  let a = randInt(13, 49), b = randInt(12, 29);
  if(a % 10 === 0) a += 3;
  if(b % 10 === 0) b += 2;
  const resp = a * b;

  // Cada distractor falla por una razón distinta y explicable. El signo se
  // sortea: si todos quedaran arriba, la respuesta sería siempre la más chica
  // de las tres parecidas y se contestaría sin razonar nada.
  const s1 = Math.random() < 0.5 ? 1 : -1;
  const s2 = Math.random() < 0.5 ? 1 : -1;
  const malParidad = resp + 3 * s1;             // ±3 siempre cambia la paridad
  const ultima = resp % 10;
  let malUltima = resp + 2 * s2;
  while(malUltima % 10 === ultima || malUltima % 2 !== resp % 2 || malUltima === malParidad){
    malUltima += 2 * s2;
  }
  const malTamano = Math.random() < 0.5 ? resp * 10 : Math.round(resp / 4);

  const lista = shuffle([resp, malParidad, malUltima, malTamano]);
  state = {a, b, resp, malParidad, malUltima, malTamano};

  el('prompt').innerHTML = 'De estos cuatro, solo uno puede ser <b>' + a + ' × ' + b + '</b>. ¿Cuál?' +
    '<small>No lo calcules completo: usa la paridad, la última cifra y el tamaño aproximado.</small>';

  el('stage').innerHTML = '<div class="opciones" id="ops"></div>' +
    '<div class="receta" style="margin-top:16px;"><b>Las tres preguntas</b>' +
      '<ol><li>¿El resultado debe ser par o impar?</li>' +
      '<li>¿En qué cifra tiene que terminar? (mira ' + (a%10) + ' × ' + (b%10) + ')</li>' +
      '<li>¿De qué tamaño debe ser? (' + Math.round(a/10)*10 + ' × ' + Math.round(b/10)*10 + ' se le parece)</li></ol></div>';

  const caja = el('ops');
  lista.forEach(v=>{
    const btn = document.createElement('button');
    btn.className = 'op chica';
    btn.textContent = fmt(v);
    btn.addEventListener('click', ()=>{
      if(state.acabado) return;
      state.acabado = true;
      const bien = v === resp;
      caja.querySelectorAll('.op').forEach(x=>{
        x.disabled = true;
        if(x.textContent === fmt(resp)) x.classList.add('bien');
      });
      if(!bien) btn.classList.add('mal');
      const aprox = Math.round(a/10)*10 * (Math.round(b/10)*10);
      endRound(bien, (bien ? '✅ ' : '❌ ') + a + ' × ' + b + ' = ' + fmt(resp) + '.' +
        '<div class="pasos">' +
        '<b>' + fmt(malParidad) + '</b> se cae por paridad: ' + a + ' × ' + b + ' es ' +
          (resp % 2 === 0 ? 'par' : 'impar') + '.<br>' +
        '<b>' + fmt(malUltima) + '</b> se cae por la última cifra: ' + (a%10) + ' × ' + (b%10) + ' = ' +
          ((a%10)*(b%10)) + ', así que tiene que terminar en ' + ultima + '.<br>' +
        '<b>' + fmt(malTamano) + '</b> se cae por el tamaño: ' + Math.round(a/10)*10 + ' × ' +
          Math.round(b/10)*10 + ' = ' + fmt(aprox) + ', y el resultado debe andar por ahí.</div>');
    });
    caja.appendChild(btn);
  });
}

/* =========================================================
   PROGRESO (vía el host → tabla taller_sesiones)
   ========================================================= */
async function saveProgreso(){
  if(score.ok + score.bad === 0) return;
  const entry = {actividad: currentAct.nombre, grupo: edad, aciertos: score.ok, errores: score.bad};
  try{
    await host.guardarSesion(entry);
    score = {ok:0, bad:0};   // ya quedó registrada; no duplicar al salir
  }catch(e){
    console.warn('No se pudo guardar la sesión:', e.message);
  }
}

async function loadProgreso(){
  const box = el('progList');
  box.innerHTML = '<p class="hint">Cargando…</p>';
  try{
    const list = await host.cargarSesiones();
    if(!list || list.length === 0){ box.innerHTML = '<p class="hint">Aún no hay sesiones guardadas.</p>'; return; }
    box.innerHTML = list.map(function(e){
      const tot = e.aciertos + e.errores;
      const pct = tot ? Math.round((e.aciertos/tot)*100) : 0;
      return '<div class="prog-entry"><span>📅 ' + e.fecha + ' · ' + e.grupo + ' años · ' + e.actividad + '</span>' +
        '<span>✅ ' + e.aciertos + ' ❌ ' + e.errores + ' — ' + pct + '% de acierto</span></div>';
    }).join('');
  }catch(e){
    box.innerHTML = '<p class="hint">No se pudo cargar el progreso (' + e.message + ').</p>';
  }
}
<\/script>
</body>
</html>
`,c={id:"producto",titulo:"Taller del Producto",materia:"Matemáticas",tema:"Multiplicación",nivel:"primaria",edades:"8-12 años",icono:"🧮",descripcion:"Siete actividades. De 8 a 9 años: pares e impares con parejas, cazador de múltiplos en la malla y la máquina del ×10 sobre el tablero posicional. De 10 a 12: romper el número, la caja de multiplicar (dos cifras por dos cifras sin el algoritmo de columnas), siete atajos de cálculo mental y descartar resultados imposibles sin calcular.",actividades:[{id:"pares",nombre:"Parejas: par o impar",edades:"8-9",temas:["multiplos-divisores","multiplicacion"]},{id:"multiplos",nombre:"Cazador de múltiplos",edades:"8-9",temas:["multiplos-divisores","multiplicacion","series"]},{id:"ceros",nombre:"La máquina del ×10",edades:"8-9",temas:["potencias-diez","valor-posicional","multiplicacion"]},{id:"descompon",nombre:"Rompe el número",edades:"10-12",temas:["distributiva","multiplicacion","calculo-mental"]},{id:"caja",nombre:"La caja de multiplicar",edades:"10-12",temas:["distributiva","multiplicacion"]},{id:"trucos",nombre:"Atajos del producto",edades:"10-12",temas:["calculo-mental","multiplicacion","potencias-diez"]},{id:"descarta",nombre:"Descarta sin calcular",edades:"10-12",temas:["estimacion","multiplos-divisores","multiplicacion"]}],objetivos:["Reconocer un número par por lo que significa: se puede repartir en parejas sin que sobre nadie.","Deducir si un producto será par o impar sin multiplicarlo.","Ver los múltiplos de un número como su tabla, y el patrón que dibujan en la malla.","Entender el ×10 como un corrimiento de cifras, no como «agregar un cero».","Descomponer un factor y multiplicar por partes (propiedad distributiva).","Resolver dos cifras por dos cifras con la caja, sin el algoritmo de columnas.","Aplicar atajos de cabeza: ×5, ×9, ×11, dobles, terminados en 5, redondear y compensar.","Revisar un resultado con paridad, última cifra y estimación antes de darlo por bueno."],render:{tipo:"html",html:P}},d={id:"pizzas-cajas-vasos",titulo:"Pizzas, Cajas y Vasos",materia:"Matemáticas",tema:"Multiplicación, división y fracciones",nivel:"primaria",edades:"7-10 años",icono:"🍕",descripcion:"Tres juegos con la misma interfaz: la pizzería reparte rebanadas en cajas y descubre el residuo, la fábrica arma cajas iguales para ver la multiplicación como grupos, y los vasos medidores llenan, comparan y emparejan fracciones. Todo se genera al vuelo y se ajusta al bloque de edad que elija el maestro al empezar.",actividades:[{id:"pizzeria",nombre:"La Pizzería",edades:"7-10",temas:["division-reparto","residuo","division-exacta","problemas-un-paso"]},{id:"fabrica",nombre:"La Fábrica de Cajas",edades:"7-10",temas:["multiplicacion","problemas-un-paso"]},{id:"huerto",nombre:"El Huerto",edades:"9-10",temas:["multiplicacion","perimetro-area","distributiva"]},{id:"vasos-llenar",nombre:"Vasos: llenar hasta la marca",edades:"7-10",temas:["fracciones"]},{id:"vasos-comparar",nombre:"Vasos: ¿cuál tiene más?",edades:"7-10",temas:["fracciones","comparar-fracciones"]},{id:"vasos-equivalencias",nombre:"Vasos: valen lo mismo",edades:"9-10",temas:["fracciones","fracciones-equivalentes"]}],objetivos:["Repartir una cantidad en grupos iguales y ver que lo que no alcanza a llenar un grupo es el residuo.","Entender que para llevarse lo que sobra hace falta una caja más: el residuo con consecuencia.","Distinguir una división exacta de una que deja sobrante, sin dar por hecho que siempre sobra.","Leer la multiplicación como grupos iguales y no como una tabla memorizada.","Reconocer el producto en el rectángulo del huerto, puente hacia el área y hacia la división.","Representar una fracción contando las partes en que se dividió el entero.","Descubrir que entre más partes, más chico es cada pedazo: 1/3 es menos que 1/2.","Emparejar fracciones equivalentes viendo que llegan a la misma altura."],render:{tipo:"react",componente:"pizzas-cajas-vasos"}},p={id:"el-terreno",titulo:"El Terreno",materia:"Matemáticas",tema:"Perímetro y área",nivel:"primaria",edades:"7-10 años",icono:"🚧",descripcion:"Dos juegos para introducir perímetro y área sin fórmulas: se pone la cerca tramo por tramo por la orilla y se siembra el pasto cuadro por cuadro por dentro, sobre el mismo terreno. El segundo reparte la misma cerca en terrenos distintos para descubrir que el pasto cambia aunque la cerca no.",actividades:[{id:"cerca-pasto",nombre:"La Cerca y el Pasto",edades:"7-10",temas:["perimetro-area","figuras","multiplicacion","problemas-un-paso"]},{id:"misma-cerca",nombre:"La misma cerca, distinto terreno",edades:"7-10",temas:["perimetro-area","multiplicacion","estimacion"]}],objetivos:["Separar las dos medidas por la acción: la cerca va por la orilla, el pasto va por dentro.","Contar el perímetro recorriendo la figura antes de sumar sus lados.","Contar el área cubriendo la figura antes de multiplicar sus lados.","Descubrir el atajo (largo + ancho) × 2 al notar que los lados se repiten.","Entender que dos terrenos con la misma cerca pueden tener muy distinto pasto.","Reconocer que, con una cerca dada, el terreno más parecido a un cuadrado es el que más rinde."],render:{tipo:"react",componente:"el-terreno"}},u={id:"reino-plegado",titulo:"El Reino Plegado",materia:"Matemáticas",tema:"Juego de mundos: matemáticas y español",nivel:"primaria",edades:"8-12 años",icono:"🗺️",descripcion:"Juego por mundos y niveles donde el escenario es un espacio topológico. Se camina por el mapa, se abren portales resolviendo acertijos de matemáticas y español, y por debajo el juego estima en qué grado va cada jugador —de 3.º a 6.º— sin enseñarle nunca una calificación.",actividades:[{id:"flatland",nombre:"Mundo 1 · Flatland",edades:"8-12",temas:["planos-trayectorias","recta-numerica","suma-resta","multiplicacion","perimetro-area","clases-palabra","mayusculas","sujeto-predicado"]},{id:"mobius",nombre:"Mundo 2 · La Banda",edades:"8-12",temas:["division-exacta","multiplicacion","fraccion-decimal","decimales","prefijos-sufijos","literal-figurado"]},{id:"toro",nombre:"Mundo 3 · La Dona",edades:"8-12",temas:["multiplos-divisores","series","promedio","moda","conectores","jerarquizar","signos"]},{id:"escher",nombre:"Mundo 4 · El Taller de Escher",edades:"10-12",temas:["perimetro-area","circunferencia","fracciones","comparar-fracciones","operaciones-fracciones","sintagmas","mapas-conceptuales"]}],objetivos:["Practicar matemáticas y español dentro de un juego, no en una hoja de ejercicios.","Ubicarse en un plano: leer un croquis, seguir una ruta y contar cuadras.","Sumar y restar agrupando centenas, decenas y unidades.","Reconocer las clases de palabra dentro de una oración de verdad.","Estimar en qué grado va cada alumno sin aplicarle un examen."],render:{tipo:"react",componente:"reino-plegado"}},m={id:"solidos-platonicos",titulo:"Los Cinco Sólidos",materia:"Matemáticas",tema:"Cuerpos geométricos y dualidad",nivel:"secundaria",edades:"10-14 años",icono:"🔷",descripcion:"Los cinco sólidos platónicos en 3D: se giran con el dedo, se abren en pedazos para contarles las caras y se ve aparecer, paso a paso, el sólido que cada uno lleva dentro —su dual—. Cierra con diez preguntas de contar caras y vértices, encontrar la pareja y usar la fórmula de Euler.",actividades:[{id:"galeria",nombre:"La Galería · los cinco, por dentro y por fuera",edades:"10-14",temas:["cuerpos-geometricos","solidos-platonicos","figuras"]},{id:"dualidad",nombre:"El Dual · por qué vienen en parejas",edades:"11-14",temas:["dualidad-poliedros","solidos-platonicos","cuerpos-geometricos"]},{id:"reto",nombre:"El Reto · contar, emparejar y Euler",edades:"10-14",temas:["formula-euler","cuerpos-geometricos","dualidad-poliedros"]}],objetivos:["Distinguir cara, arista y vértice contándolas por separado sobre el mismo cuerpo.","Reconocer los cinco sólidos platónicos y saber por qué no puede haber un sexto.","Construir el dual de un poliedro: un punto en el centro de cada cara y unir los vecinos.","Explicar por qué el dual intercambia caras con vértices y conserva las aristas.","Usar la fórmula de Euler (C + V − A = 2) para obtener el dato que falta."],render:{tipo:"react",componente:"solidos-platonicos"}},S=`<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Taller de Comprensión Lectora</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;700;800&family=Nunito:wght@600;700;800;900&display=swap" rel="stylesheet">
<style>
  :root{
    --noche:#241b3a; --noche-mid:#3d2f63; --violeta:#a78bfa; --uva:#7c4dcc;
    --paper:#fbf3e4; --ink:#241b3a; --coral:#ff6b6b; --sun:#ffc93c;
    --mint:#2ec4a6; --verde:#3fa96a; --cielo:#5aa9ff; --white:#fdfaf1;
  }
  *{box-sizing:border-box;}
  html,body{margin:0;padding:0;}
  body{font-family:'Nunito',sans-serif;background:radial-gradient(ellipse at top, var(--noche-mid) 0%, var(--noche) 65%);
    color:var(--white);min-height:100vh;display:flex;flex-direction:column;align-items:center;padding:18px;}
  h1,h2,h3,.display{font-family:'Baloo 2', sans-serif;}
  .wrap{width:100%;max-width:900px;}
  header{text-align:center;margin-bottom:14px;}
  header h1{font-size:clamp(25px,4.2vw,40px);margin:0 0 4px 0;text-shadow:0 3px 0 rgba(0,0,0,0.25);}
  header p{margin:0;opacity:0.85;font-weight:700;font-size:clamp(13px,1.6vw,16px);}

  .card{background:rgba(253,250,241,0.08);border:2px solid rgba(253,250,241,0.18);border-radius:22px;padding:24px;}
  .btn{font-family:'Baloo 2';font-weight:700;font-size:18px;border:none;border-radius:16px;padding:14px 26px;cursor:pointer;
    color:var(--ink);background:var(--sun);box-shadow:0 5px 0 rgba(0,0,0,0.25);transition:transform .08s ease;}
  .btn:active{transform:translateY(4px);box-shadow:0 1px 0 rgba(0,0,0,0.25);}
  .btn.secondary{background:var(--mint);}
  .btn.ghost{background:transparent;color:var(--white);border:2px solid rgba(253,250,241,0.4);box-shadow:none;}
  .btn.small{font-size:15px;padding:10px 18px;}
  .btn:disabled{opacity:0.4;cursor:not-allowed;}
  .row{display:flex;gap:12px;flex-wrap:wrap;align-items:center;justify-content:center;}
  .hint{font-size:13px;opacity:0.78;margin-top:10px;line-height:1.5;}
  .toggle-opt.selected{background:var(--sun);color:var(--ink);}

  .act-grid{display:grid;gap:14px;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));margin-top:16px;}
  .act-tile{background:rgba(0,0,0,0.22);border:2px solid rgba(253,250,241,0.15);border-radius:18px;padding:18px;cursor:pointer;
    text-align:left;color:var(--white);font-family:'Nunito';transition:transform .1s ease, border-color .1s ease;}
  .act-tile:hover{transform:translateY(-3px);border-color:var(--sun);}
  .act-tile .emoji{font-size:30px;display:block;margin-bottom:6px;}
  .act-tile strong{font-family:'Baloo 2';font-size:19px;display:block;margin-bottom:4px;}
  .act-tile span.desc{font-size:13px;opacity:0.8;line-height:1.4;}

  #activity{display:none;}
  .topbar{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:14px;flex-wrap:wrap;}
  .pill{background:rgba(0,0,0,0.28);border-radius:20px;padding:8px 16px;font-family:'Baloo 2';font-weight:700;font-size:14px;}
  .pill.timer{display:none;background:var(--uva);}
  .pill.timer.urge{background:var(--coral);color:var(--ink);}

  .prompt{background:rgba(0,0,0,0.24);border:2px solid rgba(253,250,241,0.16);border-radius:16px;padding:14px 18px;
    text-align:center;font-family:'Baloo 2';font-size:clamp(17px,2.4vw,22px);font-weight:700;margin-bottom:14px;line-height:1.35;}
  .prompt small{display:block;font-family:'Nunito';font-size:13px;font-weight:700;opacity:0.72;margin-top:6px;}

  /* --- panel de lectura: el texto siempre sobre papel, nunca sobre el fondo oscuro --- */
  .lectura{background:var(--paper);color:var(--ink);border-radius:18px;padding:22px 24px;text-align:left;
    font-size:clamp(16px,2.2vw,19px);line-height:1.9;margin-bottom:16px;}
  .lectura .titulillo{font-family:'Baloo 2';font-size:15px;text-transform:uppercase;letter-spacing:1px;
    opacity:0.55;margin-bottom:8px;line-height:1.2;}

  /* --- palabras y oraciones que se pueden tocar --- */
  .tok{border-radius:5px;padding:1px 2px;cursor:pointer;transition:background .1s ease;}
  .tok:hover{background:rgba(124,77,204,0.16);}
  .tok.ok{background:var(--verde);color:var(--white);}
  .tok.mal{background:var(--coral);color:var(--white);}
  .oracion{display:block;border-radius:8px;padding:4px 8px;margin:2px -8px;cursor:pointer;transition:background .1s ease;}
  .oracion:hover{background:rgba(124,77,204,0.14);}
  .oracion.ok{background:rgba(63,169,106,0.28);box-shadow:inset 3px 0 0 var(--verde);}
  .oracion.mal{background:rgba(255,107,107,0.28);box-shadow:inset 3px 0 0 var(--coral);}

  /* --- pronombres y referentes (¿de quién hablamos?) --- */
  .ref{padding:1px 3px;font-weight:800;cursor:pointer;border-bottom:3px dotted currentColor;}
  .pron{background:rgba(167,139,250,0.3);border-bottom:3px solid var(--uva);border-radius:5px;
    padding:1px 4px;font-weight:800;cursor:pointer;}
  .pron.sel{background:var(--sun);box-shadow:0 0 0 3px rgba(255,201,60,0.45);}
  .pron.ok{background:transparent;color:var(--c);border-bottom-color:var(--c);cursor:default;}
  .pron.mal{animation:tiembla .3s;}
  .pron sup{font-size:10px;font-weight:800;margin-left:2px;white-space:nowrap;}
  @keyframes tiembla{25%{transform:translateX(-4px);}75%{transform:translateX(4px);}}

  /* --- pista resaltada (palabra misteriosa) --- */
  .clave{background:var(--sun);border-radius:5px;padding:1px 3px;box-shadow:0 0 0 2px var(--sun);}
  .misterio{font-family:'Baloo 2';font-weight:800;color:var(--uva);background:rgba(167,139,250,0.22);
    border-radius:6px;padding:1px 6px;}

  /* --- ordenar la historia --- */
  .slots{display:flex;flex-direction:column;gap:8px;margin-bottom:14px;}
  .slot{display:flex;gap:10px;align-items:center;background:var(--paper);color:var(--ink);border-radius:12px;
    padding:10px 14px;font-size:15px;line-height:1.45;cursor:pointer;text-align:left;}
  .slot .num{flex-shrink:0;width:26px;height:26px;border-radius:50%;background:var(--uva);color:var(--white);
    font-family:'Baloo 2';font-weight:700;display:flex;align-items:center;justify-content:center;font-size:14px;}
  .slot.vacio{background:rgba(0,0,0,0.2);color:rgba(253,250,241,0.45);border:2px dashed rgba(253,250,241,0.28);cursor:default;}
  .slot.ok{box-shadow:inset 4px 0 0 var(--verde);}
  .slot.mal{box-shadow:inset 4px 0 0 var(--coral);}
  .pool{display:flex;flex-direction:column;gap:8px;}
  .frase{background:rgba(253,250,241,0.1);border:2px solid rgba(253,250,241,0.22);border-radius:12px;
    padding:10px 14px;font-size:15px;line-height:1.45;cursor:pointer;text-align:left;color:var(--white);
    font-family:'Nunito';font-weight:600;transition:border-color .1s ease;}
  .frase:hover{border-color:var(--sun);}

  /* --- opciones --- */
  .options{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:12px;margin-top:14px;}
  .options.col{grid-template-columns:1fr;}
  .opt{font-family:'Baloo 2';font-size:22px;font-weight:700;background:var(--white);color:var(--ink);
    border:3px solid rgba(36,27,58,0.15);border-radius:16px;padding:16px 8px;cursor:pointer;transition:transform .08s ease;}
  .opt.texto{font-family:'Nunito';font-weight:700;font-size:15px;line-height:1.5;text-align:left;padding:14px 16px;}
  .opt:hover{transform:translateY(-2px);border-color:var(--mint);}
  .opt.correct{background:var(--verde);color:var(--white);border-color:var(--verde);}
  .opt.wrong{background:var(--coral);color:var(--white);border-color:var(--coral);}
  .opt .etq{display:block;font-family:'Baloo 2';font-size:12px;text-transform:uppercase;letter-spacing:1px;
    opacity:0.75;margin-top:6px;}

  /* --- dicho / deducido / no se sabe --- */
  .stmt{background:rgba(0,0,0,0.22);border:2px solid rgba(253,250,241,0.14);border-radius:14px;padding:12px 14px;margin-top:10px;}
  .stmt > p{margin:0 0 8px 0;font-size:15px;line-height:1.5;font-weight:700;}
  .stmt.ok{border-color:var(--verde);}
  .stmt.mal{border-color:var(--coral);}
  .tri-row{display:flex;gap:8px;flex-wrap:wrap;}
  .tri{font-family:'Baloo 2';font-weight:700;font-size:13px;border:2px solid rgba(253,250,241,0.3);border-radius:12px;
    padding:7px 12px;cursor:pointer;background:transparent;color:var(--white);}
  .tri:hover{border-color:var(--sun);}
  .tri.sel{background:var(--sun);color:var(--ink);border-color:var(--sun);}
  .por{font-size:13px;line-height:1.5;opacity:0.85;margin-top:8px;font-weight:700;}
  .por.bien{color:#9dffcd;}
  .por.mal{color:#ffc0b8;}

  .feedback{margin-top:14px;text-align:center;font-weight:800;font-size:16px;min-height:26px;line-height:1.5;}
  .feedback.good{color:#9dffcd;}
  .feedback.bad{color:#ffc0b8;}
  .actions{display:flex;gap:12px;justify-content:center;margin-top:16px;flex-wrap:wrap;}

  .progreso{margin-top:22px;}
  .progreso summary{cursor:pointer;font-family:'Baloo 2';font-weight:700;font-size:16px;padding:8px 0;}
  .prog-entry{background:rgba(0,0,0,0.18);border-radius:12px;padding:10px 14px;margin-top:8px;font-size:14px;
    display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;}
  footer{opacity:0.6;font-size:12px;margin-top:22px;text-align:center;}
</style>
</head>
<body>
<div class="wrap">
  <header>
    <h1>📖 Taller de Comprensión Lectora</h1>
    <p id="headerSub">Leer no es pasar los ojos: es volver al texto y señalar dónde lo dice</p>
  </header>

  <!-- ===== SETUP ===== -->
  <div class="card" id="setup">
    <h3 class="display" style="margin-top:0;">¿Con qué grupo vas a trabajar?</h3>
    <div class="row" id="edadToggle">
      <button class="btn toggle-opt selected" data-val="8-9">🧒 8 y 9 años</button>
      <button class="btn ghost toggle-opt" data-val="10-12">🧑 10 a 12 años</button>
    </div>
    <p class="hint" id="edadHint"></p>

    <h3 class="display">Elige la actividad</h3>
    <div class="act-grid" id="actGrid"></div>
  </div>

  <!-- ===== ACTIVITY ===== -->
  <div id="activity">
    <div class="topbar">
      <div class="pill" id="actName">Actividad</div>
      <div class="pill timer" id="timerPill">⏱️ 25</div>
      <div class="pill" id="scorePill">✅ 0 · ❌ 0</div>
    </div>

    <div class="prompt" id="prompt"></div>
    <div id="stage"></div>
    <div class="feedback" id="feedback"></div>
    <div class="actions">
      <button class="btn secondary" id="checkBtn" style="display:none;">Revisar</button>
      <button class="btn" id="nextBtn" style="display:none;">Siguiente ▶️</button>
      <button class="btn ghost small" id="backBtn">← Cambiar actividad</button>
    </div>

    <details class="progreso">
      <summary>📊 Progreso guardado</summary>
      <div id="progList"></div>
    </details>
  </div>

  <footer id="footNote">El progreso se guarda en el expediente del alumno.</footer>
</div>

<script>
/* =========================================================
   PUENTE CON LA APP (TallerRunner.jsx)
   El taller corre dentro de un <iframe srcDoc>. No tiene acceso
   al cliente de Supabase, así que pide al padre que guarde/lea
   por postMessage. Si no hay padre (abierto suelto), degrada a
   modo sin persistencia en vez de fallar.
   ========================================================= */
const host = (function(){
  let seq = 0;
  const pendientes = new Map();

  window.addEventListener('message', (e) => {
    const m = e.data;
    if (!m || m.source !== 'taller-host' || !pendientes.has(m.rid)) return;
    const { resolve, reject } = pendientes.get(m.rid);
    pendientes.delete(m.rid);
    if (m.error) reject(new Error(m.error)); else resolve(m.payload);
  });

  function call(tipo, payload){
    if (window.parent === window) return Promise.reject(new Error('sin host'));
    const rid = ++seq;
    return new Promise((resolve, reject) => {
      pendientes.set(rid, {resolve, reject});
      window.parent.postMessage({source:'taller', rid, tipo, payload}, '*');
      setTimeout(() => {
        if (pendientes.has(rid)) { pendientes.delete(rid); reject(new Error('timeout')); }
      }, 8000);
    });
  }

  return {
    guardarSesion: (s) => call('guardar', s),
    cargarSesiones: ()  => call('cargar'),
  };
})();

let edad = '8-9';
let currentAct = null;
let score = {ok:0, bad:0};
let state = {};
let timerId = null;
// Sella cada ronda: "Caza el dato" avanza con setTimeout, y sin esto un
// cambio de actividad a media espera dejaría el callback tocando la ronda nueva.
let rondaActual = 0;

const ACTIVIDADES = {
  '8-9': [
    {id:'quien',   emoji:'🔗', nombre:'¿De quién hablamos?', desc:'Toca un pronombre y luego el personaje al que se refiere. Descubre a quién sustituye cada palabrita.'},
    {id:'ordena',  emoji:'🔢', nombre:'Ordena la historia',  desc:'Las oraciones están revueltas. Acomódalas para que la historia tenga sentido.'},
    {id:'caza',    emoji:'🎯', nombre:'Caza el dato',        desc:'Contrarreloj: lee la pregunta y toca en el texto la palabra exacta que la contesta.'},
    {id:'palabra', emoji:'🔍', nombre:'Palabra misteriosa',  desc:'Hay una palabra que no conoces. Adivina qué significa usando lo que dice alrededor.'}
  ],
  '10-12': [
    {id:'idea',        emoji:'💡', nombre:'La idea principal',      desc:'De cuatro oraciones, solo una resume el texto. Las otras son un detalle, algo muy general o algo ajeno.'},
    {id:'inferencia',  emoji:'🧠', nombre:'Dicho, deducido o ni idea', desc:'Clasifica cada afirmación: ¿lo dice el texto, se puede deducir o no se sabe?'},
    {id:'prueba',      emoji:'✍️', nombre:'Subraya la prueba',      desc:'Contesta la pregunta y luego señala la oración exacta que lo demuestra. No cuenta sin la prueba.'},
    {id:'hechopinion', emoji:'⚖️', nombre:'Hecho u opinión',        desc:'¿Se puede comprobar o es lo que alguien piensa? Anuncios, noticias y reseñas.'},
    {id:'proposito',   emoji:'🎭', nombre:'¿Para qué se escribió?', desc:'Instructivos, anuncios, noticias y cuentos: descubre para qué se escribió cada texto.'}
  ]
};

const HINTS = {
  '8-9':'A los 8-9 años ya descifran, pero pierden el hilo: se trabaja seguir la referencia, el orden de los hechos y volver al texto a buscar.',
  '10-12':'A los 10-12 años el salto es de lo literal a lo inferencial y crítico: idea principal, deducir, sostener la respuesta con evidencia.'
};

/* =========================================================
   CORPUS
   A diferencia de matemáticas, aquí los reactivos NO se generan
   al azar: un texto bueno se escribe a mano. El motor solo elige
   sin repetir hasta agotar la bolsa.
   ========================================================= */

/* --- ¿De quién hablamos? ---------------------------------
   Marcado: [texto|r1] es un referente; [texto|p:r1] es un
   pronombre que apunta a r1. El resto es texto corrido.      */
const T_QUIEN = [
  {
    titulo:'Los papalotes',
    texto:'[Marta|r1] fue al parque con [Tomás|r2].\\n' +
          '[Ella|p:r1] llevaba un papalote rojo y [él|p:r2] uno amarillo.\\n' +
          'El viento sopló muy fuerte y el papalote amarillo se atoró en un árbol.\\n' +
          '[Tomás|r2] se puso triste, pero [Marta|r1] [le|p:r2] prestó el suyo.'
  },
  {
    titulo:'Nube y la pelota',
    // Los pronombres de la pelota son "la" (objeto directo) y no "ella": con
    // tres candidatas femeninas en escena, "ella" no lo decidiría el texto.
    texto:'[Lucía|r1] tiene una perrita que se llama [Nube|r2].\\n' +
          'Todas las tardes [ella|p:r1] saca a la perrita al patio y le lanza [una pelota|r3].\\n' +
          '[Nube|r2] corre rapidísimo y [la|p:r3] atrapa en el aire, pero casi nunca [la|p:r3] regresa.\\n' +
          'Al final [Lucía|r1] tiene que ir por [la pelota|r3] hasta el fondo del patio.'
  },
  {
    titulo:'El partido del domingo',
    texto:'[Emilio|r1] y [Renata|r2] juegan en el mismo equipo de futbol.\\n' +
          'El domingo [él|p:r1] metió dos goles y [ella|p:r2] atajó tres tiros.\\n' +
          'Al terminar, [Renata|r2] abrazó a [Emilio|r1] y le dijo que [su|p:r1] segundo gol había sido el mejor de todos.'
  },
  {
    titulo:'La mochila olvidada',
    texto:'[Santiago|r1] olvidó [su mochila|r2] en el camión.\\n' +
          '[Él|p:r1] se dio cuenta hasta que llegó a la escuela.\\n' +
          'La maestra habló al paradero y por la tarde [la|p:r2] encontraron debajo de un asiento.\\n' +
          '[Santiago|r1] [la|p:r2] recogió al día siguiente y desde entonces [la|p:r2] revisa antes de bajarse.'
  },
  {
    titulo:'El mole de los domingos',
    texto:'[Mi abuela|r1] prepara mole todos los domingos.\\n' +
          '[Mi abuelo|r2] muele el chile y [ella|p:r1] cuida la cazuela.\\n' +
          'Cuando el mole está listo, [él|p:r2] es el primero en probarlo.\\n' +
          'Siempre dice que está perfecto, aunque [ella|p:r1] hizo casi todo el trabajo.'
  },
  {
    titulo:'El caracol de la maceta',
    texto:'En el jardín viven [un caracol|r1] y [una lagartija|r2].\\n' +
          '[Él|p:r1] sale cuando llueve y [ella|p:r2] sale cuando hay sol.\\n' +
          'Por eso casi nunca se encuentran, aunque los dos viven en la misma maceta.\\n' +
          'Ayer llovió tan fuerte que hasta [ella|p:r2] tuvo que salir a buscar un lugar seco.'
  }
];

/* --- Ordena la historia --- */
const T_ORDENA = [
  {titulo:'La semilla de frijol', frases:[
    'Primero, Ana puso tierra en un vaso de plástico.',
    'Después metió la semilla de frijol y la tapó con más tierra.',
    'Todos los días le echaba un poco de agua.',
    'A la semana salió un tallito verde.',
    'Al final, la planta creció tanto que Ana la pasó a una maceta grande.'
  ]},
  {titulo:'El diente flojo', frases:[
    'A Beto se le movía un diente desde el lunes.',
    'El miércoles se lo empujó con la lengua toda la tarde.',
    'En la cena, el diente se le cayó dentro de la sopa.',
    'Beto lo lavó y lo guardó debajo de la almohada.',
    'A la mañana siguiente encontró una moneda en su lugar.'
  ]},
  {titulo:'La lluvia del recreo', frases:[
    'El cielo se puso gris a la hora del recreo.',
    'Enseguida empezaron a caer gotas muy gordas.',
    'Todos corrimos a guardarnos debajo del techo.',
    'Cuando paró, el patio estaba lleno de charcos.',
    'La maestra nos dejó salir a saltar en ellos.'
  ]},
  {titulo:'El pastel de cumpleaños', frases:[
    'Mi papá sacó los huevos, la harina y el azúcar.',
    'Batimos todo hasta que quedó una mezcla amarilla.',
    'Metimos el molde al horno durante media hora.',
    'Cuando sonó el timbre, la cocina olía delicioso.',
    'Al final le pusimos betún y velitas.'
  ]},
  {titulo:'El gato perdido', frases:[
    'Una mañana, Tomás no encontró a su gato por ningún lado.',
    'Buscó debajo de las camas y detrás del sillón.',
    'Luego salió a preguntarles a los vecinos.',
    'Una señora le dijo que había visto un gato gris en la azotea.',
    'Tomás subió corriendo y ahí estaba, dormido al sol.'
  ]},
  {titulo:'La carta', frases:[
    'Valeria escribió una carta para su prima que vive en Mérida.',
    'La metió en un sobre y le pegó una estampilla.',
    'Su mamá la acompañó al buzón de la esquina.',
    'La carta tardó cinco días en llegar.',
    'Dos semanas después llegó la respuesta, con un dibujo adentro.'
  ]}
];

/* --- Caza el dato ---
   Marcado: [texto|a1] es la respuesta a la pregunta a1. El resto
   del texto se parte en palabras, todas tocables (si no, la
   respuesta se notaría a simple vista).                        */
const T_CAZA = [
  {
    titulo:'El mercado',
    texto:'El sábado fuimos al mercado de [San Juan|a1]. Compramos [tres kilos|a2] de mango y una bolsa de limones. ' +
          'Mi mamá pagó con [un billete de doscientos pesos|a3] y todavía le sobró cambio. Regresamos a la casa caminando.',
    preguntas:[
      {q:'¿Cómo se llama el mercado?', a:'a1'},
      {q:'¿Cuántos kilos de mango compraron?', a:'a2'},
      {q:'¿Con qué pagó la mamá?', a:'a3'}
    ]
  },
  {
    titulo:'Los pingüinos emperador',
    texto:'Los pingüinos emperador viven en la [Antártida|a1]. Pueden aguantar hasta [veinte minutos|a2] debajo del agua sin respirar. ' +
          'El papá pingüino cuida el huevo sobre [sus patas|a3] mientras la mamá va a buscar comida.',
    preguntas:[
      {q:'¿Dónde viven los pingüinos emperador?', a:'a1'},
      {q:'¿Cuánto tiempo aguantan bajo el agua?', a:'a2'},
      {q:'¿Dónde carga el papá pingüino el huevo?', a:'a3'}
    ]
  },
  {
    titulo:'Reglas de la biblioteca',
    texto:'La biblioteca de la escuela abre de [lunes a viernes|a1]. Cada niño puede llevarse [dos libros|a2] a la vez ' +
          'y tiene que regresarlos en [quince días|a3]. Si se te olvida, no puedes pedir otro hasta devolverlos.',
    preguntas:[
      {q:'¿Qué días abre la biblioteca?', a:'a1'},
      {q:'¿Cuántos libros se puede llevar cada niño?', a:'a2'},
      {q:'¿En cuánto tiempo hay que devolverlos?', a:'a3'}
    ]
  },
  {
    titulo:'Frida Kahlo',
    texto:'Frida Kahlo nació en [Coyoacán|a1], en la Ciudad de México. Pintó muchísimos [autorretratos|a2], ' +
          'que son cuadros de ella misma. Hoy su casa es un museo pintado de [azul|a3] y lo visita gente de todo el mundo.',
    preguntas:[
      {q:'¿En qué lugar nació Frida Kahlo?', a:'a1'},
      {q:'¿Qué tipo de cuadros pintó muchísimo?', a:'a2'},
      {q:'¿De qué color está pintada su casa?', a:'a3'}
    ]
  },
  {
    titulo:'El recreo',
    texto:'El recreo empieza a las [diez y media|a1]. Ese día Karla llevó [una torta de jamón|a2] y la compartió con Luis. ' +
          'Luego jugaron [a las escondidillas|a3] hasta que sonó el timbre.',
    preguntas:[
      {q:'¿A qué hora empieza el recreo?', a:'a1'},
      {q:'¿Qué llevó Karla de comer?', a:'a2'},
      {q:'¿A qué jugaron?', a:'a3'}
    ]
  },
  {
    titulo:'El viaje de la mariposa monarca',
    texto:'Cada otoño la mariposa monarca vuela desde [Canadá|a1] hasta los bosques de Michoacán. ' +
          'El viaje dura como [cuatro meses|a2] y recorre más de cuatro mil kilómetros. ' +
          'Llegan a descansar a los árboles de [oyamel|a3], que las protegen del frío.',
    preguntas:[
      {q:'¿Desde qué país vuelan las monarcas?', a:'a1'},
      {q:'¿Cuánto dura el viaje?', a:'a2'},
      {q:'¿En qué árboles descansan?', a:'a3'}
    ]
  }
];

/* --- Palabra misteriosa ---
   Marcado: [texto|c] es la pista de contexto (se resalta al final). */
const T_PALABRA = [
  {
    palabra:'quilaso',
    texto:'Hacía tanto calor en la playa que mi tía abrió el *quilaso* y [todos nos metimos debajo de su sombra para no quemarnos|c].',
    ops:['Una sombrilla grande','Una botella de agua','Un salvavidas','Una lancha'], ok:0
  },
  {
    palabra:'ranio',
    texto:'El pan llevaba dos semanas en la bolsa y ya estaba *ranio*: [olía feo y nadie se lo quiso comer|c].',
    ops:['Echado a perder','Recién horneado','Muy dulce','Cortado en rebanadas'], ok:0
  },
  {
    palabra:'tacaño',
    texto:'Mi primo es muy *tacaño*: [nunca invita nada y guarda hasta las monedas de cincuenta centavos|c].',
    ops:['Que no le gusta gastar','Que es muy alto','Que se ríe mucho','Que come mucho'], ok:0
  },
  {
    palabra:'exhaustos',
    texto:'Después de correr toda la tarde llegamos *exhaustos* y [nos quedamos dormidos sin cenar|c].',
    ops:['Muy cansados','Muy contentos','Con mucha hambre','Todos mojados'], ok:0
  },
  {
    palabra:'gruñir',
    texto:'El perro empezó a *gruñir* y a [enseñar los dientes cuando el desconocido se acercó a la puerta|c].',
    ops:['Hacer un ruido de enojo','Mover la cola de gusto','Quedarse dormido','Ladrar de alegría'], ok:0
  },
  {
    palabra:'lóbrega',
    texto:'La cueva estaba tan *lóbrega* que [no alcanzábamos a vernos las manos ni con la lámpara encendida|c].',
    ops:['Muy oscura','Muy grande','Muy fría','Muy ruidosa'], ok:0
  },
  {
    palabra:'bordón',
    texto:'Mi abuelo camina apoyado en un *bordón* de madera [porque desde el año pasado le duele mucho la rodilla|c].',
    ops:['Un bastón','Un sombrero','Una silla','Un zapato especial'], ok:0
  },
  {
    palabra:'chubasco',
    texto:'Íbamos a comer en el jardín, pero cayó un *chubasco* y [en cinco minutos todo quedó empapado|c].',
    ops:['Una lluvia fuerte y corta','Un viento caliente','Una helada','Un temblor'], ok:0
  }
];

/* --- La idea principal ---
   tipo: 'principal' | 'general' (abarca de más) | 'detalle' | 'ajena' */
const T_IDEA = [
  {
    titulo:'Las abejas',
    texto:'Las abejas no solo producen miel. Cuando vuelan de flor en flor transportan polen y hacen posible que ' +
          'las plantas den frutos y semillas. Se calcula que una de cada tres cosas que comemos existe gracias a ese ' +
          'trabajo. Por eso, cuando desaparecen las abejas de una región, las cosechas bajan aunque el clima sea bueno.',
    ops:[
      {t:'Las abejas son importantes porque polinizan las plantas de las que sacamos nuestra comida.', tipo:'principal'},
      {t:'Los insectos son animales muy útiles para el planeta.', tipo:'general'},
      {t:'Una de cada tres cosas que comemos depende de las abejas.', tipo:'detalle'},
      {t:'La miel de abeja sirve para endulzar y para curar la tos.', tipo:'ajena'}
    ]
  },
  {
    titulo:'Dormir también es estudiar',
    texto:'Dormir no es tiempo perdido. Mientras duermes, el cerebro repasa lo que aprendiste en el día y decide qué ' +
          'guardar. Por eso quien estudia y luego duerme bien recuerda más que quien se desvela repasando. Varios ' +
          'estudios muestran que a los niños que duermen menos de ocho horas les cuesta más trabajo concentrarse en clase.',
    ops:[
      {t:'Dormir bien ayuda al cerebro a fijar lo aprendido y a concentrarse mejor.', tipo:'principal'},
      {t:'El cuerpo humano necesita descansar.', tipo:'general'},
      {t:'A los niños que duermen menos de ocho horas les cuesta concentrarse.', tipo:'detalle'},
      {t:'Es mejor estudiar en la mañana que en la noche.', tipo:'ajena'}
    ]
  },
  {
    titulo:'Vivir junto a un volcán',
    texto:'México tiene más de cuarenta volcanes y algunos siguen activos. El Popocatépetl lanza ceniza varias veces ' +
          'al año, y los pueblos cercanos tienen rutas de evacuación marcadas. Pero vivir cerca de un volcán también ' +
          'tiene ventajas: la ceniza vuelve la tierra muy fértil, y por eso esas zonas son de las mejores para sembrar.',
    ops:[
      {t:'Vivir cerca de un volcán es peligroso, pero además vuelve la tierra muy fértil.', tipo:'principal'},
      {t:'México es un país con mucha naturaleza.', tipo:'general'},
      {t:'El Popocatépetl lanza ceniza varias veces al año.', tipo:'detalle'},
      {t:'El maíz es el cultivo más importante de México.', tipo:'ajena'}
    ]
  },
  {
    titulo:'Tenis que se vuelven cancha',
    texto:'Cada año se tiran millones de pares de tenis que tardan más de cuarenta años en deshacerse. Algunas fábricas ' +
          'ya empezaron a recibir tenis usados para molerlos y convertirlos en piso de canchas y parques. No es la ' +
          'solución completa, pero cada tonelada que se reutiliza es una tonelada que no llega al basurero.',
    ops:[
      {t:'Reciclar tenis usados reduce la basura, aunque no resuelve del todo el problema.', tipo:'principal'},
      {t:'Hay que cuidar el medio ambiente.', tipo:'general'},
      {t:'Los tenis tardan más de cuarenta años en deshacerse.', tipo:'detalle'},
      {t:'Los tenis de marca son más caros porque duran más.', tipo:'ajena'}
    ]
  },
  {
    titulo:'El ajolote',
    texto:'El ajolote es un anfibio que en estado natural solo vive en los canales de Xochimilco. Tiene una capacidad ' +
          'rarísima: si pierde una pata, le vuelve a crecer completa, con huesos y nervios. Por eso hay laboratorios en ' +
          'todo el mundo que lo estudian, mientras en su propio lago quedan tan pocos que es difícil encontrar uno.',
    ops:[
      {t:'El ajolote se estudia en todo el mundo por su capacidad de regenerarse, pero casi ha desaparecido de su hábitat.', tipo:'principal'},
      {t:'En México hay animales que no existen en otros países.', tipo:'general'},
      {t:'Si el ajolote pierde una pata, le vuelve a crecer.', tipo:'detalle'},
      {t:'Los ajolotes se pueden tener como mascota en una pecera.', tipo:'ajena'}
    ]
  },
  {
    titulo:'El chapulín en la milpa',
    texto:'En varias regiones de Oaxaca el chapulín no se combate: se cosecha. En vez de fumigar la milpa, las familias ' +
          'los atrapan de madrugada, los tuestan con limón y sal y los venden en el mercado. Así el insecto que se ' +
          'comería la planta se convierte en un producto que deja dinero, y de paso se usa menos veneno en el campo.',
    ops:[
      {t:'Cosechar los chapulines en vez de fumigarlos convierte una plaga en un producto y evita usar veneno.', tipo:'principal'},
      {t:'En México se comen muchos insectos.', tipo:'general'},
      {t:'Los chapulines se tuestan con limón y sal.', tipo:'detalle'},
      {t:'El chapulín tiene más proteína que la carne de res.', tipo:'ajena'}
    ]
  }
];

/* --- Dicho, deducido o ni idea --- */
const T_INFER = [
  {
    titulo:'La entrada al salón',
    texto:'Rodrigo entró al salón con el uniforme empapado y el pelo escurriendo. Dejó la mochila en el suelo y sacó ' +
          'los cuadernos, que también estaban mojados. La maestra le prestó una toalla y le dijo que se sentara junto al ventilador.',
    afs:[
      {t:'Rodrigo llegó mojado al salón.', tipo:'dicho', por:'El texto lo dice con todas sus letras: "el uniforme empapado".'},
      {t:'Estaba lloviendo afuera.', tipo:'deducido', por:'No lo dice, pero es lo más razonable: él y sus cuadernos venían mojados.'},
      {t:'Rodrigo se cayó en un charco.', tipo:'nose', por:'Pudo ser, pero el texto no da ninguna señal de eso.'},
      {t:'La maestra le prestó una toalla.', tipo:'dicho', por:'Aparece tal cual en la última oración.'}
    ]
  },
  {
    titulo:'La casa de la abuela',
    texto:'Cuando abrimos la puerta de la casa de la abuela, olía a canela y había harina regada en la mesa. En el horno ' +
          'se alcanzaba a ver una charola. La abuela se limpió las manos en el delantal y nos abrazó.',
    afs:[
      {t:'En la mesa había harina.', tipo:'dicho', por:'El texto lo menciona directamente.'},
      {t:'La abuela estaba cocinando algo.', tipo:'deducido', por:'La harina regada, la charola en el horno y las manos que se limpia lo dejan claro, aunque no se diga.'},
      {t:'La abuela hizo un pastel de canela.', tipo:'nose', por:'Huele a canela y hay algo en el horno, pero nunca se dice qué es.'},
      {t:'La abuela nos abrazó.', tipo:'dicho', por:'Es la última oración del texto.'}
    ]
  },
  {
    titulo:'Afuera del cine',
    texto:'Valeria revisó el celular por tercera vez y volvió a guardarlo. Miró hacia la entrada del cine, donde ya casi ' +
          'no quedaba gente. La función había empezado hacía veinte minutos.',
    afs:[
      {t:'Valeria está esperando a alguien que no llega.', tipo:'deducido', por:'Revisar el celular, mirar la entrada y la función ya empezada apuntan a eso.'},
      {t:'La función empezó hace veinte minutos.', tipo:'dicho', por:'Está escrito al final del texto.'},
      {t:'Valeria se peleó con su amiga.', tipo:'nose', por:'El texto no dice nada de una pelea ni de con quién iba.'},
      {t:'Valeria revisó el celular tres veces.', tipo:'dicho', por:'Lo dice: "por tercera vez".'}
    ]
  },
  {
    titulo:'Después del partido',
    texto:'El equipo salió de la cancha sin hablar. Nadie se acercó a la mesa donde estaba el trofeo. El entrenador ' +
          'juntó los balones él solo y apagó las luces.',
    afs:[
      {t:'El equipo perdió el partido.', tipo:'deducido', por:'El silencio y que nadie se acerque al trofeo lo señalan, aunque no se diga.'},
      {t:'El entrenador apagó las luces.', tipo:'dicho', por:'Aparece tal cual en el texto.'},
      {t:'Era la final del torneo.', tipo:'nose', por:'Hay un trofeo, pero nunca se dice de qué partido se trataba.'},
      {t:'El trofeo estaba sobre una mesa.', tipo:'dicho', por:'El texto lo menciona directamente.'}
    ]
  },
  {
    titulo:'La papelería cerrada',
    texto:'Don Ernesto puso el letrero de "cerrado" a las once de la mañana, aunque la papelería normalmente cierra a ' +
          'las ocho de la noche. Bajó la cortina, se subió al coche y salió rápido hacia la avenida.',
    afs:[
      {t:'La papelería normalmente cierra a las ocho de la noche.', tipo:'dicho', por:'El texto lo dice entre comas.'},
      {t:'Don Ernesto llevaba prisa.', tipo:'deducido', por:'Bajó la cortina, se subió al coche y "salió rápido": todo apunta a prisa.'},
      {t:'A Don Ernesto le pasó una emergencia.', tipo:'nose', por:'Es una explicación posible, pero el texto no dice por qué cerró.'},
      {t:'Don Ernesto se subió a un coche.', tipo:'dicho', por:'Está escrito en la última oración.'}
    ]
  },
  {
    titulo:'El cuaderno nuevo',
    texto:'Camila llegó con un cuaderno idéntico al de Sebastián. En la primera hoja había escrito su nombre con ' +
          'plumón morado y lo había subrayado dos veces. Cuando Sebastián le preguntó dónde lo había comprado, ella ' +
          'contestó que se lo habían regalado.',
    afs:[
      {t:'El cuaderno de Camila y el de Sebastián son iguales.', tipo:'dicho', por:'El texto dice "idéntico al de Sebastián".'},
      {t:'A Camila le importaba que se supiera que el cuaderno era suyo.', tipo:'deducido', por:'Escribir su nombre y subrayarlo dos veces lo sugiere.'},
      {t:'Camila y Sebastián son amigos.', tipo:'nose', por:'Se hablan, pero el texto nunca dice qué relación tienen.'},
      {t:'A Camila le regalaron el cuaderno.', tipo:'nose', por:'Ojo con esta: el texto dice que «ella contestó» que se lo habían regalado. Que un personaje lo diga no lo vuelve cierto.'}
    ]
  },
  {
    titulo:'El apagón',
    texto:'A las nueve de la noche se fue la luz en toda la cuadra. Mi hermana bajó a la cocina alumbrándose con el ' +
          'celular y volvió con dos velas. Desde la ventana se veía el semáforo de la esquina apagado y a varios ' +
          'vecinos afuera, platicando en la banqueta.',
    afs:[
      {t:'La luz se fue a las nueve de la noche.', tipo:'dicho', por:'Es la primera oración del texto.'},
      {t:'El apagón no fue solo en esa casa.', tipo:'deducido', por:'El semáforo apagado y los vecinos afuera lo dejan ver, aunque no se diga con esas palabras.'},
      {t:'La luz regresó antes de la medianoche.', tipo:'nose', por:'El texto termina durante el apagón: nunca dice cuándo volvió la luz.'},
      {t:'Su hermana volvió con dos velas.', tipo:'dicho', por:'Aparece tal cual en la segunda oración.'}
    ]
  },
  {
    titulo:'La hoja sin borrones',
    texto:'Martín entregó su examen cinco minutos después de que empezara y se sentó otra vez a esperar con un libro. ' +
          'Cuando el maestro recogió las demás hojas, la de Martín era la única sin un solo borrón.',
    afs:[
      {t:'Martín entregó antes que sus compañeros.', tipo:'dicho', por:'El texto lo dice: entregó a los cinco minutos y el maestro recogió después «las demás hojas».'},
      {t:'Martín no dudó al contestar.', tipo:'deducido', por:'Una hoja sin un solo borrón, entregada en cinco minutos, apunta a eso.'},
      {t:'Martín sacó la mejor calificación del grupo.', tipo:'nose', por:'Contestar rápido y limpio no es lo mismo que contestar bien: el texto no dice cómo le fue.'},
      {t:'La hoja de Martín no tenía borrones.', tipo:'dicho', por:'Está escrito al final del texto.'}
    ]
  },
  {
    titulo:'La parada del camión',
    texto:'Sofía llegó a la parada con el pantalón salpicado de lodo hasta las rodillas. Guardó el paraguas cerrado en ' +
          'la mochila y se quedó mirando el charco enorme que había junto a la banqueta. Cuando vio venir el camión, ' +
          'se hizo a un lado antes de que frenara.',
    afs:[
      {t:'Sofía traía lodo en el pantalón.', tipo:'dicho', por:'El texto lo menciona directamente.'},
      {t:'Sofía se apartó para que el camión no la salpicara.', tipo:'deducido', por:'Hacerse a un lado justo antes de que frenara, con el charco ahí, señala esa intención.'},
      {t:'Un coche fue el que la salpicó.', tipo:'nose', por:'Es una explicación posible, pero el texto nunca dice cómo se llenó de lodo.'},
      {t:'Sofía guardó el paraguas cerrado.', tipo:'dicho', por:'Aparece tal cual en la segunda oración.'}
    ]
  },
  {
    titulo:'El último puesto del mercado',
    texto:'Doña Lucía acomodó las últimas naranjas en su caja y contó los billetes dos veces. «Hoy sí me fue bien», ' +
          'dijo mientras amarraba la lona del puesto. En el pasillo ya casi no quedaba nadie y las luces del fondo ' +
          'estaban apagadas.',
    afs:[
      {t:'Doña Lucía contó los billetes dos veces.', tipo:'dicho', por:'El texto lo dice en la primera oración.'},
      {t:'El mercado estaba por cerrar.', tipo:'deducido', por:'La lona amarrada, el pasillo vacío y las luces apagadas lo dejan ver, aunque no se escriba.'},
      {t:'Doña Lucía vendió mucho ese día.', tipo:'nose', por:'Ojo: eso lo dice ella. Que un personaje lo afirme no lo convierte en un dato del texto.'},
      {t:'Las luces del fondo estaban apagadas.', tipo:'dicho', por:'Es la última oración.'}
    ]
  },
  {
    titulo:'Las paredes claras',
    texto:'En el cuarto de Iván habían quedado cuadros más claros en la pared, donde antes estaban los pósters. En el ' +
          'pasillo se apilaban cajas con el nombre de cada recámara escrito con marcador. Su mamá revisó una lista y ' +
          'le dijo que ya solo faltaba el clóset.',
    afs:[
      {t:'En el pasillo había cajas apiladas.', tipo:'dicho', por:'El texto lo menciona directamente.'},
      {t:'La familia se está mudando.', tipo:'deducido', por:'Paredes vacías, cajas rotuladas por recámara y una lista de pendientes apuntan a una mudanza.'},
      {t:'Iván va a cambiar de escuela.', tipo:'nose', por:'Podría pasar, pero el texto no dice nada de la escuela.'},
      {t:'Las cajas tenían escrito el nombre de cada recámara.', tipo:'dicho', por:'Está escrito con todas sus letras.'}
    ]
  },
  {
    titulo:'Nico y el estambre',
    texto:'Al llegar encontramos el tapete corrido, un zapato con las agujetas rotas y a Nico dormido debajo de la ' +
          'mesa. Junto a él había pedacitos de estambre por todo el piso. Mi papá suspiró y guardó los zapatos en el clóset.',
    afs:[
      {t:'Un zapato tenía las agujetas rotas.', tipo:'dicho', por:'El texto lo dice en la primera oración.'},
      {t:'Nico hizo el desorden de la sala.', tipo:'deducido', por:'El estambre junto a él y el zapato roto lo señalan, aunque el texto no lo acuse.'},
      {t:'Mi papá se enojó mucho.', tipo:'nose', por:'Solo dice que suspiró; un suspiro puede ser enojo, cansancio o resignación.'},
      {t:'Nico estaba dormido debajo de la mesa.', tipo:'dicho', por:'Aparece tal cual en el texto.'}
    ]
  },
  {
    titulo:'La bicicleta de vuelta',
    texto:'Ana empujó la bicicleta hasta la puerta de la casa en lugar de subirse a ella. La cadena colgaba floja y ' +
          'ella traía las manos manchadas de grasa. Antes de entrar, la recargó en la barda y se le quedó viendo un rato.',
    afs:[
      {t:'Ana llevó la bicicleta empujándola.', tipo:'dicho', por:'Lo dice la primera oración.'},
      {t:'La bicicleta se descompuso en el camino.', tipo:'deducido', por:'La cadena floja y las manos con grasa lo dejan ver: intentó arreglarla.'},
      {t:'Ana se cayó de la bicicleta.', tipo:'nose', por:'El texto no menciona ninguna caída ni ningún golpe.'},
      {t:'Ana traía las manos manchadas de grasa.', tipo:'dicho', por:'El texto lo menciona directamente.'}
    ]
  },
  {
    titulo:'El alumno nuevo',
    texto:'El niño nuevo se sentó hasta atrás y no sacó nada de la mochila durante la primera clase. Cuando sonó el ' +
          'timbre, se quedó en su lugar mientras los demás salían en bola. La maestra se acercó y le preguntó si ' +
          'quería acompañarla al patio.',
    afs:[
      {t:'El niño nuevo se sentó hasta atrás.', tipo:'dicho', por:'Es lo primero que dice el texto.'},
      {t:'El niño todavía no se sentía cómodo en el salón.', tipo:'deducido', por:'Sentarse atrás, no sacar nada y quedarse en su lugar en el recreo apuntan a eso.'},
      {t:'El niño no tiene amigos en esa escuela.', tipo:'nose', por:'Puede ser, pero es su primer día y el texto no dice nada de sus amistades.'},
      {t:'La maestra le ofreció acompañarla al patio.', tipo:'dicho', por:'Es la última oración del texto.'}
    ]
  }
];

/* --- Subraya la prueba ---
   \`prueba\` acepta varios índices cuando más de una oración sirve. */
const T_PRUEBA = [
  {
    titulo:'El faro de la isla',
    oraciones:[
      'El faro de la isla dejó de funcionar en 1998.',
      'Durante años los pescadores pidieron que lo repararan.',
      'En 2015 el gobierno lo convirtió en museo en vez de volver a encenderlo.',
      'Hoy lo visitan más de mil personas al año, casi todas en verano.'
    ],
    // La pregunta apunta al "nunca volvió a encenderse" y no al "dejó de
    // funcionar": si no, la oración 0 sería una prueba igual de válida.
    q:'¿Por qué el faro nunca volvió a encenderse?',
    ops:['Porque lo convirtieron en museo en lugar de repararlo','Porque la isla se quedó sin habitantes','Porque se cayó durante una tormenta'],
    ok:0, prueba:[2]
  },
  {
    titulo:'Las tortugas y las luces',
    oraciones:[
      'Las tortugas marinas regresan a poner sus huevos a la misma playa donde nacieron.',
      'Las crías salen de noche y se guían por el brillo de la luna sobre el mar.',
      'Cuando hay hoteles con luces fuertes, muchas crías caminan tierra adentro y nunca llegan al agua.',
      'Por eso en varias playas de Oaxaca se apagan las luces durante la temporada de desove.'
    ],
    q:'¿Por qué se apagan las luces de los hoteles en temporada de desove?',
    ops:['Para que las crías no se confundan y lleguen al mar','Para ahorrar electricidad en la temporada alta','Para que las tortugas adultas puedan dormir'],
    // La 1 explica por qué la luz importa y la 2 el daño concreto: ambas prueban.
    ok:0, prueba:[1,2]
  },
  {
    titulo:'La carrera de Amaranta',
    oraciones:[
      'Amaranta llevaba tres meses entrenando para la carrera de cinco kilómetros.',
      'Dos semanas antes se torció el tobillo bajando unas escaleras.',
      'El día de la carrera se quedó en la banca, con el número puesto, viendo pasar a los demás.',
      'Su entrenador le dijo que se inscribiera a la de noviembre.'
    ],
    q:'¿Por qué Amaranta no corrió la carrera?',
    ops:['Porque se lastimó el tobillo poco antes','Porque no alcanzó a inscribirse a tiempo','Porque prefirió esperar a la de noviembre'],
    ok:0, prueba:[1]
  },
  {
    titulo:'El maíz de cada región',
    oraciones:[
      'El maíz criollo se siembra en México desde hace miles de años.',
      'Cada región tiene sus propias variedades, adaptadas a su clima y a su tierra.',
      'Un maíz del Bajío sembrado en la sierra suele dar mazorcas pequeñas y débiles.',
      'Por eso muchos campesinos guardan su propia semilla en vez de comprarla.'
    ],
    q:'¿Por qué muchos campesinos guardan su propia semilla?',
    ops:['Porque la semilla de su región crece mejor en su tierra','Porque está prohibido comprar semilla','Porque el maíz criollo se vende más caro'],
    ok:0, prueba:[1,2]
  },
  {
    titulo:'La nueva hora de entrada',
    oraciones:[
      'La escuela cambió la hora de entrada de las siete a las ocho de la mañana.',
      'Los maestros notaron que menos alumnos se quedaban dormidos en la primera clase.',
      'Las calificaciones de matemáticas de primera hora subieron ese semestre.',
      'Algunos papás, en cambio, se quejaron porque ya no alcanzan a dejarlos antes de irse a trabajar.'
    ],
    q:'¿Qué problema trajo el cambio de horario?',
    ops:['Que a algunos papás ya no les acomoda la hora de entrada','Que los alumnos se duermen en la primera clase','Que bajaron las calificaciones de matemáticas'],
    ok:0, prueba:[3]
  },
  {
    titulo:'El puente de la barranca',
    oraciones:[
      'El puente de madera sobre la barranca se construyó hace más de sesenta años.',
      'Cada temporada de lluvias el agua se lleva un poco de la tierra que sostiene las bases.',
      'El año pasado los vecinos pusieron una cadena para que no pasaran camiones pesados.',
      'Los niños de la comunidad siguen cruzándolo todos los días para ir a la escuela.'
    ],
    q:'¿Por qué los vecinos pusieron una cadena en el puente?',
    ops:['Porque las bases se han ido debilitando con las lluvias','Porque querían cobrar por cruzarlo','Porque los niños lo usaban para jugar'],
    ok:0, prueba:[1]
  }
];

/* --- Hecho u opinión --- */
const T_HECHO = [
  {t:'El Popocatépetl mide 5,426 metros de altura.', hecho:true, por:'Es un dato que se puede medir y comprobar.'},
  {t:'Este es el mejor champú del mercado.', hecho:false, por:'"El mejor" depende de a quién le preguntes: es lo que alguien piensa.'},
  {t:'La película dura dos horas y diez minutos.', hecho:true, por:'Se puede comprobar con el reloj o en la ficha de la película.'},
  {t:'El uniforme de la escuela es horrible.', hecho:false, por:'"Horrible" es un gusto personal, no algo que se pueda medir.'},
  {t:'La Ciudad de México se fundó sobre un lago.', hecho:true, por:'Es un dato histórico verificable.'},
  {t:'Nadie debería usar el celular en la mesa.', hecho:false, por:'Es una regla que alguien propone, no un dato comprobable.'},
  {t:'Este yogurt contiene 12 gramos de azúcar por porción.', hecho:true, por:'Está en la etiqueta y se puede medir en un laboratorio.'},
  {t:'Ese fue el gol más bonito de todo el torneo.', hecho:false, por:'"Más bonito" es opinión: a otra persona le puede gustar otro.'},
  {t:'Es la crema más vendida del país.', hecho:true, por:'Ojo: aunque venga en un anuncio, las ventas se pueden contar. Es un hecho (otra cosa es que sea cierto).'},
  {t:'Es la crema más rica del país.', hecho:false, por:'"Más rica" no se puede contar. Compárala con la de arriba: cambia una palabra y cambia todo.'},
  {t:'La biblioteca abre de lunes a viernes de 9 a 5.', hecho:true, por:'Basta con ir o llamar para comprobarlo.'},
  {t:'Leer es más divertido que ver televisión.', hecho:false, por:'Es una preferencia personal.'},
  {t:'El agua hierve a 100 grados a nivel del mar.', hecho:true, por:'Se puede comprobar con un termómetro.'},
  {t:'Las vacaciones de verano deberían durar más.', hecho:false, por:'Cualquier oración con "debería" suele ser una opinión.'},
  {t:'Nueve de cada diez dentistas recomiendan esta pasta.', hecho:true, por:'Es un dato: se puede pedir la encuesta. Que el anuncio la enseñe ya es otra historia.'},
  {t:'La cafetería de la escuela cambió de dueño en marzo.', hecho:true, por:'Es un suceso con fecha, comprobable.'}
];

/* --- ¿Para qué se escribió? --- */
const PROPOSITOS = [
  {id:'informar',   et:'📰 Informar'},
  {id:'convencer',  et:'📣 Convencer'},
  {id:'instruir',   et:'🔧 Instruir'},
  {id:'entretener', et:'🎈 Entretener'}
];

const T_PROPOSITO = [
  {texto:'Mezcle el contenido del sobre en un litro de agua fría. Revuelva durante un minuto y refrigere antes de servir. No hervir.',
   ok:'instruir', tipo:'un instructivo', por:'Son pasos en orden para que hagas algo. Fíjate en los verbos de mando: mezcle, revuelva, refrigere.'},
  {texto:'¡Última semana! Todos los cuadernos a mitad de precio. Solo en Papelería La Luz, esquina con Juárez. ¡No te quedes sin el tuyo!',
   ok:'convencer', tipo:'un anuncio', por:'Quiere que hagas algo (ir y comprar). Las exclamaciones y la urgencia son la pista.'},
  {texto:'El municipio informó que el servicio de agua se suspenderá el jueves de 8 a 14 horas en tres colonias por trabajos de mantenimiento.',
   ok:'informar', tipo:'una noticia', por:'Da datos: quién, qué, cuándo y por qué. No te pide nada ni te cuenta un cuento.'},
  {texto:'El sapo se sentó a esperar. Llevaba tanto tiempo esperando que ya se le habían olvidado las ganas de irse, y ahí siguió, muy serio, hasta que se hizo de noche.',
   ok:'entretener', tipo:'un cuento', por:'Hay un personaje y algo que le pasa. No sirve para nada práctico: se escribió para disfrutarse.'},
  {texto:'Ingredientes: 250 g de harina, 2 huevos, media taza de leche. Bata los huevos con la leche y agregue la harina poco a poco hasta que no queden grumos.',
   ok:'instruir', tipo:'una receta', por:'Lista de materiales y pasos: es la forma clásica de un texto que enseña a hacer algo.'},
  {texto:'Los pandas gigantes comen bambú durante más de doce horas al día porque esa planta les da muy poca energía.',
   ok:'informar', tipo:'un texto informativo', por:'Explica cómo es el mundo, con un dato y su causa. No te pide nada.'},
  {texto:'Firma aquí para que no cierren el parque de tu colonia. Un parque menos son mil niños sin dónde jugar. ¡Tu firma cuenta!',
   ok:'convencer', tipo:'un texto persuasivo', por:'Te habla de tú y te pide una acción concreta. Usa un argumento para moverte.'},
  {texto:'Contenido neto: 500 ml. Elaborado en México. Aporta 90 calorías por porción y no contiene conservadores ni colorantes artificiales.',
   ok:'informar', tipo:'una etiqueta', por:'Solo da datos del producto: cuánto trae, de dónde viene y qué contiene. No te pide nada ni te enseña a hacer nada.'},
  {texto:'La ballena abrió un ojo, miró al pescador y volvió a cerrarlo, como si aquel hombrecito con sombrero no mereciera ni un bostezo.',
   ok:'entretener', tipo:'un fragmento de novela', por:'El lenguaje busca imágenes y humor, no datos: se escribió para gustar.'}
];

/* =========================================================
   HELPERS
   ========================================================= */
function randInt(a,b){ return Math.floor(Math.random()*(b-a+1))+a; }
function shuffle(a){ return a.slice().sort(()=>Math.random()-0.5); }
const el = id => document.getElementById(id);
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

// Bolsa sin reemplazo: un texto repetido se reconoce de inmediato y deja de
// medir comprensión, así que no se repite hasta agotar el corpus.
const bolsas = {};
function tomar(clave, arr){
  if(!bolsas[clave] || bolsas[clave].length === 0){
    bolsas[clave] = shuffle(arr.map((_,i)=>i));
  }
  return arr[bolsas[clave].pop()];
}

// "[Marta|r1] fue con [Tomás|r2]." → [{t:'',tag:null},{t:'Marta',tag:'r1'},...]
function parseTexto(s){
  const out = [];
  const re = /\\[([^\\]|]+)\\|([^\\]]+)\\]/g;
  let last = 0, m;
  while((m = re.exec(s))){
    if(m.index > last) out.push({t: s.slice(last, m.index), tag: null});
    out.push({t: m[1], tag: m[2]});
    last = m.index + m[0].length;
  }
  if(last < s.length) out.push({t: s.slice(last), tag: null});
  return out;
}

const COLORES_REF = ['#c0392b','#1f7a8c','#7d3cb5','#0f7b4a','#b8620a'];

/* =========================================================
   PANTALLA DE INICIO
   ========================================================= */
el('edadHint').textContent = HINTS[edad];

document.querySelectorAll('.toggle-opt').forEach(b=>{
  b.addEventListener('click', ()=>{
    edad = b.dataset.val;
    document.querySelectorAll('.toggle-opt').forEach(x=>{ x.classList.remove('selected'); x.classList.add('ghost'); });
    b.classList.add('selected'); b.classList.remove('ghost');
    el('edadHint').textContent = HINTS[edad];
    renderActGrid();
  });
});

function renderActGrid(){
  const grid = el('actGrid');
  grid.innerHTML = '';
  ACTIVIDADES[edad].forEach(a=>{
    const tile = document.createElement('button');
    tile.className = 'act-tile';
    tile.innerHTML = '<span class="emoji">' + a.emoji + '</span><strong>' + a.nombre + '</strong><span class="desc">' + a.desc + '</span>';
    tile.addEventListener('click', ()=>startActivity(a));
    grid.appendChild(tile);
  });
}
renderActGrid();

/* =========================================================
   CICLO DE RONDA
   ========================================================= */
function startActivity(a){
  currentAct = a;
  score = {ok:0, bad:0};
  el('setup').style.display = 'none';
  el('activity').style.display = 'block';
  el('actName').textContent = a.emoji + ' ' + a.nombre + ' · ' + edad + ' años';
  updateScore();
  loadProgreso();
  nextRound();
}

el('backBtn').addEventListener('click', async ()=>{
  pararTimer();
  await saveProgreso();
  el('activity').style.display = 'none';
  el('setup').style.display = 'block';
});

// Si se cierra la pestaña a media sesión, no perder el avance.
window.addEventListener('pagehide', ()=>{ saveProgreso(); });

function updateScore(){ el('scorePill').textContent = '✅ ' + score.ok + ' · ❌ ' + score.bad; }

function setFeedback(msg, good){
  const f = el('feedback');
  f.innerHTML = msg;
  f.className = 'feedback ' + (good===undefined ? '' : good ? 'good' : 'bad');
}

// A diferencia del taller de divisiones, aquí una ronda puede contener varios
// reactivos (4 pronombres, 3 preguntas, 4 afirmaciones). \`marcar\` cuenta cada
// reactivo y \`cerrarRonda\` solo cierra: así el porcentaje del expediente sigue
// siendo comparable entre actividades.
function marcar(good){
  if(good) score.ok++; else score.bad++;
  updateScore();
}

function cerrarRonda(msg, good){
  pararTimer();
  setFeedback(msg, good);
  el('checkBtn').style.display = 'none';
  el('nextBtn').style.display = 'inline-block';
}

function endRound(good, msg){ marcar(good); cerrarRonda(msg, good); }

function usarCheck(fn){
  state.check = fn;
  el('checkBtn').style.display = 'inline-block';
}

el('nextBtn').addEventListener('click', nextRound);
el('checkBtn').addEventListener('click', ()=>{ if(state.check) state.check(); });

/* --- cronómetro (solo "Caza el dato": ahí la velocidad SÍ es la habilidad) --- */
function pararTimer(){
  if(timerId){ clearInterval(timerId); timerId = null; }
  el('timerPill').style.display = 'none';
  el('timerPill').classList.remove('urge');
}

function arrancarTimer(segs, alAcabar){
  pararTimer();
  let quedan = segs;
  const pill = el('timerPill');
  pill.style.display = 'block';
  pill.textContent = '⏱️ ' + quedan;
  timerId = setInterval(()=>{
    quedan--;
    pill.textContent = '⏱️ ' + quedan;
    pill.classList.toggle('urge', quedan <= 8);
    if(quedan <= 0){ pararTimer(); alAcabar(); }
  }, 1000);
}

// Las declaraciones de función se izan, así que el mapa puede nombrarlas antes
// de que aparezcan más abajo.
const RONDAS = {
  quien:       roundQuien,
  ordena:      roundOrdena,
  caza:        roundCaza,
  palabra:     roundPalabra,
  idea:        roundIdea,
  inferencia:  roundInferencia,
  prueba:      roundPrueba,
  hechopinion: roundHecho,
  proposito:   roundProposito,
};

function nextRound(){
  setFeedback('');
  pararTimer();
  el('nextBtn').style.display = 'none';
  el('checkBtn').style.display = 'none';
  el('stage').innerHTML = '';
  state = {};
  rondaActual++;
  const ronda = RONDAS[currentAct.id];
  if(ronda) ronda();
}

/* =========================================================
   ACTIVIDAD 1 (8-9): ¿DE QUIÉN HABLAMOS?
   La anáfora es la causa invisible nº1 de que se pierda el hilo:
   el niño lee "él" y sigue de largo sin saber quién es "él".
   ========================================================= */
function roundQuien(){
  const t = tomar('quien', T_QUIEN);
  const tokens = parseTexto(t.texto);

  // Un color por referente: la "línea" que une pronombre y referente es que
  // acaban del mismo color, que funciona en táctil mejor que dibujar flechas.
  const refs = {};
  let ci = 0;
  tokens.forEach(tk=>{
    if(tk.tag && !tk.tag.startsWith('p:') && !refs[tk.tag]){
      refs[tk.tag] = {color: COLORES_REF[ci % COLORES_REF.length], nombre: tk.t};
      ci++;
    }
  });

  let html = '<div class="lectura"><div class="titulillo">' + esc(t.titulo) + '</div>';
  let pi = 0;
  tokens.forEach(tk=>{
    if(!tk.tag){
      html += esc(tk.t).replace(/\\n/g, '<br>');
    } else if(tk.tag.startsWith('p:')){
      html += '<span class="pron" data-p="' + pi + '" data-ans="' + tk.tag.slice(2) + '">' + esc(tk.t) + '</span>';
      pi++;
    } else {
      html += '<span class="ref" data-ref="' + tk.tag + '" style="color:' + refs[tk.tag].color + '">' + esc(tk.t) + '</span>';
    }
  });
  html += '</div>';

  el('prompt').innerHTML = '¿A quién se refiere cada palabra morada?' +
    '<small>Toca una palabra morada y después toca el personaje o la cosa de la que habla.</small>';
  el('stage').innerHTML = html;

  state = {refs, total: pi, resueltos: 0, sel: null, fallado: {}};

  el('stage').querySelectorAll('.pron').forEach(sp=>{
    sp.addEventListener('click', ()=>{
      if(sp.classList.contains('ok')) return;
      el('stage').querySelectorAll('.pron').forEach(x=>x.classList.remove('sel'));
      sp.classList.add('sel');
      state.sel = sp;
      setFeedback('Ahora toca de quién (o de qué) está hablando.');
    });
  });

  el('stage').querySelectorAll('.ref').forEach(sp=>{
    sp.addEventListener('click', ()=>{
      if(state.resueltos >= state.total) return;
      const sel = state.sel;
      if(!sel){ setFeedback('Primero toca una palabra morada.'); return; }
      const esperado = sel.dataset.ans;
      const dado = sp.dataset.ref;
      const idx = sel.dataset.p;

      if(dado === esperado){
        if(!state.fallado[idx]) marcar(true);
        const r = state.refs[esperado];
        sel.classList.remove('sel');
        sel.classList.add('ok');
        sel.style.setProperty('--c', r.color);
        sel.innerHTML = esc(sel.textContent) + '<sup>= ' + esc(r.nombre) + '</sup>';
        state.sel = null;
        state.resueltos++;
        if(state.resueltos === state.total){
          const limpio = Object.keys(state.fallado).length === 0;
          cerrarRonda(limpio ? '¡Perfecto! Seguiste el hilo del texto sin perderte.'
                             : 'Listo. Cuando dudes, regresa a la oración de antes: casi siempre ahí está la respuesta.', limpio);
        } else {
          setFeedback('¡Va! Quedan ' + (state.total - state.resueltos) + '.', true);
        }
      } else {
        if(!state.fallado[idx]){ state.fallado[idx] = true; marcar(false); }
        sel.classList.remove('mal');
        void sel.offsetWidth;
        sel.classList.add('mal');
        setFeedback('Ese no. Vuelve a leer la oración completa y fíjate de quién se venía hablando.', false);
      }
    });
  });
}

/* =========================================================
   ACTIVIDAD 2 (8-9): ORDENA LA HISTORIA
   ========================================================= */
function roundOrdena(){
  const t = tomar('ordena', T_ORDENA);
  const n = t.frases.length;
  const orden = shuffle(t.frases.map((_,i)=>i));

  el('prompt').innerHTML = 'Acomoda la historia: «' + esc(t.titulo) + '»' +
    '<small>Toca las oraciones en el orden correcto. Si te equivocas, tócala arriba para regresarla.</small>';
  el('stage').innerHTML = '<div class="slots" id="slots"></div><div class="pool" id="pool"></div>';

  state = {frases: t.frases, revueltas: orden, puestas: [], check: null};
  usarCheck(checkOrdena);
  drawOrdena();
}

function drawOrdena(){
  const {frases, revueltas, puestas} = state;
  const slots = el('slots');
  const pool = el('pool');
  slots.innerHTML = '';
  pool.innerHTML = '';

  for(let i=0;i<frases.length;i++){
    const div = document.createElement('div');
    if(i < puestas.length){
      div.className = 'slot';
      div.innerHTML = '<span class="num">' + (i+1) + '</span><span>' + esc(frases[puestas[i]]) + '</span>';
      // Solo se puede quitar la última: evita huecos a media lista.
      if(i === puestas.length - 1){
        div.addEventListener('click', ()=>{
          if(state.acabado) return;
          state.puestas.pop(); setFeedback(''); drawOrdena();
        });
      }
    } else {
      div.className = 'slot vacio';
      div.innerHTML = '<span class="num">' + (i+1) + '</span><span>…</span>';
    }
    slots.appendChild(div);
  }

  revueltas.forEach(idx=>{
    if(puestas.indexOf(idx) !== -1) return;
    const b = document.createElement('button');
    b.className = 'frase';
    b.textContent = frases[idx];
    b.addEventListener('click', ()=>{ state.puestas.push(idx); setFeedback(''); drawOrdena(); });
    pool.appendChild(b);
  });
}

function checkOrdena(){
  const {frases, puestas} = state;
  if(puestas.length < frases.length){
    setFeedback('Todavía faltan oraciones por acomodar.');
    return;
  }
  state.acabado = true;
  const bien = puestas.every((v,i)=>v===i);
  const slots = el('slots').children;
  for(let i=0;i<puestas.length;i++){
    slots[i].classList.add(puestas[i]===i ? 'ok' : 'mal');
  }
  if(bien){
    endRound(true, '¡Exacto! Las palabras primero, después, luego y al final son las que marcan el camino.');
  } else {
    // Mostrar el orden correcto: sin el modelo, el error no enseña nada.
    let orden = '<br><span style="opacity:.85;font-weight:700;">Así iba: </span>' +
      frases.map((f,i)=>(i+1) + '. ' + esc(f)).join(' ');
    endRound(false, 'Casi. Fíjate en las palabras que marcan el tiempo.' + orden);
  }
}

/* =========================================================
   ACTIVIDAD 3 (8-9): CAZA EL DATO
   Única actividad contrarreloj del taller: aquí lo que se entrena
   es barrer el texto con la vista, y para eso la prisa ayuda.
   ========================================================= */
function roundCaza(){
  const t = tomar('caza', T_CAZA);
  const tokens = parseTexto(t.texto);

  let html = '<div class="lectura" id="lectura"><div class="titulillo">' + esc(t.titulo) + '</div>';
  tokens.forEach(tk=>{
    if(tk.tag){
      html += '<span class="tok" data-tag="' + tk.tag + '">' + esc(tk.t) + '</span>';
    } else {
      // Todas las palabras son tocables: si solo lo fueran las respuestas,
      // se verían a leguas y no habría búsqueda que hacer.
      esc(tk.t).split(/(\\s+)/).forEach(w=>{
        html += /^\\s*$/.test(w) ? w : '<span class="tok">' + w + '</span>';
      });
    }
  });
  html += '</div>';
  el('stage').innerHTML = html;

  state = {preguntas: shuffle(t.preguntas), i: 0, fallado: false, ronda: rondaActual};

  el('stage').querySelectorAll('.tok').forEach(sp=>{
    sp.addEventListener('click', ()=>onCaza(sp));
  });

  pedirCaza();
}

// Cada salto diferido comprueba que la ronda siga siendo la suya.
function luego(ms, fn){
  const mi = rondaActual;
  setTimeout(()=>{ if(mi === rondaActual) fn(); }, ms);
}

function pedirCaza(){
  const p = state.preguntas[state.i];
  state.fallado = false;
  el('prompt').innerHTML = p.q + '<small>Toca en el texto la palabra o las palabras que lo contestan.</small>';
  const mi = rondaActual;
  arrancarTimer(25, ()=>{
    if(mi !== rondaActual) return;
    if(!state.fallado){ marcar(false); state.fallado = true; }
    revelarCaza(p.a);
    setFeedback('Se acabó el tiempo. Ahí estaba, resaltado.', false);
    luego(1400, avanzarCaza);
  });
}

function onCaza(sp){
  if(state.acabado) return;
  const p = state.preguntas[state.i];
  if(sp.dataset.tag === p.a){
    if(!state.fallado) marcar(true);
    pararTimer();
    sp.classList.add('ok');
    setFeedback('¡Ahí estaba!', true);
    luego(900, avanzarCaza);
  } else {
    if(!state.fallado){ marcar(false); state.fallado = true; }
    sp.classList.add('mal');
    setTimeout(()=>sp.classList.remove('mal'), 500);
    setFeedback('Ahí no dice eso. Busca en otra parte del texto.', false);
  }
}

function revelarCaza(tag){
  const sp = el('stage').querySelector('[data-tag="' + tag + '"]');
  if(sp) sp.classList.add('ok');
}

function avanzarCaza(){
  state.i++;
  if(state.i >= state.preguntas.length){
    state.acabado = true;
    cerrarRonda('Terminaste este texto. Buscar el dato exacto es el hábito que hay que dejar pegado.', true);
  } else {
    el('stage').querySelectorAll('.tok.ok').forEach(x=>x.classList.remove('ok'));
    setFeedback('');
    pedirCaza();
  }
}

/* =========================================================
   ACTIVIDAD 4 (8-9): PALABRA MISTERIOSA
   ========================================================= */
function roundPalabra(){
  const t = tomar('palabra', T_PALABRA);
  const tokens = parseTexto(t.texto);

  let html = '<div class="lectura">';
  tokens.forEach(tk=>{
    if(tk.tag === 'c'){
      html += '<span class="pista-zona">' + esc(tk.t) + '</span>';
    } else {
      // *palabra* → la palabra misteriosa, resaltada.
      html += esc(tk.t).replace(/\\*([^*]+)\\*/g, '<span class="misterio">$1</span>');
    }
  });
  html += '</div>';

  el('prompt').innerHTML = '¿Qué significa «' + esc(t.palabra) + '»?' +
    '<small>No la busques en el diccionario: adivínala con lo que dice el resto de la oración.</small>';
  el('stage').innerHTML = html + '<div class="options col" id="ops"></div>';

  const orden = shuffle(t.ops.map((_,i)=>i));
  const ops = el('ops');
  orden.forEach(i=>{
    const b = document.createElement('button');
    b.className = 'opt texto';
    b.textContent = t.ops[i];
    b.addEventListener('click', ()=>{
      if(state.acabado) return;
      state.acabado = true;
      const bien = i === t.ok;
      b.classList.add(bien ? 'correct' : 'wrong');
      if(!bien){
        [...ops.children].forEach(c=>{ if(c.textContent === t.ops[t.ok]) c.classList.add('correct'); });
      }
      // La pista se resalta siempre: es lo que enseña el procedimiento.
      const z = el('stage').querySelector('.pista-zona');
      if(z) z.className = 'clave';
      endRound(bien, bien ? 'Muy bien. Lo resaltado en amarillo es la pista que te lo dijo.'
                          : 'Fíjate en lo que quedó resaltado en amarillo: ahí estaba la pista.');
    });
    ops.appendChild(b);
  });
}

/* =========================================================
   ACTIVIDAD 5 (10-12): LA IDEA PRINCIPAL
   Nombrar el tipo de error ("eso es un detalle") es lo que
   transfiere; sin eso, es adivinar entre cuatro opciones.
   ========================================================= */
const ETIQUETA_IDEA = {
  principal:'✅ Es la idea principal',
  general:  '🌫️ Abarca de más',
  detalle:  '🔍 Es solo un detalle',
  ajena:    '🚫 Eso no lo dice el texto'
};
const EXPLICA_IDEA = {
  general: 'Esa oración es verdad, pero es tan general que serviría para muchísimos textos distintos. La idea principal tiene que ser de <em>este</em> texto.',
  detalle: 'Eso sí aparece en el texto, pero es un dato que apoya la idea, no la idea. Pregúntate: ¿de qué habla <em>todo</em> el párrafo?',
  ajena:   'Eso no aparece en el texto. Puede sonar razonable, pero aquí solo vale lo que está escrito.'
};

function roundIdea(){
  const t = tomar('idea', T_IDEA);
  el('prompt').innerHTML = '¿Cuál de las cuatro resume mejor el texto?' +
    '<small>Una es la idea principal. Las otras tres fallan por motivos distintos.</small>';
  el('stage').innerHTML = '<div class="lectura"><div class="titulillo">' + esc(t.titulo) + '</div>' +
    esc(t.texto) + '</div><div class="options col" id="ops"></div>';

  const ops = el('ops');
  shuffle(t.ops).forEach(o=>{
    const b = document.createElement('button');
    b.className = 'opt texto';
    b.textContent = o.t;
    b.addEventListener('click', ()=>{
      if(state.acabado) return;
      state.acabado = true;
      const bien = o.tipo === 'principal';
      [...ops.children].forEach(c=>{
        const dato = t.ops.find(x=>x.t === c.textContent);
        c.insertAdjacentHTML('beforeend', '<span class="etq">' + ETIQUETA_IDEA[dato.tipo] + '</span>');
        if(dato.tipo === 'principal') c.classList.add('correct');
      });
      if(!bien) b.classList.add('wrong');
      endRound(bien, bien ? '¡Exacto! Esa recoge de qué habla todo el párrafo, ni de más ni de menos.'
                          : EXPLICA_IDEA[o.tipo]);
    });
    ops.appendChild(b);
  });
}

/* =========================================================
   ACTIVIDAD 6 (10-12): DICHO, DEDUCIDO O NI IDEA
   Es el formato exacto de los reactivos de comprensión de PISA
   y, más adelante, del EXANI. Vale la pena sembrarlo desde 5º.
   ========================================================= */
const TIPOS_INFER = [
  {id:'dicho',    et:'📖 Lo dice'},
  {id:'deducido', et:'🧠 Se deduce'},
  {id:'nose',     et:'❓ No se sabe'}
];
const NOMBRE_INFER = {dicho:'Lo dice el texto', deducido:'Se puede deducir', nose:'No se sabe'};

function roundInferencia(){
  const t = tomar('inferencia', T_INFER);
  const afs = shuffle(t.afs);

  el('prompt').innerHTML = 'Clasifica cada afirmación' +
    '<small>«Se deduce» es lo que el texto deja ver sin escribirlo. «No se sabe» es lo que podría ser cierto… pero el texto no lo dice.</small>';

  let html = '<div class="lectura"><div class="titulillo">' + esc(t.titulo) + '</div>' + esc(t.texto) + '</div>';
  afs.forEach((a,i)=>{
    html += '<div class="stmt" data-i="' + i + '"><p>' + esc(a.t) + '</p><div class="tri-row">';
    TIPOS_INFER.forEach(tp=>{
      html += '<button class="tri" data-i="' + i + '" data-v="' + tp.id + '">' + tp.et + '</button>';
    });
    html += '</div></div>';
  });
  el('stage').innerHTML = html;

  state = {afs, elegido: {}, check: null};
  usarCheck(checkInferencia);

  el('stage').querySelectorAll('.tri').forEach(b=>{
    b.addEventListener('click', ()=>{
      if(state.acabado) return;
      const i = b.dataset.i;
      state.elegido[i] = b.dataset.v;
      el('stage').querySelectorAll('.tri[data-i="' + i + '"]').forEach(x=>x.classList.remove('sel'));
      b.classList.add('sel');
      setFeedback('');
    });
  });
}

function checkInferencia(){
  const {afs, elegido} = state;
  if(Object.keys(elegido).length < afs.length){
    setFeedback('Falta clasificar alguna afirmación.');
    return;
  }
  state.acabado = true;
  let aciertos = 0;
  afs.forEach((a,i)=>{
    const bien = elegido[i] === a.tipo;
    if(bien) aciertos++;
    marcar(bien);
    const box = el('stage').querySelector('.stmt[data-i="' + i + '"]');
    box.classList.add(bien ? 'ok' : 'mal');
    box.insertAdjacentHTML('beforeend',
      '<p class="por ' + (bien ? 'bien' : 'mal') + '">' +
      (bien ? '✅ ' : '❌ Era «' + NOMBRE_INFER[a.tipo] + '». ') + esc(a.por) + '</p>');
  });
  cerrarRonda(aciertos + ' de ' + afs.length + ' bien clasificadas.', aciertos === afs.length);
}

/* =========================================================
   ACTIVIDAD 7 (10-12): SUBRAYA LA PRUEBA
   Contestar bien de casualidad no cuenta: hay que poder señalar
   en qué renglón se sostiene la respuesta.
   ========================================================= */
function roundPrueba(){
  const t = tomar('prueba', T_PRUEBA);

  let html = '<div class="lectura" id="lectura"><div class="titulillo">' + esc(t.titulo) + '</div>';
  t.oraciones.forEach((o,i)=>{
    html += '<span class="oracion" data-o="' + i + '">' + esc(o) + '</span>';
  });
  html += '</div><div class="options col" id="ops"></div>';

  el('prompt').innerHTML = esc(t.q) + '<small>Primero contesta; luego te voy a pedir la prueba.</small>';
  el('stage').innerHTML = html;

  state = {t, fase: 1};

  // En la fase 1 las oraciones no responden: primero se compromete a una
  // respuesta y después la sostiene, no al revés.
  const ops = el('ops');
  shuffle(t.ops.map((v,i)=>i)).forEach(i=>{
    const b = document.createElement('button');
    b.className = 'opt texto';
    b.textContent = t.ops[i];
    b.addEventListener('click', ()=>{
      if(state.fase !== 1) return;
      const bien = i === t.ok;
      marcar(bien);
      b.classList.add(bien ? 'correct' : 'wrong');
      [...ops.children].forEach(c=>{ c.disabled = true; if(c.textContent === t.ops[t.ok]) c.classList.add('correct'); });
      state.fase = 2;
      el('prompt').innerHTML = 'Ahora subraya la prueba' +
        '<small>Toca la oración del texto que demuestra la respuesta correcta.</small>';
      setFeedback(bien ? 'Bien. Ahora demuéstralo: ¿en qué oración se sostiene?'
                       : 'La respuesta correcta era la verde. Encuentra ahora dónde lo dice.', bien);
    });
    ops.appendChild(b);
  });

  el('stage').querySelectorAll('.oracion').forEach(sp=>{
    sp.addEventListener('click', ()=>{
      if(state.fase !== 2) return;
      state.fase = 3;
      const i = Number(sp.dataset.o);
      const bien = t.prueba.indexOf(i) !== -1;
      marcar(bien);
      sp.classList.add(bien ? 'ok' : 'mal');
      if(!bien){
        t.prueba.forEach(k=>el('stage').querySelector('.oracion[data-o="' + k + '"]').classList.add('ok'));
      }
      cerrarRonda(bien ? '¡Esa es! Una respuesta que puedes señalar en el texto es una respuesta que sabes.'
                       : 'La prueba estaba en la oración verde. Antes de contestar, busca el renglón que lo dice.', bien);
    });
  });
}

/* =========================================================
   ACTIVIDAD 8 (10-12): HECHO U OPINIÓN
   ========================================================= */
function roundHecho(){
  const t = tomar('hecho', T_HECHO);
  el('prompt').innerHTML = '¿Hecho u opinión?' +
    '<small>Hecho: se puede comprobar. Opinión: es lo que alguien piensa o siente.</small>';
  el('stage').innerHTML = '<div class="lectura" style="text-align:center;font-weight:700;">' + esc(t.t) + '</div>' +
    '<div class="options" id="ops"></div>';

  const ops = el('ops');
  [{v:true, et:'🔎 Hecho'},{v:false, et:'💭 Opinión'}].forEach(o=>{
    const b = document.createElement('button');
    b.className = 'opt';
    b.textContent = o.et;
    b.addEventListener('click', ()=>{
      if(state.acabado) return;
      state.acabado = true;
      const bien = o.v === t.hecho;
      b.classList.add(bien ? 'correct' : 'wrong');
      if(!bien){
        [...ops.children].forEach(c=>{ if(c !== b) c.classList.add('correct'); });
      }
      endRound(bien, esc(t.por));
    });
    ops.appendChild(b);
  });
}

/* =========================================================
   ACTIVIDAD 9 (10-12): ¿PARA QUÉ SE ESCRIBIÓ?
   ========================================================= */
function roundProposito(){
  const t = tomar('proposito', T_PROPOSITO);
  el('prompt').innerHTML = '¿Para qué se escribió este texto?' +
    '<small>No todo texto es un cuento: también se escribe para informar, para convencer o para enseñar a hacer algo.</small>';
  el('stage').innerHTML = '<div class="lectura">' + esc(t.texto) + '</div><div class="options" id="ops"></div>';

  const ops = el('ops');
  PROPOSITOS.forEach(p=>{
    const b = document.createElement('button');
    b.className = 'opt';
    b.style.fontSize = '16px';
    b.textContent = p.et;
    b.addEventListener('click', ()=>{
      if(state.acabado) return;
      state.acabado = true;
      const bien = p.id === t.ok;
      b.classList.add(bien ? 'correct' : 'wrong');
      if(!bien){
        [...ops.children].forEach(c=>{
          const dato = PROPOSITOS.find(x=>x.et === c.textContent);
          if(dato && dato.id === t.ok) c.classList.add('correct');
        });
      }
      endRound(bien, 'Es <strong>' + esc(t.tipo) + '</strong>. ' + esc(t.por));
    });
    ops.appendChild(b);
  });
}

/* =========================================================
   PROGRESO (vía el host → tabla taller_sesiones)
   ========================================================= */
async function saveProgreso(){
  if(score.ok + score.bad === 0) return;
  const entry = {actividad: currentAct.nombre, grupo: edad, aciertos: score.ok, errores: score.bad};
  try{
    await host.guardarSesion(entry);
    score = {ok:0, bad:0};   // ya quedó registrada; no duplicar al salir
  }catch(e){
    console.warn('No se pudo guardar la sesión:', e.message);
  }
}

async function loadProgreso(){
  const box = el('progList');
  box.innerHTML = '<p class="hint">Cargando…</p>';
  try{
    const list = await host.cargarSesiones();
    if(!list || list.length === 0){ box.innerHTML = '<p class="hint">Aún no hay sesiones guardadas.</p>'; return; }
    box.innerHTML = list.map(function(e){
      const tot = e.aciertos + e.errores;
      const pct = tot ? Math.round((e.aciertos/tot)*100) : 0;
      return '<div class="prog-entry"><span>📅 ' + e.fecha + ' · ' + e.grupo + ' años · ' + e.actividad + '</span>' +
        '<span>✅ ' + e.aciertos + ' ❌ ' + e.errores + ' — ' + pct + '% de acierto</span></div>';
    }).join('');
  }catch(e){
    box.innerHTML = '<p class="hint">No se pudo cargar el progreso (' + e.message + ').</p>';
  }
}
<\/script>
</body>
</html>
`,b={id:"comprension-lectora",titulo:"Taller de Comprensión Lectora",materia:"Español",tema:"Comprensión lectora",nivel:"primaria",edades:"8-12 años",icono:"📖",descripcion:"Nueve actividades en dos grupos. De 8 a 9 años: seguir a quién se refiere cada pronombre, ordenar la historia, cazar el dato contrarreloj y deducir palabras por contexto. De 10 a 12: idea principal, inferencia, subrayar la evidencia, hecho contra opinión y propósito del texto.",actividades:[{id:"quien",nombre:"¿De quién hablamos?",edades:"8-9",temas:["referentes"]},{id:"ordena",nombre:"Ordena la historia",edades:"8-9",temas:["secuencia","conectores"]},{id:"caza",nombre:"Caza el dato",edades:"8-9",temas:["literal"]},{id:"palabra",nombre:"Palabra misteriosa",edades:"8-9",temas:["vocabulario-contexto"]},{id:"idea",nombre:"La idea principal",edades:"10-12",temas:["idea-principal"]},{id:"inferencia",nombre:"Dicho, deducido o ni idea",edades:"10-12",temas:["inferencia"]},{id:"prueba",nombre:"Subraya la prueba",edades:"10-12",temas:["evidencia","literal"]},{id:"hechopinion",nombre:"Hecho u opinión",edades:"10-12",temas:["hecho-opinion"]},{id:"proposito",nombre:"¿Para qué se escribió?",edades:"10-12",temas:["proposito"]}],objetivos:["Resolver a quién sustituye cada pronombre sin perder el hilo del texto.","Reconstruir el orden de los hechos apoyándose en los conectores.","Volver al texto a buscar el dato exacto en vez de contestar de memoria.","Deducir el significado de una palabra desconocida por su contexto.","Distinguir la idea principal de un detalle, de una idea muy general y de una ajena al texto.","Separar lo que el texto dice, lo que deja deducir y lo que no se sabe.","Sostener cada respuesta señalando la oración que la demuestra.","Distinguir un hecho comprobable de una opinión.","Identificar para qué se escribió un texto: informar, convencer, instruir o entretener."],render:{tipo:"html",html:S}},g={id:"decodificacion",titulo:"Taller de Decodificación Lectora",materia:"Español",tema:"Decodificación y fluidez",nivel:"primaria",edades:"8-10 años",icono:"🔊",descripcion:"Seis actividades encadenables en una sesión de 15 a 20 minutos, para el alumno que lee adivinando en vez de decodificando. Todo el contenido sale de un tema que él ya domina hablando —mecánica automotriz, futbol o cohetes—, así que lo único que se entrena es convertir letras en sonidos, no entender palabras nuevas.",actividades:[{id:"palmeo",nombre:"Palmeo de sílabas",edades:"8-10",temas:["silabas","decodificacion"]},{id:"armar",nombre:"Armar con sílabas",edades:"8-10",temas:["silabas","decodificacion"]},{id:"familias",nombre:"Familias de palabras",edades:"8-10",temas:["discriminacion","decodificacion"]},{id:"anclas",nombre:"Anclas ortográficas",edades:"8-10",temas:["ortografia","decodificacion"]},{id:"etiquetar",nombre:"Etiquetar el diagrama",edades:"8-10",temas:["decodificacion"]},{id:"lectura",nombre:"Lectura repetida cronometrada",edades:"8-10",temas:["fluidez","decodificacion"]}],objetivos:["Separar una palabra larga en sus golpes de voz antes de intentar leerla.","Ordenar sílabas sin saltarse ni invertir ninguna.","Dejar de adivinar por la silueta: distinguir piso de pisa, de pista y de pistón.","Fijar güe, j, ll/y, r/rr y c/s/z apoyándose en una palabra que ya pronuncia bien.","Leer una etiqueta escrita y llevarla a la pieza que ya reconoce de vista.","Ganar fluidez releyendo el mismo texto varias sesiones y midiendo su propia mejora."],render:{tipo:"react",componente:"decodificacion"}},I=`<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Carrera de Autos</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;700;800&family=Nunito:wght@600;700;800;900&display=swap" rel="stylesheet">
<style>
  :root{
    --noche:#141a28; --noche2:#26375e;
    --asfalto:#3a3f4a; --asfalto2:#2a2e37;
    --linea:#f3f0e6; --bordillo:#e04a3c;
    --rojo:#ff5a4d; --cian:#2ec4c6; --ambar:#ffc93c; --violeta:#a07bf0;
    --verde:#3fbf74; --tinta:#10141c; --hueso:#fdfaf1;
  }
  *{box-sizing:border-box;}
  html,body{margin:0;padding:0;}
  body{
    font-family:'Nunito',sans-serif;
    background:radial-gradient(ellipse at 50% -10%, var(--noche2) 0%, var(--noche) 62%);
    color:var(--hueso);min-height:100vh;display:flex;flex-direction:column;align-items:center;
    padding:13px;overflow-x:hidden;
  }
  h1,h2,h3,.display{font-family:'Baloo 2', sans-serif;}
  .wrap{width:100%;max-width:1080px;}
  header{text-align:center;margin-bottom:9px;}
  header h1{font-size:clamp(24px,4vw,38px);margin:0 0 3px 0;text-shadow:0 3px 0 rgba(0,0,0,0.3);}
  header p{margin:0;opacity:0.82;font-weight:700;font-size:clamp(12px,1.6vw,15px);}

  .card{background:rgba(253,250,241,0.07);border:2px solid rgba(253,250,241,0.16);border-radius:22px;padding:22px;}
  .btn{font-family:'Baloo 2';font-weight:700;font-size:18px;border:none;border-radius:16px;padding:13px 26px;cursor:pointer;
    color:var(--tinta);background:var(--ambar);box-shadow:0 5px 0 rgba(0,0,0,0.3);transition:transform .08s ease;}
  .btn:active{transform:translateY(4px);box-shadow:0 1px 0 rgba(0,0,0,0.3);}
  .btn.secondary{background:var(--cian);}
  .btn.ghost{background:transparent;color:var(--hueso);border:2px solid rgba(253,250,241,0.38);box-shadow:none;}
  .btn.small{font-size:15px;padding:9px 16px;}
  .btn:disabled{opacity:0.35;cursor:not-allowed;}
  .btn.selected{background:var(--ambar);color:var(--tinta);border-color:transparent;box-shadow:0 5px 0 rgba(0,0,0,0.3);}
  .row{display:flex;gap:10px;flex-wrap:wrap;align-items:center;justify-content:center;}
  .hint{font-size:13px;opacity:0.75;margin-top:10px;line-height:1.5;}
  .label{font-family:'Baloo 2';font-weight:700;font-size:15px;opacity:0.8;margin:16px 0 8px;text-align:center;}

  /* ---------- SETUP ---------- */
  .setup-grid{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));margin:10px 0;}
  .team-input{display:flex;align-items:center;gap:10px;background:rgba(0,0,0,0.24);border-radius:14px;padding:8px 14px;}
  .team-input svg{width:56px;height:26px;flex-shrink:0;}
  .team-input input{background:transparent;border:none;outline:none;color:var(--hueso);
    font-family:'Nunito';font-weight:800;font-size:16px;width:100%;min-width:0;}
  .team-input input::placeholder{color:rgba(253,250,241,0.45);}
  .team-input button{background:transparent;border:none;color:rgba(253,250,241,0.45);cursor:pointer;font-size:18px;line-height:1;}

  /* ---------- JUEGO ---------- */
  #game{display:none;}
  .topbar{display:flex;gap:10px;flex-wrap:wrap;align-items:center;justify-content:space-between;margin-bottom:10px;}
  .turno{font-family:'Baloo 2';font-size:clamp(16px,2.4vw,23px);font-weight:700;color:var(--tinta);
    padding:8px 20px;border-radius:14px;box-shadow:0 4px 0 rgba(0,0,0,0.3);}
  .marcador{display:flex;gap:8px;flex-wrap:wrap;justify-content:center;}
  .chip{display:flex;align-items:center;gap:6px;background:rgba(0,0,0,0.26);border-radius:12px;
    padding:5px 10px;font-weight:800;font-size:12.5px;}
  .chip .punto{width:12px;height:12px;border-radius:4px;flex-shrink:0;}
  .pill{background:rgba(0,0,0,0.26);border-radius:12px;padding:6px 12px;font-weight:800;font-size:12.5px;opacity:.8;}
  .chip.activo{outline:2px solid var(--ambar);}

  /* El taller se proyecta dentro de un iframe de 100vh−46px: la pista se topa
     para que el tacómetro y el botón siempre queden visibles sin hacer scroll. */
  svg#pista{width:100%;height:auto;max-height:40vh;display:block;border-radius:18px;
    box-shadow:0 10px 30px rgba(0,0,0,0.4);}
  .pista-wrap{position:relative;}

  /* cuenta regresiva sobre la pista */
  .semaforo{position:absolute;inset:0;display:none;align-items:center;justify-content:center;
    background:rgba(10,14,22,0.55);border-radius:18px;font-family:'Baloo 2';font-weight:800;
    font-size:clamp(46px,10vw,110px);color:var(--hueso);text-shadow:0 6px 0 rgba(0,0,0,0.35);}
  .semaforo.on{display:flex;}
  .semaforo span{animation:pop .75s ease both;}
  @keyframes pop{0%{transform:scale(0.3);opacity:0;}45%{transform:scale(1.15);opacity:1;}100%{transform:scale(1);opacity:1;}}

  .fan{animation:salto 1.4s ease-in-out infinite;}
  @keyframes salto{0%,100%{transform:translateY(0);}50%{transform:translateY(-3.5px);}}
  .bandera{transform-origin:left center;animation:ondear 1.1s ease-in-out infinite;}
  @keyframes ondear{0%,100%{transform:skewY(0deg) scaleY(1);}50%{transform:skewY(-7deg) scaleY(0.93);}}
  .llama{animation:fuego .12s steps(2) infinite;transform-origin:right center;}
  @keyframes fuego{0%{transform:scaleX(1);opacity:.95;}100%{transform:scaleX(0.7);opacity:.65;}}

  /* ---------- CONTROLES ---------- */
  .controles{display:flex;align-items:center;justify-content:center;gap:22px;margin-top:9px;flex-wrap:wrap;}
  .tacometro{width:172px;height:104px;flex-shrink:0;}
  .tacometro .aguja{transition:none;}
  .marcha{font-family:'Baloo 2';font-weight:800;font-size:15px;opacity:.8;text-align:center;}

  /* ---------- PREGUNTA ---------- */
  .overlay{position:fixed;inset:0;background:rgba(8,12,20,0.86);display:none;align-items:center;
    justify-content:center;z-index:50;padding:14px;}
  .qcard{background:var(--hueso);color:var(--tinta);border-radius:24px;max-width:660px;width:100%;
    padding:26px;text-align:center;box-shadow:0 12px 0 rgba(0,0,0,0.4);animation:entra .22s ease both;}
  @keyframes entra{from{transform:translateY(18px) scale(.97);opacity:0;}to{transform:none;opacity:1;}}
  .qcard .badge{display:inline-block;background:var(--rojo);color:var(--hueso);font-family:'Baloo 2';
    font-weight:700;padding:5px 16px;border-radius:20px;font-size:13px;margin-bottom:10px;}
  .qcard .badge.turbo{background:var(--tinta);}
  .qcard h2{font-size:clamp(20px,4vw,33px);margin:6px 0 20px 0;line-height:1.35;}
  .qcard h2 mark{background:var(--ambar);color:var(--tinta);padding:2px 8px;border-radius:8px;}
  .options{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
  .options.one-col{grid-template-columns:1fr;}
  .opt{font-family:'Baloo 2';font-size:22px;font-weight:700;background:#fff;
    border:3px solid rgba(16,20,28,0.14);border-radius:16px;padding:16px 10px;cursor:pointer;
    color:var(--tinta);transition:transform .08s ease, border-color .1s ease;}
  .opt:hover:not(:disabled){transform:translateY(-2px);border-color:var(--cian);}
  .opt.long{font-size:16px;line-height:1.35;padding:13px 12px;}
  .opt.correcta{background:var(--verde);color:#fff;border-color:var(--verde);}
  .opt.mala{background:var(--rojo);color:#fff;border-color:var(--rojo);}
  .qfeedback{margin-top:14px;font-weight:800;font-size:15.5px;min-height:22px;line-height:1.45;}
  .qcard .btn{margin-top:14px;display:none;}

  /* ---------- GANADOR ---------- */
  .win-overlay{position:fixed;inset:0;background:rgba(8,12,20,0.9);display:none;align-items:center;
    justify-content:center;z-index:60;padding:14px;}
  .win-card{background:var(--ambar);color:var(--tinta);border-radius:26px;padding:34px;text-align:center;
    max-width:520px;box-shadow:0 12px 0 rgba(0,0,0,0.4);}
  .win-card h2{font-size:clamp(24px,5vw,34px);margin:6px 0 4px;}
  .podio{display:flex;flex-direction:column;gap:6px;margin:16px 0 4px;text-align:left;}
  .podio div{background:rgba(16,20,28,0.12);border-radius:11px;padding:8px 13px;font-weight:800;font-size:14px;
    display:flex;justify-content:space-between;gap:10px;}
  #confeti{position:fixed;inset:0;pointer-events:none;z-index:70;overflow:hidden;}
  #confeti i{position:absolute;width:9px;height:14px;border-radius:2px;display:block;}

  /* ---------- PROGRESO ---------- */
  .progreso{margin-top:18px;}
  .progreso summary{cursor:pointer;font-family:'Baloo 2';font-weight:700;font-size:15px;padding:6px 0;}
  .prog-entry{background:rgba(0,0,0,0.22);border-radius:12px;padding:9px 13px;margin-top:7px;font-size:13.5px;
    display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;}
  footer{opacity:0.55;font-size:12px;margin-top:18px;text-align:center;}
</style>
</head>
<body>
<div class="wrap">
  <header>
    <h1 id="titulo">🏎️ Carrera de Autos</h1>
    <p id="subtitulo">Contesta bien y tu auto acelera. Cada reactivo vale según lo que cuesta, y la vuelta se cierra completa: gana quien más acierte.</p>
  </header>

  <!-- ================= SETUP ================= -->
  <div class="card" id="setup">
    <div class="label" style="margin-top:0;">Grupo de edad</div>
    <div class="row" id="edadToggle">
      <button class="btn selected" data-edad="8-9">🧒 8 a 9 años</button>
      <button class="btn ghost" data-edad="10-12">🧑 10 a 12 años</button>
    </div>
    <p class="hint" id="hintEdad" style="text-align:center;"></p>

    <div class="label" id="materiaLabel">Materia</div>
    <div class="row" id="materiaToggle">
      <button class="btn selected" data-materia="matematicas">🔢 Matemáticas</button>
      <button class="btn ghost" data-materia="espanol">📝 Español</button>
    </div>

    <div class="label">Distancia de la carrera</div>
    <div class="row" id="metaToggle">
      <button class="btn ghost" data-meta="12">Corta · 12</button>
      <button class="btn selected" data-meta="18">Media · 18</button>
      <button class="btn ghost" data-meta="26">Larga · 26</button>
      <button class="btn ghost" data-meta="50">Maratón · 50</button>
    </div>
    <p class="hint" id="hintMeta" style="text-align:center;"></p>

    <div class="label">Autos en la parrilla (1 a 4)</div>
    <div class="setup-grid" id="teamInputs"></div>
    <div class="row" style="margin-top:12px;">
      <button class="btn secondary" id="addTeamBtn">+ Agregar auto</button>
      <button class="btn" id="startBtn">¡A la parrilla! 🏁</button>
    </div>
    <p class="hint" style="text-align:center;">
      Con un solo auto se practica de forma individual y el registro queda limpio en el expediente del alumno.
    </p>
  </div>

  <!-- ================= JUEGO ================= -->
  <div id="game">
    <div class="topbar">
      <div class="turno" id="turno"></div>
      <div class="marcador" id="marcador"></div>
      <div class="row">
        <span class="pill" id="infoJuego"></span>
        <button class="btn ghost small" id="soundBtn" title="Sonido">🔊</button>
        <button class="btn ghost small" id="resetBtn">Reiniciar</button>
      </div>
    </div>

    <div class="pista-wrap">
      <svg id="pista" viewBox="0 0 1000 420" role="img" aria-label="Pista de carreras"></svg>
      <div class="semaforo" id="semaforo"><span id="semaforoTxt">3</span></div>
    </div>

    <div class="controles">
      <svg class="tacometro" id="tacometro" viewBox="0 0 200 118"></svg>
      <div>
        <button class="btn" id="acelerarBtn">🏁 Acelerar</button>
        <div class="marcha" id="marcha">Pisa el acelerador para ver cuánto vale el siguiente reactivo</div>
      </div>
    </div>

    <details class="progreso">
      <summary>📊 Progreso guardado</summary>
      <div id="progList"></div>
    </details>
  </div>

  <footer>El resultado de cada carrera se guarda en el expediente del alumno seleccionado.</footer>
</div>

<!-- PREGUNTA -->
<div class="overlay" id="overlay">
  <div class="qcard">
    <span class="badge" id="qBadge">Pregunta</span>
    <h2 id="qText"></h2>
    <div class="options" id="qOptions"></div>
    <div class="qfeedback" id="qFeedback"></div>
    <button class="btn" id="qContinue">Continuar ▶️</button>
  </div>
</div>

<!-- GANADOR -->
<div class="win-overlay" id="winOverlay">
  <div class="win-card">
    <div style="font-size:46px;line-height:1;">🏆</div>
    <h2 id="winText"></h2>
    <p id="winSub" style="margin:4px 0 0;font-weight:800;font-size:14px;opacity:.75;"></p>
    <div class="podio" id="winPodio"></div>
    <button class="btn secondary" id="winBtn" style="margin-top:14px;">Nueva carrera</button>
  </div>
</div>
<div id="confeti"></div>

<script>
/* =========================================================
   PUENTE CON LA APP (TallerRunner.jsx)
   El taller corre dentro de un <iframe srcDoc>: no alcanza el
   cliente de Supabase, así que pide guardar/leer por postMessage.
   Sin padre (abierto suelto) degrada a modo sin persistencia.
   ========================================================= */
const host = (function(){
  let seq = 0;
  const pendientes = new Map();

  window.addEventListener('message', (e) => {
    const m = e.data;
    if (!m || m.source !== 'taller-host' || !pendientes.has(m.rid)) return;
    const { resolve, reject } = pendientes.get(m.rid);
    pendientes.delete(m.rid);
    if (m.error) reject(new Error(m.error)); else resolve(m.payload);
  });

  function call(tipo, payload){
    if (window.parent === window) return Promise.reject(new Error('sin host'));
    const rid = ++seq;
    return new Promise((resolve, reject) => {
      pendientes.set(rid, {resolve, reject});
      window.parent.postMessage({source:'taller', rid, tipo, payload}, '*');
      setTimeout(() => {
        if (pendientes.has(rid)) { pendientes.delete(rid); reject(new Error('timeout')); }
      }, 8000);
    });
  }

  return {
    guardarSesion: (s) => call('guardar', s),
    cargarSesiones: ()  => call('cargar'),
  };
})();

/* =========================================================
   ESTADO
   ========================================================= */
const COLORES = [
  {hex:'#ff5a4d', oscuro:'#b8362b', nombre:'Rojo'},
  {hex:'#2ec4c6', oscuro:'#1a8082', nombre:'Cian'},
  {hex:'#ffc93c', oscuro:'#c08f14', nombre:'Ámbar'},
  {hex:'#a07bf0', oscuro:'#6a45c4', nombre:'Violeta'},
];
const HINTS = {
  matematicas: {
    '8-9':  'De 8 a 9 años: sumas y restas, tablas, series, reparto con y sin residuo, y problemas de uno y dos pasos.',
    '10-12':'De 10 a 12 años: multiplicación y división largas, fracciones, decimales, porcentajes, área y problemas de dos pasos.',
  },
  espanol: {
    '8-9':  'De 8 a 9 años: ortografía, sinónimos y antónimos, sílabas, plurales, mayúsculas, clases de palabra y, en lo más alto, homófonos y conectores.',
    '10-12':'De 10 a 12 años: ortografía, acentuación, homófonos, puntuación, conectores, sujeto, tiempos verbales y significado por contexto.',
  },
};
// El auto no se apaga en el bloque menor: conviene decirlo antes de empezar.
const NOTA_CONSUELO = ' Si el auto falla, igual avanza una casilla para que nadie se quede parado.';

// Escala del tacómetro por materia: es el peso del reactivo y, a la vez, las
// casillas que se ganan al acertarlo. Matemáticas llega a 6 (una multiplicación
// de dos cifras o un problema de dos pasos); Español se queda en 5, que es
// hasta donde da su banco sin inventar un nivel que no existe.
const PESOS = { matematicas: [1, 2, 3, 4, 5, 6], espanol: [1, 2, 3, 4, 5] };
const pesosDisponibles = () => PESOS[materia];
const pesoMaximo = () => pesosDisponibles()[pesosDisponibles().length - 1];

// Cada módulo de \`juegos/\` publica el taller con su materia ya puesta (ver
// carrera-autos-matematicas.js). Abierto suelto, el marcador se queda sin
// sustituir y la pantalla de inicio vuelve a preguntar la materia.
const MATERIA_FIJA = '__MATERIA_FIJA__';
const MATERIA_LIBRE = MATERIA_FIJA !== 'matematicas' && MATERIA_FIJA !== 'espanol';

let edad = '8-9';
let materia = MATERIA_LIBRE ? 'matematicas' : MATERIA_FIJA;
let meta = 18;
let equipos = [];
let turno = 0;
let pregunta = null;      // {peso, q}
// Secuencia de pesos compartida por todos los autos: el que juega su turno k
// contesta un reactivo del mismo peso que cualquier otro en su turno k. Ahí
// está la justicia — dos equipos que aciertan lo mismo avanzan exactamente lo
// mismo, y ganar depende de contestar bien, no de cómo cayó el dado.
let pesos = [];
let sonido = true;
let enJuego = false;

const el = (id) => document.getElementById(id);

/* =========================================================
   SONIDO (WebAudio, sin archivos externos)
   ========================================================= */
let ctx = null;
function audio(){
  if (!sonido) return null;
  if (!ctx) { try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e){ return null; } }
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}
function tono(freq, dur, tipo, vol, retraso){
  const c = audio(); if (!c) return;
  const t0 = c.currentTime + (retraso || 0);
  const osc = c.createOscillator(), g = c.createGain();
  osc.type = tipo || 'square';
  osc.frequency.setValueAtTime(freq, t0);
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(vol || 0.06, t0 + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(g); g.connect(c.destination);
  osc.start(t0); osc.stop(t0 + dur + 0.02);
}
function sfxBien(){ tono(660,.12,'square',.05); tono(880,.16,'square',.05,.1); }
function sfxMal(){ tono(180,.2,'sawtooth',.05); tono(120,.26,'sawtooth',.05,.12); }
function sfxMotor(){
  const c = audio(); if (!c) return;
  const t0 = c.currentTime;
  const osc = c.createOscillator(), g = c.createGain();
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(90, t0);
  osc.frequency.linearRampToValueAtTime(300, t0 + 0.55);
  osc.frequency.linearRampToValueAtTime(120, t0 + 1.0);
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(0.035, t0 + 0.08);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + 1.05);
  osc.connect(g); g.connect(c.destination);
  osc.start(t0); osc.stop(t0 + 1.1);
}
function sfxMeta(){
  [523,659,784,1046].forEach((f,i)=>tono(f,.22,'triangle',.06,i*0.13));
}

/* =========================================================
   AUTO (SVG reutilizable: parrilla y vista previa)
   ========================================================= */
function svgAuto(c, num){
  return \`
    <ellipse class="sombra" cx="0" cy="19" rx="50" ry="7" fill="rgba(0,0,0,.4)"/>
    <g class="estela" opacity="0">
      <rect x="-96" y="-14" width="34" height="4" rx="2" fill="\${c.hex}" opacity=".55"/>
      <rect x="-108" y="-3" width="46" height="4" rx="2" fill="#fff" opacity=".45"/>
      <rect x="-92" y="8" width="30" height="4" rx="2" fill="\${c.hex}" opacity=".45"/>
    </g>
    <g class="llamas" opacity="0">
      <path class="llama" d="M-52,2 L-74,-3 L-58,-1 L-80,3 L-58,4 L-72,9 L-52,6 Z" fill="#ffb020"/>
      <path class="llama" d="M-52,3 L-66,0 L-56,2 L-68,5 L-52,5 Z" fill="#fff0a6"/>
    </g>
    <g class="cuerpo">
      <path d="M-50,-8 L-38,-8 L-38,-20 L-54,-20 L-54,-11 Z" fill="\${c.oscuro}"/>
      <path d="M-52,11 L-53,-3 Q-50,-9 -34,-11 L-16,-12 Q-4,-25 14,-25 L28,-25
               Q40,-23 46,-11 L53,-9 Q57,-5 56,3 L53,11 Z" fill="\${c.hex}"/>
      <path d="M-52,11 L53,11 Q57,7 56,3 L-53,3 Z" fill="\${c.oscuro}" opacity=".55"/>
      <path d="M-9,-12 Q0,-22 14,-22 L27,-22 Q36,-20 41,-12 Z" fill="#cfe8ff" opacity=".92"/>
      <path d="M-9,-12 Q0,-22 8,-22 L10,-12 Z" fill="#ffffff" opacity=".35"/>
      <rect x="-34" y="-4" width="66" height="5" rx="2.5" fill="#ffffff" opacity=".3"/>
      <circle cx="51" cy="-4" r="4" fill="#fff3b0"/>
      <circle cx="-8" cy="-2" r="9" fill="#ffffff" opacity=".9"/>
      <text x="-8" y="2.5" text-anchor="middle" font-family="'Baloo 2',sans-serif" font-weight="800"
            font-size="12" fill="\${c.oscuro}">\${num}</text>
    </g>
    <g class="rueda trasera" transform="translate(-30,11)">
      <circle r="12.5" fill="#171b22" stroke="#454b58" stroke-width="3"/>
      <circle r="4.5" fill="#c9ced8"/>
      <rect x="-1.6" y="-11" width="3.2" height="22" fill="#7b8394"/>
    </g>
    <g class="rueda delantera" transform="translate(31,11)">
      <circle r="12.5" fill="#171b22" stroke="#454b58" stroke-width="3"/>
      <circle r="4.5" fill="#c9ced8"/>
      <rect x="-1.6" y="-11" width="3.2" height="22" fill="#7b8394"/>
    </g>\`;
}

/* =========================================================
   SETUP
   ========================================================= */
function pintarToggle(grupo, valor, attr){
  document.querySelectorAll('#' + grupo + ' .btn').forEach(b => {
    const activo = b.dataset[attr] === String(valor);
    b.classList.toggle('selected', activo);
    b.classList.toggle('ghost', !activo);
  });
}
function nombreMateria(){ return materia === 'matematicas' ? 'Matemáticas' : 'Español'; }
function iconoMateria(){ return materia === 'matematicas' ? '🔢' : '📝'; }
function pintarHint(){
  el('hintEdad').textContent = HINTS[materia][edad] + (edad === '8-9' ? NOTA_CONSUELO : '');
}
// La distancia se mide en casillas, no en preguntas. Como el maestro sí piensa
// en reactivos ("quiero una de 50"), aquí se traduce recorriendo la misma curva
// de pesos que usará la carrera y suponiendo ~70% de aciertos.
function preguntasPorAuto(){
  const vals = pesosDisponibles();
  const consuelo = edad === '8-9' ? 1 : 0;
  let suma = 0, k = 0;
  while (suma < meta && k < 300){
    const v = ventanaDePesos(k, vals);
    suma += 0.7 * (v.reduce((a, b) => a + b, 0) / v.length) + 0.3 * consuelo;
    k++;
  }
  return k;
}
function pintarHintMeta(){
  const n = preguntasPorAuto();
  el('hintMeta').textContent =
    \`La distancia va en casillas y cada reactivo vale según lo que cuesta \` +
    \`(de 1 a \${pesoMaximo()}). Todos los autos reciben el mismo nivel en su turno, así que \` +
    \`quien acierta más llega primero. A este ritmo cada auto contesta unas \${n} preguntas \` +
    \`(con dos autos, cerca de \${n * 2} reactivos en la partida).\`;
}

el('edadToggle').addEventListener('click', e => {
  const b = e.target.closest('.btn'); if (!b) return;
  edad = b.dataset.edad; pintarToggle('edadToggle', edad, 'edad'); pintarHint(); pintarHintMeta();
});
el('materiaToggle').addEventListener('click', e => {
  const b = e.target.closest('.btn'); if (!b) return;
  materia = b.dataset.materia; pintarToggle('materiaToggle', materia, 'materia'); pintarHint();
});
el('metaToggle').addEventListener('click', e => {
  const b = e.target.closest('.btn'); if (!b) return;
  meta = +b.dataset.meta; pintarToggle('metaToggle', meta, 'meta'); pintarHintMeta();
});

// Publicado por materia: la pregunta sobra y el título ya la anuncia.
if (!MATERIA_LIBRE){
  el('materiaLabel').style.display = 'none';
  el('materiaToggle').style.display = 'none';
  el('titulo').textContent = \`🏎️ Carrera de Autos · \${nombreMateria()}\`;
  document.title = \`Carrera de Autos · \${nombreMateria()}\`;
}
pintarToggle('materiaToggle', materia, 'materia');
pintarHint();
pintarHintMeta();

function renderTeamInputs(){
  el('teamInputs').innerHTML = equipos.map((t,i) => \`
    <div class="team-input">
      <svg viewBox="-70 -30 140 60">\${svgAuto(t.color, i+1)}</svg>
      <input type="text" value="\${t.nombre}" data-i="\${i}" maxlength="18" placeholder="Nombre del equipo">
      \${equipos.length > 1 ? \`<button data-quitar="\${i}" title="Quitar">✕</button>\` : ''}
    </div>\`).join('');
}
function nuevoEquipo(){
  if (equipos.length >= 4) return;
  const i = equipos.length;
  equipos.push({
    nombre: 'Auto ' + (i+1), color: COLORES[i],
    pos: 0, aciertos: 0, errores: 0, turnos: 0,
    x: 0, rueda: 0, tilt: 0, bob: 0,
  });
  renderTeamInputs();
}
nuevoEquipo(); nuevoEquipo();
el('addTeamBtn').addEventListener('click', nuevoEquipo);
el('teamInputs').addEventListener('input', e => {
  if (e.target.tagName === 'INPUT') {
    equipos[e.target.dataset.i].nombre = e.target.value || ('Auto ' + (+e.target.dataset.i + 1));
  }
});
el('teamInputs').addEventListener('click', e => {
  const b = e.target.closest('[data-quitar]'); if (!b) return;
  equipos.splice(+b.dataset.quitar, 1);
  equipos.forEach((t,i) => { t.color = COLORES[i]; });
  renderTeamInputs();
});

el('startBtn').addEventListener('click', () => {
  el('setup').style.display = 'none';
  el('game').style.display = 'block';
  // Proyectado, cada píxel de alto cuenta: el encabezado se retira y su
  // información se queda como pastilla en la barra superior.
  document.querySelector('header').style.display = 'none';
  el('infoJuego').textContent =
    iconoMateria() + ' ' + nombreMateria() + ' · ' + edad + ' años · meta ' + meta;
  turno = 0;
  pesos = [];
  equipos.forEach(t => { t.turnos = 0; });
  dibujarPista();
  dibujarTacometro();
  actualizarMarcador();
  actualizarTurno();
  loadProgreso();
  arrancarLoop();
  cuentaRegresiva();
});

/* =========================================================
   PISTA
   ========================================================= */
const TOP = 76, CARRIL = 88, BOT = 30, X0 = 96, X1 = 930;
const svgP = () => el('pista');
let paso = 46;          // ancho de una casilla en unidades del viewBox
let nodos = [];         // {g, cuerpo, ruedas[], estela, llamas, chip, chipTxt}

function xDe(pos){ return X0 + pos * paso; }
function yDe(i){ return TOP + i * CARRIL + CARRIL / 2 + 6; }

function dibujarPista(){
  const n = equipos.length;
  const H = TOP + n * CARRIL + BOT;
  paso = (X1 - X0) / meta;
  const svg = svgP();
  svg.setAttribute('viewBox', \`0 0 1000 \${H}\`);

  const yPista = TOP - 10, hPista = n * CARRIL + 20;
  let s = \`
  <defs>
    <linearGradient id="gCielo" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#2b3d68"/><stop offset="1" stop-color="#161d2c"/>
    </linearGradient>
    <linearGradient id="gAsfalto" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#3d434e"/><stop offset="1" stop-color="#282c34"/>
    </linearGradient>
    <linearGradient id="gLuz" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fff6c8" stop-opacity=".35"/><stop offset="1" stop-color="#fff6c8" stop-opacity="0"/>
    </linearGradient>
    <pattern id="cuadros" width="22" height="22" patternUnits="userSpaceOnUse">
      <rect width="22" height="22" fill="#f3f0e6"/>
      <rect width="11" height="11" fill="#1b1f27"/><rect x="11" y="11" width="11" height="11" fill="#1b1f27"/>
    </pattern>
    <pattern id="bordillo" width="32" height="9" patternUnits="userSpaceOnUse">
      <rect width="32" height="9" fill="#f3f0e6"/><rect width="16" height="9" fill="#e04a3c"/>
    </pattern>
  </defs>
  <rect x="0" y="0" width="1000" height="\${H}" fill="url(#gCielo)"/>\`;

  // Torres de luz + halo
  [140, 500, 860].forEach(x => {
    s += \`<rect x="\${x-3}" y="14" width="6" height="34" fill="#3b445c"/>\`;
    s += \`<rect x="\${x-17}" y="6" width="34" height="11" rx="3" fill="#59637f"/>\`;
    s += \`<circle cx="\${x-9}" cy="11" r="3.4" fill="#fff6c8"/><circle cx="\${x}" cy="11" r="3.4" fill="#fff6c8"/><circle cx="\${x+9}" cy="11" r="3.4" fill="#fff6c8"/>\`;
    s += \`<path d="M\${x-16},17 L\${x+16},17 L\${x+120},\${yPista} L\${x-120},\${yPista} Z" fill="url(#gLuz)"/>\`;
  });

  // Gradas con público que salta
  s += \`<rect x="0" y="30" width="1000" height="\${yPista-30}" fill="#1d2434" opacity=".85"/>\`;
  for (let f = 0; f < 3; f++){
    for (let x = 12; x < 1000; x += 17){
      const c = ['#ff5a4d','#2ec4c6','#ffc93c','#a07bf0','#fdfaf1','#3fbf74'][Math.floor(Math.random()*6)];
      s += \`<circle class="fan" cx="\${x + (f%2)*8}" cy="\${38 + f*11}" r="3.1" fill="\${c}" opacity=".8"
             style="animation-delay:\${(Math.random()*1.4).toFixed(2)}s"/>\`;
    }
  }
  s += \`<rect x="330" y="\${yPista-22}" width="340" height="18" rx="4" fill="#101622" stroke="#3b445c"/>
        <text x="500" y="\${yPista-9}" text-anchor="middle" font-family="'Baloo 2',sans-serif" font-weight="800"
              font-size="12" fill="#ffc93c" letter-spacing="2">FACTORIZANDO GP</text>\`;

  // Asfalto + bordillos
  s += \`<rect x="0" y="\${yPista}" width="1000" height="\${hPista}" fill="url(#gAsfalto)"/>\`;
  s += \`<rect x="0" y="\${yPista}" width="1000" height="9" fill="url(#bordillo)"/>\`;
  s += \`<rect x="0" y="\${yPista+hPista-9}" width="1000" height="9" fill="url(#bordillo)"/>\`;

  // Marcas de casilla + números cada 5 (cada 10 en el maratón: con 50 casillas
  // el paso baja a ~17 unidades del viewBox y los números se encimarían).
  const salto = meta > 30 ? 10 : 5;
  for (let i = 0; i <= meta; i++){
    const x = xDe(i);
    s += \`<rect x="\${x-0.8}" y="\${yPista+11}" width="1.6" height="\${hPista-22}" fill="#f3f0e6" opacity="\${i%salto===0?0.16:0.07}"/>\`;
    if (i % salto === 0 && i !== 0 && i !== meta){
      s += \`<text x="\${x}" y="\${yPista+hPista-14}" text-anchor="middle" font-family="'Baloo 2',sans-serif"
             font-weight="800" font-size="13" fill="#f3f0e6" opacity=".25">\${i}</text>\`;
    }
  }

  // Separación entre carriles
  for (let i = 1; i < n; i++){
    const y = TOP + i * CARRIL - 8;
    s += \`<line x1="10" y1="\${y}" x2="990" y2="\${y}" stroke="#f3f0e6" stroke-opacity=".22"
           stroke-width="3" stroke-dasharray="24 20"/>\`;
  }

  // Salida y meta
  s += \`<rect x="\${X0-30}" y="\${yPista+9}" width="14" height="\${hPista-18}" fill="url(#cuadros)" opacity=".55"/>\`;
  s += \`<rect x="\${X1-11}" y="\${yPista+9}" width="22" height="\${hPista-18}" fill="url(#cuadros)"/>\`;
  s += \`<rect x="\${X1-16}" y="\${yPista-4}" width="32" height="10" rx="3" fill="#101622" stroke="#3b445c"/>\`;
  s += \`<g transform="translate(\${X1+14},\${yPista-30})">
          <rect x="-2" y="0" width="3" height="34" fill="#8f97ab"/>
          <rect class="bandera" x="1" y="1" width="26" height="17" fill="url(#cuadros)"/>
        </g>\`;
  s += \`<text x="\${X1}" y="\${yPista-14}" text-anchor="middle" font-family="'Baloo 2',sans-serif"
         font-weight="800" font-size="13" fill="#f3f0e6" opacity=".7">META</text>\`;

  // Partículas (polvo / humo) reutilizadas por el bucle de animación
  s += \`<g id="fx">\` + new Array(48).fill(0)
        .map((_, i) => \`<circle id="fx\${i}" r="0" fill="#fff" opacity="0"/>\`).join('') + \`</g>\`;

  // Autos
  equipos.forEach((t, i) => {
    t.x = xDe(t.pos);
    s += \`<g class="auto" id="auto\${i}" transform="translate(\${t.x},\${yDe(i)})">
            <g class="etiqueta" transform="translate(0,-40)">
              <rect x="-56" y="-13" width="112" height="21" rx="10" fill="rgba(16,20,28,.72)" stroke="\${t.color.hex}" stroke-width="2"/>
              <text x="0" y="2" text-anchor="middle" font-family="'Baloo 2',sans-serif" font-weight="700"
                    font-size="12.5" fill="#fdfaf1" id="chip\${i}">\${t.nombre}</text>
            </g>
            <g class="marco">\${svgAuto(t.color, i+1)}</g>
          </g>\`;
  });

  svg.innerHTML = s;

  nodos = equipos.map((t, i) => {
    const g = el('auto' + i);
    return {
      g,
      marco:  g.querySelector('.marco'),
      cuerpo: g.querySelector('.cuerpo'),
      ruedas: [...g.querySelectorAll('.rueda')],
      estela: g.querySelector('.estela'),
      llamas: g.querySelector('.llamas'),
      chip:   el('chip' + i),
    };
  });
  fxNodos = new Array(48).fill(0).map((_, i) => el('fx' + i));
  actualizarChips();
}

function actualizarChips(){
  equipos.forEach((t, i) => {
    if (nodos[i]) nodos[i].chip.textContent = \`\${t.nombre} · \${t.pos}/\${meta}\`;
  });
}

/* =========================================================
   ANIMACIÓN (un solo rAF para autos, polvo y confeti)
   ========================================================= */
let fx = [];            // partículas activas
let fxNodos = [];
let mov = null;         // {i, desde, hasta, t0, dur, alTerminar}
let corriendo = false;

function easeInOutCubic(p){ return p < 0.5 ? 4*p*p*p : 1 - Math.pow(-2*p + 2, 3) / 2; }

function arrancarLoop(){
  if (corriendo) return;
  corriendo = true;
  requestAnimationFrame(loop);
}

function loop(ts){
  equipos.forEach((t, i) => {
    const nodo = nodos[i]; if (!nodo) return;
    let dx = 0;

    if (mov && mov.i === i){
      const p = Math.min(1, (ts - mov.t0) / mov.dur);
      const nx = mov.desde + (mov.hasta - mov.desde) * easeInOutCubic(p);
      dx = nx - t.x; t.x = nx;
      t.tilt = -Math.min(7, dx * 1.6);          // el morro se levanta al acelerar
      if (p >= 1){
        t.tilt = 0;
        const fin = mov.alTerminar; mov = null;
        nodo.estela.setAttribute('opacity', 0);
        nodo.llamas.setAttribute('opacity', 0);
        fin && fin();
      } else {
        const intensidad = Math.min(1, dx / 5);
        nodo.estela.setAttribute('opacity', (0.25 + intensidad * 0.75).toFixed(2));
        nodo.llamas.setAttribute('opacity', (0.35 + intensidad * 0.65).toFixed(2));
        if (dx > 0.8 && Math.random() < 0.75) polvo(t, i);
      }
    } else {
      t.tilt += (0 - t.tilt) * 0.18;
    }

    t.rueda += dx * 4.2 + 0.6;                  // ralentí: las llantas nunca se congelan
    t.bob = Math.sin(ts / 105 + i * 1.7) * 0.8 + (dx > 0.7 ? Math.sin(ts / 32) * 1.1 : 0);

    nodo.g.setAttribute('transform', \`translate(\${t.x.toFixed(1)},\${yDe(i)})\`);
    nodo.marco.setAttribute('transform', \`translate(0,\${t.bob.toFixed(2)}) rotate(\${t.tilt.toFixed(2)})\`);
    nodo.ruedas.forEach((r, k) => {
      r.setAttribute('transform', \`translate(\${k === 0 ? -30 : 31},11) rotate(\${(t.rueda % 360).toFixed(1)})\`);
    });
  });

  pintarFx();
  requestAnimationFrame(loop);
}

function polvo(t, i){
  fx.push({
    x: t.x - 52 + (Math.random()*10 - 5),
    y: yDe(i) + 14 + Math.random()*4,
    vx: -(1.2 + Math.random()*2.2), vy: -(0.2 + Math.random()*0.9),
    r: 2.5 + Math.random()*4, vida: 1,
    color: Math.random() < 0.35 ? t.color.hex : '#cbd2de',
  });
}
function chispas(t, i, color, n){
  for (let k = 0; k < n; k++){
    fx.push({
      x: t.x + (Math.random()*70 - 35), y: yDe(i) + (Math.random()*26 - 14),
      vx: (Math.random()*4 - 2), vy: -(0.5 + Math.random()*2.4),
      r: 2 + Math.random()*3.5, vida: 1, color,
    });
  }
}
function pintarFx(){
  for (let i = fx.length - 1; i >= 0; i--){
    const p = fx[i];
    p.x += p.vx; p.y += p.vy; p.vy += 0.045; p.vida -= 0.028;
    if (p.vida <= 0) fx.splice(i, 1);
  }
  if (fx.length > fxNodos.length) fx.splice(0, fx.length - fxNodos.length);
  fxNodos.forEach((nodo, i) => {
    const p = fx[i];
    if (!p){ nodo.setAttribute('opacity', 0); nodo.setAttribute('r', 0); return; }
    nodo.setAttribute('cx', p.x.toFixed(1));
    nodo.setAttribute('cy', p.y.toFixed(1));
    nodo.setAttribute('r', (p.r * p.vida).toFixed(2));
    nodo.setAttribute('fill', p.color);
    nodo.setAttribute('opacity', (p.vida * 0.6).toFixed(2));
  });
}

function moverAuto(i, casillas, alTerminar){
  const t = equipos[i];
  const destino = Math.min(t.pos + casillas, meta);
  t.pos = destino;
  mov = {
    i, desde: t.x, hasta: xDe(destino),
    t0: performance.now(), dur: 420 + casillas * 190,
    alTerminar,
  };
  sfxMotor();
  actualizarChips();
}

/* =========================================================
   CUENTA REGRESIVA
   ========================================================= */
function cuentaRegresiva(){
  const caja = el('semaforo'), txt = el('semaforoTxt');
  const pasos = ['3', '2', '1', '¡ARRANCA!'];
  let k = 0;
  caja.classList.add('on');
  el('acelerarBtn').disabled = true;
  (function siguiente(){
    txt.textContent = pasos[k];
    txt.style.animation = 'none'; void txt.offsetWidth; txt.style.animation = '';
    txt.style.color = k === 3 ? 'var(--verde)' : 'var(--hueso)';
    tono(k === 3 ? 880 : 440, k === 3 ? 0.35 : 0.14, 'square', 0.05);
    k++;
    if (k <= 3) setTimeout(siguiente, 750);
    else setTimeout(() => {
      caja.classList.remove('on');
      el('acelerarBtn').disabled = false;
      enJuego = true;
    }, 600);
  })();
}

/* =========================================================
   PESOS (sustituyen al dado)
   El tacómetro ya no sortea: marca lo que vale el reactivo que viene, y ese
   número es el que avanza el auto. Para que la carrera siga teniendo arco, la
   ventana de pesos sube un escalón cada tres turnos — pero sube para todos al
   mismo tiempo, que es lo que la vuelve pareja. (Antes la dificultad subía
   según qué tan cerca ibas de la meta, o sea que ir ganando se castigaba.)
   ========================================================= */
function ventanaDePesos(k, vals){
  const i = Math.min(Math.floor(k / 3), Math.max(0, vals.length - 3));
  return vals.slice(i, i + 3);
}
function pesoDeTurno(k){
  const vals = pesosDisponibles();
  while (pesos.length <= k) pesos = pesos.concat(barajar(ventanaDePesos(pesos.length, vals)));
  return pesos[k];
}

/* =========================================================
   TACÓMETRO
   ========================================================= */
function anguloDe(v){ return -90 + ((v - 0.5) / pesoMaximo()) * 180; }

function dibujarTacometro(){
  let s = \`
    <path d="M18,100 A82,82 0 0,1 182,100" fill="none" stroke="#1b2130" stroke-width="20" stroke-linecap="round"/>
    <path d="M18,100 A82,82 0 0,1 100,18" fill="none" stroke="#2ec4c6" stroke-width="20" stroke-linecap="round" opacity=".55"/>
    <path d="M100,18 A82,82 0 0,1 182,100" fill="none" stroke="#ff5a4d" stroke-width="20" stroke-linecap="round" opacity=".55"/>\`;
  for (const v of pesosDisponibles()){
    const a = (anguloDe(v) - 90) * Math.PI / 180;
    const rx = 100 + Math.cos(a) * 60, ry = 100 + Math.sin(a) * 60;
    s += \`<text x="\${rx.toFixed(1)}" y="\${(ry + 5).toFixed(1)}" text-anchor="middle"
           font-family="'Baloo 2',sans-serif" font-weight="800" font-size="15" fill="#fdfaf1" opacity=".75">\${v}</text>\`;
  }
  s += \`<g class="aguja" id="aguja" transform="rotate(-90,100,100)">
          <path d="M100,26 L104,100 L96,100 Z" fill="#ffc93c"/>
        </g>
        <circle cx="100" cy="100" r="11" fill="#fdfaf1"/>
        <circle cx="100" cy="100" r="5" fill="#10141c"/>\`;
  el('tacometro').innerHTML = s;
}

function girarTacometro(valor, listo){
  const aguja = el('aguja');
  const t0 = performance.now();
  const objetivo = anguloDe(valor);
  const giro = 850, asentar = 520;
  (function paso(ts){
    const t = ts - t0;
    if (t < giro){
      const a = -90 + ((t * 0.9) % 180);
      aguja.setAttribute('transform', \`rotate(\${a.toFixed(1)},100,100)\`);
      if (Math.floor(t / 90) !== Math.floor((t - 16) / 90)) tono(300 + (t % 180) * 2, .04, 'square', .025);
      requestAnimationFrame(paso);
    } else if (t < giro + asentar){
      const p = (t - giro) / asentar;
      const e = 1 - Math.pow(1 - p, 3);
      const desde = -90 + ((giro * 0.9) % 180);
      const a = desde + (objetivo - desde) * e + Math.sin(p * Math.PI * 3) * (1 - p) * 9;
      aguja.setAttribute('transform', \`rotate(\${a.toFixed(1)},100,100)\`);
      requestAnimationFrame(paso);
    } else {
      aguja.setAttribute('transform', \`rotate(\${objetivo.toFixed(1)},100,100)\`);
      listo();
    }
  })(t0);
}

/* =========================================================
   MARCADOR Y TURNO
   ========================================================= */
function actualizarMarcador(){
  el('marcador').innerHTML = equipos.map((t, i) => \`
    <div class="chip \${i === turno ? 'activo' : ''}">
      <span class="punto" style="background:\${t.color.hex}"></span>
      \${t.nombre} · \${t.pos}/\${meta} · ✅\${t.aciertos} ❌\${t.errores}
    </div>\`).join('');
}
function actualizarTurno(){
  const t = equipos[turno];
  const b = el('turno');
  b.style.background = t.color.hex;
  b.textContent = \`🏁 Turno de \${t.nombre}\`;
}

/* =========================================================
   TURNO
   ========================================================= */
el('acelerarBtn').addEventListener('click', () => {
  if (!enJuego) return;
  el('acelerarBtn').disabled = true;
  el('marcha').textContent = 'Calentando motor…';
  // El peso sale del turno que le toca a este auto, no del azar: la aguja
  // anuncia qué tan pesado viene el reactivo antes de enseñarlo.
  const t = equipos[turno];
  const peso = pesoDeTurno(t.turnos);
  t.turnos++;
  girarTacometro(peso, () => {
    el('marcha').textContent =
      \`Reactivo de nivel \${peso}: vale \${peso} \${peso === 1 ? 'casilla' : 'casillas'}\`;
    abrirPregunta(peso);
  });
});

function abrirPregunta(peso){
  const t = equipos[turno];
  pregunta = { peso, q: nuevaPregunta(peso) };
  const q = pregunta.q;

  const badge = el('qBadge');
  badge.textContent = \`\${q.badge} · \${peso} \${peso === 1 ? 'casilla' : 'casillas'}\`;
  badge.className = 'badge' + (peso >= pesoMaximo() - 1 ? ' turbo' : '');
  badge.style.background = t.color.hex;
  badge.style.color = '#10141c';

  if (q.html) el('qText').innerHTML = q.texto; else el('qText').textContent = q.texto;
  el('qFeedback').textContent = '';
  el('qContinue').style.display = 'none';

  const caja = el('qOptions');
  caja.className = q.long ? 'options one-col' : 'options';
  caja.innerHTML = '';
  q.opciones.forEach(op => {
    const b = document.createElement('button');
    b.className = q.long ? 'opt long' : 'opt';
    b.textContent = op;
    b.addEventListener('click', () => responder(op, b));
    caja.appendChild(b);
  });
  el('overlay').style.display = 'flex';
}

function responder(elegida, boton){
  const q = pregunta.q;
  const bien = String(elegida) === String(q.respuesta);
  document.querySelectorAll('.opt').forEach(b => {
    b.disabled = true;
    if (b.textContent === String(q.respuesta)) b.classList.add('correcta');
  });
  if (!bien) boton.classList.add('mala');

  const t = equipos[turno];
  const fb = el('qFeedback');
  pregunta.acerto = bien;
  pregunta.consuelo = 0;
  if (bien){
    t.aciertos++;
    fb.textContent = \`¡A fondo! Avanzas \${pregunta.peso} \${pregunta.peso === 1 ? 'casilla' : 'casillas'}.\`;
    sfxBien();
  } else {
    t.errores++;
    // En 8-9 el auto no se apaga: avanza 1 para que el grupo no se frustre.
    pregunta.consuelo = edad === '8-9' ? 1 : 0;
    fb.innerHTML = \`La respuesta era <b>\${q.respuesta}</b>. \` +
      (pregunta.consuelo ? 'El motor tose, pero avanzas 1 casilla.' : 'Te quedas en tu casilla.') +
      (q.pista ? \`<br><span style="opacity:.75;font-weight:700;">\${q.pista}</span>\` : '');
    sfxMal();
  }
  el('qContinue').style.display = 'inline-block';
}

el('qContinue').addEventListener('click', () => {
  el('overlay').style.display = 'none';
  const t = equipos[turno];
  const avance = pregunta.acerto ? pregunta.peso : (pregunta.consuelo || 0);

  const seguir = () => {
    actualizarMarcador();
    // Se cierra la vuelta antes de declarar ganador. Con los pesos compartidos,
    // premiar al primero que cruza le daría la carrera al que arranca: dos
    // equipos igual de buenos empatarían siempre a favor del auto 1.
    const cerroLaVuelta = turno === equipos.length - 1;
    if (cerroLaVuelta && equipos.some(e => e.pos >= meta)){ terminar(); return; }
    turno = (turno + 1) % equipos.length;
    actualizarTurno();
    actualizarMarcador();
    el('acelerarBtn').disabled = false;
    el('marcha').textContent = 'Pisa el acelerador para ver cuánto vale el siguiente reactivo';
  };

  if (avance > 0){
    moverAuto(turno, avance, seguir);
  } else {
    chispas(t, turno, '#7b8394', 10);   // humo: el motor se ahoga
    setTimeout(seguir, 380);
  }
});

/* =========================================================
   FINAL
   ========================================================= */
function terminar(){
  enJuego = false;
  sfxMeta();
  const orden = equipos.slice().sort((a, b) =>
    b.pos - a.pos || b.aciertos - a.aciertos || a.errores - b.errores);
  // Todos jugaron los mismos turnos con los mismos pesos, así que el empate
  // exacto ahora es posible y hay que poder nombrarlo.
  const empate = orden.length > 1 && orden[0].pos === orden[1].pos &&
                 orden[0].aciertos === orden[1].aciertos && orden[0].errores === orden[1].errores;
  const ganador = empate ? null : orden[0];
  if (ganador) chispas(ganador, equipos.indexOf(ganador), ganador.color.hex, 26);
  el('winText').textContent = ganador ? \`¡\${ganador.nombre} cruza la meta!\` : '¡Empate en la meta!';
  el('winSub').textContent = nombreMateria() + ' · ' + edad + ' años';
  el('winPodio').innerHTML = orden.map((t, i) => {
    const tot = t.aciertos + t.errores;
    const pct = tot ? Math.round(t.aciertos / tot * 100) : 0;
    // Con empate, dar oro y plata contradice el título de la pantalla.
    const marca = empate && t.pos === orden[0].pos && t.aciertos === orden[0].aciertos &&
                  t.errores === orden[0].errores ? '🤝' : ['🥇','🥈','🥉','4º'][i];
    return \`<div><span>\${marca} \${t.nombre}</span>
            <span>✅\${t.aciertos} ❌\${t.errores} · \${pct}%</span></div>\`;
  }).join('');
  setTimeout(() => { el('winOverlay').style.display = 'flex'; lanzarConfeti(); }, 900);
  guardarCarrera(ganador, empate);
}

function lanzarConfeti(){
  const caja = el('confeti');
  caja.innerHTML = '';
  const piezas = [];
  for (let i = 0; i < 90; i++){
    const d = document.createElement('i');
    d.style.background = COLORES[i % 4].hex;
    caja.appendChild(d);
    piezas.push({ nodo: d, x: Math.random()*window.innerWidth, y: -20 - Math.random()*window.innerHeight*0.6,
                  vy: 2 + Math.random()*3.4, vx: Math.random()*2 - 1, rot: Math.random()*360,
                  vr: Math.random()*10 - 5 });
  }
  const t0 = performance.now();
  (function caer(ts){
    piezas.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.rot += p.vr;
      p.nodo.style.transform = \`translate(\${p.x}px,\${p.y}px) rotate(\${p.rot}deg)\`;
    });
    if (ts - t0 < 4200) requestAnimationFrame(caer);
    else caja.innerHTML = '';
  })(t0);
}

el('winBtn').addEventListener('click', () => {
  el('winOverlay').style.display = 'none';
  reiniciar();
});
el('resetBtn').addEventListener('click', async () => {
  if (!confirm('¿Reiniciar la carrera? El progreso guardado no se borra.')) return;
  await guardarCarrera(null);
  reiniciar();
});
el('soundBtn').addEventListener('click', () => {
  sonido = !sonido;
  el('soundBtn').textContent = sonido ? '🔊' : '🔇';
});

function reiniciar(){
  equipos.forEach(t => { t.pos = 0; t.aciertos = 0; t.errores = 0; t.turnos = 0; t.x = xDe(0); });
  turno = 0;
  pesos = [];              // la secuencia de pesos se rebaraja en cada carrera
  dibujarPista();
  actualizarMarcador();
  actualizarTurno();
  loadProgreso();
  cuentaRegresiva();
}

/* =========================================================
   UTILIDADES
   ========================================================= */
function randInt(a, b){ return Math.floor(Math.random() * (b - a + 1)) + a; }
function elegir(arr){ return arr[randInt(0, arr.length - 1)]; }
function barajar(arr){
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--){ const j = randInt(0, i); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
// Distractores numéricos cercanos: si están muy lejos la pregunta se contesta por descarte.
// \`min\` sube el piso de los distractores cuando el cero no es una respuesta
// concebible: nadie duda entre 1 y 0 sílabas, así que esa opción se desperdicia.
function opcNum(resp, disp, min){
  const piso = min === undefined ? 0 : min;
  const set = new Set([String(resp)]);
  let guarda = 0;
  while (set.size < 4 && guarda++ < 120){
    const d = randInt(1, disp) * (Math.random() < 0.5 ? -1 : 1);
    const v = resp + d;
    if (v >= piso && v !== resp) set.add(String(v));
  }
  let extra = 1;
  while (set.size < 4) set.add(String(resp + disp + extra++));
  return barajar([...set]);
}
function opcDec(resp, disp){
  const r = Math.round(resp * 100) / 100;
  const set = new Set([String(r)]);
  let guarda = 0;
  while (set.size < 4 && guarda++ < 120){
    const d = (randInt(1, disp) / 10) * (Math.random() < 0.5 ? -1 : 1);
    const v = Math.round((r + d) * 100) / 100;
    if (v > 0 && v !== r) set.add(String(v));
  }
  let extra = 1;
  while (set.size < 4) set.add(String(Math.round((r + extra++) * 100) / 100));
  return barajar([...set]);
}
function q(badge, texto, resp, disp, extra){
  return Object.assign({ badge, texto, respuesta: String(resp), opciones: opcNum(resp, disp, extra && extra.min) }, extra || {});
}
// Las opciones llegan como [correcta, ...distractores]: aquí se quitan
// repetidos (los generadores numéricos a veces colisionan) sin perder nunca
// la respuesta correcta.
function qOpc(badge, texto, resp, opciones, extra){
  const r = String(resp);
  const otras = [];
  opciones.map(String).forEach(o => { if (o !== r && otras.indexOf(o) === -1) otras.push(o); });
  return Object.assign({ badge, texto, respuesta: r, opciones: barajar([r].concat(otras.slice(0, 3))) }, extra || {});
}
// Bolsa sin reemplazo: un reactivo de banco repetido dos turnos seguidos
// mata el juego, y con 4 equipos se notaría enseguida.
const bolsas = {};
function sacar(clave, arr){
  if (!bolsas[clave] || bolsas[clave].length === 0) bolsas[clave] = barajar(arr.map((_, i) => i));
  return arr[bolsas[clave].pop()];
}

/* =========================================================
   BANCOS DE ESPAÑOL
   ========================================================= */
const ORTOGRAFIA = [
  {ok:'biblioteca', mal:['vibloteca','bibliteca','vivlioteca']},
  {ok:'también', mal:['tambien','tanbién','tambíen']},
  {ok:'gente', mal:['jente','hente','yente']},
  {ok:'cocodrilo', mal:['cocodrillo','cocorilo','kocodrilo']},
  {ok:'zapato', mal:['sapato','zapatto','chapato']},
  {ok:'huevo', mal:['güevo','uevo','juevo']},
  {ok:'corazón', mal:['corason','korazón','corazon']},
  {ok:'jirafa', mal:['girafa','yirafa','jiraffa']},
  {ok:'ambulancia', mal:['anbulancia','ambulansia','hambulancia']},
  {ok:'ventana', mal:['bentana','ventanna','venttana']},
  {ok:'bicicleta', mal:['vicicleta','bisicleta','biciclleta']},
  {ok:'llave', mal:['yave','llabe','lave']},
  {ok:'escuela', mal:['eskuela','esquela','escuella']},
  {ok:'hermano', mal:['ermano','hhermano','hermanno']},
  {ok:'caballo', mal:['cabayo','cavallo','caballlo']},
  {ok:'cuaderno', mal:['quaderno','cuadermo','cuademo']},
  {ok:'vaca', mal:['baca','vacca','vaka']},
  {ok:'invierno', mal:['imbierno','inbierno','invíerno']},
  {ok:'almohada', mal:['almuada','almoada','almojada']},
  {ok:'burbuja', mal:['burbuga','vurbuja','burbugia']},
  {ok:'guitarra', mal:['gitarra','guitara','quitarra']},
  {ok:'águila', mal:['aguila','ágila','áquila']},
  {ok:'quesadilla', mal:['kesadilla','quesadiya','cuesadilla']},
  {ok:'mochila', mal:['mochilla','muchila','mochíla']},
  {ok:'tijeras', mal:['tigeras','tijerras','tijeraz']},
  {ok:'hospital', mal:['ospital','hospitál','hozpital']},
  {ok:'ejercicio', mal:['ejersicio','egercicio','ejerciscio']},
  {ok:'naranja', mal:['naranga','narranja','naranha']},
  {ok:'ballena', mal:['bayena','vallena','balena']},
  {ok:'sombrilla', mal:['sombriya','sonbrilla','sombrila']},
  {ok:'invitación', mal:['imbitación','invitacion','inbitación']},
  {ok:'hierba', mal:['ierba','hierva','jierba']},
  {ok:'cebolla', mal:['seboya','ceboya','sebolla']},
  {ok:'juguete', mal:['jugete','juguette','huguete']},
  {ok:'abrigo', mal:['avrigo','abriggo','habrigo']},
  {ok:'pingüino', mal:['pinguino','pingüíno','pinquino']},
  {ok:'girasol', mal:['jirasol','gírasol','guirasol']},
  {ok:'hormiga', mal:['ormiga','hormigga','jormiga']},
  {ok:'columpio', mal:['colunpio','columpío','colompio']},
  {ok:'estrella', mal:['estreya','estrela','extrella']},
  {ok:'vecino', mal:['becino','vesino','vezino']},
  {ok:'lluvia', mal:['yuvia','lluvía','luvia']},
  {ok:'cangrejo', mal:['cangrego','cangrrejo','kangrejo']},
  {ok:'hierro', mal:['ierro','hiero','jierro']},
  {ok:'obligación', mal:['ovligación','obligacion','obligasión']},
  {ok:'esquina', mal:['ezquina','eskina','escuina']},
  {ok:'ventilador', mal:['bentilador','ventillador','ventiladór']},
  {ok:'zanahoria', mal:['sanahoria','zanaoria','zanahorria']},
];
const SINONIMOS = [
  {p:'feliz', ok:'contento', mal:['triste','rápido','grande']},
  {p:'grande', ok:'enorme', mal:['pequeño','veloz','suave']},
  {p:'veloz', ok:'rápido', mal:['lento','alto','curioso']},
  {p:'hermoso', ok:'bonito', mal:['feo','oscuro','ruidoso']},
  {p:'comenzar', ok:'empezar', mal:['terminar','dormir','correr']},
  {p:'valiente', ok:'audaz', mal:['cobarde','tímido','cansado']},
  {p:'antiguo', ok:'viejo', mal:['nuevo','joven','moderno']},
  {p:'silencioso', ok:'callado', mal:['ruidoso','fuerte','alegre']},
  {p:'listo', ok:'inteligente', mal:['torpe','pesado','lento']},
  {p:'triste', ok:'apenado', mal:['alegre','veloz','limpio']},
  {p:'bonito', ok:'lindo', mal:['feo','duro','lejano']},
  {p:'difícil', ok:'complicado', mal:['sencillo','barato','tibio']},
  {p:'gritar', ok:'chillar', mal:['susurrar','caminar','pensar']},
  {p:'saltar', ok:'brincar', mal:['sentarse','mirar','dormir']},
  {p:'contento', ok:'alegre', mal:['furioso','cansado','tímido']},
  {p:'delgado', ok:'flaco', mal:['gordo','ancho','pesado']},
  {p:'oscuro', ok:'sombrío', mal:['brillante','claro','blanco']},
  {p:'trabajo', ok:'labor', mal:['descanso','juego','sueño']},
  {p:'mirar', ok:'observar', mal:['oír','hablar','oler']},
  {p:'terminar', ok:'finalizar', mal:['empezar','seguir','abrir']},
  {p:'error', ok:'equivocación', mal:['acierto','premio','verdad']},
  {p:'camino', ok:'sendero', mal:['puente','muro','techo']},
  {p:'sucio', ok:'mugroso', mal:['limpio','nuevo','claro']},
  {p:'fuerte', ok:'robusto', mal:['débil','pequeño','suave']},
  {p:'regalo', ok:'obsequio', mal:['castigo','deuda','préstamo']},
  {p:'asustado', ok:'espantado', mal:['tranquilo','valiente','alegre']},
  {p:'brillante', ok:'reluciente', mal:['opaco','sucio','roto']},
];
const ANTONIMOS = [
  {p:'alto', ok:'bajo', mal:['delgado','fuerte','ancho']},
  {p:'caliente', ok:'frío', mal:['tibio','suave','duro']},
  {p:'rápido', ok:'lento', mal:['fuerte','alto','curioso']},
  {p:'limpio', ok:'sucio', mal:['claro','nuevo','viejo']},
  {p:'día', ok:'noche', mal:['tarde','sol','luz']},
  {p:'abrir', ok:'cerrar', mal:['entrar','romper','buscar']},
  {p:'subir', ok:'bajar', mal:['saltar','correr','volar']},
  {p:'lleno', ok:'vacío', mal:['pesado','grande','roto']},
  {p:'dulce', ok:'amargo', mal:['salado','frío','blando']},
  {p:'grande', ok:'pequeño', mal:['largo','pesado','ancho']},
  {p:'fuerte', ok:'débil', mal:['alto','duro','rápido']},
  {p:'alegre', ok:'triste', mal:['tranquilo','callado','serio']},
  {p:'cerca', ok:'lejos', mal:['arriba','dentro','atrás']},
  {p:'blando', ok:'duro', mal:['liso','tibio','ligero']},
  {p:'primero', ok:'último', mal:['segundo','medio','antes']},
  {p:'dentro', ok:'fuera', mal:['debajo','encima','junto']},
  {p:'ganar', ok:'perder', mal:['jugar','correr','contar']},
  {p:'recordar', ok:'olvidar', mal:['pensar','estudiar','soñar']},
  {p:'encender', ok:'apagar', mal:['romper','guardar','mover']},
  {p:'nuevo', ok:'viejo', mal:['caro','bonito','pequeño']},
  {p:'pesado', ok:'ligero', mal:['grande','duro','lleno']},
  {p:'aburrido', ok:'divertido', mal:['largo','difícil','cansado']},
  {p:'delante', ok:'detrás', mal:['al lado','arriba','lejos']},
  {p:'valiente', ok:'cobarde', mal:['fuerte','tranquilo','serio']},
  {p:'mojado', ok:'seco', mal:['frío','sucio','helado']},
  {p:'silencio', ok:'ruido', mal:['música','voz','eco']},
  {p:'empezar', ok:'terminar', mal:['seguir','probar','repetir']},
];
const CLASES_BASICAS = [
  {frase:'El gato negro duerme', palabra:'negro', tipo:'adjetivo'},
  {frase:'María canta en la fiesta', palabra:'canta', tipo:'verbo'},
  {frase:'La casa es grande', palabra:'casa', tipo:'sustantivo'},
  {frase:'El sol brilla mucho', palabra:'brilla', tipo:'verbo'},
  {frase:'Compramos frutas frescas', palabra:'frescas', tipo:'adjetivo'},
  {frase:'El perro ladra fuerte', palabra:'perro', tipo:'sustantivo'},
  {frase:'Mi abuela cocina pan', palabra:'abuela', tipo:'sustantivo'},
  {frase:'El coche rojo corre', palabra:'rojo', tipo:'adjetivo'},
  // \`frase.replace(palabra, …)\` sustituye la *primera* coincidencia como
  // subcadena: la palabra marcada no puede aparecer antes dentro de otra
  // (cuidado con los artículos «el», «la», «los»).
  {frase:'Los patos nadan en el lago', palabra:'el', tipo:'artículo'},
  {frase:'Una mariposa se posó en mi mano', palabra:'Una', tipo:'artículo'},
  {frase:'Compré un cuaderno nuevo', palabra:'un', tipo:'artículo'},
  {frase:'La lluvia mojó las banquetas', palabra:'las', tipo:'artículo'},
  {frase:'Guardé los colores en mi mochila', palabra:'los', tipo:'artículo'},
  {frase:'Los pájaros vuelan muy alto', palabra:'vuelan', tipo:'verbo'},
  {frase:'Mi papá lava el coche', palabra:'lava', tipo:'verbo'},
  {frase:'Nosotros comimos tacos ayer', palabra:'comimos', tipo:'verbo'},
  {frase:'La niña dibuja un paisaje', palabra:'dibuja', tipo:'verbo'},
  {frase:'El árbol dio muchas frutas', palabra:'árbol', tipo:'sustantivo'},
  {frase:'Mi mamá compró leche', palabra:'leche', tipo:'sustantivo'},
  {frase:'La maestra revisó el cuaderno', palabra:'cuaderno', tipo:'sustantivo'},
  {frase:'El viento tiró la maceta', palabra:'viento', tipo:'sustantivo'},
  {frase:'El café está muy caliente', palabra:'caliente', tipo:'adjetivo'},
  {frase:'Vimos una película divertida', palabra:'divertida', tipo:'adjetivo'},
  {frase:'El niño trajo zapatos nuevos', palabra:'nuevos', tipo:'adjetivo'},
];
const SILABAS = [
  {p:'mariposa', n:4}, {p:'sol', n:1}, {p:'ventana', n:3}, {p:'elefante', n:4},
  {p:'pan', n:1}, {p:'cuaderno', n:3}, {p:'bicicleta', n:4}, {p:'flor', n:1},
  {p:'zapato', n:3}, {p:'computadora', n:5}, {p:'mesa', n:2}, {p:'plátano', n:3},
  {p:'tortuga', n:3}, {p:'mar', n:1}, {p:'escalera', n:4}, {p:'refrigerador', n:5},
  {p:'gato', n:2}, {p:'murciélago', n:4}, {p:'pez', n:1}, {p:'canción', n:2},
  {p:'chocolate', n:4}, {p:'lápiz', n:2}, {p:'helicóptero', n:5}, {p:'tren', n:1},
  {p:'pelota', n:3}, {p:'rinoceronte', n:5}, {p:'silla', n:2}, {p:'ventilador', n:4},
  {p:'sal', n:1}, {p:'cuchara', n:3}, {p:'dinosaurio', n:4}, {p:'reloj', n:2},
  {p:'aguacate', n:4}, {p:'luz', n:1}, {p:'periódico', n:4}, {p:'jirafa', n:3},
];
const PLURALES = [
  {s:'lápiz', p:'lápices', mal:['lápizes','lápiz','lápicez']},
  {s:'pez', p:'peces', mal:['pezes','peses','pecez']},
  {s:'luz', p:'luces', mal:['luzes','luses','lucez']},
  {s:'papel', p:'papeles', mal:['papeles s','papels','papelez']},
  {s:'reloj', p:'relojes', mal:['relojs','relojes s','reloces']},
  {s:'nariz', p:'narices', mal:['narizes','narises','naricez']},
  {s:'voz', p:'voces', mal:['voses','vozes','vocez']},
  {s:'flor', p:'flores', mal:['flors','floress','flories']},
  {s:'rey', p:'reyes', mal:['reys','reies','rees']},
  {s:'ley', p:'leyes', mal:['leys','leies','lees']},
  {s:'cruz', p:'cruces', mal:['cruzes','cruses','crucez']},
  {s:'raíz', p:'raíces', mal:['raízes','raises','raicez']},
  {s:'árbol', p:'árboles', mal:['árbols','arboles','árbolez']},
  {s:'camión', p:'camiones', mal:['camións','camiónes','camionez']},
  {s:'pared', p:'paredes', mal:['pareds','paredses','paredez']},
  {s:'feliz', p:'felices', mal:['felizes','felises','felicez']},
  {s:'avestruz', p:'avestruces', mal:['avestruzes','avestruses','avestrucez']},
  {s:'lunes', p:'lunes', mal:['luneses','luness','lunesos']},
];
const MAYUSCULAS = [
  {ok:'Ayer fuimos a Puebla con mi tía Rosa.', mal:['ayer fuimos a puebla con mi tía rosa.','Ayer Fuimos a Puebla con mi Tía Rosa.','ayer Fuimos a Puebla con mi tía rosa.']},
  {ok:'Mi perro se llama Chispa.', mal:['mi perro se llama chispa.','Mi Perro se llama chispa.','mi perro se Llama Chispa.']},
  {ok:'El lunes empieza la clase de Matemáticas.', mal:['el lunes empieza la clase de matemáticas.','El Lunes empieza la clase de matemáticas.','el Lunes Empieza la clase de Matemáticas.']},
  {ok:'El río Bravo pasa por Ciudad Juárez.', mal:['el río bravo pasa por ciudad juárez.','El Río bravo pasa por ciudad Juárez.','el Río Bravo pasa por Ciudad juárez.']},
  {ok:'En diciembre viajamos a Mérida con Ana.', mal:['En Diciembre viajamos a Mérida con Ana.','en diciembre viajamos a mérida con ana.','En diciembre Viajamos a Mérida con ana.']},
  {ok:'Mi maestra Lucía nos leyó El principito.', mal:['mi maestra lucía nos leyó el principito.','Mi Maestra Lucía nos leyó El Principito.','mi maestra Lucía nos leyó el Principito.']},
  {ok:'Vivo en la calle Morelos, en Toluca.', mal:['vivo en la calle morelos, en toluca.','Vivo en la Calle Morelos, en toluca.','vivo en la Calle Morelos, en Toluca.']},
  {ok:'El martes visitamos el Museo de Antropología.', mal:['El Martes visitamos el museo de antropología.','el martes visitamos el Museo De Antropología.','El martes Visitamos el museo de Antropología.']},
  {ok:'Mi hermano Luis estudia en la Universidad de Guadalajara.', mal:['mi hermano luis estudia en la universidad de guadalajara.','Mi Hermano Luis estudia en la Universidad de guadalajara.','mi hermano Luis estudia en la Universidad De Guadalajara.']},
  {ok:'Mi primo Andrés vive en Monterrey.', mal:['mi primo andrés vive en monterrey.','Mi Primo Andrés vive en Monterrey.','mi primo Andrés vive en monterrey.']},
  {ok:'El jueves llegamos a la Ciudad de México.', mal:['el jueves llegamos a la ciudad de méxico.','El Jueves llegamos a la Ciudad de México.','el jueves llegamos a la Ciudad De México.']},
  {ok:'Leímos un cuento de Juan Rulfo en clase.', mal:['leímos un cuento de juan rulfo en clase.','Leímos un Cuento de Juan Rulfo en Clase.','leímos un cuento de Juan rulfo en clase.']},
  {ok:'En verano fuimos a la playa de Acapulco.', mal:['En Verano fuimos a la playa de Acapulco.','en verano fuimos a la playa de acapulco.','En verano fuimos a la Playa de Acapulco.']},
  {ok:'Mi gata Nube duerme en el sillón.', mal:['mi gata nube duerme en el sillón.','Mi Gata Nube duerme en el Sillón.','mi gata Nube duerme en el sillón.']},
  {ok:'El doctor Ramírez atiende los miércoles.', mal:['El Doctor Ramírez atiende los Miércoles.','el doctor ramírez atiende los miércoles.','El doctor ramírez atiende los Miércoles.']},
  {ok:'Estudiamos el río Nilo en Geografía.', mal:['estudiamos el río nilo en geografía.','Estudiamos el Río Nilo en Geografía.','estudiamos el Río nilo en geografía.']},
  {ok:'Ana y Pedro nacieron en febrero.', mal:['ana y pedro nacieron en febrero.','Ana y Pedro nacieron en Febrero.','ana y Pedro nacieron en febrero.']},
  {ok:'Fuimos al zoológico de Chapultepec el sábado.', mal:['Fuimos al Zoológico de Chapultepec el Sábado.','fuimos al zoológico de chapultepec el sábado.','Fuimos al zoológico de chapultepec el Sábado.']},
  {ok:'Mi tío Beto trabaja en Veracruz.', mal:['mi tío beto trabaja en veracruz.','Mi Tío Beto trabaja en Veracruz.','mi tío Beto trabaja en veracruz.']},
  {ok:'La escuela Benito Juárez está en mi colonia.', mal:['la escuela benito juárez está en mi colonia.','La Escuela Benito Juárez está en mi Colonia.','la escuela Benito Juárez está en mi colonia.']},
  {ok:'En abril visitamos las pirámides de Teotihuacán.', mal:['En Abril visitamos las Pirámides de Teotihuacán.','en abril visitamos las pirámides de teotihuacán.','En abril visitamos las pirámides de teotihuacán.']},
  {ok:'El domingo comimos pozole con la familia.', mal:['El Domingo comimos Pozole con la familia.','el domingo comimos pozole con la familia.','El domingo Comimos pozole con la Familia.']},
  {ok:'Sofía leyó Don Quijote de la Mancha.', mal:['sofía leyó don quijote de la mancha.','Sofía leyó Don Quijote De La Mancha.','sofía leyó Don Quijote de la mancha.']},
  {ok:'Mi papá nació en Oaxaca en 1985.', mal:['mi papá nació en oaxaca en 1985.','Mi Papá nació en Oaxaca en 1985.','mi papá nació en Oaxaca en 1985.']},
  {ok:'El maestro Óscar enseña Historia.', mal:['el maestro óscar enseña historia.','El Maestro Óscar enseña Historia.','el maestro Óscar enseña historia.']},
  {ok:'Viajamos por la carretera a Querétaro.', mal:['Viajamos por la Carretera a Querétaro.','viajamos por la carretera a querétaro.','Viajamos por la carretera a querétaro.']},
  {ok:'Mi hermana Paola juega futbol los martes.', mal:['mi hermana paola juega futbol los martes.','Mi Hermana Paola juega Futbol los Martes.','mi hermana Paola juega futbol los Martes.']},
];
const SIGNOS_BASICOS = [
  {ok:'¿Cómo te llamas?', mal:['Como te llamas?','¿Como te llamas','¿cómo te llamas']},
  {ok:'¡Qué alegría verte!', mal:['Que alegria verte!','¡Que alegría verte','¡qué alegría verte']},
  {ok:'¿Dónde está mi mochila?', mal:['Donde está mi mochila?','¿Donde esta mi mochila','dónde está mi mochila?']},
  {ok:'¡Cuidado con el escalón!', mal:['Cuidado con el escalon!','¡Cuidado con el escalón','¡cuidado con el escalon!']},
  {ok:'¿Quién apagó la luz?', mal:['Quien apagó la luz?','¿Quien apagó la luz','¿quién apagó la luz¿']},
  {ok:'¡Feliz cumpleaños, Diego!', mal:['Feliz cumpleaños Diego!','¡Feliz cumpleaños, Diego','¡feliz cumpleaños, Diego¡']},
  {ok:'¿A qué hora empieza la clase?', mal:['A que hora empieza la clase?','¿A que hora empieza la clase','¿a qué hora empieza la clase¿']},
  {ok:'¡No lo puedo creer!', mal:['No lo puedo creer!','¡No lo puedo creer','¡No lo puedo creer¡']},
  {ok:'¿Cuántos años tienes?', mal:['Cuantos años tienes?','¿Cuantos años tienes','¿Cuántos años tienes¿']},
  {ok:'¡Qué frío hace hoy!', mal:['Que frío hace hoy!','¡Que frio hace hoy!','¡Qué frío hace hoy¡']},
  {ok:'¿Me prestas tu goma?', mal:['Me prestas tu goma?','¿Me prestas tu goma','¿Me prestas tu goma¿']},
  {ok:'¡Ganamos el partido!', mal:['Ganamos el partido!','¡Ganamos el partido','¡ganamos el partido¡']},
  {ok:'¿Qué hora es?', mal:['Que hora es?','¿Que hora es','¿qué hora es¿']},
  {ok:'¡Vámonos ya!', mal:['Vamonos ya!','¡Vámonos ya','¡vámonos ya¡']},
  {ok:'¿Puedo pasar al baño?', mal:['Puedo pasar al baño?','¿Puedo pasar al baño','¿puedo pasar al baño¿']},
  {ok:'¡Qué susto me diste!', mal:['Que susto me diste!','¡Qué susto me diste','¡qué susto me diste¡']},
  {ok:'¿Cuál es tu color favorito?', mal:['Cual es tu color favorito?','¿Cual es tu color favorito','¿cuál es tu color favorito¿']},
  {ok:'¡Corre, que ya viene el camión!', mal:['Corre, que ya viene el camión!','¡Corre que ya viene el camión','¡corre, que ya viene el camión¡']},
  {ok:'¿Por qué lloras?', mal:['Porque lloras?','¿Por que lloras','¿por qué lloras¿']},
  {ok:'¡Bienvenidos a la fiesta!', mal:['Bienvenidos a la fiesta!','¡Bienvenidos a la fiesta','¡bienvenidos a la fiesta¡']},
  {ok:'¿Terminaste la tarea?', mal:['Terminaste la tarea?','¿Terminaste la tarea','¿terminaste la tarea¿']},
  {ok:'¡Qué rico está el pastel!', mal:['Que rico esta el pastel!','¡Qué rico está el pastel','¡qué rico está el pastel¡']},
  {ok:'¿De dónde vienes?', mal:['De donde vienes?','¿De donde vienes','¿de dónde vienes¿']},
  {ok:'¡Auxilio, se cayó el niño!', mal:['Auxilio se cayó el niño!','¡Auxilio, se cayó el niño','¡auxilio, se cayó el niño¡']},
  {ok:'¿Vas a venir mañana?', mal:['Vas a venir mañana?','¿Vas a venir mañana','¿vas a venir mañana¿']},
  {ok:'¡Silencio, por favor!', mal:['Silencio por favor!','¡Silencio, por favor','¡silencio, por favor¡']},
  {ok:'¿Cómo se escribe tu nombre?', mal:['Como se escribe tu nombre?','¿Como se escribe tu nombre','¿cómo se escribe tu nombre¿']},
  {ok:'¡Ya llegamos!', mal:['Ya llegamos!','¡Ya llegamos','¡ya llegamos¡']},
  {ok:'¿Cuánto cuesta ese libro?', mal:['Cuanto cuesta ese libro?','¿Cuanto cuesta ese libro','¿cuánto cuesta ese libro¿']},
  {ok:'¡Qué bonito dibujo hiciste!', mal:['Que bonito dibujo hiciste!','¡Qué bonito dibujo hiciste','¡qué bonito dibujo hiciste¡']},
  {ok:'¿Quieres jugar conmigo?', mal:['Quieres jugar conmigo?','¿Quieres jugar conmigo','¿quieres jugar conmigo¿']},
  {ok:'¡Cuidado, viene un coche!', mal:['Cuidado viene un coche!','¡Cuidado, viene un coche','¡cuidado, viene un coche¡']},
  {ok:'¿Dónde dejaste las llaves?', mal:['Donde dejaste las llaves?','¿Donde dejaste las llaves','¿dónde dejaste las llaves¿']},
  {ok:'¡Feliz Navidad a todos!', mal:['Feliz Navidad a todos!','¡Feliz Navidad a todos','¡feliz navidad a todos¡']},
  {ok:'¿Ya comiste?', mal:['Ya comiste?','¿Ya comiste','¿ya comiste¿']},
  {ok:'¡Qué larga fue la fila!', mal:['Que larga fue la fila!','¡Qué larga fue la fila','¡qué larga fue la fila¡']},
];
const ALFABETICO = [
  ['casa','cielo','cuna','cráter'],
  ['barco','bota','burro','bicicleta'],
  ['mano','mesa','mono','muro'],
  ['pan','pera','pino','puma'],
  ['sal','sol','sur','silla'],
  ['dedo','día','doce','duro'],
  ['flor','fresa','frío','fuego'],
  ['gato','gente','globo','gusano'],
  ['leche','libro','luna','lodo'],
  ['nube','nariz','nido','nuez'],
  ['rana','risa','rosa','ruta'],
  ['taza','tigre','torre','tuna'],
  ['vaso','vela','vida','voz'],
  ['cama','cebra','cielo','cuna'],
  ['pato','pera','pinza','pulpo'],
];

const ACENTUACION = [
  {p:'canción', tipo:'aguda'}, {p:'árbol', tipo:'grave'}, {p:'música', tipo:'esdrújula'},
  {p:'papel', tipo:'aguda'}, {p:'lápiz', tipo:'grave'}, {p:'brújula', tipo:'esdrújula'},
  {p:'reloj', tipo:'aguda'}, {p:'azúcar', tipo:'grave'}, {p:'teléfono', tipo:'esdrújula'},
  {p:'jugar', tipo:'aguda'}, {p:'fácil', tipo:'grave'}, {p:'príncipe', tipo:'esdrújula'},
  {p:'ratón', tipo:'aguda'}, {p:'cárcel', tipo:'grave'}, {p:'pájaro', tipo:'esdrújula'},
  {p:'café', tipo:'aguda'}, {p:'casa', tipo:'grave'}, {p:'México', tipo:'esdrújula'},
  {p:'balón', tipo:'aguda'}, {p:'mesa', tipo:'grave'}, {p:'sábado', tipo:'esdrújula'},
  {p:'feliz', tipo:'aguda'}, {p:'césped', tipo:'grave'}, {p:'médico', tipo:'esdrújula'},
  {p:'pared', tipo:'aguda'}, {p:'ventana', tipo:'grave'}, {p:'plátano', tipo:'esdrújula'},
  {p:'cantar', tipo:'aguda'}, {p:'difícil', tipo:'grave'}, {p:'árboles', tipo:'esdrújula'},
  {p:'francés', tipo:'aguda'}, {p:'mochila', tipo:'grave'}, {p:'química', tipo:'esdrújula'},
  {p:'nariz', tipo:'aguda'}, {p:'túnel', tipo:'grave'}, {p:'lámpara', tipo:'esdrújula'},
  // Sin estas cuatro, «sobresdrújula» nunca es la respuesta y se descarta sola.
  {p:'dígamelo', tipo:'sobresdrújula'}, {p:'cuéntamelo', tipo:'sobresdrújula'},
  {p:'entrégaselo', tipo:'sobresdrújula'}, {p:'devuélvemelo', tipo:'sobresdrújula'},
];
const TILDES = [
  {ok:'camión', mal:['camion','cámion','camión.']},
  {ok:'árbol', mal:['arbol','arból','árbol.']},
  {ok:'exámenes', mal:['examenes','exámenés','examénes']},
  {ok:'después', mal:['despues','déspues','despúes']},
  {ok:'rápido', mal:['rapido','rapído','rápído']},
  {ok:'útil', mal:['util','utíl','útíl']},
  {ok:'canción', mal:['cancion','canciónn','cancíon']},
  {ok:'lápiz', mal:['lapiz','lápíz','lapíz']},
  {ok:'música', mal:['musica','músíca','musíca']},
  {ok:'jardín', mal:['jardin','járdin','jardíin']},
  {ok:'teléfono', mal:['telefono','teléfóno','telefóno']},
  {ok:'pájaro', mal:['pajaro','pájáro','pajáro']},
  {ok:'sábado', mal:['sabado','sábádo','sabádo']},
  {ok:'difícil', mal:['dificil','difícíl','dificíl']},
  {ok:'corazón', mal:['corazon','córazón','corázon']},
  {ok:'médico', mal:['medico','médíco','medíco']},
  {ok:'inglés', mal:['ingles','ínglés','inglez']},
  {ok:'azúcar', mal:['azucar','azúcár','azucár']},
];
const HOMOFONOS = [
  {frase:'No ___ visto a nadie en el patio.', ok:'he', mal:['e','eh','é']},
  {frase:'Ojalá ___ suficiente comida para todos.', ok:'haya', mal:['halla','aya','allá']},
  {frase:'___ un libro sobre la mesa.', ok:'Hay', mal:['Ahí','Ay','Haz']},
  {frase:'Ya ___ la tarea de español.', ok:'hice', mal:['ise','hise','ice']},
  {frase:'Ese trabajo está muy bien ___.', ok:'hecho', mal:['echo','hechó','écho']},
  {frase:'Mi tío ___ un accidente con el auto.', ok:'tuvo', mal:['tubo','tuvó','túbo']},
  {frase:'Voy ___ la tienda de la esquina.', ok:'a', mal:['ha','ah','há']},
  {frase:'Corrió ___ rápido que ganó la carrera.', ok:'tan', mal:['tanto','tam','than']},
  {frase:'___ mucho calor en el salón.', ok:'Hace', mal:['Ase','Hase','Ace']},
  {frase:'Tiene que ___ una explicación para esto.', ok:'haber', mal:['a ver','haver','aver']},
  {frase:'No sé si ___ llegado ya.', ok:'ha', mal:['a','ah','há']},
  {frase:'Deja el libro ___, sobre la mesa.', ok:'ahí', mal:['ay','hay','ahi']},
  {frase:'___, me pegué en el codo.', ok:'Ay', mal:['Hay','Ahí','Ahi']},
  {frase:'La ___ del jardín es muy alta.', ok:'valla', mal:['vaya','baya','balla']},
  {frase:'Ojalá no ___ a llover mañana.', ok:'vaya', mal:['valla','baya','balla']},
  {frase:'Caminamos ___ la esquina y regresamos.', ok:'hasta', mal:['asta','hazta','astta']},
  {frase:'Izaron la bandera en el ___.', ok:'asta', mal:['hasta','azta','astta']},
  {frase:'Mañana vamos a ___ por el presidente.', ok:'votar', mal:['botar','vottar','bothar']},
  {frase:'El niño empezó a ___ la pelota contra la barda.', ok:'botar', mal:['votar','bottar','bothar']},
  {frase:'Mi tía se va a ___ en diciembre.', ok:'casar', mal:['cazar','cassar','kasar']},
  {frase:'Está prohibido ___ animales en la reserva.', ok:'cazar', mal:['casar','cassar','kazar']},
  {frase:'Es la última ___ que te lo pido.', ok:'vez', mal:['ves','bez','vés']},
  {frase:'¿___ lo que está escrito en el pizarrón?', ok:'Ves', mal:['Vez','Bes','Vés']},
  {frase:'Me ___ muy contento hoy.', ok:'siento', mal:['ciento','sciento','sientto']},
  {frase:'Un ___ de personas llegó al festival.', ok:'ciento', mal:['siento','sciento','cientto']},
  {frase:'¡___! No te había visto.', ok:'Hola', mal:['Ola','Olla','Hoya']},
  {frase:'Una ___ enorme llegó a la playa.', ok:'ola', mal:['hola','olla','hoya']},
  {frase:'Mi mamá me enseñó a ___ un botón.', ok:'coser', mal:['cocer','cozer','couser']},
  {frase:'Hay que ___ las verduras diez minutos.', ok:'cocer', mal:['coser','cozer','cocher']},
  {frase:'___ la tarea antes de salir.', ok:'Haz', mal:['Has','As','Hás']},
  {frase:'¿___ terminado de leer el libro?', ok:'Has', mal:['Haz','As','Hás']},
];
const PUNTUACION = [
  {ok:'Ayer, mientras jugaba, llovió mucho.', mal:['Ayer mientras jugaba llovió mucho.','ayer, mientras jugaba, llovió mucho.','Ayer, mientras, jugaba llovió mucho.']},
  {ok:'Necesito lápices, hojas y colores.', mal:['Necesito lápices hojas y colores.','Necesito, lápices, hojas y colores.','Necesito lápices, hojas, y colores.']},
  {ok:'Juan, ven acá por favor.', mal:['Juan ven acá por favor.','Juan; ven acá por favor.','Juan ven, acá por favor.']},
  {ok:'Compramos fruta: manzanas, peras y uvas.', mal:['Compramos fruta, manzanas, peras y uvas.','Compramos fruta; manzanas peras y uvas.','Compramos, fruta: manzanas peras y uvas.']},
  {ok:'Mi tía, que vive en Oaxaca, llega el viernes.', mal:['Mi tía, que vive en Oaxaca llega el viernes.','Mi tía que vive en Oaxaca, llega el viernes.','Mi tía; que vive en Oaxaca, llega el viernes.']},
  {ok:'Estudié mucho; sin embargo, no me fue bien.', mal:['Estudié mucho sin embargo no me fue bien.','Estudié mucho; sin embargo no me fue bien.','Estudié mucho, sin embargo; no me fue bien.']},
  {ok:'Llegaron Ana, Beto y Carla.', mal:['Llegaron Ana, Beto, y Carla.','Llegaron, Ana, Beto y Carla.','Llegaron Ana Beto y Carla.']},
  {ok:'La maestra dijo: "Guarden sus cuadernos".', mal:['La maestra dijo "Guarden sus cuadernos".','La maestra, dijo: "Guarden sus cuadernos".','La maestra dijo: "Guarden sus cuadernos"']},
  {ok:'Los alumnos que llegaron tarde no entraron.', mal:['Los alumnos, que llegaron tarde no entraron.','Los alumnos que llegaron tarde, no entraron,','Los alumnos que, llegaron tarde no entraron.']},
  {ok:'Ven acá, Sofía, y trae tu mochila.', mal:['Ven acá Sofía y trae tu mochila.','Ven acá, Sofía y trae tu mochila.','Ven, acá Sofía, y trae tu mochila.']},
  {ok:'Compré tres cosas: cuaderno, lápiz y regla.', mal:['Compré tres cosas, cuaderno, lápiz y regla.','Compré tres cosas: cuaderno lápiz y regla.','Compré, tres cosas: cuaderno, lápiz y regla.']},
  {ok:'Pedro, mi vecino, arregló la bicicleta.', mal:['Pedro mi vecino arregló la bicicleta.','Pedro, mi vecino arregló la bicicleta.','Pedro mi vecino, arregló la bicicleta.']},
  {ok:'Cuando llegue el maestro, empezamos.', mal:['Cuando llegue el maestro empezamos.','Cuando, llegue el maestro empezamos.','Cuando llegue, el maestro empezamos.']},
  {ok:'Trajo cuadernos, plumas y una regla.', mal:['Trajo cuadernos plumas y una regla.','Trajo, cuadernos, plumas y una regla.','Trajo cuadernos, plumas, y una regla.']},
  {ok:'Sofía, apaga la luz.', mal:['Sofía apaga la luz.','Sofía; apaga la luz.','Sofía apaga, la luz.']},
  {ok:'No fui al parque porque llovía.', mal:['No fui al parque, porque llovía.','No fui, al parque porque llovía.','No fui al parque; porque llovía.']},
  {ok:'Mi abuelo, que nació en Colima, cumple noventa años.', mal:['Mi abuelo que nació en Colima, cumple noventa años.','Mi abuelo, que nació en Colima cumple noventa años.','Mi abuelo; que nació en Colima; cumple noventa años.']},
  {ok:'Llegamos tarde; aun así, alcanzamos el tren.', mal:['Llegamos tarde aun así alcanzamos el tren.','Llegamos tarde; aun así alcanzamos el tren.','Llegamos, tarde; aun así alcanzamos el tren.']},
  {ok:'Necesitamos dos cosas: paciencia y práctica.', mal:['Necesitamos dos cosas, paciencia y práctica.','Necesitamos dos cosas: paciencia, y práctica.','Necesitamos, dos cosas: paciencia y práctica.']},
  {ok:'Ven, siéntate y escucha.', mal:['Ven siéntate y escucha.','Ven, siéntate, y escucha.','Ven; siéntate y escucha.']},
  {ok:'El niño preguntó: "¿Puedo salir?".', mal:['El niño preguntó "¿Puedo salir?".','El niño, preguntó: "¿Puedo salir?".','El niño preguntó: ¿Puedo salir?']},
  {ok:'Aunque estaba cansado, terminó la tarea.', mal:['Aunque estaba cansado terminó la tarea.','Aunque, estaba cansado, terminó la tarea.','Aunque estaba, cansado terminó la tarea.']},
  {ok:'Compré manzanas, plátanos y naranjas.', mal:['Compré manzanas plátanos y naranjas.','Compré, manzanas, plátanos y naranjas.','Compré manzanas, plátanos, y naranjas.']},
  {ok:'Por fin, después de tanto esperar, llegó la respuesta.', mal:['Por fin después de tanto esperar llegó la respuesta.','Por fin, después de tanto esperar llegó la respuesta.','Por fin después de tanto esperar, llegó la respuesta.']},
  {ok:'Mi mejor amiga, Lucía, se mudó a Puebla.', mal:['Mi mejor amiga Lucía, se mudó a Puebla.','Mi mejor amiga, Lucía se mudó a Puebla.','Mi mejor, amiga Lucía, se mudó a Puebla.']},
  {ok:'Estudia mucho; por eso saca buenas calificaciones.', mal:['Estudia mucho por eso saca buenas calificaciones.','Estudia mucho, por eso, saca buenas calificaciones.','Estudia, mucho; por eso saca buenas calificaciones.']},
  {ok:'En la mochila llevo libros, colores y una botella.', mal:['En la mochila llevo libros colores y una botella.','En la mochila, llevo libros, colores y una botella.','En la mochila llevo libros, colores, y una botella.']},
  {ok:'Buenos días, maestra.', mal:['Buenos días maestra.','Buenos, días maestra.','Buenos días; maestra.']},
  {ok:'Si terminas temprano, puedes salir al patio.', mal:['Si terminas temprano puedes salir al patio.','Si, terminas temprano, puedes salir al patio.','Si terminas, temprano puedes salir al patio.']},
  {ok:'Los invitados llegaron: Ana, Beto y Carla.', mal:['Los invitados llegaron, Ana, Beto y Carla.','Los invitados llegaron: Ana Beto y Carla.','Los, invitados llegaron: Ana, Beto y Carla.']},
  {ok:'No sé, la verdad, qué contestar.', mal:['No sé la verdad qué contestar.','No sé, la verdad qué contestar.','No sé la verdad, qué contestar.']},
  {ok:'Recogimos la basura, barrimos el patio y regamos las plantas.', mal:['Recogimos la basura barrimos el patio y regamos las plantas.','Recogimos la basura, barrimos el patio, y regamos las plantas.','Recogimos, la basura, barrimos el patio y regamos las plantas.']},
  {ok:'Mañana, si no llueve, iremos de excursión.', mal:['Mañana si no llueve iremos de excursión.','Mañana, si no llueve iremos de excursión.','Mañana si no llueve, iremos de excursión.']},
  {ok:'Le dije a Marta: "Te espero afuera".', mal:['Le dije a Marta "Te espero afuera".','Le dije, a Marta: "Te espero afuera".','Le dije a Marta: Te espero afuera.']},
  {ok:'Pásame la sal, por favor.', mal:['Pásame la sal por favor.','Pásame, la sal, por favor.','Pásame la sal; por favor.']},
  {ok:'Fuimos al cine; luego, cenamos tacos.', mal:['Fuimos al cine luego cenamos tacos.','Fuimos al cine, luego, cenamos tacos.','Fuimos, al cine; luego cenamos tacos.']},
];
const CLASES_AVANZADAS = [
  {frase:'El niño camina lentamente', palabra:'lentamente', tipo:'adverbio'},
  {frase:'Ella corre muy rápido', palabra:'Ella', tipo:'pronombre'},
  {frase:'Nosotros llegamos temprano', palabra:'Nosotros', tipo:'pronombre'},
  {frase:'La maestra explicó la lección', palabra:'explicó', tipo:'verbo'},
  {frase:'El examen resultó bastante difícil', palabra:'difícil', tipo:'adjetivo'},
  {frase:'Mañana iremos al museo', palabra:'Mañana', tipo:'adverbio'},
  {frase:'Los alumnos entregaron el proyecto', palabra:'proyecto', tipo:'sustantivo'},
  {frase:'Ayer estudiamos mucho', palabra:'mucho', tipo:'adverbio'},
  {frase:'Ellos terminaron el examen rápido', palabra:'Ellos', tipo:'pronombre'},
  {frase:'El tren llegó puntualmente', palabra:'puntualmente', tipo:'adverbio'},
  {frase:'Mi hermana escribió una carta larga', palabra:'escribió', tipo:'verbo'},
  {frase:'La respuesta parecía correcta', palabra:'correcta', tipo:'adjetivo'},
  {frase:'El científico presentó su descubrimiento', palabra:'descubrimiento', tipo:'sustantivo'},
  {frase:'Ustedes trajeron los materiales', palabra:'Ustedes', tipo:'pronombre'},
  {frase:'Hoy revisamos la tarea de ayer', palabra:'Hoy', tipo:'adverbio'},
  {frase:'El equipo jugó bastante bien', palabra:'bien', tipo:'adverbio'},
  {frase:'La montaña se veía enorme desde el pueblo', palabra:'enorme', tipo:'adjetivo'},
  {frase:'Los bomberos rescataron al gato', palabra:'rescataron', tipo:'verbo'},
  {frase:'Ella olvidó su paraguas en la escuela', palabra:'paraguas', tipo:'sustantivo'},
  {frase:'Nunca había visto tanta gente', palabra:'Nunca', tipo:'adverbio'},
  {frase:'Yo preparé el desayuno', palabra:'Yo', tipo:'pronombre'},
  {frase:'El pastel quedó delicioso', palabra:'delicioso', tipo:'adjetivo'},
  {frase:'Los alumnos escucharon con atención', palabra:'atención', tipo:'sustantivo'},
  {frase:'Nosotras ganamos el concurso', palabra:'Nosotras', tipo:'pronombre'},
];
const CONECTORES = [
  {frase:'Estudió toda la semana, ___ aprobó el examen.', ok:'por eso', mal:['aunque','sin embargo','a pesar de']},
  {frase:'Quería salir, ___ estaba lloviendo.', ok:'pero', mal:['además','porque','entonces']},
  {frase:'Llegó tarde ___ el tráfico estaba pesado.', ok:'porque', mal:['aunque','sin embargo','en cambio']},
  {frase:'Primero mezcla la harina; ___, agrega el huevo.', ok:'después', mal:['antes','mientras','porque']},
  {frase:'No me gusta el frío; ___, vivo en la montaña.', ok:'sin embargo', mal:['por eso','además','así que']},
  {frase:'Hacía mucho frío; ___, salimos a jugar.', ok:'aun así', mal:['por eso','además','entonces']},
  {frase:'Terminé la tarea ___ salí a andar en bici.', ok:'y después', mal:['pero','aunque','sin embargo']},
  {frase:'No estudió; ___, reprobó el examen.', ok:'por lo tanto', mal:['aunque','en cambio','a pesar de eso']},
  {frase:'Me gusta el futbol; ___, prefiero el basquetbol.', ok:'sin embargo', mal:['por eso','además','así que']},
  {frase:'Lleva paraguas ___ va a llover.', ok:'porque', mal:['aunque','pero','sin embargo']},
  {frase:'Ana estudia mucho; ___, ayuda a sus compañeros.', ok:'además', mal:['pero','aunque','en cambio']},
  {frase:'___ era pequeño, cargó la caja él solo.', ok:'Aunque', mal:['Porque','Además','Entonces']},
  {frase:'Mi hermano es callado; ___, yo hablo mucho.', ok:'en cambio', mal:['por eso','además','así que']},
  {frase:'Se descompuso el camión; ___, llegamos tarde.', ok:'así que', mal:['aunque','sin embargo','en cambio']},
  {frase:'Primero lee las instrucciones y ___ contesta.', ok:'luego', mal:['antes','mientras','porque']},
];
const SUJETOS = [
  {frase:'Los niños juegan en el patio.', ok:'Los niños', mal:['juegan','en el patio','juegan en el patio']},
  {frase:'Mi hermana mayor estudia medicina.', ok:'Mi hermana mayor', mal:['estudia medicina','medicina','estudia']},
  {frase:'El perro de Ana ladra por las noches.', ok:'El perro de Ana', mal:['ladra por las noches','por las noches','Ana']},
  {frase:'Ayer los bomberos apagaron el incendio.', ok:'los bomberos', mal:['Ayer','el incendio','apagaron el incendio']},
  {frase:'Mi tío Ramón vende paletas en el parque.', ok:'Mi tío Ramón', mal:['vende paletas','en el parque','vende paletas en el parque']},
  {frase:'Las nubes cubrieron el cielo por la tarde.', ok:'Las nubes', mal:['cubrieron el cielo','el cielo','por la tarde']},
  {frase:'Ayer llegó el paquete de la escuela.', ok:'el paquete de la escuela', mal:['Ayer','llegó','de la escuela']},
  {frase:'Todos los martes mi abuela hace pan.', ok:'mi abuela', mal:['Todos los martes','hace pan','pan']},
  {frase:'El equipo de sexto ganó el torneo.', ok:'El equipo de sexto', mal:['ganó el torneo','el torneo','de sexto']},
  {frase:'En la mañana cantan los pájaros.', ok:'los pájaros', mal:['En la mañana','cantan','la mañana']},
  {frase:'Mis primos y yo fuimos al cine.', ok:'Mis primos y yo', mal:['fuimos al cine','al cine','yo']},
  {frase:'La lluvia mojó todos los cuadernos.', ok:'La lluvia', mal:['mojó','todos los cuadernos','los cuadernos']},
  {frase:'El maestro revisó los exámenes.', ok:'El maestro', mal:['revisó','los exámenes','revisó los exámenes']},
  {frase:'Las flores del jardín crecieron rápido.', ok:'Las flores del jardín', mal:['crecieron rápido','del jardín','rápido']},
  {frase:'Mi papá arregló la puerta el domingo.', ok:'Mi papá', mal:['arregló la puerta','el domingo','la puerta']},
  {frase:'Los gatos de la vecina duermen en el techo.', ok:'Los gatos de la vecina', mal:['duermen en el techo','en el techo','la vecina']},
  {frase:'Un señor alto preguntó por ti.', ok:'Un señor alto', mal:['preguntó por ti','por ti','preguntó']},
  {frase:'En la fiesta bailaron todos los niños.', ok:'todos los niños', mal:['En la fiesta','bailaron','la fiesta']},
  {frase:'El viento fuerte tiró las macetas.', ok:'El viento fuerte', mal:['tiró las macetas','las macetas','tiró']},
  {frase:'Mis compañeros y yo hicimos el mural.', ok:'Mis compañeros y yo', mal:['hicimos el mural','el mural','yo']},
  {frase:'La semana pasada llegaron los libros nuevos.', ok:'los libros nuevos', mal:['La semana pasada','llegaron','nuevos']},
  {frase:'El director anunció las vacaciones.', ok:'El director', mal:['anunció','las vacaciones','anunció las vacaciones']},
  {frase:'Dos perros callejeros siguieron al cartero.', ok:'Dos perros callejeros', mal:['siguieron al cartero','al cartero','el cartero']},
  {frase:'Por la noche brillan las estrellas.', ok:'las estrellas', mal:['Por la noche','brillan','la noche']},
  {frase:'Mi abuela teje bufandas en invierno.', ok:'Mi abuela', mal:['teje bufandas','en invierno','bufandas']},
  {frase:'El camión de la escuela pasa a las siete.', ok:'El camión de la escuela', mal:['pasa a las siete','a las siete','la escuela']},
  {frase:'Los alumnos de sexto organizaron la kermés.', ok:'Los alumnos de sexto', mal:['organizaron la kermés','la kermés','de sexto']},
  {frase:'Anoche se apagó la luz de toda la cuadra.', ok:'la luz de toda la cuadra', mal:['Anoche','se apagó','toda la cuadra']},
  {frase:'Mi prima Valeria toca el piano.', ok:'Mi prima Valeria', mal:['toca el piano','el piano','toca']},
  {frase:'Los pájaros construyeron un nido en el árbol.', ok:'Los pájaros', mal:['construyeron un nido','un nido','en el árbol']},
  {frase:'El agua del río bajó mucho este año.', ok:'El agua del río', mal:['bajó mucho','este año','del río']},
  {frase:'Esta mañana sonó la alarma dos veces.', ok:'la alarma', mal:['Esta mañana','sonó','dos veces']},
  {frase:'Todos mis amigos vinieron a mi cumpleaños.', ok:'Todos mis amigos', mal:['vinieron','a mi cumpleaños','mi cumpleaños']},
  {frase:'La bicicleta roja se ponchó en el camino.', ok:'La bicicleta roja', mal:['se ponchó','en el camino','el camino']},
  {frase:'El sol calienta la banqueta al mediodía.', ok:'El sol', mal:['calienta la banqueta','al mediodía','la banqueta']},
  {frase:'Mi vecino y su hijo pintaron la barda.', ok:'Mi vecino y su hijo', mal:['pintaron la barda','la barda','su hijo']},
];
const TIEMPOS = [
  {v:'caminaré', t:'futuro'}, {v:'corrió', t:'pasado'}, {v:'juegan', t:'presente'},
  {v:'estudiaba', t:'pasado'}, {v:'vendremos', t:'futuro'}, {v:'escribe', t:'presente'},
  {v:'cantaron', t:'pasado'}, {v:'saldrá', t:'futuro'}, {v:'leemos', t:'presente'},
  {v:'bailé', t:'pasado'}, {v:'canto', t:'presente'}, {v:'comeré', t:'futuro'},
  {v:'comieron', t:'pasado'}, {v:'corremos', t:'presente'}, {v:'irán', t:'futuro'},
  {v:'vivía', t:'pasado'}, {v:'estudian', t:'presente'}, {v:'estudiarás', t:'futuro'},
  {v:'salió', t:'pasado'}, {v:'trabaja', t:'presente'}, {v:'volverá', t:'futuro'},
  {v:'jugaban', t:'pasado'},
  // Sin condicionales, la cuarta opción se descarta sola y quedan tres.
  {v:'jugaría', t:'condicional'}, {v:'comerías', t:'condicional'},
  {v:'saldríamos', t:'condicional'}, {v:'tendrían', t:'condicional'},
  {v:'sería', t:'condicional'}, {v:'gustaría', t:'condicional'},
];
const CONTEXTO = [
  {frase:'El sendero era tan angosto que apenas cabía una persona.', p:'angosto', ok:'estrecho', mal:['ancho','largo','oscuro']},
  {frase:'La noticia lo dejó atónito, no podía ni hablar.', p:'atónito', ok:'asombrado', mal:['aburrido','enojado','tranquilo']},
  {frase:'Después de la tormenta el cielo quedó despejado.', p:'despejado', ok:'sin nubes', mal:['con lluvia','nublado','oscuro']},
  {frase:'El anciano caminaba con paso pausado por el parque.', p:'pausado', ok:'lento', mal:['veloz','torpe','ruidoso']},
  {frase:'Era muy hábil con las manos: armaba un juguete en minutos.', p:'hábil', ok:'diestro', mal:['torpe','lento','distraído']},
  {frase:'La casa llevaba años deshabitada; nadie entraba ni salía.', p:'deshabitada', ok:'vacía', mal:['recién pintada','ruidosa','muy visitada']},
  {frase:'Habló con voz tenue y desde atrás casi no se le escuchaba.', p:'tenue', ok:'débil', mal:['fuerte','grave','apresurada']},
  {frase:'Después de correr media hora, el agua le supo exquisita.', p:'exquisita', ok:'deliciosa', mal:['tibia','amarga','escasa']},
  {frase:'El perro resultó dócil: se dejó bañar sin quejarse.', p:'dócil', ok:'obediente', mal:['bravo','sucio','asustadizo']},
  {frase:'Guardaron las provisiones del viaje: comida, agua y cobijas.', p:'provisiones', ok:'cosas necesarias', mal:['recuerdos','adornos','herramientas']},
  {frase:'La maestra fue tajante: dijo que no y no volvió a discutirlo.', p:'tajante', ok:'firme', mal:['dudosa','distraída','burlona']},
  {frase:'Subieron por un sendero escarpado, trepando entre las piedras.', p:'escarpado', ok:'empinado', mal:['plano','ancho','corto']},
  {frase:'El cuarto estaba impecable: no había ni una mota de polvo.', p:'impecable', ok:'muy limpio', mal:['muy sucio','muy grande','muy oscuro']},
  {frase:'Era un problema arduo y nos tomó toda la tarde.', p:'arduo', ok:'difícil', mal:['fácil','corto','divertido']},
  {frase:'El niño era muy locuaz: no paraba de hablar.', p:'locuaz', ok:'hablador', mal:['callado','tímido','serio']},
  {frase:'Recibimos una noticia grata y todos sonreímos.', p:'grata', ok:'agradable', mal:['triste','confusa','falsa']},
  {frase:'El perro estaba famélico; se comió todo en un instante.', p:'famélico', ok:'con mucha hambre', mal:['satisfecho','asustado','dormido']},
  {frase:'Su letra era ilegible: nadie pudo leer el recado.', p:'ilegible', ok:'imposible de leer', mal:['muy bonita','muy grande','escrita en azul']},
  {frase:'Se acercó de forma sigilosa, sin que nadie la oyera.', p:'sigilosa', ok:'silenciosa y discreta', mal:['ruidosa','apresurada','descuidada']},
  {frase:'La cosecha fue abundante: llenaron veinte costales.', p:'abundante', ok:'muy grande', mal:['escasa','tardía','echada a perder']},
  {frase:'Se mostró reacio a subir al juego mecánico.', p:'reacio', ok:'poco dispuesto', mal:['emocionado','listo','apurado']},
  {frase:'El agua del manantial era cristalina y se veía el fondo.', p:'cristalina', ok:'transparente', mal:['turbia','helada','salada']},
  {frase:'Nos dio una explicación concisa: dos frases y quedó claro.', p:'concisa', ok:'breve', mal:['larga','confusa','equivocada']},
  {frase:'El anciano era muy generoso: repartía pan a todos.', p:'generoso', ok:'desprendido', mal:['tacaño','enojón','distraído']},
  {frase:'La calle quedó desierta después de la lluvia.', p:'desierta', ok:'sin gente', mal:['llena','mojada','oscura']},
  {frase:'Habló de manera cortés y todos lo escucharon con gusto.', p:'cortés', ok:'educado', mal:['grosero','fuerte','rápido']},
  {frase:'El paquete era voluminoso y no cabía en el coche.', p:'voluminoso', ok:'de gran tamaño', mal:['ligero','pequeño','frágil']},
  {frase:'Su respuesta fue ambigua: no se entendía si era sí o no.', p:'ambigua', ok:'poco clara', mal:['clarísima','larga','graciosa']},
  {frase:'El clima era gélido: se congelaban las manos.', p:'gélido', ok:'muy frío', mal:['muy caliente','templado','húmedo']},
  {frase:'Trabajó de forma incansable hasta terminar el mural.', p:'incansable', ok:'sin descansar', mal:['con flojera','muy despacio','entre bromas']},
  {frase:'La casa era espaciosa: cabían todos los primos.', p:'espaciosa', ok:'amplia', mal:['estrecha','antigua','nueva']},
  {frase:'El anuncio era engañoso y varios se quejaron.', p:'engañoso', ok:'que confunde a propósito', mal:['verdadero','divertido','colorido']},
  {frase:'Caminaba con pasos vacilantes, como si fuera a caerse.', p:'vacilantes', ok:'inseguros', mal:['firmes','rápidos','largos']},
  {frase:'La sopa quedó insípida: le faltó sal.', p:'insípida', ok:'sin sabor', mal:['muy salada','picante','dulce']},
  {frase:'Fue un gesto noble: devolvió la cartera con todo el dinero.', p:'noble', ok:'honrado', mal:['tramposo','tonto','apresurado']},
  {frase:'Las instrucciones eran minuciosas: explicaban cada detalle.', p:'minuciosas', ok:'muy detalladas', mal:['muy vagas','muy cortas','equivocadas']},
];

/* =========================================================
   GENERADORES POR BLOQUE
   Cada generador declara el peso del reactivo: 1 es de cabeza y 6 (5 en
   Español) pide varios pasos. Ese número es el que marca el tacómetro y las
   casillas que gana el auto al acertar, así que avanzar más quiere decir
   haber contestado algo más difícil, no haber tenido suerte.

   Antes el banco venía partido en dos tramos —arranque y recta final— y el
   tramo dependía de qué tan cerca de la meta ibas. Eso castigaba ir ganando:
   el puntero recibía preguntas más duras por las mismas casillas. El peso
   hace ese trabajo mejor, así que el pozo es uno solo y la escalada la marca
   la ventana de pesos del turno, igual para todos.
   ========================================================= */
const OBJETOS = ['galletas','canicas','crayones','stickers','manzanas','globos'];
const FIGURAS = [
  {f:'triángulo', n:3}, {f:'cuadrado', n:4}, {f:'pentágono', n:5},
  {f:'hexágono', n:6}, {f:'rectángulo', n:4}, {f:'octágono', n:8},
];

// Etiqueta un generador con su peso. Ojo dentro de los generadores: no usar
// \`g\` como nombre de variable local, que tapa esta función.
function g(peso, fn){ fn.peso = peso; return fn; }

// n valores distintos, todos menores que \`may\`. Para las preguntas de "¿cuál
// es mayor?": sorteando cada distractor por su lado se repetían.
function menores(may, n, resta){
  const vistos = [];
  for (let guarda = 0; vistos.length < n && guarda < 200; guarda++){
    const v = Math.round((may - resta()) * 100) / 100;
    if (v > 0 && v !== may && vistos.indexOf(v) === -1) vistos.push(v);
  }
  while (vistos.length < n) vistos.push(Math.round((may - vistos.length - 1) * 100) / 100);
  return vistos;
}

const BANCO = {
  matematicas: {
    '8-9': [
      // Los distractores se construyen distintos por definición: sorteados por
      // separado colisionaban de vez en cuando y \`qOpc\` dejaba la pregunta con
      // tres opciones, que es media pregunta regalada.
      g(1, () => { const may = randInt(40,99);
              return qOpc('Comparar', '¿Cuál de estos números es mayor?', may,
                [may, ...menores(may, 3, () => randInt(2,30))]); }),
      g(1, () => { const n = randInt(10,98); return q('Sucesor', \`¿Qué número va justo después de \${n}?\`, n+1, 4); }),
      g(1, () => { const f = sacar('fig', FIGURAS); return q('Figuras', \`¿Cuántos lados tiene un \${f.f}?\`, f.n, 3, {min:1}); }),
      g(1, () => { const par = randInt(1,50)*2, impares = [par+1, par+3, par-1];
              return qOpc('Par o impar', '¿Cuál de estos números es par?', par, [par, ...impares]); }),
      g(1, () => { const d = randInt(3,9); return q('Decenas', \`¿Cuántas decenas hay en \${d*10}?\`, d, 3, {min:1}); }),

      g(2, () => { const n = randInt(6,25); return q('Dobles', \`El doble de \${n}\`, n*2, 8); }),
      g(2, () => { const n = randInt(4,24)*2; return q('Mitades', \`La mitad de \${n}\`, n/2, 6); }),
      g(2, () => { const p = elegir([2,5,10]), i = randInt(1,6)*p;
              return q('Series', \`\${i}, \${i+p}, \${i+2*p}, ¿qué número sigue?\`, i+3*p, p*2, {pista:\`La serie va de \${p} en \${p}.\`}); }),
      g(2, () => { const n = randInt(3,12); return q('Triples', \`El triple de \${n}\`, n*3, 7); }),

      g(3, () => { const a = randInt(11,49), b = randInt(11,49); return q('Suma', \`\${a} + \${b}\`, a+b, 12); }),
      g(3, () => { const a = randInt(25,99), b = randInt(11,a-5); return q('Resta', \`\${a} − \${b}\`, a-b, 12); }),
      g(3, () => { const x = randInt(2,10), y = randInt(2,10); return q('Tablas', \`\${x} × \${y}\`, x*y, 9); }),
      g(3, () => { const y = randInt(2,6), r = randInt(2,9), x = y*r, o = elegir(OBJETOS);
              return q('Reparto', \`Reparten \${x} \${o} entre \${y} niños en partes iguales. ¿Cuántas le tocan a cada uno?\`, r, 4); }),
      g(3, () => { const h = randInt(1,10), m = elegir([15,30,45]);
              const resp = \`\${h}:\${m}\`;
              return qOpc('El reloj', \`Son las \${h}:00. ¿Qué hora será en \${m} minutos?\`, resp,
                [resp, \`\${h+1}:\${m}\`, \`\${h}:\${m === 15 ? 45 : m === 30 ? 15 : 30}\`, \`\${h+1}:00\`]); }),

      g(4, () => { const tot = randInt(20,60), gasto = randInt(5,18);
              return q('Problema', \`Tenías $\${tot} y gastaste $\${gasto}. ¿Cuánto te queda?\`, tot-gasto, 8); }),
      g(4, () => { const a = randInt(10,30), b = randInt(10,30), c = randInt(5,20);
              return q('Suma de tres', \`\${a} + \${b} + \${c}\`, a+b+c, 12); }),
      g(4, () => { const c = randInt(3,9), u = randInt(3,9);
              return q('Problema', \`Hay \${c} cajas con \${u} crayones cada una. ¿Cuántos crayones hay en total?\`, c*u, 9); }),
      g(4, () => { const ni = randInt(3,6), tot = ni*randInt(2,7) + randInt(1, ni-1), o = elegir(OBJETOS);
              return q('Residuo', \`Reparten \${tot} \${o} entre \${ni} niños en partes iguales. ¿Cuántas sobran?\`, tot % ni, 3,
                {pista:'Reparte de a uno hasta que ya no alcance para todos.'}); }),

      g(5, () => { const a = randInt(120,480), b = randInt(25,99); return q('Resta con llevada', \`\${a} − \${b}\`, a-b, 15); }),
      g(5, () => { const a = randInt(12,29), b = randInt(2,5); return q('Multiplicación', \`\${a} × \${b}\`, a*b, 14); }),
      g(5, () => { const ten = randInt(30,70), gasto = randInt(8,25), dan = randInt(5,20);
              return q('Dos pasos', \`Tenías $\${ten}, gastaste $\${gasto} y luego te dieron $\${dan}. ¿Cuánto tienes?\`,
                ten - gasto + dan, 12, {pista:'Primero la resta y después la suma.'}); }),

      g(6, () => { const a = randInt(15,40), s = randInt(5,15), b = randInt(3,10);
              return q('Dos pasos', \`Un camión lleva \${a} cajas. En la primera parada suben \${s} y bajan \${b}. ¿Cuántas cajas quedan?\`,
                a + s - b, 9, {pista:'Primero suma lo que sube y luego resta lo que baja.'}); }),
      g(6, () => { const f = randInt(4,8), s = randInt(4,9), ocup = randInt(5, f*s - 3);
              return q('Dos pasos', \`En el salón hay \${f} filas de \${s} sillas. Si se ocupan \${ocup}, ¿cuántas quedan libres?\`,
                f*s - ocup, 10, {pista:'Primero cuenta todas las sillas y luego resta.'}); }),
    ],

    '10-12': [
      g(1, () => { const may = Math.round(randInt(35,95))/10;
              return qOpc('Comparar decimales', '¿Cuál número es mayor?', may,
                [may, ...menores(may, 3, () => randInt(1,25)/10)]); }),
      g(1, () => { const d = elegir([5,6,8,9,10,12]), a = randInt(1,d-1); let b = randInt(1,d-1);
              while (b === a) b = randInt(1,d-1);
              const may = Math.max(a,b), men = Math.min(a,b);
              return qOpc('Fracciones', \`¿Cuál fracción es mayor: \${a}/\${d} o \${b}/\${d}?\`, \`\${may}/\${d}\`,
                [\`\${may}/\${d}\`, \`\${men}/\${d}\`, 'son iguales', \`\${d}/\${may}\`],
                {pista:'Con el mismo denominador, manda el numerador.'}); }),
      g(1, () => { const may = randInt(2400,9800);
              return qOpc('Comparar', '¿Cuál de estos números es mayor?', may,
                [may, ...menores(may, 3, () => randInt(20,900))]); }),

      g(2, () => { const y = randInt(3,9), r = randInt(11,30); return q('División exacta', \`\${y*r} ÷ \${y}\`, r, 6); }),
      g(2, () => { const n = randInt(2,12); return q('Potencias', \`¿Cuánto es \${n}²?\`, n*n, 9); }),
      g(2, () => { const n = randInt(4,15); return q('Raíz cuadrada', \`¿Cuál es la raíz cuadrada de \${n*n}?\`, n, 4, {min:1}); }),
      g(2, () => { const n = randInt(11,89)*10 + randInt(1,9);
              const r = Math.round(n/10)*10;
              return q('Redondeo', \`Redondea \${n} a la decena más cercana.\`, r, 15); }),
      g(2, () => { const f = elegir([[1,2,'0.5'],[1,4,'0.25'],[3,4,'0.75'],[1,5,'0.2'],[2,5,'0.4'],[1,10,'0.1'],[3,10,'0.3']]);
              return qOpc('Fracción a decimal', \`¿Qué decimal equivale a \${f[0]}/\${f[1]}?\`, f[2],
                [f[2], String(Math.round((+f[2]+0.05)*100)/100), String(+f[2]*2), String(Math.round((+f[2]/2)*100)/100)]); }),

      g(3, () => { let x = randInt(23,97), y = randInt(3,9); if (x % y === 0) x += 1;
              return q('Residuo', \`¿Cuál es el residuo de \${x} ÷ \${y}?\`, x % y, 3, {pista:'El residuo siempre es menor que el divisor.'}); }),
      g(3, () => { const p = elegir([10,25,50]), t = randInt(2,20)*20;
              return q('Porcentaje', \`¿Cuánto es el \${p}% de \${t}?\`, t*p/100, 12); }),
      g(3, () => { const a = Math.round(randInt(15,90))/10 + randInt(1,9), b = Math.round(randInt(15,90))/10;
              const r = Math.round((a+b)*100)/100;
              return { badge:'Decimales', texto:\`\${a} + \${b}\`, respuesta:String(r), opciones:opcDec(r, 12) }; }),
      g(3, () => { const d = elegir([5,6,8,9,10,12]), a = randInt(1,d-2), b = randInt(1, d-a-1);
              const r = \`\${a+b}/\${d}\`;
              // \`a*b\` como distractor colisionaba con \`a+b\` cuando ambos eran 2.
              return qOpc('Fracciones', \`\${a}/\${d} + \${b}/\${d}\`, r,
                [r, \`\${a+b}/\${d*2}\`, \`\${Math.max(a,b)}/\${d}\`, \`\${a+b+1}/\${d}\`],
                {pista:'Con el mismo denominador solo se suman los numeradores.'}); }),
      g(3, () => { const m = Math.round(randInt(12,95))/10;
              return q('Unidades', \`¿Cuántos centímetros son \${m} metros?\`, Math.round(m*100), 60,
                {pista:'1 m = 100 cm.'}); }),

      g(4, () => { const a = randInt(12,49), b = randInt(3,9); return q('Multiplicación', \`\${a} × \${b}\`, a*b, 14); }),
      g(4, () => { const p = randInt(3,25), s = randInt(3,25), a = Math.max(p,s), b = Math.min(p,s);
              return q('Perímetro', \`Un rectángulo mide \${a} cm de largo y \${b} cm de ancho. ¿Cuál es su perímetro?\`, 2*(a+b), 10,
                {pista:'Perímetro = 2 × (largo + ancho).'}); }),
      g(4, () => { const p = randInt(4,25), s = randInt(4,25), a = Math.max(p,s), b = Math.min(p,s);
              return q('Área', \`¿Cuál es el área de un rectángulo de \${a} cm por \${b} cm? (en cm²)\`, a*b, 16); }),
      g(4, () => { const a = elegir([4,6,8,9,12]), b = elegir([3,5,6,10,15]);
              const mcd = (function euclides(x,y){ return y ? euclides(y, x % y) : x; })(a,b);
              const mcm = a*b/mcd;
              return Math.random() < 0.5
                ? q('MCD', \`¿Cuál es el máximo común divisor de \${a} y \${b}?\`, mcd, 4, {min:1})
                : q('MCM', \`¿Cuál es el mínimo común múltiplo de \${a} y \${b}?\`, mcm, 10); }),

      g(5, () => { const d = elegir([2,4,5,10]), n = randInt(1,d-1), t = d*randInt(3,12);
              return q('Fracción de una cantidad', \`¿Cuánto es \${n}/\${d} de \${t}?\`, t/d*n, 8,
                {pista:\`Primero divide entre \${d} y luego multiplica por \${n}.\`}); }),
      g(5, () => { const b = randInt(4,20), h = randInt(2,12)*2;
              return q('Área', \`Un triángulo tiene base \${b} cm y altura \${h} cm. ¿Cuál es su área en cm²?\`, b*h/2, 12,
                {pista:'Área del triángulo = base × altura ÷ 2.'}); }),
      g(5, () => { const n = [randInt(2,20), randInt(2,20), randInt(2,20), randInt(2,20)];
              const s = n.reduce((a,b)=>a+b,0); const ajuste = (4 - s % 4) % 4; n[0] += ajuste;
              const prom = (s + ajuste)/4;
              return q('Promedio', \`¿Cuál es el promedio de \${n.join(', ')}?\`, prom, 7); }),
      g(5, () => { const p = elegir([15,20,30]), t = randInt(2,20)*20;
              return q('Porcentaje', \`¿Cuánto es el \${p}% de \${t}?\`, Math.round(t*p/100), 14); }),

      g(6, () => { const a = randInt(12,39), b = randInt(11,29); return q('Multiplicación', \`\${a} × \${b}\`, a*b, 30); }),
      g(6, () => { const c = randInt(2,6), p = randInt(25,85), pago = 500;
              return q('Dos pasos', \`Compró \${c} cuadernos de $\${p} y pagó con $\${pago}. ¿Cuánto recibió de cambio?\`, pago - c*p, 25,
                {pista:'Primero el total de la compra, después la resta.'}); }),
    ],
  },

  espanol: {
    '8-9': [
      g(1, () => { const it = sacar('sil', SILABAS);
              return q('Sílabas', \`¿Cuántas sílabas tiene la palabra «\${it.p}»?\`, it.n, 2,
                {min:1, pista:'Sepárala dando una palmada por sílaba.'}); }),
      g(1, () => { const it = sacar('sin', SINONIMOS);
              return qOpc('Sinónimos', \`¿Cuál es un sinónimo de «\${it.p}»?\`, it.ok, [it.ok, ...it.mal]); }),

      g(2, () => { const it = sacar('orto', ORTOGRAFIA);
              return qOpc('Ortografía', '¿Cuál palabra está bien escrita?', it.ok, [it.ok, ...it.mal]); }),
      g(2, () => { const it = sacar('ant', ANTONIMOS);
              return qOpc('Antónimos', \`¿Cuál es un antónimo de «\${it.p}»?\`, it.ok, [it.ok, ...it.mal]); }),

      g(3, () => { const it = sacar('plu', PLURALES);
              return qOpc('Plurales', \`¿Cuál es el plural de «\${it.s}»?\`, it.p, [it.p, ...it.mal]); }),
      g(3, () => { const grupo = sacar('alf', ALFABETICO);
              const ord = grupo.slice().sort((a,b)=>a.localeCompare(b,'es'));
              return qOpc('Diccionario', '¿Cuál de estas palabras va primero en el diccionario?', ord[0], grupo); }),
      g(3, () => { const it = sacar('clas', CLASES_BASICAS);
              const frase = it.frase.replace(it.palabra, \`<mark>\${it.palabra}</mark>\`);
              return qOpc('Gramática', \`En «\${frase}», la palabra resaltada es un:\`, it.tipo,
                ['sustantivo','verbo','adjetivo','artículo'], {html:true}); }),

      g(4, () => { const it = sacar('sig', SIGNOS_BASICOS);
              return qOpc('Signos', '¿Cuál oración está bien escrita?', it.ok, [it.ok, ...it.mal], {long:true}); }),
      g(4, () => { const it = sacar('may', MAYUSCULAS);
              return qOpc('Mayúsculas', '¿Cuál oración usa bien las mayúsculas?', it.ok, [it.ok, ...it.mal], {long:true}); }),

      // El techo del bloque menor: homófonos y conectores sencillos, que es
      // hasta donde llega cuarto de primaria sin salirse del programa.
      g(5, () => { const it = sacar('hom8', HOMOFONOS);
              return qOpc('Homófonos', it.frase, it.ok, [it.ok, ...it.mal]); }),
      g(5, () => { const it = sacar('con8', CONECTORES);
              return qOpc('Conectores', it.frase, it.ok, [it.ok, ...it.mal], {long:true}); }),
    ],

    '10-12': [
      g(1, () => { const it = sacar('til', TILDES);
              return qOpc('Tildes', '¿Cuál palabra está bien acentuada?', it.ok, [it.ok, ...it.mal]); }),
      g(1, () => { const it = sacar('orto12', ORTOGRAFIA);
              return qOpc('Ortografía', '¿Cuál palabra está bien escrita?', it.ok, [it.ok, ...it.mal]); }),

      g(2, () => { const it = sacar('acen', ACENTUACION);
              return qOpc('Acentuación', \`La palabra «\${it.p}» es:\`, it.tipo,
                ['aguda','grave','esdrújula','sobresdrújula'],
                {pista:'Fíjate en qué sílaba suena más fuerte.'}); }),
      g(2, () => { const it = sacar('tie', TIEMPOS);
              return qOpc('Tiempos verbales', \`¿En qué tiempo está el verbo «\${it.v}»?\`, it.t,
                ['pasado','presente','futuro','condicional']); }),
      g(2, () => { const it = sacar('hom2', HOMOFONOS);
              return qOpc('Homófonos', it.frase, it.ok, [it.ok, ...it.mal]); }),

      g(3, () => { const it = sacar('hom', HOMOFONOS);
              return qOpc('Homófonos', it.frase, it.ok, [it.ok, ...it.mal]); }),
      g(3, () => { const it = sacar('con', CONECTORES);
              return qOpc('Conectores', it.frase, it.ok, [it.ok, ...it.mal], {long:true}); }),

      g(4, () => { const it = sacar('clav', CLASES_AVANZADAS);
              const frase = it.frase.replace(it.palabra, \`<mark>\${it.palabra}</mark>\`);
              // El pronombre solo entra como opción cuando es la respuesta:
              // si estuviera siempre, con cuatro casillas sobraría una clase.
              const opts = it.tipo === 'pronombre'
                ? ['pronombre','sustantivo','adjetivo','adverbio']
                : ['sustantivo','verbo','adjetivo','adverbio'];
              return qOpc('Gramática', \`En «\${frase}», la palabra resaltada es un:\`, it.tipo, opts, {html:true}); }),
      g(4, () => { const it = sacar('suj', SUJETOS);
              return qOpc('Sujeto', \`¿Cuál es el sujeto de «\${it.frase}»?\`, it.ok, [it.ok, ...it.mal], {long:true}); }),

      g(5, () => { const it = sacar('pun', PUNTUACION);
              return qOpc('Puntuación', '¿Cuál oración está bien puntuada?', it.ok, [it.ok, ...it.mal], {long:true}); }),
      g(5, () => { const it = sacar('ctx', CONTEXTO);
              return qOpc('Por contexto', \`«\${it.frase}» ¿Qué significa «\${it.p}»?\`, it.ok, [it.ok, ...it.mal], {long:true}); }),
    ],
  },
};

function nuevaPregunta(peso){
  const gens = BANCO[materia][edad];
  let pool = gens.filter(f => f.peso === peso);
  if (!pool.length){
    // Red de seguridad: si un banco se quedara sin ese nivel se usa el más
    // cercano, pero el auto avanza el peso del turno, que es lo que mantiene
    // pareja la carrera.
    const cerca = Math.min(...gens.map(f => Math.abs(f.peso - peso)));
    pool = gens.filter(f => Math.abs(f.peso - peso) === cerca);
  }
  return elegir(pool)();
}

/* =========================================================
   PROGRESO (host → tabla taller_sesiones)
   La carrera se juega en equipos, así que se guarda el
   desempeño agregado de la partida: es el dato honesto que
   se puede atribuir a la sesión del alumno seleccionado.
   ========================================================= */
async function guardarCarrera(ganador, empate){
  const aciertos = equipos.reduce((s, t) => s + t.aciertos, 0);
  const errores  = equipos.reduce((s, t) => s + t.errores, 0);
  if (aciertos + errores === 0) return;
  const cierre = ganador ? ' · ganó ' + ganador.nombre
               : empate ? ' · empate' : ' (sin terminar)';
  const entrada = {
    actividad: 'Carrera de autos · ' + nombreMateria() + cierre,
    grupo: edad,
    aciertos, errores,
  };
  try {
    await host.guardarSesion(entrada);
    equipos.forEach(t => { t.aciertos = 0; t.errores = 0; });   // ya quedó registrada
  } catch(e){
    console.warn('No se pudo guardar la carrera:', e.message);
  }
}

async function loadProgreso(){
  const caja = el('progList');
  caja.innerHTML = '<p class="hint">Cargando…</p>';
  try {
    const lista = await host.cargarSesiones();
    if (!lista || lista.length === 0){
      caja.innerHTML = '<p class="hint">Aún no hay carreras guardadas.</p>';
      return;
    }
    caja.innerHTML = lista.map(e => {
      const tot = e.aciertos + e.errores;
      const pct = tot ? Math.round(e.aciertos / tot * 100) : 0;
      return \`<div class="prog-entry"><span>📅 \${e.fecha} · \${e.grupo} años · \${e.actividad}</span>
              <span>✅ \${e.aciertos} ❌ \${e.errores} — \${pct}% de acierto</span></div>\`;
    }).join('');
  } catch(e){
    caja.innerHTML = \`<p class="hint">No se pudo cargar el progreso (\${e.message}).</p>\`;
  }
}
<\/script>
</body>
</html>
`;function h(a){if(a!=="matematicas"&&a!=="espanol")throw new Error(`Materia desconocida para la Carrera de Autos: ${a}`);return I.replace("__MATERIA_FIJA__",a)}const x={tema:"Repaso por turnos",nivel:"primaria",edades:"8-12 años",icono:"🏎️"},f={...x,id:"carrera-autos-matematicas",titulo:"Carrera de Autos · Matemáticas",materia:"Matemáticas",descripcion:"Juego de mesa proyectable: cada equipo pisa el acelerador, contesta y su auto avanza en la pista. De 8 a 9 años, cálculo mental y problemas de un paso; de 10 a 12, operaciones largas, fracciones, decimales, porcentajes y problemas de dos pasos.",actividades:[{id:"8-9",nombre:"Carrera del bloque 8 a 9 años",edades:"8-9",temas:["suma-resta","multiplicacion","dobles-mitades","series","valor-posicional","division-reparto","residuo","figuras","tiempo-reloj","multiplos-divisores","problemas-un-paso","problemas-dos-pasos"]},{id:"10-12",nombre:"Carrera del bloque 10 a 12 años",edades:"10-12",temas:["multiplicacion","division-exacta","residuo","fracciones","fraccion-cantidad","decimales","porcentajes","perimetro-area","promedio","potencias-raices","multiplos-divisores","unidades","valor-posicional","problemas-dos-pasos"]}],objetivos:["Repasar en grupo lo visto en la sesión sin que se sienta examen.","Automatizar sumas, restas, tablas, series y reparto (8-9 años).","Sostener multiplicación y división largas, residuo y problemas de dos pasos (10-12 años).","Manejar fracciones, decimales y porcentajes en contextos cortos (10-12 años).","Aceptar el error como parte del juego: en el bloque menor el auto nunca se apaga."],render:{tipo:"html",html:h("matematicas")}},v={...x,id:"carrera-autos-espanol",titulo:"Carrera de Autos · Español",materia:"Español",descripcion:"Juego de mesa proyectable: cada equipo pisa el acelerador, contesta y su auto avanza en la pista. De 8 a 9 años, ortografía, sinónimos, sílabas y clases de palabra; de 10 a 12, acentuación, homófonos, puntuación, conectores y tiempos verbales.",actividades:[{id:"8-9",nombre:"Carrera del bloque 8 a 9 años",edades:"8-9",temas:["ortografia","sinonimos-antonimos","silabas","orden-alfabetico","clases-palabra","plurales","mayusculas","signos","homofonos","conectores"]},{id:"10-12",nombre:"Carrera del bloque 10 a 12 años",edades:"10-12",temas:["ortografia","acentuacion","homofonos","puntuacion","conectores","clases-palabra","tiempos-verbales","sujeto-predicado","vocabulario-contexto"]}],objetivos:["Repasar en grupo lo visto en la sesión sin que se sienta examen.","Afinar ortografía, sinónimos, antónimos y separación en sílabas (8-9 años).","Reconocer sustantivo, verbo y adjetivo dentro de una oración (8-9 años).","Distinguir agudas, graves y esdrújulas, y resolver homófonos por contexto (10-12 años).","Puntuar, elegir el conector correcto e identificar el sujeto (10-12 años).","Aceptar el error como parte del juego: en el bloque menor el auto nunca se apaga."],render:{tipo:"html",html:h("espanol")}},y={[u.id]:u,[m.id]:m,[d.id]:d,[p.id]:p,[c.id]:c,[l.id]:l,[f.id]:f,[g.id]:g,[b.id]:b,[v.id]:v},B={decodificacion:A,"pizzas-cajas-vasos":C,"el-terreno":w,"reino-plegado":E,"solidos-platonicos":M};function H(a){return y[a]||null}function i(){return Object.values(y).map(({id:a,titulo:n,materia:e,tema:r,nivel:o,edades:s,icono:k,descripcion:q,actividades:j})=>({id:a,titulo:n,materia:e,tema:r,nivel:o,edades:s,icono:k,descripcion:q,actividades:j||[]}))}function _(a){return i().map(n=>({taller:n,actividades:n.actividades.filter(e=>e.temas.includes(a))})).filter(n=>n.actividades.length>0)}function U(a){if(!L(a))return i().map(e=>({taller:e,actividades:[]}));const n=e=>t(e.nombre,a)||e.temas.some(r=>{const o=z[r];return o&&(t(o.label,a)||t(o.area,a)||o.alias.some(s=>t(s,a)))});return i().map(e=>{const r=e.actividades.filter(n),o=t(e.titulo,a)||t(e.tema,a)||t(e.descripcion,a);return r.length||o?{taller:e,actividades:r}:null}).filter(Boolean)}export{B as T,U as a,_ as b,H as c};
