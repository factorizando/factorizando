import * as React from 'react';

/**
 * Tarjeta de materia del catálogo.
 * @startingPoint section="Patrones" subtitle="Tarjeta de materia con acento y metadatos" viewport="700x330"
 */
export interface SubjectCardProps {
  /** Token de materia: define acento, tinte y color del enlace. */
  subject?: 'math' | 'sage' | 'coral' | 'amber' | 'indigo';
  title?: string;
  description?: string;
  /** Línea de metadatos, p. ej. "14 unidades · 312 ejercicios". */
  meta?: string;
  icon?: React.ReactNode;
  actionLabel?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function SubjectCard(props: SubjectCardProps): JSX.Element;
