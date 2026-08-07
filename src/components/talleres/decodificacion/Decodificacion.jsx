// Taller de decodificación lectora — componente raíz.
//
// Lo monta TallerRunner con { alumnoId, guardarSesion, cargarSesiones }.
//
// Para quién es: un alumno que entiende perfectamente lo que oye pero
// convierte mal las letras en sonidos. Se traba al leer en voz alta, adivina
// palabras por su silueta y se salta o invierte sílabas. Su lenguaje oral y
// su vocabulario NO son el problema, así que el taller no enseña palabras
// nuevas: entrena la decodificación de palabras que ya domina de oído, con
// bancos temáticos de lo que a él le interesa.
//
// El modo sesión encadena las seis actividades en el orden en que se
// sostienen entre sí —de la sílaba suelta al texto corrido— y dura 15-20
// minutos, que es lo que aguanta la atención sin que la práctica se vuelva
// castigo.
import { useCallback, useMemo, useState } from "react";
import { BANCOS } from "../../../data/talleres/decodificacion/index.js";
import { useVoz } from "./lib/voz.js";
import { anotarPalabra, anotarActividad } from "./lib/registro.js";
import { C, FUENTE } from "./estilo.js";
import { ProveedorVoz } from "./hooks.js";
import { Boton, Rotulo } from "./ui.jsx";
import ActPalmeo from "./ActPalmeo.jsx";
import ActArmar from "./ActArmar.jsx";
import ActFamilias from "./ActFamilias.jsx";
import ActAnclas from "./ActAnclas.jsx";
import ActEtiquetar from "./ActEtiquetar.jsx";
import ActLectura from "./ActLectura.jsx";
import PanelProfesor from "./PanelProfesor.jsx";

// El orden importa: cada actividad se apoya en la anterior. Contar sílabas,
// ordenarlas, distinguir palabras vecinas, fijar reglas, leer etiquetas
// sueltas y por último leer corrido.
const MODULOS = [
  { id: "palmeo", nombre: "Palmeo de sílabas", icono: "✋", Comp: ActPalmeo,
    desc: "Contar los golpes de voz de cada palabra." },
  { id: "armar", nombre: "Armar con sílabas", icono: "🧩", Comp: ActArmar,
    desc: "Poner las sílabas en su orden, sin saltarse ninguna." },
  { id: "familias", nombre: "Familias de palabras", icono: "🔍", Comp: ActFamilias,
    desc: "Distinguir palabras que se parecen muchísimo." },
  { id: "anclas", nombre: "Anclas ortográficas", icono: "⚓", Comp: ActAnclas, requiere: "anclas",
    desc: "Reglas difíciles, apoyadas en palabras que ya dominas." },
  { id: "etiquetar", nombre: "Etiquetar el diagrama", icono: "📐", Comp: ActEtiquetar, requiere: "diagrama",
    desc: "Llevar cada nombre escrito a su pieza." },
  { id: "lectura", nombre: "Lectura repetida", icono: "⏱️", Comp: ActLectura,
    desc: "Tres pasadas al mismo texto, la última contra reloj." },
];

// El bloque de edad que se guarda en `taller_sesiones.grupo`.
const GRUPO = "8-10";

const ANIMACIONES = `
@keyframes dec-entra { from { opacity:0; transform: translateY(10px) } to { opacity:1; transform:none } }
@keyframes dec-tiembla { 25% { transform: translateX(-5px) } 75% { transform: translateX(5px) } }
`;

export default function Decodificacion({ alumnoId, guardarSesion, cargarSesiones }) {
  const { voz, hayVoz, listo } = useVoz();
  const [bancoId, setBancoId] = useState(null);
  const [moduloId, setModuloId] = useState(null);
  const [sesion, setSesion] = useState(null); // índice dentro de `disponibles`
  const [verPanel, setVerPanel] = useState(false);

  const banco = useMemo(() => BANCOS.find((b) => b.id === bancoId) || null, [bancoId]);
  // Un banco sin anclas o sin diagrama simplemente no ofrece esas actividades,
  // ni sueltas ni dentro de la sesión.
  const disponibles = useMemo(
    () => (banco ? MODULOS.filter((m) => !m.requiere || banco[m.requiere]) : []),
    [banco]
  );

  const registrar = useCallback(
    (palabra, acerto) => anotarPalabra(alumnoId, palabra, acerto),
    [alumnoId]
  );

  // Cierre de una ronda: el marcador grueso va al expediente y el detalle al
  // dispositivo. Devuelve la ronda anterior para que la actividad pueda
  // compararlo contra sí mismo en vez de felicitarlo en abstracto.
  const cerrarRonda = useCallback(
    ({ aciertos, errores, total, etiqueta }) => {
      const modulo = MODULOS.find((m) => m.id === moduloId);
      const nombre = etiqueta || modulo?.nombre || moduloId;
      // El guardado es a propósito optimista: si Supabase falla, la sesión
      // frente al alumno no se interrumpe por eso.
      Promise.resolve(guardarSesion?.({ actividad: nombre, grupo: GRUPO, aciertos, errores }))
        .catch((e) => console.warn("[decodificación] no se guardó la sesión:", e.message));
      return anotarActividad(alumnoId, `${bancoId}:${moduloId}`, { aciertos, errores, total });
    },
    [alumnoId, bancoId, moduloId, guardarSesion]
  );

  function abrirModulo(id) {
    setSesion(null);
    setModuloId(id);
  }

  function empezarSesion() {
    setSesion(0);
    setModuloId(disponibles[0].id);
  }

  function salirDeActividad() {
    if (sesion === null) { setModuloId(null); return; }
    const siguiente = sesion + 1;
    if (siguiente >= disponibles.length) {
      setSesion(null);
      setModuloId(null);
    } else {
      setSesion(siguiente);
      setModuloId(disponibles[siguiente].id);
    }
  }

  const marco = {
    height: "100%", overflowY: "auto", background: C.fondo, color: C.texto,
    fontFamily: FUENTE,
  };

  // ── Elegir tema ─────────────────────────────────────────────────────────
  if (!banco) {
    return (
      <div style={marco}>
        <style>{ANIMACIONES}</style>
        <div style={{ maxWidth: 940, margin: "0 auto", padding: "44px 26px 70px" }}>
          <Rotulo color={C.ambar}>Decodificación lectora</Rotulo>
          <h1 style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 800, margin: "12px 0 8px" }}>
            ¿De qué vamos a leer hoy?
          </h1>
          <p style={{ color: C.tenue, fontSize: 17.5, lineHeight: 1.55, margin: "0 0 30px", maxWidth: "60ch" }}>
            Todas las palabras del taller salen del tema que elijas. Se entrena leerlas, no aprenderlas:
            conviene el tema que el alumno ya domina hablando.
          </p>

          <div style={{
            display: "grid", gap: 16,
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}>
            {BANCOS.map((b) => (
              <button
                key={b.id}
                type="button"
                onClick={() => setBancoId(b.id)}
                style={{
                  textAlign: "left", background: C.panel, border: `2px solid ${C.borde}`,
                  borderRadius: 14, padding: "22px 20px", cursor: "pointer",
                  fontFamily: "inherit", color: C.texto, minHeight: 150,
                }}
                onPointerEnter={(e) => { e.currentTarget.style.borderColor = C.ambar; }}
                onPointerLeave={(e) => { e.currentTarget.style.borderColor = C.borde; }}
              >
                <div style={{ fontSize: 34, lineHeight: 1, marginBottom: 12 }}>{b.icono}</div>
                <div style={{ fontSize: 21, fontWeight: 800, marginBottom: 6 }}>{b.nombre}</div>
                <div style={{ color: C.tenue, fontSize: 15, lineHeight: 1.45 }}>{b.descripcion}</div>
              </button>
            ))}
          </div>

          {listo && !hayVoz && (
            <p style={{
              marginTop: 28, color: C.ambar, fontSize: 15, lineHeight: 1.55,
              border: `1px solid rgba(255,176,32,.3)`, borderRadius: 10, padding: "12px 16px",
              maxWidth: "72ch",
            }}>
              Este dispositivo no tiene ninguna voz en español instalada, así que el taller corre sin audio.
              Todas las actividades funcionan igual; en las que se escuchaba una palabra, ahora se ve un
              instante y se esconde, y las dos primeras pasadas de lectura las lee el maestro.
            </p>
          )}
        </div>
      </div>
    );
  }

  const modulo = MODULOS.find((m) => m.id === moduloId);
  const enSesion = sesion !== null;

  return (
    <ProveedorVoz value={{ voz, hayVoz }}>
      <div style={marco}>
        <style>{ANIMACIONES}</style>

        {/* Barra del taller. El acceso al panel del profesor es el ícono de la
            derecha: discreto a propósito, esto se proyecta frente al alumno. */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 12, padding: "12px 22px", borderBottom: `1px solid ${C.borde}`,
          position: "sticky", top: 0, background: C.fondo, zIndex: 5,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, minWidth: 0 }}>
            <button
              type="button"
              onClick={() => { if (moduloId) { setModuloId(null); setSesion(null); } else setBancoId(null); }}
              style={{
                background: "transparent", border: "none", color: C.tenue, cursor: "pointer",
                fontFamily: "inherit", fontSize: 15, fontWeight: 700, padding: "8px 6px", minHeight: 44,
              }}
            >
              ←&nbsp;{moduloId ? "Actividades" : "Cambiar tema"}
            </button>
            <span style={{ color: C.apagado, fontSize: 15, fontWeight: 700 }}>
              {banco.icono} {banco.nombre}
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {enSesion && (
              <span style={{ color: C.ambar, fontSize: 14, fontWeight: 700 }}>
                Sesión · {sesion + 1} de {disponibles.length}
              </span>
            )}
            <button
              type="button"
              onClick={() => setVerPanel(true)}
              title="Panel del profesor"
              aria-label="Panel del profesor"
              style={{
                background: "transparent", border: `1px solid ${C.borde}`, borderRadius: 8,
                color: C.apagado, cursor: "pointer", fontSize: 15, width: 44, height: 44,
              }}
            >
              ▤
            </button>
          </div>
        </div>

        <div style={{ maxWidth: 1040, margin: "0 auto", padding: "28px 26px 70px" }}>
          {!modulo ? (
            // ── Menú de actividades ─────────────────────────────────────
            <>
              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "flex-end",
                gap: 18, flexWrap: "wrap", marginBottom: 24,
              }}>
                <div>
                  <Rotulo color={C.ambar}>Actividades</Rotulo>
                  <p style={{ color: C.tenue, fontSize: 16.5, margin: "8px 0 0", maxWidth: "56ch", lineHeight: 1.5 }}>
                    Se puede entrar a una sola, o encadenarlas todas en el orden en que se sostienen.
                  </p>
                </div>
                <Boton onClick={empezarSesion} tamano="grande">
                  Sesión completa · 15-20 min
                </Boton>
              </div>

              <div style={{
                display: "grid", gap: 14,
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              }}>
                {disponibles.map((m, k) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => abrirModulo(m.id)}
                    style={{
                      textAlign: "left", background: C.panel, border: `2px solid ${C.borde}`,
                      borderRadius: 13, padding: "18px 20px", cursor: "pointer",
                      fontFamily: "inherit", color: C.texto, minHeight: 118,
                      display: "flex", gap: 16, alignItems: "flex-start",
                    }}
                    onPointerEnter={(e) => { e.currentTarget.style.borderColor = C.ambar; }}
                    onPointerLeave={(e) => { e.currentTarget.style.borderColor = C.borde; }}
                  >
                    <span style={{ fontSize: 28, lineHeight: 1.1 }}>{m.icono}</span>
                    <span style={{ minWidth: 0 }}>
                      <span style={{ display: "block", fontSize: 12, fontWeight: 800, color: C.apagado, letterSpacing: ".1em" }}>
                        {String(k + 1).padStart(2, "0")}
                      </span>
                      <span style={{ display: "block", fontSize: 19, fontWeight: 800, margin: "4px 0 5px" }}>
                        {m.nombre}
                      </span>
                      <span style={{ display: "block", color: C.tenue, fontSize: 14.5, lineHeight: 1.45 }}>
                        {m.desc}
                      </span>
                    </span>
                  </button>
                ))}
              </div>

              {disponibles.length < MODULOS.length && (
                <p style={{ color: C.apagado, fontSize: 14, marginTop: 20 }}>
                  Este tema todavía no trae {MODULOS.filter((m) => !disponibles.includes(m)).map((m) => m.nombre.toLowerCase()).join(" ni ")}.
                </p>
              )}
            </>
          ) : (
            // ── Actividad en curso ──────────────────────────────────────
            <modulo.Comp
              key={`${banco.id}:${modulo.id}`}
              banco={banco}
              alumnoId={alumnoId}
              registrar={registrar}
              cerrarRonda={cerrarRonda}
              onSalir={salirDeActividad}
              etiquetaSalir={
                enSesion
                  ? (sesion + 1 >= disponibles.length ? "Terminar la sesión" : "Siguiente actividad")
                  : "Volver a las actividades"
              }
            />
          )}
        </div>

        {verPanel && (
          <PanelProfesor
            alumnoId={alumnoId}
            nombreAlumno={alumnoId ? "Avance registrado en el expediente" : null}
            cargarSesiones={cargarSesiones}
            onCerrar={() => setVerPanel(false)}
          />
        )}
      </div>
    </ProveedorVoz>
  );
}
