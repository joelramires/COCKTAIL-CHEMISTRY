import React from 'react';
function Login(props) {

  return (
    <div className={`tab-pane ${props.activeForm === 'login' ? "active" : ""}`} id="login" role="tabpanel">
      <form id="login-form">
        <div className="form-group">
          <label htmlFor="email-input-login">Email</label>
          <input type="text" id="email-input-login" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password-input-login">password</label>
          <input type="password" id="password-input-login" className="form-control" />
        </div>
        <button type="submit" className="btn btn-block btn-success">Login!</button>
      </form>
    </div>
  )
}
export default Login;