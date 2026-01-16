'use client';

import { useState } from 'react';

export default function LocalManagingCommitteePage() {
  const [committeeMembers] = useState([
    {
      id: 1,
      position: "President of Trust",
      members: ["1. Mr. Mangesh B. Harne"]
    },
    {
      id: 2,
      position: "Secretary of Trust",
      members: ["1. Mr. Rushikesh M. Harne"]
    },
    {
      id: 3,
      position: "Three Local Member",
      members: [
        "1. Mr. Chadrakant Surve",
        "2. Mr. Shailesh Sapkal", 
        "3. Mr. Nilesh Hindurov"
      ]
    },
    {
      id: 4,
      position: "Three Teaching Staff Member",
      members: [
        "1. Dr. Parag Kulkarni",
        "2. Dr. Mayuri Ghumattkar",
        "3. Dr. Anukshaya Moolya"
      ]
    },
    {
      id: 5,
      position: "One Non-Teaching Staff",
      members: ["1. Mr. Yogesh F. Jain"]
    },
    {
      id: 6,
      position: "Principal as Member Secretary",
      members: ["1. Dr. Jay Gupta"]
    }
  ]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4 pt-3">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0F2A44]">
              Local Managing Committee
            </h1>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Governing body responsible for the administration and management of the institution
          </p>
        </div>

        {/* Committee Members Table */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white p-4">
            <h2 className="text-xl font-bold flex items-center gap-3">
              <span className="text-2xl">👥</span>
              Committee Members
            </h2>
            <p className="text-green-100 text-sm mt-1">Members of the Local Managing Committee</p>
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
                      <span>🏛️</span>
                      <span>Local Managing Committee</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 border-b border-gray-400">
                    <div className="flex items-center gap-2">
                      <span>👤</span>
                      <span>Name of Staff</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {committeeMembers.map((committee, index) => (
                  <tr 
                    key={committee.id}
                    className={`hover:bg-gray-50 transition-colors duration-200 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                    }`}
                    style={{ 
                      height: committee.members.length > 1 
                        ? `${committee.members.length * 50}px` 
                        : 'auto' 
                    }}
                  >
                    <td className="py-4 px-6 border-b border-gray-100 align-top">
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                          committee.position.includes('President') 
                            ? 'bg-gradient-to-r from-green-800 to-green-700' 
                            : committee.position.includes('Secretary')
                            ? 'bg-gradient-to-r from-orange-600 to-orange-700'
                            : committee.position.includes('Teaching')
                            ? 'bg-gradient-to-r from-green-500 to-emerald-800'
                            : committee.position.includes('Non-Teaching')
                            ? 'bg-gradient-to-r from-orange-500 to-amber-700'
                            : committee.position.includes('Local Member')
                            ? 'bg-gradient-to-r from-green-400 to-teal-800'
                            : 'bg-gradient-to-r from-orange-400 to-yellow-800'
                        }`}>
                          {index + 1}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 border-b border-gray-100 align-top">
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          committee.position.includes('President') 
                            ? 'bg-green-100 text-green-700 border border-green-200' 
                            : committee.position.includes('Secretary')
                            ? 'bg-orange-100 text-orange-700 border border-orange-200'
                            : committee.position.includes('Teaching')
                            ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                            : committee.position.includes('Non-Teaching')
                            ? 'bg-amber-100 text-amber-700 border border-amber-200'
                            : committee.position.includes('Local Member')
                            ? 'bg-teal-100 text-teal-700 border border-teal-200'
                            : 'bg-yellow-100 text-yellow-700 border border-yellow-200'
                        }`}>
                          {committee.position.includes('President') ? '👑' : 
                           committee.position.includes('Secretary') ? '📝' :
                           committee.position.includes('Teaching') ? '👨‍🏫' :
                           committee.position.includes('Non-Teaching') ? '👨‍💼' :
                           committee.position.includes('Local Member') ? '🏢' : '🎓'}
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">{committee.position}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 border-b border-gray-100 align-top">
                      <div className="space-y-2">
                        {committee.members.map((member, memberIndex) => (
                          <div 
                            key={memberIndex} 
                            className="flex items-center gap-3"
                          >
                            <span className="text-sm text-gray-600">•</span>
                            <span className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm ${
                              committee.position.includes('President') 
                                ? 'bg-green-50 text-green-800 border border-green-100' 
                                : committee.position.includes('Secretary')
                                ? 'bg-orange-50 text-orange-800 border border-orange-100'
                                : committee.position.includes('Teaching')
                                ? 'bg-emerald-50 text-emerald-950 border border-emerald-100'
                                : committee.position.includes('Non-Teaching')
                                ? 'bg-amber-50 text-red-800 border border-amber-100'
                                : committee.position.includes('Local Member')
                                ? 'bg-teal-50 text-violet-950 border border-teal-100'
                                : 'bg-yellow-50 text-yellow-800 border border-yellow-100'
                            }`}>
                              {member}
                            </span>
                          </div>
                        ))}
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
              {committeeMembers.map((committee) => (
                <div 
                  key={committee.id}
                  className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        committee.position.includes('President') 
                          ? 'bg-green-100 text-green-800 border border-green-200' 
                          : committee.position.includes('Secretary')
                          ? 'bg-orange-100 text-orange-800 border border-orange-200'
                          : committee.position.includes('Teaching')
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          : committee.position.includes('Non-Teaching')
                          ? 'bg-amber-100 text-red-700 border border-amber-200'
                          : committee.position.includes('Local Member')
                          ? 'bg-teal-100 text-teal-800 border border-teal-200'
                          : 'bg-yellow-100 text-yellow-700 border border-yellow-200'
                      }`}>
                        {committee.position.includes('President') ? '👑' : 
                         committee.position.includes('Secretary') ? '📝' :
                         committee.position.includes('Teaching') ? '👨‍🏫' :
                         committee.position.includes('Non-Teaching') ? '👨‍💼' :
                         committee.position.includes('Local Member') ? '🏢' : '🎓'}
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">{committee.position}</div>
                      </div>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                      committee.position.includes('President') 
                        ? 'bg-gradient-to-r from-green-600 to-green-700' 
                        : committee.position.includes('Secretary')
                        ? 'bg-gradient-to-r from-orange-600 to-orange-700'
                        : committee.position.includes('Teaching')
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600'
                        : committee.position.includes('Non-Teaching')
                        ? 'bg-gradient-to-r from-orange-500 to-amber-600'
                        : committee.position.includes('Local Member')
                        ? 'bg-gradient-to-r from-green-400 to-teal-600'
                        : 'bg-gradient-to-r from-orange-400 to-yellow-600'
                    }`}>
                      {committee.id}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Members:</h4>
                    {committee.members.map((member, memberIndex) => (
                      <div 
                        key={memberIndex}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                          committee.position.includes('President') 
                            ? 'bg-green-600' 
                            : committee.position.includes('Secretary')
                            ? 'bg-orange-600'
                            : committee.position.includes('Teaching')
                            ? 'bg-emerald-600'
                            : committee.position.includes('Non-Teaching')
                            ? 'bg-amber-600'
                            : committee.position.includes('Local Member')
                            ? 'bg-teal-600'
                            : 'bg-yellow-600'
                        }`}>
                          {memberIndex + 1}
                        </span>
                        <span className="font-medium text-gray-800">{member.replace(/^\d+\.\s*/, '')}</span>
                      </div>
                    ))}
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