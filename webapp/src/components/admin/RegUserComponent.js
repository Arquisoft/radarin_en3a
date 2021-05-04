import React from "react";
import Button from "react-bootstrap/Button";
import {removeUser, getUsers} from "../../api/api";
import {useTranslation} from "react-i18next";
import $ from "jquery";


function RegUserComponent(props) {

    const { t } = useTranslation();

    //We get the list of registered users as a prop from the parent component, and we use it in the rendering part
    let usersList = props.usersList;

    /*
        Function that calls the API in order to perform a deletion of a given user from the database of the platform
     */
    async function deleteUser(user) {
        await removeUser(user);
        usersList = await getUsers();
        $("li").remove("#"+user);
    }

    /*
        Component that renders the list of users currently registered on the platform, as well as the deletion buttons
        in the case the administrator wants to remove them from the service
     */
    if(usersList.length === 0){return <h3>{t("MessageAdmin")}</h3>;}
    return usersList.map(function(user,index){
        return (
        <li key={index} id={user.webId} className="registered-user-list-item">
            {user.webId}
            <br/>
            <Button className="btn-danger" data-testid={user.webId} onClick={
                () => deleteUser(user.webId)
            }>{t("AdminDelete")}</Button>
        </li>
        );
    });
}

export default RegUserComponent;