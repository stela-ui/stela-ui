import { css } from '@emotion/react';
import { theme } from '@stela-ui/css';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Flex } from './Flex';

const spaces = theme.space.map((_, i) => i);

const FlexConfig: ComponentMeta<typeof Flex> = {
  component: Flex,
  title: 'Layout/Flex',
  argTypes: {
    gap: { options: spaces, control: 'select' },
    flow: {
      defaultValue: {
        summary: 'column',
      },
      options: ['column', 'row'],
      control: { type: 'select', defaultValue: 'column' },
    },
    columnGap: { options: spaces, control: 'select' },
    rowGap: { options: spaces, control: 'select' },
    wrap: { control: 'boolean' },
    alignX: {
      defaultValue: {
        summary: 'flex-start',
      },
      options: ['flex-start', 'flex-end', 'stretch', 'center'],
      control: 'select',
    },
    alignY: {
      defaultValue: {
        summary: 'flex-start',
      },
      options: ['flex-start', 'flex-end', 'stretch', 'center'],
      control: 'select',
    },
  },
};

export default FlexConfig;

const styles = {
  outerBox: css`
    > * {
      height: 100vh;
      background: lightgreen;
    }
  `,
  innerBox: css`
    background: blue;
    min-width: 20px;
    min-height: 40px;
  `,
};

const Template: ComponentStory<typeof Flex> = (args) => (
  <div css={styles.outerBox}>
    <Flex {...args}>
      <span css={styles.innerBox} />
      <span css={styles.innerBox} />
      <span css={styles.innerBox} />
    </Flex>
  </div>
);

export const Column = Template.bind({});
Column.args = {
  gap: 3,
  flow: 'row',
  alignX: 'stretch',
  alignY: 'stretch',
};

export const Row = Template.bind({});
Row.args = {
  gap: 3,
  flow: 'row',
  alignX: 'flex-start',
  alignY: 'flex-start',
};

export const Responsive = Template.bind({});
Responsive.args = {
  gap: 3,
  flow: ['row', null, 'column'],
  alignY: ['stretch', 'flex-start', null, 'stretch'],
  alignX: ['stretch', 'flex-end', 'flex-start'],
};
