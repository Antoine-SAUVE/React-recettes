import PropTypes from 'prop-types';
import './instructions.scss';

// const Instructions = ({ steps }) => (
//  <ul className="instructions">
//      {//on commence par ouvrir des accolades pour dire qu'on veut écrire au bout de JS

//          // avec map, on va transformer notre tableau d'instructions de recettes (strings)
//          //en tableau...de JSX
//          // on appelle donc la méthode map du tableau steps
//          steps.map(
             
//              // map prend en parametre un callback
//              //qui prend lui meme en parametre une case du tableau
//              (step) => {
//                  // et dans ce callback...on va renvoyer du JSX !
//                  return <li className="instructions__item">{step}</li>
//              },
//          )
//      }
     
//   </ul>
// );

//EQUIVAUT A CA (avec return implicite)
const Instructions = ({ steps }) => (
     <ul className="instructions">
         {/*note : lorsqu'on fait un map, on doit toujours mettre une KEY sur le JSX répété*/}
         {/*cette key permettra a react d'identifier les elements et de redessiner que ce sui change*/}
         {steps.map((step) => <li key={step} className="instructions__item">{step}</li>)},
                 
      </ul>
    );

Instructions.propTypes = {
    //steps est un tableau de strings... et je veux que des strings dedans
    // pas de undefined ou de null qui se baladent
    steps: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Instructions;
