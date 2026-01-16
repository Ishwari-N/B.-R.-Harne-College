'use client';

import { useState } from 'react';
import Link from 'next/link';

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
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4 pt-3">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Grievance Redressal Committee
            </h1>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ensuring fair and prompt resolution of concerns for students, staff, and faculty members
          </p>
        </div>

        {/* Committee Members Table */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white p-4">
            <h2 className="text-xl font-bold flex items-center gap-3">
              <span className="text-2xl">👥</span>
              Committee Members
            </h2>
            <p className="text-white/90 text-sm mt-1">Contact details of GRC members for grievance submission</p>
          </div>
          
          {/* Table for Desktop */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 border-b border-gray-400">
                    <div className="flex items-center gap-2">
                      <span>Sr. No</span>
                    </div>
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 border-b border-gray-400">
                    <div className="flex items-center gap-2">
                      <span>👤</span>
                      <span>Name of Staff Member</span>
                    </div>
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 border-b border-gray-400">
                    <div className="flex items-center gap-2">
                      <span>🎓</span>
                      <span>Designation</span>
                    </div>
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700 border-b border-gray-400">
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
                    <td className="py-4 px-6 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                          member.designation === 'Chairman' 
                            ? 'bg-gradient-to-r from-[#F39C12] to-amber-500' 
                            : member.designation.includes('Student')
                            ? 'bg-gradient-to-r from-emerald-600 to-teal-500'
                            : 'bg-gradient-to-r from-[#0bc22d] to-emerald-500'
                        }`}>
                          {index + 1}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          member.designation === 'Chairman' 
                            ? 'bg-amber-100 text-amber-600' 
                            : member.designation.includes('Student')
                            ? 'bg-emerald-100 text-emerald-600'
                            : 'bg-green-100 text-green-600'
                        }`}>
                          {member.designation === 'Chairman' ? '👨‍🏫' : 
                           member.designation.includes('Student') ? '👩‍🎓' : '👨‍⚕️'}
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">{member.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 border-b border-gray-100">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        member.designation === 'Chairman' 
                          ? 'bg-amber-100 text-amber-700' 
                          : member.designation.includes('Student')
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {member.designation}
                      </span>
                    </td>
                    <td className="py-4 px-6 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0bc22d]/10 to-[#F39C12]/10 flex items-center justify-center">
                          <span className="text-green-600">📞</span>
                        </div>
                        <a 
                          href={`tel:${member.contactNo}`}
                          className="font-medium text-gray-800 hover:text-[#0bc22d] transition-colors"
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

          {/* Cards for Mobile */}
          <div className="md:hidden">
            <div className="p-4 space-y-4">
              {committeeMembers.map((member) => (
                <div 
                  key={member.id}
                  className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        member.designation === 'Chairman' 
                          ? 'bg-amber-100 text-amber-600' 
                          : member.designation.includes('Student')
                          ? 'bg-emerald-100 text-emerald-600'
                          : 'bg-green-100 text-green-600'
                      }`}>
                        {member.designation === 'Chairman' ? '👨‍🏫' : 
                         member.designation.includes('Student') ? '👩‍🎓' : '👨‍⚕️'}
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">{member.name}</div>
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
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                      member.designation === 'Chairman' 
                        ? 'bg-gradient-to-r from-[#F39C12] to-amber-500' 
                        : member.designation.includes('Student')
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-500'
                        : 'bg-gradient-to-r from-[#0bc22d] to-emerald-500'
                    }`}>
                      {member.id}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#0bc22d]/5 to-[#F39C12]/5 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0bc22d]/10 to-[#F39C12]/10 flex items-center justify-center">
                        <span className="text-green-600">📞</span>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Contact Number</p>
                        <a 
                          href={`tel:${member.contactNo}`}
                          className="font-medium text-gray-800 hover:text-[#0bc22d] transition-colors"
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