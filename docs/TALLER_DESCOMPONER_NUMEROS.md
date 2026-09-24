# Talleres de Descomponer números

> Tres talleres de matemáticas para regularización de primaria (8 a 12 años)
> que practican la **relación entre las partes de una operación** con un
> término escondido: sumar por complementos, multiplicar con la distributiva y
> reconstruir un término de la división. Es el puente entre "sé hacer la
> cuenta" y "entiendo qué la hace verdadera", que es la antesala del álgebra.
>
> Son tres **entradas independientes** del catálogo (`sumar-descomponiendo`,
> `multiplicar-descomponiendo`, `dividir-descomponiendo`) que comparten motor y
> armazón. Son talleres React (`render.tipo: "react"`).

---

## 1. Para quién es, y por qué está hecho así

El alumno llega a regularización sabiendo —o casi— ejecutar la cuenta. El
problema que atacan estos talleres es otro: no reconoce **qué relación hay
entre los números** de la operación. Puede calcular `47 + 8` contando con los
dedos y aun así no saber que `47 + 3` ya lo lleva a la decena, ni que
`47 + 8 = 47 + 3 + 5`. Y no puede contestar "¿cuántas estampas había en total?"
aunque el problema ya le dé los grupos, lo que toca a cada uno y lo que sobra.

De ahí sale el principio que ordena los tres:

> **Se practica la relación, no el procedimiento.** Cada ejercicio esconde un
> término y el alumno lo reconstruye. `a = b × q + r`, `a × b = a × m + a × n`
> y `(a + b) + c = d` dejan de ser fórmulas para volverse preguntas.

### Los principios que el código respeta

| Principio | Dónde vive |
|---|---|
| **Lo visual primero.** La operación escrita aparece al final, en `Operacion`. | `Figuras.jsx` y `Escenario.jsx` |
| **La escena no muestra la respuesta.** Si se esconde el residuo, no se dibuja el sobrante; si se esconden las unidades por grupo, los grupos salen vacíos. | `Figuras.jsx` (`FiguraDivision` sobre todo) |
| **Los números cambian siempre.** Nada de listas fijas; todo se genera dentro de los rangos y sin repetidos. | `src/data/talleres/descomponer/` |
| **Error sin castigo.** Al fallar se muestra la respuesta con la figura que la explica; sin rojo de alarma, sin sonido de derrota, sin restar. | `Retro` en `ui.jsx`, `sonar("mal")` |
| **Elogiar el progreso, no el acierto.** El cierre compara contra la partida anterior *del mismo taller y bloque*. | `compararConAnterior` en `comun/registro.js` |
| **La respuesta se construye, nunca se sortea.** En división, `a = b × q + r` por construcción; en suma, `c = d − (a + b)`; en producto, `n = b − m`. | los tres generadores |

### El rango de edad

De 8 a 12 años la distancia es grande, así que al abrir el taller el maestro
elige un bloque —**8-9** o **10-12**— y eso ajusta la dificultad. El corte **no
es de edad sino de representación**: antes de los 10 conviene dibujar y contar;
después, solo números. El niño no vuelve a ver esa pantalla; el maestro puede
cambiarla desde la barra de arriba, chiquita y gris, junto al panel.

---

## 2. Cómo se abren

```bash
npm run dev
```

- **En producción:** `/regularizacion` → cualquiera de los tres, o directo en
  `/regularizacion/sumar-descomponiendo`, `/regularizacion/multiplicar-descomponiendo`
  y `/regularizacion/dividir-descomponiendo`. Pide sesión de **admin**, como
  toda la sección.
- **En desarrollo:** `/#/preview-sumar-descomponiendo`,
  `/#/preview-multiplicar-descomponiendo` y `/#/preview-dividir-descomponiendo`
  entran sin sesión, en modo libre. Están detrás de `import.meta.env.DEV`, así
  que no se compilan a producción.

---

## 3. Los tres talleres

### ➕ Sumar descomponiendo — complementos y suma por partes

Dos modos:

- **Completar el número** — `(a + b) + c = d`: se conoce el parcial y la meta,
  falta el complemento. En 8-9 la meta es 10 o 20 y se dibuja el marco de
  diez; en 10-12 llega hasta 100 y se usa una barra, con números múltiplos de 5
  para que el complemento se haga de cabeza.
- **Romper para sumar** — `a + b = (a + m) + n`: se busca primero cuánto le
  falta a `a` para la decena (m) y después el total. La recta numérica muestra
  el salto a la decena y el salto restante, y deja de mostrarlos hasta que se
  contestan.

### ✖️ Multiplicar descomponiendo — la propiedad distributiva

`a × b = a × m + a × n`, con `m + n = b`. La parte "fácil" (m) la da el
ejercicio: en 8-9 es 5 (o un reparto chico) y el arreglo se dibuja para contar;
en 10-12 es la decena del factor, que es el atajo del cálculo mental. Los pasos
van de lo simple a lo compuesto: en 8-9 se pide la parte que falta y el total;
en 10-12, además, cada producto parcial. El **modelo de área** —el rectángulo
partido en dos— es el mismo puente del Huerto.

> Nota: coincide en tema con `producto.html` (rompe el número / la caja), pero
> aquí el foco es el término escondido y la relación, no el algoritmo.

### ➗ Dividir descomponiendo — la relación `a = b × q + r`

Se esconde **un** término —el total, el número de grupos, lo que toca a cada
uno o lo que sobra— en problemas de reparto (estampas, equipos, pesos, etapas).
No es la Pizzería: ahí se contesta el cociente y el residuo a mano; aquí hay
que moverse por la relación completa. Fallar el cociente, el divisor o el
residuo son **categorías distintas** en el panel, porque son problemas
distintos. En 8-9 nunca se esconde el número de grupos: no hay forma de
dibujar "b grupos" desconocidos.

---

## 4. Dónde vive cada cosa

```
src/data/talleres/descomponer/
  rangos.js     ← LA PERILLA: los dos bloques de edad, por operación
  suma.js  producto.js  division.js   generadores + contextos por taller
  index.js      operaciones, modos, categorías y `generarPartida`
  pruebas.js    pruebas rápidas (se corren con node)

src/data/talleres/matematicas/
  sumar-descomponiendo.js  multiplicar-descomponiendo.js  dividir-descomponiendo.js

src/components/talleres/descomponer/
  Shell.jsx          rango → (modo) → juego, barra, panel y persistencia
  Escenario.jsx      cuerpo común: cabecera, figura, pregunta y conclusión
  JuegoSuma.jsx  JuegoProducto.jsx  JuegoDivision.jsx
  Figuras.jsx        los tres modelos visuales
  lib/pasos.js       el avance por pasos dentro de un ejercicio
  estilo.js          acento por taller
  DescomponerSuma.jsx  DescomponerProducto.jsx  DescomponerDivision.jsx
```

Cada entrada del catálogo usa su propia llave de `localStorage`
(`crearRegistro(<id>)`), así que los detalles de error no se mezclan entre
talleres.

**Los generadores están separados de los componentes a propósito:** se pueden
mover los rangos de dificultad sin abrir un solo archivo de interfaz, y al
revés.

---

## 5. Cómo ajustar la dificultad

Todo está en **`src/data/talleres/descomponer/rangos.js`**. Cada bloque declara
un objeto por operación:

```js
{
  id: "10-12",
  suma:     { completar: { objetivos: [20, 30, …, 100], dibujar: false },
              romper: { dosCifras: true } },
  producto: { maxFactor: 99, dosCifras: true, dibujar: false },
  division: { divisor: [11, 19], cociente: [4, 20], proporcionExacta: 0.3, dibujar: false },
}
```

- `dibujar` es el interruptor entre **contar** y **calcular**.
- `dosCifras` en producto cambia el reparto (5 → la decena) y el número de
  pasos; en suma, el techo de `b` y el tamaño de `a`.
- `proporcionExacta` es qué tanto de las divisiones no dejan residuo.

Al terminar, correr las pruebas:

```bash
node src/data/talleres/descomponer/pruebas.js
```

Verifican lo que, de ser falso, haría que el taller **enseñe algo incorrecto**:
que la suma siempre llegue a la meta, que el reparto de la decena cierre, que
los parciales del producto sumen el total, que la división cumpla `a = b×q+r`
con `0 ≤ r < b`, y que la respuesta pedida sea de verdad el término escondido.

### Agregar una categoría de error

Cada paso viaja con una `categoria`: es la unidad con la que el panel del
maestro contesta "¿en qué se equivoca?". Si se agrega una, hay que ponerle
etiqueta en `CATEGORIAS` (en `index.js`) — en desarrollo se avisa por consola
si falta.

---

## 6. Qué se guarda y dónde

Dos destinos, como en los demás talleres de juegos:

- **`taller_sesiones` (Supabase)** recibe el marcador grueso de cada partida:
  `actividad`, `grupo` (el bloque, `"8-9"` o `"10-12"`), `aciertos` y `errores`.
- **`localStorage`** guarda el detalle que esa tabla no puede alojar: **en qué
  tipo de ejercicio se equivoca**, más el historial. Vive en la tablet del
  salón.

En modo libre (sin alumno) no se escribe nada en Supabase, para no dejar filas
huérfanas.

### Panel del maestro

Se abre con el ícono discreto de la esquina (chiquito y gris: esto se proyecta
frente al niño). Muestra, ordenado por errores, **en qué tipo de ejercicio se
equivoca** y con qué bloque de edad —que es el dato que dice qué trabajar la
próxima clase—, el acumulado por taller, el historial y las sesiones del
expediente. Incluye **exportar a JSON** y reiniciar los datos locales.
