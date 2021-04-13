import React from 'react';
import "../../css/Welcome.css";
import { CombinedDataProvider, Text, useSession } from "@inrupt/solid-ui-react";
import defaultProfilePic from '../../assets/default_profile_pic.svg';
import {useTranslation} from "react-i18next";

function WelcomeAuth() {
    const { session } = useSession();
    const { webId } = session.info;
    const { t } = useTranslation();

    return (
        <div className="logged-in-panel">
            <CombinedDataProvider datasetUrl={webId} thingUrl={webId}>
            <h1>{t('Welcome')}</h1>
                <h2>{t('LoggedInAs')}</h2>
                <Text
                    properties={[
                        "http://www.w3.org/2006/vcard/ns#fn",
                        "http://xmlns.com/foaf/0.1/name",
                    ]}
                />
                <br/>
                <img className="friend-profile-pic" src={defaultProfilePic} alt={t('DefaultProfilePic')}/>
                <h3>{t('WebIdIs')}</h3>
                <h4>{ session.info.webId }</h4>
            </CombinedDataProvider>
        </div>
    );
}

export default WelcomeAuth;