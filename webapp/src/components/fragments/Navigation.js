import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../simple_logo.png';
import { AuthButton } from '@solid/react';
import { HashRouter, Route } from 'react-router-dom';
import InitialWelcome from '../InitialWelcome';
import SignUp from '../SignUp';
import '../../css/Navigation.css';


class Navigation extends React.Component {
    render(){
        return <HashRouter basename="/">
            <Navbar collapseOnSelect navbar="dark" bg="primary" expand="lg" fixed="top">
                <Navbar.Brand href="#">
                    <img
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        alt="Radarin logo"
                    />
                    <p className="radarin-title">Radarin</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link   href="https://github.com/Arquisoft/radarin_en3a" target="_blank">About us</Nav.Link>
                        <Nav.Link  activeClassName="active-nav-link"  activeStyle={{ color: 'red !important' }}id="register-nav-link" className="mt-1 mr-2" href="#/register">Register</Nav.Link>
                        <AuthButton className="btn btn-outline-dark" popup="https://solidcommunity.net/common/popup.html" login="Log In" logout="Log Out" />
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
            <div id="container" style={{ backgroundColor: "black"}}>
                <Route exact path="/register" component={SignUp} />
                <Route exact path="/" component={InitialWelcome} />
            </div>
        </HashRouter>
    }
}

// We can add a logo of Radarin in the Brand and also use a img instead of text
export default Navigation;