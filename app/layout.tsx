// app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

// Font configuration
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: {
    default: 'B.R. Harne College of Physiotherapy',
    template: '%s | B.R. Harne College of Physiotherapy',
  },
  description: 'B.R. Harne College of Physiotherapy under Jai Shree Siddhivinayak Foundation - Premier institution for physiotherapy education, research, and clinical practice.',
  keywords: ['physiotherapy', 'BPT', 'college', 'education', 'medical', 'rehabilitation', 'Maharashtra', 'MUHS', 'health sciences'],
  authors: [{ name: 'B.R. Harne College of Physiotherapy' }],
  creator: 'B.R. Harne College of Physiotherapy',
  publisher: 'Jai Shree Siddhivinayak Foundation',
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  metadataBase: new URL('https://brharnephysiotherapy.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://brharnephysiotherapy.com',
    title: 'B.R. Harne College of Physiotherapy',
    description: 'Premier institution for physiotherapy education, research, and clinical practice.',
    siteName: 'B.R. Harne College of Physiotherapy',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'B.R. Harne College of Physiotherapy Campus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B.R. Harne College of Physiotherapy',
    description: 'Premier institution for physiotherapy education, research, and clinical practice.',
    images: ['/og-image.jpg'],
    creator: '@brharnephysio',
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0bc22d" />
        <meta name="msapplication-TileColor" content="#0bc22d" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        
        {/* Google Analytics Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        
        {/* Structured Data for College */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "B.R. Harne College of Physiotherapy",
              "alternateName": "BRHCP",
              "url": "https://brharnephysiotherapy.com",
              "logo": "https://brharnephysiotherapy.com/logo.png",
              "description": "Premier institution for physiotherapy education, research, and clinical practice under Jai Shree Siddhivinayak Foundation.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Karav, Wangani",
                "addressLocality": "Ambarnath",
                "addressRegion": "Maharashtra",
                "postalCode": "421503",
                "addressCountry": "IN"
              },
              "telephone": "+91-9920255543",
              "email": "brharnephysiotherapy6169@gmail.com",
              "founder": "Jai Shree Siddhivinayak Foundation",
              "foundingDate": "2021",
              "sameAs": [
                "https://www.facebook.com/brhcop/",
                "https://www.instagram.com/brharnecollegeofpharmacy/",
                "https://www.linkedin.com/company/br-harne-college"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#0bc22d] text-white px-4 py-2 rounded z-50"
        >
          Skip to main content
        </a>
        
        <Navbar />
        
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        

        <Footer />
        
        {/* Scroll to Top Button */}
        <button
          id="scroll-to-top"
          className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-transparent text-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 transform translate-y-10 hidden md:flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
        
        {/* Scroll to Top Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                const scrollButton = document.getElementById('scroll-to-top');
                
                // Show/hide button based on scroll position
                window.addEventListener('scroll', function() {
                  if (window.scrollY > 300) {
                    scrollButton.classList.remove('opacity-0', 'translate-y-10');
                    scrollButton.classList.add('opacity-100', 'translate-y-0');
                  } else {
                    scrollButton.classList.remove('opacity-100', 'translate-y-0');
                    scrollButton.classList.add('opacity-0', 'translate-y-10');
                  }
                });
                
                // Scroll to top functionality
                scrollButton.addEventListener('click', function() {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                });
                
                // Initialize Intersection Observer for animations
                const observerOptions = {
                  threshold: 0.1,
                  rootMargin: '0px 0px -50px 0px'
                };
                
                const observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('animate-in');
                    }
                  });
                }, observerOptions);
                
                // Observe elements with data-animate attribute
                document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
              });
            `,
          }}
        />
      </body>
    </html>
  );
}