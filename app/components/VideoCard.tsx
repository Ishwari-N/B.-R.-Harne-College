// app/components/VideoCard.tsx
"use client";

import React, { useState, useRef, useEffect, useContext, createContext } from 'react';

// Create a context to manage global playing state
const VideoPlayerContext = createContext<{
  currentlyPlaying: string | null;
  setCurrentlyPlaying: (id: string | null) => void;
}>({
  currentlyPlaying: null,
  setCurrentlyPlaying: () => {},
});

// Provider component
export function VideoPlayerProvider({ children }: { children: React.ReactNode }) {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  
  return (
    <VideoPlayerContext.Provider value={{ currentlyPlaying, setCurrentlyPlaying }}>
      {children}
    </VideoPlayerContext.Provider>
  );
}

// Hook to use the video player context
function useVideoPlayer() {
  return useContext(VideoPlayerContext);
}

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  videoUrl: string;
}

export default function VideoCard({ id, title, thumbnail, duration, videoUrl }: VideoCardProps) {
  const { currentlyPlaying, setCurrentlyPlaying } = useVideoPlayer();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Sync local state with global state
  useEffect(() => {
    setIsPlaying(currentlyPlaying === id);
  }, [currentlyPlaying, id]);

  // Handle play/pause based on global state
  useEffect(() => {
    if (videoRef.current) {
      if (currentlyPlaying === id) {
        videoRef.current.play().catch(console.error);
      } else {
        videoRef.current.pause();
        if (videoRef.current.currentTime !== 0) {
          videoRef.current.currentTime = 0;
        }
      }
    }
  }, [currentlyPlaying, id]);

  const handlePlayClick = () => {
    setCurrentlyPlaying(id);
  };

  const handleVideoEnd = () => {
    setCurrentlyPlaying(null);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  const handlePauseClick = () => {
    setCurrentlyPlaying(null);
  };

  const handleVideoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentlyPlaying === id) {
      setCurrentlyPlaying(null);
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group relative">
      <div className="relative aspect-video overflow-hidden">
        {/* Video element */}
        <video
          ref={videoRef}
          src={videoUrl}
          className={`w-full h-full object-cover ${currentlyPlaying === id ? 'block' : 'hidden'}`}
          controls={currentlyPlaying === id}
          onEnded={handleVideoEnd}
          onClick={handleVideoClick}
          playsInline
          preload="metadata"
        />
        
        {/* Thumbnail (shows when not playing) */}
        {currentlyPlaying !== id && (
          <>
            <img 
              src={thumbnail} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Play button overlay */}
            <div 
              className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all duration-300 cursor-pointer"
              onClick={handlePlayClick}
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl text-white">▶</span>
              </div>
            </div>
            
            {/* Duration badge */}
            <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
              {duration}
            </div>
          </>
        )}
        
        {/* Close button (shows when playing) */}
        {currentlyPlaying === id && (
          <button
            onClick={handlePauseClick}
            className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs z-10 hover:bg-black/90 transition-colors flex items-center justify-center w-6 h-6"
            title="Stop playing"
          >
            ✕
          </button>
        )}
      </div>
      
      {/* Video title */}
      <div className="p-3">
        <h3 className="font-semibold text-gray-800 text-sm truncate" title={title}>
          {title}
          {currentlyPlaying === id && (
            <span className="ml-2 text-xs text-green-600 font-normal">• Playing</span>
          )}
        </h3>
      </div>
      
      {/* Controls overlay when playing */}
      {currentlyPlaying === id && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      )}
    </div>
  );
}