import React from 'react';
import { Navbar, Nav, Button, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function NaviBar() {
    return(
    <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Navbar.Brand href="/About"><h1>SiteForMisLabs</h1></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link><Link to="/"><div class ="color">Главная</div></Link></Nav.Link>
      <NavDropdown title="Разделы" id="dropdown-basic">
        <NavDropdown.Item href="/Page1">Компьютерная безопасность</NavDropdown.Item>
        <NavDropdown.Item href="/Page2">Информационная безопасность</NavDropdown.Item>
        <NavDropdown.Item href="/Page3">Вирусы и противодействие им</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    </>
    );
}