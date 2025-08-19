import React from 'react';

const TopBanner: React.FC = () => (
  <div className="bg-gradient-to-r from-blue-100 to-blue-200 border-2 border-dashed border-blue-300 rounded-lg flex items-center justify-center text-blue-600 font-medium h-20 w-full">
    <div className="text-center">
      <div className="text-sm font-semibold mb-1">Top Advertisement Banner</div>
      <div className="text-xs">728 x 90 - Leaderboard</div>
    </div>
  </div>
);

const SideBanner: React.FC = () => (
  <div className="bg-gradient-to-br from-green-100 to-green-200 border-2 border-dashed border-green-300 rounded-lg flex items-center justify-center text-green-600 font-medium h-64 w-full">
    <div className="text-center">
      <div className="text-sm font-semibold mb-1">Side Advertisement</div>
      <div className="text-xs">300 x 250 - Medium Rectangle</div>
    </div>
  </div>
);

const InlineBanner: React.FC = () => (
  <div className="bg-gradient-to-r from-purple-100 to-purple-200 border-2 border-dashed border-purple-300 rounded-lg flex items-center justify-center text-purple-600 font-medium h-16 w-full">
    <div className="text-center">
      <div className="text-sm font-semibold mb-1">Inline Advertisement</div>
      <div className="text-xs">468 x 60 - Banner</div>
    </div>
  </div>
);

const BottomBanner: React.FC = () => (
  <div className="bg-gradient-to-r from-orange-100 to-orange-200 border-2 border-dashed border-orange-300 rounded-lg flex items-center justify-center text-orange-600 font-medium h-20 w-full">
    <div className="text-center">
      <div className="text-sm font-semibold mb-1">Bottom Advertisement Banner</div>
      <div className="text-xs">728 x 90 - Leaderboard</div>
    </div>
  </div>
);

const MobileBanner: React.FC = () => (
  <div className="bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500 font-medium h-16 w-full">
    <div className="text-center">
      <div className="text-sm font-semibold mb-1">Mobile Advertisement</div>
      <div className="text-xs">320 x 50 - Mobile Banner</div>
    </div>
  </div>
);

const RecentListings: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  const recentListings = [
    { 
      id: 1, 
      title: 'Software Engineer Position', 
      city: 'Chicago',
      price: '$95,000',
      timeAgo: '1 hour ago'
    },
    { 
      id: 2, 
      title: '3BR Downtown Apartment', 
      city: 'Naperville',
      price: '$2,200/month',
      timeAgo: '3 hours ago'
    },
    { 
      id: 3, 
      title: 'Honda Civic 2020', 
      city: 'Aurora',
      price: '$22,500',
      timeAgo: '6 hours ago',
    },
    { 
      id: 4, 
      title: 'Wedding Photography', 
      city: 'Peoria',
      price: '$1,200',
      timeAgo: '8 hours ago'
    },
    { 
      id: 5, 
      title: 'Math Tutoring Services', 
      city: 'Springfield',
      price: '$40/hour',
      timeAgo: '12 hours ago'
    },
    { 
      id: 6, 
      title: 'MacBook Pro 2021', 
      city: 'Rockford',
      price: '$1,800',
      timeAgo: '1 day ago'
    },
    { 
      id: 7, 
      title: 'Indian Dance Classes', 
      city: 'Urbana-Champaign',
      price: '$60/month',
      timeAgo: '2 days ago'
    },
    { 
      id: 8, 
      title: 'House Cleaning Service', 
      city: 'Bloomington-Normal',
      price: '$80/visit',
      timeAgo: '3 days ago'
    },
    { 
      id: 9, 
      title: 'Yoga Instructor Position', 
      city: 'Chicago',
      price: '$50/hour',
      timeAgo: '4 days ago'
    },
    { 
      id: 10, 
      title: 'Catering Services', 
      city: 'Aurora',
      price: '$15/person',
      timeAgo: '5 days ago'
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= recentListings.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Scroll every 2 seconds

    return () => clearInterval(interval);
  }, [recentListings.length]);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3">
      <h3 className="text-sm font-semibold mb-3 text-gray-800">Recent Listings</h3>
      <div className="relative overflow-hidden h-64">
        <div 
          className="transition-transform duration-500 ease-in-out"
          style={{ transform: `translateY(-${currentIndex * 26}px)` }}
        >
          {recentListings.map((listing) => (
            <div 
              key={listing.id} 
              className="h-6 flex items-center justify-between py-0.5 mb-0.5 cursor-pointer hover:bg-gray-50 transition-colors rounded px-1"
            >
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-medium text-gray-900 truncate hover:text-orange-600 transition-colors">
                  {listing.title}
                </h4>
              </div>
              <div className="flex items-center space-x-1 text-xs text-gray-500 ml-2">
                <span className="font-semibold text-orange-600">{listing.price}</span>
                <span>•</span>
                <span>{listing.timeAgo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Bullion Widget Component
const BullionWidget: React.FC = () => {
  const [prices, setPrices] = React.useState({
    gold: { price: 2045.50, change: +12.30, changePercent: +0.61 },
    silver: { price: 24.85, change: -0.15, changePercent: -0.60 }
  });

  React.useEffect(() => {
    // Simulate real-time price updates
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

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Live Precious Metals</h3>
      <div className="flex items-center justify-between">
        {/* Gold */}
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
          <span className="text-xs font-semibold text-yellow-800">Gold</span>
          <span className="text-sm font-bold text-yellow-900">${prices.gold.price.toFixed(0)}</span>
          <span className={`text-xs ${prices.gold.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {prices.gold.change >= 0 ? '↗' : '↘'}{prices.gold.changePercent.toFixed(1)}%
          </span>
        </div>
        
        {/* Silver */}
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <span className="text-xs font-semibold text-gray-800">Silver</span>
          <span className="text-sm font-bold text-gray-900">${prices.silver.price.toFixed(2)}</span>
          <span className={`text-xs ${prices.silver.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {prices.silver.change >= 0 ? '↗' : '↘'}{prices.silver.changePercent.toFixed(1)}%
          </span>
        </div>
      </div>
    </div>
  );
};

// Time Widget Component
const TimeWidget: React.FC = () => {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getIndiaTime = () => {
    return new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).format(currentTime);
  };

  const getUSTime = () => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Chicago',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).format(currentTime);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">World Clock</h3>
      <div className="flex items-center justify-between">
        {/* India Time */}
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          <span className="text-xs font-semibold text-orange-800">India</span>
          <span className="text-sm font-bold text-orange-900 font-mono">{getIndiaTime()}</span>
        </div>
        
        {/* US Time */}
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-xs font-semibold text-blue-800">US</span>
          <span className="text-sm font-bold text-blue-900 font-mono">{getUSTime()}</span>
        </div>
      </div>
    </div>
  );
};

const AdBanners = {
  TopBanner,
  SideBanner,
  InlineBanner,
  BottomBanner,
  MobileBanner,
  RecentListings,
  BullionWidget,
  TimeWidget
};

export default AdBanners;