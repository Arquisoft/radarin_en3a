import React from 'react';
import { useTranslation } from 'react-i18next';
import languageHelp from '../../assets/languajeGuide.png'; 
import locationGuide from '../../assets/locationGuide.png'; 
import loginGuide from '../../assets/loginGuide.png'; 
import friendsGuide from '../../assets/friendsGuide.png'; 
import notificationsGuide from '../../assets/notificationsGuide.png';
import mapGuide from '../../assets/mapGuide.png';

function Help(props) {
    const { t } = useTranslation();
    return (
        <div className="Help page">
            <div />
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
                src={loginGuide}
                alt="Whoops, something went wrong loading this element"
                width="600"
                height="auto"
            />
            <h1>{t('helpLocationSaveTitle')}</h1>
            <p>{t('helpLocationSave')}</p> <img
                src={locationGuide}
                alt="Whoops, something went wrong loading this element"
                width="600"
                height="auto"
            />
            <h1>{t('helpLocationCheckTitle')}</h1>
            <p>{t('helpLocationCheck')}</p> <img
                src={mapGuide}
                alt="Whoops, something went wrong loading this element"
                width="600"
                height="auto"
            />
            <h1>{t('helpFriendsTitle')}</h1>
            <p>{t('helpFriends')}</p> <img
                src={friendsGuide}
                alt="Whoops, something went wrong loading this element"
                width="600"
                height="auto"
            />
            <h1>{t('helpNotificationsTitle')}</h1>
            <p>{t('helpNotifications')}</p> <img
                src={notificationsGuide}
                alt="Whoops, something went wrong loading this element"
                width="600"
                height="auto"
            />
        </div>
    );
}
export default Help;