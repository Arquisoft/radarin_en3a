import React, {useEffect} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/simple_logo.png';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { HashRouter} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../css/Navigation.css';
import NavAuthenticated from './/NavAuthenticated';
import { handleIncomingRedirect, login, fetch, getDefaultSession } from '@inrupt/solid-client-authn-browser'

import {
    useSession,
    CombinedDataProvider
} from '@inrupt/solid-ui-react';

import { useState } from 'react';
import Button from "react-bootstrap/Button";
import WelcomeNoAuth from "../welcome/WelcomeNoAuth";

function Navigation () {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const REDIRECT_URL = window.location;
    const [webId, setWebId] = useState(getDefaultSession().info.webId);
    const [issuer, setIssuer] = useState("");
    const [resource, setResource] = useState(webId);
    const [data, setData] = useState(null);

    useEffect(() => {
        handleIncomingRedirect({
            restorePreviousSession: true,
        }).then((info) => {
            setWebId(info.webId);
            setResource(webId);
        });
    }, [webId]);

    const handleLogin = (e) => {
        e.preventDefault();
        login({
            redirectUrl: REDIRECT_URL,
            oidcIssuer: issuer,
            clientName: "Radarin app",
        });
    };

    const handleFetch = (e) => {
        e.preventDefault();
        fetch(resource)
            .then((response) => response.text())
            .then(setData);
    };

    const { session } = useSession();
    const [oidcIssuer, setOidcIssuer] = useState("");
    const handleChange = (event) => {
        setOidcIssuer(event.target.value);
    };

    return(<HashRouter basename="/">
        <div>
                {session.info.isLoggedIn ? (
                    <NavAuthenticated/>
                ) :
                    (
                        <div>
            <Navbar className="navbar-main" collapseOnSelect navbar="dark" bg="primary" expand="lg" fixed="top">
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
                                <div className="log-in-panel">
                                        <p>{webId ? `Logged in as ${webId}` : ""}</p>
                                        <div>
                                            <form>
                                                <input
                                                    placeholder="Enter your POD URL here"
                                                    type="text"
                                                    value={issuer}
                                                    onChange={(e) => {
                                                        setIssuer(e.target.value);
                                                    }}
                                                />
                                                <Button className="log-in-btn" onClick={(e) => handleLogin(e)}>Log In</Button>
                                            </form>
                                        </div>
                                </div>
                            </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
                            <WelcomeNoAuth/>
                        </div>)}
                    </div>
    </HashRouter>)
}

export default Navigation;