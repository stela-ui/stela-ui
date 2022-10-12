import { css } from '@emotion/react';
import { theme } from '@stela-ui/css';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Spacing } from './Spacing';

const spaces = theme.space.map((_, i) => i);

const SpacingConfig: ComponentMeta<typeof Spacing> = {
  title: 'Layout/Spacing',
  component: Spacing,
  argTypes: {
    m: { options: spaces, control: 'select' },
    my: { options: spaces, control: 'select' },
    mx: { options: spaces, control: 'select' },
    mt: { options: spaces, control: 'select' },
    mr: { options: spaces, control: 'select' },
    mb: { options: spaces, control: 'select' },
    ml: { options: spaces, control: 'select' },
    p: { options: spaces, control: 'select' },
    py: { options: spaces, control: 'select' },
    px: { options: spaces, control: 'select' },
    pt: { options: spaces, control: 'select' },
    pr: { options: spaces, control: 'select' },
    pb: { options: spaces, control: 'select' },
    pl: { options: spaces, control: 'select' },
  },
};

export default SpacingConfig;

const styles = {
  outerBox: css`
    overflow: hidden;
    background: orange;
    > * {
      background: lightgreen;
    }
  `,
  innerBox: css`
    background: blue;
    width: 40px;
    height: 40px;
  `,
};

const Template: ComponentStory<typeof Spacing> = (args) => (
  <div css={styles.outerBox}>
    <Spacing {...args}>
      <div css={styles.innerBox} />
    </Spacing>
    <Spacing {...args}>
      <div css={styles.innerBox} />
    </Spacing>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  p: 2,
  m: 3,
};
