import React, { useContext, useState } from 'react';
import Input from './Input';

import AppContext from '../AppContext';
import Constants from '../utils/Constants';
import { IItemFormProps } from '../typings';


export default function ItemForm({formMode, itemId, itemDesc=''}: IItemFormProps) {
  const {dispatch} = useContext(AppContext);

  const [todoItem, setTodoItem] = useState(itemDesc);

  const dispatchAction = (value: string) => {
    const actionType = formMode === Constants.CREATE_MODE
      ? Constants.ADD_ITEM : Constants.EDIT_ITEM;
    dispatch({
      type: actionType,
      id: itemId,
      value: value
    });
    setTodoItem('');
  }

  return (
    <div className="item-detail">
      <Input
        onEnterKey={() => dispatchAction(todoItem)}
        defaultValue={todoItem}
        onChange={(value) => setTodoItem(value)} />
      <button disabled={todoItem.length < 1} onClick={() => dispatchAction(todoItem)}>
        {formMode === Constants.CREATE_MODE ? 'Add' : 'Save' }
      </button>
    </div>
  )
}