import React, {useState, useEffect} from 'react';
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
import "../css/LocationsView.css";

//https://radarintest.solidcommunity.net/locationForTest.json

async function createLocationsFile() {
    const podUrl = "https://radarintest.solidcommunity.net/";
    const locationsFileUrl = `${podUrl}locations`;
    let locationsFile = createSolidDataset();
    let newLocation = createThing({name: "test"});
    newLocation = addUrl(newLocation, RDF.type, AS.Article);
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
        locationsForDisplay = [];
        const podUrl = "https://radarintest.solidcommunity.net/";
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
            <button className="create-locations-btn" onClick={createLocationsFile}>Save or create location in the POD</button>
            <br/>
            <button className="retrieve-locations-btn" onClick={retrieveLocationsFromPod}>Retrieve locations from the POD</button>
            <h2>Location retrieved from POD:</h2>
            <ul>{ locationsListElements }</ul>
        </div>
    );
}

function LocationListItem(props){
    return <li>{props.value}</li>;
}

export default LocationsView;