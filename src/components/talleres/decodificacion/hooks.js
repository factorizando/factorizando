// Hooks y lógica compartida del taller de decodificación.
import { createContext, useContext, useEffect, useRef, useState } from "react";

// ── Voz ───────────────────────────────────────────────────────────────────
// Una sola voz para todo el taller, compartida por contexto: si cada
// actividad la resolviera por su cuenta, el primer render de cada una
// llegaría sin voz y los botones de audio parpadearían.
const VozCtx = createContext({ voz: null, hayVoz: false });
export const ProveedorVoz = VozCtx.Provider;
export const useVozActiva = () => useContext(VozCtx);

// ── Ayuda escalonada ──────────────────────────────────────────────────────
// El principio pedagógico más delicado del taller: NO corregir de inmediato.
// Ante un error, primero silencio (que lo vuelva a intentar), luego media
// pista —la primera sílaba—, y solo al tercer intento la respuesta completa.
// Enseñarle la solución al primer fallo le confirma que adivinar sale más
// barato que decodificar, que es exactamente el hábito que hay que romper.

export const ESPERA_ANTES_DE_AYUDAR = 2200;

export function useAyuda() {
  const [nivel, setNivel] = useState(0); // 0 nada · 1 reintenta · 2 pista · 3 solución
  const temporizador = useRef(null);

  useEffect(() => () => clearTimeout(temporizador.current), []);

  function fallo() {
    clearTimeout(temporizador.current);
    // La espera es la que hace el trabajo: deja pasar el impulso de adivinar
    // otra vez y da tiempo a volver a mirar la palabra.
    temporizador.current = setTimeout(() => {
      setNivel((n) => Math.min(3, n + 1));
    }, ESPERA_ANTES_DE_AYUDAR);
  }

  function reiniciar() {
    clearTimeout(temporizador.current);
    setNivel(0);
  }

  return { nivel, fallo, reiniciar };
}

// ── Elogio ────────────────────────────────────────────────────────────────
// Se compara contra su propio desempeño anterior, nunca contra una meta ni
// contra otros alumnos. Sin marca previa, se limita a informar.
//
// La cuenta que se compara es "a la primera": en este taller no se avanza
// hasta acertar, así que al final SIEMPRE están todas resueltas y contarlas
// no diría nada. Lo que sí se mueve entre sesiones es cuántas le salieron sin
// tener que reintentar, y eso es justo lo que mide si está decodificando
// mejor o sigue adivinando.
export function compararConAnterior(aciertos, total, anterior) {
  if (!anterior) return "Primera vez con esta actividad. Queda registrada para comparar la próxima.";
  const antesTotal = anterior.total || anterior.aciertos + anterior.errores;
  if (antesTotal === 0) return null;
  const dif = Math.round((aciertos / total - anterior.aciertos / antesTotal) * total);
  if (dif > 0) {
    return `La vez pasada te salieron ${anterior.aciertos} de ${antesTotal} a la primera. ` +
      `Hoy ${dif} ${dif === 1 ? "más" : "más"}.`;
  }
  if (dif === 0) {
    return `Igual que la vez pasada: ${anterior.aciertos} de ${antesTotal} a la primera. Lo tienes parejo.`;
  }
  return `La vez pasada fueron ${anterior.aciertos} de ${antesTotal} a la primera. ` +
    "Hoy salieron menos; pasa, y por eso se repite.";
}
