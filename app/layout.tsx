
import type { Metadata } from 'next';
import { inter } from './fonts';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer'; 

export const metadata: Metadata = {
  title: {
    default: 'ShowKonnect - Hire Musicians and Entertainers',
    template: '%s | ShowKonnect'
  },
  description: 'Find and hire vetted musicians and entertainers near you',
  keywords: 'musicians, entertainers, hire, events, music, performance',
  authors: [{ name: 'ShowKonnect Team' }],
  creator: 'ShowKonnect',
  metadataBase: new URL('https://showkonnect.com'),
  openGraph: {
    title: 'ShowKonnect - Musicians and Entertainers',
    description: 'Find and hire vetted musicians and entertainers near you',
    url: 'https://showkonnect.com',
    siteName: 'ShowKonnect',
    images: [
      {
        url: '/images/entertainer-img.png',
        width: 1200,
        height: 630,
        alt: 'ShowKonnect - Musicians and Entertainers',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShowKonnect - Musicians and Entertainers',
    description: 'Find and hire vetted musicians and entertainers near you',
    images: ['/images/entertainer-img.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}