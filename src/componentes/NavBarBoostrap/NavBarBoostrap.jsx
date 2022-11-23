// Descargamos la libreria de boostrap para react.(npm install react-bootstrap bootstrap)

// Copiamos de boostrap el Navbar y empezamos a Importar los componentes 

import React from "react";
import "./NavBarBoostrap.css"
import {Container, Nav, Navbar} from "react-bootstrap";

const Menu=()=>{
  return(
    <header>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">NavBarBoostrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="./Contacto">Contacto</Nav.Link>
            <Nav.Link href="/">Home</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>  

    </header>
  )
}

export default Menu;

 