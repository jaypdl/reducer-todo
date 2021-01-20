import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { useReducer } from 'react';
import { reducer, initialState} from './reducers';
import { addTodo, toggleComplete, clearCompleted } from './actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const add = todo => {
    dispatch(addTodo(todo));
  }
  const toggle = todo => {
    dispatch(toggleComplete(todo));
  }
  const clear = () => {
    dispatch(clearCompleted());
  }
  return (
    <div className="App">
      <h1> WELCOME TASK MANAGERS </h1>
      <TaskForm add={add} clear={clear}/>
      <TaskList state={state} toggle={toggle}/>
    </div>
  );
}

export default App;
