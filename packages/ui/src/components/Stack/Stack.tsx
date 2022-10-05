import type { StackStylesProps } from '@stela-ui/css';
import { stackStyles } from '@stela-ui/css';
import type { PropsWithChildren, FC } from 'react';

export type StackProps = PropsWithChildren<StackStylesProps>;

export const Stack: FC<StackProps> = ({ children, ...rest }) => {
  return <div css={stackStyles(rest)}>{children}</div>;
};
