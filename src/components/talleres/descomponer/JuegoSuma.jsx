// «Sumar descomponiendo» — el juego de complementos y suma por partes.
import { useCallback } from "react";
import { generarPartida } from "../../../data/talleres/descomponer/index.js";
import { useRonda } from "../comun/hooks.js";
import { usePasos } from "./lib/pasos.js";
import { ACENTO } from "./estilo.js";
import Escenario from "./Escenario.jsx";
import { FiguraSuma } from "./Figuras.jsx";

const COLOR = ACENTO.suma;

export default function JuegoSuma({ rango, modo, registrar, finalizar, onSalir }) {
  const generar = useCallback(
    () => generarPartida("suma", rango.id, { modo }),
    [rango.id, modo]
  );
  const ronda = useRonda({ generar, alFinalizar: (r) => finalizar(r) });
  const pasos = usePasos(ronda.ejercicio, { registrar, ronda });
  const ej = ronda.ejercicio;

  return (
    <Escenario
      operacion="suma" ronda={ronda} pasos={pasos} color={COLOR} maxDigitos={3}
      figura={ej ? <FiguraSuma figura={ej.figura} color={COLOR} revelado={pasos.i + (pasos.retro ? 1 : 0)} /> : null}
      onSalir={onSalir}
      onOtra={() => { pasos.reiniciar(); ronda.reiniciar(); }}
    />
  );
}
