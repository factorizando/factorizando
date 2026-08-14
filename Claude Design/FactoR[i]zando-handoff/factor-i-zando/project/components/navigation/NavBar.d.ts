import * as React from 'react';

export interface NavItem { id: string; label: string; href?: string; color?: string; tint?: string }

/**
 * Barra superior de la plataforma con logo, materias y acción principal.
 * @startingPoint section="Navegación" subtitle="Barra superior con materias y CTA" viewport="1280x120"
 */
export interface NavBarProps {
  items?: NavItem[];
  activeId?: string;
  onSelect?: (id: string) => void;
  ctaLabel?: string;
  onCta?: () => void;
  secondaryLabel?: string;
  onSecondary?: () => void;
  style?: React.CSSProperties;
}
export declare function NavBar(props: NavBarProps): JSX.Element;
