// app/faculty/non-teaching-staff/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Non-Teaching Staff Data with images
const nonTeachingStaffData = [
  {
    id: 1,
    name: "Mr. Yogesh F. Jain",
    designation: "Office Superintendent",
    department: "Administration",
    responsibilities: "Overall office administration, staff coordination, official correspondence management",
    contact: "0251-2483344 Ext. 101",
    email: "office@brharnephysiotherapy.com",
    experience: "10+ Years",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
    color: "from-[#0bc22d] to-[#2de86c]",
    roleFocus: ["Administration", "Coordination", "Documentation"],
    achievements: ["10+ Years Service", "Efficiency Award 2022", "Process Improvement"]
  },
  {
    id: 2,
    name: "Mr. Navnath Jadhav",
    designation: "Accountant",
    department: "Accounts",
    responsibilities: "Financial management, fee collection, budgeting, expense tracking",
    contact: "0251-2483344 Ext. 102",
    email: "accounts@brharnephysiotherapy.com",
    experience: "8+ Years",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    color: "from-[#F39C12] to-[#f8c054]",
    roleFocus: ["Finance", "Accounting", "Budgeting"],
    achievements: ["Audit Excellence", "Financial Accuracy", "Timely Reporting"]
  },
  {
    id: 3,
    name: "Mr. Mayur Jampahare",
    designation: "Jr. Clerk",
    department: "Administration",
    responsibilities: "Document filing, record maintenance, clerical support, data entry",
    contact: "0251-2483344 Ext. 103",
    email: "clerical@brharnephysiotherapy.com",
    experience: "5+ Years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    color: "from-[#0bc22d] to-[#4af48c]",
    roleFocus: ["Clerical", "Documentation", "Records"],
    achievements: ["Quick Processing", "Accuracy Award", "Team Support"]
  },
  {
    id: 4,
    name: "Mrs. Yogita R. Kadu",
    designation: "Librarian",
    department: "Library",
    responsibilities: "Library management, book circulation, resource cataloging, student assistance",
    contact: "0251-2483344 Ext. 104",
    email: "library@brharnephysiotherapy.com",
    experience: "7+ Years",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    color: "from-[#F39C12] to-[#ffb347]",
    roleFocus: ["Library", "Resources", "Research Support"],
    achievements: ["Collection Growth", "Digital Catalog", "Student Satisfaction"]
  },
  {
    id: 5,
    name: "Mrs. Mamta Karote",
    designation: "Lab Assistant",
    department: "Laboratory",
    responsibilities: "Lab equipment maintenance, inventory management, student support",
    contact: "0251-2483344 Ext. 105",
    email: "lab@brharnephysiotherapy.com",
    experience: "6+ Years",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    color: "from-[#0bc22d] to-[#7ef9a5]",
    roleFocus: ["Laboratory", "Equipment", "Technical Support"],
    achievements: ["Lab Safety", "Equipment Maintenance", "Student Training"]
  },
  {
    id: 6,
    name: "Miss. Sarika Vishe",
    designation: "Regi. Data Entry Operator",
    department: "Administration",
    responsibilities: "Student registration, database management, report generation",
    contact: "0251-2483344 Ext. 106",
    email: "dataentry@brharnephysiotherapy.com",
    experience: "4+ Years",
    image: "https://images.unsplash.com/photo-1551836026-d5c2e5d5a5ca?w=400&h=400&fit=crop&crop=face",
    color: "from-[#F39C12] to-[#ffcc80]",
    roleFocus: ["Data Entry", "Registration", "Database"],
    achievements: ["Data Accuracy", "Quick Processing", "System Management"]
  },
  {
    id: 7,
    name: "Mrs. Shilpa Shinde",
    designation: "Store Keeper",
    department: "Inventory",
    responsibilities: "Stock management, inventory control, supply distribution",
    contact: "0251-2483344 Ext. 107",
    email: "store@brharnephysiotherapy.com",
    experience: "9+ Years",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop&crop=face",
    color: "from-[#0bc22d] to-[#a5f7c3]",
    roleFocus: ["Inventory", "Stores", "Supplies"],
    achievements: ["Stock Optimization", "Cost Saving", "Efficient Distribution"]
  },
  {
    id: 8,
    name: "Mr. Kamlakar Mangal Vare",
    designation: "Peon",
    department: "Support Staff",
    responsibilities: "Office support, document delivery, general assistance",
    contact: "0251-2483344 Ext. 108",
    email: "support@brharnephysiotherapy.com",
    experience: "12+ Years",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    color: "from-[#F39C12] to-[#ffe0b3]",
    roleFocus: ["Support", "Assistance", "Delivery"],
    achievements: ["Reliable Service", "Prompt Assistance", "Team Player"]
  },
  {
    id: 9,
    name: "Mr. Pankaj Gawanda",
    designation: "Peon",
    department: "Support Staff",
    responsibilities: "General office assistance, maintenance support, errands",
    contact: "0251-2483344 Ext. 109",
    email: "support@brharnephysiotherapy.com",
    experience: "3+ Years",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005-128?w=400&h=400&fit=crop&crop=face",
    color: "from-[#0bc22d] to-[#0af56e]",
    roleFocus: ["Office Support", "Maintenance", "General Assistance"],
    achievements: ["Multi-tasking", "Efficiency", "Adaptability"]
  },
  {
    id: 10,
    name: "Mrs. Akshada Shende",
    designation: "Sweeper",
    department: "Housekeeping",
    responsibilities: "Campus cleanliness, waste management, hygiene maintenance",
    contact: "0251-2483344 Ext. 110",
    email: "housekeeping@brharnephysiotherapy.com",
    experience: "8+ Years",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=400&fit=crop&crop=face",
    color: "from-[#F39C12] to-[#ffd699]",
    roleFocus: ["Cleanliness", "Hygiene", "Maintenance"],
    achievements: ["Clean Campus", "Hygiene Excellence", "Dedicated Service"]
  },
  {
    id: 11,
    name: "Mrs. Bharti Shende",
    designation: "Sweeper",
    department: "Housekeeping",
    responsibilities: "Sanitation management, area cleaning, facility upkeep",
    contact: "0251-2483344 Ext. 111",
    email: "housekeeping@brharnephysiotherapy.com",
    experience: "6+ Years",
    image: "https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?w=400&h=400&fit=crop&crop=face",
    color: "from-[#0bc22d] to-[#2de86c]",
    roleFocus: ["Sanitation", "Cleaning", "Facility Care"],
    achievements: ["Thorough Cleaning", "Evening Shift Excellence", "Consistent Quality"]
  }
];

// Department categories
const departmentCategories = [
  { id: 'all', name: 'All Staff', count: nonTeachingStaffData.length },
  { id: 'administration', name: 'Administration', count: nonTeachingStaffData.filter(s => s.department === 'Administration').length },
  { id: 'accounts', name: 'Accounts', count: nonTeachingStaffData.filter(s => s.department === 'Accounts').length },
  { id: 'library', name: 'Library', count: nonTeachingStaffData.filter(s => s.department === 'Library').length },
  { id: 'laboratory', name: 'Laboratory', count: nonTeachingStaffData.filter(s => s.department === 'Laboratory').length },
  { id: 'inventory', name: 'Inventory', count: nonTeachingStaffData.filter(s => s.department === 'Inventory').length },
  { id: 'support', name: 'Support Staff', count: nonTeachingStaffData.filter(s => s.department === 'Support Staff').length },
  { id: 'housekeeping', name: 'Housekeeping', count: nonTeachingStaffData.filter(s => s.department === 'Housekeeping').length },
];

export default function NonTeachingStaffPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedStaff, setSelectedStaff] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredStaff, setFilteredStaff] = useState(nonTeachingStaffData);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});

  // Handle image loading errors
  const handleImageError = (staffId: number) => {
    setImageErrors(prev => ({...prev, [staffId]: true}));
  };

  // Filter staff based on category and search
  useEffect(() => {
    let filtered = nonTeachingStaffData;
    
    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(staff => {
        switch (activeCategory) {
          case 'administration':
            return staff.department === 'Administration';
          case 'accounts':
            return staff.department === 'Accounts';
          case 'library':
            return staff.department === 'Library';
          case 'laboratory':
            return staff.department === 'Laboratory';
          case 'inventory':
            return staff.department === 'Inventory';
          case 'support':
            return staff.department === 'Support Staff';
          case 'housekeeping':
            return staff.department === 'Housekeeping';
          default:
            return true;
        }
      });
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(staff =>
        staff.name.toLowerCase().includes(query) ||
        staff.designation.toLowerCase().includes(query) ||
        staff.department.toLowerCase().includes(query) ||
        staff.responsibilities.toLowerCase().includes(query)
      );
    }
    
    setFilteredStaff(filtered);
  }, [activeCategory, searchQuery]);

  const openStaffModal = (staff: any) => {
    setSelectedStaff(staff);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeStaffModal = () => {
    setIsModalOpen(false);
    setSelectedStaff(null);
    document.body.style.overflow = 'auto';
  };

  const handleEmailClick = (email: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.href = `mailto:${email}`;
  };

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeStaffModal();
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
      <main className="max-w-7xl mx-auto px-4 py-4">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-7">          
          
          <div className="relative px-6 py-5 md:py-5 text-center">
            <div className="inline-flex items-center justify-center gap-4 mb-8 animate-fade-in">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-2">
                  Non-Teaching Staff
                </h1>
                <div className="text-xl text-gray-800">Administrative • Support • Operational</div>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Meet our dedicated non-teaching staff who work tirelessly behind the scenes to ensure the smooth operation of our college
            </p>
          </div>
        </div>

        {/* Staff Cards Grid */}
        <div className="mb-16">
          {filteredStaff.length === 0 ? (
            <div className="bg-white rounded-3xl shadow-xl p-12 text-center border border-gray-100">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No Staff Found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
              
            </div>
          ) : (
            <>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredStaff.map((staff) => (
                  <div
                    key={staff.id}
                    className="group cursor-pointer transition-all duration-300 hover:-translate-y-2"
                    onMouseEnter={() => setHoveredCard(staff.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => openStaffModal(staff)}
                  >
                    <div className={`bg-white rounded-2xl shadow-xl overflow-hidden h-full transition-all duration-300 border border-gray-100 ${
                      hoveredCard === staff.id ? 'shadow-2xl ring-2 ring-[#0bc22d] ring-opacity-50' : 'hover:shadow-2xl'
                    }`}>
                      {/* Staff Image Header - Reduced Height */}
                      <div className="h-40 bg-gray-100 relative overflow-hidden">
                        {imageErrors[staff.id] ? (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="text-5xl text-gray-400">👨‍💼</div>
                          </div>
                        ) : (
                          <img
                            src={staff.image}
                            alt={staff.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={() => handleImageError(staff.id)}
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        <div className="absolute bottom-3 left-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${staff.color}`}>
                            {staff.department}
                          </span>
                        </div>
                      </div>

                      {/* Staff Info - Reduced Padding */}
                      <div className="p-5 text-center">
                        <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-[#0bc22d] transition-colors">
                          {staff.name}
                        </h3>
                        
                        <div className="mb-3">
                          <div className="text-xs text-[#0bc22d] font-semibold">{staff.designation}</div>
                          <div className="text-sm font-medium text-gray-700">{staff.department}</div>
                        </div>

                        {/* Responsibilities - Smaller */}
                        <div className="mb-3">
                          <div className="text-xs text-gray-500 mb-1">Primary Responsibility</div>
                          <div className="text-sm font-medium text-gray-700 line-clamp-2">{staff.responsibilities}</div>
                        </div>

                        {/* Experience - Smaller */}
                        <div className="mb-4">
                          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0bc22d]/5 to-[#F39C12]/5 px-3 py-1.5 rounded-full">
                            <span className="text-[#F39C12] text-sm">⭐</span>
                            <span className="text-xs font-medium">{staff.experience} Service</span>
                          </div>
                        </div> 
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Department Overview */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 mb-16 border border-gray-100">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-2/5">
              <div className="bg-gradient-to-br from-[#0bc22d] to-[#F39C12] rounded-2xl p-8 text-white text-center">
                <div className="text-6xl mb-6">⚙️</div>
                <h3 className="text-2xl font-bold mb-4">Operational Excellence</h3>
                <p className="text-white/90">
                  Our non-teaching staff ensures seamless college operations
                </p>
              </div>
            </div>
            
            <div className="lg:w-3/5">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                About Our Non-Teaching Staff
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: "📋",
                    title: "Administrative Support",
                    description: "Efficient handling of office operations and student services"
                  },
                  {
                    icon: "💰",
                    title: "Financial Management",
                    description: "Accurate accounting and transparent financial operations"
                  },
                  {
                    icon: "📚",
                    title: "Resource Management",
                    description: "Well-maintained library and laboratory facilities"
                  },
                  {
                    icon: "🏢",
                    title: "Campus Operations",
                    description: "Clean, safe, and well-maintained campus environment"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-5 hover:bg-gradient-to-r hover:from-[#0bc22d]/5 hover:to-[#F39C12]/5 transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-[#0bc22d]/20">
                    <div className="flex items-center gap-4">
                      <div className={`text-3xl ${index % 2 === 0 ? 'text-[#0bc22d]' : 'text-[#F39C12]'}`}>{item.icon}</div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Staff Detail Modal */}
      {isModalOpen && selectedStaff && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={closeStaffModal}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="h-48 bg-gray-100 relative overflow-hidden">
              <button
                onClick={closeStaffModal}
                className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors z-10"
              >
                <span className="text-2xl">✕</span>
              </button>
              
              {imageErrors[selectedStaff.id] ? (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-8xl text-gray-400">👨‍💼</div>
                </div>
              ) : (
                <img
                  src={selectedStaff.image}
                  alt={selectedStaff.name}
                  className="w-full h-full object-cover"
                  onError={() => handleImageError(selectedStaff.id)}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                <div className="w-32 h-32 bg-white rounded-full border-4 border-white overflow-hidden shadow-2xl">
                  {imageErrors[selectedStaff.id] ? (
                    <div className="w-full h-full bg-gradient-to-br from-[#0bc22d] to-[#F39C12] flex items-center justify-center">
                      <span className="text-4xl text-white">👨‍💼</span>
                    </div>
                  ) : (
                    <img
                      src={selectedStaff.image}
                      alt={selectedStaff.name}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(selectedStaff.id)}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="pt-20 px-8 pb-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedStaff.name}</h2>
                <div className="space-y-1">
                  <div className="text-lg text-gray-600 font-medium">{selectedStaff.designation}</div>
                  <div className="text-[#0bc22d] font-semibold">{selectedStaff.department} Department</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <div className="bg-gray-50 rounded-2xl p-6 mb-6 border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                      <span className="text-2xl text-[#0bc22d]">🎯</span>
                      Role & Responsibilities
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Primary Responsibilities</div>
                        <div className="font-medium text-gray-800">{selectedStaff.responsibilities}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Experience</div>
                        <div className="font-medium text-gray-800">{selectedStaff.experience}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Contact</div>
                        <div className="font-medium text-gray-800">{selectedStaff.contact}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                      <span className="text-2xl text-[#F39C12]">🏆</span>
                      Key Achievements
                    </h3>
                    <ul className="space-y-3">
                      {selectedStaff.achievements.map((achievement: string, index: number) => (
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
                      <span className="text-2xl text-[#0bc22d]">🎯</span>
                      Role Focus Areas
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedStaff.roleFocus.map((area: string, index: number) => (
                        <span 
                          key={index}
                          className="bg-white border border-[#0bc22d]/30 text-[#0bc22d] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#0bc22d] hover:text-white transition-colors"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#0bc22d] to-[#F39C12] rounded-2xl p-6 text-white border border-white/20">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                      <span className="text-2xl">📞</span>
                      Contact Support
                    </h3>
                    <div className="space-y-4">
                      {/* Email Display */}
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-2 border border-white/20">
                        <div className="text-sm text-white/80 mb-1">Email Address</div>
                        <div className="text-white font-medium text-lg">{selectedStaff.email}</div>
                      </div>
                      
                      <button
                        onClick={(e) => handleEmailClick(selectedStaff.email, e)}
                        className="block w-full bg-white text-[#0bc22d] py-3 rounded-xl font-bold text-center hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                      >
                        Send Email
                      </button>
                      <button 
                        className="block w-full bg-transparent border-2 border-white text-white py-3 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                        onClick={() => {
                          alert(`Contact ${selectedStaff.name} via ${selectedStaff.contact}`);
                        }}
                      >
                        Call Extension: {selectedStaff.contact.split('Ext. ')[1]}
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