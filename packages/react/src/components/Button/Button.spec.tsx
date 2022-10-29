import { render } from '../../utils/test';
import { Button } from './Button';

// TODO: add test helpers which render with theme provider
describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button>button-text</Button>);
    expect(baseElement).toBeTruthy();
  });
});
