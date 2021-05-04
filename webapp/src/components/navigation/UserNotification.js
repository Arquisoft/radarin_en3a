import React from "react";


function UserNotification(props) {

    //Prop element consisting of the existent notifications for the current user
    const amigo = props.notif;

    /*
        Component that displays the notifications rendering them as list elements dynamically based on
        the notifications present
     */
    if(amigo.length === 0){return <li>No notifications</li>;}
    return amigo.map(function(not,index){
        return (
        <li key={index} className="notification-user-list-item">
            {not}
        </li>
        );
    });
}

export default UserNotification;