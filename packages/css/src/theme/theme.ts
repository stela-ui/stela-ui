import baseTheme from '@theme-ui/preset-base';

export const colors = {
  ...baseTheme.colors,
  white: '#fff',
  warmPink: '#f64c71',
  lapisBlue: '#242482',
  mulledWine: '#563d67',
  mountbattenPink: '#99728d',
  sapphire: '#2f2fa1',
};

const space = new Array(10).fill(null).map((_, index) => index * 8);

export const theme = {
  ...baseTheme,
  colors,
  styles: {
    ...baseTheme.styles,
    space: space,
  },
  space: space,
  button: {
    borderRadius: '5px',
    px: 10,
    sizes: {
      s: '20px',
      m: '40px',
      l: '60px',
    },
    variants: {
      primary: {
        background: colors.warmPink,
        color: colors.white,
      },
    },
  },
};

export type Theme = typeof theme;
