'use client';

import Link from 'next/link';

export default function Footer() {
  // Quick Links with paths to your quick-links folder
  const quickLinks = [
    { name: 'Academic Calendar', path: '/quick-links/academic-calendar' },
    { name: 'Student Portal', path: '/quick-links/student-portal' },
    { name: 'Library Resources', path: '/quick-links/library-resources' },
    { name: 'Careers', path: '/quick-links/careers' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h4 className="text-white font-bold text-lg mb-4">B. R. Harne College</h4>
          <p className="text-sm leading-relaxed">
            Leading the way in Physiotherapy education and clinical excellence. Affiliated with MUHS Nashik.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  href={link.path}
                  className="hover:text-white transition-colors duration-200 block"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-lg mb-4">Follow Us On</h4>
          <div className="flex gap-4">
            {/* Facebook */}
            <a href="https://www.facebook.com/brhcop/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg className="w-8 h-8 text-blue-600 hover:scale-125 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.676V1.325C24 .593 23.406 0 22.675 0z"/>
              </svg>
            </a>

            {/* Google */}
            <a href="https://www.google.com/search?q=B.+R.+Harne+College+of+Pharmacy" target="_blank" rel="noopener noreferrer" aria-label="Google">
              <svg className="w-8 h-8 hover:scale-125 transition-transform" viewBox="0 0 533.5 544.3">
                <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.4-34.1-4.1-50.3H272v95h146.9c-6.3 34-25.1 62.8-53.6 82v68h86.4c50.5-46.5 79.8-115.1 79.8-194.7z"/>
                <path fill="#34A853" d="M272 544.3c72.6 0 133.5-24.1 178-65.5l-86.4-68c-23.9 16-54.5 25.4-91.6 25.4-70.5 0-130-47.7-151.4-111.3H32.5v69.9c44.1 87.5 134.6 150.5 239.5 150.5z"/>
                <path fill="#FBBC05" d="M120.5 319.1c-10.7-32-10.7-66.8 0-98.8v-69.9H32.5c-39.5 78.8-39.5 172.4 0 251.2l88-82.5z"/>
                <path fill="#EA4335" d="M272 107.1c38.5-.6 73.1 13.2 100.5 39.1l75.3-75.3C406.5 24.7 344.6-.4 272 0 167.1 0 76.6 63 32.5 150.5l88 69.9C142 154.8 201.5 107.1 272 107.1z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/brharnecollegeofpharmacy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg className="w-8 h-8 hover:scale-125 transition-transform" viewBox="0 0 512 512">
                <linearGradient id="insta-gradient" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#feda75"/>
                  <stop offset="25%" stopColor="#fa7e1e"/>
                  <stop offset="50%" stopColor="#d62976"/>
                  <stop offset="75%" stopColor="#962fbf"/>
                  <stop offset="100%" stopColor="#4f5bd5"/>
                </linearGradient>
                <path fill="url(#insta-gradient)" d="M349.33 69.33H162.67C111.41 69.33 69.33 111.41 69.33 162.67v186.67c0 51.26 42.08 93.34 93.34 93.34h186.66c51.26 0 93.34-42.08 93.34-93.34V162.67c0-51.26-42.08-93.34-93.34-93.34zm61.33 280c0 33.92-27.41 61.33-61.33 61.33H162.67c-33.92 0-61.33-27.41-61.33-61.33V162.67c0-33.92 27.41-61.33 61.33-61.33h186.66c33.92 0 61.33 27.41 61.33 61.33v186.66z"/>
                <circle cx="256" cy="256" r="80" fill="url(#insta-gradient)"/>
                <circle cx="390" cy="122" r="20" fill="url(#insta-gradient)"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg className="w-8 h-8 text-blue-700 hover:scale-125 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c — 2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76c.966 0 1.75.79 1.75 1.76s-.784 1.76-1.75 1.76zm13.5 11.27h-3v-5.5c0-1.31-.027-3-1.828-3-1.832 0-2.112 1.43-2.112 2.905v5.595h-3v-10h2.884v1.367h.041c.402-.762 1.382-1.565 2.845-1.565 3.04 0 3.6 2 3.6 4.595v5.603z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-2 py-1 mt-5 pt-5 border-t border-gray-800 text-center text-xs">
      </div>

      <div className="text-start py-0 border-t bg-gray-900 text-sm text-gray-100 space-y-1">
        <div>© 2025 B. R. Harne College of Physiotherapy. All Rights Reserved.</div>
    
        <div className="flex flex-col items-end gap-1">
          <a 
            href="https://bizonance.in/" 
            rel="noopener noreferrer"
            className="hover:text-white text-lg font-semibold"
          >
            Developed by <span className="font-bold tracking-tight">
              <span className="text-blue-400">B</span>
              <span className="text-gray-100 font-semibold italic gap-0.5">i</span>
              <span className="text-blue-400 gap-0.5">z</span>
              <span className="text-blue-400 ">o</span>
              <span className="text-blue-400">n</span>
              <span className="text-blue-400">a</span>
              <span className="text-blue-400">n</span>
              <span className="text-blue-400">c</span>
              <span className="text-blue-400 ">e</span>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}