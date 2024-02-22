import { createFileRoute, Link } from "@tanstack/react-router";
import axios from "axios";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

const fetchTodo = async (id: number): Promise<Todo> => {
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
  component: Todo,
  loader: ({ params }) => fetchTodo(Number(params.todoId)),
  errorComponent: ({ error }) => {
    return <div>404: {(error as Error).message}</div>;
  },
});

function Todo() {
  const { todoId } = Route.useParams();
  const data = Route.useLoaderData();

  return (
    <div>
      <h1>Todo ID: {todoId}</h1>
      <Link to={"/todos"}>Todos Page</Link>
      <p>ID: {data.id}</p>
      <p>Body: {data.todo}</p>
    </div>
  );
}
