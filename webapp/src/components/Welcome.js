import React from 'react';
import {List, Value, useWebId, useLDflexList, Image, useLDflex} from '@solid/react';
import "../css/Welcome.css";
import defaultProfilePic from '../assets/default_profile_pic.svg';
import { Text } from "@inrupt/solid-ui-react";
import {useSession} from "@inrupt/solid-ui-react";

function Welcome(props) {
    const { session } = useSession();
    //const webId = useWebId();
    //console.log(webId);
    //const friends = useLDflexList('user.friends');
    //const profPicProxy = useLDflex(`[${webId}].vcard_hasPhoto`);
   // const profilePicSrc = profPicProxy[0];
    //console.log(session);
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