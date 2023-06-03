import { ThemeProps } from './types';

const scrollbarThumb = `
    &::-webkit-scrollbar-thumb {
      border-radius: ${({ theme }: { theme: ThemeProps }) => theme.radius['normal']};
      background: ${({ theme }: { theme: ThemeProps }) => theme.colors['black_opacity_04']};
    }
    &:hover::-webkit-scrollbar-thumb {
      background: ${({ theme }: { theme: ThemeProps }) => theme.colors['black_opacity_0']};
      cursor: pointer;
    }
`;

export const mainScroll = `
  &::-webkit-scrollbar {
    width: 6px;
    height: 8px;
    background-color: ${({ theme }: { theme: ThemeProps }) => theme.colors['black_opacity_01']};
  }

  ${scrollbarThumb}
`;

export const modalScroll = `
  &::-webkit-scrollbar {
    width: 4px;
    background-color: ${({ theme }: { theme: ThemeProps }) => theme.colors['black_opacity_005']};
    border-radius: ${({ theme }: { theme: ThemeProps }) => theme.radius['normal']};
  }

  ${scrollbarThumb}

  &::-webkit-scrollbar-track-piece:end {
    margin-bottom: 8px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-track-piece:start {
    margin-top: 8px;
    background-color: transparent;
  }
`;
