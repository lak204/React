import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const BookingForm = () => {
  return (
    <Container>
      <Row>
        <h2 className="text-center">Book your Table</h2>
        <Form>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formName">
                <Form.Control type="text" placeholder="Your name *" aria-label="Your name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formEmail">
                <Form.Control type="email" placeholder="Your email *" aria-label="Your email" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formService">
                <Form.Select aria-label="Select a service">
                  <option>Select a service</option>
                  <option value="1">Service 1</option>
                  <option value="2">Service 2</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formComments">
                <Form.Control as="textarea" rows={5} placeholder="Please write your comment" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Button variant="warning" type="submit">
                Send Message
              </Button>
            </Col>
          </Row>
        </Form>
      </Row>
    </Container>
  );
};

export default BookingForm;
