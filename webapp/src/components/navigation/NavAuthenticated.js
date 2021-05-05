
import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import MapView from "../map/MapView";
import LocationsView from "../locations/LocationsView";
import WelcomeAuth from "../welcome/WelcomeAuth";
import FriendsView from "../friends/FriendsView";
import "../../css/Navigation.css";
import "leaflet/dist/leaflet.css";
import "../../css/MapView.css";
import logo from "../../assets/simple_logo.png";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { getDefaultSession, logout } from "@inrupt/solid-client-authn-browser";
import { useTranslation } from "react-i18next";
import { CombinedDataProvider, useSession } from "@inrupt/solid-ui-react";
import ManageUsers from "../admin/ManageUsers";
import { addLocation, addUser, getUserByWebId } from "../../api/api.js";
import "react-toastify/dist/ReactToastify.css";
import { nearFriends } from "../../api/api.js";
import { toast } from "react-toastify";
import { FOAF } from "@inrupt/vocab-common-rdf";
import {
    addDatetime,
    addStringNoLocale, addUrl,
    createSolidDataset, createThing,
    getSolidDataset, getSourceUrl, getThing, getUrlAll, saveSolidDatasetAt, setThing,
} from "@inrupt/solid-client";
import not from "../../assets/notification.png";
import notRed from "../../assets/notification_dot.png";
import Popover from "@material-ui/core/Popover";
import UserNotification from "./UserNotification";
import Help from "../help/Help.js";

toast.configure();

function NavAuthenticated() {

    const { session } = useSession();
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const [role, setRole] = useState(null);
    const [webId, setWebId] = useState(getDefaultSession().info.webId);

    const [amigo, setAmigo] = useState([]);
    const [notificaciones, setNotificaciones] = useState(not);

    const STORAGE_PREDICATE = "http://www.w3.org/ns/pim/space#storage";
    const TEXT_PREDICATE = "http://schema.org/text";
    const CREATED_PREDICATE = "http://www.w3.org/2002/12/cal/ical#created";
    const TYPE_PREDICATE = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type";
    const TODO_CLASS = "http://www.w3.org/2002/12/cal/ical#Vtodo";
    const [locationList, setLocationList] = useState();

    /*
       Function that retrieves the friends of the user in its Solid POD
    */
    async function getFriendsForPOD() {
        const profileDataset = await getSolidDataset(webId, { fetch: session.fetch });
        const profile = getThing(profileDataset, webId);
        let promises = new Promise((resolve, reject) => {
            resolve(getUrlAll(profile, FOAF.knows));
        });

        return promises;
    }

    /*
        Function in charge of calling the
    */
    async function findNearFriends() {
        let amigos = [];
        let promises = await getFriendsForPOD().then(function (list) { return list; });
        promises.forEach((friend) => amigos.push(friend));
        setAmigo(amigo);

        let mensaje = await nearFriends(amigos, webId);
        if (mensaje !== "No nearby user") {

            amigo.push(mensaje);
            toast(mensaje);
            setNotificaciones(notRed);
        }
    }

    /*
        Function to retrieve the location file from the POD, and in the case of a new user, it creates it
        automatically
    */
    async function getOrCreateLocationList(containerUri, fetch) {
        const indexUrl = `${containerUri}locations.ttl`;
        try {
            return await getSolidDataset(indexUrl, {fetch});
        } catch (error) {
            if (error.statusCode === 404) {
                return await saveSolidDatasetAt(
                    indexUrl,
                    createSolidDataset(),
                    {
                        fetch,
                    }
                );
            }
        }
    }

    /*
        For each session, we want to store the location on login in the POD, to do so, we check the sessionStorage
        and if needed, we retrieve the current location from the geolocation API and store it in the locations file
        stored in the user's POD
    */
    useEffect(() => {
        if (locationList !== undefined && sessionStorage.getItem("loginDone") === null) {
            navigator.geolocation.getCurrentPosition(async function (position) {
                let textForAdding = position.coords.latitude + " / " + position.coords.longitude + " / No tag";
                const indexUrl = getSourceUrl(locationList);
                const locationWithText = addStringNoLocale(createThing(), TEXT_PREDICATE, textForAdding);
                const locationWithDate = addDatetime(
                    locationWithText,
                    CREATED_PREDICATE,
                    new Date()
                );
                const locationWithType = addUrl(locationWithDate, TYPE_PREDICATE, TODO_CLASS);
                const updatedTodoList = setThing(locationList, locationWithType);
                const updatedDataset = await saveSolidDatasetAt(indexUrl, updatedTodoList, {
                    fetch: session.fetch,
                });
                setLocationList(updatedDataset);
                sessionStorage.setItem("loginDone", "true");
            });
        }
    }, [locationList, session.fetch]);

    /*
        Every 30 seconds we check the location and update its value in the API in order to have the latest one
        available for our friends. In the case of a new user, first we add it to the database via addUser()
    */
    useEffect(() => {
        if(sessionStorage.getItem("loginDone") === null) {
            if (session) {
                (async () => {
                    const profileDataset = await getSolidDataset(session.info.webId, {
                        fetch: session.fetch,
                    });
                    const profileThing = getThing(profileDataset, session.info.webId);
                    const podsUrls = getUrlAll(profileThing, STORAGE_PREDICATE);
                    const pod = podsUrls[0];
                    const containerUri = `${pod}radarin/`;
                    const list = await getOrCreateLocationList(containerUri, session.fetch);
                    setLocationList(list);
                    return null;
                })();
            }
        }
        navigator.geolocation.getCurrentPosition(async function (position) {
            let usuario = await getUserByWebId(webId);
            if (usuario == null) {
                usuario = await addUser(webId, position.coords.latitude, position.coords.longitude);
                setRole(usuario.role);
            } else {
                await addLocation(usuario._id, position.coords.latitude, position.coords.longitude);
                setRole(usuario.role);
            }
            const interval = setInterval(() => {
                findNearFriends();
            }, 30000);
            return () => clearInterval(interval);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /*
        Function called when a logout is performed, we clear the sessionStorage in order to be able to save
        the location on a new login in the case of not closing the tab and perform the logout, lastly, we
        reload the page
    */
    const handleLogout = (e) => {
        sessionStorage.clear();
        e.preventDefault();
        logout();
        setWebId(undefined);
        window.location.reload();
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    /*
        Function called on the click event of the notification icon in order to display the panel, as well
        as remove the new notifications dot
    */
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setNotificaciones(not);
    };

    /*
        Function called on the closing of the notification panel in order to change the position of the element
    */
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    /*
        Component containing the navbar in the case of authenticated users, each navLink has a route and its
        specified corresponding component. In the case of a user with Admin role, we also include the ManageUsers
        component in a route. We also include the notification icon
    */
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
                    <DropdownButton id="dropdown-item-button" style={{ margin: "16px" }} variant="secondary" title={t("navBarLanguage")}>
                        <Dropdown.Item as="button" onClick={() => changeLanguage("en")}>{t("navBarLanguageEn")}</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => changeLanguage("es")}>{t("navBarLanguageEs")}</Dropdown.Item>
                    </DropdownButton>

                    <Nav className="mr-auto">
                        {(() => {
                            if (role != null && role === "Admin") {
                                return (
                                    <Nav.Link className="mt-1 mr-2" href="#/manageUsers">{t("AdminList")}</Nav.Link>
                                );
                            }
                        })()}
                        <Nav.Link id="profile-nav-link" className="mt-1 mr-2" href="#/profile">{t("navBarProfile")}</Nav.Link>
                        <Nav.Link className="mt-1 mr-2" href="#/map">{t("navBarMap")}</Nav.Link>
                        <Nav.Link className="mt-1 mr-2" href="#/locations">{t("navBarLocations")}</Nav.Link>
                        <Nav.Link className="mt-1 mr-2" href="#/friends">{t("navBarFriends")}</Nav.Link>
                        <Button className="notification-button" onClick={handleClick}><img
                            src={notificaciones}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                            alt="notificacion"
                            style={{ backgroundColor: "transparent" }}
                        />
                        </Button>

                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                        >
                            <ul>
                                <UserNotification notif={amigo} />
                            </ul>
                        </Popover>
                        <Nav.Link className="mt-1 mr-2" href="#/help">{t("navBarHelp")}</Nav.Link>
                        <Button className="log-out-btn" onClick={(e) => handleLogout(e)}>{t("navBarLogOut")}</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <CombinedDataProvider
                datasetUrl={session.info.webId}
                thingUrl={session.info.webId}
            >

                <div>

                    <div id="container" style={{ backgroundColor: "black" }}>
                        <Route exact path="/profile" component={WelcomeAuth} />
                        <Route exact path="/map" component={MapView} />
                        <Route exact path="/locations" component={LocationsView} />
                        <Route exact path="/friends" component={FriendsView} />
                        <Route exact path="/manageUsers" component={ManageUsers} />
                        <Route exact path="/help" component={Help} />
                        <Redirect path="/" exact to="/profile" />
                    </div>
                </div>
            </CombinedDataProvider>
        </div>
    );
}

export default NavAuthenticated;