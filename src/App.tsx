import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'cart'>('home');

  const handleNavigate = (page: 'home' | 'cart') => {
    setCurrentPage(page);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
        <main className="flex-grow">
          {currentPage === 'home' ? (
            <Home />
          ) : (
            <Cart onNavigate={handleNavigate} />
          )}
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;