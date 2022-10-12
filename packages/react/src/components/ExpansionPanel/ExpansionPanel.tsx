// import type { ExpansionPanelStylesProps } from '@stela-ui/css';
import { expansionPanelStyles } from '@stela-ui/css';
import type { ReactNode, FC } from 'react';

import type { GenericComponentProps } from '../types';
import { useExpansionPanelContext } from './ExpansionPanelContext';

export interface ExpansionPanelProps
  // ExpansionPanelStylesProps,
  extends GenericComponentProps {
  children: ReactNode | ReactNode[];
  title: ReactNode | ReactNode[];
  contextId?: string | number;
  unmanaged?: boolean;
}

export const ExpansionPanel: FC<ExpansionPanelProps> = ({
  children,
  id,
  'data-testid': testId,
  title,
  contextId,
  unmanaged,
  ...rest
}) => {
  const expansionPanelContext = useExpansionPanelContext();
  const hasStateManagement = unmanaged !== true && expansionPanelContext;
  if (expansionPanelContext && !contextId && typeof unmanaged === 'undefined') {
    console.warn(
      'Please pass a contextId or set the the pass set the `unmanaged` prop to the ExpansionPanel component.'
    );
  }

  const isActive = expansionPanelContext?.activePanel === contextId;

  return (
    <details
      id={id}
      data-testid={testId}
      open={
        hasStateManagement && contextId
          ? (isActive && true) || false
          : undefined
      }
      onClick={
        hasStateManagement && contextId
          ? (e) => {
              e.preventDefault();
              expansionPanelContext.setActivePanel(isActive ? null : contextId);
            }
          : undefined
      }
      css={expansionPanelStyles}
    >
      <summary>{title}</summary>
      {children}
    </details>
  );
};
