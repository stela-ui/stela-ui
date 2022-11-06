import type {
  BasicInputStylesProps,
  InputLabelStylesProps,
} from '@stela-ui/css';
import { basicInputStyles, inputLabelStyles } from '@stela-ui/css';
import type { FC } from 'react';

import type { GenericComponentProps } from '../types';

export interface SelectInputProps
  extends BasicInputStylesProps,
    InputLabelStylesProps,
    GenericComponentProps {
  label?: string;
  defaultValue?: string | number;
  value?: string | number;
  name?: string;
  onChange?: (checked: string | number) => void | unknown;
  options: { value: string | number; text?: string | number }[];
}

export const SelectInput: FC<SelectInputProps> = ({
  id,
  className,
  'data-testid': testId,
  onChange,
  defaultValue,
  value,
  options,
  name,
  label,
  labelPosition,
  hasError,
}) => {
  return (
    <div className={className}>
      <span css={inputLabelStyles({ labelPosition })}>{label}</span>
      <select
        id={id}
        data-testid={testId}
        name={name}
        defaultValue={defaultValue}
        value={value}
        onChange={
          onChange
            ? (e) => {
                onChange(e.currentTarget.value);
              }
            : undefined
        }
        css={basicInputStyles({ hasError })}
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
