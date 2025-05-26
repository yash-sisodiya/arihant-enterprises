import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Youtube, 
  Zap,
  Battery,
  Sun,
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-blue-400">Arihant</span>
              <span className="text-2xl font-bold text-orange-400">Enterprises</span>
            </Link>
            <p className="mb-4">
              Your trusted partner for batteries, inverters, and solar solutions in Rajsamand.
              We provide quality products with exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=inverter-battery" className="hover:text-blue-400 flex items-center">
                  <Battery className="h-4 w-4 mr-2" />
                  Inverter Batteries
                </Link>
              </li>
              <li>
                <Link to="/products?category=automobile-battery" className="hover:text-blue-400 flex items-center">
                  <Battery className="h-4 w-4 mr-2" />
                  Automobile Batteries
                </Link>
              </li>
              <li>
                <Link to="/products?category=inverter" className="hover:text-blue-400 flex items-center">
                  <Zap className="h-4 w-4 mr-2" />
                  Inverters
                </Link>
              </li>
              <li>
                <Link to="/products?category=solar-panel" className="hover:text-blue-400 flex items-center">
                  <Sun className="h-4 w-4 mr-2" />
                  Solar Panels
                </Link>
              </li>
              <li>
                <Link to="/products?category=accessory" className="hover:text-blue-400 flex items-center">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="hover:text-blue-400">
                  Battery Calculator
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>Surabhi Complex ke saamne, Jalchakki Road, Kankroli, Rajsamand (Rajasthan)</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+917728962090" className="hover:text-blue-400">7728962090</a>
                {" / "}
                <a href="tel:+919784477456" className="hover:text-blue-400">9784477456</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:contact@arihantenterprises.in" className="hover:text-blue-400">
                  contact@arihantenterprises.in
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>9:00 AM - 8:00 PM (All Days)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Arihant Enterprises. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;