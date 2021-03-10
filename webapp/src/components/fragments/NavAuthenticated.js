import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../logo.svg';
import { LogoutButton } from '@solid/react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Welcome from '../Welcome';
import '../../css/Navigation.css';

class NavAuthenticated extends React.Component {
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
                        <Nav.Link  id="profile-nav-link" className="mt-1 mr-2" href="#/profile">Profile</Nav.Link>
                        <LogoutButton className="log-out-btn"/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
            <div id="container" style={{ backgroundColor: "black"}}>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/profile" component={Welcome} />
                <Redirect path="/" exact to="/" />
            </div>
        </HashRouter>
    }
}

// We can add a logo of Radarin in the Brand and also use a img instead of text
export default NavAuthenticated;