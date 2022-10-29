import { toggleInputStyles, inputLabelStyles } from '@stela-ui/css';
import type { FC } from 'react';

import { Flex } from '../Flex/Flex';
import type { GenericComponentProps } from '../types';

export interface ToggleInputProps extends GenericComponentProps {
  label?: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void | unknown;
}

export const ToggleInput: FC<ToggleInputProps> = ({
  id,
  className,
  'data-testid': testId,
  onChange,
  defaultChecked,
  label,
}) => {
  return (
    <Flex className={className} flow="row" alignY="center">
      <span css={inputLabelStyles({ labelPosition: 'left' })}>{label}</span>
      <div css={toggleInputStyles}>
        <input
          type="checkbox"
          id={id}
          data-testid={testId}
          defaultChecked={defaultChecked}
          onChange={
            onChange
              ? (e) => {
                  onChange(e.currentTarget.checked);
                }
              : undefined
          }
        />
        <span />
      </div>
    </Flex>
  );
};
