// components/Loader.tsx
import { CircularProgress, Box } from '@mui/material';

export default function Loader() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'rgba(0,0,0,0.6)',
        zIndex: 2000,
      }}
    >
      <CircularProgress color="warning" />
    </Box>
  );
}

