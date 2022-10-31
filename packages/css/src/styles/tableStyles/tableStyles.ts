import type { ResponsiveStyleValue } from '@theme-ui/css';
import { css as createStyleObject } from '@theme-ui/css';

import type { Theme } from '../../theme';
import type { ComponentStyles } from '../../types/componentStyles';
import { convertResponsiveValue } from '../../utils';

export interface TableStylesProps {
  columns: ResponsiveStyleValue<number>;
  backgroundColorOdd?: keyof Theme['colors'];
  backgroundColorEven?: keyof Theme['colors'];
}

// TODO: think about better way to style the expansion panel
export const tableStyles: ComponentStyles<TableStylesProps> =
  ({ columns, backgroundColorOdd, backgroundColorEven }) =>
  (theme) =>
    [
      {
        display: 'grid',
        ...(backgroundColorOdd
          ? {
              '> *:nth-child(odd) > *, > *:nth-child(odd) summary, > *:nth-child(odd) details > div':
                {
                  background: theme.colors[backgroundColorOdd],
                },
            }
          : {}),
        ...(backgroundColorEven
          ? {
              '> *:nth-child(even) > *, > *:nth-child(even) summary, > *:nth-child(even) details > div':
                {
                  background: theme.colors[backgroundColorEven],
                },
            }
          : {}),
      },
      createStyleObject({
        gridTemplateColumns: convertResponsiveValue(
          columns,
          (currColumns) => `repeat(${currColumns}, 1fr)`
        ),
      })(theme),
    ];

export interface TableRowStylesProps {
  backgroundColor?: keyof Theme['colors'];
}

export const tableRowStyles: ComponentStyles<TableRowStylesProps> =
  ({ backgroundColor }) =>
  (theme) =>
    [
      { display: 'contents' },
      createStyleObject(
        backgroundColor && {
          // TODO: fix me; important is bad practice
          '> *': { bg: `${theme.colors[backgroundColor]} !important` },
        }
      )(theme),
    ];

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
