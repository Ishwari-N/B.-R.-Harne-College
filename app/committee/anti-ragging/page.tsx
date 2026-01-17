'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AntiRaggingPage() {
  const [committeeMembers] = useState([
    {
      id: 1,
      name: "Dr. Jay Gupta",
      postHeld: "Principal Cum Professor",
      designation: "Chair-Person",
      category: "Chair-Person"
    },
    {
      id: 2,
      name: "Dr. Parag Kulkarni",
      postHeld: "Professor",
      designation: "Member",
      category: "Faculty"
    },
    {
      id: 3,
      name: "Dr. Anukshaya Moolya",
      postHeld: "Assistant Professor",
      designation: "Member",
      category: "Faculty"
    },
    {
      id: 4,
      name: "Adv. Mandakini Patil",
      postHeld: "Legal Adviser",
      designation: "Member",
      category: "Legal"
    },
    {
      id: 5,
      name: "Mrs. Sayli Kelekar",
      postHeld: "NGO",
      designation: "Member",
      category: "External"
    },
    {
      id: 6,
      name: "Mr. Sandip Nigade",
      postHeld: "Pl. Police Station, Vangani",
      designation: "Member",
      category: "Police"
    },
    {
      id: 7,
      name: "Mr. Swapnil Yadav",
      postHeld: "Student",
      designation: "Member",
      category: "Student"
    },
    {
      id: 8,
      name: "Mr. Suresh Gummala",
      postHeld: "Student",
      designation: "Member",
      category: "Student"
    },
    {
      id: 9,
      name: "Mr. Swayam Sing",
      postHeld: "Student",
      designation: "Member",
      category: "Student"
    }
  ]);


  const getCategoryBadgeColor = (category: string) => {
    switch(category) {
      case 'Chair-Person': return 'text-[#EF6C00]';
      case 'Faculty': return 'text-[#0bc22d]';
      case 'Legal': return 'text-[#2E7D32]';
      case 'Police': return 'text-[#1565C0]';
      case 'External': return 'text-[#AD1457]';
      case 'Student': return 'text-[#6A1B9A]';
      default: return 'text-gray-700';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4 pt-3">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient bg-black bg-clip-text text-transparent">
              Anti-Ragging Committee
            </h1>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ensuring a safe and ragging-free environment for all students
          </p>
        </div>

        {/* Committee Members Table */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white p-5">
            <h2 className="text-xl font-bold flex items-center gap-3">
              <span className="text-2xl">👥</span>
              Committee Members
            </h2>
            <p className="text-white/90 text-sm mt-1">Anti-Ragging Committee members for addressing complaints</p>
          </div>
          
          {/* Table for Desktop */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700 border-b border-gray-400">
                    <div className="flex items-center gap-2">
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
                      <span>🏢</span>
                      <span>Post Held</span>
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
                        <div className="text-lg font-semibold text-gray-700">
                          {index + 1}
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
                      <div className="text-gray-800">{member.postHeld}</div>
                    </td>
                    <td className="py-4 px-6 border-b border-gray-100">
                      <span className={`inline-flex items-center text-xs font-medium ${getCategoryBadgeColor(member.category)}`}>
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
                    
                      <div>
                        <div className="font-bold text-gray-800">{member.name}</div>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium mt-1 ${getCategoryBadgeColor(member.category)}`}>
                          {member.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-[#E8F5E9] flex items-center justify-center">
                        <span className="text-[#0bc22d]">🏢</span>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Post Held</p>
                        <p className="font-medium text-gray-800">
                          {member.postHeld}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-[#FFF3E0] flex items-center justify-center">
                        <span className="text-[#F39C12]">🎓</span>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Designation</p>
                        <span className={`inline-flex items-center text-xs font-medium ${getCategoryBadgeColor(member.category)}`}>
                          {member.designation}
                        </span>
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