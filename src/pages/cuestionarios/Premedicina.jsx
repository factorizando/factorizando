import { useState, useEffect } from "react";

const C = {
  bg:      "#0e0f11",
  surface: "#13151a",
  border:  "#252830",
  blue:    "#3b9eff",
  gold:    "#f59e0b",
  purple:  "#a78bfa",
  teal:    "#34d399",
  orange:  "#f97316",
  crimson: "#f43f5e",
  text:    "#e8eaf0",
  muted:   "#5a6070",
  dim:     "#8a9ab8",
};

const BLOCKS = [
  { label: "Salud Pública y Medicina Comunitaria",        color: "#f43f5e", range: [1,   20] },
  { label: "Anatomía General y Sistema Nervioso",         color: "#3b9eff", range: [21,  40] },
  { label: "Sistemas Endócrino, Digestivo e Inmune",      color: "#f59e0b", range: [41,  60] },
  { label: "Sistemas Tegumentario y Musculoesquelético",  color: "#34d399", range: [61,  80] },
  { label: "Aparatos Cardiovascular y Respiratorio",      color: "#a78bfa", range: [81, 100] },
  { label: "Aparatos Urinario y Reproductor",             color: "#f97316", range: [101,120] },
];

function getBlock(id) {
  return BLOCKS.find(b => id >= b.range[0] && id <= b.range[1]) || BLOCKS[0];
}
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function fmt(s) {
  const m = Math.floor(s / 60), sec = s % 60;
  return String(m).padStart(2,"0")+":"+String(sec).padStart(2,"0");
}

const questions = [
  {id:1,block:0, q:"¿Cuál es la definición de salud según la OMS?", opts:["Ausencia de enfermedad","Estado de completo bienestar físico, mental y social, no solamente la ausencia de enfermedad","Capacidad de trabajar sin limitaciones","Estado de equilibrio corporal"], ans:"Estado de completo bienestar físico, mental y social, no solamente la ausencia de enfermedad", exp:"La OMS define salud como un estado de completo bienestar físico, mental y social, no solamente la ausencia de afecciones o enfermedades."},
  {id:2,block:0, q:"Los tres componentes de la Tríada Ecológica son:", opts:["Bacteria, virus y hongos","Agente, hospedador y ambiente","Patógeno, síntoma y cura","Huésped, parásito y medio"], ans:"Agente, hospedador y ambiente", exp:"La Tríada Ecológica se compone de Agente (causa), Hospedador (individuo susceptible) y Ambiente (condiciones que facilitan la exposición)."},
  {id:3,block:0, q:"¿En qué período de la historia natural de la enfermedad aparecen los primeros síntomas?", opts:["Período de susceptibilidad","Período subclínico","Período clínico","Período de incubación"], ans:"Período clínico", exp:"El período clínico inicia cuando aparecen los primeros síntomas perceptibles. Antes existe el período subclínico, donde ya hay daño pero sin manifestaciones."},
  {id:4,block:0, q:"¿Cuál es la diferencia principal entre un signo y un síntoma?", opts:["El signo es más grave que el síntoma","El síntoma es observable; el signo es subjetivo","El signo es objetivo; el síntoma es subjetivo","No hay diferencia, son sinónimos"], ans:"El signo es objetivo; el síntoma es subjetivo", exp:"Signo: manifestación objetiva medible por el médico (ej. fiebre, soplo). Síntoma: percepción subjetiva del paciente (ej. dolor, mareo)."},
  {id:5,block:0, q:"En la historia natural de la enfermedad, ¿qué nivel de prevención corresponde a la vacunación?", opts:["Prevención primaria","Prevención secundaria","Prevención terciaria","Prevención cuaternaria"], ans:"Prevención primaria", exp:"La prevención primaria actúa antes de que ocurra la enfermedad, eliminando o reduciendo factores de riesgo. La vacunación es el ejemplo más representativo."},
  {id:6,block:0, q:"¿Cuál es el objetivo principal de la prevención secundaria?", opts:["Evitar la exposición al agente","Detectar y tratar la enfermedad en etapas tempranas","Rehabilitar al paciente","Vacunar a la población"], ans:"Detectar y tratar la enfermedad en etapas tempranas", exp:"La prevención secundaria busca el diagnóstico precoz y el tratamiento oportuno para reducir la duración y gravedad de la enfermedad. Ej.: tamizaje (screening)."},
  {id:7,block:0, q:"¿Qué elemento del agente causal no es infeccioso pero puede causar enfermedad?", opts:["Virus","Bacteria","Radiación ionizante","Parásito"], ans:"Radiación ionizante", exp:"Los agentes causales pueden ser biológicos (virus, bacterias) o no biológicos (físicos como la radiación, y químicos como tóxicos). Todos forman parte del vértice 'Agente' de la tríada."},
  {id:8,block:0, q:"La transmisión de una enfermedad de persona a persona sin intermediario se denomina:", opts:["Transmisión indirecta","Transmisión vectorial","Transmisión directa","Transmisión vertical"], ans:"Transmisión directa", exp:"En la transmisión directa el agente pasa de la fuente al huésped sin intermediarios (contacto físico, gotas respiratorias). La indirecta requiere un vehículo o vector."},
  {id:9,block:0, q:"¿Cuál de los siguientes es un factor del hospedador que influye en su susceptibilidad a la enfermedad?", opts:["Contaminación del agua","Estado nutricional","Temperatura ambiental","Presencia del vector"], ans:"Estado nutricional", exp:"Los factores del hospedador incluyen edad, sexo, estado nutricional, inmunidad e historia genética. El estado nutricional deficiente aumenta la susceptibilidad a las infecciones."},
  {id:10,block:0, q:"¿Qué se entiende por historia natural de la enfermedad?", opts:["El relato clínico del paciente","La evolución de la enfermedad sin intervención médica","El expediente hospitalario","Los antecedentes familiares del paciente"], ans:"La evolución de la enfermedad sin intervención médica", exp:"La historia natural describe el curso espontáneo de la enfermedad desde su origen hasta su resolución (curación, cronicidad o muerte), sin tratamiento."},
  {id:11,block:0, q:"¿Qué tipo de agente es el Mycobacterium tuberculosis?", opts:["Agente físico","Agente químico","Agente biológico","Agente nutricional"], ans:"Agente biológico", exp:"Los agentes biológicos incluyen bacterias, virus, hongos, parásitos y priones. El Mycobacterium tuberculosis es la bacteria causante de la tuberculosis pulmonar."},
  {id:12,block:0, q:"La tasa de mortalidad infantil es un indicador de:", opts:["Nivel educativo","Estado de salud de una población","Crecimiento económico","Densidad poblacional"], ans:"Estado de salud de una población", exp:"La tasa de mortalidad infantil es un indicador clave del nivel de salud, acceso a servicios médicos y condiciones sanitarias de una comunidad."},
  {id:13,block:0, q:"¿Cuál período de la historia natural de la enfermedad es también conocido como 'período de latencia' en enfermedades crónicas?", opts:["Período de susceptibilidad","Período de exposición","Período subclínico","Período clínico"], ans:"Período subclínico", exp:"El período subclínico (o de latencia) abarca desde que el agente causa cambios biológicos hasta que aparecen los primeros síntomas. Es crucial para la detección precoz."},
  {id:14,block:0, q:"¿Qué es un síndrome?", opts:["Un signo aislado","Un conjunto de signos y síntomas que caracteriza una enfermedad","Una enfermedad con etiología única conocida","Un diagnóstico definitivo"], ans:"Un conjunto de signos y síntomas que caracteriza una enfermedad", exp:"Un síndrome es un conjunto de signos y síntomas que aparecen juntos y caracterizan a un estado patológico, aunque la causa puede ser diversa. Ej.: síndrome metabólico."},
  {id:15,block:0, q:"La morbilidad se refiere a:", opts:["La frecuencia de muertes en una población","La proporción de personas enfermas en una población","La tasa de natalidad","El promedio de vida de una población"], ans:"La proporción de personas enfermas en una población", exp:"Morbilidad es la proporción de personas que enferman en una población en un período determinado. La mortalidad, en cambio, mide las muertes."},
  {id:16,block:0, q:"¿Cuál es la función de la epidemiología?", opts:["Tratar enfermedades individuales","Estudiar la distribución y determinantes de las enfermedades en poblaciones","Realizar cirugías preventivas","Formular medicamentos"], ans:"Estudiar la distribución y determinantes de las enfermedades en poblaciones", exp:"La epidemiología estudia la frecuencia, distribución y factores determinantes de las enfermedades en poblaciones para orientar medidas de prevención y control."},
  {id:17,block:0, q:"Un vector en epidemiología es:", opts:["El lugar donde vive la bacteria","Un organismo que transmite el agente del reservorio al huésped","El período de incubación de la enfermedad","El ambiente en que se desarrolla la enfermedad"], ans:"Un organismo que transmite el agente del reservorio al huésped", exp:"El vector es un ser vivo (generalmente artrópodo) que transporta y transmite el agente infeccioso. Ej.: el mosquito Anopheles transmite el Plasmodium causante del paludismo."},
  {id:18,block:0, q:"¿Cuál de las siguientes es una medida de prevención terciaria?", opts:["Vacunación","Detección precoz de cáncer","Rehabilitación física post-infarto","Control de vectores"], ans:"Rehabilitación física post-infarto", exp:"La prevención terciaria busca reducir las secuelas y mejorar la calidad de vida cuando la enfermedad ya está establecida. La rehabilitación es su ejemplo clásico."},
  {id:19,block:0, q:"¿Qué se entiende por endemia?", opts:["Una enfermedad que afecta a muchos países al mismo tiempo","La presencia habitual de una enfermedad en una región geográfica específica","Un brote agudo de gran magnitud","Una enfermedad erradicada"], ans:"La presencia habitual de una enfermedad en una región geográfica específica", exp:"Endemia: enfermedad que se mantiene de forma constante en una zona geográfica. Pandemia: afecta varios continentes. Epidemia: aumento inusual de casos en una región."},
  {id:20,block:0, q:"La cadena epidemiológica está formada por:", opts:["Agente, período y tratamiento","Fuente de infección, mecanismo de transmisión y huésped susceptible","Diagnóstico, pronóstico y tratamiento","Síntoma, signo y síndrome"], ans:"Fuente de infección, mecanismo de transmisión y huésped susceptible", exp:"La cadena epidemiológica describe el proceso de transmisión: fuente (reservorio) → mecanismo de transmisión → huésped susceptible. Interrumpirla en cualquier eslabón corta la enfermedad."},
  {id:21,block:1, q:"¿Cuál es la unidad fundamental de la vida y el nivel estructural básico del cuerpo humano?", opts:["Tejido","Célula","Órgano","Molécula"], ans:"Célula", exp:"La célula es la unidad básica de vida. Los niveles de organización son: átomo → molécula → orgánulo → célula → tejido → órgano → sistema → organismo."},
  {id:22,block:1, q:"¿Cuántos pares de nervios craneales tiene el ser humano?", opts:["10","12","14","8"], ans:"12", exp:"Existen 12 pares de nervios craneales (I olfatorio a XII hipogloso) que emergen directamente del encéfalo y controlan funciones sensoriales y motoras de cabeza y cuello."},
  {id:23,block:1, q:"El sistema nervioso central (SNC) está compuesto por:", opts:["Encéfalo y nervios periféricos","Encéfalo y médula espinal","Cerebro y cerebelo","Tallo encefálico y neurona"], ans:"Encéfalo y médula espinal", exp:"El SNC incluye el encéfalo (cerebro, cerebelo y tallo encefálico) y la médula espinal. Los nervios y ganglios fuera del SNC forman el sistema nervioso periférico (SNP)."},
  {id:24,block:1, q:"¿Cuál es la función principal del sistema nervioso autónomo simpático?", opts:["Reposo y digestión","Respuesta 'lucha o huida'","Control voluntario de movimientos","Secreción de insulina"], ans:"Respuesta 'lucha o huida'", exp:"El simpático prepara al organismo ante situaciones de estrés (aumenta FC, dilata bronquios, reduce digestión). El parasimpático promueve el reposo y la digestión ('rest and digest')."},
  {id:25,block:1, q:"¿Qué estructura conecta los dos hemisferios cerebrales?", opts:["Cerebelo","Cuerpo calloso","Tálamo","Hipotálamo"], ans:"Cuerpo calloso", exp:"El cuerpo calloso es la comisura interhemisférica más grande del cerebro, formada por fibras nerviosas que permiten la comunicación entre los hemisferios derecho e izquierdo."},
  {id:26,block:1, q:"¿Cuál lóbulo cerebral es el principal responsable de la visión?", opts:["Frontal","Parietal","Temporal","Occipital"], ans:"Occipital", exp:"El lóbulo occipital alberga la corteza visual primaria (área 17 de Brodmann). El frontal controla funciones ejecutivas y motoras; el parietal, la integración sensorial; el temporal, la audición y memoria."},
  {id:27,block:1, q:"Las neuronas se comunican entre sí a través de:", opts:["Desmosomas","Sinapsis","Plasmodesmos","Uniones estrechas"], ans:"Sinapsis", exp:"La sinapsis es la unión funcional entre neuronas donde se transmite el impulso nervioso, ya sea de forma química (neurotransmisores) o eléctrica (uniones en hendidura)."},
  {id:28,block:1, q:"¿Qué estructura del encéfalo regula el equilibrio y la coordinación motora?", opts:["Cerebro","Cerebelo","Hipotálamo","Bulbo raquídeo"], ans:"Cerebelo", exp:"El cerebelo coordina los movimientos voluntarios y el equilibrio, recibiendo información del córtex motor y de los receptores sensoriales para afinar la actividad muscular."},
  {id:29,block:1, q:"El plano anatómico que divide el cuerpo en mitad derecha e izquierda se denomina:", opts:["Plano coronal","Plano transversal","Plano sagital medio","Plano oblicuo"], ans:"Plano sagital medio", exp:"El plano sagital medio (o plano medial) divide el cuerpo en dos mitades simétricas: derecha e izquierda. El plano coronal lo divide en anterior y posterior; el transversal, en superior e inferior."},
  {id:30,block:1, q:"¿Cuál es la función del hipotálamo?", opts:["Procesar información visual","Regular funciones vitales como temperatura, hambre y sueño","Controlar el equilibrio","Coordinar la lectura y el lenguaje"], ans:"Regular funciones vitales como temperatura, hambre y sueño", exp:"El hipotálamo es el principal centro integrador del sistema nervioso autónomo y neuroendócrino: regula temperatura corporal, apetito, sed, ciclos de sueño-vigilia y libera hormonas liberadoras hacia la hipófisis."},
  {id:31,block:1, q:"¿Qué tipo de neurona transmite el impulso desde los receptores sensoriales hacia el SNC?", opts:["Neurona motora","Neurona internuncial","Neurona sensitiva (aferente)","Neurona eferente"], ans:"Neurona sensitiva (aferente)", exp:"Las neuronas sensitivas o aferentes llevan información sensorial (tacto, dolor, temperatura) desde la periferia al SNC. Las motoras (eferentes) van del SNC a los efectores musculares."},
  {id:32,block:1, q:"La mielina que recubre los axones en el SNP es producida por:", opts:["Astrocitos","Células de Schwann","Oligodendrocitos","Microglía"], ans:"Células de Schwann", exp:"En el SNP, las células de Schwann forman la vaina de mielina alrededor de un solo axón. En el SNC, los oligodendrocitos mielinizan múltiples axones."},
  {id:33,block:1, q:"¿Cuál es el término anatómico para referirse a la región más cercana a la línea media del cuerpo?", opts:["Lateral","Medial","Proximal","Distal"], ans:"Medial", exp:"Medial = hacia la línea media. Lateral = alejado de la línea media. Proximal = cerca del origen de un miembro. Distal = alejado del origen."},
  {id:34,block:1, q:"¿Qué estructura del tallo encefálico controla funciones vitales como la respiración y la frecuencia cardíaca?", opts:["Mesencéfalo","Protuberancia (puente de Varolio)","Bulbo raquídeo","Diencéfalo"], ans:"Bulbo raquídeo", exp:"El bulbo raquídeo (médula oblongada) contiene los centros respiratorio y cardiovascular que regulan automáticamente la respiración, la FC y la presión arterial."},
  {id:35,block:1, q:"¿Cuántas vértebras cervicales tiene la columna vertebral humana?", opts:["5","7","12","4"], ans:"7", exp:"La columna vertebral tiene 33 vértebras: 7 cervicales, 12 torácicas, 5 lumbares, 5 sacras fusionadas y 4 coccígeas fusionadas."},
  {id:36,block:1, q:"El reflejo rotuliano (del tendón patelar) es un ejemplo de:", opts:["Reflejo condicionado","Arco reflejo monosináptico","Arco reflejo polisináptico","Reflejo autonómico"], ans:"Arco reflejo monosináptico", exp:"El reflejo rotuliano tiene una sola sinapsis entre la neurona sensitiva y la motora en la médula espinal, por eso es monosináptico. Es un reflejo de estiramiento muscular."},
  {id:37,block:1, q:"¿Qué lóbulo cerebral alberga la corteza motora primaria?", opts:["Parietal","Occipital","Frontal","Temporal"], ans:"Frontal", exp:"La corteza motora primaria se ubica en la circunvolución precentral del lóbulo frontal y controla los movimientos voluntarios del cuerpo contralateral."},
  {id:38,block:1, q:"¿Cuál es la función del tálamo?", opts:["Producir hormonas sexuales","Actuar como estación de relevo sensorial hacia la corteza","Controlar el ciclo sueño-vigilia únicamente","Producir líquido cefalorraquídeo"], ans:"Actuar como estación de relevo sensorial hacia la corteza", exp:"El tálamo es la principal estación de relevo del SNC: todas las señales sensoriales (excepto el olfato) pasan por él antes de llegar a la corteza cerebral."},
  {id:39,block:1, q:"¿Cuántas capas de meninges envuelven el SNC?", opts:["2","3","4","1"], ans:"3", exp:"Las tres meninges son: duramadre (externa y más resistente), aracnoides (intermedia) y piamadre (interna, adherida al SNC). Entre aracnoides y piamadre circula el líquido cefalorraquídeo."},
  {id:40,block:1, q:"¿Qué parte del sistema nervioso autónomo predomina durante el sueño y la digestión?", opts:["Simpático","Parasimpático","Somático","Sistema entérico exclusivamente"], ans:"Parasimpático", exp:"El parasimpático ('rest and digest') es dominante en reposo: disminuye FC, estimula la digestión y favorece la recuperación. El simpático predomina en situaciones de estrés."},
  {id:41,block:2, q:"¿Cuál glándula endocrina regula principalmente el metabolismo basal del cuerpo?", opts:["Páncreas","Hipófisis","Tiroides","Glándula suprarrenal"], ans:"Tiroides", exp:"La tiroides produce T3 y T4 que regulan el metabolismo basal, el crecimiento y el desarrollo. Su déficit causa hipotiroidismo; su exceso, hipertiroidismo."},
  {id:42,block:2, q:"¿Qué hormona produce el páncreas para bajar la glucosa en sangre?", opts:["Glucagón","Insulina","Cortisol","Adrenalina"], ans:"Insulina", exp:"Las células beta de los islotes de Langerhans producen insulina, que facilita la entrada de glucosa a las células. El glucagón (células alfa) hace lo contrario: eleva la glucemia."},
  {id:43,block:2, q:"¿En qué órgano ocurre la mayor absorción de nutrientes?", opts:["Estómago","Intestino delgado","Intestino grueso","Esófago"], ans:"Intestino delgado", exp:"El intestino delgado (duodeno, yeyuno e íleon) es el principal sitio de absorción gracias a sus vellosidades y microvellosidades (ribete en cepillo) que multiplican la superficie absortiva."},
  {id:44,block:2, q:"¿Cuál es la función principal del sistema inmunológico?", opts:["Transportar oxígeno","Defenderse contra patógenos","Regular la temperatura corporal","Producir hormonas"], ans:"Defenderse contra patógenos", exp:"El sistema inmune protege al organismo mediante: inmunidad innata (respuesta rápida, inespecífica) e inmunidad adaptativa (respuesta específica con linfocitos T y B)."},
  {id:45,block:2, q:"¿Cuál de estos órganos NO es parte del sistema linfático?", opts:["Bazo","Timo","Páncreas","Ganglios linfáticos"], ans:"Páncreas", exp:"El páncreas es glándula mixta (endocrina y exocrina). Los órganos linfáticos primarios son timo y médula ósea; los secundarios incluyen bazo, amígdalas y ganglios linfáticos."},
  {id:46,block:2, q:"¿Qué hormona produce la hipófisis (glándula pituitaria) para estimular el crecimiento?", opts:["TSH","FSH","GH (hormona del crecimiento)","ACTH"], ans:"GH (hormona del crecimiento)", exp:"La GH o somatotropina, producida por la hipófisis anterior, estimula el crecimiento del esqueleto y tejidos blandos. Su déficit en niños causa enanismo; su exceso, gigantismo."},
  {id:47,block:2, q:"¿Cuál es la función principal de la bilis en la digestión?", opts:["Digerir proteínas","Emulsionar las grasas para facilitar su digestión","Absorber vitaminas hidrosolubles","Neutralizar los ácidos gástricos"], ans:"Emulsionar las grasas para facilitar su digestión", exp:"La bilis, producida en el hígado y almacenada en la vesícula biliar, emulsiona los lípidos convirtiéndolos en gotitas pequeñas que las lipasas pancreáticas pueden digerir."},
  {id:48,block:2, q:"¿Qué tipo de inmunidad se adquiere a través de la lactancia materna?", opts:["Inmunidad activa artificial","Inmunidad activa natural","Inmunidad pasiva natural","Inmunidad pasiva artificial"], ans:"Inmunidad pasiva natural", exp:"La leche materna aporta anticuerpos IgA al bebé. Esta inmunidad es pasiva (no genera memoria) y natural (no es inducida por vacuna o suero). La activa requiere producir anticuerpos propios."},
  {id:49,block:2, q:"¿En qué órgano se producen la mayoría de los factores de coagulación?", opts:["Bazo","Riñón","Hígado","Médula ósea"], ans:"Hígado", exp:"El hígado sintetiza la mayoría de las proteínas plasmáticas incluyendo los factores de coagulación (fibrinógeno, protrombina, etc.) y la albúmina."},
  {id:50,block:2, q:"¿Cuál hormona de la corteza suprarrenal regula el metabolismo del sodio y potasio?", opts:["Cortisol","Adrenalina","Aldosterona","Progesterona"], ans:"Aldosterona", exp:"La aldosterona (mineralocorticoide) actúa en el túbulo renal favoreciendo la retención de sodio y la excreción de potasio, regulando la presión arterial y el volumen plasmático."},
  {id:51,block:2, q:"¿Qué células del sistema inmune producen anticuerpos?", opts:["Linfocitos T citotóxicos","Macrófagos","Linfocitos B (células plasmáticas)","Células NK"], ans:"Linfocitos B (células plasmáticas)", exp:"Los linfocitos B, al activarse, se diferencian en células plasmáticas que secretan anticuerpos (inmunoglobulinas) específicos contra un antígeno determinado."},
  {id:52,block:2, q:"¿Cuál es el pH del jugo gástrico?", opts:["6.5 – 7.0","1.5 – 3.5","4.5 – 5.5","7.5 – 8.0"], ans:"1.5 – 3.5", exp:"El ácido clorhídrico (HCl) secretado por las células parietales del estómago mantiene un pH muy ácido (1.5–3.5), que activa el pepsinógeno y destruye la mayoría de los microorganismos ingeridos."},
  {id:53,block:2, q:"¿Cuál es la función de la glándula pineal?", opts:["Regular el calcio","Secretar melatonina y regular el ritmo circadiano","Producir hormona del crecimiento","Secretar insulina"], ans:"Secretar melatonina y regular el ritmo circadiano", exp:"La glándula pineal produce melatonina en respuesta a la oscuridad, regulando el ciclo sueño-vigilia (ritmo circadiano). La producción disminuye con la edad."},
  {id:54,block:2, q:"¿Qué enzima del jugo pancreático se encarga de digerir proteínas?", opts:["Lipasa","Amilasa","Tripsina","Maltasa"], ans:"Tripsina", exp:"La tripsina (secretada como tripsinógeno inactivo) rompe los enlaces peptídicos de las proteínas en el duodeno. La amilasa digiere almidones y la lipasa, grasas."},
  {id:55,block:2, q:"¿Qué estructura del sistema linfático filtra la sangre y destruye eritrocitos viejos?", opts:["Timo","Bazo","Ganglios linfáticos","Amígdalas"], ans:"Bazo", exp:"El bazo tiene dos funciones principales: filtrar sangre (pulpa roja, destruye hematíes y plaquetas viejas) e inmunológica (pulpa blanca, respuesta linfocitaria)."},
  {id:56,block:2, q:"¿Qué glándulas suprarrenales secretan en respuesta al estrés agudo?", opts:["Cortisol y aldosterona","Adrenalina (epinefrina) y noradrenalina","Insulina y glucagón","TSH y T4"], ans:"Adrenalina (epinefrina) y noradrenalina", exp:"La médula suprarrenal secreta catecolaminas (adrenalina y noradrenalina) ante el estrés agudo, generando la respuesta 'lucha o huida'. La corteza secreta cortisol en el estrés crónico."},
  {id:57,block:2, q:"¿Cuál es la principal función del intestino grueso?", opts:["Absorber nutrientes","Absorber agua y compactar las heces","Secretar bilis","Digerir proteínas"], ans:"Absorber agua y compactar las heces", exp:"El intestino grueso (colon) absorbe agua y electrolitos del quimo no digerido, formando y compactando las heces. También alberga la microbiota intestinal."},
  {id:58,block:2, q:"¿Qué son los anticuerpos?", opts:["Células linfocitarias que destruyen virus","Proteínas (inmunoglobulinas) producidas por linfocitos B que neutralizan antígenos","Citocinas proinflamatorias","Enzimas del complemento"], ans:"Proteínas (inmunoglobulinas) producidas por linfocitos B que neutralizan antígenos", exp:"Los anticuerpos o inmunoglobulinas (IgG, IgA, IgM, IgE, IgD) son proteínas en forma de Y producidas por células plasmáticas que reconocen y neutralizan antígenos específicos."},
  {id:59,block:2, q:"¿Cuál hormona regula los niveles de calcio en sangre elevándolos cuando están bajos?", opts:["Calcitonina","Hormona paratiroidea (PTH)","Vitamina D inactiva","Aldosterona"], ans:"Hormona paratiroidea (PTH)", exp:"La PTH, secretada por las glándulas paratiroides, eleva la calcemia: estimula la resorción ósea, la reabsorción renal de calcio y la activación de vitamina D. La calcitonina hace lo opuesto."},
  {id:60,block:2, q:"¿Cuál es la función del timo en el sistema inmune?", opts:["Producir glóbulos rojos","Maduración de linfocitos T","Almacenar linfocitos B","Filtrar la linfa en los ganglios"], ans:"Maduración de linfocitos T", exp:"El timo es el órgano linfático primario donde los linfocitos T inmaduros (timocitos) maduran y aprenden a distinguir lo propio de lo ajeno, siendo crucial en la infancia."},
  {id:61,block:3, q:"¿Cuál es la capa más externa de la piel?", opts:["Dermis","Hipodermis","Epidermis","Fascia"], ans:"Epidermis", exp:"La epidermis es la capa superficial avascular de la piel, compuesta principalmente por queratinocitos. Protege al organismo de la pérdida de agua y del ingreso de patógenos."},
  {id:62,block:3, q:"¿Cuál es la función principal de la piel?", opts:["Producir hormonas","Actuar como barrera protectora y regular la temperatura","Filtrar la sangre","Producir células sanguíneas"], ans:"Actuar como barrera protectora y regular la temperatura", exp:"La piel protege contra agentes externos, regula la temperatura (sudoración, vasodilatación), previene la pérdida de agua y participa en la síntesis de vitamina D."},
  {id:63,block:3, q:"¿Cuál de las siguientes es una función del esqueleto óseo?", opts:["Producción de enzimas digestivas","Producción de células sanguíneas (hematopoyesis)","Almacenamiento exclusivo de grasa","Síntesis de vitamina C"], ans:"Producción de células sanguíneas (hematopoyesis)", exp:"La médula ósea roja produce eritrocitos, leucocitos y plaquetas (hematopoyesis). El esqueleto también brinda soporte mecánico, protección de órganos y reserva de calcio y fósforo."},
  {id:64,block:3, q:"¿Cuántos huesos tiene el cuerpo humano adulto?", opts:["206","256","180","300"], ans:"206", exp:"El adulto tiene 206 huesos. Al nacer son ~270 ya que algunos se fusionan durante el crecimiento (ej. sacro, cóccix, cráneo)."},
  {id:65,block:3, q:"¿Qué tipo de músculo es involuntario y forma las paredes de los órganos internos?", opts:["Músculo esquelético","Músculo cardíaco","Músculo liso","Músculo estriado voluntario"], ans:"Músculo liso", exp:"El músculo liso (visceral) es involuntario y no estriado. Forma las paredes de órganos huecos (estómago, intestino, vejiga, vasos). Es controlado por el SNA."},
  {id:66,block:3, q:"¿Cuál capa de la piel contiene vasos sanguíneos, folículos pilosos y glándulas?", opts:["Epidermis","Dermis","Hipodermis","Capa córnea"], ans:"Dermis", exp:"La dermis es la capa media de la piel (tejido conectivo denso). Contiene vasos sanguíneos, nervios, folículos pilosos, glándulas sebáceas y sudoríparas."},
  {id:67,block:3, q:"¿Qué tipo de articulación permite el mayor rango de movimiento?", opts:["Articulación fibrosa (sinartrosis)","Articulación cartilaginosa","Articulación sinovial (diartrosis)","Articulación en bisagra"], ans:"Articulación sinovial (diartrosis)", exp:"Las articulaciones sinoviales (diartrosis) tienen cavidad sinovial con líquido lubricante y permiten gran amplitud de movimiento. Ej.: hombro, cadera, rodilla."},
  {id:68,block:3, q:"¿Qué pigmento le da el color a la piel y protege contra la radiación UV?", opts:["Queratina","Melanina","Hemoglobina","Colágeno"], ans:"Melanina", exp:"La melanina es producida por los melanocitos en la capa basal de la epidermis. Absorbe la radiación UV, protegiendo al ADN de las células subyacentes."},
  {id:69,block:3, q:"¿Cuál es la unidad funcional del músculo esquelético?", opts:["Miofibrilla","Sarcómero","Filamento de actina","Fibra muscular"], ans:"Sarcómero", exp:"El sarcómero es la unidad contráctil del músculo estriado, delimitada por líneas Z. Contiene filamentos gruesos de miosina y delgados de actina que se deslizan durante la contracción."},
  {id:70,block:3, q:"¿Qué mineral es el más abundante en el hueso y le da dureza?", opts:["Hierro","Magnesio","Calcio (fosfato cálcico)","Zinc"], ans:"Calcio (fosfato cálcico)", exp:"El hueso está compuesto principalmente por fosfato de calcio (hidroxiapatita), que le confiere dureza y rigidez. La matriz orgánica de colágeno le da flexibilidad y resistencia a la fractura."},
  {id:71,block:3, q:"¿Qué glándula cutánea produce sebo para lubricar el pelo y la piel?", opts:["Glándula sudorípara écrina","Glándula sudorípara apocrina","Glándula sebácea","Glándula mamaria"], ans:"Glándula sebácea", exp:"Las glándulas sebáceas producen sebo (mezcla de lípidos) que lubrica el cabello y la piel y tiene propiedades antimicrobianas. Se asocian generalmente a los folículos pilosos."},
  {id:72,block:3, q:"¿Cuál es la proteína estructural más abundante en la dermis que le da elasticidad?", opts:["Miosina","Actina","Colágeno","Queratina"], ans:"Colágeno", exp:"El colágeno es la proteína más abundante del cuerpo humano. En la dermis proporciona resistencia mecánica. La elastina le da elasticidad. Con el envejecimiento disminuye su producción."},
  {id:73,block:3, q:"¿Qué estructura une el músculo al hueso?", opts:["Ligamento","Tendón","Cartílago","Fascia"], ans:"Tendón", exp:"Los tendones son estructuras de tejido conectivo denso que unen el músculo al hueso, transmitiendo la fuerza contráctil. Los ligamentos unen hueso con hueso."},
  {id:74,block:3, q:"¿Cuál es la función de los osteoclastos?", opts:["Formar hueso nuevo","Reabsorber tejido óseo","Producir colágeno","Almacenar calcio en el hueso"], ans:"Reabsorber tejido óseo", exp:"Los osteoclastos son células multinucleadas que reabsorben (destruyen) tejido óseo para liberar calcio y remodelar el hueso. Los osteoblastos lo forman y los osteocitos lo mantienen."},
  {id:75,block:3, q:"¿Qué vitamina es esencial para la absorción de calcio y se sintetiza en la piel con luz solar?", opts:["Vitamina A","Vitamina C","Vitamina D","Vitamina K"], ans:"Vitamina D", exp:"La vitamina D se sintetiza en la piel a partir del 7-dehidrocolesterol bajo la acción de la radiación UV. Su forma activa (calcitriol) es esencial para la absorción intestinal de calcio."},
  {id:76,block:3, q:"¿Cuál de los siguientes huesos pertenece al esqueleto apendicular?", opts:["Vértebra lumbar","Esternón","Costilla","Fémur"], ans:"Fémur", exp:"El esqueleto apendicular incluye las extremidades superiores e inferiores y sus cinturas (escapular y pélvica). El esqueleto axial incluye cráneo, columna vertebral, esternón y costillas."},
  {id:77,block:3, q:"¿Qué proceso permite la contracción muscular según el modelo del deslizamiento de filamentos?", opts:["Los filamentos de actina y miosina se rompen","La miosina jala la actina hacia el centro del sarcómero acortándolo","El músculo aumenta la cantidad de sarcómeros","Los filamentos de actina se estiran"], ans:"La miosina jala la actina hacia el centro del sarcómero acortándolo", exp:"Según el modelo del deslizamiento, las cabezas de miosina forman puentes cruzados con la actina y la desplazan hacia el centro del sarcómero, acortándolo. Requiere ATP y calcio."},
  {id:78,block:3, q:"¿Qué estructura actúa como amortiguador entre los huesos de las articulaciones?", opts:["Tendón","Ligamento","Cartílago articular","Periostio"], ans:"Cartílago articular", exp:"El cartílago articular (hialino) cubre los extremos de los huesos en las articulaciones sinoviales, reduciendo la fricción y absorbiendo los impactos. Su deterioro causa osteoartritis."},
  {id:79,block:3, q:"¿Qué capas conforman el sistema tegumentario?", opts:["Epidermis, dermis e hipodermis","Dermis, fascia y músculo","Endodermis y ectodermis","Solo epidermis y dermis"], ans:"Epidermis, dermis e hipodermis", exp:"El sistema tegumentario se compone de: epidermis (capa externa), dermis (capa media vascularizada) e hipodermis (capa profunda de tejido adiposo y conectivo laxo)."},
  {id:80,block:3, q:"¿Cuál es la función de las uñas?", opts:["Producir queratina para la piel","Proteger los extremos distales de los dedos y facilitar la presión fina","Regular la temperatura corporal","Sintetizar vitamina D"], ans:"Proteger los extremos distales de los dedos y facilitar la presión fina", exp:"Las uñas, formadas por queratina dura, protegen los pulpejos de los dedos y facilitan la manipulación de objetos pequeños (presión de pinza). Son apéndices cutáneos del sistema tegumentario."},
  {id:81,block:4, q:"¿Qué vasos sanguíneos transportan sangre desde el corazón hacia los tejidos del cuerpo?", opts:["Venas","Capilares","Arterias","Linfáticos"], ans:"Arterias", exp:"Las arterias transportan sangre del corazón a los tejidos. Excepción: las arterias pulmonares llevan sangre desoxigenada del ventrículo derecho a los pulmones."},
  {id:82,block:4, q:"¿En qué estructura del sistema respiratorio ocurre el intercambio gaseoso?", opts:["Tráquea","Bronquios","Alvéolos","Laringe"], ans:"Alvéolos", exp:"Los alvéolos son sacos microscópicos rodeados de capilares donde ocurre la hematosis: O₂ pasa a la sangre y CO₂ pasa al aire. Su enorme superficie (~70 m²) optimiza el intercambio."},
  {id:83,block:4, q:"¿Cuál es el músculo principal de la respiración?", opts:["Intercostales","Diafragma","Pectoral mayor","Escalenos"], ans:"Diafragma", exp:"El diafragma es una cúpula muscular que separa tórax de abdomen y realiza ~75% del trabajo ventilatorio. Al contraerse, desciende y aumenta el volumen torácico, generando la inspiración."},
  {id:84,block:4, q:"¿Cuántas cámaras tiene el corazón humano?", opts:["2","3","4","6"], ans:"4", exp:"El corazón tiene 4 cámaras: 2 aurículas (reciben sangre) y 2 ventrículos (bombean sangre). El septo las separa en lado derecho (circulación pulmonar) e izquierdo (circulación sistémica)."},
  {id:85,block:4, q:"¿Qué válvula se ubica entre la aurícula izquierda y el ventrículo izquierdo?", opts:["Válvula tricúspide","Válvula pulmonar","Válvula mitral (bicúspide)","Válvula aórtica"], ans:"Válvula mitral (bicúspide)", exp:"La válvula mitral o bicúspide (2 valvas) separa la aurícula izquierda del ventrículo izquierdo, impidiendo el reflujo durante la sístole. La tricúspide está en el lado derecho."},
  {id:86,block:4, q:"¿Cuál es la función principal de los eritrocitos (glóbulos rojos)?", opts:["Defensa contra infecciones","Transporte de oxígeno mediante hemoglobina","Coagulación de la sangre","Producción de anticuerpos"], ans:"Transporte de oxígeno mediante hemoglobina", exp:"Los eritrocitos contienen hemoglobina, que se une reversiblemente al O₂ en los pulmones y lo libera en los tejidos. Carecen de núcleo y mitocondrias para maximizar el espacio para hemoglobina."},
  {id:87,block:4, q:"¿Qué parte del sistema de conducción cardíaco establece el ritmo del corazón?", opts:["Nodo AV","Haz de His","Nodo SA (nodo sinusal)","Fibras de Purkinje"], ans:"Nodo SA (nodo sinusal)", exp:"El nodo sinoauricular (SA) es el marcapasos natural del corazón, ubicado en la aurícula derecha. Genera ~60–100 impulsos/min. Si falla, el nodo AV toma el control a menor frecuencia."},
  {id:88,block:4, q:"¿Cuál es la ruta de la sangre en la circulación pulmonar?", opts:["Ventrículo izquierdo → aorta → pulmones → venas pulmonares","Ventrículo derecho → arterias pulmonares → pulmones → venas pulmonares → aurícula izquierda","Aurícula derecha → arteria aorta → pulmones","Ventrículo derecho → venas cavas → pulmones"], ans:"Ventrículo derecho → arterias pulmonares → pulmones → venas pulmonares → aurícula izquierda", exp:"La circulación pulmonar (menor) lleva sangre desoxigenada del corazón derecho a los pulmones para oxigenarse y retorna a la aurícula izquierda. La sistémica distribuye sangre oxigenada al resto del cuerpo."},
  {id:89,block:4, q:"¿Qué componente de la sangre es responsable de la coagulación?", opts:["Eritrocitos","Leucocitos","Plaquetas (trombocitos)","Plasma"], ans:"Plaquetas (trombocitos)", exp:"Las plaquetas son fragmentos celulares (sin núcleo) que se agregan en el sitio de la lesión vascular y, junto con los factores de coagulación, forman el coágulo de fibrina para detener el sangrado."},
  {id:90,block:4, q:"¿Qué estructura divide las fosas nasales y forma la pared del tabique nasal?", opts:["Cornetes","Tabique nasal (septo)","Laringe","Epiglotis"], ans:"Tabique nasal (septo)", exp:"El tabique nasal divide la cavidad nasal en dos fosas. Está formado por el cartílago septal y los huesos vómer y lámina perpendicular del etmoides."},
  {id:91,block:4, q:"¿Qué presión se mide cuando el corazón se contrae (sístole)?", opts:["Presión diastólica","Presión sistólica","Presión venosa central","Presión de pulso"], ans:"Presión sistólica", exp:"La presión sistólica (~120 mmHg en adulto sano) es la presión máxima ejercida sobre las paredes arteriales durante la contracción ventricular. La diastólica (~80 mmHg) se mide en la relajación."},
  {id:92,block:4, q:"¿Cuál gas se elimina del cuerpo durante la espiración?", opts:["Oxígeno (O₂)","Nitrógeno","Dióxido de carbono (CO₂)","Vapor de agua exclusivamente"], ans:"Dióxido de carbono (CO₂)", exp:"Durante la espiración se elimina principalmente CO₂, producto del metabolismo celular. El aire espirado contiene ~4% de CO₂ frente al 0.04% del aire ambiental."},
  {id:93,block:4, q:"¿Cuál arteria es la principal del cuerpo y sale del ventrículo izquierdo?", opts:["Arteria pulmonar","Arteria carótida","Aorta","Arteria femoral"], ans:"Aorta", exp:"La aorta es el vaso sanguíneo más grande del cuerpo. Sale del ventrículo izquierdo, forma el cayado aórtico y desciende distribuyendo sangre oxigenada a todo el organismo."},
  {id:94,block:4, q:"¿Qué células de la sangre forman parte de la defensa inmunitaria?", opts:["Eritrocitos","Leucocitos (glóbulos blancos)","Plaquetas","Fibrinógeno"], ans:"Leucocitos (glóbulos blancos)", exp:"Los leucocitos (neutrófilos, linfocitos, monocitos, eosinófilos, basófilos) son las células inmunes de la sangre. Los neutrófilos son los primeros en llegar a un foco infeccioso."},
  {id:95,block:4, q:"¿Cuál estructura impide que los alimentos entren a la tráquea durante la deglución?", opts:["Faringe","Úvula","Epiglotis","Cuerdas vocales"], ans:"Epiglotis", exp:"La epiglotis es un cartílago en forma de hoja que cierra la glotis (entrada de la laringe) durante la deglución, dirigiendo los alimentos hacia el esófago y no hacia la tráquea."},
  {id:96,block:4, q:"¿Qué capa del corazón es la más externa y está en contacto con el pericardio?", opts:["Endocardio","Miocardio","Epicardio","Pericardio fibroso"], ans:"Epicardio", exp:"El corazón tiene 3 capas: epicardio (externa, hoja visceral del pericardio), miocardio (músculo cardíaco, la capa más gruesa) y endocardio (interna, tapiza las cavidades)."},
  {id:97,block:4, q:"¿Cuál es la capacidad pulmonar total aproximada en un adulto sano?", opts:["1 litro","3 litros","6 litros","10 litros"], ans:"6 litros", exp:"La capacidad pulmonar total (CPT) es ~6 L en adultos. El volumen corriente (respiración normal) es ~0.5 L; la capacidad vital forzada (CVF) ~4.5–5 L. Varía con sexo, talla y condición física."},
  {id:98,block:4, q:"¿Cuál es la principal proteína transportadora de oxígeno en la sangre?", opts:["Albúmina","Hemoglobina","Fibrinógeno","Globulina"], ans:"Hemoglobina", exp:"La hemoglobina (Hb) es una proteína tetramérica de los eritrocitos que contiene hierro (grupo hemo) y transporta el 98% del O₂ de la sangre. Su saturación se mide con el oxímetro de pulso."},
  {id:99,block:4, q:"¿Cuál es el término para la contracción del músculo cardíaco que bombea sangre?", opts:["Diástole","Sístole","Precarga","Poscarga"], ans:"Sístole", exp:"La sístole es la fase de contracción ventricular que eyecta sangre hacia la aorta (lado izquierdo) y la arteria pulmonar (lado derecho). La diástole es la fase de relajación y llenado."},
  {id:100,block:4, q:"¿Qué músculo liso en las paredes de las arterias controla el calibre vascular?", opts:["Músculo cardíaco","Músculo esquelético","Músculo liso vascular","Músculo intercostal"], ans:"Músculo liso vascular", exp:"El músculo liso de la túnica media arterial regula el diámetro del vaso (vasoconstricción o vasodilatación), controlando la resistencia periférica y por tanto la presión arterial."},
  {id:101,block:5, q:"¿Cuál es la función principal de los riñones?", opts:["Producir orina únicamente","Filtración de la sangre y regulación del equilibrio electrolítico","Almacenar orina","Absorción pasiva de agua"], ans:"Filtración de la sangre y regulación del equilibrio electrolítico", exp:"Los riñones filtran ~180 L de plasma al día, regulan el balance hídrico y electrolítico, eliminan desechos metabólicos, producen eritropoyetina y participan en la regulación de la PA."},
  {id:102,block:5, q:"¿En qué órgano ocurre la implantación del óvulo fecundado?", opts:["Ovario","Trompa de Falopio","Útero","Vagina"], ans:"Útero", exp:"El blastocisto se implanta en el endometrio uterino alrededor del 7.° día post-fecundación. Si la implantación ocurre en la trompa, es un embarazo ectópico."},
  {id:103,block:5, q:"¿Cuál estructura produce los espermatozoides?", opts:["Próstata","Testículos","Vesículas seminales","Epidídimo"], ans:"Testículos", exp:"Los testículos realizan la espermatogénesis en los túbulos seminíferos y producen testosterona (células de Leydig). El epidídimo almacena y madura los espermatozoides."},
  {id:104,block:5, q:"¿Cuál es la unidad funcional del riñón?", opts:["Glomérulo","Túbulo proximal","Nefrona","Cáliz renal"], ans:"Nefrona", exp:"La nefrona es la unidad anatómica y funcional del riñón. Cada riñón tiene ~1 millón de nefronas. Cada nefrona incluye glomérulo, cápsula de Bowman y sistema tubular."},
  {id:105,block:5, q:"¿Qué hormona produce el riñón para estimular la producción de eritrocitos?", opts:["Aldosterona","Renina","Eritropoyetina","ADH"], ans:"Eritropoyetina", exp:"La eritropoyetina (EPO) es una glicoproteína producida por el riñón en respuesta a la hipoxia. Estimula la médula ósea para producir más eritrocitos y es empleada ilegalmente como doping."},
  {id:106,block:5, q:"¿Cuál es la ruta que sigue la orina desde su formación hasta su excreción?", opts:["Riñón → uretra → vejiga → uréteres","Riñón → uréteres → vejiga → uretra","Vejiga → uréteres → riñón → uretra","Riñón → vejiga → uréteres → uretra"], ans:"Riñón → uréteres → vejiga → uretra", exp:"La orina se forma en la nefrona, pasa a los cálices y pelvis renal, desciende por los uréteres hasta la vejiga urinaria, donde se almacena hasta ser excretada por la uretra."},
  {id:107,block:5, q:"¿Qué glándula masculina produce el líquido que forma la mayor parte del volumen del semen?", opts:["Testículos","Próstata","Vesículas seminales","Glándulas de Cowper"], ans:"Vesículas seminales", exp:"Las vesículas seminales aportan ~60% del volumen del eyaculado, rico en fructosa (energía para los espermatozoides). La próstata añade ~30% y alcaliniza el semen para protegerlo en la acidez vaginal."},
  {id:108,block:5, q:"¿Cuál es la función de la hormona ADH (vasopresina)?", opts:["Aumentar la producción de orina","Reducir la reabsorción de agua en los túbulos renales","Estimular la reabsorción de agua en los túbulos renales para concentrar la orina","Regular el ciclo menstrual"], ans:"Estimular la reabsorción de agua en los túbulos renales para concentrar la orina", exp:"La ADH, liberada por la hipófisis posterior, aumenta la permeabilidad de los túbulos colectores al agua, favoreciendo su reabsorción y concentrando la orina. Su déficit causa diabetes insípida."},
  {id:109,block:5, q:"¿En qué parte del aparato reproductor femenino ocurre la fecundación normalmente?", opts:["Útero","Vagina","Tercio externo de la trompa de Falopio","Ovario"], ans:"Tercio externo de la trompa de Falopio", exp:"La fecundación ocurre habitualmente en el tercio externo (ampolla) de la trompa uterina, donde el espermatozoide alcanza al óvulo tras la ovulación. Después el cigoto migra al útero."},
  {id:110,block:5, q:"¿Cuál hormona femenina es dominante en la primera mitad del ciclo menstrual y estimula el crecimiento endometrial?", opts:["Progesterona","Estrógeno","LH","FSH"], ans:"Estrógeno", exp:"El estrógeno domina la fase folicular (primera mitad), estimulando la proliferación del endometrio y el desarrollo del folículo ovárico. La progesterona domina la fase lútea (segunda mitad)."},
  {id:111,block:5, q:"¿Cuál es la longitud aproximada de la uretra masculina?", opts:["3–5 cm","18–20 cm","10–12 cm","1–2 cm"], ans:"18–20 cm", exp:"La uretra masculina mide ~18–20 cm y tiene función doble (urinaria y reproductora). La femenina mide solo ~3–5 cm, lo que explica la mayor incidencia de infecciones urinarias en mujeres."},
  {id:112,block:5, q:"¿Qué proceso en el riñón implica el paso de agua y solutos desde la sangre hacia la cápsula de Bowman?", opts:["Reabsorción tubular","Secreción tubular","Filtración glomerular","Excreción"], ans:"Filtración glomerular", exp:"La filtración glomerular es el primer paso de la formación de orina: la presión hidrostática en el glomérulo fuerza agua, iones y moléculas pequeñas hacia la cápsula de Bowman formando el ultrafiltrado."},
  {id:113,block:5, q:"¿Cuál es el nombre del proceso por el que el óvulo es liberado del ovario?", opts:["Menstruación","Ovulación","Fecundación","Implantación"], ans:"Ovulación", exp:"La ovulación ocurre ~día 14 del ciclo (28 días), desencadenada por el pico de LH. El folículo maduro (de Graaf) se rompe y libera el óvulo secundario hacia la trompa."},
  {id:114,block:5, q:"¿Cuál estructura retiene la orina hasta que se decide orinar voluntariamente?", opts:["Uréteres","Pelvis renal","Vejiga urinaria","Uretra"], ans:"Vejiga urinaria", exp:"La vejiga urinaria es un órgano muscular hueco (músculo detrusor) que almacena la orina. Cuando su volumen supera ~300 mL, se activa el reflejo miccional; el esfínter uretral externo permite el control voluntario."},
  {id:115,block:5, q:"¿Cuántos cromosomas contiene un espermatozoide o un óvulo humano?", opts:["46","23","48","22"], ans:"23", exp:"Los gametos (espermatozoide y óvulo) son células haploides con 23 cromosomas (n). Al fusionarse forman el cigoto con 46 cromosomas (2n), el número diploide de la especie humana."},
  {id:116,block:5, q:"¿Cuál hormona del eje hipotálamo-hipófisis estimula la ovulación?", opts:["GnRH","FSH","LH","Progesterona"], ans:"LH", exp:"El pico de LH (hormona luteinizante) en la mitad del ciclo (~día 14) desencadena la ovulación y estimula la formación del cuerpo lúteo, que produce progesterona para preparar el endometrio."},
  {id:117,block:5, q:"¿Cuál es la función del cuerpo lúteo tras la ovulación?", opts:["Producir estrógenos para proliferar el endometrio","Secretar progesterona para mantener el endometrio en caso de embarazo","Estimular la ovulación del siguiente ciclo","Producir FSH"], ans:"Secretar progesterona para mantener el endometrio en caso de embarazo", exp:"El cuerpo lúteo, formado por el folículo roto, produce progesterona y estrógenos. Si no hay embarazo, involuciona (~día 28) y desencadena la menstruación. Si hay embarazo, la hCG mantiene el cuerpo lúteo."},
  {id:118,block:5, q:"¿Qué nombre recibe el producto de la fecundación antes de que se implante?", opts:["Embrión","Feto","Cigoto / blastocisto","Mórula"], ans:"Cigoto / blastocisto", exp:"Tras la fecundación se forma el cigoto (célula diploide). Después de divisiones mitóticas pasa por mórula y llega al útero como blastocisto (~día 5–6), momento en que se implanta en el endometrio."},
  {id:119,block:5, q:"¿Cuál es la función de la testosterona en el hombre adulto?", opts:["Estimular la producción de óvulos","Mantener los caracteres sexuales secundarios masculinos y la espermatogénesis","Regular el ciclo menstrual","Producir anticuerpos"], ans:"Mantener los caracteres sexuales secundarios masculinos y la espermatogénesis", exp:"La testosterona (producida por las células de Leydig) es la hormona sexual masculina principal. Estimula la espermatogénesis, el crecimiento muscular, la distribución del vello y la libido."},
  {id:120,block:5, q:"Un virus ingresa al cuerpo. ¿Qué sistema responde primero para defenderse?", opts:["Sistema endocrino","Sistema cardiovascular","Sistema inmunológico","Sistema nervioso periférico"], ans:"Sistema inmunológico", exp:"El sistema inmunológico activa la respuesta innata (macrófagos, células NK, interferones) de forma inmediata e inespecífica en horas. La respuesta adaptativa (linfocitos T y B) actúa días después con mayor especificidad."}
];

export default function PremedianBiologia() {
  const [mode, setMode]           = useState("menu");
  const [examMode, setExamMode]   = useState(null);
  const [queue, setQueue]         = useState([]);
  const [current, setCurrent]     = useState(0);
  const [answers, setAnswers]     = useState({});
  const [confirmed, setConfirmed] = useState(false);
  const [selected, setSelected]   = useState(null);
  const [timeLeft, setTimeLeft]   = useState(0);
  const [timerOn, setTimerOn]     = useState(false);
  const [filter, setFilter]       = useState("all");

  useEffect(() => {
    if (!timerOn || timeLeft <= 0) return;
    const t = setInterval(() => setTimeLeft(p => p - 1), 1000);
    return () => clearInterval(t);
  }, [timerOn, timeLeft]);

  useEffect(() => {
    if (timeLeft <= 0 && timerOn) { setTimerOn(false); setMode("results"); }
  }, [timeLeft, timerOn]);

  const startExam = (modeKey) => {
    let qs;
    if (modeKey === "all") { qs = shuffle(questions); }
    else {
      const idx = parseInt(modeKey.replace("block-",""), 10);
      qs = shuffle(questions.filter(q => q.block === idx));
    }
    qs = qs.map(q => ({ ...q, opts: shuffle(q.opts) }));
    setQueue(qs); setAnswers({}); setCurrent(0); setSelected(null);
    setConfirmed(false); setTimeLeft(qs.length * 30); setTimerOn(true);
    setExamMode(modeKey); setMode("exam");
  };

  const confirmAnswer = () => {
    if (!selected) return;
    setAnswers(p => ({ ...p, [queue[current].id]: selected }));
    setConfirmed(true);
  };

  const goNext = () => {
    if (current < queue.length - 1) {
      const nid = queue[current + 1].id;
      setCurrent(c => c + 1);
      setSelected(answers[nid] || null);
      setConfirmed(!!answers[nid]);
    } else { setTimerOn(false); setMode("results"); }
  };

  const score = Object.entries(answers).reduce((acc, [id, ans]) => {
    const q = questions.find(q => q.id === Number(id));
    return acc + (q?.ans === ans ? 1 : 0);
  }, 0);

  const timerWarning = timeLeft < 60;
  const CSS = `@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}::-webkit-scrollbar{width:5px;background:#0e0f11}::-webkit-scrollbar-thumb{background:#252830;border-radius:99px}`;

  // ── MENÚ ──────────────────────────────────────────────────────────────────
  if (mode === "menu") {
    const totalQ = questions.length;
    return (
      <div style={{minHeight:"100vh",background:C.bg,paddingBottom:64}}>
        <style>{CSS}</style>
        <div style={{background:C.surface,borderBottom:`1px solid ${C.border}`,padding:"44px 24px 36px",textAlign:"center",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",inset:0,opacity:0.03,backgroundImage:`radial-gradient(${C.crimson} 1px,transparent 1px)`,backgroundSize:"36px 36px"}}/>
          <div style={{position:"relative"}}>
            <span style={{display:"inline-block",background:C.crimson+"22",color:C.crimson,borderRadius:99,padding:"3px 14px",fontSize:11,fontWeight:700,letterSpacing:2,textTransform:"uppercase",marginBottom:16,fontFamily:"'DM Sans',sans-serif"}}>
              FactoRizando · Biología · EXANI-II
            </span>
            <h1 style={{fontSize:"clamp(20px,4vw,34px)",fontWeight:700,color:C.text,letterSpacing:"-1.5px",lineHeight:1.1,marginBottom:10,fontFamily:"'DM Sans',sans-serif"}}>
              Salud Pública y Medicina Comunitaria · <span style={{color:C.crimson}}>Anatomía y fisiología</span>
            </h1>
            <p style={{color:C.muted,fontSize:14,maxWidth:540,margin:"0 auto 24px",fontFamily:"'DM Sans',sans-serif"}}>
              {totalQ} reactivos · 6 bloques temáticos · Simulador EXANI-II · 30 s por reactivo
            </p>
            <div style={{display:"flex",justifyContent:"center",gap:40,flexWrap:"wrap"}}>
              {[{label:"Reactivos",val:totalQ},{label:"Bloques",val:6},{label:"Tiempo completo",val:`${Math.round(totalQ*0.5)} min`}].map(s=>(
                <div key={s.label} style={{textAlign:"center"}}>
                  <div style={{fontSize:22,fontWeight:900,color:C.text,letterSpacing:"-1px",fontFamily:"'DM Sans',sans-serif"}}>{s.val}</div>
                  <div style={{fontSize:10,color:C.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:1.5,fontFamily:"'DM Sans',sans-serif"}}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{maxWidth:760,margin:"0 auto",padding:"32px 16px"}}>
          <p style={{color:C.muted,fontSize:11,fontWeight:700,letterSpacing:2,textTransform:"uppercase",marginBottom:12,fontFamily:"'DM Sans',sans-serif"}}>Examen completo</p>
          <button onClick={()=>startExam("all")} style={{width:"100%",background:C.surface,border:`1px solid ${C.border}`,borderRadius:14,padding:"22px 16px",cursor:"pointer",textAlign:"center",marginBottom:28,fontFamily:"'DM Sans',sans-serif",transition:"all 0.2s"}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor=C.crimson;e.currentTarget.style.background=C.crimson+"11";}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor=C.border;e.currentTarget.style.background=C.surface;}}>
            <div style={{fontSize:26,marginBottom:6}}>📋</div>
            <div style={{color:C.text,fontWeight:700,fontSize:15}}>Todos los reactivos</div>
            <div style={{color:C.muted,fontSize:12,marginTop:4}}>{totalQ} reactivos · {Math.round(totalQ*0.5)} min</div>
          </button>

          <p style={{color:C.muted,fontSize:11,fontWeight:700,letterSpacing:2,textTransform:"uppercase",marginBottom:12,fontFamily:"'DM Sans',sans-serif"}}>O elige un bloque</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:10}}>
            {BLOCKS.map((bl,i)=>{
              const count=bl.range[1]-bl.range[0]+1;
              return(
                <button key={i} onClick={()=>startExam(`block-${i}`)} style={{background:C.surface,border:`1px solid ${bl.color}44`,borderRadius:12,padding:"16px 14px",cursor:"pointer",textAlign:"left",fontFamily:"'DM Sans',sans-serif",transition:"all 0.2s"}}
                  onMouseEnter={e=>{e.currentTarget.style.background=bl.color+"18";e.currentTarget.style.borderColor=bl.color;}}
                  onMouseLeave={e=>{e.currentTarget.style.background=C.surface;e.currentTarget.style.borderColor=bl.color+"44";}}>
                  <div style={{color:bl.color,fontWeight:700,fontSize:12,lineHeight:1.35,fontFamily:"'DM Sans',sans-serif",marginBottom:6}}>{bl.label}</div>
                  <div style={{color:C.muted,fontSize:11}}>{count} reactivos · {Math.round(count*0.5)} min</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ── RESULTADOS ────────────────────────────────────────────────────────────
  if (mode === "results") {
    const total=queue.length, pct=total>0?Math.round((score/total)*100):0;
    const col=pct>=80?C.teal:pct>=60?C.gold:C.crimson;
    const msg=pct>=90?"¡Excelente! Dominio sólido del temario.":pct>=75?"¡Muy bien! Repasa los temas que fallaste.":pct>=50?"Sigue practicando, vas bien.":"Necesitas reforzar el temario.";
    const displayQs=filter==="correct"?queue.filter(q=>answers[q.id]===q.ans):filter==="wrong"?queue.filter(q=>answers[q.id]&&answers[q.id]!==q.ans):queue;
    return(
      <div style={{minHeight:"100vh",background:C.bg,paddingBottom:64}}>
        <style>{CSS}</style>
        <div style={{maxWidth:760,margin:"0 auto",padding:"32px 16px"}}>
          <div style={{display:"flex",gap:12,marginBottom:24,flexWrap:"wrap"}}>
            <button onClick={()=>setMode("menu")} style={{background:C.surface,color:C.dim,border:`1px solid ${C.border}`,borderRadius:12,padding:"12px 28px",fontSize:14,fontWeight:600,fontFamily:"'DM Sans',sans-serif",cursor:"pointer"}}>← Menú</button>
            <button onClick={()=>startExam(examMode)} style={{background:`linear-gradient(135deg,${C.crimson},${C.purple})`,color:"#fff",border:"none",borderRadius:12,padding:"12px 28px",fontSize:14,fontWeight:700,fontFamily:"'DM Sans',sans-serif",cursor:"pointer"}}>↺ Repetir</button>
          </div>
          <div style={{background:C.surface,border:`2px solid ${col}`,borderRadius:18,padding:"30px 36px",textAlign:"center",maxWidth:380,margin:"0 auto 32px",fontFamily:"'DM Sans',sans-serif"}}>
            <div style={{fontSize:58,fontWeight:900,color:col,letterSpacing:"-3px",lineHeight:1}}>{pct}%</div>
            <div style={{color:C.dim,fontSize:14,marginTop:8}}><span style={{color:C.text,fontWeight:700}}>{score}</span> de {total} correctas</div>
            <div style={{color:col,fontWeight:700,fontSize:15,marginTop:10}}>{msg}</div>
          </div>
          <div style={{display:"flex",gap:8,marginBottom:20,flexWrap:"wrap"}}>
            {[["all","Todas"],["correct",`✓ Correctas (${score})`],["wrong",`✗ Incorrectas (${total-score})`]].map(([f,label])=>(
              <button key={f} onClick={()=>setFilter(f)} style={{padding:"6px 14px",borderRadius:99,fontSize:12,fontWeight:700,cursor:"pointer",border:"none",background:filter===f?C.crimson:C.surface,color:filter===f?"#fff":C.muted,fontFamily:"'DM Sans',sans-serif"}}>{label}</button>
            ))}
          </div>
          {displayQs.map(q=>{
            const bl=getBlock(q.id),sel=answers[q.id];
            return(
              <div key={q.id} style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:14,padding:"20px 24px",marginBottom:12}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                  <span style={{background:bl.color+"1a",color:bl.color,borderRadius:6,padding:"2px 10px",fontSize:10,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",fontFamily:"'DM Sans',sans-serif"}}>{bl.label}</span>
                  <span style={{marginLeft:"auto",color:C.muted,fontSize:12,fontFamily:"'DM Sans',sans-serif"}}>#{q.id}</span>
                </div>
                <p style={{color:C.text,fontSize:14,fontWeight:600,marginBottom:10,lineHeight:1.6,fontFamily:"'DM Sans',sans-serif"}}>{q.q}</p>
                <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:10}}>
                  {q.opts.map(opt=>{
                    const isOk=opt===q.ans,isUser=opt===sel;
                    let bg=C.bg,bd=`1px solid ${C.border}`,co=C.dim;
                    if(isOk){bg=C.teal+"22";bd=`1px solid ${C.teal}`;co=C.teal;}
                    else if(isUser&&!isOk){bg=C.crimson+"22";bd=`1px solid ${C.crimson}`;co=C.crimson;}
                    return <div key={opt} style={{background:bg,border:bd,color:co,borderRadius:8,padding:"8px 12px",fontSize:13,fontFamily:"'DM Sans',sans-serif",lineHeight:1.5}}>{isOk?"✓ ":""}{isUser&&!isOk?"✗ ":""}{opt}</div>;
                  })}
                </div>
                <div style={{padding:"8px 12px",background:bl.color+"0e",borderRadius:8,border:`1px solid ${bl.color}22`}}>
                  <span style={{color:bl.color,fontSize:11,fontWeight:700,fontFamily:"'DM Sans',sans-serif"}}>💡 </span>
                  <span style={{color:C.dim,fontSize:12,fontFamily:"'DM Sans',sans-serif"}}>{q.exp}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ── EXAMEN ────────────────────────────────────────────────────────────────
  const q=queue[current],bl=getBlock(q.id),prog=((current+1)/queue.length)*100,answered=Object.keys(answers).length;
  return(
    <div style={{minHeight:"100vh",background:C.bg,paddingBottom:64}}>
      <style>{CSS}</style>
      <div style={{maxWidth:760,margin:"0 auto",padding:"24px 16px"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16,flexWrap:"wrap",gap:8}}>
          <div style={{fontFamily:"'DM Sans',sans-serif"}}>
            <span style={{color:C.muted,fontSize:13}}>Reactivo </span>
            <span style={{color:C.text,fontWeight:700}}>{current+1}</span>
            <span style={{color:C.muted}}> / {queue.length}</span>
            <span style={{color:C.muted,fontSize:12,marginLeft:10}}>({answered} respondidos)</span>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <span style={{fontSize:13,fontWeight:700,color:timerWarning?C.crimson:bl.color,background:timerWarning?C.crimson+"18":bl.color+"18",padding:"5px 12px",borderRadius:20,border:`1px solid ${timerWarning?C.crimson:bl.color}55`,fontFamily:"'DM Sans',sans-serif"}}>⏱ {fmt(timeLeft)}</span>
            <button onClick={()=>{setTimerOn(false);setMode("results");}} style={{padding:"5px 12px",background:C.crimson+"18",color:C.crimson,border:`1px solid ${C.crimson}44`,borderRadius:20,cursor:"pointer",fontSize:12,fontFamily:"'DM Sans',sans-serif"}}>Terminar</button>
          </div>
        </div>
        <div style={{background:C.border,borderRadius:99,height:4,overflow:"hidden",marginBottom:20}}>
          <div style={{height:"100%",width:`${prog}%`,background:`linear-gradient(90deg,${bl.color},${C.purple})`,transition:"width 0.3s",borderRadius:99}}/>
        </div>
        <div style={{marginBottom:12}}>
          <span style={{background:bl.color+"1a",color:bl.color,borderRadius:6,padding:"2px 10px",fontSize:10,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",fontFamily:"'DM Sans',sans-serif"}}>{bl.label}</span>
          <span style={{marginLeft:10,color:C.muted,fontSize:12,fontFamily:"'DM Sans',sans-serif"}}>#{q.id} / {questions.length}</span>
        </div>
        <div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:14,padding:"22px 26px",marginBottom:16}}>
          <p style={{color:C.text,fontSize:"clamp(14px,2.5vw,17px)",fontWeight:600,lineHeight:1.7,fontFamily:"'DM Sans',sans-serif",margin:0}}>{q.q}</p>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:20}}>
          {q.opts.map(opt=>{
            const isSel=selected===opt,isOk=opt===q.ans;
            let bg=C.bg,bd=`1px solid ${C.border}`,co=C.dim;
            if(confirmed&&isSel&&isOk){bg=C.teal+"22";bd=`1px solid ${C.teal}`;co=C.teal;}
            else if(confirmed&&isSel){bg=C.crimson+"22";bd=`1px solid ${C.crimson}`;co=C.crimson;}
            else if(confirmed&&isOk){bg=C.teal+"0e";bd=`1px solid ${C.teal}55`;co=C.teal+"aa";}
            else if(isSel){bg=bl.color+"18";bd=`1px solid ${bl.color}`;co=bl.color;}
            return(
              <button key={opt} onClick={()=>!confirmed&&setSelected(opt)} style={{background:bg,border:bd,color:co,borderRadius:9,padding:"12px 16px",fontSize:14,fontWeight:500,cursor:confirmed?"default":"pointer",textAlign:"left",transition:"all 0.15s",outline:"none",fontFamily:"'DM Sans',sans-serif",lineHeight:1.5}}>
                {confirmed&&isOk?"✓ ":""}{confirmed&&isSel&&!isOk?"✗ ":""}{opt}
              </button>
            );
          })}
        </div>
        {confirmed&&(
          <div style={{background:bl.color+"0e",border:`1px solid ${bl.color}22`,borderRadius:10,padding:"12px 16px",marginBottom:16}}>
            <span style={{color:bl.color,fontSize:12,fontWeight:700,fontFamily:"'DM Sans',sans-serif"}}>💡 </span>
            <span style={{color:C.dim,fontSize:13,fontFamily:"'DM Sans',sans-serif"}}>{q.exp}</span>
          </div>
        )}
        <div style={{display:"flex",gap:10,justifyContent:"space-between",alignItems:"center"}}>
          <button onClick={()=>{if(current>0){const pid=queue[current-1].id;setCurrent(c=>c-1);setSelected(answers[pid]||null);setConfirmed(!!answers[pid]);}}} disabled={current===0} style={{padding:"10px 20px",background:C.surface,color:C.muted,border:`1px solid ${C.border}`,borderRadius:10,cursor:current===0?"not-allowed":"pointer",opacity:current===0?0.4:1,fontSize:14,fontFamily:"'DM Sans',sans-serif"}}>← Anterior</button>
          {!confirmed?(
            <button onClick={confirmAnswer} disabled={!selected} style={{padding:"10px 28px",fontSize:14,fontWeight:700,background:selected?`linear-gradient(135deg,${bl.color},${C.purple})`:C.surface,color:selected?"#fff":C.muted,border:"none",borderRadius:10,cursor:selected?"pointer":"not-allowed",boxShadow:selected?`0 4px 20px ${bl.color}33`:"none",fontFamily:"'DM Sans',sans-serif",transition:"all 0.2s"}}>Confirmar respuesta</button>
          ):(
            <button onClick={goNext} style={{padding:"10px 28px",fontSize:14,fontWeight:700,background:`linear-gradient(135deg,${bl.color},${C.purple})`,color:"#fff",border:"none",borderRadius:10,cursor:"pointer",boxShadow:`0 4px 20px ${bl.color}33`,fontFamily:"'DM Sans',sans-serif"}}>
              {current===queue.length-1?"Ver resultados →":"Siguiente →"}
            </button>
          )}
        </div>
        <div style={{marginTop:24,background:C.surface,borderRadius:12,padding:16,border:`1px solid ${C.border}`}}>
          <p style={{color:C.muted,fontSize:11,marginBottom:10,textTransform:"uppercase",letterSpacing:1,fontFamily:"'DM Sans',sans-serif"}}>Navegador de reactivos</p>
          <div style={{display:"flex",flexWrap:"wrap",gap:4}}>
            {queue.map((fq,i)=>{
              const fbl=getBlock(fq.id),a=answers[fq.id],isCurr=i===current;
              let bg=C.surface,co=C.muted,bdr=`1px solid ${C.border}`;
              if(isCurr){bg=fbl.color;co="#fff";bdr=`2px solid ${fbl.color}`;}
              else if(a===fq.ans){bg=C.teal+"33";co=C.teal;}
              else if(a){bg=C.crimson+"33";co=C.crimson;}
              return <button key={fq.id} onClick={()=>{setCurrent(i);setSelected(answers[fq.id]||null);setConfirmed(!!answers[fq.id]);}} style={{width:26,height:26,borderRadius:5,background:bg,color:co,border:bdr,cursor:"pointer",fontSize:10,fontWeight:isCurr?700:400,fontFamily:"'DM Sans',sans-serif"}}>{i+1}</button>;
            })}
          </div>
          <div style={{display:"flex",gap:14,marginTop:10,flexWrap:"wrap"}}>
            {[[C.teal+"33",C.teal,"Correcta"],[C.crimson+"33",C.crimson,"Incorrecta"],[C.surface,C.muted,"Sin contestar"]].map(([bg,co,label])=>(
              <div key={label} style={{display:"flex",alignItems:"center",gap:5}}>
                <div style={{width:11,height:11,borderRadius:3,background:bg,border:`1px solid ${co}`}}/>
                <span style={{color:C.muted,fontSize:11,fontFamily:"'DM Sans',sans-serif"}}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
