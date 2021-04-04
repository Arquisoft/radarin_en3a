import React from 'react';
import "../css/Welcome.css";
import { Text } from "@inrupt/solid-ui-react";
import {useSession} from "@inrupt/solid-ui-react";

function Welcome(props) {
    const { session } = useSession();
    return (
        <div className="logged-in-panel">
            <h1>Hello there!</h1>
                <h2>You are logged in as: </h2>
                <Text
                    properties={[
                        "http://www.w3.org/2006/vcard/ns#fn",
                        "http://xmlns.com/foaf/0.1/name",
                    ]}
                />
                <h3>Your webID is: </h3>
                <h4>{ session.info.webId }</h4>
        </div>
    );
}

export default Welcome;