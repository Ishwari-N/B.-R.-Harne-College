import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ServiceCard from '../components/service-card';

const clinicalDepartments = [
  {
    title: "Orthopedic Physiotherapy",
    description: "Specialized treatment for bone, joint, and muscle injuries, post-surgical rehabilitation, and sports injury management."
  },
  {
    title: "Neurological Physiotherapy",
    description: "Rehabilitation for stroke, spinal cord injuries, Parkinson's disease, and other nervous system disorders."
  },
  {
    title: "Cardio-Respiratory Physiotherapy",
    description: "Improving lung function and cardiovascular health for post-surgical patients and those with chronic respiratory conditions."
  },
  {
    title: "Pediatric Physiotherapy",
    description: "Dedicated care for children with developmental delays, cerebral palsy, and congenital physical conditions."
  },
  {
    title: "Community Physiotherapy",
    description: "Extending healthcare to the community through camps, rural health programs, and geriatric care for the elderly."
  },
  {
    title: "Sports Sciences & Fitness",
    description: "Advanced training in biomechanics, kinesiology, and performance enhancement for athletes."
  }
];

export default function Services() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section for Services */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Our Departments & Services</h1>
          <p className="text-blue-200 max-w-2xl">
            Our college provides state-of-the-art clinical facilities where students receive hands-on training 
            under the supervision of expert clinicians across diverse specialties.
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clinicalDepartments.map((dept, index) => (
            <ServiceCard 
              key={index} 
              title={dept.title} 
              description={dept.description} 
            />
          ))}
        </div>
      </section>

      {/* Clinical Training Section */}
      <section className="bg-white py-16 border-t">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-blue-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Clinical Training Tie-ups</h2>
              <p className="text-gray-700 leading-relaxed">
                Students at B.R. Harne College of Physiotherapy undergo rigorous practical training 
                at our parent multispecialty hospital and various affiliated government and private 
                hospitals to ensure real-world patient exposure.
              </p>
              <ul className="mt-6 space-y-2 text-sm font-semibold text-blue-800">
                <li className="flex items-center gap-2">✓ 500+ Bed Affiliated Hospital</li>
                <li className="flex items-center gap-2">✓ Specialized OPD Units</li>
                <li className="flex items-center gap-2">✓ Modern Electrotherapy Lab</li>
              </ul>
            </div>
            <div className="md:w-1/3 w-full h-64 bg-gray-300 rounded-2xl flex items-center justify-center text-gray-500 italic">
              [Lab/Hospital Image]
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}