import { createFileRoute, Link } from "@tanstack/react-router";
import axios from "axios";

type PageParams = {
  page: number;
};

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodo = async (id: number): Promise<Todo> => {
  try {
    const request = await axios.get<Todo>(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
    );
    return request.data;
  } catch (err) {
    if (err instanceof Error || axios.isAxiosError(err)) {
      throw new Error(err.message);
    }

    throw new Error("Unknown error occurred!");
  }
};

export const Route = createFileRoute("/todo/$todo_id")({
  component: TodoItem,
  loader: ({ params }) => getTodo(Number(params.todo_id)),
  errorComponent: ({ error }) => {
    return <div>404: {(error as Error).message}</div>;
  },
  validateSearch: (search: Record<string, unknown>): PageParams => {
    return {
      page: Number(search?.page ?? 1),
    };
  },
});

function TodoItem() {
  const { todo_id } = Route.useParams();
  const { page } = Route.useSearch();
  const data = Route.useLoaderData();

  return (
    <div>
      <h1>Todo ID Index Page: {todo_id}</h1>
      <Link to={"/"}>Home page</Link>
      <Link to={"/todo"}>Todo page</Link>
      <div>Page: {page}</div>
      <p>Title: {data.title}</p>
      <p>Completed: {String(data.completed)}</p>
    </div>
  );
}
