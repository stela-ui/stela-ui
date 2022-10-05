import type { CSSObject, Theme } from '@theme-ui/css';

export type ComponentStyles<P, T extends Theme = Theme> = (
  props: P
) => (theme: T) => CSSObject[] | CSSObject;
