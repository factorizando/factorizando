// src/data/presentaciones/presentacionesIndex.js
// Registro central de todas las presentaciones.
// Para agregar una nueva: importarla y añadirla al objeto.

import { PRESENTACION as SEMEJANZA_TRIANGULOS } from "./semejanza-triangulos.js";
import { PRESENTACION as CONCORDANCIA_VERBAL } from "./concordancia-verbal.js";
import { PRESENTACION as ACENTUACION } from "./acentuacion.js";
import { PRESENTACION as SIGNOS_PUNTUACION } from "./signos-puntuacion.js";
import { PRESENTACION as CUADRILATEROS_POLIGONOS } from "./cuadrilateros-poligonos.js";
import { PRESENTACION as COHESION_GRAMATICAL } from "./cohesion-gramatical.js";
import { PRESENTACION as COHESION_LEXICO_SEMANTICA } from "./cohesion-lexico-semantica.js";
import { PRESENTACION as MARCADORES_TEXTUALES } from "./marcadores-textuales.js";
import { PRESENTACION as GRAFOFONETICA } from "./grafofonetica.js";
import { PRESENTACION as GEOGRAFIA_TIERRA } from "./geografia-tierra.js";
import { PRESENTACION as GEOGRAFIA_HUMANA } from "./geografia-humana.js";
import { PRESENTACION as GEOGRAFIA_COMPLEMENTO } from "./geografia-complemento.js";
import { PRESENTACION as FISICA_PENSAMIENTO_CIENTIFICO } from "./fisica-pensamiento-cientifico.js";
import { PRESENTACION as QUIMICA_PENSAMIENTO_CIENTIFICO } from "./quimica-pensamiento-cientifico.js";
import { PRESENTACION as BIOLOGIA_PENSAMIENTO_CIENTIFICO } from "./biologia-pensamiento-cientifico.js";
import { PRESENTACION as CIRCULO } from "./circulo.js";
import { PRESENTACION as PROBABILIDAD } from "./probabilidad.js";
import { PRESENTACION as ESTADISTICA } from "./estadistica.js";
import { PRESENTACION as VOCABULARIO_UNAM } from "./vocabulario-unam.js";
import { PRESENTACION as CINEMATICA } from "./cinematica.js";
import { PRESENTACION as DINAMICA } from "./dinamica.js";
import { PRESENTACION as ENERGIA } from "./energia.js";
import { PRESENTACION as TERMODINAMICA } from "./termodinamica.js";
import { PRESENTACION as ONDAS } from "./ondas.js";
import { PRESENTACION as ELECTRICIDAD } from "./electricidad.js";
import { PRESENTACION as FLUIDOS } from "./fluidos.js";
import { PRESENTACION as FISICA_MODERNA } from "./fisica-moderna.js";
import { PRESENTACION as BIOLOGIA_CELULA } from "./biologia-celula.js";
import { PRESENTACION as BIOLOGIA_BIOQUIMICA } from "./biologia-bioquimica.js";
import { PRESENTACION as BIOLOGIA_REPRODUCCION } from "./biologia-reproduccion.js";
import { PRESENTACION as BIOLOGIA_GENETICA } from "./biologia-genetica.js";
import { PRESENTACION as BIOLOGIA_EVOLUCION } from "./biologia-evolucion.js";
import { PRESENTACION as BIOLOGIA_ECOLOGIA } from "./biologia-ecologia.js";
import { PRESENTACION as QUIMICA_FUNDAMENTOS } from "./quimica-fundamentos.js";
import { PRESENTACION as QUIMICA_AGUA_AIRE_ALIMENTOS } from "./quimica-agua-aire-alimentos.js";
import { PRESENTACION as REGISTRO_LINGUISTICO } from "./registro-linguistico.js";
import { PRESENTACION as GENERO_TEXTUAL } from "./genero-textual.js";

export const PRESENTACIONES_INDEX = {
  "semejanza-triangulos": SEMEJANZA_TRIANGULOS,
  "concordancia-verbal": CONCORDANCIA_VERBAL,
  "acentuacion": ACENTUACION,
  "signos-puntuacion": SIGNOS_PUNTUACION,
  "cuadrilateros-poligonos": CUADRILATEROS_POLIGONOS,
  "cohesion-gramatical": COHESION_GRAMATICAL,
  "cohesion-lexico-semantica": COHESION_LEXICO_SEMANTICA,
  "marcadores-textuales": MARCADORES_TEXTUALES,
  "grafofonetica": GRAFOFONETICA,
  "geografia-tierra": GEOGRAFIA_TIERRA,
  "geografia-humana": GEOGRAFIA_HUMANA,
  "geografia-complemento": GEOGRAFIA_COMPLEMENTO,
  "fisica-pensamiento-cientifico": FISICA_PENSAMIENTO_CIENTIFICO,
  "quimica-pensamiento-cientifico": QUIMICA_PENSAMIENTO_CIENTIFICO,
  "biologia-pensamiento-cientifico": BIOLOGIA_PENSAMIENTO_CIENTIFICO,
  "circulo": CIRCULO,
  "probabilidad": PROBABILIDAD,
  "estadistica": ESTADISTICA,
  "vocabulario-unam": VOCABULARIO_UNAM,
  "cinematica": CINEMATICA,
  "dinamica": DINAMICA,
  "energia": ENERGIA,
  "termodinamica": TERMODINAMICA,
  "ondas": ONDAS,
  "electricidad": ELECTRICIDAD,
  "fluidos": FLUIDOS,
  "fisica-moderna": FISICA_MODERNA,
  "biologia-celula": BIOLOGIA_CELULA,
  "biologia-bioquimica": BIOLOGIA_BIOQUIMICA,
  "biologia-reproduccion": BIOLOGIA_REPRODUCCION,
  "biologia-genetica": BIOLOGIA_GENETICA,
  "biologia-evolucion": BIOLOGIA_EVOLUCION,
  "biologia-ecologia": BIOLOGIA_ECOLOGIA,
  "quimica-fundamentos": QUIMICA_FUNDAMENTOS,
  "quimica-agua-aire-alimentos": QUIMICA_AGUA_AIRE_ALIMENTOS,
  "registro-linguistico": REGISTRO_LINGUISTICO,
  "genero-textual": GENERO_TEXTUAL,
};

export function buscarPresentacion(id) {
  return PRESENTACIONES_INDEX[id] || null;
}

export function listaPresentaciones() {
  return Object.values(PRESENTACIONES_INDEX).map(({ id, titulo, materia, subtema }) => ({
    id,
    titulo,
    materia,
    subtema: subtema || null,
  }));
}
