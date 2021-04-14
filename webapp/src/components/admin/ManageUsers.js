import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import '../../css/Navigation.css';
import {getUsers} from "../../api/api.js"
import RegUserComponent from "./RegUserComponent";

function ManageUsers () {

    const [usersList, setUserList] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        (async () => {
            let usuarios =  await getUsers();
            setUserList(usuarios);
        })();
    }, [usersList]);

    return(
        <div>
            <h2>{t('AdminList')}</h2>
            <ul className="list-group">
                <RegUserComponent usersList={usersList}/>
            </ul>
        </div>
    );
}

export default ManageUsers;
