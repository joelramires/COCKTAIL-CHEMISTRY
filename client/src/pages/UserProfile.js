import React from 'react'
import {getUserProfile} from '../utils/api'

class UserProfile extends React.Component {
  state = {
    userProfile: []
  }


  componentDidMount() {
    getUserProfile()
      .then(userData => {
        console.log(userData.data)
        this.setState({
          userProfile: userData.data
        })
      })
      .catch(err => console.log(err))
  }
  handleLogOut = event => {
    event.preventDefault();
    localStorage.removeItem("accessToken");
    window.location.reload();
  }

  render() {
    return(
      <div className = "col-12-md-4" >
          <div className="p-2 rounded">
            <h3 id="full-name" className="font-weight-bold">{this.state.userProfile.firstName} 
            {this.state.userProfile.lastName}</h3>
            <div className="card-body">
              <button id="logout" className="btn btn-block btn-danger" onClick={this.handleLogOut} > logout</button>
            </div>
          </div>
      </div>
    )
  }
}

export default UserProfile;