import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../simple_logo.png';
import { AuthButton } from '@solid/react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import InitialWelcome from '../InitialWelcome';
import SignUp from '../SignUp';
import '../../css/Navigation.css';

function Navigation () {
        const { t, i18n } = useTranslation();
        const changeLanguage = (lng) => {
            i18n.changeLanguage(lng);
        };

        return(<HashRouter basename="/">
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
                    <DropdownButton id="dropdown-item-button" style={{margin: "16px"}} variant="secondary" title={t('navBarLanguage')}>
                        <Dropdown.Item as="button" onClick={() => changeLanguage('en')}>{t('navBarLanguageEn')}</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => changeLanguage('es')}>{t('navBarLanguageEs')}</Dropdown.Item>
                    </DropdownButton>
                    <Nav className="mr-auto">
                        <Nav.Link   href="https://github.com/Arquisoft/radarin_en3a" target="_blank">{t('navBarAbout')}</Nav.Link>
                        <Nav.Link  id="register-nav-link" className="mt-1 mr-2" href="#/register">{t('navBarSignUp')}</Nav.Link>
                        <AuthButton className="btn btn-outline-dark" popup="https://solidcommunity.net/common/popup.html" login={t('navBarLogIn')}  logout={t('navBarLogOut')} />
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
            <div id="container">
                <Route exact path="/register" component={SignUp} />
                <Route exact path="/" component={InitialWelcome} />
                <Redirect path="/" exact to="/" />
            </div>
        </HashRouter>)
}

// We can add a logo of Radarin in the Brand and also use a img instead of text
export default Navigation;