import React, { Component } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, MenuItem ,Container} from 'react-bootstrap';
const Topbar = () => {
  return (
    <div>
        <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

    </div>
  )
}

export default Topbar