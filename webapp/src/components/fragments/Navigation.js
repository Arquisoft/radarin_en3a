import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../simple_logo.png';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { HashRouter} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../css/Navigation.css';
import NavAuthenticated from '../../components/fragments/NavAuthenticated';


import {
    LoginButton,
    LogoutButton,
    Text,
    useSession,
    CombinedDataProvider
} from '@inrupt/solid-ui-react';

import { useState } from 'react';

function Navigation () {
        const { t, i18n } = useTranslation();
        const changeLanguage = (lng) => {
            i18n.changeLanguage(lng);
        };

    const authOptions = {
        clientName: "Radarin web app"
    };

    const { session } = useSession();
    const [oidcIssuer, setOidcIssuer] = useState("");
    const handleChange = (event) => {
        setOidcIssuer(event.target.value);
    };
    //<AuthButton className="btn btn-outline-dark" popup="https://solidcommunity.net/common/popup.html" login={t('navBarLogIn')}  logout={t('navBarLogOut')} />

    return(<HashRouter basename="/">
        <div>
                {session.info.isLoggedIn ? (
                    <NavAuthenticated/>
                ) :
                    (
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
                            <div>
                               <div>
                                   <Nav.Link   href="https://github.com/Arquisoft/radarin_en3a" target="_blank">{t('navBarAbout')}</Nav.Link>
                                   <Nav.Link  id="register-nav-link" className="mt-1 mr-2" href="#/register">{t('navBarSignUp')}</Nav.Link>
                                   <span>
                            Inicia Sesión con:
                    <input
                        className="oidc-issuer-input"
                        type="text"
                        name="oidcIssuer"
                        list="providers"
                        value={oidcIssuer}
                        onChange={handleChange}
                    />
                    <datalist id="providers">
                        <option value="https://solidcommunity.net/" />
                        <option value="https://inrupt.net/" />
                    </datalist>
                    </span>
                                            <LoginButton
                                                oidcIssuer={oidcIssuer}
                                                redirectUrl={window.location.href}
                                                authOptions={authOptions}
                                            />
                                        </div>

                            </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>)}
                    </div>
    </HashRouter>)
}

export default Navigation;