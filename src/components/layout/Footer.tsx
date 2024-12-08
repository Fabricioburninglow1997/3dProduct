import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brown-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone size={20} className="text-brown-300" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={20} className="text-brown-300" />
                <span>info@chocolatier.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-brown-300" />
                <span>123 Chocolate Ave, Sweet City</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-brown-300 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brown-300 transition-colors">Our Products</a></li>
              <li><a href="#" className="hover:text-brown-300 transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-brown-300 transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brown-300 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-brown-300 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-brown-300 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-brown-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Chocolatier. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}