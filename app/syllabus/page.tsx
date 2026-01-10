'use client';

import { useState } from 'react';
import { FiEye, FiDownload, FiFileText, FiBookOpen, FiChevronRight, FiExternalLink } from 'react-icons/fi';
import { AiOutlineFilePdf } from 'react-icons/ai';

export default function SyllabusPage() {
  const [syllabusList] = useState([
  {
    id: 1,
    title: "1st B.P.Th.",
    subtitle: "First Year Bachelor of Physiotherapy",
    viewLink: "https://brharnephysiotherapy.com/assets/document/1st%20bpt.pdf",
    downloadLink: "https://brharnephysiotherapy.com/assets/document/1st%20bpt.pdf",
    description: "Foundation subjects including Anatomy, Physiology, and basic physiotherapy concepts",
    color: "from-[#0bc22d] to-emerald-500",
    bgColor: "bg-gradient-to-br from-[#0bc22d]/30 to-emerald-50",
    borderColor: "border-[#0bc22d]/20",
    icon: "🎓",
    iconBg: "inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#0bc22d]/10 to-[#F39C12]/10 text-gray-800 rounded-lg hover:from-[#0bc22d]/20 hover:to-[#F39C12]/20 hover:shadow-md transition-all duration-200 font-medium group/link border border-[#0bc22d]/20"
  },
  {
    id: 2,
    title: "2nd B.P.Th.",
    subtitle: "Second Year Bachelor of Physiotherapy",
    viewLink: "https://brharnephysiotherapy.com/assets/document/2nd%20bpth.pdf",
    downloadLink: "https://brharnephysiotherapy.com/assets/document/2nd%20bpth.pdf",
    description: "Advanced subjects including Pathology, Pharmacology, and exercise therapy",
    color: "from-[#0bc22d] to-[#F39C12]",
    bgColor: "bg-gradient-to-br from-[#0bc22d]/10 to-[#F39C12]/10",
    borderColor: "border-[#0bc22d]/20",
    icon: "🎓",
    iconBg: "inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#0bc22d]/10 to-[#F39C12]/10 text-gray-800 rounded-lg hover:from-[#0bc22d]/20 hover:to-[#F39C12]/20 hover:shadow-md transition-all duration-200 font-medium group/link border border-[#0bc22d]/20"
  },
  {
    id: 3,
    title: "3rd B.P.Th.",
    subtitle: "Third Year Bachelor of Physiotherapy",
    viewLink: "https://brharnephysiotherapy.com/assets/document/3rd%20bpt.pdf",
    downloadLink: "https://brharnephysiotherapy.com/assets/document/3rd%20bpt.pdf",
    description: "Clinical subjects including orthopedics, neurology, and cardiopulmonary physiotherapy",
    color: "from-[#F39C12] to-orange-500",
    bgColor: "bg-gradient-to-br from-[#F39C12]/10 to-orange-50",
    borderColor: "border-[#F39C12]/20",
    icon: "🎓",
    iconBg: "inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#0bc22d]/10 to-[#F39C12]/10 text-gray-800 rounded-lg hover:from-[#0bc22d]/20 hover:to-[#F39C12]/20 hover:shadow-md transition-all duration-200 font-medium group/link border border-[#0bc22d]/20"
  },
  {
    id: 4,
    title: "4th B.P.Th.",
    subtitle: "Fourth Year Bachelor of Physiotherapy",
    viewLink: "https://brharnephysiotherapy.com/assets/document/4th%20bpt.pdf",
    downloadLink: "https://brharnephysiotherapy.com/assets/document/4th%20bpt.pdf",
    description: "Internship and specialization including research methodology and clinical practice",
    color: "from-[#0bc22d] to-amber-500",
    bgColor: "bg-gradient-to-br from-[#0bc22d]/10 to-amber-50",
    borderColor: "border-[#0bc22d]/20",
    icon: "🎓",
    iconBg: "inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#0bc22d]/10 to-[#F39C12]/10 text-gray-800 rounded-lg hover:from-[#0bc22d]/20 hover:to-[#F39C12]/20 hover:shadow-md transition-all duration-200 font-medium group/link border border-[#0bc22d]/20"
  }
]);

  const handleDownload = (link: string, title: string) => {
    const anchor = document.createElement('a');
    anchor.href = link;
    anchor.download = `${title} Syllabus.pdf`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50/30 via-white to-amber-50/20">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-2 py-3">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Syllabus <span className="bg-gradient-to-r from-[#1c852f] to-[#896222] bg-clip-text text-transparent">B.P.Th</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Bachelor of Physiotherapy - Comprehensive curriculum for academic excellence and professional development
          </p>
          
        </div>

        {/* Professional Table View (Desktop) */}
        <div className="hidden lg:block bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white p-3">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <FiFileText className="text-2xl" />
              Syllabus Overview
            </h2>
            <p className="text-white/90 text-sm mt-1">Complete Bachelor of Physiotherapy curriculum details</p>
          </div>
          
          <table className="w-full">
            <tbody className="divide-y divide-gray-100">
              {syllabusList.map((syllabus, index) => (
                <tr 
                  key={syllabus.id}
                  className={`hover:bg-gradient-to-r hover:from-[#0bc22d]/5 hover:to-[#F39C12]/5 transition-all duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}
                >
                  <td className="py-6 px-8">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl ${syllabus.iconBg} border border-[#0bc22d]/20 hover:border-[#0bc22d]/30`}>
                        {syllabus.icon}
                      </div>
                      <div>
                        <div className="font-bold text-lg text-gray-800">{syllabus.title}</div>
                        <div className="text-sm text-gray-600">{syllabus.subtitle}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 px-8">
                    <a
                      href={syllabus.viewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#0bc22d]/10 to-[#F39C12]/10 text-gray-800 rounded-lg hover:from-[#0bc22d]/20 hover:to-[#F39C12]/20 hover:shadow-md transition-all duration-200 font-medium group/link border border-[#0bc22d]/20"
                    >
                      <FiEye />
                      View syllabus
                      <FiExternalLink className="text-sm opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  </td>
                  <td className="py-6 px-8">
                    <button
                      onClick={() => handleDownload(syllabus.downloadLink, syllabus.title)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white rounded-lg hover:from-[#0bc22d]/90 hover:to-[#F39C12]/90 hover:shadow-md transition-all duration-200 font-medium group/button"
                    >
                      <FiDownload />
                      Download
                      <AiOutlineFilePdf className="text-white opacity-0 group-hover/button:opacity-100 transition-opacity" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards View */}
        <div className="lg:hidden space-y-6 mb-12">
          {syllabusList.map((syllabus) => (
            <div 
              key={syllabus.id}
              className={`bg-white rounded-xl shadow-lg border ${syllabus.borderColor} overflow-hidden group hover:shadow-xl transition-all duration-300`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-gray-800 text-xl ${syllabus.iconBg} border border-[#0bc22d]/20 hover:border-[#0bc22d]/30`}>
                      {syllabus.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{syllabus.title}</h3>
                      <p className="text-sm text-gray-600">{syllabus.subtitle}</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 text-sm">{syllabus.description}</p>
                
                <div className="flex gap-3">
                  <a
                    href={syllabus.viewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#0bc22d]/10 to-[#F39C12]/10 text-gray-800 rounded-lg hover:from-[#0bc22d]/20 hover:to-[#F39C12]/20 transition-all duration-200 font-medium border border-[#0bc22d]/20"
                  >
                    <FiEye />
                    View
                  </a>
                  <button
                    onClick={() => handleDownload(syllabus.downloadLink, syllabus.title)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white rounded-lg hover:from-[#0bc22d]/90 hover:to-[#F39C12]/90 transition-all duration-200 font-medium"
                  >
                    <FiDownload />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}