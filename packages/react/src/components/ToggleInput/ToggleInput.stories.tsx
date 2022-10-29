import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToggleInput } from './ToggleInput';

const Story: ComponentMeta<typeof ToggleInput> = {
  component: ToggleInput,
  title: 'Input/ToggleInput',
  argTypes: {
    size: { control: 'select', options: ['s', 'm', 'l'], defaultValue: 'm' },
  },
};
export default Story;

const Template: ComponentStory<typeof ToggleInput> = (args) => (
  <ToggleInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = { label: 'Example toggle input' };
