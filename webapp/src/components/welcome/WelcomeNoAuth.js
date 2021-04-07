import React from 'react';
import logo from '../../assets/simple_logo.png';
import { Translation } from 'react-i18next';
import "../../css/InitialWelcome.css";

class WelcomeNoAuth extends React.Component {
    render() {
        return (
            <div className="initial-welcome-panel">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>RADARIN</h1>
                <Translation>
                    {
                        (t) => <p>{t('InitialWelcomeMessage')}</p>
                    }
                </Translation>
            </div>
        )
    }
}

export default WelcomeNoAuth;