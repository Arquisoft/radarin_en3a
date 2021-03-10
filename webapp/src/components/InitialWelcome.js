import React from 'react';
import logo from '../logo.svg';


class InitialWelcome extends React.Component{
    render() {
        return (
            <div className="InitialWelcome" style={{position: "absolute", left: "50%", top: "40%",  transform: 'translate(-50%, -50%)'}}>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1>RADARIN</h1>
                    <p>You are logged out of your POD.</p>
           </div>
        )
    }
    // Instead of using a h1 element, we can create an image and replace it
}

export default InitialWelcome