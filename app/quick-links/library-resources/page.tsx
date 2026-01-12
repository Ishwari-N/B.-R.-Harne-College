// app/quick-links/library-resources/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function LibraryResourcesPage() {
  const libraryResources = [
    {
      category: 'Digital Resources',
      items: [
        'E-Journals (1000+ titles)',
        'E-Books (5000+ titles)',
        'Online Databases',
        'Thesis & Dissertations',
        'Research Papers'
      ]
    },
    {
      category: 'Physical Collection',
      items: [
        'Textbooks (15,000+ volumes)',
        'Reference Books',
        'Medical Journals',
        'Magazines & Periodicals',
        'Audio-Visual Materials'
      ]
    },
    {
      category: 'Services',
      items: [
        '24/7 Digital Access',
        'Book Lending',
        'Reference Service',
        'Photocopy Service',
        'Reading Room'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-block p-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-6">
            <span className="text-4xl text-white">📚</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Library Resources</h1>
          <p className="text-gray-600">Access to vast collection of academic resources</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {libraryResources.map((category, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3">{category.category}</h2>
              <ul className="space-y-3">
                {category.items.map((item, iidx) => (
                  <li key={iidx} className="flex items-center gap-3">
                    <span className="text-amber-500">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Library Hours</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Weekdays</h3>
              <p className="text-gray-600">8:00 AM - 8:00 PM</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Weekends</h3>
              <p className="text-gray-600">9:00 AM - 5:00 PM</p>
            </div>
          </div>
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