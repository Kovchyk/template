import { StylesProps, ThemeProps } from './types';

const font = `
  font-family: 'Open Sans';
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
`;

const normal = `
  font-weight: 400;
  ${font}
`;

const semiBold = `
  font-weight: 600;
  ${font}
`;

const bold = `
  font-weight: 700;
  ${font}
`;

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  normal_10px: `
    font-size: 10px;
    ${normal}
  `,
  semiBold_10px: `
    font-size: 10px;
    ${semiBold}
  `,
  bold_10px: `
    font-size: 10px;
    ${bold}
  `,

  normal_11px: `
    font-size: 11px;
    ${normal}
  `,
  semiBold_11px: `
    font-size: 11px;
    ${semiBold}
  `,
  bold_11px: `
    font-size: 11px;
    ${bold}
  `,

  normal_12px: `
    font-size: 12px;
    ${normal}
  `,
  semiBold_12px: `
    font-size: 12px;
    ${semiBold}
  `,
  bold_12px: `
    font-size: 12px;
    ${bold}
  `,

  normal_13px: `
    font-size: 13px;
    ${normal}
  `,
  semiBold_13px: `
    font-size: 13px;
    ${semiBold}
  `,
  bold_13px: `
    font-size: 13px;
    ${bold}
  `,

  normal_14px: `
    font-size: 14px;
    ${normal}
  `,
  semiBold_14px: `
    font-size: 14px;
    ${semiBold}
  `,
  bold_14px: `
    font-size: 14px;
    ${bold}
  `,

  normal_16px: `
    font-size: 16px;
    ${normal}
  `,
  semiBold_16px: `
    font-size: 16px;
    ${semiBold}
  `,
  bold_16px: `
    font-size: 16px;
    ${bold}
  `,

  normal_18px: `
    font-size: 18px;
    ${normal}
  `,
  semiBold_18px: `
    font-size: 18px;
    ${semiBold}
  `,
  bold_18px: `
    font-size: 18px;
    ${bold}
  `,

  normal_20px: `
    font-size: 20px;
    ${normal}
  `,
  semiBold_20px: `
    font-size: 20px;
    ${semiBold}
  `,
  bold_20px: `
    font-size: 20px;
    ${bold}
  `,

  normal_22px: `
    font-size: 22px;
    ${normal}
  `,
  semiBold_22px: `
    font-size: 22px;
    ${semiBold}
  `,
  bold_22px: `
    font-size: 22px;
    ${bold}
  `,

  btcHighlight: `
    border-radius: ${({ theme }: { theme: ThemeProps }) => theme.radius['small']};
    background-color: ${({ theme }: { theme: ThemeProps }) => theme.colors.btcTextHighlight};
`,
} as StylesProps;
