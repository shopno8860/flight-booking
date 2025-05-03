import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
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

  return (
    <div className="payment-page">
      <Header />
      
      <Container className="py-5">
        <Row className="mb-4">
          <Col>
            <h1 className="display-5 fw-bold text-primary">Payment Details</h1>
            <p className="lead text-muted">Complete your booking by entering your payment information</p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={8}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <Form onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Col>
                      <Form.Group controlId="cardNumber">
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          placeholder="1234 5678 9012 3456"
                          maxLength="16"
                          isInvalid={!!errors.cardNumber}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.cardNumber}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col>
                      <Form.Group controlId="cardName">
                        <Form.Label>Cardholder Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleChange}
                          placeholder="John Doe"
                          isInvalid={!!errors.cardName}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.cardName}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group controlId="expiryDate">
                        <Form.Label>Expiry Date</Form.Label>
                        <Form.Control
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          maxLength="5"
                          isInvalid={!!errors.expiryDate}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.expiryDate}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="cvv">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          placeholder="123"
                          maxLength="4"
                          isInvalid={!!errors.cvv}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.cvv}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col>
                      <Form.Group controlId="email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john.doe@example.com"
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Button variant="primary" type="submit" className="w-100">
                    Pay Now
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h4 className="mb-4">Order Summary</h4>
                
                <div className="mb-4">
                  <h6 className="text-muted">Selected Seats</h6>
                  <div className="selected-seats-list">
                    {selectedSeats.map((seat) => (
                      <span key={seat} className="badge bg-primary me-2 mb-2">
                        {seat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h6 className="text-muted">Price Details</h6>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Seat Price (x{selectedSeats.length})</span>
                    <span>${totalPrice}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Taxes & Fees</span>
                    <span>${(totalPrice * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between fw-bold">
                    <span>Total</span>
                    <span>${(totalPrice * 1.1).toFixed(2)}</span>
                  </div>
                </div>

                <Alert variant="info" className="mt-4">
                  <small>
                    Your payment information is secure and encrypted. We do not store your card details.
                  </small>
                </Alert>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Payment; 