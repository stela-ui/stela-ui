import type { ComponentStyles } from '../../types/componentStyles';

export interface ToggleInputStylesProps {
  size?: 's' | 'm' | 'l';
}

const sizeMap = {
  s: '8px',
  m: '10px',
  l: '14px',
};

// TODO: consider making this themeable after figuring out a good way to do so
export const toggleInputStyles: ComponentStyles<ToggleInputStylesProps> =
  ({ size = 'm' }) =>
  (theme) => ({
    position: 'relative',
    display: 'inline-block',
    fontSize: sizeMap[size],
    width: '4.2em',
    height: '2.2em',
    input: {
      position: 'absolute',
      opacity: '0',
      width: '100%',
      height: '100%',
      margin: '0',
      zIndex: '1',
    },
    'input:checked + span': {
      backgroundColor: theme.colors.dullLavender,
    },
    'input:checked + span:before': {
      transform: 'translateX(2em)',
    },
    'input:focus + span': {
      boxShadow: `0px 0px 2px 2px ${theme.colors.lapisBlue}`,
      outline: `solid 2px ${theme.colors.meteorite}`,
    },
    span: {
      position: 'absolute',
      cursor: 'pointer',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: theme.colors.pastelGrey,
      transition: '.1s',
      borderRadius: '3.4em',

      '&:before': {
        position: 'absolute',
        content: '""',
        height: '1.8em',
        width: '1.8em',
        left: '.2em',
        bottom: '.2em',
        backgroundColor: 'white',
        transition: '.4s',
        borderRadius: '50%',
      },
    },
  });
