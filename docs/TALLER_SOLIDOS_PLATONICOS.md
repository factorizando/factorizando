# Los Cinco Sólidos

> Vitrina animada de **geometría del espacio** para regularización (10 a 14 años):
> los cinco sólidos platónicos en 3D y, sobre todo, **su dualidad**. Pensado para
> tablet proyectada a una TV: se gira con el dedo, sin teclado.
>
> Comparte shell, interfaz y registro con [El Terreno](TALLER_EL_TERRENO.md) y
> [Pizzas, Cajas y Vasos](TALLER_PIZZAS_CAJAS_VASOS.md); lo común vive en
> `src/components/talleres/comun/`.

---

## 1. El problema que resuelve

Los cinco sólidos se enseñan casi siempre como una lista que hay que memorizar:
cinco nombres griegos y una tabla de caras, aristas y vértices. Así no aguanta
ni una semana, y con razón: no hay nada que entender en una tabla.

Pero los cinco no son una lista. **Vienen en parejas**, y la pareja no es un
dato más: es una construcción de un solo paso que se puede *ver*.

> Pon un punto en el centro de cada cara. Une los puntos cuyas caras se tocan.
> Adentro del cubo aparece el octaedro.

De ahí sale todo lo demás sin memorizar nada: por qué el cubo tiene 6 caras y 8
vértices y el octaedro justo al revés; por qué los dos tienen 12 aristas; por
qué el tetraedro está solo (es su propio dual); y por qué los cinco son en
realidad **tres parejas**.

La otra mitad del problema es más elemental y se atiende en la primera sala:
a los diez años, *cara*, *arista* y *vértice* siguen siendo tres palabras que
significan "partes del cubo". Aquí se cuentan por separado, cada una de su
color, sobre un cuerpo que gira.

---

## 2. Cómo se abre

```bash
npm run dev
```

- **En producción:** `/regularizacion` → *Los Cinco Sólidos*, o directo en
  `/regularizacion/solidos-platonicos`. Pide sesión de **admin**, como toda la
  sección.
- **En desarrollo:** `/#/preview-solidos` entra sin sesión, en modo libre.

---

## 3. Las tres salas

| Sala | Qué hace |
|---|---|
| 🔷 **La Galería** | Los cinco, uno a la vez y todos al mismo radio. Se giran, se abren en pedazos y se les cuentan caras, aristas y vértices. |
| 🔁 **El Dual** | La animación de cinco pasos. Es la sala por la que existe el taller. |
| 🎯 **El Reto** | Diez preguntas: contar sobre la figura, encontrar la pareja y despejar con Euler. |

### 🔷 La Galería

Tres decisiones que no son cosméticas:

1. **Los cinco se muestran al mismo radio**, no a la misma arista. Se comparan
   por su forma y no por quién ocupa más pantalla.
2. **Los tres números se tocan.** Picar «12 caras» apaga todo lo demás en la
   figura y deja encendidas solo las caras. El número deja de ser un dato de la
   ficha y pasa a señalar algo que está girando ahí. Cada elemento tiene su
   color y es **siempre el mismo**: la cara va del color del sólido, la arista
   blanco hueso, el vértice amarillo (el único color que no usa ningún sólido).
3. **El botón de abrir** separa las caras a lo largo de sus normales. Es la
   única manera de contar 20 caras sin perder la cuenta, y de paso se ve que
   todas son iguales.

Al pie, plegado, está la respuesta a la pregunta que hace todo niño al que le
enseñan los cinco: *¿y por qué cinco y no seis?* (en cada esquina se juntan al
menos tres caras y sus ángulos tienen que sumar menos de 360°; con hexágonos ya
suman justo 360° y la esquina se aplana).

### 🔁 El Dual

Cinco pasos, y la clase entera está en el orden:

| Paso | En pantalla | Lo que se dice |
|---|---|---|
| 1 | El sólido | Sus tres números |
| 2 | Un punto en el centro de cada cara | *cara → vértice*: tantos puntos como caras |
| 3 | Los puntos vecinos se unen | *arista → arista*: cada arista es donde se tocan dos caras, así que salen las mismas |
| 4 | Las varillas cierran caras | *vértice → cara*: alrededor de un vértice hay k caras y sus k puntos cierran un polígono |
| 5 | El dual crece hasta el tamaño del original | Los tres números, intercambiados |

Dos decisiones de fondo:

- **Se avanza paso a paso, a mano.** Una animación que corre sola se ve bonita y
  no se entiende: el maestro necesita parar en el paso 3 y preguntar *"¿cuántas
  varillas van a salir?"* antes de tocar Siguiente. El botón de correrlo todo
  seguido existe, pero no es lo que trae puesto.
- **Al terminar se puede repetir sobre el que salió.** Ahí aparece que el dual
  del dual es el de partida — que es la razón de que sean parejas y no una fila.
  La geometría del dual se reusa llevada a radio 1, que es exactamente el tamaño
  con el que terminó de crecer: la figura no se mueve ni un pixel al reiniciar.

La tabla de números al lado se va llenando **conforme la animación produce cada
cosa**: los vértices del dual en el paso 2, las aristas en el 3, las caras en el
4. El intercambio no se anuncia, se ve ocurrir.

### 🎯 El Reto

Diez preguntas en el orden en que se enseñan: dos de contar (con el sólido
girando y encendido solo lo que hay que contar), cinco de dual y tres de Euler.
Se contesta con opciones y no con teclado numérico porque una de las preguntas
—*¿cuál es su dual?*— no tiene por respuesta un número.

Los cuerpos de las preguntas de Euler **no son solo los cinco**: hay pirámides,
prismas y una caja de zapatos. Si todos fueran platónicos, el alumno contestaría
de memoria en vez de usar la fórmula, y la fórmula es justamente lo que no
depende de qué cuerpo sea.

---

## 4. La idea transferible: la geometría se calcula, no se teclea

De cada sólido se dan **solo sus vértices** —tres fórmulas con el número
áureo—. Qué vértices forman cada cara, cuáles son las aristas y dónde está el
centro de cada cara lo deduce `construir()` buscando los planos de apoyo del
casco convexo (fuerza bruta sobre las ternas de puntos: con 20 vértices son unos
miles de operaciones y se hace una sola vez al cargar).

Eso permite que el dual también se calcule:

```js
export function dual(p) {
  return construir(p.centros);
}
```

Que es, palabra por palabra, lo que el taller le dice al alumno: *pon un punto en
el centro de cada cara y vuelve a armar*. **El dibujo no puede contradecir a la
frase porque el dibujo es la frase.** Si las caras estuvieran tecleadas —o si el
icosaedro saliera de `THREE.IcosahedronGeometry` y la cuenta de otro lado—
podrían dejar de coincidir algún día sin que nadie lo notara mirando la pantalla.

Es el mismo principio que en El Reino Plegado, donde la vista 3D cose el nivel
usando la misma parametrización que define el movimiento.

---

## 5. Lo que se mide

Las dos primeras salas **no registran nada**: son una vitrina para proyectar y
hablar encima, no un juego. Por eso el taller tampoco pregunta el bloque de edad
al entrar — no cambiaría nada de lo que se ve.

El Reto sí. Como en los demás talleres, el marcador grueso va a `taller_sesiones`
y el detalle por categoría a `localStorage`, que es lo que contesta *en qué se
equivoca*:

| Categoría | Qué distingue |
|---|---|
| `contar-caras` · `contar-aristas` · `contar-vertices` | Leer la figura: cuál de los tres elementos no tiene claro |
| `dual-pareja` | Reconocer con qué sólido hace pareja |
| `dual-numeros` | Que las caras de uno son los vértices del otro |
| `dual-aristas` | Que las aristas **no** cambian |
| `euler` | Despejar el dato que falta |

Que `contar-vertices` falle y `contar-caras` no es un diagnóstico distinto de
"sacó 6 de 10", y es el que sirve para planear el martes.

---

## 6. Archivos

```
src/data/talleres/solidos-platonicos/
  poliedros.js   la geometría: casco convexo, dual, Euler (corre en node)
  solidos.js     la ficha de cada uno: nombre, color, elemento, curiosidad
  dualidad.js    el guion de los cinco pasos
  retos.js       los generadores de preguntas
  index.js       salas, categorías y lo que se exporta hacia afuera
  pruebas.js     node src/data/talleres/solidos-platonicos/pruebas.js

src/components/talleres/solidos-platonicos/
  SolidosPlatonicos.jsx   shell: vestíbulo, barra, panel del maestro
  Galeria.jsx  Dualidad.jsx  JuegoRetos.jsx    las tres salas (lazy)
  Visor.jsx               un sólido girando; lo usan la galería y el reto
  lib/escena.js           lo que se necesita de three, y nada más
  lib/registro.js  estilo.js

src/data/talleres/matematicas/solidos-platonicos.js   el TALLER
```

**three.js entra por `lazy`** desde el shell: el vestíbulo abre al instante y los
700 KB empiezan a bajar cuando alguien elige sala. Comparte el chunk de three con
la vista 3D de El Reino Plegado, así que en la práctica no pesa dos veces.

---

## 7. Las pruebas

```bash
node src/data/talleres/solidos-platonicos/pruebas.js
```

Importan más que en los otros talleres, porque aquí las caras **no están
tecleadas**: si la deducción fallara, la pantalla no mostraría un error de
cálculo sino un cuerpo que no existe, y nadie lo notaría mirando. Se verifica:

- que cada sólido salga **regular** — aristas todas iguales, caras del mismo
  número de lados, vértices del mismo grado, caras planas y con sus vértices en
  orden (si el orden fuera malo, algún lado sería una diagonal);
- que valga `C − A + V = 2`;
- que el dual **intercambie** caras con vértices, **conserve** las aristas, sea
  semejante al sólido canónico y que el dual del dual caiga sobre el original;
- que la construcción no suponga que el cuerpo es platónico: una pirámide y un
  prisma tienen que salir bien;
- **las tres afirmaciones que hace la animación**: que dos puntos se unan
  exactamente cuando sus caras comparten arista, que las caras alrededor de un
  vértice formen una cara del dual, y que multiplicar por `1/inradio` deje al
  dual del tamaño del original;
- y que los generadores del reto den siempre cuatro opciones distintas con la
  respuesta entre ellas, coherente con la geometría calculada.

---

## 8. Lo que falta

- **Probarlo con niños.** Nada de esto se ha visto todavía frente a un alumno.
- Un desarrollo plano (la cruz que se recorta y se dobla) para cada sólido: es
  el puente natural entre esta sala y el cuaderno.
- Los duales *cruzados*: los dos sólidos de una pareja superpuestos a la vez —el
  tetraedro con el suyo ya insinúa la estrella de ocho puntas en el paso 5.
- Que la sala del Dual acepte cuerpos que no son platónicos (una pirámide, un
  prisma) para ver que el dual existe siempre; `construir()` ya lo aguanta.
