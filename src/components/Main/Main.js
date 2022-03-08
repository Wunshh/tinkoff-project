import './Main.css';
import Article from '../Article/Article';
import Cards from '../Cards/Cards';

function Main({ testSubmit }) {
    return (
        <main className="main">
            <Article />
            <Cards testSubmit={testSubmit}/>
        </main>
    );
}

export default Main;