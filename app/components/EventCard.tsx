'use client';

import React from 'react';
import Link from 'next/link';
import { Event } from '../data/events-data';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
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
          <Link 
            href={`/events/${event.slug}`}
            className="bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 flex items-center gap-2"
          >
            View Details
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}