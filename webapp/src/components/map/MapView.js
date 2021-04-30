import React, { useEffect, useState} from "react";
import {MapContainer, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';
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
    const forceUpdate = React.useCallback(function(){
        updateState({});
        updateLocationList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //TODO center map on last location in the POD
    let mapCenter =[43.542, -6.594];

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

    async function centerMapToCurrentLocation(){
        console.log("about to center based on current location");
    }


    useEffect(() => {
       updateLocationList();
       centerMapToCurrentLocation();
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session]);

    L.Marker.prototype.options.icon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });

    return (
        <div>
            <div className="logged-in-panel">
                <h2 style={{ marginTop: "150px" }}>{t('MapOfLocations')}</h2>
            </div>
        <div className="user-map-panel">
            <MapContainer center={mapCenter} zoom={9} style={{ height: "100vh" }}>
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
