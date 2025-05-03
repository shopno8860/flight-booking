import React from 'react';
import { Container, Row, Col, Card, Button, Badge, ListGroup } from 'react-bootstrap';
import { FaPlane, FaClock, FaRegCalendarAlt, FaRegUser, FaPlaneDeparture, FaPlaneArrival } from 'react-icons/fa';
import './FlightList.css';

const FlightList = () => {
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

  return (
    <div className="flight-list-page bg-light">
      <Container className="py-5">
        <Row className="mb-4">
          <Col>
            <h1 className="display-5 fw-bold text-primary">Available Flights</h1>
            <p className="lead text-muted">Select your preferred flight from the options below</p>
          </Col>
        </Row>

        <Row className="g-4">
          {flights.map((flight) => (
            <Col key={flight.id} md={12}>
              <Card className="flight-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <Row className="align-items-center g-4">
                    <Col md={2} className="text-center">
                      <div className="airline-logo bg-light rounded-circle p-3 mb-3">
                        <FaPlane className="text-primary" size={40} />
                      </div>
                      <h5 className="mb-1 fw-bold">{flight.airline}</h5>
                      <small className="text-muted">{flight.flightNumber}</small>
                    </Col>

                    <Col md={7}>
                      <Row className="align-items-center g-4">
                        <Col md={5}>
                          <div className="flight-time">
                            <h4 className="mb-1 fw-bold">{flight.departure.time}</h4>
                            <div className="d-flex align-items-center gap-2">
                              <FaPlaneDeparture className="text-primary" />
                              <small className="text-muted">{flight.departure.city} ({flight.departure.airport})</small>
                            </div>
                          </div>
                        </Col>

                        <Col md={2} className="text-center">
                          <div className="flight-duration position-relative">
                            <div className="d-flex flex-column align-items-center">
                              <FaClock className="text-primary mb-2" />
                              <p className="mb-0 small fw-bold">{flight.duration}</p>
                              {flight.stops > 0 && (
                                <Badge bg="light" text="dark" className="mt-2">
                                  {flight.stops} {flight.stops === 1 ? 'stop' : 'stops'}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </Col>

                        <Col md={5}>
                          <div className="flight-time text-end">
                            <h4 className="mb-1 fw-bold">{flight.arrival.time}</h4>
                            <div className="d-flex align-items-center justify-content-end gap-2">
                              <small className="text-muted">{flight.arrival.city} ({flight.arrival.airport})</small>
                              <FaPlaneArrival className="text-primary" />
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Col>

                    <Col md={3}>
                      <div className="flight-price text-center">
                        <h3 className="text-primary mb-3 fw-bold">${flight.price}</h3>
                        <ListGroup className="mb-3">
                          <ListGroup.Item className="d-flex justify-content-between align-items-center">
                            <span className="text-muted">Class</span>
                            <Badge bg="info" className="px-2 py-1">
                              {flight.class}
                            </Badge>
                          </ListGroup.Item>
                          <ListGroup.Item className="d-flex justify-content-between align-items-center">
                            <span className="text-muted">Date</span>
                            <Badge bg="info" className="px-2 py-1">
                              {flight.departure.date}
                            </Badge>
                          </ListGroup.Item>
                          <ListGroup.Item className="d-flex justify-content-between align-items-center">
                            <span className="text-muted">Seats Left</span>
                            <Badge bg={flight.seatsLeft < 5 ? "danger" : "success"} className="px-2 py-1">
                              {flight.seatsLeft}
                            </Badge>
                          </ListGroup.Item>
                        </ListGroup>
                        <Button variant="primary" className="w-100">
                          Select Flight
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FlightList;