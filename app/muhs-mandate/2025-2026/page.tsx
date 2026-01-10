'use client';

import React from 'react';
import Link from 'next/link';

export default function MUHSMandate20252026() {
  const mandateData = [
    { annexure: 'ANNEXURE – I', file1: 'View', file2: '–' },
    { annexure: 'ANNEXURE – II', file1: 'View', file2: '–' },
    { annexure: 'ANNEXURE – III', file1: 'View', file2: '–' },
    { annexure: 'ANNEXURE – IV', file1: 'View', file2: '–' },
    { annexure: 'ANNEXURE – V', file1: 'View', file2: '–' },
    { annexure: 'ANNEXURE – VI', file1: 'View', file2: '–' },
    { annexure: 'ANNEXURE – VII', file1: 'View', file2: '–' },
    { annexure: 'ANNEXURE – VIII', file1: 'View', file2: '–' },
    { annexure: 'ANNEXURE – IX', file1: 'View', file2: '–' },
    { annexure: 'ANNEXURE – X', file1: 'View', file2: '–' },
    { annexure: 'ANNEXURE – XI', file1: 'View', file2: '–' },
    { annexure: 'ANNEXURE – XII', file1: 'View', file2: '–' },
    { annexure: 'ANNEXURE – XIII', file1: 'View', file2: '–' },
    { annexure: 'ANNEXURE – XIV', file1: 'View', file2: '–' },
  ];

  // Mapping object for PDF links for 2025-2026 (using same links as 2024-2025 for now)
  const pdfLinks: Record<string, { file1: string | null; file2: string | null }> = {
    'ANNEXURE – I': {
      file1: 'https://brharnephysiotherapy.com/muhs1/Annexure%20-%20I/ANNEXURE%20-%20I.pdf',
      file2: null
    },
    'ANNEXURE – II': {
      file1: 'https://brharnephysiotherapy.com/muhs1/Annexure%20-%20II/ANNEXURE%20-%20II.pdf',
      file2: null
    },
    'ANNEXURE – III': {
      file1: 'https://brharnephysiotherapy.com/muhs1/Annexure%20-%20III/ANNEXURE%20-%20III.pdf',
      file2: null
    },
    'ANNEXURE – IV': {
      file1: 'https://brharnephysiotherapy.com/muhs1/Annexure%20-%20IV/ANNEXURE%20-%20IV.pdf',
      file2: null
    },
    'ANNEXURE – V': {
      file1: 'https://brharnephysiotherapy.com/muhs1/Annexure%20-%20V/ANNEXURE%20-%20V.pdf',
      file2: null
    },
    'ANNEXURE – VI': {
      file1: 'https://brharnephysiotherapy.com/muhs1/Annexure%20-%20VI/ANNEXURE%20-%20VI.pdf',
      file2: null
    },
    'ANNEXURE – VII': {
      file1: 'https://brharnephysiotherapy.com/muhs1/Annexure%20-%20VII/ANNEXURE%20-%20VII.pdf',
      file2: null
    },
    'ANNEXURE – VIII': {
      file1: 'https://brharnephysiotherapy.com/muhs1/Annexure%20-%20VIII/ANNEXURE%20-%20VIII.pdf',
      file2: null
    },
    'ANNEXURE – IX': {
      file1: 'https://brharnephysiotherapy.com/muhs1/Annexure%20-%20IX/ANNEXURE%20-%20IX.pdf',
      file2: null
    },
    'ANNEXURE – X': {
      file1: 'https://brharnephysiotherapy.com/muhs1/Annexure%20-%20X/ANNEXURE%20-%20X.pdf',
      file2: null
    },
    'ANNEXURE – XI': {
      file1: 'https://brharnephysiotherapy.com/muhs1/Annexure%20-%20XI/ANNEXURE%20-%20XI.pdf',
      file2: null
    },
    'ANNEXURE – XII': {
      file1: 'https://brharnephysiotherapy.com/muhs1/Annexure%20-%20XII/ANNEXURE%20-%20XII.pdf',
      file2: null
    },
    'ANNEXURE – XIII': {
      file1: 'https://brharnephysiotherapy.com/muhs1/Annexure%20-%20XIII/ANNEXURE%20-%20XIII.pdf',
      file2: null
    },
    'ANNEXURE – XIV': {
      file1: 'https://brharnephysiotherapy.com/muhs1/Annexure%20-%20XIV/ANNEXURE%20-%20XIV.pdf',
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
              MUHS Mandate 2025-2026
            </h1>
          </div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Official annexures and documents as per Maharashtra University of Health Sciences guidelines
          </p>
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
      </div>
    </main>
  );
}