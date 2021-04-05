import React, {useState} from 'react';
import {
    createSolidDataset,
    createThing,
    setThing,
    addUrl,
    addStringNoLocale,
    saveSolidDatasetAt,
    getSolidDataset,
    getThingAll,
    getStringNoLocale, addDatetime
} from "@inrupt/solid-client";
import {
    getDefaultSession,
    fetch
} from "@inrupt/solid-client-authn-browser";
import { SCHEMA_INRUPT_EXT, RDF, AS } from "@inrupt/vocab-common-rdf";
import "../../css/LocationsView.css";
import AddLocation from "./AddLocation";
import Button from "react-bootstrap/Button";
import LocationSaver from "./LocationSaver";
import LocationList from "./LocationList";

//https://radarintest.solidcommunity.net/locationForTest.json

async function createLocationsFile() {
    const currentUserUrl = getDefaultSession().info.webId;
    //const podUrl = currentUserUrl;
    const podUrl = "https://radarintest.solidcommunity.net/";
    const locationsFileUrl = `${podUrl}locations`;
    let locationsFile = createSolidDataset();
    let newLocation = createThing({name: "test"});
    newLocation = addUrl(newLocation, RDF.type, AS.objectType);
    newLocation = addDatetime(newLocation, "http://www.w3.org/2002/12/cal/ical#created", new Date());
    newLocation = addStringNoLocale(newLocation, SCHEMA_INRUPT_EXT.name, "location from pod");
    locationsFile = setThing(locationsFile, newLocation);

    try {
        let savedLocationsFile = await saveSolidDatasetAt(
            locationsFileUrl,
            locationsFile,
            {fetch: fetch}
        );
        savedLocationsFile = await getSolidDataset(
            locationsFileUrl,
            { fetch: fetch }
        );
        console.log(savedLocationsFile);

    }catch (error) {
        console.log(error);
    }
}

let locationsListElements = undefined;


function LocationsView(props) {
    let [locationsForDisplay, setLocationsForDisplay] = useState([]);

    async function retrieveLocationsFromPod(){
        const currentUserUrl = getDefaultSession().info.webId;
        locationsForDisplay = [];
        //const podUrl = "https://radarintest.solidcommunity.net/";
        const podUrl = currentUserUrl;
        const locationsFileUrl = `${podUrl}locations`;
        let savedLocations = await getSolidDataset(
            locationsFileUrl,
            { fetch: fetch }
        );

        let locationsRetrieved = getThingAll(savedLocations);
        for (let i = 0; i < locationsRetrieved.length; i++) {
            let item = getStringNoLocale(locationsRetrieved[i], SCHEMA_INRUPT_EXT.name);
            console.log(item + " pushed to list");
            locationsForDisplay.push(item.toString());
            setLocationsForDisplay(locationsForDisplay);
        }
        locationsListElements = locationsForDisplay.map((location) => <LocationListItem key={location.toString()} value={location} />);
    }

    return (
        <div className="locations-panel">
            <AddLocation/>
            <br/>
            <LocationSaver/>
            <br/>
        </div>
    );
}

function LocationListItem(props){
    return <li>{props.value}</li>;
}

export default LocationsView;