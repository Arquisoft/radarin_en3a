import React, {useEffect, useState} from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/simple_logo.png";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { HashRouter, Redirect, Route} from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../css/Navigation.css";
import NavAuthenticated from ".//NavAuthenticated";
import { handleIncomingRedirect, login, getDefaultSession } from "@inrupt/solid-client-authn-browser";

import {useSession} from "@inrupt/solid-ui-react";

import Button from "react-bootstrap/Button";
import WelcomeNoAuth from "../welcome/WelcomeNoAuth";
import SignUp from "../SignUp";
import Help from "../help/Help.js";


function Navigation () {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const REDIRECT_URL = window.location;
    let userUrl = "";
    const [webId, setWebId] = useState(getDefaultSession().info.webId);
    const [issuer, setIssuer] = useState("");

    let [currentIssuerText, setIssuerText] = useState(t("navBarService"));
    const { session } = useSession();

    /*
        Function used to set the webId based on the current user logged in
     */
    useEffect(() => {
        handleIncomingRedirect({
            restorePreviousSession: true,
        }).then((info) => {                        
            setWebId(info.webId);
        });
    }, [webId]); // eslint-disable-line react-hooks/exhaustive-deps


    /*
        Function to facilitate login by completing the POD url based on the username given, used later on
        for redirection purposes. In this case it autocompletes the string in order to fit the
        SolidCommunity URL format for login
     */
    const autoCompleteSolidLogin = (name) => {
        setIssuerText("Solid");
        let start="https://";
        let uid = start.concat("",name);
        let end = uid.concat("",".solidcommunity.net");
        userUrl = end;
    };

    /*
        Function to facilitate login by completing the POD url based on the username given, used later on
        for redirection purposes. In this case it autocompletes the string in order to fit the
        Inrupt URL format for login
     */
    const autoCompleteInruptLogin = (name) => {
        setIssuerText("Inrupt");
        let start="https://";
        let uid = start.concat("",name);
        let end = uid.concat("",".inrupt.net");
        userUrl = end;
    };


    /*
        Function that performs the login into the Solid POD by taking the url, redirecting to the issuer's page and,
        in the case of a successful login, redirecting back to the page with the user logged in
     */
    const handleLogin = (e) => {
        if(!userUrl.startsWith("https://")){
            if(currentIssuerText === "Inrupt"){
                autoCompleteInruptLogin(issuer);
            }else{
                autoCompleteSolidLogin(issuer);
            }
        }else{
            userUrl = issuer;
        }
        e.preventDefault();
        login({
            redirectUrl: REDIRECT_URL,
            oidcIssuer: userUrl,
            clientName: "Radarin app",
        });
    };



    /*
        Component containing the navbar for non-authenticated users, including routes for signup, the main welcome
        component, the about us navLink and the login component
     */
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

                                <DropdownButton id="dropdown-item-button" style={{margin: "16px"}} variant="secondary" title={t("navBarLanguage")}>
                                    <Dropdown.Item as="button" onClick={() => changeLanguage("en")}>{t("navBarLanguageEn")}</Dropdown.Item>
                                    <Dropdown.Item as="button" onClick={() => changeLanguage("es")}>{t("navBarLanguageEs")}</Dropdown.Item>
                                </DropdownButton>
                                <Nav className="mr-auto">
                                    <Nav.Link  className="mt-1 mr-2" href="https://github.com/Arquisoft/radarin_en3a">{t("navBarAbout")}</Nav.Link>
                                    <Nav.Link  className="mt-1 mr-2" href="#/register">{t("navBarSignUp")}</Nav.Link>
                                    <DropdownButton id="dropdown-service-button" style={{margin: "16px"}} variant="secondary" title={currentIssuerText}>
                                        <Dropdown.Item as="button" onClick={() => autoCompleteSolidLogin(issuer)}>{t("navBarSolid")}</Dropdown.Item>
                                        <Dropdown.Item as="button" onClick={() => autoCompleteInruptLogin(issuer)}>{t("navBarInrupt")}</Dropdown.Item>
                                    </DropdownButton>
                                    <div>
                                        <div className="log-in-panel">
                                            <p>{webId ? `Logged in as ${webId}` : ""}</p>
                                            <div>
                                                <form>
                                                    <input
                                                        name="userName"
                                                        placeholder={t("LogInPlaceholder")}
                                                        type="text"
                                                        value={issuer}
                                                        onChange={(e) => {
                                                            setIssuer(e.target.value);
                                                        }}
                                                    />

                                                    <Button className="log-in-btn" onClick={(e) => handleLogin(e)}>{t("navBarLogIn")}</Button>

                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    <Nav.Link  className="mt-1 mr-2" href="#/help">{t("navBarHelp")}</Nav.Link> 

                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <Route exact path="/" component={WelcomeNoAuth} />
                        <Route exact path="/register" component={SignUp} />

                        <Route exact path="/help" component={Help} />
                        <Redirect path="/" exact to="/" />
                    </div>)}

        </div>
    </HashRouter>);
}

export default Navigation;
