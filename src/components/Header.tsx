import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, MapPin, User, Plus, Cloud, Home, Briefcase, Car, ShoppingBag, Wrench, GraduationCap, Calendar, Heart, TrendingUp } from 'lucide-react';
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


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Weather Widget - Desktop */}
            <div className="flex items-center space-x-3 min-w-[400px]">
              <WeatherWidget />
              <ScrollingWidgets />
            </div>
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

// Weather Widget Component
const WeatherWidget: React.FC = () => {
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  
  const cities = [
    { name: 'Chicago', temp: '32°F', condition: 'Partly Cloudy' },
    { name: 'Aurora', temp: '30°F', condition: 'Cloudy' },
    { name: 'Naperville', temp: '33°F', condition: 'Clear' },
    { name: 'Bloomington-Normal', temp: '29°F', condition: 'Snow' },
    { name: 'Peoria', temp: '31°F', condition: 'Overcast' },
    { name: 'Springfield', temp: '28°F', condition: 'Windy' },
    { name: 'Urbana-Champaign', temp: '27°F', condition: 'Foggy' },
    { name: 'Rockford', temp: '25°F', condition: 'Cold' }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCityIndex((prevIndex) => 
        prevIndex >= cities.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [cities.length]);

  const currentCity = cities[currentCityIndex];

  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg min-w-[140px]">
      <div className="flex items-center">
        <Cloud className="h-4 w-4 mr-2" />
        <div className="text-xs">
          <div className="font-semibold">{currentCity.name}</div>
          <div className="text-xs opacity-90">{currentCity.temp}</div>
        </div>
      </div>
    </div>
  );
};

// Scrolling Widgets Component
const ScrollingWidgets: React.FC = () => {
  const [currentWidgetIndex, setCurrentWidgetIndex] = useState(0);
  const [prices, setPrices] = useState({
    gold: { price: 2045.50, change: +12.30, changePercent: +0.61 },
    silver: { price: 24.85, change: -0.15, changePercent: -0.60 }
  });
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  const ads = [
    {
      title: "Premium Business Listing",
      subtitle: "Boost your visibility",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Featured Ad Placement",
      subtitle: "Get noticed faster",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Professional Services",
      subtitle: "Connect with experts",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Community Events",
      subtitle: "Stay connected",
      color: "from-pink-500 to-pink-600"
    }
  ];

  // Widget cycling
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWidgetIndex((prevIndex) => (prevIndex + 1) % 4); // 4 widgets total
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Price updates
  React.useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prev => ({
        gold: {
          price: prev.gold.price + (Math.random() - 0.5) * 5,
          change: (Math.random() - 0.5) * 20,
          changePercent: (Math.random() - 0.5) * 2
        },
        silver: {
          price: prev.silver.price + (Math.random() - 0.5) * 0.5,
          change: (Math.random() - 0.5) * 2,
          changePercent: (Math.random() - 0.5) * 3
        }
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Time updates
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Ad cycling
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [ads.length]);

  const getIndiaTime = () => {
    return new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(currentTime);
  };

  const getUSTime = () => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Chicago',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(currentTime);
  };

  const renderWidget = () => {
    switch (currentWidgetIndex) {
      case 0: // Bullion Widget
        return (
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-lg min-w-[200px]">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-3 w-3" />
                <span className="font-semibold">Gold</span>
                <span className="font-bold">${prices.gold.price.toFixed(0)}</span>
                <span className={prices.gold.change >= 0 ? 'text-green-200' : 'text-red-200'}>
                  {prices.gold.change >= 0 ? '↗' : '↘'}{Math.abs(prices.gold.changePercent).toFixed(1)}%
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">Silver</span>
                <span className="font-bold">${prices.silver.price.toFixed(2)}</span>
                <span className={prices.silver.change >= 0 ? 'text-green-200' : 'text-red-200'}>
                  {prices.silver.change >= 0 ? '↗' : '↘'}{Math.abs(prices.silver.changePercent).toFixed(1)}%
                </span>
              </div>
            </div>
          </div>
        );
      
      case 1: // World Clock Widget
        return (
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-4 py-2 rounded-lg min-w-[180px]">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                <span className="font-semibold">India</span>
                <span className="font-mono font-bold">{getIndiaTime()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span className="font-semibold">USA</span>
                <span className="font-mono font-bold">{getUSTime()}</span>
              </div>
            </div>
          </div>
        );
      
      case 2: // Ad Widget 1
      case 3: // Ad Widget 2
        const currentAd = ads[currentAdIndex];
        return (
          <div className={`bg-gradient-to-r ${currentAd.color} text-white px-4 py-2 rounded-lg min-w-[160px] cursor-pointer hover:opacity-90 transition-opacity`}>
            <div className="text-xs">
              <div className="font-semibold">{currentAd.title}</div>
              <div className="text-xs opacity-90">{currentAd.subtitle}</div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="overflow-hidden">
      <div className="transition-all duration-500 ease-in-out">
        {renderWidget()}
      </div>
    </div>
  );
};

export default Header;