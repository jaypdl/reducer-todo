import React, { useState } from 'react';

const ToDoForm = (props) => {
  const { addTodos } = props;
  const [input, setInput] = useState('')

  const onChange = (evt) => {
    setInput(evt.target.value)
  };
  const onSubmit = (evt) => {
    evt.preventDefault();
    if (input !== ''){
      addTodos(input);
      setInput('');
    }
  }

  return(
    <form onSubmit={onSubmit}>
      <input 
        type='text'
        name='task' 
        value={input}
        onChange={onChange}
        />
      <button>Add Task</button>
    </form>
  )
}

export default ToDoForm;