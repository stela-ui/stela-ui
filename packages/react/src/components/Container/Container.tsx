import type {
  ContainerStylesProps,
  SharedSpacingStylesProps,
} from '@stela-ui/css';
import { containerStyles, sharedSpacingStyles } from '@stela-ui/css';

import type { GenericComponentProps } from '../types';

export interface ContainerProps
  extends GenericComponentProps,
    ContainerStylesProps,
    SharedSpacingStylesProps {
  children: React.ReactNode | React.ReactNode[];
}

export const Container = ({
  children,
  id,
  className,
  'data-testid': testId,
  size,
  ...rest
}: ContainerProps) => {
  return (
    <div
      id={id}
      data-testid={testId}
      className={className}
      css={[sharedSpacingStyles(rest), containerStyles({ size })]}
    >
      {children}
    </div>
  );
};

export default Container;
