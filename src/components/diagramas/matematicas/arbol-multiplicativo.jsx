// Diagrama «arbol-multiplicativo» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { PROB_NODE_TYPES } from "../comun.jsx";
import { ReactFlow } from "@xyflow/react";

export default function ProbArbolMultiplicativo({ tema }) {
  const T = tema.texto, a = tema.acento, bl = tema.azul, gr = tema.verde;
  const eStyle = { stroke: 'rgba(255,255,255,0.28)', strokeWidth: 1.4 };
  const nodes = [
    { id: 'root', type: 'probnodo', position: { x: 0,   y: 128 }, data: { label: 'Menú',   t: T, col: a } },
    { id: 'p1',   type: 'probnodo', position: { x: 130, y: 58  }, data: { label: 'Pollo',  t: T, col: bl } },
    { id: 'p2',   type: 'probnodo', position: { x: 130, y: 198 }, data: { label: 'Pasta',  t: T, col: bl } },
    { id: 'b1',   type: 'probnodo', position: { x: 280, y: 18  }, data: { label: 'Agua',     t: T, col: gr } },
    { id: 'b2',   type: 'probnodo', position: { x: 280, y: 58  }, data: { label: 'Jugo',     t: T, col: gr } },
    { id: 'b3',   type: 'probnodo', position: { x: 280, y: 98  }, data: { label: 'Refresco', t: T, col: gr } },
    { id: 'b4',   type: 'probnodo', position: { x: 280, y: 158 }, data: { label: 'Agua',     t: T, col: gr } },
    { id: 'b5',   type: 'probnodo', position: { x: 280, y: 198 }, data: { label: 'Jugo',     t: T, col: gr } },
    { id: 'b6',   type: 'probnodo', position: { x: 280, y: 238 }, data: { label: 'Refresco', t: T, col: gr } },
  ];
  const edges = [
    { id: 'e1', source: 'root', target: 'p1', style: eStyle },
    { id: 'e2', source: 'root', target: 'p2', style: eStyle },
    { id: 'e3', source: 'p1', target: 'b1', style: eStyle },
    { id: 'e4', source: 'p1', target: 'b2', style: eStyle },
    { id: 'e5', source: 'p1', target: 'b3', style: eStyle },
    { id: 'e6', source: 'p2', target: 'b4', style: eStyle },
    { id: 'e7', source: 'p2', target: 'b5', style: eStyle },
    { id: 'e8', source: 'p2', target: 'b6', style: eStyle },
  ];
  return (
    <div style={{ width: '100%', height: 248 }}>
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
