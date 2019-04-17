import { ComponentElement } from "react";

export interface IInputProps {
  onChange(value: string): void,
  defaultValue: string,
  onEnterKey(): void
}

export interface IItemFormProps {
  itemId: string,
  formMode: string,
  itemDesc: string,
}

export interface ITodo {
  id: string,
  done: boolean,
  itemDesc: string,
  editMode: boolean
}

interface ITodos {
  [key: string]: Todo
}

export interface ITodoProps {
  todos: ITodos
}

export interface IAppState {
  todos: ITodos
}

export interface IAppContext {
  dispatch: Function,
  state: IAppState
}

export interface IReducerAction {
  type: string,
  [key: string]: any
}

export interface ITodoItemProps {
  todo: ITodo
}