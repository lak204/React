import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import Badge from 'react-bootstrap/Badge';

const NavigationBar = ({ totalItemsInCart, handleShowCart }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Pizza House</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About us</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex align-items-center">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="danger" type="submit">
              <i className='fa fa-search'></i>
            </Button>
            {/* Nút Giỏ Hàng */}
            <Button variant="outline-light" onClick={handleShowCart} className="ms-2 position-relative">
              <FaShoppingCart />
              <Badge bg="secondary" className="position-absolute top-0 start-100 translate-middle">
                {totalItemsInCart}
              </Badge>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;