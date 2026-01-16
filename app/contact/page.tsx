'use client';

import { useState, useEffect } from 'react';

export default function Contact() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsLoaded(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Message sent successfully!');
    setIsSubmitting(false);
    setIsFormOpen(false);
  };

  return (
    <main className="bg-gradient-to-b from-white to-[#F9F9F9] min-h-screen">

      {/* ================= CONTACT HEADING ================= */}
      <section className={`pt-12 sm:pt-10 pb-7 text-center bg-transparent transition-all duration-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-4xl font-extrabold text-[#0F2A44] mb-2">Contact Us</h1>
        <div className="w-30 h-1 bg-gradient-to-r from-[#0bc22d] to-[#F39C12] mx-auto rounded-full"></div>
      </section>

      {/* ================= MAP + INFO ================= */}
      <section className={`max-w-6xl mx-auto px-4 py-14 pt-10 grid md:grid-cols-2 gap-10 items-start transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>

        {/* Left: Google Map */}
        <div className="w-full h-80 md:h-[400px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=B%20R%20Harne%20College%20of%20Physiotherapy&output=embed"
          ></iframe>
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col justify-between pt-5 gap-10">

          {/* Find Us */}
          <div>
            <h2 className="text-2xl font-bold text-green-950 mb-3">Find Us</h2>
            <p className="text-gray-700">
              Karav, Vangani (W), Ambernath, Dist: Thane – 421503
            </p>
          </div>

          {/* Details */}
          <div>
            <h2 className="text-2xl font-bold text-green-950 mb-3">Contact Details</h2>
            <p className="text-gray-700"><strong className="text-[#0F2A44]">Email:</strong> brharnephysiotherapy6169@gmail.com</p>
            <p className="text-gray-700"><strong className="text-[#0F2A44]">Phone:</strong> 7218113531 / 9920255543</p>
          </div>

          {/* Social */}
          <div>
            <h2 className="text-2xl font-bold text-green-950 mb-3">Social Networks</h2>
            <div className="flex gap-4">
              {/* Icons - directly adjacent */}
    <div className="flex gap-1 ml-2">
      {/* Facebook */}
      <a href="https://www.facebook.com/brhcop/" target="_blank" rel="noopener noreferrer" className="group">
        <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-900 transition-all duration-300">
          <svg className="w-3 h-3 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.676V1.325C24 .593 23.406 0 22.675 0z"/>
          </svg>
        </div>
      </a>

      {/* Google */}
      <a href="https://www.google.com/search?q=B.+R.+Harne+College+of+Pharmacy" target="_blank" rel="noopener noreferrer" aria-label="Google" className="group">
        <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center  hover:bg-gray-100  transition-all duration-300 border border-gray-300">
          <svg className="w-3 h-3 sm:w-6 sm:h-6" viewBox="0 0 533.5 544.3">
            <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.4-34.1-4.1-50.3H272v95h146.9c-6.3 34-25.1 62.8-53.6 82v68h86.4c50.5-46.5 79.8-115.1 79.8-194.7z"/>
            <path fill="#34A853" d="M272 544.3c72.6 0 133.5-24.1 178-65.5l-86.4-68c-23.9 16-54.5 25.4-91.6 25.4-70.5 0-130-47.7-151.4-111.3H32.5v69.9c44.1 87.5 134.6 150.5 239.5 150.5z"/>
            <path fill="#FBBC05" d="M120.5 319.1c-10.7-32-10.7-66.8 0-98.8v-69.9H32.5c-39.5 78.8-39.5 172.4 0 251.2l88-82.5z"/>
            <path fill="#EA4335" d="M272 107.1c38.5-.6 73.1 13.2 100.5 39.1l75.3-75.3C406.5 24.7 344.6-.4 272 0 167.1 0 76.6 63 32.5 150.5l88 69.9C142 154.8 201.5 107.1 272 107.1z"/>
          </svg>
        </div>
      </a>

      {/* Instagram */}
      <a href="https://www.instagram.com/brharnecollegeofpharmacy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group">
        <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center hover:opacity-90 transition-all duration-300">
          <svg className="w-3 h-3 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </div>
      </a>

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="group">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-700 flex items-center justify-center  hover:bg-blue-900  transition-all duration-300">
          <svg className="w-3 h-3 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </div>
      </a>
    </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}