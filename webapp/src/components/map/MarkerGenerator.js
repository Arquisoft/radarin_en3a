import {
    createSolidDataset,
    getSolidDataset,
    getSourceUrl, getThing,
    getThingAll, getUrlAll,
    removeThing,
    saveSolidDatasetAt
} from "@inrupt/solid-client";
import React, {useEffect, useState} from "react";
import {Marker, Popup} from "react-leaflet";
import L from "leaflet";
import Button from "react-bootstrap/Button";
import {useSession} from "@inrupt/solid-ui-react";


function MarkerGenerator(props) {
    const locationThings = props.locationList ? getThingAll(props.locationList) : [];
    const [locationList, setLocationList] = useState();
    const STORAGE_PREDICATE = "http://www.w3.org/ns/pim/space#storage";
    const reloadMapView = props.reloadMapView;

    const { session } = useSession();

    const LeafIcon = L.Icon.extend({
        options: {}
    });
    const greenIcon = new LeafIcon({
            iconUrl:
                "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF"
    });

    const { fetch } = useSession();
    useEffect(() => {
        if (session){
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
        }
    }, [session]);

    const deleteLocation = async (locationToRemove) => {
        const locationsUrl = getSourceUrl(locationList);
        const updatedTodos = removeThing(locationList, locationToRemove);
        const updatedDataset = await saveSolidDatasetAt(locationsUrl, updatedTodos, {
            fetch,
        });
        setLocationList(updatedDataset);
        reloadMapView();
    };

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

    function DeleteButton({ locToDelete }) {
        return (
            <Button className="delete-button btn-danger" style={{ marginLeft: "15px"}} onClick={() => deleteLocation(locToDelete)}>
                Delete from POD
            </Button>
        );
    }

    if(locationThings.length === 0){
        return <h3>No locations currently saved on your POD</h3>
    }
    return locationThings.map(function(locThing,index){
        let coordinatesOfThing = locThing._entities[5];
        coordinatesOfThing = coordinatesOfThing.replace(/^"(.*)"$/, '$1');
        let coordinatesSplit = coordinatesOfThing.split(" / ");
        let latitudeParsed = parseFloat(coordinatesSplit[0]);
        let longitudeParsed = parseFloat(coordinatesSplit[1]);
        let tagForMarker = coordinatesSplit[2];
        if(tagForMarker === ""){
            tagForMarker = "No tag";
        }
        let timestampOfThing = locThing._entities[7];
        let timestampOfThingSplit = timestampOfThing.split("^");
        let timestampOfThingFormatted = timestampOfThingSplit[0];
        timestampOfThingFormatted = timestampOfThingFormatted.replace(/^"(.*)"$/, '$1');
        timestampOfThingFormatted = timestampOfThingFormatted.split(".")[0];
        timestampOfThingFormatted = timestampOfThingFormatted.replace("T"," ");
        let coordinatesForCurrentMarker = [ latitudeParsed, longitudeParsed];
    return (<div>
        <Marker key={index} position={coordinatesForCurrentMarker} icon={greenIcon}>
            <Popup><h6>{tagForMarker}</h6>
            <br/>
                {timestampOfThingFormatted}
                <DeleteButton locToDelete={locThing}/>
            </Popup>
        </Marker>
    </div>)
    });
}

export default MarkerGenerator;