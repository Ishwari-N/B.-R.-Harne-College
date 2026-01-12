// app/events/[slug]/ImageSlider.tsx
"use client";

import React, { useState, useEffect } from 'react';

const eventImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop', alt: 'Event keynote speaker' },
  { id: 2, src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop', alt: 'Audience participation' },
  { id: 3, src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop', alt: 'Networking session' },
  { id: 4, src: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&auto=format&fit=crop', alt: 'Workshop activities' },
  { id: 5, src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop', alt: 'Award ceremony' },
  { id: 6, src: 'https://images.unsplash.com/photo-1492684223066-e9e4aab4d25e?w=800&auto=format&fit=crop', alt: 'Cultural performance' },
  { id: 7, src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop', alt: 'Group photo' },
];

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide effect
  useEffect(() => {
    if (eventImages.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => 
        prev === eventImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? eventImages.length - 1 : prev - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => 
      prev === eventImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
      {/* Slides container */}
      <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
           style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {eventImages.map((image, index) => (
          <div 
            key={image.id} 
            className="min-w-full h-full relative flex-shrink-0"
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white text-lg font-medium">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation buttons */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center gap-2 sm:gap-3 z-10">
        {eventImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 hover:scale-150 hover:bg-white ${
              currentSlide === i 
                ? 'bg-transparent scale-125 ring-2 ring-white/50' 
                : 'bg-transparent hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          >
            <span className="sr-only">Slide {i + 1}</span>
          </button>
        ))}
      </div>
      
      {/* Slide counter */}
      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium z-20">
        <span className="text-white">{currentSlide + 1}</span>
        <span className="text-white/70"> / {eventImages.length}</span>
      </div>
    </div>
  );
}