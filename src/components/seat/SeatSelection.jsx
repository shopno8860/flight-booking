import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge, Alert } from 'react-bootstrap';
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

  return (
    <div className="seat-selection-page">
      <Header />
      
      <Container className="py-5">
        <Row className="mb-4">
          <Col>
            <h1 className="display-5 fw-bold text-primary">Select Your Seats</h1>
            <p className="lead text-muted">Choose your preferred seats for the flight</p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={8}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <div className="airplane-cabin mb-4">
                  <div className="cockpit mb-4">
                    <h5 className="text-center">Cockpit</h5>
                  </div>
                  
                  <div className="seat-map">
                    {rows.map((row) => (
                      <div key={row} className="seat-row mb-3">
                        <div className="row-label">{row}</div>
                        {Array.from({ length: columns }, (_, i) => i + 1).map((column) => {
                          const seatId = `${row}${column}`;
                          const isSelected = selectedSeats.includes(seatId);
                          const isBooked = Math.random() < 0.2; // 20% chance of being booked
                          
                          return (
                            <div
                              key={column}
                              className={`seat ${isSelected ? 'selected' : ''} ${isBooked ? 'booked' : ''}`}
                              onClick={() => !isBooked && handleSeatClick(row, column)}
                            >
                              {isBooked ? <FaTimes /> : isSelected ? <FaCheck /> : <FaChair />}
                            </div>
                          );
                        })}
                        <div className="row-label">{row}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="seat-legend">
                  <div className="d-flex gap-3 justify-content-center">
                    <div className="d-flex align-items-center">
                      <div className="seat available me-2">
                        <FaChair />
                      </div>
                      <span>Available</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="seat selected me-2">
                        <FaCheck />
                      </div>
                      <span>Selected</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="seat booked me-2">
                        <FaTimes />
                      </div>
                      <span>Booked</span>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h4 className="mb-4">Booking Summary</h4>
                
                <div className="mb-4">
                  <h6 className="text-muted">Selected Seats</h6>
                  <div className="selected-seats-list">
                    {selectedSeats.map((seat) => (
                      <Badge key={seat} bg="primary" className="me-2 mb-2">
                        {seat}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h6 className="text-muted">Price Details</h6>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Seat Price (x{selectedSeats.length})</span>
                    <span>${seatPrice * selectedSeats.length}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Taxes & Fees</span>
                    <span>${(seatPrice * selectedSeats.length * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between fw-bold">
                    <span>Total</span>
                    <span>${(totalPrice * 1.1).toFixed(2)}</span>
                  </div>
                </div>

                <Button 
                  variant="primary" 
                  className="w-100"
                  onClick={handleProceedToPayment}
                >
                  Proceed to Payment
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default SeatSelection; 