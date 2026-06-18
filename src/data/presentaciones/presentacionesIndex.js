// src/data/presentaciones/presentacionesIndex.js
// Registro central de todas las presentaciones.
// Para agregar una nueva: importarla y añadirla al objeto.

import { PRESENTACION as SEMEJANZA_TRIANGULOS } from "./matematicas/semejanza-triangulos.js";
import { PRESENTACION as CONCORDANCIA_VERBAL } from "./espanol/concordancia-verbal.js";
import { PRESENTACION as CONCORDANCIA_NOMINAL } from "./espanol/concordancia-nominal.js";
import { PRESENTACION as CONCORDANCIA_NOMINAL_AVANZADA } from "./espanol/concordancia-nominal-avanzada.js";
import { PRESENTACION as CONCORDANCIA_VERBAL_AVANZADA } from "./espanol/concordancia-verbal-avanzada.js";
import { PRESENTACION as ACENTUACION } from "./espanol/acentuacion.js";
import { PRESENTACION as SIGNOS_PUNTUACION } from "./espanol/signos-puntuacion.js";
import { PRESENTACION as CUADRILATEROS_POLIGONOS } from "./matematicas/cuadrilateros-poligonos.js";
import { PRESENTACION as COHESION_GRAMATICAL } from "./espanol/cohesion-gramatical.js";
import { PRESENTACION as COHESION_LEXICO_SEMANTICA } from "./espanol/cohesion-lexico-semantica.js";
import { PRESENTACION as MARCADORES_TEXTUALES } from "./espanol/marcadores-textuales.js";
import { PRESENTACION as GRAFOFONETICA } from "./espanol/grafofonetica.js";
import { PRESENTACION as GEOGRAFIA_TIERRA } from "./geografia/geografia-tierra.js";
import { PRESENTACION as GEOGRAFIA_HUMANA } from "./geografia/geografia-humana.js";
import { PRESENTACION as GEOGRAFIA_COMPLEMENTO } from "./geografia/geografia-complemento.js";
import { PRESENTACION as FISICA_PENSAMIENTO_CIENTIFICO } from "./fisica/fisica-pensamiento-cientifico.js";
import { PRESENTACION as QUIMICA_PENSAMIENTO_CIENTIFICO } from "./quimica/quimica-pensamiento-cientifico.js";
import { PRESENTACION as BIOLOGIA_PENSAMIENTO_CIENTIFICO } from "./biologia/biologia-pensamiento-cientifico.js";
import { PRESENTACION as CIRCULO } from "./matematicas/circulo.js";
import { PRESENTACION as PROBABILIDAD } from "./matematicas/probabilidad.js";
import { PRESENTACION as ESTADISTICA } from "./matematicas/estadistica.js";
import { PRESENTACION as PROBABILIDAD_EXANI_II } from "./matematicas/probabilidad-exani-ii.js";
import { PRESENTACION as ESTADISTICA_EXANI_II } from "./matematicas/estadistica-exani-ii.js";
import { PRESENTACION as VOCABULARIO_UNAM } from "./espanol/vocabulario-unam.js";
import { PRESENTACION as CINEMATICA } from "./fisica/cinematica.js";
import { PRESENTACION as DINAMICA } from "./fisica/dinamica.js";
import { PRESENTACION as ENERGIA } from "./fisica/energia.js";
import { PRESENTACION as TERMODINAMICA } from "./fisica/termodinamica.js";
import { PRESENTACION as ONDAS } from "./fisica/ondas.js";
import { PRESENTACION as ELECTRICIDAD } from "./fisica/electricidad.js";
import { PRESENTACION as FLUIDOS } from "./fisica/fluidos.js";
import { PRESENTACION as FISICA_MODERNA } from "./fisica/fisica-moderna.js";
import { PRESENTACION as BIOLOGIA_CELULA } from "./biologia/biologia-celula.js";
import { PRESENTACION as BIOLOGIA_BIOQUIMICA } from "./biologia/biologia-bioquimica.js";
import { PRESENTACION as BIOLOGIA_REPRODUCCION } from "./biologia/biologia-reproduccion.js";
import { PRESENTACION as BIOLOGIA_GENETICA } from "./biologia/biologia-genetica.js";
import { PRESENTACION as BIOLOGIA_EVOLUCION } from "./biologia/biologia-evolucion.js";
import { PRESENTACION as BIOLOGIA_ECOLOGIA } from "./biologia/biologia-ecologia.js";
import { PRESENTACION as QUIMICA_FUNDAMENTOS } from "./quimica/quimica-fundamentos.js";
import { PRESENTACION as QUIMICA_AGUA_AIRE_ALIMENTOS } from "./quimica/quimica-agua-aire-alimentos.js";
import { PRESENTACION as REGISTRO_LINGUISTICO } from "./espanol/registro-linguistico.js";
import { PRESENTACION as GENERO_TEXTUAL } from "./espanol/genero-textual.js";
import { PRESENTACION as RAZONES_PROPORCIONES } from "./matematicas/razones-proporciones.js";
import { PRESENTACION as EXPONENTES_ALGEBRA } from "./matematicas/exponentes-algebra.js";
import { PRESENTACION as ECUACIONES_LINEALES } from "./matematicas/ecuaciones-lineales.js";
import { PRESENTACION as POLINOMIOS_SISTEMAS } from "./matematicas/polinomios-sistemas.js";
import { PRESENTACION as FUNCIONES_CUADRATICAS } from "./matematicas/funciones-cuadraticas.js";
import { PRESENTACION as TRIGONOMETRIA } from "./matematicas/trigonometria.js";
import { PRESENTACION as TRIGONOMETRIA_ANALITICA } from "./matematicas/trigonometria-analitica.js";
import { PRESENTACION as ALGEBRA_SUPERIOR } from "./matematicas/algebra-superior.js";
import { PRESENTACION as CALCULO_DIFERENCIAL } from "./matematicas/calculo-diferencial.js";
import { PRESENTACION as NOMENCLATURA_REACCIONES } from "./quimica/nomenclatura-reacciones.js";
import { PRESENTACION as ESTEQUIOMETRIA } from "./quimica/estequiometria.js";
import { PRESENTACION as QUIMICA_ORGANICA } from "./quimica/quimica-organica.js";
import { PRESENTACION as SISTEMAS_NERVIOSO_ENDOCRINO } from "./biologia/sistemas-nervioso-endocrino.js";
import { PRESENTACION as PERIMETROS_AREAS_VOLUMENES } from "./matematicas/perimetros-areas-volumenes.js";
import { PRESENTACION as TRANSFORMACIONES_CONGRUENCIA } from "./matematicas/transformaciones-congruencia.js";
import { PRESENTACION as TRIANGULOS_PITAGORAS } from "./matematicas/triangulos-pitagoras.js";
import { PRESENTACION as COMPRENSION_LECTORA } from "./comprension/comprension-lectora.js";
import { PRESENTACION as FISICA_COMPLEMENTO_CIENTIFICO } from "./fisica/fisica-complemento-cientifico.js";
import { PRESENTACION as BIOLOGIA_ANATOMIA_FISIOLOGIA } from "./biologia/biologia-anatomia-fisiologia.js";
import { PRESENTACION as COHESION_GRAMATICAL_EXANI_II } from "./espanol/cohesion-gramatical-exani-ii.js";
import { PRESENTACION as COHESION_LEXICO_SEMANTICA_EXANI_II } from "./espanol/cohesion-lexico-semantica-exani-ii.js";
import { PRESENTACION as COHESION_TEXTUAL_EXANI_II } from "./espanol/cohesion-textual-exani-ii.js";

export const PRESENTACIONES_INDEX = {
  "semejanza-triangulos": SEMEJANZA_TRIANGULOS,
  "concordancia-verbal": CONCORDANCIA_VERBAL,
  "concordancia-nominal": CONCORDANCIA_NOMINAL,
  "concordancia-nominal-avanzada": CONCORDANCIA_NOMINAL_AVANZADA,
  "concordancia-verbal-avanzada": CONCORDANCIA_VERBAL_AVANZADA,
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
  "probabilidad-exani-ii": PROBABILIDAD_EXANI_II,
  "estadistica-exani-ii": ESTADISTICA_EXANI_II,
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
  "razones-proporciones": RAZONES_PROPORCIONES,
  "exponentes-algebra": EXPONENTES_ALGEBRA,
  "ecuaciones-lineales": ECUACIONES_LINEALES,
  "polinomios-sistemas": POLINOMIOS_SISTEMAS,
  "funciones-cuadraticas": FUNCIONES_CUADRATICAS,
  "trigonometria": TRIGONOMETRIA,
  "trigonometria-analitica": TRIGONOMETRIA_ANALITICA,
  "algebra-superior": ALGEBRA_SUPERIOR,
  "calculo-diferencial": CALCULO_DIFERENCIAL,
  "nomenclatura-reacciones": NOMENCLATURA_REACCIONES,
  "estequiometria": ESTEQUIOMETRIA,
  "quimica-organica": QUIMICA_ORGANICA,
  "sistemas-nervioso-endocrino": SISTEMAS_NERVIOSO_ENDOCRINO,
  "perimetros-areas-volumenes": PERIMETROS_AREAS_VOLUMENES,
  "transformaciones-congruencia": TRANSFORMACIONES_CONGRUENCIA,
  "triangulos-pitagoras": TRIANGULOS_PITAGORAS,
  "comprension-lectora": COMPRENSION_LECTORA,
  "fisica-complemento-cientifico": FISICA_COMPLEMENTO_CIENTIFICO,
  "biologia-anatomia-fisiologia": BIOLOGIA_ANATOMIA_FISIOLOGIA,
  "cohesion-gramatical-exani-ii": COHESION_GRAMATICAL_EXANI_II,
  "cohesion-lexico-semantica-exani-ii": COHESION_LEXICO_SEMANTICA_EXANI_II,
  "cohesion-textual-exani-ii": COHESION_TEXTUAL_EXANI_II,
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
