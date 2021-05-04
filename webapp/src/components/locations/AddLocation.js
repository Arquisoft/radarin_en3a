import React, {useState} from "react";
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

    /*
        Every 30 seconds we retrieve the user's location and update its values on the screen in order to
        keep it updated in case of saving it to the POD
     */
    setInterval(() => {
            if ("geolocation" in navigator) {
                locationAvailable = true;
                navigator.geolocation.getCurrentPosition(async function (position) {
                    let latitude = Math.floor(position.coords.latitude * 1000) / 1000;
                    let longitude = Math.floor(position.coords.longitude * 1000) / 1000;
                    setLatitude(latitude.toString());
                    setLongitude(longitude.toString());
                    setTimestamp(new Date().toUTCString());
                    let findUser = await getUserByWebId(webId);
                    addLocation(findUser._id, latitude, longitude);
                });
            } else {
                locationAvailable = false;
            }
        }, 30000);

    /*
        Component that displays the current location of the user based on the geolocation API's results
     */
    function LocationComponent(){
        if([currentLatitude].toString() !== "") {
            return (
                <div>
                    <h4>{t("CurrentLocation")}:</h4>
                    <br/>
                    <h6>{t("lat")} <span id="lat-span">{currentLatitude}</span> {t("deg")}, {t("long")} <span id="long-span">{currentLongitude}</span> {t("long")}</h6>
                    <p>{t("timestamp")} {currentTimestamp}</p>
                </div>);
        }else if(!locationAvailable){
            return (
                <div>
                <h4>
                    { t("LocationNotAvailable")}
                </h4>
                </div>);
        }else{
            return (
                <div>
                    <h4>
                        {t("CalculatingLocation")}
                    </h4>
                </div>);
        }
    }

    return (
        <div className="last-location-panel">
            <LocationComponent />
        </div>
    );
}

export default AddLocation; 