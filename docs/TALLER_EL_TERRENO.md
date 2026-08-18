# Taller del Terreno

> Dos juegos para **introducir perímetro y área** en regularización de primaria
> (7 a 10 años). Pensado para tablet proyectada a una TV: se juega con el dedo,
> sin teclado.
>
> Comparte shell, interfaz y registro con [Pizzas, Cajas y Vasos](TALLER_PIZZAS_CAJAS_VASOS.md);
> lo común vive en `src/components/talleres/comun/`.

---

## 1. El problema que resuelve

A esta edad el problema casi nunca es la fórmula. Es que **perímetro y área son
la misma figura**, y mientras los dos sean "números que salen del rectángulo" se
confunden para siempre: se suman los lados para el área, se multiplican para el
perímetro, y en el examen se contesta el que se acuerde.

De ahí la decisión que ordena el taller entero:

> Las dos medidas no se separan explicándolas, se separan **haciéndolas**. Aquí
> son dos acciones distintas sobre el mismo terreno —recorrer la orilla poniendo
> **tramos de cerca**, cubrir el suelo con **cuadros de pasto**— con dos
> unidades que se ven, se cuentan y se dibujan distinto.

Los dos juegos atacan los dos errores clásicos, en orden:

| Juego | El error que ataca |
|---|---|
| 🚧 **La Cerca y el Pasto** | Confundir las dos medidas: contestar una cuando se pide la otra. |
| 📏 **La misma cerca, distinto terreno** | Creer que si el perímetro es el mismo, el área también. |

---

## 2. Cómo se abre

```bash
npm run dev
```

- **En producción:** `/regularizacion` → *El Terreno*, o directo en
  `/regularizacion/el-terreno`. Pide sesión de **admin**, como toda la sección.
- **En desarrollo:** `/#/preview-el-terreno` entra sin sesión, en modo libre.

---

## 3. Los dos juegos

### 🚧 La Cerca y el Pasto

Sobre un mismo terreno cuadriculado llegan dos pedidos que se alternan: *"necesita
cerca en toda la orilla"* y *"hay que cubrir todo el suelo con pasto"*. El niño
recorre la orilla con el dedo poniendo tramos, o pinta los cuadros del suelo, y
después contesta cuántos fueron.

Tres decisiones que no son cosméticas:

1. **La mitad de la ronda son pares.** El mismo terreno se pregunta dos veces
   seguidas, primero por una medida y luego por la otra. Ese choque es la clase:
   en terrenos distintos, las dos medidas se quedan siendo números sueltos.
2. **Nunca sale un terreno donde el perímetro coincida con el área** (3 × 6 da 18
   y 18; 4 × 4 da 16 y 16). Ahí el alumno que confunde las dos acertaría, y se
   iría convencido de que da lo mismo.
3. **La operación aparece al final**, como conclusión de lo que ya pasó en
   pantalla: `6 + 4 + 6 + 4 = 20` para la cerca, `6 × 4 = 24` para el pasto. En
   9-10 se agrega el atajo `(largo + ancho) × 2`, presentado como lo que es —los
   lados se repiten de dos en dos— y no como una fórmula que memorizar.

**El diagnóstico.** Cuando la respuesta es exactamente **la otra medida del mismo
terreno**, no se registra como un error cualquiera sino como
`confusion-area-perimetro`. En el panel el maestro no lee "falló 3 de 10", lee
*"confunde las dos medidas: 3 errores de 7"*. Esa categoría se anota como acierto
cuando el alumno sí distingue y como error cuando contesta la otra; un fallo de
cálculo no cuenta ahí, para que la proporción signifique algo.

### 📏 La misma cerca, distinto terreno

Se le dan 12 tramos de cerca y arma con ellos **dos o tres terrenos distintos**,
arrastrando el dedo en la parcela; cada uno se anota en su libreta con el pasto
que le cupo. Al cerrar el reto elige en cuál cupo más, y ahí se ve —con los
dibujos juntos— que la misma cerca rinde distinto según la forma, y que el que
más rinde es el más parecido a un cuadrado. Al final se muestran **todos** los
terrenos posibles con esa cerca, del más alargado al más cuadrado.

Por eso la unidad de este juego es el **reto** y no el ejercicio suelto: la
última pregunta no significa nada sin las anteriores. Una partida son
`retos × (formas + 1)` pasos.

---

## 4. Dónde vive cada cosa

```
src/data/talleres/
  matematicas/el-terreno.js     el TALLER (metadatos, actividades, objetivos)
  el-terreno/
    rangos.js       ← LA PERILLA DE DIFICULTAD: los dos bloques de edad
    cerca-pasto.js  misma-cerca.js    generadores
    index.js        juegos, etiquetas de categoría y `generarPartida`
    pruebas.js      pruebas rápidas (se corren con node)

src/components/talleres/el-terreno/
  ElTerreno.jsx           shell: rango → juego, barra y panel
  JuegoCercaPasto.jsx  JuegoMismaCerca.jsx
  Figuras.jsx             el terreno, la parcela y las tarjetas de la libreta
  estilo.js               color por juego y los materiales (cerca, pasto, tierra)
  lib/piezas.js           los tramos y cuadros de un rectángulo
  lib/registro.js  lib/sonido.js     atados al registro común

src/components/talleres/comun/    compartido con Pizzas, Cajas y Vasos
  ui.jsx  hooks.js  estilo.js  registro.js  sonido.js  PanelProfesor.jsx
```

---

## 5. Cómo ajustar la dificultad

Todo en **`src/data/talleres/el-terreno/rangos.js`**:

```js
{
  id: "7-8",
  cercaPasto: {
    lados: [2, 6],
    manipulacionObligatoria: true,   // hay que pintar antes de poder contestar
    contadorEnVivo: true,            // el conteo sube mientras recorre
    unidades: false,                 // "tramos" y "cuadros", no metros
    atajo: false,                    // sin (largo + ancho) × 2
    proporcionPar: 0.5,              // qué tanto se repite el mismo terreno
  },
  mismaCerca: { perimetros: [8, 10, 12, 14], max: 8, formas: 2, retos: 3, unidades: false },
}
```

- `manipulacionObligatoria` es el interruptor entre **contar** y **calcular**: con
  él prendido el teclado no aparece hasta que la cerca está completa o el suelo
  cubierto; apagado, la manipulación queda como apoyo opcional y el terreno viene
  rotulado con sus lados.
- Al agregar un perímetro a `mismaCerca.perimetros`, las pruebas verifican que
  tenga al menos `formas` terrenos distintos que quepan en la parcela.

Después de tocar cualquier cosa aquí:

```bash
node src/data/talleres/el-terreno/pruebas.js
```

Verifican lo que, de ser falso, haría que el taller **enseñe algo incorrecto**: un
terreno donde perímetro y área coincidan, un par que cambie de terreno o repita
la pregunta, un reto sin suficientes formas distintas, o un remate que no apunte
al rectángulo de mayor área.

---

## 6. Qué se guarda

Igual que en el otro taller de juegos: el marcador grueso de cada partida va a
`taller_sesiones` (expediente del alumno, con el bloque de edad en `grupo`) y el
detalle de **en qué se equivoca** vive en `localStorage` de la tablet. Las
categorías son:

| Categoría | Qué mide |
|---|---|
| `perimetro-rectangulo` | ¿Cuánta cerca? |
| `area-rectangulo` | ¿Cuánto pasto? — también la usa el segundo juego, a propósito: es la misma habilidad y al maestro le sirve verla sumada. |
| `confusion-area-perimetro` | Contesta una medida cuando se pide la otra. |
| `area-mismo-perimetro` | Con la misma cerca, cuál terreno rinde más. |

---

## 7. Lo que sigue

Los otros dos juegos del plan, para cuando estos dos estén rodados:

- **🧱 El Mosaiquero** (9-10): cubrir figuras en L o en T partiéndolas en dos
  rectángulos. Es el puente con la propiedad distributiva y con El Huerto de
  Pizzas, Cajas y Vasos.
- **👟 La Vuelta al Patio** (7-8): el perímetro como recorrido, un personaje que
  camina la orilla contando pasos, para que el atajo `(largo + ancho) × 2` se
  descubra en vez de dictarse.
