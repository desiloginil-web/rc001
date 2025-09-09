import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Cloud } from 'lucide-react';

const Hero: React.FC = () => {
  const cities = [
    { name: 'Chicago', count: '2,847 ads', image: 'https://images.pexels.com/photos/2224861/pexels-photo-2224861.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Aurora', count: '456 ads', image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Naperville', count: '623 ads', image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Bloomington-Normal', count: '234 ads', image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Peoria', count: '189 ads', image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Springfield', count: '312 ads', image: 'https://images.pexels.com/photos/2224861/pexels-photo-2224861.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Urbana-Champaign', count: '445 ads', image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Rockford', count: '167 ads', image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  const categories = [
    { name: 'Jobs', icon: '💼', color: 'from-blue-500 to-blue-600', count: 1247 },
    { name: 'Real Estate', icon: '🏠', color: 'from-green-500 to-green-600', count: 856 },
    { name: 'Vehicles', icon: '🚗', color: 'from-red-500 to-red-600', count: 634 },
    { name: 'Buy & Sell', icon: '🛍️', color: 'from-purple-500 to-purple-600', count: 923 },
    { name: 'Services', icon: '🔧', color: 'from-orange-500 to-orange-600', count: 445 },
    { name: 'Education', icon: '🎓', color: 'from-indigo-500 to-indigo-600', count: 234 },
    { name: 'Community Events', icon: '📅', color: 'from-pink-500 to-pink-600', count: 167 },
    { name: 'Health & Wellness', icon: '❤️', color: 'from-teal-500 to-teal-600', count: 189 },
    { name: 'Matrimonial', icon: '💑', color: 'from-rose-500 to-rose-600', count: 312 },
    { name: 'Food & Dining', icon: '🍽️', color: 'from-yellow-500 to-yellow-600', count: 156 },
    { name: 'Entertainment', icon: '🎮', color: 'from-cyan-500 to-cyan-600', count: 98 }
  ];

  // Mock weather data - in production, this would come from a weather API
  const weatherData = {
    city: 'Chicago',
    temp: '32°F',
    condition: 'Partly Cloudy',
    icon: Cloud
  };

  return (
    <section className="pt-2 pb-3">
      {/* Top Banner with Weather - Desktop Only */}
      <div className="bg-white border-b border-gray-200 mb-6 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center">
            {/* Advertisement Space */}
            <div className="w-full bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500 font-medium h-20">
              <div className="text-center">
                <div className="text-sm font-semibold mb-1">Advertisement Space</div>
                <div className="text-xs">728 x 90 - Top Banner</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side by Side: Cities and Categories */}
      {/* Mobile Layout: Half-width content with ads on right */}
      <div className="mb-4 lg:hidden">
        <div className="flex gap-2">
          {/* Left Half: Cities and Categories */}
          <div className="w-1/2 space-y-4">
            {/* Browse by Cities */}
            <div>
              <h2 className="text-sm font-bold text-gray-900 mb-2">Browse by Cities</h2>
              <div className="grid grid-cols-2 gap-1 max-h-64 overflow-y-auto">
                {cities.map((city, index) => (
                  <Link
                    to={`/city/${encodeURIComponent(city.name)}`}
                    key={index}
                    className="group relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                  >
                    <div className="relative">
                      <img
                        src={city.image}
                        alt={city.name}
                        className="w-full h-16 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-1">
                        <h3 className="text-white font-bold text-xs truncate">{city.name}</h3>
                        <p className="text-white/80 text-xs truncate">{city.count}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Browse by Categories */}
            <div>
              <h2 className="text-sm font-bold text-gray-900 mb-2">Browse Categories</h2>
              <div className="grid grid-cols-2 gap-1 max-h-64 overflow-y-auto">
                {categories.map((category, index) => (
                  <Link 
                    to={`/category/${encodeURIComponent(category.name)}`}
                    key={index} 
                    className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer transform hover:-translate-y-1 overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-15 transition-opacity duration-300`} />
                    <div className="relative p-2 text-center">
                      <div className={`inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br ${category.color} text-white mb-1`}>
                        <span className="text-xs">{category.icon}</span>
                      </div>
                      <h3 className="text-xs font-semibold text-gray-900 mb-0.5 truncate">{category.name}</h3>
                      <div className="flex items-center justify-center space-x-1">
                        <span className="text-xs font-bold text-gray-900">{category.count.toLocaleString()}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Half: Mobile Ads */}
          <div className="w-1/2 space-y-2">
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 border-2 border-dashed border-orange-300 rounded-lg flex items-center justify-center text-orange-600 font-medium h-32">
              <div className="text-center">
                <div className="text-xs font-semibold mb-1">Mobile Ad Space</div>
                <div className="text-xs">300 x 250</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-dashed border-blue-300 rounded-lg flex items-center justify-center text-blue-600 font-medium h-32">
              <div className="text-center">
                <div className="text-xs font-semibold mb-1">Mobile Ad Space</div>
                <div className="text-xs">300 x 250</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 border-2 border-dashed border-green-300 rounded-lg flex items-center justify-center text-green-600 font-medium h-20">
              <div className="text-center">
                <div className="text-xs font-semibold mb-1">Mobile Banner</div>
                <div className="text-xs">320 x 50</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 border-2 border-dashed border-purple-300 rounded-lg flex items-center justify-center text-purple-600 font-medium h-24">
              <div className="text-center">
                <div className="text-xs font-semibold mb-1">Mobile Ad Space</div>
                <div className="text-xs">300 x 200</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-100 to-red-200 border-2 border-dashed border-red-300 rounded-lg flex items-center justify-center text-red-600 font-medium h-20">
              <div className="text-center">
                <div className="text-xs font-semibold mb-1">Mobile Banner</div>
                <div className="text-xs">320 x 50</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout: Full width (unchanged) */}
      <div className="mb-4 hidden lg:block">
        {/* Browse by Cities - More Prominent */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3 text-center">Browse by Illinois Cities</h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
            {cities.map((city, index) => (
              <Link
                to={`/city/${encodeURIComponent(city.name)}`}
                key={index}
                className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-24 object-cover group-hover:scale-125 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60" />
                  <div className="absolute bottom-0 left-0 right-0 p-1">
                    <h3 className="text-white font-bold text-xs mb-0.5 truncate group-hover:text-orange-200 transition-colors">{city.name}</h3>
                    <p className="text-white/90 text-xs truncate group-hover:text-orange-100 transition-colors">{city.count}</p>
                  </div>
                  
                  {/* Hover overlay with enhanced visual feedback */}
                  <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Click indicator */}
                  <div className="absolute top-1 right-1 w-4 h-4 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-orange-500 text-xs">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Browse by Categories */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-3 text-center">Browse Categories</h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
            {categories.map((category, index) => (
              <Link 
                to={`/category/${encodeURIComponent(category.name)}`}
                key={index} 
                className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer transform hover:-translate-y-1 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-15 transition-opacity duration-300`} />
                <div className="relative p-1.5 text-center">
                  <div className={`inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br ${category.color} text-white mb-1 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-xs">{category.icon}</span>
                  </div>
                  <h3 className="text-xs font-semibold text-gray-900 mb-0.5 truncate">{category.name}</h3>
                  <div className="flex items-center justify-center space-x-1">
                    <span className="text-xs font-bold text-gray-900">{category.count.toLocaleString()}</span>
                    <span className="text-xs text-gray-500">ads</span>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;