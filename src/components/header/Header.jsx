import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Topbar from '../topbar/Topbar';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Topbar/>
      <nav className='bg-secondary-500 py-4 shadow-lg'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center'>
            {/* Logo */}
            <Link to="/" className='flex items-center space-x-2'>
              <span className='text-2xl font-bold text-white'>
                Cheap<span className='text-accent-400'>Flights</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-8'>
              <Link 
                to="/" 
                className='text-white font-medium hover:text-accent-400 transition-colors duration-200'
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className='text-white font-medium hover:text-accent-400 transition-colors duration-200'
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className='text-white font-medium hover:text-accent-400 transition-colors duration-200'
              >
                Contact
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-secondary-600 transition-colors duration-200'
              aria-expanded="false"
            >
              <span className='sr-only'>Open main menu</span>
              {isOpen ? (
                <svg className='block h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                </svg>
              ) : (
                <svg className='block h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className='md:hidden mt-4 space-y-2'>
              <Link 
                to="/" 
                className='block px-3 py-2 rounded-md text-white hover:bg-secondary-600 transition-colors duration-200'
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className='block px-3 py-2 rounded-md text-white hover:bg-secondary-600 transition-colors duration-200'
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className='block px-3 py-2 rounded-md text-white hover:bg-secondary-600 transition-colors duration-200'
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}
