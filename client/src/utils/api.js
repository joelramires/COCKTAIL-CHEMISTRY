import axios from "axios"

export const loginInfo = userData => {
  return axios.post("/api/user/login", userData)
};

export const registerInfo = userData => {
  return axios.post("/api/user/register", userData)
};

export const getUserProfile = () => {
  return axios.get("/api/user/getUserProfile")
}

// import { getRandomCocktail } from 'path to api.js'
// usage => getRandomCocktail().then().catch()
export const getRandomCocktail = () => {
  return axios.get("https://the-cocktail-db.p.rapidapi.com/random.php", {
    headers: {
      "X-RapidAPI-Key": "7fc686e589msh8869a75c330f332p12602bjsn7bb45b322900",
      "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com"
    }
  })
}
export const getChosenCocktail = () => {
  return axios.get("https://the-cocktail-db.p.rapidapi.com/lookup.php?i=11007", {
    headers: {
      "X-RapidAPI-Key": "7fc686e589msh8869a75c330f332p12602bjsn7bb45b322900",
      "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com"
    }
  })
}

export default {
  getUserProfile,
  loginInfo,
  registerInfo,
  getRandomCocktail,
  getChosenCocktail
};
