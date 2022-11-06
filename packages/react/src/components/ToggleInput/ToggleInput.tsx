import type { ToggleInputStylesProps } from '@stela-ui/css';
import { toggleInputStyles, inputLabelStyles } from '@stela-ui/css';
import type { FC } from 'react';

import { Flex } from '../Flex/Flex';
import type { GenericComponentProps } from '../types';

export interface ToggleInputProps
  extends GenericComponentProps,
    ToggleInputStylesProps {
  label?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void | unknown;
}

export const ToggleInput: FC<ToggleInputProps> = ({
  id,
  className,
  'data-testid': testId,
  onChange,
  defaultChecked,
  checked,
  label,
  size,
}) => {
  return (
    <Flex className={className} flow="row" alignY="center">
      <span css={inputLabelStyles({ labelPosition: 'left' })}>{label}</span>
      <div css={toggleInputStyles({ size })}>
        <input
          type="checkbox"
          id={id}
          data-testid={testId}
          defaultChecked={defaultChecked}
          checked={checked}
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
