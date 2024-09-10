import { Todo, ToggleTodo } from "../interfaces/Todo";
import TodoItem from "./TodoItem";

export default function TodoList({
  todo,
  toggleTodoCompletion,
  deleteTodo,
}: {
  todo: Todo[];
  toggleTodoCompletion: ToggleTodo;
  deleteTodo: (id: number) => void;
}) {
  return (
    <section className="todoListSection">
      <ul>
        {todo.map((item) => (
          <TodoItem
            toggleTodoCompletion={toggleTodoCompletion}
            deleteTodo={deleteTodo}
            item={item}
            key={item.id}
          />
        ))}
      </ul>
    </section>
  );
}
