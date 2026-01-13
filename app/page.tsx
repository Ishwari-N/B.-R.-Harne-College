'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { getHighlightedEvents } from '@/app/data/events-data'; // Import the function

/* ================= IMAGE SLIDER ================= */

const images = [
  '/photo-1.jpeg',
  '/photo-2.jpeg',
  '/photo-3.jpg',
];

function ImageSlider() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!hovered) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [hovered]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div
      className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[300px] sm:min-h-[400px] md:min-h-[600px] overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >     
      
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === i ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
        >
          <img
            src={img}
            alt={`Slide ${i + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Navigation Buttons - Hidden on mobile, shown on tablet+ */}
      <button 
        onClick={prevSlide} 
        className="hidden sm:block absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-transparent text-[#0F2A44] text-xl sm:text-2xl font-bold flex items-center justify-center hover:bg-white hover:scale-110 hover:shadow-xl transition-all duration-300 shadow-2xl z-10 group"
      >
        ‹
        <span className="absolute -left-12 top-1/2 -translate-y-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Previous
        </span>
      </button>
      <button 
        onClick={nextSlide} 
        className="hidden sm:block absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-transparent text-[#0F2A44] text-xl sm:text-2xl font-bold flex items-center justify-center hover:bg-white hover:scale-110 hover:shadow-xl transition-all duration-300 shadow-2xl z-10 group"
      >
        ›
        <span className="absolute -right-14 top-1/2 -translate-y-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Next
        </span>
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center gap-2 sm:gap-3 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 hover:scale-150 hover:bg-white ${
              index === i 
                ? 'bg-transparent scale-125' 
                : 'bg-transparent hover:bg-white/50'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

/* ================= ENHANCED FADE IN ANIMATION ================= */

function FadeIn({ children, delay = 0, direction = "up" }: { 
  children: React.ReactNode; 
  delay?: number;
  direction?: "up" | "left" | "right";
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  const translateClass = {
    up: 'translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8'
  }[direction];

  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${translateClass}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ================= INSTITUTION DETAILS SECTION ================= */

function InstitutionDetailsSection() {
  const institutionDetails = {
    collegeCode: "MUHS 161117",
    dmerCode: "06169",
    email: "brharnephysiotherapy6169@gmail.com",
    phone: ["9920255543"],
    address: " Karav, Wangani, Tq: Ambarnath, Dist: Thane - 421503"
  };

  const whatsNewItems = [
    {
      id: 1,
      title: "BPT Admissions Open",
    },
    {
      id: 2,
      title: "Orientation Program Scheduled",
    },
    {
      id: 3,
      title: "New Physiotherapy Lab",
    },
     {
      id: 4,
      title: "Guest Lecture Conducted",
    },
     {
      id: 5,
      title: "Annual Sports Day",
    },
     {
      id: 6,
      title: "Workshop on Pain Management",
    },
     {
      id: 7,
      title: "University Examination Notice",
    }
  ];

  return (
  <div className="max-w-7xl mx-auto px-3 sm:px-4 py-9 sm:py-8">
    {/* Two Column Grid */}
    <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 h-auto lg:h-[400px]">
      
   {/* Left Column - Institution Details */}
<div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
  {/* Header with gradient */}
  <div className="bg-gradient-to-r from-[#0bc22d] to-[#F39C12] p-3 sm:p-4">
    <div className="flex items-center gap-2 sm:gap-3">
      <div className="w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-white/50 flex items-center justify-center">
        <span className="text-white text-sm sm:text-base">🏛️</span>
      </div>
      <div className="flex-grow">
        <div className="flex items-center gap-2">
          <h3 className="text-lg sm:text-xl font-bold text-white">Institution Details</h3>
        </div>
        <p className="text-white/90 text-xs sm:text-sm mt-0.5">Official contact information</p>
      </div>
    </div>
  </div>

  {/* Details Content */}
  <div className="p-3 sm:p-4">
    <div className="space-y-2">
      {/* Codes */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-gray-50 rounded-lg p-2 text-center">
          <div className="text-xs text-gray-500">College Code</div>
          <div className="font-bold text-gray-800 text-xs sm:text-sm">{institutionDetails.collegeCode}</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-2 text-center">
          <div className="text-xs text-gray-500">DMER/ARA Code</div>
          <div className="font-bold text-gray-800 text-xs sm:text-sm">{institutionDetails.dmerCode}</div>
        </div>
      </div>

      {/* Contact Details */}
      <div className="space-y-2">
        {/* Email */}
        <div className="flex items-center gap-2 p-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-r from-[#0bc22d]/10 to-[#F39C12]/10 flex items-center justify-center">
            <span className="text-[#0bc22d] text-xs sm:text-sm">📧</span>
          </div>
          <div className="flex-grow">
            <div className="text-xs text-gray-500">E-Mail</div>
            <a 
              href={`mailto:${institutionDetails.email}`}
              className="font-medium text-gray-800 text-xs block truncate"
            >
              {institutionDetails.email}
            </a>
          </div>
        </div>

        {/* Phone Numbers */}
        <div className="flex items-center gap-2 p-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-r from-[#0bc22d]/10 to-[#F39C12]/10 flex items-center justify-center">
            <span className="text-[#0bc22d] text-xs sm:text-sm">📞</span>
          </div>
          <div className="flex-grow">
            <div className="text-xs text-gray-500">Mobile</div>
            <div className="space-y-0.5">
              {institutionDetails.phone.map((number, idx) => (
                <a 
                  key={idx}
                  href={`tel:${number}`}
                  className="block font-medium text-gray-800 text-xs"
                >
                  {number}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-2 p-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-r from-[#0bc22d]/10 to-[#F39C12]/10 flex items-center justify-center">
            <span className="text-[#0bc22d] text-xs sm:text-sm">📍</span>
          </div>
          <div className="flex-grow">
            <div className="text-xs text-gray-500 mb-0.5">Office Address</div>
            <div className="font-medium text-gray-800 text-xs leading-tight">
              {institutionDetails.address}
            </div>
          </div>
        </div>
      </div>

      {/* Social Networks */}
      <div className="pt-2">
        <h2 className="text-xs sm:text-sm font-bold text-[#044614] mb-1.5">Follow Us:</h2>
        <div className="flex gap-2">
          {/* Facebook */}
          <a href="https://www.facebook.com/brhcop/" target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.676V1.325C24 .593 23.406 0 22.675 0z"/>
            </svg>
          </a>

          {/* Google */}
          <a href="https://www.google.com/search?q=B.+R.+Harne+College+of+Pharmacy" target="_blank" rel="noopener noreferrer" aria-label="Google">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 533.5 544.3">
              <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.4-34.1-4.1-50.3H272v95h146.9c-6.3 34-25.1 62.8-53.6 82v68h86.4c50.5-46.5 79.8-115.1 79.8-194.7z"/>
              <path fill="#34A853" d="M272 544.3c72.6 0 133.5-24.1 178-65.5l-86.4-68c-23.9 16-54.5 25.4-91.6 25.4-70.5 0-130-47.7-151.4-111.3H32.5v69.9c44.1 87.5 134.6 150.5 239.5 150.5z"/>
              <path fill="#FBBC05" d="M120.5 319.1c-10.7-32-10.7-66.8 0-98.8v-69.9H32.5c-39.5 78.8-39.5 172.4 0 251.2l88-82.5z"/>
              <path fill="#EA4335" d="M272 107.1c38.5-.6 73.1 13.2 100.5 39.1l75.3-75.3C406.5 24.7 344.6-.4 272 0 167.1 0 76.6 63 32.5 150.5l88 69.9C142 154.8 201.5 107.1 272 107.1z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/brharnecollegeofpharmacy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg className="w-7 h-7" viewBox="0 0 512 512">
              <linearGradient id="insta-gradient" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#feda75"/>
                <stop offset="25%" stopColor="#fa7e1e"/>
                <stop offset="50%" stopColor="#d62976"/>
                <stop offset="75%" stopColor="#962fbf"/>
                <stop offset="100%" stopColor="#4f5bd5"/>
              </linearGradient>
              <path fill="url(#insta-gradient)" d="M349.33 69.33H162.67C111.41 69.33 69.33 111.41 69.33 162.67v186.67c0 51.26 42.08 93.34 93.34 93.34h186.66c51.26 0 93.34-42.08 93.34-93.34V162.67c0-51.26-42.08-93.34-93.34-93.34zm61.33 280c0 33.92-27.41 61.33-61.33 61.33H162.67c-33.92 0-61.33-27.41-61.33-61.33V162.67c0-33.92 27.41-61.33 61.33-61.33h186.66c33.92 0 61.33 27.41 61.33 61.33v186.66z"/>
              <circle cx="256" cy="256" r="80" fill="url(#insta-gradient)"/>
              <circle cx="390" cy="122" r="20" fill="url(#insta-gradient)"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

    {/* Right Column - What's New */}
<div className="bg-white rounded-xl sm:rounded-2xl shadow-sm overflow-hidden relative">
  {/* Decorative corner elements */}
  <div className="absolute top-0 left-0 w-4 h-4 sm:w-6 sm:h-6 border-l-2 border-t-2 border-[#0bc22d] rounded-tl-xl group-hover:w-6 group-hover:h-6 sm:group-hover:w-8 sm:group-hover:h-8 transition-all duration-500"></div>
  <div className="absolute top-0 right-0 w-4 h-4 sm:w-6 sm:h-6 border-r-2 border-t-2 border-[#F39C12] rounded-tr-xl group-hover:w-6 group-hover:h-6 sm:group-hover:w-8 sm:group-hover:h-8 transition-all duration-500"></div>
  
  {/* Header with gradient and blinking indicator */}
  <div className="bg-gradient-to-r from-[#0bc22d] to-[#F39C12] p-2 sm:p-3 relative overflow-hidden">  
    <div className="flex items-center gap-2 sm:gap-3 relative z-10">
      <div className="relative">
        {/* Optional: Add pulsing effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0bc22d] to-[#F39C12] animate-ping opacity-20"></div>
        <div className="relative">
          <div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg">
            <span className="text-white text-sm sm:text-lg animate-bounce-slow">📢</span>
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <div className="flex items-center gap-2">
          <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-sm">What's New</h3>
        </div>
        <p className="text-white/90 text-xs sm:text-sm mt-0.5">Latest updates of college</p>
      </div>
    </div>
  </div>

  <div className="p-2 sm:p-3 bg-gradient-to-b from-white to-gray-50/50 group-hover:to-white transition-all duration-500">
    {/* Decorative vertical line */}
    <div className="absolute left-4 sm:left-8 top-12 sm:top-16 bottom-4 sm:bottom-8 w-0.5 bg-gradient-to-b from-[#0bc22d] via-gray-500 to-transparent "></div>
    <div className="space-y-2 sm:space-y-3 relative pl-2">
      {whatsNewItems.slice(0, 7).map((item, index) => (
        <div 
          key={item.id}
          className="group/item relative pl-4 sm:pl-5 py-1 sm:py-1.5 rounded-lg border-l-4 border-transparent cursor-pointer"
          style={{ transitionDelay: `${index * 50}ms` }}
        >
          {/* Custom bullet point */}
          <div className="absolute left-0 top-3 sm:top-4">
            {/* Outer ring that pulses */}
            <div className={`absolute -inset-1 rounded-full opacity-0 group-hover/item:opacity-100 group-hover/item:animate-ping transition-opacity duration-300 ${
              index === 0 ? 'bg-green-600' : 
              index === 1 ? 'bg-blue-600' : 
              index === 2 ? 'bg-red-600' :
              index === 3 ? 'bg-gray-600' :
              index === 4 ? 'bg-pink-500' :
              index === 5 ? 'bg-yellow-500' :
              index === 6 ? 'bg-indigo-500' :
              'bg-orange-600'
            }`}></div>
            
            {/* Main bullet point */}
            <div className={`relative w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full group-hover/item:scale-125 transition-transform duration-300 ${
              index === 0 ? 'bg-green-600 group-hover/item:bg-green-500' : 
              index === 1 ? 'bg-blue-600 group-hover/item:bg-blue-500' : 
              index === 2 ? 'bg-red-600 group-hover/item:bg-red-500' :
              index === 3 ? 'bg-gray-600 group-hover/item:bg-gray-500' :
              index === 4 ? 'bg-pink-500 group-hover/item:bg-pink-400' :
              index === 5 ? 'bg-yellow-500 group-hover/item:bg-yellow-400' :
              index === 6 ? 'bg-indigo-500 group-hover/item:bg-indigo-400' :
              'bg-orange-600 group-hover/item:bg-orange-500'
            }`}></div>
          </div>
          
          <div className="flex flex-col">
            <div className="flex justify-between items-start mb-0">
              <div className="flex items-center gap-1 flex-wrap">
                <h4 className="font-bold text-gray-800 group-hover/item:text-gray-900 group-hover/item:font-extrabold transition-all duration-300 text-xs sm:text-sm">
                  {item.title}
                </h4>
                {/* NEW badge */}
                <div className="mt-0.5 flex items-center gap-1">
                  <img 
                    src="new.gif" 
                    alt="New" 
                    className="w-4 h-4 sm:w-5 sm:h-5 group-hover/item:scale-110 transition-transform duration-300" 
                  />
                </div>
              </div>
            </div>         
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
    </div>
  </div>
);
}

/* ================= EVENT MODAL COMPONENT ================= */
function EventModal({ event, isOpen, onClose }: { event: any; isOpen: boolean; onClose: () => void }) {
  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-slide-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-gray-200 hover:scale-110 hover:shadow-md transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
        >
          ✕
        </button>

        {/* Event Image */}
        <div className="relative h-48 sm:h-64 overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <span className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold hover:scale-105 transition-transform duration-300 ${
              event.type === 'Academic' ? 'bg-blue-100 text-orange-800 hover:bg-blue-200' :
              event.type === 'Community' ? 'bg-green-100 text-green-600 hover:bg-green-200' :
              'bg-purple-100 text-purple-900 hover:bg-purple-200'
            }`}>
              {event.type}
            </span>
          </div>
        </div>

        {/* Event Content */}
        <div className="p-4 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#071b2d] mb-4 group-hover:text-[#0bc22d] transition-colors duration-300">{event.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
                  <span className="text-blue-600 text-sm sm:text-base">📅</span>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Date</p>
                  <p className="font-medium text-sm sm:text-base group-hover:text-blue-600 transition-colors duration-300">{event.date}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-green-100 transition-all duration-300">
                  <span className="text-green-600 text-sm sm:text-base">📍</span>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Location</p>
                  <p className="font-medium text-sm sm:text-base group-hover:text-green-600 transition-colors duration-300">{event.location}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-100 transition-all duration-300">
                  <span className="text-purple-600 text-sm sm:text-base">🎯</span>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Event Type</p>
                  <p className="font-medium text-sm sm:text-base group-hover:text-purple-600 transition-colors duration-300">{event.type}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-100 transition-all duration-300">
                  <span className="text-amber-600 text-sm sm:text-base">👥</span>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Expected Participants</p>
                  <p className="font-medium text-sm sm:text-base group-hover:text-amber-600 transition-colors duration-300">100+ Students</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 group-hover:text-[#0bc22d] transition-colors duration-300">Event Description</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              {event.fullDescription || event.description}
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#E8F5E9] to-[#FFF3E0] rounded-xl p-3 sm:p-4 border border-gray-200 hover:shadow-md hover:border-[#0bc22d]/30 transition-all duration-300">
            <h4 className="font-bold text-[#0e5c36] mb-2 text-sm sm:text-base group-hover:text-[#0bc22d] transition-colors duration-300">Key Highlights</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                <span className="text-green-600 mt-0.5 sm:mt-1 text-xs sm:text-sm group-hover:scale-125 transition-transform duration-300">✓</span>
                <span className="text-gray-700 text-xs sm:text-sm group-hover:text-gray-900 transition-colors duration-300">Expert speakers and industry professionals</span>
              </li>
              <li className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                <span className="text-green-600 mt-0.5 sm:mt-1 text-xs sm:text-sm group-hover:scale-125 transition-transform duration-300">✓</span>
                <span className="text-gray-700 text-xs sm:text-sm group-hover:text-gray-900 transition-colors duration-300">Interactive sessions and workshops</span>
              </li>
              <li className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                <span className="text-green-600 mt-0.5 sm:mt-1 text-xs sm:text-sm group-hover:scale-125 transition-transform duration-300">✓</span>
                <span className="text-gray-700 text-xs sm:text-sm group-hover:text-gray-900 transition-colors duration-300">Networking opportunities with peers</span>
              </li>
              <li className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                <span className="text-green-600 mt-0.5 sm:mt-1 text-xs sm:text-sm group-hover:scale-125 transition-transform duration-300">✓</span>
                <span className="text-gray-700 text-xs sm:text-sm group-hover:text-gray-900 transition-colors duration-300">Certificate of participation for all attendees</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-4">
            <div>
              <h4 className="font-semibold text-[#0e5c36] mb-2 text-sm sm:text-base group-hover:text-[#0bc22d] transition-colors duration-300">Registration Information</h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                Registration is open for all students. Please contact the event coordinator or visit the college office for registration details.
              </p>
            </div>

            <div className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
              <span className="text-gray-500 text-xs sm:text-sm group-hover:text-[#0bc22d] transition-colors duration-300">📧</span>
              <span className="text-gray-700 text-xs sm:text-sm group-hover:text-gray-900 transition-colors duration-300">Contact: events@brharnephysio.edu.in</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-4 sm:p-6">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 sm:px-6 sm:py-2 bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white font-medium rounded-lg hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base"
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= MAIN CONTENT ================= */

export default function HomePage() {
  const [upcomingEvents] = useState([
    {
      id: 1,
      title: "National Physiotherapy Conference",
      date: "15-16 March 2024",
      type: "Academic",
      description: "Annual conference featuring renowned physiotherapy experts",
      fullDescription: "Join us for the annual National Physiotherapy Conference where experts from across the country will discuss the latest advancements in physiotherapy and rehabilitation sciences. This two-day event features keynote speeches, research paper presentations, and hands-on workshops.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
      location: "Main Auditorium"
    },
    {
      id: 2,
      title: "Health Awareness Camp",
      date: "22 March 2024",
      type: "Community",
      description: "Free health check-up and consultation camp for local community",
      fullDescription: "Our annual Health Awareness Camp aims to provide free health check-ups and physiotherapy consultations to the local community. Services include blood pressure monitoring, basic health screening, physiotherapy assessments, and health education sessions.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=600&q=80",
      location: "College Ground"
    },
    {
      id: 3,
      title: "Sports Injury Workshop",
      date: "30 March 2024",
      type: "Workshop",
      description: "Hands-on workshop on sports injury management techniques",
      fullDescription: "This intensive workshop focuses on the latest techniques in sports injury management and rehabilitation. Participants will learn about injury prevention, assessment methods, and rehabilitation protocols for common sports injuries through practical demonstrations.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
      location: "Sports Complex"
    }
  ]);

  // Get highlighted events from events-data.ts
  const highlightedEvents = getHighlightedEvents();

  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (event: any) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const [otherInstitutes] = useState([
    {
      id: 1,
      name: "College of Engineering",
      description: "Comprehensive engineering programs with modern infrastructure",
      icon: "⚙️",
      color: "from-orange-500 to-red-500",
      link: "#"
    },
    {
      id: 2,
      name: "College of Pharmacy",
      description: "Pharmacy education with advanced laboratory facilities",
      icon: "💊",
      color: "from-green-500 to-emerald-500",
      link: "#"
    },
    {
      id: 3,
      name: "College of Architecture",
      description: "Architectural design and planning programs",
      icon: "🏛️",
      color: "from-purple-500 to-pink-500",
      link: "#"
    },
    {
      id: 4,
      name: "College of Agriculture",
      description: "Agricultural sciences and farming technology education",
      icon: "🌾",
      color: "from-yellow-500 to-orange-500",
      link: "#"
    },
    {
      id: 5,
      name: "School",
      description: "Primary and secondary education foundation",
      icon: "🏫",
      color: "from-blue-500 to-cyan-500",
      link: "#"
    },
    {
      id: 6,
      name: "College of Nursing",
      description: "Nursing education with clinical training facilities",
      icon: "👩‍⚕️",
      color: "from-pink-500 to-rose-500",
      link: "#"
    }
  ]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50/30 via-white to-orange-50/80">
      <ImageSlider />
      
      {/* Institution Details Section */}
      <InstitutionDetailsSection />

      {/* Event Modal */}
      <EventModal 
        event={selectedEvent} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-12">
        
        {/* College Introduction */}
        <FadeIn direction="right">
          <div className="mb-12 sm:mb-16">
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
              {/* College Image */}
              <div className="lg:w-[470px] w-full mb-6 lg:mb-0">
                <div className="relative group">
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border-4 border-white group-hover:shadow-2xl transition-all duration-500">
                    <img 
                      src="/clg-photo.jpg" 
                      alt="B.R. Harne College of Physiotherapy Campus" 
                      className="w-full h-[300px] sm:h-[450px] group-hover:scale-105 transition-transform duration-500 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0bc22d]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-full shadow-xl font-bold hover:scale-105 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base group-hover:from-[#0bc22d]/90 group-hover:to-[#F39C12]/90">
                    Our Campus
                  </div>
                </div>
              </div>
              
              {/* College Description */}
              <div className="lg:w-3/5 w-full">
                <div className="mb-4 sm:mb-6">
                  <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#0F2A44] bg-clip-text text-transparent bg-gradient-to-r from-[#0bc22d] to-[#0c6666] group-hover:from-[#0bc22d]/90 group-hover:to-[#0c6666]/90 transition-all duration-500">
                      About Us
                    </h1>
                  </div>
                  <div className="h-1 w-20 sm:w-30 bg-gradient-to-r from-[#165321] to-[#F39C12] rounded-full mb-4 sm:mb-6 group-hover:w-24 sm:group-hover:w-36 transition-all duration-500"></div>
                </div>
                
                <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                  <p className="text-justify group-hover:text-gray-800 transition-colors duration-300">
                  B. R. Harne College of Physiotherapy established in the year 2021 under the aegis of 
                  Jai Shree Siddhivinayak Foundation's is affiliated to Maharashtra University of Health Sciences, Nashik. 
                  Our undergraduate program for Bachelors of Physiotherapy (BPTh.) was also stated in the Academic Year 2021-22.
                  </p>
                  <p className="text-justify group-hover:text-gray-800 transition-colors duration-300">
                  Our college imparts in our undergraduate students a Holistic, Comprehensive and scientific approach 
                  towards patients along with offering Physiotherapy and Rehabilitation services. We are striving hard to 
                  create an inducive society where skills and talents of special individuals are empowered and recognized in the society.
                  </p>
                  <p className="text-justify group-hover:text-gray-800 transition-colors duration-300">
                  B. R. Harne College of Physiotherapy under Jai Shree Siddhivinayak Foundation's is a growing institution
                  which pledges to focus on imparting knowledge along with skills to all our students and also focus on 
                  problem based learning approach an innovative educational strategies to promote blending of clinical 
                  and basic sciences.
                  </p>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-6 sm:mt-8">
                  <div className="text-center bg-gradient-to-b from-white to-green-100 p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 hover:border-[#0bc22d]/30 hover:scale-105 transition-all duration-300 group">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0F2A44] mb-1 sm:mb-2 group-hover:text-[#0bc22d] transition-colors duration-300">2021</div>
                    <div className="text-gray-600 font-medium text-xs sm:text-sm group-hover:text-[#0bc22d] transition-colors duration-300">Established</div>
                  </div>
                  <div className="text-center bg-gradient-to-b from-white to-green-100 p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 hover:border-[#0bc22d]/30 hover:scale-105 transition-all duration-300 group">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0F2A44] mb-1 sm:mb-2 group-hover:text-[#0bc22d] transition-colors duration-300">MUHS</div>
                    <div className="text-gray-600 font-medium text-xs sm:text-sm group-hover:text-[#0bc22d] transition-colors duration-300">Affiliation</div>
                  </div>
                  <div className="text-center bg-gradient-to-b from-white to-green-100 p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 hover:border-[#0bc22d]/30 hover:scale-105 transition-all duration-300 group">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0F2A44] mb-1 sm:mb-2 group-hover:text-[#0bc22d] transition-colors duration-300">BPT</div>
                    <div className="text-gray-600 font-medium text-xs sm:text-sm group-hover:text-[#0bc22d] transition-colors duration-300">Program</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Events Section */}
        <FadeIn delay={200} direction="left">
          <div className="mb-12 sm:mb-16">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0e5c36] mb-1 sm:mb-2 group-hover:text-[#0bc22d] transition-colors duration-500">Upcoming Events</h2>
                <p className="text-gray-800 text-sm sm:text-base group-hover:text-gray-900 transition-colors duration-500">Stay updated with our latest campus activities</p>
              </div>
              <Link 
                href="/events"
                className="bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 hover:from-[#0bc22d]/90 hover:to-[#F39C12]/90 transition-all duration-300 text-sm sm:text-base"
              >
                View All Events →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {upcomingEvents.map((event) => (
                <div 
                  key={event.id}
                  className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 overflow-hidden group"
                >
                  {/* Event Image */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img 
                      src={
                        event.id === 1 ? '/ev2.jpeg' :
                        event.id === 2 ? '/event4.jpeg' :
                        event.id === 3 ? '/ev5.jpeg' :
                        `/events/event-${event.id}.jpg`
                      }
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const fallbackImages = [
                          '/events/academic-event.jpg',
                          '/events/workshop-event.jpg',
                          '/events/seminar-event.jpg',
                          '/events/conference-event.jpg',
                          '/events/community-event.jpg',
                          '/events/cultural-event.jpg'
                        ];
                        e.currentTarget.src = fallbackImages[event.id % fallbackImages.length];
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-500"></div>
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                      <span className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold hover:scale-105 transition-transform duration-300 ${
                        event.type === 'Academic' ? 'bg-blue-100 text-orange-800 hover:bg-blue-200' :
                        event.type === 'Community' ? 'bg-green-100 text-green-600 hover:bg-green-200' :
                        'bg-purple-100 text-purple-900 hover:bg-purple-200'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/90 backdrop-blur-sm px-2 py-0.5 sm:px-3 sm:py-1 rounded-full group-hover:bg-white group-hover:scale-105 transition-all duration-300">
                      <span className="text-xs sm:text-sm font-medium text-gray-700">📅 {event.date}</span>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-[#071b2d] mb-2 sm:mb-3 group-hover:text-[#f1b510] transition-colors duration-300">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base group-hover:text-gray-700 transition-colors duration-300">
                      {event.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                        <span className="group-hover:scale-110 transition-transform duration-300">📍</span>
                        <span className="truncate group-hover:font-medium transition-all duration-300">{event.location}</span>
                      </div>
                      <button 
                        onClick={() => handleViewDetails(event)}
                        className="text-[#067825] font-semibold hover:text-[#324213] hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-1 sm:gap-2 cursor-pointer text-xs sm:text-sm"
                      >
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Highlighted Events Section */}
        <FadeIn delay={200} direction="right">
          <div className="mb-12 sm:mb-16">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0e5c36] mb-1 sm:mb-2 group-hover:text-[#0bc22d] transition-colors duration-500">Highlighted Events</h2>
              <p className="text-gray-800 text-sm sm:text-base group-hover:text-gray-900 transition-colors duration-500">Featured campus activities and achievements</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {highlightedEvents.map((event) => (
                <div 
                  key={event.id}
                  className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 overflow-hidden group"
                >
                  {/* Event Image */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img 
                      src={`/${event.image}`}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const fallbackImages = [
                          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
                          "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80",
                          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=600&q=80",
                        ];
                        e.currentTarget.src = fallbackImages[event.id - 9] || fallbackImages[0];
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-500"></div>
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                      <span className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold hover:scale-105 transition-transform duration-300 ${
                        event.category === 'Achievement' ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200' :
                        event.category === 'Recognition' ? 'bg-purple-100 text-purple-900 hover:bg-purple-200' :
                        event.category === 'Camp' ? 'bg-green-100 text-green-600 hover:bg-green-200' :
                        'bg-pink-100 text-pink-800 hover:bg-pink-200'
                      }`}>
                        {event.category}
                      </span>
                    </div>
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/90 backdrop-blur-sm px-2 py-0.5 sm:px-3 sm:py-1 rounded-full group-hover:bg-white group-hover:scale-105 transition-all duration-300">
                      <span className="text-xs sm:text-sm font-medium text-gray-700">🏆 Featured</span>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-[#071b2d] mb-2 sm:mb-3 group-hover:text-[#f1b510] transition-colors duration-300">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base group-hover:text-gray-700 transition-colors duration-300">
                      {event.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                        <span className="group-hover:scale-110 transition-transform duration-300">{event.emoji}</span>
                        <span className="truncate group-hover:font-medium transition-all duration-300">
                          {event.id === 9 ? 'Hosted 500+ Delegates' :
                           event.id === 10 ? 'State Level Award' :
                           event.id === 11 ? '2000+ Patients Served' :
                           event.location || event.capacity}
                        </span>
                      </div>
                      
                      {/* Replace button with Link for navigation */}
                      <Link 
                        href={`/events/${event.slug}`}
                        className="text-[#067825] font-semibold hover:text-[#324213] hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Why Choose Us Section */}
        <FadeIn delay={400} direction="up">
          <div className="bg-gradient-to-r from-[#0F2A44]/5 via-[#1CA7A6]/5 to-[#0F2A44]/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-[#1CA7A6]/20 mb-12 sm:mb-16 hover:border-[#0bc22d]/30 hover:shadow-lg transition-all duration-500">
            <div className="text-center mb-8 sm:mb-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0F2A44] mb-2 sm:mb-4 group-hover:text-[#0bc22d] transition-colors duration-500">Why Choose Us</h3>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base group-hover:text-gray-800 transition-colors duration-500">
                Experience excellence in physiotherapy education with our comprehensive programs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: '👨‍⚕️',
                  title: 'Clinical Training',
                  desc: 'Hands-on clinical experience with modern equipment',
                  features: ['Hospital Tie-ups', 'Modern Equipment', 'Expert Guidance'],
                  gradient: 'from-blue-500 to-cyan-500',
                  bgColor: 'bg-blue-50'
                },
                {
                  icon: '📚',
                  title: 'Library Resources',
                  desc: 'Extensive collection of medical books and journals',
                  features: ['Digital Library', 'Research Papers', 'Online Journals'],
                  gradient: 'from-blue-500 to-cyan-500',
                  bgColor: 'bg-blue-50'
                },
                {
                  icon: '🏅',
                  title: 'Placement Support',
                  desc: '100% placement assistance for graduating students',
                  features: ['Career Guidance', 'Interview Prep', 'Industry Connect'],
                  gradient: 'from-emerald-500 to-teal-500',
                  bgColor: 'bg-emerald-50'
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#0F2A44] to-[#1CA7A6] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
                  
                  <div className={`relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 group-hover:border-transparent ${item.bgColor} group-hover:bg-gradient-to-br group-hover:from-white group-hover:via-white group-hover:to-${item.bgColor.split(' ')[0]}`}>
                    
                    {/* Animated icon */}
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0F2A44]/10 to-[#1CA7A6]/10 flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:${item.gradient} transition-all duration-500">
                      <span className="text-xl sm:text-3xl group-hover:text-white transition-colors duration-500">{item.icon}</span>
                    </div>
                    
                    <h4 className="text-lg sm:text-xl font-bold text-[#0F2A44] mb-3 sm:mb-4 text-center group-hover:bg-gradient-to-r group-hover:from-[#0F2A44] group-hover:to-[#1CA7A6] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                      {item.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-4 sm:mb-6 text-center group-hover:text-gray-700 transition-colors duration-300 text-sm sm:text-base">
                      {item.desc}
                    </p>
                    
                    <div className="space-y-1 sm:space-y-2">
                      {item.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 sm:gap-3 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${fIdx * 100}ms` }}>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#1CA7A6] group-hover:scale-125 group-hover:bg-[#0bc22d] transition-all duration-300"></div>
                          <span className="text-xs sm:text-sm text-gray-700 group-hover:text-[#0F2A44] group-hover:font-medium transition-all duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Animated bottom indicator */}
                    <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100 group-hover:border-[#1CA7A6]/30 transition-colors duration-500">
                      <div className="text-center">
                        <span className="text-xs text-gray-500 group-hover:text-[#1CA7A6] group-hover:font-medium transition-all duration-300">
                          Learn more →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Other Institutes Section */}
        <FadeIn delay={300} direction="up">
          <div className="mb-12 sm:mb-16">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0F2A44] mb-2 sm:mb-4 group-hover:text-[#0bc22d] transition-colors duration-500">Other Institutes</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base group-hover:text-gray-800 transition-colors duration-500">
                Part of the prestigious B. R. Harne educational network
              </p>
            </div>
            
            {/* Grid of 6 Institutes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {/* Engineering Card */}
              <div className="group relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-orange-200 hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-200 to-orange-300 opacity-20 rounded-full -translate-y-8 sm:-translate-y-12 translate-x-8 sm:translate-x-12 group-hover:scale-125 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <span className="text-lg sm:text-2xl text-white group-hover:scale-110 transition-transform duration-300">⚙️</span>
                  </div>
                  <h3 className="text-center text-sm sm:text-lg font-bold text-[#0F2A44] mb-1 group-hover:text-orange-600 transition-colors duration-300">Engineering</h3>
                  <p className="text-center text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">B. R. Harne College of Engineering and Technology</p>
                </div>
              </div>
              
              {/* Pharmacy Card */}
              <div className="group relative bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-emerald-200 hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-emerald-200 to-green-300 opacity-20 rounded-full -translate-y-8 sm:-translate-y-12 translate-x-8 sm:translate-x-12 group-hover:scale-125 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <span className="text-lg sm:text-2xl text-white group-hover:scale-110 transition-transform duration-300">💊</span>
                  </div>
                  <h3 className="text-center text-sm sm:text-lg font-bold text-[#0F2A44] mb-1 group-hover:text-green-600 transition-colors duration-300">Pharmacy</h3>
                  <p className="text-center text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">B. R. Harne College of Pharmacy</p>
                </div>
              </div>
              
              {/* Architecture Card */}
              <div className="group relative bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-violet-200 hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-violet-200 to-purple-300 opacity-20 rounded-full -translate-y-8 sm:-translate-y-12 translate-x-8 sm:translate-x-12 group-hover:scale-125 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <span className="text-lg sm:text-2xl text-white group-hover:scale-110 transition-transform duration-300">🏛️</span>
                  </div>
                  <h3 className="text-center text-sm sm:text-lg font-bold text-[#0F2A44] mb-1 group-hover:text-purple-600 transition-colors duration-300">Architecture</h3>
                  <p className="text-center text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Architectural Design Programs</p>
                </div>
              </div>
              
              {/* Agriculture Card */}
              <div className="group relative bg-gradient-to-br from-yellow-50 to-amber-100 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-amber-200 hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-amber-200 to-yellow-300 opacity-20 rounded-full -translate-y-8 sm:-translate-y-12 translate-x-8 sm:translate-x-12 group-hover:scale-125 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <span className="text-lg sm:text-2xl text-white group-hover:scale-110 transition-transform duration-300">🌾</span>
                  </div>
                  <h3 className="text-center text-sm sm:text-lg font-bold text-[#0F2A44] mb-1 group-hover:text-amber-600 transition-colors duration-300">Agriculture</h3>
                  <p className="text-center text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Agricultural Sciences</p>
                </div>
              </div>
              
              {/* School Card */}
              <div className="group relative bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-cyan-200 hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-cyan-200 to-blue-300 opacity-20 rounded-full -translate-y-8 sm:-translate-y-12 translate-x-8 sm:translate-x-12 group-hover:scale-125 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <span className="text-lg sm:text-2xl text-white group-hover:scale-110 transition-transform duration-300">🏫</span>
                  </div>
                  <h3 className="text-center text-sm sm:text-lg font-bold text-[#0F2A44] mb-1 group-hover:text-blue-600 transition-colors duration-300">School</h3>
                  <p className="text-center text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Primary & Secondary Education</p>
                </div>
              </div>
              
              {/* Nursing Card */}
              <div className="group relative bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-rose-200 hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-rose-200 to-pink-300 opacity-20 rounded-full -translate-y-8 sm:-translate-y-12 translate-x-8 sm:translate-x-12 group-hover:scale-125 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <span className="text-lg sm:text-2xl text-white group-hover:scale-110 transition-transform duration-300">👩‍⚕️</span>
                  </div>
                  <h3 className="text-center text-sm sm:text-lg font-bold text-[#0F2A44] mb-1 group-hover:text-pink-600 transition-colors duration-300">Nursing</h3>
                  <p className="text-center text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">B. R. Harne School of Nursing (GNN)</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 1s ease-in-out infinite;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .animate-blink {
          animation: blink 1.2s infinite;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-out forwards;
        }
      `}</style>
    </main>
  );
}