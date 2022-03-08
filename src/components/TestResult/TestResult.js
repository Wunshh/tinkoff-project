import './TestResult.css';
import { Link } from 'react-router-dom';
import ResultCard from '../ResultCard/ResultCard';
import lockOpenImg from '../../images/lock-open.svg';
import clockImg from '../../images/clock.svg';
import topicTwo from '../../images/topic_2.png';

function TestResult() {

    return (
        <section className="result test">
            <div className="result__container test__container">
                <ResultCard />
            </div>
            <div className="result__card">
                
            <div className="card">
                <div className="card__data"> 
                    <p className="card__topic">
                        <img className="card__img" src={lockOpenImg} alt="доступ открыт" />  
                        Тема 2
                    </p>
                    <p className="card__topic">
                        <img className="card__img" src={clockImg} alt="время" />
                        10 минут
                    </p>
                </div>
                <h2 className="card__title">Как держать себя в руках во время стрессовой ситуации</h2>
                <p className="catd__subtitle">Здесь ты узнаешь, что делать, если стресс произошел прямо сейчас, а времени на долгие подготовки не так много</p>
                <Link className="card__link" to={"/topic_2"}>Пройти</Link>
                <img className="card__topic-img" src={topicTwo} alt="молния"/>
            </div>
            </div>
        </section>
    );
}

export default TestResult;