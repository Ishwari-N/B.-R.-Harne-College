// app/data/events-data.ts
export interface Event {
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  gradientFrom: string;
  gradientTo: string;
  year: number;
  slug: string;
  category: string;
  type: string;
  emoji: string;
  price: string;
  fullDescription?: string;
  highlights?: string[];
  speakers?: string[];
  registrationInfo?: string;
  capacity?: string;
  details?: string;
}

// Helper function to generate slug
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')     // Replace spaces with hyphens
    .replace(/--+/g, '-')     // Replace multiple hyphens with single
    .trim();
}

// Sample events data with all required properties
export const eventsData: Event[] = [
  // 2026 Events
  {
    id: 1,
    title: "International Physiotherapy Conference 2026",
    slug: generateSlug("International Physiotherapy Conference 2026"),
    description: "Annual international conference bringing together physiotherapy experts, researchers, and students from around the world.",
    location: "International Convention Center, Mumbai",
    date: "March 10-12, 2026",
    image: "event1.jpeg",
    gradientFrom: "from-[#0bc22d]",
    gradientTo: "to-[#2de86c]",
    year: 2026,
    category: "Conference",
    type: "Academic",
    emoji: "🎤",
    price: "Free",
    capacity: "500+",
    fullDescription: "The International Physiotherapy Conference 2026 brings together leading physiotherapy experts, researchers, and students from around the world to discuss cutting-edge research and clinical practices. This three-day event features keynote speeches, research paper presentations, hands-on workshops, and networking opportunities.",
    highlights: [
      "Keynote speeches by international experts",
      "Research paper presentations",
      "Hands-on workshops",
      "Networking sessions",
      "Poster presentations",
      "Industry exhibitions"
    ],
    speakers: [
      "Dr. John Smith - International Physiotherapy Expert",
      "Prof. Maria Garcia - Neurological Rehabilitation Specialist",
      "Dr. Rajesh Kumar - Sports Physiotherapy Pioneer",
      "Dr. Lisa Anderson - Pediatric Rehabilitation Expert"
    ],
    registrationInfo: "Registration is open for all participants. Early bird discounts available until February 28, 2026."
  },
  {
    id: 2,
    title: "Advanced Neuro-Rehabilitation Symposium",
    slug: generateSlug("Advanced Neuro-Rehabilitation Symposium"),
    description: "Specialized symposium focusing on the latest advancements in neurological rehabilitation techniques.",
    location: "College Auditorium, Maharashtra",
    date: "July 15-17, 2026",
    image: "event2.jpg",
    gradientFrom: "from-[#F39C12]",
    gradientTo: "to-[#f8c054]",
    year: 2026,
    category: "Symposium",
    type: "Technical",
    emoji: "🧠",
    price: "₹500",
    capacity: "200",
    fullDescription: "This specialized symposium focuses on the latest advancements in neurological rehabilitation techniques and technologies for stroke and spinal cord injury patients. Featuring demonstrations of cutting-edge equipment and treatment protocols.",
    highlights: [
      "Latest neuro-rehabilitation techniques",
      "Hands-on equipment demonstrations",
      "Case study discussions",
      "Expert panels",
      "Clinical practice workshops"
    ],
    speakers: [
      "Dr. Lisa Anderson - Neuro-Rehabilitation Specialist",
      "Prof. Robert Chen - Stroke Rehabilitation Expert",
      "Dr. Priya Sharma - Spinal Cord Injury Specialist",
      "Dr. Michael Wong - Neuro-technology Pioneer"
    ],
    registrationInfo: "Limited seats available. Priority for registered physiotherapists and students."
  },
  // 2025 Events
  {
    id: 3,
    title: "Sports Physiotherapy Excellence Summit 2025",
    slug: generateSlug("Sports Physiotherapy Excellence Summit 2025"),
    description: "Comprehensive summit focusing on sports injury prevention, management, and performance enhancement.",
    location: "College Sports Complex, Maharashtra",
    date: "May 20-22, 2025",
    image: "sports.jpeg",
    gradientFrom: "from-[#0bc22d]",
    gradientTo: "to-[#4af48c]",
    year: 2025,
    category: "Summit",
    type: "Sports",
    emoji: "🏆",
    price: "₹750",
    capacity: "300",
    fullDescription: "Comprehensive summit focusing on sports injury prevention, management, and performance enhancement techniques for athletes of all levels. Includes practical workshops on sports taping, rehabilitation protocols, and performance analysis.",
    highlights: [
      "Sports injury prevention workshops",
      "Performance enhancement techniques",
      "Sports taping demonstrations",
      "Athlete case studies",
      "Biomechanics analysis"
    ],
    speakers: [
      "Dr. Michael Johnson - Sports Medicine Specialist",
      "Prof. Sarah Wilson - Athletic Performance Expert",
      "Dr. David Lee - Sports Biomechanics Pioneer",
      "Ms. Anjali Patel - Elite Athlete Therapist"
    ],
    registrationInfo: "Open to all sports physiotherapists and students. Group discounts available for teams."
  },
  {
    id: 4,
    title: "Pediatric Rehabilitation Workshop 2025",
    slug: generateSlug("Pediatric Rehabilitation Workshop 2025"),
    description: "Hands-on workshop focusing on developmental disorders and pediatric rehabilitation techniques.",
    location: "Pediatrics Department, College Campus",
    date: "August 10-12, 2025",
    image: "event3.jpeg",
    gradientFrom: "from-[#F39C12]",
    gradientTo: "to-[#ffb347]",
    year: 2025,
    category: "Workshop",
    type: "Practical",
    emoji: "👶",
    price: "Free",
    capacity: "50",
    fullDescription: "Hands-on workshop focusing on developmental disorders, childhood disabilities, and advanced pediatric rehabilitation techniques. Includes interactive sessions with child development experts and practical demonstrations.",
    highlights: [
      "Developmental disorder management",
      "Pediatric assessment techniques",
      "Interactive therapy sessions",
      "Parent guidance workshops",
      "Play-based therapy demonstrations"
    ],
    speakers: [
      "Dr. Emily Parker - Pediatric Rehabilitation Specialist",
      "Prof. James Wilson - Child Development Expert",
      "Dr. Anjali Mehta - Pediatric Neurologist",
      "Ms. Sarah Chen - Occupational Therapist"
    ],
    registrationInfo: "Limited to 50 participants. Early registration recommended. Priority for pediatric specialists."
  },
  // 2024 Events
  {
    id: 5,
    title: "Community Health Camp 2024",
    slug: generateSlug("Community Health Camp 2024"),
    description: "Large-scale community health initiative providing free physiotherapy consultations.",
    location: "Rural Maharashtra Villages",
    date: "January 10-15, 2024",
    image: "health.jpeg",
    gradientFrom: "from-[#F39C12]",
    gradientTo: "to-[#ffcc80]",
    year: 2024,
    category: "Camp",
    type: "Community Service",
    emoji: "🤝",
    price: "Free",
    capacity: "Unlimited",
    fullDescription: "Large-scale community health initiative providing free physiotherapy consultations, treatments, and health education to underserved rural populations across Maharashtra. Organized in collaboration with local health authorities.",
    highlights: [
      "Free health checkups",
      "Physiotherapy treatments",
      "Health education sessions",
      "Mobility aid distribution",
      "Community awareness programs"
    ],
    speakers: [
      "Community Health Workers",
      "Local Physicians",
      "College Faculty Members",
      "Public Health Officials"
    ],
    registrationInfo: "Volunteer registration open for students and professionals. Community members welcome without registration."
  },
  {
    id: 6,
    title: "Cardiac Rehabilitation Conference 2024",
    slug: generateSlug("Cardiac Rehabilitation Conference 2024"),
    description: "Specialized conference focusing on cardiac rehabilitation and post-cardiac care.",
    location: "Medical College Auditorium, Pune",
    date: "November 5-7, 2024",
    image: "ev2.jpeg",
    gradientFrom: "from-[#0bc22d]",
    gradientTo: "to-[#4af48c]",
    year: 2024,
    category: "Conference",
    type: "Medical",
    emoji: "❤️",
    price: "₹600",
    capacity: "250",
    fullDescription: "Specialized conference focusing on cardiac rehabilitation, post-cardiac care, and cardiovascular health management. Features latest research and clinical practices.",
    highlights: [
      "Cardiac rehabilitation protocols",
      "Post-operative care workshops",
      "Research presentations",
      "Patient case discussions",
      "Equipment demonstrations"
    ],
    speakers: [
      "Dr. Robert Miller - Cardiac Rehabilitation Expert",
      "Prof. Susan Lee - Cardiovascular Specialist",
      "Dr. Amit Sharma - Interventional Cardiologist",
      "Ms. Priya Desai - Cardiac Care Nurse"
    ],
    registrationInfo: "Open to all healthcare professionals. CME credits available."
  },
  {
    id: 7,
    title: "Geriatric Care Workshop 2024",
    slug: generateSlug("Geriatric Care Workshop 2024"),
    description: "Workshop focusing on elderly care, mobility enhancement, and fall prevention.",
    location: "Geriatric Center, Mumbai",
    date: "September 20-21, 2024",
    image: "ev3.jpeg",
    gradientFrom: "from-[#F39C12]",
    gradientTo: "to-[#ffb347]",
    year: 2024,
    category: "Workshop",
    type: "Geriatric",
    emoji: "👴",
    price: "Free",
    capacity: "100",
    fullDescription: "Practical workshop focusing on elderly care, mobility enhancement, fall prevention, and quality of life improvement for senior citizens.",
    highlights: [
      "Fall prevention strategies",
      "Mobility enhancement techniques",
      "Pain management workshops",
      "Caregiver training",
      "Equipment demonstrations"
    ],
    speakers: [
      "Dr. Margaret Brown - Geriatric Care Specialist",
      "Prof. Raj Patel - Elderly Mobility Expert",
      "Dr. Sunita Verma - Pain Management Specialist",
      "Ms. Lisa Wong - Occupational Therapist"
    ],
    registrationInfo: "Free for senior citizens and their caregivers. Limited seats available."
  },
  {
    id: 8,
    title: "Yoga & Physiotherapy Integration Symposium",
    slug: generateSlug("Yoga & Physiotherapy Integration Symposium"),
    description: "Exploring the integration of yoga practices with modern physiotherapy techniques.",
    location: "Yoga Center, Nasik",
    date: "October 15-17, 2024",
    image: "yoga.jpeg",
    gradientFrom: "from-[#0bc22d]",
    gradientTo: "to-[#2de86c]",
    year: 2024,
    category: "Symposium",
    type: "Integrative Medicine",
    emoji: "🧘",
    price: "₹400",
    capacity: "150",
    fullDescription: "Exploring the integration of traditional yoga practices with modern physiotherapy techniques for holistic health and rehabilitation.",
    highlights: [
      "Yoga therapy demonstrations",
      "Breathing techniques workshops",
      "Mind-body integration sessions",
      "Research presentations",
      "Practical training"
    ],
    speakers: [
      "Yoga Guru Ramesh Sharma",
      "Dr. Priya Nair - Integrative Medicine Expert",
      "Prof. Anil Kumar - Rehabilitation Specialist",
      "Ms. Maya Patel - Yoga Therapist"
    ],
    registrationInfo: "Open to yoga practitioners and physiotherapists. Early bird registration available."
  },
  // Highlighted Events (Added with your data)
  {
    id: 9,
    title: "National Physiotherapy Conference 2024",
    slug: generateSlug("National Physiotherapy Conference 2024"),
    description: "College hosted the annual national conference with over 500 delegates from various institutions across the state. The event featured keynote speeches, research presentations, and hands-on workshops.",
    location: "College Auditorium",
    date: "March 15-16, 2024",
    image: "award.jpeg",
    gradientFrom: "from-[#0bc22d]",
    gradientTo: "to-[#2de86c]",
    year: 2024,
    category: "Conference",
    type: "Academic",
    emoji: "👥",
    price: "Free",
    capacity: "500+",
    fullDescription: "The National Physiotherapy Conference 2024 was successfully hosted by our college with participation from over 500 delegates representing various institutions across the state. The event featured keynote speeches by renowned physiotherapy experts, research paper presentations, and practical hands-on workshops.",
    highlights: [
      "Keynote speeches by national experts",
      "Research paper presentations",
      "Hands-on workshops",
      "Networking with 500+ delegates",
      "Poster exhibition"
    ],
    speakers: [
      "Dr. Arvind Sharma - National Physiotherapy Association President",
      "Prof. Meena Desai - Research Methodology Expert",
      "Dr. Sameer Joshi - Clinical Practice Specialist",
      "Ms. Rina Patel - Rehabilitation Therapist"
    ],
    registrationInfo: "The conference was open to all physiotherapy professionals and students. Certificate of participation was provided to all attendees."
  },
  {
    id: 10,
    title: "Best College Award 2023-24",
    slug: generateSlug("Best College Award 2023-24"),
    description: "Recognized as the best physiotherapy college in the state for academic excellence, infrastructure, and student outcomes. The award was presented by the State Health Education Department.",
    location: "State Health Department, Mumbai",
    date: "December 10, 2023",
    image: "sports.jpeg",
    gradientFrom: "from-[#F39C12]",
    gradientTo: "to-[#ffb347]",
    year: 2023,
    category: "Recognition",
    type: "Award",
    emoji: "🏆",
    price: "Free",
    capacity: "N/A",
    fullDescription: "B.R. Harne College of Physiotherapy was honored with the 'Best College Award 2023-24' by the State Health Education Department for outstanding performance in academic excellence, infrastructure development, and exceptional student outcomes. This prestigious award recognizes our commitment to quality education and holistic development of students.",
    highlights: [
      "Recognition for academic excellence",
      "Award for infrastructure development",
      "Appreciation for student outcomes",
      "State-level honor",
      "Prestigious ceremony attendance"
    ],
    speakers: [
      "Health Minister - State Government",
      "Education Secretary - State Department",
      "University Vice-Chancellor",
      "College Principal"
    ],
    registrationInfo: "Award ceremony attendance by invitation only."
  },
  {
    id: 11,
    title: "Community Health Camp Success 2023",
    slug: generateSlug("Community Health Camp Success 2023"),
    description: "Served over 2000 patients in rural health camps organized across multiple villages. Provided free physiotherapy consultations, basic health check-ups, and awareness sessions.",
    location: "Rural Maharashtra Villages",
    date: "November 5-10, 2023",
    image: "health.jpeg",
    gradientFrom: "from-[#0bc22d]",
    gradientTo: "to-[#4af48c]",
    year: 2023,
    category: "Camp",
    type: "Community Service",
    emoji: "❤️",
    price: "Free",
    capacity: "2000+",
    fullDescription: "Our college organized a massive community health camp initiative across multiple rural villages in Maharashtra, serving over 2000 patients. The camp provided free physiotherapy consultations, basic health check-ups, health awareness sessions, and distributed essential mobility aids to the underserved population.",
    highlights: [
      "Served 2000+ patients",
      "Free physiotherapy consultations",
      "Health awareness sessions",
      "Mobility aid distribution",
      "Rural outreach program"
    ],
    speakers: [
      "Community Health Workers",
      "College Faculty Members",
      "Medical Officers",
      "Social Workers"
    ],
    registrationInfo: "Free services for all community members. Volunteer registration for students and professionals."
  }
];

// Function to get event by slug
export function getEventBySlug(slug: string): Event | undefined {
  return eventsData.find(event => event.slug === slug);
}

// Function to get all event slugs for static generation
export function getAllEventSlugs(): string[] {
  return eventsData.map(event => event.slug);
}

// Function to get events by year
export function getEventsByYear(year: number): Event[] {
  return eventsData.filter(event => event.year === year);
}

// Function to get all events
export function getAllEvents(): Event[] {
  return eventsData;
}

// Function to get events by category
export function getEventsByCategory(category: string): Event[] {
  return eventsData.filter(event => event.category.toLowerCase() === category.toLowerCase());
}

// Function to get highlighted events (for home page)
export function getHighlightedEvents(): Event[] {
  return [
    eventsData[8],  // National Physiotherapy Conference 2024 (id: 9)
    eventsData[9],  // Best College Award 2023-24 (id: 10)
    eventsData[10], // Community Health Camp Success 2023 (id: 11)
  ];
}