import React from 'react';
import LoginForm from './pages/Form'
import RandomCocktail from './pages/RandomCocktail';
import ChosenCocktail from './pages/ChosenCocktail'


function App() {


  return (
    <React.Fragment>
    <LoginForm />
    <RandomCocktail/>
    <ChosenCocktail/>
    </React.Fragment>
  );
}

export default App;
