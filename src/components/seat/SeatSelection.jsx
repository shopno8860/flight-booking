import React, { useState, useEffect } from 'react';
import { FaChair, FaCheck, FaTimes } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './SeatSelection.css';

const SeatSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    console.log('SeatSelection component mounted');
    console.log('Location state:', location.state);
  }, [location.state]);

  // Sample seat data
  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  const columns = 10;
  const seatPrice = 50; // Price per seat

  const handleSeatClick = (row, column) => {
    const seatId = `${row}${column}`;
    const isSelected = selectedSeats.includes(seatId);
    
    if (isSelected) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatId));
      setTotalPrice(totalPrice - seatPrice);
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
      setTotalPrice(totalPrice + seatPrice);
    }
  };

  const handleProceedToPayment = () => {
    console.log('Proceeding to payment...');
    console.log('Selected seats:', selectedSeats);
    console.log('Total price:', totalPrice);
    
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat');
      return;
    }
    
    try {
      navigate('/payment', { 
        state: { 
          selectedSeats, 
          totalPrice,
          flight: location.state?.flight 
        } 
      });
      console.log('Navigation to payment page initiated');
    } catch (error) {
      console.error('Error navigating to payment page:', error);
    }
  };

  const taxesAndFees = (seatPrice * selectedSeats.length * 0.1).toFixed(2);
  const finalTotal = (totalPrice * 1.1).toFixed(2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 flex flex-col">
      <Header />
      
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">Select Your Seats</h1>
            <p className="text-lg text-gray-600">Choose your preferred seats for the flight and enjoy a comfortable journey</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Seat Map Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Section Header */}
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-8 py-6">
                  <h2 className="text-2xl font-bold text-white">Aircraft Cabin</h2>
                </div>

                {/* Cockpit */}
                <div className="p-8">
                  <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-4 mb-8 text-center">
                    <h3 className="text-gray-800 font-bold text-lg">✈️ Cockpit</h3>
                  </div>

                  {/* Seat Map */}
                  <div className="flex flex-col items-center gap-4 mb-12">
                    {rows.map((row) => (
                      <div key={row} className="flex items-center gap-3">
                        <div className="w-8 text-center font-bold text-gray-900">{row}</div>
                        <div className="flex gap-2">
                          {Array.from({ length: columns }, (_, i) => i + 1).map((column) => {
                            const seatId = `${row}${column}`;
                            const isSelected = selectedSeats.includes(seatId);
                            const isBooked = Math.random() < 0.2; // 20% chance of being booked
                            
                            return (
                              <button
                                key={column}
                                type="button"
                                onClick={() => !isBooked && handleSeatClick(row, column)}
                                disabled={isBooked}
                                className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-all duration-200 ${
                                  isBooked
                                    ? 'bg-red-500 text-white cursor-not-allowed opacity-60'
                                    : isSelected
                                    ? 'bg-primary-600 text-white shadow-lg scale-105'
                                    : 'bg-gray-200 text-gray-700 hover:bg-primary-200 hover:scale-110'
                                }`}
                                title={seatId}
                              >
                                {isBooked ? <FaTimes className="text-sm" /> : isSelected ? <FaCheck className="text-sm" /> : <FaChair className="text-xs" />}
                              </button>
                            );
                          })}
                        </div>
                        <div className="w-8 text-center font-bold text-gray-900">{row}</div>
                      </div>
                    ))}
                  </div>

                  {/* Seat Legend */}
                  <div className="border-t border-gray-200 pt-8">
                    <h4 className="font-bold text-gray-900 mb-6 text-center">Seat Legend</h4>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-700 mb-3">
                          <FaChair />
                        </div>
                        <span className="text-sm font-semibold text-gray-700">Available</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white mb-3 shadow-lg">
                          <FaCheck />
                        </div>
                        <span className="text-sm font-semibold text-gray-700">Selected</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white mb-3 opacity-60">
                          <FaTimes />
                        </div>
                        <span className="text-sm font-semibold text-gray-700">Booked</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-8">
                {/* Summary Header */}
                <div className="bg-gradient-to-r from-secondary-600 to-secondary-700 px-8 py-6">
                  <h3 className="text-xl font-bold text-white">Booking Summary</h3>
                </div>

                {/* Summary Body */}
                <div className="p-8">
                  {/* Selected Seats */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">Your Selected Seats</h4>
                    {selectedSeats.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {selectedSeats.map((seat) => (
                          <div
                            key={seat}
                            className="px-3 py-2 bg-primary-600 text-white rounded-lg text-sm font-bold hover:bg-primary-700 transition-colors"
                          >
                            {seat}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-sm italic">No seats selected yet</p>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gray-200 mb-8"></div>

                  {/* Price Breakdown */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">Price Details</h4>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Seat Price ({selectedSeats.length} × ${seatPrice})</span>
                        <span className="text-gray-900 font-semibold">${seatPrice * selectedSeats.length}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Taxes & Fees (10%)</span>
                        <span className="text-gray-900 font-semibold">${taxesAndFees}</span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gray-300 my-4"></div>

                    {/* Total */}
                    <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-900">Total Amount</span>
                        <span className="text-2xl font-bold text-primary-600">${finalTotal}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={handleProceedToPayment}
                    disabled={selectedSeats.length === 0}
                    className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                      selectedSeats.length === 0
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'btn-primary bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    Proceed to Payment
                  </button>

                  {/* Info Message */}
                  {selectedSeats.length === 0 && (
                    <p className="text-xs text-gray-500 mt-4 text-center italic">
                      Please select at least one seat to proceed
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SeatSelection; 