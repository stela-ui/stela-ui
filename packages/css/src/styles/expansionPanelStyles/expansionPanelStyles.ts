import type { ComponentStyles } from '../../types/componentStyles';

export const expansionPanelStyles: ComponentStyles = {
  '&[open]': { display: 'contents' },
  summary: {
    outline: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
  },
};
