import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../simple_logo.png';
import { LogoutButton } from '@solid/react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation } from 'react-i18next';
import Welcome from '../Welcome';
import '../../css/Navigation.css';
import 'leaflet/dist/leaflet.css';
import MapView from "../MapView";
import "../../css/MapView.css";

function NavAuthenticated(){
        const { t, i18n } = useTranslation();
        const changeLanguage = (lng) => {
            i18n.changeLanguage(lng);
        };
        return (<HashRouter basename="/">
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
                        <Nav.Link  id="profile-nav-link" className="mt-1 mr-2" href="#/profile">{t('navBarProfile')}</Nav.Link>
                        <Nav.Link  className="mt-1 mr-2" href="#/map">{t('navBarMap')}</Nav.Link>
                        <DropdownButton style={{ margin: "16px" }} id="dropdown-item-button" variant="secondary" title={t('navBarLanguage')}>
                            <Dropdown.Item as="button" onClick={() => changeLanguage('en')}>{t('navBarLanguageEn')}</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={() => changeLanguage('es')}>{t('navBarLanguageEs')}</Dropdown.Item>
                        </DropdownButton>
                        <LogoutButton className="log-out-btn"/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
            <div id="container" style={{ backgroundColor: "black"}}>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/profile" component={Welcome} />
                <Route exact path="/map" component={MapView} />
                <Redirect path="/" exact to="/" />
            </div>
        </HashRouter>)
}

export default NavAuthenticated;