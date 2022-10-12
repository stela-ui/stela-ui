import { tableRowStyles } from '@stela-ui/css';
import type { ReactNode, FC } from 'react';

import type { GenericComponentProps } from '../types';

export interface TableRowProps extends GenericComponentProps {
  children: ReactNode | ReactNode[];
}

export const TableRow: FC<TableRowProps> = ({
  children,
  id,
  'data-testid': testId,
}) => {
  return (
    <div id={id} data-testid={testId} css={tableRowStyles}>
      {children}
    </div>
  );
};
