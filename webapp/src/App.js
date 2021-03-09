import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/fragments/Navigation';
import { LoggedIn, LoggedOut } from '@solid/react';
import { HashRouter } from "react-router-dom";

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <HashRouter basename="/">
          <LoggedOut>
            <Navigation/>
          </LoggedOut>
          <LoggedIn>
            <h1>HELLO WORLD</h1>
          </LoggedIn>
        </HashRouter>
      </div>
    )
  }
}

/* We must change the HELLO WORLD to a new Nav component when we are logged in*/

export default App;