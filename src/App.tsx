import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CityPage from './pages/CityPage';
import CategoryPage from './pages/CategoryPage';
import SearchPage from './pages/SearchPage';
import Footer from './components/Footer';
import PostAdModal from './components/PostAdModal';

function App() {
  const [isPostAdModalOpen, setIsPostAdModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Header onPostAd={() => setIsPostAdModalOpen(true)} />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/city/:cityName" element={<CityPage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      
      <Footer />
      
      {/* Post Ad Modal */}
      <PostAdModal 
        isOpen={isPostAdModalOpen} 
        onClose={() => setIsPostAdModalOpen(false)} 
      />
    </div>
  );
}

export default App;