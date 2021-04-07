import React, {useEffect, useState} from "react";
import {MapContainer, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';
import {
    createSolidDataset,
    getSolidDataset,
    getThing,
    getThingAll,
    getUrlAll,
    saveSolidDatasetAt
} from "@inrupt/solid-client";
import {useSession} from "@inrupt/solid-ui-react";
import MarkerGenerator from "./MarkerGenerator";


const MapView = () => {

    const STORAGE_PREDICATE = "http://www.w3.org/ns/pim/space#storage";
    const { session } = useSession();
    const [locationList, setLocationList] = useState();

    const [state, setState] = useState({
        mapCenter: [43.542, -6.594]
    });


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

    useEffect(() => {
        if (!session) return;
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
        })();
    }, [session]);

    L.Marker.prototype.options.icon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });

    return (
        <div>
            <div className="logged-in-panel">
                <h2>Map of locations saved for logged user: </h2>
            </div>
        <div className="user-map-panel">
            <MapContainer center={state.mapCenter} zoom={13} style={{ height: "100vh" }}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MarkerGenerator locationList={locationList} />
            </MapContainer>
        </div>
        </div>
    );
};

export default MapView;
