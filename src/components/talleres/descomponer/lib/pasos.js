// Lógica de "pasos" dentro de un ejercicio.
//
// Cada ejercicio trae uno o varios pasos (una pregunta con su respuesta y su
// categoría); este hook lleva el avance, la retroalimentación y el cierre del
// ejercicio. Es el mismo gesto en los tres talleres, así que vive una sola vez.
//
// El estado se reinicia al cerrar el ejercicio; la partida entera la lleva
// `useRonda` (../comun/hooks.js).
import { useCallback, useState } from "react";
import { sonar } from "../../comun/sonido.js";

export function usePasos(ejercicio, { registrar, ronda }) {
  const [i, setI] = useState(0);
  const [valor, setValor] = useState("");
  const [retro, setRetro] = useState(null);
  const [limpio, setLimpio] = useState(true);
  const [resuelto, setResuelto] = useState(false);

  // `ejercicio` es undefined cuando la partida terminó (useRonda pide uno de
  // más). Los hooks se llaman siempre, así que aquí hay que tolerarlo.
  const pasos = ejercicio?.pasos || [];
  const paso = pasos[Math.min(i, pasos.length - 1)] || null;
  const ultimo = i >= pasos.length - 1;

  const responder = useCallback((n) => {
    if (!paso || retro) return;
    const bien = n === paso.respuesta;
    registrar(paso.categoria, bien);
    if (!bien) {
      ronda.fallar();
      setLimpio(false);
    }
    sonar(bien ? "bien" : "mal");
    setRetro({ bien, respuesta: n });
  }, [paso, retro, registrar, ronda]);

  // Avanza al siguiente paso o, si era el último, muestra la operación.
  const seguir = useCallback(() => {
    if (!ultimo) {
      setI((n) => n + 1);
      setValor("");
      setRetro(null);
    } else {
      setResuelto(true);
    }
  }, [ultimo]);

  // Cierra el ejercicio y prepara el siguiente.
  const siguiente = useCallback(() => {
    setI(0); setValor(""); setRetro(null); setLimpio(true); setResuelto(false);
    ronda.cerrarEjercicio(limpio);
  }, [limpio, ronda]);

  // Reinicio completo para "otra partida".
  const reiniciar = useCallback(() => {
    setI(0); setValor(""); setRetro(null); setLimpio(true); setResuelto(false);
  }, []);

  return {
    paso, i, ultimo, valor, setValor, retro, resuelto,
    responder, seguir, siguiente, reiniciar,
  };
}
