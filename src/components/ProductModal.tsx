import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { Product } from '../context/CartContext';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart }) => {
  const handleAdd = () => {
    onAddToCart(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-3xl w-full mx-4 overflow-hidden">
        <button
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          onClick={onClose}
        >
          <X className="w-5 h-5 text-gray-800 dark:text-gray-200" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-6 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-96 object-contain"
            />
          </div>
          <div className="p-6 flex flex-col justify-between">
            <div>
              <span className="inline-block mb-2 px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                {product.category}
              </span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                {product.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {product.description}
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <button
                onClick={handleAdd}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 hover:shadow-md active:scale-95"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
