import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../context/CartContext';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      onRemove(item.id);
    } else {
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-shrink-0">
          <img
            src={item.image}
            alt={item.title}
            className="w-full sm:w-24 h-32 sm:h-24 object-cover rounded-lg"
          />
        </div>

        <div className="flex-grow">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{item.description}</p>
              <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                {item.category}
              </span>
            </div>

            <div className="flex flex-col sm:items-end gap-3">
              {/* Price */}
              <div className="text-right">
                <div className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  ₹{item.price.toLocaleString('en-IN')} each
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleQuantityChange(item.quantity - 1)}
                  className="p-1 hover:bg-gray-100 rounded-md transition-colors"
                  disabled={item.quantity <= 1}
                >
                  <Minus className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                </button>
                
                <span className="w-12 text-center font-medium bg-gray-50 dark:bg-gray-700 py-1 rounded">
                  {item.quantity}
                </span>
                
                <button
                  onClick={() => handleQuantityChange(item.quantity + 1)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                >
                  <Plus className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                </button>

                <button
                  onClick={() => onRemove(item.id)}
                  className="p-1 hover:bg-red-50 dark:hover:bg-red-700 rounded-md transition-colors ml-2"
                >
                  <Trash2 className="w-4 h-4 text-red-500 hover:text-red-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;