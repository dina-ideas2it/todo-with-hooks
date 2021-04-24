import {
  createContext,
  ReactChildren,
  useReducer,
  ReactChild,
  ReactElement,
} from "react";
import { AppContext } from "./typings";
import reducer, { initialState } from "./reducer";

const contextObj: AppContext = {
  dispatch: () => {},
  state: {
    todos: {},
  },
};

const Context = createContext(contextObj);
export default Context;

export const AppProvider = ({
  children,
}: {
  children: ReactChildren | ReactChild;
}): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
