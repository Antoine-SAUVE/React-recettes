import './title.scss';

const Title = () => (
    <header className="header">
        <img 
        className="header__image"
        alt="Des crêpes avec fraises et du chocolat" 
        src="https://www.globe-croqueur.com/wp-content/uploads/2019/01/26403492-cr%C3%AApes-avec-fraises-et-sauce-au-chocolat.jpg"
        />
        <div className="header__text">
            <h1 className="header__text__title">Crêpe raffinée</h1>
            <p className="header__text__desc">John deuf - facile</p>
        </div>
    </header>
);

export default Title;
