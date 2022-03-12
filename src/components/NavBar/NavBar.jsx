// import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'

function NavBar() {
  return (

    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">La Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Tienda</Nav.Link>
            <NavDropdown title="Tienda" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Remeras</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Camisas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Camperas
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Carrito
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
   </Navbar>


  )
}

export default NavBar