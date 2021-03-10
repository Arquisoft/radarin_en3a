import React from 'react';
import {List, Value, useWebId, useLDflexList} from '@solid/react';
import "../css/welcome.css";

function Welcome() {
    const webId = useWebId();
    const friends = useLDflexList('user.friends');
  return (<div className="logged-in-panel">
            <h1>Hello there!</h1>
            <h2>Logged as <Value src="user.name"/></h2>
            <span>Your webID is: {webId}</span>
            <h3>You have {friends.length} friends added:</h3>
      <List src={`[${webId}].friends`}>
          {friend =>
              <li key={friend} onClick={(e) => window.location.href=friend}>
                  <button >
                      <Value src={`[${friend}].name`}>{`${friend}`}</Value>
                  </button>
              </li>}
      </List>
        </div>);
}

export default Welcome;