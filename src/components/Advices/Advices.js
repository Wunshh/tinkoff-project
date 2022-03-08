import { useState } from 'react';
import './Advices.css';
import buttonDown from '../../images/arrow-down.svg';
import buttonUp from '../../images/arrow-up.svg';

function Advices() {

    const [firstOpen, setFirstOpen] = useState(false);
    const [seconsOpen, setSeconsOpen] = useState(false);

    function openFirstAdvice() {
        if (!firstOpen) {
            setFirstOpen(true);
        } else {
            setFirstOpen(false)
        }
    }

    function openSecondAdvice() {
        if (!seconsOpen) {
            setSeconsOpen(true);
        } else {
            setSeconsOpen(false)
        }
    }

    return (
        <section className="advices">
            <h2 className="advices__title article__title">Полезные советы</h2>
            <div className="advices__list">
                <div className="advices__items" onClick={openFirstAdvice}>
                    <p className="advices__subtitle">Не могу посмотреть на ситуацию иначе. Что делать?</p>
                    <img className="advices__img" alt="кнопка" src={firstOpen ? buttonUp : buttonDown}/>
                </div>
                <span className={`advices__span ${firstOpen && "advices__span_visible"}`}><a className="advices__link" href="#" target="_blank">Напиши нам</a> — разберемся, в чем проблема</span>
                <hr className={`advices__line ${firstOpen && "advices__line_none"}`}/>

                <div className="advices__items" onClick={openSecondAdvice}>
                    <p className="advices__subtitle">Не хочу писать вам. Что делать?</p>
                    <img className="advices__img" alt="кнопка" src={seconsOpen ? buttonUp : buttonDown}/>
                </div>
                <span className={`advices__span ${seconsOpen && "advices__span_visible"}`}>Не беда. старайся больше и всё получится</span>
            </div>
        </section>
    );
}

export default Advices;