import React from 'react';

const MobileBanner: React.FC = () => (
  <div className="bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500 font-medium h-16 w-full">
    <div className="text-center">
      <div className="text-sm font-semibold mb-1">Mobile Advertisement</div>
      <div className="text-xs">320 x 50 - Mobile Banner</div>
    </div>
  </div>
);

const RecentListings: React.FC = () => (
  <div className="bg-white rounded-lg border border-gray-200 p-4">
    <h3 className="text-lg font-semibold mb-4 text-gray-800">Recent Listings</h3>
    <div className="space-y-3">
      <div className="text-sm text-gray-600">Recent listings will appear here</div>
    </div>
  </div>
);

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