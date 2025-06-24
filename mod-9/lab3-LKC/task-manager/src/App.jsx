import { useState, useEffect } from 'react'
import './App.css'
import RecipeList from './components/RecipeList';

function App() {
  const [recipes, setRecipes] = useState([]);


  // fetch recipes
  // useEffect(() => {}, []);

  // Runs on every render 
  useEffect(()=> {
    console.log("Always renders")
  })

  // Runs once (at the initial render)
  /*useEffect(() => {
    fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(data => setRecipes(data.recipes))    
  }, []);*/

useEffect(() => {
  const fetchRecipes = async () => {
    try {
      const res =await fetchRecipes('https://dummyjson.com/recipes')

      if (!res.ok) {
        throw new Error("Error fetching recipes data")
      }

      const data = await res.json();
      console.log(data);
      setRecipes(data.recipes)
    } catch (error) {
      console.log(error);
    }
  }

  fetchRecipes()
}, [])

  return (
    <>
     <h1>Recipes App</h1>

     <RecipeList recipes={recipes}/>
    </>
  )
}

export default App
