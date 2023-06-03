export interface StylesProps {
  [key: string]: string;
}

export interface ThemeProps {
  border: {
    [key: string]: string;
  };
  colors: {
    [key: string]: string;
  };
  space: {
    [key: number]: string | number;
  };
  radii: {
    [key: number]: string;
  };
  radius: {
    [key: string]: string;
  };
  breakpoints: string[];
  fontSizes: string[];
  fonts: {
    [key: string]: string;
  };
  fontWeights: number[];
  lineHeights: string[];
  letterSpacings: { normal: string };
}
