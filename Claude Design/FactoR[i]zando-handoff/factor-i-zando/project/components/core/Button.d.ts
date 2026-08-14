import * as React from 'react';

/**
 * Botón de acción de FactoR[i]zando.
 * @startingPoint section="Core" subtitle="Botones en sus cinco variantes y tres tamaños" viewport="700x260"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Jerarquía visual. `primary` es el azul de acción; solo uno por vista. */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'onDark';
  /** sm 40px · md 46px · lg 54px (lg es el default en primaria/tablet). */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
