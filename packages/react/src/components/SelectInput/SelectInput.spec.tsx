import { render } from '../../utils/test';
import { SelectInput } from './SelectInput';

describe('SelectInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SelectInput
        options={[{ value: 'test' }, { value: 'test2', text: 'text-value' }]}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
