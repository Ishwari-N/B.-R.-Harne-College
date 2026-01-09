// app/layout.tsx - This should have ONLY ONE Navbar
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar'; // <-- This imports Navbar
import Footer from './components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'B.R. Harne College of Physiotherapy',
  description: 'Official website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <Navbar /> {/* <-- This renders Navbar ONCE */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}