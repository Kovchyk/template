import React from 'react';
import { border } from '../theme/borders';
import Box from '../Box/Box';
import { ForwardRef } from '../types';
import { StyledProps } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Divider: ForwardRef<HTMLDivElement, StyledProps<any>> = React.forwardRef(function Divider(props, ref) {
  return (
    <Box
      ref={ref}
      as='div'
      {...props}
      css={{
        color: 'bw_percent_80',
        m: 16,
        my: 6,
        border: 0,
        borderBottom: border['grey'],
      }}
    />
  );
});
