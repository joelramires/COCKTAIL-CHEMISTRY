import React from 'react';
import LoginForm from './pages/Form'
import RandomCocktail from './pages/RandomCocktail';
import ChosenCocktail from './pages/ChosenCocktail'
import CocktailSearch from './pages/CocktailSearch'


function App() {


  return (
    <React.Fragment>
    <LoginForm />
    <RandomCocktail/>
    <ChosenCocktail/>
    <CocktailSearch/>
    </React.Fragment>
  );
}

export default App;
