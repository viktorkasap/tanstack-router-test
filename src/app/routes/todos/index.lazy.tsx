import { createFileRoute, Link } from "@tanstack/react-router";

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

export const Route = createFileRoute("/todos/")({
  component: Todos,
  pendingComponent: () => <div>Pending Component Todos ...</div>,
  notFoundComponent: () => <div>Not Found Component Todos ...</div>,
  errorComponent: () => <div>Error Component Todos ...</div>,
});

function Todos() {
  const data = Route.useLoaderData();

  return (
    <div>
      <h1>Todos Index Page</h1>

      <Link to={"/todos/$todoId"} params={{ todoId: "1" }}>
        Todo #1
      </Link>
      {" | "}
      <Link to={"/todos/$todoId"} params={{ todoId: "1" }}>
        Todo #2
      </Link>

      <ul>
        {(data as Todos).todos.map((todo) => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
      </ul>
    </div>
  );
}
