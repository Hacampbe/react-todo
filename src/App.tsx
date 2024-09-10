import "./styles.css";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";
import { Todo } from "./interfaces/Todo";
import NoTodos from "./components/NoTodos";

function App() {
  const [todo, setTodo] = useState<Todo[]>((() => {
    const savedTodo = localStorage.getItem("todo");
    if (savedTodo) {
      return JSON.parse(savedTodo);
    } else {
      return [];
    }
  }));
  const [nextId, setNextId] = useState(1);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  function addTodo(task: string) {
    setTodo((prevTodoList) => [
      ...prevTodoList,
      { id: nextId, task: task, isCompleted: false },
    ]);

    setNextId(nextId + 1);
  }

  function toggleTodoCompletion(id: number) {
    setTodo((prevTodoList) =>
      prevTodoList.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  }

  function deleteTodo(id: number) {
    setTodo(todo.filter((t) => t.id !== id));
  }

  return (
    <main className="main">
      <div>
        <Header />
        {todo.length === 0 && <NoTodos />}
        <TodoList
          todo={todo}
          toggleTodoCompletion={toggleTodoCompletion}
          deleteTodo={deleteTodo}
        />
      </div>

      <AddTodo addTodo={addTodo} />
    </main>
  );
}

export default App;
