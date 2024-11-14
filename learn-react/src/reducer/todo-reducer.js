export default function todoReducer(todos, action) {
  // type
  switch (action.type) {
    case "added": {
      const { nextId, todoText } = action;
      return [...todos, { id: nextId, text: todoText }];
    }
    case "added_index": {
      const { insertAt, nextId, todoText } = action;
      return [
        // 삽입 지점 이전항목
        ...todos.slice(0, insertAt),
        { id: nextId, text: todoText, done: false },

        // 삽입 지점 이후 항목
        ...todos.slice(insertAt),
      ];
    }
    case "deleted": {
      const { deleteId } = action;
      return todos.filter((item) => item.id !== deleteId);
    }
    case "done": {
      const { id, done } = action;
      return todos.map((item) => {
        if (item.id == id) {
          return { ...item, done };
        }
        return item;
      });
    }
    case "reverse": {
      return todos.toReversed();
    }

    default: {
      throw Error("알 수 없는 액션 타입" + action.type);
    }
  }
}