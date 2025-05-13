import React from 'react';
import { Leaf, Instagram, Twitter, Facebook, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="ml-2 text-xl font-bold">EcoVision</span>
            </div>
            <p className="mt-4 text-sm text-green-100">
              Extending recyclable collection systems globally to promote sustainability and reward eco-friendly behaviors.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-green-200 hover:text-white transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-green-200 tracking-wider uppercase">
              EcoVision
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-green-100 hover:text-white text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-green-100 hover:text-white text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-green-100 hover:text-white text-sm">
                  Locations
                </Link>
              </li>
              <li>
                <Link to="/detection" className="text-green-100 hover:text-white text-sm">
                  Waste Detection
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-green-200 tracking-wider uppercase">
              Get Involved
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/contribution" className="text-green-100 hover:text-white text-sm">
                  My Contribution
                </Link>
              </li>
              <li>
                <Link to="/leaderboard" className="text-green-100 hover:text-white text-sm">
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link to="/rewards" className="text-green-100 hover:text-white text-sm">
                  Rewards
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-green-100 hover:text-white text-sm">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-green-200 tracking-wider uppercase">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-green-100 text-sm">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@ecovision.com</span>
              </li>
              <li>
                <p className="text-green-100 text-sm">
                  Bangalore, India
                </p>
              </li>
              <li className="mt-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm transition">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-green-800 pt-8">
          <p className="text-sm text-green-200 text-center">
            &copy; {new Date().getFullYear()} EcoVision. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;