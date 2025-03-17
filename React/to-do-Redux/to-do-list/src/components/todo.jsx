import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/tododslice";

export default function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  return (
    <>
      <h1>Todo List App</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className={`todo-card ${todo.isDone ? "done" : ""}`}>
            <span className="todo-text">{todo.task}</span>
            <div className="todo-actions">
              <button className="done-btn" onClick={() => dispatch(markAsDone(todo.id))}>
                ✅ Done
              </button>
              <button className="delete-btn" onClick={() => dispatch(deleteTodo(todo.id))}>
                ❌ Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
