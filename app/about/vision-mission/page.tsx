// app/about/vision-mission/page.tsx
export default function VisionMissionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
     <section className="relative bg-gradient py-8 px-4 text-center overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-20 translate-y-20"></div>
        
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Vision & Mission
          </h1>
          <p className="text-xl text-green-900 max-w-2xl mx-auto">
            Guiding principles that illuminate our path to excellence
          </p>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-6 py-16">
  <div className="grid md:grid-cols-2 gap-12">
    {/* Vision Card */}
    <div className="group bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg border-l-8 border-green-900 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-800 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:from-green-400 group-hover:to-green-800 transition-all duration-300">
          <span className="text-2xl group-hover:scale-110 transition-transform duration-300">👁️</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 group-hover:text-green-800 transition-colors duration-300">
          Our Vision
        </h2>
      </div>
      <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
        To be a premier institution of physiotherapy education, fostering innovation, 
        research, and compassionate patient care that transforms lives globally. We aim 
        to create leaders who will shape the future of healthcare with excellence and integrity.
      </p>
    </div>

    {/* Mission Card */}
    <div className="group bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg border-l-8 border-orange-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-800 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:from-orange-400 group-hover:to-orange-700 transition-all duration-300">
          <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🎯</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 group-hover:text-orange-800 transition-colors duration-300">
          Our Mission
        </h2>
      </div>
      <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
        To provide high-quality clinical training, encourage lifelong learning, 
        and develop skilled healthcare professionals who serve the community with ethics and integrity. 
        We are committed to excellence in education, research, and patient care.
      </p>
    </div>
  </div>
</div>
    </div>
  );
}