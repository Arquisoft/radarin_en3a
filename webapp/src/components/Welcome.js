import React from 'react';
import "../css/Welcome.css";
import { CombinedDataProvider, Text, Image } from "@inrupt/solid-ui-react";
import {useSession} from "@inrupt/solid-ui-react";
import { FOAF, VCARD } from "@inrupt/lit-generated-vocab-common";
import defaultProfilePic from '../assets/default_profile_pic.svg';

function Welcome(props) {
    const { session } = useSession();
    const { default: data } = require('@solid/query-ldflex');
    const webIdCurrentUser = session.info.webId;
    const loggedUserData = data[webIdCurrentUser];
    console.log(webIdCurrentUser);
    showProfile(loggedUserData);

    const { webId } = session.info;

    async function showProfile(person) {
        const label = await person.label;
        console.log(`\nNAME: ${label}`);

        console.log('\nTYPES');
        for await (const type of person.type)
            console.log(`  - ${type}`);

        console.log('\nFRIENDS');
        for await (const name of person.friends.firstName)
            console.log(`  - ${name} is a friend`);
    }
    return (
        <div className="logged-in-panel">
            <CombinedDataProvider datasetUrl={webId} thingUrl={webId}>
            <h1>Hello there!</h1>
                <h2>You are logged in as: </h2>
                <Text
                    properties={[
                        "http://www.w3.org/2006/vcard/ns#fn",
                        "http://xmlns.com/foaf/0.1/name",
                    ]}
                />
                <br/>
                <Image className="owner-profile-pic" property={VCARD.hasPhoto.iri.value}  defaultSrc={defaultProfilePic} />
                <h3>Your webID is: </h3>
                <h4>{ session.info.webId }</h4>
            </CombinedDataProvider>
        </div>
    );
}

export default Welcome;