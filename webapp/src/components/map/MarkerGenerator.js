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

    //We get the list of locations from the parent component as a prop so we don't have to retrieve it twice
    const locationThings = props.locationList ? getThingAll(props.locationList) : [];
    const [locationList, setLocationList] = useState();
    const STORAGE_PREDICATE = "http://www.w3.org/ns/pim/space#storage";
    const reloadMapView = props.reloadMapView;

    const { session } = useSession();

    /*
        For the user's locations we use a different icon in order to differentiate them from the ones of the friends
     */
    const LeafIcon = L.Icon.extend({
        options: {}
    });
    const greenIcon = new LeafIcon({
            iconUrl:
                "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF"
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

    /*
        On each render we have to check if new locations have been added to the user's POD in order
        to render the correct amount of markers in the correct coordinates
     */
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

    /*
        Function that deletes a given location from the POD and therefore from the map view as well, it forces an
        update on the view in order to render the changes and not show the deleted location anymore
     */
    const deleteLocation = async (locationToRemove) => {
        const locationsUrl = getSourceUrl(locationList);
        const updatedTodos = removeThing(locationList, locationToRemove);
        const updatedDataset = await saveSolidDatasetAt(locationsUrl, updatedTodos, {
            fetch,
        });
        setLocationList(updatedDataset);
        reloadMapView();
    };

    /*
        Component of the delete button shown inside the popup for each of the user's locations on the map
     */
    function DeleteButton({ locToDelete }) {
        return (
            <Button className="delete-button btn-danger" style={{ marginLeft: "15px"}} onClick={() => deleteLocation(locToDelete)}>
                Delete from POD
            </Button>
        );
    }

    /*
        Main component containing a list of markers created dynamically based on the locations available on the POD,
        including the Popup with the information about the location and the DeleteButton component
     */
    if(locationThings.length === 0){
        return (<h3>No locations currently saved on your POD</h3>);
    }
    return locationThings.map(function(locThing,index){
        let coordinatesOfThing = locThing._entities[5];
        coordinatesOfThing = coordinatesOfThing.replace(/^"(.*)"$/, "$1");
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
        timestampOfThingFormatted = timestampOfThingFormatted.replace(/^"(.*)"$/, "$1");
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
    </div>);
    });
}

export default MarkerGenerator;