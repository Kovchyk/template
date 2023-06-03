import colors from './colors';
import space from './space';
import { radii, radius, border } from './borders';
import * as shadows from './shadows';
import { ThemeProps } from './types';
import fonts from './fonts';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  colors: { ...colors },
  space: { ...space },
  radii: { ...radii },
  radius: { ...radius },
  shadows: { ...shadows },
  border: { ...border },
  breakpoints: ['768px', '992px', '1200px', '1900px'],
  fontSizes: [
    '10px',
    '11px',
    '12px',
    '13px',
    '14px',
    '16px',
    '18px',
    '20px',
    '22px',
    '24px',
    '26px',
    '28px',
    '30px',
    '32px',
  ],
  fonts: { ...fonts },
  fontWeights: [400, 600, 700],
  lineHeights: ['14px', '16px', '18px', '20px', '22px', '24px', '28px', '30px'],
  letterSpacings: { normal: 'normal' },
} as ThemeProps;
