import React from 'react';

export default function Task(props) {
  const { handleToggle } = props;

  const handleClick = () => {
    handleToggle(props.task.id)
  }
  
  return(
    <div onClick={handleClick} className={`task${props.task.completed ? ' completed' : ''}`}>
    <p>{props.task.name}</p>
    </div>
  )
}