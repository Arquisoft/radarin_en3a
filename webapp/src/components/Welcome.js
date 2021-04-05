import React from 'react';
import "../css/Welcome.css";
import { CombinedDataProvider, Text, useSession } from "@inrupt/solid-ui-react";
import { Image} from "@solid/react";
import { FOAF, VCARD } from "@inrupt/lit-generated-vocab-common";
import defaultProfilePic from '../assets/default_profile_pic.svg';

function Welcome(props) {
    const { session } = useSession();
    const { default: data } = require('@solid/query-ldflex');
    const { webId } = session.info;

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
                <Image className="owner-profile-pic" property={VCARD.hasPhoto.iri.value} defaultSrc={defaultProfilePic}>{webId}</Image>
                <h3>Your webID is: </h3>
                <h4>{ session.info.webId }</h4>
            </CombinedDataProvider>
        </div>
    );
}

export default Welcome;