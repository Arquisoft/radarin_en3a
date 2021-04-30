import React, {useState, useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import MapView from "../map/MapView";
import LocationsView from "../locations/LocationsView";
import WelcomeAuth from '../welcome/WelcomeAuth';
import FriendsView from "../friends/FriendsView";
import '../../css/Navigation.css';
import 'leaflet/dist/leaflet.css';
import "../../css/MapView.css";
import logo from "../../assets/simple_logo.png";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import {getDefaultSession, logout} from "@inrupt/solid-client-authn-browser";
import { useTranslation } from 'react-i18next';
import {CombinedDataProvider, useSession} from "@inrupt/solid-ui-react";
import ManageUsers from '../admin/ManageUsers';
import { addLocation, addUser, getUserByWebId } from '../../api/api.js';
import "react-toastify/dist/ReactToastify.css";
import { nearFriends } from "../../api/api.js";
import { toast } from "react-toastify";
import { FOAF } from "@inrupt/vocab-common-rdf";
import {
    getSolidDataset, getThing, getUrlAll,
} from "@inrupt/solid-client";
import not from "../../assets/notification.png";
import notRed from "../../assets/notification_dot.png";
import Popover from '@material-ui/core/Popover';
import UserNotification from "./UserNotification";

toast.configure();

function NavAuthenticated(){

    const { session } = useSession();
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const [role, setRole] = useState(null);
    const [webId, setWebId] = useState(getDefaultSession().info.webId);

    const [amigo, setAmigo] = useState([])
    const [notificaciones, setNotificaciones]= useState(not);

    async function getFriendsForPOD(){
        const profileDataset = await getSolidDataset(webId, { fetch: session.fetch });
        const profile = getThing(profileDataset, webId);
        let promises = new Promise((resolve, reject) => {
            resolve(getUrlAll(profile, FOAF.knows));
        });

        return promises;
    }

    async function FindNearFriends(){
        let amigos = [];
        let promises = await getFriendsForPOD().then(function(list){return list;});
        promises.forEach(friend => amigos.push(friend));
        setAmigo(amigo);
        let mensaje = await nearFriends(amigos,webId)
        if(mensaje !== "No nearby user"){
            amigo.push(mensaje);
            toast(mensaje);
            setNotificaciones(notRed);
        }
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async function (position) {
            console.log("Esto es lo que le estamos añadiendo al usuario: " + webId + " localización longitud: " + position.coords.longitude + " latitud: " + position.coords.latitude);
            let usuario = await getUserByWebId(webId);
            if(usuario == null){
                usuario = await addUser(webId, position.coords.longitude, position.coords.latitude );
                //console.log(usuario);
                setRole(usuario.role);
            }else{
                await addLocation(usuario._id, position.coords.longitude, position.coords.latitude );
                setRole(usuario.role);
            }
            const interval = setInterval(() => {
                FindNearFriends();
            }, 30000);
            return () => clearInterval(interval);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        setWebId(undefined);
        window.location.reload();
    };   

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick =  (event) => {
        setAnchorEl(event.currentTarget);
        setNotificaciones(not);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

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
                            {(() => {
                                if (role != null && role === "Admin") {
                                    return (
                                        <Nav.Link className="mt-1 mr-2" href="#/manageUsers">{t('AdminList')}</Nav.Link>
                                    );
                                }
                            })()}
                            <Nav.Link  id="profile-nav-link" className="mt-1 mr-2" href="#/profile">{t('navBarProfile')}</Nav.Link>
                            <Nav.Link  className="mt-1 mr-2" href="#/map">{t('navBarMap')}</Nav.Link>
                            <Nav.Link  className="mt-1 mr-2" href="#/locations">{t('navBarLocations')}</Nav.Link>
                            <Nav.Link  className="mt-1 mr-2" href="#/friends">{t('navBarFriends')}</Nav.Link>
                            <Button className="notification-button" onClick={handleClick}><img
                                            src={notificaciones}
                                            width="40"
                                            height="40"
                                            className="d-inline-block align-top"
                                            alt="notificacion"
                                            style={{backgroundColor: "transparent"}}
                                        />
                            </Button>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                                }}
                                transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                                }}
                            >
                                <ul>
                                    <UserNotification notif={amigo}/>
                                </ul>
                            </Popover>
                            <Button className="log-out-btn" onClick={(e) => handleLogout(e)}>{t('navBarLogOut')}</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <CombinedDataProvider
                    datasetUrl={session.info.webId}
                    thingUrl={session.info.webId}
                >

                <div>
                    <div id="container" style={{ backgroundColor: "black"}}>
                        <Route exact path="/profile" component={WelcomeAuth}/>
                        <Route exact path="/map" component={MapView}/>
                        <Route exact path="/locations" component={LocationsView}/>
                        <Route exact path="/friends" component={FriendsView}/>
                        <Route exact path="/manageUsers" component={ManageUsers}/>
                        <Redirect path="/" exact to="/profile" />
                    </div>
                </div>
            </CombinedDataProvider>
        </div>
    )}

export default NavAuthenticated;