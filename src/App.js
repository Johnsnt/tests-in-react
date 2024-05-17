
import './App.css';
import Asynctest from './components/Asynctest';
import Dom from './components/Dom';
import Render from './components/Render';
import Contexttest from './components/Contexttest'
import Provider from './components/context/Provider';
import TestRouter from './components/Testrouter';

function App() {
  return (
    <div className="App">
      <Render/>
      <Dom/>
      <Asynctest/>
      <Provider>
        <Contexttest/>
      </Provider>
      <TestRouter/>
    </div>
  );
}

export default App;
