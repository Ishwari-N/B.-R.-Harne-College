'use client';

import { useState, useEffect } from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

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

        {/* Left: Contact Details */}
        <div className="flex flex-col justify-between pt-5 gap-8 order-2 md:order-1">

          {/* Find Us */}
          <div>
            <h2 className="text-2xl font-bold text-green-950 mb-3">Address</h2>
            <p className="text-gray-700">
              Karav, Vangani (W), Ambernath, Dist: Thane – 421503
            </p>
          </div>

          {/* Details */}
          <div>
            <h2 className="text-2xl font-bold text-green-950 mb-0.5">Contact Details</h2>
              <div className="space-y-1">
                <p className="text-gray-700 mb-4">
                  <strong className="text-[#0F2A44]"></strong><br />
                  7218113531<br />
                  9920255543
                </p>
                <p className="text-gray-700">
                 <strong className="text-[#0F2A44] ">Email:</strong><br />
                  brharnephysiotherapy6169@gmail.com
                </p>
                </div>
          </div>
        </div>

        {/* Right: Google Map */}
        <div className="w-full h-80 md:h-[400px] rounded-xl overflow-hidden shadow-lg order-1 md:order-2">
          <iframe
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=B%20R%20Harne%20College%20of%20Physiotherapy&output=embed"
          ></iframe>
        </div>
      </section>
    </main>
  );
}