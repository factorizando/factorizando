import * as React from 'react';

export interface LogoProps {
  /** Tamaño del wordmark en px (la marca escala con él). */
  size?: number;
  /** Muestra el cuadrado "F". */
  mark?: boolean;
  /** Versión para fondos navy. */
  onDark?: boolean;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
