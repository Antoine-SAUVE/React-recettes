import Title from 'src/components/Title';
import Ingredients from 'src/components/Ingredients';
import Instructions from 'src/components/Instructions';

import './app.scss';
// == Composant
const App = () => (
  <div className="app">
   {/*ici je vais charger mes 3 composants*/}
   <Title
    title="Crepe raffinées" 
    author="John Deuf" 
    difficulty={"Facile" }
    imageUrl=""
   />
   <Ingredients />
   <Instructions
   steps={["la farine", "le sel"]} 
   />

  </div>
);

// == Export
export default App;
