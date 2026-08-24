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
import CriterioAADetalleSVG from "./matematicas/aa-detalle.jsx";
import CongALADetalleSVG from "./matematicas/ala-cong-detalle.jsx";
import AnguloCentralSVG from "./matematicas/angulo-central.jsx";
import AnguloExteriorFormulaSVG from "./matematicas/angulo-exterior-formula.jsx";
import AnguloInscritoSVG from "./matematicas/angulo-inscrito.jsx";
import AnguloInteriorFormulaSVG from "./matematicas/angulo-interior-formula.jsx";
import ProbArbolMonedas from "./matematicas/arbol-monedas.jsx";
import ProbArbolMultiplicativo from "./matematicas/arbol-multiplicativo.jsx";
import ProbArbolTresMonedas from "./matematicas/arbol-tres-monedas.jsx";
import ProbArbolUrna from "./matematicas/arbol-urna.jsx";
import AreasEstrategiaSVG from "./matematicas/areas-estrategia.jsx";
import As1CuadCircSVG from "./matematicas/as1-cuad-circ.jsx";
import As2CoronaSVG from "./matematicas/as2-corona.jsx";
import As3SemiRectSVG from "./matematicas/as3-semi-rect.jsx";
import As4SectorTriSVG from "./matematicas/as4-sector-tri.jsx";
import As5TrapSemiSVG from "./matematicas/as5-trap-semi.jsx";
import As6HexCircSVG from "./matematicas/as6-hex-circ.jsx";
import As7TriCircSVG from "./matematicas/as7-tri-circ.jsx";
import As8ComplejoSVG from "./matematicas/as8-complejo.jsx";
import BarrasModaSVG from "./matematicas/barras-moda.jsx";
import BiologiaAdaptacionSVG from "./matematicas/biologia-adaptacion.jsx";
import BiologiaBiodiversidadSVG from "./matematicas/biologia-biodiversidad.jsx";
import BiologiaCadenaTroficaSVG from "./matematicas/biologia-cadena-trofica.jsx";
import BiologiaCelulaSVG from "./matematicas/biologia-celula.jsx";
import BiologiaEvolucionSVG from "./matematicas/biologia-evolucion.jsx";
import BiologiaGeneticaAplicadaSVG from "./matematicas/biologia-genetica-aplicada.jsx";
import BiologiaHerenciaSVG from "./matematicas/biologia-herencia.jsx";
import BuffonSVG from "./matematicas/buffon.jsx";
import Cce1RadioSVG from "./matematicas/cce1-radio.jsx";
import Cce2SectorSVG from "./matematicas/cce2-sector.jsx";
import Cce3ArcoSVG from "./matematicas/cce3-arco.jsx";
import Cce4TangSVG from "./matematicas/cce4-tang.jsx";
import Ce1LllSVG from "./matematicas/ce1-lll.jsx";
import Ce2CondMedSVG from "./matematicas/ce2-medidas.jsx";
import Ce3AlaSVG from "./matematicas/ce3-ala.jsx";
import Ce4AaaSVG from "./matematicas/ce4-aaa.jsx";
import Ce5AngleSVG from "./matematicas/ce5-angulo.jsx";
import CirculoFormulasSVG from "./matematicas/circulo-formulas.jsx";
import CirculoPartesSVG from "./matematicas/circulo-partes.jsx";
import CombinacionesCasillasSVG from "./matematicas/combinaciones-casillas.jsx";
import ComplementoSVG from "./matematicas/complemento.jsx";
import VennNumericoSVG from "./matematicas/conjuntos-numerico.jsx";
import VennConjuntosSVG from "./matematicas/conjuntos-venn.jsx";
import CuadradoDetalleSVG from "./matematicas/cuadrado-detalle.jsx";
import CuartilesSVG from "./matematicas/cuartiles-strip.jsx";
import CumpleanosSVG from "./matematicas/cumpleanos.jsx";
import DardoDianaSVG from "./matematicas/dardo-diana.jsx";
import DesviacionDetalleSVG from "./matematicas/desviacion-detalle.jsx";
import DispersionSVG from "./matematicas/dispersion.jsx";
import DistBinomialChart from "./matematicas/dist-binomial.jsx";
import DistSumaDadosChart from "./matematicas/dist-suma-dados.jsx";
import DosDadosSVG from "./matematicas/dos-dados.jsx";
import DotPlotMediaSVG from "./matematicas/dotplot-media.jsx";
import DotPlotMedianaSVG from "./matematicas/dotplot-mediana.jsx";
import EjBarrasDeporteSVG from "./matematicas/ej-barras-deporte.jsx";
import CartaAsSVG from "./matematicas/ej-carta-as.jsx";
import EjCircularTransporteSVG from "./matematicas/ej-circular-transporte.jsx";
import CombinaPersonasSVG from "./matematicas/ej-combinatoria.jsx";
import EjCongALASVG from "./matematicas/ej-cong-ala.jsx";
import EjCongLAASVG from "./matematicas/ej-cong-laa.jsx";
import EjCongLALSVG from "./matematicas/ej-cong-lal.jsx";
import EjCongLLLSVG from "./matematicas/ej-cong-lll.jsx";
import DadoMayor4SVG from "./matematicas/ej-dado-mayor4.jsx";
import DosMonedasSVG from "./matematicas/ej-dos-monedas.jsx";
import Ej_EstMediaSVG from "./matematicas/ej-est-media.jsx";
import Ej_EstMedianaSVG from "./matematicas/ej-est-mediana.jsx";
import Ej_EstMedianaParSVG from "./matematicas/ej-est-mediana-par.jsx";
import Ej_EstModaSVG from "./matematicas/ej-est-moda.jsx";
import Ej_EstRangoSVG from "./matematicas/ej-est-rango.jsx";
import TablaFrecuenciasEst from "./matematicas/ej-est-tabla.jsx";
import EjHistogramaEstaturaSVG from "./matematicas/ej-histograma-estatura.jsx";
import MonedaDadoSVG from "./matematicas/ej-moneda-dado.jsx";
import RuletaSVG from "./matematicas/ej-ruleta.jsx";
import UrnaSinReempSVG from "./matematicas/ej-urna-r5a3.jsx";
import UrnaSumaSVG from "./matematicas/ej-urna-rav.jsx";
import Ej1LLLSVG from "./matematicas/ej1-lll.jsx";
import Ej2K32SVG from "./matematicas/ej2-k32.jsx";
import EjemploEstudiantesTabla from "./matematicas/ejemplo-estudiantes.jsx";
import EscalaProbabilidadSVG from "./matematicas/escala-probabilidad.jsx";
import EspacioMuestralSVG from "./matematicas/espacio-muestral.jsx";
import EstPortadaSVG from "./matematicas/est-portada.jsx";
import EulerLineSVG from "./matematicas/euler-line.jsx";
import FrecuenciasDadoChart from "./matematicas/frecuencias-dado.jsx";
import EstBarrasChart from "./matematicas/graficas-barras.jsx";
import EstCircularSVG from "./matematicas/graficas-circular.jsx";
import CongLAADetalleSVG from "./matematicas/laa-cong-detalle.jsx";
import CongLALDetalleSVG from "./matematicas/lal-cong-detalle.jsx";
import CriterioLALDetalleSVG from "./matematicas/lal-detalle.jsx";
import CongLLLDetalleSVG from "./matematicas/lll-cong-detalle.jsx";
import CriterioLLLDetalleSVG from "./matematicas/lll-detalle.jsx";
import MediaDetalleSVG from "./matematicas/media-detalle.jsx";
import MedianaDetalleSVG from "./matematicas/mediana-detalle.jsx";
import ModaDetalleSVG from "./matematicas/moda-detalle.jsx";
import MontyHallSVG from "./matematicas/monty-hall.jsx";
import OrdenImportaSVG from "./matematicas/orden-importa.jsx";
import ParalelogramoDefSVG from "./matematicas/paralelogramo-def.jsx";
import ParalelogramoFormulasSVG from "./matematicas/paralelogramo-formulas.jsx";
import Pe1RectSVG from "./matematicas/pe1-rect.jsx";
import Pe2RomboSVG from "./matematicas/pe2-rombo.jsx";
import Pe3CuadradoSVG from "./matematicas/pe3-cuadrado.jsx";
import PermutacionesCasillasSVG from "./matematicas/permutaciones-casillas.jsx";
import Poe1HexSVG from "./matematicas/poe1-hex.jsx";
import Poe2AngExtSVG from "./matematicas/poe2-angext.jsx";
import Poe3SumaSVG from "./matematicas/poe3-suma.jsx";
import PoligonoRegularDefSVG from "./matematicas/poligono-regular-def.jsx";
import PorcionesCirculoSVG from "./matematicas/porciones-circulo.jsx";
import ProbabilidadPortadaSVG from "./matematicas/prob-portada.jsx";
import ProcesoSigmaSVG from "./matematicas/proceso-sigma.jsx";
import QuimicaBiomoleculasSVG from "./matematicas/quimica-biomoleculas.jsx";
import QuimicaEnergiaReaccionesSVG from "./matematicas/quimica-energia-reacciones.jsx";
import QuimicaImpactoSVG from "./matematicas/quimica-impacto.jsx";
import QuimicaMezclasSVG from "./matematicas/quimica-mezclas.jsx";
import QuimicaModelosAtomicosSVG from "./matematicas/quimica-modelos-atomicos.jsx";
import QuimicaReaccionesSVG from "./matematicas/quimica-reacciones.jsx";
import QuimicaSeparacionSVG from "./matematicas/quimica-separacion.jsx";
import RangoOutlierSVG from "./matematicas/rango-outlier.jsx";
import RazonSemejanzaSVG from "./matematicas/razon-semejanza.jsx";
import RectanguloDetalleSVG from "./matematicas/rectangulo-detalle.jsx";
import ReglaSumaSVG from "./matematicas/regla-suma.jsx";
import RomboDetalleSVG from "./matematicas/rombo-detalle.jsx";
import SeAaEj1SVG from "./matematicas/se-aa-ej1.jsx";
import SeAaEj2SVG from "./matematicas/se-aa-ej2.jsx";
import SeAreasSVG from "./matematicas/se-areas.jsx";
import SeK3SVG from "./matematicas/se-k3.jsx";
import SeLalEj1SVG from "./matematicas/se-lal-ej1.jsx";
import SeLalEj2SVG from "./matematicas/se-lal-ej2.jsx";
import SeLalS2SVG from "./matematicas/se-lal-s2.jsx";
import SeLllEj1SVG from "./matematicas/se-lll-ej1.jsx";
import SeLllEj2SVG from "./matematicas/se-lll-ej2.jsx";
import SeLllS1SVG from "./matematicas/se-lll-s1.jsx";
import SeLllS2SVG from "./matematicas/se-lll-s2.jsx";
import SeLllS3SVG from "./matematicas/se-lll-s3.jsx";
import SeParalelaSVG from "./matematicas/se-paralela.jsx";
import SePitSVG from "./matematicas/se-pitagoras.jsx";
import SeSombraSVG from "./matematicas/se-sombra.jsx";
import SectorCircularSVG from "./matematicas/sector-circular.jsx";
import SegmentoCircularSVG from "./matematicas/segmento-circular.jsx";
import TachuelaSVG from "./matematicas/tachuela.jsx";
import TangenteExteriorSVG from "./matematicas/tangente-exterior.jsx";
import Te1AreaSVG from "./matematicas/te1-area.jsx";
import Te2MedianaSVG from "./matematicas/te2-mediana.jsx";
import Te3IsoSVG from "./matematicas/te3-iso.jsx";
import TendenciaCentralSVG from "./matematicas/tendencia-central.jsx";
import TiEj1SVG from "./matematicas/ti-ej1.jsx";
import TiEj2SVG from "./matematicas/ti-ej2.jsx";
import TiEj3SVG from "./matematicas/ti-ej3.jsx";
import TiposVariableSVG from "./matematicas/tipos-variable.jsx";
import TrapecioDefSVG from "./matematicas/trapecio-def.jsx";
import TrapecioFormulasSVG from "./matematicas/trapecio-formulas.jsx";
import TrapIsoDetalleSVG from "./matematicas/trapecio-isosceles-detalle.jsx";
import TrapRectDetalleSVG from "./matematicas/trapecio-rect-detalle.jsx";
import AxiomasSVG from "./matematicas/tres-axiomas.jsx";
import TriangulosCongruentesSVG from "./matematicas/triangulos-congruentes.jsx";
import TriangulosSemejantesSVG from "./matematicas/triangulos-semejantes.jsx";
import UnaMonedaSVG from "./matematicas/una-moneda.jsx";

export const DIAGRAMS = {
  // ── matematicas ──
  "aa-detalle": CriterioAADetalleSVG,
  "ala-cong-detalle": CongALADetalleSVG,
  "angulo-central": AnguloCentralSVG,
  "angulo-exterior-formula": AnguloExteriorFormulaSVG,
  "angulo-inscrito": AnguloInscritoSVG,
  "angulo-interior-formula": AnguloInteriorFormulaSVG,
  "arbol-monedas": ProbArbolMonedas,
  "arbol-multiplicativo": ProbArbolMultiplicativo,
  "arbol-tres-monedas": ProbArbolTresMonedas,
  "arbol-urna": ProbArbolUrna,
  "areas-estrategia": AreasEstrategiaSVG,
  "as1-cuad-circ": As1CuadCircSVG,
  "as2-corona": As2CoronaSVG,
  "as3-semi-rect": As3SemiRectSVG,
  "as4-sector-tri": As4SectorTriSVG,
  "as5-trap-semi": As5TrapSemiSVG,
  "as6-hex-circ": As6HexCircSVG,
  "as7-tri-circ": As7TriCircSVG,
  "as8-complejo": As8ComplejoSVG,
  "barras-moda": BarrasModaSVG,
  "biologia-adaptacion": BiologiaAdaptacionSVG,
  "biologia-biodiversidad": BiologiaBiodiversidadSVG,
  "biologia-cadena-trofica": BiologiaCadenaTroficaSVG,
  "biologia-celula": BiologiaCelulaSVG,
  "biologia-evolucion": BiologiaEvolucionSVG,
  "biologia-genetica-aplicada": BiologiaGeneticaAplicadaSVG,
  "biologia-herencia": BiologiaHerenciaSVG,
  "buffon": BuffonSVG,
  "cce1-radio": Cce1RadioSVG,
  "cce2-sector": Cce2SectorSVG,
  "cce3-arco": Cce3ArcoSVG,
  "cce4-tang": Cce4TangSVG,
  "ce1-lll": Ce1LllSVG,
  "ce2-medidas": Ce2CondMedSVG,
  "ce3-ala": Ce3AlaSVG,
  "ce4-aaa": Ce4AaaSVG,
  "ce5-angulo": Ce5AngleSVG,
  "circulo-formulas": CirculoFormulasSVG,
  "circulo-partes": CirculoPartesSVG,
  "combinaciones-casillas": CombinacionesCasillasSVG,
  "complemento": ComplementoSVG,
  "conjuntos-numerico": VennNumericoSVG,
  "conjuntos-venn": VennConjuntosSVG,
  "cuadrado-detalle": CuadradoDetalleSVG,
  "cuartiles-strip": CuartilesSVG,
  "cumpleanos": CumpleanosSVG,
  "dardo-diana": DardoDianaSVG,
  "desviacion-detalle": DesviacionDetalleSVG,
  "dispersion": DispersionSVG,
  "dist-binomial": DistBinomialChart,
  "dist-suma-dados": DistSumaDadosChart,
  "dos-dados": DosDadosSVG,
  "dotplot-media": DotPlotMediaSVG,
  "dotplot-mediana": DotPlotMedianaSVG,
  "ej-barras-deporte": EjBarrasDeporteSVG,
  "ej-carta-as": CartaAsSVG,
  "ej-circular-transporte": EjCircularTransporteSVG,
  "ej-combinatoria": CombinaPersonasSVG,
  "ej-cong-ala": EjCongALASVG,
  "ej-cong-laa": EjCongLAASVG,
  "ej-cong-lal": EjCongLALSVG,
  "ej-cong-lll": EjCongLLLSVG,
  "ej-dado-mayor4": DadoMayor4SVG,
  "ej-dos-monedas": DosMonedasSVG,
  "ej-est-media": Ej_EstMediaSVG,
  "ej-est-mediana": Ej_EstMedianaSVG,
  "ej-est-mediana-par": Ej_EstMedianaParSVG,
  "ej-est-moda": Ej_EstModaSVG,
  "ej-est-rango": Ej_EstRangoSVG,
  "ej-est-tabla": TablaFrecuenciasEst,
  "ej-histograma-estatura": EjHistogramaEstaturaSVG,
  "ej-moneda-dado": MonedaDadoSVG,
  "ej-ruleta": RuletaSVG,
  "ej-urna-r5a3": UrnaSinReempSVG,
  "ej-urna-rav": UrnaSumaSVG,
  "ej1-lll": Ej1LLLSVG,
  "ej2-k32": Ej2K32SVG,
  "ejemplo-estudiantes": EjemploEstudiantesTabla,
  "escala-probabilidad": EscalaProbabilidadSVG,
  "espacio-muestral": EspacioMuestralSVG,
  "est-portada": EstPortadaSVG,
  "euler-line": EulerLineSVG,
  "frecuencias-dado": FrecuenciasDadoChart,
  "graficas-barras": EstBarrasChart,
  "graficas-circular": EstCircularSVG,
  "laa-cong-detalle": CongLAADetalleSVG,
  "lal-cong-detalle": CongLALDetalleSVG,
  "lal-detalle": CriterioLALDetalleSVG,
  "lll-cong-detalle": CongLLLDetalleSVG,
  "lll-detalle": CriterioLLLDetalleSVG,
  "media-detalle": MediaDetalleSVG,
  "mediana-detalle": MedianaDetalleSVG,
  "moda-detalle": ModaDetalleSVG,
  "monty-hall": MontyHallSVG,
  "orden-importa": OrdenImportaSVG,
  "paralelogramo-def": ParalelogramoDefSVG,
  "paralelogramo-formulas": ParalelogramoFormulasSVG,
  "pe1-rect": Pe1RectSVG,
  "pe2-rombo": Pe2RomboSVG,
  "pe3-cuadrado": Pe3CuadradoSVG,
  "permutaciones-casillas": PermutacionesCasillasSVG,
  "poe1-hex": Poe1HexSVG,
  "poe2-angext": Poe2AngExtSVG,
  "poe3-suma": Poe3SumaSVG,
  "poligono-regular-def": PoligonoRegularDefSVG,
  "porciones-circulo": PorcionesCirculoSVG,
  "prob-portada": ProbabilidadPortadaSVG,
  "proceso-sigma": ProcesoSigmaSVG,
  "quimica-biomoleculas": QuimicaBiomoleculasSVG,
  "quimica-energia-reacciones": QuimicaEnergiaReaccionesSVG,
  "quimica-impacto": QuimicaImpactoSVG,
  "quimica-mezclas": QuimicaMezclasSVG,
  "quimica-modelos-atomicos": QuimicaModelosAtomicosSVG,
  "quimica-reacciones": QuimicaReaccionesSVG,
  "quimica-separacion": QuimicaSeparacionSVG,
  "rango-outlier": RangoOutlierSVG,
  "razon-semejanza": RazonSemejanzaSVG,
  "rectangulo-detalle": RectanguloDetalleSVG,
  "regla-suma": ReglaSumaSVG,
  "rombo-detalle": RomboDetalleSVG,
  "se-aa-ej1": SeAaEj1SVG,
  "se-aa-ej2": SeAaEj2SVG,
  "se-areas": SeAreasSVG,
  "se-k3": SeK3SVG,
  "se-lal-ej1": SeLalEj1SVG,
  "se-lal-ej2": SeLalEj2SVG,
  "se-lal-s2": SeLalS2SVG,
  "se-lll-ej1": SeLllEj1SVG,
  "se-lll-ej2": SeLllEj2SVG,
  "se-lll-s1": SeLllS1SVG,
  "se-lll-s2": SeLllS2SVG,
  "se-lll-s3": SeLllS3SVG,
  "se-paralela": SeParalelaSVG,
  "se-pitagoras": SePitSVG,
  "se-sombra": SeSombraSVG,
  "sector-circular": SectorCircularSVG,
  "segmento-circular": SegmentoCircularSVG,
  "tabla-frecuencias": TablaFrecuenciasEst,
  "tachuela": TachuelaSVG,
  "tangente-exterior": TangenteExteriorSVG,
  "te1-area": Te1AreaSVG,
  "te2-mediana": Te2MedianaSVG,
  "te3-iso": Te3IsoSVG,
  "tendencia-central": TendenciaCentralSVG,
  "ti-ej1": TiEj1SVG,
  "ti-ej2": TiEj2SVG,
  "ti-ej3": TiEj3SVG,
  "tipos-variable": TiposVariableSVG,
  "trapecio-def": TrapecioDefSVG,
  "trapecio-formulas": TrapecioFormulasSVG,
  "trapecio-isosceles-detalle": TrapIsoDetalleSVG,
  "trapecio-rect-detalle": TrapRectDetalleSVG,
  "tres-axiomas": AxiomasSVG,
  "triangulos-congruentes": TriangulosCongruentesSVG,
  "triangulos-semejantes": TriangulosSemejantesSVG,
  "una-moneda": UnaMonedaSVG,
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
