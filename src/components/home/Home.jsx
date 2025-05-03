import React from 'react'
import './Home.css'
import Header from '../header/Header'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faMessage, faEye } from '@fortawesome/free-solid-svg-icons'
import search from '../../assets/search.png'
import plane from '../../assets/plane.png'
import headphone from '../../assets/headphone-mic.png'
import atmCard from '../../assets/atm-card.png'
import home1 from '../../assets/home1.jpg'
import home2 from '../../assets/home2.jpg'
import home3 from '../../assets/home3.jpg'
import home4 from '../../assets/home4.jpg'
import home5 from '../../assets/home5.jpg'
import home6 from '../../assets/home6.jpg'
import home8 from '../../assets/home8.jpg'
import home9 from '../../assets/home9.jpg'
import home10 from '../../assets/home10.jpg'
import home11 from '../../assets/home11.jpg'
import Footer from '../footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div>
     <Header/>
      <section className='home py-5'>
        <div className="container">
          <div className="row ">
            <div className="col-md-6 ">
              <h1>The Sky is Waiting for You</h1>
              <p>With CheapFlights, you can easily book any ticket you need to travel safely thanks to our detailed system of searching and booking airline tickets.</p>
              <button className='btn btn-primary '>Read More</button>
            </div>
            <div className="col-md-6 ">
              <div className="row">
              <div >
                    <div className="col-md-12 bg-transparent opacity-100">
                      <h1 className='text-center text-white'>Book Your Flight</h1>
                    </div>
                  </div>
                <form action="" className='form form-background' >
                  <div className="row py-2">
                    <div className="col-md-6">
                      <label htmlFor="from">From</label>
                      <input type="text" className='form-control' id='from' placeholder='From'/>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="to">To</label>
                      <input type="text" className='form-control' id='to' placeholder='To'/>
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-md-6">
                      <label htmlFor="depart">Depart</label>
                      <input type="date" className='form-control' id='depart' placeholder='Depart'/>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="return">Return</label>
                      <input type="date" className='form-control' id='return' placeholder='Return'/>
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-md-6">
                      <label htmlFor="Cabin class">Cabin Class
                        <select className='form-select cabin-class' id='Class'>
                          <option value="Economy">Economy</option>
                          <option value="Business">Business</option>
                          <option value="First Class">First Class</option>
                        </select>
                      </label>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-6">
                          <label htmlFor="adult">Adult</label>
                          <input type="number" className='form-control' id='adult' placeholder='Adult'/>
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="child">Child</label>
                          <input type="number" className='form-control' id='child' placeholder='Child'/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-md-12">
                      <Link to="/flights" className="btn btn-warning w-100">
                        Search Flights
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className='my-5 py-5 home2'>
          <div className="container">
            <div className="row">
              <div className="col-md-3 ">
              <Card style={{ width: '18rem',border:'none' }}>
                <Card.Img variant="top" src={search} className='w-50 mx-auto py-2' />
                <Card.Body>
                  <Card.Title>The World's Travel Search Engine</Card.Title>
                  <Card.Text>
                  You can use our search engine to find any flight you want and select a desired destination and price
                  </Card.Text>
                  
                </Card.Body>
              </Card>
              </div>
              <div className="col-md-3 ">
                <Card style={{ width: '18rem',border:'none' }}>
                  <Card.Img variant="top" src={plane} className='w-50 mx-auto py-2'/>
                  <Card.Body>
                    <Card.Title>Cheap and Beneficial Air Tickets</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-3 ">
                <Card style={{ width: '18rem',border:'none' }}>
                  <Card.Img variant="top" src={headphone} className='w-50 mx-auto py-2'/>
                  <Card.Body>
                    <Card.Title>Our Support Lines are Open 24/7</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                   
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-3 ">
                <Card style={{ width: '18rem',border:'none' }}>
                  <Card.Img variant="top" src={atmCard} className='w-50 mx-auto py-2'/>
                  <Card.Body>
                    <Card.Title>Convenient Payment Method For You</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    
                  </Card.Body>
                </Card>
              </div>

            </div>
          </div>
      </section>

      <section className=' py-5 home3'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className='border-bottom text-center py-2'>Cheap Airline Tickets</h1>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-md-4 col-sm-12 cheap">
              <div className="row">
                <div className="col-md-6">
                  <img src={home1} alt="" className='w-100 h-100' />
                </div>
                <div className="col-md-6">
                  <div className='mb-4'>
                  <h3>Venice</h3>
                  <p>Italy</p>
                  </div>
                  <div className='py-4'>
                    <h6>Departure City:</h6>
                    <h5><span style={{color:'green'}}>Seattle </span> <sup style={{fontSize:'10px'}}>From</sup> $98</h5>
                    <h5><span style={{color:'green'}}>Seattle </span> <sup style={{fontSize:'10px'}}>From</sup> $98</h5>
                    <h5><span style={{color:'green'}}>Seattle </span> <sup style={{fontSize:'10px'}}>From</sup> $98</h5>
                    <h5><span style={{color:'green'}}>Seattle </span> <sup style={{fontSize:'10px'}}>From</sup> $98</h5>
                    <h5><span style={{color:'green'}}>Seattle </span> <sup style={{fontSize:'10px'}}>From</sup> $98</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 cheap">
              <div className="row">
                <div className="col-md-6">
                  <img src={home2} alt="" className='w-100 h-100' />
                </div>
                <div className="col-md-6">
                  <div className='mb-4'>
                  <h3>Venice</h3>
                  <p>Italy</p>
                  </div>
                  <div className='py-4'>
                    <h6>Departure City:</h6>
                    <h5><span style={{color:'green'}}>Seattle </span> <sup style={{fontSize:'10px'}}>From</sup> $98</h5>
                    <h5><span style={{color:'green'}}>Seattle </span> <sup style={{fontSize:'10px'}}>From</sup> $98</h5>
                    <h5><span style={{color:'green'}}>Seattle </span> <sup style={{fontSize:'10px'}}>From</sup> $98</h5>
                    <h5><span style={{color:'green'}}>Seattle </span> <sup style={{fontSize:'10px'}}>From</sup> $98</h5>
                    <h5><span style={{color:'green'}}>Seattle </span> <sup style={{fontSize:'10px'}}>From</sup> $98</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 cheap">
              <div className="row">
                <div className="col-md-6">
                  <img src={home3} alt="" className='w-100 h-100' />
                </div>
                <div className="col-md-6">
                  <div className='mb-4'>
                  <h3>Venice</h3>
                  <p>Italy</p>
                  </div>
                  <div className='py-4'>
                    <h6>Departure City:</h6>
                    <h5><span style={{color:'green'}}>Seattle </span> <sup style={{fontSize:'10px'}}>From</sup> $98</h5>
                    <h5><span style={{color:'green'}}>Seattle </span> <sup style={{fontSize:'10px'}}>From</sup> $98</h5>
                    <h5><span style={{color:'green'}}>Seattle </span> <sup style={{fontSize:'10px'}}>From</sup> $98</h5>
                    <h5><span style={{color:'green'}}>Seattle </span> <sup style={{fontSize:'10px'}}>From</sup> $98</h5>
                    <h5><span style={{color:'green'}}>Seattle </span> <sup style={{fontSize:'10px'}}>From</sup> $98</h5>
                  </div>
                </div>
              </div>
            </div>
           

          </div>
        </div>
      </section>

      <section className='blog-section py-5'>
        <Container>
          <Row className="justify-content-center mb-5">
            <Col md={8} className="text-center">
              <h1 className="display-5 fw-bold mb-3">Latest Blog Posts</h1>
              <p className="lead text-muted">Discover travel tips, industry insights, and inspiring stories from our team</p>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm hover-card">
                <Card.Img 
                  variant="top" 
                  src={home4} 
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold mb-3">9 Ways to Become a Successful Travel Blogger</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    Travel blogging is a crowded field — and it gets more crowded day by day. And a lot of the advice that people give are actually counterintuitive to...
                  </Card.Text>
                  <div className="blog-meta mt-4 pt-3 border-top">
                    <Row className="align-items-center">
                      <Col xs={6}>
                        <div className="d-flex align-items-center">
                          <FontAwesomeIcon icon={faPenToSquare} className="text-primary me-2" />
                          <span className="small">Article</span>
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div className="d-flex justify-content-end gap-3">
                          <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faMessage} className="text-primary me-2" />
                            <span className="small">25</span>
                          </div>
                          <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faEye} className="text-primary me-2" />
                            <span className="small">616</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm hover-card">
                <Card.Img 
                  variant="top" 
                  src={home5} 
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold mb-3">Essential Travel Tips for First-Time Flyers</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    Planning your first flight? Here are essential tips to make your journey smooth and enjoyable, from packing to airport navigation...
                  </Card.Text>
                  <div className="blog-meta mt-4 pt-3 border-top">
                    <Row className="align-items-center">
                      <Col xs={6}>
                        <div className="d-flex align-items-center">
                          <FontAwesomeIcon icon={faPenToSquare} className="text-primary me-2" />
                          <span className="small">Article</span>
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div className="d-flex justify-content-end gap-3">
                          <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faMessage} className="text-primary me-2" />
                            <span className="small">18</span>
                          </div>
                          <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faEye} className="text-primary me-2" />
                            <span className="small">432</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm hover-card">
                <Card.Img 
                  variant="top" 
                  src={home6} 
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold mb-3">Top Destinations for 2024</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    Discover the most exciting travel destinations for the upcoming year, from hidden gems to popular hotspots that should be on your radar...
                  </Card.Text>
                  <div className="blog-meta mt-4 pt-3 border-top">
                    <Row className="align-items-center">
                      <Col xs={6}>
                        <div className="d-flex align-items-center">
                          <FontAwesomeIcon icon={faPenToSquare} className="text-primary me-2" />
                          <span className="small">Article</span>
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div className="d-flex justify-content-end gap-3">
                          <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faMessage} className="text-primary me-2" />
                            <span className="small">32</span>
                          </div>
                          <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faEye} className="text-primary me-2" />
                            <span className="small">789</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <h2 className="text-center mb-4" style={{color: '#239b56'}}>Popular Airlines</h2>
              <div className="row g-4 justify-content-center">
                <div className="col-md-3 popular-airlines mb-4">
                  <Card style={{ width: '18rem',border:'none',boxShadow:'0 0 10px rgba(0,0,0,0.1)'}}>
                    <Card.Img variant="top" src={home8} />
                  </Card>
                </div>
                <div className="col-md-3 popular-airlines mb-4">
                  <Card style={{ width: '18rem',border:'none',boxShadow:'0 0 10px rgba(0,0,0,0.1)'}}>
                    <Card.Img variant="top" src={home9} />
                  </Card>
                </div>
                <div className="col-md-3 popular-airlines mb-4">
                  <Card style={{ width: '18rem',border:'none',boxShadow:'0 0 10px rgba(0,0,0,0.1)'}}>
                    <Card.Img variant="top" src={home10} />
                  </Card>
                </div>
                <div className="col-md-3 popular-airlines mb-4">
                  <Card style={{ width: '18rem',border:'none',boxShadow:'0 0 10px rgba(0,0,0,0.1)'}}>
                    <Card.Img variant="top" src={home11} />
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
