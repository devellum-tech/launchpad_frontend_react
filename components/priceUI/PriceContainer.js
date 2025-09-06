import React from 'react';
import { Box, Typography, Button, Switch } from '@mui/material';

function PriceContainer({ heading, desc, features, btnText, black = false }) {
  return (
    <Box
      sx={{
        flex: 1,
        backgroundColor: black ? '#000' : '#eeeeeeff',
        color: black ? '#fff' : '#000',
        borderRadius: '20px',
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        {heading}
      </Typography>
      <Typography>{desc}</Typography>

      <Box>
        {features.map((f, i) => (
          <Box key={f} display="flex" alignItems="flex-start" gap={1.5} mt={1}>
            <Box
              sx={{
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: 'green',
                mt: '2px',
              }}
            >
              ✔️
            </Box>
            <Typography>{f}</Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ flexGrow: 1 }} />

      <Button
        variant="contained"
        sx={{
          mb: '10px', // distance from bottom
          alignSelf: 'start',
          backgroundColor: black ? '#fff' : '#000',
          color: black ? '#000' : '#fff',
          textTransform: 'none',
          borderRadius: '50px',
          px: 3,
          py: 1,
          '&:hover': { backgroundColor: black ? '#eee' : '#111' },
        }}
      >
        {btnText}
      </Button>
    </Box>
  );
}

export default PriceContainer;

