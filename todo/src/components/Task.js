import React from 'react';
import './task.css';

const Task = props => {
   return (
      <li 
         className={props.todo.completed ? 'task completed' : 'task'} 
         onClick={() => {props.toggle(props.todo.id)}}
      >
         {props.todo.item}
      </li>
   )
}

export default Task;