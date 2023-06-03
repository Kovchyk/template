import { StylesProps } from './types';
import colors from './colors';

export const shadows: string[] = [
  'none',
  '0px 0px 1px rgba(0, 0, 0, 0.6)',
  '0px 2px 2px rgba(0, 0, 0, 0.16), 0px 0px 1px rgba(0, 0, 0, 0.2)',
  '0px 3px 5px rgba(0, 0, 0, 0.16), 0px 0px 1px rgba(0, 0, 0, 0.2)',
  '0px 4px 7px rgba(0, 0, 0, 0.16), 0px 1px 2px rgba(0, 0, 0, 0.1), 0px 0px 2px rgba(0, 0, 0, 0.05)',
  '0px 6px 9px rgba(0, 0, 0, 0.16), 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 0px 2px rgba(0, 0, 0, 0.05)',
  '0px 8px 10px rgba(0, 0, 0, 0.16), 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 0px 2px rgba(0, 0, 0, 0.05)',
  '0px 12px 16px 1px rgba(0, 0, 0, 0.16), 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 0px 2px rgba(0, 0, 0, 0.05)',
  '0px 16px 20px 2px rgba(0, 0, 0, 0.16), 0px 2px 8px rgba(0, 0, 0, 0.1), 0px 0px 2px rgba(0, 0, 0, 0.05)',
  '0px 20px 28px 6px rgba(0, 0, 0, 0.2), 0px 4px 10px rgba(0, 0, 0, 0.12), 0px 0px 2px rgba(0, 0, 0, 0.05)',
  '0px 24px 40px 10px rgba(0, 0, 0, 0.2), 0px 6px 18px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.05)',
];

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default <StylesProps>{
  clickableShadow: '0 3px 11px 0 rgb(50 50 50 / 30%)',
  activeShadow: `0px 4px 7px ${colors['grey_light']}, 0px 1px 2px ${colors['grey_light_01']}, 0px 0px 2px ${colors['grey_light_05']}`,
  boxShadowBlack: `0px 16px 20px 2px ${colors['grey_light']}, 0px 2px 8px ${colors['grey_light_01']}, 0px 0px 2px ${colors['grey_light_05']}`,
  boxShadow: `0 2px 16px 0 ${colors['neutral_012']}`,
};
