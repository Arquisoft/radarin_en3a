import React from 'react';
import {Value} from '@solid/react';

function Welcome(props) {
  return (<div className="logged-in-panel">
            <h1>Hello there!</h1>
            <h2>Logged into your POD: <Value src="user.name"/></h2>
        </div>);
}

export default Welcome;