import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaCheckCircle, FaPlane, FaTicketAlt, FaUser, FaEnvelope } from 'react-icons/fa';
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
      <div className="confirmation-page">
        <Header />
        <Container className="py-5">
          <Card className="border-0 shadow-sm">
            <Card.Body className="text-center p-5">
              <h2 className="text-danger mb-4">Booking Not Found</h2>
              <p className="lead">We couldn't find your booking details. Please try again.</p>
              <Button variant="primary" onClick={() => navigate('/')}>
                Return to Home
              </Button>
            </Card.Body>
          </Card>
        </Container>
        <Footer />
      </div>
    );
  }

  return (
    <div className="confirmation-page">
      <Header />
      
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="border-0 shadow-sm mb-4">
              <Card.Body className="text-center p-5">
                <FaCheckCircle className="text-success mb-4" size={64} />
                <h2 className="mb-4">Booking Confirmed!</h2>
                <p className="lead text-muted mb-4">
                  Thank you for choosing our airline. Your booking has been confirmed and details have been sent to your email.
                </p>
                <Button variant="outline-primary" onClick={() => navigate('/')}>
                  Return to Home
                </Button>
              </Card.Body>
            </Card>

            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h4 className="mb-4">Booking Details</h4>
                
                <div className="booking-info mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <FaPlane className="text-primary me-3" size={20} />
                    <div>
                      <h6 className="mb-1">Flight Information</h6>
                      <p className="mb-0">
                        {flight.airline} - {flight.flightNumber}
                      </p>
                      <small className="text-muted">
                        {flight.departure.city} ({flight.departure.airport}) to {flight.arrival.city} ({flight.arrival.airport})
                      </small>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <FaTicketAlt className="text-primary me-3" size={20} />
                    <div>
                      <h6 className="mb-1">Selected Seats</h6>
                      <div className="selected-seats-list">
                        {selectedSeats.map((seat) => (
                          <Badge key={seat} bg="primary" className="me-2 mb-2">
                            {seat}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <FaUser className="text-primary me-3" size={20} />
                    <div>
                      <h6 className="mb-1">Passenger Information</h6>
                      <p className="mb-0">{formData?.cardName}</p>
                      <small className="text-muted">{formData?.email}</small>
                    </div>
                  </div>
                </div>

                <div className="price-details">
                  <h6 className="text-muted mb-3">Price Details</h6>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Seat Price (x{selectedSeats.length})</span>
                    <span>${totalPrice}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Taxes & Fees</span>
                    <span>${(totalPrice * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between fw-bold">
                    <span>Total Paid</span>
                    <span>${(totalPrice * 1.1).toFixed(2)}</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Confirmation; 