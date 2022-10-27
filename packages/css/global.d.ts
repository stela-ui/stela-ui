import type { Theme as StelaTheme } from './src';

import '@emotion/react';
import '@theme-ui/css';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends StelaTheme {}
}

declare module '@theme-ui/css' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends StelaTheme {}
}
