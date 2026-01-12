// app/quick-links/careers/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMapPin, FiClock, FiDollarSign, FiBook, FiUsers, FiAward } from 'react-icons/fi';

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState<'current' | 'future' | 'faculty'>('current');

  // Current Job Openings Data
  const currentOpenings = [
    {
      id: 1,
      title: "Assistant Professor - Physiotherapy",
      department: "Department of Physiotherapy",
      type: "Full-time",
      location: "College Campus, Vangani",
      experience: "2+ years",
      salary: "As per UGC norms",
      deadline: "March 15, 2024",
      description: "We are seeking an enthusiastic Assistant Professor to join our dynamic physiotherapy department. The ideal candidate will have expertise in musculoskeletal physiotherapy and rehabilitation.",
      requirements: [
        "Master's degree in Physiotherapy (MPT) or equivalent",
        "NET/SET qualified (preferred)",
        "Strong clinical and teaching skills",
        "Experience in research publication",
        "Good communication and mentoring abilities"
      ],
      icon: "👨‍🏫",
      color: "from-[#0bc22d] to-emerald-500"
    },
    {
      id: 2,
      title: "Clinical Supervisor",
      department: "Clinical Training Department",
      type: "Full-time",
      location: "College Hospital",
      experience: "3+ years",
      salary: "₹40,000 - ₹50,000/month",
      deadline: "March 20, 2024",
      description: "Responsible for supervising student clinical practice, ensuring quality patient care, and maintaining clinical standards.",
      requirements: [
        "BPT/MPT degree with clinical experience",
        "Experience in clinical supervision",
        "Knowledge of latest treatment protocols",
        "Excellent patient management skills",
        "Ability to train and mentor students"
      ],
      icon: "🏥",
      color: "from-[#F39C12] to-amber-500"
    },
    {
      id: 3,
      title: "Administrative Officer",
      department: "College Administration",
      type: "Full-time",
      location: "Main Administrative Block",
      experience: "4+ years",
      salary: "₹35,000 - ₹45,000/month",
      deadline: "March 25, 2024",
      description: "Manage college administration, coordinate with departments, and ensure smooth operations.",
      requirements: [
        "Master's degree in Administration or related field",
        "Experience in educational administration",
        "Strong organizational skills",
        "Proficiency in MS Office",
        "Excellent communication skills"
      ],
      icon: "📋",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 4,
      title: "Laboratory Technician",
      department: "Physiotherapy Labs",
      type: "Full-time",
      location: "College Laboratories",
      experience: "1+ years",
      salary: "₹25,000 - ₹35,000/month",
      deadline: "March 18, 2024",
      description: "Maintain and operate physiotherapy equipment, assist in practical sessions, and ensure lab safety.",
      requirements: [
        "Diploma/Degree in Medical Laboratory Technology",
        "Knowledge of physiotherapy equipment",
        "Technical troubleshooting skills",
        "Safety protocol knowledge",
        "Attention to detail"
      ],
      icon: "🔬",
      color: "from-purple-500 to-pink-500"
    }
  ];

  // Future Opportunities
  const futureOpportunities = [
    {
      title: "Sports Physiotherapy Specialist",
      department: "Sports Medicine Unit",
      expected: "June 2024",
      icon: "⚽",
      description: "New sports rehabilitation center opening soon"
    },
    {
      title: "Pediatric Rehabilitation Expert",
      department: "Pediatric Care Unit",
      expected: "August 2024",
      icon: "👶",
      description: "Specialized pediatric physiotherapy wing"
    },
    {
      title: "Research Coordinator",
      department: "Research & Development",
      expected: "September 2024",
      icon: "📊",
      description: "Lead research initiatives and collaborations"
    },
    {
      title: "Community Health Officer",
      department: "Community Outreach",
      expected: "October 2024",
      icon: "🌍",
      description: "Mobile health unit and community programs"
    }
  ];

  // Benefits & Perks
  const benefits = [
    {
      title: "Competitive Salary",
      description: "As per UGC/AICTE norms with yearly increments",
      icon: <FiDollarSign className="text-2xl" />
    },
    {
      title: "Professional Growth",
      description: "Regular training, conferences, and workshops",
      icon: <FiBook className="text-2xl" />
    },
    {
      title: "Work-Life Balance",
      description: "5-day work week with flexible hours",
      icon: <FiClock className="text-2xl" />
    },
    {
      title: "Health Benefits",
      description: "Comprehensive health insurance for family",
      icon: "🏥"
    },
    {
      title: "Campus Facilities",
      description: "Access to sports, library, and cafeteria",
      icon: <FiUsers className="text-2xl" />
    },
    {
      title: "Recognition & Awards",
      description: "Performance-based awards and recognition",
      icon: <FiAward className="text-2xl" />
    }
  ];

  const [selectedJob, setSelectedJob] = useState<number | null>(1);

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50/30 via-white to-amber-50/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0bc22d]/10 to-[#F39C12]/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#0bc22d] to-[#F39C12] mb-6">
              <span className="text-3xl text-white">💼</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Join Our <span className="bg-gradient-to-r from-[#0bc22d] to-[#F39C12] bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Shape the future of physiotherapy education while building a rewarding career at B.R. Harne College
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { value: "50+", label: "Faculty Members" },
                { value: "98%", label: "Employee Satisfaction" },
                { value: "15+", label: "Departments" },
                { value: "500+", label: "Successful Alumni" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100">
                  <div className="text-2xl font-bold text-[#0F2A44]">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Tab Navigation */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-2 max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row bg-gray-100 p-1 rounded-xl">
              <button
                onClick={() => setActiveTab('current')}
                className={`flex-1 py-4 px-6 text-center font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-3 ${activeTab === 'current' ? 'bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white shadow-lg' : 'text-gray-600 hover:text-[#0F2A44] hover:bg-white'}`}
              >
                <span className="text-xl">📋</span>
                <span className="font-semibold">Current Openings</span>
              </button>
              <button
                onClick={() => setActiveTab('future')}
                className={`flex-1 py-4 px-6 text-center font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-3 ${activeTab === 'future' ? 'bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white shadow-lg' : 'text-gray-600 hover:text-[#0F2A44] hover:bg-white'}`}
              >
                <span className="text-xl">🔮</span>
                <span className="font-semibold">Future Opportunities</span>
              </button>
              <button
                onClick={() => setActiveTab('faculty')}
                className={`flex-1 py-4 px-6 text-center font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-3 ${activeTab === 'faculty' ? 'bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white shadow-lg' : 'text-gray-600 hover:text-[#0F2A44] hover:bg-white'}`}
              >
                <span className="text-xl">👨‍🏫</span>
                <span className="font-semibold">Faculty Benefits</span>
              </button>
            </div>
          </div>
        </div>

        {/* Current Openings Tab */}
        {activeTab === 'current' && (
          <section className="space-y-8">
            {/* Job Listings Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {currentOpenings.map((job) => (
                <div 
                  key={job.id}
                  onClick={() => setSelectedJob(job.id)}
                  className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1 ${selectedJob === job.id ? 'border-[#0bc22d]' : 'border-gray-100'}`}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${job.color} flex items-center justify-center text-white`}>
                          <span className="text-2xl">{job.icon}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                          <p className="text-gray-600">{job.department}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${job.type === 'Full-time' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                        {job.type}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <FiMapPin />
                        <span className="text-sm">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <FiClock />
                        <span className="text-sm">Exp: {job.experience}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="text-sm text-gray-500">
                        Apply before: <span className="font-medium text-gray-700">{job.deadline}</span>
                      </div>
                      <button className="bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Job Details */}
            {selectedJob && (
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 mt-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {currentOpenings.find(j => j.id === selectedJob)?.title}
                  </h3>
                  <button className="bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    Apply for this Position
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <span className="text-[#0bc22d]">📋</span> Job Requirements
                    </h4>
                    <ul className="space-y-3">
                      {currentOpenings.find(j => j.id === selectedJob)?.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#0bc22d]/20 to-[#F39C12]/20 flex items-center justify-center mt-1">
                            <span className="text-[#0bc22d] text-sm">✓</span>
                          </div>
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#0bc22d]/5 to-[#F39C12]/5 rounded-xl p-6 border border-[#0bc22d]/20">
                    <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <span className="text-[#F39C12]">ℹ️</span> Application Process
                    </h4>
                    <ol className="space-y-4">
                      {[
                        "Submit online application form",
                        "Upload resume and documents",
                        "Screening and shortlisting",
                        "Interview process",
                        "Final selection and offer"
                      ].map((step, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white border-2 border-[#0bc22d] flex items-center justify-center font-bold text-[#0bc22d]">
                            {idx + 1}
                          </div>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {/* Future Opportunities Tab */}
        {activeTab === 'future' && (
          <section>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Upcoming <span className="text-[#0bc22d]">Opportunities</span>
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We're expanding! Check out these exciting roles that will be opening soon as part of our growth plan.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {futureOpportunities.map((opportunity, index) => (
                  <div 
                    key={index}
                    className="group bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 rounded-2xl p-6 hover:border-[#0bc22d] transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#0bc22d]/10 to-[#F39C12]/10 flex items-center justify-center group-hover:from-[#0bc22d]/20 group-hover:to-[#F39C12]/20 transition-all duration-300">
                        <span className="text-3xl">{opportunity.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">{opportunity.title}</h4>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                            {opportunity.department}
                          </span>
                          <span className="text-gray-600 text-sm">
                            Expected: {opportunity.expected}
                          </span>
                        </div>
                        <p className="text-gray-600">{opportunity.description}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <button className="w-full bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 py-3 rounded-lg font-medium hover:from-gray-200 hover:to-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
                        <span>Notify Me</span>
                        <span className="text-lg">🔔</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Faculty Benefits Tab */}
        {activeTab === 'faculty' && (
          <section>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Why Work With <span className="text-[#0bc22d]">Us?</span>
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We believe in creating an environment where our faculty can thrive both professionally and personally.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="group bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 rounded-2xl p-6 text-center hover:border-[#0bc22d] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-[#0bc22d]/10 to-[#F39C12]/10 flex items-center justify-center group-hover:from-[#0bc22d]/20 group-hover:to-[#F39C12]/20 transition-all duration-300">
                      {typeof benefit.icon === 'string' ? (
                        <span className="text-2xl">{benefit.icon}</span>
                      ) : (
                        benefit.icon
                      )}
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-3">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
              
              {/* Campus Life Section */}
              <div className="bg-gradient-to-r from-[#0bc22d]/5 to-[#F39C12]/5 rounded-2xl p-8 border border-[#0bc22d]/20">
                <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Campus <span className="text-[#0bc22d]">Life</span>
                </h4>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <ul className="space-y-4">
                      {[
                        "Modern, well-equipped laboratories",
                        "Digital library with latest journals",
                        "Sports and recreation facilities",
                        "Healthy campus cafeteria",
                        "Regular cultural events",
                        "Green campus environment"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#0bc22d] to-[#F39C12] flex items-center justify-center">
                            <span className="text-white text-sm">✓</span>
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h5 className="font-bold text-gray-800 mb-4">Work Environment</h5>
                    <p className="text-gray-600 mb-4">
                      Our campus fosters collaboration, innovation, and professional growth. 
                      Join a community of passionate educators and healthcare professionals.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>🏆 Award-winning institution</span>
                      <span>🤝 Collaborative culture</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-[#0bc22d] to-[#F39C12] rounded-2xl shadow-2xl p-10 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Team?
            </h3>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Take the first step towards a rewarding career in physiotherapy education.
              We're excited to hear from passionate professionals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:hr@brharnephysio.edu.in"
                className="bg-white text-[#0F2A44] px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                📧 Email Your CV
              </a>
              <a 
                href="tel:+919920255543"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                📞 Call HR Department
              </a>
            </div>
            
            <div className="mt-10 pt-8 border-t border-white/20">
              <div className="flex flex-wrap justify-center gap-8 text-white/90">
                <div className="text-center">
                  <div className="text-2xl font-bold">24-48</div>
                  <div className="text-sm">Hours Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm">Confidential Process</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">3-4</div>
                  <div className="text-sm">Step Selection Process</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}