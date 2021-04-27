import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';

function Help(props) {    
    const { t, i18n } = useTranslation();
    return (
        <div className="Hello trying">
            <h1>{t('helpLanguageTitle')}</h1>
            <p>{t('helpLanguage')}</p>
            <h1>{t('helpLogInTitle')}</h1>
            <p>{t('helpLogIn')}</p>
            <h1>{t('helpLocationSaveTitle')}</h1>
            <p>{t('helpLocationSave')}</p>
            <h1>{t('helpLocationCheckTitle')}</h1>
            <p>{t('helpLocationCheck')}</p>
            <h1>{t('helpFriendsTitle')}</h1>
            <p>{t('helpFriends')}</p>
            <h1>{t('helpNotificationsTitle')}</h1>
            <p>{t('helpNotifications')}</p>
        </div>
    );
}
export default Help;