import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Container } from './Container';

export default {
  component: Container,
  title: 'Layout/Container',
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 's', 'm', 'l', 'xl'],
      defaultValue: 'm',
    },
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Primary = Template.bind({});
Primary.args = { children: <h1>Welcome to Container</h1> };
