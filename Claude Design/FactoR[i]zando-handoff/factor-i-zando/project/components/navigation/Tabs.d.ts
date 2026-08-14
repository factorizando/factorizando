import * as React from 'react';

export interface TabItem { id: string; label: string; count?: number }
export interface TabsProps {
  items?: TabItem[];
  value?: string;
  onChange?: (id: string) => void;
  /** Color del subrayado activo; usa el token de la materia. */
  accent?: string;
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
