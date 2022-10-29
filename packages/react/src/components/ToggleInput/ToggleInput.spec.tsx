import { render } from '../../utils/test';
import { ToggleInput } from './ToggleInput';

describe('ToggleInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ToggleInput />);
    expect(baseElement).toBeTruthy();
  });
});
