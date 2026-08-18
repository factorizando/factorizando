// Lógica común a los tres juegos.
//
// La partida es siempre la misma: diez ejercicios generados al vuelo, un
// resultado por ejercicio y una pantalla de cierre que compara con la partida
// anterior. Lo único que cambia entre juegos es lo que pasa dentro de cada
// ejercicio, así que eso se queda en cada componente y esto se comparte.
import { useCallback, useEffect, useRef, useState } from "react";

export function useRonda({ generar, alFinalizar }) {
  const [ejercicios, setEjercicios] = useState(generar);
  const [i, setI] = useState(0);
  // Un valor por ejercicio: true si salió a la primera. Un ejercicio fallado
  // NO se repite ni resta: se muestra la respuesta con su dibujo y se sigue.
  const [resultados, setResultados] = useState([]);
  const [errores, setErrores] = useState(0);
  const [mensaje, setMensaje] = useState(null);
  const cerrado = useRef(false);

  const total = ejercicios.length;
  const terminada = i >= total;
  const aciertos = resultados.filter(Boolean).length;

  useEffect(() => {
    if (!terminada || cerrado.current) return;
    cerrado.current = true;
    setMensaje(alFinalizar?.({ aciertos, errores, total }) || null);
  }, [terminada, aciertos, errores, total, alFinalizar]);

  const fallar = useCallback(() => setErrores((e) => e + 1), []);
  const cerrarEjercicio = useCallback((limpio) => {
    setResultados((r) => [...r, !!limpio]);
    setI((n) => n + 1);
  }, []);

  const reiniciar = useCallback(() => {
    cerrado.current = false;
    setEjercicios(generar());
    setI(0);
    setResultados([]);
    setErrores(0);
    setMensaje(null);
  }, [generar]);

  return {
    ejercicio: ejercicios[i], indice: i, total, resultados, aciertos, errores,
    terminada, mensaje, fallar, cerrarEjercicio, reiniciar,
  };
}

// Plural sin sorpresas: "1 rebanada" / "3 rebanadas".
export function plural(n, singular, plural_) {
  return `${n} ${n === 1 ? singular : plural_}`;
}
