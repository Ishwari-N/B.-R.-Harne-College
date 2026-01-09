'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* -------------------- Navbar -------------------- */
const dropdownItems: Record<string, { name: string; path: string }[]> = {
  about: [
    { name: 'Vision & Mission', path: '/about/vision-mission' },
    { name: "President's Desk", path: '/about/president-desk' },
    { name: "Treasurer's Desk", path: '/about/treasurer-desk' },
    { name: "Principal's Desk", path: '/about/principal-desk' },
  ],
  academics: [
    { name: 'Programs', path: '/academics/programs' },
    { name: 'Curriculum', path: '/academics/curriculum' },
    { name: 'Faculty', path: '/academics/faculty' },
  ],
  admissions: [
    { name: 'Process', path: '/admissions/process' },
    { name: 'Requirements', path: '/admissions/requirements' },
    { name: 'Apply Now', path: '/admissions/apply' },
  ],
};

const regularItems = ['Research', 'Facilities', 'Gallery', 'Events'];

export function Navbar() {
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  function getAbbreviation(key: string): React.ReactNode {
    return key.charAt(0).toUpperCase() + key.slice(1).substring(0, 3);
  }

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Header Logos */}
      <div className="w-full py-1 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-3 flex items-center justify-between">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-white p-1 rounded-md shadow-md border border-blue-300">
              <div className="relative w-20 h-12">
                <Image src="/weblogo.png" alt="College Logo" fill className="object-contain" />
              </div>
            </div>
          </div>
          <div className="flex-grow text-center px-2 min-w-0">
            <h1 className="text-[10px] font-extrabold tracking-tight leading-tight truncate text-white">
              B.R. HARNE COLLEGE OF PHYSIOTHERAPY
            </h1>
            <div className="text-[5px] mt-0.5 leading-tight font-medium text-blue-200">
              Karav, Vangani (W), Ambernath, Thane - 421503 | GOVT. OF MAHARASHTRA | AFFILIATED TO MUHS
            </div>
          </div>
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-white p-1 rounded-md shadow-md border border-blue-300">
              <div className="relative w-20 h-12">
                <Image src="/foundation-logo.jpeg" alt="Foundation Logo" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar Links */}
      <div className="w-full bg-white border-b border-gray-300">
        <div ref={navRef} className={`flex items-center py-0.5 ${isOverflowing ? 'overflow-x-auto' : 'overflow-x-hidden'} no-scrollbar`} style={{ whiteSpace: 'nowrap' }}>
          <div className="flex items-center flex-nowrap min-w-max px-1">
            <Link href="/" className="px-2 py-1.5 text-[8px] font-extrabold uppercase tracking-wider text-gray-800 hover:text-blue-700 hover:bg-blue-50 flex-shrink-0 transition-colors duration-150 border-r border-gray-200" style={{ minWidth: '40px', maxWidth: '40px' }}>
              <span className="truncate block text-center">HOME</span>
            </Link>

            {Object.entries(dropdownItems).map(([key, items]) => (
              <div key={key} className="relative flex-shrink-0" onMouseEnter={() => setHoveredDropdown(key)} onMouseLeave={() => setHoveredDropdown(null)}>
                <Link href={`/${key}`} className="px-2 py-1.5 text-[8px] font-extrabold uppercase tracking-wider text-gray-800 hover:text-blue-700 hover:bg-blue-50 flex-shrink-0 transition-colors duration-150 border-r border-gray-200 flex items-center justify-center" style={{ minWidth: '50px', maxWidth: '50px' }}>
                  <span className="truncate block">{getAbbreviation(key)}</span>
                  <span className="ml-0.5 text-[5px] opacity-50 flex-shrink-0">▼</span>
                </Link>

                {hoveredDropdown === key && (
                  <div className="absolute left-0 top-full mt-0 w-48 bg-white rounded shadow-lg border border-gray-200 z-50">
                    <div className="py-1">
                      {items.map(item => (
                        <Link key={item.path} href={item.path} className="block px-3 py-1.5 text-[10px] text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-100">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {regularItems.map(item => (
              <Link key={item} href={`/${item.toLowerCase().replace(' ', '-')}`} className="px-2 py-1.5 text-[8px] font-extrabold uppercase tracking-wider text-gray-800 hover:text-blue-700 hover:bg-blue-50 flex-shrink-0 transition-colors duration-150 border-r border-gray-200 last:border-r-0" style={{ minWidth: '50px', maxWidth: '50px' }}>
                <span className="truncate block text-center">{getAbbreviation(item)}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </header>
  );
}

/* -------------------- Sub-section Cards -------------------- */
interface SubSectionCardProps {
  title: string;
  description: string;
  link: string;
  icon: string;
  gradientFrom: string;
  gradientTo: string;
}

function SubSectionCard({ title, description, link, icon, gradientFrom, gradientTo }: SubSectionCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}></div>
      <div className="relative z-10 p-6 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="bg-white/20 p-3 rounded-lg">
            <span className="text-2xl">{icon}</span>
          </div>
          <div className="bg-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full">
            ABOUT
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white/90 text-sm mb-6 flex-grow">{description}</p>
        
        <Link 
          href={link}
          className="inline-flex items-center justify-center gap-2 bg-white text-[#0F2A44] px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-blue-50 hover:gap-3 hover:shadow-lg group/link"
        >
          <span>View More Details</span>
          <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
        </Link>
      </div>
      
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-bl-full"></div>
    </div>
  );
}

/* -------------------- Schedule Visit Modal -------------------- */
function ScheduleVisitModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-[#0F2A44]">Schedule Campus Visit</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-4 mb-6">
          <h4 className="text-lg font-semibold text-[#1CA7A6] mb-3">Working Hours</h4>
          {[
            { day: 'Monday - Friday', time: '9:00 AM - 5:00 PM' },
            { day: 'Saturday', time: '9:00 AM - 1:00 PM' },
            { day: 'Sunday', time: 'Closed' },
          ].map((schedule, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
              <span className="font-medium text-gray-700">{schedule.day}</span>
              <span className="font-bold text-[#0F2A44]">{schedule.time}</span>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> For admissions-related queries and campus visits, please schedule an appointment during working hours. Special appointments can be arranged by contacting our admission office.
          </p>
        </div>
        
        <div className="text-center">
          <Link 
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#0F2A44] to-[#1CA7A6] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300"
          >
            Contact Admission Office
          </Link>
        </div>
      </div>
    </div>
  );
}

/* -------------------- Contact Form -------------------- */
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-white mb-1">
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
          >
            <option value="" disabled>Select a subject</option>
            <option value="admission">Admission Inquiry</option>
            <option value="course">Course Information</option>
            <option value="campus-visit">Campus Visit</option>
            <option value="general">General Inquiry</option>
            <option value="feedback">Feedback/Suggestion</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent resize-none"
          placeholder="Enter your message here..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-white text-[#0F2A44] py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl hover:cursor-pointer"
      >
        Send Message
      </button>
    </form>
  );
}

/* -------------------- About Page Content -------------------- */
export default function AboutPage() {
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const subSections = [
    {
      title: "Vision & Mission",
      description: "Discover our guiding principles, core values, and strategic goals that shape our institution's future and educational philosophy.",
      link: "/about/vision-mission",
      icon: "🎯",
      gradientFrom: "from-[#0F2A44]",
      gradientTo: "to-[#1E3A5F]"
    },
    {
      title: "President's Desk",
      description: "Learn about our President's vision, leadership philosophy, and commitment to excellence in physiotherapy education.",
      link: "/about/president-desk",
      icon: "👔",
      gradientFrom: "from-[#1CA7A6]",
      gradientTo: "to-[#0F2A44]"
    },
    {
      title: "Treasurer's Desk",
      description: "Explore our financial stewardship, resource management, and commitment to sustainable institutional growth.",
      link: "/about/treasurer-desk",
      icon: "💰",
      gradientFrom: "from-[#0F2A44]",
      gradientTo: "to-[#2D5F8B]"
    },
    {
      title: "Principal's Desk",
      description: "Meet our Principal, understand their educational vision, and learn about academic leadership and student success initiatives.",
      link: "/about/principal-desk",
      icon: "👨‍🏫",
      gradientFrom: "from-[#2D5F8B]",
      gradientTo: "to-[#1CA7A6]"
    },
    {
      title: "About College",
      description: "Comprehensive overview of our institution, history, achievements, and our journey in physiotherapy education.",
      link: "/about/college",
      icon: "🏫",
      gradientFrom: "from-[#1CA7A6]",
      gradientTo: "to-[#2D5F8B]"
    },
    {
      title: "Our Legacy",
      description: "Trace our history, milestones, and contributions to physiotherapy education since our establishment.",
      link: "/about/legacy",
      icon: "📜",
      gradientFrom: "from-[#0F2A44]",
      gradientTo: "to-[#1CA7A6]"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#0F2A44] via-[#1CA7A6] to-[#0F2A44] text-white rounded-2xl shadow-xl mb-16">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative px-6 py-5 md:py-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                About B.R. Harne College of Physiotherapy
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Excellence in Physiotherapy Education Since Establishment
              </p>
              <p className="text-lg text-blue-200 max-w-3xl mx-auto">
                A premier institution dedicated to shaping skilled healthcare professionals through 
                innovative education, research, and community service.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Years of Excellence', value: '15+', suffix: '' },
            { label: 'Students Trained', value: '1000+', suffix: '' },
            { label: 'Faculty Members', value: '50+', suffix: '' },
            { label: 'Placement Rate', value: '95', suffix: '%' },
          ].map((stat, index) => (
            <div key={index} className="bg-blue-50 rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-[#0F2A44] mb-2">{stat.value}{stat.suffix}</div>
              <div className="text-sm text-gray-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* College Overview */}
        <section className="mb-16">
          <div className="bg-violet-100 rounded-2xl shadow-xl p-8 md:p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-gradient-to-r from-[#0F2A44] to-[#1CA7A6] p-3 rounded-xl">
                <span className="text-2xl text-white">🏥</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F2A44]">College Overview</h2>
            </div>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                <strong>B.R. Harne College of Physiotherapy</strong>, located in Karav, Vangani (W), Ambernath, Thane - 421503, is a premier institution dedicated to excellence in physiotherapy education. Affiliated with the Maharashtra University of Health Sciences (MUHS), Nashik, and recognized by the Government of Maharashtra, the college has been shaping skilled physiotherapy professionals since its establishment.
              </p>
              <p className="leading-relaxed">
                Our institution operates under the esteemed B.R. Harne Educational Foundation, which has been committed to providing quality education across various disciplines. The college is equipped with state-of-the-art infrastructure, modern laboratories, and clinical facilities that provide students with comprehensive hands-on training.
              </p>
              <p className="leading-relaxed">
                We pride ourselves on our holistic approach to education, combining theoretical knowledge with practical clinical experience, research opportunities, and community service initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* Sub-sections Grid */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2A44] mb-4">Explore Our Institution</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover the various facets of our college through detailed sections. Each provides in-depth information about our institution's structure, leadership, and vision.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subSections.map((section, index) => (
              <SubSectionCard key={index} {...section} />
            ))}
          </div>
        </section>

        {/* Accreditation & Recognition */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-[#0F2A44] to-[#1CA7A6] rounded-2xl shadow-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Accreditation & Recognition</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/20 p-6 rounded-xl mb-4 inline-block">
                  <span className="text-3xl">🏛️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Government Recognized</h3>
                <p className="text-blue-100">Recognized by Government of Maharashtra</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 p-6 rounded-xl mb-4 inline-block">
                  <span className="text-3xl">🎓</span>
                </div>
                <h3 className="text-xl font-bold mb-2">MUHS Affiliated</h3>
                <p className="text-blue-100">Affiliated to Maharashtra University of Health Sciences</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 p-6 rounded-xl mb-4 inline-block">
                  <span className="text-3xl">⭐</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Education</h3>
                <p className="text-blue-100">ISO Certified Quality Management System</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-16">
          <div className="bg-blue-50 rounded-2xl shadow-xl p-8 border-2 border-blue-100">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0F2A44] mb-4">Want to Learn More?</h2>
              <p className="text-gray-600 mb-8">
                Explore our comprehensive resources, download brochures, or schedule a campus visit to experience our institution firsthand.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button 
                  onClick={() => setShowScheduleModal(true)}
                  className="bg-gradient-to-r from-[#0F2A44] to-[#1CA7A6] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300"
                >
                  Schedule Campus Visit
                </button>
                <Link 
                  href="/admissions/process" 
                  className="bg-white border-2 border-[#0F2A44] text-[#0F2A44] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
                >
                  View Admission Info
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section>
          <div className="bg-gradient-to-r from-[#0F2A44] to-[#1CA7A6] text-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Side - Contact Info */}
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="bg-white/20 p-2 rounded-lg">📍</span>
                  College Address & Info
                </h3>
                <address className="not-italic space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-1">🏫</span>
                    <div>
                      <p className="font-semibold">B.R. Harne College of Physiotherapy</p>
                      <p>Karav, Vangani (W), Ambernath</p>
                      <p>Thane - 421503, Maharashtra, India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📞</span>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p>+91-9920255543</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">✉️</span>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p>info@brharnecollege.edu.in</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🌐</span>
                    <div>
                      <p className="font-semibold">Website</p>
                      <p>www.brharnecollege.edu.in</p>
                    </div>
                  </div>
                </address>
              </div>
              
              {/* Right Side - Contact Form */}
              <div>
                <button className="text-xl font-bold mb-6 flex items-center gap-3 ">
                  <span className="bg-white/20 p-2 rounded-lg">✉️</span>
                  Send Us a Message
                </button>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0F2A44] text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">B.R. Harne College of Physiotherapy</h3>
            <p className="text-gray-300 mb-4 max-w-2xl mx-auto">
              Karav, Vangani (W), Ambernath, Thane - 421503 | 
              Affiliated to Maharashtra University of Health Sciences, Nashik
            </p>
            <p className="text-gray-400 text-sm mb-8">© {new Date().getFullYear()} All Rights Reserved</p>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              {[
                { label: 'Vision & Mission', href: '/about/vision-mission' },
                { label: 'Principal\'s Desk', href: '/about/principal-desk' },
                { label: 'Admissions', href: '/admissions/process' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'Privacy Policy', href: '/privacy' },
              ].map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href} 
                  className="text-blue-300 hover:text-white hover:underline transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Schedule Visit Modal */}
      <ScheduleVisitModal 
        isOpen={showScheduleModal} 
        onClose={() => setShowScheduleModal(false)} 
      />
    </div>
  );
}