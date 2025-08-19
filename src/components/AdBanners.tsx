import React from 'react';

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
  const [selectedListing, setSelectedListing] = React.useState<any>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  
  const recentListings = [
    { 
      id: 1, 
      title: 'Software Engineer Position', 
      city: 'Chicago',
      category: 'Jobs',
      price: '$95,000',
      location: 'Chicago, IL',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 345,
      timeAgo: '1 hour ago',
      postedDate: new Date('2025-01-12'),
      featured: true,
      description: 'Full-stack developer role with competitive salary and benefits'
    },
    { 
      id: 2, 
      title: '3BR Downtown Apartment', 
      city: 'Naperville',
      category: 'Real Estate',
      price: '$2,200/month',
      location: 'Naperville, IL',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 289,
      timeAgo: '3 hours ago',
      postedDate: new Date('2025-01-12'),
      featured: false,
      description: 'Modern apartment with city views and amenities'
    },
    { 
      id: 3, 
      title: 'Honda Civic 2020', 
      city: 'Aurora',
      category: 'Vehicles',
      price: '$22,500',
      location: 'Aurora, IL',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 234,
      timeAgo: '6 hours ago',
      postedDate: new Date('2025-01-11'),
      featured: false,
      description: 'Excellent condition, low mileage, single owner'
    },
    { 
      id: 4, 
      title: 'Wedding Photography', 
      city: 'Peoria',
      category: 'Services',
      price: '$1,200',
      location: 'Peoria, IL',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 167,
      timeAgo: '8 hours ago',
      postedDate: new Date('2025-01-11'),
      featured: true,
      description: 'Professional photography with cultural expertise'
    },
    { 
      id: 5, 
      title: 'Math Tutoring Services', 
      city: 'Springfield',
      category: 'Education',
      price: '$40/hour',
      location: 'Springfield, IL',
      image: 'https://images.pexels.com/photos/1701194/pexels-photo-1701194.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 123,
      timeAgo: '12 hours ago',
      postedDate: new Date('2025-01-10'),
      featured: false,
      description: 'Experienced tutor for all grade levels'
    },
    { 
      id: 6, 
      title: 'MacBook Pro 2021', 
      city: 'Rockford',
      category: 'Buy & Sell',
      price: '$1,800',
      location: 'Rockford, IL',
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 198,
      timeAgo: '1 day ago',
      postedDate: new Date('2025-01-09'),
      featured: false,
      description: 'Like new condition, includes original accessories'
    },
    { 
      id: 7, 
      title: 'Indian Dance Classes', 
      city: 'Urbana-Champaign',
      category: 'Education',
      price: '$60/month',
      location: 'Urbana-Champaign, IL',
      image: 'https://images.pexels.com/photos/1701194/pexels-photo-1701194.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 156,
      timeAgo: '2 days ago',
      postedDate: new Date('2025-01-08'),
      featured: true,
      description: 'Learn classical dance from certified instructor'
    },
    { 
      id: 8, 
      title: 'House Cleaning Service', 
      city: 'Bloomington-Normal',
      category: 'Services',
      price: '$80/visit',
      location: 'Bloomington-Normal, IL',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 134,
      timeAgo: '3 days ago',
      postedDate: new Date('2025-01-07'),
      featured: false,
      description: 'Reliable cleaning with excellent reviews'
    },
    { 
      id: 9, 
      title: 'Yoga Instructor Position', 
      city: 'Chicago',
      category: 'Jobs',
      price: '$50/hour',
      location: 'Chicago, IL',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 89,
      timeAgo: '4 days ago',
      postedDate: new Date('2025-01-06'),
      featured: false,
      description: 'Teach yoga classes at premium fitness center'
    },
    { 
      id: 10, 
      title: 'Catering Services', 
      city: 'Aurora',
      category: 'Services',
      price: '$15/person',
      location: 'Aurora, IL',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 112,
      timeAgo: '5 days ago',
      postedDate: new Date('2025-01-05'),
      featured: false,
      description: 'Professional catering for all occasions'
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= recentListings.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [recentListings.length]);

  const handleListingClick = (listing: any) => {
    setSelectedListing(listing);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedListing(null);
  };

  return (
    <>
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Recent Listings</h3>
        <div className="relative overflow-hidden h-80">
          <div 
            className="transition-transform duration-500 ease-in-out"
            style={{ transform: `translateY(-${currentIndex * 32}px)` }}
          >
            {recentListings.map((listing) => (
              <div 
                key={listing.id} 
                className="h-8 flex items-center py-1 border-b border-gray-100 last:border-b-0 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => handleListingClick(listing)}
              >
                <h4 className="text-sm font-medium text-gray-900 truncate hover:text-orange-600 transition-colors">{listing.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Listing Modal */}
      {selectedListing && (
        <ListingModal 
          listing={selectedListing}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
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
      <div className="space-y-4">
        {/* Gold */}
        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-3 rounded-lg border border-yellow-200">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <span className="font-semibold text-yellow-800">Gold</span>
            </div>
            <span className="text-xs text-yellow-600">per oz</span>
          </div>
          <div className="text-lg font-bold text-yellow-900">${prices.gold.price.toFixed(2)}</div>
          <div className={`text-xs flex items-center ${prices.gold.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            <span>{prices.gold.change >= 0 ? '↗' : '↘'}</span>
            <span className="ml-1">${Math.abs(prices.gold.change).toFixed(2)} ({prices.gold.changePercent >= 0 ? '+' : ''}{prices.gold.changePercent.toFixed(2)}%)</span>
          </div>
        </div>
        
        {/* Silver */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-3 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
              <span className="font-semibold text-gray-800">Silver</span>
            </div>
            <span className="text-xs text-gray-600">per oz</span>
          </div>
          <div className="text-lg font-bold text-gray-900">${prices.silver.price.toFixed(2)}</div>
          <div className={`text-xs flex items-center ${prices.silver.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            <span>{prices.silver.change >= 0 ? '↗' : '↘'}</span>
            <span className="ml-1">${Math.abs(prices.silver.change).toFixed(2)} ({prices.silver.changePercent >= 0 ? '+' : ''}{prices.silver.changePercent.toFixed(2)}%)</span>
          </div>
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
      <div className="space-y-4">
        {/* India Time */}
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-3 rounded-lg border border-orange-200">
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
            <span className="font-semibold text-orange-800">India (IST)</span>
          </div>
          <div className="text-lg font-bold text-orange-900 font-mono">{getIndiaTime()}</div>
          <div className="text-xs text-orange-600">Mumbai, Delhi, Kolkata</div>
        </div>
        
        {/* USA Time */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg border border-blue-200">
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span className="font-semibold text-blue-800">USA (CST)</span>
          </div>
          <div className="text-lg font-bold text-blue-900 font-mono">{getUSTime()}</div>
          <div className="text-xs text-blue-600">Chicago, Illinois</div>
        </div>
      </div>
    </div>
  );
};

// Import ListingModal
import ListingModal from './ListingModal';

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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface AdBannerProps {
  position?: 'left' | 'right';
  size?: 'small' | 'medium' | 'large';
}

const AdBanner: React.FC<AdBannerProps & { children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500 font-medium">
      {children}
    </div>
  );
};

const TopBanner: React.FC = () => (
  <div className="bg-white border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <AdBanner>
        <div className="text-center py-8">
          <div className="text-lg font-semibold mb-2">Advertisement Space</div>
          <div className="text-sm">728 x 90 - Top Banner</div>
          <div className="text-xs mt-2 text-gray-400">Premium advertising placement</div>
        </div>
      </AdBanner>
    </div>
  </div>
);

const SideBanner: React.FC<AdBannerProps> = ({ position, size }) => {
  // Special case for right sidebar - show recent listings
  if (position === 'right') {
    return <RecentListings />;
  }

  const getSizeClasses = () => {
    switch (size) {
      case 'large':
        return 'h-64';
      case 'medium':
        return 'h-48';
      case 'small':
        return 'h-32';
      default:
        return 'h-48';
    }
  };

  const getSizeText = () => {
    switch (size) {
      case 'large':
        return '300 x 250';
      case 'medium':
        return '300 x 200';
      case 'small':
        return '300 x 120';
      default:
        return '300 x 200';
    }
  };

  return (
    <AdBanner>
      <div className={`w-full ${getSizeClasses()} flex flex-col items-center justify-center`}>
        <div className="text-sm font-semibold mb-1">Ad Space</div>
        <div className="text-xs">{getSizeText()}</div>
        <div className="text-xs mt-1 text-gray-400 capitalize">{position} Sidebar</div>
      </div>
    </AdBanner>
  );
};

const InlineBanner: React.FC = () => (
  <AdBanner>
    <div className="w-full py-12 text-center">
      <div className="text-lg font-semibold mb-2">Inline Advertisement</div>
      <div className="text-sm">728 x 90 - Content Integration</div>
      <div className="text-xs mt-2 text-gray-400">Seamlessly integrated with content</div>
    </div>
  </AdBanner>
);

const BottomBanner: React.FC = () => (
  <div className="bg-white border-t border-gray-200 mt-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <AdBanner>
        <div className="text-center py-8">
          <div className="text-lg font-semibold mb-2">Bottom Advertisement Space</div>
          <div className="text-sm">728 x 90 - Footer Banner</div>
          <div className="text-xs mt-2 text-gray-400">High visibility placement</div>
        </div>
      </AdBanner>
    </div>
  </div>
);

const AdBanners = {
  TopBanner,
  SideBanner,
  InlineBanner,
  BottomBanner,
  MobileBanner
};

export default AdBanners;