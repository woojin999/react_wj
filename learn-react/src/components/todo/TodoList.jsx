import TodoItem from "./TodoItem";
import {
  TodoContext,
  TodoDispatchContext,
  useTodos,
} from "../../context/TodoContext";

export default function TodoList({}) {
  const todos = useTodos();

  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id}>
          <TodoItem item={item} />
        </li>
      ))}
    </ul>
  );
}
