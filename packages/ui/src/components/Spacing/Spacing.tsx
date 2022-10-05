import type { SpacingStylesProps } from '@stela-ui/css';
import { spacingStyles } from '@stela-ui/css';
import type { PropsWithChildren, FC } from 'react';

export type SpacingProps = PropsWithChildren<SpacingStylesProps>;

export const Spacing: FC<SpacingProps> = ({ children, ...rest }) => {
  return <div css={spacingStyles(rest)}>{children}</div>;
};
