import React from 'react';
import { ITodoProps } from '../typings';
import ItemForm from './ItemForm';
import Constants from '../utils/Constants';
import TodoItem from './TodoItem';


export default function Todo({todos}: ITodoProps )  {


  return (
    <>
      <section>
        <h5 className="title">Add Item</h5>
        <div className="create-form">
          <ItemForm
            itemDesc={''}
            formMode={Constants.CREATE_MODE}
            itemId={''}/>
        </div>
      </section>

      <section>
        <h5 className="title">todo</h5>
        {
          Object.keys(todos).map((id) => <div key={id}>{(todos[id] && !todos[id].done) && <TodoItem todo={todos[id]} />}</div>)
        }
      </section>

      <section>
        <h5 className="title">Completed</h5>
        {
          Object.keys(todos).map((id) => <div key={id}>{(todos[id] && todos[id].done) && <TodoItem key={id} todo={todos[id]} />}</div>)
        }
      </section>
    </>
  );
}