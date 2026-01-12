// app/quick-links/student-portal/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function StudentPortalPage() {
  const portalFeatures = [
    { title: 'Online Attendance', icon: '📋', desc: 'Track your daily attendance' },
    { title: 'Exam Results', icon: '📊', desc: 'View semester results' },
    { title: 'Fee Payment', icon: '💳', desc: 'Pay fees online' },
    { title: 'Study Material', icon: '📚', desc: 'Access digital library' },
    { title: 'Timetable', icon: '⏰', desc: 'Check class schedule' },
    { title: 'Notice Board', icon: '📢', desc: 'Latest announcements' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-block p-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-6">
            <span className="text-4xl text-white">🎓</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Student Portal</h1>
          <p className="text-gray-600">Access your academic information and resources</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Portal Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {portalFeatures.map((feature, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-2xl p-8 mb-6">
            <h3 className="text-2xl font-bold mb-4">Portal Login</h3>
            <p className="mb-6">Use your college credentials to access the portal</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Login to Student Portal
            </button>
          </div>
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}