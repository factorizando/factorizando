// Registro de bancos temáticos del taller de decodificación.
//
// El taller es un motor; el banco es lo que lo llena. Cada banco es un tema
// que al alumno le importa lo suficiente como para que las palabras ya estén
// en su boca antes de estar en sus ojos. Agregar un tema nuevo es crear un
// archivo aquí al lado, importarlo y —si trae `diagrama`— dibujar su SVG en
// components/talleres/decodificacion/Diagramas.jsx.
import { BANCO as MECANICA } from "./mecanica.js";
import { BANCO as FUTBOL } from "./futbol.js";
import { BANCO as ESPACIO } from "./espacio.js";

// El orden es el que se ve en la pantalla de inicio.
export const BANCOS = [MECANICA, FUTBOL, ESPACIO];

export const BANCOS_POR_ID = Object.fromEntries(BANCOS.map((b) => [b.id, b]));

export function buscarBanco(id) {
  return BANCOS_POR_ID[id] || BANCOS[0];
}

// Red de seguridad en desarrollo, igual que en talleresIndex.js: un banco a
// medias no debe romper la sesión frente al alumno, pero sí debe gritar.
if (import.meta.env?.DEV) {
  BANCOS.forEach((b) => {
    const avisa = (m) => console.warn(`[decodificación/${b.id}] ${m}`);
    if ((b.palabras || []).length < 8) avisa("tiene menos de 8 palabras");
    (b.familias || []).forEach((f) => {
      if (!f.opciones.includes(f.objetivo)) avisa(`la familia «${f.objetivo}» no incluye su objetivo`);
      if (new Set(f.opciones).size !== f.opciones.length) avisa(`la familia «${f.objetivo}» repite una opción`);
    });
    (b.anclas || []).forEach((a) => {
      (a.reactivos || []).forEach((r) => {
        const m = r.match(/\[([^\]]+)\]/);
        if (!m) avisa(`el reactivo «${r}» de «${a.id}» no marca ninguna letra con [corchetes]`);
        else if (!a.opciones.includes(m[1])) avisa(`«${r}» responde «${m[1]}», que no está en las opciones de «${a.id}»`);
      });
    });
    (b.textos || []).forEach((t) => {
      const n = t.cuerpo.trim().split(/\s+/).length;
      if (n < 55 || n > 95) avisa(`el texto «${t.id}» tiene ${n} palabras (se buscan 60-90)`);
    });
  });
}
