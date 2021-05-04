import React from "react";
import "../../css/LocationsView.css";
import AddLocation from "./AddLocation";
import LocationManager from "./LocationManager";
import {useTranslation} from "react-i18next";



function LocationsView() {
    const { t } = useTranslation();

    /*
        Component containing all of the others in the LocationsView, including the location retrieval and adding
        with tag, as well as the LocationManager with its locations table and filtering
     */
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