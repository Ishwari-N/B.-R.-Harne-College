// app/about/president-desk/page.tsx
export default function PresidentDeskPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <header className="py-8 md:py-12">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            President&apos;s Desk
          </h1>
          <p className="text-green-700 text-lg md:text-xl">
            Courage and simplicity is the power to win
          </p>
        </div>
      </header>

      {/* Main Content - Reduced gap to gap-4 */}
      <main className="max-w-6xl mx-auto px-4 pb-12 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-12">
          
          {/* Left Column - President Profile */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100 transition-all duration-300 hover:shadow-xl">
              {/* Photo Container */}
              <div className="mb-8">
                <div className="relative w-64 h-64 mx-auto">
                  {/* Outer decorative ring */}
                  <div className="absolute inset-0 rounded-full p-2">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-green-600 to-orange-600 opacity-20"></div>
                  </div>
    
                  {/* Photo container with inset shadow */}
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]"></div>
      
                    <img 
                      src="/chairman-photo.png" 
                      alt="Shri. B. R. Harne"
                      className="w-full h-full object-cover"
                    />
      
                    {/* Professional overlay */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-green-600/40 via-transparent to-transparent"></div>
                  </div>
    
                  {/* Badge at bottom */}
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-100">
                    <p className="text-sm font-bold text-green-800">Chairman</p>
                  </div>
                </div>
              </div>

              {/* President Details */}
              <div className="text-center space-y-4">
                <h2 className="text-2xl md:text-xl font-bold text-gray-900">
                  Shri. Mangesh B. Harne
                </h2>
                <div className="inline-block bg-gradient-to-r from-green-50 to-green-100 text-green-700 px-4 py-2 rounded-full font-semibold border border-green-200">
                  Hon&apos;ble President
                </div>
                <div className="bg-gradient-to-r from-green-50/50 to-orange-50/50 p-4 rounded-xl border border-green-100">
                  <p className="text-green-800 font-semibold">
                    Jai Shree Siddhivinayak Foundation
                  </p>
                  <p className="text-gray-600 text-sm mt-1">Dombivali (West)</p>
                  <p className="text-gray-500 text-xs mt-2">Established 2007</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="bg-white p-3 rounded-xl border border-green-100 hover:border-green-300 transition-colors">
                    <div className="text-green-700 font-bold text-2xl">16+</div>
                    <div className="text-gray-600 text-xs">Years of Excellence</div>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-orange-100 hover:border-orange-300 transition-colors">
                    <div className="text-orange-700 font-bold text-2xl">5000+</div>
                    <div className="text-gray-600 text-xs">Students Empowered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - President Message */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10 border border-gray-100">
              <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center">
                <div className="w-1 h-6 bg-gradient-to-r from-[#0bc22d] to-[#F39C12] rounded-full"></div>
              </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  From President&apos;s Desk
                </h2>
              </div>

              {/* Message Content */}
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Jai Shree Siddhivinayak Foundation was established in the year 2007 with a social commitment to providing <span className="text-green-700 font-semibold">professional, competitive, and industry-relevant education</span> to the younger generation of rural and urban areas.
                </p>

                <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 p-5 rounded-r-xl my-6">
                  <p className="text-gray-700 italic">
                    Globalization and liberalization have changed all the concerns and references. There is a need to reconsider the present education at all its levels and hence it is necessary to deviate from the traditional methods and use new methods and technology for imparting education.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  In today&apos;s era of globalization, an organization needs qualified technocrats and managers filled with enthusiasm and a spirit of hard work blended with self-confidence to achieve their goals. At <span className="text-green-600 font-semibold">Jai Shree Siddhivinayak Foundation&apos;s B. R. Harne College of Engineering and Technology</span>, we have put together the organizational learning and insights gathered over time and combined them with innovative, state-of-the-art delivery mechanisms that will equip the younger generation to take on the challenges both in India and overseas.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  The institute has a very special place in my heart. Since 2011, <span className="text-green-700 font-semibold">BRHCET</span> has developed excellent infra-structural facilities with well-equipped laboratories and an enriched library, which will be updated regularly. I believe that in nearby future the institute will produce competent technocrats and managers who will make a significant contribution to the corporate world and industries all over the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}