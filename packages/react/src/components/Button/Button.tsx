import type { ButtonStylesProps } from '@stela-ui/css';
import { buttonStyles } from '@stela-ui/css';
import type { ReactNode, FC } from 'react';

import type { GenericComponentProps } from '../types';

export interface ButtonProps<As extends 'button' | 'span' = 'button' | 'span'>
  extends ButtonStylesProps,
    GenericComponentProps {
  children: ReactNode | ReactNode[];
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<
    As extends 'button' ? HTMLButtonElement : HTMLSpanElement
  >;
  as?: As;
}

export const Button: FC<ButtonProps> = ({
  children,
  id,
  className,
  onClick,
  'data-testid': testId,
  type = 'button',
  as = 'button',
  ...rest
}) => {
  const Element = as;
  const buttonProps = {
    type,
  };
  return (
    <Element
      id={id}
      className={className}
      data-testid={testId}
      onClick={onClick}
      css={buttonStyles(rest)}
      {...(as === 'button' ? buttonProps : {})}
    >
      {children}
    </Element>
  );
};
