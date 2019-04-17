import React, { useReducer } from 'react';
import './App.css';
import AppContext from './AppContext';
import Todo from './components/Todo';
import reducer, { initialState } from './reducer';
import { IAppState, IAppContext } from './typings';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const appContext: IAppContext = {
    dispatch: dispatch,
    state: state
  }
  return (
    <>
      <AppContext.Provider value={appContext}>
        <div className="App">
          <h3 className="app-title">
            Todo App
          </h3>
          <Todo todos={state.todos}/>
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
