import colors from './colors';
import { StylesProps } from './types';

export const border: StylesProps = {
  grey: `solid 1px ${colors['grey']}`,
  orange: `solid 1px ${colors['orange_opacity_1']}`,
};

export const radius: StylesProps = {
  xs: '2px',
  small: '4px',
  normal: '8px',
  md: '12px',
  round: '50%',
};

export const radii: string[] = ['initial', '2px', '4px', '6px', '8px'];
