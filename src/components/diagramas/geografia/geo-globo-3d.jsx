// Diagrama «geo-globo-3d» — geografia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { useEffect, useRef } from "react";

export default function GloboTerraqueo3D() {
  const mountRef = useRef(null);
  // Canvas height — cámara calibrada para este valor
  const H = 420;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animId;
    let mounted = true;
    const cleanupRef = { fn: null };

    (async () => {
      const THREE = await import("three");
      const { OrbitControls } = await import("three/addons/controls/OrbitControls.js");
      if (!mounted || !mountRef.current) return;

      const W = container.clientWidth || 500;

      // ── Escena y cámara ──
      // FOV 40° + z=3.3 → visible height ≈ 2.40 world units > sphere diameter 2.0
      // → polos con ~10 % de margen a cada lado
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, W / H, 0.1, 100);
      camera.position.z = 3.3;

      // ── Renderer ──
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(W, H);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // ── Iluminación ──
      scene.add(new THREE.AmbientLight(0xffffff, 0.5));
      const sun = new THREE.DirectionalLight(0xffffff, 0.95);
      sun.position.set(4, 2, 5);
      scene.add(sun);
      const fill = new THREE.DirectionalLight(0x4477cc, 0.3);
      fill.position.set(-3, -1, -4);
      scene.add(fill);

      // ── Grupo del globo (todo rota junto) ──
      const group = new THREE.Group();
      scene.add(group);

      // Textura NASA Blue Marble (equirectangular, CC0)
      const earthTex = new THREE.TextureLoader().load(
        `${import.meta.env.BASE_URL}textures/earth.jpg`
      );
      earthTex.colorSpace = THREE.SRGBColorSpace;

      // Esfera con mapa real
      group.add(new THREE.Mesh(
        new THREE.SphereGeometry(1, 72, 72),
        new THREE.MeshPhongMaterial({
          map: earthTex,
          specular: new THREE.Color(0x112244),
          shininess: 12,
        })
      ));
      // Halo atmosférico azul
      group.add(new THREE.Mesh(
        new THREE.SphereGeometry(1.048, 32, 32),
        new THREE.MeshPhongMaterial({
          color: 0x3366cc, transparent: true, opacity: 0.10, side: THREE.BackSide,
        })
      ));

      // Rotación inicial: Meridiano de Greenwich al frente (Europa/África visible)
      group.rotation.y = Math.PI;

      // ── Constructores de líneas ──
      const addLat = (latDeg, hex, op) => {
        const phi = (latDeg * Math.PI) / 180;
        const r = 1.004;
        const pts = [];
        for (let i = 0; i <= 180; i++) {
          const theta = (i * 2 * Math.PI) / 180;
          pts.push(new THREE.Vector3(
            r * Math.cos(phi) * Math.cos(theta),
            r * Math.sin(phi),
            r * Math.cos(phi) * Math.sin(theta)
          ));
        }
        group.add(new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(pts),
          new THREE.LineBasicMaterial({ color: hex, transparent: true, opacity: op })
        ));
      };

      const addLon = (lonDeg, hex, op) => {
        const theta = (lonDeg * Math.PI) / 180;
        const r = 1.004;
        const pts = [];
        for (let i = 0; i <= 90; i++) {
          const phi = ((i * 2 - 90) * Math.PI) / 180;
          pts.push(new THREE.Vector3(
            r * Math.cos(phi) * Math.cos(theta),
            r * Math.sin(phi),
            r * Math.cos(phi) * Math.sin(theta)
          ));
        }
        group.add(new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(pts),
          new THREE.LineBasicMaterial({ color: hex, transparent: true, opacity: op })
        ));
      };

      // Cuadrícula cada 30° — blanco translúcido sobre el mapa
      [-60, -30, 30, 60].forEach(lat => addLat(lat, 0xffffff, 0.18));
      [30, 60, 90, 120, 150, 210, 240, 270, 300, 330].forEach(lon =>
        addLon(lon, 0xffffff, 0.14));

      // Paralelos clave — colores saturados para destacar sobre el mapa
      addLat(0,     0x00aaff, 1.0);   // Ecuador — azul brillante
      addLat(23.5,  0xffcc00, 1.0);   // Trópico de Cáncer — dorado
      addLat(-23.5, 0xffcc00, 0.95);  // Trópico de Capricornio — dorado
      addLat(66.5,  0x88eeff, 0.90);  // Círculo Polar Ártico — celeste
      addLat(-66.5, 0x88eeff, 0.82);  // Círculo Polar Antártico — celeste

      // Meridianos clave
      addLon(0,   0xff6633, 1.0);   // Greenwich — naranja fuerte
      addLon(180, 0xff3322, 0.80);  // Línea de fecha — rojo

      // Puntos polares
      const dotGeo = new THREE.SphereGeometry(0.028, 8, 8);
      const dotMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const np = new THREE.Mesh(dotGeo, dotMat); np.position.set(0,  1.013, 0);
      const sp = new THREE.Mesh(dotGeo, dotMat); sp.position.set(0, -1.013, 0);
      group.add(np, sp);

      // Eje polar (línea fija en escena — no rota)
      const axPts = [new THREE.Vector3(0, 1.25, 0), new THREE.Vector3(0, -1.25, 0)];
      scene.add(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(axPts),
        new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.18 })
      ));

      // ── Controles de órbita ──
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = false;
      controls.enablePan  = false;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.45;
      controls.enableDamping = true;
      controls.dampingFactor = 0.08;
      // Limitar inclinación para que los polos sigan visibles
      controls.minPolarAngle = Math.PI * 0.12;
      controls.maxPolarAngle = Math.PI * 0.88;

      // ── Resize ──
      const onResize = () => {
        if (!container || !renderer) return;
        const w = container.clientWidth;
        camera.aspect = w / H;
        camera.updateProjectionMatrix();
        renderer.setSize(w, H);
      };
      window.addEventListener("resize", onResize);

      // ── Loop ──
      const animate = () => {
        animId = requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      cleanupRef.fn = () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("resize", onResize);
        controls.dispose();
        renderer.dispose();
        if (container && renderer.domElement.parentNode === container) {
          container.removeChild(renderer.domElement);
        }
      };
    })();

    return () => {
      mounted = false;
      if (cleanupRef.fn) cleanupRef.fn();
    };
  }, []);

  const legend = [
    { color: "#00aaff", text: "Ecuador · 0°" },
    { color: "#ffcc00", text: "Trópico de Cáncer · 23.5°N" },
    { color: "#ffcc00", text: "Trópico de Capricornio · 23.5°S" },
    { color: "#88eeff", text: "Círculo Polar Ártico · 66.5°N" },
    { color: "#88eeff", text: "Círculo Polar Antártico · 66.5°S" },
    { color: "#ff6633", text: "Meridiano de Greenwich · 0°" },
    { color: "#ff3322", text: "Línea de Fecha Internacional · 180°" },
    { color: "rgba(255,255,255,0.3)", text: "Cuadrícula · c/30°" },
  ];

  // Badge de punto cardinal
  const Cardinal = ({ letter, color, bg, style }) => (
    <div style={{
      position: "absolute",
      width: 36, height: 36,
      borderRadius: "50%",
      background: bg || "rgba(6,14,32,0.82)",
      border: `2.5px solid ${color}`,
      boxShadow: `0 0 10px ${color}55`,
      display: "flex", alignItems: "center", justifyContent: "center",
      color,
      fontSize: 15, fontWeight: "900", fontFamily: "monospace",
      letterSpacing: 0,
      pointerEvents: "none",
      zIndex: 10,
      userSelect: "none",
      ...style,
    }}>
      {letter}
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
      {/* ── Globo con cardinales superpuestos ── */}
      <div style={{ position: "relative", width: "100%", height: H }}>
        <div
          ref={mountRef}
          style={{ width: "100%", height: "100%", borderRadius: 12, overflow: "hidden",
            background: "rgba(3,10,24,0.7)" }}
        />
        {/* Norte — arriba, centrado */}
        <Cardinal letter="N" color="#ff5555"
          style={{ top: 10, left: "50%", transform: "translateX(-50%)" }} />
        {/* Sur — abajo, centrado */}
        <Cardinal letter="S" color="#6699ff"
          style={{ bottom: 10, left: "50%", transform: "translateX(-50%)" }} />
        {/* Este — derecha, centrado verticalmente */}
        <Cardinal letter="E" color="#f5c842"
          style={{ top: "50%", right: 10, transform: "translateY(-50%)" }} />
        {/* Oeste — izquierda, centrado verticalmente */}
        <Cardinal letter="O" color="#f5c842"
          style={{ top: "50%", left: 10, transform: "translateY(-50%)" }} />
        {/* Hint */}
        <div style={{
          position: "absolute", bottom: 14, right: 16,
          color: "rgba(255,255,255,0.22)", fontSize: 9, fontFamily: "monospace",
          pointerEvents: "none",
        }}>
          ↺ arrastra para rotar
        </div>
      </div>

      {/* ── Leyenda horizontal compacta ── */}
      <div style={{
        display: "flex", flexWrap: "wrap", gap: "5px 18px",
        padding: "8px 4px 2px",
      }}>
        {legend.map((l, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <div style={{ width: 20, height: 3, background: l.color, borderRadius: 2, flexShrink: 0 }}/>
            <span style={{ color: "rgba(255,255,255,0.68)", fontSize: 9.5, fontFamily: "monospace" }}>
              {l.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
