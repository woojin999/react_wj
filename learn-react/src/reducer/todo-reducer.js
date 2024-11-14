export default function todoReducer(draft, action) {
  // type
  switch (action.type) {
    case "added": {
      const { nextId, todoText } = action;
      draft.push({ id: nextId, text: todoText })
      break;
    }
    case "added_index": {
      const { insertAt, nextId, todoText } = action;
      draft.splice(insertAt, 0, { id: nextId, text: todoText, done: false });
      break;
      // return [
      //   // 삽입 지점 이전항목
      //   ...todos.slice(0, insertAt),
      //   { id: nextId, text: todoText, done: false },

      //   // 삽입 지점 이후 항목
      //   ...todos.slice(insertAt),
      // ];
    }
    case "deleted": {
      const { deleteId } = action;
      
      return draft.filter((item) => item.id !== deleteId);
    }
    case "done": {
      const { id, done } = action;
      const target = draft.find(item => item.id ===id);
      target.done= done;
      // return todos.map((item) => {
      //   if (item.id == id) {
      //     return { ...item, done };
      //   }
      //   return item;
      // });
      break;
    }
    case "reverse": {
      return draft.toReversed();
    }

    default: {
      throw Error("알 수 없는 액션 타입" + action.type);
    }
  }
}
