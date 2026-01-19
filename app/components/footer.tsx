'use client';

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-950 py-8 mt-5">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-120">
          {/* College Info - Left side */}
          <div className="space-y-4">
            <h4 className="text-black font-bold text-lg mb-4">B. R. Harne College Of Physiotherapy</h4>
            <p className="text-sm leading-relaxed text-gray-700">
              Leading the way in Physiotherapy education and clinical excellence. Affiliated with MUHS Nashik.
            </p>
          </div>
          
          {/* Follow Us - Right side */}
          <div className="space-y-7">
            <h4 className="text-black font-bold text-lg mb-3">Follow Us On</h4>
            <div className="flex gap-2">
              {/* Facebook */}
              <a href="https://www.facebook.com/pg/PRPOTE" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="group">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-105">
                  <FaFacebookF className="w-5 h-5 text-white" />
                </div>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/prpote/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center hover:opacity-90 transition-all duration-300 hover:scale-105">
                  <FaInstagram className="w-5 h-5 text-white" />
                </div>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/p-r-pote-patil-college-of-medical-sciences-ayurveda-amravati/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="group">
                <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-800 transition-all duration-300 hover:scale-105">
                  <FaLinkedinIn className="w-5 h-5 text-white" />
                </div>
              </a>

              {/* YouTube */}
              <a href="https://www.youtube.com/channel/UC1j0X3w9q4Q8V5Y6y2v7uJQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="group">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition-all duration-300 hover:scale-105">
                  <FaYoutube className="w-5 h-5 text-white" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 md:mt-10 pt-5 border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            {/* Copyright - Stacked on mobile, side by side on sm+ */}
            <div className="text-center sm:text-start text-sm sm:text-base">
              © 2025 B. R. Harne College of Physiotherapy. All Rights Reserved.
            </div>
            
            {/* Developed by - Stacked on mobile, side by side on sm+ */}
            <div className="text-center sm:text-end">
              <div className="inline-flex items-center gap-2 text-sm sm:text-[15px] font-medium">
                <span>Developed by</span>
                <a href="https://bizonance.in/" target="_blank" rel="noopener noreferrer">
                  <img 
                    id="bizo" 
                    src="/bzionance.png" 
                    alt="Bizonance logo"
                    className="h-5 sm:h-6 w-auto hover:opacity-90 transition-opacity"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}