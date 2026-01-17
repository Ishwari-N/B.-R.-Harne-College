'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownItems = {
    about: [
      { name: 'About College', path: '/about/college' },
      { name: 'President Desk', path: '/about/president-desk' },
      { name: 'Treasurer Desk', path: '/about/treasurer-desk' },
      { name: 'Principal Desk', path: '/about/principal-desk' },
    ],
    course: [
      { name: 'Under Graduate Courses', path: ' ' },
      { name: 'Documents List', path: '/course/documents-list' },
    ],
    faculty: [
      { name: 'Teaching Staff', path: '/faculty/teaching' },
      { name: 'Non-Teaching Staff', path: '/faculty/non-teaching' },
    ],
    committee: [
      { name: 'Grievance Redressal Committee', path: '/committee/grievance-redressal' },
      { name: 'Vishakha Committee', path: '/committee/vishakha' },
      { name: 'Anti-Ragging Committee', path: '/committee/anti-ragging' },
      { name: 'Local Managing Committee', path: '/committee/local-managing' },
    ],
    admissions: [
      { name: 'Fee Details', path: 'https://brharnephysiotherapy.com/assets/document/B%20R%20Harne%20College%20of%20Physiotherapy%20Fee%20Structure%202025-26....pdf', external: true },
      { name: 'Admission Details', path: 'https://brharnephysiotherapy.com/assets/document/Admission%20Procedure%20for%20BPT.pdf', external: true },
      { name: 'Committee Notice', path: 'https://brharnephysiotherapy.com/assets/document/Scrutiny%20Committee%20Notice.pdf', external: true },
      { name: 'Vacancy Notice', path: 'https://brharnephysiotherapy.com/assets/document/Vacancy%20Notice.pdf', external: true },
      { name: 'Application for SQ', path: 'https://brharnephysiotherapy.com/assets/document/Application%20for%20SQ.pdf', external: true },
      { name: 'Application for IQ', path: 'https://brharnephysiotherapy.com/assets/document/Application%20for%20IQ.pdf', external: true },
    ],
    department: [
      { name: 'Fund. of Electrotherapy', path: '/department/electrotherapy' },
      { name: 'Fund. of Kinesiotherapy', path: '/department/kinesiotherapy' },
      { name: 'Human Anatomy', path: '/department/human-anatomy' },
      { name: 'Human Physiology', path: '/department/human-physiology' },
    ],
    'muhs-mandate': [
      { name: 'MUHS Mandate 2024–2025', path: '/muhs-mandate/2024-2025' },
      { name: 'MUHS Mandate 2025–2026', path: '/muhs-mandate/2025-2026' },
      { name: 'MUHS Exam College Rankers', path: '/muhs-mandate/rankers' },
    ],
  };

  const regularItems = ['Syllabus', 'Events', 'Contact'];

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const handleLinkClick = (path: string, isExternal: boolean, event?: React.MouseEvent) => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    if (isExternal) {
      // For external links, open in new tab
      window.open(path, '_blank');
      if (event) {
        event.preventDefault();
      }
    }
  };

  return (
    <header className="w-full shadow-md bg-white sticky top-0 z-50">
      {/* Header */}
      <div className="w-full py-2 bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-2">
          {/* Mobile Header - Simplified */}
          <div className="md:hidden flex items-center justify-between py-2 px-1">
            {/* Mobile Logo */}
            <img
              src="/weblogo.png"
              alt="College Logo"
              className="w-18 h-18 object-contain"
            />
            
            {/* College Name - Mobile - Centered */}
            <div className="flex-1 text-center px-1">
              <p className="text-[8px] font-sans font-extrabold uppercase text-[#DC3545] leading-tight">
                JAI SHRI SIDDHIVINAYAK FOUNDATION'S
              </p>
              <h1 className="text-sm font-bold text-[#B74C70] leading-tight mt-0.5">
                B. R. Harne College of Physiotherapy
              </h1>
            </div>

            {/* Mobile Menu Button - On Right */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-[#F39C12]"
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Header */}
          <div className="hidden md:flex items-center justify-between gap-2">
            {/* Left Logo */}
            <img
              src="/weblogo.png"
              alt="College Logo"
              className="w-20 h-20 lg:w-35 lg:h-35 object-contain"
            />

            {/* Center Text Content */}
            <div className="flex-grow text-center px-2">
              {/* Foundation Name - Red Color */}
              <p className="text-xs lg:text-sm font-sans font-extrabold uppercase text-[#DC3545] leading-tight">
                JAI SHRI SIDDHIVINAYAK FOUNDATION'S
              </p>

              {/* College Name - Dark Blue */}
              <h1 className="text-xl lg:text-4xl font-bold text-[#B74C70] -tracking-wide leading-tight mt-0.5">
                B. R. Harne College of Physiotherapy
              </h1>

              {/* Address - Black */}
              <p className="text-[#F39C12] text-xs lg:text-sm font-sans font-bold leading-tight mt-0.5">
                Karav, Vangani (W), Ambernath, Dist : Thane - 421503
              </p>

              {/* Recognition - Green */}
              <p className="text-[#536678] text-xs lg:text-sm font-bold font-sans leading-tight mt-2">
                Recognized by the Govt. of Maharashtra
              </p>

              {/* Affiliation - Dark Blue/Brown */}
              <p className="text-[#4c5a68] text-xs lg:text-sm font-bold font-sans leading-tight">
                Affiliated to Maharashtra University of Health Sciences - Nashik
              </p>
            </div>

            {/* Right Logo */}
            <img
              src="/foundation-2.png"
              alt="Foundation Logo"
              className="w-20 h-20 lg:w-35 lg:h-35 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:block w-full bg-gradient-to-r from-[#0bc22d] to-[#F39C12]">
        <div className="px-2 py-1.5 text-sm max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1">
            <Link
              href="/"
              className="font-bold text-white hover:text-black transition-colors text-sm px-2 py-1"
            >
              Home
            </Link>

            {Object.entries(dropdownItems).map(([key, items]) => (
              <div
                key={key}
                className="relative group"
              >
                <button
                  className="font-semibold text-white hover:text-black transition-colors text-sm px-2 py-1 flex items-center gap-1 focus:outline-none"
                >
                  {key === 'muhs-mandate' ? 'MUHS-Mandate' : 
                    key.split('-').map(word => 
                      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                    ).join(' ')
                  }
                  <span className="text-[6px] transition-transform duration-200 group-hover:rotate-180">▼</span>
                </button>
                
                {/* DROPDOWN BOX - Hidden by default, shown on hover */}
                <div className="absolute left-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border-t-4 border-[#F39C12] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex flex-col py-2">
                    {items.map((item: any) => (
                      item.external ? (
                        <a
                          key={item.path}
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 text-xs font-medium text-gray-800 hover:bg-gradient-to-r hover:from-yellow-100 hover:to-yellow-100 hover:text-[#0F2A44] transition-all duration-150 flex items-center justify-between"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {item.name}
                          <span className="text-[10px]">↗</span>
                        </a>
                      ) : (
                        <Link
                          key={item.path}
                          href={item.path}
                          className="px-3 py-1.5 text-xs font-medium text-gray-800 hover:bg-gradient-to-r hover:from-yellow-100 hover:to-yellow-100 hover:text-[#0F2A44] transition-all duration-150"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {item.name}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {regularItems.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="font-bold text-white hover:text-black transition-colors text-sm px-2 py-1"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navbar - Full Screen Overlay (Full White Background) */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white overflow-y-auto">
          {/* Mobile Nav Header with Logo and Close Button */}
          <div className="sticky top-0 bg-gradient-to-r from-[#0bc22d] to-[#F39C12] p-3 flex items-center justify-between">
            <div className="flex items-center">
              {/* Web Logo in header */}
              <img
                src="/weblogo.png"
                alt="College Logo"
                className="w-10 h-10 object-contain mr-3 bg-white rounded-full p-1"
              />
              <div>
                <h2 className="text-white font-bold text-base">B. R. Harne College</h2>
                <p className="text-white/80 text-xs">of Physiotherapy</p>
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1 text-white hover:text-black"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Nav Content - Full White Background, No Cards */}
          <div className="p-4 bg-white">
            {/* Home Link with Icon */}
            <div className="mb-3">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center py-3 px-3 font-bold text-gray-800 text-sm hover:bg-gray-50 rounded-lg transition-colors"
              >
                <span className="mr-3 text-lg">🏠</span>
                <span>Home</span>
              </Link>
            </div>

            {/* Dropdown Items with Icons - No Cards, Just List */}
            {Object.entries(dropdownItems).map(([key, items]) => (
              <div key={key} className="mb-2">
                <button
                  onClick={() => toggleDropdown(key)}
                  className="w-full flex items-center justify-between py-3 px-3 font-semibold text-gray-800 text-sm hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center">
                    <span className="mr-3 text-lg">
                      {key === 'about' ? 'ℹ️' : 
                       key === 'course' ? '📚' : 
                       key === 'faculty' ? '👨‍🏫' : 
                       key === 'committee' ? '👥' : 
                       key === 'admissions' ? '🎓' : 
                       key === 'department' ? '🏢' : 
                       key === 'muhs-mandate' ? '📜' : '📌'}
                    </span>
                    <span>
                      {key === 'muhs-mandate' ? 'MUHS-Mandate' : 
                        key.split('-').map(word => 
                          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                        ).join(' ')
                      }
                    </span>
                  </div>
                  <span className={`transform transition-transform text-xs ${openDropdown === key ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                
                {openDropdown === key && (
                  <div className="mt-1 ml-10 space-y-1">
                    {items.map((item: any) => (
                      item.external ? (
                        <a
                          key={item.path}
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setOpenDropdown(null);
                          }}
                          className="block py-2 px-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors flex items-center justify-between"
                        >
                          {item.name}
                          <span className="text-[10px]">↗</span>
                        </a>
                      ) : (
                        <Link
                          key={item.path}
                          href={item.path}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setOpenDropdown(null);
                          }}
                          className="block py-2 px-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          {item.name}
                        </Link>
                      )
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Regular Items with Icons - No Cards */}
            <div className="space-y-2">
              {regularItems.map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center py-3 px-3 font-bold text-gray-800 text-sm hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span className="mr-3 text-lg">
                    {item === 'Syllabus' ? '📖' : 
                     item === 'Events' ? '📅' : 
                     '📞'}
                  </span>
                  <span>{item}</span>
                </Link>
              ))}
            </div>

            {/* Footer Info in Mobile Menu */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-center">
                <p className="text-xs text-gray-600 mb-2">Developed by</p>
                <p className="font-bold text-gray-800 text-sm">BIZONANCE</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* REMOVED: Mobile Compact Horizontal Navbar - Completely removed */}
      {/* No horizontal navbar on mobile, only vertical menu when hamburger is clicked */}
    </header>
  );
}