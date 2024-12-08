import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    name: 'Dark Truffle Collection',
    price: '$24.99',
    image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=600&q=80',
    description: 'Luxurious dark chocolate truffles with rich ganache filling'
  },
  {
    name: 'Milk Chocolate Assortment',
    price: '$19.99',
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=600&q=80',
    description: 'Classic milk chocolate selection with various fillings'
  },
  {
    name: 'Praline Gift Box',
    price: '$29.99',
    image: 'https://images.unsplash.com/photo-1548907040-4d42b61be2b3?auto=format&fit=crop&w=600&q=80',
    description: 'Premium pralines in an elegant gift box'
  }
];

export function ProductShowcase() {
  return (
    <section className="py-20 bg-brown-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Our Signature Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-brown-900 rounded-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl text-brown-300">{product.price}</span>
                  <button className="bg-brown-600 hover:bg-brown-700 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors">
                    <ShoppingCart size={20} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}