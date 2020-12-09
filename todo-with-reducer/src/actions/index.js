export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const addTodos = todo => {
  return {type: ADD_TODO, payload: todo}
}

export const toggleCompleted = toggle => {
  return {type: TOGGLE_COMPLETED, payload: toggle}
}

export const removeCompleted = () => {
  return {type: CLEAR_COMPLETED}
}
