import { defaultTheme } from '../theme';
import { from, until, between } from './mediaQueries';

describe('lib -> mediaQueries', () => {
  it('returns proper value when calling from', () => {
    expect(from('mobile', defaultTheme)).toBe('@media (min-width: 22.4375rem)');
    expect(from('desktop', defaultTheme)).toBe(
      '@media (min-width: 99.9375rem)'
    );
  });
  it('returns proper value when calling until', () => {
    expect(until('mobile', defaultTheme)).toBe('@media (max-width: 22.375rem)');
    expect(until('desktop', defaultTheme)).toBe(
      '@media (max-width: 99.875rem)'
    );
  });
  it('returns proper value when calling between', () => {
    expect(between('mobile', 'laptop', defaultTheme)).toBe(
      '@media (min-width: 22.4375rem) and @media (max-width: 81.1875rem)'
    );
    expect(between('mobile', 'desktop', defaultTheme)).toBe(
      '@media (min-width: 22.4375rem) and @media (max-width: 99.875rem)'
    );
  });
});
