import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import "../../css/Navigation.css";
import {getUsers} from "../../api/api.js";
import RegUserComponent from "./RegUserComponent";

function ManageUsers () {

    const [usersList, setUserList] = useState([]);
    const { t } = useTranslation();

    /*
        Function that retrieves the existing users from the API for displaying purposes
     */
    useEffect(() => {
        (async () => {
            let usuarios =  await getUsers();
            setUserList(usuarios);
        })();
    }, []);

    /*
        In this component we render list elements (instances of RegUserComponent) dynamically based on
        the users currently registered on the platform
     */
    return(
        <div className="registered-user-container">
            <h2>{t("AdminList")}</h2>
            <ul>
                <RegUserComponent usersList={usersList}/>
            </ul>
        </div>
    );
}

export default ManageUsers;
