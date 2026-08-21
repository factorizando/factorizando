// Un sólido girando, con sus caras, sus aristas y sus vértices.
//
// Lo usan La Galería y El Reto. La sala del Dual no: ahí hacen falta dos
// sólidos a la vez y una línea de tiempo, y montar eso encima de este visor
// habría salido más enredado que darle su propia escena.
//
// Todo lo que se anima —abrir el sólido, encender los vértices, apagar las
// caras— se persigue con suavizado dentro del bucle de three, no con estado de
// React: son sesenta cuadros por segundo y React no tiene por qué enterarse.
import { useEffect, useRef } from "react";
import { crearVisor, grupoAristas, grupoCaras, grupoEsferas, liberar, opacidad, acercar } from "./lib/escena.js";
import { ELEMENTO, FONDO_3D } from "./estilo.js";

export default function Visor({
  poliedro, color,
  verCaras = true, verAristas = true, verVertices = false,
  resaltar = null,            // "caras" | "aristas" | "vertices": apaga lo demás
  abierto = 0,                // 0 cerrado, 1 con las caras separadas
  girar = true,
  altura = 380,
  estilo = {},
}) {
  const caja = useRef(null);
  const visor = useRef(null);
  const piezas = useRef(null);
  const meta = useRef({});

  // Los valores que persigue el bucle. Se actualizan en cada render y el bucle
  // los alcanza suavemente; por eso encender los vértices no da un brinco.
  meta.current = { verCaras, verAristas, verVertices, resaltar, abierto };

  useEffect(() => {
    const contenedor = caja.current;
    const v = crearVisor(contenedor, { girar, fondo: FONDO_3D });
    visor.current = v;

    const estado = { caras: 1, aristas: 1, vertices: 0, abierto: 0 };

    v.cada((dt) => {
      const p = piezas.current;
      if (!p) return;
      const m = meta.current;

      // Lo resaltado se queda solo: lo demás baja a un fondo apenas visible.
      const atenuado = m.resaltar ? 0.22 : 1;
      const destino = {
        abierto: m.abierto,
        caras: (m.verCaras ? (m.resaltar && m.resaltar !== "caras" ? atenuado : 1) : 0),
        // Al abrir el sólido, las aristas y los vértices se quedarían flotando
        // en el aire donde ya no hay nada: se apagan solos.
        aristas: (m.verAristas || m.resaltar === "aristas" ? (m.resaltar && m.resaltar !== "aristas" ? atenuado : 1) : 0) * (1 - m.abierto),
        vertices: (m.verVertices || m.resaltar === "vertices" ? (m.resaltar && m.resaltar !== "vertices" ? atenuado : 1) : 0) * (1 - m.abierto),
      };

      Object.keys(estado).forEach((k) => { estado[k] = acercar(estado[k], destino[k], dt); });

      opacidad(p.caras, estado.caras);
      opacidad(p.aristas, estado.aristas);
      opacidad(p.vertices, estado.vertices);
      p.caras.children.forEach((cara) => {
        cara.position.copy(cara.userData.normal).multiplyScalar(estado.abierto * p.separacion);
      });
    });

    return () => { v.destruir(); visor.current = null; piezas.current = null; };
    // Se monta una vez: cambiar de sólido no rehace la escena, solo sus piezas.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Cambiar de sólido: fuera las piezas viejas, dentro las nuevas.
  useEffect(() => {
    const v = visor.current;
    if (!v) return;

    const nuevas = {
      caras: grupoCaras(poliedro, { color }),
      aristas: grupoAristas(poliedro, { color: ELEMENTO.arista, radio: 0.019 }),
      vertices: grupoEsferas(poliedro.vertices, { color: ELEMENTO.vertice, radio: 0.062 }),
      separacion: poliedro.circunradio * 0.85,
    };
    [nuevas.caras, nuevas.aristas, nuevas.vertices].forEach((g) => { opacidad(g, 0); v.escena.add(g); });
    const viejas = piezas.current;
    piezas.current = nuevas;
    if (viejas) [viejas.caras, viejas.aristas, viejas.vertices].forEach(liberar);
  }, [poliedro, color]);

  useEffect(() => { visor.current?.girar(girar); }, [girar]);

  return (
    <div
      ref={caja}
      style={{
        height: altura, borderRadius: 16, overflow: "hidden",
        background: FONDO_3D, border: "1px solid #2c3b4c",
        cursor: "grab", ...estilo,
      }}
    />
  );
}
