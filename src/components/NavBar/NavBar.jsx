// import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from '../CartWidget/CartWidget'


function NavBar ({children} ) {
  console.log(children)
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Electroworld</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#staff">Cámaras y Accesorios</Nav.Link>
              <Nav.Link href="#contacto">Smartphone</Nav.Link>
              <Nav.Link href="#contacto">Smartwach</Nav.Link>
              <Nav.Link href="#contacto">Computacion</Nav.Link>
              <Nav.Link href="#contacto">Electrónica</Nav.Link>
              <Nav.Link href="#contacto">Audio</Nav.Link>
              <Nav.Link href="#contacto">Video</Nav.Link>
            </Nav>
            <Nav>
              {/* iconos */}
              <CartWidget />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      { children }
    </>

  )
}

export default NavBar