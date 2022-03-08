import './TestHeader.css';
import questionImg from '../../images/check.svg' 
import answerImg from '../../images/check-double.svg';
import testImg from '../../images/testImg.png';

function TestHeader({ question, answer, allAnswer }) {
    
    return (
        <div className="test-header">
            <div className="test__data">
                <img className="test__img" src={questionImg} alt="номер вопроса"/>
                <p className="test__subtitle">Вопрос {question}/2</p>
                <img className="test__img" src={answerImg} alt="количество верных ответов"/>
                <p className="test__subtitle">Верных ответов {answer}/{allAnswer}</p>
            </div>
            <img className="test-header__img" src={testImg} alt="тест"/>
        </div>
    );
}

export default TestHeader;