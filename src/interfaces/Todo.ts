export interface Todo {
  id: number;
  task: string;
  isCompleted: boolean;
}

export type ToggleTodo = (id: number) => void;
