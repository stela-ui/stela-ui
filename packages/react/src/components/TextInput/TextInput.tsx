// import type { TextInputStylesProps } from '@stela-ui/css';
// import { textInputStyles } from '@stela-ui/css';
import type { FC } from 'react';

import type { GenericComponentProps } from '../types';

export interface TextInputProps
  // TextInputStylesProps,
  extends GenericComponentProps {
  type?: 'text' | 'number';
  name?: string;
  label?: string;
  defaultValue?: string | number;
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
  ...rest
}) => {
  return (
    <div className={className}>
      <span>{label}</span>
      <input
        // css={textInputStyles(rest)}
        id={id}
        data-testid={testId}
        type={type}
        name={name}
        defaultValue={defaultValue}
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
