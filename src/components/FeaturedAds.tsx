import React, { useEffect, useState } from 'react';
import { MapPin, Eye, Clock, Star, Heart } from 'lucide-react';

const FeaturedAds: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredAds = [
    {
      id: 1,
      title: 'Software Engineer - Full Stack Developer',
      category: 'Jobs',
      price: '$85,000 - $120,000',
      location: 'Chicago, IL',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 245,
      timeAgo: '2 hours ago',
      featured: true,
      description: 'Join our dynamic team as a Full Stack Developer. React, Node.js experience required.'
    },
    {
      id: 2,
      title: '3BR Luxury Apartment in Downtown',
      category: 'Real Estate',
      price: '$2,800/month',
      location: 'Naperville, IL',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 189,
      timeAgo: '4 hours ago',
      featured: true,
      description: 'Beautiful 3-bedroom apartment with modern amenities and city views.'
    },
    {
      id: 3,
      title: '2018 Honda Accord - Excellent Condition',
      category: 'Vehicles',
      price: '$18,500',
      location: 'Aurora, IL',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 156,
      timeAgo: '6 hours ago',
      featured: true,
      description: 'Well-maintained Honda Accord with low mileage. Single owner.'
    },
    {
      id: 4,
      title: 'Indian Classical Dance Classes',
      category: 'Education',
      price: '$60/month',
      location: 'Bloomington, IL',
      image: 'https://images.pexels.com/photos/1701194/pexels-photo-1701194.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 98,
      timeAgo: '8 hours ago',
      featured: false,
      description: 'Learn Bharatanatyam from certified instructor. All ages welcome.'
    },
    {
      id: 5,
      title: 'Wedding Photography Services',
      category: 'Services',
      price: 'Starting $1,200',
      location: 'Peoria, IL',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 134,
      timeAgo: '12 hours ago',
      featured: true,
      description: 'Professional wedding photography with Indian cultural expertise.'
    },
    {
      id: 6,
      title: 'MacBook Pro 2021 - Like New',
      category: 'Buy & Sell',
      price: '$1,800',
      location: 'Springfield, IL',
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 267,
      timeAgo: '1 day ago',
      featured: false,
      description: 'MacBook Pro 14" with M1 Pro chip. Barely used, includes original box.'
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= featuredAds.length - 4 ? 0 : prevIndex + 1
      );
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval);
  }, [featuredAds.length]);

  return (
    <section className="py-3">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-0.5">Featured Ads</h2>
          <p className="text-xs text-gray-600">Premium listings from our community</p>
        </div>
        <button className="text-orange-500 hover:text-orange-600 font-semibold transition-colors text-sm">
          View All →
        </button>
      </div>

      {/* Scrolling Container */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out gap-3"
          style={{ 
            transform: `translateX(-${currentIndex * 25}%)`,
            width: `${featuredAds.length * 25}%`
          }}
        >
          {featuredAds.map((ad) => (
            <div
              key={ad.id}
              className="flex-shrink-0 w-1/4 min-w-0 group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={ad.image}
                  alt={ad.title}
                  className="w-full h-28 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Featured Badge */}
                {ad.featured && (
                  <div className="absolute top-1 left-1 bg-gradient-to-r from-orange-500 to-red-500 text-white px-1.5 py-0.5 rounded-full text-xs font-semibold flex items-center space-x-0.5">
                    <Star className="h-2 w-2 fill-current" />
                    <span>Featured</span>
                  </div>
                )}
                
                {/* Favorite Button */}
                <button className="absolute top-1 right-1 w-5 h-5 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <Heart className="h-2.5 w-2.5 text-gray-600 hover:text-red-500 transition-colors" />
                </button>
                
                {/* Category Tag */}
                <div className="absolute bottom-1 left-1 bg-black/70 text-white px-1.5 py-0.5 rounded text-xs">
                  {ad.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-2">
                <h3 className="text-xs font-semibold text-gray-900 mb-0.5 line-clamp-2 group-hover:text-orange-600 transition-colors">
                  {ad.title}
                </h3>
                
                <p className="text-xs text-gray-600 mb-1 line-clamp-1 hidden">
                  {ad.description}
                </p>
                
                {/* Price */}
                <div className="text-xs font-bold text-orange-600 mb-1">
                  {ad.price}
                </div>
                
                {/* Location */}
                <div className="flex items-center text-gray-600 mb-1">
                  <MapPin className="h-2.5 w-2.5 mr-0.5" />
                  <span className="text-xs">{ad.location}</span>
                </div>
                
                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-gray-500 pt-1 border-t border-gray-100">
                  <div className="flex items-center space-x-1">
                    <Eye className="h-2.5 w-2.5" />
                    <span>{ad.views} views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-2.5 w-2.5" />
                    <span>{ad.timeAgo}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-3 space-x-1">
        {Array.from({ length: featuredAds.length - 3 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === index
                ? 'bg-orange-500'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Static grid for smaller screens */}
      <div className="md:hidden grid grid-cols-2 gap-2 mt-4">
        {featuredAds.slice(0, 4).map((ad) => (
          <div
            key={ad.id}
            className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden">
              <img
                src={ad.image}
                alt={ad.title}
                className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              
              {/* Featured Badge */}
              {ad.featured && (
                <div className="absolute top-1 left-1 bg-gradient-to-r from-orange-500 to-red-500 text-white px-1.5 py-0.5 rounded-full text-xs font-semibold flex items-center space-x-0.5">
                  <Star className="h-2 w-2 fill-current" />
                  <span>Featured</span>
                </div>
              )}
              
              {/* Favorite Button */}
              <button className="absolute top-1 right-1 w-5 h-5 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                <Heart className="h-2.5 w-2.5 text-gray-600 hover:text-red-500 transition-colors" />
              </button>
              
              {/* Category Tag */}
              <div className="absolute bottom-1 left-1 bg-black/70 text-white px-1.5 py-0.5 rounded text-xs">
                {ad.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-2">
              <h3 className="text-xs font-semibold text-gray-900 mb-0.5 line-clamp-2 group-hover:text-orange-600 transition-colors">
                {ad.title}
              </h3>
              
              <p className="text-xs text-gray-600 mb-1 line-clamp-2 hidden">
                {ad.description}
              </p>
              
              {/* Price */}
              <div className="text-xs font-bold text-orange-600 mb-1">
                {ad.price}
              </div>
              
              {/* Location */}
              <div className="flex items-center text-gray-600 mb-1">
                <MapPin className="h-2.5 w-2.5 mr-0.5" />
                <span className="text-xs">{ad.location}</span>
              </div>
              
              {/* Stats */}
              <div className="flex items-center justify-between text-xs text-gray-500 pt-1 border-t border-gray-100">
                <div className="flex items-center space-x-1">
                  <Eye className="h-2.5 w-2.5" />
                  <span>{ad.views} views</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-2.5 w-2.5" />
                  <span>{ad.timeAgo}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-4">
        <button className="bg-white border-2 border-orange-500 text-orange-500 px-4 py-1.5 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-200 text-sm">
          Load More Ads
        </button>
      </div>
    </section>
  );
};

export default FeaturedAds;