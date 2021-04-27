import React from "react";
import Button from "react-bootstrap/Button";
import {removeUser, getUsers} from "../../api/api";
import {useTranslation} from "react-i18next";
import $ from "jquery";


function RegUserComponent(props) {

    const { t } = useTranslation();

    let usersList = props.usersList;

    async function DeleteUser(user) {
        console.log(user);
        await removeUser(user);
        usersList = await getUsers();
        $('li').remove("#"+user);
        //window.location.reload(false);
    }

    if(usersList.length === 0){return <h3>{t('MessageAdmin')}</h3>}
    return usersList.map(function(user,index){
        return (
        <li key={index} id={user.webId} className="registered-user-list-item">
            {user.webId}
            <Button className="btn-danger" data-testid={user.webId} onClick={
                () => DeleteUser(user.webId)
            }>{t('AdminDelete')}</Button>
        </li>
        )
    });
}

export default RegUserComponent;