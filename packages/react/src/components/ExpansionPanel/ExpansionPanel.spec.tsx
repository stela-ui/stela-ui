import { render } from '../../utils/test';
import { ExpansionPanel } from './ExpansionPanel';

describe('ExpansionPanel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ExpansionPanel title="expansion-panel-title">
        expansion-panel-content
      </ExpansionPanel>
    );
    expect(baseElement).toBeTruthy();
  });
});
