import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {addUser,getUsers} from '../api/api'

class EmailForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {email: '', enabled: false, welcomeMsg: ''}
  }

  componentDidMount(){
    this.fetchUsers()
  }

  changeEmail(e) {
    const email = e.target.value ;
    this.setState({email: email});
  }

  changeUserName(e) {
    const username = e.target.value ;
    this.setState({username: username});
  }

  changePassword(e) {
    const password = e.target.value ;
    this.setState({password: password});
  }

  async registerUser(){
      let response = await addUser(this.state.username,this.state.email)
      console.log(response)
      if (response.error)
        this.setState({welcomeMsg:response.error})
      else if (response.name===this.state.username)
        this.setState({welcomeMsg:"Welcome to ASW"})
      else
        this.setState({welcomeMsg:"Unexpected error, maybe the restapi is still sleeping..."})
      //Refresh the users
      this.fetchUsers()
  }

  async fetchUsers(){
    try{
      let users = await getUsers()
      this.props.refreshUsers(users)
    }
    catch(error)
    {
      console.log("Error fetching user list from restapi. Is it on?")
    }
  }

  async handleSubmit(e) {
    e.preventDefault()
    //Add the user to the database
    if (this.state.username && this.state.email && this.state.password){
      this.registerUser()
    }
    else
        this.setState({welcomeMsg:'ERROR: You must fill both fields!'})
  }

  render(){
    return(
          <Form name="register" onSubmit={this.handleSubmit.bind(this)}>
            <h1>Register</h1>
            <Form.Group>
              <Form.Control name="email" type="email" placeholder="Enter email" onChange={this.changeEmail.bind(this)} value={this.state.email}/>
              <Form.Control name="username" type="string" placeholder="Enter Name" onChange={this.changeUserName.bind(this)} value={this.state.username} />
              <Form.Control name="password" type="password" placeholder="Enter password" onChange={this.changePassword.bind(this)} value={this.state.password} />
            </Form.Group>
            <input type="submit" name="" value="Register"></input>
          </Form>
    )
  }
}

export default EmailForm