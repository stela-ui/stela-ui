import baseTheme from '@theme-ui/preset-base';

export const colors = {
  ...baseTheme.colors,
  white: '#fff',
  warmPink: '#f64c71',
  lapisBlue: '#242482',
  mulledWine: '#563d67',
  mountbattenPink: '#99728d',
  sapphire: '#2f2fa1',
  romance: '#6faa32',
};

// TODO: try get scales/sizes to work

export const theme = {
  ...baseTheme,
  colors,
  styles: {
    ...baseTheme.styles,
  },
  button: {
    borderRadius: '5px',
    px: `1.1em`,
    py: `.5em`,
    fontWeight: 'bold',
    sizes: {
      s: '14px',
      m: '18px',
      l: '24px',
    },
    variants: {
      primary: {
        background: colors.warmPink,
        color: colors.white,
      },
      secondary: {
        background: colors.sapphire,
        color: colors.white,
      },
      active: {
        background: colors.romance,
        color: colors.white,
      },
    },
  },
};

export type Theme = typeof theme;
