import type { StackStylesProps } from '@stela-ui/css';
import { stackStyles } from '@stela-ui/css';
import type { FC, ReactNode } from 'react';

import type { GenericComponentProps } from '../types';

export interface StackProps extends StackStylesProps, GenericComponentProps {
  children: ReactNode | ReactNode[];
}

export const Stack: FC<StackProps> = ({
  children,
  id,
  'data-testid': testId,
  ...rest
}) => {
  return (
    <div css={stackStyles(rest)} id={id} data-testid={testId}>
      {children}
    </div>
  );
};
