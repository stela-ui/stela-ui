import { theme } from '@stela-ui/css';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

const Story: ComponentMeta<typeof Button> = {
  component: Button,
  title: 'Input/Button',
  argTypes: {
    variant: {
      options: Object.keys(theme.button.variants),
      control: 'select',
      defaultValue: 'primary',
    },
    size: {
      options: Object.keys(theme.button.sizes),
      control: 'select',
      defaultValue: 'm',
    },
  },
};
export default Story;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: 'Button' };
