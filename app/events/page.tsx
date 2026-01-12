'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { eventsData } from '../data/events-data';
import EventCard from '../components/EventCard';
import EventsFilter from '../components/EventsFilter';

export default function EventsPage() {
  const [filter, setFilter] = useState<string>('all');

  // Filter events based on selected year
  const filteredEvents = filter === 'all' 
    ? eventsData 
    : filter === '2026'
    ? eventsData.filter(event => event.year === 2026)
    : filter === '2025'
    ? eventsData.filter(event => event.year === 2025)
    : eventsData.filter(event => event.year === 2024);

  return (
    <div className="min-h-screen .bg-gradient-to-b from-[#f8fff5] to-white">
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 py-8">
        
        {/* Filter Section */}
        <EventsFilter filter={filter} setFilter={setFilter} />

        {/* Events Grid */}
        <section className="mb-16">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="text-6xl mb-6">📅</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No Events Found</h3>
              <p className="text-gray-600 mb-6">Try selecting a different filter or check back later for new events.</p>
              <button
                onClick={() => setFilter('all')}
                className=".bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1"
              >
                Show All Events
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <div key={event.id}>
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}