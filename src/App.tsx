import "./App.css";
import { AppProvider } from "./AppContext";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <AppProvider>
        <div className="App">
          <h3 className="app-title">Todo App</h3>
          <Todo />
        </div>
      </AppProvider>
    </>
  );
}

export default App;
