import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Badge, Image } from 'react-bootstrap';
import './AgriMartAdminNavBar.css';
import logo from '../../resources/images/logo.png'
function AgriMartAdminNavBar() {
    return (
        <Navbar class="nav-styles" collapseOnSelect fixed="top" expand="sm" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">
                <Image src={logo} height={70} width={70} />
                 Agri Mart   </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                     <Nav.Link href='/portal'>Admin Portal</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AgriMartAdminNavBar;