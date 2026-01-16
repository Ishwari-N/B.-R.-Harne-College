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
    <footer className="bg-gray-900 text-gray-300 py-8 mt-5">
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
{/*Follow Us*/}
<div>
  <h4 className="text-white font-bold text-lg mb-4">Follow Us On</h4>
  <div className="flex flex-wrap gap-3">

    {/* Facebook */}
    <a href="https://www.facebook.com/pg/PRPOTE" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="group">
      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:opacity-90 transition-all duration-300">
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.676V1.325C24 .593 23.406 0 22.675 0z"/>
        </svg>
      </div>
    </a>

    {/* Instagram */}
    <a href="https://www.instagram.com/prpote/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center hover:opacity-90 transition-all duration-300">
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </div>
    </a>

    {/* LinkedIn */}
    <a href="https://www.linkedin.com/in/p-r-pote-patil-college-of-medical-sciences-ayurveda-amravati/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="group">
  <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center hover:opacity-90 transition-all duration-300">
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76c.966 0 1.75.79 1.75 1.76s-.784 1.76-1.75 1.76zm13.5 11.27h-3v-5.5c0-1.31-.027-3-1.828-3-1.832 0-2.112 1.43-2.112 2.905v5.595h-3v-10h2.884v1.367h.041c.402-.762 1.382-1.565 2.845-1.565 3.04 0 3.6 2 3.6 4.595v5.603z"/>
    </svg>
  </div>
</a>

    {/* YouTube */}
    <a href="https://www.youtube.com/channel/UC1j0X3w9q4Q8V5Y6y2v7uJQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="group">
      <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:opacity-90 transition-all duration-300">
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
        </svg>
      </div>
    </a>
  </div>
</div>
      </div>
      
      <div className="max-w-7xl mx-auto px-2 py-1 mt-1 pt-2 border-t border-gray-800 text-center text-xs">
      </div>

     <div className="text-start py-1 border-t bg-gray-900 text-sm text-gray-100">
  <div className="grid grid-cols-2 items-center">
    {/* Copyright - left side */}
    <div className="text-start">
      © 2025 B. R. Harne College of Physiotherapy. All Rights Reserved.
    </div>
    
    {/* Developed by - right side */}
    <div className="text-end">
      <div className="inline-flex items-center gap-2 text-lg font-semibold">
        <span>Developed by</span>
        <a 
          href="https://bizonance.in/" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <img 
            id="bizo" 
            src="/bzionance.png" 
            alt="Bizonance logo"
            className="h-6 w-auto hover:opacity-90 transition-opacity"
          />
        </a>
      </div>
    </div>
  </div>
</div>
    </footer>
  );
}