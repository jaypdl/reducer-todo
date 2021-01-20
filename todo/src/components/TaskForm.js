import React, { useState } from 'react';

const TaskForm = (props) => {
   const [formValues, setFormValues] = useState('');

   const handleChanges = e => {
      setFormValues(e.target.value);
   }

   const handleSubmit = e => {
      e.preventDefault();
      props.add(formValues);
      setFormValues('');
   }
   const handleClear = e => {
      e.preventDefault();
      props.clear();
   }

   return(
      <form onSubmit={handleSubmit}>
         <input 
            type='text'
            id='newTask'
            name='newTask'
            value={formValues}
            onChange={handleChanges}
            placeholder='Add a New Task!'
         />
         <button>+</button>
         <button onClick={handleClear}>Clear Completed</button>
      </form>
   )
}

export default TaskForm;