import React from 'react'
import './Contact.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className="contact-page">
      <Header />
      
      <section className="contact-hero py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
              <p className="lead">Get in touch with us for any questions or support</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="contact-content py-5">
        <Container>
          <Row className="g-4">
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h2 className="fw-bold mb-4">Get in Touch</h2>
                  <p className="lead mb-4">We&apos;re here to help and answer any questions you might have. We look forward to hearing from you.</p>
                  
                  <div className="contact-details">
                    <div className="contact-item mb-4">
                      <FaPhone className="contact-icon" />
                      <div>
                        <h3 className="h5 fw-bold">Phone</h3>
                        <p className="mb-0">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="contact-item mb-4">
                      <FaEnvelope className="contact-icon" />
                      <div>
                        <h3 className="h5 fw-bold">Email</h3>
                        <p className="mb-0">info@flightbooking.com</p>
                      </div>
                    </div>
                    
                    <div className="contact-item mb-4">
                      <FaMapMarkerAlt className="contact-icon" />
                      <div>
                        <h3 className="h5 fw-bold">Address</h3>
                        <p className="mb-0">123 Aviation Street, New York, NY 10001</p>
                      </div>
                    </div>
                    
                    <div className="contact-item">
                      <FaClock className="contact-icon" />
                      <div>
                        <h3 className="h5 fw-bold">Working Hours</h3>
                        <p className="mb-0">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="mb-0">Saturday: 10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h2 className="fw-bold mb-4">Send us a Message</h2>
                  <Form>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group controlId="formName">
                          <Form.Label className="fw-medium">Your Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter your name" className="py-2" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="formEmail">
                          <Form.Label className="fw-medium">Email Address</Form.Label>
                          <Form.Control type="email" placeholder="Enter your email" className="py-2" />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Form.Group className="mt-3" controlId="formSubject">
                      <Form.Label className="fw-medium">Subject</Form.Label>
                      <Form.Control type="text" placeholder="Enter subject" className="py-2" />
                    </Form.Group>
                    
                    <Form.Group className="mt-3" controlId="formMessage">
                      <Form.Label className="fw-medium">Message</Form.Label>
                      <Form.Control as="textarea" rows={5} placeholder="Enter your message" className="py-2" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" className="w-100 mt-4 py-2">
                      Send Message
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="map-section py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-5">Our Location</h2>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215682012345!2d-73.9878448!3d40.7484405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              ></iframe>
            </Card.Body>
          </Card>
        </Container>
      </section>

      <Footer />
    </div>
  )
}
