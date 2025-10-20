import {
    Box,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Chip,
    Grid,
    Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

const projects = [
    {
        title: 'Interactive E-learning Simulation',
        description:
            'A gamified 2D simulation for K–12 learning with real-time analytics and adaptive difficulty.',
        image:
            'https://images.unsplash.com/photo-1596496051056-4085e1c26f88?auto=format&fit=crop&w=800&q=80', // Students + tech
        tech: ['React', 'Node.js', 'Canvas API'],
        category: 'E-learning',
    },
    {
        title: 'Project Management SaaS',
        description:
            'Full-featured SaaS app for managing workspaces, projects, and tasks with real-time collaboration.',
        image:
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80', // Teamwork
        tech: ['Next.js', 'Express', 'MongoDB'],
        category: 'SaaS',
    },
    {
        title: 'Healthcare Appointment System',
        description:
            'HIPAA-compliant booking platform for doctors and patients with video consultation integration.',
        image:
            'https://images.unsplash.com/photo-1580281657521-6c06b6f95a23?auto=format&fit=crop&w=800&q=80', // Healthcare tech
        tech: ['React', 'Firebase', 'Material UI'],
        category: 'Healthcare',
    },
    {
        title: 'E-commerce Storefront',
        description:
            'High-performance online store with dynamic pricing, inventory tracking, and AI-powered recommendations.',
        image:
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80', // Online shopping
        tech: ['Next.js', 'Stripe', 'Tailwind'],
        category: 'E-commerce',
    },
];

export default function WorkPage() {
    return (
        <Box
            sx={{
                background: 'linear-gradient(135deg, #f7f9fc, #e8edf3)',
                color: '#333',
                py: 8,
                width: '100%',
            }}
        >
            {/* Hero Section */}
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography variant="h3" fontWeight="bold" color="#222">
                    Our Work Speaks for Itself
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ mt: 2, color: '#555', maxWidth: '700px', mx: 'auto' }}
                >
                    From interactive educational simulations to scalable enterprise apps — see how
                    we turn ideas into reality.
                </Typography>
            </Box>

            {/* Project Grid (true multi-column 2D layout) */}
            <Grid
                container
                spacing={4}
                sx={{
                    maxWidth: '1400px',
                    mx: 'auto',
                    px: 2,
                }}
            >
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card
                            sx={{
                                borderRadius: 3,
                                overflow: 'hidden',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                transition: 'all 0.3s ease',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                '&:hover': {
                                    transform: 'translateY(-6px)',
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image={project.image}
                                alt={project.title}
                                loading="lazy"
                                sx={{ objectFit: 'cover' }}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" fontWeight="bold">
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#666', mt: 1 }}>
                                    {project.description}
                                </Typography>
                                <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                    {project.tech.map((t, i) => (
                                        <Chip
                                            key={i}
                                            label={t}
                                            sx={{
                                                bgcolor: '#e3f2fd',
                                                color: '#1565c0',
                                                fontWeight: 500,
                                            }}
                                        />
                                    ))}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* CTA */}
            <Box sx={{ textAlign: 'center', mt: 8 }}>
                <Typography variant="h5" fontWeight="bold">
                    Let’s Build Something Amazing Together
                </Typography>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                    <Button
                        variant="contained"
                        sx={{
                            mt: 2,
                            bgcolor: '#1565c0',
                            '&:hover': { bgcolor: '#0d47a1' },
                            px: 4,
                            py: 1.5,
                            fontSize: '1rem',
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
