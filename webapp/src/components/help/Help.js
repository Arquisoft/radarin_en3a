import React from 'react';
import { useTranslation } from 'react-i18next';
import languageHelp from '../../assets/languajeGuide.png';

function Help(props) {
    const { t } = useTranslation();
    return (
        <div className="Help page">
            <div/>
            <h1>{t('helpLanguageTitle')}</h1>
            <p>{t('helpLanguage')}</p>
            <img
                src={languageHelp}
                alt="Whoops, something went wrong loading this element"
                width="600"
                height="auto"
            />
            <h1>{t('helpLogInTitle')}</h1>
            <p>{t('helpLogIn')}</p> <img
                src={languageHelp}
                alt="Whoops, something went wrong loading this element"
                width="600"
                height="auto"
            />
            <h1>{t('helpLocationSaveTitle')}</h1>
            <p>{t('helpLocationSave')}</p> <img
                src={languageHelp}
                alt="Whoops, something went wrong loading this element"
                width="600"
                height="auto"
            />
            <h1>{t('helpLocationCheckTitle')}</h1>
            <p>{t('helpLocationCheck')}</p> <img
                src={languageHelp}
                alt="Whoops, something went wrong loading this element"
                width="600"
                height="auto"
            />
            <h1>{t('helpFriendsTitle')}</h1>
            <p>{t('helpFriends')}</p> <img
                src={languageHelp}
                alt="Whoops, something went wrong loading this element"
                width="600"
                height="auto"
            />
            <h1>{t('helpNotificationsTitle')}</h1>
            <p>{t('helpNotifications')}</p> <img
                src={languageHelp}
                alt="Whoops, something went wrong loading this element"
                width="600"
                height="auto"
            />
        </div>
    );
}
export default Help;