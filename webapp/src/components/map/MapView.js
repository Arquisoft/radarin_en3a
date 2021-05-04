import React, { useEffect, useState} from "react";
import {MapContainer, TileLayer, useMap} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
import {
    createSolidDataset,
    getSolidDataset,
    getThing,
    getUrlAll,
    saveSolidDatasetAt
} from "@inrupt/solid-client";
import {useSession} from "@inrupt/solid-ui-react";
import MarkerGenerator from "./MarkerGenerator";
import {useTranslation} from "react-i18next";
import FriendMarkerGenerator from "./FriendMarkerGenerator";

const MapView = () => {
    const STORAGE_PREDICATE = "http://www.w3.org/ns/pim/space#storage";
    const { session } = useSession();
    const [locationList, setLocationList] = useState();
    const { t } = useTranslation();
    const [, updateState] = React.useState();

    /*
        Default map center, overridden when the user's location is available to the LocationCenter function
     */
    let [mapCenter] = useState([43.542, -6.594]);

    async function updateLocationList(){
        const profileDataset = await getSolidDataset(session.info.webId, {
            fetch: session.fetch,
        });
        const profileThing = getThing(profileDataset, session.info.webId);
        const podsUrls = getUrlAll(profileThing, STORAGE_PREDICATE);
        const pod = podsUrls[0];
        const containerUri = `${pod}radarin/`;
        const list = await getOrCreateLocationList(containerUri, session.fetch);
        setLocationList(list);
    }

    const forceUpdate = React.useCallback(function(){
        updateState({});
        updateLocationList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



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
        Function to center the map on the current location of the user, it has an instance of the React-leaflet
        MapContainer component in order to perform the flyTo() method which does the animation
     */
    function LocationCenter() {
        const map = useMap();
        useEffect(() => {
            map.locate().on("locationfound", function (e) {
                if(e !== null && e !== undefined) {
                    map.flyTo(e.latlng, map.getZoom());
                }
            });
        }, [map]);

        return null;
    }


    /*
        On every render of the component we check the locations to see if we have to perform any updates on the
        map view or the markers
     */
    useEffect(() => {
       updateLocationList();
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session]);

    L.Marker.prototype.options.icon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });

    return (
        <div>
            <div className="logged-in-panel">
                <h2 style={{ marginTop: "150px" }}>{t("MapOfLocations")}</h2>
            </div>
        <div className="user-map-panel">
            <MapContainer center={mapCenter} zoom={9} style={{ height: "100vh" }}>
                <LocationCenter/>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MarkerGenerator locationList={locationList} reloadMapView={forceUpdate}/>
                <FriendMarkerGenerator />
            </MapContainer>
        </div>
        </div>
    );
};

export default MapView;
