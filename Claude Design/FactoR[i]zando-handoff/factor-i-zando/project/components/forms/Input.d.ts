import * as React from 'react';

/**
 * Campo de texto de una línea.
 * @startingPoint section="Formularios" subtitle="Campos, select y controles de selección" viewport="700x300"
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  /** Mensaje de error; sustituye al hint y tiñe el borde de ámbar. */
  error?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  /** Usa IBM Plex Mono: respuestas numéricas y fórmulas. */
  mono?: boolean;
}
export declare function Input(props: InputProps): JSX.Element;
