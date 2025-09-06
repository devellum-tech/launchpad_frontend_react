'use client';
import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import Link from 'next/link';

const HomeTop = () => {
  return (
    <Box
      sx={{
        maxWidth: '100%',
        textAlign: 'center',
        py: { xs: 8, md: 12 },
      }}
    >
      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{
          fontSize: { xs: '2rem', md: '3rem' },
          mb: 2,
        }}
      >
        Transforming Ideas into Scalable,
        <br /> High-Performance Software
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{
          maxWidth: 1000,
          mx: 'auto',
          fontSize: { xs: '1rem', md: '1.25rem' },
          color: 'text.secondary',
          mb: 4,
        }}
      >
        We provide <b>end-to-end software development services</b> — from intuitive
        frontend interfaces to robust backend systems, secure databases, and efficient
        DevOps pipelines.
      </Typography>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
        <Link href={'/contact'}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#000',
              borderRadius: '30px',
              color: '#fff',
              px: 4,
              py: 1.5,
              textTransform: 'none',
              fontSize: '1rem',
              '&:hover': {
                backgroundColor: '#222',
              },
            }}
          >
            Get a Free Consultation →
          </Button>
        </Link>
        <Link href={'/Works'}>
          <Button
            variant="outlined"
            sx={{
              borderRadius: '30px',
              px: 4,
              py: 1.5,
              textTransform: 'none',
              fontSize: '1rem',
            }}
          >
            View Our Work
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default HomeTop;

