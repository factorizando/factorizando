// Árbol de decisión de la tilde: se toca un resultado y se ilumina su camino.
//
// Vivía dentro de SlideRenderer como un `slide.tipo` propio. Es manipulable, así
// que su sitio es el registro de interactivos (docs/CONVENCIONES.md §4.4) y se
// usa como un bloque desde cualquier diapositiva, en vez de ser un tipo de
// diapositiva entero que solo una presentación usaba.
//
// El camino iluminado iba en verde `#4ade80`. Ahora va en el acento de la
// materia: iluminar un camino es señalar una selección, no marcar un acierto, y
// el verde ya no significa nada en el sistema (docs/DISENO.md §2.4).
import { useState, useMemo, useEffect } from "react";
import { ReactFlow, Handle, Position, Background } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const HANDLE_HIDDEN = { background: 'transparent', border: 'none', width: 8, height: 8 };

function FNStart({ data }) {
  return (
    <div style={{ padding: '4px 18px', borderRadius: 20, background: data.bg, border: `1px solid ${data.bd}`, fontSize: 11, fontWeight: 700, color: data.t, letterSpacing: '0.14em', textAlign: 'center', opacity: data.dim ? 0.15 : 1, transition: 'opacity 0.35s' }}>
      {data.label}
      <Handle type="source" position={Position.Bottom} style={HANDLE_HIDDEN} />
    </div>
  );
}

function FNQuestion({ data }) {
  const col = data.col || '#3b9eff';
  return (
    <div style={{ padding: '6px 12px', borderRadius: 8, minWidth: 140, background: `${col}16`, border: `1.5px solid ${col}${data.glow ? '' : '80'}`, fontSize: 10, color: data.t, textAlign: 'center', lineHeight: 1.4, opacity: data.dim ? 0.15 : 1, transition: 'all 0.35s', boxShadow: data.glow ? `0 0 14px ${col}55` : 'none' }}>
      <Handle type="target" position={Position.Top} style={HANDLE_HIDDEN} />
      {data.label}
      <Handle type="source" id="si"     position={Position.Left}   style={HANDLE_HIDDEN} />
      <Handle type="source" id="no"     position={Position.Right}  style={HANDLE_HIDDEN} />
      <Handle type="source" id="bottom" position={Position.Bottom} style={HANDLE_HIDDEN} />
      <Handle type="source" id="b25"    position={Position.Bottom} style={{ ...HANDLE_HIDDEN, left: '25%' }} />
      <Handle type="source" id="b50"    position={Position.Bottom} style={{ ...HANDLE_HIDDEN, left: '50%' }} />
      <Handle type="source" id="b75"    position={Position.Bottom} style={{ ...HANDLE_HIDDEN, left: '75%' }} />
    </div>
  );
}

function FNType({ data }) {
  const col = data.col || '#3b9eff';
  return (
    <div style={{ padding: '4px 12px', borderRadius: 16, background: `${col}22`, border: `1.5px solid ${col}70`, fontSize: 9.5, color: col, fontWeight: 700, textAlign: 'center', lineHeight: 1.35, opacity: data.dim ? 0.15 : 1, transition: 'opacity 0.35s' }}>
      <Handle type="target" position={Position.Top} style={HANDLE_HIDDEN} />
      {data.label}
      <Handle type="source" position={Position.Bottom} style={HANDLE_HIDDEN} />
    </div>
  );
}

function FNResult({ data }) {
  // El color llega por `data`: este nodo lo pinta ReactFlow y no tiene acceso al
  // tema. `con` es la rama que lleva tilde y `sin` la que no — dos estados de la
  // misma pregunta, así que se distinguen por relleno y no por matiz.
  const col = data.col;
  const isActive = data.active;
  return (
    <div onClick={data.onClick} style={{ padding: '6px 10px', borderRadius: 8, minWidth: 88, background: `${col}${isActive ? '22' : '0d'}`, border: `${isActive ? '2px' : '1px'} solid ${col}${isActive ? '' : '60'}`, fontSize: 10, color: col, fontWeight: 700, textAlign: 'center', lineHeight: 1.4, cursor: 'pointer', opacity: data.dim ? 0.15 : 1, transition: 'all 0.35s', boxShadow: isActive ? `0 0 18px ${col}55` : 'none', userSelect: 'none' }}>
      <Handle type="target" position={Position.Top} style={HANDLE_HIDDEN} />
      <div style={{ fontFamily: 'monospace', letterSpacing: '0.06em', marginBottom: 2 }}>{data.label}</div>
      {data.sub && <div style={{ fontSize: 8, opacity: 0.75, fontWeight: 400, lineHeight: 1.3 }}>{data.sub}</div>}
    </div>
  );
}

const FLOW_NODE_TYPES = { start: FNStart, question: FNQuestion, type: FNType, result: FNResult };

const TILDE_PATHS = {
  r1: { n: new Set(['start','nmono','ndiac','r1']),          e: new Set(['e0','e_msi','e_dsi']) },
  r2: { n: new Set(['start','nmono','ndiac','r2']),          e: new Set(['e0','e_msi','e_dno']) },
  r3: { n: new Set(['start','nmono','npos','naguda','nagc','r3']),  e: new Set(['e0','e_mno','e_ag','e4','e_agsi']) },
  r4: { n: new Set(['start','nmono','npos','naguda','nagc','r4']),  e: new Set(['e0','e_mno','e_ag','e4','e_agno']) },
  r5: { n: new Set(['start','nmono','npos','nllana','nllc','r5']),  e: new Set(['e0','e_mno','e_ll','e5','e_llsi']) },
  r6: { n: new Set(['start','nmono','npos','nllana','nllc','r6']),  e: new Set(['e0','e_mno','e_ll','e5','e_llno']) },
  r7: { n: new Set(['start','nmono','npos','nesdruj','r7']),  e: new Set(['e0','e_mno','e_es','e6']) },
};

// El ancho de ventana decide cuánto se acerca la vista al árbol. Vivía en
// SlideRenderer; aquí es de este componente y de nadie más.
function useAnchoVentana() {
  const [ancho, setAncho] = useState(() => (typeof window === "undefined" ? 1280 : window.innerWidth));
  useEffect(() => {
    const alCambiar = () => setAncho(window.innerWidth);
    window.addEventListener("resize", alCambiar);
    return () => window.removeEventListener("resize", alCambiar);
  }, []);
  return ancho;
}

export default function ArbolTilde({ tema }) {
  const [activeResult, setActiveResult] = useState(null);
  const winW = useAnchoVentana();

  const activePath = activeResult ? TILDE_PATHS[activeResult] : null;
  const nDim  = (id) => activePath ? !activePath.n.has(id) : false;
  const nGlow = (id) => activePath ? activePath.n.has(id) : false;
  const eDim  = (id) => activePath ? !activePath.e.has(id) : false;
  const eOn   = (id) => activePath ? activePath.e.has(id) : false;

  const toggle = (id) => setActiveResult(p => p === id ? null : id);

  const eStyle = (id) => ({
    // Las aristas iban en blanco translúcido, que sobre papel blanco no se ve.
    // Ahora salen del tema: apagadas cuando hay un camino elegido y no son ese,
    // y en el borde fuerte cuando no hay ninguno.
    stroke: eOn(id) ? tema.acento : eDim(id) ? tema.border : tema.borderFuerte,
    strokeWidth: eOn(id) ? 2.2 : 1.2,
    transition: 'stroke 0.35s, stroke-width 0.35s',
    filter: eOn(id) ? `drop-shadow(0 0 3px ${tema.acento}77)` : 'none',
  });
  const eLabelStyle = (id) => ({
    fill: eOn(id) ? tema.acento : tema.muted,
    fontSize: 8, fontFamily: 'monospace',
    transition: 'fill 0.35s',
  });
  const eLabelBg = (id) => ({
    fill: eOn(id) ? tema.acentoSuave : tema.bg,
    rx: 3,
  });

  const T = tema.texto;
  // Los dos desenlaces del árbol: «lleva tilde» en el acento de la materia y
  // «no lleva» en gris. No son acierto y error —son las dos respuestas posibles
  // a la misma pregunta—, así que se distinguen por relleno, no por matiz.
  const A = tema.acento;
  const M = tema.muted;
  const nodes = useMemo(() => [
    { id: 'start',  type: 'start',    position: { x: 247, y:   0 }, data: { label: 'PALABRA', t: T, bg: tema.card, bd: tema.borderFuerte, dim: nDim('start') } },
    { id: 'nmono',  type: 'question', position: { x: 215, y:  44 }, data: { label: '¿Es monosílabo?', col: tema.muted, t: T, dim: nDim('nmono'), glow: nGlow('nmono') } },
    { id: 'ndiac',  type: 'question', position: { x:   8, y: 132 }, data: { label: '¿Tiene par\ndiacrítico?', col: tema.muted, t: T, dim: nDim('ndiac'), glow: nGlow('ndiac') } },
    { id: 'npos',   type: 'question', position: { x: 446, y: 132 }, data: { label: '¿Dónde cae\nla tónica?', col: tema.muted, t: T, dim: nDim('npos'), glow: nGlow('npos') } },
    { id: 'r1',     type: 'result',   position: { x:   4, y: 222 }, data: { label: 'TILDE', sub: 'él·mí·tú·sé·sí…', result: 'si', active: activeResult === 'r1', dim: nDim('r1'), onClick: () => toggle('r1') , col: A } },
    { id: 'r2',     type: 'result',   position: { x: 116, y: 222 }, data: { label: 'SIN TILDE', sub: 'fue·vio·pie…', result: 'no', active: activeResult === 'r2', dim: nDim('r2'), onClick: () => toggle('r2') , col: M } },
    { id: 'naguda', type: 'type',     position: { x: 242, y: 222 }, data: { label: 'AGUDA\núltima', col: tema.acento, dim: nDim('naguda') } },
    { id: 'nllana', type: 'type',     position: { x: 518, y: 222 }, data: { label: 'LLANA\npenúltima', col: tema.azul, dim: nDim('nllana') } },
    { id: 'nesdruj',type: 'type',     position: { x: 652, y: 222 }, data: { label: 'ESDRÚJ./SOBR.\nante-penúlt.+', col: tema.canal(1), dim: nDim('nesdruj') } },
    { id: 'nagc',   type: 'question', position: { x: 214, y: 302 }, data: { label: '¿Termina en\nvocal, N o S?', col: tema.acento, t: T, dim: nDim('nagc'), glow: nGlow('nagc') } },
    { id: 'nllc',   type: 'question', position: { x: 491, y: 302 }, data: { label: '¿Termina en\nvocal, N o S?', col: tema.azul, t: T, dim: nDim('nllc'), glow: nGlow('nllc') } },
    { id: 'r7',     type: 'result',   position: { x: 665, y: 302 }, data: { label: 'SIEMPRE\nTILDE', sub: 'médico·sílaba…', result: 'si', active: activeResult === 'r7', dim: nDim('r7'), onClick: () => toggle('r7'), col: A } },
    { id: 'r3',     type: 'result',   position: { x: 148, y: 396 }, data: { label: 'TILDE', sub: 'café·jardín…', result: 'si', active: activeResult === 'r3', dim: nDim('r3'), onClick: () => toggle('r3') , col: A } },
    { id: 'r4',     type: 'result',   position: { x: 262, y: 396 }, data: { label: 'SIN TILDE', sub: 'reloj·verdad…', result: 'no', active: activeResult === 'r4', dim: nDim('r4'), onClick: () => toggle('r4') , col: M } },
    { id: 'r5',     type: 'result',   position: { x: 438, y: 396 }, data: { label: 'SIN TILDE', sub: 'casa·examen…', result: 'no', active: activeResult === 'r5', dim: nDim('r5'), onClick: () => toggle('r5') , col: M } },
    { id: 'r6',     type: 'result',   position: { x: 556, y: 396 }, data: { label: 'TILDE', sub: 'árbol·fácil…', result: 'si', active: activeResult === 'r6', dim: nDim('r6'), onClick: () => toggle('r6') , col: A } },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ], [activeResult, tema]);

  const edges = useMemo(() => [
    { id: 'e0',    source: 'start',  target: 'nmono',  style: eStyle('e0') },
    { id: 'e_msi', source: 'nmono',  sourceHandle: 'si', target: 'ndiac', label: 'SÍ', labelStyle: eLabelStyle('e_msi'), labelBgStyle: eLabelBg('e_msi'), style: eStyle('e_msi') },
    { id: 'e_mno', source: 'nmono',  sourceHandle: 'no', target: 'npos',  label: 'NO', labelStyle: eLabelStyle('e_mno'), labelBgStyle: eLabelBg('e_mno'), style: eStyle('e_mno') },
    { id: 'e_dsi', source: 'ndiac',  sourceHandle: 'si', target: 'r1',    label: 'SÍ', labelStyle: eLabelStyle('e_dsi'), labelBgStyle: eLabelBg('e_dsi'), style: eStyle('e_dsi') },
    { id: 'e_dno', source: 'ndiac',  sourceHandle: 'no', target: 'r2',    label: 'NO', labelStyle: eLabelStyle('e_dno'), labelBgStyle: eLabelBg('e_dno'), style: eStyle('e_dno') },
    { id: 'e_ag',  source: 'npos',   sourceHandle: 'b25', target: 'naguda', style: eStyle('e_ag') },
    { id: 'e_ll',  source: 'npos',   sourceHandle: 'b50', target: 'nllana', style: eStyle('e_ll') },
    { id: 'e_es',  source: 'npos',   sourceHandle: 'b75', target: 'nesdruj', style: eStyle('e_es') },
    { id: 'e4',    source: 'naguda', target: 'nagc',   style: eStyle('e4') },
    { id: 'e5',    source: 'nllana', target: 'nllc',   style: eStyle('e5') },
    { id: 'e6',    source: 'nesdruj',target: 'r7',     style: eStyle('e6') },
    { id: 'e_agsi',source: 'nagc',   sourceHandle: 'si', target: 'r3',   label: 'SÍ', labelStyle: eLabelStyle('e_agsi'), labelBgStyle: eLabelBg('e_agsi'), style: eStyle('e_agsi') },
    { id: 'e_agno',source: 'nagc',   sourceHandle: 'no', target: 'r4',   label: 'NO', labelStyle: eLabelStyle('e_agno'), labelBgStyle: eLabelBg('e_agno'), style: eStyle('e_agno') },
    { id: 'e_llsi',source: 'nllc',   sourceHandle: 'si', target: 'r5',   label: 'SÍ', labelStyle: eLabelStyle('e_llsi'), labelBgStyle: eLabelBg('e_llsi'), style: eStyle('e_llsi') },
    { id: 'e_llno',source: 'nllc',   sourceHandle: 'no', target: 'r6',   label: 'NO', labelStyle: eLabelStyle('e_llno'), labelBgStyle: eLabelBg('e_llno'), style: eStyle('e_llno') },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // `tema` en las dependencias: sin él, cambiar de esquema deja las aristas con
  // el color del anterior — claras sobre fondo oscuro. El memo de los nodos ya
  // lo traía; este no.
  ], [activeResult, tema]);

  return (
    // Sin encabezado propio: la etiqueta, el título y la instrucción son del
    // lienzo que lo contiene. Un interactivo dibuja, no maqueta la diapositiva.
    // Altura propia y no `height: 100%`: dentro de una celda de rejilla el padre
    // mide por su contenido, así que un 100% se resuelve contra algo indefinido
    // y ReactFlow colapsa a cero. Se ve la caja, se ven los nodos en el DOM, y
    // no se dibuja nada.
    <div style={{ height: 470, display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, position: 'relative', minHeight: 0 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={FLOW_NODE_TYPES}
          fitView
          fitViewOptions={{ padding: winW < 500 ? 0.08 : 0.14 }}
          nodesDraggable={false}
          nodesConnectable={false}
          nodesFocusable={false}
          edgesFocusable={false}
          panOnDrag={true}
          zoomOnScroll={false}
          zoomOnPinch={true}
          preventScrolling={false}
          proOptions={{ hideAttribution: true }}
          style={{ background: 'transparent' }}
        >
          <Background color={tema.border} gap={22} size={1} />
        </ReactFlow>
      </div>
    </div>
  );
}
