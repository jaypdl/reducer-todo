import './App.css';
import React, { useState } from 'react';
import ToDo from './components/ToDo';
import ToDoForm from './components/ToDoForm'

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
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Super ToDo</h1>
        <h2>Presented with useReducer &copy;</h2>
      </header>
      <section>
        <ToDo tasks={sampleTasks}/>
        <ToDoForm />
      </section>
    </div>
  );
}

export default App;
