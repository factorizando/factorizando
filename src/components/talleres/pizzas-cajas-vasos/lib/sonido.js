// Sonido del taller: tres tonos cortos hechos con WebAudio.
//
// Sin archivos de audio a propósito —el taller tiene que correr sin internet—
// y silenciable desde la barra, porque en un salón con varias tabletas el
// pitido de cada acierto se vuelve ruido. La preferencia se guarda para no
// tener que apagarlo en cada clase.
//
// El tono de error es deliberadamente suave y grave, nunca un zumbido: el
// principio del taller es que equivocarse no cuesta nada.
const CLAVE = "factorizando:pizzas-cajas-vasos:silencio";

let contexto = null;
let silencio = leerPreferencia();

function leerPreferencia() {
  try {
    return localStorage.getItem(CLAVE) === "1";
  } catch {
    return false;
  }
}

export function estaSilenciado() {
  return silencio;
}

export function alternarSilencio() {
  silencio = !silencio;
  try {
    localStorage.setItem(CLAVE, silencio ? "1" : "0");
  } catch {
    /* sin persistencia; el botón sigue funcionando en esta sesión */
  }
  return silencio;
}

function ctx() {
  if (!contexto) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    contexto = new AC();
  }
  if (contexto.state === "suspended") contexto.resume();
  return contexto;
}

function nota(frecuencia, inicio, duracion, volumen = 0.13) {
  const c = ctx();
  if (!c) return;
  const osc = c.createOscillator();
  const gan = c.createGain();
  osc.type = "sine";
  osc.frequency.value = frecuencia;
  const t = c.currentTime + inicio;
  gan.gain.setValueAtTime(0, t);
  gan.gain.linearRampToValueAtTime(volumen, t + 0.015);
  gan.gain.exponentialRampToValueAtTime(0.0001, t + duracion);
  osc.connect(gan).connect(c.destination);
  osc.start(t);
  osc.stop(t + duracion + 0.02);
}

export function sonar(tipo) {
  if (silencio) return;
  try {
    if (tipo === "bien") { nota(660, 0, 0.14); nota(880, 0.1, 0.22); }
    else if (tipo === "mal") { nota(300, 0, 0.22, 0.09); }
    else if (tipo === "fin") { nota(523, 0, 0.16); nota(659, 0.14, 0.16); nota(784, 0.28, 0.3); }
    else nota(520, 0, 0.06, 0.07);
  } catch {
    /* un navegador sin WebAudio no debe tumbar la actividad */
  }
}
