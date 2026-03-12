import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './context/ToastContext';
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
    <ThemeProvider>
      <CartProvider>
        <ToastProvider>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
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
        </ToastProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;