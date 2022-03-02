import './App.css';
import TaskInput from './components/TaskInput';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>TODO</h1>
          <img src="./images/icon-sun.svg" alt="sun icon" />
        </div>
        <div className="task-input">
          <TaskInput/>
        </div>

        <div className="task-list"></div>
      </div>
    </div>
  );
}

export default App;
