import type { ResponsiveStyleValue } from '@theme-ui/css';
import { css as createStyleObject } from '@theme-ui/css';

import type { ComponentStyles } from '../../types/componentStyles';

export interface SharedSpacingStylesProps {
  [key: string | number | symbol]: unknown;
  mt?: ResponsiveStyleValue<number>;
  px?: ResponsiveStyleValue<number>;
  pr?: ResponsiveStyleValue<number>;
  pl?: ResponsiveStyleValue<number>;
}

export const sharedSpacingStyles: ComponentStyles<SharedSpacingStylesProps> =
  ({ mt, px, pr, pl }) =>
  (theme) =>
    [{ boxSizing: 'border-box' }, createStyleObject({ mt, px, pr, pl })(theme)];
