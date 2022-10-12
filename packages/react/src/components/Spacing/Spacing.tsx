import type { SpacingStylesProps } from '@stela-ui/css';
import { spacingStyles } from '@stela-ui/css';
import type { ReactNode, FC } from 'react';

import type { GenericComponentProps } from '../types';

export interface SpacingProps
  extends SpacingStylesProps,
    GenericComponentProps {
  children?: ReactNode | ReactNode[];
}

export const Spacing: FC<SpacingProps> = ({
  children,
  id,
  className,
  'data-testid': testId,
  ...rest
}) => {
  return (
    <div
      id={id}
      className={className}
      data-testid={testId}
      css={spacingStyles(rest)}
    >
      {children}
    </div>
  );
};
