// TODO: consider having these helpers work without specifying a specific root font size
import type { Theme } from '../theme';

export const from = <T extends Theme>(
  breakpoint: keyof T['breakpoints'],
  { breakpoints }: T
) =>
  `@media (min-width: ${
    breakpoints[breakpoint as keyof typeof breakpoints] / 16
  }rem)`;

export const until = <T extends Theme>(
  breakpoint: keyof T['breakpoints'],
  { breakpoints }: T
) =>
  `@media (max-width: ${
    (breakpoints[breakpoint as keyof typeof breakpoints] - 1) / 16
  }rem)`;

export const between = <
  T extends Theme,
  FromKey extends keyof T['breakpoints']
>(
  breakpointFrom: FromKey,
  breakpointUntil: Exclude<keyof T['breakpoints'], FromKey>,
  theme: T
) => `${from(breakpointFrom, theme)} and ${until(breakpointUntil, theme)}`;
