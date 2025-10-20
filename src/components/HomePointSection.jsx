import { Box, Typography, Button, Fade } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePointSection = () => {
  const points = [
    {
      title: 'On-Time Delivery, Every Time',
      description:
        'We complete projects before deadlines without compromising quality or performance.',
    },
    {
      title: 'Transparent Development Process',
      description:
        'No hidden costs and complete visibility into every stage of design and development.',
    },
    {
      title: 'Professional Progress Tracking',
      description:
        'Get regular milestone updates so you always know exactly where your project stands.',
    },
    {
      title: 'Well-Documented Solutions',
      description:
        'Clean, maintainable code with detailed documentation for effortless scalability.',
    },
    {
      title: 'End-to-End Development',
      description:
        'From UI/UX to backend, database, mobile apps, and DevOps — all under one roof.',
    },
    {
      title: 'Client-Centric Approach',
      description:
        'Custom solutions designed for your goals, ensuring satisfaction and long-term growth.',
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: '100%',
        background: 'linear-gradient(175deg, #ffffff, #f8f9fa)',
        py: { xs: 6, md: 10 },
        px: 2,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          maxWidth: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            color: '#111',
            fontSize: { xs: '1.75rem', md: '2.25rem' },
          }}
        >
          Our Promise: Building with Precision, Delivering with Trust
        </Typography>

        {/* Points */}
        <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }} gap={3}>
          {points.map((point, idx) => (
            <Fade in key={idx} style={{ transitionDelay: `${idx * 150}ms` }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 1.5,
                  backgroundColor: '#fff',
                  p: 2,
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-7px)',
                    boxShadow: '0 6px 24px rgba(0,0,0,0.08)',
                  },
                }}
              >
                <Box
                  sx={{
                    minWidth: 28,
                    height: 28,
                    borderRadius: '50%',
                    backgroundColor: '#d7fe52',
                    color: '#000',
                    fontWeight: 'bold',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '1rem',
                    mt: '3px',
                  }}
                >
                  ✔
                </Box>
                <Typography variant="body1" sx={{ fontSize: '1rem', color: '#333' }}>
                  <strong>{point.title}</strong> — {point.description}
                </Typography>
              </Box>
            </Fade>
          ))}
        </Box>

        {/* CTA */}
        <Box mt={2}>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <Button
              sx={{
                px: 3,
                py: 1.5,
                backgroundColor: '#000',
                borderRadius: '999px',
                color: '#fff',
                fontSize: '1rem',
                fontWeight: 500,
                textTransform: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                '&:hover': {
                  backgroundColor: '#111',
                },
              }}
            >
              Get Started
              <Box
                sx={{
                  backgroundColor: '#d7fe52',
                  color: '#000',
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1.25rem',
                }}
              >
                →
              </Box>
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePointSection;

