import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../css/Navigation.css';
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { getUsers, removeUser } from "../../api/api.js"

function ManageUsers () {
    this.state = {
        usersList: [],
      };
    const t = useTranslation();  
    
    getUsers().then((value) => {
        for(var i = 0; i < value.length; i++){
            if(value[i].role)
            this.state.usersList[i] = value[i];
        }
    });

    const deleteUser = (user) => {
        removeUser(user.webId);
        this.state.usersList.splice(this.state.usersList.indexOf(user), 1);
        this.setState({usersList: this.state.usersList});
    };

    return(<div>
        <h2>{t('AdminList')}</h2>
            {this.state.usersList.map((user) => 
                {return <ListGroup horizontal style={{ margin: "20px" }}>
                            <ListGroup.Item style={{ minWidth: "500px", textAlign: "center" }}>
                                {user.webId}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button data-testid={user.webId} onClick={()=>this.deleteUser(user)}>{t('AdminDelete')}</Button>
                            </ListGroup.Item>
                        </ListGroup>      
                }
            )}
    </div>)
}

export default ManageUsers;