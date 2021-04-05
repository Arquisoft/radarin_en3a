import {
    addDatetime, addStringNoLocale, addUrl,
    createSolidDataset, createThing,
    getSolidDataset,
    getSourceUrl,
    getThing,
    getUrlAll,
    saveSolidDatasetAt, setThing
} from "@inrupt/solid-client";
import React, {useEffect, useState} from "react";
import {useSession} from "@inrupt/solid-ui-react";
import Button from "react-bootstrap/Button";
import LocationList from "./LocationList";


function LocationSaver(props) {

    const { session } = useSession();
    const [locationList, setLocationList] = useState();

    const STORAGE_PREDICATE = "http://www.w3.org/ns/pim/space#storage";
    const TEXT_PREDICATE = "http://schema.org/text";
    const CREATED_PREDICATE = "http://www.w3.org/2002/12/cal/ical#created";
    const TYPE_PREDICATE = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type";
    const TODO_CLASS = "http://www.w3.org/2002/12/cal/ical#Vtodo";


    async function getOrCreateLocationList(containerUri, fetch) {
        const indexUrl = `${containerUri}locations.ttl`;
        try {
            return await getSolidDataset(indexUrl, {fetch});
        } catch (error) {
            if (error.statusCode === 404) {
                return await saveSolidDatasetAt(
                    indexUrl,
                    createSolidDataset(),
                    {
                        fetch,
                    }
                );
            }
        }
    }

    useEffect(() => {
        if (!session) return;
        (async () => {
            const profileDataset = await getSolidDataset(session.info.webId, {
                fetch: session.fetch,
            });
            const profileThing = getThing(profileDataset, session.info.webId);
            const podsUrls = getUrlAll(profileThing, STORAGE_PREDICATE);
            const pod = podsUrls[0];
            const containerUri = `${pod}radarin/`;
            const list = await getOrCreateLocationList(containerUri, session.fetch);
            setLocationList(list);
        })();
    }, [session]);

    const addLocation = async (text) => {
        console.log("About to add location " + text);
        const indexUrl = getSourceUrl(locationList);
        const locationWithText = addStringNoLocale(createThing(), TEXT_PREDICATE, text);
        const locationWithDate = addDatetime(
            locationWithText,
            CREATED_PREDICATE,
            new Date()
        );
        const locationWithType = addUrl(locationWithDate, TYPE_PREDICATE, TODO_CLASS);
        const updatedTodoList = setThing(locationList, locationWithType);
        const updatedDataset = await saveSolidDatasetAt(indexUrl, updatedTodoList, {
            fetch: session.fetch,
        });
        setLocationList(updatedDataset);
        console.log("Location added to POD");
    };

    function getLocationAndSave(){
        if(document.getElementById("lat-span") === null){
            return;
        }
        let latitudeValue = document.getElementById("lat-span").textContent;
        let longitudeValue = document.getElementById("long-span").textContent;
        addLocation(latitudeValue + " " + longitudeValue);
    }

    return (<div>
        <Button className="add-location-button" onClick={getLocationAndSave}>Add current location to pod</Button>
        <div className="locations-displayed-panel">
            <LocationList locationList={locationList} setLocationList={{setLocationList}}/>
        </div>
    </div>);

}

export default LocationSaver;