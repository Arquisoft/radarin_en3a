import React from 'react';
import "../../css/LocationsView.css";
import AddLocation from "./AddLocation";
import LocationSaver from "./LocationSaver";



function LocationsView(props) {
    return (
        <div className="locations-panel">
            <AddLocation/>
            <br/>
            <LocationSaver/>
            <br/>
        </div>
    );
}

export default LocationsView;