import { getThingAll } from "@inrupt/solid-client";
import { Table, TableColumn } from "@inrupt/solid-ui-react";
import React from "react";
const TEXT_PREDICATE = "http://schema.org/text";
const CREATED_PREDICATE = "http://www.w3.org/2002/12/cal/ical#created";

function LocationList({locationList}) {
    const locationThings = locationList ? getThingAll(locationList) : [];

    const thingsArray = locationThings.map((t) => {
        return { dataset: locationList, thing: t };
    });

    if(locationThings.length === 0){return <h3>No locations currently saved on your POD</h3>}
    return <div>
        <h3>Your locations</h3>
        <h6>There are currently {locationThings.length} locations stored on your POD</h6>
        <Table className="table locations-table" things={thingsArray}>
            <TableColumn property={TEXT_PREDICATE} header="Location coordinates"
                         body={function({ value }) {
                             let separateCoords = value.split(" ")
                             return "Lat:" + separateCoords[0] + "  Lon: " + separateCoords[1];}
                         }
            />
            <TableColumn
                property={CREATED_PREDICATE}
                dataType="datetime"
                header="Created At"
                body={({ value }) => value.toUTCString()}
            />
        </Table>
    </div>;
}

export default LocationList;