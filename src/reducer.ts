import { Reducer } from "react";
import { AppState, TodoAction } from "./typings";
import {
  ADD_ITEM,
  TOGGLE_STATUS,
  DELETE_ITEM,
  UPDATE_ITEM,
} from "./utils/Constants";

export const initialState: AppState = {
  todos: {},
};
const reducer: Reducer<AppState, TodoAction> = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const id = new Date().toISOString();
      return {
        ...state,
        todos: {
          ...state.todos,
          [id]: {
            id,
            done: false,
            itemDesc: action.value,
            editMode: false,
          },
        },
      };
    case TOGGLE_STATUS: {
      const todo = state.todos[action.id];
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.id]: {
            ...todo,
            done: !todo.done,
          },
        },
      };
    }
    case DELETE_ITEM: {
      const { [action.id]: removed, ...nextTodos } = state.todos;
      return {
        ...state,
        todos: nextTodos,
      };
    }

    case UPDATE_ITEM: {
      const todo = state.todos[action.id];
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.id]: {
            ...todo,
            editMode: false,
            itemDesc: action.value,
          },
        },
      };
    }

    default:
      return state;
  }
};
export default reducer;
