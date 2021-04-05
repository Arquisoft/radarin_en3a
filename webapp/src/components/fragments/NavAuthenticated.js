import React, {useState} from 'react';
import { Route, Redirect } from 'react-router-dom';
import MapView from "../MapView";
import LocationsView from "../locations/LocationsView";
import Welcome from '../Welcome';
import FriendsView from "../friends/FriendsView";
import '../../css/Navigation.css';
import 'leaflet/dist/leaflet.css';
import "../../css/MapView.css";
import logo from "../../simple_logo.png";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import {getDefaultSession, logout} from "@inrupt/solid-client-authn-browser";
import { useTranslation } from 'react-i18next';
import {CombinedDataProvider, Text, useSession} from "@inrupt/solid-ui-react";

function NavAuthenticated(){

    const { session } = useSession();
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const [data, setData] = useState(null);
    const [webId, setWebId] = useState(getDefaultSession().info.webId);
    const [resource, setResource] = useState(webId);

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        setWebId(undefined);
        setData("");
        setResource("");
        window.location.reload();
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
                    <Nav.Link  className="mt-1 mr-2" href="#/friends">{t('navBarFriends')}</Nav.Link>
                    <Button className="log-out-btn" onClick={(e) => handleLogout(e)}>Log Out</Button>
                </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <CombinedDataProvider
                    datasetUrl={session.info.webId}
                    thingUrl={session.info.webId}
                >
                <div>
                    <div className="logged-in-msg-panel">
                        <span>Sesión iniciada como: </span>
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
                        <Route exact path="/friends" component={FriendsView}/>
                        <Redirect path="/" exact to="/profile" />
                    </div>
                </div>
            </CombinedDataProvider>
    </div>
        )}

export default NavAuthenticated;