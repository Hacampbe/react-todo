import { useState } from "react";

interface AddTodoProps {
  addTodo: (task: string) => void;
}

export default function AddTodo({ addTodo }: AddTodoProps) {
  const [input, setInput] = useState<string>("");

  function handleAddTodo(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    if (input.trim() !== "") {
      addTodo(input);
      setInput("");
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <footer className="todoForm">
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Write your next todo"
          value={input}
          onChange={handleChange}
          className="todoInput"
        />
        <button type="submit" className="todoButton">+</button>
      </form>
    </footer>
  );
}
