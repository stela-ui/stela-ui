import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { ExpansionPanel } from './ExpansionPanel';
import { ExpansionPanelContextProvider } from './ExpansionPanelContext';

const Story: ComponentMeta<typeof ExpansionPanel> = {
  component: ExpansionPanel,
  title: 'General/ExpansionPanel',
};
export default Story;

const Template: ComponentStory<typeof ExpansionPanel> = (args) => (
  <>
    <ExpansionPanel {...args} title={`Unmanaged: ${args.title}`}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
      provident dolores in eligendi rerum, deserunt explicabo quidem! Nostrum
      totam mollitia ipsam consectetur quibusdam eligendi architecto minus.
      Quasi quos laboriosam aliquam!
    </ExpansionPanel>
    <ExpansionPanelContextProvider>
      <ExpansionPanel {...args} contextId="1" title={`Managed: ${args.title}`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
        provident dolores in eligendi rerum, deserunt explicabo quidem! Nostrum
        totam mollitia ipsam consectetur quibusdam eligendi architecto minus.
        Quasi quos laboriosam aliquam!
      </ExpansionPanel>
      <ExpansionPanel {...args} contextId="2" title={`Managed: ${args.title}`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
        provident dolores in eligendi rerum, deserunt explicabo quidem! Nostrum
        totam mollitia ipsam consectetur quibusdam eligendi architecto minus.
        Quasi quos laboriosam aliquam!
      </ExpansionPanel>
    </ExpansionPanelContextProvider>
  </>
);

export const Primary = Template.bind({});
Primary.args = { title: 'Click here to expand the panel' };
