// import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'

function NavBar() {
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Shop React</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#staff">Staff</Nav.Link>
            <Nav.Link href="#contacto">Contact</Nav.Link>
            <NavDropdown title="Category" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Category 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Category 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Category 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Other category</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#acount"> <img className='w-50' src="https://i.ibb.co/xJyXwD2/user.png" alt="user" border="0"></img>  </Nav.Link>
            <Nav.Link href="#shop"> <img className='w-50' src="https://i.ibb.co/XVZZJ2d/shopping-cart.png" alt="shopping-cart" border="0"></img>  </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavBar