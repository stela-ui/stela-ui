// import type { TextInputStylesProps } from '@stela-ui/css';
// import { textInputStyles } from '@stela-ui/css';
import type { FC } from 'react';

import type { GenericComponentProps } from '../types';

export interface TextInputProps
  // TextInputStylesProps,
  extends GenericComponentProps {
  type: 'text' | 'number';
  name?: string;
  defaultValue?: string | number;
  onChange?: (value: string | number) => void | unknown;
}

export const TextInput: FC<TextInputProps> = ({
  type = 'text',
  onChange,
  ...rest
}) => {
  return (
    <input
      {...rest}
      // css={textInputStyles(rest)}
      type={type}
      onChange={
        onChange
          ? (e) => {
              onChange(e.currentTarget.value);
            }
          : undefined
      }
    />
  );
};
