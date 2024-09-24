import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Col, Container, Form, Row, Navbar, Nav, Button, Carousel, Card } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
function App() {
  return (
    <>
      <Container className='bg-dark' fluid>
        <Row>
          <Col>
            <Container>
              <Row>
                <Col>
                  <Navbar expand="lg" className="bg-dark navbar-dark">
                    <Container fluid>
                      <Navbar.Brand href="#">Pizza House</Navbar.Brand>
                      <Navbar.Toggle aria-controls="navbarScroll" />
                      <Navbar.Collapse id="navbarScroll">
                        <Nav
                          className="me-auto my-2 my-lg-0"
                          style={{ maxHeight: '100px' }}
                          navbarScroll
                        >
                          <Nav.Link href="#home">Home</Nav.Link>
                          <Nav.Link href="#about-us">About Us</Nav.Link>
                          <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                          <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                          />
                          <Button variant="danger"><SearchIcon/> </Button>
                        </Form>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>

        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/Images/pizza1.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/Images/pizza1.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/Images/pizza1.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col>
            <Container className='text-white'>
              <Row>
                <Col>
                  <h2>Our Menu</h2>
                  <Row>
                    <Col> 
                      <Card> 
                        <Card.Img variant="top" src="/Images/menu1.jpg" />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                          </Card.Text>
                          <Button variant="dark" className='form-control'>Buy</Button>
                        </Card.Body>
                      </Card>
                    </Col> 
                    <Col> 
                      <Card> 
                        <Card.Img variant="top" src="/Images/menu2.jpg" />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                          </Card.Text>
                          <Button variant="dark" className='form-control'>Buy</Button>
                        </Card.Body>
                      </Card>
                    </Col> 
                    <Col> 
                      <Card> 
                        <Card.Img variant="top" src="/Images/menu3.jpg" />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                          </Card.Text>
                          <Button variant="dark" className='form-control'>Buy</Button>
                        </Card.Body>
                      </Card>
                    </Col> 
                    <Col> 
                      <Card> 
                        <Card.Img variant="top" src="/Images/menu4.jpg" />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                          </Card.Text>
                          <Button variant="dark" className='form-control'>Buy</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>   
                  <Row className='mt-5 mb-5'>
                    <Col>
                      <h2 className='text-center text-white'>Book Your Table</h2>
                      <Form>
                        <Form.Group className="mb-3">
                          <Row>
                            <Col sm="4">
                              <Form.Control type="text" placeholder="Your Name*" />
                            </Col>
                            <Col sm="4">
                              <Form.Control type="email" placeholder="Your Email *" />
                            </Col>
                            <Col sm="4">
                              <Form.Select aria-label="Default select example">
                                <option>Select a Service...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </Col>
                          </Row>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                          <Form.Control as="textarea" rows={3} placeholder="Please write your comment..." />
                        </Form.Group>
                        <Button variant="warning" type="submit">Send messenge</Button>
                      </Form>
                    </Col>
                  </Row>
                </Col>                          
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
