# Taller de Pizzas, Cajas y Vasos

> Tres juegos de matemáticas para regularización de primaria (7 a 10 años):
> división con residuo, multiplicación como grupos iguales y fracciones.
> Pensado para **tablet proyectada a una TV** durante la clase: se juega con el
> dedo, sin teclado, y se lee desde el fondo del salón.
>
> Es el **segundo taller React** del proyecto (`render.tipo: "react"`).

---

## 1. Para quién es, y por qué está hecho así

El alumno de referencia va en segundo o tercero de primaria y llega a
regularización porque "no se sabe las tablas" o "no le entiende a las
divisiones". Casi siempre el problema no es la tabla: es que la operación
nunca se conectó con una cantidad. Puede recitar que 7 × 6 = 42 y no saber que
eso es lo que hay dentro de siete cajas de a seis.

De ahí sale el principio que ordena los tres juegos:

> **Lo visual primero, el símbolo después.** El niño ve o manipula la cantidad
> antes de que aparezca la operación escrita. `26 ÷ 8 = 3 y sobran 2` se muestra
> **al resolver**, como conclusión de lo que ya pasó en la pantalla, nunca como
> enunciado inicial.

### Los cinco principios que el código respeta

| Principio | Dónde vive en el código |
|---|---|
| **Lo visual primero.** La operación escrita aparece al final, en el componente `Operacion`. | `ui.jsx`, y el bloque de cierre de cada juego |
| **Los números cambian siempre.** Nada de listas fijas de ejercicios; todo se genera dentro de los rangos de cada edad, y las divisiones exactas se construyen multiplicando. | `src/data/talleres/pizzas-cajas-vasos/` |
| **Error sin castigo.** Al fallar se muestra la respuesta con el dibujo que la explica; sin rojo de alarma, sin sonido de derrota, sin restar progreso. | `Retro` en `ui.jsx`, `sonar("mal")` en `lib/sonido.js` |
| **Retroalimentación en el lenguaje del juego.** "Se llenan 3 cajas y sobran 2 rebanadas", no "el cociente es 3 con residuo 2". | los textos de cada `Juego*.jsx` |
| **Elogiar el progreso, no el acierto.** La pantalla de resultados compara contra la partida anterior *del mismo juego y el mismo bloque de edad*, nunca contra una meta ni contra otros. | `compararConAnterior` en `lib/registro.js` |

### El rango de edad

De 7 a 10 años hay una distancia enorme, así que al abrir el taller el maestro
elige un bloque —**7-8** o **9-10**— y eso ajusta los tres juegos. El niño no
vuelve a ver esa pantalla durante la sesión; el control para cambiarla está en
la barra de arriba, chiquito y gris, junto al panel del maestro.

El corte **no es de edad sino de representación**: antes de los 9 la cantidad se
cuenta (las rebanadas y las galletas se dibujan una por una) y después se
calcula (solo el número). Un alumno de nueve que todavía necesita contar
trabaja mejor en el bloque de abajo.

---

## 2. Cómo se abre

```bash
npm run dev
```

- **En producción:** `/regularizacion` → *Pizzas, Cajas y Vasos*, o directo en
  `/regularizacion/pizzas-cajas-vasos`. Pide sesión de **admin**, como toda la
  sección. Primero se elige el alumno (o "practicar sin registrar").
- **En desarrollo:** `/#/preview-pizzas-cajas-vasos` entra sin sesión, en modo
  libre. La ruta está detrás de `import.meta.env.DEV` en `App.jsx`, así que no
  se compila a producción.

Todos los dibujos son **SVG escritos a mano** y la tipografía es una pila del
sistema: sin imágenes ni fuentes externas, el taller se ve igual en un salón sin
internet. Objetivos táctiles de 44 px para arriba (72 px las teclas del teclado
numérico) y arrastre con **pointer events**, que funcionan igual con el dedo en
la tablet que con el mouse en la laptop del maestro.

El sonido son tres tonos cortos hechos con WebAudio y se silencia desde la
barra; la preferencia se guarda.

---

## 3. Los tres juegos

### 🍕 La Pizzería — división con residuo

Llegan pedidos: hay 26 rebanadas y en cada caja caben 8. Se pregunta **en dos
pasos separados** cuántas cajas se llenan y, después, cuántas rebanadas sobran.

*Por qué en dos pasos:* preguntado de un tirón ("26 entre 8"), el residuo se
contesta de memoria o no se contesta. Partido, el niño tiene que mirar lo que
quedó fuera de las cajas. Al acertar el primer paso se dibujan las cajas llenas
y **el sobrante aparece aparte**, sobre la mesa, con borde punteado: eso es el
residuo, dibujado.

*El cierre es lo que más importa:* para llevarse lo que sobra haría falta **una
caja más**. Ahí el residuo deja de ser un número raro al final de la división y
se vuelve la razón por la que se pide un camión extra o una mesa más.

Se mezclan **divisiones exactas** (residuo 0) a propósito: si siempre sobrara
algo, el niño aprendería que en la pizzería siempre sobra, que es otra manera de
no entender el residuo. Contestar "0" cuando no sobra nada es uno de los casos
que el panel del maestro cuenta por separado.

- **7-8:** divisores de 2 a 5, totales menores a 30, rebanadas dibujadas una por una.
- **9-10:** divisores de 2 a 12, totales hasta 150, solo con números.

### 🏗️ La Fábrica de Cajas — multiplicación como grupos iguales

Por la banda pasan cajas idénticas: 7 cajas de 6 galletas. ¿Cuántas galletas en
total?

*Por qué:* lo que se entrena no es la tabla del 6 sino reconocer el **grupo
igual**. El que solo memorizó la tabla se atora en cuanto el problema no dice
"multiplica"; el que reconoce el grupo sabe qué operación usar aunque el
enunciado hable de cajas, de filas o de bolsas.

Al resolver aparece el **conteo acumulado** bajo la banda (6, 12, 18, 24…): es
el puente entre sumar el mismo número muchas veces y multiplicar, y la red de
seguridad del que todavía no se sabe la tabla.

- **7-8:** contenido dibujado y contable, factores de 2 a 5.
- **9-10:** solo la etiqueta de cuántas lleva, factores de 2 a 12, y una de cada
  cuatro rondas con un factor de dos cifras (11-25).

#### 🌱 El Huerto (modo secundario, solo 9-10)

La misma operación acostada en dos dimensiones: se pide sembrar 4 filas por 6
columnas y el niño **arrastra el dedo** sobre la parcela cuadriculada hasta
formar el rectángulo. Los cuadritos sembrados son el producto.

*Para qué se tiende este puente:* el arreglo rectangular es lo que después
explica que 4 × 6 y 6 × 4 den lo mismo (es el mismo huerto girado), lo que
convierte la división en "sé el área y un lado, ¿cuánto mide el otro?", y lo que
años más tarde se vuelve el área del rectángulo y la multiplicación de
binomios.

### 🥤 Los Vasos Medidores — fracciones

Tres modos, escogibles por separado o revueltos:

- **Llenar** — se pide 3/4 y el niño **arrastra el nivel del líquido** hasta la
  marca. El vaso muestra sus divisiones según el denominador; el arrastre se
  ajusta a la marca más cercana, porque lo que se evalúa es contar divisiones, no
  la puntería.
- **Comparar** — dos vasos, ¿cuál tiene más? Se incluyen a propósito pares como
  **1/3 contra 1/2**, donde el denominador más grande corresponde a la fracción
  menor: es el error más común a esta edad y hay que provocarlo para poder
  corregirlo. Por eso los vasos **se muestran vacíos** hasta contestar: con el
  jugo servido desde el principio la respuesta se vería sin pensar y el error
  nunca aparecería. Al contestar se sirven los dos y se ve quién tenía razón.
- **Equivalencias** (solo 9-10) — un vaso objetivo y tres candidatos partidos de
  otra manera; se busca el que llega a la misma altura (2/4 = 1/2, 3/6 = 1/2).

- **7-8:** denominadores 2, 3 y 4; solo llenar y comparar.
- **9-10:** denominadores hasta 10 y los tres modos.

---

## 4. Dónde vive cada cosa

```
src/data/talleres/
  matematicas/pizzas-cajas-vasos.js   el TALLER (metadatos, actividades, objetivos)
  pizzas-cajas-vasos/
    rangos.js       ← LA PERILLA DE DIFICULTAD: los dos bloques de edad
    pizzeria.js  fabrica.js  vasos.js   generadores de ejercicios
    azar.js         sorteo, pesos y series sin repetidos
    index.js        juegos, etiquetas de categoría y `generarPartida`
    pruebas.js      pruebas rápidas (se corren con node)

src/components/talleres/pizzas-cajas-vasos/
  PizzasCajasVasos.jsx   shell: rango → juego → modo, barra y panel
  JuegoPizzeria.jsx  JuegoFabrica.jsx  JuegoHuerto.jsx  JuegoVasos.jsx
  PanelProfesor.jsx      el ícono discreto de la esquina
  Figuras.jsx            todos los SVG: rebanadas, cajas, galletas, parcela, vasos
  ui.jsx  estilo.js  hooks.js
  lib/registro.js  lib/sonido.js
```

**Los generadores están separados de los componentes visuales a propósito:** se
pueden mover los rangos de dificultad sin abrir un solo archivo de interfaz, y
al revés.

---

## 5. Cómo ajustar la dificultad

Todo está en **`src/data/talleres/pizzas-cajas-vasos/rangos.js`**. Cada bloque de
edad declara un objeto por juego:

```js
{
  id: "7-8",
  pizzeria: { porCaja: [2, 5], cajasMax: 6, totalMax: 29, proporcionExacta: 0.3, dibujar: true },
  fabrica:  { factores: [2, 5], cajasMax: 5, dibujarContenido: true, dosCifras: false },
  huerto:   null,                       // null = ese modo no se ofrece
  vasos:    { denominadores: [2, 3, 4], modos: ["llenar", "comparar"] },
}
```

- `dibujar` / `dibujarContenido` es el interruptor entre **contar** y **calcular**.
- `proporcionExacta` es qué tanto de las divisiones no dejan residuo.
- Quitar un modo de `vasos.modos` lo desaparece del menú; poner `huerto: null`
  desaparece el huerto. No hace falta tocar nada más.
- `EJERCICIOS_POR_PARTIDA` (10) está al final del mismo archivo.

Al terminar, correr las pruebas:

```bash
node src/data/talleres/pizzas-cajas-vasos/pruebas.js
```

Verifican lo que, de ser falso, haría que el taller **enseñe algo incorrecto**:
que las divisiones marcadas como exactas no dejen residuo, que las fracciones
equivalentes generadas de verdad valgan lo mismo (y que ningún distractor
también lo valga), que el par trampa de comparación comparta numerador y gane el
del denominador chico, y que ninguna partida se salga del techo de su bloque de
edad.

### Agregar una categoría de error

Cada ejercicio viaja con una `categoria`: es la unidad con la que el panel del
maestro contesta "¿en qué se equivoca?". Si se agrega una, hay que ponerle
etiqueta en `CATEGORIAS` (en `index.js`) — en desarrollo se avisa por consola si
falta.

---

## 6. Qué se guarda y dónde

Dos destinos, distintos a propósito (igual que en el taller de decodificación):

- **`taller_sesiones` (Supabase)** recibe el marcador grueso de cada partida:
  `actividad` ("La Pizzería · división con residuo"), `grupo` (el bloque de edad,
  `"7-8"` o `"9-10"`), `aciertos` y `errores`. Es lo que aparece en el expediente
  del alumno y no necesitó esquema nuevo.
- **`localStorage`** guarda lo que esa tabla no puede alojar y es lo más útil
  para planear la clase: **en qué tipo de ejercicio se equivoca**, más el
  historial de partidas. Vive en el dispositivo donde se trabaja.

En modo libre (sin alumno elegido) no se escribe nada en Supabase, para no dejar
filas huérfanas en el expediente.

### Panel del maestro

Se abre con el ícono discreto de la esquina superior derecha — chiquito y gris a
propósito, porque esto se proyecta frente al niño. Adentro:

1. **En qué se equivoca más**, ordenado por número de errores y con el bloque de
   edad. Es la sección que justifica el panel: saber que sacó 6 de 10 no dice qué
   hacer el martes; saber que falla el residuo cuando la división es exacta, o que
   compara mal en cuanto los denominadores son distintos, sí.
2. Acumulado por juego y bloque, e historial de partidas.
3. Las sesiones registradas en el expediente del alumno.
4. **Exportar a JSON** y **reiniciar los datos de esta tablet**, con confirmación
   en dos pasos. Reiniciar no toca el expediente, solo el detalle local.
