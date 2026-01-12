// app/components/EventDetailPage.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { Event } from '@/app/data/events-data';

interface EventDetailPageProps {
  event: Event;
  slug: string;
}

// Dummy images for the event gallery
const eventImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop', alt: 'Event keynote speaker' },
  { id: 2, src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop', alt: 'Audience participation' },
  { id: 3, src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop', alt: 'Networking session' },
  { id: 4, src: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&auto=format&fit=crop', alt: 'Workshop activities' },
  { id: 5, src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop', alt: 'Award ceremony' },
  { id: 6, src: 'https://images.unsplash.com/photo-1492684223066-e9e4aab4d25e?w=800&auto=format&fit=crop', alt: 'Cultural performance' },
  { id: 7, src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop', alt: 'Group photo' },
  { id: 8, src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop', alt: 'Exhibition stall' },
  { id: 9, src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop', alt: 'Panel discussion' },
  { id: 10, src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop', alt: 'Valedictory function' },
];

// Dummy videos for the event
const eventVideos = [
  { id: 1, title: 'Opening Ceremony', thumbnail: 'https://images.unsplash.com/photo-1492684223066-e9e4aab4d25e?w=800&auto=format&fit=crop', duration: '2:45' },
  { id: 2, title: 'Keynote Speech', thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop', duration: '15:30' },
  { id: 3, title: 'Workshop Highlights', thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop', duration: '8:22' },
  { id: 4, title: 'Cultural Night', thumbnail: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&auto=format&fit=crop', duration: '12:15' },
  { id: 5, title: 'Award Distribution', thumbnail: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop', duration: '6:45' },
];

export default function EventDetailPage({ event, slug }: EventDetailPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fff5] to-white">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-r from-[#0bc22d] via-[#0bc22d] to-[#F39C12] text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <Link 
            href="/events"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to Events
          </Link>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{event.emoji || '🎉'}</span>
                <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-medium">
                  {event.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                {event.title}
              </h1>
              <p className="text-xl text-white/90 mb-6 max-w-3xl">{event.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                  <span className="text-xl">📅</span>
                  <div>
                    <div className="font-semibold">{event.date}</div>
                    <div className="text-sm text-white/80">9:00 AM - 6:00 PM</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                  <span className="text-xl">📍</span>
                  <div>
                    <div className="font-semibold">{event.location}</div>
                    <div className="text-sm text-white/80">{event.type}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-center mb-4">
                <div className="text-4xl font-bold">{event.price === 'Free' ? 'FREE' : '₹500'}</div>
                <div className="text-white/80">Registration Fee</div>
              </div>
              <button className="w-full bg-white text-[#0bc22d] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                Register Now
              </button>
              <div className="mt-4 text-center text-sm text-white/80">
                Limited seats available • Early bird discounts
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Event Highlights */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white p-2 rounded-lg">🌟</span>
                Event Highlights
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: '🎤', title: 'Expert Speakers', desc: 'Industry leaders & academic experts' },
                  { icon: '🤝', title: 'Networking', desc: 'Connect with 500+ professionals' },
                  { icon: '💼', title: 'Career Fair', desc: 'Top companies recruitment drive' },
                  { icon: '🏆', title: 'Competitions', desc: 'Cash prizes worth ₹1,00,000' },
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Photo Gallery */}
            <section className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                  <span className="bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white p-2 rounded-lg">📸</span>
                  Photo Gallery
                </h2>
                <button className="text-[#0bc22d] font-semibold hover:text-[#089c24] transition-colors">
                  View All →
                </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {eventImages.slice(0, 8).map((image) => (
                  <div 
                    key={image.id}
                    className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                      <p className="text-sm font-medium truncate">{image.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Video Gallery */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white p-2 rounded-lg">🎥</span>
                Event Videos
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {eventVideos.map((video) => (
                  <div 
                    key={video.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group cursor-pointer hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <span className="text-3xl text-white">▶</span>
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-800 mb-2 group-hover:text-[#0bc22d] transition-colors">
                        {video.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>Event Highlight</span>
                        <span>HD • 1080p</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Detailed Agenda */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white p-2 rounded-lg">📋</span>
                Detailed Schedule
              </h2>
              
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {[
                  { time: '9:00 AM', title: 'Registration & Breakfast', desc: 'Welcome coffee and networking' },
                  { time: '10:00 AM', title: 'Inaugural Ceremony', desc: 'Chief Guest: Dr. R. Sharma, VC of University' },
                  { time: '11:00 AM', title: 'Keynote Address', desc: 'Future of Technology in Education by Industry Leaders' },
                  { time: '12:30 PM', title: 'Technical Workshops', desc: 'Parallel sessions on AI, IoT, and Robotics' },
                  { time: '2:00 PM', title: 'Lunch & Networking', desc: 'Gourmet lunch with industry professionals' },
                  { time: '3:30 PM', title: 'Project Exhibition', desc: 'Student projects showcase and competition' },
                  { time: '5:00 PM', title: 'Panel Discussion', desc: 'Industry-Academia Collaboration' },
                  { time: '6:30 PM', title: 'Cultural Night', desc: 'Music, dance and entertainment' },
                ].map((session, index) => (
                  <div 
                    key={index}
                    className={`flex items-start p-6 ${index !== 7 ? 'border-b border-gray-100' : ''} hover:bg-gray-50 transition-colors`}
                  >
                    <div className="bg-gradient-to-r from-[#0bc22d]/10 to-[#F39C12]/10 text-gray-800 px-4 py-2 rounded-lg min-w-[100px] text-center mr-6">
                      <div className="font-bold text-lg">{session.time}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-800 mb-1">{session.title}</h3>
                      <p className="text-gray-600">{session.desc}</p>
                    </div>
                    <div className="ml-4">
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                        {index === 2 ? 'Main Hall' : 'Workshop Room'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-[#0bc22d] to-[#F39C12] text-white rounded-2xl p-6 shadow-xl">
              <h3 className="font-bold text-xl mb-6">Event at a Glance</h3>
              <div className="space-y-4">
                {[
                  { label: 'Total Participants', value: '850+' },
                  { label: 'Speakers', value: '25' },
                  { label: 'Workshops', value: '8' },
                  { label: 'Sponsors', value: '15' },
                  { label: 'Projects Displayed', value: '120' },
                ].map((stat, index) => (
                  <div key={index} className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span className="text-white/90">{stat.label}</span>
                    <span className="font-bold text-lg">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Speakers */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-[#0bc22d]">🎤</span>
                Featured Speakers
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'Dr. Priya Sharma', role: 'Industry Expert', company: 'TechCorp Inc.' },
                  { name: 'Prof. Rajesh Kumar', role: 'Academic Head', company: 'IIT Bombay' },
                  { name: 'Ms. Anjali Patel', role: 'CEO', company: 'Startup Ventures' },
                ].map((speaker, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#0bc22d] to-[#F39C12] rounded-full flex items-center justify-center text-white font-bold">
                      {speaker.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{speaker.name}</div>
                      <div className="text-sm text-gray-600">{speaker.role} • {speaker.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Materials */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-[#F39C12]">📎</span>
                Event Materials
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'Event Brochure.pdf', size: '2.4 MB' },
                  { name: 'Speaker Presentations.zip', size: '45 MB' },
                  { name: 'Photo Gallery.zip', size: '120 MB' },
                ].map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📄</span>
                      <div>
                        <div className="font-medium text-gray-800">{file.name}</div>
                        <div className="text-sm text-gray-500">{file.size}</div>
                      </div>
                    </div>
                    <button className="text-[#0bc22d] hover:text-[#089c24] font-medium">
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Share Section */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-4">Share This Event</h3>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { icon: '📱', label: 'WhatsApp', color: 'bg-green-500' },
                  { icon: '🐦', label: 'Twitter', color: 'bg-blue-400' },
                  { icon: '👥', label: 'Facebook', color: 'bg-blue-600' },
                  { icon: '💼', label: 'LinkedIn', color: 'bg-blue-700' },
                ].map((platform, index) => (
                  <button
                    key={index}
                    className={`${platform.color} text-white p-4 rounded-xl flex flex-col items-center justify-center hover:opacity-90 transition-opacity`}
                  >
                    <span className="text-2xl mb-1">{platform.icon}</span>
                    <span className="text-xs font-medium">{platform.label}</span>
                  </button>
                ))}
              </div>
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <input 
                    type="text" 
                    value={`https://brharnecollege.edu/events/${slug}`}
                    readOnly
                    className="flex-1 bg-transparent text-gray-600 text-sm truncate mr-2"
                  />
                  <button className="text-[#0bc22d] font-medium text-sm hover:text-[#089c24]">
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-[#0bc22d] to-[#F39C12] p-1 rounded-2xl">
            <div className="bg-white rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Join This Amazing Event?</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Don't miss this opportunity to learn, network, and grow with industry experts and peers.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white px-8 py-3 rounded-lg font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Register Now
                </button>
                <button className="border-2 border-[#0bc22d] text-[#0bc22d] px-8 py-3 rounded-lg font-bold hover:bg-[#0bc22d] hover:text-white transition-all duration-300">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}