import { Link } from 'react-router-dom';
import './Cards.css';
import lockOpenImg from '../../images/lock-open.svg';
import lockImg from '../../images/lock.svg';
import clockImg from '../../images/clock.svg';
import topicOne from '../../images/topic_1.png';
import topicTwo from '../../images/topic_2.png';

function Cards({ testSubmit }) {

    const testData = localStorage.getItem("testSubmit");

    return (
        <section className="cards">
            <div className="card">
                <div className="card__data"> 
                    <p className="card__topic">
                        <img className="card__img" src={lockOpenImg} alt="доступ открыт" />  
                        Тема 1
                    </p>
                    <p className="card__topic">
                        <img className="card__img" src={clockImg} alt="время" />
                        10 минут
                    </p>
                </div>
                <h2 className="card__title">Как успокоиться при стрессовой ситуации</h2>
                <p className="catd__subtitle">Стартовый раздел, который поможет разобраться в себе. Ты найдешь быстрые инструменты, чтобы справиться со стрессом</p>
                <Link className="card__link" to={"/topic_1"}>Пройти</Link>
                <img className="card__topic-img" src={topicOne} alt="пульс"/>
            </div>

            <div className="card">
                <div className="card__data"> 
                    <p className="card__topic">
                        <img className="card__img" src={testSubmit || testData ? lockOpenImg : lockImg} alt="доступ открыт" />  
                        Тема 2
                    </p>
                    <p className="card__topic">
                        <img className="card__img" src={clockImg} alt="время" />
                        10 минут
                    </p>
                </div>
                <h2 className="card__title">Как держать себя в руках во время стрессовой ситуации</h2>
                <p className="catd__subtitle">Здесь ты узнаешь, что делать, если стресс произошел прямо сейчас, а времени на долгие подготовки не так много</p>
                <Link className="card__link" to={testSubmit || testData ? "/topic_2" : "/" }>Пройти</Link>
                <img className="card__topic-img" src={topicTwo} alt="молния"/>
            </div>
        </section>
    );
}

export default Cards; 