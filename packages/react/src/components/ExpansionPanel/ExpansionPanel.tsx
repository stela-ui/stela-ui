// import type { ExpansionPanelStylesProps } from '@stela-ui/css';
// import { expansionPanelStyles } from '@stela-ui/css';
import type { ReactNode, FC } from 'react';

import type { GenericComponentProps } from '../types';

export interface ExpansionPanelProps
  // ExpansionPanelStylesProps,
  extends GenericComponentProps {
  children: ReactNode | ReactNode[];
}

export const ExpansionPanel: FC<ExpansionPanelProps> = ({
  children,
  id,
  'data-testid': testId,
  ...rest
}) => {
  return (
    <div
      id={id}
      data-testid={testId}
      // css={expansionPanelStyles(rest)}
    >
      {children}
    </div>
  );
};
