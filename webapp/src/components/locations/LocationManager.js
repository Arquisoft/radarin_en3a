import {
    addDatetime, addStringNoLocale, addUrl,
    createSolidDataset, createThing,
    getSolidDataset,
    getSourceUrl,
    getThing, getThingAll,
    getUrlAll, removeThing,
    saveSolidDatasetAt, setThing
} from "@inrupt/solid-client";
import React, {useEffect, useState} from "react";
import {Table, TableColumn, useSession, useThing} from "@inrupt/solid-ui-react";
import Button from "react-bootstrap/Button";
import {useTranslation} from "react-i18next";
import searchIcon from "../../assets/search.png";

function LocationManager(props) {

    const { session } = useSession();
    const [locationList, setLocationList] = useState();
    const { t } = useTranslation();

    const STORAGE_PREDICATE = "http://www.w3.org/ns/pim/space#storage";
    const TEXT_PREDICATE = "http://schema.org/text";
    const CREATED_PREDICATE = "http://www.w3.org/2002/12/cal/ical#created";
    const TYPE_PREDICATE = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type";
    const TODO_CLASS = "http://www.w3.org/2002/12/cal/ical#Vtodo";

    const locationThings = locationList ? getThingAll(locationList) : [];

    const thingsArray = locationThings.map((t) => {
        return { dataset: locationList, thing: t };
    });
    const { fetch } = useSession();

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
        if (session){
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
                return null;
            })();
        }
    }, [session]);

    const addLocations = async (text) => {
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
    };

    const deleteLocation = async (locationToRemove) => {
        const locationsUrl = getSourceUrl(locationList);
        const updatedTodos = removeThing(locationList, locationToRemove);
        const updatedDataset = await saveSolidDatasetAt(locationsUrl, updatedTodos, {
            fetch,
        });
        setLocationList(updatedDataset);
    };

    function getLocationAndSave(){
        if(document.getElementById("lat-span") === null){
            return;
        }
        let latitudeValue = document.getElementById("lat-span").textContent;
        let longitudeValue = document.getElementById("long-span").textContent;
        let locationText = document.getElementById("location-text-input").value;
        if(locationText === ""){
            locationText = "No tag";
        }
        addLocations(latitudeValue + " / " + longitudeValue + " / " + locationText);
    }

    function DeleteButton({ deleteTodo }) {
        const { thing } = useThing();
        return (
            <Button className="delete-button btn-danger" onClick={() => deleteTodo(thing)}>
                {t("Delete")}
            </Button>
        );
    }

    let [filter,setLocationFilter] = useState("");
    function changeFilter(){
        let newFilterValue = document.getElementById("filter-input").value;
        setLocationFilter(newFilterValue);
    }

    return (<div>
        <Button className="add-location-button" onClick={getLocationAndSave}>{t("AddCurrentLocation")}</Button><br/>
        <div className="locations-displayed-panel">
            <h3>{t("YourLocations")}</h3>
            <h6>{t("LocationCount1")}{locationThings.length} {t("LocationCount2")}</h6>
            <img id="search-icon" src={searchIcon} alt=""/><input id="filter-input" type="text" placeholder={t("FilterLocations")} onChange={changeFilter}/>
            <Table className="table locations-table" things={thingsArray} filter={filter}>
                <TableColumn property={TEXT_PREDICATE} header={t("LocationCoordinates")} filterable
                             body={function({ value }) {
                                 let separateCoords = value.split(" / ");
                                 return "Lat:" + separateCoords[0] + "  Lon: " + separateCoords[1];
                             }
                             }
                />
                <TableColumn property={TEXT_PREDICATE} header={t("Tag")}
                             body={function({ value }) {
                                 let separateCoords = value.split(" / ")
                                 if(separateCoords[2] === ""){
                                     return "No tag";
                                 }else{
                                     return separateCoords[2];
                                 }
                             }
                             }
                />
                <TableColumn
                    property={CREATED_PREDICATE}
                    dataType="datetime"
                    header={t("CreatedAt")}
                    body={({ value }) => value.toUTCString()}
                />
                <TableColumn
                    property={TEXT_PREDICATE}
                    header=""
                    body={() => <DeleteButton deleteTodo={deleteLocation} />}
                />
            </Table>
        </div>
    </div>);

}

export default LocationManager;