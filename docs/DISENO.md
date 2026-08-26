# Diseño — Factorizando

> Las reglas visuales del proyecto y la bitácora de cómo llegamos a ellas.
> Compañero de [`CONVENCIONES.md`](./CONVENCIONES.md), que cubre la **estructura**
> del contenido (esquemas, índices, registros); esto cubre la **forma**.
>
> **Cómo retomar:** "revisa DISEÑO antes de tocar la interfaz" → leer §2 y §3 antes
> de escribir una pantalla, un bloque o un taller nuevo.

---

## 0. Regla de oro — ningún color se escribe dos veces

Un valor (un hex, un tamaño, un radio) existe **exactamente en un lugar**:
[`src/styles/fx.css`](../src/styles/fx.css). Este documento y cualquier otro citan
tokens **por nombre** (`--fx-coral`, `--fx-h2-size`), nunca el valor. Así no puede
haber deriva entre lo escrito y lo que se ejecuta: si el doc y el CSS discrepan,
el CSS gana, porque el doc no contiene ningún valor con el que discrepar.

La única excepción son los artboards de `docs/diseno/`: el canvas publicado no puede
importar `fx.css`, así que lleva los tokens copiados en su `<helmet><style>`. Cuando
cambie una paleta, hay que resembrarlos (§5).

---

## 1. Dónde vive cada cosa

| Qué | Dónde | Por qué ahí |
|---|---|---|
| **Los valores** — paleta, escala tipográfica, espaciado, radios, sombras, tema claro y oscuro | `src/styles/fx.css` | Es el único sitio donde un color existe de verdad. Si no está aquí, no existe. |
| **Las reglas** — qué se puede y qué no | Este archivo (§2, §3) | Texto que se lee antes de escribir código. Cita tokens, no valores. |
| **El catálogo visual** — cómo se ve cada bloque, en los dos temas y en celular | Canvas *Bloques de presentación* · fuentes en `docs/diseno/presentaciones/*.dc.html` | Una regla escrita no muestra densidad ni ritmo. El canvas sí. |
| **El porqué de cada decisión** | §4 de este archivo, y un archivo en la memoria del proyecto | El razonamiento es lo primero que se pierde y lo único que no se puede reconstruir leyendo el código. |
| **La lista de materias y su acento** | `src/data/materias.js` | Fuente única para Home, header y `/materia/:slug`. El acento es un nombre de token. |
| **El plan para migrar lo viejo** | [`PLAN_MIGRACION.md`](./PLAN_MIGRACION.md) | Las reglas son el destino; el plan es la ruta. |

**Orden al abrir una tarea de interfaz:** §2 y §3 de este archivo → el canvas si es
un bloque de presentación → `fx.css` para el token exacto → código.

---

## 2. Reglas vinculantes

### 2.1. Color

- **Un solo eje de color por pantalla: el acento de la materia.** Es lo único que
  cambia entre materias, junto con el dibujo de portada. Fondo, tipografía,
  espaciado y densidad son idénticos en las siete.
- **No hay colores de acierto y error.** Ni verde ni rojo, en ninguna parte. El
  sistema de retroalimentación es §2.4.
- **Dos temas, los mismos nombres de token.** `fx.css` define el claro en `:root` y
  el oscuro en `.fx-oscuro`, que **redefine los mismos tokens**. Un componente escrito
  con `var(--fx-…)` funciona en los dos sin cambiar una línea; esa es la prueba de que
  está bien tokenizado.
- **El fondo oscuro no es negro puro.** Parte de `--fx-primary-900` y sube dos
  escalones. En videollamada el texto claro sobre casi negro se rompe en bloques al
  comprimirse, y en OLED produce halo alrededor de la letra.
- **Dentro de un dibujo los elementos se separan por valor y trazo, no por matiz** —
  hasta tres elementos. `tema.canal(0..3)` da cuatro pasos del mismo tono del acento.
  **Medido: el par más parecido de esa escala queda en ~1.6 de contraste.** Alcanza cuando
  además hay forma o posición que distinga (dos fuerzas opuestas, radio contra cuerda),
  y no alcanza para cuatro categorías que se tocan.
- **Las gráficas categóricas son la excepción y conservan matices.** Cuatro sectores de una
  circular no se distinguen con una rampa de un solo tono: se midió sobre `graficas-circular`
  y el peor par quedaba en 1.04 —misma luminosidad, solo cambia la saturación—. Ahí el matiz
  hace trabajo que el valor no puede hacer. La regla es elegir matices seguros para el
  daltonismo (azul, ámbar, teal, ciruela; **nunca verde contra rojo**), no renunciar a ellos.
- **La rampa se aleja del fondo, y hacia dónde lo hace se calcula.** Sobre fondo oscuro
  un canal destaca aclarándose; sobre papel, oscureciéndose. Fijar la dirección no basta:
  en los acentos ya oscuros (Español, Historia en claro) oscurecer más no separa nada
  porque no queda recorrido. `crearCanales()` prueba las dos direcciones con el mismo
  repertorio de grados, descarta lo que baje de **2.5 de contraste contra el fondo real
  del tema** y se queda con lo que más se aleje de los canales ya elegidos. El fondo se le
  pasa; escribirlo dentro fue un error real —medí contra un `#0e0f11` que ya no existía—.
- **Nada se distingue solo por color.** Siempre hay además forma, posición o rótulo.

### 2.2. Tipografía

- Cuatro familias para todo el sitio: `--fx-font-heading` (Sora), `--fx-font-body`
  (Figtree), `--fx-font-mono` (IBM Plex Mono, solo rótulos y unidades),
  `--fx-font-math` (STIX Two Text). Ninguna materia trae la suya.
- **Peso mínimo 400 en cuerpo.** El 300 desaparece en celular y en video comprimido.
- Los tamaños salen de la escala (`--fx-h1-size` … `--fx-caption-size`). En una
  diapositiva se miden sobre el lienzo de 1280, no sobre el viewport.

### 2.3. Densidad, toque y aire

- **La diapositiva se centra en vertical.** Solo es seguro porque nada cambia de altura
  sobre la marcha: un bloque con `revelar` conserva su sitio mientras está oculto, y la
  explicación de un reactivo reserva el suyo con `visibility: hidden`. Sin esas dos cosas,
  centrar hace saltar la diapositiva cada vez que algo aparece — medido: 32 px justo
  mientras se lee la pregunta. En el reflujo de móvil se ancla al inicio: ahí el contenedor
  se desplaza, y centrado el sobrante se sale por arriba, fuera del alcance del scroll.
- **Las tarjetas de una misma fila terminan a la misma altura.** La celda de la rejilla se
  estira sola, pero la tarjeta de dentro no: sin `height: 100%` los bordes inferiores quedan
  desparejos, y se nota sobre todo con una tabla alta al lado de dos bloques apilados.
- **Tres bloques en fila solo si son lo mismo.** Dos ejemplos en paralelo caben a 6 columnas
  cada uno; una trampa es otra cosa y va debajo, a las doce. Meter los tres a 4 columnas
  aprieta el que más texto tenga.
- **Un control no es más ancho porque quepa.** En un reactivo, el texto más largo de una
  opción ocupa 74 px de mediana; en un botón de 680 px eso es un 11 % de tinta y un 89 % de
  recuadro vacío que se lleva la vista antes que la pregunta. La pregunta va a 7 columnas y
  las opciones a 5, no al revés.

- Máximo **cinco bloques** por diapositiva; tablas de **seis filas** como tope.
- Un solo bloque destacado por diapositiva. Dos enunciados clave equivalen a ninguno.
- Zonas táctiles de **44 px** mínimo medidos en pantalla real (`--fx-control-sm` es 40:
  vale para escritorio, no para el móvil).
- Los íconos son **SVG dibujados** sobre rejilla de 16/20/24. Nunca emoji ni glifos
  tipográficos como ✓ ✗, que cambian de forma según el sistema. La excepción
  deliberada son los **glifos de materia** (Σ, ¶, λ…), que sí son caracteres Unicode
  compuestos en la fuente que les toca.

### 2.4. Retroalimentación — el sistema sin semáforo

Tres tratamientos sobre **un solo matiz**, el acento:

| Estado | Tratamiento | Cuándo |
|---|---|---|
| **Así es** | Relleno del acento (`-tint` + borde) y palomita | La forma correcta, la respuesta buscada |
| **Así no** | Contorno punteado neutro, tachado sobre el **token exacto**, texto a contraste pleno | Contraste didáctico: habla de la lengua o del procedimiento |
| **Aún no** | Contorno punteado en acento, lupa, y la **explicación en primer plano** | Lo que hizo quien responde |

Reglas duras:

- La respuesta del alumno **nunca se tacha ni se pinta**. Se enciende la correcta y se
  explica dónde estuvo la bifurcación.
- El vocabulario: *Así es* · *Así no se escribe* (sobre la forma) · *Aún no* (sobre
  quien responde) · *N por practicar* · *Dominado · En práctica · Por empezar*. No
  aparece la palabra «incorrecto» dirigida a una persona.
- Los agregados usan una escala secuencial de un matiz en tres intensidades. Nunca
  barras rojas.
- **Es presentación, no datos.** `taller_sesiones` sigue guardando aciertos y errores y
  la escalera de medición del reino sigue contando solo el primer intento; eso deja de
  mostrarse al alumno y le llega al profesor como un mapa de qué practicar.

### 2.5. Acentos por materia

Siete materias, siete acentos, sin repetir. Comprensión lectora **no es una materia**:
entra en Español.

| Materia | Token | Nota |
|---|---|---|
| Matemáticas | `--fx-math` | |
| Español | `--fx-ciruela` | Nuevo. Antes compartía índigo con Física. |
| Física | `--fx-indigo` | |
| Biología | `--fx-sage` | |
| Química | `--fx-coral` | |
| Geografía | `--fx-teal` | Nuevo. Antes compartía sage con Biología. |
| Historia | `--fx-amber` | |

Cada token tiene `-tint` y `-text`, y una contraparte de luminosidad elevada bajo
`.fx-oscuro` con **el mismo nombre**. Añadir una materia obliga a añadir también
`.fx-acento-<x>`, `.fx-cta-<x>` y `.fx-ic-<x>` en `fx.css`.

### 2.6. Adaptación a pantalla

Híbrido, no una cosa ni la otra:

- **≥ 768 px** — la diapositiva es un lienzo fijo de 1280 × 720 que se escala completo.
  Lo que se diseña es lo que se proyecta. Rejilla de 12 columnas, margen 56, canal 20.
- **< 768 px** — los bloques dejan de escalar y reflujan a una columna. Las tablas se
  vuelven fichas apiladas y el cuerpo no baja de 15 px reales. Un teléfono acostado
  deja unos 263 px de alto útil una vez descontadas las dos barras.

---

## 3. Antes de dar por terminada una pantalla

- [ ] Se ve bien en `.fx-oscuro` **y** en claro sin tocar el markup.
- [ ] Ningún hex escrito a mano: todo sale de un token `--fx-…`.
- [ ] Ningún verde ni rojo de acierto/error; ningún emoji como ícono.
- [ ] Nada que se distinga solo por matiz.
- [ ] A 375 px de ancho no se desborda nada y no hay texto por debajo de 15 px.
- [ ] Los controles miden 44 px de alto en móvil.

Las tres últimas **se comprueban solas**: `npm run responsive` recorre las rutas públicas
a 320/360/375/414/768/1280 en un navegador de verdad y falla si algo se sale de la pantalla
o si un control baja de 44 px por debajo del corte táctil de 900. Las tres primeras siguen
siendo del ojo. Una pantalla pública nueva se añade a `RUTAS` en
`scripts/verificar-responsive.mjs`.

---

## 4. Bitácora de decisiones

Orden inverso. Cada entrada dice **qué** cambió y **por qué**, que es lo que no se
puede reconstruir leyendo el código.

### 2026-08-24 · El titular dice el método completo

El H1 de la portada pasa a **«Factoriza hasta que cada parte tenga sentido. Reagrupa
hasta que aparezca algo nuevo.»**
*Por qué:* la versión anterior terminaba en la descomposición, y el método que da nombre
al proyecto tiene dos tiempos — partir en factores y volver a agruparlos de otro modo.
El segundo es el que genera conocimiento nuevo, y es literalmente cierto en la metáfora:
la factorización en primos es única, su agrupación no. 24 es 2³×3 siempre, y aun así es
8×3, 6×4 o 12×2 según lo que quieras ver. Se descartaron tres alternativas más cortas
porque ninguna conservaba las palabras que ya estaban publicadas; las cinco versiones
comparadas a tamaño real siguen en la página *Titular del hero* del canvas.

### 2026-08-24 · Sistema modular de diapositivas

Las presentaciones pasan de tipos de slide cerrados a **bloques componibles** sobre una
rejilla de 12 columnas. El sistema ya existía a medias: `regla_rica` (280 usos) apilaba
cinco tipos de bloque. Se generaliza y se amplía el catálogo a 22.
*Por qué:* `SlideRenderer.jsx` tiene 12 749 líneas y 322 SVG cocidos dentro; cada
diagrama nuevo obliga a tocar ese archivo y todos viajan en el mismo chunk.
Catálogo visual en el canvas; ruta en `PLAN_MIGRACION.md`.

### 2026-08-24 · Tema oscuro derivado, no paralelo

`.fx-oscuro` redefine los mismos nombres de token en vez de crear una paleta aparte.
Fondo `#0e1926` en vez de negro puro; acentos elevados en luminosidad.
*Por qué:* permite que el mismo markup sirva para proyectar y para leer en celular, y
convierte «¿está bien tokenizado?» en una prueba que se puede hacer con la vista.

### 2026-08-24 · Fuera el verde y el rojo

Acierto y error dejan de tener color propio. Ver §2.4.
*Por qué:* dos razones, una firme y una útil. La deficiencia rojo-verde afecta a ~1 de
cada 12 hombres: si el matiz es el único canal, uno o dos alumnos de cada veinte no leen
la retroalimentación. Y el rojo hace tres trabajos a la vez —qué pasó, qué tan malo es, y
no dice qué hacer— cuando solo hacen falta el primero y el tercero. *No* se apoya en la
literatura de «el rojo baja el rendimiento» (Elliot & Maier), que ha tenido problemas de
replicación. Lo que sí está sustentado es que un error corregido en el momento se recuerda
mejor que un acierto fácil: por eso el error se sigue viendo; lo que se va es el veredicto.
Distinción que ordena todo: el **contraste didáctico** habla de la lengua y puede ser
tajante; la **retroalimentación** habla de una persona y nunca la tacha.

### 2026-08-24 · Dos acentos nuevos, dos colisiones menos

Español pasa a `--fx-ciruela` y Geografía a `--fx-teal`.
*Por qué:* el design system traía cinco acentos para siete materias, así que en
`materias.js` Español y Física compartían índigo, y Biología y Geografía compartían sage.
Los cinco originales conservan su asignación.

### 2026-08-24 · Una sola tipografía para todas las materias

Se retiran las paletas y familias por materia de `presentaciones/temas.jsx`.
*Por qué:* se cargaban cuatro familias distintas según la materia, y las 695 referencias
a DM Sans del renderer apuntaban a una fuente que nunca se cargó — lo que se veía era la
tipografía por defecto del sistema. Además, un alumno que lleva tres materias debe sentir
una plataforma, no tres.

---

## 5. Cómo se añade una decisión

1. Si toca un valor → cambiarlo en `fx.css`. En ningún otro lado.
2. Si toca una regla → editarla en §2 de este archivo, citando tokens.
3. Siempre → una entrada en §4 con el **porqué**, no solo el qué.
4. Si cambia cómo se ve un bloque → editar el `.dc.html` en
   `docs/diseno/presentaciones/` y volver a publicar el canvas al **mismo enlace**.
5. Si la decisión debe sobrevivir entre sesiones → un archivo en la memoria del
   proyecto con su razonamiento, enlazado desde `MEMORY.md`.

### 2026-08-25 · Los canales de dibujo pasan a la escala del acento

*Qué:* `tema.verde` y `tema.rojo` dejan de existir. Los 390 usos repartidos en 151 archivos
de diagrama pasan a `tema.canal(1)` y `tema.canal(2)`, dos pasos de la rampa del propio
acento. `tema.azul` se queda como estaba: es un matiz ajeno y hace falta cuando algo tiene
que contrastar con el acento.

*Por qué:* eran los últimos verdes y rojos del sistema. Sobrevivían con el argumento de que
dentro de un dibujo no significan «bien» y «mal» —y es cierto—, pero conviven en la misma
pantalla con la retroalimentación, y la coherencia de un tono por materia se rompía cada vez
que aparecía un diagrama. Borrar el token, y no solo sus usos, es lo que impide reintroducirlos
por costumbre.

*Lo que enseñó la medición:* la conversión rompió un caso y ninguna herramienta lo iba a
avisar. En la urna de probabilidad (`UrnaSVG`) el color es la única diferencia entre una bola
roja y una azul, y el ejercicio consiste en contarlas; al pasar el rojo a la rampa quedó a
**1.57 de contraste de `tema.azul` en tema claro**, porque en Matemáticas el acento ya es azul.
El arreglo no fue retocar el color sino dibujar la diferencia —llena, anillo, punto—, que es
la misma solución que la §2.4 le da a acierto y error. Cuando el color carga toda la
distinción, la rampa no es suficiente y hay que darle forma.

### 2026-08-25 · El cuestionario entra al sistema (§2.4 ya se aplica al alumno)

`QuestionarioGenerico.jsx` era el último sitio donde el alumno recibía un veredicto de
semáforo, y era el peor: la §2.4 se había aplicado a las presentaciones y a los talleres,
pero no a la pantalla donde un alumno contesta cien reactivos seguidos.

*Qué había:* la respuesta del alumno se pintaba de ámbar con un `✗`, la correcta llevaba
un `✓`, la explicación un emoji 💡, el puntaje final cambiaba de azul a ámbar a naranja
según el tramo, y la palabra «Incorrecta» aparecía cuatro veces dirigida a quien responde.
Todo salía de una paleta local con diez hex cocidos.

*Qué hay:* los tres tratamientos de la §2.4 sobre el acento. **Así es** con relleno y
palomita; **Aún no** con contorno punteado, lupa y el texto a contraste pleno — sin relleno
y sin color propio, porque la regla dura dice que la respuesta del alumno no se pinta ni se
tacha; y la casilla intacta con su borde neutro. Los tres se distinguen por forma, no por
matiz, y la rejilla de navegación usa las mismas tres formas.

*El cambio de palabra importa tanto como el de color.* «Incorrectas (99)» pasa a «99 por
practicar», y las etiquetas por pregunta a *Así es* / *Aún no*. El ícono de la explicación
es una lupa, no una cruz: no dice «te equivocaste», dice «mira aquí».

*Dos cosas que aparecieron al hacerlo:*

- **`IconoAsiEs` e `IconoAsiNo` vivían dentro de `SlideRenderer.jsx`**, así que sólo los
  alcanzaban las presentaciones. Ahora están en `src/components/retroalimentacion.jsx`
  junto a `IconoAunNo` —la lupa, que la §2.4 pedía y no existía—. Mientras el ícono viva
  dentro de un renderizador, la siguiente pantalla se vuelve a inventar un `✓`.
- **El tema oscuro no redefinía los tokens de estado.** `.fx-oscuro` reescribía superficies,
  texto y los siete acentos, pero no `--fx-success/warning/error/info`: un `--fx-warning-bg`
  sobre fondo oscuro seguía siendo el `#fbf4dc` del tema claro, o sea un bloque casi blanco.
  Añadidos los cuatro tríos, con la misma construcción que los acentos.

*Nota técnica:* las opacidades del acento se calculan con `color-mix()` a partir del token
en vez de concatenar un alfa al hex, que es lo que hacía antes (`C.blue + "33"`) y lo que
impedía usar tokens. Es el primer uso de `color-mix()` en el proyecto.

*Lo que queda fuera:* `BrandName.jsx` tiene su color cocido y lo comparten ocho pantallas
legadas, así que en tema claro la marca se pierde contra la barra. No se toca desde aquí:
cambiarlo arreglaría el cuestionario y rompería las otras siete. El reloj sigue usando ⏰
como ícono, que es la misma infracción de forma más leve.

### 2026-08-25 · Los 23 que quedaban: cuándo un matiz sí significa algo

*Qué:* barrido de los verdes, rojos y rosas que la fase 4D no alcanzó porque estaban
cocidos como hex o `rgba()` y no como token. De los 23 más los rosas de Química, **18
eran relleno huérfano**: la 4D ya había pasado el `stroke` a `tema.canal(N)` y había
dejado el `fill` con el hex viejo, así que la caja tenía contorno de la rampa y relleno
de otro tono. Pasan a `${tema.canal(N)}aa` y `${tema.azul}aa`.

**Cuatro se quedan, y llevan comentario diciendo por qué**: el degradado de
`mod-espectro` (es el espectro visible), los diez tramos de `qaa-ph` (son los colores
reales del indicador universal), los biomas de `eco-biomas` y los cinco reinos de
`evo-reinos`. En los cuatro el matiz **es** el dato que enseña la diapositiva.

*La regla que salió de clasificarlos:* la pregunta no es «¿es verde?» sino **«¿el alumno
tiene que leer el color para entender el dibujo?»**. Si la respuesta es sí, el matiz se
queda y se documenta; si es no, sale a la rampa. Y un caso mixto lo separa: en `qaa-ph`
la escala se queda, pero los rótulos ÁCIDO / NEUTRO / BÁSICO no eran indicador sino
tipografía —el verde quedaba en ~1.5 de contraste sobre papel— y pasan a `tema.texto`.
Los distingue el tramo que tienen encima, que es posición y no matiz.

*Lo que enseñó la medición, otra vez:* la pirámide trófica pasó de cuatro matices a
cuatro pasos de la rampa, y en **tema claro los dos últimos quedan a 1.27** —en Biología
la rampa no tiene recorrido para cuatro—. Se queda así porque ahí el color es redundante:
cada nivel tiene su ancho, su porcentaje y su rótulo. Es el mismo criterio que la urna de
probabilidad, al revés: cuando el color carga toda la distinción hay que darle forma;
cuando la forma ya la carga, la rampa puede permitirse ser estrecha.

*Nota de alcance:* `derivada-secante` vive en un **documento**, no en una diapositiva, y
`DocumentoRenderer` no pasa `tema`. Va con los tokens de `theme.css` como sus dos
hermanas, y por `style` y no por atributo, porque `var()` no se sustituye en un atributo
de presentación de SVG.

### 2026-08-26 · El reactivo es un objeto, no tres apilados

Un reactivo tenía la pregunta suelta arriba, un recuadro debajo y un pie bajo el
recuadro, y muy a menudo el recuadro repetía algo que la pregunta ya decía. Ahora la
pregunta se compone **dentro** del recuadro, encima del espécimen: la pregunta en
`tema.texto` y el espécimen en `tema.acento`. Dos niveles en una caja.

*La regla que ordena todo:* **el recuadro es para lo que hay que mirar, no para repetir
lo que ya se leyó.** De ahí salen los tres casos:

- Si el recuadro aísla algo que se examina —una palabra cuyas sílabas hay que contar,
  una oración con hueco—, se queda, y la pregunta entra con él (`preguntaDentro: true`).
  Cuando la pregunta nombraba la palabra, se reescribe: «¿Cuántas sílabas tiene la
  palabra «establecimiento»?» pasa a «¿Cuántas sílabas tiene la siguiente palabra?».
- Si el recuadro sólo **copia** algo que la pregunta ya contiene, se va el recuadro, no
  la pregunta. Fueron 208 frases repetidas enteras y 38 palabras sueltas.
- Si lo de arriba es una **instrucción** y no una pregunta («Completa la oración»), baja
  a `apoyoRotulo` dentro del recuadro, en versalitas. Una instrucción no se compone como
  una pregunta.

*Las dos columnas igualan altura* (`alignItems: stretch`) y el recuadro centra su
contenido. Medido antes y después en la diapositiva 4 de Acentuación: 176 contra 183 con
el recuadro ocupando 89 —un tercio de la columna vacío— y ahora 183 contra 183.

*Lo que enseñó hacerlo:* la reescritura automática de enunciados es más peligrosa de lo
que parece. El primer intento rompió mayúsculas iniciales y, peor, en «¿Qué antonimia
expresan «verdadero» y «falso»?» se llevó una mitad del par al recuadro y dejó la otra
arriba —el ejercicio ES la pareja—. La versión buena tiene reglas ancladas al enunciado
completo y se niega a actuar cuando hay más de una palabra entrecomillada. De 62
candidatas reescribió 19 y dejó 43 en paz.

*Y una que sólo vio el linter:* sustituir «todas las líneas iguales» del archivo puso la
bandera dos veces en los reactivos que comparten enunciado, dejando la clave repetida en
el objeto. El build compilaba tan campante; `no-dupe-keys` lo cazó.

### 2026-08-26 · El teléfono no era una versión estrecha del escritorio

*Qué:* la Home y el header público estaban maquetados para 1280px y sólo *reducidos* a
375. Se corrigen seis cosas, medidas con un navegador real a 320/360/375/414/768/1280 y
no a ojo.

**La marca no se esconde en ningún ancho.** Había una regla explícita —`.fx-wordmark
{ display: none }` por debajo de 420px— y era la única salida posible, porque el tamaño
viajaba en un `style={{fontSize}}` en línea que ninguna media query podía sobrescribir y
porque el CTA le disputaba la barra. Ahora el tamaño va como variable CSS y **el CTA baja
al panel**: con la barra libre de botones el wordmark entra entero hasta en 320px. Una
barra sin marca no es una barra minimalista, es una pantalla que no dice dónde estás.

**`minmax(340px, 1fr)` no se encoge.** La rejilla de exámenes mantenía la pista en 340
dentro de un contenedor de 280, y la tarjeta se salía por la derecha: `scrollWidth` 360
sobre un viewport de 320. El mínimo va envuelto en `min(340px, 100%)`. Vale para las tres
rejillas de la portada y para cualquier `auto-fit` futuro.

**El titular tenía un piso de 38px y ganaba en todo el rango de teléfono.** Seis renglones
a 375px, y el primer botón a **733px de scroll**: una pantalla entera por debajo del
pliegue en la portada de un sitio cuyo objetivo es que alguien se registre. `clamp(38px,
4.6vw, 58px)` → `clamp(32px, 8.5vw, 58px)`, que crece *con* la pantalla; de 680px en
adelante nada cambia. Con eso y un escalón de cuerpo en `fx.css` (los cuatro valores de
§2.2, ninguno por debajo del piso de 15px de §2.6), el botón sube a 541px.

**El panel móvil iba en el flujo.** Abrirlo añadía ~870px al header y empujaba la página
entera; el salto a un ancla se calculaba con esa altura y, al cerrarse el panel,
aterrizaba 870px más abajo del título. Ahora flota (`position: absolute` bajo la barra),
así que abrir el menú no mueve nada. Se le añaden velo, cierre con Escape y bloqueo del
desplazamiento del fondo — y el velo va **fuera** del header, porque `backdrop-filter` en
`.fx-nav` lo convierte en bloque contenedor y ahí dentro un `position: fixed` se recorta a
la barra en vez de cubrir la pantalla.

**Una sección con `id` es destino de ancla y la barra es pegajosa.** `.fx-sec[id]
{ scroll-margin-top: 88px }`, o el título aterriza debajo del header.

**Los enlaces del pie medían 26px de alto.** §2.3 pide 44 y son zonas táctiles reales. El
corte es el mismo que el del header —por debajo de 900px no se da por supuesto que haya
ratón—, no el de 720: una tableta en vertical también se toca con el dedo.

*Lo que enseñó hacerlo:* el checklist de §3 se puede *comprobar*, no sólo leer. Un script
de Playwright que recorre `document.querySelectorAll('body *')` buscando cajas que se
salgan del viewport, texto por debajo de 15px y controles por debajo de 44 encontró en un
minuto las tres cosas que llevaban meses ahí. Compilar no ve ninguna: el desbordamiento a
320px es una tarjeta 40px fuera de pantalla, no un error. Quedó como **`npm run
responsive`** (`scripts/verificar-responsive.mjs`), y en su primera pasada completa
encontró algo que la revisión a mano se había dejado: `/materia/matematicas` desbordaba a
320px por el mismo `minmax(320px, 1fr)` sin envolver — sólo se había mirado a 375, donde
cabe. Ésa es exactamente la clase de fallo por la que existe.

Sobre `minmax`, la regla en una línea: **una pista de `repeat(auto-fit, minmax(Npx, 1fr))`
no se encoge por debajo de N**. Si el contenedor mide menos, el contenido se sale en vez de
reflujar. Va siempre envuelto: `minmax(min(Npx, 100%), 1fr)`.

*Queda abierto:* `--fx-caption-size` son 13px y §3 pide no bajar de 15 a 375px de ancho.
Afecta a `fx-badge`, `fx-eyebrow`, `fx-card-nivel` y `fx-footer-tit` — todos versalitas
con tracking, donde 13px rinde más de lo que dice el número. §2.6 acota el piso a «el
cuerpo», así que no está claro que sean el mismo caso; se deja escrito en vez de resuelto
a medias. Y `MateriaVer.jsx` no tiene una sola media query: no desborda, pero hereda el
escalón de cuerpo por casualidad, no por diseño.
