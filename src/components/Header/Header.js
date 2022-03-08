import './Header.css';
import { Link, Route } from 'react-router-dom';

function Header({ title, subtitle, image }) {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__title">{title}</h1>
                <p className="header__subtitle">{subtitle}</p>
                <Route exact path="/">
                    <Link className="header__button" to={"/topic_1"}>Начать учиться</Link>
                </Route>
            </div>
            <img className="header__image" src={image} alt="учебный курс"/>
        </header>
    );
}

export default Header;