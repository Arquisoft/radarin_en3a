import React from 'react';
import Form from "react-bootstrap/Form";
import {addUser,getUsers} from '../api/api'
import '../css/FormStyles.css';

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

  changePasswordConfirm(e) {
    const passwordConfirm = e.target.value ;
    this.setState({passwordConfirm: passwordConfirm});
  }

  validateFormData(){
    console.log("Validating data");
    if(this.state.password.length < 8){
      console.log("The password is not long enough");
      return false;
    }
    if(this.state.password !== this.state.passwordConfirm){
      console.log("The passwords don't match");
      return false;
    }
    return true;
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
    if (this.validateFormData()){
      console.log("Form data validated correctly");
      this.registerUser()
    }
    else{
      console.log("A validation error occurred");
      this.setState({welcomeMsg:'ERROR: You must fill both fields!'})
    }


  }

  render(){
    return(
          <Form className="formItem" name="register" onSubmit={this.handleSubmit.bind(this)}>
            <h1>Register</h1>
            <Form.Group>
              <Form.Control name="email" type="email" placeholder="Enter email" onChange={this.changeEmail.bind(this)} value={this.state.email}/>
              <Form.Control name="username" type="string" placeholder="Enter Name" onChange={this.changeUserName.bind(this)} value={this.state.username} />
              <Form.Control name="password" type="password" placeholder="Enter password" onChange={this.changePassword.bind(this)} value={this.state.password} />
              <Form.Control name="passwordConfirm" type="password" placeholder="Enter password again" onChange={this.changePasswordConfirm.bind(this)} value={this.state.passwordConfirm} />
            </Form.Group>
            <input type="Submit" name="" value="Register"></input>
          </Form>
    )
  }
}

export default EmailForm