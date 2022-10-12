// import type { SelectInputStylesProps } from '@stela-ui/css';
// import { selectInputStyles } from '@stela-ui/css';
import type { FC } from 'react';

import type { GenericComponentProps } from '../types';

export interface SelectInputProps
  // SelectInputStylesProps,
  extends GenericComponentProps {
  label?: string;
  defaultValue?: string | number;
  onChange?: (checked: string | number) => void | unknown;
  options: { value: string | number; text?: string | number }[];
}

export const SelectInput: FC<SelectInputProps> = ({
  id,
  'data-testid': testId,
  onChange,
  defaultValue,
  options,
  ...rest
}) => {
  return (
    <select
      id={id}
      data-testid={testId}
      onChange={
        onChange
          ? (e) => {
              onChange(e.currentTarget.value);
            }
          : undefined
      }
      // css={selectInputStyles(rest)}
    >
      {options?.map(({ value, text }) => (
        <option key={value} value={value} selected={value === defaultValue}>
          {text || value}
        </option>
      ))}
    </select>
  );
};
