import React, { useContext } from "react";
import { TodoDispatchContext, useTodosDispatch } from "../../context/TodoContext";

export default function TodoItem({ item }) {
  const dispatch = useTodosDispatch();

  // deleted
  const handleDeleteTodo = (deleteId) => {
    dispatch({
      type: "deleted",
      deleteId,
    });
  };

  // done
  const handleToggleTodo = (id, done) => {
    dispatch({
      type: "done",
      id,
      done,
    });
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => handleToggleTodo(item.id, e.target.checked)}
      />
      <span>{item.done ? <del>{item.text}</del> : item.text}</span>
      <button onClick={() => handleDeleteTodo(item.id)}>X</button>
    </label>
  );
}
