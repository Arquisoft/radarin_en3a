import React, {useState} from 'react';
import {Link, LogoutButton} from '@solid/react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Welcome from '../Welcome';
import '../../css/Navigation.css';
import 'leaflet/dist/leaflet.css';
import MapView from "../MapView";
import "../../css/MapView.css";
import {CombinedDataProvider, Text, useSession} from "@inrupt/solid-ui-react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import { useTranslation } from 'react-i18next';
import Navbar from "react-bootstrap/Navbar";
import logo from "../../simple_logo.png";
import LocationsView from "../LocationsView";
import Button from "react-bootstrap/Button";
import {onLogout} from "@inrupt/solid-client-authn-browser";

function NavAuthenticated(){

        const { session } = useSession();
        const { t, i18n } = useTranslation();
        const changeLanguage = (lng) => {
            i18n.changeLanguage(lng);
        };

        return (
            <div>
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
                    <Nav.Link  id="profile-nav-link" className="mt-1 mr-2" href="#/profile">{t('navBarProfile')}</Nav.Link>
                    <Nav.Link  className="mt-1 mr-2" href="#/map">{t('navBarMap')}</Nav.Link>
                    <Nav.Link  className="mt-1 mr-2" href="#/locations">{t('navBarLocations')}</Nav.Link>
                    <LogoutButton />
                </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <CombinedDataProvider
                    datasetUrl={session.info.webId}
                    thingUrl={session.info.webId}
                >
                <div>
                    <div className="logged-in-msg-panel">
                        <span>Iniciaste sesión como: </span>
                        <Text
                            properties={[
                                "http://www.w3.org/2006/vcard/ns#fn",
                                "http://xmlns.com/foaf/0.1/name",]}
                        />
                    </div>
                    <div id="container" style={{ backgroundColor: "black"}}>
                        <Route exact path="/profile" component={Welcome}/>
                        <Route exact path="/map" component={MapView}/>
                        <Route exact path="/locations" component={LocationsView}/>
                        <Redirect path="/" exact to="/" />
                    </div>
                </div>
            </CombinedDataProvider>
    </div>
        )}

export default NavAuthenticated;