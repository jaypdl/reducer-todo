import { ADD_TODO, TOGGLE_COMPLETED, CLEAR_COMPLETED } from '../actions';

export const initialState = {
   tasks: [
      {
         item: 'Set up this project',
         completed: false,
         id: 1
      },
      {
         item: 'Finish this project',
         completed:false,
         id:2
      }
   ]
}


export const reducer = (state, action) => {
   console.log('in Reducer', action)
   switch (action.type) {
      case ADD_TODO:
         return ({
            ...state,
            tasks: [...state.tasks, {
               item: action.payload,
               completed: false,
               id: Date.now()
            }]
         });
      case TOGGLE_COMPLETED:
         return ({
            ...state,
            tasks: state.tasks.map(todo => {
               console.log('in toggle', todo)
               if (todo.id === action.payload) {
                  return ({...todo, completed: (!todo.completed)})
               } else {return todo}
            })
         });
      case CLEAR_COMPLETED:
         return ({
            ...state,
            tasks: state.tasks.filter(todo => {
               console.log(todo)
               return (!todo.completed);
            })
         })
      default:
         return state;
   }
}