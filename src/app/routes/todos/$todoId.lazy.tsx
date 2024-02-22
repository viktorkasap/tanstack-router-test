import { createFileRoute, Link } from "@tanstack/react-router";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export const Route = createFileRoute("/todos/$todoId")({
  component: Todo,
  pendingComponent: () => <div>Pending Component Todo ...</div>,
  notFoundComponent: () => <div>Not Found Component Todo ...</div>,
  errorComponent: () => <div>Error Component Todo ...</div>,
});

function Todo() {
  const { todoId } = Route.useParams();
  const data = Route.useLoaderData() as Todo;

  return (
    <div>
      <h1>Todo ID: {todoId}</h1>
      <Link to={"/todos"}>Todos Page</Link>
      <p>ID: {data.id}</p>
      <p>Body: {data.todo}</p>
    </div>
  );
}
