import type { ResponsiveStyleValue } from '@theme-ui/css';
import { css as createStyleObject } from '@theme-ui/css';

import type { ComponentStyles } from '../types/componentStyles';
import { convertResponsiveValue } from '../utils';

export interface SpacingStylesTypes {
  m?: ResponsiveStyleValue<number>;
  my?: ResponsiveStyleValue<number>;
  mx?: ResponsiveStyleValue<number>;
  mt?: ResponsiveStyleValue<number>;
  mr?: ResponsiveStyleValue<number>;
  mb?: ResponsiveStyleValue<number>;
  ml?: ResponsiveStyleValue<number>;
  p?: ResponsiveStyleValue<number>;
  py?: ResponsiveStyleValue<number>;
  px?: ResponsiveStyleValue<number>;
  pt?: ResponsiveStyleValue<number>;
  pr?: ResponsiveStyleValue<number>;
  pb?: ResponsiveStyleValue<number>;
  pl?: ResponsiveStyleValue<number>;
}

export interface SpacingStylesStretchTypes {
  inline?: ResponsiveStyleValue<boolean>;
  stretchY?: ResponsiveStyleValue<boolean>;
}

export interface SpacingStylesProps
  extends SpacingStylesTypes,
    SpacingStylesStretchTypes {}

export const spacingStyles: ComponentStyles<SpacingStylesProps> = (
  { stretchY, inline, ...rest },
  theme
) => ({
  static: { boxSizing: 'border-box' },
  dynamic: createStyleObject({
    ...(stretchY && {
      height: convertResponsiveValue(stretchY, (value) => value && '100%'),
    }),
    ...(inline && {
      display: convertResponsiveValue(
        inline,
        (value, index) => (value && 'inline-block') || (index === 0 && 'block')
      ),
    }),
    ...rest,
  })(theme),
});
