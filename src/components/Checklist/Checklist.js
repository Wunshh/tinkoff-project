import './Checklist.css';

function Checklist() {
    return (
        <section className="checklist">
            <h2 className="checklist__title article__title">Поменяй свои мысли</h2>
            <div className="checklist__cards">
                <div className="checklist__card">
                    <h3 className="checklist__subtitle">Ответь на вопросы</h3>
                    <ul className="checklist__list">
                        <li className="checklist__item">
                            Что конкретно должно произойти 
                        </li>
                        <li className="checklist__item">
                            Что я чувствую сейчас
                        </li>
                        <li className="checklist__item">
                            Могу ли оценить ситуацию по-другому
                        </li>
                    </ul>
                </div>
                <div className="checklist__card">
                    <h3 className="checklist__subtitle">Отбрось всё лишнее</h3>
                    <ul className="checklist__list">
                        <li className="checklist__item">
                            Посмотри на ситуацию иначе
                        </li>
                        <li className="checklist__item">
                            Помести себя в зону комфорта
                        </li>
                        <li className="checklist__item">
                            Какой-то ещё полезный совет
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Checklist;