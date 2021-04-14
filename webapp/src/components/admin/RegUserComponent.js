import React from "react";
import Button from "react-bootstrap/Button";
import {removeUser} from "../../api/api";
import {useTranslation} from "react-i18next";


function RegUserComponent(props) {

    const { t } = useTranslation();

    const usersList = props.usersList;

    async function DeleteUser(user) {
        console.log(user);
        await removeUser(user);
    }

    if(usersList.length === 0){return <h3>No users currently registered</h3>}
    return usersList.map(function(user,index){
        return (
        <li key={index}>
            {user.webId}
            <Button className="btn-danger" data-testid={user.webId} onClick={
                () => DeleteUser(user.webId)
            }>{t('AdminDelete')}</Button>
        </li>
        )
    });
}

export default RegUserComponent;