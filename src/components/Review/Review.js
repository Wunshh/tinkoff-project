import './Review.css';
import avatarIconMale from '../../images/avatarIcon.svg';
import avatarIconFemale from '../../images/avatarIconFem.svg';
import buttonLeft from '../../images/arrow-left.svg';
import buttonRight from '../../images/arrow-right.svg';
import { useState } from 'react';

function Review() {

    const [slider, setSlider] = useState(false);

    function onSlider() {
        setSlider(true);
    }

    function offSlider() {
        setSlider(false);
    }

    return (
        <section className="reviews">
            <h2 className="reviews__title article__title">Что говорят коллеги про техники</h2>
            <div className="reviews__slider">
            <button onClick={offSlider} type="button" className={`reviews__button reviews__button_position_left ${slider ? "" : "none"}`}> 
                <img src={buttonLeft} className="reviews__img" alt="кнопка"/> 
            </button>
                <div className="reviews__cards">
                    <div className={`reviews__card reviews__card_position_first ${slider ? "none" : ""}`}>
                        <img className="card__avatar" src={avatarIconMale} alt="аватар"/>
                        <p className="card__username">Миша Мишин</p>
                        <p className="card__review">Безумно крутые техники. Всем советую. Очень помогла перед итогами года</p>
                    </div>

                    <div className="reviews__card reviews__card_position_second">
                        <img className="card__avatar" src={avatarIconFemale} alt="аватар"/>
                        <p className="card__username">Светлана Романова</p>
                        <p className="card__review">Всегда, когда сложно взять себя в руки вспоминаю про 100% и всё налаживается</p>
                    </div>

                    <div className={`reviews__card reviews__card_position_third ${slider ? "" : "none"}`}>
                        <img className="card__avatar" src={avatarIconMale} alt="аватар"/>
                        <p className="card__username">Миша Романов</p>
                        <p className="card__review">Безумно крутые техники.</p>
                    </div>
                </div>
                <button onClick={onSlider} type="button" className={`reviews__button reviews__button_position_right ${slider ? "none" : ""}`}> 
                    <img src={buttonRight} className="reviews__img" alt="кнопка"/> 
                </button>
            </div>
        </section>
    );
}

export default Review;