import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'math' | 'sage' | 'coral' | 'amber' | 'indigo' | 'neutral' | 'success' | 'warning' | 'error';
  uppercase?: boolean;
}
export declare function Badge(props: BadgeProps): JSX.Element;
