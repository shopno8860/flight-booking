import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-secondary-900 text-gray-200'>
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid md:grid-cols-4 gap-8'>
          {/* About Section */}
          <div>
            <h3 className='text-lg font-bold text-white mb-4'>About Us</h3>
            <p className='text-gray-300 leading-relaxed text-sm'>
              Your trusted partner in air travel. We provide the best flight booking experience with competitive prices and excellent customer service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-bold text-white mb-4'>Quick Links</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link to="/" className='text-gray-300 hover:text-primary-400 transition-colors duration-200'>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/flights" className='text-gray-300 hover:text-primary-400 transition-colors duration-200'>
                  Flights
                </Link>
              </li>
              <li>
                <Link to="/about" className='text-gray-300 hover:text-primary-400 transition-colors duration-200'>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className='text-gray-300 hover:text-primary-400 transition-colors duration-200'>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className='text-gray-300 hover:text-primary-400 transition-colors duration-200'>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-bold text-white mb-4'>Contact Us</h3>
            <ul className='space-y-2 text-sm text-gray-300'>
              <li className='flex items-center gap-2'>
                <span className='text-primary-400'>📧</span>
                <a href="mailto:info@flightbooking.com" className='hover:text-primary-400 transition-colors'>
                  info@flightbooking.com
                </a>
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-primary-400'>📞</span>
                <a href="tel:+15551234567" className='hover:text-primary-400 transition-colors'>
                  +1 (555) 123-4567
                </a>
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-primary-400'>📍</span>
                <span>123 Aviation Street, New York, NY 10001</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className='text-lg font-bold text-white mb-4'>Follow Us</h3>
            <div className='flex gap-4'>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className='w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white hover:bg-primary-600 transition-colors duration-200'
              >
                <FaFacebook />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className='w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white hover:bg-primary-600 transition-colors duration-200'
              >
                <FaTwitter />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className='w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white hover:bg-primary-600 transition-colors duration-200'
              >
                <FaInstagram />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className='w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white hover:bg-primary-600 transition-colors duration-200'
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='border-t border-secondary-700 py-6'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <p className='text-gray-400 text-sm'>
            &copy; {currentYear} Flight Booking. All rights reserved. | 
            <Link to="#" className='ml-2 hover:text-primary-400 transition-colors'>Privacy Policy</Link> | 
            <Link to="#" className='ml-2 hover:text-primary-400 transition-colors'>Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
