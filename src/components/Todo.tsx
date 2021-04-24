import { useContext } from "react";
import AppContext from "../AppContext";
import ItemForm from "./ItemForm";
import TodoItem from "./TodoItem";

export default function Todo() {
  const {
    state: { todos },
  } = useContext(AppContext);

  return (
    <>
      <section>
        <h5 className="title">Add Item</h5>
        <div className="create-form">
          <ItemForm itemDesc={""} />
        </div>
      </section>

      <section>
        <h5 className="title">todo</h5>
        {Object.keys(todos).map((id) => (
          <div key={id}>
            {todos[id] && !todos[id].done && (
              <TodoItem key={id} todo={todos[id]} />
            )}
          </div>
        ))}
      </section>

      <section>
        <h5 className="title">Completed</h5>
        {Object.keys(todos).map((id) => (
          <div key={id}>
            {todos[id] && todos[id].done && (
              <TodoItem key={id} todo={todos[id]} />
            )}
          </div>
        ))}
      </section>
    </>
  );
}
