import React, {useState} from 'react';
import {Button} from "react-bootstrap";


function AddLocation(props) {

    let [currentLatitude, setLatitude] = useState("");
    let [currentLongitude, setLongitude] = useState("");
    let [currentTimestamp, setTimestamp] = useState("");
    let locationAvailable = true;

    function LocationComponent(){
        if([currentLatitude].toString() !== "") {
            return (
                <div>
                    <h5>Latitude: <span id="lat-span">{currentLatitude}</span> deg, Longitude: <span id="long-span">{currentLongitude}</span> deg</h5>
                    <p>Timestamp: {currentTimestamp}</p>
                </div>);
        }else if(!locationAvailable){
            return (
                <div>
                <h3>Location is not available right now on this device</h3>
                </div>);
        }
        return null;
    }

   function getUserLocation(){
       if ("geolocation" in navigator) {
           locationAvailable = true;
            navigator.geolocation.getCurrentPosition(function(position) {
                setLatitude((Math.floor(position.coords.latitude * 1000) / 1000).toString());
                setLongitude((Math.floor(position.coords.longitude * 1000) / 1000).toString());
                setTimestamp(new Date().toUTCString());
            });
        } else {
            locationAvailable = false;
            console.log("Location not available");
        }
    }

    return (
        <div className="last-location-panel">
            <Button className="get-location-btn" onClick={getUserLocation}>Get current location</Button>
            <LocationComponent />
        </div>
    );
}

export default AddLocation;