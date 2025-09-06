import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  Divider,
  IconButton,
} from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#0D1B2A', color: '#fff', pt: 8, pb: 4, mt: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ fontWeight: 700, color: '#e9e9e9ff', mb: 2 }}>
              Devellum
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: '#C0C0C0' }}>
              Delivering high-quality web & mobile solutions with transparency and client
              focus.
            </Typography>

            <Typography
              variant="body1"
              sx={{ fontWeight: 1000, color: '#C0C0C0', mb: 1 }}
            >
              📧 devellum.tech@gmail.com
            </Typography>

            <Typography variant="body1" sx={{ fontWeight: 1000, color: '#C0C0C0' }}>
              📞 +91 98765 43210
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#e9e9e9ff', mb: 2 }}>
              Links
            </Typography>
            <Stack spacing={1}>
              {['Home', 'Services', 'Works', 'About Us', 'Contact'].map((item, i) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  underline="none"
                  sx={{
                    color: '#C0C0C0',
                    fontSize: '0.95rem',
                    '&:hover': { color: '#C0C0C0' },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Why Choose Us */}
          <Grid item xs={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#e9e9e9ff', mb: 2 }}>
              Why Us
            </Typography>
            <Stack spacing={1}>
              {[
                'On-time Delivery',
                'Transparent Pricing',
                'Professional Tracking',
                'Documented Development',
                '24/7 Support',
              ].map((point, i) => (
                <Typography key={point} variant="body2" sx={{ color: '#C0C0C0' }}>
                  ✔ {point}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#e9e9e9ff', mb: 2 }}>
              Connect
            </Typography>
            <Stack direction="row" spacing={1}>
              {[
                {
                  name: 'Facebook',
                  link: 'https://www.linkedin.com/company/devellum/',
                  icon: Facebook,
                },
                {
                  name: 'Twitter',
                  link: 'https://www.linkedin.com/company/devellum/',
                  icon: Twitter,
                },
                {
                  name: 'LinkedIn',
                  link: 'https://www.linkedin.com/company/devellum/',
                  icon: LinkedIn,
                },
                {
                  name: 'Instagram',
                  link: 'https://www.linkedin.com/company/devellum/',
                  icon: Instagram,
                },
              ].map((obj, i) => (
                <IconButton
                  key={obj.name}
                  size="small"
                  sx={{
                    bgcolor: '#1B263B',
                    color: '#C0C0C0',
                    '&:hover': { bgcolor: '#C0C0C0', color: '#0D1B2A' },
                  }}
                  href={obj.link}
                  target="_blank"
                >
                  <obj.icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', my: 4 }} />

        {/* Bottom Copyright */}
        <Typography
          variant="body2"
          align="center"
          sx={{ color: 'grey.500', fontSize: '0.85rem' }}
        >
          © {new Date().getFullYear()} Devellum. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

