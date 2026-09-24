// «Dividir descomponiendo» — reconstruir un término de a = b × q + r.
import { useCallback } from "react";
import { generarPartida } from "../../../data/talleres/descomponer/index.js";
import { useRonda } from "../comun/hooks.js";
import { usePasos } from "./lib/pasos.js";
import { ACENTO } from "./estilo.js";
import Escenario from "./Escenario.jsx";
import { FiguraDivision } from "./Figuras.jsx";

const COLOR = ACENTO.division;

export default function JuegoDivision({ rango, registrar, finalizar, onSalir }) {
  const generar = useCallback(() => generarPartida("division", rango.id), [rango.id]);
  const ronda = useRonda({ generar, alFinalizar: (r) => finalizar(r) });
  const pasos = usePasos(ronda.ejercicio, { registrar, ronda });
  const ej = ronda.ejercicio;

  return (
    <Escenario
      operacion="division" ronda={ronda} pasos={pasos} color={COLOR} maxDigitos={3}
      figura={ej ? <FiguraDivision figura={ej.figura} color={COLOR} /> : null}
      onSalir={onSalir}
      onOtra={() => { pasos.reiniciar(); ronda.reiniciar(); }}
    />
  );
}
