import { css as createStyleObject, getObjectWithVariants } from '@theme-ui/css';
import type { ResponsiveStyleValue } from '@theme-ui/css';

import type { Theme } from '../../theme';
import type { ComponentStyles } from '../../types/componentStyles';
import type { ConverterFn } from '../../utils';
import { convertResponsiveValue } from '../../utils';

export interface ButtonStylesProps {
  stretch?: ResponsiveStyleValue<boolean>;
  variant?: keyof Theme['button']['variants'];
  size?: ResponsiveStyleValue<keyof Theme['button']['sizes']>;
}

const stretchConverter: ConverterFn<ButtonStylesProps['stretch'], '100%'> = (
  value
) => (value === true && '100%') || null;

const sizeConverter = (theme: Theme) => {
  const converter: ConverterFn<ButtonStylesProps['size'], string> = (size) =>
    size ? theme.button?.sizes[size] : null;
  return converter;
};

export const buttonStyles: ComponentStyles<ButtonStylesProps> =
  ({ stretch, variant = 'primary', size = 'm' }) =>
  (theme) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { variants, sizes, ...buttonStyles } = theme.button || {};
    return [
      {
        outline: 'none',
        border: 'none',
        cursor: 'pointer',
      },
      getObjectWithVariants(
        {
          variant: `button.variants.${variant}`,
        },
        // TODO: fix Theme type overwrite
        theme as any
      ),
      createStyleObject({
        width: convertResponsiveValue(stretch, stretchConverter),
        fontSize: convertResponsiveValue(size, sizeConverter(theme)),
        ...buttonStyles,
        // TODO: fix Theme type overwrite
      })(theme as any),
    ];
  };
