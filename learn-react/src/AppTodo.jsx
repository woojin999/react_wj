import React, { useReducer, useState } from "react";
import "./App.css";
import TodoList from "./components/todo/TodoList";
import todoReducer from "./reducer/todo-reducer";

function AppTodo(props) {
  const [todoText, setTodoText] = useState("");

  const [todos, dispatch] = useReducer(todoReducer, [
    { id: 0, text: "HTML&CSS 공부하기", done: false },
    { id: 1, text: "자바스크립트 공부하기", done: false },
  ]);

  // const [todos, setTodos] = useState();

  const [insertAt, setInsertAt] = useState(todos.length - 1);

  const handelTodoTextChange = (e) => {
    setTodoText(e.target.value);
  };

  // 1. added
  const handelAddTodo = () => {
    dispatch({
      type: "added",
      nextId: todos.length,
      todoText,
    });

    setTodoText("");
  };

  // 2. added_index
  const handelAddTodoByIndex = () => {
    dispatch({
      type: "added_index",
      insertAt,
      nextId: todos.length,
      todoText,
    });
    setTodoText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handelAddTodo();
    }
  };

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

  // reverse
  const handleReverse = () => {
    dispatch({
      type: "reverse",
    });
  };

  return (
    <div>
      <h2>할일 목록</h2>
      <div>
        <input
          type="text"
          value={todoText}
          onChange={handelTodoTextChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handelAddTodo}>추가</button>
      </div>
      <div>
        <select value={insertAt} onChange={(e) => setInsertAt(e.target.value)}>
          {todos.map((item, index) => (
            <option key={item.id} value={index}>
              {index} 번째
            </option>
          ))}
        </select>
        <button onClick={handelAddTodoByIndex}>{insertAt}번째 추가</button>
      </div>
      <div>Preview: {todoText}</div>
      <button onClick={handleReverse}>Reverse</button>
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
      />
    </div>
  );
}

export default AppTodo;
