
import { Box, Typography, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

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
        <Link to="/contact">
          <Button
            variant="contained"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: '8px',
              fontSize: '1.1rem',
              textTransform: 'none',
              boxShadow: 'none',
              '&:hover': {
                boxShadow: 'none',
              },
            }}
          >
            Contact Us
          </Button>
        </Link>
        <Link to="/works">
          <Button
            variant="outlined"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: '8px',
              fontSize: '1.1rem',
              textTransform: 'none',
              boxShadow: 'none',
              '&:hover': {
                boxShadow: 'none',
              },
            }}
          >
            Our Work
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default HomeTop;

