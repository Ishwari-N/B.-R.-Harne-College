'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

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
      className="relative w-full h-[70vh] min-h-[600px] overflow-hidden"
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
      
      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide} 
        className="absolute left-8 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-transparent text-[#0F2A44] text-2xl font-bold flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-2xl z-10"
      >
        ‹
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-8 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-transparent text-[#0F2A44] text-2xl font-bold flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-2xl z-10"
      >
        ›
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-115 ${
              index === i 
                ? 'bg-transparent scale-125' 
                : 'bg-transparent hover:bg-white/30'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

/* ================= FADE IN ANIMATION ================= */

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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

  const socialMedia = [
    { icon: "📱", label: "WhatsApp", color: "hover:bg-green-100 text-green-600" },
    { icon: "📘", label: "Facebook", color: "hover:bg-blue-100 text-blue-600" },
    { icon: "📷", label: "Instagram", color: "hover:bg-pink-100 text-pink-600" },
    { icon: "🐦", label: "Twitter", color: "hover:bg-sky-100 text-sky-600" }
  ];

 return (
  <div className="max-w-7xl mx-auto px-4 py-8">
    {/* Section Header */}

    {/* Two Column Grid - Horizontally stretched */}
    <div className="grid lg:grid-cols-2 gap-8 h-[400px]">
      
      {/* Left Column - Institution Details - Made smaller */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-[#0bc22d] to-[#F39C12] p-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center">
              <span className="text-white text-base">🏛️</span>
            </div>
            <div className="flex-grow">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold text-white drop-shadow-sm">Institution Details </h3>
        </div>
        <p className="text-white/90 text-sm mt-0.5">Offical contact information</p>
      </div>
          </div>
        </div>

        {/* Details Content - Made more compact */}
        <div className="p-3">
          <div className="space-y-3">
            {/* Codes - Compact grid */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="bg-gray-50 rounded-lg p-2 text-center border border-gray-100">
                <div className="text-xs text-gray-500">College Code</div>
                <div className="font-bold text-gray-800 text-xs">{institutionDetails.collegeCode}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-2 text-center border border-gray-100">
                <div className="text-xs text-gray-500">DMER/ARA Code</div>
                <div className="font-bold text-gray-800 text-xs">{institutionDetails.dmerCode}</div>
              </div>
            </div>

            {/* Contact Details - Compact */}
            <div className="space-y-2">
              {/* Email - Smaller */}
              <div className="flex items-center gap-2 p-2 bg-gray-50/50 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#0bc22d]/10 to-[#F39C12]/10 flex items-center justify-center">
                  <span className="text-[#0bc22d] text-sm">📧</span>
                </div>
                <div className="flex-grow">
                  <div className="text-xs text-gray-500">E-Mail</div>
                  <a 
                    href={`mailto:${institutionDetails.email}`}
                    className="font-medium text-gray-800 hover:text-[#0bc22d] transition-colors text-xs block truncate"
                  >
                    {institutionDetails.email}
                  </a>
                </div>
              </div>

              {/* Phone Numbers - Smaller */}
              <div className="flex items-center gap-2 p-2 bg-gray-50/50 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#0bc22d]/10 to-[#F39C12]/10 flex items-center justify-center">
                  <span className="text-[#0bc22d] text-sm">📞</span>
                </div>
                <div className="flex-grow">
                  <div className="text-xs text-gray-500">Mobile</div>
                  <div className="space-y-0.5">
                    {institutionDetails.phone.map((number, idx) => (
                      <a 
                        key={idx}
                        href={`tel:${number}`}
                        className="block font-medium text-gray-800 hover:text-[#0bc22d] transition-colors text-xs"
                      >
                        {number}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Address - Smaller */}
              <div className="flex items-start gap-2 p-2 bg-gray-50/50 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#0bc22d]/10 to-[#F39C12]/10 flex items-center justify-center">
                  <span className="text-[#0bc22d] text-sm">📍</span>
                </div>
                <div className="flex-grow">
                  <div className="text-xs text-gray-500 mb-0.5">Office Address</div>
                  <div className="font-medium text-gray-800 text-xs leading-tight">
                    {institutionDetails.address}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Networks - Smaller */}
            <div className="pt-2">
              <h2 className="text-sm font-bold text-[#044614] mb-1.5">Follow Us:</h2>
              <div className="flex gap-2.5">
                {/* Facebook */}
                <a href="https://www.facebook.com/brhcop/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.676V1.325C24 .593 23.406 0 22.675 0z"/>
                  </svg>
                </a>

                {/* Google */}
                <a href="https://www.google.com/search?q=B.+R.+Harne+College+of+Pharmacy" target="_blank" rel="noopener noreferrer" aria-label="Google" className="hover:scale-110 transition-transform">
                 <svg className="w-6 h-6" viewBox="0 0 533.5 544.3">
                  <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.4-34.1-4.1-50.3H272v95h146.9c-6.3 34-25.1 62.8-53.6 82v68h86.4c50.5-46.5 79.8-115.1 79.8-194.7z"/>
                  <path fill="#34A853" d="M272 544.3c72.6 0 133.5-24.1 178-65.5l-86.4-68c-23.9 16-54.5 25.4-91.6 25.4-70.5 0-130-47.7-151.4-111.3H32.5v69.9c44.1 87.5 134.6 150.5 239.5 150.5z"/>
                  <path fill="#FBBC05" d="M120.5 319.1c-10.7-32-10.7-66.8 0-98.8v-69.9H32.5c-39.5 78.8-39.5 172.4 0 251.2l88-82.5z"/>
                  <path fill="#EA4335" d="M272 107.1c38.5-.6 73.1 13.2 100.5 39.1l75.3-75.3C406.5 24.7 344.6-.4 272 0 167.1 0 76.6 63 32.5 150.5l88 69.9C142 154.8 201.5 107.1 272 107.1z"/>
                 </svg>
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/brharnecollegeofpharmacy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <defs>
                    <linearGradient id="insta-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#feda75"/>
                      <stop offset="25%" stopColor="#fa7e1e"/>
                      <stop offset="50%" stopColor="#d62976"/>
                      <stop offset="75%" stopColor="#962fbf"/>
                      <stop offset="100%" stopColor="#4f5bd5"/>
                    </linearGradient>
                    </defs>
                    <path 
                    fill="url(#insta-gradient)" 
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
                    />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    {/* Right Column - What's New - Creative Bulletin Style */}
<div className="bg-white rounded-xl shadow-sm overflow-hidden relative">
  {/* Decorative corner elements */}
  <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[#0bc22d] rounded-tl-xl"></div>
  <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-[#F39C12] rounded-tr-xl"></div>
  
  {/* Header with gradient and blinking indicator */}
  <div className="bg-gradient-to-r from-[#0bc22d] to-[#F39C12] p-2 relative overflow-hidden">  
    <div className="flex items-center gap-3 relative z-10">
      
      <div className="relative">
  {/* Optional: Add pulsing effect */}
  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0bc22d] to-[#F39C12] animate-ping opacity-20"></div>
  
  <div className="relative">
  <div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
  
  <div className="relative w-10 h-10 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:rotate-12 hover:shadow-lg">
    <span className="text-white text-lg animate-bounce-slow">📢</span>
  </div>
</div>
</div>
      <div className="flex-grow">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold text-white drop-shadow-sm">What's New</h3>
        </div>
        <p className="text-white/90 text-sm mt-0.5">Latest updates of college</p>
      </div>
    </div>
  </div>

<div className="p-2 bg-gradient-to-b from-white to-gray-50/50">
  {/* Decorative vertical line */}
  <div className="absolute left-8 top-16 bottom-8 w-0.5 bg-gradient-to-b from-[#0bc22d] via-gray-500 to-transparent"></div>
  
  <div className="space-y-3 relative pl-2">
    {whatsNewItems.slice(0, 7).map((item, index) => (
      <div 
        key={item.id}
        className="group relative pl-5 py-1.5 rounded-lg border-l-4 border-transparent hover:border-l-4 transition-all duration-300 cursor-pointer"
      >
         
        {/* Custom bullet point */}
        <div className="absolute left-0 top-4">
  {/* Outer ring that pulses */}
  <div className={`absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300 ${
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
  <div className={`relative w-2.5 h-2.5 rounded-full ${
    index === 0 ? 'bg-green-600' : 
    index === 1 ? 'bg-blue-600' : 
    index === 2 ? 'bg-red-600' :
    index === 3 ? 'bg-gray-600' :
    index === 4 ? 'bg-pink-500' :
    index === 5 ? 'bg-yellow-500' :
    index === 6 ? 'bg-indigo-500' :
    'bg-orange-600'
  }`}></div>
</div>
        
        <div className="flex flex-col">
          <div className="flex justify-between items-start mb-0">
            <div className="flex items-center gap-1">
              <h4 className="font-bold text-gray-800 group-hover:text-gray-900 transition-colors text-sm">
                 {item.title}
              </h4>
              {/* Yellow NEW badge with blink effect */}
              {/* Using the new.gif image with blinking effect */}
<div className="mt-1 flex items-center gap-1">
  <img 
    src="new.gif" 
    alt="New" 
    className="w-5 h-5" 
  />
</div>
            </div>
          </div>         
        </div>
      </div>
    ))}
  </div>
</div>

{/* Add custom animation for blinking */}
<style jsx>{`
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }
  .animate-blink {
    animation: blink 1.2s infinite;
  }
`}</style>

<style jsx>{`
  @keyframes bounce-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }
  .animate-bounce-slow {
    animation: bounce-slow 1s ease-in-out infinite;
  }
`}</style>
</div>
</div>
</div>
);
}

/* ================= EVENT MODAL COMPONENT ================= */
function EventModal({ event, isOpen, onClose }: { event: any; isOpen: boolean; onClose: () => void }) {
  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          ✕
        </button>

        {/* Event Image */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
              event.type === 'Academic' ? 'bg-blue-100 text-orange-800' :
              event.type === 'Community' ? 'bg-green-100 text-green-600' :
              'bg-purple-100 text-purple-900'
            }`}>
              {event.type}
            </span>
          </div>
        </div>

        {/* Event Content */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-[#071b2d] mb-4">{event.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <span className="text-blue-600">📅</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium">{event.date}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <span className="text-green-600">📍</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{event.location}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
                  <span className="text-purple-600">🎯</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Event Type</p>
                  <p className="font-medium">{event.type}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                  <span className="text-amber-600">👥</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Expected Participants</p>
                  <p className="font-medium">100+ Students</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Event Description</h3>
            <p className="text-gray-600 leading-relaxed">
              {event.fullDescription || event.description}
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#E8F5E9] to-[#FFF3E0] rounded-xl p-4 border border-gray-200">
            <h4 className="font-bold text-[#0e5c36] mb-2">Key Highlights</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span className="text-gray-700">Expert speakers and industry professionals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span className="text-gray-700">Interactive sessions and workshops</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span className="text-gray-700">Networking opportunities with peers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span className="text-gray-700">Certificate of participation for all attendees</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <h4 className="font-semibold text-[#0e5c36] mb-2">Registration Information</h4>
              <p className="text-gray-600">
                Registration is open for all students. Please contact the event coordinator or visit the college office for registration details.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-500">📧</span>
              <span className="text-gray-700">Contact: events@brharnephysio.edu.in</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-6">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
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
  // Upcoming Events Data with fullDescription for modal
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

  const highlightedEvents = [
    {
      id: 1,
      title: "National Physiotherapy Conference 2024",
      description: "College hosted the annual national conference with over 500 delegates from various institutions across the state. The event featured keynote speeches, research presentations, and hands-on workshops.",
      category: "Achievement",
      image: "/award.jpeg", // Changed to root folder
      details: "Hosted 500+ Delegates",
      icon: "👥",
      link: "/events/conference-2024",
      date: "March 15-16, 2024"
    },
    {
      id: 2,
      title: "Best College Award 2023-24",
      description: "Recognized as the best physiotherapy college in the state for academic excellence, infrastructure, and student outcomes. The award was presented by the State Health Education Department.",
      category: "Recognition",
      image: "/sports.jpeg", // Changed to root folder
      details: "State Level Award",
      icon: "🏆",
      link: "/events/award-2023",
      date: "December 10, 2023"
    },
    {
      id: 3,
      title: "Community Health Camp Success",
      description: "Served over 2000 patients in rural health camps organized across multiple villages. Provided free physiotherapy consultations, basic health check-ups, and awareness sessions.",
      category: "Achievement",
      image: "/health.jpeg", // Changed to root folder
      details: "2000+ Patients Served",
      icon: "❤️",
      link: "/events/health-camp",
      date: "November 5-10, 2023"
    }
  ];

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
      
      {/* Institution Details Section - Add it here */}
      <InstitutionDetailsSection />

      {/* Event Modal */}
      <EventModal 
        event={selectedEvent} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-12">
        
        {/* College Introduction */}
        <FadeIn>
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* College Image */}
              <div className="lg:w-[470px]">
                <div className="relative group">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <img 
                      src="/clg-photo.jpg" 
                      alt="B.R. Harne College of Physiotherapy Campus" 
                      className="w-full h-[450px] group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0bc22d]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white px-6 py-2 rounded-full shadow-xl font-bold hover:scale-105 transition-transform duration-300">
                    Our Campus
                  </div>
                </div>
              </div>
              
              {/* College Description */}
              <div className="lg:w-3/5">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <h1 className="text-3xl md:text-3xl font-bold text-[#0F2A44] bg-clip-text text-transparent bg-gradient-to-r from-[#0bc22d] to-[#0c6666]">
                      About Us
                    </h1>
                  </div>
                  <div className="h-1 w-30 bg-gradient-to-r from-[#165321] to-[#F39C12 ] rounded-full mb-6"></div>
                </div>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-justify">
                  B. R. Harne College of Physiotherapy established in the year 2021 under the aegis of 
                  Jai Shree Siddhivinayak Foundation's is affiliated to Maharashtra University of Health Sciences, Nashik. 
                  Our undergraduate program for Bachelors of Physiotherapy (BPTh.) was also stated in the Academic Year 2021-22.
                  </p>
                  <p className="text-justify">
                  Our college imparts in our undergraduate students a Holistic, Comprehensive and scientific approach 
                  towards patients along with offering Physiotherapy and Rehabilitation services. We are striving hard to 
                  create an inducive society where skills and talents of special individuals are empowered and recognized in the society.
                  </p>
                  <p className="text-justify">
                  B. R. Harne College of Physiotherapy under Jai Shree Siddhivinayak Foundation's is a growing institution
                  which pledges to focus on imparting knowledge along with skills to all our students and also focus on 
                  problem based learning approach an innovative educational strategies to promote blending of clinical 
                  and basic sciences.
                  </p>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mt-8">
                  <div className="text-center bg-gradient-to-b from-white to-green-100 p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="text-3xl font-bold text-[#0F2A44] mb-2">2021</div>
                    <div className="text-gray-600 font-medium">Established</div>
                  </div>
                  <div className="text-center bg-gradient-to-b from-white to-green-100 p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="text-3xl font-bold text-[#0F2A44] mb-2">MUHS</div>
                    <div className="text-gray-600 font-medium">Affiliation</div>
                  </div>
                  <div className="text-center bg-gradient-to-b from-white  to-green-100 p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="text-3xl font-bold text-[#0F2A44] mb-2">BPT</div>
                    <div className="text-gray-600 font-medium">Program</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Events Section with Images - CHANGED THIS SECTION */}
        <FadeIn delay={200}>
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-[#0e5c36] mb-2">Upcoming Events</h2>
                <p className="text-gray-800">Stay updated with our latest campus activities</p>
              </div>
              <Link 
                href="/events"
                className="bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white px-4 py-3 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                View All Events →
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <div 
                  key={event.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden group"
                >
                  {/* Event Image */}
                  <div className="relative h-48 overflow-hidden">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        event.type === 'Academic' ? 'bg-blue-100 text-orange-800' :
                        event.type === 'Community' ? 'bg-green-100 text-green-600' :
                        'bg-purple-100 text-purple-900'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-gray-700">📅 {event.date}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#071b2d] mb-3 group-hover:text-[#f1b510] transition-colors">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {event.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>📍</span>
                        <span>{event.location}</span>
                      </div>
                      <button 
                        onClick={() => handleViewDetails(event)}
                        className="text-[#067825] font-semibold hover:text-[#324213] transition-colors flex items-center gap-2 cursor-pointer"
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

        {/* Highlighted Events Section - FIXED */}
        <FadeIn delay={200}>
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-[#0e5c36] mb-2">Highlighted Events</h2>
                <p className="text-gray-800">Featured campus activities and achievements</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {highlightedEvents.map((event) => (
                <div 
                  key={event.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden group"
                >
                  {/* Event Image - Fixed with absolute paths */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback to Unsplash images if local images don't exist
                        const fallbackImages = [
                          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80", // Conference
                          "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80", // Award
                          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=600&q=80", // Health camp
                        ];
                        e.currentTarget.src = fallbackImages[event.id - 1];
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        event.category === 'Achievement' ? 'bg-yellow-100 text-yellow-800' :
                        event.category === 'Recognition' ? 'bg-purple-100 text-purple-900' :
                        'bg-pink-100 text-pink-800'
                      }`}>
                        {event.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-gray-700">🏆 Featured</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#071b2d] mb-3 group-hover:text-[#f1b510] transition-colors">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {event.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>{event.icon}</span>
                        <span>{event.details}</span>
                      </div>
                      <button 
                        onClick={() => handleViewDetails(event)}
                        className="text-[#067825] font-semibold hover:text-[#324213] transition-colors flex items-center gap-2"
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
        

        {/* Why Choose Us Section */}
        <FadeIn delay={400}>
  <div className="bg-gradient-to-r from-[#0F2A44]/5 via-[#1CA7A6]/5 to-[#0F2A44]/5 rounded-3xl p-8 md:p-10 border border-[#1CA7A6]/20">
    <div className="text-center mb-10">
      <h3 className="text-3xl font-bold text-[#0F2A44] mb-4">Why Choose Us</h3>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Experience excellence in physiotherapy education with our comprehensive programs
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          {/* Animated hover border effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#0F2A44] to-[#1CA7A6] rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
          
          <div className={`relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group-hover:border-transparent ${item.bgColor} group-hover:bg-gradient-to-br group-hover:from-white group-hover:via-white group-hover:to-${item.bgColor.split(' ')[0]}`}>
            
            {/* Animated icon */}
            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0F2A44]/10 to-[#1CA7A6]/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:${item.gradient} transition-all duration-500">
              <span className="text-3xl group-hover:text-white transition-colors duration-500">{item.icon}</span>
            </div>
            
            <h4 className="text-xl font-bold text-[#0F2A44] mb-4 text-center group-hover:bg-gradient-to-r group-hover:from-[#0F2A44] group-hover:to-[#1CA7A6] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
              {item.title}
            </h4>
            
            <p className="text-gray-600 mb-6 text-center group-hover:text-gray-700 transition-colors duration-300">
              {item.desc}
            </p>
            
            <div className="space-y-2">
              {item.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
                  <div className="w-2 h-2 rounded-full bg-[#1CA7A6] group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-sm text-gray-700 group-hover:text-[#0F2A44] transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Animated bottom indicator */}
            <div className="mt-6 pt-4 border-t border-gray-100 group-hover:border-[#1CA7A6]/30 transition-colors duration-500">
              <div className="text-center">
                <span className="text-xs text-gray-500 group-hover:text-[#1CA7A6] transition-colors duration-300">
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

      </div>

              {/* Other Institutes Section */}
        <FadeIn delay={300}>
  <div className="mb-16">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-[#0F2A44] mb-4">Other Institutes</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Part of the prestigious B. R. Harne educational network
      </p>
    </div>
    
    {/* Grid of 6 Institutes */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
      {/* Engineering Card */}
      <div className="group relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 shadow-lg border border-orange-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-200 to-orange-300 opacity-20 rounded-full -translate-y-12 translate-x-12 group-hover:scale-125 transition-transform duration-700"></div>
        <div className="relative z-10">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-2xl text-white">⚙️</span>
          </div>
          <h3 className="text-center text-lg font-bold text-[#0F2A44] mb-1">Engineering</h3>
          <p className="text-center text-sm text-gray-600">B. R. Harne College of Engineering and Technology</p>
        </div>
      </div>
      
      {/* Pharmacy Card */}
      <div className="group relative bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 shadow-lg border border-emerald-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-200 to-green-300 opacity-20 rounded-full -translate-y-12 translate-x-12 group-hover:scale-125 transition-transform duration-700"></div>
        <div className="relative z-10">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-2xl text-white">💊</span>
          </div>
          <h3 className="text-center text-lg font-bold text-[#0F2A44] mb-1">Pharmacy</h3>
          <p className="text-center text-sm text-gray-600">B. R. Harne College of Pharmacy</p>
        </div>
      </div>
      
      {/* Architecture Card */}
      <div className="group relative bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl p-6 shadow-lg border border-violet-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-violet-200 to-purple-300 opacity-20 rounded-full -translate-y-12 translate-x-12 group-hover:scale-125 transition-transform duration-700"></div>
        <div className="relative z-10">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-2xl text-white">🏛️</span>
          </div>
          <h3 className="text-center text-lg font-bold text-[#0F2A44] mb-1">Architecture</h3>
          <p className="text-center text-sm text-gray-600">Architectural Design Programs</p>
        </div>
      </div>
      
      {/* Agriculture Card */}
      <div className="group relative bg-gradient-to-br from-yellow-50 to-amber-100 rounded-xl p-6 shadow-lg border border-amber-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-200 to-yellow-300 opacity-20 rounded-full -translate-y-12 translate-x-12 group-hover:scale-125 transition-transform duration=700"></div>
        <div className="relative z-10">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-2xl text-white">🌾</span>
          </div>
          <h3 className="text-center text-lg font-bold text-[#0F2A44] mb-1">Agriculture</h3>
          <p className="text-center text-sm text-gray-600">Agricultural Sciences</p>
        </div>
      </div>
      
      {/* School Card */}
      <div className="group relative bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-6 shadow-lg border border-cyan-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-200 to-blue-300 opacity-20 rounded-full -translate-y-12 translate-x-12 group-hover:scale-125 transition-transform duration-700"></div>
        <div className="relative z-10">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-2xl text-white">🏫</span>
          </div>
          <h3 className="text-center text-lg font-bold text-[#0F2A44] mb-1">School</h3>
          <p className="text-center text-sm text-gray-600">Primary & Secondary Education</p>
        </div>
      </div>
      
      {/* Nursing Card */}
      <div className="group relative bg-gradient-to-br from-pink-50 to-rose-100 rounded-xl p-6 shadow-lg border border-rose-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-rose-200 to-pink-300 opacity-20 rounded-full -translate-y-12 translate-x-12 group-hover:scale-125 transition-transform duration-700"></div>
        <div className="relative z-10">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-2xl text-white">👩‍⚕️</span>
          </div>
          <h3 className="text-center text-lg font-bold text-[#0F2A44] mb-1">Nursing</h3>
          <p className="text-center text-sm text-gray-600">B. R. Harne School of Nursing (GNN)</p>
        </div>
      </div>
    </div>
  </div>
</FadeIn>
      
      {/* Custom CSS */}
      <style jsx>{`
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </main>
  );
}