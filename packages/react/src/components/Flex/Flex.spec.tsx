import { render } from '../../utils/test';
import { Flex } from './Flex';

describe('Flex', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Flex>child</Flex>);
    expect(baseElement).toBeTruthy();
  });
});
