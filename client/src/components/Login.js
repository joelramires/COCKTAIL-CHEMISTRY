import React, { Component } from 'react';
import { loginInfo } from '../utils/api';

class Login extends Component {

  state = {
    email: "",
    password: "",
    token: ""
  }

  handleInputChange = event => {
    const {name, value} = event.target;

    this.setState({
      [name]: value
    })
  }
  
  handleFormSubmit = event => {
    event.preventDefault();

    if (!this.state.email || !this.state.password) {
      return alert("Please enter your email and password!");
    }

    loginInfo({email: this.state.email, password: this.state.password})
      .then(({data: token}) => {
        alert(token);
        this.setState({token})
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className={`tab-pane ${this.props.activeForm === 'login' ? "active" : ""}`} id="login" role="tabpanel">
        <form id="login-form" onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="email-input-login">Email</label>
            <input type="text" onChange={this.handleInputChange} name="email" value={this.state.email} id="email-input-login" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password-input-login">password</label>
            <input type="password" id="password-input-login" className="form-control" onChange={this.handleInputChange} name="password" value={this.state.password} />
          </div>
          <button type="submit" className="btn btn-block btn-success" onClick={this.handleFormSubmit}>Login!</button>
        </form>
      </div>
    )
  }
}
export default Login;