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
- **Dentro de un dibujo los elementos se separan por valor y trazo, no por matiz.**
  Con siete materias no queda ningún hue libre. Los cuatro canales disponibles son:
  acento relleno · trazo fuerte en `--fx-text-heading` · trazo medio en
  `--fx-text-muted` · punteado del mismo acento.
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
