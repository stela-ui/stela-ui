import baseTheme from '@theme-ui/preset-base';

export const colors = {
  // ...baseTheme.colors,
  white: '#fff',
  error: '#ff0064',
  errorFocus: '#b00849',
  purplishRed: '#b00849',
  warmPink: '#f64c71',
  lapisBlue: '#242482',
  mulledWine: '#563d67',
  mountbattenPink: '#99728d',
  sapphire: '#2f2fa1',
  romance: '#6faa32',
  melrose: '#bdbdf4',
  dullLavender: '#9f9fe6',
  meteorite: '#3c256c',
  magnolia: '#f5f5ff',
  pastelGrey: '#ccc',
  japaneseLaurel: '#076307',
  alabaster: '#fcfaff',
  feta: '#effce2',
};

const scales = new Array(30)
  .fill(null)
  .map((_, index) => `${(index + 1) * 4}px`);

export const theme = {
  ...baseTheme,
  colors,
  styles: {
    ...baseTheme.styles,
  },
  scales,
  fontSizes: [
    '1rem',
    '1.2rem',
    '1.4rem',
    '1.8rem',
    '2.2rem',
    '2.6rem',
    '3rem',
    '3.6rem',
  ],
  borderRadius: ['4px', '6px', '8px', '10px'],
  button: {
    borderRadius: '5px',
    px: `.9em`,
    py: `.35em`,
    fontWeight: 'bold',
    fontFamily: 'sans-serif, Arial, Helvetica',
    sizes: {
      s: '14px',
      m: '18px',
      l: '24px',
    },
    variants: {
      primary: {
        background: colors.warmPink,
        color: colors.white,
        '&:focus': {
          borderColor: colors.purplishRed,
        },
      },
      secondary: {
        background: colors.sapphire,
        color: colors.white,
        '&:focus': {
          borderColor: colors.lapisBlue,
        },
      },
      active: {
        background: colors.romance,
        color: colors.white,
        '&:focus': {
          borderColor: colors.japaneseLaurel,
        },
      },
    },
  },
};

export type Theme = typeof theme;
