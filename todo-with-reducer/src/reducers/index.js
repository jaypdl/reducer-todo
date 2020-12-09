import { ADD_TODO, TOGGLE_COMPLETED, CLEAR_COMPLETED } from '../actions';

export const initialState = [
  {
    name: 'Research ToDo App',
    id: 1,
    completed: false
  },
  {
    name: 'Make ToDo App',
    id: 2,
    completed: false
  },
  {
    name: 'Implement Reducer',
    id: 3,
    completed: false 
  },
];

const reducer = (state, action) => {
  switch(action.type) {
    case ADD_TODO:
      return [...state, {
        name: action.payload,
        id: Date.now(),
        completed:false
      }];
    case TOGGLE_COMPLETED:
      return (state.map(todo =>{
        if (action.payload === todo.id){
          return ({
            ...todo,
            completed: !todo.completed
          });
        } else {
          return (todo);
        }
      }));
    case CLEAR_COMPLETED:
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};

export default reducer;