import { createFileRoute, defer } from "@tanstack/react-router";
import axios from "axios";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

interface Todos {
  todos: Todo[];
  total: number;
  skip: number;
  limit: number;
}

const fetchTodos = async (): Promise<Todos> => {
  // Delay
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });

  try {
    const request = await axios.get<Todos>("https://dummyjson.com/todos");
    return request.data;
  } catch (err) {
    if (err instanceof Error || axios.isAxiosError(err)) {
      throw new Error(err.message);
    }

    throw new Error("Unknown error occurred!");
  }
};

export const Route = createFileRoute("/todos/")({
  loader: () => {
    return {
      deferredSlowData: defer(fetchTodos()),
    };
  },
});
