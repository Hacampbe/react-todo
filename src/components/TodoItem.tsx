import { Todo, ToggleTodo } from "../interfaces/Todo";

export default function TodoItem({
  item,
  toggleTodoCompletion,
  deleteTodo,
}: {
  item: Todo;
  toggleTodoCompletion: ToggleTodo;
  deleteTodo: (id: number) => void;
}) {
  return (
    <li key={item.id} className="todoItem">
      <input
        type="checkbox"
        className="taskCheckbox"
        checked={item.isCompleted}
        onChange={() => toggleTodoCompletion(item.id)}
      />
      {item.isCompleted ? (
        <del>
          <p>{item.task}</p>
        </del>
      ) : (
        <p>{item.task}</p>
      )}

      <button
        type="button"
        className="deleteButton"
        onClick={() => deleteTodo(item.id)}
      >
        Delete
      </button>
    </li>
  );
}
