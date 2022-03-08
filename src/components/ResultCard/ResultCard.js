import './ResultCard.css';
import passedImg from '../../images/passedTest.png';
import failedImg from '../../images/failedTest.png';
import { Link } from 'react-router-dom';

function ResultCard() {

    
    const testAnswer = localStorage.getItem("answer") || 0;
    const dataResult = () => {
        if (testAnswer < 2) {
            return false
        } else {
            return true;
        }
    }
    
    const result = dataResult();

    function testAnswerRemove() {
        localStorage.removeItem("answer");
    }
    

    return (
        <div className="result-card">
            <p className="result-card__title">{testAnswer}/2 баллов</p>
            <img src={result ? passedImg : failedImg} className="recult-card__img" alt="результат теста"/>
            {result ? 
                <p className="result-card__subtitle">
                    Отлично! Ты разобрался со способами справиться с волнением перед стрессовой ситуацией. Можешь продолжить обучение дальше!
                </p>
            :
                <p className="result-card__subtitle">
                   Ой-ой-ой… Что-то много неправильных ответов, посмотри-ка еще раз этот урок и попробуй пройти тест еще раз. 
                </p>
            }

            {result || 
                <div className="result-card__container" onClick={testAnswerRemove}>
                    <Link className="result-card__link" to={"/test_1"}>Пройти ещё раз</Link>
                </div>
            }
        </div>
    );
}

export default ResultCard;