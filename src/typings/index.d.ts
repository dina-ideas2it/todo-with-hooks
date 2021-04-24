import { ComponentElement, Dispatch } from "react";
import {
  ADD_ITEM,
  TOGGLE_STATUS,
  DELETE_ITEM,
  UPDATE_ITEM,
} from "../utils/Constants";

export type Todo = {
  id: string;
  done: boolean;
  itemDesc: string;
  editMode: boolean;
};

type Todos = Record<string, Todo>;

export type AppState = {
  todos: Todos;
};

type AddItemAction = {
  type: typeof ADD_ITEM;
  value: string;
};

type ToggleStatus = {
  type: typeof TOGGLE_STATUS;
  id: string;
};

type DeleteItem = {
  type: typeof DELETE_ITEM;
  id: string;
};

type UpdateItem = {
  type: typeof UPDATE_ITEM;
  id: string;
  value: string;
};

type TodoAction = AddItemAction | ToggleStatus | DeleteItem | UpdateItem;

export type AppContext = {
  dispatch: Dispatch<TodoAction>;
  state: AppState;
};

export type ITodoItemProps = {
  todo: Todo;
};
