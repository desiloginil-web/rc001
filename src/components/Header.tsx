import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, MapPin, User, Plus, Cloud, Home, Briefcase, Car, ShoppingBag, Wrench, GraduationCap, Calendar, Heart } from 'lucide-react';
import SignInModal from './SignInModal';

interface HeaderProps {
  onPostAd: () => void;
}

const Header: React.FC<HeaderProps> = ({ onPostAd }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const navigationPages = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Jobs', path: '/category/Jobs', icon: Briefcase },
    { name: 'Real Estate', path: '/category/Real Estate', icon: Home },
    { name: 'Vehicles', path: '/category/Vehicles', icon: Car },
    { name: 'Buy & Sell', path: '/category/Buy & Sell', icon: ShoppingBag },
    { name: 'Services', path: '/category/Services', icon: Wrench },
    { name: 'Education', path: '/category/Education', icon: GraduationCap },
    { name: 'Events', path: '/category/Community Events', icon: Calendar },
    { name: 'Health', path: '/category/Health & Wellness', icon: Heart }
  ];

  const cities = [
    'All Cities',
    'Chicago',
    'Aurora',
    'Naperville',
    'Bloomington-Normal',
    'Peoria',
    'Springfield',
    'Urbana-Champaign',
    'Rockford'
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Navigate to search results page with query parameters
      const params = new URLSearchParams();
      params.set('q', searchQuery.trim());
      if (selectedCity !== 'All Cities') {
        params.set('city', selectedCity);
      }
      navigate(`/search?${params.toString()}`);
    }
  };

  const handleSearchKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <div className="flex-shrink-0 flex items-center">
                <img
                  src="/DesiloginILlogo.png"
                  className="h-24 w-auto object-contain hover:opacity-90 transition-opacity"
                  onError={(e) => {
                    console.log('Logo failed to load, falling back to text logo');
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3" style={{display: 'none'}}>
                  <span className="text-white font-bold text-3xl">DL</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-6">
            <div className="w-full flex">
              <div className="relative">
                <select 
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="h-12 pl-3 pr-6 border border-r-0 border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-sm"
                >
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                <MapPin className="absolute right-1 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleSearchKeyPress}
                  placeholder="Search..."
                  className="w-full h-12 pl-3 pr-12 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                />
                <button 
                  onClick={handleSearch}
                  className="absolute right-0 top-0 h-12 px-4 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600 transition-colors"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Weather Widget - Desktop */}
          <div className="hidden lg:flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg mr-4">
            <Cloud className="h-5 w-5 mr-2" />
            <div className="text-xs">
              <div className="font-semibold">Chicago</div>
              <div className="text-xs opacity-90">32°F</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={onPostAd}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2.5 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 flex items-center space-x-2 font-semibold text-sm"
            >
              <Plus className="h-4 w-4" />
              <span>Post Ad</span>
            </button>
            <button
              onClick={() => setIsSignInModalOpen(true)}
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors"
            >
              <User className="h-5 w-5" />
              <span className="text-sm">Sign In</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden pb-3">
          <div className="flex space-x-2">
            <select 
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-sm"
            >
              {cities.map(city => (
                <option key={city} value={city}>{city.length > 10 ? city.substring(0, 10) + '...' : city}</option>
              ))}
            </select>
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleSearchKeyPress}
                placeholder="Search..."
                className="w-full h-10 pl-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
              />
              <button 
                onClick={handleSearch}
                className="absolute right-1 top-1 h-8 w-8 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors flex items-center justify-center"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-3">
            {/* Mobile Action Buttons */}
            <div className="space-y-2">
              <button
                onClick={onPostAd}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2.5 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 flex items-center justify-center space-x-2 font-semibold text-sm"
              >
                <Plus className="h-4 w-4" />
                <span>Post Ad</span>
              </button>
              <button
                onClick={() => setIsSignInModalOpen(true)}
                className="w-full flex items-center justify-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors py-2"
              >
                <User className="h-5 w-5" />
                <span className="text-sm">Sign In</span>
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Sign In Modal */}
      <SignInModal 
        isOpen={isSignInModalOpen} 
        onClose={() => setIsSignInModalOpen(false)} 
      />
    </header>
  );
};

export default Header;