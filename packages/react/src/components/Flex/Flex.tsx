import type { FlexStylesProps } from '@stela-ui/css';
import { flexStyles } from '@stela-ui/css';
import type { FC, ReactNode } from 'react';

import type { GenericComponentProps } from '../types';

export interface FlexProps extends FlexStylesProps, GenericComponentProps {
  children: ReactNode | ReactNode[];
}

export const Flex: FC<FlexProps> = ({
  children,
  id,
  className,
  'data-testid': testId,
  ...rest
}) => {
  return (
    <div
      css={flexStyles(rest)}
      id={id}
      className={className}
      data-testid={testId}
    >
      {children}
    </div>
  );
};
