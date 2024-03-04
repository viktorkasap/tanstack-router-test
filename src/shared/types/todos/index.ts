export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface Todos {
  todos: Todo[];
  total: number;
  skip: number;
  limit: number;
}

export type TodoId = string | number;
