import React, { Component } from 'react';
import { registerInfo } from '../utils/api';

class Signup extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();

    if (!this.state.email || !this.state.password) {
      return alert("Please enter your email and password!");
    }

    registerInfo({ email: this.state.email, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName })
      .then(({ data }) => {
        alert(JSON.stringify(data));
        this.props.setActiveForm("login");
      })
      .catch(err => console.log(err));
  }

  render() {

    return (
      <div className={`tab-pane ${this.props.activeForm === 'signup' ? "active" : ""}`} id="signup" role="tabpanel">
        <form id="signup-form" onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="first-name-input">First Name</label>
            <input type="text" id="first-name-input" className="form-control" onChange={this.handleInputChange} value={this.state.firstName} name="firstName" />
          </div>
          <div className="form-group">
            <label htmlFor="last-name-input">Last Name</label>
            <input type="text" id="last-name-input" className="form-control" onChange={this.handleInputChange} value={this.state.lastName} name="lastName"/>
          </div>
          <div className="form-group">
            <label htmlFor="email-input">Email</label>
            <input type="text" id="email-input" className="form-control" onChange={this.handleInputChange} value={this.state.email} name="email"/>
          </div>
          <div className="form-group">
            <label htmlFor="password-input">password</label>
            <input type="password" id="password-input" className="form-control" onChange={this.handleInputChange} value={this.state.password} name="password"/>
          </div>
          <button type="submit" className="btn btn-block btn-success" onClick={this.handleFormSubmit}>Sign Up!</button>
        </form>
      </div>
    )
  }
}

export default Signup;