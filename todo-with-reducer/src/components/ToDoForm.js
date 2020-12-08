import React, { useState } from 'react';

const ToDoForm = (props) => {

  return(
    <form>
      <input type='text' name='task' />
      <button>Add Task</button>
    </form>
  )
}

export default ToDoForm;