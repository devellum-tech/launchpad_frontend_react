'use client';
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
  Link as MuiLink,
} from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);
  const router = useRouter();

  const menuItems = ['Home', 'Services', 'Works', 'About Us', 'Contact'];
  const menuURLs = ['/', 'services', 'Works', 'about', 'contact'];

  const handleClick = (indexProps) => {
    router.push(menuURLs[indexProps]);
    setOpen(false); // close drawer on click (for mobile)
  };

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Box
          sx={{
            width: '100%',
            // width: {
            //   xs: '100%', // 0px - 600px (mobile)
            //   sm: '96%', // 600px - 900px
            //   md: '86%', // 900px+
            // },
            p: '10px 0px 10px 0px',
            mx: 'auto',
            // '@media (min-width: 900px)': {
            //   maxWidth: '86%',
            // },
          }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {/* <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  backgroundColor: 'black',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography fontWeight="bold" fontSize="1.25rem" color="white">
                  D
                </Typography>
              </Box> */}
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  position: 'relative',
                  backgroundColor: 'black',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pl: '2px',
                }}
              >
                <Image
                  src="/logo.png"
                  alt="Devellum Logo"
                  width={30}
                  height={30}
                  style={{ objectFit: 'contain' }}
                />
              </Box>

              <MuiLink component={Link} href="/" underline="none">
                <Typography
                  fontWeight="bold"
                  fontSize={{ xs: '1.5rem', md: '2rem' }}
                  color="black"
                >
                  Devellum
                </Typography>
              </MuiLink>
            </Box>

            {/* Desktop Menu */}
            <Box
              sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}
            >
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  onClick={() => handleClick(index)}
                  sx={{
                    textTransform: 'none',
                    fontSize: '1.05rem',
                    fontWeight: 500,
                  }}
                >
                  {item}
                </Button>
              ))}
              <Link href={'/contact'}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#000',
                    borderRadius: '30px',
                    color: '#fff',
                    textTransform: 'none',
                    fontSize: '1.05rem',
                    px: 3,
                    py: 1,
                    '&:hover': {
                      backgroundColor: '#222',
                    },
                  }}
                >
                  Get Started →
                </Button>
              </Link>
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton
              edge="end"
              sx={{
                display: { xs: 'block', md: 'none' },
                fontSize: '24px',
              }}
              onClick={toggleDrawer}
            >
              ☰
            </IconButton>
          </Toolbar>
        </Box>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
            <Typography fontWeight="bold" fontSize="1.2rem">
              Devellum
            </Typography>
            <Button onClick={toggleDrawer} sx={{ fontSize: '20px', minWidth: 'auto' }}>
              ✕
            </Button>
          </Box>
          <List>
            {menuItems.map((text, index) => (
              <ListItem button key={text} onClick={() => handleClick(index)}>
                <ListItemText
                  primary={text}
                  slotProps={{
                    primary: {
                      typographyProps: { fontSize: '1.05rem', fontWeight: 500 },
                    },
                  }}
                />
              </ListItem>
            ))}
            <ListItem>
              <Link href={'/contact'}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: '#000',
                    borderRadius: '30px',
                    color: '#fff',
                    textTransform: 'none',
                    fontSize: '1.05rem',
                    px: 3,
                    py: 1,
                    '&:hover': {
                      backgroundColor: '#222',
                    },
                  }}
                >
                  Get Started →
                </Button>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;

