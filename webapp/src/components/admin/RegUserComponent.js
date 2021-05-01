import React from "react";
import Button from "react-bootstrap/Button";
import {removeUser, getUsers} from "../../api/api";
import {useTranslation} from "react-i18next";
import $ from "jquery";


function RegUserComponent(props) {

    const { t } = useTranslation();

    let usersList = props.usersList;

    async function deleteUser(user) {
        await removeUser(user);
        usersList = await getUsers();
        $("li").remove("#"+user);
    }

    if(usersList.length === 0){return <h3>{t("MessageAdmin")}</h3>};
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