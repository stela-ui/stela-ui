import type { ButtonStylesProps } from '@stela-ui/css';
import { buttonStyles } from '@stela-ui/css';
import type { ReactNode, FC } from 'react';

import type { GenericComponentProps } from '../types';

export interface ButtonProps extends ButtonStylesProps, GenericComponentProps {
  children: ReactNode | ReactNode[];
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<ButtonProps> = ({
  type = 'button',
  children,
  id,
  className,
  'data-testid': testId,
  onClick,
  ...rest
}) => {
  return (
    <button
      id={id}
      className={className}
      data-testid={testId}
      type={type}
      onClick={onClick}
      css={buttonStyles(rest)}
    >
      {children}
    </button>
  );
};
