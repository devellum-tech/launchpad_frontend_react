import React from "react";
import { Box, Typography, Grid, Paper, Chip, Divider } from "@mui/material";
import AiIcon from "@mui/icons-material/AutoAwesome";
import WebIcon from "@mui/icons-material/Language";
import MobileIcon from "@mui/icons-material/PhoneIphone";
import SoftwareIcon from "@mui/icons-material/Storage";
import DesignIcon from "@mui/icons-material/Architecture";

const missionPoints = [
  "On-time project completion — every time",
  "Transparent cost structure — no hidden charges",
  "Professional tracking & fully documented progress",
  "Quality-driven development with attention to detail",
  "Client-first approach with proactive communication",
];

const services = [
  {
    icon: <WebIcon sx={{ fontSize: 50, color: "#4CAF50" }} />,
    title: "Full-Stack Web Development",
    description:
      "High-performance, SEO-optimized, and scalable web applications tailored for your unique business goals.",
    features: [
      "Responsive & mobile-friendly designs",
      "Custom API integrations",
      "Secure and fast architecture",
    ],
  },
  {
    icon: <MobileIcon sx={{ fontSize: 50, color: "#FF9800" }} />,
    title: "Mobile App Development",
    description:
      "Native & cross-platform apps for iOS and Android with flawless UX and optimal performance.",
    features: [
      "React Native & Flutter expertise",
      "Smooth animations & rich UI",
      "Push notifications & offline support",
    ],
  },
  {
    icon: <SoftwareIcon sx={{ fontSize: 50, color: "#2196F3" }} />,
    title: "Maintenance & Support",
    description:
      "Ensure your applications run seamlessly with our proactive maintenance and support services.",
    features: [
      "24/7 technical assistance",
      "Security patching & updates",
      "Performance optimization",
    ],
  },
  {
    icon: <DesignIcon sx={{ fontSize: 50, color: "#E91E63" }} />,
    title: "Solution Architecture",
    description:
      "Strategic planning for scalable, future-ready solutions aligned with your business objectives.",
    features: [
      "System design & documentation",
      "Workflow optimization",
      "Cloud & on-premise strategies",
    ],
  },
  {
    icon: <AiIcon sx={{ fontSize: 50, color: "#9C27B0" }} />,
    title: "AI & Machine Learning Solutions",
    description:
      "Transform your business with enterprise-grade AI and ML solutions, including predictive analytics, automation, and smart data insights.",
    features: [
      "Intelligent automation & process transformation",
      "Predictive models for data-driven decisions",
      "Custom NLP and computer vision systems",
      "AI-powered chatbots & recommendation engines",
      "Seamless AI integration with existing tools",
    ],
  },
];

const ServicePage = () => {
  return (
    <Box sx={{ backgroundColor: "#fafafa", pb: 8, width: "100%" }}>
      {/* Hero / Mission Section */}
      <Box
        sx={{
          py: 8,
          px: 2,
          textAlign: "center",
          background: "linear-gradient(135deg, #1f1c2c, #928dab)",
          color: "white",
        }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          gutterBottom
          sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
        >
          Empowering Your Digital Success
        </Typography>
        <Typography
          variant="h6"
          sx={{
            maxWidth: "750px",
            mx: "auto",
            mb: 4,
            fontSize: { xs: "1rem", md: "1.25rem" },
            opacity: 0.9,
          }}
        >
          We deliver transparent, timely, and high-quality IT solutions that
          drive growth, innovation, and long-term value for our clients.
        </Typography>

        {/* Mission Points */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
            maxWidth: "900px",
            mx: "auto",
          }}
        >
          {missionPoints.map((point, idx) => (
            <Chip
              key={idx}
              label={point}
              sx={{
                backgroundColor: "rgba(255,255,255,0.15)",
                color: "white",
                fontWeight: "bold",
                px: 2,
                py: 1,
                fontSize: "0.95rem",
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Company Vision / About Section */}
      <Box
        sx={{
          maxWidth: "1000px",
          mx: "auto",
          mt: 8,
          px: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Our Mission & Vision
        </Typography>
        <Divider
          sx={{ width: 60, mx: "auto", mb: 3, borderColor: "#1f1c2c" }}
        />
        <Typography variant="body1" sx={{ color: "#555", mb: 2 }}>
          Our mission is to create innovative, scalable, and impactful digital
          solutions that help businesses thrive in the modern era.
        </Typography>
        <Typography variant="body1" sx={{ color: "#555" }}>
          With a vision to become a trusted technology partner worldwide, we
          combine technical expertise with transparent processes to deliver
          excellence.
        </Typography>
      </Box>

      {/* Services Section */}
      <Box sx={{ maxWidth: "1280px", mx: "auto", mt: 8, px: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          Our Core Services
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          mb={6}
          sx={{ color: "#555" }}
        >
          Comprehensive solutions designed to meet your business needs with
          speed, precision, and transparency.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3, // spacing between cards
            justifyContent: "center",
            maxWidth: "1280px",
            mx: "auto",
            mt: 8,
            px: 2,
          }}
        >
          {services.map((service, index) => (
            <Paper
              key={index}
              elevation={2}
              sx={{
                flex: "1 1 calc(50% - 24px)", // 4 per row on large
                "@media (max-width: 1200px)": { flex: "1 1 calc(50% - 24px)" }, // 3 per row
                "@media (max-width: 900px)": { flex: "1 1 calc(50% - 24px)" }, // 2 per row
                "@media (max-width: 600px)": { flex: "1 1 100%" }, // 1 per row
                borderRadius: 3,
                p: 4,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                backgroundColor: "#1e1e1e", // dark mode
                color: "#f5f5f5",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#2a2a2a",
                  transform: "translateY(-6px)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                },
              }}
            >
              <Box sx={{ fontSize: 40, color: "#00bcd4" }}>{service.icon}</Box>
              <Typography variant="h5" fontWeight="bold">
                {service.title}
              </Typography>
              <Typography variant="body1" sx={{ color: "#ccc", flexGrow: 1 }}>
                {service.description}
              </Typography>
              <Box>
                {service.features.map((f, i) => (
                  <Typography
                    key={i}
                    variant="body2"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mt: 0.5,
                      color: "#bbb",
                    }}
                  >
                    ✅ {f}
                  </Typography>
                ))}
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ServicePage;
