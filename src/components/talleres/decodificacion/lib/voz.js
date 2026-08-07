// Voz del taller: Web Speech API, sin red.
//
// El taller funciona sin voz. Si el navegador no trae ninguna voz en español
// (pasa en algunos Android y en Linux sin voces instaladas), `useVoz` lo
// reporta y la interfaz esconde los botones de audio en vez de romperse:
// palmeo, armado y lectura siguen sirviéndose de la vista.
import { useEffect, useState } from "react";

const soportado = typeof window !== "undefined" && "speechSynthesis" in window;

// es-MX primero, cualquier otro español después. La diferencia importa: el
// alumno está aprendiendo a mapear letras a los sonidos que él ya oye.
function elegirVoz() {
  if (!soportado) return null;
  const voces = window.speechSynthesis.getVoices().filter((v) => /^es/i.test(v.lang));
  if (voces.length === 0) return null;
  return (
    voces.find((v) => /es[-_]MX/i.test(v.lang)) ||
    voces.find((v) => /es[-_](419|US|CO|AR|CL)/i.test(v.lang)) ||
    voces[0]
  );
}

export function useVoz() {
  const [voz, setVoz] = useState(() => elegirVoz());
  // `getVoices` suele venir vacío en el primer render y se llena después.
  const [listo, setListo] = useState(() => !soportado || elegirVoz() !== null);

  useEffect(() => {
    if (!soportado) return;
    function revisar() {
      const v = elegirVoz();
      setVoz(v);
      // Solo se declara "sin voz" cuando ya hay voces cargadas pero ninguna
      // es española; con la lista vacía todavía puede llegar el evento.
      if (v || window.speechSynthesis.getVoices().length > 0) setListo(true);
    }
    revisar();
    window.speechSynthesis.addEventListener("voiceschanged", revisar);
    // Red de seguridad: si el evento nunca llega, no dejar la UI en limbo.
    const t = setTimeout(() => setListo(true), 2500);
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", revisar);
      clearTimeout(t);
    };
  }, []);

  return { voz, hayVoz: !!voz, listo, soportado };
}

export function callar() {
  if (soportado) window.speechSynthesis.cancel();
}

// Dice un texto. Devuelve una función para cancelar esta locución concreta.
// `onPalabra(indiceDeCaracter, largo)` se dispara en cada palabra cuando el
// navegador emite `boundary`; ver `lectura.js` para el respaldo por tiempo.
export function decir(texto, { voz, velocidad = 1, onPalabra, onFin } = {}) {
  if (!soportado || !voz || !texto) {
    onFin?.();
    return () => {};
  }
  window.speechSynthesis.cancel();

  const u = new SpeechSynthesisUtterance(texto);
  u.voice = voz;
  u.lang = voz.lang;
  u.rate = velocidad;
  u.pitch = 1;
  if (onPalabra) {
    u.onboundary = (e) => {
      if (e.name === "sentence") return;
      onPalabra(e.charIndex, e.charLength || 0);
    };
  }
  u.onend = () => onFin?.();
  u.onerror = () => onFin?.();
  window.speechSynthesis.speak(u);

  return () => window.speechSynthesis.cancel();
}

// Dice las sílabas una por una y avisa cuál va sonando. Se encadena con
// `onend` en vez de con temporizadores para que el resalte no se despegue
// del audio en un dispositivo lento.
export function decirSilabas(silabas, { voz, velocidad = 0.75, onSilaba, onFin } = {}) {
  let cancelado = false;

  function siguiente(i) {
    if (cancelado) return;
    if (i >= silabas.length) {
      onSilaba?.(-1);
      onFin?.();
      return;
    }
    onSilaba?.(i);
    if (!soportado || !voz) {
      // Sin voz el resalte sigue corriendo solo: el ritmo es lo que enseña.
      setTimeout(() => siguiente(i + 1), 620);
      return;
    }
    const u = new SpeechSynthesisUtterance(silabas[i]);
    u.voice = voz;
    u.lang = voz.lang;
    u.rate = velocidad;
    u.onend = () => setTimeout(() => siguiente(i + 1), 90);
    u.onerror = () => setTimeout(() => siguiente(i + 1), 90);
    window.speechSynthesis.speak(u);
  }

  if (soportado) window.speechSynthesis.cancel();
  siguiente(0);

  return () => {
    cancelado = true;
    callar();
  };
}
