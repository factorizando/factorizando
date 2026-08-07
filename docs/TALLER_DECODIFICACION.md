# Taller de Decodificación Lectora

> Taller de regularización de primaria para el alumno que **entiende todo lo que oye
> pero convierte mal las letras en sonidos**. Seis actividades encadenables en una
> sesión de 15-20 minutos.
>
> Es el **primer taller React** del proyecto (`render.tipo: "react"`); los otros cuatro
> son artefactos HTML dentro de un iframe.

---

## 1. Para quién es, y por qué está hecho así

El alumno de referencia va en cuarto de primaria. Se traba al leer en voz alta, adivina
palabras por su forma general en lugar de leerlas letra por letra, y se salta o invierte
sílabas. Pero su lenguaje oral está perfectamente bien: usa y entiende vocabulario
técnico de mecánica —pistón, bujía, cigüeñal, catalizador, biela— y puede explicar el
ciclo de cuatro tiempos.

De ahí sale la decisión de diseño que ordena todo lo demás:

> **No hay que enseñarle qué significan las palabras. Hay que enseñarle a decodificar
> palabras que ya domina de oído, y luego transferir ese mecanismo a palabras nuevas.**

Por eso las palabras pueden ser largas y técnicas mientras las oraciones de los textos
son cortas: **el tema va a su edad, la sintaxis va a su nivel de decodificación**. Y por
eso todo el contenido sale de un banco temático de algo que a él le importa.

### Los cinco principios que el código respeta

| Principio | Dónde vive en el código |
|---|---|
| **Nunca infantilizar.** Estética de tablero de instrumentos, no de globitos. Ya sabe que lee peor que sus compañeros; la pantalla no se lo recuerda. | `estilo.js` |
| **Contenido a su edad, lectura a su nivel.** Textos técnicos reales con oraciones cortas. | los bancos en `src/data/talleres/decodificacion/` |
| **No corregir de inmediato.** Ante un error: 2.2 s de silencio → "míralo otra vez" → la primera sílaba → la solución. Enseñar la respuesta al primer fallo le confirma que adivinar sale más barato que decodificar. | `useAyuda` en `hooks.js` |
| **Elogiar el progreso, no el acierto.** Se compara contra su propia marca anterior, nunca contra una meta ni contra otros. | `compararConAnterior` en `hooks.js` |
| **Sesiones cortas.** El modo sesión encadena las seis en 15-20 min. | `Decodificacion.jsx` |

### La métrica: "a la primera"

En este taller **no se avanza hasta acertar**, así que al final siempre están todas
resueltas y contar aciertos no diría nada. Lo que sí se mueve entre sesiones es **cuántas
le salieron sin tener que reintentar**, y eso es justo lo que mide si está decodificando
mejor o si sigue adivinando. Esa es la cuenta que se guarda como `aciertos` y la que se
compara entre rondas; `errores` cuenta todos los reintentos.

---

## 2. Cómo se abre

```bash
npm run dev
```

- **En producción:** `/regularizacion` → *Taller de Decodificación Lectora*, o directo en
  `/regularizacion/decodificacion`. Pide sesión de **admin**, como toda la sección.
  Primero se elige el alumno (o "practicar sin registrar"), luego el tema.
- **En desarrollo:** `/#/preview-decodificacion` entra sin sesión, en modo libre. La ruta
  está detrás de `import.meta.env.DEV` en `App.jsx`, así que no se compila a producción.

Diseñado para **tablet en horizontal proyectada a una TV**: objetivos táctiles de 56 px
para arriba, tipografía grande y ninguna dependencia del teclado. La tipografía es una
pila del sistema y todos los diagramas son SVG escritos a mano, para que el taller se vea
igual en un salón sin internet.

### Voz

El audio usa `speechSynthesis` con voz `es-MX` (o cualquier otra en español como
respaldo). **Si el dispositivo no trae ninguna voz en español, el taller sigue
funcionando**: lo avisa en la pantalla de inicio, esconde los botones de audio en vez de
dejarlos inertes, y cada actividad degrada de forma útil —Familias enseña la palabra un
instante y la esconde; las dos primeras pasadas de Lectura las lee el maestro—.

---

## 3. Las seis actividades

Se pueden abrir sueltas o encadenarlas. **El orden del modo sesión no es arbitrario:** va
de la sílaba suelta al texto corrido, y cada actividad se apoya en la anterior.

### 1. Palmeo de sílabas
Se muestra una palabra y el alumno golpea un botón grande una vez por cada sílaba que
oye. Al acertar, la palabra se abre en sus sílabas y se lee golpe por golpe.

*Por qué:* es la puerta de entrada. Contar sílabas lo obliga a **recorrer la palabra por
dentro** antes de decidir nada, que es exactamente lo que no hace cuando adivina por la
silueta. El botón ocupa media pantalla a propósito: se marca con la palma, de pie frente
a la TV.

### 2. Armar con sílabas
Las sílabas llegan desordenadas en fichas; se tocan en orden para formar la palabra. Se
dice primero en audio. Al acertar se lee sílaba por sílaba resaltando cada una.

*Por qué:* ya no basta contar los pedazos, hay que ordenarlos. Ataca directamente **el
salto y la inversión de sílabas**, que es lo que hace que "pistón" le salga "pitón".
Se toca, no se arrastra: el arrastre en tablet proyectada falla seguido y convierte un
ejercicio de lectura en uno de puntería.

### 3. Familias de palabras
Suena una palabra y hay que elegir cuál de cuatro se oyó: `piso / pisa / pista / pistón`.

*Por qué:* **es la actividad que ataca el problema de raíz.** Las cuatro opciones tienen
la misma forma general, así que la silueta no sirve de nada y la única salida es recorrer
la palabra letra por letra. Por eso los distractores son **siempre vecinos ortográficos**
y nunca palabras distintas: con `pistón / elefante / mesa / río` acertaría sin leer, y el
ejercicio mediría lo contrario de lo que quiere medir.

### 4. Anclas ortográficas
Reglas difíciles (güe/gue, j/g, ll/y, r/rr, c/s/z) enseñadas desde una palabra que él ya
pronuncia bien: `cigüeñal` para la diéresis, `bujía` para la j, `llanta` para la ll. Se
lee la tarjeta de regla y luego se decide letra por letra en palabras nuevas, con trampas
que **no** llevan la marca (`guiso`, `guerra`).

*Por qué:* el ancla es el puente. La regla abstracta no se sostiene sola, pero colgada de
una palabra que él dice todos los días sí. **Ojo:** en yeísmo mexicano `ll` y `y` suenan
igual, y `taza`/`tasa` también; aquí no se decide de oído sino por regla, y la tarjeta lo
dice con todas sus letras.

### 5. Etiquetar el diagrama
Un corte del cilindro (o la cancha, o el cohete) dibujado en SVG, con las etiquetas para
llevar a cada pieza. Al acertar aparece un dato técnico real sobre esa pieza.

*Por qué:* **aquí él sabe más que la app.** Lo que se entrena es leer la etiqueta escrita
y llevarla a la pieza que ya reconoce de vista. Por eso al acertar recibe información y
no una felicitación: se le habla como a quien ya conoce el tema, que es lo que es.

### 6. Lectura repetida cronometrada
El núcleo del entrenamiento de fluidez, sobre un texto de 60-90 palabras. Tres pasadas:

1. **Modelo** — la app lee resaltando cada palabra; él sigue con la vista. Oye cómo suena
   el texto bien leído antes de intentarlo.
2. **Dueto** — la app lee más despacio y él lee encima. La voz lo sostiene en las palabras
   donde se trabaría solo.
3. **Solo** — lee él y corre el cronómetro, que él detiene al terminar.

Al final, una gráfica de palabras por minuto con todas sus pasadas anteriores sobre ese
mismo texto.

*Por qué se repite el texto:* **el texto no rota cada sesión.** Se lee `META_REPETICIONES`
veces (4) antes de pasar al siguiente, porque la mejora que interesa es sobre el mismo
texto. Cambiarlo cada vez destruiría la medición: leer un texto nuevo más lento no
significa nada.

---

## 4. Dónde vive cada cosa

```
src/data/talleres/
  espanol/decodificacion.js         el TALLER (metadatos, actividades, objetivos)
  decodificacion/
    index.js                        registro de bancos + validación en dev
    mecanica.js  futbol.js  espacio.js

src/components/talleres/decodificacion/
  Decodificacion.jsx                shell: elegir tema, menú, modo sesión, panel
  Act*.jsx                          una por actividad
  PanelProfesor.jsx                 el ícono discreto de la esquina
  Diagramas.jsx                     los SVG y las coordenadas de sus puntos
  estilo.js  hooks.js  ui.jsx       paleta · hooks · componentes
  lib/  silabas.js  voz.js  registro.js  texto.js  lecturas.js
```

El contenido vive **en archivos de datos separados de la lógica**, para que se puedan
agregar palabras y textos sin tocar un solo componente.

---

## 5. Cómo agregar contenido

### Una palabra

En el array `palabras` del banco. Una línea:

```js
{ palabra: "termostato", dato: "No deja pasar el líquido al radiador hasta que el motor agarra temperatura." },
```

- **Las sílabas se calculan solas** (`lib/silabas.js` implementa las reglas del español:
  dígrafos ch/ll/rr, grupos inseparables, diptongos e hiatos). Solo si un caso raro sale
  mal se fuerza con `silabas: ["ter", "mos", "ta", "to"]`.
- `dato` se muestra al acertar. Debe **dar información real**, no premiar. La prueba: que
  la pueda leer alguien que ya sabe cómo funciona la pieza sin sentirse tratado como niño.

### Una familia de palabras

```js
{ objetivo: "pistón", opciones: ["piso", "pisa", "pista", "pistón"] },
```

`objetivo` tiene que estar dentro de `opciones` (en dev se avisa si no). **Los tres
distractores deben ser vecinos ortográficos del objetivo** —misma silueta, una letra o
sílaba de diferencia— y palabras reales. Es la regla que hace o rompe la actividad.

### Un ancla ortográfica

```js
{
  id: "dieresis",
  regla: "La diéresis: güe, güi",
  ancla: "cigüeñal",                    // palabra que el alumno YA pronuncia bien
  pregunta: "¿Los dos puntitos van o no van?",
  explicacion: "En cigüeñal oyes la u…",
  opciones: ["ü", "u"],
  reactivos: ["cig[ü]eñal", "embrag[u]e", "g[u]erra", "ping[ü]ino"],
}
```

La letra en disputa va **entre corchetes**; el taller la esconde y la respuesta correcta
es justo lo que está adentro. No hay que contar índices de caracteres a mano. Lo que va
entre corchetes tiene que ser una de las `opciones` (en dev se avisa si no).

**No todos los bancos traen las cinco reglas.** Se ponen las que tienen una palabra ancla
creíble *dentro* del tema; forzar una regla con una palabra ajena rompe lo único que hace
funcionar la actividad.

### Un texto

```js
{ id: "frenos", titulo: "El sistema de frenos", cuerpo: "Los frenos detienen el auto. …" },
```

**60-90 palabras** (en dev se avisa si se sale del rango), **una idea por oración**,
sintaxis simple. El tema, en cambio, va técnico de verdad: lo fácil es la sintaxis, no el
contenido.

### Un banco temático completo

1. Crear `src/data/talleres/decodificacion/<tema>.js` exportando `BANCO` con
   `{ id, nombre, icono, descripcion, palabras, familias, anclas?, diagrama?, textos }`.
2. Importarlo en `decodificacion/index.js` y agregarlo a `BANCOS` (el orden del array es
   el de la pantalla de inicio).
3. Si trae `diagrama`, dibujar su SVG en `Diagramas.jsx`: una función `Fondo` y las
   coordenadas de cada punto etiquetable dentro del `viewBox`. Los `id` de `puntos` tienen
   que coincidir con los `id` de `diagrama.piezas` en el banco.

Un banco sin `anclas` o sin `diagrama` simplemente no ofrece esas actividades, ni sueltas
ni dentro de la sesión: no hace falta tocar nada más.

**Cómo elegir el tema:** tiene que ser algo que el alumno **ya domina hablando**. Ese es
el mecanismo entero. Un banco de palabras que no sabe pronunciar convierte el taller en
una clase de vocabulario, que es justo lo que no necesita.

---

## 6. Qué se guarda y dónde

Dos destinos, distintos a propósito:

- **`taller_sesiones` (Supabase)** recibe el marcador grueso de cada actividad: `actividad`,
  `grupo` (`"8-10"`), `aciertos` (los que salieron a la primera) y `errores`. Es lo que ya
  aparece en el expediente del alumno y no necesitó esquema nuevo. La lectura repetida se
  registra como `"Lectura repetida · <título del texto>"` con las tres pasadas.
- **`localStorage`** guarda el detalle fino que esa tabla no puede alojar: **qué palabras se
  le atoran** y **cuánto tardó en cada lectura**. Vive en el dispositivo donde se trabaja.
  Si algún día se quiere consultar desde otra máquina hace falta una tabla con una columna
  `jsonb`; hasta entonces el panel del profesor lo advierte.

En modo libre (sin alumno elegido) no se escribe nada en Supabase, para no dejar filas
huérfanas en el expediente.

### Panel del profesor

Se abre con el ícono discreto de la esquina superior derecha. Lo más valioso es la
**lista de palabras atoradas ordenada por número de errores**: es la que le dice al
maestro qué trabajar en papel antes de la próxima sesión. Debajo, el historial de tiempos
de lectura por texto en gráfica, y las sesiones registradas en el expediente.
