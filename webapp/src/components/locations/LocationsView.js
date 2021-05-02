import React from "react";
import "../../css/LocationsView.css";
import AddLocation from "./AddLocation";
import LocationManager from "./LocationManager";
import {useTranslation} from "react-i18next";



function LocationsView(props) {
    const { t } = useTranslation();

    return (
        <div className="locations-panel">
            <AddLocation/>
            <br/>
            <input type="text" id="location-text-input" placeholder={t("TagLocation")} />
            <LocationManager/>
            <br/>
        </div>
    );
}

export default LocationsView;