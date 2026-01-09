'use client';

import React from 'react';

export default function PrincipalDeskPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <header className="py-8 md:py-12">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Principal&apos;s Desk
          </h1>
          <p className="text-green-700 text-lg md:text-xl">
            In Pursuit of Excellence
          </p>
        </div>
      </header>

      {/* Main Content - Reduced gap to gap-4 */}
      <main className="max-w-7xl mx-auto px-4 pb-12 md:pb-16">
        <div className="grid lg:grid-cols-3 gap-4 md:gap-12">
          {/* Left Column - Principal Profile */}
<div className="lg:col-span-1">
  <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100 transition-all duration-300 hover:shadow-xl">
    {/* Photo Container */}
    <div className="mb-8">
      <div className="relative w-64 h-64 mx-auto">
        {/* Outer decorative ring */}
        <div className="absolute inset-0 rounded-full p-2">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-green-600 to-orange-600 opacity-20"></div>
        </div>

        {/* Photo container with inset shadow */}
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]"></div>
          
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <span className="text-7xl text-gray-400">👨‍⚕️</span>
          </div>

          {/* Professional overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-green-600/40 via-transparent to-transparent"></div>
        </div>

        {/* Badge at bottom */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-100">
          <p className="text-sm font-bold text-green-800">Principal</p>
        </div>
      </div>
    </div>

    {/* Principal Details */}
    <div className="text-center space-y-4">
      <h2 className="text-2xl md:text-xl font-bold text-gray-900">
        Dr. Jay R Gupta
      </h2>
      <div className="inline-block bg-gradient-to-r from-green-50 to-green-100 text-green-700 px-4 py-2 rounded-full font-semibold border border-green-200">
        Principal
      </div>
      <div className="bg-gradient-to-r from-green-50/50 to-orange-50/50 p-4 rounded-xl border border-green-100">
        <p className="text-green-800 font-semibold">
          B.R. Harne College of Physiotherapy
        </p>
        <p className="text-gray-500 text-xs mt-2">Affiliated to MUHS</p>
      </div>

      {/* Contact Information */}
      <div className="space-y-4 mt-6">
        <div className="flex items-center justify-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-r from-green-50 to-green-100 rounded-lg flex items-center justify-center">
            <span className="text-green-600 text-lg">📞</span>
          </div>
          <div className="text-left">
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-bold text-gray-800 text-lg">8097583757</p>
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="mt-6 bg-gradient-to-r from-green-50 to-gray-50 rounded-xl p-4 border border-green-100">
        <p className="text-gray-700 italic text-sm text-center">
          &quot;Excellence is the gradual result of always striving to do better.&quot;
        </p>
        <p className="text-green-600 text-xs font-medium mt-2 text-center">Vision: Redefining Physiotherapy Education</p>
      </div>
    </div>
  </div>
</div>
          {/* Right Column - Principal's Message */}
          <div className="lg:col-span-2">
            {/* Welcome Message */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 mb-8 group hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-green-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl text-white">💬</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Principal&apos;s Message</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <p className="leading-relaxed">
                  I believe that excellence is the gradual result of always striving to do better, hence our Motto &quot;In Pursuit of Excellence!&quot;
                </p>
                
                <p className="leading-relaxed">
                  Excellence requires not only an unrelenting commitment to provide and work in the best professional environment but also a commitment to set in place a system that is updated and adapted to the changing demands of this ever-evolving profession. We at BR Harne College of Physiotherapy are committed to provide our students with all that is top-notch in our field.
                </p>
                
                <p className="leading-relaxed">
                  We want to redefine the concept of Physiotherapy Education in today&apos;s global era with an aim to serve humanity in a better way. We assure to prepare students for life with a mind that reasons, the right attitude and a spirit of goodness backed by solid academic excellence.
                </p>

                <p className="leading-relaxed">
                  The last two decades of the last century paved the path for an appropriate increase in the number of Physiotherapy professionals in the country. There was an apprehension and speculation about the progress of the profession a decade back. The realities were far from those apprehensions; the profession has grown brighter over the years, and truly the old myths are making room for new success.
                </p>
              </div>
            </div>

            {/* Message to Students */}
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl text-white">🎓</span>
                </div>
                <h3 className="font-bold text-gray-900 text-xl">Message to Students</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  To be successful in life, have ambitions and define your goals clearly. Discipline and hard work is the key to success.
                </p>
                <p className="leading-relaxed">
                  Be regular in your classes and focus on your goals. Your concerted efforts with the able guidance of your teachers would definitely provide you a blissful and successful life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes widthGrow {
          from { width: 0; }
          to { width: 120px; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}