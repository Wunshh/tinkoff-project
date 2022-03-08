
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import mainImage from '../../images/mainIMG.png';
import topicOneImage from '../../images/lessonOne.png';
import TrainingMaterials from '../TrainingMaterials/TrainingMaterials';
import TestPage from '../TestPage/TestPage';
import TestResult from '../TestResult/TestResult';
import EndComponent from '../EndComponent/EndComponent';

import {
  mainTitle,
  mainSubtitle,
  topicOneTitle,
  topicOneSubtitle,
  topicTwoSubtite
} from '../../constants/constants';

function App() {

  const testSubmit = false;

  function handlerAnswer(arr) {
    localStorage.setItem("answer", arr.length);
  }

  function handlerTestSubmit() {
    localStorage.setItem("testSubmit", true);
  }

  return (
    <div className="App">
      <Switch>

        <Route exact path="/">
          <Header 
            title={mainTitle}
            subtitle={mainSubtitle}
            image={mainImage}
          />

          <Main testSubmit={testSubmit}/>
        </Route>

        <Route exact path="/topic_1">
          <Header 
            title={topicOneTitle}
            subtitle={topicOneSubtitle}
            image={topicOneImage}
          />

          <TrainingMaterials />
        </Route>

        <Route exact path="/test_1"> 
          <TestPage 
            getAnswer={handlerAnswer}
            isTestSubmit={handlerTestSubmit}
          />
        </Route>

        <Route exact path="/result">
          <TestResult />
        </Route>

        <Route exact path="/topic_2">
          <Header 
            title={topicOneTitle}
            subtitle={topicTwoSubtite}
            image={topicOneImage}
          />
          <EndComponent />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
