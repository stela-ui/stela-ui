// import type { ToggleInputStylesProps } from '@stela-ui/css';
// import { toggleInputStyles } from '@stela-ui/css';
import type { ReactNode, FC } from 'react';

import type { GenericComponentProps } from '../types';

export interface ToggleInputProps
  // ToggleInputStylesProps,
  extends GenericComponentProps {
  children: ReactNode | ReactNode[];
}

export const ToggleInput: FC<ToggleInputProps> = ({
  children,
  id,
  'data-testid': testId,
  ...rest
}) => {
  return (
    <div
      id={id}
      data-testid={testId}
      // css={toggleInputStyles(rest)}
    >
      {children}
    </div>
  );
};
