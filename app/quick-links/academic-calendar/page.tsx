// app/quick-links/academic-calendar/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function AcademicCalendarPage() {
  const academicYear = [
    {
      semester: 'Odd Semester (July - December 2024)',
      events: [
        { month: 'July', events: ['Commencement of Classes', 'Orientation Program'] },
        { month: 'August', events: ['Internal Assessment 1', 'Independence Day Celebration'] },
        { month: 'September', events: ['Teachers Day', 'Mid-term Examinations'] },
        { month: 'October', events: ['Internal Assessment 2', 'Gandhi Jayanti'] },
        { month: 'November', events: ['University Practical Exams', 'Diwali Vacation'] },
        { month: 'December', events: ['University Theory Exams', 'Winter Vacation'] },
      ]
    },
    {
      semester: 'Even Semester (January - June 2025)',
      events: [
        { month: 'January', events: ['Commencement of Classes', 'Republic Day'] },
        { month: 'February', events: ['Internal Assessment 1', 'University Sports'] },
        { month: 'March', events: ['Holi Vacation', 'Mid-term Examinations'] },
        { month: 'April', events: ['Internal Assessment 2', 'University Practical Exams'] },
        { month: 'May', events: ['University Theory Exams', 'Summer Vacation Begins'] },
        { month: 'June', events: ['Result Declaration', 'Next Session Planning'] },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Academic Calendar 2024-25</h1>
          <p className="text-gray-600">Important dates and events for the academic year</p>
        </div>

        <div className="space-y-8">
          {academicYear.map((semester, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-700 mb-6">{semester.semester}</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {semester.events.map((month, midx) => (
                  <div key={midx} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-gray-800 text-lg mb-4">{month.month}</h3>
                    <ul className="space-y-2">
                      {month.events.map((event, eidx) => (
                        <li key={eidx} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span className="text-gray-700">{event}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}