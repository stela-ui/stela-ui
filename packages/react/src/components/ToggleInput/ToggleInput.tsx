// import type { ToggleInputStylesProps } from '@stela-ui/css';
// import { toggleInputStyles } from '@stela-ui/css';
import type { FC } from 'react';

import type { GenericComponentProps } from '../types';

export interface ToggleInputProps
  // ToggleInputStylesProps,
  extends GenericComponentProps {
  label?: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void | unknown;
}

export const ToggleInput: FC<ToggleInputProps> = ({
  id,
  'data-testid': testId,
  onChange,
  defaultChecked,
  ...rest
}) => {
  return (
    <input
      type="checkbox"
      id={id}
      data-testid={testId}
      defaultChecked={defaultChecked}
      onChange={
        onChange
          ? (e) => {
              onChange(e.currentTarget.checked);
            }
          : undefined
      }
      // css={toggleInputStyles(rest)}
    />
  );
};
