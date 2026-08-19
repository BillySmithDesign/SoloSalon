import Script from 'next/script';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://solosalon.vercel.app'),
  title: 'SoloSalon — Simple booking for solo salon operators',
  description:
    'Free, open-source online booking for independent stylists, home salons and chair renters.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'SoloSalon',
    title: 'SoloSalon — Your bookings. Your business.',
    description:
      'Free, open-source online booking for independent stylists, home salons and chair renters.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SoloSalon — Your bookings. Your business.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoloSalon — Your bookings. Your business.',
    description:
      'Free, open-source online booking for independent stylists, home salons and chair renters.',
    images: ['/og-image.png'],
  },
  icons: { icon: '/icon.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU">
      <body>
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-BPYHL8CHQN" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BPYHL8CHQN');
          `}
        </Script>
      </body>
    </html>
  );
}
