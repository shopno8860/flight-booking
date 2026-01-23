import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { 
  faFacebookF, 
  faTwitter, 
  faLinkedin, 
  faInstagram, 
  faPinterest, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons'

export default function Topbar() {
  return (
    <div className='bg-gray-100 py-3 border-b border-gray-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-3 gap-6 items-center'>
          {/* Contact Info */}
          <div className='md:col-span-2'>
            <div className='grid md:grid-cols-3 gap-4 text-sm'>
              {/* Location */}
              <div className='flex items-center gap-2 text-gray-700 hover:text-success-500 transition-colors'>
                <FontAwesomeIcon icon={faLocationDot} className='text-primary-500' />
                <a href="#" className='hover:underline text-gray-600'>
                  2130 Fulton Street, San Diego, CA 94117
                </a>
              </div>

              {/* Phone */}
              <div className='flex items-center gap-2 text-gray-700 hover:text-success-500 transition-colors'>
                <FontAwesomeIcon icon={faPhone} className='text-primary-500' />
                <a href="tel:+8801306830402" className='hover:underline text-gray-600'>
                  +880 1306830402
                </a>
              </div>

              {/* Email */}
              <div className='flex items-center gap-2 text-gray-700 hover:text-success-500 transition-colors'>
                <FontAwesomeIcon icon={faEnvelope} className='text-primary-500' />
                <a href="mailto:shopno8860@gmail.com" className='hover:underline text-gray-600'>
                  shopno8860@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className='flex justify-end gap-4'>
            <a href="#" className='text-gray-600 hover:text-primary-500 transition-colors text-lg'>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className='text-gray-600 hover:text-primary-500 transition-colors text-lg'>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className='text-gray-600 hover:text-primary-500 transition-colors text-lg'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" className='text-gray-600 hover:text-primary-500 transition-colors text-lg'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className='text-gray-600 hover:text-primary-500 transition-colors text-lg'>
              <FontAwesomeIcon icon={faPinterest} />
            </a>
            <a href="#" className='text-gray-600 hover:text-primary-500 transition-colors text-lg'>
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
