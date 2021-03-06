import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Navigation extends React.Component {
    render(){
        return <Navbar collapseOnSelect bg="dark" expand="lg">
        <Navbar.Brand href="#home">Radarin</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link  to="/" >Home</Nav.Link>
                <Nav.Link  to="/about" >About us</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar> 
    }
}
export default Navigation;