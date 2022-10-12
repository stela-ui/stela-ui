// import type { SelectInputStylesProps } from '@stela-ui/css';
// import { selectInputStyles } from '@stela-ui/css';
import type { FC } from 'react';

import type { GenericComponentProps } from '../types';

export interface SelectInputProps
  // SelectInputStylesProps,
  extends GenericComponentProps {
  label?: string;
  defaultValue?: string | number;
  name?: string;
  onChange?: (checked: string | number) => void | unknown;
  options: { value: string | number; text?: string | number }[];
}

export const SelectInput: FC<SelectInputProps> = ({
  id,
  'data-testid': testId,
  onChange,
  defaultValue,
  options,
  name,
  label,
  ...rest
}) => {
  return (
    <div>
      <span>{label}</span>
      <select
        id={id}
        data-testid={testId}
        name={name}
        defaultValue={defaultValue}
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
          <option key={value} value={value}>
            {text || value}
          </option>
        ))}
      </select>
    </div>
  );
};
