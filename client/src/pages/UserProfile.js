import React from 'react'
import { getUserProfile } from '../utils/api'

class UserProfile extends React.Component {
  state = {
    userProfile: {},
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
    return (
      <div className="col-12-md-4" >
        <div className="p-2 rounded">
          <h3 id="full-name" className="font-weight-bold">{this.state.userProfile.firstName} 
            {this.state.userProfile.lastName}</h3>
          <div className="card-body">
            <button id="logout" className="btn btn-block btn-danger" onClick={this.handleLogOut} > logout</button>
            <div className="mt-3 row">
              {Object.keys(this.state.userProfile).length ? (this.state.userProfile.savedDrinks.map(drink => {
                console.log(drink);
                return (
                  <div className="col-12 col-md-6" >
                    <div className="card">
                      <img class="card-img-top" src={drink.image} alt="Card image cap" />
                      <div className="card-body">
                        <h2>Name: {drink.name}</h2>
                        Glass Type: {drink.glassType}<br />
                        Instructions: {drink.instructions}<br /><br />
                        Ingredients:<br />
                        <ul className="list-group list-group-flush">
                          {drink.ingredients.map((ingredient, index) => {
                            return (
                              <li key={ingredient} className="list-group-item">{drink.measurements[index] ? `${drink.measurements[index]} - ` : ""}{ingredient}</li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                )})
              ) : ""}

            </div>

          </div>
        </div>
      </div>
    )
  }
}


export default UserProfile;