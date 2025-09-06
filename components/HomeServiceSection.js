import React from 'react';
import { Box, Typography } from '@mui/material';
import Wrapper from './priceUI/wrapper';
import PriceContainer from './priceUI/PriceContainer';

const features = {
  web: [
    '⚡ End-to-End Development — from idea to launch',
    '🛠️ Clean, Scalable & Maintainable Code',
    '📊 Transparent Cost & Progress Tracking',
    '📅 On-Time Delivery with Milestone Reporting',
    '📄 Fully Documented for Future Scaling',
  ],
  mobile: [
    '📱 Native & Cross-Platform App Development',
    '🎯 Pixel-Perfect UI & Lightning-Fast Performance',
    '🔗 API Integration & Cloud-Ready Architecture',
    '📅 Timely Delivery with Sprint Updates',
    '📄 Comprehensive Build Documentation',
  ],
  maintenance: [
    '🔒 Regular Security & Performance Updates',
    '🛠️ 24/7 Monitoring & Quick Issue Resolution',
    '📊 Monthly Maintenance Reports',
    '🚀 Feature Enhancements on Demand',
    '📅 Proactive Scheduling & Upgrades',
  ],
  architecture: [
    '🎨 Tailored Solution Architecture for Your Needs',
    '🧩 Scalable & Future-Proof System Design',
    '🖌️ UI/UX That Delivers Business Impact',
    '📊 Data-Driven Design Decisions',
    '📅 Agile, Transparent Development Cycles',
  ],
};

const HomeServiceSection = () => {
  return (
    <Box sx={{ maxWidth: '100%', py: 8 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center">
        Our Services
      </Typography>

      <Typography variant="body1" textAlign="center" mt={1} mb={4}>
        Delivering excellence with on-time completion, transparent processes, and
        professional project tracking.
      </Typography>

      <Wrapper>
        <PriceContainer
          heading={'Full-Stack Web Development'}
          desc={`We build high-performing, scalable web apps that bring your ideas to life with precision and speed.`}
          btnText={'Explore Web Development →'}
          features={features.web}
        />

        <PriceContainer
          heading={'Mobile App Development'}
          desc={`Crafting intuitive, powerful mobile apps for Android & iOS — ensuring a smooth and engaging user experience.`}
          btnText={'Explore Mobile Development →'}
          features={features.mobile}
          black
        />

        <PriceContainer
          heading={'Maintenance & Support'}
          desc={`Keeping your digital products running flawlessly with proactive maintenance and 24/7 support.`}
          btnText={'Explore Maintenance Plans →'}
          features={features.maintenance}
        />

        <PriceContainer
          heading={'Solution Architecture & UI/UX Design'}
          desc={`Designing systems and experiences that drive growth, efficiency, and user satisfaction.`}
          btnText={'Explore Design & Architecture →'}
          features={features.architecture}
          black
        />
      </Wrapper>
    </Box>
  );
};

export default HomeServiceSection;

