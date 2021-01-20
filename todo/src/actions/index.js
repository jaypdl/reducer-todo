export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const CLEAR_COMPLETED ='CLEAR_COMPLETED'

export const addTodo = todo => {
   return ({type: ADD_TODO, payload: todo});
}

export const toggleComplete = todo => {
   return ({type: TOGGLE_COMPLETED, payload: todo});
}

export const clearCompleted = todo => {
   return ({type: CLEAR_COMPLETED, payload: todo});
}