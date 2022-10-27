import type { Theme as StelaTheme } from '@stela-ui/css';
import '@emotion/react';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends StelaTheme {}
}
