import React from 'react';
import logo from '../logo.svg';


class InitialWelcome extends React.Component{
    render() {
        return (
            <div className="InitialWelcome">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1>RADARIN</h1>
           </div>
        )
    }
    // Instead of using a h1 element, we can create an image and replace it
}

export default InitialWelcome