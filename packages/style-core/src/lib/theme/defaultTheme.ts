import { defaultBreakpoints } from './defaultBreakpoints';
import type { DefaultBreakpoints } from './defaultBreakpoints';

export interface DefaultTheme {
  breakpoints: DefaultBreakpoints;
}

export const defaultTheme: DefaultTheme = { breakpoints: defaultBreakpoints };
