import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextInput } from './TextInput';

const Story: ComponentMeta<typeof TextInput> = {
  component: TextInput,
  title: 'Input/TextInput',
  argTypes: {
    labelPosition: {
      options: ['top', 'left'],
      control: 'select',
      defaultValue: 'top',
    },
    hasError: {
      type: 'boolean',
      defaultValue: false,
    },
  },
};
export default Story;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Normal text input:',
  placeholder: 'placeholder example',
};
