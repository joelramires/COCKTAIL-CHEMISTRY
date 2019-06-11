import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCocktailSearch, getChosenCocktail } from '../utils/api';

function CocktailSearch() {
  // FOR SINGLE DRINK DATA
  const [cocktailDataObj, setCocktailDataObj] = useState({
    name: "",
    image: "",
    idDrink: "",
  });

  useEffect(() => {
    handleGetCocktailSearch();
  }, []);


  // create state for handling user input
  const [userInputState, setUserInputState] = useState("");


  function handleGetCocktailSearch(e) {
    if (e) {
      e.preventDefault();
    }
    // return an array of drinks
    getCocktailSearch(userInputState || "old fashioned")
      .then(({ data: cocktailData }) => {
        console.log(cocktailData)
        setDrinkArr(cocktailData.drinks);
      })
      .catch(err => (console.log(err)));
  }

  // FOR ARRAY OF DRINKS
  const [drinkArr, setDrinkArr] = useState([]);

  // handle search for single drink
  function handleSearchById(drinkId) {
    getChosenCocktail(drinkId)
      .then(({ data: cocktailData }) => {
        const drink = cocktailData.drinks[0];
        const cocktailDataObj = {};
        cocktailDataObj.name = drink.strDrink;
        cocktailDataObj.image = drink.strDrinkThumb;
        cocktailDataObj.glassType = drink.strGlass;
        cocktailDataObj.instructions = drink.strInstructions;

        cocktailDataObj.ingredients = Object.entries(drink).filter(entry => {
          if (entry[0].includes("Ingredient") && entry[1] !== "") {
            return entry
          }
        }).map(ingredient => ingredient[1]);

        cocktailDataObj.measurements = Object.entries(drink).filter(entry => {
          if (entry[0].includes("Measure") && entry[1] !== 0) {
            return entry
          }
        }).map(measurement => measurement[1]);

        console.log(cocktailDataObj);
        setCocktailDataObj(cocktailDataObj);
      })
  }


  return (
    <div className="row">

      <div className="col-6 col-md-3">
        <form onSubmit={handleGetCocktailSearch}>
          <div className="form-group w-100">
            <input type="text" className="form-control" placeholder="Search for a Cocktail" value={userInputState}
              onChange={(e) => setUserInputState(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-block btn-info pl-1 pr-1">Get Drink</button>
        </form>
      </div>
      <div className="col-12 col-md-6">
        <div className="row">
          {/* DRINK LIST GOES HERE */}
          {drinkArr.map(drink => {
            return (
              <div className="col-10 col-md-12">
                <div className="card" key={drink.idDrink}>
                  <img class="card-img-top" src={drink.strDrinkThumb} alt="Card image cap" />
                  <div className="card-body">
                    <h2>Name: {drink.strDrink}</h2>
                    <Link to={`/cocktail-details/${drink.idDrink}`} className="btn btn-block">
                      Get Ingredients / More Info
                </Link>
                  </div>


                </div>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default CocktailSearch