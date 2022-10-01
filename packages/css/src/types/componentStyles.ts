import type { ThemeUIStyleObject, Theme } from '@theme-ui/css';

export type ComponentStyles<P, T extends Theme = Theme> = (
  props: P,
  theme: T
) => {
  static: ThemeUIStyleObject;
  dynamic: ThemeUIStyleObject;
};
