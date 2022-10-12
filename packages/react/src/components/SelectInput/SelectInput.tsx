// import type { SelectInputStylesProps } from '@stela-ui/css';
// import { selectInputStyles } from '@stela-ui/css';
import type { ReactNode, FC } from 'react';

import type { GenericComponentProps } from '../types';

export interface SelectInputProps
  // SelectInputStylesProps,
  extends GenericComponentProps {
  children: ReactNode | ReactNode[];
}

export const SelectInput: FC<SelectInputProps> = ({
  children,
  id,
  'data-testid': testId,
  ...rest
}) => {
  return (
    <div
      id={id}
      data-testid={testId}
      // css={selectInputStyles(rest)}
    >
      {children}
    </div>
  );
};
