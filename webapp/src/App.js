import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/fragments/Navigation';
import { LoggedIn, LoggedOut, LogoutButton, Value } from '@solid/react';
import { HashRouter } from "react-router-dom";

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <HashRouter basename="/">
          <LoggedOut>
            <Navigation/>
            <p>You are logged out of your POD.</p>
          </LoggedOut>
          <LoggedIn >
            <div className="logged-in-panel">
              <h1>Hello there!</h1>
              <h2>Logged into your POD: <Value src="user.name"/></h2>
              <LogoutButton className="log-out-btn"></LogoutButton>
            </div>
          </LoggedIn>
        </HashRouter>
      </div>
    )
  }
}

/* We must change the HELLO WORLD to a new Nav component when we are logged in*/

export default App;