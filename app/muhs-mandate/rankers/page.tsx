'use client';

import Link from 'next/link';

export default function RankersPage() {
  const rankerData = [
    {
      id: 1,
      session: "WINTER 2024",
      pdfUrl: "https://brharnephysiotherapy.com/assets/document/Academic%20Ranker%20Winter%202024.pdf",
      fileName: "Academic Ranker Winter 2024.pdf"
    },
    {
      id: 2,
      session: "SUMMER 2025",
      pdfUrl: "https://brharnephysiotherapy.com/assets/document/Academic%20Ranker%20Summer%202025.pdf",
      fileName: "Academic Ranker Summer 2025.pdf"
    }
  ];

  const openPdfInNewTab = (url: string, fileName: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Page Header */}
        <div className="text-center mb-12 pt-3.5">
          <div className="inline-flex items-center gap-4 mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#0F2A44]">
                MUHS Exam College Rankers
              </h1>
              <p className="text-lg text-gray-600 mt-1">
                Academic Achievement Records
              </p>
            </div>
          </div>
        </div>
     {/* Rankers Table */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white p-3">
            <h2 className="text-xl font-bold flex items-center gap-3">
              Academic Session Results
            </h2>
            <p className="text-green-100 text-sm mt-1">MUHS Exam Rankers - Winter 2024 & Summer 2025</p>
          </div>
          
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <tbody className="divide-y divide-gray-100">
                {rankerData.map((item, index) => (
                  <tr 
                    key={item.id}
                    className={`hover:bg-gray-50 transition-colors duration-200 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                    }`}
                  >
                    <td className="py-4 px-6 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-3">
                          <div className="text-lg font-medium text-gray-800">
                           {index + 1}.
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="font-bold text-gray-800">{item.session}</div>
                          <div className="text-sm text-gray-500">MUHS Examination Results</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="font-medium text-gray-800">{item.fileName}</div>
                          <div className="text-xs text-gray-500">PDF Document</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 border-b border-gray-100">
                      <button
                        onClick={() => openPdfInNewTab(item.pdfUrl, item.fileName)}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg ${
                          index === 0
                            ? 'bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white hover:from-[#0bc22d] hover:to-green-700 hover:cursor-pointer'
                            : 'bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white hover:from-[#0bc22d] hover:to-orange-600 hover:cursor-pointer'
                        }`}
                      >
                        <span>View PDF</span>
                        <span className="text-lg">📖</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden">
            <div className="p-4 space-y-4">
              {rankerData.map((item, index) => (
                <div 
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        index === 0 
                          ? 'bg-green-100 text-green-700 border border-green-200' 
                          : 'bg-orange-100 text-orange-700 border border-orange-200'
                      }`}>
                        {index === 0 ? '❄️' : '☀️'}
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">{item.session}</div>
                        <span className="text-xs text-gray-500">MUHS Examination Results</span>
                      </div>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                      index === 0 
                        ? 'bg-gradient-to-r from-green-600 to-green-700' 
                        : 'bg-gradient-to-r from-orange-600 to-orange-700'
                    }`}>
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600">📄</span>
                      </div>
                      <div>
                        <div className="font-medium text-sm text-gray-800">{item.fileName}</div>
                        <div className="text-xs text-gray-500">PDF Document</div>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => openPdfInNewTab(item.pdfUrl, item.fileName)}
                    className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      index === 0
                        ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700'
                        : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700'
                    }`}
                  >
                    <span>View PDF</span>
                    <span className="text-lg">📖</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}