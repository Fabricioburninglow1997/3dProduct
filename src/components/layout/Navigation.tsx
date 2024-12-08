import { Menu } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="fixed w-full z-50 flex justify-between items-center px-8 py-4">
      <div className="text-white text-2xl font-bold">Chocolatier</div>
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-white hover:text-brown-300 transition-colors">Home</a>
        <a href="#" className="text-white hover:text-brown-300 transition-colors">Products</a>
        <a href="#" className="text-white hover:text-brown-300 transition-colors">About</a>
        <a href="#" className="text-white hover:text-brown-300 transition-colors">Contact</a>
      </div>
      <button className="md:hidden text-white">
        <Menu size={24} />
      </button>
    </nav>
  );
}