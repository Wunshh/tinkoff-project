import './UsefulKnowledge.css';
import firstImg from '../../images/icon1.svg'
import secondImg from '../../images/icon2.svg'
import thirdImg from '../../images/icon3.svg'

function UsefulKnowledge() {
    return (
        <div className="knowledge">
            <h2 className="knowledge__title article__title">Что узнали</h2>

            <div className="knowledge__grid">
                <img className="knowledge__img" src={firstImg} alt="совет первый"/>
                <div className="knowledge__first"> 
                    <h3 className="knowledge__advice-title">Поменяй свои мысли</h3>
                    <p className="knowledge__subtitle">Так ты сможешь двигаться дальше и самосовершенствоваться</p>
                </div>

                <img className="knowledge__img" src={secondImg} alt="совет второй" />
                <h3 className="knowledge__advice-title">Используй технику 100%</h3>
                
                <img className="knowledge__img" src={thirdImg} alt="совет третий" />
                <h3 className="knowledge__advice-title">Возьми на заметку технику вертикального спуска</h3>
            </div>

        </div>
    );
}

export default UsefulKnowledge;