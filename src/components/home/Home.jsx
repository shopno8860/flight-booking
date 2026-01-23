import React, { useState } from 'react'
import Header from '../header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faMessage, faEye } from '@fortawesome/free-solid-svg-icons'
import search from '../../assets/search.png'
import plane from '../../assets/plane.png'
import headphone from '../../assets/headphone-mic.png'
import atmCard from '../../assets/atm-card.png'
import background from '../../assets/background.jpg'
import home1 from '../../assets/home1.jpg'
import home2 from '../../assets/home2.jpg'
import home3 from '../../assets/home3.jpg'
import home4 from '../../assets/home4.jpg'
import home5 from '../../assets/home5.jpg'
import home6 from '../../assets/home6.jpg'
import home8 from '../../assets/home8.jpg'
import home9 from '../../assets/home9.jpg'
import home10 from '../../assets/home10.jpg'
import home11 from '../../assets/home11.jpg'
import Footer from '../footer/Footer';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    depart: '',
    cabin: 'Economy',
    adult: '1',
    child: '0'
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.from.trim()) {
      newErrors.from = 'Departure city is required';
    }
    if (!formData.to.trim()) {
      newErrors.to = 'Arrival city is required';
    }
    if (!formData.depart) {
      newErrors.depart = 'Departure date is required';
    }
    if (formData.from.trim() === formData.to.trim() && formData.from.trim()) {
      newErrors.to = 'Departure and arrival cities cannot be the same';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Store search data in sessionStorage for the flights page
      sessionStorage.setItem('searchData', JSON.stringify(formData));
      navigate('/flights', { state: { searchData: formData } });
    }
  };

  return (
    <div>
      <Header/>

      {/* Hero Section */}
      <section 
        className='relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center'
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className='absolute inset-0 bg-black/40'></div>
        <div className='max-w-7xl mx-auto w-full relative z-10'>
          <div className='grid md:grid-cols-2 gap-8 items-center'>
            {/* Hero Text */}
            <div className='text-white'>
              <h1 className='text-5xl sm:text-6xl font-bold mb-6 leading-tight'>
                The Sky is Waiting for You
              </h1>
              <p className='text-lg sm:text-xl mb-8 text-gray-100 leading-relaxed'>
                With CheapFlights, you can easily book any ticket you need to travel safely thanks to our detailed system of searching and booking airline tickets.
              </p>
              <button className='btn-primary'>
                Read More
              </button>
            </div>

            {/* Booking Form */}
            <div className='bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm bg-opacity-95'>
              <h2 className='text-3xl font-bold text-secondary-900 mb-8 text-center'>
                Book Your Flight
              </h2>
              <form onSubmit={handleSearch} className='space-y-6'>
                {/* From & To */}
                <div className='grid md:grid-cols-2 gap-4'>
                  <div>
                    <label htmlFor="from" className='form-label'>From</label>
                    <input 
                      type="text" 
                      id='from' 
                      placeholder='Departure city'
                      value={formData.from}
                      onChange={handleInputChange}
                      className={`form-input ${errors.from ? 'border-2 border-red-500 bg-red-50' : ''}`}
                    />
                    {errors.from && (
                      <p className='text-red-600 text-sm mt-1 flex items-center gap-1'>
                        <span>✕</span> {errors.from}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="to" className='form-label'>To</label>
                    <input 
                      type="text" 
                      id='to' 
                      placeholder='Arrival city'
                      value={formData.to}
                      onChange={handleInputChange}
                      className={`form-input ${errors.to ? 'border-2 border-red-500 bg-red-50' : ''}`}
                    />
                    {errors.to && (
                      <p className='text-red-600 text-sm mt-1 flex items-center gap-1'>
                        <span>✕</span> {errors.to}
                      </p>
                    )}
                  </div>
                </div>

                {/* Dates */}
                <div className='grid md:grid-cols-2 gap-4'>
                  <div>
                    <label htmlFor="depart" className='form-label'>Depart</label>
                    <input 
                      type="date" 
                      id='depart'
                      value={formData.depart}
                      onChange={handleInputChange}
                      className={`form-input ${errors.depart ? 'border-2 border-red-500 bg-red-50' : ''}`}
                    />
                    {errors.depart && (
                      <p className='text-red-600 text-sm mt-1 flex items-center gap-1'>
                        <span>✕</span> {errors.depart}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="return" className='form-label'>Return</label>
                    <input 
                      type="date" 
                      id='return'
                      value={formData.return || ''}
                      onChange={handleInputChange}
                      className='form-input'
                    />
                  </div>
                </div>

                {/* Cabin & Passengers */}
                <div className='grid md:grid-cols-2 gap-4'>
                  <div>
                    <label htmlFor="cabin" className='form-label'>Cabin Class</label>
                    <select 
                      id='cabin' 
                      value={formData.cabin}
                      onChange={handleInputChange}
                      className='form-input'
                    >
                      <option value="Economy">Economy</option>
                      <option value="Business">Business</option>
                      <option value="First Class">First Class</option>
                    </select>
                  </div>
                  <div className='grid grid-cols-2 gap-2'>
                    <div>
                      <label htmlFor="adult" className='form-label'>Adult</label>
                      <input 
                        type="number" 
                        id='adult' 
                        placeholder='0'
                        value={formData.adult}
                        onChange={handleInputChange}
                        className='form-input'
                        min="1"
                      />
                    </div>
                    <div>
                      <label htmlFor="child" className='form-label'>Child</label>
                      <input 
                        type="number" 
                        id='child' 
                        placeholder='0'
                        value={formData.child}
                        onChange={handleInputChange}
                        className='form-input'
                        min="0"
                      />
                    </div>
                  </div>
                </div>

                {/* Search Button */}
                <button 
                  type='submit' 
                  className='btn-warning w-full'
                >
                  Search Flights
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16 px-4 sm:px-6 lg:px-8 bg-gray-50'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid md:grid-cols-4 gap-8'>
            {/* Feature 1 */}
            <div className='card-hover bg-white p-8 rounded-2xl shadow-md hover:shadow-xl'>
              <img src={search} alt="Search" className='w-20 h-20 mx-auto mb-6 object-contain' />
              <h3 className='text-xl font-bold text-center mb-4 text-secondary-900'>The World's Travel Search Engine</h3>
              <p className='text-gray-600 text-center leading-relaxed'>
                You can use our search engine to find any flight you want and select a desired destination and price
              </p>
            </div>

            {/* Feature 2 */}
            <div className='card-hover bg-white p-8 rounded-2xl shadow-md hover:shadow-xl'>
              <img src={plane} alt="Cheap Flights" className='w-20 h-20 mx-auto mb-6 object-contain' />
              <h3 className='text-xl font-bold text-center mb-4 text-secondary-900'>Cheap and Beneficial Air Tickets</h3>
              <p className='text-gray-600 text-center leading-relaxed'>
                Get the best prices on air tickets with our competitive rates and exclusive deals for all your travel needs
              </p>
            </div>

            {/* Feature 3 */}
            <div className='card-hover bg-white p-8 rounded-2xl shadow-md hover:shadow-xl'>
              <img src={headphone} alt="Support" className='w-20 h-20 mx-auto mb-6 object-contain' />
              <h3 className='text-xl font-bold text-center mb-4 text-secondary-900'>Our Support Lines are Open 24/7</h3>
              <p className='text-gray-600 text-center leading-relaxed'>
                Customer support available round the clock to assist you with any questions or concerns about your booking
              </p>
            </div>

            {/* Feature 4 */}
            <div className='card-hover bg-white p-8 rounded-2xl shadow-md hover:shadow-xl'>
              <img src={atmCard} alt="Payment" className='w-20 h-20 mx-auto mb-6 object-contain' />
              <h3 className='text-xl font-bold text-center mb-4 text-secondary-900'>Convenient Payment Method For You</h3>
              <p className='text-gray-600 text-center leading-relaxed'>
                Multiple secure payment options including cards, digital wallets, and bank transfers for your convenience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cheap Airlines Section */}
      <section className='py-16 px-4 sm:px-6 lg:px-8 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-12 text-secondary-900 pb-4 border-b-2 border-primary-500'>
            Cheap Airline Tickets
          </h2>

          <div className='grid md:grid-cols-3 gap-8'>
            {/* Destination Card 1 */}
            <div className='card-hover bg-white rounded-2xl overflow-hidden shadow-lg'>
              <div className='grid grid-cols-2 h-64'>
                <img src={home1} alt="Venice" className='w-full h-full object-cover' />
                <div className='p-6 bg-gray-50 flex flex-col justify-between'>
                  <div>
                    <h3 className='text-2xl font-bold text-secondary-900 mb-1'>Venice</h3>
                    <p className='text-gray-600 mb-4'>Italy</p>
                  </div>
                  <div className='space-y-2'>
                    <p className='text-sm font-semibold text-gray-700'>Departure Cities:</p>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <p key={i} className='text-sm'>
                        <span className='text-success-500 font-semibold'>Seattle</span>
                        <span className='text-gray-500 mx-1'>from</span>
                        <span className='text-primary-600 font-bold'>$98</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Destination Card 2 */}
            <div className='card-hover bg-white rounded-2xl overflow-hidden shadow-lg'>
              <div className='grid grid-cols-2 h-64'>
                <img src={home2} alt="Destination" className='w-full h-full object-cover' />
                <div className='p-6 bg-gray-50 flex flex-col justify-between'>
                  <div>
                    <h3 className='text-2xl font-bold text-secondary-900 mb-1'>Paris</h3>
                    <p className='text-gray-600 mb-4'>France</p>
                  </div>
                  <div className='space-y-2'>
                    <p className='text-sm font-semibold text-gray-700'>Departure Cities:</p>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <p key={i} className='text-sm'>
                        <span className='text-success-500 font-semibold'>Seattle</span>
                        <span className='text-gray-500 mx-1'>from</span>
                        <span className='text-primary-600 font-bold'>$98</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Destination Card 3 */}
            <div className='card-hover bg-white rounded-2xl overflow-hidden shadow-lg'>
              <div className='grid grid-cols-2 h-64'>
                <img src={home3} alt="Destination" className='w-full h-full object-cover' />
                <div className='p-6 bg-gray-50 flex flex-col justify-between'>
                  <div>
                    <h3 className='text-2xl font-bold text-secondary-900 mb-1'>London</h3>
                    <p className='text-gray-600 mb-4'>England</p>
                  </div>
                  <div className='space-y-2'>
                    <p className='text-sm font-semibold text-gray-700'>Departure Cities:</p>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <p key={i} className='text-sm'>
                        <span className='text-success-500 font-semibold'>Seattle</span>
                        <span className='text-gray-500 mx-1'>from</span>
                        <span className='text-primary-600 font-bold'>$98</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className='py-16 px-4 sm:px-6 lg:px-8 bg-gray-50'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-secondary-900 mb-4'>Latest Blog Posts</h2>
            <p className='text-lg text-gray-600'>Discover travel tips, industry insights, and inspiring stories from our team</p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {/* Blog Card 1 */}
            <div className='card-hover bg-white rounded-2xl overflow-hidden shadow-lg'>
              <div className='h-64 overflow-hidden'>
                <img src={home4} alt="Blog" className='w-full h-full object-cover' />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-secondary-900 mb-3'>9 Ways to Become a Successful Travel Blogger</h3>
                <p className='text-gray-600 text-sm mb-4 line-clamp-3'>
                  Travel blogging is a crowded field — and it gets more crowded day by day. And a lot of the advice that people give are actually counterintuitive to success.
                </p>
                <div className='border-t pt-4 flex justify-between items-center text-sm'>
                  <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faPenToSquare} className='text-primary-500' />
                    <span className='text-gray-600'>Article</span>
                  </div>
                  <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-1'>
                      <FontAwesomeIcon icon={faMessage} className='text-primary-500' />
                      <span className='text-gray-600'>25</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <FontAwesomeIcon icon={faEye} className='text-primary-500' />
                      <span className='text-gray-600'>616</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className='card-hover bg-white rounded-2xl overflow-hidden shadow-lg'>
              <div className='h-64 overflow-hidden'>
                <img src={home5} alt="Blog" className='w-full h-full object-cover' />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-secondary-900 mb-3'>Essential Travel Tips for First-Time Flyers</h3>
                <p className='text-gray-600 text-sm mb-4 line-clamp-3'>
                  Planning your first flight? Here are essential tips to make your journey smooth and enjoyable, from packing to airport navigation.
                </p>
                <div className='border-t pt-4 flex justify-between items-center text-sm'>
                  <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faPenToSquare} className='text-primary-500' />
                    <span className='text-gray-600'>Article</span>
                  </div>
                  <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-1'>
                      <FontAwesomeIcon icon={faMessage} className='text-primary-500' />
                      <span className='text-gray-600'>18</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <FontAwesomeIcon icon={faEye} className='text-primary-500' />
                      <span className='text-gray-600'>432</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className='card-hover bg-white rounded-2xl overflow-hidden shadow-lg'>
              <div className='h-64 overflow-hidden'>
                <img src={home6} alt="Blog" className='w-full h-full object-cover' />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-secondary-900 mb-3'>Top Destinations for 2024</h3>
                <p className='text-gray-600 text-sm mb-4 line-clamp-3'>
                  Discover the most exciting travel destinations for the upcoming year, from hidden gems to popular hotspots that should be on your radar.
                </p>
                <div className='border-t pt-4 flex justify-between items-center text-sm'>
                  <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faPenToSquare} className='text-primary-500' />
                    <span className='text-gray-600'>Article</span>
                  </div>
                  <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-1'>
                      <FontAwesomeIcon icon={faMessage} className='text-primary-500' />
                      <span className='text-gray-600'>32</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <FontAwesomeIcon icon={faEye} className='text-primary-500' />
                      <span className='text-gray-600'>789</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Airlines Section */}
      <section className='py-16 px-4 sm:px-6 lg:px-8 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-12 text-success-500'>Popular Airlines</h2>
          
          <div className='grid md:grid-cols-4 gap-6'>
            {[home8, home9, home10, home11].map((airline, idx) => (
              <div key={idx} className='card-hover rounded-xl overflow-hidden shadow-lg'>
                <img src={airline} alt="Airline" className='w-full h-48 object-cover' />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  )
}
