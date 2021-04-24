import { useContext, useState } from "react";
import { ITodoItemProps } from "../typings";
import context from "../AppContext";
import { DELETE_ITEM, TOGGLE_STATUS } from "../utils/Constants";
import ItemForm from "./ItemForm";

import "./item.css";

export default function TodoItem({ todo }: ITodoItemProps) {
  const { dispatch } = useContext(context);
  const [isEditMode, toggleEditMode] = useState(false);

  const renderCheckbox = () => {
    return (
      <input
        id={todo.id}
        type="checkbox"
        onChange={() =>
          dispatch({
            type: TOGGLE_STATUS,
            id: todo.id,
          })
        }
        checked={todo.done}
      />
    );
  };

  return (
    <div className="item">
      {renderCheckbox()}
      {!isEditMode && (
        <div className="todoItem">
          <div className="item-detail">
            <label
              className={todo.done ? "item-label item-done" : "item-label"}
              htmlFor={todo.id}
            >
              {todo.itemDesc}
            </label>
            <button onClick={() => toggleEditMode(!isEditMode)}>Edit</button>
          </div>
        </div>
      )}
      {isEditMode && (
        <ItemForm
          itemDesc={todo.itemDesc}
          itemId={todo.id}
          onDone={() => toggleEditMode(false)}
        />
      )}
      <button onClick={() => dispatch({ type: DELETE_ITEM, id: todo.id })}>
        Delete
      </button>
    </div>
  );
}
