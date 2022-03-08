
import './TestTask.css';

function TestTask({
    correct,
    uncorrectFirst,
    uncorrectSecond,
    selectCorrectAnswer,
    selectFirstAnswer,
    selectSecontAnswer,
    data
}) 
    {

    const testData = {
        title: ["Что ты можешь приобрести благодаря технике «Мои 100%»?", "А чем поможет техника «Поменяй свои мысли»?"],
        thirdQuestion: ["Сосредоточиться на моментах, которые можешь изменить", "Поможет изменить свое отношение к ситуации"],
        thirdSpan: ["Верно! Это действительно то, что тебе поможет ", "Верно! Текст фидбэка для примера. Может быть любой"]
    };

    return (
        <div className="form">
            <h3 className="form__title">{testData.title[data]}</h3>
            <div className="form__select">

                <label className="form__label" onClick={selectFirstAnswer}> 
                    <div 
                        className={`form__input ${uncorrectFirst && "form__input_check"}`}
                    />
                    <span className={`form__span ${uncorrectFirst  && "form__span_err"}` }>
                        Вернуть ответственность собеседнику
                        <span className={`form__subtitle ${uncorrectFirst && "form__subtitle_err" }`}>
                            Ошибка
                        </span>
                    </span>
                </label>

                <label className="form__label" onClick={selectSecontAnswer}> 
                    <div 
                        className={`form__input ${uncorrectSecond && "form__input_check"}`}
                    />
                    <span className={`form__span ${uncorrectSecond  && "form__span_err"}` }>
                        Создать полный контроль над ситуацией
                        <span className={`form__subtitle ${uncorrectSecond && "form__subtitle_err" }`}>
                            Ну... есть вещи, которые невозможно или сложно контролировать
                        </span>
                    </span>
                </label>

                <label className="form__label" onClick={selectCorrectAnswer} >
                    <div 
                        className={`form__input ${correct && "form__input_check"}`}
                    />
                    <span className={`form__span ${correct  && "form__span_correct"}` }>
                        {testData.thirdQuestion[data]}
                        <span className={`form__subtitle ${correct && "form__subtitle_active" }`}>
                            {testData.thirdSpan[data]}
                        </span>
                    </span>

                </label>
            </div>
        </div>
    );
}

export default TestTask;