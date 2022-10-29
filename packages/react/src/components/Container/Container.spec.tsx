import { render } from '@testing-library/react';

import Container from './Container';

describe('Container', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Container>child</Container>);
    expect(baseElement).toBeTruthy();
  });
});
