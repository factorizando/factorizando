import * as React from 'react';

export interface SelectOption { value: string; label: string }
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  options?: Array<string | SelectOption>;
}
export declare function Select(props: SelectProps): JSX.Element;
