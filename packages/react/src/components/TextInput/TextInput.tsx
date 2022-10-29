import type {
  BasicInputStylesProps,
  InputLabelStylesProps,
} from '@stela-ui/css';
import { basicInputStyles, inputLabelStyles } from '@stela-ui/css';
import type { FC } from 'react';

import type { GenericComponentProps } from '../types';

export interface TextInputProps
  extends GenericComponentProps,
    BasicInputStylesProps,
    InputLabelStylesProps {
  type?: 'text' | 'number';
  name?: string;
  label?: string;
  defaultValue?: string | number;
  placeholder?: string;
  onChange?: (value: string | number) => void | unknown;
}

export const TextInput: FC<TextInputProps> = ({
  id,
  className,
  'data-testid': testId,
  type = 'text',
  onChange,
  defaultValue,
  name,
  label,
  labelPosition,
  placeholder,
  hasError,
}) => {
  return (
    <div className={className}>
      <span css={inputLabelStyles({ labelPosition })}>{label}</span>
      <input
        css={basicInputStyles({ hasError })}
        id={id}
        data-testid={testId}
        type={type}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={
          onChange
            ? (e) => {
                onChange(e.currentTarget.value);
              }
            : undefined
        }
      />
    </div>
  );
};
