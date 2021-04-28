import React from 'react';
import "../../css/Welcome.css";
import {CombinedDataProvider, Image, Text, useSession} from "@inrupt/solid-ui-react";
import {useTranslation} from "react-i18next";
import { VCARD } from "@inrupt/lit-generated-vocab-common";

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
                <Text
                    property={VCARD.organization_name.iri.value}
                />
                <br/>
                <Image className="owner-profile-pic" property={VCARD.hasPhoto.iri.value} width={100} />
                <br/>
                <br/>
                <h3>{t('WebIdIs')}</h3>
                <h4>{ session.info.webId }</h4>
            </CombinedDataProvider>
        </div>
    );
}

export default WelcomeAuth;