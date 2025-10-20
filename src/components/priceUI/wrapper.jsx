import { Box } from '@mui/material';
import React from 'react';

function Wrapper({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        // flexWrap: { xl: 'wrap' },
        gap: 4,
        justifyContent: 'center',
      }}
    >
      {children}
    </Box>
  );
}

export default Wrapper;

