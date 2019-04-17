import React, { useContext } from 'react';
import { ITodoItemProps } from '../typings';
import context from '../AppContext';
import Constants from '../utils/Constants';
import ItemForm from './ItemForm';

import './item.css';

export default function TodoItem({todo}: ITodoItemProps) {

  const {dispatch} = useContext(context);
  const dispatchAction = (actionType: string) => {
    dispatch({
      type: actionType,
      id: todo.id
    });
  }

  const renderCheckbox = () => {
    return (
      <input 
        id={todo.id} 
        type="checkbox" 
        onChange={() => dispatchAction(Constants.TOGGLE_STATUS)}
        checked={todo.done} />
    );
  }

  return (
    <div className="item">
      {renderCheckbox()}
      {!todo.editMode && <div className="todoItem">
        <div className="item-detail">  
          <label className={todo.done ? 'item-label item-done':'item-label'} htmlFor={todo.id}>{todo.itemDesc}</label>
          <button onClick={() => dispatchAction(Constants.SET_EDIT_MODE)}>
            Edit
          </button>
        </div>
      </div>}
      {todo.editMode && <ItemForm
        formMode={Constants.EDIT_MODE}
        itemDesc={todo.itemDesc} 
        itemId={todo.id} />
      }
      <button onClick={() => dispatchAction(Constants.DELETE_ITEM)}>
        Delete
      </button>
    </div>
  )
}