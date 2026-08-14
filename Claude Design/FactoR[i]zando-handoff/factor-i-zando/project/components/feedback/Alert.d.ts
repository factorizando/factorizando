import * as React from 'react';

/**
 * Mensaje en línea de estado, corrección o aviso.
 * @startingPoint section="Feedback" subtitle="Cuatro tonos de mensaje en línea" viewport="700x260"
 */
export interface AlertProps {
  tone?: 'success' | 'warning' | 'error' | 'info';
  title?: string;
  children?: React.ReactNode;
  action?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Alert(props: AlertProps): JSX.Element;
