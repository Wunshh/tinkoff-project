import { useState } from 'react';
import { Link } from 'react-router-dom';
import './TestPage.css';
import TestHeader from '../TestHeader/TestHeader';
import TestTask from '../TestTask/TestTask';

function TestPage({ getAnswer, isTestSubmit }) {

    const [correct, setCorrect] = useState(false);
    const [uncorrectFirst, setUncorrectFirst] = useState(false);
    const [uncorrectSecond, setuncorrectSecond] = useState(false);
    const [answer, setAnswer] = useState(0);
    const [allAnswer, setAllAnswer] = useState(0);
    const [activeButton, setActiveButton] = useState(false);
    const [activeLink, setActiveLink] = useState(false);
    const [question, setQuestion] = useState(1);
    const [data, setData] = useState(0);
    const buttonText = ["Следующий вопрос", "Завершить тест"];

    const arr = [];

    function selectFirstAnswer() {
        if (!correct && !uncorrectSecond) {
            setUncorrectFirst(true);
            setAllAnswer(1);
            
            if (question === 2) {
                setActiveLink(true);
            } else {
                setActiveButton(true);
            }
        }
    } 

    function selectSecontAnswer() {
        if (!correct && !uncorrectFirst) {
            setuncorrectSecond(true);
            setAllAnswer(1);
            
            if (question === 2) {
                setActiveLink(true);
            } else {
                setActiveButton(true);
            }
        }
    }

    function selectCorrectAnswer() {
        if (!uncorrectFirst && !uncorrectSecond) {
            setCorrect(true);
            setAnswer(1);
            setAllAnswer(1);
            arr.push(1);
            if (question === 2) {
                setActiveLink(true);
                arr.push(1);
            } else {
                setActiveButton(true);
            }

            getAnswer(arr);
        }
    }

    function showNextQuestion() {
        setCorrect(false);
        setUncorrectFirst(false);
        setuncorrectSecond(false);
        setActiveButton(false);
        setQuestion(2);
        setAllAnswer(0);
        setAnswer(0);
        setData(1);
    }

    return (
        <section className="test">
            <div className="test__container">
                <TestHeader 
                    question={question}
                    answer={answer}
                    allAnswer={allAnswer}
                />
                <TestTask 
                    correct={correct}
                    uncorrectFirst={uncorrectFirst}
                    uncorrectSecond={uncorrectSecond}
                    selectCorrectAnswer={selectCorrectAnswer}
                    selectFirstAnswer={selectFirstAnswer}
                    selectSecontAnswer={selectSecontAnswer}
                    data={data}
                /> 
                {activeButton && 
                    <button onClick={showNextQuestion} className="test__button" type="button" >
                        {buttonText[0]}
                    </button>
                }

                {activeLink && 
                    <p className="test__link-container" onClick={isTestSubmit}>
                        <Link className="test__link" to={"/result"} >{buttonText[1]}</Link>
                    </p>
                }
            </div>
        </section>
    );
}

export default TestPage;