// import type { TableStylesProps } from '@stela-ui/css';
// import { tableStyles } from '@stela-ui/css';
import type { ReactNode, FC } from 'react';

import type { GenericComponentProps } from '../types';

export interface TableProps
  // TableStylesProps,
  extends GenericComponentProps {
  children: ReactNode | ReactNode[];
}

export const Table: FC<TableProps> = ({
  children,
  id,
  'data-testid': testId,
  ...rest
}) => {
  return (
    <div
      id={id}
      data-testid={testId}
      // css={tableStyles(rest)}
    >
      {children}
    </div>
  );
};
