// app/about/treasurer-desk/page.tsx
export default function TreasurerDeskPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <header className="py-8 md:py-12">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Treasurer&apos;s Desk
          </h1>
          <p className="text-green-700 text-lg md:text-xl">
            Financial Stewardship & Educational Vision
          </p>
        </div>
      </header>

      {/* Main Content - Reduced gap to gap-4 */}
      <main className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-12">
          
          {/* Left Column - Treasurer Profile */}
          <div className="lg:col-span-1 space-y-8">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500">
              {/* Photo Container */}
              <div className="relative mb-10">
                <div className="relative w-72 h-72 mx-auto">
                  {/* Decorative Rings */}
                  <div className="absolute inset-0 rounded-full border-4 border-green-400/20 animate-pulse"></div>
                  <div className="absolute -inset-4 rounded-full border-2 border-green-600/10"></div>
                  
                  {/* Photo Placeholder */}
                  <div className="relative mb-10">
                    <div className="relative w-72 h-72 mx-auto">
                      {/* Photo Frame */}
                      <div className="relative w-full h-full rounded-full overflow-auto group">
                        <img 
                          src="/treasurer.png" 
                          alt="Shri. B. R. Harne"
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-green-700/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-8">
                      <span className="text-white font-semibold text-center text-lg">
                        Mr. Rushikesh M. Harne
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Treasurer Details */}
              <div className="text-center space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Mr. Rushikesh M. Harne
                  </h2>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-green-100 text-green-700 px-6 py-3 rounded-full font-semibold border border-green-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Treasurer
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50/50 to-orange-50/50 p-6 rounded-2xl border border-green-100">
                  <p className="text-green-800 font-semibold text-lg">
                    Jai Shree Siddhivinayak Foundation
                  </p>
                  <p className="text-gray-600 mt-1">Dombivali (West)</p>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500">Since 2007</p>
                  </div>
                </div>

                {/* Contact Info (Optional) */}
                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Financial Responsibilities
                  </h3>
                  <ul className="space-y-3 text-left">
                    {[
                      "Budget Planning & Management",
                      "Infrastructure Development",
                      "Scholarship Programs",
                      "Research Funding",
                      "Financial Sustainability"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Treasurer's Message */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-gradient-to-br from-green-600 to-green-500 rounded-2xl shadow-lg">
                  <span className="text-white text-2xl font-bold">T</span>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    From Treasurer&apos;s Desk
                  </h2>
                  <p className="text-gray-600 mt-2">A Message of Vision & Commitment</p>
                </div>
              </div>

              {/* Message Content */}
              <div className="space-y-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Having been haunted by the socioeconomic & ethical transformation of our country, the foundation stone of the educational complex of <span className="text-green-700 font-semibold">B.R. Harne Educational Campus</span> under the canopy of <span className="text-green-600 font-semibold">Jai Shri Siddhivinayak Foundation</span> was laid in the year 2007. It is growing year by year.
                </p>

                <div className="relative">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-green-600 rounded-full"></div>
                  <div className="bg-gradient-to-r from-green-50/50 to-transparent p-6 pl-10 rounded-r-2xl border-l-4 border-green-500 hover:from-green-50 transition-all duration-300">
                    <p className="text-gray-700 italic text-lg leading-relaxed">
                      The mission of establishing the educational campus is to impart quality education by including innovative courses & creating a learner-friendly environment.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  I believe that the students completing various courses will not only have ample job opportunities in India and abroad but can also look forward to becoming entrepreneurs & researchers.
                </p>
                <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
                    <p className="text-gray-900 leading-relaxed">
                      I extend a hearty & warm welcome to you at <span className="font-semibold">B. R. Harne College of Pharmacy</span>, which will definitely shape your mind & character. With you All the Best for your future prospects.
                    </p>

                {/* Signature */}
                <div className="mt-5 pt-5 border-t border-gray-200">
                  <div className="flex flex-col items-end space-y-4">
                    <div className="text-right">
                      <p className="text-gray-600 mb-2">With best regards,</p>
                      <div className="text-2xl font-bold text-gray-900 font-serif">
                        Mr. Rushikesh M. Harne
                      </div>
                      <p className="text-green-600 font-semibold mt-1">Treasurer</p>
                    </div>
                  </div>
                </div>

                
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100 hover:border-green-400 hover:shadow-xl transition-all duration-300 group">
                <div className="text-4xl font-bold text-green-700 group-hover:text-green-600 transition-colors">
                  2007
                </div>
                <div className="text-gray-600 text-sm mt-2">Foundation Year</div>
                <div className="h-1 w-16 bg-gray-200 rounded-full mt-4 overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100 hover:border-orange-400 hover:shadow-xl transition-all duration-300 group">
                <div className="text-4xl font-bold text-orange-700 group-hover:text-orange-600 transition-colors">
                  15+
                </div>
                <div className="text-gray-600 text-sm mt-2">Years of Service</div>
                <div className="h-1 w-16 bg-gray-200 rounded-full mt-4 overflow-hidden">
                  <div className="h-full bg-orange-500 rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}