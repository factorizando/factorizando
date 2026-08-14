import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Color de la línea superior; usa un token de materia (`var(--fx-coral)`). */
  accent?: string;
  /** Activa la elevación y el desplazamiento en hover. */
  interactive?: boolean;
  padding?: number | string;
}
export declare function Card(props: CardProps): JSX.Element;
