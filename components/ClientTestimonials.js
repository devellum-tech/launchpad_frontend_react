import React from 'react';
import { Box, Typography, Avatar, Paper } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'BrightPath Solutions',
    feedback:
      'Working with this team was a game-changer! They delivered our project ahead of schedule, with flawless execution and clear communication at every step.',
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
  {
    name: 'Rajesh Kumar',
    company: 'TechNova Labs',
    feedback:
      'Professional, transparent, and highly skilled. Their development process was well-documented, and the results exceeded our expectations.',
    avatar: 'https://i.pravatar.cc/150?img=15',
  },
  {
    name: 'Emily Carter',
    company: 'Skyline Ventures',
    feedback:
      'They transformed our idea into a robust, scalable solution — on time and within budget. Exceptional work ethic and attention to detail.',
    avatar: 'https://i.pravatar.cc/150?img=32',
  },
  {
    name: 'Amit Sharma',
    company: 'InnoTech Global',
    feedback:
      'The level of professionalism and technical expertise is unmatched. We always felt in control of our project with regular progress updates.',
    avatar: 'https://i.pravatar.cc/150?img=8',
  },
  {
    name: 'Priya Verma',
    company: 'NextWave Analytics',
    feedback:
      'Their team not only delivered on time but also provided valuable insights that improved our product significantly. True partners in our success!',
    avatar: 'https://i.pravatar.cc/150?img=36',
  },
  {
    name: 'Michael Anderson',
    company: 'Vertex Innovations',
    feedback:
      'From day one, they impressed us with their planning, execution, and transparency. The end result was beyond our expectations — we’re already planning our next project with them.',
    avatar: 'https://i.pravatar.cc/150?img=56',
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  centerMode: true, // <-- center the active slides
  // centerPadding: '0px',
  arrows: false,
  responsive: [
    {
      breakpoint: 1536, // xl
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 1200, // lg
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 900, // md
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 600, // sm
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 0, // xs
      settings: { slidesToShow: 1 },
    },
  ],
};

const ClientTestimonials = () => {
  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #1f1c2c, #928dab)',
        color: 'white',
        maxWidth: '100%',
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        mb={6}
        sx={{ letterSpacing: 1 }}
      >
        What Our Clients Say
      </Typography>

      <Box
        sx={{
          maxWidth: '90%',
          mx: 'auto',
        }}
      >
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <Box key={i} px={2} sx={{ display: 'flex', justifyContent: 'center', px: 1 }}>
              <Paper
                sx={{
                  p: 2,
                  borderRadius: 3,
                  backgroundColor: 'white',
                  color: 'black',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  width: {
                    xs: '86%',
                    sm: '80%',
                    md: '50%', // 2 cards will fit
                    lg: '60%',
                    xl: '70%',
                  },
                  minHeight: 320,
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 25px rgba(0,0,0,0.3)',
                  },
                }}
              >
                <Avatar
                  src={t.avatar}
                  alt={t.name}
                  sx={{ width: 70, height: 70, mb: 2 }}
                />
                <Typography
                  variant="body1"
                  fontStyle="italic"
                  sx={{
                    mb: 2,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  “{t.feedback}”
                </Typography>
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {t.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t.company}
                  </Typography>
                </Box>
              </Paper>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ClientTestimonials;

