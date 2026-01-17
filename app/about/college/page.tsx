// app/about/college/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutCollegePage() {
  const stats = [
    { number: "2021", label: "Year Established", icon: "🏛️" },
    { number: "BPTh", label: "Undergraduate Program", icon: "🎓" },
    { number: "MUHS", label: "University Affiliation", icon: "📜" },
    { number: "JSF", label: "Parent Foundation", icon: "🤝" },
  ];

  const features = [
    {
      icon: "🧠",
      title: "Holistic Approach",
      description: "Comprehensive scientific approach towards patient care and rehabilitation",
      gradient: "from-green-600 to-green-500"
    },
    {
      icon: "🌟",
      title: "Skill Development",
      description: "Empowering talents and skills of special individuals in society",
      gradient: "from-orange-600 to-orange-500"
    },
    {
      icon: "💡",
      title: "Innovative Learning",
      description: "Problem-based learning with innovative educational strategies",
      gradient: "from-green-500 to-emerald-400"
    },
    {
      icon: "🔬",
      title: "Clinical Integration",
      description: "Blending clinical and basic sciences for practical excellence",
      gradient: "from-orange-500 to-amber-400"
    },
  ];

  const milestones = [
    { year: "2021", event: "College Established", description: "Under Jai Shree Siddhivinayak Foundation" },
    { year: "2021-22", event: "BPTh Program Launch", description: "Started undergraduate program" },
    { year: "Present", event: "Ongoing Growth", description: "Focus on innovative educational strategies" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Parallax Background */}
      <section className="relative h-[40vh] min-h-[80px] overflow-hidden">
        {/* Background Gradient */}
      
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-20 translate-y-20"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-400/20 rounded-full blur-xl"></div>
        
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-3xl mx-auto">
            
            {/* Title */}
            <h1 className="text-5xl md:text-5xl font-bold text-black mb-5 animate-fade-in">
              About Our College
            </h1>
            
            {/* Subtitle with animation */}
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed opacity-0 animate-[fadeIn_0.6s_ease-out_0.4s_forwards]">
              Excellence in Physiotherapy Education
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <div className="relative -mt-16 z-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-2xl p-6 text-center transform hover:-translate-y-2 transition-all duration-300 hover:shadow-3xl border border-gray-100 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className={`text-3xl font-bold mb-2 group-hover:scale-105 transition-transform ${
                  index === 0 ? 'text-green-700' : 
                  index === 1 ? 'text-green-600' : 
                  index === 2 ? 'text-orange-600' : 
                  'text-green-800'
                }`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* College Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              {/* Main College Image */}
              <div className="h-[400px] bg-gradient-to-br from-gray-600 to-green-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl text-white/30 mb-4">🏥</div>
                    <h3 className="text-2xl font-bold text-white">State-of-the-Art Campus</h3>
                  </div>
                </div>
              </div>
              
              {/* Floating Image Cards */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white transform rotate-6 group-hover:rotate-0 transition-transform duration-500">
                <div className="h-full bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center">
                  <div className="text-5xl text-white">👨‍⚕️</div>
                </div>
              </div>
              
              <div className="absolute -top-6 -left-6 w-40 h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                <div className="h-full bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center">
                  <div className="text-5xl text-white">🧬</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Welcome to <span className="text-green-700">B. R. Harne College of Physiotherapy</span>
            </h2>
            
            <div className="space-y-4 text-gray-900 leading-relaxed">
              <p>
                Established in the year 2021 under the aegis of Jai Shree Siddhivinayak Foundation is affiliated to Maharashtra 
                University of Health Sciences, Nashik
              </p>
              
              <p>
                Our undergraduate program for Bachelors of Physiotherapy (BPTh.)
                was also started in the Academic Year 2021-22.
              </p>
              
              <p>
                Our college imparts in our undergraduate students a Holistic, Comprehensive and scientific approach 
                towards patients along with offering Physiotherapy and Rehabilitation services.
              </p>
            </div>
          </div>
        </div>

        {/* Our Vision & Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Commitment to Excellence</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We are striving hard to create an inductive society where skills and talents 
              of special individuals are empowered and recognized.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative p-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl text-white">{feature.icon}</span>
                  </div>
                  
                  <h3 className={`text-xl font-bold text-gray-900 mb-3 group-hover:${
                    feature.gradient.includes('green') ? 'text-green-700' : 'text-orange-700'
                  } transition-colors`}>
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


     {/* Recognition & Affiliation */}
<div className="bg-gray-100 rounded-3xl p-8 md:p-12 text-black border border-gray-300 shadow-sm">
  <div className="relative z-10">
    <div className="text-center mb-10">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0F2A44] sm:mb-2">Recognition & Affiliation</h2>
      <p className="text-gray-700 max-w-xl mx-auto">
        Officially recognized and affiliated with esteemed educational bodies
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-6">
      {/* Government Recognition */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <span className="text-2xl text-blue-600">🏛️</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Government Recognition</h3>
            <p className="text-blue-900 text-sm">Official Recognition</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">
          Recognized by the Government of Maharashtra under the Education Department
        </p>
      </div>
      
      {/* University Affiliation */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <span className="text-2xl text-blue-600">📜</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">University Affiliation</h3>
            <p className="text-blue-900 text-sm">MUHS Nashik</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">
          Affiliated to Maharashtra University of Health Sciences (MUHS), Nashik - 
          The premier health university in Maharashtra
        </p>
      </div>
    </div>
  </div>
</div>

        {/* Student Life Preview */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Campus Life</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience learning in a vibrant, supportive environment
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Clinical Training",
                description: "Hands-on experience in modern healthcare settings",
                image: "👨‍⚕️",
                color: "bg-green-50"
              },
              {
                title: "Academic Excellence",
                description: "Modern classrooms and advanced learning resources",
                image: "📚",
                color: "bg-orange-50"
              },
              {
                title: "Community Engagement",
                description: "Active participation in healthcare awareness programs",
                image: "🤝",
                color: "bg-emerald-50"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`${item.color} rounded-2xl p-8 text-center transform hover:scale-[1.02] transition-all duration-300 group cursor-pointer`}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.image}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
}