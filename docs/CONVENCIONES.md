# Convenciones de contenido — Factorizando

> Estándar único para crear y mantener **cuestionarios**, **presentaciones** y **teoría**.
> Objetivo: contenido homogéneo, una sola fuente por tema, fácil de mantener.
>
> **Estado:** estándar definido (no se han migrado todavía los archivos existentes).
> La sección [Brechas detectadas](#brechas-detectadas) lista lo que falta alinear.

---

## 1. Principio de organización: por **materia**, no por examen

Todo el contenido se organiza en carpetas **por materia**. El examen al que aplica
(EXANI-I / EXANI-II / UNAM) **no** se codifica en la ruta: se declara en `metadata.examenes`.

**Por qué:** ~mitad del contenido se comparte entre exámenes. Organizar por examen
obliga a duplicar archivos (hoy existe `sujeto-predicado-uni.js` en `preparatoria/` Y
en `universidad/`). Una sola fuente por tema elimina la divergencia.

Materias canónicas (mismo nombre de carpeta en los tres árboles):

```
matematicas · espanol · fisica · quimica · biologia · geografia · comprension · ingles
```

Estructura objetivo:

```
src/data/
  cuestionarios/<materia>/<slug>.js
  presentaciones/<materia>/<slug>.js
  teoria/<materia>/<slug>.jsx
```

> Las presentaciones ya siguen este eje. Los cuestionarios (hoy en `preparatoria/`
> y `universidad/`) se migrarán a este esquema. Teoría se decide después.

---

## 2. Reglas transversales (todos los tipos)

| Regla | Estándar |
|---|---|
| **Extensión** | `.js` para datos puros. `.jsx` **solo** si el archivo contiene JSX (p. ej. simuladores con componentes, teoría). |
| **Nombre de archivo** | `kebab-case`, sin sufijos de examen (`-exani-i`, `-uni`, `-prepa`). El examen va en metadata. |
| **`id`** | Igual al nombre de archivo sin extensión. Único en todo el proyecto. Es la clave de las rutas (`/cuestionario/<id>`, `/ver/<id>`). |
| **Export** | Cuestionarios y teoría: `export default`. Presentaciones: `export const PRESENTACION` (ya consistente, se mantiene). |
| **`metadata.examenes`** | Array: `["EXANI-I"]`, `["EXANI-II","UNAM"]`, etc. Reemplaza la distinción por carpeta. Valores permitidos: `EXANI-I`, `EXANI-II`, `UNAM`. |
| **`metadata.nivel`** | `"preparatoria"` o `"universidad"` (audiencia, no organización). |
| **Comentario de cabecera** | Primera línea: `// src/data/<ruta-real-del-archivo>`. |

---

## 3. Esquema canónico — Cuestionario

```js
// src/data/cuestionarios/biologia/la-celula.js
export default {
  metadata: {
    id: "la-celula",            // === nombre de archivo, === id en el índice
    titulo: "La Célula",
    materia: "Biología",
    tema: "La Célula",
    nivel: "universidad",
    examenes: ["EXANI-II", "UNAM"],
  },
  config: { timePerQuestion: 60 },   // siempre presente
  bloques: [                          // opcional; omitir si el quiz no se divide
    { id: "nucleo", titulo: "Núcleo", from: 0, to: 11, color: "#3b9eff" },
  ],
  questions: [
    {
      id: "q1",                       // OBLIGATORIO y único dentro del quiz
      question: "¿Cuál es la función principal del núcleo?",
      options: ["...", "...", "...", "..."],   // 4 opciones, prefijo "a) " incluido
      correctAnswer: 1,               // índice 0-based
      explanation: "...",             // OBLIGATORIO, nunca cadena vacía
      diagram: null,                  // opcional: componente/clave de SVG
    },
  ],
}
```

Reglas:
- `questions[].id` **obligatorio**, pero no se escribe a mano: `numerarPreguntas()` lo asigna al cargar el índice y el `id` declarado gana. `npm run integridad` avisa si alguno falta o se repite.
- `explanation` nunca vacía. Una pregunta sin explicación no se considera terminada.
- `correctAnswer` es índice numérico, no la letra.
- En `bloques`, `cantidad` es redundante con `from`/`to` → se elimina (derivable).

---

## 4. Esquema canónico — Presentación

```js
// src/data/presentaciones/matematicas/circulo.js
export const PRESENTACION = {
  id: "circulo",
  titulo: "El Círculo",
  materia: "Matemáticas",     // OBLIGATORIO (faltan en ~1 archivo)
  subtema: "Geometría",       // OBLIGATORIO (faltan en ~7 archivos)
  examenes: ["EXANI-I", "EXANI-II"],
  nivel: "preparatoria",
  slides: [ /* ... */ ],
}
```

### 4.1. Dos capas: `slide.tipo` y `bloque.tipo`

El sistema tiene **dos niveles** (hoy sin documentar). Entenderlos es lo que permite
componer presentaciones libremente:

- **Slides atómicas** — una slide con su propio `tipo` y campos. Render directo.
- **Slides compuestas** — una slide que contiene `bloques: [...]`, donde cada bloque
  tiene su propio `bloque.tipo`. Las piezas se apilan en el orden del array.

El array `slides[]` **no impone secuencia**. "Título → tabla → ejemplos → trampa" es una
convención de autor, no una regla del motor. Puedes ordenar como quieras y mezclar slides
atómicas con compuestas. Lo que sigue es el **menú** de piezas disponibles.

**Tipos de slide atómica** (`slide.tipo`, despachados en el `switch` de `SlideRenderer.jsx`):

| Tipo | Uso |
|---|---|
| `portada` | Carátula del tema. |
| `definicion` | Definición formal con símbolo/fórmula y condiciones. |
| `concepto` | Concepto con items/lista. |
| `lista_criterios` | Enumera criterios; cada uno se detalla luego. |
| `criterio_detalle` | Desarrollo de un criterio. |
| `ejemplo` | Ejemplo resuelto. |
| `ejercicio` | Ejercicio (con o sin solución guiada). El más usado. |
| `regla_rica` | Regla mnemotécnica o atajo. |
| `arbol_decision` | Flujo de decisión (usa `@xyflow/react`). |
| `resumen` | Cierre / síntesis. |
| `video` 🆕 | Video de YouTube embebido (§4.3). |
| `interactivo` 🆕 | Componente manipulable: mate (mafs) o física (matter-js) (§4.4). |

**Tipos de bloque** (`bloque.tipo`, dentro de una slide compuesta con `bloques[]`):

| Tipo | Uso |
|---|---|
| `texto` | Bloque expositivo. |
| `par` | Comparación de dos elementos (correcto/incorrecto, antes/después). |
| `tabla` | Datos tabulares. |
| `diagrama` | Diagrama estático vía registro `svgDiagram` (§4.2). |
| `trampa` | Error común / distractor a evitar. |
| `video` 🆕 | Mismo render que la slide de video, como bloque. |
| `interactivo` 🆕 | Mismo render que la slide interactiva, como bloque. |

> **Acción de doc:** CLAUDE.md solo lista 7 tipos. Sincronizar con esta tabla al migrar.

### 4.2. Diagramas estáticos: registro único 🆕

**Problema actual:** `SlideRenderer.jsx` tiene ~12,700 líneas con **322 componentes
`...SVG`** y **251 comparaciones `slide.svgDiagram === "..."`** en cadenas de `if`.
Cada diagrama nuevo obliga a editar ese archivo.

**Estándar:** los diagramas viven por materia y se resuelven con un mapa único.

```
src/components/diagramas/
  <materia>/<slug>.jsx     // componente que recibe { tema }
  index.js                 // export const DIAGRAMS = { "circulo-partes": CirculoPartesSVG, ... }
```

```jsx
// En SlideRenderer / SlideDiagrama:
import { DIAGRAMS } from "./diagramas";
const D = DIAGRAMS[slide.svgDiagram];
return D ? <D tema={tema} /> : null;   // sin if-chains
```

Reglas:
- Un `svgDiagram` (string) = una clave en `DIAGRAMS`. Sin duplicar lógica de despacho.
- Todo componente de diagrama recibe `{ tema }` y respeta la paleta (no fija colores).
- Se permite `React.lazy` por materia para no cargar todos los SVG de golpe.

### 4.3. Video (YouTube) 🆕

Slide atómica **o** bloque dentro de una compuesta. Mismo shape:

```js
{
  tipo: "video",
  youtubeId: "dQw4w9WgXcQ",   // OBLIGATORIO (solo el id, no la URL completa)
  titulo: "...",              // opcional
  caption: "...",             // opcional, pie de video
  inicio: 30,                 // opcional, segundos de arranque
  ratio: "16:9",              // opcional, default "16:9"
}
```

Render:
- Usar dominio `youtube-nocookie.com` (privacidad).
- **Click-para-cargar**: mostrar miniatura (`https://img.youtube.com/vi/<id>/hqdefault.jpg`)
  y montar el `<iframe>` solo al hacer clic, para no incrustar varios reproductores a la vez.

### 4.4. Interactivos: registro único 🆕

Mismo patrón que los diagramas, pero para componentes manipulables con el mouse.

```
src/components/interactivos/
  matematicas/<slug>.jsx   // motor: mafs (useMovablePoint, etc.)
  fisica/<slug>.jsx        // motor: matter-js (gravedad, colisiones, arrastre)
  index.js                 // export const INTERACTIVOS = { "recta-pendiente": RectaPendiente, ... }
```

Shape en la slide/bloque:

```js
{
  tipo: "interactivo",
  interactivo: "recta-pendiente",   // clave en INTERACTIVOS
  props: { m: 2, b: -1 },           // parámetros iniciales del componente
  titulo: "...",                    // opcional
  instruccion: "Arrastra el punto para cambiar la pendiente",  // opcional
}
```

Motores adoptados:
- **Matemáticas → `mafs`** (React nativo; `useMovablePoint` para arrastrar puntos,
  vértices y vectores; plano cartesiano y funciones). Motor principal. *Pendiente instalar.*
- **Física → `matter-js`** (ya instalado; objetos con gravedad/colisiones arrastrables
  para cinemática y dinámica).
- `jsxgraph` queda en reserva solo para construcciones geométricas que mafs no cubra;
  antes de usarlo hay que resolver el bug de fondo blanco (ver CLAUDE.md).

Reglas:
- Cada interactivo recibe `{ tema, ...props }` y es autónomo (limpia su board/engine al desmontar).
- Catálogo inicial sugerido (mate): `recta-pendiente`, `funcion-cuadratica`,
  `triangulo-vertices`, `vector-suma`. (física): `caida-libre`, `plano-inclinado`,
  `colisiones`.

---

## 5. Esquema canónico — Teoría

> El mecanismo (JSX vs HTML en `public/guias/`) **queda por decidir**. Mientras tanto,
> el contenido nuevo usa JSX con `shared.jsx` (`M`, `B`, `useKaTeX`).

```jsx
// src/data/teoria/matematicas/fracciones-decimales.jsx
import { M, B, useKaTeX } from "../shared";
export default function FraccionesDecimales() { /* ... */ }
```

---

## 6. Registro único (evitar fuentes paralelas)

Hoy un recurso se referencia en **tres** sitios que pueden desincronizarse:
`cuestionariosIndex.js`, los árboles de navegación (`preparatoriaData.js` /
`universidadData.js`) y `presentacionesIndex.js`.

**Regla:** el `id` es la única clave de verdad.
- `metadata.id` del archivo === `id` con que se registra en el índice === nombre de archivo.
- El índice (`cuestionariosIndex.js` / `presentacionesIndex.js`) es el **único** registro
  de existencia. Los árboles de navegación solo **referencian** por `id`/ruta, nunca
  redefinen metadata.
- Al crear contenido, verificar que `metadata.id` y la clave del índice coincidan.

---

## 7. Checklist para contenido nuevo

**Cuestionario**
- [ ] Archivo en `cuestionarios/<materia>/<slug>.js`, `export default`.
- [ ] `metadata` completa con `examenes` y `nivel`.
- [ ] `metadata.id` === slug === id en el índice.
- [ ] Cada `question` tiene `id` único y `explanation` no vacía.
- [ ] Registrado en `cuestionariosIndex.js` y referenciado por `id` en el árbol.

**Presentación**
- [ ] Archivo en `presentaciones/<materia>/<slug>.js`, `export const PRESENTACION`.
- [ ] `materia` y `subtema` presentes; `examenes` declarado.
- [ ] Cada slide usa un `tipo` del catálogo §4.
- [ ] `svgDiagram` referenciados existen en `SlideRenderer.jsx`.
- [ ] Registrado en `presentacionesIndex.js`.

---

## Brechas detectadas

La hoja de ruta está en [`PLAN_MIGRACION.md`](./PLAN_MIGRACION.md). Las catorce brechas
originales se comprobaron una por una contra el código el 25 de agosto de 2026 (fase 7);
**doce quedaron cerradas** y las dos que siguen abiertas están abajo con lo que se sabe hoy.
Al comprobarlas aparecieron además dos cosas que no estaban en la lista, y van al final:
esa es la razón de verificar en vez de dar por cerrado.

### Sigue abierto

1. **Mecanismo de teoría — JSX contra HTML.** Conviven los dos: nueve componentes en
   `src/data/teoria/*.jsx` y tres guías estáticas en `public/guias/*.html`. No bloquea nada
   y por eso lleva un año sin decidirse; decidirlo es elegir cuál se retira, no cuál se usa.
2. **Once tipos de diapositiva muertos en `SlideRenderer.jsx`.** Tras la migración 4C las
   3 162 diapositivas de las 65 presentaciones son `lienzo`; `portada`, `definicion`,
   `concepto`, `lista_criterios`, `criterio_detalle`, `ejercicio`, `ejemplo`, `regla`,
   `regla_rica`, `resumen` y `resumen_acentuacion` ya no los usa ningún mazo. Se conservan
   porque borrarlos no se ha verificado diapositiva por diapositiva.

### Cerrado (con lo que lo cierra)

| # | Brecha original | Qué la cierra |
|---|---|---|
| 1 | Cuestionarios por nivel → por materia | `src/data/cuestionarios/` tiene `matematicas`, `biologia`, `espanol` y `simuladores`; `sujeto-predicado-uni.js` ya no existe |
| 2 | Export mixto en los bancos | Sólo `cuestionariosIndex.js` usa `export const`, que es lo correcto: es el índice, no un banco |
| 3 | `.jsx` sin JSX | Ningún `.jsx` de cuestionarios carece de JSX |
| 4 | `questions[].id` faltantes | `numerarPreguntas()` los asigna al cargar y `npm run integridad` lo vigila |
| 5 | 350 `explanation: ""` vacías | Fase 6: las 250 de `producto-enteros` y las 100 de `la-celula` |
| 6 | Presentaciones sin `materia`/`subtema` | `npm run integridad` no reporta ninguna |
| 7 | CLAUDE.md documentaba 7 tipos de slide | Corregido, y ahora dice cuál se usa de verdad (uno) |
| 8 | Comentarios «TEMPLATE» obsoletos | Cero en `cuestionariosIndex.js` |
| 9 | `metadata.examenes` inexistente | Fase 5: en las 65 presentaciones y los 27 cuestionarios, con chequeo de integridad |
| 11 | `SlideRenderer.jsx` de ~12 700 líneas | 2 431 líneas; los 311 diagramas viven en `DIAGRAMS` |
| 12 | Sin soporte de video | Bloque `video` en el registro (youtube-nocookie, carga diferida) |
| 13 | Sin capa interactiva | Registro `INTERACTIVOS` con tres componentes |
| 14 | `jsxgraph` importada sin usar | Import retirado; el chunk de `SlideRenderer` pasó de 979 KB a 54 KB |

### Lo que apareció al comprobar

- **La brecha 14 no era higiene, eran 925 KB.** «Importada pero sin usar» sonaba a residuo
  de estilo; el import arrastraba la librería entera al chunk de las presentaciones. Medirlo
  costó un `npm run build`, y es la lección: una dependencia sin usar no es gratis.
- **La tabla de librerías de `CLAUDE.md` afirmaba cosas falsas en las dos direcciones.**
  Presentaba `mathjs` y `matter-js` como si estuvieran en uso —nada las importa— y declaraba
  Three.js «no instalada» cuando lo está y produce un chunk de 732 KB. Ahora la tabla lleva
  una columna *In use?* con el número de archivos, que es lo único que no se puede fingir.
