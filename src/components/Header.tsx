import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, MapPin, User, Plus, Cloud, Home, Briefcase, Car, ShoppingBag, Wrench, GraduationCap, Calendar, Heart } from 'lucide-react';
import SignInModal from './SignInModal';

interface HeaderProps {
  onPostAd: () => void;
}

const Header: React.FC<HeaderProps> = ({ onPostAd }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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