import { StylesProps } from './types';

const colors: StylesProps = {
  black: 'hsl(0, 0%, 0%)', // black
  white: 'hsl(0, 0%, 100%)', // white
  backgroundDefault: 'rgba(51, 51, 51, 1)',

  white_hex: '#ffffff',

  // black to white
  bw_percent_20: 'hsl(0, 0%, 20%)',
  bw_percent_30: 'hsl(0, 0%, 30%)',
  bw_percent_40: 'hsl(0, 0%, 40%)',
  bw_percent_60: 'hsl(0, 0%, 60%)',
  bw_percent_70: 'hsl(0, 0%, 70%)',
  bw_percent_80: 'hsl(0, 0%, 80%)',
  bw_percent_90: 'hsl(0, 0%, 90%)',
  bw_percent_95: 'hsl(0, 0%, 95%)',
  bw_percent_98: 'hsl(0, 0%, 98%)',

  // different colors
  green: 'hsl(155, 88%, 39%)', // green
  lightgreen: 'hsl(174, 69%, 46%)', // light green
  darkgreen: 'hsl(177, 100%, 27%)', // dark green
  blue: 'hsl(200, 75%, 54%)', // blue
  lightpurple: 'hsl(265, 95%, 68%)', // light purple
  purple: 'hsl(295, 61%, 36%)', // purple
  orange: 'hsl(30, 89%, 50%)', // orange
  pink: 'hsl(317, 64%, 53%)', // pink
  yellow: 'hsl(47, 93%, 50%)', // yellow
  red: 'hsl(8, 73%, 52%)', // red

  orange_btc_hex: '#F26724',

  darkblue: 'hsla(218, 52%, 32%, 1)', // dark blue,
  darkpurple: 'hsla(318, 54%, 33%, 1)', // dark purple
  darkyellow: 'hsla(33, 84%, 60%, 1)', // dark yellow

  danger: 'hsl(356, 46%, 56%)', // danger red
  success: '	hsl(151, 46%, 65%)', // success green

  // white to black
  black_opacity_002: 'hsla(0, 0%, 0%, 0.02)',
  black_opacity_005: 'hsla(0, 0%, 0%, 0.05)',
  black_opacity_01: 'hsla(0, 0%, 0%, 0.1)',
  black_opacity_02: 'hsla(0, 0%, 0%, 0.2)',
  black_opacity_04: 'hsla(0, 0%, 0%, 0.4)',
  black_opacity_06: 'hsla(0, 0%, 0%, 0.6)',
  black_opacity_08: 'hsla(0, 0%, 0%, 0.8)',
  black_opacity_1: 'hsla(0, 0%, 0%, 1)',

  // white to white
  white_opacity_005: 'hsla(0, 0%, 100%, 0.05)',
  white_opacity_01: 'hsla(0, 0%, 100%, 0.1)',
  white_opacity_02: 'hsla(0, 0%, 100%, 0.2)',
  white_opacity_04: 'hsla(0, 0%, 100%, 0.4)',
  white_opacity_06: 'hsla(0, 0%, 100%, 0.6)',

  // white to red
  red_opacity_005: 'hsla(0, 75%, 64%, 0.05)',
  red_opacity_01: 'hsla(0, 75%, 64%, 0.1)',
  red_opacity_02: 'hsla(0, 75%, 64%, 0.2)',
  red_opacity_04: 'hsla(0, 75%, 64%, 0.4)',
  red_opacity_06: 'hsla(0, 75%, 64%, 0.6)',
  red_opacity_08: 'hsla(0, 75%, 64%, 0.8)',
  red_opacity_1: 'hsla(0, 75%, 64%, 1)',

  // white to green
  green_opacity_005: 'hsla(154, 96%, 43%, 0.05)',
  green_opacity_01: 'hsla(154, 96%, 43%, 0.1)',
  green_opacity_02: 'hsla(154, 96%, 43%, 0.2)',
  green_opacity_04: 'hsla(154, 96%, 43%, 0.4)',
  green_opacity_06: 'hsla(154, 96%, 43%, 0.6)',
  green_opacity_08: 'hsla(154, 96%, 43%, 0.8)',
  green_opacity_1: 'hsla(154, 96%, 43%, 1)',

  // white to orange
  orange_opacity_005: 'hsla(20, 89%, 55%, 0.05)',
  orange_opacity_01: 'hsla(20, 89%, 55%, 0.1)',
  orange_opacity_02: 'hsla(20, 89%, 55%, 0.2)',
  orange_opacity_04: 'hsla(20, 89%, 55%, 0.4)',
  orange_opacity_06: 'hsla(20, 89%, 55%, 0.6)',
  orange_opacity_08: 'hsla(20, 89%, 55%, 0.8)',
  orange_opacity_1: 'hsla(20, 89%, 55%, 1)',

  // white to blue
  blue_opacity_005: 'hsla(200, 85%, 60%, 0.05)',
  blue_opacity_01: 'hsla(200, 85%, 60%, 0.1)',
  blue_opacity_02: 'hsla(200, 85%, 60%, 0.2)',
  blue_opacity_04: 'hsla(200, 85%, 60%, 0.4)',
  blue_opacity_06: 'hsla(200, 85%, 60%, 0.6)',
  blue_opacity_08: 'hsla(200, 85%, 60%, 0.8)',
  blue_opacity_1: 'hsla(200, 85%, 60%, 1)',

  // white to gold
  gold_opacity_005: 'hsla(36, 100%, 59%, 0.05)',
  gold_opacity_01: 'hsla(36, 100%, 59%, 0.1)',
  gold_opacity_02: 'hsla(36, 100%, 59%, 0.2)',
  gold_opacity_04: 'hsla(36, 100%, 59%, 0.4)',
  gold_opacity_06: 'hsla(36, 100%, 59%, 0.6)',
  gold_opacity_08: 'hsla(36, 100%, 59%, 0.8)',
  gold_opacity_1: 'hsla(36, 100%, 59%, 1)',

  // grey
  grey: 'rgba(0, 0, 0, 0.2)', // grey
  grey_light: 'rgba(0, 0, 0, 0.16)',
  grey_light_01: 'rgba(0, 0, 0, 0.1)',
  grey_light_05: 'rgba(0, 0, 0, 0.05)',
  neutral: 'hsla(0, 0%, 40%, 1)',
  neutral_2: '#f5f5f5',
  neutral_5: '#f2f2f2',
  neutral_10: '#e5e5e5',
  neutral_40: '#999999',
  neutral_60: '#666666',
  neutral_80: '#333333',
  neutral_line: 'hsla(0, 0%, 80%, 1)',
  neutral_012: 'hsla(0, 0%, 13%, 0.12)',
};

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  ...colors,

  mainGreyBackground: '#f2f2f2', // colors.black_opacity_005 with no opacity,
  btcTextHighlight: colors.orange_opacity_02,
  bigtincan: colors.orange_opacity_1,
  greyFont: colors.black_opacity_06,
} as StylesProps;
