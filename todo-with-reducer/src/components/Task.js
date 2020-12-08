import React from 'react';

export default function Task(props) {

  const handleClick = () => {
    return null
  }
  
  return(
    <div onClick={handleClick} className={`task${props.task.completed ? ' completed' : ''}`}>
    <p>{props.task.name}</p>
    </div>
  )
}