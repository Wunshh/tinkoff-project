import { Link } from 'react-router-dom';
import './TestCard.css';
import lockOpenImg from '../../images/lock-open.svg';
import clockImg from '../../images/clock.svg';
import topicOne from '../../images/topic_1.png';

function TestCard() {
    return (
        <div className="carts">
            <div className="card">
                <div className="card__data"> 
                    <p className="card__topic">
                        <img className="card__img" src={lockOpenImg} alt="доступ открыт" />  
                        Тест 1
                    </p>
                    <p className="card__topic">
                        <img className="card__img" src={clockImg} alt="время" />
                        1 минута
                    </p>
                </div>
                <h2 className="card__title">Как успокоиться при стрессовой ситуации</h2>
                <p className="catd__subtitle">Давай проверим, всё ли ты понял из курса. А если нет, то не переживай, сможешь пройти курс заново и так по кругу</p>
                <Link className="card__link" to={"/test_1"}>Пройти</Link>
                <img className="card__topic-img" src={topicOne} alt="пульс"/>
            </div>
        </div>
    );
}

export default TestCard;