import { createFileRoute } from "@tanstack/react-router";
import axios from "axios";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

const fetchTodo = async (id: number): Promise<Todo> => {
  // Delay
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });

  try {
    const request = await axios.get<Todo>(`https://dummyjson.com/todos/${id}`);
    return request.data;
  } catch (err) {
    if (err instanceof Error || axios.isAxiosError(err)) {
      throw new Error(err.message);
    }

    throw new Error("Unknown error occurred!");
  }
};

export const Route = createFileRoute("/todos/$todoId")({
  loader: ({ params }) => fetchTodo(Number(params.todoId)),
  errorComponent: ({ error }) => {
    return <div>404: {(error as Error).message}</div>;
  },
});
