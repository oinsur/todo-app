import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>TODO</h1>
          <img src="./images/icon-sun.svg" alt="sun icon" />
        </div>
        {/* TaskInput component */}
        <TaskInput/>

        {/* TaskList component */}
        <TaskList/>
      </div>
    </div>
  );
}

export default App;
