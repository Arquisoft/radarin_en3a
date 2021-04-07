import {getThingAll} from "@inrupt/solid-client";
import React from "react";
import {Marker, Popup} from "react-leaflet";


function MarkerGenerator(props) {
    const locationThings = props.locationList ? getThingAll(props.locationList) : [];

    if(locationThings.length === 0){return <h3>No locations currently saved on your POD</h3>}
    return locationThings.map(function(locThing,index){
        let coordinatesOfThing = locThing._entities[5];
        coordinatesOfThing = coordinatesOfThing.replace(/^"(.*)"$/, '$1');
        let coordinatesSplit = coordinatesOfThing.split(" ");
        let latitudeParsed = parseFloat(coordinatesSplit[0]);
        let longitudeParsed = parseFloat(coordinatesSplit[1]);
        let timestampOfThing = locThing._entities[7];
        let timestampOfThingSplit = timestampOfThing.split("^")
        let timestampOfThingFormatted = timestampOfThingSplit[0];
        timestampOfThingFormatted = timestampOfThingFormatted.replace(/^"(.*)"$/, '$1');
        let coordinatesForCurrentMarker = [ latitudeParsed, longitudeParsed];

    return (<div>
        <Marker key={index} position={coordinatesForCurrentMarker}>
            <Popup>
                Location for time {timestampOfThingFormatted}
            </Popup>
        </Marker>
    </div>)
    });
}

export default MarkerGenerator;