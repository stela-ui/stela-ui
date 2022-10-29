import type { ResponsiveStyleValue } from '@theme-ui/css';
import { css as createStyleObject } from '@theme-ui/css';

import type { ComponentStyles } from '../../types/componentStyles';
import type { ConverterFn, FlexAlignProps } from '../../utils';
import { convertResponsiveValue, flexJustifyConverter } from '../../utils';

export interface FlexStylesProps extends FlexAlignProps {
  rowGap?: ResponsiveStyleValue<number>;
  gap?: ResponsiveStyleValue<number>;
  columnGap?: ResponsiveStyleValue<number>;
  wrap?: ResponsiveStyleValue<boolean>;
}

const flexWrapConverter: ConverterFn<
  ResponsiveStyleValue<boolean>,
  'wrap' | 'nowrap'
> = (value) =>
  (value === true && 'wrap') || (value === false && 'nowrap') || null;

export const flexStyles: ComponentStyles<FlexStylesProps> =
  ({
    flow = 'column',
    alignX = 'flex-start',
    alignY = 'flex-start',
    wrap,
    ...rest
  }) =>
  (theme) =>
    [
      { display: 'flex' },
      createStyleObject({
        ...rest,
        flexWrap: convertResponsiveValue(wrap, flexWrapConverter),
        ...flexJustifyConverter({ flow, alignY, alignX }),
      })(theme),
    ];
