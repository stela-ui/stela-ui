import type { TableCellStylesProps } from '@stela-ui/css';
import { tableCellStyles } from '@stela-ui/css';
import type { ReactNode, FC } from 'react';

import type { GenericComponentProps } from '../types';

export interface TableCellProps
  extends TableCellStylesProps,
    GenericComponentProps {
  children: ReactNode | ReactNode[];
}

export const TableCell: FC<TableCellProps> = ({
  children,
  id,
  'data-testid': testId,
  ...rest
}) => {
  return (
    <div id={id} data-testid={testId} css={tableCellStyles(rest)}>
      {children}
    </div>
  );
};
