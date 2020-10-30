import React, { useEffect, useState} from "react";
import "./App.css";


const App = () => { 
const APP_ID = "73ad7ab7";
const APP_KEY = "d76fae845c28079043fa3b5c11bbc149";
const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`; 

const [recipes, setRecipes] = useState([]);

useEffect(() => {
  getRecipies()
}, [])
  
const getRecipies = async () => {
const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`); 
  const data = await response.json();
 setRecipes(data.hits)
}

return (
<div className="App">
<form className="search-form">
<input type="text" className="search-bar" />
<button className="search-button">Search</button>
</form>
</div>
);
}

export default App;
