// app/events/[slug]/page.tsx
import React from 'react';
import Link from 'next/link';
import { getEventBySlug, getAllEventSlugs } from '@/app/data/events-data';
import ImageSlider from '@/app/components/ImageSlider';
import VideoCard, { VideoPlayerProvider } from '@/app/components/VideoCard'; // Updated import

// Generate static paths for all events
export async function generateStaticParams() {
  try {
    const slugs = getAllEventSlugs();
    return slugs.map((slug) => ({
      slug: slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Generate metadata for each event
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const event = getEventBySlug(slug);
    
    if (!event) {
      return {
        title: 'Event Not Found',
        description: 'The requested event could not be found.'
      };
    }

    return {
      title: `${event.title} | B.R. Harne College Events`,
      description: event.description,
    };
  } catch (error) {
    return {
      title: 'Error Loading Event',
      description: 'There was an error loading the event details.'
    };
  }
}

export default async function EventDetailPageComponent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let event;
  
  try {
    event = getEventBySlug(slug);
  } catch (error) {
    console.error('Error fetching event:', error);
    return <EventNotFound />;
  }

  if (!event) {
    return <EventNotFound />;
  }

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Link 
          href="/events"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#0bc22d] transition-colors"
        >
          <span className="text-lg">←</span>
          Back to Events
        </Link>
      </div>

      {/* Event Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">{event.emoji || '🎉'}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            {event.title}
          </h1>
        </div>
        
        {/* Event Info Cards */}
        <div className="flex flex-wrap gap-8 mb-8">
          <div className="flex items-center gap-2 bg-transparent px-4 py-2 rounded-lg">
            <span className="text-xl">📅</span>
            <div>
              <div className="font-semibold text-gray-800">{event.date}</div>
              <div className="text-sm text-gray-500">Date</div>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-transparent px-4 py-2 rounded-lg">
            <span className="text-xl">📍</span>
            <div>
              <div className="font-semibold text-gray-800">{event.location}</div>
              <div className="text-sm text-gray-500">Location</div>
            </div>
          </div>
        </div>
      </div>

      {/* Description and Event Highlights in 2-column grid */}
      <section className="max-w-7xl mx-auto px-4 py-1 mb-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Description */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Event Description</h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                {event.description}
              </p>
              <p className="text-gray-600 leading-relaxed">
                Join us for an exciting day filled with learning, networking, and innovation. 
                This event brings together industry leaders, academic experts, and students 
                to explore the latest trends and opportunities in technology and education.
              </p>
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-lg">🎯</span>
                  <span className="font-medium">What you'll gain:</span>
                </div>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Hands-on experience with latest technologies</li>
                  <li>• Networking with industry professionals</li>
                  <li>• Career guidance and opportunities</li>
                  <li>• Certificate of participation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Event Highlights */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 ">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Event Highlights</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-lg">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Expert Keynote Sessions</h3>
                  <p className="text-gray-600 text-sm mt-1">Learn from industry leaders and academic experts in interactive sessions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-lg">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Hands-on Workshops</h3>
                  <p className="text-gray-600 text-sm mt-1">Practical demonstrations and workshops on cutting-edge technologies</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-lg">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Networking Opportunities</h3>
                  <p className="text-gray-600 text-sm mt-1">Connect with 500+ professionals, alumni, and industry experts</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 text-lg">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Project Exhibitions</h3>
                  <p className="text-gray-600 text-sm mt-1">Showcase of innovative student projects with competition prizes</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-lg">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Career Guidance</h3>
                  <p className="text-gray-600 text-sm mt-1">Placement opportunities and career counseling sessions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 text-lg">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Cultural Events</h3>
                  <p className="text-gray-600 text-sm mt-1">Evening cultural programs and entertainment activities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Slideshow (Automatic) - Using client component */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Event Gallery</h2>
        <ImageSlider />
      </section>

      {/* Videos in Grid of 5 columns */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Event Videos</h2>
        <VideoPlayerProvider>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { 
                id: 'video-1',
                title: 'Opening Ceremony', 
                thumbnail: 'https://images.unsplash.com/photo-1492684223066-e9e4aab4d25e?w=800&auto=format&fit=crop', 
                duration: '2:45',
                videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
              },
              { 
                id: 'video-2',
                title: 'Keynote Speech', 
                thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop', 
                duration: '15:30',
                videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
              },
              { 
                id: 'video-3',
                title: 'Workshop Highlights', 
                thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop', 
                duration: '8:22',
                videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
              },
              { 
                id: 'video-4',
                title: 'Cultural Night', 
                thumbnail: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&auto=format&fit=crop', 
                duration: '12:15',
                videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
              },
              { 
                id: 'video-5',
                title: 'Award Distribution', 
                thumbnail: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop', 
                duration: '6:45',
                videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
              },
              { 
                id: 'video-6',
                title: 'Panel Discussion', 
                thumbnail: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop', 
                duration: '10:20',
                videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
              },
              { 
                id: 'video-7',
                title: 'Networking Session', 
                thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop', 
                duration: '5:30',
                videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
              },
              { 
                id: 'video-8',
                title: 'Valedictory', 
                thumbnail: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop', 
                duration: '7:15',
                videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
              },
              { 
                id: 'video-9',
                title: 'Exhibition', 
                thumbnail: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop', 
                duration: '9:45',
                videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4'
              },
              { 
                id: 'video-10',
                title: 'Highlights Reel', 
                thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop', 
                duration: '3:50',
                videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
              },
            ].map((video) => (
              <VideoCard
                key={video.id}
                id={video.id}
                title={video.title}
                thumbnail={video.thumbnail}
                duration={video.duration}
                videoUrl={video.videoUrl}
              />
            ))}
          </div>
        </VideoPlayerProvider>
      </section>

      {/* Register Button at the end */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <button className="bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white px-12 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:cursor-pointer">
            Register Now
          </button>
          <p className="mt-4 text-gray-600">
            Limited seats available • Early bird discounts until {event.date}
          </p>
        </div>
      </section>
    </div>
  );
}

// Separate component for 404 page
function EventNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-red-100 to-pink-100 flex items-center justify-center">
          <span className="text-4xl">❌</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Event Not Found
        </h1>
        
        <p className="text-gray-600 mb-6">
          The requested event could not be found. It may have been removed or the URL is incorrect.
        </p>
        
        <div className="space-y-4">
          <Link
            href="/events"
            className="inline-block bg-gradient-to-r from-[#0bc22d] to-[#F39C12] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Browse All Events
          </Link>
          
          <Link
            href="/"
            className="inline-block border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}