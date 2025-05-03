import React from 'react'
import './About.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { FaPlane, FaUsers, FaGlobe, FaHandshake } from 'react-icons/fa'
import { Container, Row, Col, Card } from 'react-bootstrap'

export default function About() {
  return (
    <div className="about-page">
      <Header />
      
      <section className="about-hero py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h1 className="display-4 fw-bold mb-3">About Flight Booking</h1>
              <p className="lead">Your trusted partner in air travel since 2024</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about-content py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h2 className="fw-bold mb-4">Our Story</h2>
              <p className="lead mb-4">Flight Booking was founded with a simple mission: to make air travel accessible and enjoyable for everyone. We understand that booking flights can be stressful, which is why we&apos;ve created a platform that makes the process simple, transparent, and affordable.</p>
              <p className="lead">With years of experience in the travel industry, our team is dedicated to providing you with the best flight options, competitive prices, and exceptional customer service.</p>
            </Col>
            <Col md={6}>
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Our Story" 
                className="img-fluid rounded shadow" 
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="our-values py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5">Our Values</h2>
          <Row>
            <Col md={3} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <FaPlane className="value-icon text-primary mb-3" />
                  <h3 className="h5 fw-bold">Reliability</h3>
                  <p className="text-muted">We ensure reliable and secure flight bookings for all our customers.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <FaUsers className="value-icon text-primary mb-3" />
                  <h3 className="h5 fw-bold">Customer Focus</h3>
                  <p className="text-muted">Your satisfaction is our top priority. We&apos;re here to help 24/7.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <FaGlobe className="value-icon text-primary mb-3" />
                  <h3 className="h5 fw-bold">Global Reach</h3>
                  <p className="text-muted">Access to flights from over 500 airlines worldwide.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <FaHandshake className="value-icon text-primary mb-3" />
                  <h3 className="h5 fw-bold">Trust</h3>
                  <p className="text-muted">Building long-term relationships based on trust and transparency.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="our-team py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-5">Our Team</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Team Member" 
                    className="rounded-circle mb-3" 
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                  />
                  <h3 className="h5 fw-bold">John Smith</h3>
                  <p className="text-muted">CEO & Founder</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="Team Member" 
                    className="rounded-circle mb-3" 
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                  />
                  <h3 className="h5 fw-bold">Sarah Johnson</h3>
                  <p className="text-muted">Operations Director</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <img 
                    src="https://randomuser.me/api/portraits/men/67.jpg" 
                    alt="Team Member" 
                    className="rounded-circle mb-3" 
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                  />
                  <h3 className="h5 fw-bold">Michael Brown</h3>
                  <p className="text-muted">Customer Experience Lead</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  )
}
