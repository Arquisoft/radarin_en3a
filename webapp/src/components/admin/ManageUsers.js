import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../css/Navigation.css';
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { removeUser } from "../../api/api.js"

function ManageUsers () {

    const [usersList, setUserList] = useState(null);

    const t = useTranslation();


    return(<div>
        <h2>{t('AdminList')}</h2>
            {usersList.map((user) => 
                {return <ListGroup horizontal style={{ margin: "20px" }}>
                            <ListGroup.Item style={{ minWidth: "500px", textAlign: "center" }}>
                                {user.webId}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button data-testid={user.webId} onClick={(user)=>{
                                    removeUser(user.webId);
                                    usersList.splice(usersList.indexOf(user), 1);
                                    setUserList(usersList);
                                }}>{t('AdminDelete')}</Button>
                            </ListGroup.Item>
                        </ListGroup>      
                }
            )}

    </div>)
}

export default ManageUsers;
