// Generador de «Dividir descomponiendo» — la relación a = b × q + r.
//
// Se esconde **un** término de la relación y el alumno lo reconstruye. No es
// el reparto de la Pizzería (ahí se contesta el cociente y el residuo a mano):
// aquí hay que moverse por la relación completa, que es la antesala de
// despejar una incógnita. Fallar el cociente, el divisor o el residuo son
// problemas distintos y por eso son categorías distintas en el panel.
//
// El dividendo se construye multiplicando (a = b × q + r, con 0 ≤ r < b), de
// modo que la división nunca miente.
import { entero, elegir, elegirPesado } from "../azar.js";

// Cada contexto imprime "❓" en el término escondido y su propia pregunta.
const CTX = [
  {
    sent: (a, b, q, r, h) =>
      `Tienes ${v(a, h, "a")} estampas y las repartes en ${v(b, h, "b")} álbumes iguales. ` +
      `En cada uno caben ${v(q, h, "q")} y sobran ${v(r, h, "r")}.`,
    preg: {
      a: "¿Cuántas estampas había en total?",
      b: "¿En cuántos álbumes se repartieron?",
      q: "¿Cuántas estampas caben en cada álbum?",
      r: "¿Cuántas estampas sobraron?",
    },
  },
  {
    sent: (a, b, q, r, h) =>
      `Un equipo recorre ${v(a, h, "a")} km en ${v(b, h, "b")} etapas iguales. ` +
      `Cada etapa mide ${v(q, h, "q")} km y sobran ${v(r, h, "r")} km.`,
    preg: {
      a: "¿Cuántos km se recorrieron en total?",
      b: "¿En cuántas etapas se dividió el recorrido?",
      q: "¿Cuántos km mide cada etapa?",
      r: "¿Cuántos km sobraron?",
    },
  },
  {
    sent: (a, b, q, r, h) =>
      `Hay ${v(a, h, "a")} alumnos que se organizan en ${v(b, h, "b")} equipos iguales. ` +
      `Cada equipo tiene ${v(q, h, "q")} alumnos y sobran ${v(r, h, "r")}.`,
    preg: {
      a: "¿Cuántos alumnos había en total?",
      b: "¿En cuántos equipos se organizaron?",
      q: "¿Cuántos alumnos tiene cada equipo?",
      r: "¿Cuántos alumnos sobraron?",
    },
  },
  {
    sent: (a, b, q, r, h) =>
      `Se reparten ${v(a, h, "a")} pesos entre ${v(b, h, "b")} amigos por igual. ` +
      `A cada uno le tocan ${v(q, h, "q")} y sobran ${v(r, h, "r")}.`,
    preg: {
      a: "¿Cuántos pesos había en total?",
      b: "¿Entre cuántos amigos se repartieron?",
      q: "¿Cuántos pesos le tocan a cada uno?",
      r: "¿Cuántos pesos sobraron?",
    },
  },
];

function v(x, h, clave) {
  return h === clave ? "❓" : x;
}

const CATEGORIA = {
  a: "division-falta-total",
  b: "division-faltan-grupos",
  q: "division-falta-cociente",
  r: "division-falta-residuo",
};

export function generarDivision(rango) {
  const cfg = rango.division;
  const exacta = Math.random() < cfg.proporcionExacta;
  const b = entero(cfg.divisor[0], cfg.divisor[1]);
  const q = entero(cfg.cociente[0], cfg.cociente[1]);
  const r = exacta ? 0 : entero(1, b - 1);
  const a = b * q + r;

  // Esconder el número de grupos cuando se dibuja no tiene representación
  // posible (no se pueden dibujar "b grupos" de tamaño desconocido), así que
  // en 8-9 solo se esconden total, cociente y residuo.
  const oculto = cfg.dibujar
    ? elegirPesado([["q", 3], ["r", 3], ["a", 1]])
    : elegirPesado([["q", 3], ["r", 3], ["b", 2], ["a", 1]]);

  const ctx = elegir(CTX);
  const respuesta = { a, b, q, r }[oculto];
  const categoria = oculto === "r" && r === 0
    ? "division-residuo-cero"
    : CATEGORIA[oculto];

  return {
    operacion: "division",
    a, b, q, r,
    exacta,
    oculto,
    enunciado: ctx.sent(a, b, q, r, oculto),
    pasos: [{
      id: "termino",
      pregunta: ctx.preg[oculto],
      respuesta,
      categoria,
    }],
    conclusion: {
      operacion: `${a} = ${b} × ${q} + ${r}`,
      texto: exacta
        ? `${b} × ${q} = ${a} exacto: no sobra nada, la división es exacta.`
        : `Se forman ${b} grupos de ${q} y sobran ${r}; con ${r} haría falta un grupo más para no dejar nada fuera.`,
    },
    figura: { tipo: "reparto", b, q, r, oculto, dibujar: cfg.dibujar, a },
    clave: `D:${a}/${b}/${q}/${r}/${oculto}`,
  };
}
