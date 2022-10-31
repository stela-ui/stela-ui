import type { TableRowStylesProps } from '@stela-ui/css';
import { tableRowStyles } from '@stela-ui/css';
import type { ReactNode, FC } from 'react';

import type { GenericComponentProps } from '../types';

export interface TableRowProps
  extends GenericComponentProps,
    TableRowStylesProps {
  children: ReactNode | ReactNode[];
}

export const TableRow: FC<TableRowProps> = ({
  children,
  id,
  className,
  backgroundColor,
  'data-testid': testId,
}) => {
  return (
    <div
      id={id}
      className={className}
      data-testid={testId}
      css={tableRowStyles({ backgroundColor })}
    >
      {children}
    </div>
  );
};
