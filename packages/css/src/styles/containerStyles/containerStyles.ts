import type { ComponentStyles } from '../../types/componentStyles';

export interface ContainerStylesProps {
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
}

const sizeMap = {
  xs: '480px',
  s: '680px',
  m: '960px',
  l: '1270px',
  xl: '1600px',
};

export const containerStyles: ComponentStyles<ContainerStylesProps> = ({
  size = 'm',
}) => ({ width: sizeMap[size], maxWidth: '100%', margin: 'auto' });
