import React from 'react';
import { Nav, Navbar, NavDropdown, Button, Badge } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <div className="container-fluid">
        <Navbar.Brand href="#">JPshoes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">inicio</Nav.Link>
            <Nav.Link href="#features">catalogo</Nav.Link>
            <Nav.Link href="#pricing">contacto</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="link" className="text-white">
              <i className="fas fa-shopping-cart"></i>
              <Badge variant="danger">7</Badge>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default CustomNavbar;



