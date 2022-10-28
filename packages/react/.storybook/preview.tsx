import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import React from 'react';
import { ThemeProvider } from 'theme-ui';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { theme } from '../../css/src';
import { GlobalStyles } from '../src';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const emotionCache = createCache({
  key: 'x',
  stylisPlugins: [],
});

export const decorators = [
  (Story) => (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    </CacheProvider>
  ),
];
