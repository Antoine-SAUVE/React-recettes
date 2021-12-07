import Title from 'src/components/Title';
import Ingredients from 'src/components/Ingredients';
import Instructions from 'src/components/Instructions';

import './app.scss';
// == Composant
const App = () => (
  <div className="app">
   {/*ici je vais charger mes 3 composants*/}
   <Title />
   <Ingredients />
   <Instructions />

  </div>
);

// == Export
export default App;
