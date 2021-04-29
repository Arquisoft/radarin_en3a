import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import "../../css/AddLocation.css";
import {useTranslation} from "react-i18next";
import {useSession} from "@inrupt/solid-ui-react";
import {addLocation, getUserByWebId} from "../../api/api";

function AddLocation() {

    const { t } = useTranslation();

    const { session } = useSession();
    const { webId } = session.info;

    let [currentLatitude, setLatitude] = useState("");
    let [currentLongitude, setLongitude] = useState("");
    let [currentTimestamp, setTimestamp] = useState("");
    let locationAvailable = true;

    setInterval(()=>{
        if ("geolocation" in navigator) {
            locationAvailable = true;
             navigator.geolocation.getCurrentPosition(async function(position) {
                 let latitude = Math.floor(position.coords.latitude * 1000) / 1000;
                 let longitude = Math.floor(position.coords.longitude * 1000) / 1000;
                 setLatitude(latitude.toString());
                 setLongitude(longitude.toString());
                 setTimestamp(new Date().toUTCString());
                 let findUser = await getUserByWebId(webId);
                 addLocation(findUser._id,latitude,longitude);
             });
         } else {
             locationAvailable = false;
         }
    }, 30000);

    function LocationComponent(){
        if([currentLatitude].toString() !== "") {
            return (
                <div>
                    <h5>{t('lat')} <span id="lat-span">{currentLatitude}</span> {t('deg')}, {t('long')} <span id="long-span">{currentLongitude}</span> {t('long')}</h5>
                    <p>{t('timestamp')} {currentTimestamp}</p>
                    <input type="text" id="location-text-input" placeholder={t('TagLocation')}/>
                </div>);
        }else if(!locationAvailable){
            return (
                <div>
                <h3>
                    { t('LocationNotAvailable')}
                </h3>
                </div>);
        }
        return null;
    }

    async function getUserLocation(){
        if ("geolocation" in navigator) {
            locationAvailable = true;
             navigator.geolocation.getCurrentPosition(async function(position) {
                 let latitude = Math.floor(position.coords.latitude * 1000) / 1000;
                 let longitude = Math.floor(position.coords.longitude * 1000) / 1000;
                 setLatitude(latitude.toString());
                 setLongitude(longitude.toString());
                 setTimestamp(new Date().toUTCString());
                 let findUser = await getUserByWebId(webId);
                 addLocation(findUser._id,latitude,longitude);
             });
         } else {
             locationAvailable = false;
         }
     }

    return (
        <div className="last-location-panel">
             <Button className="get-location-btn" onClick={getUserLocation}> { t('GetCurrentLocation')}</Button>
            <LocationComponent />
        </div>
    );
}

export default AddLocation; 