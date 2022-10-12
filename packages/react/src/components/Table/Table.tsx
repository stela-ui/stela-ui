import type { TableStylesProps } from '@stela-ui/css';
import { tableStyles } from '@stela-ui/css';
import type { ResponsiveStyleValue } from '@theme-ui/css';
import type { ReactNode, FC } from 'react';

import type { GenericComponentProps } from '../types';

export interface TableProps extends TableStylesProps, GenericComponentProps {
  children: ReactNode | ReactNode[];
  columns: ResponsiveStyleValue<number>;
}

export const Table: FC<TableProps> = ({
  children,
  id,
  'data-testid': testId,
  columns,
  ...rest
}) => {
  return (
    <div id={id} data-testid={testId} css={tableStyles({ columns })}>
      {children}
    </div>
  );
};
