// Los seis jugadores.
//
// El juego se juega por turnos en una sola tablet: aquí cada quien toca su
// tarjeta y entra. Las fotos se recortan y se encogen a 256 px **en el
// dispositivo** y no salen de él: son fotos de niños y el repositorio del sitio
// es público.
import { useRef, useState } from "react";
import { GRADOS } from "../../../data/talleres/reino-plegado/index.js";
import { Boton, Panel, Rotulo } from "../comun/ui.jsx";
import { C, COLORES_JUGADOR, TAM } from "./estilo.js";
import { MAX_JUGADORES } from "./lib/perfiles.js";

const LADO = 256;

// Recorta al centro y encoge. Una foto de tablet son 3 MB; esto la deja en
// unos 30 KB, que es lo que cabe en el almacenamiento del navegador sin
// llenarlo con seis fotos.
function recortarCuadrado(archivo) {
  return new Promise((resolver, rechazar) => {
    const lector = new FileReader();
    lector.onerror = () => rechazar(new Error("no se pudo leer el archivo"));
    lector.onload = () => {
      const img = new Image();
      img.onerror = () => rechazar(new Error("el archivo no es una imagen"));
      img.onload = () => {
        const lado = Math.min(img.width, img.height);
        const lienzo = document.createElement("canvas");
        lienzo.width = LADO;
        lienzo.height = LADO;
        lienzo.getContext("2d").drawImage(
          img,
          (img.width - lado) / 2, (img.height - lado) / 2, lado, lado,
          0, 0, LADO, LADO
        );
        resolver(lienzo.toDataURL("image/jpeg", 0.82));
      };
      img.src = lector.result;
    };
    lector.readAsDataURL(archivo);
  });
}

export function Avatar({ jugador, color, tam = 64, borde = 3 }) {
  const estilo = {
    width: tam, height: tam, borderRadius: "50%", objectFit: "cover",
    border: `${borde}px solid ${color}`, background: C.alto, display: "block",
  };
  if (jugador?.avatar) return <img src={jugador.avatar} alt="" style={estilo} />;
  return (
    <div style={{ ...estilo, display: "grid", placeItems: "center", fontSize: tam * 0.45 }}>
      {jugador?.nombre ? jugador.nombre[0].toUpperCase() : "?"}
    </div>
  );
}

export default function Jugadores({ jugadores, onElegir, onGuardar, onBorrar }) {
  const [editando, setEditando] = useState(null); // jugador o {} para uno nuevo

  if (editando) {
    return (
      <FormularioJugador
        jugador={editando}
        color={COLORES_JUGADOR[jugadores.findIndex((j) => j.id === editando.id) + 1 ? 0 : jugadores.length] || COLORES_JUGADOR[0]}
        onGuardar={(datos) => { onGuardar(datos); setEditando(null); }}
        onBorrar={editando.id ? () => { onBorrar(editando.id); setEditando(null); } : null}
        onCancelar={() => setEditando(null)}
      />
    );
  }

  const huecos = Math.max(0, MAX_JUGADORES - jugadores.length);

  return (
    <div>
      <Rotulo color={C.azul}>El Reino Plegado</Rotulo>
      <h1 style={{ fontSize: TAM.titulo, fontWeight: 800, margin: "12px 0 10px" }}>
        ¿Quién juega?
      </h1>
      <p style={{ color: C.tenue, fontSize: TAM.cuerpo, lineHeight: 1.55, margin: "0 0 28px", maxWidth: "60ch" }}>
        Toca tu cara para seguir tu partida. Cada quien avanza por su cuenta y en el mapa del reino
        se ve por dónde va cada uno.
      </p>

      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))" }}>
        {jugadores.map((j, i) => (
          <div key={j.id} style={{
            background: C.panel, border: `2px solid ${C.borde}`, borderRadius: 16,
            padding: 18, textAlign: "center",
          }}>
            <button
              type="button"
              onClick={() => onElegir(j)}
              style={{
                background: "transparent", border: 0, cursor: "pointer", padding: 0,
                display: "grid", justifyItems: "center", gap: 12, width: "100%",
                fontFamily: "inherit", color: C.texto, touchAction: "manipulation",
              }}
            >
              <Avatar jugador={j} color={COLORES_JUGADOR[i]} tam={96} />
              <span style={{ fontSize: 21, fontWeight: 800 }}>{j.nombre}</span>
            </button>
            <button
              type="button"
              onClick={() => setEditando(j)}
              style={{
                marginTop: 10, background: "transparent", border: `1px solid ${C.borde}`,
                borderRadius: 8, color: C.apagado, cursor: "pointer", fontFamily: "inherit",
                fontSize: 13, fontWeight: 700, padding: "8px 14px", minHeight: 44,
              }}
            >
              Cambiar foto o nombre
            </button>
          </div>
        ))}

        {huecos > 0 && (
          <button
            type="button"
            onClick={() => setEditando({})}
            style={{
              background: "transparent", border: `2px dashed ${C.borde}`, borderRadius: 16,
              padding: 18, minHeight: 210, cursor: "pointer", color: C.apagado,
              fontFamily: "inherit", fontSize: 17, fontWeight: 700,
              display: "grid", placeItems: "center", gap: 10, touchAction: "manipulation",
            }}
          >
            <span style={{ fontSize: 44, lineHeight: 1 }}>＋</span>
            Agregar jugador
          </button>
        )}
      </div>
    </div>
  );
}

function FormularioJugador({ jugador, color, onGuardar, onBorrar, onCancelar }) {
  const [nombre, setNombre] = useState(jugador.nombre || "");
  const [grado, setGrado] = useState(jugador.grado || 4);
  const [avatar, setAvatar] = useState(jugador.avatar || null);
  const [error, setError] = useState(null);
  const archivo = useRef(null);

  async function elegirFoto(e) {
    const f = e.target.files?.[0];
    if (!f) return;
    try {
      setAvatar(await recortarCuadrado(f));
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <Panel estilo={{ maxWidth: 560, margin: "10px auto" }}>
      <Rotulo color={color}>{jugador.id ? "Cambiar jugador" : "Jugador nuevo"}</Rotulo>

      <div style={{ display: "flex", gap: 20, alignItems: "center", margin: "20px 0" }}>
        <Avatar jugador={{ nombre, avatar }} color={color} tam={110} />
        <div style={{ display: "grid", gap: 10 }}>
          <input ref={archivo} type="file" accept="image/*" onChange={elegirFoto} style={{ display: "none" }} />
          <Boton variante="neutro" onClick={() => archivo.current?.click()}>
            {avatar ? "Cambiar la foto" : "Subir una foto"}
          </Boton>
          {avatar && (
            <Boton variante="fantasma" tamano="chico" onClick={() => setAvatar(null)}>Quitar la foto</Boton>
          )}
          <span style={{ color: C.apagado, fontSize: 13, maxWidth: "28ch", lineHeight: 1.45 }}>
            La foto se queda en esta tablet. No se sube a ningún lado.
          </span>
        </div>
      </div>

      <label style={{ display: "block", color: C.tenue, fontSize: 14, fontWeight: 700, marginBottom: 6 }}>
        Nombre
      </label>
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        maxLength={18}
        placeholder="Como te dicen"
        style={{
          width: "100%", background: C.alto, border: `2px solid ${C.borde}`, borderRadius: 10,
          color: C.texto, fontFamily: "inherit", fontSize: 20, fontWeight: 700,
          padding: "14px 16px", minHeight: 56, boxSizing: "border-box",
        }}
      />

      <label style={{ display: "block", color: C.tenue, fontSize: 14, fontWeight: 700, margin: "18px 0 6px" }}>
        ¿En qué grado va? Es solo el punto de partida; el juego se acomoda solo.
      </label>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {GRADOS.map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => setGrado(g)}
            style={{
              flex: "1 1 90px", minHeight: 56, borderRadius: 10, cursor: "pointer",
              background: grado === g ? color : C.alto,
              color: grado === g ? "#10161d" : C.texto,
              border: `2px solid ${grado === g ? "transparent" : C.borde}`,
              fontFamily: "inherit", fontSize: 18, fontWeight: 800,
            }}
          >
            {g}.º
          </button>
        ))}
      </div>

      {error && <p style={{ color: C.rojo, fontSize: 15, marginTop: 14 }}>{error}</p>}

      <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap", justifyContent: "flex-end" }}>
        {onBorrar && (
          <Boton variante="fantasma" tamano="chico" onClick={onBorrar}>Borrar jugador</Boton>
        )}
        <Boton variante="neutro" onClick={onCancelar}>Cancelar</Boton>
        <Boton
          color={color}
          disabled={!nombre.trim()}
          onClick={() => onGuardar({ id: jugador.id, nombre, grado, avatar })}
        >
          Guardar
        </Boton>
      </div>
    </Panel>
  );
}
