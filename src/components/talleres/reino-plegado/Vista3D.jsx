// La misma partida, pegada sobre la superficie del mundo.
//
// Es la pieza que cierra la idea del juego: se juega en una cuadrícula plana
// —que es lo único jugable con el dedo— y con un botón se ve **ese mismo
// nivel, con el jugador donde está parado**, cosido sobre la dona o sobre la
// banda. Ahí se entiende de un golpe por qué salir por la derecha te devuelve
// por la izquierda, y por qué en la banda además llegas de cabeza.
//
// Cómo está armado: cada casilla del mapa es un cuadrito de la superficie,
// tomando cuatro muestras de la parametrización y cosiéndolas como dos
// triángulos con su color. Nada de texturas ni de modelos: la geometría se
// calcula con la misma fórmula que dobla el mundo.
//
// Se carga aparte (three pesa 700 KB) y solo cuando alguien toca el botón.
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { enlacesDe } from "../../../data/talleres/reino-plegado/index.js";
import { Boton, Rotulo } from "../comun/ui.jsx";
import { C, FUENTE } from "./estilo.js";

const TAU = Math.PI * 2;

// Las tres superficies, en coordenadas (u, v) con u y v de 0 a 1.
//   u recorre el mundo a lo ancho (las columnas del mapa)
//   v lo recorre a lo alto (las filas)
const SUPERFICIES = {
  toro: {
    // Rosquilla: u da la vuelta grande, v la chica. Los dos bordes pegan, que
    // es exactamente lo que hace el movimiento del mundo 3.
    punto(u, v) {
      const R = 3.1, r = 1.25;
      const a = u * TAU, b = v * TAU;
      const radio = R + r * Math.cos(b);
      return new THREE.Vector3(radio * Math.cos(a), radio * Math.sin(a), r * Math.sin(b));
    },
    camara: [0, -8.4, 5.2],
    nota: "Los dos bordes están pegados: la izquierda con la derecha y arriba con abajo.",
  },
  mobius: {
    // Banda de Möbius: al dar la vuelta entera, el ancho se invierte solo. Por
    // eso salir por un lado te regresa de cabeza sin que nadie lo programe.
    punto(u, v) {
      const R = 2.4, ancho = 2.6;
      const a = u * TAU;
      const t = (v - 0.5) * ancho;
      const radio = R + t * Math.cos(a / 2);
      return new THREE.Vector3(radio * Math.cos(a), radio * Math.sin(a), t * Math.sin(a / 2));
    },
    camara: [0, -9.6, 6.2],
    nota: "Una sola cara y un solo borde: recórrela entera y vuelves al mismo punto, pero volteado.",
  },
  escher: {
    // Plano; lo que se dobla aquí no es la superficie sino los pasajes, que se
    // dibujan como arcos por fuera.
    punto(u, v) {
      return new THREE.Vector3((u - 0.5) * 8, (0.5 - v) * 5.5, 0);
    },
    camara: [0, -7, 6],
    nota: "El suelo es plano, pero las losas del mismo color son la misma losa.",
  },
};

// Con la luz rasante de la superficie curva, los grises de la cuadrícula plana
// se aplanan: aquí el muro va más oscuro y el piso más claro que en el mapa 2D.
const COLOR = {
  muro: new THREE.Color("#0d1219"),
  piso: new THREE.Color("#3d4c5e"),
  pisoAlt: new THREE.Color("#475768"),
  portal: new THREE.Color("#4ea8ff"),
  abierto: new THREE.Color("#2a3a4a"),
  salida: new THREE.Color("#4ec97f"),
  enlace: new THREE.Color("#b78bff"),
};

export default function Vista3D({ mundo, nivel, pos, resueltos, portales, onCerrar }) {
  const lienzo = useRef(null);

  useEffect(() => {
    const superficie = SUPERFICIES[mundo.topologia] || SUPERFICIES.escher;
    const filas = nivel.mapa.length;
    const columnas = nivel.mapa[0].length;
    const contenedor = lienzo.current;

    const escena = new THREE.Scene();
    escena.background = new THREE.Color("#0f1620");

    const camara = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camara.position.set(...superficie.camara);
    camara.up.set(0, 0, 1);

    const render = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    render.setPixelRatio(Math.min(2, window.devicePixelRatio));
    contenedor.appendChild(render.domElement);

    const controles = new OrbitControls(camara, render.domElement);
    controles.enableDamping = true;
    controles.autoRotate = true;
    controles.autoRotateSpeed = 1.1;
    controles.enablePan = false;

    escena.add(new THREE.AmbientLight(0xffffff, 1.1));
    const luz = new THREE.DirectionalLight(0xffffff, 1.5);
    luz.position.set(4, -6, 8);
    escena.add(luz);

    // ── El mapa, cosido sobre la superficie ─────────────────────────────
    const enlaces = mundo.topologia === "escher" ? enlacesDe(nivel) : {};
    const posiciones = [];
    const colores = [];
    const centro = (f, c) => superficie.punto((c + 0.5) / columnas, (f + 0.5) / filas);

    const colorDe = (ch, f, c) => {
      if (ch === "#") return COLOR.muro;
      if (ch === "S") return COLOR.salida;
      if (/[a-z]/.test(ch)) return COLOR.enlace;
      if (ch === "?") {
        const i = portales.findIndex((p) => p.fila === f && p.columna === c);
        return resueltos.has(i) ? COLOR.abierto : COLOR.portal;
      }
      return (f + c) % 2 ? COLOR.piso : COLOR.pisoAlt;
    };

    // Cada losa se parte en SUB × SUB pedacitos: con un solo cuadrado por
    // casilla la dona salía poligonal, como una tuerca. Todos los pedacitos de
    // una losa llevan su mismo color, así que la cuadrícula se sigue leyendo.
    const SUB = 4;
    const m = 0.05; // junta entre losas, para que se vea la cuadrícula
    for (let f = 0; f < filas; f++) {
      for (let c = 0; c < columnas; c++) {
        const color = colorDe(nivel.mapa[f][c], f, c);
        for (let i = 0; i < SUB; i++) {
          for (let j = 0; j < SUB; j++) {
            const u0 = (c + m + (i / SUB) * (1 - 2 * m)) / columnas;
            const u1 = (c + m + ((i + 1) / SUB) * (1 - 2 * m)) / columnas;
            const v0 = (f + m + (j / SUB) * (1 - 2 * m)) / filas;
            const v1 = (f + m + ((j + 1) / SUB) * (1 - 2 * m)) / filas;
            const p = [
              superficie.punto(u0, v0), superficie.punto(u1, v0),
              superficie.punto(u1, v1), superficie.punto(u0, v1),
            ];
            [p[0], p[1], p[2], p[0], p[2], p[3]].forEach((v) => {
              posiciones.push(v.x, v.y, v.z);
              colores.push(color.r, color.g, color.b);
            });
          }
        }
      }
    }

    const geometria = new THREE.BufferGeometry();
    geometria.setAttribute("position", new THREE.Float32BufferAttribute(posiciones, 3));
    geometria.setAttribute("color", new THREE.Float32BufferAttribute(colores, 3));
    geometria.computeVertexNormals();
    const material = new THREE.MeshStandardMaterial({
      vertexColors: true, side: THREE.DoubleSide, roughness: 0.85, metalness: 0.05,
    });
    const malla = new THREE.Mesh(geometria, material);
    escena.add(malla);

    // ── Los pasajes del mundo 4, como arcos por fuera ───────────────────
    const arcos = [];
    const yaDibujados = new Set();
    Object.entries(enlaces).forEach(([desde, hasta]) => {
      const [f, c] = desde.split(":").map(Number);
      const ida = `${f}:${c}`, vuelta = `${hasta.fila}:${hasta.columna}`;
      if (yaDibujados.has(vuelta)) return;
      yaDibujados.add(ida);
      const a = centro(f, c), b = centro(hasta.fila, hasta.columna);
      const medio = a.clone().lerp(b, 0.5);
      medio.z += a.distanceTo(b) * 0.45;
      const curva = new THREE.QuadraticBezierCurve3(a, medio, b);
      const tubo = new THREE.Mesh(
        new THREE.TubeGeometry(curva, 40, 0.055, 8, false),
        new THREE.MeshStandardMaterial({ color: COLOR.enlace, roughness: 0.5 })
      );
      escena.add(tubo);
      arcos.push(tubo);
    });

    // ── El jugador ──────────────────────────────────────────────────────
    // Va como un alfiler de mapa: una bolita sostenida por un palito que sale
    // de la losa. Sola, la bolita se pierde contra la superficie curva.
    const fichaMaterial = new THREE.MeshStandardMaterial({ color: "#ffd166", roughness: 0.35 });
    const ficha = new THREE.Mesh(new THREE.SphereGeometry(0.26, 24, 16), fichaMaterial);
    // Se despega un poco de la superficie para que no se hunda. La normal se
    // saca de las dos tangentes, así sirve igual para la dona, para la banda
    // —donde "afuera" cambia de sentido al dar la vuelta— y para el plano.
    const u = (pos.columna + 0.5) / columnas;
    const v = (pos.fila + 0.5) / filas;
    const e = 0.004;
    const tu = superficie.punto(u + e, v).sub(superficie.punto(u - e, v));
    const tv = superficie.punto(u, v + e).sub(superficie.punto(u, v - e));
    const normal = tu.cross(tv).normalize();
    // En el plano del mundo 4 el producto cruz apunta hacia abajo y la ficha se
    // escondería debajo del suelo. En la dona la normal siempre sale hacia
    // afuera; en la banda de Möbius no hay un "afuera" que valga para toda la
    // superficie —esa es justamente su gracia— y da igual de qué lado quede.
    if (mundo.topologia === "escher" && normal.z < 0) normal.negate();
    const base = centro(pos.fila, pos.columna);
    const alto = 0.42;
    ficha.position.copy(base.clone().add(normal.clone().multiplyScalar(alto)));
    const palito = new THREE.Mesh(
      new THREE.CylinderGeometry(0.035, 0.035, alto, 8),
      fichaMaterial
    );
    palito.position.copy(base.clone().add(normal.clone().multiplyScalar(alto / 2)));
    palito.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal);
    escena.add(ficha);
    escena.add(palito);

    // ── Bucle ───────────────────────────────────────────────────────────
    let vivo = true;
    function medir() {
      const { clientWidth: w, clientHeight: h } = contenedor;
      render.setSize(w, h, false);
      camara.aspect = w / Math.max(1, h);
      camara.updateProjectionMatrix();
    }
    medir();
    window.addEventListener("resize", medir);

    (function animar() {
      if (!vivo) return;
      requestAnimationFrame(animar);
      controles.update();
      render.render(escena, camara);
    })();

    return () => {
      vivo = false;
      window.removeEventListener("resize", medir);
      controles.dispose();
      geometria.dispose();
      material.dispose();
      ficha.geometry.dispose();
      palito.geometry.dispose();
      fichaMaterial.dispose();
      arcos.forEach((t) => { t.geometry.dispose(); t.material.dispose(); });
      render.dispose();
      contenedor.removeChild(render.domElement);
    };
  }, [mundo, nivel, pos, resueltos, portales]);

  return (
    <div style={{
      position: "fixed", inset: 0, background: "#0f1620", zIndex: 60,
      display: "flex", flexDirection: "column", fontFamily: FUENTE,
    }}>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        gap: 16, padding: "14px 22px", borderBottom: `1px solid ${C.borde}`,
      }}>
        <div>
          <Rotulo color={C.azul}>{mundo.icono} {mundo.nombre} · {nivel.nombre}</Rotulo>
          <p style={{ margin: "8px 0 0", color: C.tenue, fontSize: 16, lineHeight: 1.45, maxWidth: "70ch" }}>
            {(SUPERFICIES[mundo.topologia] || SUPERFICIES.escher).nota}{" "}
            <span style={{ color: C.apagado }}>Arrastra para girarlo.</span>
          </p>
        </div>
        <Boton variante="neutro" onClick={onCerrar}>Volver al nivel</Boton>
      </div>
      <div ref={lienzo} style={{ flex: 1, minHeight: 0, touchAction: "none" }} />
    </div>
  );
}
