import { render } from '@testing-library/react';

import { Stack } from './Stack';

describe('Stack', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Stack>child</Stack>);
    expect(baseElement).toBeTruthy();
  });
});
