// app/events/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Define Event type
interface Event {
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  gradientFrom: string;
  gradientTo: string;
  year: number;
}

/* -------------------- Event Card Component -------------------- */
function EventCard({ event }: { event: Event }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white border border-gray-100">
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-10"></div>
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            // Fallback to default image
            e.currentTarget.src = '/event-fallback.jpg';
            e.currentTarget.className = 'w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 bg-gray-200';
          }}
        />
        
      </div>

      {/* Event Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#0bc22d] transition-colors duration-300">
            {event.title}
          </h3>
        </div>

        {/* Location */}
        <div className="mb-4">
          <div className="flex items-center gap-2 text-gray-600 mb-3">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">{event.location}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-6 line-clamp-3">
          {event.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-gray-700 text-xs font-bold whitespace-nowrap">
            {event.date}
          </span>
          <button className="bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 flex items-center gap-2">
            View Details
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
/* -------------------- Event Detail Modal -------------------- */
function EventDetailModal({ event, onClose }: { event: Event; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-lg">
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200/50">
        <div className="relative h-72">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = '/event-fallback.jpg';
              e.currentTarget.className = 'w-full h-full object-cover bg-gradient-to-br from-[#0bc22d] to-[#F39C12]';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 bg-white/20 backdrop-blur-lg p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 border border-white/30"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="absolute bottom-6 left-6">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-[#0bc22d] to-[#F39C12] p-3 rounded-xl shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-white text-sm font-medium">Event Date</div>
                <div className="text-white font-bold text-lg">{event.date}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-8">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-[#0bc22d] to-[#F39C12] bg-clip-text text-transparent">
              {event.title}
            </h3>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-gradient-to-r from-[#0bc22d]/10 to-[#F39C12]/10 px-4 py-2 rounded-xl border border-[#0bc22d]/20">
                <svg className="w-5 h-5 text-[#0bc22d]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-gray-700">{event.location}</span>
              </div>
              <div className="text-sm text-gray-500 font-medium">
                Year: <span className="text-[#F39C12] font-bold">{event.year}</span>
              </div>
            </div>
          </div>
          
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#0bc22d]/10 to-[#F39C12]/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-[#0bc22d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800">Event Description</h4>
            </div>
            <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <p className="text-gray-700 leading-relaxed text-lg">
                {event.description}
              </p>
            </div>
          </div>
          
          <div className="flex gap-6">
            <button 
              onClick={onClose}
              className="flex-1 bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------- Events Page Content -------------------- */
export default function EventsPage() {
  // Sample events data with corrected image paths
  const eventsData: Event[] = [
    // 2026 Events
    {
      id: 1,
      title: "International Physiotherapy Conference 2026",
      description: "Annual international conference bringing together physiotherapy experts, researchers, and students from around the world to discuss cutting-edge research and clinical practices.",
      location: "International Convention Center, Mumbai",
      date: "March 10-12, 2026",
      image: "/event1.jpeg",
      gradientFrom: "from-[#0bc22d]",
      gradientTo: "to-[#2de86c]",
      year: 2026
    },
    {
      id: 2,
      title: "Advanced Neuro-Rehabilitation Symposium",
      description: "Specialized symposium focusing on the latest advancements in neurological rehabilitation techniques and technologies for stroke and spinal cord injury patients.",
      location: "College Auditorium, Maharashtra",
      date: "July 15-17, 2026",
      image: "/event2.jpg",
      gradientFrom: "from-[#F39C12]",
      gradientTo: "to-[#f8c054]",
      year: 2026
    },
    // 2025 Events
    {
      id: 3,
      title: "Sports Physiotherapy Excellence Summit 2025",
      description: "Comprehensive summit focusing on sports injury prevention, management, and performance enhancement techniques for athletes of all levels.",
      location: "College Sports Complex, Maharashtra",
      date: "May 20-22, 2025",
      image: "/sports.jpeg",
      gradientFrom: "from-[#0bc22d]",
      gradientTo: "to-[#4af48c]",
      year: 2025
    },
    {
      id: 4,
      title: "Pediatric Rehabilitation Workshop 2025",
      description: "Hands-on workshop focusing on developmental disorders, childhood disabilities, and advanced pediatric rehabilitation techniques.",
      location: "Pediatrics Department, College Campus",
      date: "August 10-12, 2025",
      image: "/event3.jpeg",
      gradientFrom: "from-[#F39C12]",
      gradientTo: "to-[#ffb347]",
      year: 2025
    },
    {
      id: 5,
      title: "Geriatric Care Symposium 2025",
      description: "Specialized symposium addressing age-related mobility issues, fall prevention, and quality of life enhancement for elderly patients.",
      location: "Geriatric Wing, College Campus",
      date: "November 5-7, 2025",
      image: "/hospital.jpeg",
      gradientFrom: "from-[#0bc22d]",
      gradientTo: "to-[#7ef9a5]",
      year: 2025
    },
    // 2024 Events
    {
      id: 6,
      title: "Community Health Camp 2024",
      description: "Large-scale community health initiative providing free physiotherapy consultations, treatments, and health education to underserved rural populations.",
      location: "Rural Maharashtra Villages",
      date: "January 10-15, 2024",
      image: "/health.jpeg",
      gradientFrom: "from-[#F39C12]",
      gradientTo: "to-[#ffcc80]",
      year: 2024
    },
    {
      id: 7,
      title: "Research & Innovation Day 2024",
      description: "Annual showcase of student and faculty research projects, innovative treatments, and academic achievements in physiotherapy.",
      location: "Research Center, College Campus",
      date: "February 28, 2024",
      image: "/award.jpeg",
      gradientFrom: "from-[#0bc22d]",
      gradientTo: "to-[#a5f7c3]",
      year: 2024
    },
    {
      id: 8,
      title: "Yoga & Wellness Festival 2024",
      description: "Annual wellness festival promoting holistic health through yoga sessions, meditation workshops, and integrative therapy demonstrations.",
      location: "College Ground, Maharashtra",
      date: "June 21, 2024",
      image: "/yoga.jpeg",
      gradientFrom: "from-[#F39C12]",
      gradientTo: "to-[#ffe0b3]",
      year: 2024
    },
    {
      id: 9,
      title: "Clinical Skills Competition 2024",
      description: "Annual competition testing students' clinical assessment, diagnosis, and treatment planning skills through realistic case scenarios.",
      location: "Clinical Skills Lab, College",
      date: "October 15, 2024",
      image: "/skills.jpeg",
      gradientFrom: "from-[#0bc22d]",
      gradientTo: "to-[#0af56e]",
      year: 2024
    },
    {
      id: 10,
      title: "Alumni Meet & Career Fair 2024",
      description: "Annual alumni reunion combined with career fair featuring job opportunities, networking sessions, and professional development workshops.",
      location: "College Convention Hall",
      date: "December 12, 2024",
      image: "ev2.jpeg",
      gradientFrom: "from-[#F39C12]",
      gradientTo: "to-[#ffd699]",
      year: 2024
    }
  ];

  const [filter, setFilter] = useState<string>('all');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Filter events based on selected year
  const filteredEvents = filter === 'all' 
    ? eventsData 
    : filter === '2026'
    ? eventsData.filter(event => event.year === 2026)
    : filter === '2025'
    ? eventsData.filter(event => event.year === 2025)
    : eventsData.filter(event => event.year === 2024);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fff5] to-white">
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 py-8">
        
        {/* Filter Section */}
        <section className="mb-10">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <h2 className="text-2xl font-bold text-gray-800">Browse Events</h2>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${filter === 'all' ? 'bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  All Events
                </button>
                <button
                  onClick={() => setFilter('2026')}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${filter === '2026' ? 'bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  2026
                </button>
                <button
                  onClick={() => setFilter('2025')}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${filter === '2025' ? 'bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  2025
                </button>
                <button
                  onClick={() => setFilter('2024')}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${filter === '2024' ? 'bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  2024
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="mb-16">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="text-6xl mb-6">📅</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No Events Found</h3>
              <p className="text-gray-600 mb-6">Try selecting a different filter or check back later for new events.</p>
              <button
                onClick={() => setFilter('all')}
                className="bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1"
              >
                Show All Events
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <div 
                  key={event.id}
                  onClick={() => setSelectedEvent(event)}
                  className="cursor-pointer"
                >
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <EventDetailModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
        />
      )}
    </div>
  );
}