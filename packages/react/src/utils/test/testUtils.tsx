import { ThemeProvider } from '@emotion/react';
import { theme } from '@stela-ui/css';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import type { FC, ReactElement } from 'react';

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
