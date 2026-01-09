'use client';

import React from 'react';
import Link from 'next/link';

export default function MUHSMandate20242025() {
  const mandateData = [
    { annexure: 'ANNEXURE – I', file1: 'View', file2: 'View' },
    { annexure: 'ANNEXURE – II', file1: 'View', file2: 'View' },
    { annexure: 'ANNEXURE – III', file1: 'View', file2: 'View' },
    { annexure: 'ANNEXURE – IV', file1: 'View', file2: '–' },
    { annexure: 'ANNEXURE – V', file1: 'View', file2: '–' },
    { annexure: 'ANNEXURE – VI', file1: 'View', file2: '–' },
    { annexure: 'ANNEXURE – VII', file1: 'View', file2: '–' },
    { annexure: 'ANNEXURE – VIII', file1: 'View', file2: '–' },
    { annexure: 'ANNEXURE – IX', file1: 'View', file2: 'View' },
    { annexure: 'ANNEXURE – X', file1: 'View', file2: '–' },
    { annexure: 'ANNEXURE – XI', file1: 'View', file2: '–' },
    { annexure: 'ANNEXURE – XII', file1: 'View', file2: '–' },
    { annexure: 'ANNEXURE – XIII', file1: 'View', file2: '–' },
    { annexure: 'ANNEXURE – XIV', file1: 'View', file2: '–' },
    { annexure: 'ANNEXURE – XVII', file1: 'View', file2: '–' },
  ];

  // Mapping object for PDF links
  const pdfLinks: Record<string, { file1: string | null; file2: string | null }> = {
    'ANNEXURE – I': {
      file1: 'https://brharnephysiotherapy.com/muhs/Annexure%20-%20I/1.pdf',
      file2: 'https://brharnephysiotherapy.com/muhs/Annexure%20-%20I/2.pdf'
    },
    'ANNEXURE – II': {
      file1: 'https://brharnephysiotherapy.com/muhs/Annexure%20-%20II/1.pdf',
      file2: 'https://brharnephysiotherapy.com/muhs/Annexure%20-%20II/2.pdf'
    },
    'ANNEXURE – III': {
      file1: 'https://brharnephysiotherapy.com/muhs/Annexure%20-%20III/1.pdf',
      file2: 'https://brharnephysiotherapy.com/muhs/Annexure%20-%20III/Trust%20Registraion.pdf'
    },
    'ANNEXURE – IV': {
      file1: 'https://brharnephysiotherapy.com/muhs/Annexure%20-%20IV/1.pdf',
      file2: null
    },
    'ANNEXURE – V': {
      file1: 'https://brharnephysiotherapy.com/muhs/Annexure%20-%20V/1.pdf',
      file2: null
    },
    'ANNEXURE – VI': {
      file1: 'https://brharnephysiotherapy.com/muhs/Annexure%20-%20VI/1.pdf',
      file2: null
    },
    'ANNEXURE – VII': {
      file1: 'https://brharnephysiotherapy.com/muhs/Annexure%20-%20VII/1.pdf',
      file2: null
    },
    'ANNEXURE – VIII': {
      file1: 'https://brharnephysiotherapy.com/muhs/Annxexure%20-%20VIII/Annexure%20-%20VIII.pdf',
      file2: null
    },
    'ANNEXURE – IX': {
      file1: 'https://brharnephysiotherapy.com/muhs/Annexure%20-%20IX/1.pdf',
      file2: 'https://brharnephysiotherapy.com/muhs/Annexure%20-%20IX/Annrxure%20-%20IX.pdf'
    },
    'ANNEXURE – X': {
      file1: 'https://brharnephysiotherapy.com/muhs/Annexure%20-%20X/1.pdf',
      file2: null
    },
    'ANNEXURE – XI': {
      file1: 'https://brharnephysiotherapy.com/muhs/Annexure%20-%20XI/p1.pdf',
      file2: null
    },
    'ANNEXURE – XII': {
      file1: 'https://brharnephysiotherapy.com/muhs/Annxexure%20-%20XII/1.pdf',
      file2: null
    },
    'ANNEXURE – XIII': {
      file1: 'https://brharnephysiotherapy.com/muhs/Annexure%20-%20XIII/AISHE.pdf',
      file2: null
    },
    'ANNEXURE – XIV': {
      file1: 'https://brharnephysiotherapy.com/muhs/Annexure%20-%20XIV/1.pdf',
      file2: null
    },
    'ANNEXURE – XVII': {
      file1: 'https://brharnephysiotherapy.com/muhs/Annexure%20-%20XVII/1.pdf',
      file2: null
    },
  };

  const handleFileClick = (link: string | null) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#0bc22d]/10 to-[#F39C12]/10 flex items-center justify-center">
              <span className="text-2xl">📋</span>
            </div>
            <h1 className="text-3xl md:text-3xl font-bold text-gray-800">
              MUHS Mandate 2024-2025
            </h1>
          </div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Official annexures and documents as per Maharashtra University of Health Sciences guidelines
          </p>
        </div>

        {/* Information Card */}
        <div className="bg-gradient-to-r from-[#0bc22d]/5 to-[#F39C12]/5 rounded-xl p-2 mb-5 border border-[#F39C12]/20">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-lg">ℹ️</span> About MUHS Mandate
              </h3>
              <p className="text-gray-700 text-sm">
                The Maharashtra University of Health Sciences (MUHS) mandate outlines the academic regulations, 
                curriculum, and guidelines for health science institutions for the academic year 2024-2025.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-1">
                <span className="text-lg">📅</span> Academic Year
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Year:</span>
                  <span className="font-medium text-[#0bc22d]">2024-2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Issued By:</span>
                  <span className="font-medium">MUHS Nashik</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Effective From:</span>
                  <span className="font-medium">June 1, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white p-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="text-2xl">📄</span>
              Annexures & Documents
            </h2>
            <p className="text-white/80 text-sm mt-1">Click "View" to access the respective documents</p>
          </div>
          
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-5 px-6 text-left text-sm font-bold text-gray-700 border-b border-gray-300">
                    <div className="flex items-center gap-2">
                      <span className="text-[#0bc22d]">#</span>
                      <span>ANNEXURE</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-left text-sm font-bold text-gray-700 border-b border-gray-300">
                    <div className="flex items-center gap-2">
                      <span className="text-[#F39C12]">📁</span>
                      <span>FILE 1</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-left text-sm font-bold text-gray-700 border-b border-gray-300">
                    <div className="flex items-center gap-2">
                      <span className="text-[#F39C12]">📁</span>
                      <span>FILE 2</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {mandateData.map((item, index) => {
                  const links = pdfLinks[item.annexure];
                  
                  return (
                    <tr 
                      key={index}
                      className={`hover:bg-gradient-to-r hover:from-[#0bc22d]/5 hover:to-[#F39C12]/5 transition-all duration-300 ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                      }`}
                    >
                      <td className="py-2 px-6 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0bc22d]/10 to-[#F39C12]/10 flex items-center justify-center">
                            <span className="text-sm font-bold text-gray-700">
                              {index + 1}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800">{item.annexure}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 px-6 border-b border-gray-100">
                        {item.file1 === 'View' ? (
                          <button 
                            onClick={() => handleFileClick(links?.file1)}
                            className="group inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#0bc22d]/10 to-[#F39C12]/10 hover:from-[#0bc22d]/20 hover:to-[#F39C12]/20 text-gray-800 font-medium rounded-lg border border-[#0bc22d]/20 hover:border-[#F39C12]/40 transition-all duration-300 hover:shadow-md"
                          >
                            <svg className="w-4 h-4 text-[#0bc22d] group-hover:text-[#F39C12] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span className="group-hover:text-[#F39C12] transition-colors">View</span>
                          </button>
                        ) : (
                          <span className="text-gray-400">–</span>
                        )}
                      </td>
                      <td className="py-3 px-6 border-b border-gray-100">
                        {item.file2 === 'View' ? (
                          <button 
                            onClick={() => handleFileClick(links?.file2)}
                            className="group inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#0bc22d]/10 to-[#F39C12]/10 hover:from-[#0bc22d]/20 hover:to-[#F39C12]/20 text-gray-800 font-medium rounded-lg border border-[#0bc22d]/20 hover:border-[#F39C12]/40 transition-all duration-300 hover:shadow-md"
                          >
                            <svg className="w-4 h-4 text-[#0bc22d] group-hover:text-[#F39C12] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span className="group-hover:text-[#F39C12] transition-colors">View</span>
                          </button>
                        ) : (
                          <span className="text-gray-400">–</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile Grid View */}
          <div className="md:hidden">
            <div className="p-4">
              <div className="grid grid-cols-1 gap-4">
                {mandateData.map((item, index) => {
                  const links = pdfLinks[item.annexure];
                  
                  return (
                    <div 
                      key={index}
                      className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#F39C12]/50"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0bc22d]/10 to-[#F39C12]/10 flex items-center justify-center">
                            <span className="text-sm font-bold text-gray-700">
                              {index + 1}
                            </span>
                          </div>
                          <div>
                            <div className="font-bold text-gray-800">{item.annexure}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 mt-4">
                        <div className="space-y-2">
                          <p className="text-xs font-medium text-gray-500">FILE 1</p>
                          {item.file1 === 'View' ? (
                            <button 
                              onClick={() => handleFileClick(links?.file1)}
                              className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white text-sm font-medium rounded-lg hover:from-[#0bc22d]/90 hover:to-[#F39C12]/90 transition-all duration-300"
                            >
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              View
                            </button>
                          ) : (
                            <span className="text-gray-400 text-sm">–</span>
                          )}
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-xs font-medium text-gray-500">FILE 2</p>
                          {item.file2 === 'View' ? (
                            <button 
                              onClick={() => handleFileClick(links?.file2)}
                              className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white text-sm font-medium rounded-lg hover:from-[#0bc22d]/90 hover:to-[#F39C12]/90 transition-all duration-300"
                            >
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              View
                            </button>
                          ) : (
                            <span className="text-gray-400 text-sm">–</span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600">📌</span>
              </div>
              <h3 className="font-bold text-gray-800">Important Notes</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">✓</span>
                <span>All documents are in PDF format</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">✓</span>
                <span>Download and save for future reference</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-0.5">✓</span>
                <span>Contact administration for any clarifications</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600">ℹ️</span>
              </div>
              <h3 className="font-bold text-gray-800">Contact Information</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0bc22d]/10 flex items-center justify-center">
                  <span className="text-[#0bc22d]">📧</span>
                </div>
                <div>
                  <p className="text-gray-600">Email</p>
                  <a href="mailto:muhs@brharnephysio.edu.in" className="font-medium text-gray-800 hover:text-[#0bc22d]">
                    muhs@brharnephysio.edu.in
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F39C12]/10 flex items-center justify-center">
                  <span className="text-[#F39C12]">📞</span>
                </div>
                <div>
                  <p className="text-gray-600">Phone</p>
                  <a href="tel:+912225123456" className="font-medium text-gray-800 hover:text-[#F39C12]">
                    +91 22 2512 3456
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}