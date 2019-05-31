import React, { useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup'

function LoginForm() {

  const [activeForm, setActiveForm] = useState("login");

  function handleSetActiveForm(formName) {
    setActiveForm(formName);
  }

  return (
    <React.Fragment>
      <div className="col-12 col-md-4">
        <div className="border p-2 rounded" id="logup">
          <h3 id="right-column-title" className="text-center">Login/Sign Up!</h3>
          <div>
            <div className="list-group list-group-horizontal-md mt-3" id="user-tabs" role="tablist">
              <button
                className={`list-group-item list-group-item-action ${activeForm === "login" ? "active" : ""}`}
                onClick={() => handleSetActiveForm("login")}
              >Login
              </button>
              <button
                className={`list-group-item list-group-item-action ${activeForm === "signup" ? "active" : ""}`}
                onClick={() => handleSetActiveForm("signup")}>Sign
                Up!</button>
            </div>
            <div className="tab-content my-4" id="forms">

              {activeForm === "login" ? (
                <Login activeForm={activeForm}/>
              ) : (
                  <Signup activeForm={activeForm} />
                )}

            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LoginForm;