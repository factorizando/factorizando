// «Multiplicar descomponiendo» — la propiedad distributiva sobre el área.
import { useCallback } from "react";
import { generarPartida } from "../../../data/talleres/descomponer/index.js";
import { useRonda } from "../comun/hooks.js";
import { usePasos } from "./lib/pasos.js";
import { ACENTO } from "./estilo.js";
import Escenario from "./Escenario.jsx";
import { FiguraProducto } from "./Figuras.jsx";

const COLOR = ACENTO.producto;

export default function JuegoProducto({ rango, registrar, finalizar, onSalir }) {
  const generar = useCallback(() => generarPartida("producto", rango.id), [rango.id]);
  const ronda = useRonda({ generar, alFinalizar: (r) => finalizar(r) });
  const pasos = usePasos(ronda.ejercicio, { registrar, ronda });
  const ej = ronda.ejercicio;

  return (
    <Escenario
      operacion="producto" ronda={ronda} pasos={pasos} color={COLOR} maxDigitos={4}
      figura={ej ? <FiguraProducto figura={ej.figura} color={COLOR} revelado={pasos.i + (pasos.retro ? 1 : 0)} /> : null}
      onSalir={onSalir}
      onOtra={() => { pasos.reiniciar(); ronda.reiniciar(); }}
    />
  );
}
