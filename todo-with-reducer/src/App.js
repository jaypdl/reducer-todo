import './App.css';
import React, { useState, useReducer } from 'react';
import ToDo from './components/ToDo';
import ToDoForm from './components/ToDoForm'
import reducer, { initialState } from './reducers';
import { addTodos, toggleCompleted, removeCompleted } from './actions';

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





// const sampleTasks = [
//   {
//     name: 'Research ToDo App',
//     id: 1,
//     completed: false
//   },
//   {
//     name: 'Make ToDo App',
//     id: 2,
//     completed: false
//   },
//   {
//     name: 'Implement Reducer',
//     id: 3,
//     completed: false 
//   },
// ];


function App() {
  // const [todos, setTodos] = useState(sampleTasks);

  // const addTodos = newTodo => {
  //   setTodos([...todos, {
  //     name: newTodo,
  //     id: Date.now(),
  //     completed:false
  //   },])
  // }

  // const toggleCompleted= todoID => {
  //   setTodos(
  //     todos.map(todo =>{
  //       if (todoID === todo.id){
  //         return ({
  //           ...todo,
  //           completed: !todo.completed
  //         });
  //       } else {
  //         return (todo);
  //       }
  //     })
  //   )
  // }

  // const removeCompleted = () => {
  //   setTodos(
  //     todos.filter(todo => !todo.completed)
  //   )
  // }
  
  const add = input =>{
    dispatch(addTodos(input));
  }

  const toggle = id => {
    dispatch(toggleCompleted(id));
  }

  const clear = () =>{
    dispatch(removeCompleted())
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Super ToDo</h1>
        <h2>Presented with useReducer &copy;</h2>
      </header>
      <section>
        <ToDo 
          todos={state} 
          handleToggle={toggle}
          removeCompleted={clear}
          />
        <ToDoForm addTodos={add}/>
      </section>
    </div>
  );
}

export default App;
