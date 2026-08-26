// Diagrama «arbol-monedas» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { PROB_NODE_TYPES } from "../comun.jsx";
import { ReactFlow } from "@xyflow/react";

export default function ProbArbolMonedas({ tema }) {
  const T = tema.texto, a = tema.acento, bl = tema.azul, gr = tema.canal(1);
  const eStyle = { stroke: 'rgba(255,255,255,0.28)', strokeWidth: 1.4 };
  const lStyle = { fill: tema.azulTexto, fontSize: 9, fontFamily: 'IBM Plex Mono, monospace' };
  const lBg = { fill: tema.bg, rx: 3 };
  const ed = (id, s, t) => ({ id, source: s, target: t, style: eStyle, label: '½', labelStyle: lStyle, labelBgStyle: lBg, labelShowBg: true });
  const nodes = [
    { id: 'root', type: 'probnodo', position: { x: 0,   y: 95  }, data: { label: '2 lanzam.', t: T, col: a } },
    { id: 'c1',   type: 'probnodo', position: { x: 145, y: 40  }, data: { label: 'Cara', t: T, col: bl } },
    { id: 'x1',   type: 'probnodo', position: { x: 145, y: 150 }, data: { label: 'Cruz', t: T, col: bl } },
    { id: 'cc',   type: 'probnodo', position: { x: 295, y: 8   }, data: { label: 'CC = ¼', t: T, col: gr } },
    { id: 'cx',   type: 'probnodo', position: { x: 295, y: 72  }, data: { label: 'CX = ¼', t: T, col: gr } },
    { id: 'xc',   type: 'probnodo', position: { x: 295, y: 118 }, data: { label: 'XC = ¼', t: T, col: gr } },
    { id: 'xx',   type: 'probnodo', position: { x: 295, y: 182 }, data: { label: 'XX = ¼', t: T, col: gr } },
  ];
  const edges = [
    ed('e1', 'root', 'c1'), ed('e2', 'root', 'x1'),
    ed('e3', 'c1', 'cc'), ed('e4', 'c1', 'cx'),
    ed('e5', 'x1', 'xc'), ed('e6', 'x1', 'xx'),
  ];
  return (
    <div style={{ width: '100%', height: 228 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={PROB_NODE_TYPES}
        fitView
        fitViewOptions={{ padding: 0.12 }}
        nodesDraggable={false}
        nodesConnectable={false}
        nodesFocusable={false}
        edgesFocusable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        proOptions={{ hideAttribution: true }}
        style={{ background: 'transparent' }}
      />
    </div>
  );
}
