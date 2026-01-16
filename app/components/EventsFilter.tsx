'use client';

import React from 'react';

interface EventsFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
}

export default function EventsFilter({ filter, setFilter }: EventsFilterProps) {
  return (
    <section className="mb-8">
      <div className="p-2 ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-1">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${filter === 'all' ? 'bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white shadow-lg' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              All Events
            </button>
            <button
              onClick={() => setFilter('2026')}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${filter === '2026' ? 'bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white shadow-lg' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              2026
            </button>
            <button
              onClick={() => setFilter('2025')}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${filter === '2025' ? 'bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white shadow-lg' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              2025
            </button>
            <button
              onClick={() => setFilter('2024')}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${filter === '2024' ? 'bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white shadow-lg' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              2024
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}