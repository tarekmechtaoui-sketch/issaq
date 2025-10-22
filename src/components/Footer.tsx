import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Phone className="h-6 w-6 text-[#0ea5a4]" />
              <span className="text-xl font-bold text-white">Issaq Phone</span>
            </div>
            <p className="text-sm text-gray-400">
              Your trusted destination for the latest smartphones and accessories.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products?category=phones" className="hover:text-[#0ea5a4] transition-colors">
                  Phones
                </Link>
              </li>
              <li>
                <Link to="/products?category=accessories" className="hover:text-[#0ea5a4] transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#0ea5a4] transition-colors">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#0ea5a4] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0ea5a4] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0ea5a4] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0ea5a4] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#0ea5a4]" />
                <span>1-800-ISSAQ-PH</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#0ea5a4]" />
                <span>support@issaqphone.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#0ea5a4]" />
                <span>123 Tech Street, Silicon Valley, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Issaq Phone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
