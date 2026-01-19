'use client';

import { useState } from 'react';

export default function GrievanceRedressalPage() {
  const [committeeMembers] = useState([
    {
      id: 1,
      name: "Dr. Jay Gupta",
      designation: "Chairman",
      contactNo: "8097583757",
      email: "jay.gupta@brharnephysio.edu.in"
    },
    {
      id: 2,
      name: "Dr. Parag Kulkarni",
      designation: "Faculty Member",
      contactNo: "702112423",
      email: "parag.kulkarni@brharnephysio.edu.in"
    },
    {
      id: 3,
      name: "Dr. Mayuri Ghumattar",
      designation: "Faculty Member",
      contactNo: "9004693961",
      email: "mayuri.ghumattar@brharnephysio.edu.in"
    },
    {
      id: 4,
      name: "Dr. Anukshaya Moolya",
      designation: "Faculty Member",
      contactNo: "9619869208",
      email: "anukshaya.moolya@brharnephysio.edu.in"
    },
    {
      id: 5,
      name: "Dr. Sayli Yadav",
      designation: "Faculty Member",
      contactNo: "876771476",
      email: "sayli.yadav@brharnephysio.edu.in"
    },
    {
      id: 6,
      name: "Member of Student Council",
      designation: "Student Representative",
      contactNo: "918638304",
      email: "student.council@brharnephysio.edu.in"
    }
  ]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50/30 via-white to-amber-50/20">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 pt-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Grievance Redressal Committee
            </h1>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base px-2">
            Ensuring fair and prompt resolution of concerns for students, staff, and faculty members
          </p>
        </div>

        {/* Committee Members Table */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg border border-gray-100 overflow-hidden mb-6 sm:mb-8">
          <div className="bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white p-3 sm:p-4">
            <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl">👥</span>
              Committee Members
            </h2>
            <p className="text-white/90 text-xs sm:text-sm mt-1">Contact details of GRC members for grievance submission</p>
          </div>
          
          {/* Table for Desktop */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 sm:px-6 text-left text-sm font-semibold text-gray-700 border-b border-gray-400">
                    <div className="flex items-center gap-2">
                      <span>Sr. No</span>
                    </div>
                  </th>
                  <th className="py-3 px-4 sm:px-6 text-left text-sm font-semibold text-gray-700 border-b border-gray-400">
                    <div className="flex items-center gap-2">
                      <span>👤</span>
                      <span>Name of Staff Member</span>
                    </div>
                  </th>
                  <th className="py-3 px-4 sm:px-6 text-left text-sm font-semibold text-gray-700 border-b border-gray-400">
                    <div className="flex items-center gap-2">
                      <span>🎓</span>
                      <span>Designation</span>
                    </div>
                  </th>
                  <th className="py-3 px-4 sm:px-6 text-left text-sm font-semibold text-gray-700 border-b border-gray-400">
                    <div className="flex items-center gap-2">
                      <span>📞</span>
                      <span>Contact No.</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {committeeMembers.map((member, index) => (
                  <tr 
                    key={member.id}
                    className={`hover:bg-gradient-to-r hover:from-[#0bc22d]/5 hover:to-[#F39C12]/5 transition-colors duration-200 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                    }`}
                  >
                    <td className="py-3 sm:py-4 px-4 sm:px-6 border-b border-gray-100">
                      <div className="text-base sm:text-lg font-semibold text-gray-900">
                        {index + 1}.
                      </div>
                    </td>
                    <td className="py-3 sm:py-4 px-4 sm:px-6 border-b border-gray-100">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div>
                          <div className="font-medium text-gray-800 text-sm sm:text-base">{member.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 sm:py-4 px-4 sm:px-6 border-b border-gray-100">
                      <span className={`inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-xs font-medium ${
                        member.designation === 'Chairman' 
                          ? 'bg-amber-100 text-amber-700' 
                          : member.designation.includes('Student')
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {member.designation}
                      </span>
                    </td>
                    <td className="py-3 sm:py-4 px-4 sm:px-6 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <a 
                          href={`tel:${member.contactNo}`}
                          className="font-medium text-gray-800 hover:text-[#0bc22d] transition-colors text-sm sm:text-base"
                        >
                          +91 {member.contactNo}
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards for Mobile & Tablet - UPDATED */}
          <div className="block md:hidden">
            <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
              {committeeMembers.map((member, index) => (
                <div 
                  key={member.id}
                  className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                    {/* Simple number on left side */}
                    <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
                      <span className="text-sm sm:text-base font-semibold text-gray-700">
                        {index + 1}.
                      </span>
                    </div>
                    
                    {/* Member details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-gray-800 text-sm sm:text-base truncate">{member.name}</div>
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium mt-1 ${
                            member.designation === 'Chairman' 
                              ? 'bg-amber-100 text-amber-700' 
                              : member.designation.includes('Student')
                              ? 'bg-emerald-100 text-emerald-700'
                              : 'bg-green-100 text-green-700'
                          }`}>
                            {member.designation}
                          </span>
                        </div>
                        
                        {/* Profile icon moved here */}
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 ml-2 ${
                          member.designation === 'Chairman' 
                            ? 'bg-amber-100 text-amber-600' 
                            : member.designation.includes('Student')
                            ? 'bg-emerald-100 text-emerald-600'
                            : 'bg-green-100 text-green-600'
                        }`}>
                          <span className="text-sm sm:text-base">
                            {member.designation === 'Chairman' ? '👨‍🏫' : 
                             member.designation.includes('Student') ? '👩‍🎓' : '👨‍⚕️'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gradient-to-r from-[#0bc22d]/5 to-[#F39C12]/5 rounded-lg">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#0bc22d]/10 to-[#F39C12]/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-sm sm:text-base">📞</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-500">Contact Number</p>
                        <a 
                          href={`tel:${member.contactNo}`}
                          className="font-medium text-gray-800 hover:text-[#0bc22d] transition-colors text-sm sm:text-base block truncate"
                        >
                          +91 {member.contactNo}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}