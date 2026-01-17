'use client';

import { useState } from 'react';

export default function VishakhaCommitteePage() {
  const [committeeMembers] = useState([
    {
      id: 1,
      name: "Dr. Mayuri Ghumatkar",
      designation: "President"
    },
    {
      id: 2,
      name: "Dr. Anukshaya Moolya",
      designation: "Vice President"
    },
    {
      id: 3,
      name: "Dr. Sayil Yadav",
      designation: "Faculty Member"
    },
    {
      id: 4,
      name: "Mrs. Yogita kadu",
      designation: "Member"
    },
    {
      id: 5,
      name: "Miss. Saanika S. Mantri",
      designation: "Student Member"
    },
    {
      id: 6,
      name: "Miss. Gauri Kakaiya",
      designation: "Student Member"
    },
    {
      id: 7,
      name: "Miss. Ayushi Sanghvi",
      designation: "Student Member"
    }
  ]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4 pt-3">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#0F2A44]">
                VISHAKHA
              </h1>
              <p className="text-lg text-gray-600 mt-0">
                (Sexual Harassment Redressal Committee)
              </p>
              <p className="text-gray-600 max-w-3xl mx-auto mt-1">
            Ensuring a safe and respectful environment for all students, staff, and faculty members
          </p>
            </div>
          </div>
        </div>

        {/* Committee Members Table */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white p-6">
            <h2 className="text-xl font-bold flex items-center gap-3">
              <span className="text-2xl">👥</span>
              Committee Members
            </h2>
            <p className="text-green-100 text-sm mt-1">Members of VISHAKHA Sexual Harassment Redressal Committee</p>
          </div>
          
          {/* Table for Desktop */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 border-b border-gray-400">
                    <div className="flex items-center gap-2">
                      <span>🔢</span>
                      <span>Sr. No</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 border-b border-gray-400">
                    <div className="flex items-center gap-2">
                      <span>👤</span>
                      <span>Name of Staff Member</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 border-b border-gray-400">
                    <div className="flex items-center gap-2">
                      <span>🎓</span>
                      <span>Designation</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {committeeMembers.map((member, index) => (
                  <tr 
                    key={member.id}
                    className={`hover:bg-gray-50 transition-colors duration-200 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                    }`}
                  >
                    <td className="py-4 px-6 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="text-lg font-semibold text-gray-900">
                          {index + 1}.
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="font-medium text-gray-800">{member.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 border-b border-gray-100">
  <span className={`text-xs font-medium ${
    member.designation === 'President' 
      ? 'text-green-700' 
      : member.designation === 'Vice President'
      ? 'text-orange-700'
      : member.designation.includes('Student')
      ? 'text-emerald-700'
      : 'text-gray-700'
  }`}>
    {member.designation}
  </span>
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
                        member.designation === 'President' 
                          ? 'bg-green-100 text-green-700 border border-green-200' 
                          : member.designation === 'Vice President'
                          ? 'bg-orange-100 text-orange-700 border border-orange-200'
                          : member.designation.includes('Student')
                          ? 'bg-emerald-100 text-blue-700 border border-emerald-200'
                          : 'bg-amber-100 text-amber-700 border border-amber-200'
                      }`}>
                        {member.designation === 'President' || member.designation === 'Vice President' ? '👨‍🏫' : 
                         member.designation.includes('Student') ? '👩‍🎓' : '👨‍⚕️'}
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">{member.name}</div>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium mt-1 ${
                          member.designation === 'President' 
                            ? 'bg-green-100 text-green-700 border border-green-200' 
                            : member.designation === 'Vice President'
                            ? 'bg-orange-100 text-orange-700 border border-orange-200'
                            : member.designation.includes('Student')
                            ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                            : 'bg-amber-100 text-amber-700 border border-amber-200'
                        }`}>
                          {member.designation}
                        </span>
                      </div>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                      member.designation === 'President' 
                        ? 'bg-gradient-to-r from-green-600 to-green-700' 
                        : member.designation === 'Vice President'
                        ? 'bg-gradient-to-r from-orange-600 to-orange-700'
                        : member.designation.includes('Student')
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600'
                        : 'bg-gradient-to-r from-orange-500 to-amber-600'
                    }`}>
                      {member.id}
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