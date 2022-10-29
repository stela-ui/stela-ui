import type {
  // ExpansionPanelStylesProps,
  ButtonStylesProps,
} from '@stela-ui/css';
import { expansionPanelStyles } from '@stela-ui/css';
import type { ReactNode, FC } from 'react';

import { Button } from '../Button/Button';
import type { GenericComponentProps } from '../types';
import { useExpansionPanelContext } from './ExpansionPanelContext';

export interface ExpansionPanelProps
  // ExpansionPanelStylesProps,
  extends GenericComponentProps {
  children: ReactNode | ReactNode[];
  title: ReactNode | ReactNode[];
  contextId?: string | number;
  unmanaged?: boolean;
  buttonProps?: ButtonStylesProps;
}

export const ExpansionPanel: FC<ExpansionPanelProps> = ({
  children,
  id,
  className,
  'data-testid': testId,
  title,
  contextId,
  unmanaged,
  buttonProps = {},
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
      className={className}
      data-testid={testId}
      open={
        hasStateManagement && contextId
          ? (isActive && true) || false
          : undefined
      }
      css={expansionPanelStyles}
    >
      <summary
        tabIndex={-1}
        onClick={
          hasStateManagement && contextId
            ? (e) => {
                e.preventDefault();
                expansionPanelContext.setActivePanel(
                  isActive ? null : contextId
                );
              }
            : undefined
        }
      >
        <Button
          as="span"
          size="s"
          variant="secondary"
          tabIndex={0}
          {...buttonProps}
        >
          {title}
        </Button>
      </summary>
      {children}
    </details>
  );
};
