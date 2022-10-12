// import type { ButtonStylesProps } from '@stela-ui/css';
// import { buttonStyles } from '@stela-ui/css';
import type { ReactNode, FC } from 'react';

import type { GenericComponentProps } from '../types';

export interface ButtonProps
  // ButtonStylesProps,
  extends GenericComponentProps {
  children: ReactNode | ReactNode[];
}

export const Button: FC<ButtonProps> = ({
  children,
  id,
  'data-testid': testId,
  ...rest
}) => {
  return (
    <div
      id={id}
      data-testid={testId}
      // css={buttonStyles(rest)}
    >
      {children}
    </div>
  );
};
