import type { CSSObject, Theme } from '@theme-ui/css';

export type StyleThemeFunction<T extends Theme = Theme> = (
  theme: T
) => CSSObject[] | CSSObject;

export type ComponentStylesFn<P, T extends Theme = Theme> = (
  props: P
) => CSSObject[] | CSSObject | StyleThemeFunction<T>;

export type ComponentStyles<
  P extends unknown | undefined = undefined,
  T extends Theme = Theme
> = P extends undefined ? CSSObject[] | CSSObject : ComponentStylesFn<P, T>;
