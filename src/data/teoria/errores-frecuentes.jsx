import { useState, useEffect } from "react";
import { SHARED_STYLE } from "./shared";

/* ── LOCAL STYLES ────────────────────────────────────────────────────────────── */

const ERRORES_STYLE = `
  .err-cat { margin-bottom: 48px; }
  .cat-badge {
    display: inline-flex; align-items: center; gap: 8px;
    font-family: 'IBM Plex Mono', monospace; font-size: 10.5px;
    letter-spacing: 0.18em; text-transform: uppercase;
    padding: 4px 12px; border-radius: 3px; margin-bottom: 20px;
  }
  .err-item {
    background: rgba(0,0,0,0.28);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 10px;
    padding: 24px 24px 20px;
    margin-bottom: 16px;
    transition: border-color 0.2s;
  }
  .err-item:hover { border-color: rgba(255,255,255,0.13); }
  .err-hd { display: flex; align-items: flex-start; gap: 14px; margin-bottom: 12px; }
  .err-num {
    flex-shrink: 0; width: 26px; height: 26px;
    background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
    border-radius: 50%; font-family: 'IBM Plex Mono', monospace;
    font-size: 11px; color: rgba(255,255,255,0.4);
    display: flex; align-items: center; justify-content: center; margin-top: 1px;
  }
  .err-title {
    font-family: 'Playfair Display', serif; font-size: 16.5px;
    color: #f0ece3; font-style: italic; line-height: 1.3;
  }
  .err-desc { font-size: 14px; color: #8a8070; line-height: 1.75; font-weight: 300; margin-bottom: 16px; padding-left: 40px; }
  .ex-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 14px; padding-left: 40px; }
  @media(max-width:600px){ .ex-grid { grid-template-columns: 1fr; } }
  .ex-box { border-radius: 7px; padding: 14px 16px; }
  .ex-box-mal  { background: rgba(240,180,41,0.12); border: 1px solid #f0b42973; }
  .ex-box-bien { background: rgba(100,144,245,0.13); border: 1px solid #6490f566; }
  .ex-label {
    font-family: 'IBM Plex Mono', monospace; font-size: 9.5px;
    letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 8px;
  }
  .ex-label-mal  { color: #f0b429; }
  .ex-label-bien { color: #6490f5; }
  .ex-oracion {
    font-size: 13.5px; color: #c8c0b4; line-height: 1.5;
    margin-bottom: 7px; font-style: italic;
  }
  .ex-analisis { font-size: 13px; color: #7a7368; line-height: 1.6; font-weight: 300; }
  .ex-analisis strong { font-weight: 600; }
  .ex-analisis.correcto { color: #8aaaf7; }
  .err-clave {
    margin-left: 40px; margin-top: 4px;
    background: rgba(245,200,66,0.06); border: 1px solid rgba(245,200,66,0.2);
    border-left: 3px solid rgba(245,200,66,0.55);
    border-radius: 0 6px 6px 0; padding: 10px 14px;
  }
  .err-clave-label {
    font-family: 'IBM Plex Mono', monospace; font-size: 9px;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: rgba(245,200,66,0.6); margin-bottom: 5px;
  }
  .err-clave p { font-size: 13px; color: #b8a870; line-height: 1.65; font-weight: 300; }
  .err-clave strong { color: #f5c842; font-weight: 600; }
  .err-divider { border: none; border-top: 1px solid rgba(255,255,255,0.05); margin: 32px 0; }
  .ex-num-label {
    font-family: 'IBM Plex Mono', monospace; font-size: 9px;
    letter-spacing: 0.15em; color: rgba(255,255,255,0.2);
    text-transform: uppercase; margin-bottom: 4px;
  }
`;

/* ── DATA ────────────────────────────────────────────────────────────────────── */

const categorias = [
  {
    num: "01",
    titulo: "Sujeto y predicado",
    color: "#8b5cf6",
    items: [
      {
        titulo: "Confundir «¿qué?» con el sujeto",
        desc: "Al preguntar «¿qué hace el verbo?» los estudiantes encuentran el CD y lo marcan como sujeto. El sujeto REALIZA la acción; el CD la RECIBE. La pregunta «¿qué?» sirve para ambos, por lo que no es suficiente por sí sola.",
        ejemplos: [
          {
            etiqueta: "Ejemplo 1",
            oracion: "«El calor derritió el hielo.»",
            mal: "Sujeto = «el hielo» → «¿qué derritió? el hielo»",
            bien: "Sujeto = «El calor» · CD = «el hielo». «El calor» realiza la acción. Prueba pasiva: «El hielo fue derretido por el calor» (el CD pasa a ser sujeto paciente).",
          },
          {
            etiqueta: "Ejemplo 2",
            oracion: "«Una nueva vacuna transformó la medicina.»",
            mal: "Sujeto = «la medicina» → confunden lo transformado con quien transforma",
            bien: "Sujeto = «Una nueva vacuna» · CD = «la medicina». «la medicina» se sustituye por «la» (acusativo): «Una nueva vacuna la transformó».",
          },
        ],
        clave: "Prueba doble: el sujeto concuerda en número con el verbo («la vacuna transformó» / «las vacunas transformaron»). El CD no concuerda con el verbo; se sustituye por «lo / la / los / las».",
      },
      {
        titulo: "No reconocer el sujeto tácito",
        desc: "Muchos estudiantes escriben «no tiene sujeto» cuando el sujeto simplemente está omitido. Confunden oraciones con sujeto tácito con impersonales genuinas como «Llueve» o «Hay problemas». La diferencia está en si el verbo tiene desinencia personal.",
        ejemplos: [
          {
            etiqueta: "Ejemplo 1",
            oracion: "«Llegamos tarde a la ceremonia.»",
            mal: "«No tiene sujeto; es impersonal.»",
            bien: "Sujeto tácito = «nosotros». La desinencia «-mos» en «llegamos» señala 1.ª persona del plural de manera unívoca.",
          },
          {
            etiqueta: "Ejemplo 2",
            oracion: "«Aprobaron el presupuesto por unanimidad.»",
            mal: "«Es oración impersonal, igual que «Llueve».»",
            bien: "Sujeto tácito = «ellos/ellas». La desinencia «-aron» señala 3.ª persona del plural. Las impersonales genuinas no tienen desinencia de persona: «Llueve», «Hay clases», «Se vive bien».",
          },
        ],
        clave: "Si el verbo tiene desinencia personal (–o, –as, –amos, –aron…) <strong>siempre hay sujeto</strong>, aunque no esté escrito. Solo son impersonales genuinas verbos como «llover», «haber existencial» y las pasivas reflejas sin referente.",
      },
      {
        titulo: "Orden invertido: tomar el primer sintagma como sujeto",
        desc: "En español el sujeto puede aparecer al final. Cuando la oración tiene orden no canónico, los estudiantes señalan automáticamente el primer elemento como sujeto.",
        ejemplos: [
          {
            etiqueta: "Ejemplo 1",
            oracion: "«En esa universidad estudian los mejores alumnos.»",
            mal: "Sujeto = «En esa universidad» (primer elemento de la oración)",
            bien: "Sujeto = «los mejores alumnos». Prueba de concordancia: «En esa universidad estudia**n** los mejores alumnos» → el verbo concuerda con «alumnos», no con «universidad».",
          },
          {
            etiqueta: "Ejemplo 2",
            oracion: "«Al congreso asistieron cientos de delegados.»",
            mal: "Sujeto = «Al congreso» (primer sintagma nominal)",
            bien: "Sujeto = «cientos de delegados». «Al congreso» es CC de lugar. Prueba: «Al congreso asistió un delegado» → el verbo cambia al singular con el sujeto real.",
          },
        ],
        clave: "Prueba de concordancia: cambia el número del posible sujeto y observa si el verbo cambia también. Solo el sujeto real provoca ese cambio en el verbo.",
      },
      {
        titulo: "Confundir sujeto compuesto con sujeto + CD",
        desc: "Las oraciones con dos sustantivos coordinados no siempre tienen sujeto compuesto: a veces uno es el sujeto y el otro es el CD. La clave está en si los dos elementos REALIZAN la acción o si uno la realiza y el otro la recibe.",
        ejemplos: [
          {
            etiqueta: "Ejemplo 1",
            oracion: "«María y Juan se respetan mutuamente.»",
            mal: "Identifican solo «María» como sujeto y «Juan» como CD",
            bien: "Sujeto compuesto = «María y Juan»: ambos realizan y reciben la acción recíprocamente. El verbo va en plural.",
          },
          {
            etiqueta: "Ejemplo 2",
            oracion: "«María admira a Juan.»",
            mal: "Sujeto compuesto = «María y Juan» porque hay dos personas",
            bien: "Sujeto = «María» (quien admira) · CD = «a Juan» (quien es admirado). No son coordinados; «a Juan» lleva preposición de CD de persona.",
          },
        ],
        clave: "Si los dos sintagmas van coordinados por «y/o/ni» sin preposición entre ellos y ambos realizan la acción → sujeto compuesto. Si uno lleva «a» de CD de persona o puede sustituirse por «lo/la» → es CD.",
      },
    ],
  },
  {
    num: "02",
    titulo: "Modificador directo",
    color: "#10b981",
    items: [
      {
        titulo: "Incluir el MI intercalado como modificador directo",
        desc: "Cuando un sintagma preposicional aparece entre el artículo y el adjetivo, los estudiantes lo incluyen junto con los MD. La regla es absoluta: cualquier expresión introducida por preposición es MI, sin importar su posición.",
        ejemplos: [
          {
            etiqueta: "Ejemplo 1",
            oracion: "«el libro de texto obligatorio»",
            mal: "MD = «el», «de texto», «obligatorio» (incluyen el sintagma preposicional)",
            bien: "MD = «el», «obligatorio» · MI = «de texto». «de texto» lleva preposición «de» → es MI aunque esté intercalado.",
          },
          {
            etiqueta: "Ejemplo 2",
            oracion: "«los estudios de posgrado recientes»",
            mal: "MD = «los», «de posgrado», «recientes»",
            bien: "MD = «los», «recientes» · MI = «de posgrado». La preposición «de» es la marca inequívoca del MI, sin excepción.",
          },
        ],
        clave: "<strong>MD = sin preposición</strong> (artículos, adjetivos calificativos, demostrativos, posesivos, numerales). <strong>MI = con preposición</strong> (sintagmas preposicionales). La posición no cambia esta clasificación.",
      },
      {
        titulo: "Confundir el complemento predicativo con MD",
        desc: "Cuando un adjetivo aparece después del verbo, los estudiantes a veces lo conectan erróneamente al sujeto como si fuera su MD. La diferencia está en si el adjetivo está DENTRO del sintagma nominal o FUERA de él, junto al verbo.",
        ejemplos: [
          {
            etiqueta: "Ejemplo 1",
            oracion: "«El alumno cansado llegó tarde.» vs. «El alumno llegó cansado.»",
            mal: "En ambas, «cansado» es MD del núcleo «alumno»",
            bien: "«El alumno cansado» → MD (dentro del SN, modifica solo al núcleo). «El alumno llegó cansado» → predicativo del sujeto (fuera del SN, junto al verbo).",
          },
          {
            etiqueta: "Ejemplo 2",
            oracion: "«La investigadora satisfecha recibió el premio.» vs. «La investigadora recibió el premio satisfecha.»",
            mal: "«satisfecha» es MD en las dos oraciones porque modifica a «investigadora»",
            bien: "Primera: MD dentro del SN. Segunda: predicativo del sujeto fuera del SN, que describe simultáneamente al sujeto Y al evento de recibir el premio.",
          },
        ],
        clave: "Pregunta clave: ¿el adjetivo está <strong>dentro</strong> del sintagma nominal (entre artículo y nombre)? → MD. ¿Está <strong>fuera</strong>, cerca del verbo? → predicativo del sujeto.",
      },
    ],
  },
  {
    num: "03",
    titulo: "Predicado nominal y verbal",
    color: "#f59e0b",
    items: [
      {
        titulo: "No reconocer los verbos semicopulativos",
        desc: "Los estudiantes conocen «ser» y «estar» como copulativos, pero no reconocen «quedar», «resultar», «volverse», «ponerse», «parecer», «permanecer» cuando funcionan como copulativos. Clasifican esas oraciones como verbales porque «el verbo no es ser ni estar».",
        ejemplos: [
          {
            etiqueta: "Ejemplo 1",
            oracion: "«La ciudad quedó destruida tras el terremoto.»",
            mal: "Predicado verbal porque «quedar» no es «ser» ni «estar»",
            bien: "Predicado <strong>nominal</strong>: «quedar» + participio adjetivo es copulativo. «destruida» es el atributo. Prueba: puede parafrasearse como «La ciudad estaba destruida».",
          },
          {
            etiqueta: "Ejemplo 2",
            oracion: "«El proyecto resultó exitoso.»",
            mal: "Predicado verbal; «resultar» expresa acción, no estado",
            bien: "Predicado <strong>nominal</strong>: «resultar» + adjetivo = verbo semicopulativo + atributo. «exitoso» se predica del sujeto a través del verbo. Prueba: «El proyecto fue exitoso» tiene el mismo significado.",
          },
        ],
        clave: "Verbos semicopulativos que forman <strong>predicado nominal</strong> con adjetivo o participio: quedar, resultar, volverse, ponerse, hacerse, parecer, permanecer, seguir, continuar. Si el adjetivo describe al sujeto a través del verbo → predicado nominal.",
      },
      {
        titulo: "Confundir predicativo del sujeto con atributo",
        desc: "Cuando hay un adjetivo después del verbo, muchos estudiantes asumen que siempre es atributo de un predicado nominal. La distinción clave es si el verbo es copulativo o no.",
        ejemplos: [
          {
            etiqueta: "Ejemplo 1",
            oracion: "«Los delegados llegaron convencidos.» vs. «Los delegados estaban convencidos.»",
            mal: "«convencidos» es atributo en ambas porque modifica al sujeto",
            bien: "«llegaron convencidos» → predicativo del sujeto (llegar = verbo no copulativo). «estaban convencidos» → atributo (estar = verbo copulativo). Mismo adjetivo, función distinta según el verbo.",
          },
          {
            etiqueta: "Ejemplo 2",
            oracion: "«La candidata se presentó segura al debate.»",
            mal: "Predicado nominal; atributo = «segura»",
            bien: "Predicado <strong>verbal</strong> con predicativo del sujeto. «Presentarse» no es copulativo. «segura» describe el estado del sujeto durante la acción, pero no es un atributo.",
          },
        ],
        clave: "<strong>Verbo copulativo + adjetivo = atributo</strong> (predicado nominal). <strong>Verbo no copulativo + adjetivo = predicativo del sujeto</strong> (predicado verbal). La naturaleza del verbo es el criterio decisivo.",
      },
    ],
  },
  {
    num: "04",
    titulo: "Complemento directo",
    color: "#ef4444",
    items: [
      {
        titulo: "Confundir el CD con preposición «a» de persona con el CI",
        desc: "Es el error más frecuente en el examen UNAM. Cuando el CD es una persona definida, lleva la preposición «a» en español, igual que el CI. La única prueba confiable es la sustitución pronominal: CD → «lo/la»; CI → «le/les».",
        ejemplos: [
          {
            etiqueta: "Ejemplo 1",
            oracion: "«El médico atendió a los pacientes graves.»",
            mal: "CI = «a los pacientes graves» porque lleva preposición «a»",
            bien: "CD = «a los pacientes graves». Prueba: «El médico <strong>los</strong> atendió» ✓ (acusativo). Si fuera CI: «El médico <strong>les</strong> atendió» ✗.",
          },
          {
            etiqueta: "Ejemplo 2",
            oracion: "«La junta sancionó a los funcionarios corruptos.»",
            mal: "CI = «a los funcionarios» por la preposición «a»",
            bien: "CD = «a los funcionarios corruptos». Prueba: «La junta <strong>los</strong> sancionó» ✓. La presencia de «a» ante un CD de persona es un rasgo del español, no una marca de CI.",
          },
        ],
        clave: "Prueba definitiva: <strong>CD → «lo/la/los/las»</strong> (acusativo). <strong>CI → «le/les»</strong> (dativo). Aplica la sustitución antes de decidir. La preposición «a» sola no es criterio suficiente.",
      },
      {
        titulo: "Marcar solo el núcleo del CD y no el sintagma completo",
        desc: "Los estudiantes identifican el núcleo nominal del CD pero omiten sus modificadores. El CD es todo el sintagma nominal, incluyendo artículos, adjetivos y complementos del nombre.",
        ejemplos: [
          {
            etiqueta: "Ejemplo 1",
            oracion: "«El investigador publicó un artículo de revisión sistemática.»",
            mal: "CD = «artículo» (solo el núcleo)",
            bien: "CD = «un artículo de revisión sistemática» (el sintagma completo). «de revisión sistemática» es MI del núcleo, pero forma parte del CD. Prueba: «El investigador <strong>lo</strong> publicó» → «lo» sustituye todo el sintagma.",
          },
          {
            etiqueta: "Ejemplo 2",
            oracion: "«Los expertos analizaron los datos del experimento.»",
            mal: "CD = «datos» (solo el núcleo sustantivo)",
            bien: "CD = «los datos del experimento». «del experimento» es MI dentro del CD. La prueba pronominal «Los expertos <strong>los</strong> analizaron» sustituye el sintagma completo.",
          },
        ],
        clave: "El pronombre que sustituye al CD reemplaza <strong>todo el sintagma</strong>, no solo el núcleo. Si dices «lo» en lugar de «artículo», en realidad estás sustituyendo «un artículo de revisión sistemática» completo.",
      },
      {
        titulo: "Confundir CD y CI cuando aparecen juntos en la misma oración",
        desc: "Cuando la oración tiene tanto CD como CI, los estudiantes frecuentemente los invierten. La regla es sistemática: el CD responde «¿qué cosa?» (acusativo); el CI responde «¿a quién / para quién?» (dativo).",
        ejemplos: [
          {
            etiqueta: "Ejemplo 1",
            oracion: "«El director entregó los diplomas a los egresados.»",
            mal: "CD = «a los egresados» / CI = «los diplomas»",
            bien: "CD = «los diplomas» (prueba: «El director <strong>los</strong> entregó»). CI = «a los egresados» (prueba: «El director <strong>les</strong> entregó los diplomas»).",
          },
          {
            etiqueta: "Ejemplo 2",
            oracion: "«La fundación otorgó una beca al mejor promedio.»",
            mal: "CD = «al mejor promedio» porque lleva «a» / CI = «una beca»",
            bien: "CD = «una beca» (prueba: «La fundación <strong>la</strong> otorgó»). CI = «al mejor promedio» (prueba: «La fundación <strong>le</strong> otorgó una beca»). Nunca puede haber dos CD con un solo verbo.",
          },
        ],
        clave: "Aplica <strong>ambas pruebas simultáneamente</strong>: sustituye un sintagma por «lo/la» y el otro por «le». Si las dos sustituciones resultan gramaticales, los identificaste correctamente.",
      },
    ],
  },
  {
    num: "05",
    titulo: "Complemento indirecto",
    color: "#ec4899",
    items: [
      {
        titulo: "Confundir CI con CC de finalidad cuando aparece «para»",
        desc: "La preposición «para» puede introducir tanto un CI (destinatario de una transferencia) como un CC de finalidad (propósito o meta). Los estudiantes clasifican automáticamente todo «para + SN» como CC de finalidad.",
        ejemplos: [
          {
            etiqueta: "Ejemplo 1",
            oracion: "«Compré este libro para mi hermana.»",
            mal: "CC de finalidad = «para mi hermana» (propósito de la compra)",
            bien: "CI = «para mi hermana» (destinataria de la compra). Prueba dativa: «<strong>Le</strong> compré este libro» ✓. Hay un destinatario concreto, no un propósito abstracto.",
          },
          {
            etiqueta: "Ejemplo 2",
            oracion: "«Estudió toda la noche para aprobar el examen.»",
            mal: "CI = «para aprobar el examen» porque tiene «para»",
            bien: "CC de finalidad = «para aprobar el examen» (propósito). Prueba: «Estudió toda la noche <strong>le</strong>» ✗ — no es posible. No hay destinatario; hay una meta futura.",
          },
        ],
        clave: "Prueba decisiva: ¿puede sustituirse por «<strong>le/les</strong>»? Si sí → CI. Si no → CC de finalidad. El CI tiene un beneficiario o destinatario real; el CC de finalidad expresa un objetivo o propósito.",
      },
      {
        titulo: "No identificar el CI cuando no hay CD en la oración",
        desc: "Los estudiantes buscan el CI solo en oraciones con CD. Creen que el CI «necesita» un CD para existir. Hay verbos que seleccionan CI sin CD: «gustar», «temer», «interesar», «molestar», «pertenecer».",
        ejemplos: [
          {
            etiqueta: "Ejemplo 1",
            oracion: "«Le temo a la oscuridad.»",
            mal: "No hay CI porque no hay CD en la oración",
            bien: "CI = «a la oscuridad» (prueba: «<strong>Le</strong> temo»; el clítico «Le» ya lo anticipa). El verbo «temer» puede construirse sin CD y con CI.",
          },
          {
            etiqueta: "Ejemplo 2",
            oracion: "«A los estudiantes les interesa la gramática.»",
            mal: "CD = «a los estudiantes» / no hay CI",
            bien: "Sujeto = «la gramática» · CI = «a los estudiantes». Prueba: «<strong>Les</strong> interesa la gramática». «a los estudiantes» es CI duplicado por el clítico «les».",
          },
        ],
        clave: "El CI puede existir <strong>sin CD</strong>. Los verbos «gustar», «encantar», «interesar», «molestar», «temer», «pertenecer» seleccionan CI sin requerir un OD. El clítico «le/les» siempre es la pista más confiable.",
      },
    ],
  },
  {
    num: "06",
    titulo: "Complemento circunstancial",
    color: "#14b8a6",
    items: [
      {
        titulo: "Confundir CC de modo con CC de instrumento",
        desc: "Ambos pueden introducirse con la preposición «con», lo que genera confusión. La diferencia está en si se nombra un objeto físico concreto (instrumento) o una cualidad abstracta de la manera de actuar (modo).",
        ejemplos: [
          {
            etiqueta: "Ejemplo 1",
            oracion: "«Operó con bisturí.» vs. «Operó con precisión.»",
            mal: "Ambos son CC de modo porque las dos usan «con»",
            bien: "«con bisturí» → CC de instrumento (herramienta física concreta). «con precisión» → CC de modo (cualidad abstracta de la acción). La pregunta clave es «¿con qué herramienta?» vs. «¿cómo?».",
          },
          {
            etiqueta: "Ejemplo 2",
            oracion: "«Transmitieron la señal mediante satélite.» vs. «Explicó el tema con entusiasmo.»",
            mal: "Ambos son CC de modo",
            bien: "«mediante satélite» → CC de instrumento/medio (canal tecnológico concreto). «con entusiasmo» → CC de modo (manera subjetiva de realizar la acción).",
          },
        ],
        clave: "¿Es un <strong>objeto, herramienta o medio técnico concreto</strong>? → CC de instrumento. ¿Es una <strong>cualidad o manera</strong> de actuar (claridad, rapidez, cuidado, entusiasmo)? → CC de modo.",
      },
      {
        titulo: "Confundir CC de causa con CC de finalidad",
        desc: "La diferencia temporal es la clave: la causa ya existía antes de la acción; la finalidad es un objetivo futuro que motiva la acción. Además, «por» puede introducir ambos, por lo que la preposición sola no basta.",
        ejemplos: [
          {
            etiqueta: "Ejemplo 1",
            oracion: "«Suspendieron por el huracán.» vs. «Estudiaron para ganar la beca.»",
            mal: "«por el huracán» y «para ganar» son ambos CC de finalidad",
            bien: "«por el huracán» → CC de causa (el huracán ya existía y provocó la suspensión). «para ganar la beca» → CC de finalidad (la beca es el objetivo futuro que motivó el estudio).",
          },
          {
            etiqueta: "Ejemplo 2",
            oracion: "«Se esforzó mucho por obtener el primer lugar.»",
            mal: "CC de causa porque lleva «por»",
            bien: "CC de <strong>finalidad</strong>. «por» + infinitivo expresa aquí un objetivo futuro (¿para qué se esforzó?). El primer lugar aún no se ha obtenido: es la meta, no la causa.",
          },
        ],
        clave: "Causa → algo <strong>previo o simultáneo</strong> que origina la acción («por el miedo», «debido al frío»). Finalidad → <strong>objetivo futuro</strong> que motiva la acción («para aprender», «a fin de mejorar»). «Por» + infinitivo suele ser finalidad.",
      },
      {
        titulo: "Identificar solo un CC cuando hay varios en la misma oración",
        desc: "Una oración puede tener múltiples CC de distintos tipos. Los estudiantes identifican el más obvio y concluyen su análisis, omitiendo los demás.",
        ejemplos: [
          {
            etiqueta: "Ejemplo 1",
            oracion: "«Llegó tarde ayer en taxi.»",
            mal: "Un solo CC = «tarde» (CC de modo) o «ayer» (CC de tiempo)",
            bien: "Tres CC: «tarde» (modo), «ayer» (tiempo), «en taxi» (instrumento/medio). Ninguno es CD ni CI; los tres modifican al verbo independientemente.",
          },
          {
            etiqueta: "Ejemplo 2",
            oracion: "«El rector firmó el convenio en el auditorio el lunes con su equipo.»",
            mal: "Un CC = «en el auditorio» (lugar) e ignorar los demás",
            bien: "Tres CC: «en el auditorio» (lugar), «el lunes» (tiempo), «con su equipo» (compañía). Además: CD = «el convenio». Analiza siempre la oración completa.",
          },
        ],
        clave: "Después de identificar sujeto, CD y CI, <strong>todo lo que queda son CC</strong>. Pregúntate sistemáticamente: ¿dónde? ¿cuándo? ¿cómo? ¿con qué? ¿con quién? ¿por qué? ¿para qué? Puede haber respuesta a más de una pregunta.",
      },
    ],
  },
  {
    num: "07",
    titulo: "Complemento de régimen",
    color: "#f97316",
    items: [
      {
        titulo: "Confundir el complemento de régimen con el CC",
        desc: "Ambos son sintagmas preposicionales que modifican al verbo. La diferencia está en si la preposición es OBLIGATORIA e INSUSTITUIBLE para ese verbo específico (CR) o puede cambiarse u omitirse sin alterar el significado del verbo (CC).",
        ejemplos: [
          {
            etiqueta: "Ejemplo 1",
            oracion: "«Habló sobre la crisis climática en el congreso.»",
            mal: "Ambos sintagmas son CC de lugar y modo",
            bien: "CR = «sobre la crisis climática» (hablar exige complemento temático: «hablar de/sobre algo»). CC = «en el congreso» (CC de lugar; puede omitirse sin afectar el significado básico de «hablar»).",
          },
          {
            etiqueta: "Ejemplo 2",
            oracion: "«Llegó tarde por el tráfico.»",
            mal: "CR = «por el tráfico» porque «llegar» rige «por»",
            bien: "CC de causa = «por el tráfico». «Llegar» no rige ninguna preposición fija. Puede decirse «llegó a causa del tráfico», «llegó por el metro», «llegó muy tarde»: la preposición es intercambiable u omisible.",
          },
        ],
        clave: "Prueba del CR: cambia o elimina la preposición. «Depende <strong>de</strong> ti» → «Depende <strong>en</strong> ti» ✗ (agramatical → es CR). «Llegó <strong>por</strong> el tráfico» → «Llegó <strong>a causa del</strong> tráfico» ✓ (intercambiable → es CC).",
      },
      {
        titulo: "Intentar sustituir el CR por «lo/la» y concluir que no hay complemento",
        desc: "Al no poder sustituirlo por pronombres acusativos, los estudiantes concluyen que no hay complemento. El CR se sustituye por pronombres tónicos o por «ello», no por «lo/la».",
        ejemplos: [
          {
            etiqueta: "Ejemplo 1",
            oracion: "«Confía en sus colegas.»",
            mal: "No hay CD ni CI porque no puede decirse «Confía lo»",
            bien: "CR = «en sus colegas». La prueba del CR no es «lo/la» sino comprobar que «confiar» exige «en»: *«Confía»* resulta incompleto. El CR se pronominaliza como «Confía en ellos».",
          },
          {
            etiqueta: "Ejemplo 2",
            oracion: "«Se queja de todo.»",
            mal: "No tiene complemento porque no puede sustituirse por «lo»",
            bien: "CR = «de todo». «Quejarse» rige «de» obligatoriamente. Prueba: *«Se queja»* ✗ — incompleto. No se sustituye por «lo» sino por «de ello»: «Se queja de ello».",
          },
        ],
        clave: "El CR no se sustituye por <strong>«lo/la»</strong> (acusativo) sino por <strong>pronombres tónicos con preposición</strong>: «en él/ella», «de ello», «con ellos». Su marca identificadora es que la preposición no puede cambiar sin romper el significado del verbo.",
      },
    ],
  },
  {
    num: "08",
    titulo: "Complemento predicativo",
    color: "#a855f7",
    items: [
      {
        titulo: "Confundir predicativo del sujeto con atributo",
        desc: "Es el error más frecuente en este bloque. Los estudiantes ven un adjetivo después del verbo y asumen que siempre es atributo de un predicado nominal. El criterio es inequívoco: la naturaleza del verbo.",
        ejemplos: [
          {
            etiqueta: "Ejemplo 1",
            oracion: "«El director está preocupado.» vs. «El director llegó preocupado.»",
            mal: "«preocupado» es atributo en ambas; en las dos hay un adjetivo que describe al sujeto",
            bien: "«está preocupado» → atributo (verbo copulativo «estar» → predicado nominal). «llegó preocupado» → predicativo del sujeto (verbo no copulativo «llegar» → predicado verbal con predicativo).",
          },
          {
            etiqueta: "Ejemplo 2",
            oracion: "«La comunidad quedó devastada.» vs. «La comunidad regresó devastada.»",
            mal: "Ambas son predicado nominal porque «devastada» siempre es atributo",
            bien: "«quedó devastada» → atributo (semicopulativo «quedar» + adjetivo). «regresó devastada» → predicativo del sujeto (verbo no copulativo «regresar»).",
          },
        ],
        clave: "<strong>Verbo copulativo</strong> (ser, estar, parecer, quedar, resultar + adjetivo) → <strong>atributo / predicado nominal</strong>. <strong>Verbo no copulativo</strong> (llegar, salir, regresar, vivir + adjetivo) → <strong>predicativo del sujeto / predicado verbal</strong>.",
      },
      {
        titulo: "Confundir predicativo del sujeto con MD",
        desc: "El mismo adjetivo puede ser MD o predicativo del sujeto según su posición en la oración. La diferencia está en si el adjetivo está DENTRO del sintagma nominal o FUERA de él, modificando también al verbo.",
        ejemplos: [
          {
            etiqueta: "Ejemplo 1",
            oracion: "«La exitosa investigadora recibió el premio.» vs. «La investigadora recibió el premio exitosa.»",
            mal: "«exitosa» es MD en los dos casos porque modifica a «investigadora»",
            bien: "Primera: MD (dentro del SN sujeto, antes del sustantivo). Segunda: predicativo del sujeto (fuera del SN, después del predicado, modifica simultáneamente a «investigadora» y al evento de recibir el premio).",
          },
          {
            etiqueta: "Ejemplo 2",
            oracion: "«El nervioso candidato entró al auditorio.» vs. «El candidato entró nervioso al auditorio.»",
            mal: "«nervioso» siempre es MD porque describe una cualidad del candidato",
            bien: "Primera: MD del núcleo «candidato» dentro del SN. Segunda: predicativo del sujeto, que describe el estado del candidato en el momento de entrar.",
          },
        ],
        clave: "Posición y función: MD está <strong>dentro del SN</strong> (entre determinante y núcleo, o inmediatamente después del núcleo). Predicativo está <strong>fuera del SN</strong>, en el predicado, y modifica tanto al nombre como al evento verbal.",
      },
      {
        titulo: "Confundir predicativo del objeto directo con el CD",
        desc: "Con verbos como «nombrar», «elegir», «declarar», «considerar», «llamar», la oración tiene un CD y un predicativo del objeto. Los estudiantes toman el predicativo como si fuera un segundo CD.",
        ejemplos: [
          {
            etiqueta: "Ejemplo 1",
            oracion: "«Nombraron directora a la subdirectora.»",
            mal: "CD = «directora» / CI = «a la subdirectora» (o CD = ambos)",
            bien: "CD = «a la subdirectora» (prueba: «La nombraron directora» → «la» sustituye a «la subdirectora»). Predicativo del OD = «directora» (no se sustituye por «lo/la»).",
          },
          {
            etiqueta: "Ejemplo 2",
            oracion: "«Consideraron excelente la propuesta del equipo.»",
            mal: "CD = «excelente» / predicativo = «la propuesta del equipo»",
            bien: "CD = «la propuesta del equipo» (prueba: «La consideraron excelente» → «la» sustituye al CD). Predicativo del OD = «excelente» (no puede sustituirse por «lo»: *«Consideraron lo la propuesta»* ✗).",
          },
        ],
        clave: "El <strong>CD se sustituye por «lo/la»</strong>; el <strong>predicativo del OD no puede sustituirse por ningún pronombre acusativo</strong>. Con verbos como «nombrar», «elegir», «declarar», «llamar», «considerar»: CD = la persona/cosa que cambia de estado; predicativo = el nuevo estado.",
      },
    ],
  },
  {
    num: "09",
    titulo: "Complemento agente",
    color: "#0ea5e9",
    items: [
      {
        titulo: "Confundir CA con CC de modo cuando ambos usan «por»",
        desc: "En una oración pasiva, «por» puede introducir el agente (CA) o un modo (CC de modo). La diferencia está en si el sintagma señala a quien realizó la acción o describe la manera en que ocurrió.",
        ejemplos: [
          {
            etiqueta: "Ejemplo 1",
            oracion: "«La propuesta fue rechazada por unanimidad por el consejo.»",
            mal: "Dos CA: «por unanimidad» y «por el consejo»",
            bien: "CA = «por el consejo» (quien rechazó). CC de modo = «por unanimidad» (manera del rechazo). Prueba: «El consejo rechazó la propuesta» ✓ (CA → sujeto activo). *«La unanimidad rechazó la propuesta»* ✗.",
          },
          {
            etiqueta: "Ejemplo 2",
            oracion: "«El resultado fue anunciado por sorpresa.»",
            mal: "CA = «por sorpresa» (el agente es «sorpresa»)",
            bien: "No hay CA. «por sorpresa» es CC de modo (manera del anuncio). Para que haya CA debe haber un referente animado o institucional que pueda ser sujeto activo: *«La sorpresa anunció el resultado»* ✗ — no tiene sentido.",
          },
        ],
        clave: "Prueba del CA: transforma la pasiva en activa. El CA debe poder convertirse en <strong>sujeto gramatical de la oración activa con sentido equivalente</strong>. Si el sintagma no puede ser sujeto activo coherente, es CC de modo.",
      },
      {
        titulo: "Buscar complemento agente en oraciones activas",
        desc: "El complemento agente solo existe en oraciones pasivas (ser + participio). En las oraciones activas no hay CA, aunque haya un sintagma con «por» que indique causa u otro complemento.",
        ejemplos: [
          {
            etiqueta: "Ejemplo 1",
            oracion: "«El rector firmó el convenio.»",
            mal: "Buscan el CA; algunos señalan «el rector» como CA",
            bien: "No hay CA: es una oración <strong>activa</strong>. «El rector» es el sujeto activo. Para que haya CA, la oración debe estar en voz pasiva: «El convenio fue firmado por el rector».",
          },
          {
            etiqueta: "Ejemplo 2",
            oracion: "«Los estudiantes ganaron el concurso por su dedicación.»",
            mal: "CA = «por su dedicación» (lleva «por»)",
            bien: "No hay CA. Es oración activa. «por su dedicación» es CC de causa. El CA solo aparece en construcciones pasivas: «ser + participio + por + agente».",
          },
        ],
        clave: "Fórmula del complemento agente: <strong>oración pasiva = sujeto paciente + ser + participio + por + agente</strong>. Si la oración no tiene «ser + participio», no hay CA. No confundir con CC de causa que también puede usar «por».",
      },
      {
        titulo: "Confundir el sujeto paciente con el complemento agente",
        desc: "En las oraciones pasivas hay dos participantes: el sujeto paciente (quien recibe la acción, concuerda con el verbo) y el CA (quien realiza la acción, introducido por «por»). Los estudiantes frecuentemente los intercambian.",
        ejemplos: [
          {
            etiqueta: "Ejemplo 1",
            oracion: "«El convenio fue firmado por el rector.»",
            mal: "CA = «El convenio» / sujeto = «por el rector»",
            bien: "Sujeto paciente = «El convenio» (concuerda con «fue firmado» en singular). CA = «por el rector» (quien realizó la firma). Prueba: «El rector firmó el convenio» → CA se convierte en sujeto activo.",
          },
          {
            etiqueta: "Ejemplo 2",
            oracion: "«Las reformas fueron aprobadas por la Cámara de Diputados.»",
            mal: "CA = «Las reformas» porque son el objeto real de la aprobación",
            bien: "Sujeto paciente = «Las reformas» (concuerda con el verbo: «fueron aprobadas» en plural femenino). CA = «por la Cámara de Diputados». Prueba activa: «La Cámara de Diputados aprobó las reformas».",
          },
        ],
        clave: "En la pasiva: el <strong>sujeto paciente concuerda con el verbo</strong> en género y número. El <strong>CA va siempre introducido por «por»</strong> y no concuerda con el verbo. Transforma a activa para verificar: CA → sujeto; sujeto paciente → CD.",
      },
    ],
  },
];

/* ── STYLE INJECTION ─────────────────────────────────────────────────────────── */

function useStyles() {
  useEffect(() => {
    const inject = (id, css) => {
      if (!document.getElementById(id)) {
        const s = document.createElement("style");
        s.id = id;
        s.textContent = css;
        document.head.appendChild(s);
      }
    };
    inject("factorizando-shared", SHARED_STYLE);
    inject("factorizando-errores", ERRORES_STYLE);
  }, []);
}

/* ── SUB-COMPONENTS ──────────────────────────────────────────────────────────── */

function EjemploBox({ ej }) {
  return (
    <div style={{ display: "grid", gap: 10, marginBottom: 14 }}>
      <div className="ex-num-label">{ej.etiqueta}</div>
      <div className="ex-grid">
        {/* ❌ Error */}
        <div className="ex-box ex-box-mal">
          <div className="ex-label ex-label-mal">❌ Error frecuente</div>
          <div className="ex-oracion">{ej.oracion}</div>
          <div className="ex-analisis">{ej.mal}</div>
        </div>
        {/* ✓ Correcto */}
        <div className="ex-box ex-box-bien">
          <div className="ex-label ex-label-bien">✓ Análisis correcto</div>
          <div className="ex-oracion">{ej.oracion}</div>
          <div
            className="ex-analisis correcto"
            dangerouslySetInnerHTML={{ __html: ej.bien }}
          />
        </div>
      </div>
    </div>
  );
}

function ErrorItem({ item, index }) {
  return (
    <div className="err-item">
      <div className="err-hd">
        <div className="err-num">{index + 1}</div>
        <div className="err-title">{item.titulo}</div>
      </div>
      <p className="err-desc">{item.desc}</p>
      {item.ejemplos.map((ej, i) => (
        <EjemploBox key={i} ej={ej} />
      ))}
      <div className="err-clave">
        <div className="err-clave-label">La clave</div>
        <p dangerouslySetInnerHTML={{ __html: item.clave }} />
      </div>
    </div>
  );
}

/* ── MAIN COMPONENT ──────────────────────────────────────────────────────────── */

export default function ErroresFrecuentes() {
  useStyles();
  return (
    <div className="lr">

      {/* HERO */}
      <div className="hero">
        <div className="hero-tag">EXAMEN UNAM · Español — Estructura de la Oración</div>
        <h1>Errores frecuentes</h1>
        <p>
          Guía de los errores más comunes que cometen los estudiantes en el
          análisis sintáctico. Cada punto incluye el razonamiento incorrecto típico
          y el análisis correcto con su justificación.
        </p>
      </div>

      <div className="cw">

        {categorias.map((cat, ci) => (
          <div key={cat.num} className="err-cat">

            {/* Section header */}
            <div className="section">
              <div className="sec-hd">
                <span className="sec-num">{cat.num}</span>
                <h2>{cat.titulo}</h2>
              </div>

              {/* Category badge */}
              <div
                className="cat-badge"
                style={{
                  background: `${cat.color}18`,
                  border: `1px solid ${cat.color}40`,
                  color: cat.color,
                }}
              >
                <span style={{
                  display: "inline-block", width: 7, height: 7,
                  borderRadius: "50%", background: cat.color, flexShrink: 0,
                }} />
                {cat.items.length} {cat.items.length === 1 ? "error frecuente" : "errores frecuentes"}
              </div>

              {/* Error items */}
              {cat.items.map((item, ii) => (
                <ErrorItem key={ii} item={item} index={ii} />
              ))}
            </div>

            {ci < categorias.length - 1 && <hr className="err-divider" />}
          </div>
        ))}

        {/* Quick-reference card */}
        <div className="card" style={{ borderColor: "rgba(245,200,66,0.18)", marginTop: 8 }}>
          <h3>📌 Resumen de pruebas rápidas para el examen</h3>
          <ul style={{ marginTop: 12 }}>
            {[
              ["Sujeto", "Concuerda con el verbo en número. Puede estar omitido (tácito)."],
              ["CD", "Se sustituye por «lo / la / los / las». Puede llevar «a» si es persona."],
              ["CI", "Se sustituye por «le / les». Puede introducirse con «a» o «para»."],
              ["CC", "Modifica al verbo; preposición opcional o intercambiable."],
              ["CR", "Preposición exigida e insustituible por el verbo específico."],
              ["Atributo", "Verbo copulativo (ser, estar, parecer, quedar…) + adjetivo/SN."],
              ["Predicativo", "Verbo no copulativo + adjetivo fuera del SN."],
              ["CA", "Solo en pasivas: ser + participio + por + agente. El CA → sujeto en activa."],
            ].map(([term, desc]) => (
              <li key={term} style={{ marginBottom: 10 }}>
                <span style={{
                  fontFamily: "IBM Plex Mono, monospace", fontSize: 11,
                  color: "#f5c842", marginRight: 8,
                  background: "rgba(245,200,66,0.1)", padding: "2px 8px",
                  borderRadius: 2,
                }}>{term}</span>
                <span style={{ fontSize: 14, color: "#a09880", fontWeight: 300 }}>{desc}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
