// Lo que este taller necesita de three, y nada más.
//
// Se carga aparte (three pesa ~700 KB) y solo cuando alguien entra a una sala;
// el menú del taller no lo baja. Mismo trato que Vista3D en El Reino Plegado.
//
// Las piezas se construyen desde el poliedro *calculado* —sus caras, sus
// aristas, los centros de sus caras—, nunca desde las primitivas de three
// (`IcosahedronGeometry` y compañía). Si el dibujo saliera de una primitiva y
// la cuenta de la ficha de otro lado, podrían dejar de coincidir; así el
// icosaedro de la pantalla es exactamente el que contaron las pruebas.
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export { THREE };

const ARRIBA = new THREE.Vector3(0, 1, 0);

// Escena, luces, órbita y bucle. Devuelve lo poco que hace falta desde React.
export function crearVisor(contenedor, { distancia = 3.6, fondo = "#0b1119", girar = true } = {}) {
  const escena = new THREE.Scene();
  escena.background = new THREE.Color(fondo);

  const camara = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camara.position.set(0.9, 1.1, distancia);

  const motor = new THREE.WebGLRenderer({ antialias: true, powerPreference: "low-power" });
  motor.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  Object.assign(motor.domElement.style, { width: "100%", height: "100%", display: "block", touchAction: "none" });
  contenedor.appendChild(motor.domElement);

  // Tres luces y ninguna sombra: la sombra oscurecería justo las caras de
  // atrás, que es lo que hay que poder contar.
  escena.add(new THREE.HemisphereLight(0xbcd6f0, 0x141c26, 1.1));
  const principal = new THREE.DirectionalLight(0xffffff, 1.7);
  principal.position.set(3, 5, 4);
  escena.add(principal);
  const relleno = new THREE.DirectionalLight(0x86b8ff, 0.75);
  relleno.position.set(-4, -2, -3);
  escena.add(relleno);

  // Se gira con el dedo pero no se acerca ni se desplaza: en una tablet
  // proyectada, un pellizco mal dado deja la figura fuera de cuadro y ya nadie
  // sabe volver.
  const controles = new OrbitControls(camara, motor.domElement);
  controles.enablePan = false;
  controles.enableZoom = false;
  controles.enableDamping = true;
  controles.dampingFactor = 0.09;
  controles.autoRotate = girar;
  controles.autoRotateSpeed = 1.0;

  const ajustar = () => {
    const { clientWidth: w, clientHeight: h } = contenedor;
    if (!w || !h) return;
    motor.setSize(w, h, false);
    camara.aspect = w / h;
    camara.updateProjectionMatrix();
  };
  const observador = new ResizeObserver(ajustar);
  observador.observe(contenedor);
  ajustar();

  const reloj = new THREE.Clock();
  let vivo = true;
  let cada = null;

  (function bucle() {
    if (!vivo) return;
    requestAnimationFrame(bucle);
    const dt = Math.min(reloj.getDelta(), 0.05);   // pestaña de vuelta: sin saltos
    if (cada) cada(dt);
    controles.update();
    motor.render(escena, camara);
  })();

  return {
    escena, camara, controles,
    cada(f) { cada = f; },
    girar(si) { controles.autoRotate = si; },
    destruir() {
      vivo = false;
      observador.disconnect();
      controles.dispose();
      liberar(escena);
      motor.dispose();
      if (motor.domElement.parentNode === contenedor) contenedor.removeChild(motor.domElement);
    },
  };
}

// ── Piezas ──────────────────────────────────────────────────────────────────

// Una malla por cara, no una sola malla con todo. Cuesta veinte objetos en vez
// de uno y a cambio se puede abrir el sólido moviendo cada cara por su cuenta,
// que es como se cuentan las caras sin perder la cuenta.
export function grupoCaras(p, { color, opacidad = 1, transparente = false }) {
  const grupo = new THREE.Group();

  p.caras.forEach((cara, k) => {
    const pos = [];
    for (let t = 1; t < cara.length - 1; t++) {
      [cara[0], cara[t], cara[t + 1]].forEach((i) => pos.push(...p.vertices[i]));
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    geo.computeVertexNormals();

    const mat = new THREE.MeshStandardMaterial({
      color, roughness: 0.42, metalness: 0.06, flatShading: true,
      side: THREE.DoubleSide,
      transparent: transparente || opacidad < 1,
      opacity: opacidad,
      // Sin esto, el sólido translúcido tapa al dual que lleva dentro.
      depthWrite: !(transparente || opacidad < 1),
    });

    const malla = new THREE.Mesh(geo, mat);
    malla.userData.normal = new THREE.Vector3(...p.normales[k]);
    malla.userData.centro = new THREE.Vector3(...p.centros[k]);
    grupo.add(malla);
  });

  return grupo;
}

// Las aristas como cilindros y no como líneas: en WebGL el grosor de línea no
// se puede subir, y una línea de un píxel desaparece en un cañón de proyección.
export function grupoAristas(p, { color, radio = 0.018, opacidad = 1 }) {
  const grupo = new THREE.Group();
  const geo = new THREE.CylinderGeometry(radio, radio, 1, 10);
  geo.translate(0, 0.5, 0);                       // nace en el origen y crece hacia +Y
  const mat = new THREE.MeshStandardMaterial({
    color, roughness: 0.3, metalness: 0.2, transparent: true, opacity: opacidad,
  });

  p.aristas.forEach(([a, b]) => {
    const va = new THREE.Vector3(...p.vertices[a]);
    const vb = new THREE.Vector3(...p.vertices[b]);
    const barra = new THREE.Mesh(geo, mat);
    barra.position.copy(va);
    barra.scale.set(1, va.distanceTo(vb), 1);
    barra.quaternion.setFromUnitVectors(ARRIBA, vb.clone().sub(va).normalize());
    grupo.add(barra);
  });

  grupo.userData.compartido = [geo, mat];
  return grupo;
}

export function grupoEsferas(puntos, { color, radio = 0.06, opacidad = 1 }) {
  const grupo = new THREE.Group();
  const geo = new THREE.SphereGeometry(radio, 20, 14);
  const mat = new THREE.MeshStandardMaterial({
    color, roughness: 0.25, metalness: 0.1, transparent: true, opacity: opacidad,
    emissive: new THREE.Color(color), emissiveIntensity: 0.25,
  });

  puntos.forEach((punto) => {
    const bolita = new THREE.Mesh(geo, mat);
    bolita.position.set(...punto);
    grupo.add(bolita);
  });

  grupo.userData.compartido = [geo, mat];
  return grupo;
}

// ── Animación y limpieza ────────────────────────────────────────────────────

// Opacidad de un grupo entero. Con 0 se apaga: un objeto invisible no se
// dibuja y no se paga.
export function opacidad(objeto, valor) {
  objeto.visible = valor > 0.004;
  objeto.traverse((o) => {
    if (!o.material) return;
    o.material.transparent = valor < 0.999;
    o.material.depthWrite = valor > 0.999;
    o.material.opacity = valor;
  });
}

// Suavizado exponencial hacia un destino, estable con cualquier dt.
export function acercar(actual, destino, dt, velocidad = 7) {
  return actual + (destino - actual) * (1 - Math.exp(-velocidad * dt));
}

export const suave = (t) => t * t * (3 - 2 * t);
export const recorte = (t, a, b) => Math.max(0, Math.min(1, (t - a) / (b - a)));

export function liberar(objeto) {
  objeto.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
    if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => m.dispose());
    (o.userData?.compartido || []).forEach((r) => r.dispose());
  });
  objeto.parent?.remove(objeto);
}
