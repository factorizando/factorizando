import * as React from 'react';

/**
 * Barra de progreso de lección o unidad.
 * @startingPoint section="Core" subtitle="Progreso con etiqueta y color de materia" viewport="700x160"
 */
export interface ProgressBarProps {
  value?: number;
  max?: number;
  /** Color de relleno; usa el token de la materia. */
  color?: string;
  label?: string;
  /** Texto a la derecha, p. ej. "7 / 10". */
  valueLabel?: string;
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}
export declare function ProgressBar(props: ProgressBarProps): JSX.Element;
