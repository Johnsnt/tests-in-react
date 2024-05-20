
import './App.css';
import Asynctest from './components/Asynctest';
import Dom from './components/Dom';
import Render from './components/Render';
import Contexttest from './components/Contexttest'
import Provider from './components/context/Provider';
import TestRouter from './components/Testrouter';
import Axiostest from './components/Axiostest';

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
      <Axiostest url={'https://jsonplaceholder.typicode.com/todos/1'}/>
    </div>
  );
}

export default App;
