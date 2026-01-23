import React, { useEffect } from 'react';
import { FaCheckCircle, FaPlane, FaTicketAlt, FaUser, FaDownload, FaArrowRight } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Confirmation.css';

const Confirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedSeats, totalPrice, flight, formData } = location.state || {};

  useEffect(() => {
    console.log('Confirmation component mounted');
    console.log('Location state:', location.state);
  }, [location.state]);

  if (!selectedSeats || !flight) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="max-w-md w-full">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚠️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Booking Not Found</h2>
              <p className="text-gray-600 mb-8">We couldn't find your booking details. Please try again.</p>
              <button
                onClick={() => navigate('/')}
                className="btn-primary w-full py-3 px-6 rounded-lg font-bold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all duration-300"
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const taxesAndFees = (totalPrice * 0.1).toFixed(2);
  const finalTotal = (totalPrice * 1.1).toFixed(2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-success-50 flex flex-col">
      <Header />
      
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Success Message */}
          <div className="mb-12 text-center">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-success-400 to-success-600 rounded-full flex items-center justify-center animate-pulse">
                <FaCheckCircle className="text-white text-5xl" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Booking Confirmed!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for choosing CheapFlights. Your booking has been confirmed and confirmation details have been sent to your email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/')}
                className="btn-primary py-3 px-8 rounded-lg font-bold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all duration-300"
              >
                Return to Home
              </button>
              <button
                onClick={() => window.print()}
                className="py-3 px-8 rounded-lg font-bold text-primary-600 bg-primary-50 border-2 border-primary-200 hover:bg-primary-100 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaDownload /> Download Confirmation
              </button>
            </div>
          </div>

          {/* Booking Details Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-secondary-600 to-secondary-700 px-8 py-6">
              <h2 className="text-2xl font-bold text-white">Booking Details</h2>
            </div>

            {/* Card Body */}
            <div className="p-8">
              {/* Flight Information */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPlane className="text-primary-600 text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Flight Information</h3>
                    <p className="text-gray-600 mb-2">
                      <span className="font-semibold">{flight.airline}</span> • Flight <span className="font-semibold">{flight.flightNumber}</span>
                    </p>
                    <div className="flex items-center gap-3 text-gray-600">
                      <span className="font-semibold">{flight.departure.city}</span>
                      <FaArrowRight className="text-primary-500" />
                      <span className="font-semibold">{flight.arrival.city}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      {flight.departure.airport} → {flight.arrival.airport}
                    </p>
                  </div>
                </div>
              </div>

              {/* Selected Seats */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaTicketAlt className="text-primary-600 text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Selected Seats</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedSeats && selectedSeats.map((seat) => (
                        <div
                          key={seat}
                          className="px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                        >
                          {seat}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Passenger Information */}
              <div className="mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaUser className="text-primary-600 text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Passenger Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Passenger Name</p>
                        <p className="text-gray-900 font-semibold">{formData?.cardName || 'N/A'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Email Address</p>
                        <p className="text-gray-900 font-semibold break-all">{formData?.email || 'N/A'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Price Summary Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-accent-500 to-accent-600 px-8 py-6">
              <h3 className="text-xl font-bold text-gray-900">Price Summary</h3>
            </div>

            <div className="p-8">
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Seat Price ({selectedSeats?.length} × seats)</span>
                  <span className="text-gray-900 font-semibold">${totalPrice}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Taxes & Fees (10%)</span>
                  <span className="text-gray-900 font-semibold">${taxesAndFees}</span>
                </div>
              </div>

              <div className="h-px bg-gray-200 mb-6"></div>

              <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total Amount Paid</span>
                  <span className="text-3xl font-bold text-primary-600">${finalTotal}</span>
                </div>
              </div>

              {/* Confirmation Info */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-primary-500">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">✓ Confirmation Email:</span> A confirmation email with your booking details has been sent to <span className="font-semibold">{formData?.email || 'your email'}</span>. Please check your inbox and spam folder.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-3xl mb-3">🎫</div>
              <h4 className="font-bold text-gray-900 mb-2">Check-in Online</h4>
              <p className="text-sm text-gray-600">Online check-in opens 24 hours before departure</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-3xl mb-3">🛄</div>
              <h4 className="font-bold text-gray-900 mb-2">Baggage Policy</h4>
              <p className="text-sm text-gray-600">Free baggage included with your ticket</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-3xl mb-3">📞</div>
              <h4 className="font-bold text-gray-900 mb-2">Need Help?</h4>
              <p className="text-sm text-gray-600">Contact our support team 24/7</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Confirmation; 