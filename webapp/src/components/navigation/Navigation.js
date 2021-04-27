import React, {useEffect, useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/simple_logo.png';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { HashRouter, Redirect, Route} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../css/Navigation.css';
import NavAuthenticated from './/NavAuthenticated';
import { handleIncomingRedirect, login, getDefaultSession } from '@inrupt/solid-client-authn-browser'

import {
    useSession
} from '@inrupt/solid-ui-react';

import Button from "react-bootstrap/Button";
import WelcomeNoAuth from "../welcome/WelcomeNoAuth";
import SignUp from '../SignUp';

function Navigation () {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const REDIRECT_URL = window.location;
    let user_url = "";
    const [webId, setWebId] = useState(getDefaultSession().info.webId);
    const [issuer, setIssuer] = useState("");


    useEffect(() => {
        handleIncomingRedirect({
            restorePreviousSession: true,
        }).then((info) => {
            setWebId(info.webId);
        });
    }, [webId]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleLogin = (e) => {
        if(!user_url.startsWith("http://"))
            autoCompleteSolidLogin(issuer);
        e.preventDefault();
        login({
            redirectUrl: REDIRECT_URL,
            oidcIssuer: user_url,
            clientName: "Radarin app",
        });
    };

    const autoCompleteSolidLogin = (name) => {
        let start="https://";
        let uid = start.concat('',name);
        let end = uid.concat('',".solidcommunity.net");
        user_url = end;
    }

    const autoCompleteInruptLogin = (name) => {
        let start="https://";
        let uid = start.concat('',name);
        let end = uid.concat('',".inrupt.net");
        user_url = end;
    }


    const { session } = useSession();


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
                                    <Nav.Link  className="mt-1 mr-2" href="https://github.com/Arquisoft/radarin_en3a">{t('navBarAbout')}</Nav.Link>
                                    <Nav.Link  className="mt-1 mr-2" href="#/register">{t('navBarSignUp')}</Nav.Link>
                                    <DropdownButton id="dropdown-service-button" style={{margin: "16px"}} variant="secondary" title={t('navBarService')}>
                                        <Dropdown.Item as="button" onClick={() => autoCompleteSolidLogin(issuer)}>{t('navBarSolid')}</Dropdown.Item>
                                        <Dropdown.Item as="button" onClick={() => autoCompleteInruptLogin(issuer)}>{t('navBarInrupt')}</Dropdown.Item>
                                    </DropdownButton>
                                    <div>
                                        <div className="log-in-panel">
                                            <p>{webId ? `Logged in as ${webId}` : ""}</p>
                                            <div>
                                                <form>
                                                    <input
                                                        placeholder={t("LogInPlaceholder")}
                                                        type="text"
                                                        value={issuer}
                                                        onChange={(e) => {
                                                            setIssuer(e.target.value);
                                                        }}
                                                    />
                                                    <Button className="log-in-btn" onClick={(e) => handleLogin(e)}>{t('navBarLogIn')}</Button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <Route exact path="/" component={WelcomeNoAuth} />
                        <Route exact path="/register" component={SignUp} />
                        <Redirect path="/" exact to="/" />
                    </div>)}
        </div>
    </HashRouter>)
}

export default Navigation;