import { useEffect, useState } from 'react';
import MyRecipesComponent from './MyRecipesComponent';
import './App.css';
import video from './orange.mp4';
import picture from './search.png';


function App() {

const MY_ID = "4529d593";
const MY_KEY = "e59c34777d3a2bc423b2ba5aac6b168a";

const [mySearch, setMySearch] = useState('');
const [myRecipes, setMyRecipes] = useState([]);
const [wordSubmitted, setWordSubmitted] = useState("orange");

useEffect(() => {
  async function fetchData() {
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`)
  const data = await response.json();
  setMyRecipes(data.hits);
}
fetchData();
}, [wordSubmitted])

const myRecipeSearch = (e) => {
  console.log(e.target.value);
  setMySearch(e.target.value)
}

const finalSearch = (e) => {
  e.preventDefault();
  setWordSubmitted(mySearch);
}
 return(
  <div className='App'>
    <div className='container'>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <h1>Find a Recipe</h1>
    </div>

  <div className='container'>
    <form onSubmit={finalSearch}>
      <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}></input>
      <button><img src={picture} alt="foto" className='icons'/></button>
    </form>
   </div> 

  <div>
  {myRecipes.map((element, id) => (
    <MyRecipesComponent 
    key={id}
    label={element.recipe.label} 
    image={element.recipe.image} 
    calories={element.recipe.calories}
    ingredients={element.recipe.ingredientLines}
    cuisineType={element.recipe.cuisineType}
    full = {element.recipe.url}/>
  ))}
  </div>
  </div>
);
  
}

export default App;
