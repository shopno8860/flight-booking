import React from 'react';
import { FaPlane, FaClock, FaPlaneDeparture, FaPlaneArrival } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const FlightList = () => {
  const navigate = useNavigate();
  
  // Sample flight data
  const flights = [
    {
      id: 1,
      airline: 'Emirates',
      flightNumber: 'EK123',
      departure: {
        city: 'New York',
        time: '08:00 AM',
        date: '2024-03-15',
        airport: 'JFK'
      },
      arrival: {
        city: 'London',
        time: '08:00 PM',
        date: '2024-03-15',
        airport: 'LHR'
      },
      duration: '7h 30m',
      price: 450,
      stops: 0,
      seatsLeft: 5,
      class: 'Economy'
    },
    {
      id: 2,
      airline: 'British Airways',
      flightNumber: 'BA456',
      departure: {
        city: 'New York',
        time: '10:30 AM',
        date: '2024-03-15',
        airport: 'JFK'
      },
      arrival: {
        city: 'London',
        time: '10:30 PM',
        date: '2024-03-15',
        airport: 'LHR'
      },
      duration: '8h 00m',
      price: 420,
      stops: 1,
      seatsLeft: 12,
      class: 'Business'
    },
    {
      id: 3,
      airline: 'Delta Airlines',
      flightNumber: 'DL789',
      departure: {
        city: 'New York',
        time: '02:15 PM',
        date: '2024-03-15',
        airport: 'JFK'
      },
      arrival: {
        city: 'London',
        time: '02:15 AM',
        date: '2024-03-16',
        airport: 'LHR'
      },
      duration: '7h 00m',
      price: 480,
      stops: 0,
      seatsLeft: 3,
      class: 'First Class'
    }
  ];

  const handleSelectFlight = (flight) => {
    navigate('/seat-selection', { state: { flight } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-4xl font-bold text-secondary-900 mb-3'>Available Flights</h1>
          <p className='text-lg text-gray-600'>Select your preferred flight from the options below</p>
        </div>

        {/* Flight Cards */}
        <div className='space-y-6'>
          {flights.map((flight) => (
            <div key={flight.id} className='bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden'>
              <div className='p-6'>
                <div className='grid md:grid-cols-12 gap-6 items-center'>
                  
                  {/* Airline Info */}
                  <div className='md:col-span-2 text-center border-r border-gray-100'>
                    <div className='bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3'>
                      <FaPlane className='text-primary-500 text-3xl' />
                    </div>
                    <h5 className='font-bold text-secondary-900 mb-1'>{flight.airline}</h5>
                    <p className='text-sm text-gray-600'>{flight.flightNumber}</p>
                  </div>

                  {/* Flight Details */}
                  <div className='md:col-span-6 border-r border-gray-100'>
                    <div className='grid grid-cols-3 gap-4 items-center'>
                      {/* Departure */}
                      <div>
                        <div className='mb-2'>
                          <h4 className='text-xl font-bold text-secondary-900'>{flight.departure.time}</h4>
                          <div className='flex items-center gap-2 mt-1'>
                            <FaPlaneDeparture className='text-primary-500 text-lg' />
                            <div className='text-sm'>
                              <p className='font-semibold text-gray-900'>{flight.departure.city}</p>
                              <p className='text-gray-500'>{flight.departure.airport}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Duration */}
                      <div className='text-center'>
                        <div className='flex flex-col items-center'>
                          <FaClock className='text-primary-500 mb-2 text-lg' />
                          <p className='font-bold text-secondary-900 text-sm'>{flight.duration}</p>
                          {flight.stops > 0 && (
                            <span className='inline-block mt-2 px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full'>
                              {flight.stops} {flight.stops === 1 ? 'stop' : 'stops'}
                            </span>
                          )}
                          {flight.stops === 0 && (
                            <span className='inline-block mt-2 px-3 py-1 bg-success-50 text-success-700 text-xs font-semibold rounded-full'>
                              Non-stop
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Arrival */}
                      <div className='text-right'>
                        <div className='mb-2'>
                          <h4 className='text-xl font-bold text-secondary-900'>{flight.arrival.time}</h4>
                          <div className='flex items-center justify-end gap-2 mt-1'>
                            <div className='text-sm text-right'>
                              <p className='font-semibold text-gray-900'>{flight.arrival.city}</p>
                              <p className='text-gray-500'>{flight.arrival.airport}</p>
                            </div>
                            <FaPlaneArrival className='text-primary-500 text-lg' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className='md:col-span-4'>
                    <div className='bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-4'>
                      <h3 className='text-3xl font-bold text-primary-600 mb-4 text-center'>${flight.price}</h3>
                      
                      <div className='space-y-2 mb-4'>
                        <div className='flex justify-between items-center text-sm'>
                          <span className='text-gray-700'>Class:</span>
                          <span className='px-3 py-1 bg-primary-200 text-primary-900 font-semibold rounded-lg text-xs'>
                            {flight.class}
                          </span>
                        </div>
                        <div className='flex justify-between items-center text-sm'>
                          <span className='text-gray-700'>Date:</span>
                          <span className='px-3 py-1 bg-primary-200 text-primary-900 font-semibold rounded-lg text-xs'>
                            {flight.departure.date}
                          </span>
                        </div>
                        <div className='flex justify-between items-center text-sm'>
                          <span className='text-gray-700'>Seats Left:</span>
                          <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                            flight.seatsLeft < 5 
                              ? 'bg-red-200 text-red-900' 
                              : 'bg-success-200 text-success-900'
                          }`}>
                            {flight.seatsLeft}
                          </span>
                        </div>
                      </div>

                      <button 
                        onClick={() => handleSelectFlight(flight)}
                        className='btn-primary w-full'
                      >
                        Select Flight
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FlightList; 