'use client';

import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  // Quick Links with paths to your quick-links folder
  const quickLinks = [
    { name: 'Academic Calendar', path: '/quick-links/academic-calendar' },
    { name: 'Student Portal', path: '/quick-links/student-portal' },
    { name: 'Library Resources', path: '/quick-links/library-resources' },
    { name: 'Careers', path: '/quick-links/careers' },
  ];

  return (
    <footer className="bg-gray-100 text-gray-950 py-8 mt-2">
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-35">
        <div>
          <h4 className="text-black font-bold text-lg mb-4">B. R. Harne College Of Physiotherapy</h4>
          <p className="text-sm leading-relaxed">
            Leading the way in Physiotherapy education and clinical excellence. Affiliated with MUHS Nashik.
          </p>
        </div>
        
        <div>
          <h4 className="text-black font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  href={link.path}
                  className="hover:text-emerald-950 transition-colors duration-200 block">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Follow Us */}
        <div>
          <h4 className="text-black font-bold text-lg mb-4">Follow Us On</h4>
          <div className="flex flex-wrap gap-2">
            {/* Facebook */}
            <a href="https://www.facebook.com/pg/PRPOTE" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="group">
              <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center hover:opacity-90 transition-all duration-300">
                <FaFacebookF className="w-5 h-5 text-white" />
              </div>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/prpote/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center hover:opacity-90 transition-all duration-300">
                <FaInstagram className="w-5 h-5 text-white" />
              </div>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/p-r-pote-patil-college-of-medical-sciences-ayurveda-amravati/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="group">
              <div className="w-9 h-9 rounded-full bg-blue-700 flex items-center justify-center hover:opacity-90 transition-all duration-300">
                <FaLinkedinIn className="w-5 h-5 text-white" />
              </div>
            </a>

            {/* YouTube */}
            <a href="https://www.youtube.com/channel/UC1j0X3w9q4Q8V5Y6y2v7uJQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="group">
              <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center hover:opacity-90 transition-all duration-300">
                <FaYoutube className="w-5 h-5 text-white" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Added spacing between content and copyright line */}
      <div className="mt-10 pt-5 border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 items-center">
          {/* Copyright - left side */}
          <div className="text-start">
            © 2025 B. R. Harne College of Physiotherapy. All Rights Reserved.
          </div>
          
          {/* Developed by - right side */}
          <div className="text-end">
            <div className="inline-flex items-center gap-2 text-[15px] font-medium">
              <span>Developed by</span>
              <a   href="https://bizonance.in/"  target="_blank" rel="noopener noreferrer"  >
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