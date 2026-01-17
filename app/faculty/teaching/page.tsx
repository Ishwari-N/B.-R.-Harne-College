// app/faculty/teaching-staff/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Teaching Staff Data with better generic images
const teachingStaffData = [
  {
    id: 1,
    name: "Dr. Jay R. Gupta",
    qualification: "Principal",
    designation: "Principal",
    experience: "15+ Years",
    specialization: "Kinesiotherapy & Physical Diagnosis",
    email: "principal@brharnecollege.edu.in",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face",
    color: "from-[#0bc22d] to-[#2de86c]",
    subjects: ["Kinesiotherapy", "Physical Diagnosis"],
    achievements: ["College Principal", "Expert in Kinesiotherapy", "Academic Administrator"]
  },
  {
    id: 2,
    name: "Dr. Jeyaganesh V",
    qualification: "Associate Professor",
    designation: "Associate Professor",
    experience: "12+ Years",
    specialization: "Electrotherapy & Electrodiagnosis",
    email: "jeyaganesh.v@brharnecollege.edu.in",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&crop=face",
    color: "from-[#F39C12] to-[#f8c054]",
    subjects: ["Electrotherapy", "Electrodiagnosis"],
    achievements: ["Specialist in Electrotherapy", "Clinical Expert", "Research Publications"]
  },
  {
    id: 3,
    name: "Dr. Neha Pilankar",
    qualification: "Assistant Professor",
    designation: "Assistant Professor",
    experience: "8+ Years",
    specialization: "Electrotherapy & Electrodiagnosis",
    email: "neha.pilankar@brharnecollege.edu.in",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    color: "from-[#0bc22d] to-[#4af48c]",
    subjects: ["Electrotherapy", "Electrodiagnosis"],
    achievements: ["Electrotherapy Specialist", "Clinical Trainer", "Student Mentor"]
  },
  {
    id: 4,
    name: "Dr. Sayali Yadav",
    qualification: "Assistant Professor",
    designation: "Assistant Professor",
    experience: "7+ Years",
    specialization: "Electrotherapy & Electrodiagnosis",
    email: "sayali.yadav@brharnecollege.edu.in",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
    color: "from-[#F39C12] to-[#ffb347]",
    subjects: ["Electrotherapy", "Electrodiagnosis"],
    achievements: ["Clinical Expert", "Research Contributor", "Workshop Facilitator"]
  },
  {
    id: 5,
    name: "Dr. N. Mangeshran",
    qualification: "Associate Professor",
    designation: "Associate Professor",
    experience: "10+ Years",
    specialization: "Kinesiotherapy & Physical Diagnosis",
    email: "n.mangeshran@brharnecollege.edu.in",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&crop=face",
    color: "from-[#0bc22d] to-[#7ef9a5]",
    subjects: ["Kinesiotherapy", "Physical Diagnosis"],
    achievements: ["Kinesiotherapy Expert", "Clinical Assessment Specialist", "Academic Researcher"]
  },
  {
    id: 6,
    name: "Dr. Anukshaya Moolya",
    qualification: "Assistant Professor",
    designation: "Assistant Professor",
    experience: "6+ Years",
    specialization: "Kinesiotherapy & Physical Diagnosis",
    email: "anukshaya.moolya@brharnecollege.edu.in",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=400&fit=crop&crop=face",
    color: "from-[#F39C12] to-[#ffcc80]",
    subjects: ["Kinesiotherapy", "Physical Diagnosis"],
    achievements: ["Physical Diagnosis Expert", "Clinical Educator", "Research Contributor"]
  },
  {
    id: 7,
    name: "Dr. Arpita Mehta",
    qualification: "Assistant Professor",
    designation: "Assistant Professor",
    experience: "5+ Years",
    specialization: "Kinesiotherapy & Physical Diagnosis",
    email: "arpita.mehta@brharnecollege.edu.in",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
    color: "from-[#0bc22d] to-[#a5f7c3]",
    subjects: ["Kinesiotherapy", "Physical Diagnosis"],
    achievements: ["Clinical Specialist", "Student Mentor", "Workshop Coordinator"]
  },
  {
    id: 8,
    name: "Dr. Parag Kulkarni",
    qualification: "Professor",
    designation: "Professor",
    experience: "18+ Years",
    specialization: "Musculoskeletal PT",
    email: "parag.kulkarni@brharnecollege.edu.in",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face",
    color: "from-[#F39C12] to-[#ffe0b3]",
    subjects: ["Musculoskeletal Physiotherapy"],
    achievements: ["Senior Professor", "Musculoskeletal Specialist", "Research Lead"]
  },
  {
    id: 9,
    name: "Dr. Leena Zore",
    qualification: "Associate Professor",
    designation: "Associate Professor",
    experience: "12+ Years",
    specialization: "Musculoskeletal PT",
    email: "leena.zore@brharnecollege.edu.in",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    color: "from-[#0bc22d] to-[#0af56e]",
    subjects: ["Musculoskeletal Physiotherapy"],
    achievements: ["Musculoskeletal Expert", "Clinical Supervisor", "Academic Contributor"]
  },
  {
    id: 10,
    name: "Dr. Anupama Pathak",
    qualification: "Assistant Professor",
    designation: "Assistant Professor",
    experience: "7+ Years",
    specialization: "Musculoskeletal PT",
    email: "anupama.pathak@brharnecollege.edu.in",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
    color: "from-[#F39C12] to-[#ffd699]",
    subjects: ["Musculoskeletal Physiotherapy"],
    achievements: ["Musculoskeletal Specialist", "Clinical Educator", "Research Assistant"]
  },
  {
    id: 11,
    name: "Dr. Gundu Janaki",
    qualification: "Professor",
    designation: "Professor",
    experience: "20+ Years",
    specialization: "Neuro PT",
    email: "gundu.janaki@brharnecollege.edu.in",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=400&fit=crop&crop=face",
    color: "from-[#0bc22d] to-[#2de86c]",
    subjects: ["Neuro Physiotherapy"],
    achievements: ["Senior Neurological Specialist", "Department Head", "International Publications"]
  },
  {
    id: 12,
    name: "Dr. Ruchi Gupta",
    qualification: "Associate Professor",
    designation: "Associate Professor",
    experience: "11+ Years",
    specialization: "Neuro PT",
    email: "ruchi.gupta@brharnecollege.edu.in",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    color: "from-[#F39C12] to-[#f8c054]",
    subjects: ["Neuro Physiotherapy"],
    achievements: ["Neurological Rehabilitation Expert", "Clinical Researcher", "Academic Mentor"]
  },
  {
    id: 13,
    name: "Dr. Anjali Perdeshi",
    qualification: "Assistant Professor",
    designation: "Assistant Professor",
    experience: "6+ Years",
    specialization: "Neuro PT",
    email: "anjali.perdeshi@brharnecollege.edu.in",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
    color: "from-[#0bc22d] to-[#4af48c]",
    subjects: ["Neuro Physiotherapy"],
    achievements: ["Neuro Rehabilitation Specialist", "Clinical Trainer", "Research Contributor"]
  },
  {
    id: 14,
    name: "Dr. Abhilasha Jain",
    qualification: "Assistant Professor",
    designation: "Assistant Professor",
    experience: "5+ Years",
    specialization: "Community PT",
    email: "abhilasha.jain@brharnecollege.edu.in",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=400&fit=crop&crop=face",
    color: "from-[#F39C12] to-[#ffb347]",
    subjects: ["Community Physiotherapy"],
    achievements: ["Community Health Specialist", "Public Health Educator", "Field Coordinator"]
  },
  {
    id: 15,
    name: "Dr. Mayuri Ghumatkar",
    qualification: "Professor",
    designation: "Professor",
    experience: "16+ Years",
    specialization: "Cardiovascular & Respiratory PT",
    email: "mayuri.ghumatkar@brharnecollege.edu.in",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    color: "from-[#0bc22d] to-[#7ef9a5]",
    subjects: ["Cardiovascular PT", "Respiratory PT"],
    achievements: ["Cardiorespiratory Specialist", "Department Head", "Research Publications"]
  },
  {
    id: 16,
    name: "Dr. Venkatash Goud",
    qualification: "Associate Professor",
    designation: "Associate Professor",
    experience: "13+ Years",
    specialization: "Cardiovascular & Respiratory PT",
    email: "venkatash.goud@brharnecollege.edu.in",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face",
    color: "from-[#F39C12] to-[#ffcc80]",
    subjects: ["Cardiovascular PT", "Respiratory PT"],
    achievements: ["Cardiorespiratory Expert", "Clinical Supervisor", "Academic Researcher"]
  },
  {
    id: 17,
    name: "Dr. Akshaya Iyer",
    qualification: "Assistant Professor",
    designation: "Assistant Professor",
    experience: "4+ Years",
    specialization: "Cardiovascular & Respiratory PT",
    email: "akshaya.iyer@brharnecollege.edu.in",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
    color: "from-[#0bc22d] to-[#a5f7c3]",
    subjects: ["Cardiovascular PT", "Respiratory PT"],
    achievements: ["Cardiorespiratory Specialist", "Clinical Educator", "Research Assistant"]
  }
];

export default function TeachingStaffPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedFaculty, setSelectedFaculty] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredFaculty, setFilteredFaculty] = useState(teachingStaffData);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});

  // Handle image loading errors
  const handleImageError = (facultyId: number) => {
    setImageErrors(prev => ({...prev, [facultyId]: true}));
  };

  // Filter faculty based on category and search
  useEffect(() => {
    let filtered = teachingStaffData;
    
    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(faculty => 
        faculty.specialization.toLowerCase().includes(activeCategory.toLowerCase()) ||
        faculty.subjects.some(subject => 
          subject.toLowerCase().includes(activeCategory.toLowerCase())
        )
      );
    }
    
    // Filter by search query
    if (searchQuery.trim() !== '') {
      filtered = filtered.filter(faculty =>
        faculty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faculty.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faculty.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faculty.subjects.some(subject => 
          subject.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
    
    setFilteredFaculty(filtered);
  }, [activeCategory, searchQuery]);

  const openFacultyModal = (faculty: any) => {
    setSelectedFaculty(faculty);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFacultyModal = () => {
    setIsModalOpen(false);
    setSelectedFaculty(null);
    document.body.style.overflow = 'auto';
  };

  const handleEmailClick = (email: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.href = `mailto:${email}`;
  };

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeFacultyModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fff5] to-white">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0bc22d]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#F39C12]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#0bc22d]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-2">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-5">          
          
          <div className="relative px-6 md:py-10 text-center">
            <div className="inline-flex items-center justify-center gap-2 mb-1 animate-fade-in">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-1">
                  Teaching Staff
                </h1>
              </div>
            </div>
            
            <p className="text-lg md:text-[15px] text-gray-700 max-w-xl mx-auto leading-relaxed">
              Meet our distinguished team of physiotherapy educators and researchers dedicated to shaping the future of healthcare professionals
            </p>
          </div>
        </div>

        {/* Faculty Cards Grid */}
        <div className="mb-16">
          {filteredFaculty.length === 0 ? (
            <div className="bg-white rounded-3xl shadow-xl p-12 text-center border border-gray-100">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No Faculty Found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                Show All Faculty
              </button>
            </div>
          ) : (
            <>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredFaculty.map((faculty) => (
                  <div
                    key={faculty.id}
                    className="group cursor-pointer transition-all duration-300 hover:-translate-y-2"
                    onMouseEnter={() => setHoveredCard(faculty.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => openFacultyModal(faculty)}
                  >
                    <div className={`bg-white rounded-2xl shadow-xl overflow-hidden h-full transition-all duration-300 border border-gray-100 ${
                      hoveredCard === faculty.id ? 'shadow-2xl ring-2 ring-[#0bc22d] ring-opacity-50' : 'hover:shadow-2xl'
                    }`}>
                      {/* Faculty Image Header - Reduced Height */}
                      <div className="h-50 bg-gradient-to-r from-gray-100 to-gray-200 relative overflow-hidden">
                        {imageErrors[faculty.id] ? (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-[#0bc22d] to-[#F39C12]">
                            <div className="text-5xl text-white">👨‍⚕️</div>
                          </div>
                        ) : (
                          <img
                            src={faculty.image}
                            alt={faculty.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={() => handleImageError(faculty.id)}
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        <div className="absolute bottom-3 left-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                            faculty.designation.includes('Professor') && !faculty.designation.includes('Assistant')
                              ? 'bg-gradient-to-r from-[#0bc22d] to-[#2de86c]'
                              : faculty.designation.includes('Assistant')
                              ? 'bg-gradient-to-r from-[#F39C12] to-[#ffb347]'
                              : 'bg-gradient-to-r from-gray-600 to-gray-800'
                          }`}>
                            {faculty.designation}
                          </span>
                        </div>
                      </div>

                      {/* Faculty Info - Reduced Padding */}
                      <div className="p-5 text-center">
                        <h3 className="text-lg font-bold text-gray-800 mb-1 transition-colors">
                          {faculty.name}
                        </h3>
                        
                        <div className="mb-3">
                          <div className="text-xs text-[#0bc22d] font-semibold">{faculty.qualification}</div>
                        </div>

                        {/* Specialization - Smaller */}
                        <div className="mb-3">
                          <div className="text-xs text-gray-800 mb-1">Specialization</div>
                          <div className="text-sm font-medium text-gray-950 line-clamp-2">{faculty.specialization}</div>
                        </div> 
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      {/* Faculty Detail Modal */}
      {isModalOpen && selectedFaculty && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={closeFacultyModal}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header - Simplified without background image */}
            <div className="relative pt-8">
              {/* Close Button */}
              <button
                onClick={closeFacultyModal}
                className="absolute top-8 right-8 bg-transparent text-gray-800 hover:text-[#0bc22d] p-3 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg z-10"
              >
                <span className="text-2xl">✕</span>
              </button>
              
              {/* Large Profile Image Circle - Increased size */}
              <div className="flex justify-center">
                <div className="w-60 h-60 bg-gradient-to-r from-[#0bc22d] to-[#F39C12] rounded-full border-8 border-white overflow-hidden shadow-2xl">
                  {imageErrors[selectedFaculty.id] ? (
                    <div className="w-full h-full bg-gradient-to-r from-[#0bc22d] to-[#F39C12] flex items-center justify-center">
                      <span className="text-6xl text-white">👨‍⚕️</span>
                    </div>
                  ) : (
                    <img
                      src={selectedFaculty.image}
                      alt={selectedFaculty.name}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(selectedFaculty.id)}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="pt-10 px-8 pb-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedFaculty.name}</h2>
                <div className="space-y-1">
                  <div className="text-lg text-gray-600 font-medium">{selectedFaculty.designation}</div>
                  <div className="text-[#0bc22d] font-semibold">{selectedFaculty.qualification}</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <div className="bg-gray-50 rounded-2xl p-6 mb-6 border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                      <span className="text-2xl text-[#0bc22d]">🎯</span>
                      Specialization & Experience
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Specialization</div>
                        <div className="font-medium text-gray-800">{selectedFaculty.specialization}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Experience</div>
                        <div className="font-medium text-gray-800">{selectedFaculty.experience}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                      <span className="text-2xl text-[#F39C12]">🏆</span>
                      Key Achievements
                    </h3>
                    <ul className="space-y-3">
                      {selectedFaculty.achievements.map((achievement: string, index: number) => (
                        <li key={index} className="flex items-center gap-3">
                          <span className="text-[#0bc22d]">✓</span>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <div className="bg-gradient-to-r from-[#0bc22d]/5 to-[#F39C12]/5 rounded-2xl p-6 mb-6 border border-[#0bc22d]/20">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                      <span className="text-2xl text-[#0bc22d]">📚</span>
                      Subjects Taught
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedFaculty.subjects.map((subject: string, index: number) => (
                        <span 
                          key={index}
                          className="bg-white border border-[#0bc22d]/30 text-[#0bc22d] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#0bc22d] hover:text-white transition-colors"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#0bc22d] to-[#F39C12] rounded-2xl p-6 text-white border border-white/20">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                      <span className="text-2xl">📞</span>
                      Contact Faculty
                    </h3>
                    <div className="space-y-4">
                      {/* Email Display */}
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-2 border border-white/20">
                        <div className="text-sm text-white/80 mb-1">Email Address</div>
                        <div className="text-white font-medium text-lg">{selectedFaculty.email}</div>
                      </div>
                      
                      <button
                        onClick={(e) => handleEmailClick(selectedFaculty.email, e)}
                        className="block w-full bg-white text-[#0bc22d] py-3 rounded-xl font-bold text-center hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                      >
                        Send Email
                      </button>
                      <button 
                        className="block w-full bg-transparent border-2 border-white text-white py-3 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                        onClick={() => {
                          alert(`Schedule a meeting with ${selectedFaculty.name}`);
                        }}
                      >
                        Schedule Meeting
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      `}</style>
    </div>
  );
}