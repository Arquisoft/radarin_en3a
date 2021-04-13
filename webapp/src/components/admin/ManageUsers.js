import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../../css/Navigation.css';
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { getUsers, removeUser } from "../../api/api.js"

function ManageUsers () {

    let usersList = null;

    const { t } = useTranslation();
    
    async function ReturnUsers() {
        usersList = await getUsers();
    }

    async function DeleteUser(user) {
        removeUser(user.webId);
        ReturnUsers();
    }

    useEffect(() => {
        ReturnUsers();
    });
  
    return(<div>
        <h2>{t('AdminList')}</h2>
        {usersList.map((user) => 
            {return <ListGroup horizontal style={{ margin: "20px" }}>
                        <ListGroup.Item style={{ minWidth: "500px", textAlign: "center" }}>
                            {user.webId}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button data-testid={user.webId} onClick={(user)=>{
                                DeleteUser(user);
                            }}>{t('AdminDelete')}</Button>
                        </ListGroup.Item>
                    </ListGroup>      
            }
        )}
    </div>)
}

export default ManageUsers;
