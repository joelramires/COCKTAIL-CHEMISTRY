import React from 'react';

function Signup(props) {
  return (
    <div className={`tab-pane ${props.activeForm === 'signup' ? "active" : ""}`} id="signup" role="tabpanel">
      <form id="signup-form">
        <div className="form-group">
          <label htmlFor="first-name-input">First Name</label>
          <input type="text" id="first-name-input" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="last-name-input">Last Name</label>
          <input type="text" id="last-name-input" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="email-input">Email</label>
          <input type="text" id="email-input" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password-input">password</label>
          <input type="password" id="password-input" className="form-control" />
        </div>
        <button type="submit" className="btn btn-block btn-success">Sign Up!</button>
      </form>
    </div>
  )
}

export default Signup;