import React, { Component } from "react";
import  'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap';


function NavBar(){
 return(
 <div>
<Navbar bg="light" expand="lg" >
  <Container >
    <Navbar.Brand href="/">Agri Mart</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        {/* <Nav.Link href="/">Home</Nav.Link> */}
        {/* <Nav.Link href="/pending">Pending Orders</Nav.Link>
        <Nav.Link href="/confirmed">Confirmed Orders</Nav.Link> */}
        <Nav.Link href="/">Customer View</Nav.Link>
        <Nav.Link href="/delivery">Delivery Portal</Nav.Link>
        <Nav.Link href="/charts">Charts</Nav.Link>
        {/* <Nav.Link href="/update">Update</Nav.Link> */}
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
 </div>
 
 );
}
export default NavBar;