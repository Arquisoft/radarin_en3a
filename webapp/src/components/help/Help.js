import React from "react";
import { useTranslation } from "react-i18next";
import languageHelp from "../../assets/languajeGuide.png"; 
import locationGuide from "../../assets/locationGuide.png"; 
import loginGuide from "../../assets/loginGuide.png"; 
import friendsGuide from "../../assets/friendsGuide.png"; 
import notificationsGuide from "../../assets/notificationsGuide.png";
import mapGuide from "../../assets/mapGuide.png";

function Help() {
    const { t } = useTranslation();

    /*
        Help component consisting on a static page showcasing the main functionalities of the application with the
        intent of guiding the user through its correct utilization, helped by images and text depicting the steps
        to follow
     */
    return (
        <div className="Help page">
            <div />
            <h1>{t("helpLanguageTitle")}</h1>
            <p>{t("helpLanguage")}</p>
            <img
                src={languageHelp}
                alt="Language changing is done by clicking the internationalization option"
                width="600"
                height="auto"
            />
            <h1>{t("helpLogInTitle")}</h1>
            <p>{t("helpLogIn")}</p> <img
                src={loginGuide}
                alt="Login is performed by entering the POD's username on the input box and choosing a provider"
                width="600"
                height="auto"
            />
            <h1>{t("helpLocationSaveTitle")}</h1>
            <p>{t("helpLocationSave")}</p> <img
                src={locationGuide}
                alt="The location saving is done from the Locations route, with the possibility of tagging it"
                width="600"
                height="auto"
            />
            <h1>{t("helpLocationCheckTitle")}</h1>
            <p>{t("helpLocationCheck")}</p> <img
                src={mapGuide}
                alt="The locations can be seen on the map view"
                width="600"
                height="auto"
            />
            <h1>{t("helpFriendsTitle")}</h1>
            <p>{t("helpFriends")}</p> <img
                src={friendsGuide}
                alt="The friends of the user can be seen on the friends view of the application"
                width="600"
                height="auto"
            />
            <h1>{t("helpNotificationsTitle")}</h1>
            <p>{t("helpNotifications")}</p> <img
                src={notificationsGuide}
                alt="To see the notification you have to click on the notifications bell of the navbar"
                width="600"
                height="auto"
            />
        </div>
    );
}
export default Help;