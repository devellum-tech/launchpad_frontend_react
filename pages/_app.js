// _app.js
import { useEffect, useState } from 'react';
import Loader from '@/components/Loader';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';
import { Box } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
const clientSideEmotionCache = createCache({ key: 'css', prepend: true });
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // ensures client-only UI (like Loader) doesn’t render on SSR
  }, []);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    if (mounted) {
      window.addEventListener('beforeunload', () => setLoading(true)); // optional refresh loader
    }

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [mounted, router]);

  if (!mounted) {
    return null;
  }

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <Box
        sx={{
          width: {
            xs: '100%', // 0px - 600px (mobile)
            sm: '96%', // 600px - 900px
            md: '86%', // 900px+
          },
          mx: 'auto',
          px: 2,
        }}
      >
        <Navbar />
        {loading ? <Loader /> : <Component {...pageProps} />}
      </Box>
      <Footer />
    </CacheProvider>
  );
}

