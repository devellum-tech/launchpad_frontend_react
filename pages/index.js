import Head from 'next/head';
import { Geist, Geist_Mono } from 'next/font/google';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Loader from '@/components/Loader';
import dynamic from 'next/dynamic';

const Launch = dynamic(() => import('@/components/Launch'), {
  ssr: false,
  loading: () => <Loader />,
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
      <Head>
        <title>Devellum</title>
        <meta name="description" content="Devellum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Launch />
    </div>
  );
}

