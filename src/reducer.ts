import { Reducer } from 'react';
import { IAppState, IReducerAction } from "./typings";
import Constants from "./utils/Constants";

export const initialState: IAppState = {
  todos: []
}
const reducer: Reducer<IAppState, IReducerAction> = (state, action) => {
  switch(action.type) {
    
    case Constants.ADD_ITEM:
      const id = new Date().toISOString();
      return {
        ...state,
        todos: {
          ...state.todos,
          [id]: {
            id: new Date().toISOString(),
            done: false,
            itemDesc: action.value,
            editMode: false
          }
        }
      }
    case Constants.TOGGLE_STATUS: {
      const todo = state.todos[action.id];
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.id]: {
            ...todo,
            done: !todo.done,
          }
        }
      }
    }
    case Constants.DELETE_ITEM: {
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.id]: null
        }
      }
    }

    case Constants.EDIT_ITEM: {
      const todo = state.todos[action.id];
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.id]: {
            ...todo,
            editMode: false,
            itemDesc: action.value
          }
        }
      }
    }

    case Constants.SET_EDIT_MODE: {
      const todo = state.todos[action.id];
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.id]: {
            ...todo,
            editMode: true
          }
        }
      }
    }
      
  }

  return state;
}
export default reducer;
// export default function reducer