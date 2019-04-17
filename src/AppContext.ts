import { createContext, Dispatch } from "react";
import { IReducerAction, IAppContext } from "./typings";

const contextObj: IAppContext = {
  dispatch: () => ({}) as Dispatch<IReducerAction>,
  state: {
    todos: {}
  }
}

const context = createContext(contextObj);
export default context;