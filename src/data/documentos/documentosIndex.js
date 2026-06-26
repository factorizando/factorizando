// Registro central de documentos matemáticos (estilo libro: def/teorema/demo/corolario).
// Se resuelve por id en la ruta /documento/:id.
import { DOCUMENTO as DERIVADA_PENDIENTE } from "./matematicas/derivada-pendiente.js";
import { DOCUMENTO as PROB_QUE_ES_CONJUNTO } from "./matematicas/prob-uni-que-es-conjunto.js";
import { DOCUMENTO as PROB_SUBCONJUNTOS } from "./matematicas/prob-uni-subconjuntos-igualdad.js";
import { DOCUMENTO as PROB_OPERACIONES } from "./matematicas/prob-uni-operaciones-conjuntos.js";
import { DOCUMENTO as PROB_LEYES } from "./matematicas/prob-uni-leyes-conjuntos.js";
import { DOCUMENTO as PROB_ESPACIO_MUESTRAL } from "./matematicas/prob-uni-espacio-muestral-eventos.js";
import { DOCUMENTO as PROB_PANORAMA } from "./matematicas/prob-uni-panorama-historico.js";
import { DOCUMENTO as PROB_AXIOMATICA } from "./matematicas/prob-uni-definicion-axiomatica.js";
import { DOCUMENTO as PROB_PROPIEDADES } from "./matematicas/prob-uni-propiedades.js";
import { DOCUMENTO as PROB_CONDICIONAL } from "./matematicas/prob-uni-condicional-independencia.js";
import { DOCUMENTO as PROB_TOTAL_BAYES } from "./matematicas/prob-uni-total-bayes.js";
import { DOCUMENTO as PROB_CONTINUIDAD } from "./matematicas/prob-uni-continuidad.js";
import { DOCUMENTO as PROB_SIMULACION } from "./matematicas/prob-uni-simulacion-frecuentista.js";

export const DOCUMENTOS_INDEX = {
  [DERIVADA_PENDIENTE.id]: DERIVADA_PENDIENTE,
  [PROB_QUE_ES_CONJUNTO.id]: PROB_QUE_ES_CONJUNTO,
  [PROB_SUBCONJUNTOS.id]: PROB_SUBCONJUNTOS,
  [PROB_OPERACIONES.id]: PROB_OPERACIONES,
  [PROB_LEYES.id]: PROB_LEYES,
  [PROB_ESPACIO_MUESTRAL.id]: PROB_ESPACIO_MUESTRAL,
  [PROB_PANORAMA.id]: PROB_PANORAMA,
  [PROB_AXIOMATICA.id]: PROB_AXIOMATICA,
  [PROB_PROPIEDADES.id]: PROB_PROPIEDADES,
  [PROB_CONDICIONAL.id]: PROB_CONDICIONAL,
  [PROB_TOTAL_BAYES.id]: PROB_TOTAL_BAYES,
  [PROB_CONTINUIDAD.id]: PROB_CONTINUIDAD,
  [PROB_SIMULACION.id]: PROB_SIMULACION,
};

export function buscarDocumento(id) {
  return DOCUMENTOS_INDEX[id] || null;
}

export function listaDocumentos() {
  return Object.values(DOCUMENTOS_INDEX).map(({ id, titulo, materia, tema }) => ({
    id, titulo, materia, tema,
  }));
}
