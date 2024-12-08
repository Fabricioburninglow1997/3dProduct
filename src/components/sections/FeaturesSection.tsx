import React from 'react';
import { Leaf, Award, Heart, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Leaf className="w-8 h-8" />,
    title: 'Organic Ingredients',
    description: 'Sourced from sustainable farms worldwide'
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Award Winning',
    description: 'Recognized for excellence in chocolate making'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Handcrafted',
    description: 'Made with love and attention to detail'
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: 'Perfect Roast',
    description: 'Carefully roasted cocoa beans'
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-brown-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Why Choose Our Chocolate
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-brown-800 p-6 rounded-lg text-white text-center"
            >
              <div className="mb-4 text-brown-300 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}