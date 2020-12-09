import React from 'react';
import { useState } from 'react';
import Task from './Task';



export default function ToDo(props) {
  // for sorting the list based on whether an item has been purchased or not
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className='todo-list'>
      {props.tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
      <button className='clear-btn'>
        Clear Completed
      </button>
    </div>
  )
}