import './App.css';
import React, { useState } from 'react';
import ToDo from './components/ToDo';
import ToDoForm from './components/ToDoForm'

// ToDo App
//Display List of Current Tasks
  //Create component that is in charge of going through array to render the tasks
    //Create actual task render component
//Toogle Current Tasks as completed/not completed
  //When clicking on task: should toggle completed State
    //Also Display visually
//Add a new Task
  //Need form input for this. Needs to be controlled input (useState)
//Delete all tasks marked as completed
//Need State for:
  //Controlled Input
  //List of Tasks
  //If Task is complete or not





const sampleTasks = [
  {
    name: 'Research ToDo App',
    id: 1,
    completed: false
  },
  {
    name: 'Make ToDo App',
    id: 2,
    completed: false
  },
  {
    name: 'Implement Reducer',
    id: 3,
    completed: false 
  },
];


function App() {
  const [todos, setTodos] = useState(sampleTasks);

  const addTodos = newTodo => {
    setTodos([...todos, {
      name: newTodo,
      id: Date.now(),
      completed:false
    },])
  }

  const toggleCompleted= todoID => {
    setTodos(
      todos.map(todo =>{
        if (todoID === todo.id){
          return ({
            ...todo,
            completed: !todo.completed
          });
        } else {
          return (todo);
        }
      })
    )
  }

  const removeCompleted = () => {
    setTodos(
      todos.filter(todo => !todo.completed)
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Super ToDo</h1>
        <h2>Presented with useReducer &copy;</h2>
      </header>
      <section>
        <ToDo 
          todos={todos} 
          handleToggle={toggleCompleted}
          removeCompleted={removeCompleted}
          />
        <ToDoForm addTodos={addTodos}/>
      </section>
    </div>
  );
}

export default App;
