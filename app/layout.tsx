import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'DentCare Trenčín | Zubná ambulancia',
  description: 'Moderná zubná klinika v Trenčíne. Profesionálna starostlivosť o vaše zuby — estetická stomatológia, implantáty, bielenie zubov.',
  keywords: 'zubná ambulancia, zubár Trenčín, stomatológia, implantáty, bielenie zubov',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
