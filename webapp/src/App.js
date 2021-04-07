import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navigation/Navigation';
import { HashRouter } from "react-router-dom";
import { SessionProvider } from "@inrupt/solid-ui-react";

class App extends React.Component{
  render(){
    return(
        <SessionProvider sessionId="solid-radarin">
      <div className="App">
        <HashRouter basename="/">
            <Navigation/>
        </HashRouter>
      </div>
        </SessionProvider>
    )
  }
}

export default App;