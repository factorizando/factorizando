// La diapositiva componible: encabezado + bloques sobre una rejilla de 12.
//
// Adaptación híbrida (docs/DISENO.md §2.6). De 768 px en adelante la diapositiva
// es un lienzo fijo de 1280 × 720 que se escala entero: lo que se diseña es lo
// que se proyecta, y el texto no cambia de tamaño relativo entre el proyector y
// la laptop. Por debajo deja de escalar y los bloques reflujan a una columna,
// porque un teléfono acostado deja unos 263 px de alto útil y ahí un lienzo
// escalado daría cuerpo de 7 px.
//
// Ese «teléfono acostado» del párrafo anterior es justo el caso que el umbral
// de ancho NO sabía distinguir: mide 844 px de ancho —más que un iPad en
// vertical— y el código lo tomaba por un portátil. Medido: a 844 × 390 el
// lienzo se escalaba a 0.386 y el cuerpo quedaba en 4.6 px de pantalla; en
// pantalla completa, 5.3. Eso es lo que se veía como «la presentación
// desapareció». Un teléfono no es ancho: es CORTO, así que el umbral mira
// también el alto.
import { useEffect, useRef, useState } from "react";
import { BLOQUES } from "./index.js";
import { columnas, oculto, titulo as estiloTitulo } from "./ui.js";

const ANCHO = 1280;
const ALTO = 720;
// El umbral ES el lienzo. Se usa el lienzo cuando la ventana mide al menos lo
// que mide él; por debajo, reflujo. No hay número mágico que ajustar: si algún
// día el lienzo deja de ser 1280 × 720, el corte se mueve solo.
//
// Antes eran 768 × 560, y con eso un iPad seguía escalando: 0.6 en vertical y
// 0.8 acostado, que deja las etiquetas más chicas en 6.3 y 8.4 px. El lienzo
// está calibrado para verse a escala 1 o más —quien puso una etiqueta en 10.5 px
// la aceptó a ese tamaño, no a la mitad—, así que encogerlo es siempre perder.
// Con el corte en 1280 × 720 quedan dentro el portátil (1366 × 768 escala a
// 0.91), el proyector y el iPad Pro de 12.9" acostado (1366 × 1024, escala
// 1.07); y fuera todos los demás iPads y todos los teléfonos.
const UMBRAL_ANCHO = ANCHO;
const UMBRAL_ALTO = ALTO;
// Ancho máximo de la columna en reflujo. A 15.5 px de cuerpo son unos 75
// caracteres por renglón, que es donde se deja de leer de corrido.
const MEDIDA = 820;

function useEscala(ref, activo) {
  const [escala, setEscala] = useState(1);
  useEffect(() => {
    if (!activo || !ref.current) { setEscala(1); return; }
    const el = ref.current;
    const medir = () => {
      const { width, height } = el.getBoundingClientRect();
      if (!width || !height) return;
      setEscala(Math.min(width / ANCHO, height / ALTO));
    };
    medir();
    const ro = new ResizeObserver(medir);
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref, activo]);
  return escala;
}

function Bloque({ bloque, tema, reflujo, contexto, orden, revelados }) {
  const Componente = BLOQUES[bloque.tipo];
  if (!Componente) {
    if (import.meta.env.DEV) console.warn(`[lienzo] bloque sin registrar: "${bloque.tipo}"`);
    return null;
  }
  // `revelar` oculta el bloque hasta que el profesor avanza. Sin esto el alumno
  // lee la respuesta antes de que se le pregunte. `orden` es su posición entre
  // los bloques que se revelan, no entre todos: intercalar un bloque normal no
  // debe descolocar la cuenta.
  const escondido = bloque.revelar && orden > revelados;
  return (
    // `display: grid` en el envoltorio hace que el bloque de dentro llene la
    // celda, sea cual sea. Antes cada bloque tenía que acordarse de pedir
    // `height: 100%`, y los que se dibujan su propia tarjeta —`formula`,
    // `destacado`— se quedaban cortos al lado de uno más alto.
    <div style={{ display: "grid", ...columnas(bloque.ancho, bloque.alto, reflujo), ...(escondido ? oculto : null), transition: "opacity 0.25s ease" }}>
      <Componente bloque={bloque} tema={tema} reflujo={reflujo} {...contexto} />
    </div>
  );
}

export default function Lienzo({ slide, tema, modo, respuestaDada, onResponder, votos, totalVotos, revelados = Infinity }) {
  const cajaRef = useRef(null);
  const [ventana, setVentana] = useState(() => (typeof window === "undefined"
    ? { ancho: 1280, alto: 720 }
    : { ancho: window.innerWidth, alto: window.innerHeight }));

  useEffect(() => {
    const alCambiar = () => setVentana({ ancho: window.innerWidth, alto: window.innerHeight });
    // `orientationchange` además de `resize`: al rotar un teléfono hay
    // navegadores que lo disparan antes de que las medidas estén actualizadas,
    // y alguno no dispara `resize` en absoluto. El retardo es para leer después.
    const alRotar = () => setTimeout(alCambiar, 100);
    window.addEventListener("resize", alCambiar);
    window.addEventListener("orientationchange", alRotar);
    return () => {
      window.removeEventListener("resize", alCambiar);
      window.removeEventListener("orientationchange", alRotar);
    };
  }, []);

  const reflujo = ventana.ancho < UMBRAL_ANCHO || ventana.alto < UMBRAL_ALTO;
  const escala = useEscala(cajaRef, !reflujo);
  const contenidoRef = useRef(null);

  // Avisa en desarrollo cuando una diapositiva no cabe. Es la comprobación que
  // ninguna herramienta estática puede hacer: depende de cómo envuelve el texto.
  useEffect(() => {
    if (!import.meta.env.DEV || reflujo || !contenidoRef.current) return;
    const alto = contenidoRef.current.scrollHeight;
    if (alto > ALTO + 2) {
      console.warn(
        `[lienzo] «${slide.titulo || slide.etiqueta || slide.id}» necesita ${alto}px de ${ALTO}: ` +
        `${(slide.bloques || []).length} bloques. Se desplaza dentro del lienzo; ` +
        `docs/DISENO.md §2.3 pide cinco bloques como máximo.`
      );
    }
  }, [slide, reflujo, escala]);
  const contexto = { respuestaDada, onResponder, votos, totalVotos, modo };

  const contenido = (
    <>
      {(slide.etiqueta || slide.titulo) && (
        <div style={{ gridColumn: "1 / -1" }}>
          {slide.etiqueta && (
            <div style={{ fontFamily: tema.mono, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: tema.acento, marginBottom: 7 }}>
              {slide.etiqueta}
            </div>
          )}
          {slide.titulo && <h2 style={estiloTitulo(tema, reflujo ? 21 : 34)}>{slide.titulo}</h2>}
        </div>
      )}
      {(() => {
        let orden = -1;
        return (slide.bloques || []).map((b, i) => {
          if (b.revelar) orden += 1;
          return (
            <Bloque key={i} bloque={b} tema={tema} reflujo={reflujo}
              contexto={contexto} orden={orden} revelados={revelados} />
          );
        });
      })()}

      {/* El guion del profesor. Solo en modo director: es lo que dice en voz alta
          mientras el grupo mira la diapositiva, así que el alumno no debe verlo. */}
      {modo === "director" && slide.notas && (
        <div style={{
          gridColumn: "1 / -1", marginTop: "auto",
          borderTop: `1px dashed ${tema.borderFuerte}`, paddingTop: 12,
          display: "flex", gap: 12, alignItems: "flex-start",
        }}>
          <span style={{ fontFamily: tema.mono, fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: tema.sub, flexShrink: 0, marginTop: 2 }}>
            Guion
          </span>
          <span style={{ fontSize: 14, lineHeight: 1.55, color: tema.muted }}>{slide.notas}</span>
        </div>
      )}
    </>
  );

  const rejilla = {
    display: "grid",
    gridTemplateColumns: reflujo ? "1fr" : "repeat(12, minmax(0, 1fr))",
    gap: reflujo ? 11 : 16,
    // Centrado en vertical. Es seguro porque nada de lo que hay dentro cambia de
    // altura sobre la marcha: el bloque con `revelar` conserva su sitio mientras
    // está oculto, y la explicación de un reactivo reserva el suyo. Sin esas dos
    // cosas, centrar haría saltar la diapositiva cada vez que algo aparece.
    alignContent: "center",
  };

  if (reflujo) {
    return (
      // En móvil el contenedor se desplaza, y ahí `alignContent: center` es una
      // trampa: si el contenido pasa del alto disponible, el sobrante se sale
      // por ARRIBA y queda fuera del alcance del scroll. Anclado al inicio, lo
      // que sobra se va por abajo, que es hacia donde se desplaza.
      //
      // El ancho se topa y se centra desde que el reflujo alcanza a las
      // tabletas. En un teléfono no cambia nada —nunca llega al tope—, pero un
      // iPad acostado da 1194 px y una sola columna de ese ancho son renglones
      // de más de cien caracteres con media pantalla vacía al lado. MEDIDA es un
      // ancho de lectura, no una fracción de la pantalla: por eso es un número
      // fijo y no un porcentaje.
      <div style={{
        ...rejilla, alignContent: "start", padding: "14px 16px",
        height: "100%", overflowY: "auto", boxSizing: "border-box",
        maxWidth: MEDIDA, marginInline: "auto", width: "100%",
      }}>
        {contenido}
      </div>
    );
  }

  // El lienzo se centra en ABSOLUTO, no con `place-items: center`.
  //
  // Con la rejilla, un elemento MÁS ANCHO que su contenedor no se centra: el
  // navegador lo pega al inicio para no dejar fuera de alcance el borde
  // izquierdo. Como la caja mide 1280 px de ancho ANTES de escalar, eso pasaba
  // en toda pantalla de menos de 1280 —iPad, portátil chico, ventana sin
  // maximizar—: la caja quedaba en left 0 en vez de left −128, y al escalar
  // sobre su propio centro el resultado aparecía corrido a la derecha con el
  // trozo sobrante recortado. Medido a 1024 px: 128 px de diapositiva perdidos,
  // justo por donde pasa la segunda columna de bloques.
  //
  // Fuera de flujo el problema no existe: `left/top: 50%` pone el centro de la
  // caja sin escalar en el centro del contenedor y `translate(-50%, -50%)` —que
  // se resuelve contra la caja sin transformar— lo deja ahí, escale lo que
  // escale.
  return (
    <div ref={cajaRef} style={{ height: "100%", width: "100%", position: "relative", overflow: "hidden" }}>
      {/* El contenido que no cabe en 720 px se desplaza DENTRO del lienzo, en vez
          de recortarse o de encoger la diapositiva entera. Encogerla sería
          traicionar lo único que promete el lienzo fijo —que el cuerpo mida lo
          mismo en el proyector que en la laptop—, y recortar perdería material
          en silencio.

          Que haga falta es señal de que la diapositiva lleva más de lo que cabe:
          el aviso de abajo la nombra en desarrollo. No es una regresión del
          sistema de bloques — el tipo `regla_rica` que sustituye ya llevaba
          `overflowY: auto` y esas diapositivas llevan desbordándose desde
          siempre; proyectadas, su final no se veía salvo que alguien arrastrara.
          Lo que cambia es que ahora se sabe cuáles son. */}
      <div ref={contenidoRef} style={{
        position: "absolute", left: "50%", top: "50%",
        width: ANCHO, height: ALTO, overflowY: "auto",
        transform: `translate(-50%, -50%) scale(${escala})`,
        transformOrigin: "center",
        boxSizing: "border-box",
        padding: "26px 44px 22px",
        ...rejilla,
      }}>
        {contenido}
      </div>
    </div>
  );
}
