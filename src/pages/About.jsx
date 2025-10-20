import React from 'react';
import { Box, Typography, Grid, Container, Paper } from '@mui/material';

export default function About() {
    return (
        <>
            {/* About Us Section */}
            <Box sx={{ py: 8, backgroundColor: '#fff' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        {/* Left: Text */}
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 'bold',
                                    mb: 3,
                                    fontSize: { xs: '2rem', md: '2.5rem' },
                                    lineHeight: 1.2,
                                }}
                            >
                                About Us
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: { xs: '1rem', md: '1.125rem' },
                                    color: 'text.secondary',
                                    lineHeight: 1.6,
                                }}
                            >
                                We are committed to delivering exceptional solutions that bring value to
                                our clients. Our team of experts works with dedication and passion to help
                                you achieve your business goals. We believe in quality, trust, and
                                building long-term partnerships with our customers.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Core Values Section */}
            <Box sx={{ py: 8, backgroundColor: '#fff' }}>
                <Container maxWidth="lg">
                    <Typography
                        sx={{
                            textAlign: 'center',
                            color: 'green',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                        }}
                    >
                        Core Values
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            mt: 1,
                            mb: 2,
                        }}
                    >
                        Our Values
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: 'center',
                            color: 'text.secondary',
                            maxWidth: '700px',
                            mx: 'auto',
                            mb: 6,
                        }}
                    >
                        Your Trusted Partner in Data Protection with Cutting-Edge Solutions for
                        Comprehensive Data Security.
                    </Typography>

                    {/* Value Cards */}

                    <Grid
                        container
                        spacing={4}
                        sx={{
                            display: 'flex',
                            // flexDirection: { xs: "column", md: "row" }, // column on small, row on medium+
                            // alignItems: "center",
                            justifyContent: 'center',
                        }}
                    >
                        {[
                            {
                                title: 'Innovation',
                                desc: 'Continuously improving and innovating our solutions to stay ahead of cyber threats.',
                            },
                            {
                                title: 'Integrity',
                                desc: 'Upholding the highest standards of honesty and transparency in all our dealings.',
                            },
                            {
                                title: 'Customer-Centric',
                                desc: 'Maintaining the highest levels of honesty and transparency in all our interactions.',
                            },
                        ].map((item) => (
                            <Grid
                                item
                                xs={12}
                                md={4} // 3 columns on desktop
                                key={item.title}
                                sx={{ display: 'flex' }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        textAlign: 'center',
                                        borderRadius: 4,
                                        backgroundColor: '#f9f9f9',
                                        flex: 1,
                                    }}
                                >
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                        {item.title}
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem' }}>
                                        {item.desc}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Stats */}
                    <Grid
                        container
                        spacing={4}
                        sx={{ mt: 6 }}
                        display={'flex'}
                        justifyContent={'center'}
                    >
                        <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                            <Typography sx={{ color: 'text.secondary' }}>
                                Helped over 10 businesses
                            </Typography>
                            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                                10+
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                            <Typography sx={{ color: 'text.secondary' }}>
                                Customer Satisfaction
                            </Typography>
                            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                                97.9%
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                            <Typography sx={{ color: 'text.secondary' }}>
                                Support Availability
                            </Typography>
                            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                                24/7
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
