import type { ComponentStyles } from '../../types/componentStyles';

// TODO: consider making this themeable after figuring out a good way to do so
// TODO: cleanup
// TODO: add focus styles
export const toggleInputStyles: ComponentStyles = {
  position: 'relative',
  display: 'inline-block',
  width: '42px',
  height: '22px',
  input: {
    position: 'absolute',
    opacity: '0',
    width: '100%',
    height: '100%',
    margin: '0',
    zIndex: '1',
  },
  'input:checked + span': {
    backgroundColor: '#9f9fe6',
  },
  'input:checked + span:before': {
    transform: 'translateX(20px)',
  },
  span: {
    position: 'absolute',
    cursor: 'pointer',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: '#ccc',
    transition: '.1s',
    borderRadius: '34px',

    '&:before': {
      position: 'absolute',
      content: '""',
      height: '18px',
      width: '18px',
      left: '2px',
      bottom: '2px',
      backgroundColor: 'white',
      transition: '.4s',
      borderRadius: '50%',
    },
  },
};
