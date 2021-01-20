import React from 'react';
import Task from './Task';

const TaskList = (props) => {
   return(
      <div className='taskList'>
         {/* <ul> */}
         {props.state.tasks.map(todo => {
            return (<Task key={todo.id} todo={todo} toggle={props.toggle}/>)
         })}
         {/* </ul> */}
      </div>
   )
}

export default TaskList;