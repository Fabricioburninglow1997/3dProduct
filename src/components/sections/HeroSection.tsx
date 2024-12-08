import React from 'react';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl font-bold mb-4">
          Indulge in Pure Luxury
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Experience the finest artisanal chocolates crafted with passion and precision
        </p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-brown-600 hover:bg-brown-700 px-8 py-3 rounded-full text-lg transition-all"
        >
          Discover Our Collection
        </motion.button>
      </motion.div>
    </section>
  );
}