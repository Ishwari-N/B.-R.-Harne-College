// app/undergraduate-courses/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function UndergraduateCoursesPage() {
  const [activeTab, setActiveTab] = useState<'courses' | 'documents'>('courses');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // Course data with more details
  const courses = [
    {
      id: 1,
      title: "Bachelor of Physiotherapy (BPT)",
      duration: "4.5 Years (including 6 months compulsory internship)",
      affiliation: "Maharashtra University of Health Sciences (MUHS), Nashik",
      description: "The Bachelor of Physiotherapy (BPT) program prepares students for clinical physiotherapy practice, rehabilitation, and patient care. This comprehensive program combines theoretical knowledge with practical skills development in modern healthcare settings.",
      overview: "Our BPT program is designed to produce competent physiotherapy professionals who can contribute effectively to healthcare systems. The curriculum is regularly updated to incorporate the latest advancements in physiotherapy and rehabilitation sciences.",
      highlights: [
        "Comprehensive curriculum covering all aspects of physiotherapy",
        "Clinical training in modern healthcare facilities",
        "Expert faculty with clinical experience",
        "Research opportunities in rehabilitation sciences",
        "Placement assistance and career guidance",
        "Modern laboratory facilities",
        "Industry collaborations for practical exposure"
      ],
      eligibility: "10+2 with Physics, Chemistry, Biology and English with minimum 50% marks",
      intake: "60 Seats per academic year",
      icon: "🏥",
      color: "from-[#0F2A44] to-[#1CA7A6]"
    }
  ];

  // Documents list
  const documents = [
    { id: 1, name: "Course Curriculum & Syllabus", format: "PDF", size: "2.4 MB", category: "Academic" },
    { id: 2, name: "Admission Brochure 2024-25", format: "PDF", size: "3.1 MB", category: "Admission" },
    { id: 3, name: "Eligibility Criteria Document", format: "PDF", size: "1.8 MB", category: "Admission" },
    { id: 4, name: "Fee Structure 2024-25", format: "PDF", size: "1.2 MB", category: "Financial" },
    { id: 5, name: "Internship Guidelines", format: "PDF", size: "2.7 MB", category: "Academic" },
    { id: 6, name: "Academic Calendar", format: "PDF", size: "1.5 MB", category: "Academic" },
    { id: 7, name: "Laboratory Facilities", format: "PDF", size: "4.2 MB", category: "Campus" },
    { id: 8, name: "Library Resources", format: "PDF", size: "1.9 MB", category: "Campus" },
  ];

  // Program structure
  const programStructure = [
    { year: "Year 1", focus: "Basic Sciences Foundation", subjects: ["Anatomy", "Physiology", "Biochemistry", "Introduction to Physiotherapy"] },
    { year: "Year 2", focus: "Core Physiotherapy", subjects: ["Exercise Therapy", "Electrotherapy", "Orthopedics", "Community Medicine"] },
    { year: "Year 3", focus: "Clinical Specializations", subjects: ["Neurology", "Cardiopulmonary", "Sports Medicine", "Geriatrics"] },
    { year: "Year 4", focus: "Advanced Practice", subjects: ["Research Methodology", "Clinical Training", "Professional Ethics", "Healthcare Management"] },
    { year: "Internship", focus: "Clinical Rotation", subjects: ["Hospital Practice", "Specialty Clinics", "Community Health", "Rehabilitation Centers"] },
  ];

  // Career opportunities
  const careerOpportunities = [
    { title: "Clinical Physiotherapist", icon: "🏥", description: "Work in hospitals, clinics, and healthcare centers" },
    { title: "Sports Physiotherapist", icon: "⚽", description: "Specialize in sports injuries and athlete rehabilitation" },
    { title: "Pediatric Specialist", icon: "👶", description: "Focus on children's developmental and neurological conditions" },
    { title: "Academic Researcher", icon: "🔬", description: "Contribute to physiotherapy education and research" },
    { title: "Corporate Wellness", icon: "💼", description: "Design workplace health and ergonomics programs" },
    { title: "Rehabilitation Expert", icon: "🔄", description: "Specialize in post-surgical and injury rehabilitation" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F2A44] via-[#1CA7A6] to-[#0F2A44] opacity-90"></div>
          <div className="relative px-6 py-12 md:py-16">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                Undergraduate Programs
              </h1>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
                <p className="text-xl text-blue-50 leading-relaxed">
                  Shape Your Future in Healthcare with Our Premier Physiotherapy Education
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-20 -translate-x-20"></div>
        </div>

        {/* Navigation Tabs with better design */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-2 max-w-md mx-auto">
            <div className="flex bg-gray-100 p-1 rounded-xl">
              <button
                onClick={() => setActiveTab('courses')}
                className={`flex-1 py-4 px-6 text-center font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-3 ${activeTab === 'courses' ? 'bg-white shadow-lg text-[#0F2A44]' : 'text-gray-600 hover:text-[#0F2A44]'}`}
              >
                <span className="text-2xl">📚</span>
                <span className="font-semibold">Courses</span>
              </button>
              <button
                onClick={() => setActiveTab('documents')}
                className={`flex-1 py-4 px-6 text-center font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-3 ${activeTab === 'documents' ? 'bg-white shadow-lg text-[#0F2A44]' : 'text-gray-600 hover:text-[#0F2A44]'}`}
              >
                <span className="text-2xl">📄</span>
                <span className="font-semibold">Documents</span>
              </button>
            </div>
          </div>
        </div>

        {/* Courses Tab Content */}
        {activeTab === 'courses' && (
          <section className="space-y-12">
            {/* Main Course Card */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <div className="md:flex">
                {/* Left Side - Course Overview */}
                <div className="md:w-2/5 bg-gradient-to-br from-[#0F2A44] to-[#1CA7A6] p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-white/20 p-4 rounded-2xl">
                        <span className="text-4xl">{courses[0].icon}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{courses[0].title}</h3>
                        <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold inline-block mt-2">
                          UNDERGRADUATE
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                        <div className="flex items-center gap-3">
                          <div className="bg-white/20 p-2 rounded-lg">
                            <span className="text-xl">⏱️</span>
                          </div>
                          <div>
                            <p className="text-sm text-blue-100">Duration</p>
                            <p className="font-bold text-lg">{courses[0].duration}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                        <div className="flex items-center gap-3">
                          <div className="bg-white/20 p-2 rounded-lg">
                            <span className="text-xl">🎓</span>
                          </div>
                          <div>
                            <p className="text-sm text-blue-100">Affiliation</p>
                            <p className="font-bold">{courses[0].affiliation}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                        <div className="flex items-center gap-3">
                          <div className="bg-white/20 p-2 rounded-lg">
                            <span className="text-xl">👥</span>
                          </div>
                          <div>
                            <p className="text-sm text-blue-100">Intake Capacity</p>
                            <p className="font-bold text-lg">{courses[0].intake}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Side - Course Details */}
                <div className="md:w-3/5 p-8">
                  <div className="mb-8">
                    <h4 className="text-2xl font-bold text-[#0F2A44] mb-6 flex items-center gap-3">
                      <div className="bg-blue-100 p-3 rounded-xl">
                        <span className="text-2xl text-blue-600">📋</span>
                      </div>
                      Course Overview
                    </h4>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {courses[0].description}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {courses[0].overview}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-2xl font-bold text-[#0F2A44] mb-6 flex items-center gap-3">
                      <div className="bg-blue-100 p-3 rounded-xl">
                        <span className="text-2xl text-blue-600">🎯</span>
                      </div>
                      Eligibility Criteria
                    </h4>
                    <div className="bg-gradient-to-r from-blue-50 to-white border-2 border-blue-100 rounded-2xl p-6">
                      <p className="text-gray-800 font-medium text-lg">{courses[0].eligibility}</p>
                      <div className="mt-4 flex items-center gap-2 text-blue-600">
                        <span>ℹ️</span>
                        <span className="text-sm">Reserved category candidates have relaxation as per Government norms</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Expandable Program Highlights */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-[#0F2A44] flex items-center gap-3">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <span className="text-2xl text-blue-600">⭐</span>
                  </div>
                  Program Highlights
                </h3>
                <button 
                  onClick={() => setExpandedCard(expandedCard === 1 ? null : 1)}
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
                >
                  {expandedCard === 1 ? 'Show Less' : 'View All'}
                  <span className="text-xl">{expandedCard === 1 ? '↑' : '↓'}</span>
                </button>
              </div>
              
              <div className={`grid gap-4 transition-all duration-500 ${expandedCard === 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                {courses[0].highlights.map((highlight, index) => (
                  <div 
                    key={index} 
                    className={`bg-gradient-to-br from-white to-blue-50 border-2 border-blue-50 p-5 rounded-2xl transition-all duration-300 hover:border-blue-200 hover:shadow-lg ${index >= 6 && expandedCard !== 1 ? 'hidden' : ''}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <span className="text-blue-600 font-bold">✓</span>
                      </div>
                      <p className="text-gray-700">{highlight}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Program Structure Timeline */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-8 flex items-center gap-3">
                <div className="bg-green-100 p-3 rounded-xl">
                  <span className="text-2xl text-green-600">📊</span>
                </div>
                Program Structure
              </h3>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-2 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
                
                <div className="space-y-8">
                  {programStructure.map((year, index) => (
                    <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Timeline dot */}
                      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2">
                        <div className="w-10 h-10 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center">
                          <span className="font-bold text-blue-600">{index + 1}</span>
                        </div>
                      </div>
                      
                      {/* Content card */}
                      <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                        <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-6 hover:border-blue-200 transition-all duration-300">
                          <h4 className="text-xl font-bold text-[#0F2A44] mb-2">{year.year}</h4>
                          <p className="text-blue-600 font-medium mb-3">{year.focus}</p>
                          <div className="flex flex-wrap gap-2">
                            {year.subjects.map((subject, idx) => (
                              <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                                {subject}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-8 flex items-center gap-3">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <span className="text-2xl text-purple-600">💼</span>
                </div>
                Career Opportunities
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {careerOpportunities.map((career, index) => (
                  <div key={index} className="group bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 rounded-2xl p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-3 rounded-xl">
                        <span className="text-2xl">{career.icon}</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 group-hover:text-[#0F2A44]">
                        {career.title}
                      </h4>
                    </div>
                    <p className="text-gray-600">{career.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Documents Tab Content */}
        {activeTab === 'documents' && (
          <section className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-8 flex items-center gap-3">
                <div className="bg-red-100 p-3 rounded-xl">
                  <span className="text-2xl text-red-600">📚</span>
                </div>
                Course Documents & Resources
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {documents.map((doc) => (
                  <div key={doc.id} className="group bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 rounded-2xl p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-lg">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-red-50 p-3 rounded-xl group-hover:bg-red-100 transition-colors duration-300">
                          <span className="text-2xl text-red-500">📄</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 group-hover:text-[#0F2A44]">
                            {doc.name}
                          </h4>
                          <div className="flex items-center gap-3 mt-2">
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                              {doc.category}
                            </span>
                            <span className="text-sm text-gray-500">• {doc.size}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <span className="bg-gray-100 px-2 py-1 rounded">PDF</span>
                        <span>{doc.format}</span>
                      </div>
                      <button className="bg-gradient-to-r from-[#0F2A44] to-[#1CA7A6] text-white px-5 py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2 group-hover:gap-3">
                        <span>Download</span>
                        <span className="text-lg transition-transform duration-300 group-hover:translate-y-0.5">⬇️</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Help Section */}
              <div className="mt-10 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <span className="text-2xl text-blue-600">❓</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0F2A44] mb-3">Need Help?</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-gray-700 mb-3">
                          Having trouble accessing documents or need printed copies?
                        </p>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-center gap-2">
                            <span className="text-blue-500">•</span>
                            <span>Visit our college office during working hours</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-blue-500">•</span>
                            <span>Email us at documents@brharnecollege.edu.in</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-blue-200">
                        <p className="font-medium text-gray-800 mb-2">Quick Contact</p>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p>📞 +91-9920255543</p>
                          <p>📧 admission@brharnecollege.edu.in</p>
                          <p>⏰ Mon-Fri: 9:00 AM - 5:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Floating CTA */}
        <div className="fixed bottom-8 right-8 z-50">
          <div className="bg-gradient-to-r from-[#0F2A44] to-[#1CA7A6] text-white rounded-2xl shadow-2xl p-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-xl">
                <span className="text-xl">📞</span>
              </div>
              <div>
                <p className="font-bold">Need Help?</p>
                <p className="text-sm opacity-90">Call Admission Cell</p>
              </div>
              <a 
                href="tel:+919920255543" 
                className="bg-white text-[#0F2A44] px-4 py-2 rounded-lg font-bold hover:bg-blue-50 transition-colors duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Main CTA Section */}
        <section className="mt-16 mb-8">
          <div className="bg-gradient-to-br from-[#0F2A44] to-[#1CA7A6] rounded-3xl shadow-2xl p-10 text-white overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Start Your Journey Today
              </h3>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Join hundreds of successful physiotherapy professionals who started their journey at B.R. Harne College
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/admissions/process"
                  className="bg-white text-[#0F2A44] px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Apply for Admission
                </Link>
                <Link 
                  href="/campus-tour"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  Schedule Campus Visit
                </Link>
              </div>
              
              <div className="mt-10 pt-8 border-t border-white/20">
                <div className="flex flex-wrap justify-center gap-8 text-blue-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-sm">Placement Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">60+</div>
                    <div className="text-sm">Expert Faculty</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm">Years of Excellence</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">1000+</div>
                    <div className="text-sm">Alumni Network</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}