import { render } from '../../utils/test';
import { TextInput } from './TextInput';

describe('TextInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TextInput />);
    expect(baseElement).toBeTruthy();
  });
});
