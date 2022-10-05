import { css } from '@emotion/react';
import { theme } from '@stela-ui/css';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Stack } from './Stack';

const spaces = theme.space.map((_, i) => i);

const StackConfig: ComponentMeta<typeof Stack> = {
  component: Stack,
  title: 'UI/Stack',
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
    justifyX: {
      defaultValue: {
        summary: 'flex-start',
      },
      options: ['flex-start', 'flex-end', 'stretch', 'center'],
      control: 'select',
    },
    justifyY: {
      defaultValue: {
        summary: 'flex-start',
      },
      options: ['flex-start', 'flex-end', 'stretch', 'center'],
      control: 'select',
    },
  },
};

export default StackConfig;

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

const Template: ComponentStory<typeof Stack> = (args) => (
  <div css={styles.outerBox}>
    <Stack {...args}>
      <span css={styles.innerBox} />
      <span css={styles.innerBox} />
      <span css={styles.innerBox} />
    </Stack>
  </div>
);

export const Column = Template.bind({});
Column.args = {
  gap: 3,
  flow: 'row',
  justifyX: 'stretch',
  justifyY: 'stretch',
};

export const Row = Template.bind({});
Row.args = {
  gap: 3,
  flow: 'row',
  justifyX: 'flex-start',
  justifyY: 'flex-start',
};

export const Responsive = Template.bind({});
Responsive.args = {
  gap: 3,
  flow: ['row', null, 'column'],
  justifyY: ['stretch', 'flex-start', null, 'stretch'],
  justifyX: ['stretch', 'flex-end', 'flex-start'],
};
