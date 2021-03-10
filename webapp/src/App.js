import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/fragments/Navigation';
import NavAuthenticated from './components/fragments/NavAuthenticated';
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
          <LoggedIn >
            <NavAuthenticated/>
          </LoggedIn>
        </HashRouter>
      </div>
    )
  }
}

export default App;