import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faCheckCircle, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import './Payment.css';

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedSeats, totalPrice, flight } = location.state || { selectedSeats: [], totalPrice: 0, flight: null };

  useEffect(() => {
    console.log('Payment component mounted');
    console.log('Location state:', location.state);
    console.log('Selected seats:', selectedSeats);
    console.log('Total price:', totalPrice);
    console.log('Flight:', flight);
  }, [location.state, selectedSeats, totalPrice, flight]);

  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    email: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.cardNumber.match(/^\d{16}$/)) {
      newErrors.cardNumber = 'Please enter a valid 16-digit card number';
    }
    
    if (!formData.cardName.trim()) {
      newErrors.cardName = 'Please enter the cardholder name';
    }
    
    if (!formData.expiryDate.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
      newErrors.expiryDate = 'Please enter a valid expiry date (MM/YY)';
    }
    
    if (!formData.cvv.match(/^\d{3,4}$/)) {
      newErrors.cvv = 'Please enter a valid CVV';
    }
    
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real application, you would process the payment here
      console.log('Payment successful, navigating to confirmation...');
      navigate('/confirmation', { 
        state: { 
          ...location.state,
          formData 
        } 
      });
    }
  };

  const taxesAndFees = (totalPrice * 0.1).toFixed(2);
  const finalTotal = (totalPrice * 1.1).toFixed(2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 flex flex-col">
      <Header />
      
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">Payment Details</h1>
            <p className="text-lg text-gray-600">Complete your booking by entering your payment information securely</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Form Header */}
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-8 py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faCreditCard} className="text-primary-600 text-lg" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">Card Information</h2>
                      <p className="text-primary-100 text-sm">Enter your payment details below</p>
                    </div>
                  </div>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit} className="p-8">
                  {/* Card Number */}
                  <div className="mb-6">
                    <label className="form-label block text-sm font-semibold text-gray-700 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength="16"
                      className={`form-input w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                        errors.cardNumber 
                          ? 'border-red-500 bg-red-50 focus:border-red-500' 
                          : 'border-gray-200 bg-white focus:border-primary-500 focus:bg-white'
                      }`}
                    />
                    {errors.cardNumber && (
                      <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
                        <span>✕</span> {errors.cardNumber}
                      </p>
                    )}
                  </div>

                  {/* Cardholder Name */}
                  <div className="mb-6">
                    <label className="form-label block text-sm font-semibold text-gray-700 mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`form-input w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                        errors.cardName 
                          ? 'border-red-500 bg-red-50 focus:border-red-500' 
                          : 'border-gray-200 bg-white focus:border-primary-500 focus:bg-white'
                      }`}
                    />
                    {errors.cardName && (
                      <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
                        <span>✕</span> {errors.cardName}
                      </p>
                    )}
                  </div>

                  {/* Expiry and CVV */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="form-label block text-sm font-semibold text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        maxLength="5"
                        className={`form-input w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                          errors.expiryDate 
                            ? 'border-red-500 bg-red-50 focus:border-red-500' 
                            : 'border-gray-200 bg-white focus:border-primary-500 focus:bg-white'
                        }`}
                      />
                      {errors.expiryDate && (
                        <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
                          <span>✕</span> {errors.expiryDate}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="form-label block text-sm font-semibold text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        placeholder="123"
                        maxLength="4"
                        className={`form-input w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                          errors.cvv 
                            ? 'border-red-500 bg-red-50 focus:border-red-500' 
                            : 'border-gray-200 bg-white focus:border-primary-500 focus:bg-white'
                        }`}
                      />
                      {errors.cvv && (
                        <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
                          <span>✕</span> {errors.cvv}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-8">
                    <label className="form-label block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.doe@example.com"
                      className={`form-input w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                        errors.email 
                          ? 'border-red-500 bg-red-50 focus:border-red-500' 
                          : 'border-gray-200 bg-white focus:border-primary-500 focus:bg-white'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
                        <span>✕</span> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-primary w-full py-3 px-6 rounded-lg font-bold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Complete Payment
                  </button>

                  {/* Security Message */}
                  <div className="mt-6 p-4 bg-green-50 rounded-lg border-l-4 border-success-500">
                    <div className="flex items-start gap-3">
                      <FontAwesomeIcon icon={faLock} className="text-success-500 mt-1 text-lg" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Your payment is secure</p>
                        <p className="text-xs text-gray-600 mt-1">
                          Your payment information is encrypted and secure. We do not store your card details on our servers.
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-8">
                {/* Summary Header */}
                <div className="bg-gradient-to-r from-secondary-600 to-secondary-700 px-8 py-6">
                  <h2 className="text-xl font-bold text-white">Order Summary</h2>
                </div>

                {/* Summary Body */}
                <div className="p-8">
                  {/* Selected Seats */}
                  <div className="mb-8">
                    <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">Selected Seats</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedSeats && selectedSeats.length > 0 ? (
                        selectedSeats.map((seat) => (
                          <div
                            key={seat}
                            className="px-3 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg text-sm font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-200"
                          >
                            {seat}
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-500 text-sm">No seats selected</p>
                      )}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gray-200 mb-8"></div>

                  {/* Price Breakdown */}
                  <div className="mb-8">
                    <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">Price Details</h3>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Seat Price ({selectedSeats?.length || 0} x)</span>
                        <span className="text-gray-900 font-semibold">${totalPrice}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Taxes & Fees</span>
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

                  {/* Verification Badge */}
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-success-500">
                    <div className="flex items-start gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-success-500 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-gray-900">Verified Secure</p>
                        <p className="text-xs text-gray-600 mt-1">SSL encrypted & PCI compliant payment processing</p>
                      </div>
                    </div>
                  </div>
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

export default Payment; 