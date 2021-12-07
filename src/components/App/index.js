import Title from 'src/components/Title';
import Ingredients from 'src/components/Ingredients';
import Instructions from 'src/components/Instructions';

import recipeData from 'src/data/recipe';

import './app.scss';
// == Composant
const App = () => (
  <div className="app">
   {/*ici je vais charger mes 3 composants*/}
   <Title
    title={recipeData.title} 
    author={recipeData.author}
    difficulty={recipeData.difficulty}
    imageUrl={recipeData.thumbnail}
   />
   <Ingredients
   ingredients={recipeData.ingredients}
  
   />
   <Instructions
   steps={recipeData.instructions} 
   />

  </div>
);

// == Export
export default App;
