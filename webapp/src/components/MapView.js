import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

const MapView = () => {

    L.Marker.prototype.options.icon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });


    const position = [51.505, 0.09];
    return (
        <div>
            <div className="logged-in-panel">
                <h2>Map of locations saved for logged user: </h2>
            </div>
        <div className="user-map-panel">
            <MapContainer center={position} zoom={13} style={{ height: "100vh" }}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        Fake location for a user of Radarin
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
        </div>
    );
};

export default MapView;
