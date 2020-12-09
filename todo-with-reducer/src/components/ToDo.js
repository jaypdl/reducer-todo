import React from 'react';
import { useState } from 'react';
import Task from './Task';



export default function ToDo(props) {
  // for sorting the list based on whether an item has been purchased or not
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  const { handleToggle } = props;
  return (
    <div className='todo-list'>
      {props.todos.map(task => (
        <Task key={task.id} task={task} handleToggle={handleToggle} />
      ))}
      <button className='clear-btn' onClick={props.removeCompleted}>
        Clear Completed
      </button>
    </div>
  )
}