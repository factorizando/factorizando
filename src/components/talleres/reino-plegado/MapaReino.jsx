// El mapa del reino: los cuatro mundos y por dónde va cada quien.
//
// Aquí se ve la competencia sin necesidad de red: los seis avatares aparecen
// sobre el mundo donde va cada uno. Es el único lugar del juego donde un
// jugador ve a los demás, y es a propósito —se juega por turnos en la misma
// tablet, así que la comparación pasa de todos modos; mejor que pase mirando
// un mapa y no un marcador de puntos—.
import { MUNDOS } from "../../../data/talleres/reino-plegado/index.js";
import { mundoAbierto, nivelAbierto, nivelesTerminados } from "./lib/perfiles.js";
import { Rotulo } from "../comun/ui.jsx";
import { C, COLORES_JUGADOR, MUNDO_COLOR, TAM } from "./estilo.js";
import { Avatar } from "./Jugadores.jsx";

export default function MapaReino({ jugador, jugadores, progresos, todoAbierto, onAbrirNivel }) {
  const progreso = progresos[jugador.id] || {};

  return (
    <div>
      <Rotulo color={C.azul}>El mapa del reino</Rotulo>
      <h1 style={{ fontSize: TAM.titulo, fontWeight: 800, margin: "12px 0 6px" }}>
        ¿A dónde vamos, {jugador.nombre}?
      </h1>
      <p style={{ color: C.tenue, fontSize: TAM.cuerpo, lineHeight: 1.5, margin: "0 0 26px", maxWidth: "62ch" }}>
        Cada mundo está doblado de otra manera. Empieza por el plano: es el único donde las cosas
        se quedan donde las dejas.
      </p>

      <div style={{ display: "grid", gap: 18 }}>
        {MUNDOS.map((mundo, indiceMundo) => {
          const color = MUNDO_COLOR[mundo.id];
          const abiertoElMundo = mundoAbierto(progreso, MUNDOS, indiceMundo, todoAbierto);
          const listo = mundo.niveles.length > 0 && abiertoElMundo;
          const terminados = nivelesTerminados(progreso, mundo.id);

          // Quién anda por este mundo, para pintar sus caras.
          const habitantes = jugadores
            .map((j, i) => ({ j, color: COLORES_JUGADOR[i], hechos: nivelesTerminados(progresos[j.id] || {}, mundo.id) }))
            .filter((h) => h.hechos > 0 || (mundo.numero === 1 && h.hechos === 0));

          return (
            <div key={mundo.id} style={{
              background: C.panel, border: `2px solid ${listo ? C.borde : C.borde}`,
              borderRadius: 18, padding: "22px 24px", opacity: listo ? 1 : 0.55,
            }}>
              <div style={{ display: "flex", gap: 18, alignItems: "flex-start", flexWrap: "wrap" }}>
                <div style={{
                  width: 62, height: 62, borderRadius: 16, flexShrink: 0,
                  background: `${color}22`, border: `2px solid ${color}`,
                  display: "grid", placeItems: "center", fontSize: 30, color,
                }}>
                  {mundo.icono}
                </div>
                <div style={{ flex: 1, minWidth: 240 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "baseline", flexWrap: "wrap" }}>
                    <span style={{ color: C.apagado, fontSize: 13, fontWeight: 800, letterSpacing: ".1em" }}>
                      MUNDO {mundo.numero}
                    </span>
                    <h2 style={{ margin: 0, fontSize: 24, fontWeight: 800, color: C.texto }}>{mundo.nombre}</h2>
                    <span style={{ color, fontSize: 15, fontWeight: 700 }}>{mundo.subtitulo}</span>
                  </div>
                  <p style={{ color: C.tenue, fontSize: 16, lineHeight: 1.5, margin: "8px 0 0", maxWidth: "62ch" }}>
                    {mundo.descripcion}
                  </p>
                </div>
                {habitantes.length > 0 && (
                  <div style={{ display: "flex", gap: 6 }}>
                    {habitantes.map(({ j, color: cj }) => (
                      <div key={j.id} title={j.nombre} style={{ opacity: j.id === jugador.id ? 1 : 0.55 }}>
                        <Avatar jugador={j} color={cj} tam={38} borde={2} />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {listo ? (
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
                  {mundo.niveles.map((nivel, i) => {
                    const abierto = nivelAbierto(progreso, mundo, i);
                    const hecho = !!progreso?.[mundo.id]?.[nivel.id]?.completado;
                    return (
                      <button
                        key={nivel.id}
                        type="button"
                        disabled={!abierto}
                        onClick={() => onAbrirNivel(mundo, nivel)}
                        style={{
                          background: hecho ? `${color}22` : C.alto,
                          border: `2px solid ${hecho ? color : abierto ? C.bordeVivo : C.borde}`,
                          borderRadius: 12, padding: "12px 16px", minWidth: 132, minHeight: 74,
                          cursor: abierto ? "pointer" : "default", opacity: abierto ? 1 : 0.4,
                          fontFamily: "inherit", color: C.texto, textAlign: "left",
                          touchAction: "manipulation",
                        }}
                      >
                        <div style={{ fontSize: 12, fontWeight: 800, color: C.apagado, letterSpacing: ".08em" }}>
                          NIVEL {i + 1} {hecho ? "✓" : abierto ? "" : "🔒"}
                        </div>
                        <div style={{ fontSize: 16, fontWeight: 800, marginTop: 4 }}>{nivel.nombre}</div>
                      </button>
                    );
                  })}
                  <div style={{ alignSelf: "center", color: C.apagado, fontSize: 14, fontWeight: 700 }}>
                    {terminados} de {mundo.niveles.length}
                  </div>
                </div>
              ) : (
                <p style={{
                  marginTop: 16, color: C.apagado, fontSize: 15, fontWeight: 700,
                  border: `1px dashed ${C.borde}`, borderRadius: 10, padding: "12px 16px",
                }}>
                  {mundo.niveles.length === 0
                    ? "En construcción. Este mundo ya sabe cómo se dobla; le faltan sus niveles."
                    : `🔒 Se abre cuando lleves la mitad de ${MUNDOS[indiceMundo - 1].nombre}.`}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
