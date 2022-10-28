import { css as createStyleObject } from '@theme-ui/css';

import type { ComponentStyles } from '../../types/componentStyles';

export interface BasicInputStylesProps {
  hasError?: boolean;
}

// TODO: consider making this themeable after figuring out a good way to do so
export const basicInputStyles: ComponentStyles<BasicInputStylesProps> =
  ({ hasError }) =>
  (theme) =>
    [
      {
        display: 'inline-block',
        fontFamily: 'inherit',
        border: 'solid 2px',
        outline: 'none',
        width: '200px',
        maxWidth: '100%',
        '&::placeholder': {
          color: 'inherit',
        },
        '*': {
          fontFamily: 'inherit',
        },
      },
      createStyleObject({
        color: 'meteorite',
        bg: 'magnolia',
        py: 2,
        px: 2,
        borderColor: hasError ? 'error' : 'dullLavender',
        borderRadius: theme.borderRadius[0],
        '&:focus': {
          borderColor: hasError ? 'errorFocus' : 'meteorite',
          boxShadow: `0px 0px 2px ${theme.colors?.lapisBlue}`,
        },
      })(theme),
    ];

export interface InputLabelStylesProps {
  labelPosition?: 'top' | 'left';
}

export const inputLabelStyles: ComponentStyles<InputLabelStylesProps> =
  ({ labelPosition = 'top' }) =>
  (theme) =>
    [
      {
        fontWeight: 'bold',
        display: labelPosition === 'top' ? 'block' : 'inline-block',
      },
      createStyleObject({
        fontSize: 1,
        mb: labelPosition === 'top' ? 1 : 0,
        mr: labelPosition === 'top' ? 0 : 3,
      })(theme),
    ];
