import "./styles.css";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { Todo } from "./interfaces/Todo";

function App() {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [nextId, setNextId] = useState(1);

  function addTodo(task: string) {
    console.log(todo);
    setTodo((prevTodoList) => [
      ...prevTodoList,
      { id: nextId, task: task, isCompleted: false },
    ]);
    
    setNextId(nextId + 1);
  }

  return (
    <main className="main">
      <Header />

      <TodoList todo={todo} />
      <AddTodo addTodo={addTodo} />
    </main>
  );
}

export default App;
