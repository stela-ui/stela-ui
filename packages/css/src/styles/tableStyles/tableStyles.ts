import type { ResponsiveStyleValue } from '@theme-ui/css';
import { css as createStyleObject } from '@theme-ui/css';

import type { ComponentStyles } from '../../types/componentStyles';
import { convertResponsiveValue } from '../../utils';

export interface TableStylesProps {
  columns: ResponsiveStyleValue<number>;
}

export const tableStyles: ComponentStyles<TableStylesProps> =
  ({ columns }) =>
  (theme) =>
    [
      { display: 'grid' },
      createStyleObject({
        gridTemplateColumns: convertResponsiveValue(
          columns,
          (currColumns) => `repeat(${currColumns}, 1fr)`
        ),
      })(theme),
    ];

export const tableRowStyles: ComponentStyles = { display: 'contents' };

export interface TableCellStylesProps {
  columnStart?: ResponsiveStyleValue<number>;
  columnEnd?: ResponsiveStyleValue<number>;
  column?: ResponsiveStyleValue<number>;
  row?: ResponsiveStyleValue<number>;
}

export const tableCellStyles: ComponentStyles<TableCellStylesProps> =
  ({ columnStart, columnEnd, column, row }) =>
  (theme) =>
    createStyleObject({
      gridColumnStart: columnStart,
      gridColumnEnd: columnEnd,
      gridColumn: column,
      gridRow: row,
    })(theme);
