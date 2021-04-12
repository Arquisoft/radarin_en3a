import React from 'react';
import "../../css/LocationsView.css";
import AddLocation from "./AddLocation";
import LocationManager from "./LocationManager";



function LocationsView(props) {
    return (
        <div className="locations-panel">
            <AddLocation/>
            <br/>
            <LocationManager/>
            <br/>
        </div>
    );
}

export default LocationsView;