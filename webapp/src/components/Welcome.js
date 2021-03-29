import React from 'react';
import {List, Value, useWebId, useLDflexList, Image, useLDflex} from '@solid/react';
import "../css/Welcome.css";
import defaultProfilePic from '../assets/default_profile_pic.svg';
function Welcome(props) {
    //const {default: data} = require('@solid/query-ldflex');
    const webId = useWebId();

    const friends = useLDflexList('user.friends');
    const profPicProxy = useLDflex(`[${webId}].vcard_hasPhoto`);
    const profilePicSrc = profPicProxy[0];

    return (
        <div className="logged-in-panel">
            <h1>Hello there!</h1>
             <Image src={profilePicSrc} defaultSrc={defaultProfilePic} className="owner-profile-pic"/>
            <h2>Logged as <Value src="user.name"/></h2>
            <span>Your webID is: {webId}</span>
            <h3 className="title-number-friends">You have {friends.length} friends added:</h3>
      <List src={`[${webId}].friends`}>
          {friend =>
              <li key={friend} onClick={(e) => window.location.href=friend}>
                  <button >
                      <Value src={`[${friend}].name`}>{`${friend}`}</Value>
                      <br/>
                      <Image className="friend-profile-pic" src={`[${friend}].vcard_hasPhoto`} defaultSrc={defaultProfilePic}>{`${friend}`}</Image>
                  </button>
              </li>}
      </List>
        </div>
    );
}

export default Welcome;