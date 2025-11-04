import React from 'react';
import { Box, Typography, Avatar, Paper } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Hungama Digital Media Entertainment',
    company: '',
    feedback:
      'Working with this team was a game-changer! They delivered our project ahead of schedule, with flawless execution and clear communication at every step.',
    avatar: 'https://bb-media.com/wp-content/uploads/2024/06/RFz03osd5kgWv7lDKiuIIuMHDFhZ6GkEzz5DiuckJH15t-NvphBoYo70WgnHXKPbrlM.png',
  },
  {
    name: 'NeoSoft Technologies',
    company: '',
    feedback:
      'Professional, transparent, and highly skilled. Their development process was well-documented, and the results exceeded our expectations.',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ciBMmbrQ54G0iZ41uzzZoaS6KVeJ1BOtAQ&s',
  },
  {
    name: 'HSMotions',
    company: '',
    feedback:
      'They transformed our idea into a robust, scalable solution — on time and within budget. Exceptional work ethic and attention to detail.',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShIh2jhGkcEpwseDktPGFapK9VwLC_lc8Trw&s',
  },
  {
    name: 'Vernost',
    company: '',
    feedback:
      'The level of professionalism and technical expertise is unmatched. We always felt in control of our project with regular progress updates.',
    avatar: 'https://media.licdn.com/dms/image/v2/D4D0BAQFVUIV81HTmVg/company-logo_200_200/company-logo_200_200/0/1719578735454/vernostmarketingtechnologysolutions_logo?e=2147483647&v=beta&t=eMJkCtCMjeCKeZaBOH_-OblhQdkRTih7-HmrNEkuQq0',
  },
    {
    name: 'GMinsights',
    company: '',
    feedback:
      'Devellum excels at keeping projects transparent and well-managed. Highly recommended for anyone seeking reliable IT partners',
    avatar: 'https://media.licdn.com/dms/image/v2/D4D0BAQE3S6nG4gNEMg/company-logo_200_200/company-logo_200_200/0/1686216022861/global_market_insights_inc_logo?e=2147483647&v=beta&t=o-sfaPYlOS_xAYgjMklJyfIPYvKIdolmZpfDArGG-Oc',
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
                  sx={{ width: 90, height: 90, border: '1px solid #000000ff' }}
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

