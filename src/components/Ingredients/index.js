import './ingredients.scss'
import PropTypes from 'prop-types';

const Ingredients = ({ ingredients }) => (
    <ul className="ingredients">
        {
            ingredients.map((ingredient)=> (
                <li key={ingredient.id} className="ingredients__item">
                <span className="ingredients__item__quantity">
                    {`${ingredient.quantity} ${ingredient.unit}`}
                </span>
                {ingredient.name}
            </li>
            ))
        }

       
       
    </ul>
);

Ingredients.propTypes = {
    //ingredients est un tableau d'objets
    ingredients: PropTypes.arrayOf(
        PropTypes.shape({
            //ici on va typer les clés des objets 
            id: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
            unit: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,

};

export default Ingredients;