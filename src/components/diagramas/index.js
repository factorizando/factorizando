// Registro único de diagramas estáticos (SVG).
// Clave (string usada en `figura:` / `svgDiagram:`) → componente que recibe { tema }.
//
// Patrón propuesto en docs/CONVENCIONES.md §4.2: en lugar de cadenas de `if`
// dentro de SlideRenderer, un mapa único. Los componentes viven por materia.
import DerivadaSecante from "./matematicas/derivada-secante.jsx";
import VennDos from "./matematicas/venn-dos.jsx";
import GeomDardo from "./matematicas/geom-dardo.jsx";
import GeoCicloHidrologicoSVG from "./geografia/geo-ciclo-hidrologico.jsx";
import GeoCiclonesSVG from "./geografia/geo-ciclones.jsx";
import GeoCongruenciaSVG from "./matematicas/geo-congruencia.jsx";
import GeoCoordenadaSVG from "./geografia/geo-coordenadas.jsx";
import GeoCuboDesarrolloSVG from "./matematicas/geo-cubo-desarrollo.jsx";
import GeoCuerposVolumenSVG from "./matematicas/geo-cuerpos-volumen.jsx";
import GeoDesigualdadSVG from "./geografia/geo-desigualdad.jsx";
import GeoDeterioroSVG from "./geografia/geo-deterioro.jsx";
import GeoEconomiaSVG from "./geografia/geo-economia.jsx";
import GeoEjesSimetriaSVG from "./matematicas/geo-ejes-simetria.jsx";
import GeoFigurasPlanasSVG from "./matematicas/geo-figuras-planas.jsx";
import GloboTerraqueo3D from "./geografia/geo-globo-3d.jsx";
import GeoHusosSVG from "./geografia/geo-husos.jsx";
import GeoIsometriasSVG from "./matematicas/geo-isometrias.jsx";
import GeoMineralesSVG from "./geografia/geo-minerales.jsx";
import GeoOrganizacionSVG from "./geografia/geo-organizacion.jsx";
import GeoPitagorasSVG from "./matematicas/geo-pitagoras.jsx";
import GeoPlacastSVG from "./geografia/geo-placas.jsx";
import GeoPoblacionSVG from "./geografia/geo-poblacion.jsx";
import GeoRegionesSVG from "./geografia/geo-regiones.jsx";
import GeoRiosSVG from "./geografia/geo-rios.jsx";
import GeoTrianguloAngulosSVG from "./matematicas/geo-triangulo-angulos.jsx";
import AcentoClasificacionSVG from "./espanol/acento-clasificacion.jsx";
import AntonimiaContextualSVG from "./espanol/antonimia-contextual.jsx";
import AntonimiasTiposSVG from "./espanol/antonimia-tipos.jsx";
import CampoSemanticoSVG from "./espanol/campo-semantico.jsx";
import CohesionPanoramaSVG from "./espanol/cohesion-panorama.jsx";
import CorrreferenciaPersonalSVG from "./espanol/correferencia-personal.jsx";
import DiptongoHiatoSVG from "./espanol/diptongo-hiato.jsx";
import ElipsisNominalSVG from "./espanol/elipsis-nominal.jsx";
import GrafoBVSVG from "./espanol/grafo-bv.jsx";
import GrafoCKSVG from "./espanol/grafo-ck.jsx";
import GrafoGJSVG from "./espanol/grafo-gj.jsx";
import GrafoPanoramaSVG from "./espanol/grafo-panorama.jsx";
import GrafoSecuenciasSVG from "./espanol/grafo-secuencias.jsx";
import GrafoVocalesSVG from "./espanol/grafo-vocales.jsx";
import LexicoSemanticaPanoramaSVG from "./espanol/lexico-semantica-panorama.jsx";
import MarcadoresAdicionSVG from "./espanol/marcadores-adicion.jsx";
import MarcadoresAdversativosSVG from "./espanol/marcadores-adversativos.jsx";
import MarcadoresCausaConsecuenciaSVG from "./espanol/marcadores-causa-consecuencia.jsx";
import MarcadoresPanoramaSVG from "./espanol/marcadores-panorama.jsx";
import MarcadoresReformulacionSVG from "./espanol/marcadores-reformulacion.jsx";
import MarcadoresTemporalesSVG from "./espanol/marcadores-temporales.jsx";
import SinonimiaContextualSVG from "./espanol/sinonimia-contextual.jsx";
import SinonimiasTiposSVG from "./espanol/sinonimia-tipos.jsx";
import AnaExcrecionSVG from "./quimica/ana-excrecion.jsx";
import AnaFungiSVG from "./quimica/ana-fungi.jsx";
import AnaPortadaSVG from "./quimica/ana-portada.jsx";
import AnaTejidosSVG from "./quimica/ana-tejidos.jsx";
import AnaVegetalSVG from "./quimica/ana-vegetal.jsx";
import QaaAguaSVG from "./quimica/qaa-agua.jsx";
import QaaAireSVG from "./quimica/qaa-aire.jsx";
import QaaAlimentosSVG from "./quimica/qaa-alimentos.jsx";
import QaaContaminacionSVG from "./quimica/qaa-contaminacion.jsx";
import QaaEnergiaSVG from "./quimica/qaa-energia.jsx";
import QaaPhSVG from "./quimica/qaa-ph.jsx";
import QaaPortadaSVG from "./quimica/qaa-portada.jsx";
import QfAtomoSVG from "./quimica/qf-atomo.jsx";
import QfCompuestosSVG from "./quimica/qf-compuestos.jsx";
import QfMezclasSVG from "./quimica/qf-mezclas.jsx";
import QfMolSVG from "./quimica/qf-mol.jsx";
import QfPortadaSVG from "./quimica/qf-portada.jsx";
import QfTablaSVG from "./quimica/qf-tabla.jsx";
import BqAtpSVG from "./biologia/bq-atp.jsx";
import BqBiomoleculasSVG from "./biologia/bq-biomoleculas.jsx";
import BqEnzimaSVG from "./biologia/bq-enzima.jsx";
import BqFotosintesisSVG from "./biologia/bq-fotosintesis.jsx";
import BqPortadaSVG from "./biologia/bq-portada.jsx";
import BqRespiracionSVG from "./biologia/bq-respiracion.jsx";
import CelAnimalVegetalSVG from "./biologia/cel-animal-vegetal.jsx";
import CelHistoriaSVG from "./biologia/cel-historia.jsx";
import CelMeiosisSVG from "./biologia/cel-meiosis.jsx";
import CelMembranaSVG from "./biologia/cel-membrana.jsx";
import CelMitosisSVG from "./biologia/cel-mitosis.jsx";
import CelPortadaSVG from "./biologia/cel-portada.jsx";
import CelProcEucSVG from "./biologia/cel-proc-euc.jsx";
import CelTransporteSVG from "./biologia/cel-transporte.jsx";
import EcoBiomasSVG from "./biologia/eco-biomas.jsx";
import EcoCicloCarbonoSVG from "./biologia/eco-ciclo-carbono.jsx";
import EcoNivelesSVG from "./biologia/eco-niveles.jsx";
import EcoPiramideSVG from "./biologia/eco-piramide.jsx";
import EcoPortadaSVG from "./biologia/eco-portada.jsx";
import EvoDarwinLamarckSVG from "./biologia/evo-darwin-lamarck.jsx";
import EvoOrigenVidaSVG from "./biologia/evo-origen-vida.jsx";
import EvoPortadaSVG from "./biologia/evo-portada.jsx";
import EvoPruebasSVG from "./biologia/evo-pruebas.jsx";
import EvoReinosSVG from "./biologia/evo-reinos.jsx";
import EvoTaxonomiaSVG from "./biologia/evo-taxonomia.jsx";
import GenAdnSVG from "./biologia/gen-adn.jsx";
import GenBiotecnologiaSVG from "./biologia/gen-biotecnologia.jsx";
import GenDogmaSVG from "./biologia/gen-dogma.jsx";
import GenMutacionSVG from "./biologia/gen-mutacion.jsx";
import GenPcrSVG from "./biologia/gen-pcr.jsx";
import GenPortadaSVG from "./biologia/gen-portada.jsx";
import GenPunnettSVG from "./biologia/gen-punnett.jsx";
import RepAsexualSVG from "./biologia/rep-asexual.jsx";
import RepPlantaSVG from "./biologia/rep-planta.jsx";
import RepPortadaSVG from "./biologia/rep-portada.jsx";
import RepSexualSVG from "./biologia/rep-sexual.jsx";
import CinCaidaLibreSVG from "./fisica/cin-caida-libre.jsx";
import CinDesplazamientoSVG from "./fisica/cin-desplazamiento.jsx";
import CinEjDtSVG from "./fisica/cin-ej-dt.jsx";
import CinEjVtAreaSVG from "./fisica/cin-ej-vt-area.jsx";
import CinGrafVtSVG from "./fisica/cin-graf-vt.jsx";
import CinGrafXtSVG from "./fisica/cin-graf-xt.jsx";
import CinPortadaSVG from "./fisica/cin-portada.jsx";
import CinTiroParabolicoSVG from "./fisica/cin-tiro-parabolico.jsx";
import DinFriccionSVG from "./fisica/din-friccion.jsx";
import DinFuerzaNetaSVG from "./fisica/din-fuerza-neta.jsx";
import DinHookeSVG from "./fisica/din-hooke.jsx";
import DinPortadaSVG from "./fisica/din-portada.jsx";
import DinSegundaLeySVG from "./fisica/din-segunda-ley.jsx";
import DinTerceraLeySVG from "./fisica/din-tercera-ley.jsx";
import EleCircuitoSVG from "./fisica/ele-circuito.jsx";
import EleCoulombSVG from "./fisica/ele-coulomb.jsx";
import EleMagnetismoSVG from "./fisica/ele-magnetismo.jsx";
import ElePortadaSVG from "./fisica/ele-portada.jsx";
import EleSerieParaleloSVG from "./fisica/ele-serie-paralelo.jsx";
import EneConservacionSVG from "./fisica/ene-conservacion.jsx";
import EneEnergiasSVG from "./fisica/ene-energias.jsx";
import EneMomentoSVG from "./fisica/ene-momento.jsx";
import EnePortadaSVG from "./fisica/ene-portada.jsx";
import EneTrabajoSVG from "./fisica/ene-trabajo.jsx";
import FisicaCaidaLibreSVG from "./fisica/fisica-caida-libre.jsx";
import FisicaCambiosEstadoSVG from "./fisica/fisica-cambios-estado.jsx";
import FisicaCircuitoSVG from "./fisica/fisica-circuito.jsx";
import FisicaEnergiaMecanicaSVG from "./fisica/fisica-energia-mecanica.jsx";
import FisicaEstadosMateriaSVG from "./fisica/fisica-estados-materia.jsx";
import FisicaFuerzasSVG from "./fisica/fisica-fuerzas.jsx";
import FisicaSistemaSolarSVG from "./fisica/fisica-sistema-solar.jsx";
import FisicaTransformacionesSVG from "./fisica/fisica-transformaciones.jsx";
import FisicaVelAcelSVG from "./fisica/fisica-vel-acel.jsx";
import FluArquimedesSVG from "./fisica/flu-arquimedes.jsx";
import FluContinuidadSVG from "./fisica/flu-continuidad.jsx";
import FluPascalSVG from "./fisica/flu-pascal.jsx";
import FluPortadaSVG from "./fisica/flu-portada.jsx";
import FluPresionSVG from "./fisica/flu-presion.jsx";
import ModAtomoSVG from "./fisica/mod-atomo.jsx";
import ModEspectroSVG from "./fisica/mod-espectro.jsx";
import ModFotoelectricoSVG from "./fisica/mod-fotoelectrico.jsx";
import ModPortadaSVG from "./fisica/mod-portada.jsx";
import ModRadioactividadSVG from "./fisica/mod-radioactividad.jsx";
import OndLenteSVG from "./fisica/ond-lente.jsx";
import OndOndaSVG from "./fisica/ond-onda.jsx";
import OndPortadaSVG from "./fisica/ond-portada.jsx";
import OndReflexRefracSVG from "./fisica/ond-reflexion-refraccion.jsx";
import OndTiposSVG from "./fisica/ond-tipos.jsx";
import TerDilatacionSVG from "./fisica/ter-dilatacion.jsx";
import TerEscalasSVG from "./fisica/ter-escalas.jsx";
import TerGasSVG from "./fisica/ter-gas.jsx";
import TerPortadaSVG from "./fisica/ter-portada.jsx";
import TerTransferenciaSVG from "./fisica/ter-transferencia.jsx";

export const DIAGRAMS = {
  // ── matematicas (geometría) ──
  "geo-triangulo-angulos": GeoTrianguloAngulosSVG,
  "geo-pitagoras": GeoPitagorasSVG,
  "geo-isometrias": GeoIsometriasSVG,
  "geo-figuras-planas": GeoFigurasPlanasSVG,
  "geo-ejes-simetria": GeoEjesSimetriaSVG,
  "geo-cuerpos-volumen": GeoCuerposVolumenSVG,
  "geo-cubo-desarrollo": GeoCuboDesarrolloSVG,
  "geo-congruencia": GeoCongruenciaSVG,
  // ── fisica ──
  "cin-caida-libre": CinCaidaLibreSVG,
  "cin-desplazamiento": CinDesplazamientoSVG,
  "cin-ej-dt": CinEjDtSVG,
  "cin-ej-vt-area": CinEjVtAreaSVG,
  "cin-graf-vt": CinGrafVtSVG,
  "cin-graf-xt": CinGrafXtSVG,
  "cin-portada": CinPortadaSVG,
  "cin-tiro-parabolico": CinTiroParabolicoSVG,
  "din-friccion": DinFriccionSVG,
  "din-fuerza-neta": DinFuerzaNetaSVG,
  "din-hooke": DinHookeSVG,
  "din-portada": DinPortadaSVG,
  "din-segunda-ley": DinSegundaLeySVG,
  "din-tercera-ley": DinTerceraLeySVG,
  "ele-circuito": EleCircuitoSVG,
  "ele-coulomb": EleCoulombSVG,
  "ele-magnetismo": EleMagnetismoSVG,
  "ele-portada": ElePortadaSVG,
  "ele-serie-paralelo": EleSerieParaleloSVG,
  "ene-conservacion": EneConservacionSVG,
  "ene-energias": EneEnergiasSVG,
  "ene-momento": EneMomentoSVG,
  "ene-portada": EnePortadaSVG,
  "ene-trabajo": EneTrabajoSVG,
  "fisica-caida-libre": FisicaCaidaLibreSVG,
  "fisica-cambios-estado": FisicaCambiosEstadoSVG,
  "fisica-circuito": FisicaCircuitoSVG,
  "fisica-energia-mecanica": FisicaEnergiaMecanicaSVG,
  "fisica-estados-materia": FisicaEstadosMateriaSVG,
  "fisica-fuerzas": FisicaFuerzasSVG,
  "fisica-sistema-solar": FisicaSistemaSolarSVG,
  "fisica-transformaciones": FisicaTransformacionesSVG,
  "fisica-vel-acel": FisicaVelAcelSVG,
  "flu-arquimedes": FluArquimedesSVG,
  "flu-continuidad": FluContinuidadSVG,
  "flu-pascal": FluPascalSVG,
  "flu-portada": FluPortadaSVG,
  "flu-presion": FluPresionSVG,
  "mod-atomo": ModAtomoSVG,
  "mod-espectro": ModEspectroSVG,
  "mod-fotoelectrico": ModFotoelectricoSVG,
  "mod-portada": ModPortadaSVG,
  "mod-radioactividad": ModRadioactividadSVG,
  "ond-lente": OndLenteSVG,
  "ond-onda": OndOndaSVG,
  "ond-portada": OndPortadaSVG,
  "ond-reflexion-refraccion": OndReflexRefracSVG,
  "ond-tipos": OndTiposSVG,
  "ter-dilatacion": TerDilatacionSVG,
  "ter-escalas": TerEscalasSVG,
  "ter-gas": TerGasSVG,
  "ter-portada": TerPortadaSVG,
  "ter-transferencia": TerTransferenciaSVG,
  // ── biologia ──
  "bq-atp": BqAtpSVG,
  "bq-biomoleculas": BqBiomoleculasSVG,
  "bq-enzima": BqEnzimaSVG,
  "bq-fotosintesis": BqFotosintesisSVG,
  "bq-portada": BqPortadaSVG,
  "bq-respiracion": BqRespiracionSVG,
  "cel-animal-vegetal": CelAnimalVegetalSVG,
  "cel-historia": CelHistoriaSVG,
  "cel-meiosis": CelMeiosisSVG,
  "cel-membrana": CelMembranaSVG,
  "cel-mitosis": CelMitosisSVG,
  "cel-portada": CelPortadaSVG,
  "cel-proc-euc": CelProcEucSVG,
  "cel-transporte": CelTransporteSVG,
  "eco-biomas": EcoBiomasSVG,
  "eco-ciclo-carbono": EcoCicloCarbonoSVG,
  "eco-niveles": EcoNivelesSVG,
  "eco-piramide": EcoPiramideSVG,
  "eco-portada": EcoPortadaSVG,
  "evo-darwin-lamarck": EvoDarwinLamarckSVG,
  "evo-origen-vida": EvoOrigenVidaSVG,
  "evo-portada": EvoPortadaSVG,
  "evo-pruebas": EvoPruebasSVG,
  "evo-reinos": EvoReinosSVG,
  "evo-taxonomia": EvoTaxonomiaSVG,
  "gen-adn": GenAdnSVG,
  "gen-biotecnologia": GenBiotecnologiaSVG,
  "gen-dogma": GenDogmaSVG,
  "gen-mutacion": GenMutacionSVG,
  "gen-pcr": GenPcrSVG,
  "gen-portada": GenPortadaSVG,
  "gen-punnett": GenPunnettSVG,
  "rep-asexual": RepAsexualSVG,
  "rep-planta": RepPlantaSVG,
  "rep-portada": RepPortadaSVG,
  "rep-sexual": RepSexualSVG,
  // ── quimica ──
  "ana-excrecion": AnaExcrecionSVG,
  "ana-fungi": AnaFungiSVG,
  "ana-portada": AnaPortadaSVG,
  "ana-tejidos": AnaTejidosSVG,
  "ana-vegetal": AnaVegetalSVG,
  "qaa-agua": QaaAguaSVG,
  "qaa-aire": QaaAireSVG,
  "qaa-alimentos": QaaAlimentosSVG,
  "qaa-contaminacion": QaaContaminacionSVG,
  "qaa-energia": QaaEnergiaSVG,
  "qaa-ph": QaaPhSVG,
  "qaa-portada": QaaPortadaSVG,
  "qf-atomo": QfAtomoSVG,
  "qf-compuestos": QfCompuestosSVG,
  "qf-mezclas": QfMezclasSVG,
  "qf-mol": QfMolSVG,
  "qf-portada": QfPortadaSVG,
  "qf-tabla": QfTablaSVG,
  // ── espanol ──
  "acento-clasificacion": AcentoClasificacionSVG,
  "antonimia-contextual": AntonimiaContextualSVG,
  "antonimia-tipos": AntonimiasTiposSVG,
  "campo-semantico": CampoSemanticoSVG,
  "cohesion-panorama": CohesionPanoramaSVG,
  "correferencia-personal": CorrreferenciaPersonalSVG,
  "diptongo-hiato": DiptongoHiatoSVG,
  "elipsis-nominal": ElipsisNominalSVG,
  "grafo-bv": GrafoBVSVG,
  "grafo-ck": GrafoCKSVG,
  "grafo-gj": GrafoGJSVG,
  "grafo-panorama": GrafoPanoramaSVG,
  "grafo-secuencias": GrafoSecuenciasSVG,
  "grafo-vocales": GrafoVocalesSVG,
  "lexico-semantica-panorama": LexicoSemanticaPanoramaSVG,
  "marcadores-adicion": MarcadoresAdicionSVG,
  "marcadores-adversativos": MarcadoresAdversativosSVG,
  "marcadores-causa-consecuencia": MarcadoresCausaConsecuenciaSVG,
  "marcadores-panorama": MarcadoresPanoramaSVG,
  "marcadores-reformulacion": MarcadoresReformulacionSVG,
  "marcadores-temporales": MarcadoresTemporalesSVG,
  "sinonimia-contextual": SinonimiaContextualSVG,
  "sinonimia-tipos": SinonimiasTiposSVG,
  // ── geografia ──
  "geo-ciclo-hidrologico": GeoCicloHidrologicoSVG,
  "geo-ciclones": GeoCiclonesSVG,
  "geo-coordenadas": GeoCoordenadaSVG,
  "geo-desigualdad": GeoDesigualdadSVG,
  "geo-deterioro": GeoDeterioroSVG,
  "geo-economia": GeoEconomiaSVG,
  "geo-globo-3d": GloboTerraqueo3D,
  "geo-husos": GeoHusosSVG,
  "geo-minerales": GeoMineralesSVG,
  "geo-organizacion": GeoOrganizacionSVG,
  "geo-placas": GeoPlacastSVG,
  "geo-poblacion": GeoPoblacionSVG,
  "geo-regiones": GeoRegionesSVG,
  "geo-rios": GeoRiosSVG,
  "derivada-secante": DerivadaSecante,
  "venn-dos": VennDos,
  "geom-dardo": GeomDardo,
};

export function buscarDiagrama(clave) {
  return DIAGRAMS[clave] || null;
}
