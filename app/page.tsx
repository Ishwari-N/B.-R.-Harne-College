'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { getHighlightedEvents } from '@/app/data/events-data';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

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
      className="relative w-full h-[45vh] sm:h-[60vh] md:h-[70vh] min-h-[300px] sm:min-h-[400px] md:min-h-[600px] overflow-hidden"
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
      
      {/* Mobile Touch Navigation */}
      <div className="sm:hidden absolute inset-0 flex z-20">
        <div 
          className="flex-1" 
          onClick={prevSlide}
        />
        <div 
          className="flex-1" 
          onClick={nextSlide}
        />
      </div>
      
      <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center gap-2 sm:gap-3 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 sm:w-2 sm:h-2 rounded-full transition-all duration-300 hover:scale-150 hover:bg-white ${
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
    up: 'translate-y-4 sm:translate-y-8',
    left: 'translate-x-4 sm:translate-x-8',
    right: '-translate-x-4 sm:-translate-x-8'
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
    { id: 1, title: "BPT Admissions Open" },
    { id: 2, title: "Orientation Program Scheduled" },
    { id: 3, title: "New Physiotherapy Lab" },
    { id: 4, title: "Guest Lecture Conducted" },
    { id: 5, title: "Annual Sports Day" },
    { id: 6, title: "Workshop on Pain Management" },
    { id: 7, title: "University Examination Notice" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-4 py-6 sm:py-8">
      <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 h-auto lg:h-[400px]">
        
        <div className="bg-white rounded-lg sm:rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-[#0bc22d] to-[#F39C12] p-3 sm:p-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-8 sm:h-8 rounded-full bg-white/50 flex items-center justify-center">
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

          <div className="p-3 sm:p-4">
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-gray-50 rounded-lg p-2 text-center">
                  <div className="text-xs text-gray-500">College Code</div>
                  <div className="font-bold text-gray-800 text-sm sm:text-sm">{institutionDetails.collegeCode}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 text-center">
                  <div className="text-xs text-gray-500">DMER/ARA Code</div>
                  <div className="font-bold text-gray-800 text-sm sm:text-sm">{institutionDetails.dmerCode}</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 p-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-r from-[#0bc22d]/10 to-[#F39C12]/10 flex items-center justify-center">
                    <span className="text-[#0bc22d] text-xs sm:text-sm">📧</span>
                  </div>
                  <div className="flex-grow">
                    <div className="text-xs text-gray-500">E-Mail</div>
                    <a 
                      href={`mailto:${institutionDetails.email}`}
                      className="font-medium text-gray-800 text-sm block truncate"
                    >
                      {institutionDetails.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-r from-[#0bc22d]/10 to-[#F39C12]/10 flex items-center justify-center">
                    <span className="text-[#0bc22d] text-xs sm:text-sm">📞</span>
                  </div>
                  <div className="flex-grow">
                    <div className="text-xs text-gray-500">Mobile</div>
                    <div className="space-y-0.5">
                      {institutionDetails.phone.map((number, idx) => (
                        <a 
                          key={idx}
                          href={`tel:${number}`}
                          className="block font-medium text-gray-800 text-sm"
                        >
                          {number}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-r from-[#0bc22d]/10 to-[#F39C12]/10 flex items-center justify-center">
                    <span className="text-[#0bc22d] text-xs sm:text-sm">📍</span>
                  </div>
                  <div className="flex-grow">
                    <div className="text-xs text-gray-500 mb-0.5">Office Address</div>
                    <div className="font-medium text-gray-800 text-sm leading-tight">
                      {institutionDetails.address}
                    </div>
                  </div>
                </div>
              </div>

              {/*follow us:*/}
<div className="pt-2">
  <div className="flex items-center">
    {/* "Follow Us:" text */}
    <h2 className="text-xs sm:text-sm font-bold text-[#044614] whitespace-nowrap">Follow Us:</h2>
{/* Icons - directly adjacent */}
<div className="flex gap-1 ml-2">
  {/* Facebook */}
  <a href="https://www.facebook.com/brhcop/" target="_blank" rel="noopener noreferrer" className="group">
    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-900 transition-all duration-300">
      <FaFacebookF className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
    </div>
  </a>

  {/* Instagram */}
  <a href="https://www.instagram.com/brharnecollegeofpharmacy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group">
    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center hover:opacity-90 transition-all duration-300">
      <FaInstagram className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
    </div>
  </a>

  {/* LinkedIn */}
  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="group">
    <div className="w-8 h-8 sm:w-8 sm:h-8 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-900 transition-all duration-300">
      <FaLinkedinIn className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
    </div>
  </a>

     {/* YouTube */}
      <a href="https://www.youtube.com/channel/UC1j0X3w9q4Q8V5Y6y2v7uJQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="group">
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-600 flex items-center justify-center hover:opacity-90 transition-all duration-300">
          <FaYoutube className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
        </div>
      </a>

</div>
  </div>
</div>
            </div>
          </div>
        </div>

    {/* Right Column - What's New - ALL ANIMATIONS PRESERVED */}
<div className="bg-white rounded-lg sm:rounded-2xl shadow-sm overflow-hidden relative group">
  {/* Decorative corner elements */}
  <div className="absolute top-0 left-0 w-3 h-3 sm:w-6 sm:h-6 border-l-2 border-t-2 border-[#0bc22d] rounded-tl-lg sm:rounded-tl-xl group-hover:w-6 group-hover:h-6 sm:group-hover:w-8 sm:group-hover:h-8 transition-all duration-500"></div>
  <div className="absolute top-0 right-0 w-3 h-3 sm:w-6 sm:h-6 border-r-2 border-t-2 border-[#F39C12] rounded-tr-lg sm:rounded-tr-xl group-hover:w-6 group-hover:h-6 sm:group-hover:w-8 sm:group-hover:h-8 transition-all duration-500"></div>
  
  {/* Header with gradient and blinking indicator - ALL ANIMATIONS PRESERVED */}
  <div className="bg-gradient-to-r from-[#0bc22d] to-[#F39C12] p-2 sm:p-3 relative overflow-hidden">  
    <div className="flex items-center gap-2 sm:gap-3 relative z-10">
      <div className="relative">
        {/* Optional: Add pulsing effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0bc22d] to-[#F39C12] animate-ping opacity-20"></div>
        <div className="relative">
          <div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
          <div className="relative w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg">
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
    <div className="absolute left-3 sm:left-8 top-10 sm:top-16 bottom-3 sm:bottom-8 w-0.5 bg-gradient-to-b from-[#0bc22d] via-gray-500 to-transparent "></div>
    <div className="space-y-2 sm:space-y-3 relative pl-2">
      {whatsNewItems.slice(0, 7).map((item, index) => (
        <div 
          key={item.id}
          className="group/item relative pl-4 sm:pl-5 py-1 sm:py-1.5 rounded-lg border-l-4 border-transparent cursor-pointer"
          style={{ transitionDelay: `${index * 50}ms` }}
        >
          {/* Custom bullet point - ALL ANIMATIONS PRESERVED */}
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
                <h4 className="font-bold text-gray-800 group-hover/item:text-gray-900 group-hover/item:font-extrabold transition-all duration-300 text-sm sm:text-sm">
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-white rounded-lg sm:rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-slide-up">
        <button
          onClick={onClose}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-gray-200 hover:scale-110 hover:shadow-md transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
        >
          ✕
        </button>

        <div className="relative h-40 sm:h-64 overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
            <span className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold hover:scale-105 transition-transform duration-300 ${
              event.type === 'Academic' ? 'bg-blue-100 text-orange-800 hover:bg-blue-200' :
              event.type === 'Community' ? 'bg-green-100 text-green-600 hover:bg-green-200' :
              'bg-purple-100 text-purple-900 hover:bg-purple-200'
            }`}>
              {event.type}
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#071b2d] mb-3 sm:mb-4 group-hover:text-[#0bc22d] transition-colors duration-300">{event.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
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

          <div className="mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 group-hover:text-[#0bc22d] transition-colors duration-300">Event Description</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              {event.fullDescription || event.description}
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#E8F5E9] to-[#FFF3E0] rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-200 hover:shadow-md hover:border-[#0bc22d]/30 transition-all duration-300">
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
      date: "February 20, 2026",
      type: "Academic",
      description: "Annual conference featuring renowned physiotherapy experts",
      fullDescription: "Join us for the annual National Physiotherapy Conference where experts from across the country will discuss the latest advancements in physiotherapy and rehabilitation sciences. This two-day event features keynote speeches, research paper presentations, and hands-on workshops.",
      image: "/ev2.jpeg",
      location: "Main Auditorium"
    },
    {
      id: 2,
      title: "Health Awareness Camp",
      date: "February 26, 2026",
      type: "Community",
      description: "Free health check-up and consultation camp for local community",
      fullDescription: "Our annual Health Awareness Camp aims to provide free health check-ups and physiotherapy consultations to the local community. Services include blood pressure monitoring, basic health screening, physiotherapy assessments, and health education sessions.",
      image: "/event4.jpeg",
      location: "College Ground"
    },
    {
      id: 3,
      title: "Sports Injury Workshop",
      date: "March 10, 2026",
      type: "Workshop",
      description: "Hands-on workshop on sports injury management techniques",
      fullDescription: "This intensive workshop focuses on the latest techniques in sports injury management and rehabilitation. Participants will learn about injury prevention, assessment methods, and rehabilitation protocols for common sports injuries through practical demonstrations.",
      image: "/ev5.jpeg",
      location: "Sports Complex"
    },
    {
      id: 4,
      title: "Cardiac Rehabilitation Seminar",
      date: "April 15, 2026",
      type: "Academic",
      description: "Advanced seminar on cardiac rehabilitation protocols and post-operative care",
      fullDescription: "This comprehensive seminar covers the latest advancements in cardiac rehabilitation, focusing on evidence-based protocols for post-cardiac surgery patients, heart failure management, and cardiovascular disease prevention strategies through exercise therapy and lifestyle modifications.",
      image: "/ev2.jpeg",
      location: "Cardiology Department"
    },
    {
      id: 5,
      title: "Pediatric Physiotherapy Symposium",
      date: "May 22, 2026",
      type: "Workshop",
      description: "Specialized symposium focusing on pediatric assessment and treatment techniques",
      fullDescription: "An interactive symposium dedicated to pediatric physiotherapy, covering developmental milestones, assessment tools for children with special needs, neurodevelopmental treatment approaches, and family-centered care models for infants and children with motor disabilities.",
      image: "/ev3.jpeg",
      location: "Pediatrics Wing"
    },
    {
      id: 6,
      title: "Neurological Rehabilitation Conference",
      date: "June 18, 2026",
      type: "Conference",
      description: "National conference on advanced neurological rehabilitation techniques",
      fullDescription: "A premier conference bringing together leading neurologists and rehabilitation specialists to discuss cutting-edge interventions for stroke, spinal cord injuries, Parkinson's disease, and multiple sclerosis. Features live demonstrations of robotic-assisted therapy and neuroplasticity-based approaches.",
      image: "/ev4.jpeg",
      location: "Neuro-Rehabilitation Center"
    }
  ]);

  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  // Get highlighted events from events-data.ts
  const highlightedEvents = getHighlightedEvents();

  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto-rotate events every 5 seconds
  useEffect(() => {
    if (!isAutoRotating || upcomingEvents.length <= 3) return;
    
    const interval = setInterval(() => {
      setCurrentEventIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= upcomingEvents.length ? 0 : nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoRotating, upcomingEvents.length]);

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
      name: "B.R. Harne College of Engineering and Technology",
      abbreviation: "ENGINEERING",
      description: "Comprehensive engineering programs with modern infrastructure",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      textColor: "text-orange-600",
      gradient: "from-orange-500 to-red-500",
      logo: "/engg.png",
      link: "#"
    },
    {
      id: 2,
      name: "B.R. Harne College of Pharmacy",
      abbreviation: "PHARMACY",
      description: "Pharmacy education with advanced laboratory facilities",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
      borderColor: "border-emerald-200",
      textColor: "text-green-600",
      gradient: "from-green-500 to-emerald-500",
      logo: "/pharmacy.png",
      link: "#"
    },
    {
      id: 3,
      name: "B.R. Harne College of Architecture",
      abbreviation: "ARCHITECTURE",
      description: "Architectural design and planning programs",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-100",
      borderColor: "border-violet-200",
      textColor: "text-purple-600",
      gradient: "from-purple-500 to-violet-500",
      logo: "🏛️",
      link: "#"
    },
    {
      id: 4,
      name: "B.R. Harne College of Ayurvedic",
      abbreviation: "AYURVEDIC",
      description: "Ayurvedic sciences and farming technology education",
      bgColor: "bg-gradient-to-br from-yellow-50 to-amber-100",
      borderColor: "border-amber-200",
      textColor: "text-amber-600",
      gradient: "from-yellow-500 to-amber-500",
      logo: "/ayurvedic.png",
      link: "#"
    },
    {
      id: 5,
      name: "B.R. Harne School",
      abbreviation: "SCHOOL",
      description: "Primary and secondary education foundation",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-100",
      borderColor: "border-cyan-200",
      textColor: "text-blue-600",
      gradient: "from-blue-500 to-cyan-500",
      logo: "🏫",
      link: "#"
    },
    {
      id: 6,
      name: "B.R. Harne School of Nursing (GNN)",
      abbreviation: "NURSING",
      description: "Nursing education with clinical training facilities",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-100",
      borderColor: "border-rose-200",
      textColor: "text-pink-600",
      gradient: "from-pink-500 to-rose-500",
      logo: "👩‍⚕️",
      link: "#"
    }
  ]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50/30 via-white to-orange-50/80">
      <ImageSlider />
      
      <InstitutionDetailsSection />

      <EventModal 
        event={selectedEvent} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-4 lg:px-8 py-6 sm:py-12">
        
        <FadeIn direction="right">
          <div className="mb-8 sm:mb-16">
            <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 items-start">
              <div className="lg:w-[470px] w-full mb-5 sm:mb-0">
                <div className="relative group">
                  <div className="relative rounded-lg sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl border-4 border-white group-hover:shadow-2xl transition-all duration-500">
                    <img 
                      src="/clg-photo.jpg" 
                      alt="B.R. Harne College of Physiotherapy Campus" 
                      className="w-full h-[250px] sm:h-[450px] group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0bc22d]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-black px-3 sm:px-6 sm:py-2 rounded-full shadow-lg sm:shadow-xl font-bold hover:scale-105 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base group-hover:from-[#0bc22d]/90 group-hover:to-[#F39C12]/90">
                    Our Campus
                  </div>
                </div>
              </div>
              
              <div className="lg:w-3/5 w-full">
                <div className="mb-3 sm:mb-6">
                  <div className="inline-flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                    <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#0F2A44] bg-clip-text text-transparent bg-gradient-to-r from-[#0bc22d] to-[#0c6666] group-hover:from-[#0bc22d]/90 group-hover:to-[#0c6666]/90 transition-all duration-500">
                      About Us
                    </h1>
                  </div>
                  <div className="h-1 w-20 sm:w-30 bg-gradient-to-r from-[#165321] to-[#F39C12] rounded-full mb-3 sm:mb-6 group-hover:w-24 sm:group-hover:w-36 transition-all duration-500"></div>
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
                
                <div className="grid grid-cols-3 gap-2 sm:gap-6 mt-5 sm:mt-8">
                  <div className="text-center bg-gradient-to-b from-white to-green-100 p-3 sm:p-6 rounded-lg sm:rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 hover:border-[#0bc22d]/30 hover:scale-105 transition-all duration-300 group">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0F2A44] mb-1 sm:mb-2 group-hover:text-[#0bc22d] transition-colors duration-300">2021</div>
                    <div className="text-gray-600 font-medium text-xs sm:text-sm group-hover:text-[#0bc22d] transition-colors duration-300">Established</div>
                  </div>
                  <div className="text-center bg-gradient-to-b from-white to-green-100 p-3 sm:p-6 rounded-lg sm:rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 hover:border-[#0bc22d]/30 hover:scale-105 transition-all duration-300 group">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0F2A44] mb-1 sm:mb-2 group-hover:text-[#0bc22d] transition-colors duration-300">MUHS</div>
                    <div className="text-gray-600 font-medium text-xs sm:text-sm group-hover:text-[#0bc22d] transition-colors duration-300">Affiliation</div>
                  </div>
                  <div className="text-center bg-gradient-to-b from-white to-green-100 p-3 sm:p-6 rounded-lg sm:rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 hover:border-[#0bc22d]/30 hover:scale-105 transition-all duration-300 group">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0F2A44] mb-1 sm:mb-2 group-hover:text-[#0bc22d] transition-colors duration-300">BPT</div>
                    <div className="text-gray-600 font-medium text-xs sm:text-sm group-hover:text-[#0bc22d] transition-colors duration-300">Program</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
{/* Vision & Mission */}
<section className="relative py-1 px-1 place-self-start mb-4">
  <div className="max-w-6xl mx-auto">
    {/* Heading Section - at start with minimal padding */}
    <div className="mb-4 pl-1">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0e5c36] mb-1 sm:mb-2">Vision & Mission</h2>
      <p className="text-gray-800 text-sm sm:text-base">Guiding principles that illuminate our path to excellence</p>
    </div>
    
    {/* Vision & Mission Cards - full width with minimal side padding */}
    <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-3">
      {/* Vision Card */}
      <div className="group bg-gradient-to-br from-green-50 to-white p-5 md:p-6 rounded-xl md:rounded-2xl shadow-lg border-l-8 border-green-900 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 mx-1">
        <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
          <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-green-500 to-green-800 rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:from-green-400 group-hover:to-green-800 transition-all duration-300">
            <span className="text-lg md:text-xl group-hover:scale-110 transition-transform duration-300">👁️</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-green-800 transition-colors duration-300">
            Our Vision
          </h2>
        </div>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
          To be a premier institution of physiotherapy education, fostering innovation, 
          research, and compassionate patient care that transforms lives globally. We aim 
          to create leaders who will shape the future of healthcare with excellence and integrity.
        </p>
      </div>

      {/* Mission Card */}
      <div className="group bg-gradient-to-br from-orange-50 to-white p-5 md:p-6 rounded-xl md:rounded-2xl shadow-lg border-l-8 border-orange-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 mx-1">
        <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
          <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-orange-500 to-orange-800 rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:from-orange-400 group-hover:to-orange-700 transition-all duration-300">
            <span className="text-lg md:text-xl group-hover:scale-110 transition-transform duration-300">🎯</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-orange-800 transition-colors duration-300">
            Our Mission
          </h2>
        </div>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
          To provide high-quality clinical training, encourage lifelong learning, 
          and develop skilled healthcare professionals who serve the community with ethics and integrity. 
          We are committed to excellence in education, research, and patient care.
        </p>
      </div>
    </div>
  </div>
</section>

{/* UPDATED UPCOMING EVENTS SECTION - Mobile Stacked, Desktop Carousel */}
<FadeIn delay={400} direction="left">
  <div className="mb-5 sm:mb-20 pt-15">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-5 gap-3 sm:gap-4">
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0e5c36] mb-1 sm:mb-2 group-hover:text-[#0bc22d] transition-colors duration-500">Upcoming Events</h2>
        <p className="text-gray-800 text-sm sm:text-base group-hover:text-gray-900 transition-colors duration-500">Stay updated with our latest campus activities</p>
      </div>

         {/* Indicators */}
     <div className="flex justify-end gap-2 mb-1">
  {/* Minimal Left Arrow */}
  <button
    onClick={() => {
      setIsAutoRotating(false);
      setCurrentEventIndex((prev) => prev === 0 ? upcomingEvents.length - 1 : prev - 1);
      setTimeout(() => setIsAutoRotating(true), 10000);
    }}
    className="w-8 h-8 rounded-full bg-transparent hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group"
    aria-label="Previous event"
  >
    <svg 
      className="w-5 h-5 text-gray-500 group-hover:text-[#0bc22d] transition-colors duration-300" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
  
  {/* Minimal Right Arrow */}
  <button
    onClick={() => {
      setIsAutoRotating(false);
      setCurrentEventIndex((prev) => (prev + 1) % upcomingEvents.length);
      setTimeout(() => setIsAutoRotating(true), 10000);
    }}
    className="w-8 h-8 rounded-full bg-transparent hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group"
    aria-label="Next event"
  >
    <svg 
      className="w-5 h-5 text-gray-500 group-hover:text-[#0bc22d] transition-colors duration-300" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
    </svg>
  </button>
</div>
    </div>
    
    {/* Mobile: Stacked Events */}
    <div className="sm:hidden space-y-4">
      {upcomingEvents.slice(0, 3).map((event) => (
        <div 
          key={event.id}
          className="bg-white rounded-lg shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden group h-full"
        >
          {/* Event Image */}
          <div className="relative h-40 overflow-hidden">
            <div className="absolute inset-0 transform group-hover:scale-110 transition-transform duration-700">
              <img 
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const fallbackImages = [
                    '/ev2.jpeg',
                    '/event4.jpeg',
                    '/ev5.jpeg',
                    '/ev3.jpeg',
                    '/ev4.jpeg',
                    '/health.jpeg',
                    '/sports.jpeg',
                    '/event1.jpeg'
                  ];
                  e.currentTarget.src = fallbackImages[event.id % fallbackImages.length];
                }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent group-hover:from-black/50 transition-all duration-500"></div>
            
            {/* Event Type Badge */}
            <div className="absolute top-2 left-2">
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold backdrop-blur-sm bg-white/90 ${
                event.type === 'Academic' ? 'text-blue-700' :
                event.type === 'Community' ? 'text-green-700' :
                event.type === 'Workshop' ? 'text-purple-700' :
                event.type === 'Conference' ? 'text-yellow-800' :
                'text-gray-800'
              }`}>
                <span className="mr-1">
                  {event.type === 'Academic' ? '🎓' : 
                   event.type === 'Community' ? '🤝' : 
                   event.type === 'Workshop' ? '⚙️' : 
                   event.type === 'Conference' ? '🎤' : '📅'}
                </span>
                {event.type}
              </span>
            </div>
          </div>
          
          {/* Event Content */}
          <div className="p-4">
            <h3 className="font-bold text-[#071b2d] mb-2 line-clamp-2">
              {event.title}
            </h3>

            <div className="space-y-2 mb-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center">
                  <span className="text-blue-600">📅</span>
                </div>
                <div>{event.date}</div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-7 h-7 rounded-full bg-green-50 flex items-center justify-center">
                  <span className="text-green-600">📍</span>
                </div>
                <div>{event.location}</div>
              </div>
            </div>
            
            <button 
              onClick={() => handleViewDetails(event)}
              className="w-full bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
    
    {/* Desktop: Carousel */}
    <div className="hidden sm:block">

      <div className="relative overflow-hidden rounded-xl">
        {/* Events Container with sliding animation */}
        <div className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentEventIndex * 33.333}%)` }}>
          {[...upcomingEvents, ...upcomingEvents.slice(0, 3)].map((event, index) => (
            <div 
              key={`${event.id}-${index}`}
              className="w-1/3 flex-shrink-0 px-2 sm:px-3"
            >
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 overflow-hidden group h-full">
                {/* Event Image with parallax effect */}
                <div className="relative h-52 sm:h-60 overflow-hidden">
                  <div className="absolute inset-0 transform group-hover:scale-110 transition-transform duration-700">
                    <img 
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Use existing images as fallbacks
                        const fallbackImages = [
                          '/ev2.jpeg',
                          '/event4.jpeg',
                          '/ev5.jpeg',
                          '/ev3.jpeg',
                          '/ev4.jpeg',
                          '/health.jpeg',
                          '/sports.jpeg',
                          '/event1.jpeg'
                        ];
                        e.currentTarget.src = fallbackImages[event.id % fallbackImages.length];
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent group-hover:from-black/50 transition-all duration-500"></div>
                  
                  {/* Event Type Badge with floating effect */}
                  <div className="absolute top-0.5 transform group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300">
                    <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm bg-white/90 ${
                      event.type === 'Academic' ? 'text-blue-700' :
                      event.type === 'Community' ? 'text-green-700' :
                      event.type === 'Workshop' ? 'text-purple-700' :
                      event.type === 'Conference' ? 'text-yellow-800' :
                      'text-gray-800'
                    }`}>
                      <span className="mr-1.5 animate-pulse">
                        {event.type === 'Academic' ? '🎓' : 
                         event.type === 'Community' ? '🤝' : 
                         event.type === 'Workshop' ? '⚙️' : 
                         event.type === 'Conference' ? '🎤' : '📅'}
                      </span>
                      {event.type}
                    </span>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0bc22d]/10 via-transparent to-[#F39C12]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Event Content with slide-up animation */}
                <div className="p-4 sm:p-2 transform group-hover:translate-y-[-5px] transition-transform duration-300">
                  {/* Event Title with gradient text on hover */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#071b2d] mb-3 transition-all duration-500 line-clamp-2">
                    {event.title}
                  </h3>
{/* Event Details Grid with staggered animations */}
<div className="space-y-0.5 mb-2"> {/* Reduced from space-y-1 to space-y-0.5 */}
  {/* Date with fade-in animation */}
  <div className="flex items-center gap-1 text-sm text-gray-600 transition-colors duration-300 transform group-hover:translate-x-1">
    <div className="relative">
      <div className="w-8 h-8 rounded-full bg-transparent flex items-center justify-center ">
        <span className="text-blue-600">📅</span>
      </div>
      <div className="absolute -inset-1 bg-blue-200/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
    <div className="flex-1">
      <div className="font-medium transition-colors duration-300">{event.date}</div>
    </div>
  </div>
  
  {/* Location with fade-in animation */}
  <div className="flex items-center gap-1 text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 transform group-hover:translate-x-1" style={{ transitionDelay: '50ms' }}>
    <div className="relative">
      <div className="w-8 h-8 rounded-full bg-transparent flex items-center justify-center">
        <span className="text-green-600">📍</span>
      </div>
      <div className="absolute -inset-1 bg-green-200/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
    <div className="flex-1">
      <div className="font-medium transition-colors duration-300">{event.location}</div>
    </div>
  </div>
  
  {/* Time with fade-in animation */}
  <div className="flex items-center gap-1 text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 transform group-hover:translate-x-1" style={{ transitionDelay: '100ms' }}>
    <div className="relative">
      <div className="w-8 h-8 rounded-full bg-transparent flex items-center justify-center">
        <span className="text-amber-600">🕒</span>
      </div>
      <div className="absolute -inset-1 bg-amber-200/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
    <div className="flex-1">
      <div className="font-medium transition-colors duration-300">
        {event.id === 9 ? "10:00 AM - 4:00 PM" : 
         event.id === 10 ? "10:00 AM - 12:00 PM" : 
         "9:00 AM - 5:00 PM"}
      </div>
    </div>
  </div>
</div>
                  
                  {/* View Details Button with glow effect */}
                  <div className="border-t border-gray-100 pt-2 mt-1">
                    <button 
                      onClick={() => handleViewDetails(event)}
                      className="relative w-full bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white px-4 py-3 rounded-lg font-semibold hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group/btn"
                    >
                      {/* Button glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0bc22d]/0 via-white/20 to-[#F39C12]/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                      
                      <span className="relative">View Details</span>
                      <span className="relative group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-all duration-300">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</FadeIn>

{/* Highlighted Events Section */}
<FadeIn delay={200} direction="right">
  <div className="mb-20 sm:20">
    <div className="mb-8 sm:mb-8">
  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0e5c36] mb-1 sm:mb-2 group-hover:text-[#0bc22d] transition-colors duration-500">Highlighted Events</h2>
  <p className="text-gray-800 text-sm sm:text-base group-hover:text-gray-900 transition-colors duration-500">Featured campus activities and achievements</p>
</div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
      {highlightedEvents.map((event) => (
        <div 
          key={event.id}
          className="bg-white rounded-lg sm:rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 overflow-hidden group h-full"
        >
          
          {/* Event Image - Increased size */}
          <div className="relative h-40 sm:h-60 overflow-hidden">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/40 transition-all duration-500"></div>           
            {/* Category Badge */}
            <div className="absolute top-2">
              <span className={`py-1 sm:px-2 sm:py-1 rounded-full text-xs font-semibold hover:scale-105 transition-transform duration-300 ${
                event.category === 'Conference' ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' :
                event.category === 'Recognition' ? 'bg-purple-100 text-purple-800 hover:bg-purple-200' :
                event.category === 'Camp' ? 'bg-green-100 text-green-800 hover:bg-green-200' :
                'bg-pink-100 text-pink-800 hover:bg-pink-200'
              }`}>
                {event.category}
              </span>
            </div>
          </div>
          
          {/* Event Content - Increased padding */}
          <div className="p-3 sm:p-1">
            {/* Event Title */}
            <h3 className="text-lg sm:text-xl font-bold text-[#071b2d] mb-2 sm:mb-3 group-hover:text-[#f1b510] transition-colors duration-300 line-clamp-2">
              {event.title}
            </h3>

           {/* Event Details Grid */}
            <div className="space-y-0.5 mb-2">
              {/* Date */}
              <div className="flex items-center gap-2 text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-transparent flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <span className="text-blue-600">📅</span>
                </div>
                <div>
                  <div className="font-medium">{event.date}</div>
                </div>
              </div>
              
              {/* Location */}
              <div className="flex items-center gap-2 text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-transparent flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <span className="text-green-600">📍</span>
                </div>
                <div>
                  <div className="font-medium">{event.location}</div>
                </div>
              </div>
              
              {/* Time - Additional time display */}
              <div className="flex items-center gap-2 text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-transparent flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <span className="text-amber-600">🕒</span>
                </div>
                <div>
                  <div className="font-medium">
                    {event.id === 9 ? "10:00 AM - 4:00 PM" : 
                     event.id === 10 ? "10:00 AM - 12:00 PM" : 
                     "9:00 AM - 5:00 PM"}
                  </div>
                </div>
              </div>
            </div>
            
            {/* View Details Link - Changed to look like button but keeps Link functionality */}
            <div className="border-t border-gray-100 pt-2">
              <Link 
                href={`/events/${event.slug}`}
                className="w-full block text-center bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 hover:from-[#0bc22d]/90 hover:to-[#F39C12]/90 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Details
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
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
          <div className="bg-gradient-to-r from-[#0F2A44]/5 via-[#1CA7A6]/5 to-[#0F2A44]/5 rounded-lg sm:rounded-3xl p-4 sm:p-8 md:p-10 border border-[#1CA7A6]/20 mb-8 sm:mb-16 hover:border-[#0bc22d]/30 hover:shadow-lg transition-all duration-500">
            <div className="text-center mb-6 sm:mb-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0F2A44] mb-2 sm:mb-4 group-hover:text-[#0bc22d] transition-colors duration-500">Why Choose Us</h3>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base group-hover:text-gray-800 transition-colors duration-500">
                Experience excellence in physiotherapy education with our comprehensive programs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
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
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#0F2A44] to-[#1CA7A6] rounded-lg sm:rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
                  
                  <div className={`relative bg-white rounded-lg sm:rounded-2xl p-4 sm:p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 group-hover:border-transparent ${item.bgColor}`}>
                    
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-2xl bg-gradient-to-br from-[#0F2A44]/10 to-[#1CA7A6]/10 flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-all duration-500">
                      <span className="text-xl sm:text-3xl">{item.icon}</span>
                    </div>
                    
                    <h4 className="text-lg sm:text-xl font-bold text-[#0F2A44] mb-3 sm:mb-4 text-center">
                      {item.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-4 sm:mb-6 text-center text-sm sm:text-base">
                      {item.desc}
                    </p>
                    
                    <div className="space-y-1 sm:space-y-2">
                      {item.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 sm:gap-3" style={{ transitionDelay: `${fIdx * 100}ms` }}>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#1CA7A6]"></div>
                          <span className="text-xs sm:text-sm text-gray-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
{/* Other Institutes Section */}
<FadeIn delay={300}>
  <div className="mb-12 sm:mb-10">
    <div className="text-center mb-6 sm:mb-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#0F2A44] mb-2 sm:mb-4">Other Institutes</h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
        Part of the prestigious B. R. Harne educational network
      </p>
    </div>
    
    {/* Grid of 6 Institutes - Centered with fixed width */}
    <div className="flex justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {/* Engineering Card */}
        <div className="group relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-orange-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col items-center h-full min-h-[180px] sm:min-h-[220px]">
          <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-200 to-orange-300 opacity-20 rounded-full -translate-y-10 sm:-translate-y-12 translate-x-10 sm:translate-x-12 group-hover:scale-125 transition-transform duration-700"></div>
          <div className="relative z-10 w-full flex flex-col items-center justify-center h-full">
            {/* Logo - SIGNIFICANTLY increased size */}
            <div className="w-24 h-24 sm:w-45 sm:h-45 mx-auto mb-4 flex items-center justify-center">
              <img className='object-contain w-full h-full p-1' src="/engg (2).png" alt="Engineering" />
            </div>
            {/* Institute Name - Smaller text, one line */}
            <h3 className="text-center text-sm sm:text-base font-bold text-[#0F2A44] mb-1 line-clamp-1 w-full">Engineering</h3>
            <p className="text-center text-xs sm:text-sm text-gray-700 line-clamp-1 w-full">B. R. Harne College</p>
          </div>
        </div>
        
        {/* Pharmacy Card */}
        <div className="group relative bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-emerald-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col items-center h-full min-h-[180px] sm:min-h-[220px]">
          <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-emerald-200 to-green-300 opacity-20 rounded-full -translate-y-10 sm:-translate-y-12 translate-x-10 sm:translate-x-12 group-hover:scale-125 transition-transform duration-700"></div>
          <div className="relative z-10 w-full flex flex-col items-center justify-center h-full">
            {/* Logo - SIGNIFICANTLY increased size */}
            <div className="w-24 h-24 sm:w-42 sm:h-42 mx-auto mb-4 flex items-center justify-center">
              <img className='object-contain w-full h-full p-1' src="/pharmacy.png" alt="Pharmacy" />
            </div>
            {/* Institute Name - Smaller text, one line */}
            <h3 className="text-center text-sm sm:text-base font-bold text-[#0F2A44] mb-1 line-clamp-1 w-full">Pharmacy</h3>
            <p className="text-center text-xs sm:text-sm text-gray-700 line-clamp-1 w-full">B. R. Harne College</p>
          </div>
        </div>
        
        {/* Foundation Card */}
                <div className="group relative bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-rose-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col items-center h-full min-h-[180px] sm:min-h-[220px]">
          <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-rose-200 to-pink-300 opacity-20 rounded-full -translate-y-10 sm:-translate-y-12 translate-x-10 sm:translate-x-12 group-hover:scale-125 transition-transform duration-700"></div>
          <div className="relative z-10 w-full flex flex-col items-center justify-center h-full">
            {/* Logo - SIGNIFICANTLY increased size */}
            <div className="w-24 h-24 sm:w-42 sm:h-44 mx-auto mb-4 flex items-center justify-center">
              <img className='object-contain w-full h-full p-1' src="/foundation-2.png" alt="Foundation" />
            </div>
            {/* Institute Name - Smaller text, one line */}
            <h3 className="text-center text-sm sm:text-base font-bold text-[#190c34] mb-1 line-clamp-1 w-full">Foundation</h3>
            <p className="text-center text-xs sm:text-sm text-gray-700 line-clamp-1 w-full">Jai Shri Siddhivinayak</p>
          </div>
        </div>
        
        {/* Ayurvedic Card */}
        <div className="group relative bg-gradient-to-br from-yellow-50 to-amber-100 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-amber-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col items-center h-full min-h-[180px] sm:min-h-[220px]">
          <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-amber-200 to-yellow-300 opacity-20 rounded-full -translate-y-10 sm:-translate-y-12 translate-x-10 sm:translate-x-12 group-hover:scale-125 transition-transform duration-700"></div>
          <div className="relative z-10 w-full flex flex-col items-center justify-center h-full">
            {/* Logo - SIGNIFICANTLY increased size */}
            <div className="w-24 h-24 sm:w-42 sm:h-42 mx-auto mb-4 flex items-center justify-center">
              <img className='object-contain w-full h-full p-1' src="/ayurvedic.png" alt="Ayurvedic" />
            </div>
            {/* Institute Name - Smaller text, one line */}
            <h3 className="text-center text-sm sm:text-base font-bold text-[#0F2A44] mb-1 line-clamp-1 w-full">Ayurvedic</h3>
            <p className="text-center text-xs sm:text-sm text-gray-700 line-clamp-1 w-full">Ayurvedic Medical College</p>
          </div>
        </div>
        
        {/* Nursing Card */}
        <div className="group relative bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-violet-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col items-center h-full min-h-[180px] sm:min-h-[220px]">
          <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-violet-200 to-purple-300 opacity-20 rounded-full -translate-y-10 sm:-translate-y-12 translate-x-10 sm:translate-x-12 group-hover:scale-125 transition-transform duration-700"></div>
          <div className="relative z-10 w-full flex flex-col items-center justify-center h-full">
            {/* Logo - SIGNIFICANTLY increased size */}
            <div className="w-24 h-24 sm:w-42 sm:h-44 mx-auto mb-4 flex items-center justify-center">
              <img className='object-contain w-full h-full p-1' src="/nursing-2.jpg" alt="Nursing" />
            </div>
            {/* Institute Name - Smaller text, one line */}
            <h3 className="text-center text-sm sm:text-base font-bold text-[#0F2A44] mb-1 line-clamp-1 w-full">Nursing</h3>
            <p className="text-center text-xs sm:text-sm text-gray-700 line-clamp-1 w-full">B. R. Harne School</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</FadeIn>
      </div>

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