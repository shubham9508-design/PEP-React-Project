import React from 'react';
import { ShoppingCart, Store } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  currentPage: 'home' | 'cart';
  onNavigate: (page: 'home' | 'cart') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const { state } = useCart();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <Store className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
            <span className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              PkShop
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'home'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => onNavigate('cart')}
              className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'cart'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-1">
                <ShoppingCart className="w-5 h-5" />
                <span>Cart</span>
                {state.itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {state.itemCount > 99 ? '99+' : state.itemCount}
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;