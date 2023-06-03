import { mainTheme } from 'src/styled';

const breakpoints = mainTheme.breakpoints.map(item => `${Number(item.replace('px', '')) - 1}px`);

export const DEVICE_TYPE = [
  `(max-width: ${breakpoints[0]})`,
  `(max-width: ${breakpoints[1]})`,
  `(max-width: ${breakpoints[2]})`,
  `(max-width: ${breakpoints[3]})`,
  `(max-width: ${breakpoints[4]})`,
];
