import type { ComponentStyles } from '../../types/componentStyles';

export const expansionPanelStyles: ComponentStyles = {
  '&[open]': { display: 'contents' },
  summary: {
    outline: 'none',
    border: 'none',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
};
