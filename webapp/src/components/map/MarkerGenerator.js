import {getThingAll} from "@inrupt/solid-client";
import React from "react";
import {Marker, Popup} from "react-leaflet";
import L from "leaflet";


function MarkerGenerator(props) {
    const locationThings = props.locationList ? getThingAll(props.locationList) : [];

    const LeafIcon = L.Icon.extend({
        options: {}
    });

    const greenIcon = new LeafIcon({
            iconUrl:
                "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF"
    });


    if(locationThings.length === 0){return <h3>No locations currently saved on your POD</h3>}
    return locationThings.map(function(locThing,index){
        let coordinatesOfThing = locThing._entities[5];
        coordinatesOfThing = coordinatesOfThing.replace(/^"(.*)"$/, '$1');
        let coordinatesSplit = coordinatesOfThing.split(" / ");
        let latitudeParsed = parseFloat(coordinatesSplit[0]);
        let longitudeParsed = parseFloat(coordinatesSplit[1]);
        let tagForMarker = coordinatesSplit[2];
        let timestampOfThing = locThing._entities[7];
        let timestampOfThingSplit = timestampOfThing.split("^");
        let timestampOfThingFormatted = timestampOfThingSplit[0];
        timestampOfThingFormatted = timestampOfThingFormatted.replace(/^"(.*)"$/, '$1');
        timestampOfThingFormatted = timestampOfThingFormatted.split(".")[0];
        timestampOfThingFormatted = timestampOfThingFormatted.replace("T"," ");
        let coordinatesForCurrentMarker = [ latitudeParsed, longitudeParsed];
    return (<div>
        <Marker key={index} position={coordinatesForCurrentMarker} icon={greenIcon}>
            <Popup>{tagForMarker}
            <br/>
                {timestampOfThingFormatted}
            </Popup>
        </Marker>
    </div>)
    });
}

export default MarkerGenerator;