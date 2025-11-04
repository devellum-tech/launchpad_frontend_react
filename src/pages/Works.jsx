import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Grid,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Project Management SaaS",
    description:
      "A powerful, scalable multi-tenancy project management platform for modern teams with real‐time collaboration, analytics, and role-based access control.",
    image:
      "https://media.planview.com/clarizen/wp-content/upload/2017/06/SAAS-1.jpg",
    tech: ["React", "Node.js", "MongoDB", "SaaS"],
    category: "SaaS",
    // website: "https://pm-saas.demo.com",
  },
  {
    title: "ResumeOCR - AI-Powered Resume Parser",
    description:
      "An AI-driven resume parser built with FastAPI and React that extracts and structures data from resumes in PDF, JPG and PNG formats.",
    image:
      "https://img.freepik.com/free-photo/startup-hr-worker-identifying-right-candidates-job-opening-reviewing-resume_482257-125564.jpg?semt=ais_hybrid&w=740&q=80",
    tech: ["FastAPI", "React", "OpenAI", "TypeScript"],
    category: "AI / NLP",
    // website: "https://resumeocr.demo.com",
  },
  {
    title: "Hungama Artist Aloud",
    description:
      "A platform for independent artists to distribute, promote and monetize original music and creative content across multiple channels.",
    image:
      "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Node.js", "TailwindCSS"],
    category: "Entertainment",
    website: "https://www.hungamaartistaloud.com",
  },
  {
    title: "Huml Health",
    description:
      "An AI-powered telehealth and wearable-based engagement platform offering personalized health solutions and continuous biometrics monitoring.",
    image: "https://images.indianexpress.com/2023/06/Dil-LEAD.jpg",
    tech: ["Next.js", "Node.js", "Healthcare AI", "IoT"],
    category: "Healthcare",
    website: "https://www.huml.health",
  },
  {
    title: "SnapE Cabs",
    description:
      "A next-gen cab-booking platform offering instant, affordable and sustainable rides with smart route optimization and driver analytics.",
    image:
      "https://www.shutterstock.com/image-vector/yellow-cabs-float-air-all-600nw-2203164739.jpg",
    tech: ["React", "Node.js", "Express", "EV Mobility"],
    category: "Mobility / Transport",
    website: "https://snapecabs.com",
  },
  {
    title: "Global Market Insights (GMI)",
    description:
      "A leading market-research firm delivering data-driven insights, industry reports and custom analytics to help organizations grow strategically.",
    image:
      "https://www.questionpro.com/blog/wp-content/uploads/2022/08/marketing-insights.jpg",
    tech: ["Next.js", "Analytics Platform", "B2B SaaS"],
    category: "Market Research",
    website: "https://www.gminsights.com",
  },
  {
  title: "BrandTune – AI-Driven Song Recommender for Brands",
  description:
    "An AI-powered model that analyzes a brand’s values, target audience, tone and campaign goals, then suggests the ideal theme song or music track to match the brand identity.",
  image:
    "https://www.vidnoz.com/bimg/best-similar-song-finders.webp",
  tech: ["Python", "PyTorch", "NLP", "Music Metadata", "Embedding Models"],
  category: "AI / Music Technology",
  // website: "https://brandtune.ai",
}

];

export default function WorkPage() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f7f9fc, #e8edf3)",
        color: "#333",
        py: 8,
        width: "100%",
      }}
    >
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h3" fontWeight="bold" color="#222">
          Our Work Speaks for Itself
        </Typography>
        <Typography
          variant="h6"
          sx={{ mt: 2, color: "#555", maxWidth: "700px", mx: "auto" }}
        >
          From AI-powered solutions to scalable SaaS platforms — see how we turn
          ideas into impactful digital products.
        </Typography>
      </Box>

      {/* Project Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: 4, // spacing between cards
          maxWidth: "1400px",
          mx: "auto",
          px: { xs: 2, md: 0 },
        }}
      >
        {projects.map((project, idx) => (
          <Card
            key={idx}
            sx={{
              height: "100%", // fill the height of the grid cell
              display: "flex",
              flexDirection: "column",
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              },
            }}
          >
            <CardMedia
              component="img"
              height="180"
              image={project.image}
              alt={project.title}
              loading="lazy"
              sx={{ objectFit: "cover" }}
            />
            <CardContent
              sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
            >
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {project.title}
              </Typography>
              <Typography
                variant="body2"
                color="#666"
                sx={{ mb: 2, flexGrow: 1 }}
              >
                {project.description}
              </Typography>
              <Box sx={{ mt: 1, display: "flex", flexWrap: "wrap", gap: 1 }}>
                {project.tech.map((t, i) => (
                  <Chip
                    key={i}
                    label={t}
                    sx={{
                      bgcolor: "#e3f2fd",
                      color: "#1565c0",
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Box>
            </CardContent>
            {project.website && (
              <Box sx={{ p: 2, textAlign: "center" }}>
                <Button
                  href={project.website}
                  target="_blank"
                  rel="noopener"
                  variant="outlined"
                  sx={{
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 600,
                    bgcolor: "#fafafa",
                    color: "#1565c0",
                    borderColor: "#1565c0",
                    "&:hover": {
                      bgcolor: "#e3f2fd",
                      borderColor: "#0d47a1",
                      color: "#0d47a1",
                    },
                  }}
                >
                  Visit Site
                </Button>
              </Box>
            )}
          </Card>
        ))}
      </Box>

      {/* CTA */}
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <Typography variant="h5" fontWeight="bold">
          Let’s Build Something Amazing Together
        </Typography>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: "#1565c0",
              "&:hover": { bgcolor: "#0d47a1" },
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              borderRadius: 3,
            }}
          >
            Contact Us
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
