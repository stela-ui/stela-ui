import type { ResponsiveStyleValue } from '@theme-ui/css';
import { css as createStyleObject } from '@theme-ui/css';

import type { ComponentStyles } from '../../types/componentStyles';

export interface SpacingStylesProps {
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

export const spacingStyles: ComponentStyles<SpacingStylesProps> =
  (props) => (theme) =>
    [{ boxSizing: 'border-box' }, createStyleObject({ ...props })(theme)];
