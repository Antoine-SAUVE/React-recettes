import PropTypes from 'prop-types';
import './title.scss';

const Title =({ imageUrl, title, author, difficulty }) => (
    <header className="header">
        <img 
        className="header__image"
        alt="Des crêpes avec fraises et du chocolat" 
        src={imageUrl}
        />
        <div className="header__text">
            <h1 className="header__text__title">
                {title}
            </h1>
            <p className="header__text__desc">
                {author} - {difficulty}
            </p>
        </div>
    </header>
);

Title.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,

};

export default Title;
