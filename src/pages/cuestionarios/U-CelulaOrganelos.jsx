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

const questions = [
  // ── BLOQUE 0: Membrana y Pared Celular (1–15) ─────────────────────────────
  { id: 1,  block: 0, q: "Modelo estructural de la membrana celular aceptado actualmente, propuesto por Singer y Nicolson en 1972:", opts: ["Modelo de sándwich", "Modelo del mosaico fluido", "Modelo de la doble hélice", "Modelo de la bicapa estática"], ans: "Modelo del mosaico fluido", exp: "El modelo del mosaico fluido describe a la membrana como una estructura dinámica donde lípidos y proteínas se mueven lateralmente." },
  { id: 2,  block: 0, q: "Lípidos anfipáticos más abundantes que forman la estructura básica de la membrana plasmática:", opts: ["Triglicéridos", "Esteroides", "Fosfolípidos", "Glucolípidos"], ans: "Fosfolípidos", exp: "Los fosfolípidos forman una bicapa debido a su cabeza hidrofílica y sus colas hidrofóbicas." },
  { id: 3,  block: 0, q: "Componente lipídico exclusivo de células animales que regula la fluidez de la membrana plasmática:", opts: ["Ergosterol", "Colesterol", "Celulosa", "Quitina"], ans: "Colesterol", exp: "El colesterol se intercala entre los fosfolípidos, evitando que la membrana se vuelva demasiado rígida o muy fluida." },
  { id: 4,  block: 0, q: "Proteínas de membrana que atraviesan completamente la bicapa lipídica, actuando como canales o transportadores:", opts: ["Proteínas periféricas", "Proteínas integrales (transmembranales)", "Glucoproteínas externas", "Lipoproteínas"], ans: "Proteínas integrales (transmembranales)", exp: "Las proteínas integrales cruzan la membrana y son esenciales para el transporte de moléculas que no pueden difundir libremente." },
  { id: 5,  block: 0, q: "Tipo de transporte celular que ocurre a favor del gradiente de concentración y no requiere gasto de ATP:", opts: ["Transporte pasivo", "Transporte activo", "Exocitosis", "Bomba de sodio-potasio"], ans: "Transporte pasivo", exp: "El transporte pasivo (difusión simple o facilitada) se da de mayor a menor concentración sin usar energía." },
  { id: 6,  block: 0, q: "Mecanismo de difusión facilitada especializado en el transporte rápido de agua a través de la membrana:", opts: ["Pinocitosis", "Fagocitosis", "Ósmosis mediante acuaporinas", "Bomba iónica"], ans: "Ósmosis mediante acuaporinas", exp: "Las acuaporinas son proteínas canal especializadas en permitir el paso masivo de agua por ósmosis." },
  { id: 7,  block: 0, q: "Proceso mediante el cual la célula invagina su membrana para introducir partículas sólidas de gran tamaño (ej. una bacteria):", opts: ["Exocitosis", "Pinocitosis", "Fagocitosis", "Plasmólisis"], ans: "Fagocitosis", exp: "La fagocitosis ('célula comiendo') es un tipo de endocitosis para partículas sólidas, típico en glóbulos blancos." },
  { id: 8,  block: 0, q: "Estructura formada por carbohidratos en la cara externa de la membrana, crucial para el reconocimiento celular e inmunológico:", opts: ["Pared celular", "Cápsula bacteriana", "Glucocálix", "Citoesqueleto"], ans: "Glucocálix", exp: "El glucocálix, formado por glucoproteínas y glucolípidos, funciona como 'huella dactilar' de la célula animal." },
  { id: 9,  block: 0, q: "La bomba de sodio-potasio es un ejemplo clásico de:", opts: ["Difusión facilitada", "Ósmosis", "Transporte activo primario", "Transporte pasivo"], ans: "Transporte activo primario", exp: "Gasta ATP para mover 3 iones Na⁺ hacia afuera y 2 K⁺ hacia adentro, contra su gradiente de concentración." },
  { id: 10, block: 0, q: "Cuando un eritrocito se coloca en una solución hipertónica, el agua sale de la célula causando:", opts: ["Turgencia", "Crenación (deshidratación)", "Hemólisis (estallido)", "Plasmólisis"], ans: "Crenación (deshidratación)", exp: "En medio hipertónico, la célula animal pierde agua y se encoge (crenación)." },
  { id: 11, block: 0, q: "Estructura rígida exterior a la membrana plasmática que brinda soporte y protección mecánica, ausente en células animales:", opts: ["Glucocálix", "Citoesqueleto", "Pared celular", "Cápsula proteica"], ans: "Pared celular", exp: "La pared celular protege a plantas, hongos y bacterias de la lisis osmótica." },
  { id: 12, block: 0, q: "Polisacárido estructural que compone principalmente la pared celular de los organismos del reino Plantae:", opts: ["Quitina", "Peptidoglicano", "Glucógeno", "Celulosa"], ans: "Celulosa", exp: "La celulosa es un polímero de glucosa muy resistente, base de la madera y fibras vegetales." },
  { id: 13, block: 0, q: "La pared celular de los hongos verdaderos (Fungi) está constituida químicamente por:", opts: ["Celulosa", "Quitina", "Peptidoglicano", "Sílice"], ans: "Quitina", exp: "La quitina, que también forma el exoesqueleto de artrópodos, es la base de la pared fúngica." },
  { id: 14, block: 0, q: "Macromolécula que forma la pared celular bacteriana y es el blanco de acción de antibióticos como la penicilina:", opts: ["Lignina", "Quitina", "Peptidoglicano (Mureína)", "Celulosa"], ans: "Peptidoglicano (Mureína)", exp: "El peptidoglicano es exclusivo de procariotas; la penicilina inhibe su síntesis, destruyendo la bacteria." },
  { id: 15, block: 0, q: "Canales diminutos que atraviesan las paredes celulares vegetales, conectando el citoplasma de células adyacentes:", opts: ["Desmosomas", "Plasmodesmos", "Uniones gap", "Poros nucleares"], ans: "Plasmodesmos", exp: "Los plasmodesmos permiten la comunicación intercelular y el paso de savia, agua y nutrientes en plantas." },

  // ── BLOQUE 1: Citoplasma y Núcleo (16–30) ─────────────────────────────────
  { id: 16, block: 1, q: "Medio acuoso de consistencia gelatinosa que se encuentra entre la membrana plasmática y el núcleo:", opts: ["Nucleoplasma", "Citosol (hialoplasma)", "Matriz mitocondrial", "Estroma"], ans: "Citosol (hialoplasma)", exp: "El citosol es la fracción líquida del citoplasma donde flotan los organelos y ocurren reacciones enzimáticas." },
  { id: 17, block: 1, q: "Ruta metabólica anaerobia fundamental que se lleva a cabo exclusivamente en el citoplasma de todas las células:", opts: ["Ciclo de Krebs", "Cadena respiratoria", "Glucólisis", "Ciclo de Calvin"], ans: "Glucólisis", exp: "La glucólisis (ruptura de la glucosa en piruvato) ocurre en el citosol y no requiere oxígeno." },
  { id: 18, block: 1, q: "Corriente o movimiento circulatorio del citoplasma en células vegetales que facilita la distribución de nutrientes y organelos:", opts: ["Movimiento ameboide", "Plasmólisis", "Ciclosis", "Diapédesis"], ans: "Ciclosis", exp: "La ciclosis es impulsada por el citoesqueleto y es muy visible al observar cloroplastos bajo el microscopio." },
  { id: 19, block: 1, q: "El citoplasma eucariota, a diferencia del procariota, se caracteriza por presentar:", opts: ["Ausencia de ribosomas", "ADN circular disperso", "Compartimentalización mediante organelos membranosos", "Cápsula protectora"], ans: "Compartimentalización mediante organelos membranosos", exp: "La principal diferencia es que el citoplasma eucariota está subdividido por organelos con membranas específicas." },
  { id: 20, block: 1, q: "Estado coloidal del citoplasma celular responsable de su viscosidad variable (transición sol-gel):", opts: ["Fase acuosa pura", "Suspensión coloidal rica en proteínas", "Solución cristalina salina", "Emulsión lipídica total"], ans: "Suspensión coloidal rica en proteínas", exp: "Las abundantes proteínas disueltas otorgan al citoplasma su característica consistencia de gel o sol fluido." },
  { id: 21, block: 1, q: "Organelo más prominente de la célula eucariota, encargado de almacenar y proteger el material genético (ADN):", opts: ["Nucleoide", "Núcleo", "Aparato de Golgi", "Centrosoma"], ans: "Núcleo", exp: "El núcleo es el centro de control celular, exclusivo de las células eucariotas." },
  { id: 22, block: 1, q: "Estructura que delimita al núcleo, formada por una doble membrana lipídica continua con el Retículo Endoplásmico:", opts: ["Membrana plasmática", "Envoltura nuclear (Carioteca)", "Tonoplasto", "Mesosoma"], ans: "Envoltura nuclear (Carioteca)", exp: "La envoltura nuclear o carioteca aísla el ADN del citoplasma, pero permite el intercambio controlado." },
  { id: 23, block: 1, q: "Estructuras en la carioteca que regulan el paso de moléculas (como el ARNm) entre el núcleo y el citoplasma:", opts: ["Receptores de membrana", "Poros nucleares", "Plasmodesmos", "Bombas de protones"], ans: "Poros nucleares", exp: "El complejo del poro nuclear filtra qué proteínas entran al núcleo y permite la salida del ARN mensajero." },
  { id: 24, block: 1, q: "Cuerpo esférico denso dentro del núcleo, carente de membrana, donde se sintetiza el ARN ribosomal:", opts: ["Cromosoma", "Centrómero", "Nucleolo", "Nucleosoma"], ans: "Nucleolo", exp: "El nucleolo es la 'fábrica' de las subunidades ribosomales que luego se ensamblarán en el citoplasma." },
  { id: 25, block: 1, q: "Estado del ADN durante la interfase celular, donde se encuentra desenrollado y asociado a proteínas:", opts: ["Cromosoma", "Cromatina", "Plásmido", "Cromátida hermana"], ans: "Cromatina", exp: "La cromatina es la forma laxa del ADN, necesaria para que las enzimas puedan transcribir los genes." },
  { id: 26, block: 1, q: "Proteínas básicas de carga positiva alrededor de las cuales se enrolla el ADN para formar nucleosomas:", opts: ["Albúminas", "Actinas", "Histonas", "Colágenas"], ans: "Histonas", exp: "Las histonas actúan como carretes donde se enrolla el ADN, facilitando su empaquetamiento extremo." },
  { id: 27, block: 1, q: "Tipo de cromatina altamente condensada que es transcripcionalmente inactiva (sus genes no se expresan):", opts: ["Eucromatina", "Heterocromatina", "Cromosoma homólogo", "ARN mensajero"], ans: "Heterocromatina", exp: "La heterocromatina está tan compactada que las enzimas no pueden acceder a ella para leerla." },
  { id: 28, block: 1, q: "Tipo de cromatina laxa o dispersa donde ocurre activamente la transcripción de genes:", opts: ["Heterocromatina", "Eucromatina", "Cinetocoro", "Telómero"], ans: "Eucromatina", exp: "La eucromatina es la porción funcional que la célula está utilizando para sintetizar proteínas." },
  { id: 29, block: 1, q: "Líquido viscoso contenido dentro del núcleo que rodea a la cromatina y al nucleolo:", opts: ["Estroma", "Citosol", "Nucleoplasma (Cariolinfa)", "Lumen"], ans: "Nucleoplasma (Cariolinfa)", exp: "El nucleoplasma es la matriz acuosa del núcleo, rica en nucleótidos y enzimas para la replicación del ADN." },
  { id: 30, block: 1, q: "¿Qué sucede con la envoltura nuclear al inicio de la división celular (Profase)?", opts: ["Se duplica en grosor", "Se fragmenta y desaparece temporalmente", "Se fusiona con la membrana plasmática", "Se convierte en retículo liso"], ans: "Se fragmenta y desaparece temporalmente", exp: "La carioteca debe desintegrarse para que los microtúbulos del huso alcancen a los cromosomas." },

  // ── BLOQUE 2: Orgánulos de Síntesis: Ribosomas, RER, REL, Golgi (31–62) ──
  { id: 31, block: 2, q: "Estructuras celulares sin membrana responsables de la síntesis de proteínas en todas las células:", opts: ["Lisosomas", "Ribosomas", "Peroxisomas", "Centriolos"], ans: "Ribosomas", exp: "Los ribosomas, formados por ARNr y proteínas, son universales (presentes en procariotas y eucariotas)." },
  { id: 32, block: 2, q: "Proceso biológico central que es catalizado por los ribosomas:", opts: ["Transcripción", "Replicación", "Traducción", "Glucólisis"], ans: "Traducción", exp: "Los ribosomas 'traducen' el mensaje del ARNm en una cadena de aminoácidos (proteína)." },
  { id: 33, block: 2, q: "Coeficiente de sedimentación de los ribosomas maduros en células eucariotas:", opts: ["70S", "80S", "50S", "30S"], ans: "80S", exp: "En eucariotas son 80S (subunidades 60S y 40S). En procariotas son más pequeños (70S)." },
  { id: 34, block: 2, q: "Ubicación de los ribosomas encargados de sintetizar proteínas que se quedarán en el citosol (ej. enzimas glucolíticas):", opts: ["Adheridos al RER", "Dentro de la vacuola", "Libres en el citoplasma", "Dentro del aparato de Golgi"], ans: "Libres en el citoplasma", exp: "Los ribosomas libres sintetizan proteínas de uso interno citoplasmático." },
  { id: 35, block: 2, q: "Lugar donde se ensamblan inicialmente las subunidades mayor y menor del ribosoma en eucariotas:", opts: ["Citoplasma", "Aparato de Golgi", "Nucleolo", "Lisosoma"], ans: "Nucleolo", exp: "El nucleolo es la región nuclear especializada en producir los componentes ribosomales." },
  { id: 36, block: 2, q: "El ribosoma 70S bacteriano está compuesto por dos subunidades cuyos valores son:", opts: ["60S y 40S", "50S y 30S", "40S y 30S", "80S y 10S"], ans: "50S y 30S", exp: "Las subunidades 50S (mayor) y 30S (menor) forman el ribosoma bacteriano de 70S, blanco de muchos antibióticos." },
  { id: 37, block: 2, q: "Estructura formada cuando múltiples ribosomas leen simultáneamente una misma molécula de ARNm:", opts: ["Nucleosoma", "Polirribosoma o polisoma", "Aparato de Golgi", "Dictiosoma"], ans: "Polirribosoma o polisoma", exp: "Los polisomas permiten sintetizar muchas copias de la misma proteína en muy poco tiempo." },
  { id: 38, block: 2, q: "¿Qué otros organelos eucariotas poseen sus propios ribosomas (tipo 70S)?", opts: ["Lisosomas y peroxisomas", "Mitocondrias y cloroplastos", "Vacuolas y complejo de Golgi", "Centriolos y cilios"], ans: "Mitocondrias y cloroplastos", exp: "Evidencia clave de la teoría endosimbiótica: mitocondrias y cloroplastos tienen ribosomas bacterianos propios." },
  { id: 39, block: 2, q: "Red de canales membranosos interconectados cuya superficie exterior está tapizada de ribosomas:", opts: ["Aparato de Golgi", "Retículo Endoplásmico Liso (REL)", "Retículo Endoplásmico Rugoso (RER)", "Citoesqueleto"], ans: "Retículo Endoplásmico Rugoso (RER)", exp: "Los ribosomas le confieren el aspecto 'rugoso' bajo el microscopio electrónico." },
  { id: 40, block: 2, q: "Función principal del Retículo Endoplásmico Rugoso (RER):", opts: ["Síntesis de proteínas de secreción, membrana y lisosomales", "Detoxificación de venenos", "Producción de energía", "Síntesis de esteroides"], ans: "Síntesis de proteínas de secreción, membrana y lisosomales", exp: "El RER sintetiza proteínas que serán exportadas, insertadas en membrana o enviadas a los lisosomas." },
  { id: 41, block: 2, q: "El RER es estructuralmente una continuación directa de:", opts: ["La membrana plasmática", "La membrana externa de la envoltura nuclear", "El tonoplasto", "La pared celular"], ans: "La membrana externa de la envoltura nuclear", exp: "Esta continuidad facilita que el ARN mensajero salga del núcleo directo hacia los ribosomas del RER." },
  { id: 42, block: 2, q: "Células del cuerpo humano con RER extremadamente desarrollado por su alta tasa de secreción proteica:", opts: ["Eritrocitos (glóbulos rojos)", "Adipocitos", "Células plasmáticas (productoras de anticuerpos)", "Osteocitos"], ans: "Células plasmáticas (productoras de anticuerpos)", exp: "Las células que secretan grandes cantidades de proteínas, como anticuerpos u hormonas, tienen abundante RER." },
  { id: 43, block: 2, q: "Proceso de modificación postraduccional que inicia en el lumen del RER:", opts: ["Fosforilación oxidativa", "N-Glucosilación (añadir carbohidratos a las proteínas)", "Replicación", "Beta-oxidación"], ans: "N-Glucosilación (añadir carbohidratos a las proteínas)", exp: "En el RER se agregan oligosacáridos a las proteínas recién formadas, iniciando su maduración." },
  { id: 44, block: 2, q: "¿Qué sucede con una proteína mal plegada dentro del lumen del RER?", opts: ["Se secreta inmediatamente", "Se envía al núcleo", "Es marcada para ser degradada en el proteasoma", "Se convierte en lípido"], ans: "Es marcada para ser degradada en el proteasoma", exp: "Existe un control de calidad celular estricto que destruye proteínas defectuosas para evitar enfermedades." },
  { id: 45, block: 2, q: "Espacio interior hueco de los sacos y túbulos del Retículo Endoplásmico:", opts: ["Matriz", "Estroma", "Lumen o luz", "Citosol"], ans: "Lumen o luz", exp: "El lumen es donde las proteínas recién sintetizadas caen para ser modificadas y empaquetadas." },
  { id: 46, block: 2, q: "Las proteínas producidas en el RER viajan hacia su siguiente destino (el Golgi) empacadas en:", opts: ["Vesículas de transición", "Lisosomas", "Cloroplastos", "Vacuolas centrales"], ans: "Vesículas de transición", exp: "Pequeñas esferas de membrana (vesículas) brotan del RER llevando las proteínas hacia el Aparato de Golgi." },
  { id: 47, block: 2, q: "Características morfológicas distintivas del Retículo Endoplásmico Liso (REL):", opts: ["Posee ribosomas y forma cisternas aplanadas", "Carece de ribosomas y está formado por una red de túbulos ramificados", "Es una estructura sólida sin lumen", "Contiene enzimas digestivas ácidas"], ans: "Carece de ribosomas y está formado por una red de túbulos ramificados", exp: "El REL no tiene ribosomas (por eso es 'liso') y su forma es predominantemente tubular." },
  { id: 48, block: 2, q: "Función metabólica principal del Retículo Endoplásmico Liso (REL):", opts: ["Traducción de proteínas", "Síntesis de carbohidratos complejos", "Síntesis de lípidos (fosfolípidos y esteroides)", "Respiración celular"], ans: "Síntesis de lípidos (fosfolípidos y esteroides)", exp: "El REL es la fábrica de lípidos de la célula, vital para crear nuevas membranas y hormonas sexuales." },
  { id: 49, block: 2, q: "Función del REL sumamente importante en los hepatocitos (células del hígado):", opts: ["Detoxificación de fármacos, alcohol y toxinas", "Producción de bilis", "Contracción muscular", "Síntesis de anticuerpos"], ans: "Detoxificación de fármacos, alcohol y toxinas", exp: "El REL hepático contiene enzimas (como el citocromo P450) que hacen a los fármacos hidrosolubles para su excreción." },
  { id: 50, block: 2, q: "En las células musculares estriadas, el REL recibe el nombre de Retículo Sarcoplásmico y su función vital es:", opts: ["Producir ácido láctico", "Almacenar y liberar iones de Ca²⁺ para la contracción", "Digerir glucógeno", "Producir miosina"], ans: "Almacenar y liberar iones de Ca²⁺ para la contracción", exp: "La liberación repentina de calcio desde el retículo sarcoplásmico dispara la contracción del músculo." },
  { id: 51, block: 2, q: "Células donde se espera encontrar gran abundancia de REL debido a su producción de hormonas esteroideas:", opts: ["Neuronas", "Glóbulos blancos", "Células de Leydig (testículos) y corteza suprarrenal", "Células epidérmicas"], ans: "Células de Leydig (testículos) y corteza suprarrenal", exp: "Como el REL sintetiza esteroides, abunda en glándulas productoras de testosterona, estrógenos y cortisol." },
  { id: 52, block: 2, q: "Enzima presente en el REL hepático que participa en la glucogenólisis para liberar glucosa a la sangre:", opts: ["Glucosa-6-fosfatasa", "Amilasa", "Catalasa", "Hexoquinasa"], ans: "Glucosa-6-fosfatasa", exp: "Esta enzima quita el fosfato a la glucosa permitiéndole salir de la célula hepática hacia la sangre." },
  { id: 53, block: 2, q: "El consumo crónico de barbitúricos o alcohol provoca que en las células del hígado:", opts: ["Se destruya el RER", "El REL prolifere (aumente de tamaño) desarrollando tolerancia", "Las mitocondrias exploten", "El núcleo se duplique"], ans: "El REL prolifere (aumente de tamaño) desarrollando tolerancia", exp: "El REL se hipertrofia para intentar procesar el exceso de toxinas, lo que explica la tolerancia a ciertas drogas." },
  { id: 54, block: 2, q: "¿Qué relación existe entre el REL y la membrana plasmática?", opts: ["Ninguna, son independientes", "El REL sintetiza los fosfolípidos que reparan y renuevan la membrana celular", "La membrana plasmática produce al REL", "Ambos poseen ribosomas"], ans: "El REL sintetiza los fosfolípidos que reparan y renuevan la membrana celular", exp: "Todos los lípidos que componen las membranas de la célula nacen inicialmente en el REL." },
  { id: 55, block: 2, q: "Estructura celular conformada por una serie de sacos membranosos aplanados y apilados llamados dictiosomas:", opts: ["Complejo o Aparato de Golgi", "Retículo Endoplásmico", "Citoesqueleto", "Mitocondria"], ans: "Complejo o Aparato de Golgi", exp: "El Golgi se observa como una pila de 'platos' aplastados rodeados de vesículas." },
  { id: 56, block: 2, q: "Analógicamente, el Aparato de Golgi funciona como:", opts: ["La central eléctrica de la célula", "La biblioteca genética", "La oficina de correos (recibe, modifica, empaqueta y distribuye)", "El camión de basura"], ans: "La oficina de correos (recibe, modifica, empaqueta y distribuye)", exp: "Clasifica y dirige proteínas y lípidos del RE hacia su destino final (intra o extracelular)." },
  { id: 57, block: 2, q: "Cara del Aparato de Golgi de forma convexa que se orienta hacia el Retículo Endoplásmico para recibir sus vesículas:", opts: ["Cara trans", "Cara cis (formadora)", "Cara lateral", "Lumen terminal"], ans: "Cara cis (formadora)", exp: "Las vesículas recién llegadas del RE se fusionan con la cara 'cis' (de entrada) del Golgi." },
  { id: 58, block: 2, q: "Cara del Aparato de Golgi desde donde brotan las vesículas secretoras maduras listas para exocitosis:", opts: ["Cara cis", "Cara medial", "Cara trans (madurativa)", "Dictiosoma base"], ans: "Cara trans (madurativa)", exp: "La cara 'trans' apunta hacia la membrana plasmática y es la estación de salida del organelo." },
  { id: 59, block: 2, q: "Organelos celulares destructivos que son originados y empaquetados directamente por el Aparato de Golgi:", opts: ["Ribosomas", "Lisosomas primarios", "Mitocondrias", "Cloroplastos"], ans: "Lisosomas primarios", exp: "El Golgi empaqueta enzimas hidrolíticas (previamente hechas en el RER) en vesículas que se convierten en lisosomas." },
  { id: 60, block: 2, q: "Proceso químico importante que culmina en el Complejo de Golgi, dándole a las proteínas su 'etiqueta de destino':", opts: ["Fosforilación oxidativa", "Glucosilación terminal", "Traducción", "Replicación del ADN"], ans: "Glucosilación terminal", exp: "El Golgi modifica los carbohidratos unidos a las proteínas (glucosilación), lo que actúa como un código postal molecular." },
  { id: 61, block: 2, q: "En las células vegetales, el Aparato de Golgi tiene una función crucial durante la división celular:", opts: ["Formar el huso acromático", "Destruir el núcleo viejo", "Sintetizar los polisacáridos para formar la nueva pared celular (fragmoplasto)", "Realizar la fotosíntesis"], ans: "Sintetizar los polisacáridos para formar la nueva pared celular (fragmoplasto)", exp: "Las vesículas del Golgi se fusionan en el ecuador de la célula para construir la pared que separará a las células hijas." },
  { id: 62, block: 2, q: "Célula animal en la que el Aparato de Golgi origina la vesícula llamada 'acrosoma', vital para la fecundación:", opts: ["Óvulo", "Espermatozoide", "Neurona", "Macrófago"], ans: "Espermatozoide", exp: "El acrosoma es un gran lisosoma modificado por el Golgi en la cabeza del espermatozoide, necesario para perforar el óvulo." },

  // ── BLOQUE 3: Mitocondria, Lisosomas y Peroxisomas (63–86) ────────────────
  { id: 63, block: 3, q: "Organelo conocido como la 'central energética' de la célula, responsable de producir la mayor parte del ATP:", opts: ["Cloroplasto", "Nucleolo", "Mitocondria", "Ribosoma"], ans: "Mitocondria", exp: "A través de la respiración celular aerobia, la mitocondria oxida metabolitos para generar energía química (ATP)." },
  { id: 64, block: 3, q: "Organización estructural básica de las membranas mitocondriales:", opts: ["Una sola membrana gruesa", "Doble membrana (externa lisa e interna plegada)", "Triple membrana de peptidoglicano", "Carente de membrana verdadera"], ans: "Doble membrana (externa lisa e interna plegada)", exp: "Posee una membrana externa permeable y una interna altamente selectiva con pliegues." },
  { id: 65, block: 3, q: "Nombre que reciben los pliegues de la membrana mitocondrial interna que aumentan la superficie para la producción de ATP:", opts: ["Tilacoides", "Cisternas", "Crestas mitocondriales", "Grana"], ans: "Crestas mitocondriales", exp: "Las crestas alojan los complejos de la cadena de transporte de electrones y la enzima ATP-sintasa." },
  { id: 66, block: 3, q: "Compartimento central acuoso de la mitocondria donde se llevan a cabo las reacciones del Ciclo de Krebs:", opts: ["Estroma", "Espacio intermembrana", "Matriz mitocondrial", "Lumen"], ans: "Matriz mitocondrial", exp: "La matriz contiene las enzimas del ciclo de Krebs, así como ADN y ribosomas." },
  { id: 67, block: 3, q: "Característica genética única de la mitocondria (y cloroplastos) que apoya la teoría de la endosimbiosis:", opts: ["Poseen un núcleo propio", "Contienen su propio ADN circular desnudo", "Su ADN es de cadena simple", "No tienen material genético"], ans: "Contienen su propio ADN circular desnudo", exp: "Las mitocondrias tienen un genoma (ADNmt) circular similar al de las bacterias." },
  { id: 68, block: 3, q: "Patrón de herencia genética característico del ADN mitocondrial en humanos:", opts: ["Herencia paterna", "Herencia mendeliana dominante", "Herencia materna exclusiva", "Herencia ligada al cromosoma X"], ans: "Herencia materna exclusiva", exp: "Solo el óvulo aporta las mitocondrias al cigoto; los espermatozoides dejan las suyas fuera al fecundar." },
  { id: 69, block: 3, q: "Gas indispensable que la mitocondria consume como aceptor final de electrones para poder producir abundante ATP:", opts: ["Dióxido de carbono (CO₂)", "Nitrógeno (N₂)", "Oxígeno (O₂)", "Hidrógeno (H₂)"], ans: "Oxígeno (O₂)", exp: "La respiración celular aerobia depende del oxígeno para evitar que la cadena respiratoria se sature." },
  { id: 70, block: 3, q: "Estructura molecular en forma de turbina situada en las crestas mitocondriales que sintetiza ATP usando un gradiente de protones:", opts: ["Citocromo C", "Bomba de Sodio-Potasio", "ATP-sintasa", "Catalasa"], ans: "ATP-sintasa", exp: "El flujo de protones (H⁺) hace girar a la ATP-sintasa, uniendo un Pᵢ al ADP." },
  { id: 71, block: 3, q: "Células del cuerpo con una cantidad extraordinariamente alta de mitocondrias por su incesante actividad:", opts: ["Células musculares cardíacas (miocitos) y espermatozoides", "Células epidérmicas de la piel", "Células óseas (osteocitos)", "Adipocitos"], ans: "Células musculares cardíacas (miocitos) y espermatozoides", exp: "El músculo cardíaco nunca descansa, requiriendo hasta 5000 mitocondrias por célula." },
  { id: 72, block: 3, q: "Teoría evolutiva formulada por Lynn Margulis que explica el origen bacteriano ancestral de la mitocondria:", opts: ["Teoría Celular", "Teoría Endosimbiótica", "Teoría Quimiosintética", "Generación Espontánea"], ans: "Teoría Endosimbiótica", exp: "Propone que una célula eucariota primitiva fagocitó a una bacteria aerobia, estableciendo una simbiosis." },
  { id: 73, block: 3, q: "Vesículas esféricas originadas en el Golgi que contienen potentes enzimas digestivas (hidrolasas ácidas):", opts: ["Peroxisomas", "Vacuolas", "Lisosomas", "Endosomas"], ans: "Lisosomas", exp: "Actúan como el sistema digestivo intracelular, degradando macromoléculas." },
  { id: 74, block: 3, q: "Condición fisicoquímica que requieren las enzimas lisosomales para estar activas y funcionar correctamente:", opts: ["Un pH fuertemente alcalino", "Un pH ácido (aproximadamente 5.0)", "Presencia de luz solar", "Temperatura de ebullición"], ans: "Un pH ácido (aproximadamente 5.0)", exp: "La membrana del lisosoma bombea protones (H⁺) hacia adentro para mantener el ambiente ácido necesario." },
  { id: 75, block: 3, q: "Proceso lisosomal mediante el cual la célula digiere y recicla sus propios organelos envejecidos o dañados:", opts: ["Pinocitosis", "Exocitosis", "Autofagia", "Plasmólisis"], ans: "Autofagia", exp: "La autofagia ('comerse a sí mismo') renueva los componentes celulares y da energía en tiempos de inanición." },
  { id: 76, block: 3, q: "Destrucción programada de toda la célula causada por la ruptura masiva de todos sus lisosomas (ej. cola del renacuajo):", opts: ["Mitosis", "Meiosis", "Autólisis", "Clonación"], ans: "Autólisis", exp: "La autólisis ocurre cuando las enzimas lisosomales se liberan al citosol, disolviendo a la célula desde adentro." },
  { id: 77, block: 3, q: "Enfermedad genética humana (como Tay-Sachs) causada por la ausencia de una enzima lisosomal específica:", opts: ["Enfermedad de depósito lisosomal", "Diabetes tipo 1", "Anemia falciforme", "Hemofilia"], ans: "Enfermedad de depósito lisosomal", exp: "Al faltar una enzima, sustancias no digeridas (como lípidos) se acumulan hasta niveles tóxicos." },
  { id: 78, block: 3, q: "Cuando un glóbulo blanco fagocita una bacteria, ¿qué organelo se fusiona con el fagosoma para destruir al patógeno?", opts: ["Mitocondria", "Retículo Endoplásmico", "Lisosoma primario", "Nucleolo"], ans: "Lisosoma primario", exp: "La fusión crea un fagolisosoma (lisosoma secundario) donde las enzimas ácidas desintegran a la bacteria." },
  { id: 79, block: 3, q: "¿Qué organelo carecen por completo las células vegetales típicas, utilizando en su lugar una gran vacuola lítica?", opts: ["Mitocondria", "Lisosoma", "Aparato de Golgi", "Ribosoma"], ans: "Lisosoma", exp: "Las plantas generalmente no tienen lisosomas verdaderos; su vacuola central asume funciones digestivas equivalentes." },
  { id: 80, block: 3, q: "¿Por qué las enzimas lisosomales no destruyen a la célula si el lisosoma sufre una pequeña fuga accidental?", opts: ["Porque el núcleo las desactiva", "Porque el pH neutro (~7.2) del citosol inactiva a las hidrolasas ácidas", "Porque están rodeadas de pared celular", "Porque el citosol no tiene proteínas"], ans: "Porque el pH neutro (~7.2) del citosol inactiva a las hidrolasas ácidas", exp: "Las enzimas solo funcionan a pH 5, así que se apagan en el pH neutro del citoplasma." },
  { id: 81, block: 3, q: "Organelos globulares parecidos a lisosomas pero especializados en reacciones oxidativas, no digestivas:", opts: ["Cloroplastos", "Peroxisomas", "Centriolos", "Nucléolos"], ans: "Peroxisomas", exp: "Oxidan diversas moléculas, protegiendo a la célula de daños químicos." },
  { id: 82, block: 3, q: "Molécula altamente tóxica que los peroxisomas generan como subproducto de sus reacciones, y que deben neutralizar inmediatamente:", opts: ["Ácido úrico", "Peróxido de hidrógeno (H₂O₂)", "Dióxido de carbono", "Monóxido de carbono"], ans: "Peróxido de hidrógeno (H₂O₂)", exp: "Las oxidasas del peroxisoma generan H₂O₂ al oxidar toxinas, el cual es tóxico para la célula." },
  { id: 83, block: 3, q: "Enzima clave exclusiva de los peroxisomas encargada de descomponer el peróxido de hidrógeno en agua y oxígeno inofensivos:", opts: ["Polimerasa", "Amilasa", "Catalasa", "Lipasa"], ans: "Catalasa", exp: "La catalasa descompone el H₂O₂ rapidísimamente. Es lo que hace burbujear el agua oxigenada en una herida." },
  { id: 84, block: 3, q: "Proceso metabólico importante que ocurre en el peroxisoma mediante el cual se acortan los ácidos grasos de cadena muy larga:", opts: ["Glucólisis", "Ciclo de Krebs", "Beta-oxidación", "Fermentación láctica"], ans: "Beta-oxidación", exp: "Descomponen lípidos complejos en unidades más pequeñas que luego se envían a la mitocondria para producir energía." },
  { id: 85, block: 3, q: "Órganos humanos cuyas células son excepcionalmente ricas en peroxisomas por su rol en la detoxificación:", opts: ["Hígado y Riñones", "Corazón y Pulmones", "Cerebro y Médula espinal", "Huesos y Piel"], ans: "Hígado y Riñones", exp: "Los peroxisomas hepáticos y renales neutralizan hasta la mitad del alcohol ingerido y otras toxinas sanguíneas." },
  { id: 86, block: 3, q: "Variante vegetal de los peroxisomas que se encuentra en semillas y transforma lípidos en azúcares para la germinación:", opts: ["Amiloplasto", "Glioxisomas", "Tonoplasto", "Cromoplasto"], ans: "Glioxisomas", exp: "El glioxisoma permite que la plántula use la energía de la grasa hasta que pueda hacer fotosíntesis." },

  // ── BLOQUE 4: Vacuolas, Citoesqueleto y Centriolos (87–100) ──────────────
  { id: 87, block: 4, q: "Organelo característico de la célula vegetal madura que puede ocupar hasta el 90% de su volumen interno:", opts: ["Cloroplasto gigante", "Gran vacuola central", "Aparato de Golgi expandido", "Nucleolo"], ans: "Gran vacuola central", exp: "La vacuola central empuja a los demás organelos hacia la periferia celular." },
  { id: 88, block: 4, q: "Nombre de la membrana especializada que rodea y delimita a la vacuola central vegetal:", opts: ["Plasmalema", "Carioteca", "Tonoplasto", "Cresta"], ans: "Tonoplasto", exp: "El tonoplasto es una membrana altamente selectiva que controla el flujo iónico hacia dentro de la vacuola." },
  { id: 89, block: 4, q: "Principal función biomecánica de la vacuola central en las plantas:", opts: ["Movimiento celular", "Mantener la presión de turgencia que da rigidez al tallo y hojas", "Realizar fotosíntesis", "Síntesis de proteínas"], ans: "Mantener la presión de turgencia que da rigidez al tallo y hojas", exp: "Al llenarse de agua, la vacuola ejerce presión contra la pared celular, manteniendo la planta erguida (turgente)." },
  { id: 90, block: 4, q: "Además de agua, ¿qué sustancias es capaz de almacenar la vacuola central vegetal?", opts: ["Solo aire", "Nutrientes, pigmentos (antocianinas), productos tóxicos y desechos", "Unicelulares simbiontes exclusivamente", "Mitocondrias extra"], ans: "Nutrientes, pigmentos (antocianinas), productos tóxicos y desechos", exp: "Almacena reservas nutritivas, pigmentos de flores, y aísla toxinas o venenos contra herbívoros." },
  { id: 91, block: 4, q: "Organelo análogo presente en protozoarios de agua dulce (como el Paramecium) que bombea el exceso de agua hacia el exterior:", opts: ["Vacuola digestiva", "Vacuola contráctil (pulsátil)", "Fagosoma", "Lisosoma primario"], ans: "Vacuola contráctil (pulsátil)", exp: "Sin la vacuola contráctil, el microorganismo estallaría por la entrada constante de agua por ósmosis." },
  { id: 92, block: 4, q: "Diferencia principal entre las vacuolas de células vegetales y las de células animales:", opts: ["Las animales son grandes y únicas, las vegetales son pequeñas y escasas", "Las vegetales almacenan ADN, las animales ARN", "Las vegetales suelen ser grandes y únicas; las animales son pequeñas, numerosas y temporales", "Ambas son idénticas en tamaño"], ans: "Las vegetales suelen ser grandes y únicas; las animales son pequeñas, numerosas y temporales", exp: "En los animales, las vacuolas son simples sacos de transporte temporal; en vegetales son estructurales y permanentes." },
  { id: 93, block: 4, q: "Red tridimensional de fibras proteicas que da forma, soporte y facilita el movimiento dentro de la célula eucariota:", opts: ["Aparato de Golgi", "Citoesqueleto", "Matriz extracelular", "Retículo endoplásmico"], ans: "Citoesqueleto", exp: "Funciona como los 'huesos' y los 'músculos' de la célula a nivel microscópico." },
  { id: 94, block: 4, q: "Componente más grueso del citoesqueleto, formado por tubulina, que actúa como 'vía de tren' para el transporte intracelular:", opts: ["Microfilamentos", "Filamentos intermedios", "Microtúbulos", "Cables de colágeno"], ans: "Microtúbulos", exp: "Los microtúbulos son tubos huecos de tubulina que también forman cilios, flagelos y el huso mitótico." },
  { id: 95, block: 4, q: "Fibras más delgadas del citoesqueleto, hechas de actina, encargadas de la contracción muscular y el anillo contráctil:", opts: ["Microtúbulos", "Microfilamentos", "Neurofilamentos", "Queratina"], ans: "Microfilamentos", exp: "Los microfilamentos de actina se asocian con miosina para generar fuerza y movimiento celular (ej. pseudópodos)." },
  { id: 96, block: 4, q: "Fibras de grosor intermedio, sumamente resistentes, cuya función es puramente estructural. Ejemplo: queratina.", opts: ["Microtúbulos", "Cilios", "Filamentos intermedios", "Actina G"], ans: "Filamentos intermedios", exp: "Son las fibras más estables del citoesqueleto, anclan el núcleo y dan resistencia mecánica a células como la piel." },
  { id: 97, block: 4, q: "Proteínas motoras que 'caminan' a lo largo de los microtúbulos arrastrando vesículas del Golgi hacia su destino:", opts: ["Hemoglobina e Insulina", "Quinesina y Dineína", "Actina y Miosina", "Colágeno y Elastina"], ans: "Quinesina y Dineína", exp: "Utilizando ATP, la quinesina y la dineína transportan cargamentos celulares a través de las vías de microtúbulos." },
  { id: 98, block: 4, q: "Par de cilindros huecos dispuestos en ángulo recto, exclusivos de la célula animal, formados por 9 tripletes de microtúbulos:", opts: ["Centriolos", "Nucleolos", "Plasmodesmos", "Cromosomas"], ans: "Centriolos", exp: "Los centriolos organizan la red de microtúbulos de la célula animal." },
  { id: 99, block: 4, q: "Región del citoplasma donde residen los centriolos, considerada el principal Centro Organizador de Microtúbulos (COMT):", opts: ["Cinetocoro", "Centrómero", "Centrosoma", "Dictiosoma"], ans: "Centrosoma", exp: "De la matriz del centrosoma nacen e irradian todos los microtúbulos del citoesqueleto." },
  { id: 100, block: 4, q: "Función crucial de los centriolos durante la división de las células animales (Mitosis/Meiosis):", opts: ["Duplicar el ADN", "Digerir la membrana nuclear", "Organizar el huso acromático que separará a los cromosomas", "Sintetizar la nueva membrana plasmática"], ans: "Organizar el huso acromático que separará a los cromosomas", exp: "Los centriolos migran a los polos celulares y extienden los microtúbulos del huso para 'pescar' cromosomas." },
];

const BLOCKS = [
  { label: "Membrana y Pared Celular",           color: C.orange, range: [1,  15]  },
  { label: "Citoplasma y Núcleo",                color: C.blue,   range: [16, 30]  },
  { label: "Orgánulos de Síntesis",              color: C.purple, range: [31, 62]  },
  { label: "Mitocondria, Lisosomas y Peroxisomas", color: C.teal, range: [63, 86]  },
  { label: "Vacuolas, Citoesqueleto y Centriolos", color: C.gold, range: [87, 100] },
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
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

export default function CelulaOrganelos() {
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
    if (modeKey === "all") {
      qs = shuffle(questions);
    } else {
      const idx = parseInt(modeKey.replace("block-", ""), 10);
      qs = shuffle(questions.filter(q => q.block === idx));
    }
    qs = qs.map(q => ({ ...q, opts: shuffle(q.opts) }));
    setQueue(qs);
    setAnswers({});
    setCurrent(0);
    setSelected(null);
    setConfirmed(false);
    setTimeLeft(qs.length * 30);
    setTimerOn(true);
    setExamMode(modeKey);
    setMode("exam");
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
    } else {
      setTimerOn(false);
      setMode("results");
    }
  };

  const score = Object.entries(answers).reduce((acc, [id, ans]) => {
    const q = questions.find(q => q.id === Number(id));
    return acc + (q?.ans === ans ? 1 : 0);
  }, 0);

  const timerWarning = timeLeft < 120;

  // ── MENU ─────────────────────────────────────────────────────────────────
  if (mode === "menu") return (
    <div style={{ minHeight: "100vh", background: C.bg, paddingBottom: 64 }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}::-webkit-scrollbar{width:5px;background:${C.bg}}::-webkit-scrollbar-thumb{background:${C.border};border-radius:99px}`}</style>

      <div style={{ background: C.surface, borderBottom: `1px solid ${C.border}`, padding: "44px 24px 32px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: `linear-gradient(${C.teal} 1px,transparent 1px),linear-gradient(90deg,${C.teal} 1px,transparent 1px)`, backgroundSize: "44px 44px" }}/>
        <div style={{ position: "relative" }}>
          <span style={{ display: "inline-block", background: C.teal + "22", color: C.teal, borderRadius: 99, padding: "3px 14px", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 14, fontFamily: "'DM Sans',sans-serif" }}>FactoRizando · Biología · Universidad</span>
          <h1 style={{ fontSize: "clamp(20px,4vw,34px)", fontWeight: 700, color: C.text, letterSpacing: "-1px", lineHeight: 1.1, marginBottom: 10, fontFamily: "'DM Sans',sans-serif" }}>
            La Célula: <span style={{ color: C.teal }}>Organelos</span> y <span style={{ color: C.purple }}>Funciones</span>
          </h1>
          <p style={{ color: C.muted, fontSize: 14, maxWidth: 520, margin: "0 auto 22px", fontFamily: "'DM Sans',sans-serif" }}>
            100 reactivos · Simulador UNAM/EXANI-II · 5 bloques · 30 s por reactivo
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 36, flexWrap: "wrap", fontFamily: "'DM Sans',sans-serif" }}>
            {[{ label: "Reactivos", val: 100 }, { label: "Bloques", val: 5 }, { label: "Tiempo (todo)", val: "50 min" }].map(s => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 20, fontWeight: 900, color: C.text, letterSpacing: "-1px" }}>{s.val}</div>
                <div style={{ fontSize: 10, color: C.muted, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 16px" }}>
        <p style={{ color: C.muted, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12, fontFamily: "'DM Sans',sans-serif" }}>Examen completo</p>
        <button onClick={() => startExam("all")} style={{ width: "100%", background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "22px 16px", cursor: "pointer", textAlign: "center", marginBottom: 28, fontFamily: "'DM Sans',sans-serif", transition: "all 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = C.teal; e.currentTarget.style.background = C.teal + "11"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = C.surface; }}>
          <div style={{ fontSize: 28, marginBottom: 6 }}>📋</div>
          <div style={{ color: C.text, fontWeight: 700, fontSize: 15 }}>Todos los reactivos</div>
          <div style={{ color: C.muted, fontSize: 12, marginTop: 4 }}>100 reactivos en orden aleatorio · 50 min</div>
        </button>

        <p style={{ color: C.muted, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12, fontFamily: "'DM Sans',sans-serif" }}>O elige un bloque</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))", gap: 12 }}>
          {BLOCKS.map((bl, i) => {
            const count = bl.range[1] - bl.range[0] + 1;
            return (
              <button key={i} onClick={() => startExam(`block-${i}`)} style={{ background: C.surface, border: `1px solid ${bl.color}44`, borderRadius: 12, padding: "18px 14px", cursor: "pointer", textAlign: "center", fontFamily: "'DM Sans',sans-serif", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = bl.color + "18"; e.currentTarget.style.borderColor = bl.color; }}
                onMouseLeave={e => { e.currentTarget.style.background = C.surface; e.currentTarget.style.borderColor = bl.color + "44"; }}>
                <div style={{ color: bl.color, fontWeight: 700, fontSize: 12, lineHeight: 1.3 }}>{bl.label}</div>
                <div style={{ color: C.muted, fontSize: 11, marginTop: 5 }}>{count} reactivos · {Math.round(count * 0.5)} min</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  // ── RESULTS ──────────────────────────────────────────────────────────────
  if (mode === "results") {
    const total = queue.length;
    const pct   = total > 0 ? Math.round((score / total) * 100) : 0;
    const col   = pct >= 80 ? C.teal : pct >= 60 ? C.gold : C.crimson;
    const msg   = pct >= 85 ? "¡Dominio excepcional! Estás listo para el examen." : pct >= 70 ? "¡Muy bien! Repasa los organelos que te costaron." : pct >= 50 ? "Sigue practicando." : "Necesitas reforzar el temario.";
    const displayQs = filter === "correct" ? queue.filter(q => answers[q.id] === q.ans)
                    : filter === "wrong"   ? queue.filter(q => answers[q.id] && answers[q.id] !== q.ans)
                    : queue;

    return (
      <div style={{ minHeight: "100vh", background: C.bg, paddingBottom: 64 }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}`}</style>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "32px 16px" }}>
          <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
            <button onClick={() => setMode("menu")} style={{ background: C.surface, color: C.dim, border: `1px solid ${C.border}`, borderRadius: 12, padding: "12px 28px", fontSize: 14, fontWeight: 600, fontFamily: "'DM Sans',sans-serif", cursor: "pointer" }}>← Menú</button>
            <button onClick={() => startExam(examMode)} style={{ background: `linear-gradient(135deg,${C.teal},${C.blue})`, color: "#fff", border: "none", borderRadius: 12, padding: "12px 28px", fontSize: 14, fontWeight: 700, fontFamily: "'DM Sans',sans-serif", cursor: "pointer" }}>↺ Repetir</button>
          </div>
          <div style={{ background: C.surface, border: `2px solid ${col}`, borderRadius: 18, padding: "30px 36px", textAlign: "center", maxWidth: 380, margin: "0 auto 32px", fontFamily: "'DM Sans',sans-serif" }}>
            <div style={{ fontSize: 58, fontWeight: 900, color: col, letterSpacing: "-3px", lineHeight: 1 }}>{pct}%</div>
            <div style={{ color: C.dim, fontSize: 14, marginTop: 8 }}><span style={{ color: C.text, fontWeight: 700 }}>{score}</span> de {total} correctas</div>
            <div style={{ color: col, fontWeight: 700, fontSize: 15, marginTop: 10 }}>{msg}</div>
          </div>
          <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
            {[["all", "Todas"], ["correct", `✓ Correctas (${score})`], ["wrong", `✗ Incorrectas (${total - score})`]].map(([f, label]) => (
              <button key={f} onClick={() => setFilter(f)} style={{ padding: "6px 14px", borderRadius: 99, fontSize: 12, fontWeight: 700, cursor: "pointer", border: "none", background: filter === f ? C.teal : C.surface, color: filter === f ? "#fff" : C.muted, transition: "all 0.2s", fontFamily: "'DM Sans',sans-serif" }}>{label}</button>
            ))}
          </div>
          {displayQs.map(q => {
            const bl = getBlock(q.id), sel = answers[q.id];
            return (
              <div key={q.id} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "20px 24px", marginBottom: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <span style={{ background: bl.color + "1a", color: bl.color, borderRadius: 6, padding: "2px 10px", fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif" }}>{bl.label}</span>
                  <span style={{ marginLeft: "auto", color: C.muted, fontSize: 12, fontFamily: "'DM Sans',sans-serif" }}>#{q.id}</span>
                </div>
                <p style={{ color: C.text, fontSize: 14, fontWeight: 600, marginBottom: 10, lineHeight: 1.55, fontFamily: "'DM Sans',sans-serif" }}>{q.q}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 10 }}>
                  {q.opts.map(opt => {
                    const isOk = opt === q.ans, isUser = opt === sel;
                    let bg = C.bg, bd = `1px solid ${C.border}`, co = C.dim;
                    if (isOk)                { bg = C.teal + "22";    bd = `1px solid ${C.teal}`;    co = C.teal; }
                    else if (isUser && !isOk){ bg = C.crimson + "22"; bd = `1px solid ${C.crimson}`; co = C.crimson; }
                    return <div key={opt} style={{ background: bg, border: bd, color: co, borderRadius: 8, padding: "8px 12px", fontSize: 13, fontFamily: "'DM Sans',sans-serif" }}>{isOk ? "✓ " : ""}{isUser && !isOk ? "✗ " : ""}{opt}</div>;
                  })}
                </div>
                <div style={{ padding: "8px 12px", background: C.blue + "0e", borderRadius: 8, border: `1px solid ${C.blue}22` }}>
                  <span style={{ color: C.blue, fontSize: 11, fontWeight: 700, fontFamily: "'DM Sans',sans-serif" }}>💡 </span>
                  <span style={{ color: C.dim, fontSize: 12, fontFamily: "'DM Sans',sans-serif" }}>{q.exp}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ── EXAM ─────────────────────────────────────────────────────────────────
  const q = queue[current], bl = getBlock(q.id);
  const prog = ((current + 1) / queue.length) * 100;
  const answered = Object.keys(answers).length;

  return (
    <div style={{ minHeight: "100vh", background: C.bg, paddingBottom: 64 }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}::-webkit-scrollbar{width:5px;background:${C.bg}}::-webkit-scrollbar-thumb{background:${C.border};border-radius:99px}`}</style>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "24px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
          <div style={{ fontFamily: "'DM Sans',sans-serif" }}>
            <span style={{ color: C.muted, fontSize: 13 }}>Reactivo </span>
            <span style={{ color: C.text, fontWeight: 700 }}>{current + 1}</span>
            <span style={{ color: C.muted }}> / {queue.length}</span>
            <span style={{ color: C.muted, fontSize: 12, marginLeft: 10 }}>({answered} respondidos)</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: timerWarning ? C.crimson : C.teal, background: timerWarning ? C.crimson + "18" : C.teal + "18", padding: "5px 12px", borderRadius: 20, border: `1px solid ${timerWarning ? C.crimson : C.teal}55`, fontFamily: "'DM Sans',sans-serif" }}>⏱ {fmt(timeLeft)}</span>
            <button onClick={() => { setTimerOn(false); setMode("results"); }} style={{ padding: "5px 12px", background: C.crimson + "18", color: C.crimson, border: `1px solid ${C.crimson}44`, borderRadius: 20, cursor: "pointer", fontSize: 12, fontFamily: "'DM Sans',sans-serif" }}>Terminar</button>
          </div>
        </div>

        <div style={{ background: C.border, borderRadius: 99, height: 4, overflow: "hidden", marginBottom: 20 }}>
          <div style={{ height: "100%", width: `${prog}%`, background: `linear-gradient(90deg,${C.teal},${C.blue})`, transition: "width 0.3s", borderRadius: 99 }}/>
        </div>

        <div style={{ marginBottom: 12 }}>
          <span style={{ background: bl.color + "1a", color: bl.color, borderRadius: 6, padding: "2px 10px", fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif" }}>{bl.label}</span>
          <span style={{ marginLeft: 10, color: C.muted, fontSize: 12, fontFamily: "'DM Sans',sans-serif" }}>#{q.id} / 100</span>
        </div>

        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "22px 26px", marginBottom: 16 }}>
          <p style={{ color: C.text, fontSize: 16, fontWeight: 600, lineHeight: 1.6, fontFamily: "'DM Sans',sans-serif", margin: 0 }}>{q.q}</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
          {q.opts.map(opt => {
            const isSel = selected === opt, isOk = opt === q.ans;
            let bg = C.bg, bd = `1px solid ${C.border}`, co = C.dim;
            if (confirmed && isSel && isOk)  { bg = C.teal + "22";    bd = `1px solid ${C.teal}`;    co = C.teal; }
            else if (confirmed && isSel)     { bg = C.crimson + "22"; bd = `1px solid ${C.crimson}`; co = C.crimson; }
            else if (confirmed && isOk)      { bg = C.teal + "0e";    bd = `1px solid ${C.teal}55`;  co = C.teal + "99"; }
            else if (isSel)                  { bg = bl.color + "18";  bd = `1px solid ${bl.color}`;  co = bl.color; }
            return (
              <button key={opt} onClick={() => !confirmed && setSelected(opt)} style={{ background: bg, border: bd, color: co, borderRadius: 9, padding: "11px 14px", fontSize: 14, fontWeight: 500, cursor: confirmed ? "default" : "pointer", textAlign: "left", transition: "all 0.15s", outline: "none", fontFamily: "'DM Sans',sans-serif", lineHeight: 1.5 }}>
                {confirmed && isOk ? "✓ " : ""}{confirmed && isSel && !isOk ? "✗ " : ""}{opt}
              </button>
            );
          })}
        </div>

        {confirmed && (
          <div style={{ background: C.blue + "0e", border: `1px solid ${C.blue}22`, borderRadius: 10, padding: "12px 16px", marginBottom: 16 }}>
            <span style={{ color: C.blue, fontSize: 12, fontWeight: 700, fontFamily: "'DM Sans',sans-serif" }}>💡 Concepto clave: </span>
            <span style={{ color: C.dim, fontSize: 13, fontFamily: "'DM Sans',sans-serif" }}>{q.exp}</span>
          </div>
        )}

        <div style={{ display: "flex", gap: 10, justifyContent: "space-between", alignItems: "center" }}>
          <button onClick={() => { if (current > 0) { const pid = queue[current - 1].id; setCurrent(c => c - 1); setSelected(answers[pid] || null); setConfirmed(!!answers[pid]); } }} disabled={current === 0} style={{ padding: "10px 20px", background: C.surface, color: C.muted, border: `1px solid ${C.border}`, borderRadius: 10, cursor: current === 0 ? "not-allowed" : "pointer", opacity: current === 0 ? 0.4 : 1, fontSize: 14, fontFamily: "'DM Sans',sans-serif" }}>← Anterior</button>
          {!confirmed ? (
            <button onClick={confirmAnswer} disabled={!selected} style={{ padding: "10px 28px", fontSize: 14, fontWeight: 700, background: selected ? `linear-gradient(135deg,${C.teal},${C.blue})` : C.surface, color: selected ? "#fff" : C.muted, border: "none", borderRadius: 10, cursor: selected ? "pointer" : "not-allowed", boxShadow: selected ? `0 4px 20px ${C.teal}33` : "none", fontFamily: "'DM Sans',sans-serif", transition: "all 0.2s" }}>Confirmar respuesta</button>
          ) : (
            <button onClick={goNext} style={{ padding: "10px 28px", fontSize: 14, fontWeight: 700, background: `linear-gradient(135deg,${C.teal},${C.blue})`, color: "#fff", border: "none", borderRadius: 10, cursor: "pointer", boxShadow: `0 4px 20px ${C.teal}33`, fontFamily: "'DM Sans',sans-serif" }}>
              {current === queue.length - 1 ? "Ver resultados →" : "Siguiente →"}
            </button>
          )}
        </div>

        <div style={{ marginTop: 24, background: C.surface, borderRadius: 12, padding: 16, border: `1px solid ${C.border}` }}>
          <p style={{ color: C.muted, fontSize: 11, marginBottom: 10, textTransform: "uppercase", letterSpacing: 1, fontFamily: "'DM Sans',sans-serif" }}>Navegador de reactivos</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
            {queue.map((fq, i) => {
              const ans = answers[fq.id], isCurr = i === current;
              let bg = C.surface, co = C.muted;
              if (isCurr)              { bg = C.teal;          co = "#fff"; }
              else if (ans === fq.ans) { bg = C.teal + "33";   co = C.teal; }
              else if (ans)            { bg = C.crimson + "33"; co = C.crimson; }
              return (
                <button key={fq.id} onClick={() => { setCurrent(i); setSelected(answers[fq.id] || null); setConfirmed(!!answers[fq.id]); }} style={{ width: 28, height: 28, borderRadius: 6, background: bg, color: co, border: isCurr ? `2px solid ${C.teal}` : `1px solid ${C.border}`, cursor: "pointer", fontSize: 11, fontWeight: isCurr ? 700 : 400, fontFamily: "'DM Sans',sans-serif" }}>{i + 1}</button>
              );
            })}
          </div>
          <div style={{ display: "flex", gap: 16, marginTop: 10 }}>
            {[[C.teal + "33", C.teal, "Correcta"], [C.crimson + "33", C.crimson, "Incorrecta"], [C.surface, C.muted, "Sin contestar"]].map(([bg, co, label]) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div style={{ width: 12, height: 12, borderRadius: 3, background: bg, border: `1px solid ${co}` }}/>
                <span style={{ color: C.muted, fontSize: 11, fontFamily: "'DM Sans',sans-serif" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
