import { render } from '@testing-library/react';

import { Spacing } from './Spacing';

describe('Spacing', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Spacing />);
    expect(baseElement).toBeTruthy();
  });
});
