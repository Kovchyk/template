import React from 'react';
import Box from '../Box/Box';
import { ForwardRef } from '../types';
import { StyledProps } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Image: ForwardRef<HTMLImageElement, StyledProps<any>> = React.forwardRef(function Image(props, ref) {
  return <Box ref={ref} as='img' {...props} />;
});
