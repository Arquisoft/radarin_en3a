import React, {useEffect} from 'react';
import "../css/UserMap.css";
import L from 'leaflet';


function UserMap(props) {

    // Map creation after the mounting of the div#map-panel element on the DOM
    useEffect(() => {
        var mymap = L.map('map-panel').setView([51.505, -0.09], 13);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoicmFkYXJpbmVuM2EiLCJhIjoiY2ttNWY1c3hvMGRzNjJ2bnhlcXp5YXQyMSJ9.AXXS2D38VFyEv7WoJ7JoTw'
        }).addTo(mymap);
        var marker = L.marker([51.5, -0.09]).addTo(mymap);
        marker.bindPopup("<b>This is a fake location for a Radarin user</b><br>").openPopup();
    });

    return (
        <div id="map-panel" className="user-map-panel">
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
                  integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
                  crossOrigin=""/>
            <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
                    integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
                    crossOrigin=""/>
        </div>
    );

}

export default UserMap;