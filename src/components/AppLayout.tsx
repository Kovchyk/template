import React from 'react';
import { Box } from 'src/styled';

interface IAppLayoutProps {
  header: React.ReactElement;
  content: React.ReactElement;
}

const AppLayout: React.FC<IAppLayoutProps> = ({ header, content }): JSX.Element => {
  return (
    <Box p={6} className='app' backgroundColor='darkgreen'>
      <Box as='header' className='app-header'>
        {header}
      </Box>
      <Box className='app-content'>{content}</Box>
    </Box>
  );
};

export default AppLayout;
