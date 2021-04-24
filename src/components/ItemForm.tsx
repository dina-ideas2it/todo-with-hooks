import { FormEvent, useContext, useState } from "react";
import Input from "./Input";

import AppContext from "../AppContext";
import { ADD_ITEM, UPDATE_ITEM } from "../utils/Constants";
import { AddItemAction, UpdateItem } from "../typings";

export type ItemFormProps = {
  itemId?: string | null;
  itemDesc: string;
  onDone?(): void;
};

export default function ItemForm({
  itemId = null,
  itemDesc = "",
  onDone,
}: ItemFormProps) {
  const { dispatch } = useContext(AppContext);

  const [todoItem, setTodoItem] = useState(itemDesc);

  const dispatchAction = (value: string) => {
    const payload = !itemId
      ? ({ type: ADD_ITEM, value } as AddItemAction)
      : ({ type: UPDATE_ITEM, id: itemId, value } as UpdateItem);
    dispatch(payload);
    setTodoItem("");
    onDone && onDone();
  };
  return (
    <form
      onSubmit={(evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        dispatchAction(todoItem);
      }}
    >
      <div className="item-detail">
        <Input
          defaultValue={todoItem}
          onChange={(value) => setTodoItem(value)}
        />
        <input
          type="submit"
          value={!itemId ? "Add" : "Save"}
          disabled={todoItem.length < 1}
        />
      </div>
    </form>
  );
}
